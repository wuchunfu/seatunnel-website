"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[46804],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={},i="Avro format",c={unversionedId:"connector-v2/formats/avro",id:"version-2.3.6/connector-v2/formats/avro",title:"Avro format",description:"Avro is very popular in streaming data pipeline. Now seatunnel supports Avro format in kafka connector.",source:"@site/versioned_docs/version-2.3.6/connector-v2/formats/avro.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/avro",permalink:"/docs/2.3.6/connector-v2/formats/avro",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/formats/avro.md",tags:[],version:"2.3.6",frontMatter:{}},s={},l=[{value:"Kafka uses example",id:"kafka-uses-example",level:2}],m={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"avro-format"},"Avro format"),(0,a.yg)("p",null,"Avro is very popular in streaming data pipeline. Now seatunnel supports Avro format in kafka connector."),(0,a.yg)("h1",{id:"how-to-use"},"How To Use"),(0,a.yg)("h2",{id:"kafka-uses-example"},"Kafka uses example"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This is an example to generate data from fake source and sink to kafka with avro format.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    row.num = 90\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          c_map = "map<string, string>"\n          c_array = "array<int>"\n          c_string = string\n          c_boolean = boolean\n          c_tinyint = tinyint\n          c_smallint = smallint\n          c_int = int\n          c_bigint = bigint\n          c_float = float\n          c_double = double\n          c_bytes = bytes\n          c_date = date\n          c_decimal = "decimal(38, 18)"\n          c_timestamp = timestamp\n        }\n      }\n    }\n    result_table_name = "fake"\n  }\n}\n\nsink {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "test_avro_topic_fake_source"\n    format = avro\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This is an example read data from kafka with avro format and print to console.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "test_avro_topic"\n    result_table_name = "kafka_table"\n    start_mode = "earliest"\n    format = avro\n    format_error_handle_way = skip\n    schema = {\n      fields {\n        id = bigint\n        c_map = "map<string, smallint>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(2, 1)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "kafka_table"\n  }\n}\n')))}u.isMDXComponent=!0}}]);