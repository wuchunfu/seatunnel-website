"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[76792],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>y});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,y=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return n?t.createElement(y,r(r({ref:a},p),{},{components:n})):t.createElement(y,r({ref:a},p))}));function y(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26475:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(58168),l=(n(96540),n(15680));const o={title:"Introduction",sidebar_position:1},r="SeaTunnel",i={unversionedId:"introduction",id:"version-2.1.0/introduction",title:"Introduction",description:"Slack",source:"@site/versioned_docs/version-2.1.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh-CN/docs/2.1.0/introduction",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/introduction.md",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"FAQ",permalink:"/zh-CN/docs/2.1.0/FAQ"}},s={},u=[{value:"Why do we need SeaTunnel",id:"why-do-we-need-seatunnel",level:2},{value:"SeaTunnel use scenarios",id:"seatunnel-use-scenarios",level:2},{value:"Features of SeaTunnel",id:"features-of-seatunnel",level:2},{value:"Workflow of SeaTunnel",id:"workflow-of-seatunnel",level:2},{value:"Plugins supported by SeaTunnel",id:"plugins-supported-by-seatunnel",level:2},{value:"Environmental dependency",id:"environmental-dependency",level:2},{value:"Downloads",id:"downloads",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Application practice cases",id:"application-practice-cases",level:2},{value:"Code of conduct",id:"code-of-conduct",level:2},{value:"Developer",id:"developer",level:2},{value:"Contact Us",id:"contact-us",level:2},{value:"Landscapes",id:"landscapes",level:2}],p={toc:u},c="wrapper";function g(e){let{components:a,...o}=e;return(0,l.yg)(c,(0,t.A)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"seatunnel"},"SeaTunnel"),(0,l.yg)("img",{src:"https://seatunnel.apache.org/image/logo.png",alt:"seatunnel logo",width:"200px",height:"200px",align:"right"}),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://the-asf.slack.com/archives/C053HND1D6X"},(0,l.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-%23seatunnel-4f8eba?logo=slack",alt:"Slack"})),"\n",(0,l.yg)("a",{parentName:"p",href:"https://twitter.com/ASFSeaTunnel"},(0,l.yg)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/ASFSeaTunnel.svg?label=Follow&logo=twitter",alt:"Twitter Follow"}))),(0,l.yg)("hr",null),(0,l.yg)("p",null,"SeaTunnel was formerly named Waterdrop , and renamed SeaTunnel since October 12, 2021."),(0,l.yg)("hr",null),(0,l.yg)("p",null,"SeaTunnel is a very easy-to-use ultra-high-performance distributed data integration platform that supports real-time\nsynchronization of massive data. It can synchronize tens of billions of data stably and efficiently every day, and has\nbeen used in the production of nearly 100 companies."),(0,l.yg)("h2",{id:"why-do-we-need-seatunnel"},"Why do we need SeaTunnel"),(0,l.yg)("p",null,"SeaTunnel will do its best to solve the problems that may be encountered in the synchronization of massive data:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Data loss and duplication"),(0,l.yg)("li",{parentName:"ul"},"Task accumulation and delay"),(0,l.yg)("li",{parentName:"ul"},"Low throughput"),(0,l.yg)("li",{parentName:"ul"},"Long cycle to be applied in the production environment"),(0,l.yg)("li",{parentName:"ul"},"Lack of application running status monitoring")),(0,l.yg)("h2",{id:"seatunnel-use-scenarios"},"SeaTunnel use scenarios"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Mass data synchronization"),(0,l.yg)("li",{parentName:"ul"},"Mass data integration"),(0,l.yg)("li",{parentName:"ul"},"ETL with massive data"),(0,l.yg)("li",{parentName:"ul"},"Mass data aggregation"),(0,l.yg)("li",{parentName:"ul"},"Multi-source data processing")),(0,l.yg)("h2",{id:"features-of-seatunnel"},"Features of SeaTunnel"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Easy to use, flexible configuration, low code development"),(0,l.yg)("li",{parentName:"ul"},"Real-time streaming"),(0,l.yg)("li",{parentName:"ul"},"Offline multi-source data analysis"),(0,l.yg)("li",{parentName:"ul"},"High-performance, massive data processing capabilities"),(0,l.yg)("li",{parentName:"ul"},"Modular and plug-in mechanism, easy to extend"),(0,l.yg)("li",{parentName:"ul"},"Support data processing and aggregation by SQL"),(0,l.yg)("li",{parentName:"ul"},"Support Spark structured streaming"),(0,l.yg)("li",{parentName:"ul"},"Support Spark 2.x")),(0,l.yg)("h2",{id:"workflow-of-seatunnel"},"Workflow of SeaTunnel"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"seatunnel-workflow.svg",src:n(78974).A})),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"Source[Data Source Input] -> Transform[Data Processing] -> Sink[Result Output]\n")),(0,l.yg)("p",null,"The data processing pipeline is constituted by multiple filters to meet a variety of data processing needs. If you are\naccustomed to SQL, you can also directly construct a data processing pipeline by SQL, which is simple and efficient.\nCurrently, the filter list supported by SeaTunnel is still being expanded. Furthermore, you can develop your own data\nprocessing plug-in, because the whole system is easy to expand."),(0,l.yg)("h2",{id:"plugins-supported-by-seatunnel"},"Plugins supported by SeaTunnel"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Input plugin Fake, File, Hdfs, Kafka, Druid, InfluxDB, S3, Socket, self-developed Input plugin")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Filter plugin Add, Checksum, Convert, Date, Drop, Grok, Json, Kv, Lowercase, Remove, Rename, Repartition, Replace,\nSample, Split, Sql, Table, Truncate, Uppercase, Uuid, Self-developed Filter plugin")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Output plugin Elasticsearch, File, Hdfs, Jdbc, Kafka, Druid, InfluxDB, Mysql, S3, Stdout, self-developed Output plugin"))),(0,l.yg)("h2",{id:"environmental-dependency"},"Environmental dependency"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"java runtime environment, java >= 8")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"If you want to run SeaTunnel in a cluster environment, any of the following Spark cluster environments is usable:"))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Spark on Yarn"),(0,l.yg)("li",{parentName:"ul"},"Spark Standalone")),(0,l.yg)("p",null,"If the data volume is small, or the goal is merely for functional verification, you can also start in local mode without\na cluster environment, because SeaTunnel supports standalone operation. Note: SeaTunnel 2.0 supports running on Spark\nand Flink."),(0,l.yg)("h2",{id:"downloads"},"Downloads"),(0,l.yg)("p",null,"Download address for run-directly software package :",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/releases"},"https://github.com/apache/incubator-seatunnel/releases")),(0,l.yg)("h2",{id:"quick-start"},"Quick start"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Spark"),"\n",(0,l.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/2.1.0/spark/quick-start"},"https://seatunnel.apache.org/docs/2.1.0/spark/quick-start")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Flink"),"\n",(0,l.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/2.1.0/flink/quick-start"},"https://seatunnel.apache.org/docs/2.1.0/flink/quick-start")),(0,l.yg)("p",null,"Detailed documentation on SeaTunnel\n",(0,l.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/2.1.0/introduction"},"https://seatunnel.apache.org/docs/2.1.0/introduction")),(0,l.yg)("h2",{id:"application-practice-cases"},"Application practice cases"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Weibo, Value-added Business Department Data Platform")),(0,l.yg)("p",null,"Weibo business uses an internal customized version of SeaTunnel and its sub-project Guardian for SeaTunnel On Yarn task\nmonitoring for hundreds of real-time streaming computing tasks."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Sina, Big Data Operation Analysis Platform")),(0,l.yg)("p",null,"Sina Data Operation Analysis Platform uses SeaTunnel to perform real-time and offline analysis of data operation and\nmaintenance for Sina News, CDN and other services, and write it into Clickhouse."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Sogou, Sogou Qiqian System")),(0,l.yg)("p",null,"Sogou Qiqian System takes SeaTunnel as an ETL tool to help establish a real-time data warehouse system."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Qutoutiao, Qutoutiao Data Center")),(0,l.yg)("p",null,"Qutoutiao Data Center uses SeaTunnel to support mysql to hive offline ETL tasks, real-time hive to clickhouse backfill\ntechnical support, and well covers most offline and real-time tasks needs."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Yixia Technology, Yizhibo Data Platform")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Yonghui Superstores Founders' Alliance-Yonghui Yunchuang Technology, Member E-commerce Data Analysis Platform"))),(0,l.yg)("p",null,"SeaTunnel provides real-time streaming and offline SQL computing of e-commerce user behavior data for Yonghui Life, a\nnew retail brand of Yonghui Yunchuang Technology."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Shuidichou, Data Platform")),(0,l.yg)("p",null,"Shuidichou adopts SeaTunnel to do real-time streaming and regular offline batch processing on Yarn, processing 3~4T data\nvolume average daily, and later writing the data to Clickhouse."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Tencent Cloud")),(0,l.yg)("p",null,"Collecting various logs from business services into Apache Kafka, some of the data in Apache Kafka is consumed and extracted through Seatunnel, and then store into Clickhouse."),(0,l.yg)("p",null,"For more use cases, please refer to: ",(0,l.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/blog"},"https://seatunnel.apache.org/blog")),(0,l.yg)("h2",{id:"code-of-conduct"},"Code of conduct"),(0,l.yg)("p",null,"This project adheres to the Contributor Covenant ",(0,l.yg)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct"},"code of conduct"),".\nBy participating, you are expected to uphold this code. Please follow\nthe ",(0,l.yg)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct#reporting-guidelines"},"REPORTING GUIDELINES")," to report\nunacceptable behavior."),(0,l.yg)("h2",{id:"developer"},"Developer"),(0,l.yg)("p",null,"Thanks to all developers!"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/graphs/contributors"},(0,l.yg)("img",{parentName:"a",src:"https://opencollective.com/seatunnel/contributors.svg?width=666",alt:null}))),(0,l.yg)("h2",{id:"contact-us"},"Contact Us"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Mail list: ",(0,l.yg)("strong",{parentName:"li"},(0,l.yg)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". Mail to ",(0,l.yg)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org"),", follow the reply to subscribe\nthe mail list."),(0,l.yg)("li",{parentName:"ul"},"Slack: ",(0,l.yg)("a",{parentName:"li",href:"https://the-asf.slack.com/archives/C053HND1D6X"},"https://the-asf.slack.com/archives/C053HND1D6X")),(0,l.yg)("li",{parentName:"ul"},"Twitter: ",(0,l.yg)("a",{parentName:"li",href:"https://twitter.com/ASFSeaTunnel"},"https://twitter.com/ASFSeaTunnel")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://space.bilibili.com/1542095008"},"Bilibili")," (for Chinese users)")),(0,l.yg)("h2",{id:"landscapes"},"Landscapes"),(0,l.yg)("p",{align:"center"},(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("img",{src:"https://landscape.cncf.io/images/left-logo.svg",width:"150",alt:""}),"\xa0\xa0",(0,l.yg)("img",{src:"https://landscape.cncf.io/images/right-logo.svg",width:"200",alt:""}),(0,l.yg)("br",null),(0,l.yg)("br",null),"SeaTunnel enriches the ",(0,l.yg)("a",{href:"https://landscape.cncf.io/landscape=observability-and-analysis&license=apache-license-2-0"},"CNCF CLOUD NATIVE Landscape.")))}g.isMDXComponent=!0},78974:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/seatunnel-workflow-3e339663d6a50d0f13b0d4cfb2997898.svg"}}]);