"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[86987],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Json",p={unversionedId:"transform/json",id:"transform/json",title:"Json",description:"Json transform plugin",source:"@site/docs/transform/json.md",sourceDirName:"transform",slug:"/transform/json",permalink:"/docs/transform/json",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform/json.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/docs/transform/common-options"},next:{title:"NullRate",permalink:"/docs/transform/nullRate"}},u={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"source_field string",id:"source_field-string",level:3},{value:"target_field string",id:"target_field-string",level:3},{value:"schema_dir string",id:"schema_dir-string",level:3},{value:"schema_file string",id:"schema_file-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Schema Use cases",id:"schema-use-cases",level:2},{value:"Examples",id:"examples",level:2},{value:"Do not use <code>target_field</code>",id:"do-not-use-target_field",level:3},{value:"Use <code>target_field</code>",id:"use-target_field",level:3},{value:"Use <code>schema_file</code>",id:"use-schema_file",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"json"},"Json"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Json transform plugin")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Json analysis of the specified fields of the original data set"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This transform ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," supported by Spark."))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_field"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_field"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"root"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema_dir"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema_file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"source_field-string"},"source_field ","[string]"),(0,l.kt)("p",null,"Source field, if not configured, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"raw_message")),(0,l.kt)("h3",{id:"target_field-string"},"target_field ","[string]"),(0,l.kt)("p",null,"The target field, if it is not configured, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"__root__")," , and the result of Json parsing will be uniformly placed at the top of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataframe")),(0,l.kt)("h3",{id:"schema_dir-string"},"schema_dir ","[string]"),(0,l.kt)("p",null,"Style directory, if not configured, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"$seatunnelRoot/plugins/json/files/schemas/")),(0,l.kt)("h3",{id:"schema_file-string"},"schema_file ","[string]"),(0,l.kt)("p",null,"The style file name, if it is not configured, the default is empty, that is, the structure is not specified, and the system derives it by itself according to the input of the data source."),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/transform/common-options"},"Transform Plugin")," for details"),(0,l.kt)("h2",{id:"schema-use-cases"},"Schema Use cases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json schema")," usage scenarios")),(0,l.kt)("p",null,"The multiple data sources of a single task may contain different styles of json data. For example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"topicA")," style from ",(0,l.kt)("inlineCode",{parentName:"p"},"Kafka")," is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "A": "a_val",\n  "B": "b_val"\n}\n')),(0,l.kt)("p",null,"The style from ",(0,l.kt)("inlineCode",{parentName:"p"},"topicB")," is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "C": "c_val",\n  "D": "d_val"\n}\n')),(0,l.kt)("p",null,"When running ",(0,l.kt)("inlineCode",{parentName:"p"},"Transform")," , you need to fuse the data of ",(0,l.kt)("inlineCode",{parentName:"p"},"topicA")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"topicB")," into a wide table for calculation. You can specify a ",(0,l.kt)("inlineCode",{parentName:"p"},"schema")," whose content style is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "A": "a_val",\n  "B": "b_val",\n  "C": "c_val",\n  "D": "d_val"\n}\n')),(0,l.kt)("p",null,"Then the fusion output result of ",(0,l.kt)("inlineCode",{parentName:"p"},"topicA")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"topicB")," is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+-----+-----+\n|A    |B    |C    |D    |\n+-----+-----+-----+-----+\n|a_val|b_val|null |null |\n|null |null |c_val|d_val|\n+-----+-----+-----+-----+\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"do-not-use-target_field"},"Do not use ",(0,l.kt)("inlineCode",{parentName:"h3"},"target_field")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sink")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+---+-----+\n|message                   |age|name |\n+----------------------------+---+-----+\n|{"name": "gary", "age": 28} |28 |gary |\n|{"name": "ricky", "age": 23}|23 |ricky|\n+----------------------------+---+-----+\n')),(0,l.kt)("h3",{id:"use-target_field"},"Use ",(0,l.kt)("inlineCode",{parentName:"h3"},"target_field")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n    target_field = "info"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Souce")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sink")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+----------+\n|message                   |info      |\n+----------------------------+----------+\n|{"name": "gary", "age": 28} |[28,gary] |\n|{"name": "ricky", "age": 23}|[23,ricky]|\n+----------------------------+----------+\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The results of json processing support ",(0,l.kt)("inlineCode",{parentName:"p"},"select * from where info.age = 23")," such SQL statements")),(0,l.kt)("h3",{id:"use-schema_file"},"Use ",(0,l.kt)("inlineCode",{parentName:"h3"},"schema_file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n    schema_file = "demo.json"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schema")),(0,l.kt)("p",null,"Place the following content in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/seatunnel/plugins/json/files/schemas/demo.json")," of Driver Node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "demo",\n   "age": 24,\n   "city": "LA"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sink")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+---+-----+-----+\n|message                     |age|name |city |\n+----------------------------+---+-----+-----+\n|{"name": "gary", "age": 28} |28 |gary |null |\n|{"name": "ricky", "age": 23}|23 |ricky|null |\n+----------------------------+---+-----+-----+\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you use ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster mode")," for deployment, make sure that the ",(0,l.kt)("inlineCode",{parentName:"p"},"json schemas")," directory is packaged in ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins.tar.gz"))))}d.isMDXComponent=!0}}]);