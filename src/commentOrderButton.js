import { orderComments } from './utils.js';

let timer;
let isAllCommentsOrdered = false;

// Creating a show ordered button and its enclosing div
const showOrderedButton = document.createElement('button');
showOrderedButton.id = 'showOrderedButton';
showOrderedButton.innerText = 'Show Comments Ordered by Reaction';
const showOrderedButtonDiv = document.createElement('div');
showOrderedButtonDiv.id = 'showOrderedButtonDiv';
showOrderedButtonDiv.appendChild(showOrderedButton);

// Add show ordered button below the issue question
const question = document.querySelector('.js-comment-container');
if (question) {
  question.insertAdjacentElement('afterend', showOrderedButtonDiv);
}

// Group original question ordering in a container
const unorderedCommentsContainer = document.querySelectorAll('.js-timeline-item')[0]?.parentNode;
if (unorderedCommentsContainer) {
  unorderedCommentsContainer.id = 'unorderedCommentsContainer';
}

// Create a new element that will hold ordered comments
const orderedCommentsContainer = document.createElement('div');
orderedCommentsContainer.id = 'orderedCommentsContainer';
orderedCommentsContainer.hidden = true;

// Function to show ordered comments on DOM
function showOrderedComments() {
  document.querySelector('#orderedCommentsContainer').hidden = false;
  showOrderedButton.innerText = 'Hide Comments Ordered by Reaction';
  document.querySelector('#unorderedCommentsContainer').hidden = true;
}

// Function to show comments in their original order on DOM
function showUnorderedComments() {
  orderedCommentsContainer.hidden = true;
  document.querySelector('#unorderedCommentsContainer').hidden = false;
  showOrderedButton.innerText = 'Show Comments Ordered by Reaction';
}

function placeOrderedCommentsOnDom() {
  const comments = document.querySelectorAll('.js-timeline-item');
  const orderedComments = orderComments(comments);

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
  showOrderedButton.innerText = 'Comment Ordering Loading...';

  timer = setInterval(() => {
    // find the load more button on DOM
    const loadMoreButton = Array.from(
      document.querySelectorAll('button[type="submit"]'),
    ).find((el) => el.textContent.includes('Load more'));
      // When "Load More..."" button is clicked its textContent turns into "Loading..."
      // It is important to catch the right button so we check for both of these conditions
    const loadMoreButtonWhenLoading = Array.from(
      document.querySelectorAll('button[type="submit"]'),
    ).find((el) => el.textContent.includes('Loading'));

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

  if (document.querySelector('#orderedCommentsContainer').hidden) {
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
