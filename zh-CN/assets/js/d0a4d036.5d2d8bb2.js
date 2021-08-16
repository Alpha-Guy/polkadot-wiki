(self.webpackChunk=self.webpackChunk||[]).push([[1434],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37741:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>c});var o=n(22122),i=n(19756),r=(n(67294),n(3905)),a=["components"],l={id:"mirror-maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating",slug:"../maintain-guides-how-to-stop-validating"},s=void 0,u={unversionedId:"maintain/mirror-maintain-guides-how-to-stop-validating",id:"maintain/mirror-maintain-guides-how-to-stop-validating",isDocsHomePage:!1,title:"How to Stop Validating",description:"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or",source:"@site/../docs/maintain/mirror-maintain-guides-how-to-stop-validating.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-stop-validating",permalink:"/zh-CN/docs/maintain-guides-how-to-stop-validating",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/mirror-maintain-guides-how-to-stop-validating.md",version:"current",frontMatter:{id:"mirror-maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating",slug:"../maintain-guides-how-to-stop-validating"}},d=[{value:"Chill Validator",id:"chill-validator",children:[]},{value:"Purge validator session keys",id:"purge-validator-session-keys",children:[]},{value:"Unbond your tokens",id:"unbond-your-tokens",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or\nserver maintenance), submitting the ",(0,r.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,r.kt)("inlineCode",{parentName:"p"},"staking")," pallet should suffice. It is\nonly if you wish to unbond funds or reap an account that you should continue with the following."),(0,r.kt)("p",null,"To ensure a smooth stop to validation, make sure you should do the following actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chill your validator"),(0,r.kt)("li",{parentName:"ul"},"Purge validator session keys"),(0,r.kt)("li",{parentName:"ul"},"Unbond your tokens")),(0,r.kt)("p",null,"These can all be done with ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," interface or with\nextrinsics."),(0,r.kt)("h2",{id:"chill-validator"},"Chill Validator"),(0,r.kt)("p",null,"To chill your validator or nominator, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"staking.chill()")," extrinsic. See the\n",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-chill"},"How to Chill")," page for more information. You can also\n",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-simple-payouts#claiming-rewards"},"claim your rewards")," at this time."),(0,r.kt)("h2",{id:"purge-validator-session-keys"},"Purge validator session keys"),(0,r.kt)("p",null,"Purging the validator's session keys removes the key reference to your stash. This can be done\nthrough the ",(0,r.kt)("inlineCode",{parentName:"p"},"session.purgeKeys()")," extrinsic with the controller account."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: ",(0,r.kt)("strong",{parentName:"p"},"If you skip this step, you will not be able to reap your stash account"),", and you will\nneed to rebond, purge the session keys, unbond, and wait the unbonding period again before being\nable to transfer your tokens. See ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-unbond"},"Unbonding and Rebonding")," for\nmore details.")),(0,r.kt)("h2",{id:"unbond-your-tokens"},"Unbond your tokens"),(0,r.kt)("p",null,"Unbonding your tokens can be done through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Network > Staking > Account actions"),' page in\nPolkadotJS Apps by clicking the corrosponding stash account dropdown and selecting "Unbond funds".\nThis can also be done through the ',(0,r.kt)("inlineCode",{parentName:"p"},"staking.unbond()")," extrinsic with the controller account."))}c.isMDXComponent=!0}}]);