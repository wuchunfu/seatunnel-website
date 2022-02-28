"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2919],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3734:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},u="File",p={unversionedId:"spark/configuration/source-plugins/File",id:"spark/configuration/source-plugins/File",title:"File",description:"Source plugin : File [Spark]",source:"@site/docs/spark/configuration/source-plugins/File.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/File",permalink:"/zh-CN/docs/spark/configuration/source-plugins/File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/source-plugins/File.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FakeStream",permalink:"/zh-CN/docs/spark/configuration/source-plugins/FakeStream"},next:{title:"Hive",permalink:"/zh-CN/docs/spark/configuration/source-plugins/Hive"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"format string",id:"format-string",level:5},{value:"path string",id:"path-string",level:5},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file"},"File"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source plugin : File ","[Spark]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"read data from local or hdfs file."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"json")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"format-string"},"format ","[string]"),(0,i.kt)("p",null,"Format for reading files, currently supports text, parquet, json, orc, csv."),(0,i.kt)("h5",{id:"path-string"},"path ","[string]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If read data from hdfs , the file path should start with ",(0,i.kt)("inlineCode",{parentName:"li"},"hdfs://"),"  "),(0,i.kt)("li",{parentName:"ul"},"If read data from local , the file path should start with ",(0,i.kt)("inlineCode",{parentName:"li"},"file://"))),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Source plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file {\n    path = "hdfs:///var/logs"\n    result_table_name = "access_log"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file {\n    path = "file:///var/logs"\n    result_table_name = "access_log"\n}\n')))}f.isMDXComponent=!0}}]);