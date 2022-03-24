"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1177],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||u;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},279:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),o=["components"],i={},l="Kudu",s={unversionedId:"spark/configuration/source-plugins/Kudu",id:"spark/configuration/source-plugins/Kudu",title:"Kudu",description:"Source plugin: Kudu [Spark]",source:"@site/docs/spark/configuration/source-plugins/Kudu.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Kudu",permalink:"/docs/spark/configuration/source-plugins/Kudu",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/source-plugins/Kudu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"KafkaStream",permalink:"/docs/spark/configuration/source-plugins/KafkaStream"},next:{title:"MongoDb",permalink:"/docs/spark/configuration/source-plugins/MongoDB"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"kudu_master string",id:"kudu_master-string",level:3},{value:"kudu_table string",id:"kudu_table-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"kudu"},"Kudu"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Source plugin: Kudu ","[Spark]")),(0,u.kt)("h2",{id:"description"},"Description"),(0,u.kt)("p",null,"Read data from Kudu."),(0,u.kt)("h2",{id:"options"},"Options"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"name"),(0,u.kt)("th",{parentName:"tr",align:null},"type"),(0,u.kt)("th",{parentName:"tr",align:null},"required"),(0,u.kt)("th",{parentName:"tr",align:null},"default value"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"kudu_master"),(0,u.kt)("td",{parentName:"tr",align:null},"string"),(0,u.kt)("td",{parentName:"tr",align:null},"yes"),(0,u.kt)("td",{parentName:"tr",align:null},"-")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"kudu_table"),(0,u.kt)("td",{parentName:"tr",align:null},"string"),(0,u.kt)("td",{parentName:"tr",align:null},"yes"),(0,u.kt)("td",{parentName:"tr",align:null},"-")))),(0,u.kt)("h3",{id:"kudu_master-string"},"kudu_master ","[string]"),(0,u.kt)("p",null,"Kudu Master"),(0,u.kt)("h3",{id:"kudu_table-string"},"kudu_table ","[string]"),(0,u.kt)("p",null,"Kudu Table"),(0,u.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,u.kt)("p",null,"Source Plugin common parameters, refer to ",(0,u.kt)("a",{parentName:"p",href:"/docs/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,u.kt)("h2",{id:"example"},"Example"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},'kudu {\n    kudu_master = "master:7051"\n    kudu_table = "impala::test_db.test_table"\n    result_table_name = "kudu_result_table"\n}\n')))}m.isMDXComponent=!0}}]);