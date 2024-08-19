"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[37021],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={},l="Http",i={unversionedId:"connector/source/Http",id:"version-2.3.0-beta/connector/source/Http",title:"Http",description:"Http source connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/source/Http.md",sourceDirName:"connector/source",slug:"/connector/source/Http",permalink:"/docs/2.3.0-beta/connector/source/Http",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/source/Http.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/2.3.0-beta/connector/source/Hive"},next:{title:"Hudi",permalink:"/docs/2.3.0-beta/connector/source/Hudi"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"methodstring",id:"methodstring",level:3},{value:"headerstring",id:"headerstring",level:3},{value:"request_paramsstring",id:"request_paramsstring",level:3},{value:"sync_pathstring",id:"sync_pathstring",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Notes",id:"notes",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"http"},"Http"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Http source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Get data from http or https interface"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Http"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Http"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default vale"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"method"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"GET")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"header"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"request_params"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sync_path"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h3",{id:"url-string"},"url ","[string]"),(0,a.yg)("p",null,"HTTP request path, starting with http:// or https://."),(0,a.yg)("h3",{id:"methodstring"},"method","[string]"),(0,a.yg)("p",null,"HTTP request method, GET or POST, default GET."),(0,a.yg)("h3",{id:"headerstring"},"header","[string]"),(0,a.yg)("p",null,"HTTP request header, json format."),(0,a.yg)("h3",{id:"request_paramsstring"},"request_params","[string]"),(0,a.yg)("p",null,"HTTP request parameters, json format. Use string with escapes to save json"),(0,a.yg)("h3",{id:"sync_pathstring"},"sync_path","[string]"),(0,a.yg)("p",null,"HTTP multiple requests, the storage path of parameters used for synchronization (hdfs)."),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.0-beta/connector/source/common-options"},"Source Plugin")," for details."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},' Http {\n    url = "http://date.jsontest.com/"\n    result_table_name= "response_body"\n   }\n')),(0,a.yg)("h2",{id:"notes"},"Notes"),(0,a.yg)("p",null,"According to the processing result of the http call, to determine whether the synchronization parameters need to be updated, it needs to be written to hdfs through the hdfs sink plugin after the judgment is made outside the http source plugin."))}g.isMDXComponent=!0}}]);