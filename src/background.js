// To show popup only on github.com
chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'github.com', schemes: ['https'] },
    }),
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()],
  }]);
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  const regex = /(http|https):\/\/(www\.)?github\.com\/.+\/.+\/issues\/\d+/;
  if ((details.url).match(regex)) {
    chrome.tabs.executeScript(null, { file: 'commentOrderButton.js' }, () => chrome.runtime.lastError);
  }
});
