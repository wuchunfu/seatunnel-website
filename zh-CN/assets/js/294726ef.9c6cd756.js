"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22706],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,y=s["".concat(u,".").concat(m)]||s[m]||g[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={},i="Socket",l={unversionedId:"flink/configuration/source-plugins/Socket",id:"version-2.1.0/flink/configuration/source-plugins/Socket",title:"Socket",description:"Source plugin : Socket [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/source-plugins/Socket.md",sourceDirName:"flink/configuration/source-plugins",slug:"/flink/configuration/source-plugins/Socket",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/Socket",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/source-plugins/Socket.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/Kafka"},next:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/source-plugin"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],p={toc:c},s="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"socket"},"Socket"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Source plugin : Socket ","[Flink]")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Socket as data source"),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"name"),(0,o.yg)("th",{parentName:"tr",align:null},"type"),(0,o.yg)("th",{parentName:"tr",align:null},"required"),(0,o.yg)("th",{parentName:"tr",align:null},"default value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"host"),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"no"),(0,o.yg)("td",{parentName:"tr",align:null},"localhost")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"port"),(0,o.yg)("td",{parentName:"tr",align:null},"int"),(0,o.yg)("td",{parentName:"tr",align:null},"no"),(0,o.yg)("td",{parentName:"tr",align:null},"9999")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"common-options"),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"no"),(0,o.yg)("td",{parentName:"tr",align:null},"-")))),(0,o.yg)("h3",{id:"host-string"},"host ","[string]"),(0,o.yg)("p",null,"socket server hostname"),(0,o.yg)("h3",{id:"port-int"},"port ","[int]"),(0,o.yg)("p",null,"socket server port"),(0,o.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,o.yg)("p",null,"Source plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,o.yg)("h2",{id:"examples"},"Examples"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  SocketStream{\n        result_table_name = "socket"\n        field_name = "info"\n  }\n}\n')))}g.isMDXComponent=!0}}]);