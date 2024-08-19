"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[46963],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,y=c["".concat(s,".").concat(d)]||c[d]||g[d]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const l={sidebar_position:1},o="About Seatunnel",i={unversionedId:"intro/about",id:"version-2.1.2/intro/about",title:"About Seatunnel",description:"Slack",source:"@site/versioned_docs/version-2.1.2/intro/about.md",sourceDirName:"intro",slug:"/intro/about",permalink:"/zh-CN/docs/2.1.2/intro/about",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/intro/about.md",tags:[],version:"2.1.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Why SeaTunnel",permalink:"/zh-CN/docs/2.1.2/intro/why"}},s={},u=[{value:"Use Scenarios",id:"use-scenarios",level:2},{value:"Features",id:"features",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Connector",id:"connector",level:2},{value:"Who Use SeaTunnel",id:"who-use-seatunnel",level:2},{value:"Landscapes",id:"landscapes",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...l}=e;return(0,r.yg)(c,(0,n.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"about-seatunnel"},"About Seatunnel"),(0,r.yg)("img",{src:"https://seatunnel.apache.org/image/logo.png",alt:"seatunnel logo",width:"200px",height:"200px",align:"right"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://the-asf.slack.com/archives/C053HND1D6X"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-%23seatunnel-4f8eba?logo=slack",alt:"Slack"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/ASFSeaTunnel"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/ASFSeaTunnel.svg?label=Follow&logo=twitter",alt:"Twitter Follow"}))),(0,r.yg)("p",null,"SeaTunnel is a very easy-to-use ultra-high-performance distributed data integration platform that supports real-time\nsynchronization of massive data. It can synchronize tens of billions of data stably and efficiently every day, and has\nbeen used in the production of nearly 100 companies."),(0,r.yg)("h2",{id:"use-scenarios"},"Use Scenarios"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mass data synchronization"),(0,r.yg)("li",{parentName:"ul"},"Mass data integration"),(0,r.yg)("li",{parentName:"ul"},"ETL with massive data"),(0,r.yg)("li",{parentName:"ul"},"Mass data aggregation"),(0,r.yg)("li",{parentName:"ul"},"Multi-source data processing")),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Easy to use, flexible configuration, low code development"),(0,r.yg)("li",{parentName:"ul"},"Real-time streaming"),(0,r.yg)("li",{parentName:"ul"},"Offline multi-source data analysis"),(0,r.yg)("li",{parentName:"ul"},"High-performance, massive data processing capabilities"),(0,r.yg)("li",{parentName:"ul"},"Modular and plug-in mechanism, easy to extend"),(0,r.yg)("li",{parentName:"ul"},"Support data processing and aggregation by SQL"),(0,r.yg)("li",{parentName:"ul"},"Support Spark structured streaming"),(0,r.yg)("li",{parentName:"ul"},"Support Spark 2.x")),(0,r.yg)("h2",{id:"workflow"},"Workflow"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"seatunnel-workflow.svg",src:a(20070).A})),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"Source[Data Source Input] -> Transform[Data Processing] -> Sink[Result Output]\n")),(0,r.yg)("p",null,"The data processing pipeline is constituted by multiple filters to meet a variety of data processing needs. If you are\naccustomed to SQL, you can also directly construct a data processing pipeline by SQL, which is simple and efficient.\nCurrently, the filter list supported by SeaTunnel is still being expanded. Furthermore, you can develop your own data\nprocessing plug-in, because the whole system is easy to expand."),(0,r.yg)("h2",{id:"connector"},"Connector"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Input plugin Fake, File, Hdfs, Kafka, Druid, InfluxDB, S3, Socket, self-developed Input plugin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Filter plugin Add, Checksum, Convert, Date, Drop, Grok, Json, Kv, Lowercase, Remove, Rename, Repartition, Replace,\nSample, Split, Sql, Table, Truncate, Uppercase, Uuid, Self-developed Filter plugin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Output plugin Elasticsearch, File, Hdfs, Jdbc, Kafka, Druid, InfluxDB, Mysql, S3, Stdout, self-developed Output plugin"))),(0,r.yg)("h2",{id:"who-use-seatunnel"},"Who Use SeaTunnel"),(0,r.yg)("p",null,"SeaTunnel have lots of users which you can find more information in ",(0,r.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/user"},"users")),(0,r.yg)("h2",{id:"landscapes"},"Landscapes"),(0,r.yg)("p",{align:"center"},(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("img",{src:"https://landscape.cncf.io/images/left-logo.svg",width:"150",alt:""}),"\xa0\xa0",(0,r.yg)("img",{src:"https://landscape.cncf.io/images/right-logo.svg",width:"200",alt:""}),(0,r.yg)("br",null),(0,r.yg)("br",null),"SeaTunnel enriches the ",(0,r.yg)("a",{href:"https://landscape.cncf.io/landscape=observability-and-analysis&license=apache-license-2-0"},"CNCF CLOUD NATIVE Landscape.")),(0,r.yg)("h2",{id:"whats-more"},"What's More"),(0,r.yg)("p",null,"You can see ",(0,r.yg)("a",{parentName:"p",href:"/docs/category/start"},"Quick Start")," for the next step."))}g.isMDXComponent=!0},20070:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/seatunnel-workflow-3e339663d6a50d0f13b0d4cfb2997898.svg"}}]);