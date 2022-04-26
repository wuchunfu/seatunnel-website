"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1625],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(o,".").concat(g)]||d[g]||c[g]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return g}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o=void 0,u={unversionedId:"configuration/filter-plugins/Replace",id:"version-1.x/configuration/filter-plugins/Replace",title:"Replace",description:"Filter plugin : Replace",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Replace.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Replace",permalink:"/docs/1.x/configuration/filter-plugins/Replace",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Replace.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Repartition",permalink:"/docs/1.x/configuration/filter-plugins/Repartition"},next:{title:"Sample",permalink:"/docs/1.x/configuration/filter-plugins/Sample"}},s={},c=[{value:"Filter plugin : Replace",id:"filter-plugin--replace",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"pattern string",id:"pattern-string",level:5},{value:"replacement string",id:"replacement-string",level:5},{value:"source_field string",id:"source_field-string",level:5},{value:"target_field string",id:"target_field-string",level:5},{value:"Examples",id:"examples",level:3}],d={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"filter-plugin--replace"},"Filter plugin : Replace"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Replaces field contents based on regular expression."),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pattern-string"},"pattern")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#replacement-string"},"replacement")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"replaced")))),(0,l.kt)("h5",{id:"pattern-string"},"pattern ","[string]"),(0,l.kt)("p",null,"regular expression, such as ","[a-z0-9]",", \\w, \\d"),(0,l.kt)("p",null,"Regular expression used for matching string, such as ",(0,l.kt)("inlineCode",{parentName:"p"},'"[a-zA-Z0-9_-]+"'),".Please see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html"},"Regex Pattern")," for details."),(0,l.kt)("p",null,"You can also go to ",(0,l.kt)("a",{parentName:"p",href:"https://regex101.com/"},"Regex 101")," to test your regex interactively."),(0,l.kt)("h5",{id:"replacement-string"},"replacement ","[string]"),(0,l.kt)("p",null,"String replacement."),(0,l.kt)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,l.kt)("p",null,"Source field, default is ",(0,l.kt)("inlineCode",{parentName:"p"},"raw_message"),"."),(0,l.kt)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,l.kt)("p",null,"New field name, default is ",(0,l.kt)("inlineCode",{parentName:"p"},"replaced"),"."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'replace {\n    target_field = "tmp"\n    source_field = "message"\n    pattern = "\\w+"\n    replacement = "are"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Replace ",(0,l.kt)("strong",{parentName:"p"},"\\w+")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," with ",(0,l.kt)("strong",{parentName:"p"},"are")," and set it to ",(0,l.kt)("inlineCode",{parentName:"p"},"tmp")," column.")))}g.isMDXComponent=!0}}]);