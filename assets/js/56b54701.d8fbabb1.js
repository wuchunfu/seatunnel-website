"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[37343],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:7},s=void 0,i={unversionedId:"seatunnel-engine/rest-api",id:"version-2.3.2/seatunnel-engine/rest-api",title:"rest-api",description:"----------------",source:"@site/versioned_docs/version-2.3.2/seatunnel-engine/rest-api.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/rest-api",permalink:"/docs/2.3.2/seatunnel-engine/rest-api",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/seatunnel-engine/rest-api.md",tags:[],version:"2.3.2",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"checkpoint-storage",permalink:"/docs/2.3.2/seatunnel-engine/checkpoint-storage"},next:{title:"tcp",permalink:"/docs/2.3.2/seatunnel-engine/tcp"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Returns an overview over all jobs and their current state.",id:"returns-an-overview-over-all-jobs-and-their-current-state",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Return details of a job.",id:"return-details-of-a-job",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Returns system monitoring information.",id:"returns-system-monitoring-information",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"rest-api"},"REST API"),(0,a.yg)("p",null,"Seatunnel has a monitoring API that can be used to query status and statistics of running jobs, as well as recent\ncompleted jobs. The monitoring API is a REST-ful API that accepts HTTP requests and responds with JSON data."),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"The monitoring API is backed by a web server that runs as part of the node, each node member can provide rest api capability.\nBy default, this server listens at port 5801, which can be configured in hazelcast.yaml like :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"network:\n    rest-api:\n      enabled: true\n      endpoint-groups:\n        CLUSTER_WRITE:\n          enabled: true\n        DATA:\n          enabled: true\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - localhost\n    port:\n      auto-increment: true\n      port-count: 100\n      port: 5801\n")),(0,a.yg)("h2",{id:"api-reference"},"API reference"),(0,a.yg)("h3",{id:"returns-an-overview-over-all-jobs-and-their-current-state"},"Returns an overview over all jobs and their current state."),(0,a.yg)("details",null,(0,a.yg)("summary",null,(0,a.yg)("code",null,"GET")," ",(0,a.yg)("code",null,(0,a.yg)("b",null,"/hazelcast/rest/maps/running-jobs"))," ",(0,a.yg)("code",null,"(Returns an overview over all jobs and their current state.)")),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("h4",{id:"responses"},"Responses"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "envOptions": {\n    },\n    "createTime": "",\n    "jobDag": {\n      "vertices": [\n      ],\n      "edges": [\n      ]\n    },\n    "pluginJarsUrls": [\n    ],\n    "isStartWithSavePoint": false,\n    "metrics": {\n      "sourceReceivedCount": "",\n      "sinkWriteCount": ""\n    }\n  }\n]\n'))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"return-details-of-a-job"},"Return details of a job."),(0,a.yg)("details",null,(0,a.yg)("summary",null,(0,a.yg)("code",null,"GET")," ",(0,a.yg)("code",null,(0,a.yg)("b",null,"/hazelcast/rest/maps/running-job/:jobId"))," ",(0,a.yg)("code",null,"(Return details of a job.)")),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("blockquote",null,(0,a.yg)("table",{parentName:"blockquote"},(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"data type"),(0,a.yg)("th",{parentName:"tr",align:null},"description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"jobId"),(0,a.yg)("td",{parentName:"tr",align:null},"required"),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"job id"))))),(0,a.yg)("h4",{id:"responses-1"},"Responses"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "envOptions": {\n  },\n  "createTime": "",\n  "jobDag": {\n    "vertices": [\n    ],\n    "edges": [\n    ]\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false,\n  "metrics": {\n    "sourceReceivedCount": "",\n    "sinkWriteCount": ""\n  }\n}\n'))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"returns-system-monitoring-information"},"Returns system monitoring information."),(0,a.yg)("details",null,(0,a.yg)("summary",null,(0,a.yg)("code",null,"GET")," ",(0,a.yg)("code",null,(0,a.yg)("b",null,"/hazelcast/rest/maps/system-monitoring-information"))," ",(0,a.yg)("code",null,"(Returns system monitoring information.)")),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("h4",{id:"responses-2"},"Responses"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processors":"8",\n    "physical.memory.total":"16.0G",\n    "physical.memory.free":"16.3M",\n    "swap.space.total":"0",\n    "swap.space.free":"0",\n    "heap.memory.used":"135.7M",\n    "heap.memory.free":"440.8M",\n    "heap.memory.total":"576.5M",\n    "heap.memory.max":"3.6G",\n    "heap.memory.used/total":"23.54%",\n    "heap.memory.used/max":"3.73%",\n    "minor.gc.count":"6",\n    "minor.gc.time":"110ms",\n    "major.gc.count":"2",\n    "major.gc.time":"73ms",\n    "load.process":"24.78%",\n    "load.system":"60.00%",\n    "load.systemAverage":"2.07",\n    "thread.count":"117",\n    "thread.peakCount":"118",\n    "cluster.timeDiff":"0",\n    "event.q.size":"0",\n    "executor.q.async.size":"0",\n    "executor.q.client.size":"0",\n    "executor.q.client.query.size":"0",\n    "executor.q.client.blocking.size":"0",\n    "executor.q.query.size":"0",\n    "executor.q.scheduled.size":"0",\n    "executor.q.io.size":"0",\n    "executor.q.system.size":"0",\n    "executor.q.operations.size":"0",\n    "executor.q.priorityOperation.size":"0",\n    "operations.completed.count":"10",\n    "executor.q.mapLoad.size":"0",\n    "executor.q.mapLoadAllKeys.size":"0",\n    "executor.q.cluster.size":"0",\n    "executor.q.response.size":"0",\n    "operations.running.count":"0",\n    "operations.pending.invocations.percentage":"0.00%",\n    "operations.pending.invocations.count":"0",\n    "proxy.count":"8",\n    "clientEndpoint.count":"0",\n    "connection.active.count":"2",\n    "client.connection.count":"0",\n    "connection.count":"0"\n  }\n]\n'))),(0,a.yg)("hr",null))}m.isMDXComponent=!0}}]);