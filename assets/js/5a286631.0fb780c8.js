"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8252],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(n),g=a,k=c["".concat(o,".").concat(g)]||c[g]||d[g]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8640:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={},o="Doris",p={unversionedId:"spark/configuration/sink-plugins/Doris",id:"spark/configuration/sink-plugins/Doris",title:"Doris",description:"Sink plugin: Doris [Spark]",source:"@site/docs/spark/configuration/sink-plugins/Doris.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Doris",permalink:"/docs/spark/configuration/sink-plugins/Doris",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/Doris.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Console",permalink:"/docs/spark/configuration/sink-plugins/Console"},next:{title:"Elasticsearch",permalink:"/docs/spark/configuration/sink-plugins/Elasticsearch"}},u={},d=[{value:"Description:",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"fenodes string",id:"fenodes-string",level:5},{value:"database string",id:"database-string",level:5},{value:"table string",id:"table-string",level:5},{value:"user string",id:"user-string",level:5},{value:"password string",id:"password-string",level:5},{value:"batch_size string",id:"batch_size-string",level:5},{value:"doris. string",id:"doris-string",level:5},{value:"Examples",id:"examples",level:3}],c={toc:d};function g(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"doris"},"Doris"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink plugin: Doris ","[Spark]")),(0,i.kt)("h3",{id:"description"},"Description:"),(0,i.kt)("p",null,"Use Spark Batch Engine ETL Data to Doris."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"),(0,i.kt)("th",{parentName:"tr",align:null},"engine"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"database"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"table"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"user"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"doris.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark")))),(0,i.kt)("h5",{id:"fenodes-string"},"fenodes ","[string]"),(0,i.kt)("p",null,"Doris FE address:8030"),(0,i.kt)("h5",{id:"database-string"},"database ","[string]"),(0,i.kt)("p",null,"Doris target database name"),(0,i.kt)("h5",{id:"table-string"},"table ","[string]"),(0,i.kt)("p",null,"Doris target table name"),(0,i.kt)("h5",{id:"user-string"},"user ","[string]"),(0,i.kt)("p",null,"Doris user name"),(0,i.kt)("h5",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,"Doris user's password"),(0,i.kt)("h5",{id:"batch_size-string"},"batch_size ","[string]"),(0,i.kt)("p",null,"Doris number of submissions per batch"),(0,i.kt)("h5",{id:"doris-string"},"doris. ","[string]"),(0,i.kt)("p",null,"Doris stream_load properties,you can use 'doris.' prefix + stream_load properties\n",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html"},"More Doris stream_load Configurations")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Doris {\n            fenodes="0.0.0.0:8030"\n            database="test"\n            table="user"\n            user="doris"\n            password="doris"\n            batch_size=10000\n            doris.column_separator="\\t"\n            doris.columns="id,user_name,user_name_cn,create_time,last_login_time"\n      \n      }\n')))}g.isMDXComponent=!0}}]);