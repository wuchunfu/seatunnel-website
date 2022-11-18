"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7230],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c="HBase",s={unversionedId:"connector/source/Hbase",id:"version-2.1.1/connector/source/Hbase",title:"HBase",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/source/Hbase.md",sourceDirName:"connector/source",slug:"/connector/source/Hbase",permalink:"/zh-CN/docs/2.1.1/connector/source/Hbase",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/source/Hbase.md",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"File",permalink:"/zh-CN/docs/2.1.1/connector/source/File"},next:{title:"Hive",permalink:"/zh-CN/docs/2.1.1/connector/source/Hive"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hbase.zookeeper.quorum string",id:"hbasezookeeperquorum-string",level:3},{value:"catalog string",id:"catalog-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hbase"},"HBase"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Get data from HBase"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,o.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: HBase"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hbase.zookeeper.quorum"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"catalog"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"hbasezookeeperquorum-string"},"hbase.zookeeper.quorum ","[string]"),(0,o.kt)("p",null,"The address of the ",(0,o.kt)("inlineCode",{parentName:"p"},"zookeeper")," cluster, the format is: ",(0,o.kt)("inlineCode",{parentName:"p"},"host01:2181,host02:2181,host03:2181")),(0,o.kt)("h3",{id:"catalog-string"},"catalog ","[string]"),(0,o.kt)("p",null,"The structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hbase")," table is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog")," , the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hbase")," table and its ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," , which ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," are used as ",(0,o.kt)("inlineCode",{parentName:"p"},"rowkey"),", and the correspondence between ",(0,o.kt)("inlineCode",{parentName:"p"},"column family")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," can be defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog")," ",(0,o.kt)("inlineCode",{parentName:"p"},"hbase table catalog")),(0,o.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,o.kt)("p",null,"Source plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.1/connector/source/common-options"},"Source Plugin")," for details"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  Hbase {\n    hbase.zookeeper.quorum = "localhost:2181"\n    catalog = "{\\"table\\":{\\"namespace\\":\\"default\\", \\"name\\":\\"test\\"},\\"rowkey\\":\\"id\\",\\"columns\\":{\\"id\\":{\\"cf\\":\\"rowkey\\", \\"col\\":\\"id\\", \\"type\\":\\"string\\"},\\"a\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"a\\", \\"type\\":\\"string\\"},\\"b\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"b\\", \\"type\\":\\"string\\"},\\"c\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"c\\", \\"type\\":\\"string\\"}}}"\n    result_table_name = "my_dataset"\n  }\n')))}d.isMDXComponent=!0}}]);