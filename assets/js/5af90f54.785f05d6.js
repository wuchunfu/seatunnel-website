"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[831],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6307:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p="HBase",s={unversionedId:"spark/configuration/source-plugins/Hbase",id:"spark/configuration/source-plugins/Hbase",title:"HBase",description:"Source plugin : HBase [Spark]",source:"@site/docs/spark/configuration/source-plugins/Hbase.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Hbase",permalink:"/docs/spark/configuration/source-plugins/Hbase",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/source-plugins/Hbase.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"File",permalink:"/docs/spark/configuration/source-plugins/File"},next:{title:"Hive",permalink:"/docs/spark/configuration/source-plugins/Hive"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hbase.zookeeper.quorum string",id:"hbasezookeeperquorum-string",level:3},{value:"catalog string",id:"catalog-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hbase"},"HBase"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source plugin : HBase ","[Spark]")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Get data from HBase"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hbase.zookeeper.quorum"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"catalog"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"hbasezookeeperquorum-string"},"hbase.zookeeper.quorum ","[string]"),(0,o.kt)("p",null,"The address of the ",(0,o.kt)("inlineCode",{parentName:"p"},"zookeeper")," cluster, the format is: ",(0,o.kt)("inlineCode",{parentName:"p"},"host01:2181,host02:2181,host03:2181")),(0,o.kt)("h3",{id:"catalog-string"},"catalog ","[string]"),(0,o.kt)("p",null,"The structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hbase")," table is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog")," , the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hbase")," table and its ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," , which ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," are used as ",(0,o.kt)("inlineCode",{parentName:"p"},"rowkey"),", and the correspondence between ",(0,o.kt)("inlineCode",{parentName:"p"},"column family")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," can be defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog")," ",(0,o.kt)("inlineCode",{parentName:"p"},"hbase table catalog")),(0,o.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,o.kt)("p",null,"Source plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  Hbase {\n    hbase.zookeeper.quorum = "localhost:2181"\n    catalog = "{\\"table\\":{\\"namespace\\":\\"default\\", \\"name\\":\\"test\\"},\\"rowkey\\":\\"id\\",\\"columns\\":{\\"id\\":{\\"cf\\":\\"rowkey\\", \\"col\\":\\"id\\", \\"type\\":\\"string\\"},\\"a\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"a\\", \\"type\\":\\"string\\"},\\"b\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"b\\", \\"type\\":\\"string\\"},\\"c\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"c\\", \\"type\\":\\"string\\"}}}"\n    result_table_name = "my_dataset"\n  }\n')))}d.isMDXComponent=!0}}]);