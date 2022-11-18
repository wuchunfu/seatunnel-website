"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[265],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,g=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],u={},o="InfluxDB",s={unversionedId:"flink/configuration/sink-plugins/InfluxDb",id:"version-2.1.0/flink/configuration/sink-plugins/InfluxDb",title:"InfluxDB",description:"Sink plugin: InfluxDB [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/InfluxDb.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/InfluxDb",permalink:"/zh-CN/docs/2.1.0/flink/configuration/sink-plugins/InfluxDb",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/InfluxDb.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/zh-CN/docs/2.1.0/flink/configuration/sink-plugins/File"},next:{title:"Jdbc",permalink:"/zh-CN/docs/2.1.0/flink/configuration/sink-plugins/Jdbc"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"server_url String",id:"server_url-string",level:3},{value:"username String",id:"username-string",level:3},{value:"password String",id:"password-string",level:3},{value:"database String",id:"database-string",level:3},{value:"measurement String",id:"measurement-string",level:3},{value:"tags List<String>",id:"tags-liststring",level:3},{value:"fields List<String>",id:"fields-liststring",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Auth",id:"auth",level:3}],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"influxdb"},"InfluxDB"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sink plugin: InfluxDB ","[Flink]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data to InfluxDB."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server_url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"measurement"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Int")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"server_url-string"},"server_url ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,l.kt)("p",null,"The URL of InfluxDB Server."),(0,l.kt)("h3",{id:"username-string"},"username ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,l.kt)("p",null,"The username of InfluxDB Server."),(0,l.kt)("h3",{id:"password-string"},"password ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,l.kt)("p",null,"The password of InfluxDB Server."),(0,l.kt)("h3",{id:"database-string"},"database ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,l.kt)("p",null,"The database name in InfluxDB."),(0,l.kt)("h3",{id:"measurement-string"},"measurement ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,l.kt)("p",null,"The Measurement name in InfluxDB."),(0,l.kt)("h3",{id:"tags-liststring"},"tags ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,l.kt)("p",null,"The list of Tag in InfluxDB."),(0,l.kt)("h3",{id:"fields-liststring"},"fields ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,l.kt)("p",null,"The list of Field in InfluxDB."),(0,l.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,l.kt)("p",null,"The parallelism of an individual operator, for InfluxDbSink"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSink {\n  server_url = "http://127.0.0.1:8086/"\n  database = "influxdb"\n  measurement = "m"\n  tags = ["country", "city"]\n  fields = ["count"]\n}\n')),(0,l.kt)("h3",{id:"auth"},"Auth"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSink {\n  server_url = "http://127.0.0.1:8086/"\n  username = "admin"\n  password = "password"\n  database = "influxdb"\n  measurement = "m"\n  tags = ["country", "city"]\n  fields = ["count"]\n}\n')))}k.isMDXComponent=!0}}]);