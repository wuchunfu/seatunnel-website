"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[44436],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,d=u["".concat(g,".").concat(y)]||u[y]||p[y]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="InfluxDB",o={unversionedId:"connector-v2/sink/InfluxDB",id:"version-2.3.2/connector-v2/sink/InfluxDB",title:"InfluxDB",description:"InfluxDB sink connector",source:"@site/versioned_docs/version-2.3.2/connector-v2/sink/InfluxDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/InfluxDB",permalink:"/docs/2.3.2/connector-v2/sink/InfluxDB",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/sink/InfluxDB.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/docs/2.3.2/connector-v2/sink/Http"},next:{title:"IoTDB",permalink:"/docs/2.3.2/connector-v2/sink/IoTDB"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url",id:"url",level:3},{value:"database string",id:"database-string",level:3},{value:"measurement string",id:"measurement-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"key_time string",id:"key_time-string",level:3},{value:"key_tags array",id:"key_tags-array",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"batch_interval_ms int",id:"batch_interval_ms-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"connect_timeout_ms long",id:"connect_timeout_ms-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],m={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"influxdb"},"InfluxDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"InfluxDB sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to InfluxDB."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.2/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"measurement"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_time"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"processing time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_tags"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"exclude ",(0,r.yg)("inlineCode",{parentName:"td"},"field")," & ",(0,r.yg)("inlineCode",{parentName:"td"},"key_time"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"15000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"url"},"url"),(0,r.yg)("p",null,"the url to connect to influxDB e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"http://influxdb-host:8086\n")),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"The name of ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," database"),(0,r.yg)("h3",{id:"measurement-string"},"measurement ","[string]"),(0,r.yg)("p",null,"The name of ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," user username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," user password"),(0,r.yg)("h3",{id:"key_time-string"},"key_time ","[string]"),(0,r.yg)("p",null,"Specify field-name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement timestamp in SeaTunnelRow. If not specified, use processing-time as timestamp"),(0,r.yg)("h3",{id:"key_tags-array"},"key_tags ","[array]"),(0,r.yg)("p",null,"Specify field-name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement tags in SeaTunnelRow.\nIf not specified, include all fields with ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement field"),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the influxDB"),(0,r.yg)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the influxDB"),(0,r.yg)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,r.yg)("p",null,"The number of retries to flush failed"),(0,r.yg)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,r.yg)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,r.yg)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,r.yg)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")),(0,r.yg)("h3",{id:"connect_timeout_ms-long"},"connect_timeout_ms ","[long]"),(0,r.yg)("p",null,"the timeout for connecting to InfluxDB, in milliseconds"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.2/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        database = "test"\n        measurement = "sink"\n        key_time = "time"\n        key_tags = ["label"]\n        batch_size = 1\n    }\n}\n\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add InfluxDB Sink Connector")))}p.isMDXComponent=!0}}]);