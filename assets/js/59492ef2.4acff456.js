"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73211],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),g=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=g(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(t),d=r,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(u,s(s({ref:n},c),{},{components:t})):a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var g=2;g<o;g++)s[g]=t[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const o={},s="Ogg Format",i={unversionedId:"connector-v2/formats/ogg-json",id:"version-2.3.6/connector-v2/formats/ogg-json",title:"Ogg Format",description:"Oracle GoldenGate (a.k.a ogg) is a managed service providing a real-time data mesh platform, which uses replication to keep data highly available, and enabling real-time analysis. Customers can design, execute, and monitor their data replication and stream data processing solutions without the need to allocate or manage compute environments. Ogg provides a format schema for changelog and supports to serialize messages using JSON.",source:"@site/versioned_docs/version-2.3.6/connector-v2/formats/ogg-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/ogg-json",permalink:"/docs/2.3.6/connector-v2/formats/ogg-json",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/formats/ogg-json.md",tags:[],version:"2.3.6",frontMatter:{}},l={},g=[{value:"Kafka Uses Example",id:"kafka-uses-example",level:2}],c={toc:g},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"ogg-format"},"Ogg Format"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.oracle.com/integration/goldengate/"},"Oracle GoldenGate")," (a.k.a ogg) is a managed service providing a real-time data mesh platform, which uses replication to keep data highly available, and enabling real-time analysis. Customers can design, execute, and monitor their data replication and stream data processing solutions without the need to allocate or manage compute environments. Ogg provides a format schema for changelog and supports to serialize messages using JSON."),(0,r.yg)("p",null,"Seatunnel supports to interpret Ogg JSON messages as INSERT/UPDATE/DELETE messages into seatunnel system. This is useful in many cases to leverage this feature, such as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    synchronizing incremental data from databases to other systems\n    auditing logs\n    real-time materialized views on databases\n    temporal join changing history of a database table and so on.\n")),(0,r.yg)("p",null,"Seatunnel also supports to encode the INSERT/UPDATE/DELETE messages in Seatunnel as Ogg JSON messages, and emit to storage like Kafka. However, currently Seatunnel can\u2019t combine UPDATE_BEFORE and UPDATE_AFTER into a single UPDATE message. Therefore, Seatunnel encodes UPDATE_BEFORE and UPDATE_AFTER as DELETE and INSERT Ogg messages."),(0,r.yg)("h1",{id:"format-options"},"Format Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what format to use, here should be '-json'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ogg_json.ignore-parse-errors"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"Skip fields and rows with parse errors instead of failing. Fields are set to null in case of errors.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ogg_json.database.include"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific databases changelog rows by regular matching the "database" meta field in the Canal record. The pattern string is compatible with Java\'s Pattern.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ogg_json.table.include"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific tables changelog rows by regular matching the "table" meta field in the Canal record. The pattern string is compatible with Java\'s Pattern.')))),(0,r.yg)("h1",{id:"how-to-use-ogg-format"},"How to Use Ogg format"),(0,r.yg)("h2",{id:"kafka-uses-example"},"Kafka Uses Example"),(0,r.yg)("p",null,"Ogg provides a unified format for changelog, here is a simple example for an update operation captured from a Oracle products table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "before": {\n    "id": 111,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.18\n  },\n  "after": {\n    "id": 111,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.15\n  },\n  "op_type": "U",\n  "op_ts": "2020-05-13 15:40:06.000000",\n  "current_ts": "2020-05-13 15:40:07.000000",\n  "primary_keys": [\n    "id"\n  ],\n  "pos": "00000000000000000000143",\n  "table": "PRODUCTS"\n}\n')),(0,r.yg)("p",null,"Note: please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/debezium/debezium/blob/v1.9.8.Final/documentation/modules/ROOT/pages/connectors/oracle.adoc#data-change-events"},"Debezium documentation")," about the meaning of each fields."),(0,r.yg)("p",null,"The Oracle products table has 4 columns (id, name, description and weight).\nThe above JSON message is an update change event on the products table where the weight value of the row with id = 111 is changed from 5.18 to 5.15.\nAssuming the messages have been synchronized to Kafka topic products_binlog, then we can use the following Seatunnel to consume this topic and interpret the change events."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    parallelism = 1\n    job.mode = "STREAMING"\n}\nsource {\n  Kafka {\n    bootstrap.servers = "127.0.0.1:9092"\n    topic = "ogg"\n    result_table_name = "kafka_name"\n    start_mode = earliest\n    schema = {\n      fields {\n           id = "int"\n           name = "string"\n           description = "string"\n           weight = "double"\n      }\n    },\n    format = ogg_json\n  }\n}\nsink {\n    jdbc {\n        url = "jdbc:mysql://127.0.0.1/test"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "12345678"\n        table = "ogg"\n        primary_keys = ["id"]\n    }\n}\n')))}m.isMDXComponent=!0}}]);