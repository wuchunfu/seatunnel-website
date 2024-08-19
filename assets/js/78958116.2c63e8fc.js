"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22492],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var l=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||a;return n?l.createElement(m,o(o({ref:t},p),{},{components:n})):l.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(58168),r=(n(96540),n(15680));const a={},o="Nulltf",i={unversionedId:"transform/nulltf",id:"version-2.2.0-beta/transform/nulltf",title:"Nulltf",description:"NULL default value transform plugin",source:"@site/versioned_docs/version-2.2.0-beta/transform/nulltf.md",sourceDirName:"transform",slug:"/transform/nulltf",permalink:"/docs/2.2.0-beta/transform/nulltf",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/transform/nulltf.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"NullRate",permalink:"/docs/2.2.0-beta/transform/nullRate"},next:{title:"Replace",permalink:"/docs/2.2.0-beta/transform/replace"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"fields list",id:"fields-list",level:3},{value:"Examples",id:"examples",level:2}],p={toc:u},f="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(f,(0,l.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"nulltf"},"Nulltf"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"NULL default value transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"set default value for null field"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This transform only supported by engine Spark.")),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"fields-list"},"fields ","[list]"),(0,r.yg)("p",null,'A list of fields whose default value will be set.\nThe default value of the field can be set in the form of "field:value", If no set, the default value will be set according to the field type.'),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"the configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'  nulltf {\n      fields {\n          name: "",\n          price: 0,\n          num: 100,\n          flag: false,\n          dt_timestamp: "2022-05-18 13:51:40.603",\n          dt_date: "2022-05-19"\n      }\n  }\n')),(0,r.yg)("p",null,"before use nulltf transform"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+----+-----+--------------------+----------+\n| name|price| num| flag|        dt_timestamp|   dt_date|\n+-----+-----+----+-----+--------------------+----------+\n|\u540d\u79f01| 22.5| 100|false|2022-05-20 14:34:...|2022-05-20|\n| null| 22.5| 100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| null| 100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| 22.5|null|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5| 100| null|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5| 100|false|                null|2022-05-20|\n|\u540d\u79f01| 22.5| 100|false|2022-05-20 14:37:...|      null|\n+-----+-----+----+-----+--------------------+----------+\n")),(0,r.yg)("p",null,"after use nulltf transform"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+----+-----+--------------------+----------+\n| name|price| num| flag|        dt_timestamp|   dt_date|\n+-----+-----+----+-----+--------------------+----------+\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:34:...|2022-05-20|\n|     | 22.5|100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01|  0.0|100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-18 13:51:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:37:...|2022-05-19|\n+-----+-----+---+-----+--------------------+----------+\n")))}c.isMDXComponent=!0}}]);