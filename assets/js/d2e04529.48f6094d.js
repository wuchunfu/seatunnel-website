"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38056],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={},o="Kafka",l={unversionedId:"connector/sink/Kafka",id:"version-2.1.3/connector/sink/Kafka",title:"Kafka",description:"Description",source:"@site/versioned_docs/version-2.1.3/connector/sink/Kafka.md",sourceDirName:"connector/sink",slug:"/connector/sink/Kafka",permalink:"/docs/2.1.3/connector/sink/Kafka",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.3/connector/sink/Kafka.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"Jdbc",permalink:"/docs/2.1.3/connector/sink/Jdbc"},next:{title:"Kudu",permalink:"/docs/2.1.3/connector/sink/Kudu"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"producer.bootstrap.servers string",id:"producerbootstrapservers-string",level:3},{value:"topic string",id:"topic-string",level:3},{value:"producer string",id:"producer-string",level:3},{value:"semantic string",id:"semantic-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka"},"Kafka"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write Rows to a Kafka topic."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Kafka"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Kafka"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topics"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"semantic"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"producerbootstrapservers-string"},"producer.bootstrap.servers ","[string]"),(0,r.yg)("p",null,"Kafka Brokers List"),(0,r.yg)("h3",{id:"topic-string"},"topic ","[string]"),(0,r.yg)("p",null,"Kafka Topic"),(0,r.yg)("h3",{id:"producer-string"},"producer ","[string]"),(0,r.yg)("p",null,"In addition to the above parameters that must be specified by the ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka producer")," client, the user can also specify multiple non-mandatory parameters for the ",(0,r.yg)("inlineCode",{parentName:"p"},"producer")," client, covering ",(0,r.yg)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#producerconfigs"},"all the producer parameters specified in the official Kafka document"),"."),(0,r.yg)("p",null,"The way to specify the parameter is to add the prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"producer.")," to the original parameter name. For example, the way to specify ",(0,r.yg)("inlineCode",{parentName:"p"},"request.timeout.ms")," is: ",(0,r.yg)("inlineCode",{parentName:"p"},"producer.request.timeout.ms = 60000")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,r.yg)("h3",{id:"semantic-string"},"semantic ","[string]"),(0,r.yg)("p",null,"Semantics that can be chosen. exactly_once/at_least_once/none, default is at_least_once"),(0,r.yg)("p",null,"In exactly_once, flink producer will write all messages in a Kafka transaction that will be committed to Kafka on a checkpoint."),(0,r.yg)("p",null,"In at_least_once, flink producer will wait for all outstanding messages in the Kafka buffers to be acknowledged by the Kafka producer on a checkpoint."),(0,r.yg)("p",null,"NONE does not provide any guarantees: messages may be lost in case of issues on the Kafka broker and messages may be duplicated in case of a Flink failure."),(0,r.yg)("p",null,"please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/connectors/datastream/kafka/#fault-tolerance"},"Flink Kafka Fault Tolerance")),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1.3/connector/sink/common-options"},"Sink Plugin")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'kafka {\n    topics = "seatunnel"\n    producer.bootstrap.servers = "localhost:9092"\n}\n')))}g.isMDXComponent=!0}}]);