"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8225],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,g=f["".concat(s,".").concat(m)]||f[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71819:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s=void 0,p={unversionedId:"configuration/filter-plugins/Sql",id:"version-1.x/configuration/filter-plugins/Sql",title:"Sql",description:"Filter plugin : Sql",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Sql.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Sql",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Sql",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Sql.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Split",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Split"},next:{title:"Table",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Table"}},u={},c=[{value:"Filter plugin : Sql",id:"filter-plugin--sql",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"sql string",id:"sql-string",level:5},{value:"table_name string",id:"table_name-string",level:5},{value:"Examples",id:"examples",level:3}],f={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"filter-plugin--sql"},"Filter plugin : Sql"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Processing Rows using SQL, feel free to use ",(0,l.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/api/sql/"},"Spark UDF"),". "),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#sql-string"},"sql")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#table_name-string"},"table_name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"sql-string"},"sql ","[string]"),(0,l.kt)("p",null,"SQL content."),(0,l.kt)("h5",{id:"table_name-string"},"table_name ","[string]"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"table")," set, the current batch of events will be registered as a table, named by this ",(0,l.kt)("inlineCode",{parentName:"p"},"table")," setting, on which you can execute sql."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sql {\n    sql = "select username, address from user_info",\n    table_name = "user_info"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"address")," fields, the remaining fields will be removed.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sql {\n    sql = "select substring(telephone, 0, 10) from user_info",\n    table_name = "user_info"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use the ",(0,l.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/api/sql/#substring"},"substring function")," to retrieve a substring on the ",(0,l.kt)("inlineCode",{parentName:"p"},"telephone")," field.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sql {\n    sql = "select avg(age) from user_info",\n    table_name = "user_info"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the aggregation of the average of ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," using the ",(0,l.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/api/sql/#avg"},"avg functions"),".")))}m.isMDXComponent=!0}}]);