"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8473],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return g}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,d=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),m=p(n),g=i,k=m["".concat(d,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(k,l(l({ref:e},o),{},{components:n})):r.createElement(k,l({ref:e},o))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"==typeof t?t:i,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9882:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return o},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],s={},d="Redis",p={unversionedId:"spark/configuration/sink-plugins/Redis",id:"spark/configuration/sink-plugins/Redis",title:"Redis",description:"Sink plugin: Redis [Spark]",source:"@site/docs/spark/configuration/sink-plugins/Redis.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Redis",permalink:"/docs/spark/configuration/sink-plugins/Redis",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/Redis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Phoenix",permalink:"/docs/spark/configuration/sink-plugins/Phoenix"},next:{title:"TiDb",permalink:"/docs/spark/configuration/sink-plugins/Tidb"}},o=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[{value:"redis_host string",id:"redis_host-string",children:[],level:3},{value:"redis_port string",id:"redis_port-string",children:[],level:3},{value:"redis_auth string",id:"redis_auth-string",children:[],level:3},{value:"redis_db int",id:"redis_db-int",children:[],level:3},{value:"redis_timeout int",id:"redis_timeout-int",children:[],level:3},{value:"redis_save_type string",id:"redis_save_type-string",children:[],level:3},{value:"redis_hash_name string",id:"redis_hash_name-string",children:[],level:3},{value:"redis_list_name string",id:"redis_list_name-string",children:[],level:3},{value:"redis_zset_name string",id:"redis_zset_name-string",children:[],level:3},{value:"redis_set_name string",id:"redis_set_name-string",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],u={toc:o};function m(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redis"},"Redis"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sink plugin: Redis ","[Spark]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Write Rows to a Redis."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_host-string"},"redis_host")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},'"localhost"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_port-string"},"redis_port")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},'"6379"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_auth-string"},"redis_auth")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_db-int"},"redis_db")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_timeout-int"},"redis_timeout")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"2000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_save_type-string"},"redis_save_type")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_hash_name-string"},"redis_hash_name")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_list_name-string"},"redis_list_name")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_zset_name-string"},"redis_zset_name")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#redis_set_name-string"},"redis_set_name")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"redis_host-string"},"redis_host ","[string]"),(0,a.kt)("p",null,"redis host"),(0,a.kt)("h3",{id:"redis_port-string"},"redis_port ","[string]"),(0,a.kt)("p",null,"redis port"),(0,a.kt)("h3",{id:"redis_auth-string"},"redis_auth ","[string]"),(0,a.kt)("p",null,"redis password"),(0,a.kt)("h3",{id:"redis_db-int"},"redis_db ","[int]"),(0,a.kt)("p",null,"redis database"),(0,a.kt)("h3",{id:"redis_timeout-int"},"redis_timeout ","[int]"),(0,a.kt)("p",null,"redis timeout"),(0,a.kt)("h3",{id:"redis_save_type-string"},"redis_save_type ","[string]"),(0,a.kt)("p",null,"redis save type eg: KV HASH LIST SET ZSET"),(0,a.kt)("h3",{id:"redis_hash_name-string"},"redis_hash_name ","[string]"),(0,a.kt)("p",null,"if redis save type is HASH must config hash name "),(0,a.kt)("h3",{id:"redis_list_name-string"},"redis_list_name ","[string]"),(0,a.kt)("p",null,"if redis save type is list must config list name"),(0,a.kt)("h3",{id:"redis_zset_name-string"},"redis_zset_name ","[string]"),(0,a.kt)("p",null,"if redis save type is zset must config zset name"),(0,a.kt)("h3",{id:"redis_set_name-string"},"redis_set_name ","[string]"),(0,a.kt)("p",null,"if redis save type is set must config set name"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Redis {\n  redis_host = "localhost"\n  redis_port = 6379\n  redis_auth = "myPassword"\n  redis_save_type = "HASH"\n  redis_hash_name = "test"\n}\n')))}m.isMDXComponent=!0}}]);