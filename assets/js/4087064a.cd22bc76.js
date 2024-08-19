"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8463],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,g=h["".concat(r,".").concat(p)]||h[p]||d[p]||a;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[h]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(58168),i=(n(96540),n(15680));const a={slug:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",title:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",tags:["Meetup"]},s="How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",l={permalink:"/blog/How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-05-10-ClickHouse.md",source:"@site/blog/2022-05-10-ClickHouse.md",title:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",description:"Author | Fan Jia, Apache SeaTunnel(Incubating) Contributor",date:"2022-05-10T00:00:00.000Z",formattedDate:"May 10, 2022",tags:[{label:"Meetup",permalink:"/blog/tags/meetup"}],readingTime:7.035,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",title:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",tags:["Meetup"]},prevItem:{title:"How dose Apache SeaTunnel refactor the API to decouple with the computing engine",permalink:"/blog/How dose Apache SeaTunnel refactor the API to decouple with the computing engine"},nextItem:{title:"SeaTunnel Application and Refactoring at Kidswant",permalink:"/blog/SeaTunnel Application and Refactoring at Kidswant"}},r={authorsImageUrls:[]},c=[{value:"01 Status of ClickHouse Sink",id:"01-status-of-clickhouse-sink",level:2},{value:"02 Scenarios that ClickHouse Sink isn&#39;t good at",id:"02-scenarios-that-clickhouse-sink-isnt-good-at",level:2},{value:"03 ClickHouse File core technologies",id:"03-clickhouse-file-core-technologies",level:2},{value:"04 Core technical points",id:"04-core-technical-points",level:2},{value:"05 Plugin implementation analysis",id:"05-plugin-implementation-analysis",level:2},{value:"06 Comparison of plug-in capabilities",id:"06-comparison-of-plug-in-capabilities",level:2},{value:"07 Follow-up plans",id:"07-follow-up-plans",level:2}],u={toc:c},h="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(h,(0,o.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(28748).A,width:"1920",height:"1275"})),(0,i.yg)("p",null,"Author | Fan Jia, Apache SeaTunnel(Incubating) Contributor\nEditor | Test Engineer Feng Xiulan"),(0,i.yg)("p",null,"For importing billions of batches of data, the traditional JDBC approach does not perform as well as it should in some massive data synchronization scenarios. To write data faster, Apache SeaTunnel (Incubating) has just released version 2.1.1 to provide support for ClickhouseFile-Connector to implement Bulk load data writing."),(0,i.yg)("p",null,"Bulk load means synchronizing large amounts of data to the target DB. SeaTunnel currently supports data synchronization to ClickHouse."),(0,i.yg)("p",null,'At the Apache SeaTunnel (Incubating) April Meetup, Apache SeaTunnel (Incubating) contributor Fan Jia shared the topic of "ClickHouse bulk load implementation based on SeaTunnel", explaining in detail the implementation principle and process of ClickHouseFile for efficient processing of large amounts of data.'),(0,i.yg)("p",null,"Thanks to the test engineer Feng Xiulan for the article arrangement!"),(0,i.yg)("p",null,"This presentation contains seven parts."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"State of ClickHouse Sink"),(0,i.yg)("li",{parentName:"ul"},"Scenarios that ClickHouse Sink isn't good at "),(0,i.yg)("li",{parentName:"ul"},"Introduction to the ClickHouseFile plugin"),(0,i.yg)("li",{parentName:"ul"},"ClickHouseFile core technologies"),(0,i.yg)("li",{parentName:"ul"},"Analysis of ClickHouseFile plugin implementation"),(0,i.yg)("li",{parentName:"ul"},"Comparison of plug-in capabilities"),(0,i.yg)("li",{parentName:"ul"},"Post-optimization directions")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(46838).A,width:"1171",height:"1171"})),(0,i.yg)("p",null,"Fan Jia,  Apache SeaTunnel (Incubating) contributor, Senior Enginee of WhaleOps."),(0,i.yg)("h2",{id:"01-status-of-clickhouse-sink"},"01 Status of ClickHouse Sink"),(0,i.yg)("p",null,"At present, the process of synchronizing data from SeaTunnel to ClickHouse is as follows: as long as the data source is supported by SeaTunnel, the data can be extracted, converted (or not), and written directly to the ClickHouse sink connector, and then written to the ClickHouse server via JDBC. "),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(94609).A,width:"1139",height:"585"})),(0,i.yg)("p",null,"However, there are some problems with writing to the ClickHouse server via traditional JDBC."),(0,i.yg)("p",null,"Firstly, the tool used now is the driver provided by ClickHouse and implemented via HTTP, however, HTTP is not very efficient to implement in certain scenarios. The second is the huge amount of data, if there is duplicate data or a large amount of data written at once, it needs to generate the corresponding insert statement and send it via HTTP to the ClickHouse server-side by the traditional method, where it is parsed and executed item by item or in batches, which does not allow data compression."),(0,i.yg)("p",null,"Finally, there is the problem we often encounter, i.e. too much data may lead to an OOM on the SeaTunnel side or a server-side hang due to too much data being written to the server-side too often."),(0,i.yg)("p",null,"So we thought, is there a faster way to send than HTTP? If data pre-processing or data compression could be done on the SeaTunnel side, then the network bandwidth pressure would be reduced and the transmission rate would be increased."),(0,i.yg)("h2",{id:"02-scenarios-that-clickhouse-sink-isnt-good-at"},"02 Scenarios that ClickHouse Sink isn't good at"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"If the HTTP transfer protocol is used, HTTP may not be able to handle it when the volume of data is too large and the batch is sending requests in micro-batches."),(0,i.yg)("li",{parentName:"ol"},"Too many INSERT requests may put too much pressure on the server. The bandwidth can handle a large number of requests, but the server-side is not always able to carry them. The online server not only needs data inserts but more importantly, the query data can be used by other business teams. If the server cluster goes down due to too much-inserted data, it is more than worth the cost.")),(0,i.yg)("h2",{id:"03-clickhouse-file-core-technologies"},"03 ClickHouse File core technologies"),(0,i.yg)("p",null,"In response to these scenarios that ClickHouse is not good at, we wondered is there a way to do data compression right on the Spark side, without increasing the resource load on the Server when writing data, and with the ability to write large amounts of data quickly? So we developed the ClickHouseFile plugin to solve the problem."),(0,i.yg)("p",null,"The key technology of the ClickHouseFile plugin is ClickHouse -local. ClickHouse-local mode allows users to perform fast processing of local files without having to deploy and configure a ClickHouse Server. C lickHouse-local uses the same core as ClickHouse Server, so it supports most features as well as the same format and table engine."),(0,i.yg)("p",null,"These two features mean that users can work directly with local files without having to do the processing on the ClickHouse Server side. Because it is the same format, the data generated by the operations we perform on the remote or SeaTunnel side is seamlessly compatible with the server-side and can be written to using ClickHouse local. ClickHouse local is the core technology for the implementation of ClickHouseFile, which allows for implementing the ClickHouse file connector."),(0,i.yg)("p",null,"ClickHouse local core is used in the following ways."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(86298).A,width:"1112",height:"262"})),(0,i.yg)("p",null,"First line: pass the data to the test_table table of the ClickHouse-local program via the Linux pipeline."),(0,i.yg)("p",null,"Lines two to five: create a result_table for receiving data."),(0,i.yg)("p",null,"The sixth line: pass data from test_table to the result_table."),(0,i.yg)("p",null,"Line 7: Define the disk path for data processing."),(0,i.yg)("p",null,"By calling the Clickhouse-local component, the Apache SeaTunnel (Incubating) is used to generate the data files and compress the data. By communicating with the Server, the generated data is sent directly to the different nodes of Clickhouse and the data files are then made available to the nodes for the query."),(0,i.yg)("p",null,"Comparison of the original and current implementations."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(91523).A,width:"1272",height:"576"})),(0,i.yg)("p",null,"Originally, the data, including the insert statements was sent by Spark to the server, and the server did the SQL parsing, generated and compressed the table data files, generated the corresponding files, and created the corresponding indexes. If we use ClickHouse local technology, the data file generation, file compression and index creation are done by SeaTunnel, and the final output is a file or folder for the server-side, which is synchronized to the server and the server can queries the data without additional operations."),(0,i.yg)("h2",{id:"04-core-technical-points"},"04 Core technical points"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(61356).A,width:"1164",height:"435"})),(0,i.yg)("p",null,"The above process makes data synchronization more efficient, thanks to three optimizations we have made to it."),(0,i.yg)("p",null,"Firstly, the data is transferred from the pipeline to the ClickHouseFile by the division, which imposes limitations in terms of length and memory. For this reason, we write the data received by the ClickHouse connector, i.e. the sink side, to a temporary file via MMAP technology, and then the ClickHouse local reads the data from the temporary file to generate our target local file, in order to achieve the effect of incremental data reading and solve the OM problem."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(44245).A,width:"1206",height:"565"})),(0,i.yg)("p",null,"Secondly, it supports sharding. If only one file or folder is generated in a cluster, the file is distributed to only one node, which will greatly reduce the performance of the query. Therefore, we carry out slicing support. Users can set the key for slicing in the configuration folder, and the algorithm will divide the data into multiple log files and write them to different cluster nodes, significantly improving the read performance."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(58494).A,width:"1043",height:"558"})),(0,i.yg)("p",null,"The third key optimization is file transfer. Currently, SeaTunnel supports two file transfer methods, one is SCP, which is characterized by security, versatility, and no additional configuration; the other is RSYNC, which is somewhat fast and efficient and supports breakpoint resume, but requires additional configuration, users can choose between the way suits their needs."),(0,i.yg)("h2",{id:"05-plugin-implementation-analysis"},"05 Plugin implementation analysis"),(0,i.yg)("p",null,"In summary, the general implementation process of ClickHouseFile is as follows."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(46183).A,width:"533",height:"635"})),(0,i.yg)("p",null,"1.caching data to the ClickHouse sink side.\n2.calling ClickHouse-local to generate the file.\n3.sending the data to the ClickHouse server.\n4.Execution of the ATTACH command."),(0,i.yg)("p",null,"With the above four steps, the generated data reaches a queryable state."),(0,i.yg)("h2",{id:"06-comparison-of-plug-in-capabilities"},"06 Comparison of plug-in capabilities"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(2560).A,width:"1071",height:"485"})),(0,i.yg)("p",null,"(a) In terms of data transfer, ClickHouseFile is more suitable for massive amounts of data, with the advantage that no additional configuration is required and it is highly versatile, while ClickHouseFile is more complex to configure and currently supports fewer engines."),(0,i.yg)("p",null,"In terms of environmental complexity, ClickHouse is more suitable for complex environments and can be run directly without additional configuration."),(0,i.yg)("p",null,"In terms of versatility, ClickHouse, due to being an officially supported JDBC diver by SeaTunnel, basically supports all engines for data writing, while ClickHouseFile supports relatively few engines."),(0,i.yg)("p",null,"In terms of server pressure, ClickHouseFile's advantage shows when it comes to massive data transfers that don't put too much pressure on the server."),(0,i.yg)("p",null,"However, the two are not in competition and the choice needs to be based on the usage scenario."),(0,i.yg)("h2",{id:"07-follow-up-plans"},"07 Follow-up plans"),(0,i.yg)("p",null,"Although SeaTunnel currently supports the ClickHouseFile plugin, there are still many defects that need to be optimized, mainly including"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Rsync support."),(0,i.yg)("li",{parentName:"ul"},"Exactly-Once support."),(0,i.yg)("li",{parentName:"ul"},"Zero Copy support for transferring data files."),(0,i.yg)("li",{parentName:"ul"},"More Engine support.")),(0,i.yg)("p",null,"Anyone interested in the above issues is welcome to contribute to the follow-up plans, or tell me your ideas!"))}d.isMDXComponent=!0},46838:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/0-1-56defefcc273a6e21b09dd483bf95914.png"},28748:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/0-c3f068094d4f0308d7100502a6162925.jpg"},94609:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/1-76284c6612152506e0111e0f0d25d0f5.png"},86298:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/2-2367f70ae655c30a94a2ec65e67a6b26.png"},91523:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3-6204c709b48243f88914bfd492dc67f2.png"},61356:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/4-d47e1da865afa7ea4de50b2d6e4b6ac1.png"},44245:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/5-9f00635b1727843f705cd5a28632e2e4.png"},58494:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/6-35b30550d6a18fbea49856083aa85094.png"},46183:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/7-1be978da30a55fe0289c683f2ae61aac.png"},2560:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/8-261e7ba686f3fadf5d7c1445e9be5b66.png"}}]);