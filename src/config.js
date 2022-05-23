const config = {
  github: {
    githubIssueCommentsClassName: 'js-timeline-item',
    githubIssueQuestionClassName: 'js-command-palette-issue-body',
    githubIssueReactionsClassName: 'social-reaction-summary-item',
    loadButtonInnerText: 'Load More',
    loadButtonTextWhileLoading: 'Loading',
  },
  inline: {
    orderReactionsButtonInnerText: 'Show Comments Ordered by Reaction',
    buttonTextWhileCommentReorderingLoading: 'Comment Ordering Loading...',
    showOriginalOrderOfCommentsText: 'Hide Comments Ordered by Reaction',
    showOrderedButtonId: 'showOrderedButton',
    showOrderedButtonDivId: 'showOrderedButtonDiv',
    orderedCommentsContainerId: 'orderedCommentsContainer',
    unorderedCommentsContainerId: 'unorderedCommentsContainer',
  },
  initialWeights: {
    THUMBS_UP: 0.9,
    HOORAY: 0.7,
    HEART: 0.8,
    ROCKET: 0.9,
    LAUGH: 0.5,
    CONFUSED: -0.1,
    EYES: -0.1,
    THUMBS_DOWN: -1.0,
  },
};

export default config;
