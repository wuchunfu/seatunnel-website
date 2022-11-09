"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13810],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57197:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return k}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},p="Kafka",s={unversionedId:"flink/configuration/sink-plugins/Kafka",id:"version-2.1.0/flink/configuration/sink-plugins/Kafka",title:"Kafka",description:"Sink plugin : Kafka [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Kafka.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/Kafka",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Kafka.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jdbc",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Jdbc"},next:{title:"Common Options",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/sink-plugin"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"producer.bootstrap.servers string",id:"producerbootstrapservers-string",level:3},{value:"topic string",id:"topic-string",level:3},{value:"producer string",id:"producer-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink plugin : Kafka ","[Flink]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Write data to Kafka"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"producer.bootstrap.servers"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"producer.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"producerbootstrapservers-string"},"producer.bootstrap.servers ","[string]"),(0,i.kt)("p",null,"Kafka Brokers List"),(0,i.kt)("h3",{id:"topic-string"},"topic ","[string]"),(0,i.kt)("p",null,"Kafka Topic"),(0,i.kt)("h3",{id:"producer-string"},"producer ","[string]"),(0,i.kt)("p",null,"In addition to the above mandatory parameters that must be specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kafka producer")," client, the user can also specify multiple non-mandatory parameters for the ",(0,i.kt)("inlineCode",{parentName:"p"},"producer")," client, covering ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#producerconfigs"},"all the producer parameters specified in the official Kafka document"),"."),(0,i.kt)("p",null,"The way to specify the parameter is to add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"producer.")," to the original parameter name. For example, the way to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"request.timeout.ms")," is: ",(0,i.kt)("inlineCode",{parentName:"p"},"producer.request.timeout.ms = 60000")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.1.0/flink/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'   KafkaTable {\n     producer.bootstrap.servers = "127.0.0.1:9092"\n     topics = test_sink\n   }\n')))}k.isMDXComponent=!0}}]);