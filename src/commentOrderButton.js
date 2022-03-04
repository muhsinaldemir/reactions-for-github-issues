import { orderComments } from './utils.js';
import config from './config.js';

let timer;
let isAllCommentsOrdered = false;

// Creating a show ordered button and its enclosing div
const showOrderedButton = document.createElement('button');
showOrderedButton.id = config.inline.showOrderedButtonId;
showOrderedButton.innerText = config.inline.orderReactionsButtonInnerText;
const showOrderedButtonDiv = document.createElement('div');
showOrderedButtonDiv.id = config.inline.showOrderedButtonDivId;
showOrderedButtonDiv.appendChild(showOrderedButton);

// Add show ordered button below the issue question
const question = document.querySelector(`.${config.github.githubIssueCommentsClassName}`);
if (question) {
  question.insertAdjacentElement('afterend', showOrderedButtonDiv);
}

// Group original question ordering in a container
const unorderedCommentsContainer = document.querySelectorAll(`.${config.github.githubIssueCommentsClassName}`)[0]?.parentNode;
if (unorderedCommentsContainer) {
  unorderedCommentsContainer.id = config.inline.unorderedCommentsContainerId;
}

// Create a new element that will hold ordered comments
const orderedCommentsContainer = document.createElement('div');
orderedCommentsContainer.id = config.inline.orderedCommentsContainerId;
orderedCommentsContainer.hidden = true;

// Function to show ordered comments on DOM
function showOrderedComments() {
  document.querySelector(`#${config.inline.orderedCommentsContainerId}`).hidden = false;
  showOrderedButton.innerText = config.inline.showOriginalOrderOfCommentsText;
  document.querySelector(`#${config.inline.unorderedCommentsContainerId}`).hidden = true;
}

// Function to show comments in their original order on DOM
function showUnorderedComments() {
  orderedCommentsContainer.hidden = true;
  document.querySelector(`#${config.inline.unorderedCommentsContainerId}`).hidden = false;
  showOrderedButton.innerText = config.inline.orderReactionsButtonInnerText;
}

async function placeOrderedCommentsOnDom() {
  const comments = document.querySelectorAll(`.${config.github.githubIssueCommentsClassName}`);
  const orderedComments = await orderComments(comments);
  // Copy contents of orderedComments into orderedCommentsContainer
  orderedComments.forEach((el) => orderedCommentsContainer.appendChild(el.cloneNode(true)));

  // Place orderedCommentsContainer on DOM
  unorderedCommentsContainer.parentNode.insertBefore(
    orderedCommentsContainer,
    unorderedCommentsContainer,
  );
  showOrderedComments();
}

function getAllComments() {
  /* When we initate Load more call it takes some time to fetch all of the comments
      To let user know we are working on it change our button name
    */
  showOrderedButton.innerText = config.inline.buttonTextWhileCommentReorderingLoading;

  timer = setInterval(() => {
    // find the load more button on DOM
    const loadMoreButton = Array.from(
      document.querySelectorAll('button[type="submit"]'),
    ).find((el) => el.textContent.includes(config.github.loadButtonInnerText));
      // When "Load More..."" button is clicked its textContent turns into "Loading..."
      // It is important to catch the right button so we check for both of these conditions
    const loadMoreButtonWhenLoading = Array.from(
      document.querySelectorAll('button[type="submit"]'),
    ).find((el) => el.textContent.includes(config.github.loadButtonTextWhileLoading));

    if (loadMoreButton) {
      loadMoreButton.click();
    }

    // Since there's no Load More and Loading buttons it means that all comments are expanded.
    if (!loadMoreButton && !loadMoreButtonWhenLoading) {
      isAllCommentsOrdered = true;
      clearTimeout(timer);
      placeOrderedCommentsOnDom();
    }
  }, 400);
}

showOrderedButton.addEventListener('click', () => {
  /*  Github does not render all issue comments at once if there are lots of them.
        It adds a "Load More..." button like a pagination. For our use case we need to get all
        issue comments so we need to click that button, let Github fetch them and expand it.
  */
  if (!isAllCommentsOrdered) {
    getAllComments();
    return;
  }

  if (document.querySelector(`#${config.inline.orderedCommentsContainerId}`).hidden) {
    showOrderedComments();
  } else {
    /* Timer is cleared when there's no "Load more..." buttons
        but clear it here again just in case if some node ids or classes are changed in DOM and we
        fail cause setInterval() functions with small time intervals are expensive
      */
    clearTimeout(timer);
    showUnorderedComments();
  }
});
