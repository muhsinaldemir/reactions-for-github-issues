(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=I(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?m:d,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",m="completed",p={};function y(){}function v(){}function g(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&n.call(x,i)&&(b=x);var C=g.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return v.prototype=g,c(C,"constructor",g),c(g,"constructor",v),v.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},E(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(C),c(C,u,"Generator"),c(C,i,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function u(e){t(a,o,i,u,c,"next",e)}function c(e){t(a,o,i,u,c,"throw",e)}u(void 0)}))}}var n=r(757),o=r.n(n);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function u(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const s={githubIssueCommentsClassName:"js-timeline-item",githubIssueQuestionClassName:"js-command-palette-issue-body",githubIssueReactionsClassName:"social-reaction-summary-item",loadButtonInnerText:"Load More",loadButtonTextWhileLoading:"Loading"},l={orderReactionsButtonInnerText:"Show Comments Ordered by Reaction",buttonTextWhileCommentReorderingLoading:"Comment Ordering Loading...",showOriginalOrderOfCommentsText:"Hide Comments Ordered by Reaction",showOrderedButtonId:"showOrderedButton",showOrderedButtonDivId:"showOrderedButtonDiv",orderedCommentsContainerId:"orderedCommentsContainer",unorderedCommentsContainerId:"unorderedCommentsContainer"},f={THUMBS_UP:.9,HOORAY:.7,HEART:.8,ROCKET:.9,LAUGH:.5,CONFUSED:-.1,EYES:-.1,THUMBS_DOWN:-1};var d,h,m=document.getElementById("refresh");function p(t,e,r){chrome.runtime.lastError?e(Error(chrome.runtime.lastError.message)):t(r)}function y(t){return new Promise((function(e,r){chrome.storage.sync.get(t,(function(t){return p(e,r,t)}))}))}function v(t,e){return new Promise((function(r,n){chrome.storage.sync.set(function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},t,e),p(r,n,e))}))}function g(){return b.apply(this,arguments)}function b(){return(b=e(o().mark((function t(){var e,r,n,i,a,u,s,l,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={},r=0,n=Object.entries(f);case 2:if(!(r<n.length)){t.next=13;break}return a=c(n[r],2),u=a[0],s=a[1],t.next=6,y(u);case 6:l=t.sent,d=null!==(i=l[u])&&void 0!==i?i:s,e[u]=d,l[u]||v(u,s);case 10:r++,t.next=2;break;case 13:return t.abrupt("return",e);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){var r=0;return e.querySelectorAll(".".concat(s.githubIssueReactionsClassName)).forEach((function(e){var n,o=null!==(n=t[e.value.split(" ")[0]])&&void 0!==n?n:0,i=c(e.innerText.split("\n"),2)[1];Number.isInteger(parseInt(i,10))&&(r+=o*parseInt(i,10))})),r}function x(t){return C.apply(this,arguments)}function C(){return(C=e(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u(e),t.next=3,g();case 3:return n=t.sent,r.sort((function(t,e){return w(n,e)-w(n,t)})),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m&&(m.onclick=function(){chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.update(t[0].id,{url:t[0].url})}))});var E=!1,O=document.createElement("button");O.id=l.showOrderedButtonId,O.innerText=l.orderReactionsButtonInnerText;var I=document.createElement("div");I.id=l.showOrderedButtonDivId,I.appendChild(O);var L=document.querySelector(".".concat(s.githubIssueQuestionClassName));L&&L.insertAdjacentElement("afterend",I);var T=null===(d=document.querySelectorAll(".".concat(s.githubIssueCommentsClassName))[0])||void 0===d?void 0:d.parentNode;T&&(T.id=l.unorderedCommentsContainerId);var S=document.createElement("div");function j(){document.querySelector("#".concat(l.orderedCommentsContainerId)).hidden=!1,O.innerText=l.showOriginalOrderOfCommentsText,document.querySelector("#".concat(l.unorderedCommentsContainerId)).hidden=!0}function A(){return(A=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelectorAll(".".concat(s.githubIssueCommentsClassName)),t.next=3,x(e);case 3:t.sent.forEach((function(t){return S.appendChild(t.cloneNode(!0))})),T.parentNode.insertBefore(S,T),j();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}S.id=l.orderedCommentsContainerId,S.hidden=!0,O.addEventListener("click",(function(){E?document.querySelector("#".concat(l.orderedCommentsContainerId)).hidden?j():(clearTimeout(h),S.hidden=!0,document.querySelector("#".concat(l.unorderedCommentsContainerId)).hidden=!1,O.innerText=l.orderReactionsButtonInnerText):(O.innerText=l.buttonTextWhileCommentReorderingLoading,h=setInterval((function(){var t=Array.from(document.querySelectorAll('button[type="submit"]')).find((function(t){return t.textContent.includes(s.loadButtonInnerText)})),e=Array.from(document.querySelectorAll('button[type="submit"]')).find((function(t){return t.textContent.includes(s.loadButtonTextWhileLoading)}));t&&t.click(),t||e||(E=!0,clearTimeout(h),function(){A.apply(this,arguments)}())}),400))}))})()})();