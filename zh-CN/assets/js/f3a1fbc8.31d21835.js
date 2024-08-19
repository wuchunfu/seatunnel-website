"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61357],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(n),y=a,m=g["".concat(p,".").concat(y)]||g[y]||d[y]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},46481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={},i=void 0,o={unversionedId:"configuration/output-plugins/MySQL",id:"version-1.x/configuration/output-plugins/MySQL",title:"MySQL",description:"Output plugin : Mysql",source:"@site/versioned_docs/version-1.x/configuration/output-plugins/MySQL.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/MySQL",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/MySQL",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugins/MySQL.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Kafka",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/Kafka"},next:{title:"S3",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/S3"}},p={},s=[{value:"Output plugin : Mysql",id:"output-plugin--mysql",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"password string",id:"password-string",level:5},{value:"save_mode string",id:"save_mode-string",level:5},{value:"table string",id:"table-string",level:5},{value:"url string",id:"url-string",level:5},{value:"user string",id:"user-string",level:5},{value:"Example",id:"example",level:3}],u={toc:s},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"output-plugin--mysql"},"Output plugin : Mysql"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.yg)("li",{parentName:"ul"},"Homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Write Rows to MySQL."),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#password-string"},"password")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#save_mode-string"},"save_mode")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"append")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#table-string"},"table")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#url-string"},"url")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#user-string"},"user")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h5",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"Password."),(0,a.yg)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,a.yg)("p",null,"Save mode, supports ",(0,a.yg)("inlineCode",{parentName:"p"},"overwrite"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"append"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"ignore")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"error"),". The detail of save_mode see ",(0,a.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/2.2.0/sql-programming-guide.html#save-modes"},"save-modes"),"."),(0,a.yg)("h5",{id:"table-string"},"table ","[string]"),(0,a.yg)("p",null,"Table name."),(0,a.yg)("h5",{id:"url-string"},"url ","[string]"),(0,a.yg)("p",null,"The url of JDBC. For example: ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://localhose:3306/info")),(0,a.yg)("h5",{id:"user-string"},"user ","[string]"),(0,a.yg)("p",null,"Username."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql {\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    user = "username"\n    password = "password"\n    save_mode = "append"\n}\n')))}d.isMDXComponent=!0}}]);