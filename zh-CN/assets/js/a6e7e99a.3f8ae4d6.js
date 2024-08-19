"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4902],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=g(n),y=r,s=d["".concat(o,".").concat(y)]||d[y]||m[y]||l;return n?a.createElement(s,u(u({ref:t},p),{},{components:n})):a.createElement(s,u({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,u[1]=i;for(var g=2;g<l;g++)u[g]=n[g];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},u="Kudu",i={unversionedId:"connector-v2/source/Kudu",id:"connector-v2/source/Kudu",title:"Kudu",description:"Kudu source connector",source:"@site/docs/connector-v2/source/Kudu.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Kudu",permalink:"/zh-CN/docs/connector-v2/source/Kudu",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Kudu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Klaviyo",permalink:"/zh-CN/docs/connector-v2/source/Klaviyo"},next:{title:"Lemlist",permalink:"/zh-CN/docs/connector-v2/source/Lemlist"}},o={},g=[{value:"Support Kudu Version",id:"support-kudu-version",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Multiple Table",id:"multiple-table",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"Next Version",id:"next-version",level:3}],p={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kudu"},"Kudu"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Kudu source connector")),(0,r.yg)("h2",{id:"support-kudu-version"},"Support Kudu Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1.11.1/1.12.0/1.13.0/1.14.0/1.15.0")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to read data from Kudu."),(0,r.yg)("p",null,"The tested kudu version is 1.11.1."),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"kudu Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOL"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT8",(0,r.yg)("br",null),"INT16",(0,r.yg)("br",null),"INT32"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNIXTIME_MICROS"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kudu_masters"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Kudu master address. Separated by ',',such as '192.168.88.110:7051'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of kudu table.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"client_worker_count"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"2 * Runtime.getRuntime().availableProcessors()"),(0,r.yg)("td",{parentName:"tr",align:null},"Kudu worker count. Default value is twice the current number of cpu cores.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"client_default_operation_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"Kudu normal operation time out.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"client_default_admin_operation_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"Kudu admin operation time out.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_kerberos"),(0,r.yg)("td",{parentName:"tr",align:null},"Bool"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Kerberos principal enable.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Kerberos principal. Note that all zeta nodes require have this file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kerberos_keytab"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Kerberos keytab. Note that all zeta nodes require have this file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kerberos_krb5conf"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Kerberos krb5 conf. Note that all zeta nodes require have this file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_token_query_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout for connecting scan token. If not set, it will be the same as operationTimeout.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_token_batch_size_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024 * 1024"),(0,r.yg)("td",{parentName:"tr",align:null},"Kudu scan bytes. The maximum number of bytes read at a time, the default is 1MB.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filter"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024 * 1024"),(0,r.yg)("td",{parentName:"tr",align:null},"Kudu scan filter expressions,Not supported yet.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024 * 1024"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel Schema.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_list"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The list of tables to be read. you can use this configuration instead of ",(0,r.yg)("inlineCode",{parentName:"td"},"table_path")," example: ",(0,r.yg)("inlineCode",{parentName:"td"},'table_list = [{ table_name = "kudu_source_table_1"},{ table_name = "kudu_source_table_2"}] '))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"common-options.md"},"Source Common Options")," for details.")))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'The following example is for a Kudu table named "kudu_source_table", The goal is to print the data from this table on the console and write kudu table "kudu_sink_table"')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'# Defining the runtime environment\nenv {\n  parallelism = 2\n  job.mode = "BATCH"\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  kudu {\n    kudu_masters = "kudu-master:7051"\n    table_name = "kudu_source_table"\n    result_table_name = "kudu"\n    enable_kerberos = true\n    kerberos_principal = "xx@xx.COM"\n    kerberos_keytab = "xx.keytab"\n  }\n}\n\ntransform {\n}\n\nsink {\n  console {\n    source_table_name = "kudu"\n  }\n\n  kudu {\n    source_table_name = "kudu"\n    kudu_masters = "kudu-master:7051"\n    table_name = "kudu_sink_table"\n    enable_kerberos = true\n    kerberos_principal = "xx@xx.COM"\n    kerberos_keytab = "xx.keytab"\n  }\n}\n')),(0,r.yg)("h3",{id:"multiple-table"},"Multiple Table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  kudu{\n   kudu_masters = "kudu-master:7051"\n   table_list = [\n   {\n    table_name = "kudu_source_table_1"\n   },{\n    table_name = "kudu_source_table_2"\n   }\n   ]\n   result_table_name = "kudu"\n}\n}\n\ntransform {\n}\n\nsink {\n  Assert {\n    rules {\n      table-names = ["kudu_source_table_1", "kudu_source_table_2"]\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Kudu Source Connector")),(0,r.yg)("h3",{id:"next-version"},"Next Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Change plugin name from ",(0,r.yg)("inlineCode",{parentName:"li"},"KuduSource")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"Kudu")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3432"},"3432"))))}m.isMDXComponent=!0}}]);