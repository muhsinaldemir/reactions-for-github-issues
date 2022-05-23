import config from"./config.js";const popupMenuRefreshButton=document.getElementById("refresh");function handleStorageData(t,e,r){chrome.runtime.lastError?e(Error(chrome.runtime.lastError.message)):t(r)}popupMenuRefreshButton&&(popupMenuRefreshButton.onclick=()=>{chrome.tabs.query({active:!0,currentWindow:!0},(t=>{chrome.tabs.update(t[0].id,{url:t[0].url})}))});export function getStorageData(t){return new Promise(((e,r)=>{chrome.storage.sync.get(t,(t=>handleStorageData(e,r,t)))}))}export function setStorageData(t,e){return new Promise(((r,o)=>{chrome.storage.sync.set({[t]:e},handleStorageData(r,o,e))}))}export async function getOneReactionWeightFromStorage(t){const e=await getStorageData(t);return null!=e[t]?e[t]:setStorageData(t,config.initialWeights[t])}export async function getAllReactionWeightsFromStorage(){const t={};for(const[e,r]of Object.entries(config.initialWeights)){const o=await getStorageData(e),n=o[e]??r;t[e]=n,o[e]||setStorageData(e,r)}return t}export function countReactionsTotalWeight(t,e){let r=0;return e.querySelectorAll(`.${config.github.githubIssueReactionsClassName}`).forEach((e=>{const o=t[e.value.split(" ")[0]]??0,[,n]=e.innerText.split("\n");Number.isInteger(parseInt(n,10))&&(r+=o*parseInt(n,10))})),r}export async function orderComments(t){const e=[...t],r=await getAllReactionWeightsFromStorage();return e.sort(((t,e)=>countReactionsTotalWeight(r,e)-countReactionsTotalWeight(r,t))),e}export function createElement(t,e,r){if(!t||"string"!=typeof t)return;const o=document.createElement(t);if(e&&e.appendChild(o),r&&"object"==typeof r){const{properties:t,eventListeners:e}=r;e&&Object.entries(e).forEach((([t,e])=>o.addEventListener(t,e))),t&&Object.entries(t).forEach((([t,e])=>o.setAttribute(t,e)))}return o}