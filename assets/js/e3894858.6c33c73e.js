"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[78917],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),y=a,m=s["".concat(g,".").concat(y)]||s[y]||d[y]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},18470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={},i="Redis",o={unversionedId:"spark/configuration/source-plugins/Redis",id:"version-2.1.0/spark/configuration/source-plugins/Redis",title:"Redis",description:"Source plugin: Redis [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/Redis.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Redis",permalink:"/docs/2.1.0/spark/configuration/source-plugins/Redis",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/Redis.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Phoenix",permalink:"/docs/2.1.0/spark/configuration/source-plugins/Phoenix"},next:{title:"SocketStream",permalink:"/docs/2.1.0/spark/configuration/source-plugins/SocketStream"}},g={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"auth string",id:"auth-string",level:3},{value:"db_num int",id:"db_num-int",level:3},{value:"keys_or_key_pattern string",id:"keys_or_key_pattern-string",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"timeout int",id:"timeout-int",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"redis"},"Redis"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Source plugin: Redis ","[Spark]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from Redis."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},'"localhost"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"6379")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"auth"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"db_num"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"keys_or_key_pattern"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"data_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},'"KV"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"2000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h3",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,"Redis server address, default ",(0,a.yg)("inlineCode",{parentName:"p"},'"localhost"')),(0,a.yg)("h3",{id:"port-int"},"port ","[int]"),(0,a.yg)("p",null,"Redis service port, default ",(0,a.yg)("inlineCode",{parentName:"p"},"6379")),(0,a.yg)("h3",{id:"auth-string"},"auth ","[string]"),(0,a.yg)("p",null,"Redis authentication password"),(0,a.yg)("h3",{id:"db_num-int"},"db_num ","[int]"),(0,a.yg)("p",null,"Redis database index ID. It is connected to db ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," by default"),(0,a.yg)("h3",{id:"keys_or_key_pattern-string"},"keys_or_key_pattern ","[string]"),(0,a.yg)("p",null,"Redis Key, support fuzzy matching"),(0,a.yg)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,a.yg)("p",null,"Number of Redis shards. The default is ",(0,a.yg)("inlineCode",{parentName:"p"},"3")),(0,a.yg)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,a.yg)("p",null,"Redis data type eg: ",(0,a.yg)("inlineCode",{parentName:"p"},"KV HASH LIST SET ZSET")),(0,a.yg)("h3",{id:"timeout-int"},"timeout ","[int]"),(0,a.yg)("p",null,"Redis timeout"),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source Plugin common parameters, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.1.0/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'redis {\n  host = "localhost"\n  port = 6379\n  auth = "myPassword"\n  db_num = 1\n  keys_or_key_pattern = "*"\n  partition_num = 20\n  data_type = "HASH"\n  result_table_name = "hash_result_table"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The returned table is a data table in which both fields are strings")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"raw_key"),(0,a.yg)("th",{parentName:"tr",align:null},"raw_message"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"keys"),(0,a.yg)("td",{parentName:"tr",align:null},"xxx")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"my_keys"),(0,a.yg)("td",{parentName:"tr",align:null},"xxx")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"keys_mine"),(0,a.yg)("td",{parentName:"tr",align:null},"xxx")))))}d.isMDXComponent=!0}}]);