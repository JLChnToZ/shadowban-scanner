// ==UserScript==
// @name         Shadowban Scanner (en)
// @namespace    https://github.com/Robot-Inventor/shadowban-scanner/
// @version      1.2.0
// @description  A browser extension that detects shadowbans on Twitter.
// @author       Robot-Inventor (ろぼいん / @keita_roboin)
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @icon         https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/src/image/icon128.png
// @downloadURL  https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/en.user.js
// @updateURL    https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/en.user.js
// @grant        none
// ==/UserScript==

(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(81),r=n.n(s),o=n(645),i=n.n(o)()(r());i.push([e.id,".shadowban-scanner-message {\n    padding: 1em;\n    border-radius: 0.5em;\n    background: rgb(255, 0, 0, 0.2);\n    margin: 1em 0;\n}\n\n.shadowban-scanner-message .twemoji {\n    height: 1em;\n    width: 1em;\n    margin-right: 0.25em;\n    vertical-align: middle;\n}\n\n.shadowban-scanner-message-no-problem {\n    background: rgb(0, 255, 0, 0.2);\n}\n\n.shadowban-scanner-message button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    background: none;\n}\n\n.shadowban-scanner-message .shadowban-scanner-collapsed-content {\n    display: none;\n}\n\n.shadowban-scanner-message ul {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0.5rem 0 0 0;\n    padding: 0;\n}\n\n.shadowban-scanner-message ul li {\n    list-style: none;\n}\n\n.shadowban-scanner-message-note {\n    opacity: 0.8;\n    font-size: 0.8em;\n    margin-top: 0.5em;\n}\n\n.shadowban-scanner-message-note a {\n    color: inherit;\n}\n\n[data-sb-translation] {\n    display: inline-block;\n    min-width: 15em;\n    min-height: 1em;\n    border-radius: 0.25em;\n    background-image: linear-gradient(90deg, transparent 40%, rgba(175, 175, 175, 0.7) 80%, transparent 100%);\n    background-size: 200% 100%;\n    animation: loading-animation 1.5s linear infinite;\n}\n\n@keyframes loading-animation {\n    0% {\n        background-position: 200% 0%;\n        opacity: 1;\n    }\n    100% {\n        background-position: 0% 0%;\n        opacity: 1;\n    }\n}\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(s)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);s&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},962:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(379),r=n.n(s),o=n(795),i=n.n(o),a=n(569),c=n.n(a),l=n(565),p=n.n(l),d=n(609),h=n.n(d),u=n(589),f=n.n(u),m=n(402),b={};b.styleTagTransform=f(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=h(),r()(m.Z,b);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var o={},i=[],a=0;a<e.length;a++){var c=e[a],l=s.base?c[0]+s.base:c[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var h=n(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var f=r(u,s);s.byIndex=a,t.splice(a,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=s(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var a=n(o[i]);t[a].references--}for(var c=s(e,r),l=0;l<o.length;l++){var p=n(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},609:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,r&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},725:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isProfileReactPropsData=t.isFocalTweetOuterReactPropsData=t.isTweetOuterReactPropsData=t.isMenuBarReactPropsData=void 0,t.isMenuBarReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&(null!==t.children[1]&&"object"==typeof t.children[1]||"function"==typeof t.children[1])&&(null!==t.children[1].props&&"object"==typeof t.children[1].props||"function"==typeof t.children[1].props)&&(null!==t.children[1].props.retweetWithCommentLink&&"object"==typeof t.children[1].props.retweetWithCommentLink||"function"==typeof t.children[1].props.retweetWithCommentLink)&&(null!==t.children[1].props.retweetWithCommentLink.state&&"object"==typeof t.children[1].props.retweetWithCommentLink.state||"function"==typeof t.children[1].props.retweetWithCommentLink.state)&&(null!==t.children[1].props.retweetWithCommentLink.state.quotedStatus&&"object"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus||"function"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus)&&(void 0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||null===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!1===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive)&&(void 0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||null===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!1===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable)&&(null!==t.children[1].props.retweetWithCommentLink.state.quotedStatus.user&&"object"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus.user||"function"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus.user)&&(void 0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||null===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!1===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!0===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive)&&"string"==typeof t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.screen_name&&(""===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"sensitive_media"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"fake_account"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"offensive_profile_content"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"timeout"===t.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type)},t.isTweetOuterReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&Array.isArray(t.children[0])&&(null!==t.children[0][1]&&"object"==typeof t.children[0][1]||"function"==typeof t.children[0][1])&&(null!==t.children[0][1].props&&"object"==typeof t.children[0][1].props||"function"==typeof t.children[0][1].props)&&Array.isArray(t.children[0][1].props.children)&&(null!==t.children[0][1].props.children[0]&&"object"==typeof t.children[0][1].props.children[0]||"function"==typeof t.children[0][1].props.children[0])&&(null!==t.children[0][1].props.children[0].props&&"object"==typeof t.children[0][1].props.children[0].props||"function"==typeof t.children[0][1].props.children[0].props)&&Array.isArray(t.children[0][1].props.children[0].props.children)&&(null!==t.children[0][1].props.children[0].props.children[1]&&"object"==typeof t.children[0][1].props.children[0].props.children[1]||"function"==typeof t.children[0][1].props.children[0].props.children[1])&&(null!==t.children[0][1].props.children[0].props.children[1].props&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props||"function"==typeof t.children[0][1].props.children[0].props.children[1].props)&&Array.isArray(t.children[0][1].props.children[0].props.children[1].props.children)&&Array.isArray(t.children[0][1].props.children[0].props.children[1].props.children[1])&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2]&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2]||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2])&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2].props&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props)&&(null!==t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser&&"object"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser||"function"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser)&&"string"==typeof t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser.screen_name},t.isFocalTweetOuterReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&Array.isArray(t.children[0])&&(null!==t.children[0][1]&&"object"==typeof t.children[0][1]||"function"==typeof t.children[0][1])&&(null!==t.children[0][1].props&&"object"==typeof t.children[0][1].props||"function"==typeof t.children[0][1].props)&&Array.isArray(t.children[0][1].props.children)&&(null!==t.children[0][1].props.children[0]&&"object"==typeof t.children[0][1].props.children[0]||"function"==typeof t.children[0][1].props.children[0])&&(null!==t.children[0][1].props.children[0].props&&"object"==typeof t.children[0][1].props.children[0].props||"function"==typeof t.children[0][1].props.children[0].props)&&Array.isArray(t.children[0][1].props.children[0].props.children)&&(null!==t.children[0][1].props.children[0].props.children[2]&&"object"==typeof t.children[0][1].props.children[0].props.children[2]||"function"==typeof t.children[0][1].props.children[0].props.children[2])&&(null!==t.children[0][1].props.children[0].props.children[2].props&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props||"function"==typeof t.children[0][1].props.children[0].props.children[2].props)&&Array.isArray(t.children[0][1].props.children[0].props.children[2].props.children)&&(null!==t.children[0][1].props.children[0].props.children[2].props.children[6]&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6]||"function"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6])&&(null!==t.children[0][1].props.children[0].props.children[2].props.children[6].props&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props||"function"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props)&&(null!==t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser&&"object"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser||"function"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser)&&"string"==typeof t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser.screen_name},t.isProfileReactPropsData=function(e){const t=e;return(null!==t&&"object"==typeof t||"function"==typeof t)&&Array.isArray(t.children)&&(null!==t.children[1]&&"object"==typeof t.children[1]||"function"==typeof t.children[1])&&(null!==t.children[1].props&&"object"==typeof t.children[1].props||"function"==typeof t.children[1].props)&&(null!==t.children[1].props.user&&"object"==typeof t.children[1].props.user||"function"==typeof t.children[1].props.user)&&(null===t.children[1].props.user.possibly_sensitive||!1===t.children[1].props.user.possibly_sensitive||!0===t.children[1].props.user.possibly_sensitive)}},216:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ALLOWED_TWEMOJI=t.NO_PROBLEM_CLASS_NAME=t.TWEMOJI_ATTRIBUTE=t.TRANSLATION_ATTRIBUTE=t.COLLAPSED_CONTENT_CLASS_NAME=t.MESSAGE_NOTE_CLASS_NAME=t.MESSAGE_CLASS_NAME=t.EVENT_GENERATOR_SETTINGS_ATTRIBUTE=t.EVENT_GENERATOR_ID=t.CHECKED_DATA_ATTRIBUTE=void 0,t.CHECKED_DATA_ATTRIBUTE="data-shadowban-checked",t.EVENT_GENERATOR_ID="shadowban-scanner-event-generator",t.EVENT_GENERATOR_SETTINGS_ATTRIBUTE="data-sb-settings",t.MESSAGE_CLASS_NAME="shadowban-scanner-message",t.MESSAGE_NOTE_CLASS_NAME="shadowban-scanner-message-note",t.COLLAPSED_CONTENT_CLASS_NAME="shadowban-scanner-collapsed-content",t.TRANSLATION_ATTRIBUTE="data-sb-translation",t.TWEMOJI_ATTRIBUTE="data-sb-enable-twemoji",t.NO_PROBLEM_CLASS_NAME="shadowban-scanner-message-no-problem",t.ALLOWED_TWEMOJI=["✅","🚫","⚠️"]},238:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_SETTINGS=void 0,t.DEFAULT_SETTINGS={alwaysDetailedView:!1,enableOnlyForCurrentUsersTweets:!1,showMessagesInUnproblematicTweets:!1}},983:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Translator=void 0;const s=n(216);class r{constructor(e){this.translationFunction=e}static convertEmojiToTwemoji(e){let t=e;for(const e of s.ALLOWED_TWEMOJI){const n=`<img src="https://abs-0.twimg.com/emoji/v2/svg/${[...e].map((e=>e.codePointAt(0)?.toString(16))).join("-")}.svg" alt="${e}" class="twemoji">`;t=t.replaceAll(e,n)}return t}translateElements(){document.querySelectorAll(`[${s.TRANSLATION_ATTRIBUTE}]`).forEach((e=>{const t=e.getAttribute(s.TRANSLATION_ATTRIBUTE),n=this.translationFunction(t);e.hasAttribute(s.TWEMOJI_ATTRIBUTE)?e.innerHTML=r.convertEmojiToTwemoji(n):e.innerHTML=n,e.removeAttribute(s.TRANSLATION_ATTRIBUTE)}))}}t.Translator=r},564:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Core=void 0;const s=n(216),r=n(186),o=n(338);t.Core=class{constructor(e,t){this.OBSERVER_OPTIONS={childList:!0,subtree:!0},this.settings=e,this.onMessageCallback=t;const n=new MutationObserver((()=>{this.mainObserverCallback()})),s=new MutationObserver((()=>{const e=document.querySelector("main");e&&(s.disconnect(),n.observe(e,this.OBSERVER_OPTIONS))}));s.observe(document.body,this.OBSERVER_OPTIONS)}mainObserverCallback(){const e=document.querySelectorAll(`[data-testid="tweet"]:not([${s.CHECKED_DATA_ATTRIBUTE}]`);for(const t of e)new o.TweetChecker(t,this.settings).run(),this.onMessageCallback();const t=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${s.CHECKED_DATA_ATTRIBUTE}])`);t&&(new r.ProfileChecker(t).run(),this.onMessageCallback())}}},801:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;const s=n(216);class r{constructor(e){this.isExpanded=!1,this.container=document.createElement("div"),this.container.classList.add(s.MESSAGE_CLASS_NAME),this.container.style.color=r.getTextColor();const t=document.createElement("span");t.setAttribute(s.TRANSLATION_ATTRIBUTE,e),this.container.appendChild(t),this.expandButton=this.addButton()}static getTextColor(){const e=["[data-testid='User-Name'] div:first-child span","[data-testid='UserName'] div:first-child span","[data-testid='tweetText']","main h2[role='heading']"].join(","),t=document.querySelector(e);if(!t)throw new Error("Failed to get user name span of tweet");const{color:n}=getComputedStyle(t);return n}addButton(){const e=document.createElement("button");return e.setAttribute(s.TRANSLATION_ATTRIBUTE,"showMore"),e.addEventListener("click",(()=>{e.remove(),this.container.querySelectorAll(`.${s.COLLAPSED_CONTENT_CLASS_NAME}`).forEach((e=>{e.classList.remove(s.COLLAPSED_CONTENT_CLASS_NAME)})),this.isExpanded=!0})),this.container.appendChild(e),e}expand(){this.expandButton.click()}addDetails(e){const t=document.createElement("ul");this.isExpanded||t.classList.add(s.COLLAPSED_CONTENT_CLASS_NAME);for(const n of e){const e=document.createElement("li");e.setAttribute(s.TRANSLATION_ATTRIBUTE,n),e.setAttribute(s.TWEMOJI_ATTRIBUTE,"true"),t.appendChild(e)}this.container.appendChild(t)}addNotes(e){const t=document.createDocumentFragment();for(const n of e){const e=document.createElement("div");e.classList.add(s.MESSAGE_NOTE_CLASS_NAME),e.setAttribute(s.TRANSLATION_ATTRIBUTE,n),this.isExpanded||e.classList.add(s.COLLAPSED_CONTENT_CLASS_NAME),t.appendChild(e)}this.container.appendChild(t)}getContainer(){return this.container}get isAlert(){return!this.container.classList.contains(s.NO_PROBLEM_CLASS_NAME)}set isAlert(e){this.container.classList.toggle(s.NO_PROBLEM_CLASS_NAME,!e)}}t.Message=r},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageSummary=void 0,t.MessageSummary=class{static fromTweetStatus(e){return e.user.possiblySensitive||e.user.sensitiveMediaInProfile||e.tweet.possiblySensitive?e.user.possiblySensitive||e.user.sensitiveMediaInProfile?e.tweet.possiblySensitive?e.tweet.possiblySensitiveEditable?"accountShadowbannedAndTweetFlaggedAsSensitive":"accountAndTweetShadowbanned":"accountShadowbanned":e.tweet.possiblySensitiveEditable?"tweetFlaggedAsSensitive":"tweetShadowbanned":"tweetNoProblem"}static fromAccountStatus(e){return e?"thisUserIsShadowbanned":"thisUserIsNotShadowbanned"}}},186:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileChecker=void 0;const s=n(216),r=n(801),o=n(629),i=n(194);t.ProfileChecker=class{constructor(e){this.userName=e}run(){this.userName.setAttribute(s.CHECKED_DATA_ATTRIBUTE,"true");const e=new i.ProfileReactProps(this.userName).get(),t=Boolean(e.user.possibly_sensitive),n=new r.Message(o.MessageSummary.fromAccountStatus(t));n.isAlert=t,n.expand();const a=document.querySelector("[data-testid='UserDescription']");if(!a)throw new Error("Failed to get user description of profile");a.insertAdjacentElement("afterend",n.getContainer())}}},194:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileReactProps=void 0;const s=n(36),r=n(725);t.ProfileReactProps=class{constructor(e){this.userName=e}get(){const e=new s.ReactProps(this.userName).get();if(!(0,r.isProfileReactPropsData)(e))throw new Error("Type of reactProps is invalid.");return e.children[1].props}}},36:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ReactProps=void 0,t.ReactProps=class{constructor(e){this.element=e,[this.reactPropsName]=Object.getOwnPropertyNames(e).filter((e=>e.startsWith("__reactProps$")))}get(){return this.element[this.reactPropsName]}}},878:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TweetReactProps=void 0;const s=n(725),r=n(36);t.TweetReactProps=class{constructor(e,t){this.tweet=e;const n=new r.ReactProps(t).get();if(!(0,s.isMenuBarReactPropsData)(n))throw new Error("Type of basicTweetProps is invalid.");this.basicTweetProps=n.children[1].props.retweetWithCommentLink.state.quotedStatus}get(){const e=this.basicTweetProps;return{tweet:{isTweetByCurrentUser:this.isTweetByCurrentUser,possiblySensitive:Boolean(e.possibly_sensitive),possiblySensitiveEditable:!(!1===e.possibly_sensitive_editable)},user:{possiblySensitive:Boolean(e.user.possibly_sensitive),sensitiveMediaInProfile:"sensitive_media"===e.user.profile_interstitial_type}}}get isTweetByCurrentUser(){const e=this.basicTweetProps.user.screen_name,t=new r.ReactProps(this.tweet).get();let n="";if((0,s.isTweetOuterReactPropsData)(t))n=t.children[0][1].props.children[0].props.children[1].props.children[1][2].props.loggedInUser.screen_name;else{if(!(0,s.isFocalTweetOuterReactPropsData)(t))throw new Error("Type of tweetReactProps is invalid.");n=t.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser.screen_name}return e===n}}},338:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TweetChecker=void 0;const s=n(629),r=n(216),o=n(801),i=n(878);class a{constructor(e,t){this.tweet=e,this.options=t}static tweetStatusToStatusData(e){const t=e.user.possiblySensitive?"accountIsShadowbannedOrFlaggedAsSensitive":"accountIsNotFlaggedAsSensitive",n=e.user.sensitiveMediaInProfile?"profileContainsSensitiveMedia":"profileDoesNotContainSensitiveMedia",s=e.tweet.possiblySensitive?"tweetIsFlaggedAsSensitive":"tweetIsNotFlaggedAsSensitive",r=e.tweet.possiblySensitive&&!e.tweet.possiblySensitiveEditable?"tweetIsAgeRestricted":"tweetIsNotAgeRestricted",o=e.tweet.possiblySensitive&&!e.tweet.possiblySensitiveEditable||e.user.possiblySensitive?"tweetIsNotSearchable":e.tweet.possiblySensitive?"tweetMayNotBeSearchable":"tweetIsSearchable";return{isTweetSearchable:"tweetIsSearchable"===o,messages:[t,n,s,r,o]}}getMenuBar(){const e=this.tweet.querySelector("div[role='group'][id]");if(!e)throw new Error("Failed to get menu bar of tweet");return e}getTweetStatus(){return new i.TweetReactProps(this.tweet,this.getMenuBar()).get()}run(){this.tweet.setAttribute(r.CHECKED_DATA_ATTRIBUTE,"true");const e=this.getMenuBar(),t=this.getTweetStatus();if(!t.tweet.isTweetByCurrentUser&&this.options.enableOnlyForCurrentUsersTweets)return;const n=s.MessageSummary.fromTweetStatus(t),i=a.tweetStatusToStatusData(t),{isTweetSearchable:c}=i;if(c&&!this.options.showMessagesInUnproblematicTweets)return;const l=new o.Message(n);l.isAlert=!c,this.options.alwaysDetailedView&&l.expand(),l.addDetails(i.messages),l.addNotes(["falsePositivesAndFalseNegativesOccur","translatedByAI"]),e.insertAdjacentElement("beforebegin",l.getContainer())}}t.TweetChecker=a},798:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(651),o=s(n(533));new r.UserScriptBase(o.default)},651:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserScriptBase=void 0,n(962);const s=n(983),r=n(564),o=n(238);t.UserScriptBase=class{constructor(e){const t=new s.Translator((t=>e[t].message));new r.Core(o.DEFAULT_SETTINGS,(()=>{t.translateElements()}))}}},533:e=>{e.exports=JSON.parse('{"manifest_description":{"message":"A browser extension that detects shadowbans on Twitter."},"accountShadowbanned":{"message":"This user may be shadowbanned, so this tweet may not appear in search results."},"accountShadowbannedAndTweetFlaggedAsSensitive":{"message":"This user may be shadowbanned so this tweet may not appear in search results. Also, this tweet is flagged as sensitive."},"accountAndTweetShadowbanned":{"message":"This tweet is age-restricted and cannot be viewed by users under the age of 18 or who are not logged in. This tweet may not appear in search results."},"tweetFlaggedAsSensitive":{"message":"This tweet is flagged as sensitive and will not appear in search results depending on the viewer\'s preferences."},"tweetShadowbanned":{"message":"This tweet is age-restricted and cannot be viewed by users under the age of 18 or who are not logged in. This tweet may not appear in search results."},"thisUserIsNotShadowbanned":{"message":"This user is not shadowbanned."},"thisUserIsShadowbanned":{"message":"This user may be shadowbanned, so this tweet may not appear in search results."},"tweetNoProblem":{"message":"No problems was found with this tweet."},"accountIsNotFlaggedAsSensitive":{"message":"✅Account is not flagged as sensitive."},"accountIsShadowbannedOrFlaggedAsSensitive":{"message":"🚫Account may be shadowbanned or flagged as sensitive."},"profileDoesNotContainSensitiveMedia":{"message":"✅Account\'s profile media (icon or header image) is not flagged as sensitive."},"profileContainsSensitiveMedia":{"message":"🚫Account\'s profile media (icon or header image) is flagged as sensitive."},"tweetIsNotFlaggedAsSensitive":{"message":"✅Tweet is not flagged as sensitive."},"tweetIsFlaggedAsSensitive":{"message":"🚫Tweet is flagged as sensitive."},"tweetIsNotAgeRestricted":{"message":"✅Tweet has no age limit."},"tweetIsAgeRestricted":{"message":"🚫Tweet has age limit."},"tweetIsSearchable":{"message":"✅Tweet will appear in search results."},"tweetMayNotBeSearchable":{"message":"⚠️Tweet may not appear in search results depending on viewer preferences."},"tweetIsNotSearchable":{"message":"🚫Tweet may not appear in search results."},"falsePositivesAndFalseNegativesOccur":{"message":"Shadowban Scanner, like other similar tools, can produce false positives and false negatives. For more information on how it works, please click <a href=\\"https://github.com/Robot-Inventor/shadowban-scanner/blob/main/doc/en/about-shadowban.md\\" target=\\"blank\\">here</a>."},"translatedByAI":{"message":"Translated from Japanese to English by AI. Please notify <a href=\\"https://twitter.com/keita_roboin\\" target=\\"_blank\\">@keita_roboin</a>\'s DM or <a href=\\"https://github.com/Robot-Inventor/shadowban-scanner/\\" target=\\"_blank\\">GitHub repository</a> if there are any unnatural points.","description":"This field is used if the translation was done by AI. Otherwise, set this field to an empty string. Example sentence: \\"Translated from Japanese to <language name> by AI. Please notify <a href=\\"https://twitter.com/keita_roboin\\" target=\\"_blank\\">@keita_roboin</a>\'s DM or <a href=\\"https://github.com/Robot-Inventor/shadowban-scanner/\\" target=\\"_blank\\">GitHub repository</a> if there are any unnatural points.\\""},"showMore":{"message":"▶show more"},"settingsAlwaysDetailedView":{"message":"Always display detailed information"},"settingsShowMessagesInUnproblematicTweets":{"message":"Display verification results for tweets that have no issues"},"settingsEnableOnlyForCurrentUsersTweets":{"message":"Display check results only in your own tweets"},"settingsPleaseReload":{"message":"Please reload Twitter once you have changed the settings"}}')}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={id:s,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(798)})();