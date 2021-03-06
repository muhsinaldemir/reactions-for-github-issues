import config from './config.js';

// Refreshes the current tab by clicking the Refresh button in popup page
const popupMenuRefreshButton = document.getElementById('refresh');
if (popupMenuRefreshButton) {
  popupMenuRefreshButton.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    });
  };
}

function handleStorageData(onSuccess, onError, result) {
  chrome.runtime.lastError
    ? onError(Error(chrome.runtime.lastError.message))
    : onSuccess(result);
}

export function getStorageData(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (result) => (
      handleStorageData(resolve, reject, result)
    ));
  });
}

export function setStorageData(key, value) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set(
      { [key]: value },
      handleStorageData(resolve, reject, value),
    );
  });
}

export async function getOneReactionWeightFromStorage(key) {
  const weight = await getStorageData(key);

  if (weight[key] != null) {
    return weight[key];
  }
  // If no weight data is present in the storage (in the first run maybe) set it to initial value.
  return setStorageData(key, config.initialWeights[key]);
}

export async function getAllReactionWeightsFromStorage() {
  const weights = {};
  for (const [key, value] of Object.entries(config.initialWeights)) {
    const weight = await getStorageData(key);

    const wValue = weight[key] ?? value;
    weights[key] = wValue;
    if (!weight[key]) setStorageData(key, value);
  }
  return weights;
}

export function countReactionsTotalWeight(reactionWeights, comment) {
  let totalWeight = 0;
  const reactions = comment.querySelectorAll(`.${config.github.githubIssueReactionsClassName}`);
  /* For each reaction calculate its count*weight and
  add it to total reaction count for this comment
  */
  reactions.forEach((el) => {
    // Get the reaction weigth for this reaction, e.g. THUMBS_UP = 1 point
    // Values on DOM is like: "THUMBS_UP react" so split it and get its first part
    // Then find its weight at the reactionWeights array.
    const weight = reactionWeights[el.value.split(' ')[0]] ?? 0;
    // Add it to the total count for this comment
    // reaction counts is like: "????\n9" split it and get its first part
    const [, reactionCount] = el.innerText.split('\n');

    if (Number.isInteger(parseInt(reactionCount, 10))) {
      totalWeight += weight * parseInt(reactionCount, 10);
    }
  });
  return totalWeight;
}

export async function orderComments(comments) {
  const orderedComments = [...comments];
  const reactionWeights = await getAllReactionWeightsFromStorage();
  /* Sort ordered comments by their reaction points */
  orderedComments.sort(
    (a, b) => countReactionsTotalWeight(reactionWeights, b) - countReactionsTotalWeight(reactionWeights, a),
  );
  return orderedComments;
}

/* element: Element we want to create, cannot be empty and should be of type string: i.e 'div' or 'span'
parent: the parent element we want this element to be in, should be of type HtmlElement and can be null/undefined
options: the options/attributes and eventlisteners we want the newly created element to have, can be null/undefined,
if provided; should be of type object options= {properties: { key: value}, eventListeners: { event: fn}}
return value: created element */

export function createElement(element, parent, options) {
  if (!element || typeof element !== 'string') return undefined;

  const newElement = document.createElement(element);

  if (parent) parent.appendChild(newElement);

  if (options && typeof options === 'object') {
    const { properties, eventListeners } = options;

    if (eventListeners) {
      Object.entries(eventListeners).forEach(
        ([key, value]) => newElement.addEventListener(key, value),
      );
    }

    if (properties) {
      Object.entries(properties).forEach(
        ([key, value]) => newElement.setAttribute(key, value),
      );
    }
  }
  return newElement;
}
