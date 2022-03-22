"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4714],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(n),k=r,g=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3419:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return u},toc:function(){return s},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p="File",m={unversionedId:"flink/configuration/sink-plugins/File",id:"flink/configuration/sink-plugins/File",title:"File",description:"Sink plugin : File [Flink]",source:"@site/docs/flink/configuration/sink-plugins/File.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/File",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/configuration/sink-plugins/File.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Elasticsearch"},next:{title:"InfluxDB",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/InfluxDb"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"format string",id:"format-string",level:3},{value:"path string",id:"path-string",level:3},{value:"path_time_format string",id:"path_time_format-string",level:3},{value:"write_mode string",id:"write_mode-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"rollover_interval long",id:"rollover_interval-long",level:3},{value:"max_part_size long",id:"max_part_size-long",level:3},{value:"prefix string",id:"prefix-string",level:3},{value:"suffix string",id:"suffix-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file"},"File"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sink plugin : File ","[Flink]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data to the file system"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path_time_format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yyyyMMddHHmmss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rollover_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_part_size"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"seatunnel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},".ext")))),(0,l.kt)("h3",{id:"format-string"},"format ","[string]"),(0,l.kt)("p",null,"Currently, ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," , and ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," are supported. The streaming mode currently only supports ",(0,l.kt)("inlineCode",{parentName:"p"},"text")),(0,l.kt)("h3",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"The file path is required. The ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs file")," starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs://")," , and the ",(0,l.kt)("inlineCode",{parentName:"p"},"local file")," starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"file://"),",\nwe can add the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the path, like ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs:///test_${uuid}_${now}.txt"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.kt)("inlineCode",{parentName:"p"},"path_time_format")),(0,l.kt)("h3",{id:"path_time_format-string"},"path_time_format ","[string]"),(0,l.kt)("p",null,"When the format in the ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," parameter is ",(0,l.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"path_time_format")," can specify the time format of the path, and the default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,l.kt)("h3",{id:"write_mode-string"},"write_mode ","[string]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"NO_OVERWRITE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No overwrite, there is an error in the path"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"OVERWRITE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Overwrite, delete and then write if the path exists")))),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/flink/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,l.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,l.kt)("p",null,"The parallelism of an individual operator, for FileSink"),(0,l.kt)("h3",{id:"rollover_interval-long"},"rollover_interval ","[long]"),(0,l.kt)("p",null,"The new file part rollover interval, unit min."),(0,l.kt)("h3",{id:"max_part_size-long"},"max_part_size ","[long]"),(0,l.kt)("p",null,"The max size of each file part, unit MB."),(0,l.kt)("h3",{id:"prefix-string"},"prefix ","[string]"),(0,l.kt)("p",null,"The prefix of each file part."),(0,l.kt)("h3",{id:"suffix-string"},"suffix ","[string]"),(0,l.kt)("p",null,"The suffix of each file part."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  FileSink {\n    format = "json"\n    path = "hdfs://localhost:9000/flink/output/"\n    write_mode = "OVERWRITE"\n  }\n')))}k.isMDXComponent=!0}}]);