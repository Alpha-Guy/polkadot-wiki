(self.webpackChunk=self.webpackChunk||[]).push([[9613],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>u,kt:()=>d});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(o),d=r,y=h["".concat(i,".").concat(d)]||h[d]||p[d]||n;return o?a.createElement(y,c(c({ref:t},u),{},{components:o})):a.createElement(y,c({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,c=new Array(n);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<n;l++)c[l]=o[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},36243:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,toc:()=>u,default:()=>h});var a=o(22122),r=o(19756),n=(o(67294),o(3905)),c=["components"],s={id:"kusama-social-recovery",title:"Social Recovery",sidebar_label:"Account Recovery"},i=void 0,l={unversionedId:"kusama-social-recovery",id:"kusama-social-recovery",isDocsHomePage:!1,title:"Social Recovery",description:"Managing an account is not an easy task. Many people have lost their private keys due to improper",source:"@site/../docs/kusama-social-recovery.md",sourceDirName:".",slug:"/kusama-social-recovery",permalink:"/docs/kusama-social-recovery",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/kusama-social-recovery.md",version:"current",lastUpdatedBy:"alex",lastUpdatedAt:1628867114,formattedLastUpdatedAt:"8/13/2021",frontMatter:{id:"kusama-social-recovery",title:"Social Recovery",sidebar_label:"Account Recovery"}},u=[{value:"Create a Recoverable Account",id:"create-a-recoverable-account",children:[]},{value:"Recover your Account",id:"recover-your-account",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,c);return(0,n.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Managing an account is not an easy task. Many people have lost their private keys due to improper\nkey management over the past few years. Kusama provides a method that allows users to recover their\naccounts by setting up a social recovery. It is an M-of-N recovery tool that is based on the\nmulti-signature wallet to get back access of your lost account."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: There is no way to get back your private key by using this method. This is just a way of\nperforming transactions on behalf of the lost account, so you can think of it as a proxy instead.")),(0,n.kt)("p",null,"In this guide, you will learn how to create a recoverable account, how to recover it, and what you\nneed to be aware of when using it."),(0,n.kt)("h2",{id:"create-a-recoverable-account"},"Create a Recoverable Account"),(0,n.kt)("p",null,"You will use your existing account to call ",(0,n.kt)("inlineCode",{parentName:"p"},"createRecovery")," to select a list of accounts that you\ntrust to help you recover the account when you lose the private key. To create a recoverable\naccount, you will be required to set a ",(0,n.kt)("inlineCode",{parentName:"p"},"threshold")," that is the number of your friends who need to\napprove the recovery process in order to recover your account."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(87145).Z})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: If you are recovering an account, ensure that your network is set to Kusama. You can do this\nby selecting the network from the top right corner in the Polkadot-JS UI.")),(0,n.kt)("p",null,"First, go to ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS Apps -> Accounts -> Accounts"),"\npage that shows all available accounts on your browser's local storage and Polkadot-JS extension. To\ncreate a recoverable account, make sure that you have some KSMs to pay for the transaction fees. You\nwill also need some for the reserve required by the account recovery setup."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kusama accounts page",src:o(50094).Z})),(0,n.kt)("p",null,'Then click the menu that is located beside the "send" button, and choose "Make recoverable".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kusama accounts make recoverable",src:o(70124).Z})),(0,n.kt)("p",null,"Now you need to provide the following information:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"trusted social recovery helpers")," - A list of accounts that you trust. These can help you if you\nlose the private key. Since setting up a recoverable account requires you to lock up KSM, ensure\nyour account has enough transferable balance to cover it. As you select additional recovery helpers,\nmore KSM will be required."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"recovery threshold")," - The number of friends required to submit a ",(0,n.kt)("inlineCode",{parentName:"p"},"vouchRecovery")," transaction in\norder to recover the account."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: 1 is the minimum, but it is not recommended to set a small number. If you set 1, that means\nany of your recovery helpers would be able to recover your account.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"recovery block delay")," - Once the threshold is reached, you will need to wait until the block delay\nhas passed until you can claim the recovery. This is a protection mechanism to allow the account\nowner to have enough time to check and react in case someone pretends to be you and initiates a\nrecovery process."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Setting the block delay to be a little longer would be better since even if an attacker\nacquired enough signatures to recover your account, they would still have to wait until the block\ndelay is passed in order to control your account.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kusama accounts page2",src:o(97603).Z})),(0,n.kt)("h2",{id:"recover-your-account"},"Recover your Account"),(0,n.kt)("p",null,"This section would be showing you how to initiate a recovery process and get back the balance that\nheld in the lost account to the new account."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(67153).Z})),(0,n.kt)("p",null,"The above diagram shows the whole process of recovering an account."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Ensure that your new account has enough KSM to pay for the transaction fees and the amount\nthat is used for reserve when doing the recovery.")),(0,n.kt)("p",null,'Navigate to the menu that is located beside the send button in the row of your new account and click\nthe "Initiate recover for another" option.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kusama accounts initial recoverable",src:o(70124).Z})),(0,n.kt)("p",null,'Then input the address you would like to recover in the "recover this account" field and click\n"Start recovery".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kusama accounts initial recoverable2",src:o(78799).Z})),(0,n.kt)("p",null,"Once the transaction went through, some KSM will be locked to prevent malicious behavior."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(61881).Z})),(0,n.kt)("p",null,'Now call your friends that you have set in the first section, but heading over to "Developer" >\n"Extrinsics" and using the recovery pallet. They are required to submit a ',(0,n.kt)("inlineCode",{parentName:"p"},"vouchRecovery"),"\ntransaction."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(3440).Z})),(0,n.kt)("p",null,"Once the threshold is reached and the block delay is passed, use the new account to submit a\n",(0,n.kt)("inlineCode",{parentName:"p"},"claimRecovery")," transaction that would set a proxy on behalf of your lost account. It means that you\ncan still indirectly use the lost account to interact with the network."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(73977).Z})),(0,n.kt)("p",null,'To see the proxy information, use your new account by calling the "recovery->proxy(Accountid)"\nfunction at the ',(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain state")," page. It should point to\nyour lost account."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(60938).Z})),(0,n.kt)("p",null,'Next, in order to call the "closeRecovery" transaction, you can make use of the "asRecovered"\nfunction as your lost account to get the locked KSM.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(98503).Z})),(0,n.kt)("p",null,'Once the transaction goes through, the reserved KSM from the "NEW-ACC" will have been moved to the\nlost account. This is a way of preventing someone from recovering other accounts maliciously.\nImagine if someone tried to initiate recovery on your account, you can do this to slash their locked\nKSM.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(46121).Z})),(0,n.kt)("p",null,"Moving on, we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"asRecovered")," function to submit the ",(0,n.kt)("inlineCode",{parentName:"p"},"removeRecovery")," transaction on behalf of\nthe lost account to release the reserved KSM from your lost account."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(49480).Z})),(0,n.kt)("p",null,"Now your account balance should be transferable."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(18259).Z})),(0,n.kt)("p",null,"Finally, transfer all of your available balance from the lost account to the new account."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(28478).Z})),(0,n.kt)("p",null,"The recovery process is now complete and successful."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(83359).Z})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: There is still one possible way to recover the account without going through the recovery\nprocess. That is by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Root")," origin. However, in order to use root permissions, you will\nneed to either go through the council or submit a public proposal. To learn more about governance,\nsee ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"here"),".")),(0,n.kt)("h2",{id:"further-reading"},"Further Reading"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/recovery/src/lib.rs"},"Substrate's Recovery Pallet")," -\nThe Rust implementation of the recovery pallet.")))}h.isMDXComponent=!0},78799:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/kusama_make_account_initial-3061c821ee7789052080f87088e04e91.png"},97603:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/kusama_make_account_recoverable-62d204d0f94bee69417a9eed0923a8ab.png"},70124:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/kusama_make_recoverable-cf8cc2b88a20470cc7b9b475fe74b2b4.png"},50094:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/kusama_social_recovery_accounts_page-9a2106084803cc8bb9c3d33251d9fda4.png"},98503:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-10-c5174d9c34444108a0f9b65c8709a088.png"},46121:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-11-8d65e3b3645c8d577a04ce5711a23da1.png"},49480:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-12-d6d627497f4bf3b1f4af8cd69c86ac33.png"},18259:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-13-48311acc0e472c4d1d8995fc58a1e661.png"},28478:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-14-b80cf0a40d80b3c845a23d0817f9634e.png"},83359:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-15-20dbcbcf49e1f513b798b1b05e01543c.png"},61881:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-6-474cafc1a1ef60b8cd79b4e48bef24e2.png"},3440:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-7-23c91290b58d407c23fc2ac389626e6a.png"},73977:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-8-8062fe4c4c20f3da45f1460b1cc3a5fa.png"},60938:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-9-c6a6920959523fadb5942449ccc17441.png"},87145:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-diag-1-7d7432fe88f494dfa884b1268204e77f.png"},67153:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/social-recovery-diag-2-872bb7e71e872580fb1be0d523775c3a.png"}}]);