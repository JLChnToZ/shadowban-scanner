// ==UserScript==
// @name         Shadowban Scanner (ja)
// @namespace    https://github.com/Robot-Inventor/shadowban-scanner/
// @version      2.0.0
// @description  Twitterのシャドウバンを検出する拡張機能です。
// @author       Robot-Inventor (ろぼいん / @keita_roboin)
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @icon         https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/src/image/icon128.png
// @downloadURL  https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/ja.user.js
// @updateURL    https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/ja.user.js
// @grant        none
// ==/UserScript==

(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),s=n.n(r),o=n(645),i=n.n(o)()(s());i.push([e.id,".shadowban-scanner-message {\n    padding: 1em;\n    border-radius: 0.5em;\n    background: rgb(255, 0, 0, 0.2);\n    margin: 1em 0;\n}\n\n.shadowban-scanner-message .twemoji {\n    height: 1em;\n    width: 1em;\n    margin-right: 0.25em;\n    vertical-align: middle;\n}\n\n.shadowban-scanner-message-no-problem {\n    background: rgb(0, 255, 0, 0.2);\n}\n\n.shadowban-scanner-message button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    background: none;\n}\n\n.shadowban-scanner-message .shadowban-scanner-collapsed-content {\n    display: none;\n}\n\n.shadowban-scanner-message ul {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0.75rem 0 0 0;\n    padding: 0;\n}\n\n.shadowban-scanner-message ul li {\n    list-style: none;\n}\n\n.shadowban-scanner-message-note {\n    opacity: 0.8;\n    font-size: 0.8em;\n    margin-top: 0.75em;\n}\n\n.shadowban-scanner-message-note + .shadowban-scanner-message-note {\n    margin-top: 0.5em;\n}\n\n.shadowban-scanner-message-note a {\n    color: inherit;\n}\n\n[data-sb-translation] {\n    display: inline-block;\n    min-width: 15em;\n    min-height: 1em;\n    border-radius: 0.25em;\n    background-image: linear-gradient(90deg, transparent 40%, rgba(175, 175, 175, 0.7) 80%, transparent 100%);\n    background-size: 200% 100%;\n    animation: loading-animation 1.5s linear infinite;\n}\n\n@keyframes loading-animation {\n    0% {\n        background-position: 200% 0%;\n        opacity: 1;\n    }\n    100% {\n        background-position: 0% 0%;\n        opacity: 1;\n    }\n}\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},962:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(379),s=n.n(r),o=n(795),i=n.n(o),a=n(569),c=n.n(a),p=n(565),l=n.n(p),d=n(609),h=n.n(d),u=n(589),m=n.n(u),f=n(402),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=h(),s()(f.Z,b);const y=f.Z&&f.Z.locals?f.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],a=0;a<e.length;a++){var c=e[a],p=r.base?c[0]+r.base:c[0],l=o[p]||0,d="".concat(p," ").concat(l);o[p]=l+1;var h=n(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var m=s(u,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var o=r(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var a=n(o[i]);t[a].references--}for(var c=r(e,s),p=0;p<o.length;p++){var l=n(o[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},609:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},725:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isProfileReactPropsData=t.isFocalTweetOuterReactPropsData=t.isTweetOuterReactPropsData=t.isMenuBarReactPropsData=void 0,t.isMenuBarReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&(null!==t.children[1]&&"object"==typeof t.children[1]||"function"==typeof t.children[1])&&(null!==t.children[1].props&&"object"==typeof t.children[1].props||"function"==typeof t.children[1].props)&&(null!==t.children[1].props.retweetWithCommentLink&&"object"==typeof t.children[1].props.retweetWithCommentLink||"function"==typeof t.children[1].props.retweetWithCommentLink)&&(null!==t.children[1].props.retweetWithCommentLink.state&&"object"==typeof t.children[1].props.retweetWithCommentLink.state||"function"==typeof t.children[1].props.retweetWithCommentLink.state)&&(null!==t.children[1].props.retweetWithCommentLink.state.quotedStatus&&"object"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus||"function"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus)&&(void 0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||null===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!1===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive)&&(void 0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||null===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!1===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable)&&(null!==t.children[1].props.retweetWithCommentLink.state.quotedStatus.user&&"object"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus.user||"function"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus.user)&&(void 0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||null===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!1===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive)&&"string"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.screen_name&&(""===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"sensitive_media"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"fake_account"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"offensive_profile_content"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"timeout"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type)},t.isTweetOuterReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&Array.isArray(t.children[0])&&(null!==t.children[0][1]&&"object"==typeof t.children[0][1]||"function"==typeof t.children[0][1])&&(null!==t.children[0][1].props&&"object"==typeof t.children[0][1].props||"function"==typeof t.children[0][1].props)&&Array.isArray(t.children[0][1].props.children)&&(null!==t.children[0][1].props.children[0]&&"object"==typeof t.children[0][1].props.children[0]||"function"==typeof t.children[0][1].props.children[0])&&(null!==t.children[0][1].props.children[0].props&&"object"==typeof t.children[0][1].props.children[0].props||"function"==typeof t.children[0][1].props.children[0].props)&&Array.isArray(t.children[0][1].props.children[0].props.children)&&(null!==t.children[0][1].props.children[0].props.children[1]&&"object"==typeof t.children[0][1].props.children[0].props.children[1]||"function"==typeof t.children[0][1].props.children[0].props.children[1])&&(null!==t.children[0][1].props.children[0].props.children[1].props&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props||"function"==typeof t.children[0][1].props.children[0].props.children[1].props)&&Array.isArray(t.children[0][1].props.children[0].props.children[1].props.children)&&Array.isArray(t.children[0][1].props.children[0].props.children[1].props.children[1])&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2]&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2]||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2])&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2].props&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props)&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser)&&"string"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser.screen_name},t.isFocalTweetOuterReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&Array.isArray(t.children[0])&&(null!==t.children[0][1]&&"object"==typeof t.children[0][1]||"function"==typeof t.children[0][1])&&(null!==t.children[0][1].props&&"object"==typeof t.children[0][1].props||"function"==typeof t.children[0][1].props)&&Array.isArray(t.children[0][1].props.children)&&(null!==t.children[0][1].props.children[0]&&"object"==typeof t.children[0][1].props.children[0]||"function"==typeof t.children[0][1].props.children[0])&&(null!==t.children[0][1].props.children[0].props&&"object"==typeof t.children[0][1].props.children[0].props||"function"==typeof t.children[0][1].props.children[0].props)&&Array.isArray(t.children[0][1].props.children[0].props.children)&&(null!==t.children[0][1].props.children[0].props.children[2]&&"object"==typeof t.children[0][1].props.children[0].props.children[2]||"function"==typeof t.children[0][1].props.children[0].props.children[2])&&(null!==t.children[0][1].props.children[0].props.children[2].props&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props||"function"==typeof t.children[0][1].props.children[0].props.children[2].props)&&Array.isArray(t.children[0][1].props.children[0].props.children[2].props.children)&&(null!==t.children[0][1].props.children[0].props.children[2].props.children[6]&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6]||"function"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6])&&(null!==t.children[0][1].props.children[0].props.children[2].props.children[6].props&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props||"function"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props)&&(null!==t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser||"function"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser)&&"string"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser.screen_name},t.isProfileReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&(null!==t.children[1]&&"object"==typeof t.children[1]||"function"==typeof t.children[1])&&(null!==t.children[1].props&&"object"==typeof t.children[1].props||"function"==typeof t.children[1].props)&&(null!==t.children[1].props.user&&"object"==typeof t.children[1].props.user||"function"==typeof t.children[1].props.user)&&(null===t.children[1].props.user.possibly_sensitive||!1===t.children[1].props.user.possibly_sensitive||!0===t.children[1].props.user.possibly_sensitive)}},216:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ALLOWED_TWEMOJI=t.NO_PROBLEM_CLASS_NAME=t.TWEMOJI_ATTRIBUTE=t.TRANSLATION_ATTRIBUTE=t.COLLAPSED_CONTENT_CLASS_NAME=t.MESSAGE_NOTE_CLASS_NAME=t.MESSAGE_CLASS_NAME=t.EVENT_GENERATOR_SETTINGS_ATTRIBUTE=t.EVENT_GENERATOR_ID=t.CHECKED_DATA_ATTRIBUTE=void 0,t.CHECKED_DATA_ATTRIBUTE="data-shadowban-checked",t.EVENT_GENERATOR_ID="shadowban-scanner-event-generator",t.EVENT_GENERATOR_SETTINGS_ATTRIBUTE="data-sb-settings",t.MESSAGE_CLASS_NAME="shadowban-scanner-message",t.MESSAGE_NOTE_CLASS_NAME="shadowban-scanner-message-note",t.COLLAPSED_CONTENT_CLASS_NAME="shadowban-scanner-collapsed-content",t.TRANSLATION_ATTRIBUTE="data-sb-translation",t.TWEMOJI_ATTRIBUTE="data-sb-enable-twemoji",t.NO_PROBLEM_CLASS_NAME="shadowban-scanner-message-no-problem",t.ALLOWED_TWEMOJI=["✅","🚫","⚠️"]},238:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_SETTINGS=void 0,t.DEFAULT_SETTINGS={alwaysDetailedView:!1,enableOnlyForCurrentUsersTweets:!1,hasDisplayedV2UpdateBanner:!1,showMessagesInUnproblematicTweets:!1,showNotesInMessages:!0}},983:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Translator=void 0;const r=n(216);class s{constructor(e){this.translationFunction=e}static convertEmojiToTwemoji(e){let t=e;for(const e of r.ALLOWED_TWEMOJI){const n=`<img src="https://abs-0.twimg.com/emoji/v2/svg/${[...e].map((e=>e.codePointAt(0)?.toString(16))).join("-")}.svg" alt="${e}" class="twemoji">`;t=t.replaceAll(e,n)}return t}translateElements(){document.querySelectorAll(`[${r.TRANSLATION_ATTRIBUTE}]`).forEach((e=>{const t=e.getAttribute(r.TRANSLATION_ATTRIBUTE),n=this.translationFunction(t);e.hasAttribute(r.TWEMOJI_ATTRIBUTE)?e.innerHTML=s.convertEmojiToTwemoji(n):e.innerHTML=n,e.removeAttribute(r.TRANSLATION_ATTRIBUTE)}))}}t.Translator=s},564:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Core=void 0;const r=n(216),s=n(186),o=n(338);t.Core=class{constructor(e,t){this.OBSERVER_OPTIONS={childList:!0,subtree:!0},this.settings=e,this.onMessageCallback=t;const n=new MutationObserver((()=>{this.timelineObserverCallback()})),r=new MutationObserver((()=>{const e=document.querySelector("main");e&&(r.disconnect(),n.observe(e,this.OBSERVER_OPTIONS))}));r.observe(document.body,this.OBSERVER_OPTIONS)}timelineObserverCallback(){const e=document.querySelectorAll(`[data-testid="tweet"]:not([${r.CHECKED_DATA_ATTRIBUTE}]`);for(const t of e)new o.TweetChecker(t,this.settings).run(),this.onMessageCallback();const t=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${r.CHECKED_DATA_ATTRIBUTE}])`);t&&(new s.ProfileChecker(t).run(),this.onMessageCallback())}}},801:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;const r=n(216);class s{constructor(e){this.isExpanded=!1,this.container=document.createElement("div"),this.container.classList.add(r.MESSAGE_CLASS_NAME),this.container.style.color=s.getTextColor();const t=document.createElement("span");t.setAttribute(r.TRANSLATION_ATTRIBUTE,e),this.container.appendChild(t),this.expandButton=this.addButton()}static getTextColor(){const e=["[data-testid='User-Name'] div:first-child span","[data-testid='UserName'] div:first-child span","[data-testid='tweetText']"].join(","),t=document.querySelector(e);if(!t)throw new Error("Failed to get user name span of tweet");const{color:n}=getComputedStyle(t);return n}addButton(){const e=document.createElement("button");return e.setAttribute(r.TRANSLATION_ATTRIBUTE,"showMore"),e.addEventListener("click",(()=>{e.remove(),this.container.querySelectorAll(`.${r.COLLAPSED_CONTENT_CLASS_NAME}`).forEach((e=>{e.classList.remove(r.COLLAPSED_CONTENT_CLASS_NAME)})),this.isExpanded=!0})),this.container.appendChild(e),e}expand(){this.expandButton.click()}addDetails(e){const t=document.createElement("ul");this.isExpanded||t.classList.add(r.COLLAPSED_CONTENT_CLASS_NAME);for(const n of e){const e=document.createElement("li");e.setAttribute(r.TRANSLATION_ATTRIBUTE,n),e.setAttribute(r.TWEMOJI_ATTRIBUTE,"true"),t.appendChild(e)}this.container.appendChild(t)}addNotes(e){const t=document.createDocumentFragment();for(const n of e){const e=document.createElement("div");e.classList.add(r.MESSAGE_NOTE_CLASS_NAME),e.setAttribute(r.TRANSLATION_ATTRIBUTE,n),this.isExpanded||e.classList.add(r.COLLAPSED_CONTENT_CLASS_NAME),t.appendChild(e)}this.container.appendChild(t)}getContainer(){return this.container}get isAlert(){return!this.container.classList.contains(r.NO_PROBLEM_CLASS_NAME)}set isAlert(e){this.container.classList.toggle(r.NO_PROBLEM_CLASS_NAME,!e)}}t.Message=s},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageSummary=void 0,t.MessageSummary=class{static fromTweetStatus(e){return e.user.possiblySensitive||e.user.sensitiveMediaInProfile||e.tweet.possiblySensitive?e.user.possiblySensitive||e.user.sensitiveMediaInProfile?e.tweet.possiblySensitive?e.tweet.possiblySensitiveEditable?"accountShadowbannedAndTweetFlaggedAsSensitive":"accountAndTweetShadowbanned":"accountShadowbanned":e.tweet.possiblySensitiveEditable?"tweetFlaggedAsSensitive":"tweetShadowbanned":"tweetNoProblem"}static fromAccountStatus(e){return e?"thisUserIsShadowbanned":"thisUserIsNotShadowbanned"}}},186:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileChecker=void 0;const r=n(216),s=n(801),o=n(629),i=n(194);t.ProfileChecker=class{constructor(e){this.userName=e}run(){this.userName.setAttribute(r.CHECKED_DATA_ATTRIBUTE,"true");const e=new i.ProfileReactProps(this.userName).get(),t=Boolean(e.user.possibly_sensitive),n=new s.Message(o.MessageSummary.fromAccountStatus(t));n.isAlert=t,n.expand();const a=document.querySelector("[data-testid='UserDescription']");if(!a)throw new Error("Failed to get user description of profile");a.insertAdjacentElement("afterend",n.getContainer())}}},194:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileReactProps=void 0;const r=n(36),s=n(725);t.ProfileReactProps=class{constructor(e){this.userName=e}get(){const e=new r.ReactProps(this.userName).get();if(!(0,s.isProfileReactPropsData)(e))throw new Error("Type of reactProps is invalid.");return e.children[1].props}}},36:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ReactProps=void 0,t.ReactProps=class{constructor(e){this.element=e,[this.reactPropsName]=Object.getOwnPropertyNames(e).filter((e=>e.startsWith("__reactProps$")))}get(){return this.element[this.reactPropsName]}}},878:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TweetReactProps=void 0;const r=n(725),s=n(36);t.TweetReactProps=class{constructor(e,t){this.tweet=e;const n=new s.ReactProps(t).get();if(!(0,r.isMenuBarReactPropsData)(n))throw new Error("Type of basicTweetProps is invalid.");this.basicTweetProps=n.children[1].props.retweetWithCommentLink.state.quotedStatus}get(){const e=this.basicTweetProps;return{tweet:{isTweetByCurrentUser:this.isTweetByCurrentUser,possiblySensitive:Boolean(e.possibly_sensitive),possiblySensitiveEditable:!(!1===e.possibly_sensitive_editable)},user:{possiblySensitive:Boolean(e.user.possibly_sensitive),sensitiveMediaInProfile:"sensitive_media"===e.user.profile_interstitial_type}}}get isTweetByCurrentUser(){const e=this.basicTweetProps.user.screen_name,t=new s.ReactProps(this.tweet).get();let n="";if((0,r.isTweetOuterReactPropsData)(t))n=t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser.screen_name;else{if(!(0,r.isFocalTweetOuterReactPropsData)(t))throw new Error("Type of tweetReactProps is invalid.");n=t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser.screen_name}return e===n}}},338:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TweetChecker=void 0;const r=n(629),s=n(216),o=n(801),i=n(878);class a{constructor(e,t){this.tweet=e,this.options=t}static tweetStatusToStatusData(e){const t=e.user.possiblySensitive?"accountIsShadowbannedOrFlaggedAsSensitive":"accountIsNotFlaggedAsSensitive",n=e.user.sensitiveMediaInProfile?"profileContainsSensitiveMedia":"profileDoesNotContainSensitiveMedia",r=e.tweet.possiblySensitive?"tweetIsFlaggedAsSensitive":"tweetIsNotFlaggedAsSensitive",s=e.tweet.possiblySensitive&&!e.tweet.possiblySensitiveEditable?"tweetIsAgeRestricted":"tweetIsNotAgeRestricted",o=e.tweet.possiblySensitive&&!e.tweet.possiblySensitiveEditable||e.user.possiblySensitive?"tweetIsNotSearchable":e.tweet.possiblySensitive?"tweetMayNotBeSearchable":"tweetIsSearchable";return{isTweetSearchable:"tweetIsSearchable"===o,messages:[t,n,r,s,o]}}getMenuBar(){const e=this.tweet.querySelector("div[role='group'][id]");if(!e)throw new Error("Failed to get menu bar of tweet");return e}getTweetStatus(){return new i.TweetReactProps(this.tweet,this.getMenuBar()).get()}run(){this.tweet.setAttribute(s.CHECKED_DATA_ATTRIBUTE,"true");const e=this.getMenuBar(),t=this.getTweetStatus();if(!t.tweet.isTweetByCurrentUser&&this.options.enableOnlyForCurrentUsersTweets)return;const n=r.MessageSummary.fromTweetStatus(t),i=a.tweetStatusToStatusData(t),{isTweetSearchable:c}=i;if(c&&!this.options.showMessagesInUnproblematicTweets)return;const p=new o.Message(n);p.isAlert=!c,this.options.alwaysDetailedView&&p.expand(),p.addDetails(i.messages),this.options.showNotesInMessages&&p.addNotes(["falsePositivesAndFalseNegativesOccur","translatedByAI"]),e.insertAdjacentElement("beforebegin",p.getContainer())}}t.TweetChecker=a},978:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(651),o=r(n(481));new s.UserScriptBase(o.default)},651:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserScriptBase=void 0,n(962);const r=n(983),s=n(564),o=n(238);t.UserScriptBase=class{constructor(e){const t=new r.Translator((t=>e[t].message));new s.Core(o.DEFAULT_SETTINGS,(()=>{t.translateElements()}))}}},481:e=>{e.exports=JSON.parse('{"manifest_description":{"message":"Twitterのシャドウバンを検出する拡張機能です。"},"accountShadowbanned":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。"},"accountShadowbannedAndTweetFlaggedAsSensitive":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。また、このツイートにはセンシティブフラグが付与されています。"},"accountAndTweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetFlaggedAsSensitive":{"message":"このツイートにはセンシティブフラグが付与されており、閲覧者の設定によっては検索結果に表示されません。"},"thisUserIsNotShadowbanned":{"message":"このユーザーはシャドウバンされていません。"},"thisUserIsShadowbanned":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。"},"tweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetNoProblem":{"message":"ツイートに問題は見つかりませんでした。"},"accountIsNotFlaggedAsSensitive":{"message":"✅アカウントにセンシティブフラグは付与されていません"},"accountIsShadowbannedOrFlaggedAsSensitive":{"message":"🚫アカウントがシャドウバンされているか、センシティブフラグが付与されています"},"profileDoesNotContainSensitiveMedia":{"message":"✅プロフィールのメディアにセンシティブフラグは付与されていません"},"profileContainsSensitiveMedia":{"message":"🚫プロフィールのメディアにセンシティブフラグが付与されています"},"tweetIsNotFlaggedAsSensitive":{"message":"✅ツイートにセンシティブフラグは付与されていません"},"tweetIsFlaggedAsSensitive":{"message":"🚫ツイートにセンシティブフラグが付与されています"},"tweetIsNotAgeRestricted":{"message":"✅ツイートに年齢制限はありません"},"tweetIsAgeRestricted":{"message":"🚫ツイートに年齢制限があります"},"tweetIsSearchable":{"message":"✅ツイートは検索結果に表示されます"},"tweetMayNotBeSearchable":{"message":"⚠️ツイートは閲覧者の設定によっては検索結果に表示されません"},"tweetIsNotSearchable":{"message":"🚫ツイートが検索結果に表示されない可能性があります"},"falsePositivesAndFalseNegativesOccur":{"message":"Shadowban Scannerは類似の他のツールと同様に、偽陽性や偽陰性が発生することがあります。仕組みについて詳しくは<a href=\\"https://github.com/Robot-Inventor/shadowban-scanner/blob/main/doc/ja/about-shadowban.md\\" target=\\"blank\\">こちら</a>を参照してください。"},"translatedByAI":{"message":"","description":"This field is used if the translation was done by AI. Otherwise, set this field to an empty string. Example sentence: \\"Translated from Japanese to <language name> by AI. Please notify <a href=\\"https://twitter.com/keita_roboin\\" target=\\"_blank\\">@keita_roboin</a>\'s DM or <a href=\\"https://github.com/Robot-Inventor/shadowban-scanner/\\" target=\\"_blank\\">GitHub repository</a> if there are any unnatural points.\\""},"showMore":{"message":"▶さらに表示"},"settingsAlwaysDetailedView":{"message":"常に詳細情報を表示する"},"settingsShowMessagesInUnproblematicTweets":{"message":"問題のないツイートにも検証結果を表示する"},"settingsEnableOnlyForCurrentUsersTweets":{"message":"自分のツイートにのみ検証結果を表示する"},"settingsShowNotesInMessages":{"message":"メッセージ下部に注意書きを表示する"},"settingsPleaseReload":{"message":"設定を変更したらTwitterを再読み込みしてください。"},"ShadowbanScannerUpdatedTov2":{"message":"Shadowban Scannerがv2にアップデートされました！詳細は<a href=\\"https://robot-inventor.github.io/article/2023/09/30/shadowban-scanner-v2-release/\\" target=\\"_blank\\">こちら</a>"}}')}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(978)})();