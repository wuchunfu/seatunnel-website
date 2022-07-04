"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3751],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35903:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],u={},p="Input plugin",o={unversionedId:"configuration/input-plugin",id:"version-1.x/configuration/input-plugin",title:"Input plugin",description:"Input plugin general parameters",source:"@site/versioned_docs/version-1.x/configuration/input-plugin.md",sourceDirName:"configuration",slug:"/configuration/input-plugin",permalink:"/docs/1.x/configuration/input-plugin",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/input-plugin.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Input-Plugin",permalink:"/docs/1.x/category/input"},next:{title:"Alluxio",permalink:"/docs/1.x/configuration/input-plugins/Alluxio"}},s={},c=[{value:"Input plugin general parameters",id:"input-plugin-general-parameters",level:3},{value:"result_table_name string",id:"result_table_name-string",level:5},{value:"table_name string",id:"table_name-string",level:5},{value:"Usage example",id:"usage-example",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"input-plugin"},"Input plugin"),(0,i.kt)("h3",{id:"input-plugin-general-parameters"},"Input plugin general parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#result_table_name-string"},"result_table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#table_name-string"},"table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name is not specified"),", the data processed by this plugin will not be registered as a dataset that can be directly accessed by other plugins, or called a temporary table;"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a dataset that can be directly accessed by other plugins, or called a temporary table. The dataset registered here, other plugins can directly access by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name"),"."),(0,i.kt)("h5",{id:"table_name-string"},"table_name ","[string]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[","Deprecated from v1.4","]")," The function is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name"),", this parameter will be deleted in subsequent Release versions, it is recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," parameter"),(0,i.kt)("h3",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fake {\n    result_table_name = "view_table_2"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The result of the data source ",(0,i.kt)("inlineCode",{parentName:"p"},"fake")," will be registered as a temporary table named ",(0,i.kt)("inlineCode",{parentName:"p"},"view_table_2"),". This temporary table can be used by any ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Output")," plugin by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name"),".")))}d.isMDXComponent=!0}}]);