"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[612],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,y=g["".concat(c,".").concat(d)]||g[d]||u[d]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[g]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const l={},i="GoogleFirestore",a={unversionedId:"connector-v2/sink/GoogleFirestore",id:"connector-v2/sink/GoogleFirestore",title:"GoogleFirestore",description:"Google Firestore sink connector",source:"@site/docs/connector-v2/sink/GoogleFirestore.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/GoogleFirestore",permalink:"/zh-CN/docs/connector-v2/sink/GoogleFirestore",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/GoogleFirestore.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FtpFile",permalink:"/zh-CN/docs/connector-v2/sink/FtpFile"},next:{title:"Greenplum",permalink:"/zh-CN/docs/connector-v2/sink/Greenplum"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"project_id string",id:"project_id-string",level:3},{value:"collection string",id:"collection-string",level:3},{value:"credentials string",id:"credentials-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:s},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"googlefirestore"},"GoogleFirestore"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Google Firestore sink connector")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Write data to Google Firestore"),(0,o.yg)("h2",{id:"key-features"},"Key features"),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"name"),(0,o.yg)("th",{parentName:"tr",align:null},"type"),(0,o.yg)("th",{parentName:"tr",align:null},"required"),(0,o.yg)("th",{parentName:"tr",align:null},"default value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"project_id"),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"yes"),(0,o.yg)("td",{parentName:"tr",align:null},"-")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"collection"),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"yes"),(0,o.yg)("td",{parentName:"tr",align:null},"-")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"credentials"),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"no"),(0,o.yg)("td",{parentName:"tr",align:null},"-")))),(0,o.yg)("h3",{id:"project_id-string"},"project_id ","[string]"),(0,o.yg)("p",null,"The unique identifier for a Google Firestore database project."),(0,o.yg)("h3",{id:"collection-string"},"collection ","[string]"),(0,o.yg)("p",null,"The collection of Google Firestore."),(0,o.yg)("h3",{id:"credentials-string"},"credentials ","[string]"),(0,o.yg)("p",null,"The credentials of Google Cloud service account, use base64 codec. If not set, need to check the ",(0,o.yg)("inlineCode",{parentName:"p"},"GOOGLE APPLICATION CREDENTIALS")," environment exists."),(0,o.yg)("h3",{id:"common-options"},"common options"),(0,o.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"common-options.md"},"Sink Common Options")," for details."),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'GoogleFirestore {\n  project_id = "dummy-project-id",\n  collection = "dummy-collection",\n  credentials = "dummy-credentials"\n}  \n')),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("h3",{id:"next-version"},"next version"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add Google Firestore Sink Connector")))}u.isMDXComponent=!0}}]);