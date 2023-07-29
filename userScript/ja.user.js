// ==UserScript==
// @name         Shadowban Scanner (ja)
// @namespace    https://github.com/Robot-Inventor/shadowban-scanner/
// @version      1.2.0
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

(()=>{"use strict";var u={402:(u,D,e)=>{e.d(D,{Z:()=>o});var t=e(213),r=e.n(t),n=e(645),s=e.n(n)()(r());s.push([u.id,".shadowban-scanner-message {\n    padding: 1em;\n    border-radius: 0.5em;\n    background: rgb(255, 0, 0, 0.2);\n    margin: 1em 0;\n}\n\n.shadowban-scanner-message .twemoji {\n    height: 1em;\n    width: 1em;\n    margin-right: 0.25em;\n    vertical-align: middle;\n}\n\n.shadowban-scanner-message-no-problem {\n    background: rgb(0, 255, 0, 0.2);\n}\n\n.shadowban-scanner-message button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    background: none;\n}\n\n.shadowban-scanner-message ul {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0.5rem 0 0 0;\n    padding: 0;\n}\n\n.shadowban-scanner-message ul li {\n    list-style: none;\n}\n\n.shadowban-scanner-translated-by-ai {\n    opacity: 0.8;\n    font-size: 0.8em;\n    margin-top: 0.5em;\n}\n\n.shadowban-scanner-translated-by-ai a {\n    color: inherit;\n}\n",""]);const o=s},645:u=>{u.exports=function(u){var D=[];return D.toString=function(){return this.map((function(D){var e="",t=void 0!==D[5];return D[4]&&(e+="@supports (".concat(D[4],") {")),D[2]&&(e+="@media ".concat(D[2]," {")),t&&(e+="@layer".concat(D[5].length>0?" ".concat(D[5]):""," {")),e+=u(D),t&&(e+="}"),D[2]&&(e+="}"),D[4]&&(e+="}"),e})).join("")},D.i=function(u,e,t,r,n){"string"==typeof u&&(u=[[null,u,void 0]]);var s={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(s[i]=!0)}for(var F=0;F<u.length;F++){var p=[].concat(u[F]);t&&s[p[0]]||(void 0!==n&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=n),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),D.push(p))}},D}},213:u=>{u.exports=function(u){return u[1]}},962:(u,D,e)=>{e.r(D),e.d(D,{default:()=>h});var t=e(379),r=e.n(t),n=e(795),s=e.n(n),o=e(569),i=e.n(o),F=e(565),p=e.n(F),l=e(216),c=e.n(l),a=e(589),d=e.n(a),C=e(402),E={};E.styleTagTransform=d(),E.setAttributes=p(),E.insert=i().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=c(),r()(C.Z,E);const h=C.Z&&C.Z.locals?C.Z.locals:void 0},379:u=>{var D=[];function e(u){for(var e=-1,t=0;t<D.length;t++)if(D[t].identifier===u){e=t;break}return e}function t(u,t){for(var n={},s=[],o=0;o<u.length;o++){var i=u[o],F=t.base?i[0]+t.base:i[0],p=n[F]||0,l="".concat(F," ").concat(p);n[F]=p+1;var c=e(l),a={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==c)D[c].references++,D[c].updater(a);else{var d=r(a,t);t.byIndex=o,D.splice(o,0,{identifier:l,updater:d,references:1})}s.push(l)}return s}function r(u,D){var e=D.domAPI(D);return e.update(u),function(D){if(D){if(D.css===u.css&&D.media===u.media&&D.sourceMap===u.sourceMap&&D.supports===u.supports&&D.layer===u.layer)return;e.update(u=D)}else e.remove()}}u.exports=function(u,r){var n=t(u=u||[],r=r||{});return function(u){u=u||[];for(var s=0;s<n.length;s++){var o=e(n[s]);D[o].references--}for(var i=t(u,r),F=0;F<n.length;F++){var p=e(n[F]);0===D[p].references&&(D[p].updater(),D.splice(p,1))}n=i}}},569:u=>{var D={};u.exports=function(u,e){var t=function(u){if(void 0===D[u]){var e=document.querySelector(u);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(u){e=null}D[u]=e}return D[u]}(u);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:u=>{u.exports=function(u){var D=document.createElement("style");return u.setAttributes(D,u.attributes),u.insert(D,u.options),D}},565:(u,D,e)=>{u.exports=function(u){var D=e.nc;D&&u.setAttribute("nonce",D)}},795:u=>{u.exports=function(u){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var D=u.insertStyleElement(u);return{update:function(e){!function(u,D,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,r&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var n=e.sourceMap;n&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),D.styleTagTransform(t,u,D.options)}(D,u,e)},remove:function(){!function(u){if(null===u.parentNode)return!1;u.parentNode.removeChild(u)}(D)}}}},589:u=>{u.exports=function(u,D){if(D.styleSheet)D.styleSheet.cssText=u;else{for(;D.firstChild;)D.removeChild(D.firstChild);D.appendChild(document.createTextNode(u))}}},238:(u,D)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.DEFAULT_SETTINGS=void 0,D.DEFAULT_SETTINGS={alwaysDetailedView:!1,showMessagesInUnproblematicTweets:!1,enableOnlyForCurrentUsersTweets:!1}},919:(u,D)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.TWEMOJI_ATTRIBUTE=D.TRANSLATION_ATTRIBUTE=D.TRANSLATED_BY_AI_MESSAGE_CLASS_NAME=D.MESSAGE_CLASS_NAME=D.CURRENT_USERS_TWEET_CLASS_NAME=D.EVENT_GENERATOR_ID=D.CHECKED_DATA_ATTRIBUTE=void 0,D.CHECKED_DATA_ATTRIBUTE="data-shadowban-checked",D.EVENT_GENERATOR_ID="shadowban-scanner-event-generator",D.CURRENT_USERS_TWEET_CLASS_NAME="tweet-by-current-user",D.MESSAGE_CLASS_NAME="shadowban-scanner-message",D.TRANSLATED_BY_AI_MESSAGE_CLASS_NAME="shadowban-scanner-translated-by-ai",D.TRANSLATION_ATTRIBUTE="data-sb-translation",D.TWEMOJI_ATTRIBUTE="data-sb-use-twemoji"},505:function(u,D,e){var t=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(D,"__esModule",{value:!0}),D.TextFlow=void 0;const r=e(919),n=t(e(846));D.TextFlow=class{constructor(u){if(!u.showMessagesInUnproblematicTweets){const u=document.createElement("style");u.textContent=".shadowban-scanner-message-no-problem { display: none; }",document.body.appendChild(u)}if(u.enableOnlyForCurrentUsersTweets){const u=document.createElement("style");u.textContent=`.${r.MESSAGE_CLASS_NAME}:not(.${r.CURRENT_USERS_TWEET_CLASS_NAME}) {display: none;}`,document.body.appendChild(u)}this.allWaysDetailedView=u.alwaysDetailedView,this.translator=u.translator}convertEmojiToTwemoji(u){const D=(0,n.default)();return u.replace(D,(u=>{var D;let e="";try{for(const t of u)e+=`${null===(D=t.codePointAt(0))||void 0===D?void 0:D.toString(16)}-`}catch(u){throw new Error(`Failed to convert emoji to twemoji: ${u}`)}return e=e.replace(/-$/,""),`<img src="https://abs-0.twimg.com/emoji/v2/svg/${e}.svg" alt="${u}" class="twemoji">`}))}run(){const u=document.querySelector(".shadowban-scanner-message:not(.text-inserted)");if(!u)return;u.classList.add("text-inserted");const D=u.querySelector("button");D&&(this.allWaysDetailedView&&D.click(),document.querySelectorAll(`[${r.TRANSLATION_ATTRIBUTE}]`).forEach((u=>{u.hasAttribute(r.TWEMOJI_ATTRIBUTE)?u.innerHTML=this.convertEmojiToTwemoji(this.translator(u.getAttribute(r.TRANSLATION_ATTRIBUTE))):u.innerHTML=this.translator(u.getAttribute(r.TRANSLATION_ATTRIBUTE))})))}}},36:(u,D)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.Color=void 0,D.Color=class{constructor(){}get textColor(){const u=document.querySelector("[data-testid='User-Name'] div:first-child span, [data-testid='UserName'] div:first-child span");if(!u)throw new Error("Failed to get user name span of tweet");const{color:D}=getComputedStyle(u);return D}}},564:(u,D,e)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.Core=void 0;const t=e(186),r=e(919),n=e(338);e(962),D.Core=class{constructor(u){const D=new MutationObserver((()=>{const D=document.querySelectorAll(`[data-testid="tweet"]:not([${r.CHECKED_DATA_ATTRIBUTE}]`);for(const e of D)new n.TweetChecker(e).run(),u();const e=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${r.CHECKED_DATA_ATTRIBUTE}])`);e&&(new t.ProfileChecker(e).run(),u())})),e=new MutationObserver((()=>{const u=document.querySelector("main");u&&(e.disconnect(),D.observe(u,{subtree:!0,childList:!0}))}));e.observe(document.body,{subtree:!0,childList:!0})}}},552:(u,D,e)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.MessageElement=void 0;const t=e(919);D.MessageElement=class{constructor(u,D){const e=["accountStatus","sensitiveMediaInProfile","tweetSensitiveFlag","tweetAgeRestriction","tweetSearchStatus"];this.div=document.createElement("div"),this.div.classList.add(t.MESSAGE_CLASS_NAME),this.div.style.color=D;const r=document.createElement("span");if(r.setAttribute(t.TRANSLATION_ATTRIBUTE,u.summary),this.div.appendChild(r),"tweet"===u.type){const D=document.createElement("div");D.setAttribute(t.TRANSLATION_ATTRIBUTE,"translatedByAI"),D.classList.add(t.TRANSLATED_BY_AI_MESSAGE_CLASS_NAME),D.style.display="none";const r=document.createElement("ul");r.style.display="none",this.div.appendChild(r);for(const D of e){const e=document.createElement("li");e.setAttribute(t.TRANSLATION_ATTRIBUTE,u.detail[D]),e.setAttribute(t.TWEMOJI_ATTRIBUTE,""),r.appendChild(e)}const n=document.createElement("button");n.setAttribute(t.TRANSLATION_ATTRIBUTE,"showMore"),n.addEventListener("click",(()=>{r.style.display="block",D.style.display="block",n.remove()})),this.div.appendChild(n),this.div.appendChild(D)}}get element(){return this.div}}},531:(u,D)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.MessageSummary=void 0,D.MessageSummary=class{constructor(){}fromTweetStatus(u){return u.user.possiblySensitive||u.tweet.possiblySensitive?u.user.possiblySensitive?u.tweet.possiblySensitive?u.tweet.possiblySensitiveEditable?"accountShadowbannedAndTweetFlaggedAsSensitive":"accountAndTweetShadowbanned":"accountShadowbanned":u.tweet.possiblySensitiveEditable?"tweetFlaggedAsSensitive":"tweetShadowbanned":"tweetNoProblem"}}},186:(u,D,e)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.ProfileChecker=void 0;const t=e(36),r=e(552),n=e(204),s=e(919);D.ProfileChecker=class{constructor(u){this.userName=u}run(){this.userName.setAttribute(s.CHECKED_DATA_ATTRIBUTE,"true");const u=new n.ProfileReactProps(this.userName).get();if(!Boolean(u.user.possibly_sensitive))return;const D=(new t.Color).textColor,e=new r.MessageElement({type:"account",summary:"accountShadowbanned"},D),o=document.querySelector("[data-testid='UserDescription']");if(!o)throw new Error("Failed to get user description of profile");o.insertAdjacentElement("afterend",e.element)}}},538:(u,D)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.isProfileReactPropsData=D.isFocalTweetOuterReactPropsData=D.isTweetOuterReactPropsData=D.isMenuBarReactPropsData=void 0,D.isMenuBarReactPropsData=function(u){const D=u;return(null!==D&&"object"==typeof D||"function"==typeof D)&&Array.isArray(D.children)&&(null!==D.children[1]&&"object"==typeof D.children[1]||"function"==typeof D.children[1])&&(null!==D.children[1].props&&"object"==typeof D.children[1].props||"function"==typeof D.children[1].props)&&(null!==D.children[1].props.retweetWithCommentLink&&"object"==typeof D.children[1].props.retweetWithCommentLink||"function"==typeof D.children[1].props.retweetWithCommentLink)&&(null!==D.children[1].props.retweetWithCommentLink.state&&"object"==typeof D.children[1].props.retweetWithCommentLink.state||"function"==typeof D.children[1].props.retweetWithCommentLink.state)&&(null!==D.children[1].props.retweetWithCommentLink.state.quotedStatus&&"object"==typeof D.children[1].props.retweetWithCommentLink.state.quotedStatus||"function"==typeof D.children[1].props.retweetWithCommentLink.state.quotedStatus)&&(void 0===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||null===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!1===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive||!0===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive)&&(void 0===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||null===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!1===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable||!0===D.children[1].props.retweetWithCommentLink.state.quotedStatus.possibly_sensitive_editable)&&(null!==D.children[1].props.retweetWithCommentLink.state.quotedStatus.user&&"object"==typeof D.children[1].props.retweetWithCommentLink.state.quotedStatus.user||"function"==typeof D.children[1].props.retweetWithCommentLink.state.quotedStatus.user)&&(void 0===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||null===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!1===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive||!0===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.possibly_sensitive)&&"string"==typeof D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.screen_name&&(""===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"sensitive_media"===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"fake_account"===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"offensive_profile_content"===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type||"timeout"===D.children[1].props.retweetWithCommentLink.state.quotedStatus.user.profile_interstitial_type)},D.isTweetOuterReactPropsData=function(u){const D=u;return(null!==D&&"object"==typeof D||"function"==typeof D)&&Array.isArray(D.children)&&Array.isArray(D.children[0])&&(null!==D.children[0][1]&&"object"==typeof D.children[0][1]||"function"==typeof D.children[0][1])&&(null!==D.children[0][1].props&&"object"==typeof D.children[0][1].props||"function"==typeof D.children[0][1].props)&&Array.isArray(D.children[0][1].props.children)&&(null!==D.children[0][1].props.children[0]&&"object"==typeof D.children[0][1].props.children[0]||"function"==typeof D.children[0][1].props.children[0])&&(null!==D.children[0][1].props.children[0].props&&"object"==typeof D.children[0][1].props.children[0].props||"function"==typeof D.children[0][1].props.children[0].props)&&Array.isArray(D.children[0][1].props.children[0].props.children)&&(null!==D.children[0][1].props.children[0].props.children[1]&&"object"==typeof D.children[0][1].props.children[0].props.children[1]||"function"==typeof D.children[0][1].props.children[0].props.children[1])&&(null!==D.children[0][1].props.children[0].props.children[1].props&&"object"==typeof D.children[0][1].props.children[0].props.children[1].props||"function"==typeof D.children[0][1].props.children[0].props.children[1].props)&&Array.isArray(D.children[0][1].props.children[0].props.children[1].props.children)&&Array.isArray(D.children[0][1].props.children[0].props.children[1].props.children[1])&&(null!==D.children[0][1].props.children[0].props.children[1].props.children[1][2]&&"object"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2]||"function"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2])&&(null!==D.children[0][1].props.children[0].props.children[1].props.children[1][2].props&&"object"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props||"function"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props)&&Array.isArray(D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children)&&(null!==D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1]&&"object"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1]||"function"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1])&&(null!==D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props&&"object"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props||"function"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props)&&(null!==D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props.loggedInUser&&"object"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props.loggedInUser||"function"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props.loggedInUser)&&"string"==typeof D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props.loggedInUser.screen_name},D.isFocalTweetOuterReactPropsData=function(u){const D=u;return(null!==D&&"object"==typeof D||"function"==typeof D)&&Array.isArray(D.children)&&Array.isArray(D.children[0])&&(null!==D.children[0][1]&&"object"==typeof D.children[0][1]||"function"==typeof D.children[0][1])&&(null!==D.children[0][1].props&&"object"==typeof D.children[0][1].props||"function"==typeof D.children[0][1].props)&&Array.isArray(D.children[0][1].props.children)&&(null!==D.children[0][1].props.children[0]&&"object"==typeof D.children[0][1].props.children[0]||"function"==typeof D.children[0][1].props.children[0])&&(null!==D.children[0][1].props.children[0].props&&"object"==typeof D.children[0][1].props.children[0].props||"function"==typeof D.children[0][1].props.children[0].props)&&Array.isArray(D.children[0][1].props.children[0].props.children)&&(null!==D.children[0][1].props.children[0].props.children[2]&&"object"==typeof D.children[0][1].props.children[0].props.children[2]||"function"==typeof D.children[0][1].props.children[0].props.children[2])&&(null!==D.children[0][1].props.children[0].props.children[2].props&&"object"==typeof D.children[0][1].props.children[0].props.children[2].props||"function"==typeof D.children[0][1].props.children[0].props.children[2].props)&&Array.isArray(D.children[0][1].props.children[0].props.children[2].props.children)&&(null!==D.children[0][1].props.children[0].props.children[2].props.children[6]&&"object"==typeof D.children[0][1].props.children[0].props.children[2].props.children[6]||"function"==typeof D.children[0][1].props.children[0].props.children[2].props.children[6])&&(null!==D.children[0][1].props.children[0].props.children[2].props.children[6].props&&"object"==typeof D.children[0][1].props.children[0].props.children[2].props.children[6].props||"function"==typeof D.children[0][1].props.children[0].props.children[2].props.children[6].props)&&(null!==D.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser&&"object"==typeof D.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser||"function"==typeof D.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser)&&"string"==typeof D.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser.screen_name},D.isProfileReactPropsData=function(u){const D=u;return(null!==D&&"object"==typeof D||"function"==typeof D)&&Array.isArray(D.children)&&(null!==D.children[1]&&"object"==typeof D.children[1]||"function"==typeof D.children[1])&&(null!==D.children[1].props&&"object"==typeof D.children[1].props||"function"==typeof D.children[1].props)&&(null!==D.children[1].props.user&&"object"==typeof D.children[1].props.user||"function"==typeof D.children[1].props.user)&&(null===D.children[1].props.user.possibly_sensitive||!1===D.children[1].props.user.possibly_sensitive||!0===D.children[1].props.user.possibly_sensitive)}},204:(u,D,e)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.ProfileReactProps=D.TweetReactProps=void 0;const t=e(538);class r{constructor(u){this.element=u,this.reactPropsName=Object.getOwnPropertyNames(u).filter((u=>u.startsWith("__reactProps$")))[0]}get(){return this.element[this.reactPropsName]}}D.TweetReactProps=class{constructor(u,D){this.tweet=u;const e=new r(u).get();if(!(0,t.isTweetOuterReactPropsData)(e)&&!(0,t.isFocalTweetOuterReactPropsData)(e))throw new Error("Type of fullTweetProps is invalid.");this.fullTweetProps=e;const n=new r(D).get();if(!(0,t.isMenuBarReactPropsData)(n))throw new Error("Type of basicTweetProps is invalid.");this.basicTweetProps=n.children[1].props.retweetWithCommentLink.state.quotedStatus}get(){const u=this.basicTweetProps;return{tweet:{possiblySensitive:Boolean(u.possibly_sensitive),possiblySensitiveEditable:!(!1===u.possibly_sensitive_editable),isTweetByCurrentUser:this.isTweetByCurrentUser},user:{possiblySensitive:Boolean(u.user.possibly_sensitive),sensitiveMediaInProfile:"sensitive_media"===u.user.profile_interstitial_type}}}get isTweetByCurrentUser(){const u=this.basicTweetProps.user.screen_name,D=new r(this.tweet).get();let e="";if((0,t.isTweetOuterReactPropsData)(D))e=D.children[0][1].props.children[0].props.children[1].props.children[1][2].props.children[1].props.loggedInUser.screen_name;else{if(!(0,t.isFocalTweetOuterReactPropsData)(D))throw new Error("Type of tweetReactProps is invalid.");e=D.children[0][1].props.children[0].props.children[2].props.children[6].props.loggedInUser.screen_name}return u===e}},D.ProfileReactProps=class{constructor(u){this.userName=u}get(){const u=new r(this.userName).get();if(!(0,t.isProfileReactPropsData)(u))throw new Error("Type of reactProps is invalid.");return u.children[1].props}}},338:(u,D,e)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.TweetChecker=void 0;const t=e(36),r=e(552),n=e(531),s=e(204),o=e(919);D.TweetChecker=class{constructor(u){this.tweet=u}run(){this.tweet.setAttribute(o.CHECKED_DATA_ATTRIBUTE,"true");const u=this.tweet.querySelector("div[role='group'][id]");if(!u)throw new Error("Failed to get menu bar of tweet");const D=new s.TweetReactProps(this.tweet,u).get(),e=(new n.MessageSummary).fromTweetStatus(D),i=(new t.Color).textColor,F={type:"tweet",summary:e,detail:{accountStatus:D.user.possiblySensitive?"accountIsShadowbanned":"accountIsNotShadowbanned",sensitiveMediaInProfile:D.user.sensitiveMediaInProfile?"profileContainsSensitiveMedia":"profileDoesNotContainSensitiveMedia",tweetSensitiveFlag:D.tweet.possiblySensitive?"tweetIsFlaggedAsSensitive":"tweetIsNotFlaggedAsSensitive",tweetAgeRestriction:D.tweet.possiblySensitive&&!D.tweet.possiblySensitiveEditable?"tweetIsAgeRestricted":"tweetIsNotAgeRestricted",tweetSearchStatus:D.tweet.possiblySensitive&&!D.tweet.possiblySensitiveEditable||D.user.possiblySensitive?"tweetIsNotSearchable":D.tweet.possiblySensitive?"tweetMayNotBeSearchable":"tweetIsSearchable"}},p=new r.MessageElement(F,i);"tweetIsSearchable"===F.detail.tweetSearchStatus&&p.element.classList.add("shadowban-scanner-message-no-problem"),D.tweet.isTweetByCurrentUser&&p.element.classList.add(o.CURRENT_USERS_TWEET_CLASS_NAME),u.insertAdjacentElement("beforebegin",p.element)}}},978:function(u,D,e){var t=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(D,"__esModule",{value:!0});const r=t(e(481));new(e(651).UserScriptBase)(r.default)},651:(u,D,e)=>{Object.defineProperty(D,"__esModule",{value:!0}),D.UserScriptBase=void 0;const t=e(564),r=e(505),n=e(238);D.UserScriptBase=class{constructor(u){const D=Object.assign(Object.assign({},n.DEFAULT_SETTINGS),{translator:D=>u[D].message}),e=new r.TextFlow(D);new t.Core((()=>{e.run()}))}}},846:(u,D,e)=>{e.r(D),e.d(D,{default:()=>t});const t=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},481:u=>{u.exports=JSON.parse('{"manifest_description":{"message":"Twitterのシャドウバンを検出する拡張機能です。"},"accountShadowbanned":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。"},"accountShadowbannedAndTweetFlaggedAsSensitive":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。また、このツイートにはセンシティブフラグが付与されています。"},"accountAndTweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetFlaggedAsSensitive":{"message":"このツイートにはセンシティブフラグが付与されており、閲覧者の設定によっては検索結果に表示されません。"},"tweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetNoProblem":{"message":"ツイートに問題は見つかりませんでした。"},"accountIsNotShadowbanned":{"message":"✅アカウントはシャドウバンされていません"},"accountIsShadowbanned":{"message":"🚫アカウントがシャドウバンされている可能性があります"},"profileDoesNotContainSensitiveMedia":{"message":"✅アカウントのプロフィールのメディア（アイコンやヘッダー画像）にセンシティブフラグは付与されていません"},"profileContainsSensitiveMedia":{"message":"🚫アカウントのプロフィールのメディア（アイコンやヘッダー画像）にセンシティブフラグが付与されています"},"tweetIsNotFlaggedAsSensitive":{"message":"✅ツイートにセンシティブフラグは付与されていません"},"tweetIsFlaggedAsSensitive":{"message":"🚫ツイートにセンシティブフラグが付与されています"},"tweetIsNotAgeRestricted":{"message":"✅ツイートに年齢制限はありません"},"tweetIsAgeRestricted":{"message":"🚫ツイートに年齢制限があります"},"tweetIsSearchable":{"message":"✅ツイートは検索結果に表示されます"},"tweetMayNotBeSearchable":{"message":"⚠️ツイートは閲覧者の設定によっては検索結果に表示されません"},"tweetIsNotSearchable":{"message":"🚫ツイートが検索結果に表示されない可能性があります"},"translatedByAI":{"message":"","description":"This field is used if the translation was done by AI. Otherwise, set this field to an empty string. Example sentence: \\"Translated from Japanese to <language name> by AI. Please notify <a href=\\"https://twitter.com/keita_roboin\\" target=\\"_blank\\">@keita_roboin</a> if there are any unnatural points.\\""},"showMore":{"message":"▶さらに表示"},"settingsAlwaysDetailedView":{"message":"常に詳細情報を表示する"},"settingsShowMessagesInUnproblematicTweets":{"message":"問題のないツイートにも検証結果を表示する"},"settingsEnableOnlyForCurrentUsersTweets":{"message":"自分のツイートにのみ検証結果を表示する"},"settingsPleaseReload":{"message":"設定を変更したらTwitterを再読み込みしてください。"}}')}},D={};function e(t){var r=D[t];if(void 0!==r)return r.exports;var n=D[t]={id:t,exports:{}};return u[t].call(n.exports,n,n.exports,e),n.exports}e.n=u=>{var D=u&&u.__esModule?()=>u.default:()=>u;return e.d(D,{a:D}),D},e.d=(u,D)=>{for(var t in D)e.o(D,t)&&!e.o(u,t)&&Object.defineProperty(u,t,{enumerable:!0,get:D[t]})},e.o=(u,D)=>Object.prototype.hasOwnProperty.call(u,D),e.r=u=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},e.nc=void 0,e(978)})();