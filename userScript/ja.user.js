// ==UserScript==
// @name         Shadowban Scanner (ja)
// @namespace    https://github.com/Robot-Inventor/shadowban-scanner/
// @version      1.1.1
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

(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(213),r=n.n(s),o=n(645),a=n.n(o)()(r());a.push([e.id,".shadowban-scanner-message {\n    padding: 1em;\n    border-radius: 0.5em;\n    background: rgb(255, 0, 0, 0.2);\n    margin: 1em 0;\n}\n\n.shadowban-scanner-message-no-problem {\n    background: rgb(0, 255, 0, 0.2);\n}\n\n.shadowban-scanner-message button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    background: none;\n}\n\n.shadowban-scanner-message pre {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0.5rem 0 0 0;\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(s)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);s&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},213:e=>{e.exports=function(e){return e[1]}},962:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var s=n(379),r=n.n(s),o=n(795),a=n.n(o),i=n(569),c=n.n(i),d=n(565),l=n.n(d),u=n(216),p=n.n(u),m=n(589),f=n.n(m),h=n(402),w={};w.styleTagTransform=f(),w.setAttributes=l(),w.insert=c().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=p(),r()(h.Z,w);const v=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var o={},a=[],i=0;i<e.length;i++){var c=e[i],d=s.base?c[0]+s.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,s);s.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=s(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var i=n(o[a]);t[i].references--}for(var c=s(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,r&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},36:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0,t.Color=class{constructor(){}get textColor(){const e=document.querySelector("[data-testid='User-Name'] div:first-child span, [data-testid='UserName'] div:first-child span");if(!e)throw new Error("Failed to get user name span of tweet");const{color:t}=getComputedStyle(e);return t}}},564:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Core=void 0;const s=n(296),r=n(915),o=n(338);n(962),t.Core=class{constructor(e){const t=new MutationObserver((()=>{const t=document.querySelectorAll(`[data-testid="tweet"]:not([${r.CHECKED_DATA_ATTRIBUTE}]`);for(const n of t)new o.TweetChecker(n).run(),e();const n=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${r.CHECKED_DATA_ATTRIBUTE}])`);n&&(new s.ProfileChecker(n).run(),e())})),n=new MutationObserver((()=>{const e=document.querySelector("main");e&&(n.disconnect(),t.observe(e,{subtree:!0,childList:!0}))}));n.observe(document.body,{subtree:!0,childList:!0})}}},552:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageElement=void 0,t.MessageElement=class{constructor(e,t,n){if(this.div=document.createElement("div"),this.div.classList.add("shadowban-scanner-message"),this.div.dataset.messageType=n,this.div.style.color=t,"tweet"===e){const e=document.createElement("pre");e.style.display="none",this.div.appendChild(e);const t=document.createElement("button");t.addEventListener("click",(()=>{e.style.display="block",t.remove()})),this.div.appendChild(t)}}set messageType(e){this.div.dataset.messageType=e}get element(){return this.div}}},531:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageType=void 0,t.MessageType=class{constructor(){}fromTweetStatus(e){return e.user.possiblySensitive||e.tweet.possiblySensitive?e.user.possiblySensitive?e.tweet.possiblySensitive?e.tweet.possiblySensitiveEditable?"accountShadowbannedAndTweetFlaggedAsSensitive":"accountAndTweetShadowbanned":"accountShadowbanned":e.tweet.possiblySensitiveEditable?"tweetFlaggedAsSensitive":"tweetShadowbanned":"tweetNoProblem"}}},296:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileChecker=void 0;const s=n(36),r=n(552),o=n(204),a=n(915);t.ProfileChecker=class{constructor(e){this.userName=e}run(){this.userName.setAttribute(a.CHECKED_DATA_ATTRIBUTE,"true");const e=new o.ProfileReactProps(this.userName).get();if(!Boolean(e.user.possibly_sensitive))return;const t=(new s.Color).textColor,n=new r.MessageElement("account",t,"accountShadowbanned"),i=document.querySelector("[data-testid='UserDescription']");if(!i)throw new Error("Failed to get user description of profile");i.insertAdjacentElement("afterend",n.element)}}},204:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileReactProps=t.TweetReactProps=void 0;class n{constructor(e){this.element=e,this.reactPropsName=Object.getOwnPropertyNames(e).filter((e=>e.startsWith("__reactProps$")))[0]}get(){return this.element[this.reactPropsName].children[1].props}}t.TweetReactProps=class{constructor(e){this.tweet=e}get(){return new n(this.tweet).get().retweetWithCommentLink.state.quotedStatus}},t.ProfileReactProps=class{constructor(e){this.userName=e}get(){return new n(this.userName).get()}}},338:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TweetChecker=void 0;const s=n(36),r=n(552),o=n(531),a=n(204),i=n(915);t.TweetChecker=class{constructor(e){this.tweet=e}run(){this.tweet.setAttribute(i.CHECKED_DATA_ATTRIBUTE,"true");const e=this.tweet.querySelector("div[role='group'][id]");if(!e)throw new Error("Failed to get menu bar of tweet");const t=new a.TweetReactProps(e).get(),n={tweet:{possiblySensitive:t.possibly_sensitive,possiblySensitiveEditable:t.possibly_sensitive_editable},user:{possiblySensitive:t.user.possibly_sensitive}},c=(new s.Color).textColor,d=new r.MessageElement("tweet",c),l=(new o.MessageType).fromTweetStatus(n);d.messageType=l,"tweetNoProblem"===l&&d.element.classList.add("shadowban-scanner-message-no-problem"),e.insertAdjacentElement("beforebegin",d.element)}}},294:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_SETTINGS=void 0,t.DEFAULT_SETTINGS={alwaysDetailedView:!1,showMessageInAllTweets:!1}},915:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT_GENERATOR_ID=t.CHECKED_DATA_ATTRIBUTE=void 0,t.CHECKED_DATA_ATTRIBUTE="data-shadowban-checked",t.EVENT_GENERATOR_ID="shadowban-scanner-event-generator"},34:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextFlow=void 0,t.TextFlow=class{constructor(e,t,n){if(!e){const e=document.createElement("style");e.textContent=".shadowban-scanner-message-no-problem { display: none; }",document.body.appendChild(e)}this.allWaysDetailedView=t,this.translator=n}run(){const e=document.querySelector(".shadowban-scanner-message:not(.text-inserted");if(!e)return;e.classList.add("text-inserted");const{messageType:t}=e.dataset;if(!t)throw new Error("Failed to get message type");const n=this.translator(t);e.insertAdjacentText("afterbegin",n);const s=e.querySelector("button");if(!s)return;this.allWaysDetailedView?s.click():s.textContent=this.translator("showMore");const r=e.querySelector("pre");r&&(r.textContent=this.translator(`${t}StatusMessage`))}}},978:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(481));new(n(651).UserScriptBase)(r.default)},651:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserScriptBase=void 0;const s=n(564),r=n(34),o=n(294);t.UserScriptBase=class{constructor(e){const t=new r.TextFlow(o.DEFAULT_SETTINGS.showMessageInAllTweets,o.DEFAULT_SETTINGS.showMessageInAllTweets,(t=>e[t].message));new s.Core((()=>{t.run()}))}}},481:e=>{e.exports=JSON.parse('{"manifest_description":{"message":"Twitterのシャドウバンを検出する拡張機能です。"},"accountShadowbanned":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。"},"accountShadowbannedStatusMessage":{"message":"🚫アカウントがシャドウバンされている可能性があります\\n✅ツイートにセンシティブフラグは付与されていません\\n✅ツイートに年齢制限はありません\\n🚫ツイートが検索結果に表示されない可能性があります"},"accountShadowbannedAndTweetFlaggedAsSensitive":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されないかもしれません。また、このツイートにはセンシティブフラグが付与されています。"},"accountShadowbannedAndTweetFlaggedAsSensitiveStatusMessage":{"message":"🚫アカウントがシャドウバンされている可能性があります\\n🚫ツイートにセンシティブフラグが付与されています\\n✅ツイートに年齢制限はありません\\n🚫ツイートが検索結果に表示されない可能性があります"},"accountAndTweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"accountAndTweetShadowbannedStatusMessage":{"message":"🚫アカウントがシャドウバンされている可能性があります\\n🚫ツイートにセンシティブフラグが付与されています\\n🚫ツイートに年齢制限があります\\n🚫ツイートが検索結果に表示されない可能性があります"},"tweetFlaggedAsSensitive":{"message":"このツイートにはセンシティブフラグが付与されており、閲覧者の設定によっては検索結果に表示されません。"},"tweetFlaggedAsSensitiveStatusMessage":{"message":"✅アカウントはシャドウバンされていません\\n🚫ツイートにセンシティブフラグが付与されています\\n✅ツイートに年齢制限はありません\\n⚠️ツイートは閲覧者の設定によっては検索結果に表示されません"},"tweetShadowbanned":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetShadowbannedStatusMessage":{"message":"✅アカウントはシャドウバンされていません\\n🚫ツイートにセンシティブフラグが付与されています\\n🚫ツイートに年齢制限があります\\n🚫ツイートが検索結果に表示されない可能性があります"},"tweetNoProblem":{"message":"ツイートに問題は見つかりませんでした。"},"tweetNoProblemStatusMessage":{"message":"✅アカウントはシャドウバンされていません\\n✅ツイートにセンシティブフラグは付与されていません\\n✅ツイートに年齢制限はありません\\n✅ツイートは検索結果に表示されます"},"showMore":{"message":"▶さらに表示"},"settingsAlwaysDetailedView":{"message":"常に詳細情報を表示する"},"settingsShowMessageInAllTweets":{"message":"すべてのツイートに検証結果を表示する"},"settingsPleaseReload":{"message":"設定を変更したらTwitterを再読み込みしてください。"}}')}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={id:s,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(978)})();