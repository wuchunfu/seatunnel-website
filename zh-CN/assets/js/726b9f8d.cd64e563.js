"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8813],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={},i="SeaTunnel Runs On Spark",l={unversionedId:"other-engine/spark",id:"other-engine/spark",title:"SeaTunnel Runs On Spark",description:"Spark is a powerful high-performance distributed calculate processing engine. More information about it you can search for Apache Spark",source:"@site/docs/other-engine/spark.md",sourceDirName:"other-engine",slug:"/other-engine/spark",permalink:"/zh-CN/docs/other-engine/spark",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/other-engine/spark.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Flink\u5f15\u64ce\u65b9\u5f0f\u8fd0\u884cSeaTunnel",permalink:"/zh-CN/docs/other-engine/flink"},next:{title:"\u642d\u5efa\u5f00\u53d1\u73af\u5883",permalink:"/zh-CN/docs/contribution/setup"}},p={},s=[{value:"Set Spark Configuration Information In The Job",id:"set-spark-configuration-information-in-the-job",level:3},{value:"Command Line Example",id:"command-line-example",level:3},{value:"Spark on Yarn Cluster",id:"spark-on-yarn-cluster",level:4},{value:"Spark on Yarn Cluster",id:"spark-on-yarn-cluster-1",level:4},{value:"How To Set Up A Simple Spark Job",id:"how-to-set-up-a-simple-spark-job",level:3},{value:"How To Run A Job In A Project",id:"how-to-run-a-job-in-a-project",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"seatunnel-runs-on-spark"},"SeaTunnel Runs On Spark"),(0,a.yg)("p",null,"Spark is a powerful high-performance distributed calculate processing engine. More information about it you can search for ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache Spark")),(0,a.yg)("h3",{id:"set-spark-configuration-information-in-the-job"},"Set Spark Configuration Information In The Job"),(0,a.yg)("p",null,"Example:\nI set some spark conf for this job"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n  spark.app.name = "example"\n  spark.sql.catalogImplementation = "hive"\n  spark.executor.memory= "2g"\n  spark.executor.instances = "2"\n  spark.yarn.priority = "100\'\n  hive.exec.dynamic.partition.mode = "nonstrict"\n  spark.dynamicAllocation.enabled="false"\n}\n')),(0,a.yg)("h3",{id:"command-line-example"},"Command Line Example"),(0,a.yg)("h4",{id:"spark-on-yarn-cluster"},"Spark on Yarn Cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"./bin/start-seatunnel-spark-3-connector-v2.sh --master yarn --deploy-mode cluster --config config/example.conf\n")),(0,a.yg)("h4",{id:"spark-on-yarn-cluster-1"},"Spark on Yarn Cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"./bin/start-seatunnel-spark-3-connector-v2.sh --master yarn --deploy-mode client --config config/example.conf\n")),(0,a.yg)("h3",{id:"how-to-set-up-a-simple-spark-job"},"How To Set Up A Simple Spark Job"),(0,a.yg)("p",null,"This is a simple job that runs on Spark. Randomly generated data is printed to the console"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n  # common parameter\n  parallelism = 1\n\n  # spark special parameter\n  spark.app.name = "example"\n  spark.sql.catalogImplementation = "hive"\n  spark.executor.memory= "2g"\n  spark.executor.instances = "1"\n  spark.yarn.priority = "100"\n  hive.exec.dynamic.partition.mode = "nonstrict"\n  spark.dynamicAllocation.enabled="false"\n}\n\nsource {\n  FakeSource {\n  schema = {\n    fields {\n      c_map = "map<string, array<int>>"\n      c_array = "array<int>"\n      c_string = string\n      c_boolean = boolean\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n      c_decimal = "decimal(30, 8)"\n      c_null = "null"\n      c_bytes = bytes\n      c_date = date\n      c_timestamp = timestamp\n      c_row = {\n        c_map = "map<string, map<string, string>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink{\n   Console{}   \n}\n')),(0,a.yg)("h3",{id:"how-to-run-a-job-in-a-project"},"How To Run A Job In A Project"),(0,a.yg)("p",null,"After you pull the code to the local, go to the ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-spark-connector-v2-example")," module and find ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.example.spark.v2.SeaTunnelApiExample")," to complete the operation of the job."))}m.isMDXComponent=!0}}]);