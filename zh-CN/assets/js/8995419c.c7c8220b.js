"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[39157],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={},i="Replace",o={unversionedId:"transform/replace",id:"version-2.3.0-beta/transform/replace",title:"Replace",description:"Replace transform plugin",source:"@site/versioned_docs/version-2.3.0-beta/transform/replace.md",sourceDirName:"transform",slug:"/transform/replace",permalink:"/zh-CN/docs/2.3.0-beta/transform/replace",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/transform/replace.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Nulltf",permalink:"/zh-CN/docs/2.3.0-beta/transform/nulltf"},next:{title:"Split",permalink:"/zh-CN/docs/2.3.0-beta/transform/split"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"source_field string",id:"source_field-string",level:3},{value:"field string",id:"field-string",level:3},{value:"pattern string",id:"pattern-string",level:3},{value:"replacement string",id:"replacement-string",level:3},{value:"is_regex boolean",id:"is_regex-boolean",level:3},{value:"replace_first boolean",id:"replace_first-boolean",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],g={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"replace"},"Replace"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Replace transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Examines string value in a given field and replaces substring of the string value that matches the given string literal or regexes with the given replacement."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This transform ",(0,a.yg)("strong",{parentName:"p"},"ONLY")," supported by Spark.")),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"source_field"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"raw_message")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fields"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pattern"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"replacement"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"is_regex"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"replace_first"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")))),(0,a.yg)("h3",{id:"source_field-string"},"source_field ","[string]"),(0,a.yg)("p",null,"Source field, if not configured, the default is ",(0,a.yg)("inlineCode",{parentName:"p"},"raw_message")),(0,a.yg)("h3",{id:"field-string"},"field ","[string]"),(0,a.yg)("p",null,"The name of the field to replaced."),(0,a.yg)("h3",{id:"pattern-string"},"pattern ","[string]"),(0,a.yg)("p",null,"The string to match."),(0,a.yg)("h3",{id:"replacement-string"},"replacement ","[string]"),(0,a.yg)("p",null,"The replacement pattern (is_regex is true) or string literal (is_regex is false)."),(0,a.yg)("h3",{id:"is_regex-boolean"},"is_regex ","[boolean]"),(0,a.yg)("p",null,"Whether or not to interpret the pattern as a regex (true) or string literal (false)."),(0,a.yg)("h3",{id:"replace_first-boolean"},"replace_first ","[boolean]"),(0,a.yg)("p",null,"Whether or not to skip any matches beyond the first match."),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/transform/common-options"},"Transform Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"the word ",(0,a.yg)("inlineCode",{parentName:"p"},"a")," will be replaced by ",(0,a.yg)("inlineCode",{parentName:"p"},"b")," at message field values."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'replace {\n    source_field = "message"\n    fields = "_replaced"\n    pattern = "a"\n    replacement = "b"\n}\n')),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"Replace")," as udf in sql."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  Replace {\n    fields = "_replaced"\n    pattern = "([^ ]*) ([^ ]*)"\n    replacement = "$2"\n    isRegex = true\n    replaceFirst = true\n  }\n\n  # Use the split function (confirm that the fake table exists)\n  sql {\n    sql = "select * from (select raw_message, replace(raw_message) as info_row from fake) t1"\n  }\n')))}m.isMDXComponent=!0}}]);