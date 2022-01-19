let reactionWeights = {};

// Refreshes the current tab by clicking the Refresh button in popup page
const popupMenuRefreshButton = document.getElementById('refresh');
if (popupMenuRefreshButton) {
  popupMenuRefreshButton.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    });
  };
}

export const initialWeights = {
  THUMBS_UP: 0.9,
  HOORAY: 0.7,
  HEART: 0.8,
  ROCKET: 0.9,
  LAUGH: 0.5,
  CONFUSED: -0.1,
  EYES: -0.1,
  THUMBS_DOWN: -1.0,
};

export function getStorageData(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (result) => (
      chrome.runtime.lastError
        ? reject(Error(chrome.runtime.lastError.message))
        : resolve(result)
    ));
  });
}

export function setStorageData(key, value) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set(
      {
        [key]: value,
      },
      () => (chrome.runtime.lastError
        ? reject(Error(chrome.runtime.lastError.message))
        : resolve()),
    );
  });
}

export async function getOneReactionWeightFromStorage(key) {
  const weight = await getStorageData(key);

  if (weight[key] != null) {
    return weight[key];
  }
  // If no weight data is present in the storage (in the first run maybe) set it to initial value.
  setStorageData(key, initialWeights[key]);
  return initialWeights[key];
}

export async function getAllReactionWeightsFromStorage() {
  const weights = {};
  for (const [key, value] of Object.entries(initialWeights)) {
    const weight = await getStorageData(key);

    const wValue = weight[key] ?? value;
    weights[key] = wValue;
    if (!weight[key]) setStorageData(key, value);
  }
  return weights;
}

export function countReactionsTotalWeight(comment) {
  let totalWeight = 0;
  let reactionCount;
  const reactions = comment.querySelectorAll('button.reaction-summary-item');
  /* For each reaction calculate its count*weight and
  add it to total reaction count for this comment
  */
  reactions.forEach((el) => {
    // Get the reaction weigth for this reaction, e.g. THUMBS_UP = 1 point
    // Values on DOM is like: "THUMBS_UP react" so split it and get its first part
    // Then find its weight at the reactionWeights array.
    const weight = reactionWeights[el.value.split(' ')[0]] ?? 0;
    // Add it to the total count for this comment
    // reaction counts is like: "👍\n9" split it and get its first part
    [, reactionCount] = el.innerText.split('\n');

    if (Number.isInteger(parseInt(reactionCount, 10))) {
      totalWeight += weight * parseInt(reactionCount, 10);
    }
  });
  return totalWeight;
}

getAllReactionWeightsFromStorage().then((weights) => {
  reactionWeights = weights;
});

export function orderComments(comments) {
  const orderedComments = [];

  comments.forEach((el) => {
    orderedComments.push(el);
  });

  /* Sort ordered comments by their reaction points */
  orderedComments.sort((a, b) => countReactionsTotalWeight(b) - countReactionsTotalWeight(a));

  return orderedComments;
}
