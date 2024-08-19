"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[94837],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(n),f=a,m=g["".concat(p,".").concat(f)]||g[f]||c[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={},l="Split",o={unversionedId:"flink/configuration/transform-plugins/Split",id:"version-2.1.0/flink/configuration/transform-plugins/Split",title:"Split",description:"Transform plugin : Split [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/Split.md",sourceDirName:"flink/configuration/transform-plugins",slug:"/flink/configuration/transform-plugins/Split",permalink:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/Split",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/Split.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/source-plugin"},next:{title:"Sql",permalink:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/Sql"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"separator string",id:"separator-string",level:3},{value:"fields array",id:"fields-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],u={toc:s},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"split"},"Split"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Transform plugin : Split ","[Flink]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"A string cutting function is defined, which is used to split the specified field in the Sql plugin."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"separator"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},",")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fields"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"separator-string"},"separator ","[string]"),(0,a.yg)("p",null,"The specified delimiter, the default is ",(0,a.yg)("inlineCode",{parentName:"p"},",")),(0,a.yg)("h3",{id:"fields-array"},"fields ","[array]"),(0,a.yg)("p",null,"The name of each field after split"),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/transform-plugin"},"Transform Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  # This just created a udf called split\n  Split{\n    separator = "#"\n    fields = ["name","age"]\n  }\n  # Use the split function (confirm that the fake table exists)\n  sql {\n    sql = "select * from (select info,split(info) as info_row from fake) t1"\n  }\n')))}c.isMDXComponent=!0}}]);