(self.webpackChunk=self.webpackChunk||[]).push([[8901],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,g=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],u={id:"kusama-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",slug:"../../kusama-bug-bounty"},l=void 0,s={unversionedId:"general/kusama/kusama-bug-bounty",id:"general/kusama/kusama-bug-bounty",isDocsHomePage:!1,title:"Bug Bounty",description:"We call on our community and all bug bounty hunters to help identify bugs in Kusama.",source:"@site/../docs/general/kusama/kusama-bug-bounty.md",sourceDirName:"general/kusama",slug:"/kusama-bug-bounty",permalink:"/docs/kusama-bug-bounty",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-bug-bounty.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1629137288,formattedLastUpdatedAt:"8/16/2021",frontMatter:{id:"kusama-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",slug:"../../kusama-bug-bounty"}},c=[{value:"Eligibility",id:"eligibility",children:[]},{value:"How to report a bug",id:"how-to-report-a-bug",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We call on our community and all bug bounty hunters to help identify bugs in Kusama."),(0,o.kt)("p",null,"If you discover a bug, we appreciate your cooperation in responsibly investigating and reporting it\nas per ",(0,o.kt)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"instructions on the Web3 Foundation website"),".\nDisclosure to any third parties disqualifies bug bounty eligibility."),(0,o.kt)("h2",{id:"eligibility"},"Eligibility"),(0,o.kt)("p",null,"Generally speaking, any bug that poses a significant vulnerability, either to the soundness of\nprotocols and protocol/implementation compliance to network security, to classical client security\nas well as security of cryptographic primitives, could be eligible for reward. Please note that it's\nentirely at our discretion to decide whether a bug is significant enough to be eligible for reward."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples include:")," An attack that could disrupt the entire network and harm the validity to the\nnetwork would be considered a critical threat. An attack that would disrupt in service to others\nwould be considered a high threat."),(0,o.kt)("p",null,"Please note: The submission quality will be a large factor in the level of considered compensation.\nA high-quality submission includes an explanation of how the bug can be reproduced, how it was\ndiscovered, and elsewise critical details. Please disclose responsibly; disclosure to any third\nparties disqualifies bug bounty eligibility."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Responsible investigation and reporting")," Responsible investigation and reporting include, but\nisn't limited to, the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don't violate the privacy of other users, destroy data, etc."),(0,o.kt)("li",{parentName:"ul"},"Don't defraud or harm Kusama network or its users during your research; you should make a good\nfaith effort to not interrupt or degrade our services."),(0,o.kt)("li",{parentName:"ul"},"Don't target the validators' physical security measures, or attempt to use social engineering,\nspam, distributed denial of service (DDoS) attacks, etc."),(0,o.kt)("li",{parentName:"ul"},"Initially report the bug only to us and not to anyone else."),(0,o.kt)("li",{parentName:"ul"},"Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give\nus adequate written warning before disclosing it to anyone else."),(0,o.kt)("li",{parentName:"ul"},"In general, please investigate and report bugs in a way that makes a reasonable, good-faith effort\nnot to be disruptive or harmful to us or our users. Otherwise, your actions might be interpreted\nas an attack rather than an effort to be helpful.")),(0,o.kt)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,o.kt)("p",null,"Please follow the instructions at\n",(0,o.kt)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"web3.foundation/security-report/"),"."))}d.isMDXComponent=!0}}]);