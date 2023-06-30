// ==UserScript==
// @name         Shadowban Scanner (ja)
// @namespace    https://github.com/Robot-Inventor/shadowban-scanner/
// @version      1.2.0
// @description  A browser extension that detects shadowbans on Twitter.
// @author       Robot-Inventor (ろぼいん / @keita_roboin)
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @icon         https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/src/image/icon128.png
// @downloadURL  https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/ja.user.js
// @updateURL    https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/ja.user.js
// @grant        none
// ==/UserScript==

(()=>{"use strict";var D={402:(D,u,e)=>{e.d(u,{Z:()=>C});var F=e(213),t=e.n(F),n=e(645),s=e.n(n)()(t());s.push([D.id,".shadowban-scanner-message {\n    padding: 1em;\n    border-radius: 0.5em;\n    background: rgb(255, 0, 0, 0.2);\n    margin: 1em 0;\n}\n\n.shadowban-scanner-message .twemoji {\n    height: 1em;\n    width: 1em;\n    margin-right: 0.25em;\n    vertical-align: middle;\n}\n\n.shadowban-scanner-message-no-problem {\n    background: rgb(0, 255, 0, 0.2);\n}\n\n.shadowban-scanner-message button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    background: none;\n}\n\n.shadowban-scanner-message pre {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0.5rem 0 0 0;\n}\n",""]);const C=s},645:D=>{D.exports=function(D){var u=[];return u.toString=function(){return this.map((function(u){var e="",F=void 0!==u[5];return u[4]&&(e+="@supports (".concat(u[4],") {")),u[2]&&(e+="@media ".concat(u[2]," {")),F&&(e+="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {")),e+=D(u),F&&(e+="}"),u[2]&&(e+="}"),u[4]&&(e+="}"),e})).join("")},u.i=function(D,e,F,t,n){"string"==typeof D&&(D=[[null,D,void 0]]);var s={};if(F)for(var C=0;C<this.length;C++){var E=this[C][0];null!=E&&(s[E]=!0)}for(var r=0;r<D.length;r++){var o=[].concat(D[r]);F&&s[o[0]]||(void 0!==n&&(void 0===o[5]||(o[1]="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {").concat(o[1],"}")),o[5]=n),e&&(o[2]?(o[1]="@media ".concat(o[2]," {").concat(o[1],"}"),o[2]=e):o[2]=e),t&&(o[4]?(o[1]="@supports (".concat(o[4],") {").concat(o[1],"}"),o[4]=t):o[4]="".concat(t)),u.push(o))}},u}},213:D=>{D.exports=function(D){return D[1]}},962:(D,u,e)=>{e.r(u),e.d(u,{default:()=>A});var F=e(379),t=e.n(F),n=e(795),s=e.n(n),C=e(569),E=e.n(C),r=e(565),o=e.n(r),a=e(216),i=e.n(a),c=e(589),l=e.n(c),B=e(402),d={};d.styleTagTransform=l(),d.setAttributes=o(),d.insert=E().bind(null,"head"),d.domAPI=s(),d.insertStyleElement=i(),t()(B.Z,d);const A=B.Z&&B.Z.locals?B.Z.locals:void 0},379:D=>{var u=[];function e(D){for(var e=-1,F=0;F<u.length;F++)if(u[F].identifier===D){e=F;break}return e}function F(D,F){for(var n={},s=[],C=0;C<D.length;C++){var E=D[C],r=F.base?E[0]+F.base:E[0],o=n[r]||0,a="".concat(r," ").concat(o);n[r]=o+1;var i=e(a),c={css:E[1],media:E[2],sourceMap:E[3],supports:E[4],layer:E[5]};if(-1!==i)u[i].references++,u[i].updater(c);else{var l=t(c,F);F.byIndex=C,u.splice(C,0,{identifier:a,updater:l,references:1})}s.push(a)}return s}function t(D,u){var e=u.domAPI(u);return e.update(D),function(u){if(u){if(u.css===D.css&&u.media===D.media&&u.sourceMap===D.sourceMap&&u.supports===D.supports&&u.layer===D.layer)return;e.update(D=u)}else e.remove()}}D.exports=function(D,t){var n=F(D=D||[],t=t||{});return function(D){D=D||[];for(var s=0;s<n.length;s++){var C=e(n[s]);u[C].references--}for(var E=F(D,t),r=0;r<n.length;r++){var o=e(n[r]);0===u[o].references&&(u[o].updater(),u.splice(o,1))}n=E}}},569:D=>{var u={};D.exports=function(D,e){var F=function(D){if(void 0===u[D]){var e=document.querySelector(D);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(D){e=null}u[D]=e}return u[D]}(D);if(!F)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");F.appendChild(e)}},216:D=>{D.exports=function(D){var u=document.createElement("style");return D.setAttributes(u,D.attributes),D.insert(u,D.options),u}},565:(D,u,e)=>{D.exports=function(D){var u=e.nc;u&&D.setAttribute("nonce",u)}},795:D=>{D.exports=function(D){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var u=D.insertStyleElement(D);return{update:function(e){!function(D,u,e){var F="";e.supports&&(F+="@supports (".concat(e.supports,") {")),e.media&&(F+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(F+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),F+=e.css,t&&(F+="}"),e.media&&(F+="}"),e.supports&&(F+="}");var n=e.sourceMap;n&&"undefined"!=typeof btoa&&(F+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),u.styleTagTransform(F,D,u.options)}(u,D,e)},remove:function(){!function(D){if(null===D.parentNode)return!1;D.parentNode.removeChild(D)}(u)}}}},589:D=>{D.exports=function(D,u){if(u.styleSheet)u.styleSheet.cssText=D;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(D))}}},238:(D,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.DEFAULT_SETTINGS=void 0,u.DEFAULT_SETTINGS={alwaysDetailedView:!1,showMessageInAllTweets:!1,enableOnlyForCurrentUsersTweets:!1}},919:(D,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.MESSAGE_CLASS_NAME=u.CURRENT_USERS_TWEET_CLASS_NAME=u.EVENT_GENERATOR_ID=u.CHECKED_DATA_ATTRIBUTE=void 0,u.CHECKED_DATA_ATTRIBUTE="data-shadowban-checked",u.EVENT_GENERATOR_ID="shadowban-scanner-event-generator",u.CURRENT_USERS_TWEET_CLASS_NAME="tweet-by-current-user",u.MESSAGE_CLASS_NAME="shadowban-scanner-message"},505:function(D,u,e){var F=this&&this.__importDefault||function(D){return D&&D.__esModule?D:{default:D}};Object.defineProperty(u,"__esModule",{value:!0}),u.TextFlow=void 0;const t=e(919),n=F(e(846));u.TextFlow=class{constructor(D){if(!D.showMessageInAllTweets){const D=document.createElement("style");D.textContent=".shadowban-scanner-message-no-problem { display: none; }",document.body.appendChild(D)}if(D.enableOnlyForCurrentUsersTweets){const D=document.createElement("style");D.textContent=`.${t.MESSAGE_CLASS_NAME}:not(.${t.CURRENT_USERS_TWEET_CLASS_NAME}) {display: none;}`,document.body.appendChild(D)}this.allWaysDetailedView=D.alwaysDetailedView,this.translator=D.translator}convertEmojiToTwemoji(D){const u=(0,n.default)();return D.replace(u,(D=>{var u;let e="";try{for(const F of D)e+=`${null===(u=F.codePointAt(0))||void 0===u?void 0:u.toString(16)}-`}catch(D){throw new Error(`Failed to convert emoji to twemoji: ${D}`)}return e=e.replace(/-$/,""),`<img src="https://abs-0.twimg.com/emoji/v2/svg/${e}.svg" class="twemoji">`}))}run(){const D=document.querySelector(".shadowban-scanner-message:not(.text-inserted");if(!D)return;D.classList.add("text-inserted");const{messageType:u}=D.dataset;if(!u)throw new Error("Failed to get message type");const e=this.convertEmojiToTwemoji(this.translator(u));D.insertAdjacentHTML("afterbegin",e);const F=D.querySelector("button");if(!F)return;this.allWaysDetailedView?F.click():F.textContent=this.translator("showMore");const t=D.querySelector("pre");t&&(t.innerHTML=this.convertEmojiToTwemoji(this.translator(`${u}StatusMessage`)))}}},36:(D,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.Color=void 0,u.Color=class{constructor(){}get textColor(){const D=document.querySelector("[data-testid='User-Name'] div:first-child span, [data-testid='UserName'] div:first-child span");if(!D)throw new Error("Failed to get user name span of tweet");const{color:u}=getComputedStyle(D);return u}}},564:(D,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.Core=void 0;const F=e(296),t=e(919),n=e(338);e(962),u.Core=class{constructor(D){const u=new MutationObserver((()=>{const u=document.querySelectorAll(`[data-testid="tweet"]:not([${t.CHECKED_DATA_ATTRIBUTE}]`);for(const e of u)new n.TweetChecker(e).run(),D();const e=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${t.CHECKED_DATA_ATTRIBUTE}])`);e&&(new F.ProfileChecker(e).run(),D())})),e=new MutationObserver((()=>{const D=document.querySelector("main");D&&(e.disconnect(),u.observe(D,{subtree:!0,childList:!0}))}));e.observe(document.body,{subtree:!0,childList:!0})}}},552:(D,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.MessageElement=void 0;const F=e(919);u.MessageElement=class{constructor(D,u,e){if(this.div=document.createElement("div"),this.div.classList.add(F.MESSAGE_CLASS_NAME),this.div.dataset.messageType=e,this.div.style.color=u,"tweet"===D){const D=document.createElement("pre");D.style.display="none",this.div.appendChild(D);const u=document.createElement("button");u.addEventListener("click",(()=>{D.style.display="block",u.remove()})),this.div.appendChild(u)}}set messageType(D){this.div.dataset.messageType=D}get element(){return this.div}}},531:(D,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.MessageType=void 0,u.MessageType=class{constructor(){}fromTweetStatus(D){return D.user.possiblySensitive||D.tweet.possiblySensitive?D.user.possiblySensitive?D.tweet.possiblySensitive?D.tweet.possiblySensitiveEditable?"accountShadowbannedAndTweetFlaggedAsSensitive":"accountAndTweetShadowbanned":"accountShadowbanned":D.tweet.possiblySensitiveEditable?"tweetFlaggedAsSensitive":"tweetShadowbanned":"tweetNoProblem"}}},296:(D,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.ProfileChecker=void 0;const F=e(36),t=e(552),n=e(204),s=e(919);u.ProfileChecker=class{constructor(D){this.userName=D}run(){this.userName.setAttribute(s.CHECKED_DATA_ATTRIBUTE,"true");const D=new n.ProfileReactProps(this.userName).get();if(!Boolean(D.user.possibly_sensitive))return;const u=(new F.Color).textColor,e=new t.MessageElement("account",u,"accountShadowbanned"),C=document.querySelector("[data-testid='UserDescription']");if(!C)throw new Error("Failed to get user description of profile");C.insertAdjacentElement("afterend",e.element)}}},204:(D,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.ProfileReactProps=u.TweetReactProps=void 0;class e{constructor(D){this.element=D,this.reactPropsName=Object.getOwnPropertyNames(D).filter((D=>D.startsWith("__reactProps$")))[0]}get(){return this.element[this.reactPropsName].children[1].props}}u.TweetReactProps=class{constructor(D){this.tweet=D}get(){return new e(this.tweet).get().retweetWithCommentLink.state.quotedStatus}},u.ProfileReactProps=class{constructor(D){this.userName=D}get(){return new e(this.userName).get()}}},338:(D,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.TweetChecker=void 0;const F=e(36),t=e(552),n=e(531),s=e(204),C=e(919);u.TweetChecker=class{constructor(D){this.tweet=D}run(){this.tweet.setAttribute(C.CHECKED_DATA_ATTRIBUTE,"true");const D=this.tweet.querySelector("div[role='group'][id]");if(!D)throw new Error("Failed to get menu bar of tweet");const u=new s.TweetReactProps(D).get(),e={tweet:{possiblySensitive:Boolean(u.possibly_sensitive),possiblySensitiveEditable:!(!1===u.possibly_sensitive_editable),isTweetByCurrentUser:null===u.user.following},user:{possiblySensitive:Boolean(u.user.possibly_sensitive)}},E=(new F.Color).textColor,r=new t.MessageElement("tweet",E);e.tweet.isTweetByCurrentUser&&r.element.classList.add(C.CURRENT_USERS_TWEET_CLASS_NAME);const o=(new n.MessageType).fromTweetStatus(e);r.messageType=o,"tweetNoProblem"===o&&r.element.classList.add("shadowban-scanner-message-no-problem"),D.insertAdjacentElement("beforebegin",r.element)}}},978:function(D,u,e){var F=this&&this.__importDefault||function(D){return D&&D.__esModule?D:{default:D}};Object.defineProperty(u,"__esModule",{value:!0});const t=F(e(481));new(e(651).UserScriptBase)(t.default)},651:(D,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.UserScriptBase=void 0;const F=e(564),t=e(505),n=e(238);u.UserScriptBase=class{constructor(D){const u=Object.assign(Object.assign({},n.DEFAULT_SETTINGS),{translator:u=>D[u].message}),e=new t.TextFlow(u);new F.Core((()=>{e.run()}))}}},846:(D,u,e)=>{e.r(u),e.d(u,{default:()=>F});const F=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},481:D=>{D.exports=JSON.parse('{"manifest_description":{"message":"Twitterのシャドウバンを検出する拡張機能です。"},"accountShadowbanned":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。"},"accountShadowbannedStatusMessage":{"message":"🚫アカウントがシャドウバンされている可能性があります\\n✅ツイートにセンシティブフラグは付与されていません\\n✅ツイートに年齢制限はありません\\n🚫ツイートが検索結果に表示されない可能性があります"},"accountShadowbannedAndTweetFlaggedAsSensitive":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。また、このツイートにはセンシティブフラグが付与されています。"},"accountShadowbannedAndTweetFlaggedAsSensitiveStatusMessage":{"message":"🚫アカウントがシャドウバンされている可能性があります\\n🚫ツイートにセンシティブフラグが付与されています\\n✅ツイートに年齢制限はありません\\n🚫ツイートが検索結果に表示されない可能性があります"},"accountAndTweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"accountAndTweetShadowbannedStatusMessage":{"message":"🚫アカウントがシャドウバンされている可能性があります\\n🚫ツイートにセンシティブフラグが付与されています\\n🚫ツイートに年齢制限があります\\n🚫ツイートが検索結果に表示されない可能性があります"},"tweetFlaggedAsSensitive":{"message":"このツイートにはセンシティブフラグが付与されており、閲覧者の設定によっては検索結果に表示されません。"},"tweetFlaggedAsSensitiveStatusMessage":{"message":"✅アカウントはシャドウバンされていません\\n🚫ツイートにセンシティブフラグが付与されています\\n✅ツイートに年齢制限はありません\\n⚠️ツイートは閲覧者の設定によっては検索結果に表示されません"},"tweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetShadowbannedStatusMessage":{"message":"✅アカウントはシャドウバンされていません\\n🚫ツイートにセンシティブフラグが付与されています\\n🚫ツイートに年齢制限があります\\n🚫ツイートが検索結果に表示されない可能性があります"},"tweetNoProblem":{"message":"ツイートに問題は見つかりませんでした。"},"tweetNoProblemStatusMessage":{"message":"✅アカウントはシャドウバンされていません\\n✅ツイートにセンシティブフラグは付与されていません\\n✅ツイートに年齢制限はありません\\n✅ツイートは検索結果に表示されます"},"showMore":{"message":"▶さらに表示"},"settingsAlwaysDetailedView":{"message":"常に詳細情報を表示する"},"settingsShowMessageInAllTweets":{"message":"すべてのツイートに検証結果を表示する"},"settingsEnableOnlyForCurrentUsersTweets":{"message":"自分のツイートにのみ検証結果を表示する（ベータ版）"},"settingsPleaseReload":{"message":"設定を変更したらTwitterを再読み込みしてください。"}}')}},u={};function e(F){var t=u[F];if(void 0!==t)return t.exports;var n=u[F]={id:F,exports:{}};return D[F].call(n.exports,n,n.exports,e),n.exports}e.n=D=>{var u=D&&D.__esModule?()=>D.default:()=>D;return e.d(u,{a:u}),u},e.d=(D,u)=>{for(var F in u)e.o(u,F)&&!e.o(D,F)&&Object.defineProperty(D,F,{enumerable:!0,get:u[F]})},e.o=(D,u)=>Object.prototype.hasOwnProperty.call(D,u),e.r=D=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(D,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(D,"__esModule",{value:!0})},e.nc=void 0,e(978)})();