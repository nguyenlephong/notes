"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7043],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),m=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=m(n),h=i,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(d,o(o({ref:e},p),{},{components:n})):a.createElement(d,o({ref:e},p))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},987:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:10,sidebar_label:"Testing Implementation",sidebar_class_name:"green",title:"Testing Implementation - Nguy\u1ec5n L\xea Phong",description:"Testing Implementation",image:"https://cdn.jsdelivr.net/gh/nguyenlephong/dom-pub/shared/images/cv/images/dom.png",keywords:["unit test","end-to-end test","Frontend Developer","Nguy\u1ec5n L\xea Phong"]},l="Testing Implementation",m={unversionedId:"frontend/problems/unit-test",id:"frontend/problems/unit-test",title:"Testing Implementation - Nguy\u1ec5n L\xea Phong",description:"Testing Implementation",source:"@site/docs/frontend/problems/unit-test.md",sourceDirName:"frontend/problems",slug:"/frontend/problems/unit-test",permalink:"/notes/docs/frontend/problems/unit-test",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/problems/unit-test.md",tags:[],version:"current",lastUpdatedBy:"Nguyen Le Phong",lastUpdatedAt:1654338896,formattedLastUpdatedAt:"6/4/2022",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Testing Implementation",sidebar_class_name:"green",title:"Testing Implementation - Nguy\u1ec5n L\xea Phong",description:"Testing Implementation",image:"https://cdn.jsdelivr.net/gh/nguyenlephong/dom-pub/shared/images/cv/images/dom.png",keywords:["unit test","end-to-end test","Frontend Developer","Nguy\u1ec5n L\xea Phong"]},sidebar:"tutorialSidebar",previous:{title:"Performance Metrics",permalink:"/notes/docs/frontend/problems/performance"},next:{title:"Z-Index",permalink:"/notes/docs/frontend/problems/z-index"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Unit Test",id:"unit-test",level:2},{value:"End-to-end Test",id:"end-to-end-test",level:2},{value:"Lib/framework support",id:"libframework-support",level:2},{value:"1. JestJS",id:"1-jestjs",level:3},{value:"2. Cypress",id:"2-cypress",level:3},{value:"3. Truffle",id:"3-truffle",level:3},{value:"4. MochaJS",id:"4-mochajs",level:3},{value:"5. Selenium",id:"5-selenium",level:3},{value:"6. Puppeteer",id:"6-puppeteer",level:3},{value:"7. Cucumber",id:"7-cucumber",level:3},{value:"Structure Testing implementation of me",id:"structure-testing-implementation-of-me",level:2},{value:"Notes",id:"notes",level:2},{value:"Functional Software Testing Types",id:"functional-software-testing-types",level:3},{value:"Software Performance Testing",id:"software-performance-testing",level:3},{value:"Data Driven Framework",id:"data-driven-framework",level:3}],u={toc:c};function h(t){var e=t.components,s=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-implementation"},"Testing Implementation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Testing Implementation banner",src:n(8890).Z,width:"839",height:"437"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Test")," l\xe0 t\u1eeb m\u1ed9t qu\xe1 \u01b0 kh\xe1 g\u1ea7n g\u0169i v\u1edbi ch\xfang ta r\u1ed3i. L\xe0m c\xe1i t\xednh n\u0103ng n\xe0o m\xe0 kh\xf4ng test k\u1ef9 th\xec ng\u01b0\u1eddi c\u1ef1c nh\u1ea5t l\xe0 ng\u01b0\u1eddi \u0111i l\xe0m cho c\xe1i t\xednh n\u0103ng \u0111\xf3 \u0111\xfang tr\u1edf l\u1ea1i (ho\u1eb7c l\xe0 ng\u01b0\u1eddi \u0111\u1ebfn sau, ho\u1eb7c ng\u01b0\u1eddi \u0111\xf3 kh\xf4ng ai kh\xe1c l\xe0 b\u1ea1n \ud83d\ude01)."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Software Testing Framework",src:n(3522).Z,width:"914",height:"509"})),(0,r.kt)("h2",{id:"unit-test"},"Unit Test"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Unit Test L\xe0 g\xec?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unit Test l\xe0 m\u1ed9t lo\u1ea1i ki\u1ec3m th\u1eed ph\u1ea7n m\u1ec1m trong \u0111\xf3 c\xe1c \u0111\u01a1n v\u1ecb hay th\xe0nh ph\u1ea7n ri\xeang l\u1ebb c\u1ee7a ph\u1ea7n m\u1ec1m \u0111\u01b0\u1ee3c ki\u1ec3m th\u1eed. Ki\u1ec3m th\u1eed \u0111\u01a1n v\u1ecb \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n trong qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"M\u1ed9t Unit l\xe0 m\u1ed9t th\xe0nh ph\u1ea7n nh\u1ecf nh\u1ea5t m\xe0 ta c\xf3 th\u1ec3 ki\u1ec3m tra \u0111\u01b0\u1ee3c nh\u01b0 c\xe1c h\xe0m (",(0,r.kt)("strong",{parentName:"li"},"Function"),"), th\u1ee7 t\u1ee5c (",(0,r.kt)("strong",{parentName:"li"},"Procedure"),"), l\u1edbp (",(0,r.kt)("strong",{parentName:"li"},"Class"),"), ho\u1eb7c c\xe1c ph\u01b0\u01a1ng th\u1ee9c (",(0,r.kt)("strong",{parentName:"li"},"Method"),")."),(0,r.kt)("li",{parentName:"ul"},"M\u1ed7i UT s\u1ebd g\u1eedi \u0111i m\u1ed9t th\xf4ng \u0111i\u1ec7p v\xe0 ki\u1ec3m tra c\xe2u tr\u1ea3 l\u1eddi nh\u1eadn \u0111\u01b0\u1ee3c \u0111\xfang hay kh\xf4ng, bao g\u1ed3m:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"C\xe1c k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 mong mu\u1ed1n"),(0,r.kt)("li",{parentName:"ul"},"C\xe1c l\u1ed7i ngo\u1ea1i l\u1ec7 mong mu\u1ed1n")))))),(0,r.kt)("h2",{id:"end-to-end-test"},"End-to-end Test"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"End-to-end Test L\xe0 g\xec?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ki\u1ec3m th\u1eed End to End ",(0,r.kt)("strong",{parentName:"p"},"(E2E)")," l\xe0 m\u1ed9t ph\u01b0\u01a1ng ph\xe1p ki\u1ec3m th\u1eed ph\u1ea7n m\u1ec1m \u0111\u1ec3 ki\u1ec3m tra lu\u1ed3ng \u1ee9ng d\u1ee5ng t\u1eeb \u0111\u1ea7u \u0111\u1ebfn cu\u1ed1i. N\xf3 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n t\u1eeb \u0111\u1ea7u \u0111\u1ebfn cu\u1ed1i trong c\xe1c t\xecnh hu\u1ed1ng th\u1ef1c t\u1ebf nh\u01b0 giao ti\u1ebfp c\u1ee7a \u1ee9ng d\u1ee5ng v\u1edbi ph\u1ea7n c\u1ee9ng, m\u1ea1ng, c\u01a1 s\u1edf d\u1eef li\u1ec7u v\xe0 c\xe1c \u1ee9ng d\u1ee5ng kh\xe1c."),(0,r.kt)("p",{parentName:"div"},"L\xfd do ch\xednh \u0111\u1ec3 th\u1ef1c hi\u1ec7n th\u1eed nghi\u1ec7m n\xe0y l\xe0 \u0111\u1ec3 x\xe1c \u0111\u1ecbnh s\u1ef1 ph\u1ee5 thu\u1ed9c l\u1eabn nhau c\u1ee7a m\u1ed9t \u1ee9ng d\u1ee5ng c\u0169ng nh\u01b0 \u0111\u1ea3m b\u1ea3o r\u1eb1ng th\xf4ng tin \u0111\u01b0\u1ee3c truy\u1ec1n \u0111\u1ea1t gi\u1eefa c\xe1c th\xe0nh ph\u1ea7n h\u1ec7 th\u1ed1ng kh\xe1c nhau l\xe0 ch\xednh x\xe1c. N\xf3 th\u01b0\u1eddng \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n sau khi to\xe0n b\u1ed9 ch\u1ee9c n\u0103ng v\xe0 h\u1ec7 th\u1ed1ng c\u1ee7a \u1ee9ng d\u1ee5ng \u0111\xe3 \u0111\u01b0\u1ee3c ki\u1ec3m th\u1eed."))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Notes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Nh\u1eefng r\u1ee7i ro l\u1edbn c\xf3 th\u1ec3 tr\xe1nh \u0111\u01b0\u1ee3c v\xe0 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c ki\u1ec3m so\xe1t:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Ki\u1ec3m tra v\xe0 th\u1ef1c hi\u1ec7n x\xe1c minh lu\u1ed3ng h\u1ec7 th\u1ed1ng"),(0,r.kt)("li",{parentName:"ul"},"T\u0103ng ph\u1ea1m vi bao ph\u1ee7 th\u1eed nghi\u1ec7m c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c ",(0,r.kt)("inlineCode",{parentName:"li"},"sub-system")," li\xean quan \u0111\u1ebfn h\u1ec7 th\u1ed1ng ph\u1ea7n m\u1ec1m"),(0,r.kt)("li",{parentName:"ul"},"C\u1ed1 g\u1eafng ph\xe1t hi\u1ec7n c\xe1c v\u1ea5n \u0111\u1ec1 n\u1ebfu c\xf3 v\u1edbi c\xe1c ",(0,r.kt)("inlineCode",{parentName:"li"},"sub-system"))),(0,r.kt)("p",{parentName:"div"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 ho\u1ea1t \u0111\u1ed9ng \u0111\u01b0\u1ee3c bao g\u1ed3m trong qu\xe1 tr\xecnh End to End testing :"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Nghi\xean c\u1ee9u k\u1ef9 l\u01b0\u1ee1ng c\xe1c y\xeau c\u1ea7u \u0111\u1ec3 th\u1ef1c hi\u1ec7n th\u1eed nghi\u1ec7m"),(0,r.kt)("li",{parentName:"ul"},"Thi\u1ebft l\u1eadp c\xe1c m\xf4i tr\u01b0\u1eddng th\u1eed nghi\u1ec7m th\xedch h\u1ee3p"),(0,r.kt)("li",{parentName:"ul"},"Nghi\xean c\u1ee9u k\u1ef9 l\u01b0\u1ee1ng c\xe1c y\xeau c\u1ea7u v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ph\u1ea7n c\u1ee9ng")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ph\u1ea7n m\u1ec1m"),"."),(0,r.kt)("li",{parentName:"ul"},"M\xf4 t\u1ea3 t\u1ea5t c\u1ea3 c\xe1c ",(0,r.kt)("inlineCode",{parentName:"li"},"sub-system")," c\u0169ng nh\u01b0 h\u1ec7 th\u1ed1ng ph\u1ea7n m\u1ec1m ch\xednh c\xf3 li\xean quan."),(0,r.kt)("li",{parentName:"ul"},"Li\u1ec7t k\xea c\xe1c vai tr\xf2 v\xe0 tr\xe1ch nhi\u1ec7m \u0111\u1ed1i v\u1edbi t\u1ea5t c\u1ea3 c\xe1c h\u1ec7 th\u1ed1ng v\xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"sub-system")," c\xf3 li\xean quan."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c ph\u01b0\u01a1ng ph\xe1p \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong th\u1eed nghi\u1ec7m n\xe0y c\u0169ng nh\u01b0 c\xe1c ti\xeau chu\u1ea9n \u0111\u01b0\u1ee3c tu\xe2n theo, c\xf9ng v\u1edbi m\xf4 t\u1ea3 c\u1ee7a n\xf3."),(0,r.kt)("li",{parentName:"ul"},"Thi\u1ebft k\u1ebf c\xe1c tr\u01b0\u1eddng h\u1ee3p ki\u1ec3m th\u1eed c\u0169ng nh\u01b0 theo d\xf5i c\xe1c y\xeau c\u1ea7u"),(0,r.kt)("li",{parentName:"ul"},"Ghi l\u1ea1i ho\u1eb7c l\u01b0u d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o v\xe0 \u0111\u1ea7u ra cho m\u1ed7i h\u1ec7 th\u1ed1ng.")))),(0,r.kt)("h2",{id:"libframework-support"},"Lib/framework support"),(0,r.kt)("h3",{id:"1-jestjs"},"1. JestJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Home page: ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"https://jestjs.io/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M\u1ed9t s\u1ea3n ph\u1ea9m c\u1ee7a ",(0,r.kt)("strong",{parentName:"p"},"Facebook"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delightful JavaScript Testing:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb Developer Ready: A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83c\udfc3\ud83c\udffd Instant Feedback: Fast, interactive watch mode only runs test files related to changed files.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udcf8 Snapshot Testing: Capture snapshots of large objects to simplify testing and to analyze how they change over time.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Github ",(0,r.kt)("strong",{parentName:"p"},"(39K star)"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest"},"https://github.com/facebook/jest")))),(0,r.kt)("h3",{id:"2-cypress"},"2. Cypress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Home page: ",(0,r.kt)("a",{parentName:"li",href:"https://www.cypress.io/"},"https://www.cypress.io/")),(0,r.kt)("li",{parentName:"ul"},"Fast, easy and reliable testing for anything that runs in a browser."),(0,r.kt)("li",{parentName:"ul"},"Github ",(0,r.kt)("strong",{parentName:"li"},"(~39K star)"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cypress-io/cypress"},"https://github.com/cypress-io/cypress"))),(0,r.kt)("h3",{id:"3-truffle"},"3. Truffle"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Truffle overview")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier. With Truffle, you get:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Built-in smart contract compilation, linking, deployment and binary management."),(0,r.kt)("li",{parentName:"ul"},"Automated contract testing for rapid development."),(0,r.kt)("li",{parentName:"ul"},"Scriptable, extensible deployment & migrations framework."),(0,r.kt)("li",{parentName:"ul"},"Network management for deploying to any number of public & private networks."),(0,r.kt)("li",{parentName:"ul"},"Package management with EthPM & NPM, using the ERC190 standard."),(0,r.kt)("li",{parentName:"ul"},"Interactive console for direct contract communication."),(0,r.kt)("li",{parentName:"ul"},"Configurable build pipeline with support for tight integration."),(0,r.kt)("li",{parentName:"ul"},"External script runner that executes scripts within a Truffle environment.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Home page: ",(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/"},"https://trufflesuite.com/")),(0,r.kt)("li",{parentName:"ul"},"Github ",(0,r.kt)("strong",{parentName:"li"},"(13K star)"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/trufflesuite/truffle"},"https://github.com/trufflesuite/truffle"))),(0,r.kt)("h3",{id:"4-mochajs"},"4. MochaJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Home page: ",(0,r.kt)("a",{parentName:"li",href:"https://mochajs.org/"},"https://mochajs.org/")),(0,r.kt)("li",{parentName:"ul"},"Simple, flexible, fun JavaScript test framework for Node.js & The Browser."),(0,r.kt)("li",{parentName:"ul"},"Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases"),(0,r.kt)("li",{parentName:"ul"},"Github ",(0,r.kt)("strong",{parentName:"li"},"(21K star)"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mochajs/mocha"},"https://github.com/mochajs/mocha"))),(0,r.kt)("h3",{id:"5-selenium"},"5. Selenium"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Selenium Overview")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation. Selenium specifically provides an infrastructure for the W3C WebDriver specification \u2014 a platform and language-neutral coding interface compatible with all major web browsers."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Home page: ",(0,r.kt)("a",{parentName:"li",href:"https://www.selenium.dev/"},"https://www.selenium.dev/")),(0,r.kt)("li",{parentName:"ul"},"Primarily it is for automating web applications for testing purposes, but is certainly not limited to just that."),(0,r.kt)("li",{parentName:"ul"},"Boring web-based administration tasks can (and should) also be automated as well."),(0,r.kt)("li",{parentName:"ul"},"Github ",(0,r.kt)("strong",{parentName:"li"},"(~24K star)"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seleniumhq/selenium"},"https://github.com/seleniumhq/selenium"))),(0,r.kt)("h3",{id:"6-puppeteer"},"6. Puppeteer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Home page: ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/"},"https://pptr.dev/")),(0,r.kt)("li",{parentName:"ul"},"L\xe0 m\u1ed9t s\u1ea3n ph\u1ea9m c\u1ee7a ",(0,r.kt)("strong",{parentName:"li"},"Google")),(0,r.kt)("li",{parentName:"ul"},"Headless Chrome Node.js API"),(0,r.kt)("li",{parentName:"ul"},"Github ",(0,r.kt)("strong",{parentName:"li"},"(78K star)"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer"},"https://github.com/puppeteer/puppeteer"))),(0,r.kt)("h3",{id:"7-cucumber"},"7. Cucumber"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Home page: ",(0,r.kt)("a",{parentName:"li",href:"https://cucumber.io/"},"https://cucumber.io/")),(0,r.kt)("li",{parentName:"ul"},"Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team."),(0,r.kt)("li",{parentName:"ul"},"Github: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cucumber"},"https://github.com/cucumber"))),(0,r.kt)("h2",{id:"structure-testing-implementation-of-me"},"Structure Testing implementation of me"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".root folder (__test__)\n\u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u251c\u2500\u2500 PSearch.test.jsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 PTag.test.jsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 ...\n\u2502\xa0\xa0 \u2514\u2500\u2500 __snapshots__\n\u251c\u2500\u2500 config.js\n\u251c\u2500\u2500 utils\n\u2502\xa0\xa0 \u251c\u2500\u2500 ArrayUtil.test.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 ObjectUtils.test.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 StringUtils.test.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 TimeUtils.test.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 UrlUtils.test.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 global-context.js\n\u251c\u2500\u2500 services\n\u2502\xa0\xa0 \u251c\u2500\u2500 DataTransferService.test.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 URLService.test.js\n\u251c\u2500\u2500 supports\n\u2502\xa0\xa0 \u2514\u2500\u2500 callApi.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 mocks\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("h3",{id:"functional-software-testing-types"},"Functional Software Testing Types"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Functional Software Testing Types",src:n(7797).Z,width:"849",height:"522"})),(0,r.kt)("h3",{id:"software-performance-testing"},"Software Performance Testing"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Software Performance Testing",src:n(7127).Z,width:"594",height:"405"})),(0,r.kt)("h3",{id:"data-driven-framework"},"Data Driven Framework"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Driven Framework",src:n(4902).Z,width:"1514",height:"900"})))}h.isMDXComponent=!0},7797:function(t,e,n){e.Z=n.p+"assets/images/functional-software-testing-types-74b95e9bdd3b0f001f036d130303ade0.jpeg"},7127:function(t,e,n){e.Z=n.p+"assets/images/software-performance-testing-cfd98513fbfdf051af469a6b312882c8.jpeg"},3522:function(t,e,n){e.Z=n.p+"assets/images/software-testing-framework-5fa858089a330b2eb2bdbad763371857.png"},4902:function(t,e,n){e.Z=n.p+"assets/images/test-data-driven-framework-fee01792756174b7758f4d2352035300.png"},8890:function(t,e,n){e.Z=n.p+"assets/images/testing-implementation-c25c8085ed74df12f01001559818ce0f.png"}}]);