"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[46590],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=l.createContext({}),u=function(e){var n=l.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(g.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),s=a,d=m["".concat(g,".").concat(s)]||m[s]||y[s]||r;return t?l.createElement(d,i(i({ref:n},p),{},{components:t})):l.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=s;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},32128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=t(58168),a=(t(96540),t(15680));const r={},i="Hbase",o={unversionedId:"connector-v2/sink/Hbase",id:"connector-v2/sink/Hbase",title:"Hbase",description:"Hbase sink connector",source:"@site/docs/connector-v2/sink/Hbase.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hbase",permalink:"/docs/connector-v2/sink/Hbase",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Hbase.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/docs/connector-v2/sink/Greenplum"},next:{title:"HdfsFile",permalink:"/docs/connector-v2/sink/HdfsFile"}},g={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"zookeeper_quorum string",id:"zookeeper_quorum-string",level:3},{value:"table string",id:"table-string",level:3},{value:"rowkey_column list",id:"rowkey_column-list",level:3},{value:"family_name config",id:"family_name-config",level:3},{value:"rowkey_delimiter string",id:"rowkey_delimiter-string",level:3},{value:"version_column string",id:"version_column-string",level:3},{value:"null_mode double",id:"null_mode-double",level:3},{value:"wal_write boolean",id:"wal_write-boolean",level:3},{value:"write_buffer_size int",id:"write_buffer_size-int",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"hbase_extra_config config",id:"hbase_extra_config-config",level:3},{value:"ttl long",id:"ttl-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Writes To The Specified Column Family",id:"writes-to-the-specified-column-family",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:u},m="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,l.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hbase"},"Hbase"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Hbase sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Output data to Hbase"),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zookeeper_quorum"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rowkey_column"),(0,a.yg)("td",{parentName:"tr",align:null},"list"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"family_name"),(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rowkey_delimiter"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},'""')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"version_column"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"null_mode"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"skip")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"wal_write"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"write_buffer_size"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"8 ",(0,a.yg)("em",{parentName:"td"}," 1024 ")," 1024")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"encoding"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"utf8")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hbase_extra_config"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ttl"),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"zookeeper_quorum-string"},"zookeeper_quorum ","[string]"),(0,a.yg)("p",null,'The zookeeper cluster host of hbase, example: "hadoop001:2181,hadoop002:2181,hadoop003:2181"'),(0,a.yg)("h3",{id:"table-string"},"table ","[string]"),(0,a.yg)("p",null,'The table name you want to write, example: "seatunnel"'),(0,a.yg)("h3",{id:"rowkey_column-list"},"rowkey_column ","[list]"),(0,a.yg)("p",null,"The column name list of row keys, example: ",'["id", "uuid"]'),(0,a.yg)("h3",{id:"family_name-config"},"family_name ","[config]"),(0,a.yg)("p",null,"The family name mapping of fields. For example the row from upstream like the following shown:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"id"),(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"age"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,a.yg)("td",{parentName:"tr",align:null},"27")))),(0,a.yg)("p",null,"id as the row key and other fields written to the different families, you can assign"),(0,a.yg)("p",null,'family_name {\nname = "info1"\nage = "info2"\n}'),(0,a.yg)("p",null,"this means that ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," will be written to the family ",(0,a.yg)("inlineCode",{parentName:"p"},"info1")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"age")," will be written to the family ",(0,a.yg)("inlineCode",{parentName:"p"},"info2")),(0,a.yg)("p",null,"if you want other fields written to the same family, you can assign"),(0,a.yg)("p",null,'family_name {\nall_columns = "info"\n}'),(0,a.yg)("p",null,"this means that all fields will be written to the family ",(0,a.yg)("inlineCode",{parentName:"p"},"info")),(0,a.yg)("h3",{id:"rowkey_delimiter-string"},"rowkey_delimiter ","[string]"),(0,a.yg)("p",null,"The delimiter of joining multi row keys, default ",(0,a.yg)("inlineCode",{parentName:"p"},'""')),(0,a.yg)("h3",{id:"version_column-string"},"version_column ","[string]"),(0,a.yg)("p",null,"The version column name, you can use it to assign timestamp for hbase record"),(0,a.yg)("h3",{id:"null_mode-double"},"null_mode ","[double]"),(0,a.yg)("p",null,"The mode of writing null value, support ","[",(0,a.yg)("inlineCode",{parentName:"p"},"skip"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"empty"),"]",", default ",(0,a.yg)("inlineCode",{parentName:"p"},"skip")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"skip: When the field is null, connector will not write this field to hbase"),(0,a.yg)("li",{parentName:"ul"},"empty: When the field is null, connector will write generate empty value for this field")),(0,a.yg)("h3",{id:"wal_write-boolean"},"wal_write ","[boolean]"),(0,a.yg)("p",null,"The wal log write flag, default ",(0,a.yg)("inlineCode",{parentName:"p"},"false")),(0,a.yg)("h3",{id:"write_buffer_size-int"},"write_buffer_size ","[int]"),(0,a.yg)("p",null,"The write buffer size of hbase client, default ",(0,a.yg)("inlineCode",{parentName:"p"},"8 * 1024 * 1024")),(0,a.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,a.yg)("p",null,"The encoding of string field, support ","[",(0,a.yg)("inlineCode",{parentName:"p"},"utf8"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"gbk"),"]",", default ",(0,a.yg)("inlineCode",{parentName:"p"},"utf8")),(0,a.yg)("h3",{id:"hbase_extra_config-config"},"hbase_extra_config ","[config]"),(0,a.yg)("p",null,"The extra configuration of hbase"),(0,a.yg)("h3",{id:"ttl-long"},"ttl ","[long]"),(0,a.yg)("p",null,"Hbase writes data TTL time, the default is based on the TTL set in the table, unit: milliseconds"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'\nHbase {\n  zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181"\n  table = "seatunnel_test"\n  rowkey_column = ["name"]\n  family_name {\n    all_columns = seatunnel\n  }\n}\n')),(0,a.yg)("h2",{id:"writes-to-the-specified-column-family"},"Writes To The Specified Column Family"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'Hbase {\n  zookeeper_quorum = "hbase_e2e:2181"\n  table = "assign_cf_table"\n  rowkey_column = ["id"]\n  family_name {\n    c_double = "cf1"\n    c_bigint = "cf2"\n  }\n}\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"next-version"},"next version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add hbase sink connector (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4049"},"4049"),")")))}y.isMDXComponent=!0}}]);