"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[54355],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=o,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},48338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(58168),o=(t(96540),t(15680));const r={},i="About Seatunnel",s={unversionedId:"about",id:"version-2.3.2/about",title:"About Seatunnel",description:"Slack",source:"@site/versioned_docs/version-2.3.2/about.md",sourceDirName:".",slug:"/about",permalink:"/zh-CN/docs/2.3.2/about",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/about.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",next:{title:"deployment",permalink:"/zh-CN/docs/2.3.2/start-v2/locally/deployment"}},l={},u=[{value:"Why we need SeaTunnel",id:"why-we-need-seatunnel",level:2},{value:"Features of SeaTunnel",id:"features-of-seatunnel",level:2},{value:"SeaTunnel work flowchart",id:"seatunnel-work-flowchart",level:2},{value:"Connector",id:"connector",level:2},{value:"Who uses SeaTunnel",id:"who-uses-seatunnel",level:2},{value:"Landscapes",id:"landscapes",level:2},{value:"Learn more",id:"learn-more",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"about-seatunnel"},"About Seatunnel"),(0,o.yg)("img",{src:"https://seatunnel.apache.org/image/logo.png",alt:"seatunnel logo",width:"200px",height:"200px",align:"right"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://s.apache.org/seatunnel-slack"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-%23seatunnel-4f8eba?logo=slack",alt:"Slack"})),"\n",(0,o.yg)("a",{parentName:"p",href:"https://twitter.com/ASFSeaTunnel"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/ASFSeaTunnel.svg?label=Follow&logo=twitter",alt:"Twitter Follow"}))),(0,o.yg)("p",null,"SeaTunnel is a very easy-to-use, ultra-high-performance, distributed data integration platform that supports real-time\nsynchronization of massive data. It can synchronize tens of billions of data stably and efficiently every day, and has\nbeen used in production by nearly 100 companies."),(0,o.yg)("h2",{id:"why-we-need-seatunnel"},"Why we need SeaTunnel"),(0,o.yg)("p",null,"SeaTunnel focuses on data integration and data synchronization, and is mainly designed to solve common problems in the field of data integration:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Various data sources: There are hundreds of commonly-used data sources with incompatible versions. With the emergence of new technologies, more data sources are appearing. It is difficult for users to find a tool that can fully and quickly support these data sources."),(0,o.yg)("li",{parentName:"ul"},"Complex synchronization scenarios: Data synchronization needs to support various synchronization scenarios such as offline-full synchronization, offline-incremental synchronization, CDC, real-time synchronization, and full database synchronization."),(0,o.yg)("li",{parentName:"ul"},"High resource demand: Existing data integration and data synchronization tools often require vast computing resources or JDBC connection resources to complete real-time synchronization of massive small tables. This has increased the burden on enterprises."),(0,o.yg)("li",{parentName:"ul"},"Lack of quality and monitoring: Data integration and synchronization processes often experience loss or duplication of data. The synchronization process lacks monitoring, and it is impossible to intuitively understand the real situation of the data during the task process."),(0,o.yg)("li",{parentName:"ul"},"Complex technology stack: The technology components used by enterprises are different, and users need to develop corresponding synchronization programs for different components to complete data integration."),(0,o.yg)("li",{parentName:"ul"},"Difficulty in management and maintenance: Limited to different underlying technology components (Flink/Spark), offline synchronization and real-time synchronization often have be developed and managed separately, which increases the difficulty of management and maintainance.")),(0,o.yg)("h2",{id:"features-of-seatunnel"},"Features of SeaTunnel"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Rich and extensible Connector: SeaTunnel provides a Connector API that does not depend on a specific execution engine. Connectors (Source, Transform, Sink) developed based on this API can run on many different engines, such as SeaTunnel Engine, Flink, and Spark, that are currently supported."),(0,o.yg)("li",{parentName:"ul"},"Connector plug-in: The plug-in design allows users to easily develop their own Connector and integrate it into the SeaTunnel project. Currently, SeaTunnel supports more than 100 Connectors, and the number is surging. Here is the list of ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/Connector-v2-release-state"},"currently-supported connectors")),(0,o.yg)("li",{parentName:"ul"},"Batch-stream integration: Connectors developed based on the SeaTunnel Connector API are perfectly compatible with offline synchronization, real-time synchronization, full-synchronization, incremental synchronization and other scenarios. They greatly reduce the difficulty of managing data integration tasks."),(0,o.yg)("li",{parentName:"ul"},"Supports a distributed snapshot algorithm to ensure data consistency."),(0,o.yg)("li",{parentName:"ul"},"Multi-engine support: SeaTunnel uses the SeaTunnel Engine for data synchronization by default. SeaTunnel also supports the use of Flink or Spark as the execution engine of the Connector to adapt to the existing technical components of the enterprise. SeaTunnel supports multiple versions of Spark and Flink."),(0,o.yg)("li",{parentName:"ul"},"JDBC multiplexing, database log multi-table parsing: SeaTunnel supports multi-table or whole database synchronization, which solves the problem of over-JDBC connections; and supports multi-table or whole database log reading and parsing, which solves the need for CDC multi-table synchronization scenarios to deal with problems with repeated reading and parsing of logs."),(0,o.yg)("li",{parentName:"ul"},"High throughput and low latency: SeaTunnel supports parallel reading and writing, providing stable and reliable data synchronization capabilities with high throughput and low latency."),(0,o.yg)("li",{parentName:"ul"},"Perfect real-time monitoring: SeaTunnel supports detailed monitoring information of each step in the data synchronization process, allowing users to easily understand the number of data, data size, QPS and other information read and written by the synchronization task."),(0,o.yg)("li",{parentName:"ul"},"Two job development methods are supported: coding and canvas design. The SeaTunnel web project ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel-web"},"https://github.com/apache/seatunnel-web")," provides visual management of jobs, scheduling, running and monitoring capabilities.")),(0,o.yg)("h2",{id:"seatunnel-work-flowchart"},"SeaTunnel work flowchart"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"SeaTunnel work flowchart",src:t(80383).A,width:"946",height:"593"})),(0,o.yg)("p",null,"The runtime process of SeaTunnel is shown in the figure above."),(0,o.yg)("p",null,"The user configures the job information and selects the execution engine to submit the job."),(0,o.yg)("p",null,"The Source Connector is responsible for parallel reading the data and sending the data to the downstream Transform or directly to the Sink, and the Sink writes the data to the destination. It is worth noting that Source, Transform and Sink can be easily developed and extended by yourself."),(0,o.yg)("p",null,"SeaTunnel is an EL(T) data integration platform. Therefore, in SeaTunnel, Transform can only be used to perform some simple transformations on data, such as converting the data of a column to uppercase or lowercase, changing the column name, or splitting a column into multiple columns."),(0,o.yg)("p",null,"The default engine use by SeaTunnel is ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.2/seatunnel-engine/about"},"SeaTunnel Engine"),". If you choose to use the Flink or Spark engine, SeaTunnel will package the Connector into a Flink or Spark program and submit it to Flink or Spark to run."),(0,o.yg)("h2",{id:"connector"},"Connector"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Source Connectors")," SeaTunnel supports reading data from various relational, graph, NoSQL, document, and memory databases; distributed file systems such as HDFS; and a variety of cloud storage solutions, such as S3 and OSS. We also support data reading of many common SaaS services. You can access the detailed list ",(0,o.yg)("a",{parentName:"p",href:"connector-v2/source"},"here"),". If you want, You can develop your own source connector and easily integrate it into SeaTunnel.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Transform Connector")," If the schema is different between source and Sink, You can use the Transform Connector to change the schema read from source and make it the same as the Sink schema.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Sink Connector")," SeaTunnel supports writing data to various relational, graph, NoSQL, document, and memory databases; distributed file systems such as HDFS; and a variety of cloud storage solutions, such as S3 and OSS. We also support writing data to many common SaaS services. You can access the detailed list ",(0,o.yg)("a",{parentName:"p",href:"connector-v2/sink"},"here"),". If you want, you can develop your own Sink connector and easily integrate it into SeaTunnel."))),(0,o.yg)("h2",{id:"who-uses-seatunnel"},"Who uses SeaTunnel"),(0,o.yg)("p",null,"SeaTunnel has lots of users. You can find more information about them in ",(0,o.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/user"},"users"),"."),(0,o.yg)("h2",{id:"landscapes"},"Landscapes"),(0,o.yg)("p",{align:"center"},(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://landscape.cncf.io/images/left-logo.svg",width:"150",alt:""}),"\xa0\xa0",(0,o.yg)("img",{src:"https://landscape.cncf.io/images/right-logo.svg",width:"200",alt:""}),(0,o.yg)("br",null),(0,o.yg)("br",null),"SeaTunnel enriches the ",(0,o.yg)("a",{href:"https://landscape.cncf.io/card-mode?category=streaming-messaging&license=apache-license-2-0&grouping=category&selected=sea-tunnal"},"CNCF CLOUD NATIVE Landscape"),"."),(0,o.yg)("h2",{id:"learn-more"},"Learn more"),(0,o.yg)("p",null,"You can see ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.2/start-v2/locally/deployment"},"Quick Start")," for the next steps."))}d.isMDXComponent=!0},80383:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/architecture_diagram-c02a9d297450d0f9522324b2f196fa06.png"}}]);