"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7320],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(n),c=i,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||r;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function c(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8866:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return u},toc:function(){return s},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},p="Druid",m={unversionedId:"flink/configuration/sink-plugins/Druid",id:"flink/configuration/sink-plugins/Druid",title:"Druid",description:"# Sink plugin: Druid [Flink]",source:"@site/docs/flink/configuration/sink-plugins/Druid.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/Druid",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Druid",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/configuration/sink-plugins/Druid.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Doris",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Doris"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Elasticsearch"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"coordinator_url String",id:"coordinator_url-string",level:3},{value:"datasource String",id:"datasource-string",level:3},{value:"timestamp_column String",id:"timestamp_column-string",level:3},{value:"timestamp_format String",id:"timestamp_format-string",level:3},{value:"timestamp_missing_value String",id:"timestamp_missing_value-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Specified timestamp column and format",id:"specified-timestamp-column-and-format",level:3},{value:"Specified timestamp column, format and missing value",id:"specified-timestamp-column-format-and-missing-value",level:3}],d={toc:s};function c(t){var e=t.components,n=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"druid"},"Druid"),(0,r.kt)("blockquote",null,(0,r.kt)("h1",{parentName:"blockquote",id:"sink-plugin-druid-flink"},"Sink plugin: Druid ","[Flink]")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Write data to Apache Druid."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coordinator_url"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datasource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_column"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"auto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_missing_value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"coordinator_url-string"},"coordinator_url ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The URL of Coordinator service in Apache Druid."),(0,r.kt)("h3",{id:"datasource-string"},"datasource ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The DataSource name in Apache Druid."),(0,r.kt)("h3",{id:"timestamp_column-string"},"timestamp_column ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The timestamp column name in Apache Druid, the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,r.kt)("h3",{id:"timestamp_format-string"},"timestamp_format ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The timestamp format in Apache Druid, the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"auto"),", it could be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"iso")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ISO8601 with 'T' separator, like \"2000-01-01T01:02:03.456\""))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"posix")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"seconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"millis")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"milliseconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"micro")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"microseconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"nano")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nanoseconds since epoch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"auto")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"automatically detects ISO (either 'T' or space separator) or millis format"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"any ",(0,r.kt)("a",{parentName:"p",href:"http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html"},"Joda DateTimeFormat")," string"))),(0,r.kt)("h3",{id:"timestamp_missing_value-string"},"timestamp_missing_value ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.kt)("p",null,"The timestamp missing value in Apache Druid, which is used for input records that have a null or missing timestamp. The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp_missing_value")," should be in ISO 8601 format, for example ",(0,r.kt)("inlineCode",{parentName:"p"},'"2022-02-02T02:02:02.222"'),"."),(0,r.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.kt)("p",null,"The parallelism of an individual operator, for DruidSink"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n}\n')),(0,r.kt)("h3",{id:"specified-timestamp-column-and-format"},"Specified timestamp column and format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n}\n')),(0,r.kt)("h3",{id:"specified-timestamp-column-format-and-missing-value"},"Specified timestamp column, format and missing value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n  timestamp_missing_value = "2022-02-02T02:02:02.222"\n}\n')))}c.isMDXComponent=!0}}]);