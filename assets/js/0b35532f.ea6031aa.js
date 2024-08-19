"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25061],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),g=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=g(n),y=r,u=d["".concat(m,".").concat(y)]||d[y]||s[y]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const i={},o="Rabbitmq",l={unversionedId:"connector-v2/source/Rabbitmq",id:"version-2.3.1/connector-v2/source/Rabbitmq",title:"Rabbitmq",description:"Rabbitmq source connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/source/Rabbitmq.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Rabbitmq",permalink:"/docs/2.3.1/connector-v2/source/Rabbitmq",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/source/Rabbitmq.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/docs/2.3.1/connector-v2/source/Phoenix"},next:{title:"Redis",permalink:"/docs/2.3.1/connector-v2/source/Redis"}},m={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2}],p={toc:g},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rabbitmq"},"Rabbitmq"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Rabbitmq source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to read data from Rabbitmq."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The source must be non-parallel (parallelism set to 1) in order to achieve exactly-once. This limitation is mainly due to RabbitMQ\u2019s approach to dispatching messages from a single queue to multiple consumers."),(0,r.yg)("h2",{parentName:"admonition",id:"options"},"Options"),(0,r.yg)("table",{parentName:"admonition"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"virtual_host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"routing_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"exchange"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"network_recovery_interval"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topology_recovery_enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"automatic_recovery_enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"requested_channel_max"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"requested_frame_max"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"requested_heartbeat"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prefetch_count"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"delivery_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{parentName:"admonition",id:"host-string"},"host ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"the default host to use for connections"),(0,r.yg)("h3",{parentName:"admonition",id:"port-int"},"port ","[int]"),(0,r.yg)("p",{parentName:"admonition"},"the default port to use for connections"),(0,r.yg)("h3",{parentName:"admonition",id:"virtual_host-string"},"virtual_host ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"virtual host \u2013 the virtual host to use when connecting to the broker"),(0,r.yg)("h3",{parentName:"admonition",id:"username-string"},"username ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"the AMQP user name to use when connecting to the broker"),(0,r.yg)("h3",{parentName:"admonition",id:"password-string"},"password ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"the password to use when connecting to the broker"),(0,r.yg)("h3",{parentName:"admonition",id:"url-string"},"url ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"convenience method for setting the fields in an AMQP URI: host, port, username, password and virtual host"),(0,r.yg)("h3",{parentName:"admonition",id:"queue_name-string"},"queue_name ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"the queue to publish the message to"),(0,r.yg)("h3",{parentName:"admonition",id:"routing_key-string"},"routing_key ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"the routing key to publish the message to"),(0,r.yg)("h3",{parentName:"admonition",id:"exchange-string"},"exchange ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"the exchange to publish the message to"),(0,r.yg)("h3",{parentName:"admonition",id:"schema-config"},"schema ","[Config]"),(0,r.yg)("h4",{parentName:"admonition",id:"fields-config"},"fields ","[Config]"),(0,r.yg)("p",{parentName:"admonition"},"the schema fields of upstream data."),(0,r.yg)("h3",{parentName:"admonition",id:"network_recovery_interval-int"},"network_recovery_interval ","[int]"),(0,r.yg)("p",{parentName:"admonition"},"how long will automatic recovery wait before attempting to reconnect, in ms"),(0,r.yg)("h3",{parentName:"admonition",id:"topology_recovery-string"},"topology_recovery ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"if true, enables topology recovery"),(0,r.yg)("h3",{parentName:"admonition",id:"automatic_recovery-string"},"automatic_recovery ","[string]"),(0,r.yg)("p",{parentName:"admonition"},"if true, enables connection recovery"),(0,r.yg)("h3",{parentName:"admonition",id:"connection_timeout-int"},"connection_timeout ","[int]"),(0,r.yg)("p",{parentName:"admonition"},"connection tcp establishment timeout in milliseconds; zero for infinite"),(0,r.yg)("h3",{parentName:"admonition",id:"requested_channel_max-int"},"requested_channel_max ","[int]"),(0,r.yg)("p",{parentName:"admonition"},"initially requested maximum channel number; zero for unlimited\n**Note: Note the value must be between 0 and 65535 (unsigned short in AMQP 0-9-1)."),(0,r.yg)("h3",{parentName:"admonition",id:"requested_frame_max-int"},"requested_frame_max ","[int]"),(0,r.yg)("p",{parentName:"admonition"},"the requested maximum frame size"),(0,r.yg)("h3",{parentName:"admonition",id:"requested_heartbeat-int"},"requested_heartbeat ","[int]"),(0,r.yg)("p",{parentName:"admonition"},"Set the requested heartbeat timeout\n**Note: Note the value must be between 0 and 65535 (unsigned short in AMQP 0-9-1)."),(0,r.yg)("h3",{parentName:"admonition",id:"prefetch_count-int"},"prefetch_count ","[int]"),(0,r.yg)("p",{parentName:"admonition"},"prefetchCount the max number of messages to receive without acknowledgement"),(0,r.yg)("h3",{parentName:"admonition",id:"delivery_timeout-long"},"delivery_timeout ","[long]"),(0,r.yg)("p",{parentName:"admonition"},"deliveryTimeout maximum wait time, in milliseconds, for the next message delivery"),(0,r.yg)("h3",{parentName:"admonition",id:"common-options"},"common options"),(0,r.yg)("p",{parentName:"admonition"},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,r.yg)("h2",{parentName:"admonition",id:"example"},"Example"),(0,r.yg)("p",{parentName:"admonition"},"simple:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    RabbitMQ {\n        host = "rabbitmq-e2e"\n        port = 5672\n        virtual_host = "/"\n        username = "guest"\n        password = "guest"\n        queue_name = "test"\n        schema = {\n            fields {\n                id = bigint\n                c_map = "map<string, smallint>"\n                c_array = "array<tinyint>"\n            }\n        }\n    }\n}\n')),(0,r.yg)("h2",{parentName:"admonition",id:"changelog"},"Changelog"),(0,r.yg)("h3",{parentName:"admonition",id:"next-version"},"next version"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Add Rabbitmq source Connector"))))}s.isMDXComponent=!0}}]);