"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1286],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||a;return n?r.createElement(d,l(l({ref:e},u),{},{components:n})):r.createElement(d,l({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40506:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={},p="Split",s={unversionedId:"flink/configuration/transform-plugins/Split",id:"version-2.1.0/flink/configuration/transform-plugins/Split",title:"Split",description:"Transform plugin : Split [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/Split.md",sourceDirName:"flink/configuration/transform-plugins",slug:"/flink/configuration/transform-plugins/Split",permalink:"/docs/2.1.0/flink/configuration/transform-plugins/Split",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/Split.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/docs/2.1.0/flink/configuration/source-plugins/source-plugin"},next:{title:"Sql",permalink:"/docs/2.1.0/flink/configuration/transform-plugins/Sql"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"separator string",id:"separator-string",level:3},{value:"fields array",id:"fields-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],f={toc:c};function m(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"split"},"Split"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Transform plugin : Split ","[Flink]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A string cutting function is defined, which is used to split the specified field in the Sql plugin."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"separator"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},",")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fields"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common-options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"separator-string"},"separator ","[string]"),(0,a.kt)("p",null,"The specified delimiter, the default is ",(0,a.kt)("inlineCode",{parentName:"p"},",")),(0,a.kt)("h3",{id:"fields-array"},"fields ","[array]"),(0,a.kt)("p",null,"The name of each field after split"),(0,a.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.1.0/flink/configuration/transform-plugins/transform-plugin"},"Transform Plugin")," for details"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  # This just created a udf called split\n  Split{\n    separator = "#"\n    fields = ["name","age"]\n  }\n  # Use the split function (confirm that the fake table exists)\n  sql {\n    sql = "select * from (select info,split(info) as info_row from fake) t1"\n  }\n')))}m.isMDXComponent=!0}}]);