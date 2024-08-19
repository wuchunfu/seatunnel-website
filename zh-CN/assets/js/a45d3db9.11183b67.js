"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[39477],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>y});var r=t(96540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},m="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),m=s(t),f=a,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(y,i(i({ref:e},u),{},{components:t})):r.createElement(y,i({ref:e},u))}));function y(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[m]="string"==typeof n?n:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46925:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={},i="Avro \u683c\u5f0f",c={unversionedId:"connector-v2/formats/avro",id:"version-2.3.5/connector-v2/formats/avro",title:"Avro \u683c\u5f0f",description:"Avro \u5728\u6d41\u5f0f\u6570\u636e\u5904\u7406\u7ba1\u9053\u4e2d\u975e\u5e38\u6d41\u884c\u3002\u73b0\u5728seatunnel\u5728kafka\u8fde\u63a5\u5668\u4e2d\u652f\u6301Avro\u683c\u5f0f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/formats/avro.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/avro",permalink:"/zh-CN/docs/2.3.5/connector-v2/formats/avro",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/formats/avro.md",tags:[],version:"2.3.5",frontMatter:{}},l={},s=[{value:"Kafka \u4f7f\u7528\u793a\u4f8b",id:"kafka-\u4f7f\u7528\u793a\u4f8b",level:2}],u={toc:s},m="wrapper";function p(n){let{components:e,...t}=n;return(0,a.yg)(m,(0,r.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"avro-\u683c\u5f0f"},"Avro \u683c\u5f0f"),(0,a.yg)("p",null,"Avro \u5728\u6d41\u5f0f\u6570\u636e\u5904\u7406\u7ba1\u9053\u4e2d\u975e\u5e38\u6d41\u884c\u3002\u73b0\u5728seatunnel\u5728kafka\u8fde\u63a5\u5668\u4e2d\u652f\u6301Avro\u683c\u5f0f"),(0,a.yg)("h1",{id:"\u600e\u6837\u7528"},"\u600e\u6837\u7528"),(0,a.yg)("h2",{id:"kafka-\u4f7f\u7528\u793a\u4f8b"},"Kafka \u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6a21\u62df\u968f\u673a\u751f\u6210\u6570\u636e\u6e90,\u5e76\u4ee5 Avro \u7684\u683c\u5f0f \u5199\u5165 Kafka \u7684\u5b9e\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    row.num = 90\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          c_map = "map<string, string>"\n          c_array = "array<int>"\n          c_string = string\n          c_boolean = boolean\n          c_tinyint = tinyint\n          c_smallint = smallint\n          c_int = int\n          c_bigint = bigint\n          c_float = float\n          c_double = double\n          c_bytes = bytes\n          c_date = date\n          c_decimal = "decimal(38, 18)"\n          c_timestamp = timestamp\n        }\n      }\n    }\n    result_table_name = "fake"\n  }\n}\n\nsink {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "test_avro_topic_fake_source"\n    format = avro\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4ece kafka \u8bfb\u53d6 avro \u683c\u5f0f\u7684\u6570\u636e\u5e76\u6253\u5370\u5230\u63a7\u5236\u53f0\u7684\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "test_avro_topic"\n    result_table_name = "kafka_table"\n    kafka.auto.offset.reset = "earliest"\n    format = avro\n    format_error_handle_way = skip\n    schema = {\n      fields {\n        id = bigint\n        c_map = "map<string, smallint>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(2, 1)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "kafka_table"\n  }\n}\n')))}p.isMDXComponent=!0}}]);