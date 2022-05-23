# A browser extension to re-order comments in a Github issue page based on their reactions

Github issues provides many answers and insights to problems that you can encounter with open source software. 
But comments inside issues are ordered in reply time only.
Therefore you need to spend so much time to find which answer is more useful than others since some question may include hundreds of comments.

One way people can upvote/downvote comments are via reactions. In this extension issue comments are re-ordered according to the reactions they got. 
Thus you could save so much time finding relevant answers to your problems.

## How it works
![reactions-for-github-issues-explain](https://user-images.githubusercontent.com/38760332/169728520-dacb7aa9-25b1-4e4d-b7b7-569e7792f2f9.gif)

## Installation
Chrome Webstore and Add-ons for Firefox soon. 

For now you can try this extension for Google Chrome with the development steps explained below.

## How to use
Clone this repo and follow the development steps explained below.

## Used techonologies
1- HTML Custom Elements: Reusable Web Components (to eliminate code repetition)

2- Webpack

3- Babel

4- Eslint

## Browser Support List
Chrome for now. Firefox support is planned.

## Development
1. Clone / Fork this repo
2. Install the dependencies with npm install
3. Run "npm run dev" to start webpack development run, this will build the project into dist folder.
4. Visit chrome://extensions in your browser
5. Enable developer mode
6. Click load unpacked and select dist folder in the prompt that is displayed
7. The extension should now be loaded, go to a Github issue page and see the project in action

Also whenever you make changes to the extension code, go back to the Extensions page (chrome://extensions) and click the reload link (circle arrow) under the extension entry. Otherwise you changes will not be updated in the extension.

## Optimizing Emoji Weights

You can also optimize your desired emoji weights in extension popup.

![popup](https://user-images.githubusercontent.com/38760332/169729471-bc4bcb6f-81fb-43ce-9c33-58a3f9861419.png)

## Acknowledgements & Disclaimer
This project is not affiliated with, sponsored by, or endorsed by GitHub Inc.

This project uses emojis designed by <a href="https://openmoji.org/">OpenMoji</a> – the open-source emoji and icon project. License: <a href="https://creativecommons.org/licenses/by-sa/4.0/#"> CC BY-SA 4.0

## Contributions
Feel free to share, fork and create PRs

## License
MIT
