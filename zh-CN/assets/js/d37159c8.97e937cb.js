"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[28143],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>c});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=t.createContext({}),p=function(e){var a=t.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(g.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),y=l,c=s["".concat(g,".").concat(y)]||s[y]||u[y]||r;return n?t.createElement(c,i(i({ref:a},m),{},{components:n})):t.createElement(c,i({ref:a},m))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var o={};for(var g in a)hasOwnProperty.call(a,g)&&(o[g]=a[g]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},67850:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(58168),l=(n(96540),n(15680));const r={},i="Kafka",o={unversionedId:"connector-v2/sink/Kafka",id:"version-2.3.5/connector-v2/sink/Kafka",title:"Kafka",description:"Kafka \u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/sink/Kafka.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Kafka",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Kafka",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/sink/Kafka.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"JDBC",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Jdbc"},next:{title:"Kingbase",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Kingbase"}},g={},p=[{value:"\u652f\u6301\u5f15\u64ce",id:"\u652f\u6301\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u63a5\u6536\u5668\u9009\u9879",id:"\u63a5\u6536\u5668\u9009\u9879",level:2},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca",level:2},{value:"Topic \u683c\u5f0f",id:"topic-\u683c\u5f0f",level:3},{value:"\u8bed\u4e49",id:"\u8bed\u4e49",level:3},{value:"\u5206\u533a\u5173\u952e\u5b57\u6bb5",id:"\u5206\u533a\u5173\u952e\u5b57\u6bb5",level:3},{value:"\u5206\u533a\u5206\u914d",id:"\u5206\u533a\u5206\u914d",level:3},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355:",id:"\u7b80\u5355",level:3},{value:"AWS MSK SASL/SCRAM",id:"aws-msk-saslscram",level:3},{value:"AWS MSK IAM",id:"aws-msk-iam",level:3}],m={toc:p},s="wrapper";function u(e){let{components:a,...n}=e;return(0,l.yg)(s,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"kafka"},"Kafka"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Kafka \u6570\u636e\u63a5\u6536\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u5f15\u64ce"},"\u652f\u6301\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.5/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.5/concept/connector-v2-features"},"cdc"))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 2pc \u6765\u4fdd\u8bc1\u6d88\u606f\u53ea\u53d1\u9001\u4e00\u6b21\u5230kafka")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u5c06 Rows \u5185\u5bb9\u53d1\u9001\u5230 Kafka topic"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,l.yg)("p",null,"\u4e3a\u4e86\u4f7f\u7528 Kafka \u8fde\u63a5\u5668\uff0c\u9700\u8981\u4ee5\u4e0b\u4f9d\u8d56\u9879\n\u53ef\u4ee5\u901a\u8fc7 install-plugin.sh \u6216\u4ece Maven \u4e2d\u592e\u5b58\u50a8\u5e93\u4e0b\u8f7d"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"),(0,l.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,l.yg)("td",{parentName:"tr",align:null},"\u901a\u7528"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-kafka"},"\u4e0b\u8f7d"))))),(0,l.yg)("h2",{id:"\u63a5\u6536\u5668\u9009\u9879"},"\u63a5\u6536\u5668\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"topic"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u8868\u7528\u4f5c\u63a5\u6536\u5668\u65f6\uff0ctopic \u540d\u79f0\u662f\u8981\u5199\u5165\u6570\u636e\u7684 topic")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kafka brokers \u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kafka.config"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9664\u4e86\u4e0a\u8ff0 Kafka Producer \u5ba2\u6237\u7aef\u5fc5\u987b\u6307\u5b9a\u7684\u53c2\u6570\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u4e3a Producer \u5ba2\u6237\u7aef\u6307\u5b9a\u591a\u4e2a\u975e\u5f3a\u5236\u53c2\u6570\uff0c\u6db5\u76d6 ",(0,l.yg)("a",{parentName:"td",href:"https://kafka.apache.org/documentation.html#producerconfigs"},"Kafka\u5b98\u65b9\u6587\u6863\u4e2d\u6307\u5b9a\u7684\u6240\u6709\u751f\u4ea7\u8005\u53c2\u6570"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"semantics"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"NON"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u9009\u62e9\u7684\u8bed\u4e49\u662f EXACTLY_ONCE/AT_LEAST_ONCE/NON\uff0c\u9ed8\u8ba4 NON\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_key_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5b57\u6bb5\u7528\u4f5c kafka \u6d88\u606f\u7684key")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u6307\u5b9a\u5206\u533a\uff0c\u6240\u6709\u6d88\u606f\u90fd\u4f1a\u53d1\u9001\u5230\u6b64\u5206\u533a")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"assign_partitions"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u6839\u636e\u6d88\u606f\u7684\u5185\u5bb9\u51b3\u5b9a\u53d1\u9001\u54ea\u4e2a\u5206\u533a,\u8be5\u53c2\u6570\u7684\u4f5c\u7528\u662f\u5206\u53d1\u4fe1\u606f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"transaction_prefix"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bed\u4e49\u6307\u5b9a\u4e3aEXACTLY_ONCE\uff0c\u751f\u4ea7\u8005\u5c06\u628a\u6240\u6709\u6d88\u606f\u5199\u5165\u4e00\u4e2a Kafka \u4e8b\u52a1\u4e2d\uff0ckafka \u901a\u8fc7\u4e0d\u540c\u7684 transactionId \u6765\u533a\u5206\u4e0d\u540c\u7684\u4e8b\u52a1\u3002\u8be5\u53c2\u6570\u662fkafka transactionId\u7684\u524d\u7f00\uff0c\u786e\u4fdd\u4e0d\u540c\u7684\u4f5c\u4e1a\u4f7f\u7528\u4e0d\u540c\u7684\u524d\u7f00")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"format"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"json"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u683c\u5f0f\u3002\u9ed8\u8ba4\u683c\u5f0f\u662fjson\u3002\u53ef\u9009\u6587\u672c\u683c\u5f0f\uff0ccanal-json\u3001debezium-json \u548c avro\u3002\u5982\u679c\u4f7f\u7528 json \u6216\u6587\u672c\u683c\u5f0f\u3002\u9ed8\u8ba4\u5b57\u6bb5\u5206\u9694\u7b26\u662f",(0,l.yg)("inlineCode",{parentName:"td"},","),"\u3002\u5982\u679c\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff0c\u8bf7\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"td"},"field_delimiter"),"\u9009\u9879\u3002\u5982\u679c\u4f7f\u7528canal\u683c\u5f0f\uff0c\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.5/connector-v2/formats/canal-json"},"canal-json"),"\u3002\u5982\u679c\u4f7f\u7528debezium\u683c\u5f0f\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.5/connector-v2/formats/debezium-json"},"debezium-json")," \u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},","),(0,l.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f\u7684\u5b57\u6bb5\u5206\u9694\u7b26")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.5/connector-v2/sink/common-options"},"Sink\u5e38\u7528\u9009\u9879 ")," \u4e86\u89e3\u8be6\u60c5")))),(0,l.yg)("h2",{id:"\u53c2\u6570\u89e3\u91ca"},"\u53c2\u6570\u89e3\u91ca"),(0,l.yg)("h3",{id:"topic-\u683c\u5f0f"},"Topic \u683c\u5f0f"),(0,l.yg)("p",null,"\u76ee\u524d\u652f\u6301\u4e24\u79cd\u683c\u5f0f\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u586b\u5199topic\u540d\u79f0")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4f7f\u7528\u4e0a\u6e38\u6570\u636e\u4e2d\u7684\u5b57\u6bb5\u503c\u4f5c\u4e3a topic ,\u683c\u5f0f\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"${your field name}"),", \u5176\u4e2d topic \u662f\u4e0a\u6e38\u6570\u636e\u7684\u5176\u4e2d\u4e00\u5217\u7684\u503c"),(0,l.yg)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"))),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"data"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Jack"),(0,l.yg)("td",{parentName:"tr",align:null},"16"),(0,l.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Mary"),(0,l.yg)("td",{parentName:"tr",align:null},"23"),(0,l.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,l.yg)("p",null,"\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"p"},"${name}")," \u8bbe\u7f6e\u4e3a topic\u3002\u56e0\u6b64\uff0c\u7b2c\u4e00\u884c\u53d1\u9001\u5230 Jack topic\uff0c\u7b2c\u4e8c\u884c\u53d1\u9001\u5230 Mary topic\u3002"),(0,l.yg)("h3",{id:"\u8bed\u4e49"},"\u8bed\u4e49"),(0,l.yg)("p",null,"\u5728 EXACTLY_ONCE \u4e2d\uff0c\u751f\u4ea7\u8005\u5c06\u5728 Kafka \u4e8b\u52a1\u4e2d\u5199\u5165\u6240\u6709\u6d88\u606f\uff0c\u8fd9\u4e9b\u6d88\u606f\u5c06\u5728\u68c0\u67e5\u70b9\u4e0a\u63d0\u4ea4\u7ed9 Kafka\uff0c\u8be5\u6a21\u5f0f\u4e0b\u80fd\u4fdd\u8bc1\u6570\u636e\u7cbe\u786e\u5199\u5165kafka\u4e00\u6b21\uff0c\u5373\u4f7f\u4efb\u52a1\u5931\u8d25\u91cd\u8bd5\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u6570\u636e\u91cd\u590d\u548c\u4e22\u5931\n\u5728 AT_LEAST_ONCE \u4e2d\uff0c\u751f\u4ea7\u8005\u5c06\u7b49\u5f85 Kafka \u7f13\u51b2\u533a\u4e2d\u6240\u6709\u672a\u5b8c\u6210\u7684\u6d88\u606f\u5728\u68c0\u67e5\u70b9\u4e0a\u88ab Kafka \u751f\u4ea7\u8005\u786e\u8ba4\uff0c\u8be5\u6a21\u5f0f\u4e0b\u80fd\u4fdd\u8bc1\u6570\u636e\u81f3\u5c11\u5199\u5165kafka\u4e00\u6b21\uff0c\u5373\u4f7f\u4efb\u52a1\u5931\u8d25\nNON \u4e0d\u63d0\u4f9b\u4efb\u4f55\u4fdd\u8bc1\uff1a\u5982\u679c Kafka \u4ee3\u7406\u51fa\u73b0\u95ee\u9898\uff0c\u6d88\u606f\u53ef\u80fd\u4f1a\u4e22\u5931\uff0c\u5e76\u4e14\u6d88\u606f\u53ef\u80fd\u4f1a\u91cd\u590d\uff0c\u8be5\u6a21\u5f0f\u4e0b\uff0c\u4efb\u52a1\u5931\u8d25\u91cd\u8bd5\u53ef\u80fd\u4f1a\u4ea7\u751f\u6570\u636e\u4e22\u5931\u6216\u91cd\u590d\u3002"),(0,l.yg)("h3",{id:"\u5206\u533a\u5173\u952e\u5b57\u6bb5"},"\u5206\u533a\u5173\u952e\u5b57\u6bb5"),(0,l.yg)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u4e0a\u6e38\u6570\u636e\u4e2d\u7684\u5b57\u6bb5\u503c\u4f5c\u4e3a\u952e\uff0c\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u5b57\u6bb5\u540d\u6307\u5b9a\u7ed9\u6b64\u5c5e\u6027"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"data"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Jack"),(0,l.yg)("td",{parentName:"tr",align:null},"16"),(0,l.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Mary"),(0,l.yg)("td",{parentName:"tr",align:null},"23"),(0,l.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,l.yg)("p",null,"\u5982\u679c\u5c06 name \u8bbe\u7f6e\u4e3a key\uff0c\u90a3\u4e48 name \u5217\u7684\u54c8\u5e0c\u503c\u5c06\u51b3\u5b9a\u6d88\u606f\u53d1\u9001\u5230\u54ea\u4e2a\u5206\u533a\u3002\n\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u5206\u533a\u952e\u5b57\u6bb5\uff0c\u5219\u5c06\u53d1\u9001\u7a7a\u6d88\u606f\u952e\u3002\n\u6d88\u606f key \u7684\u683c\u5f0f\u4e3a json\uff0c\u5982\u679c\u8bbe\u7f6e name \u4e3a key\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},'{"name":"Jack"}'),"\u3002\n\u6240\u9009\u7684\u5b57\u6bb5\u5fc5\u987b\u662f\u4e0a\u6e38\u6570\u636e\u4e2d\u5df2\u5b58\u5728\u7684\u5b57\u6bb5\u3002"),(0,l.yg)("h3",{id:"\u5206\u533a\u5206\u914d"},"\u5206\u533a\u5206\u914d"),(0,l.yg)("p",null,"\u5047\u8bbe\u603b\u6709\u4e94\u4e2a\u5206\u533a\uff0c\u914d\u7f6e\u4e2d\u7684 assign_partitions \u5b57\u6bb5\u8bbe\u7f6e\u4e3a\uff1a\nassign_partitions = ",'["shoe", "clothing"]','\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5305\u542b "shoe" \u7684\u6d88\u606f\u5c06\u88ab\u53d1\u9001\u5230\u7b2c\u96f6\u4e2a\u5206\u533a\uff0c\u56e0\u4e3a "shoe" \u5728 assign_partitions \u4e2d\u88ab\u6807\u8bb0\u4e3a\u96f6\uff0c \u800c\u5305\u542b "clothing" \u7684\u6d88\u606f\u5c06\u88ab\u53d1\u9001\u5230\u7b2c\u4e00\u4e2a\u5206\u533a\u3002\n\u5bf9\u4e8e\u5176\u4ed6\u7684\u6d88\u606f\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u54c8\u5e0c\u7b97\u6cd5\u5c06\u5b83\u4eec\u5747\u5300\u5730\u5206\u914d\u5230\u5269\u4f59\u7684\u5206\u533a\u4e2d\u3002\n\u8fd9\u4e2a\u529f\u80fd\u662f\u901a\u8fc7 MessageContentPartitioner \u7c7b\u5b9e\u73b0\u7684\uff0c\u8be5\u7c7b\u5b9e\u73b0\u4e86 org.apache.kafka.clients.producer.Partitioner \u63a5\u53e3\u3002\u5982\u679c\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u5206\u533a\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\u3002'),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355"},"\u7b80\u5355:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6b64\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5b9a\u4e49\u4e00\u4e2a SeaTunnel \u540c\u6b65\u4efb\u52a1\uff0c\u8be5\u4efb\u52a1\u80fd\u591f\u901a\u8fc7 FakeSource \u81ea\u52a8\u4ea7\u751f\u6570\u636e\u5e76\u5c06\u5176\u53d1\u9001\u5230 Kafka Sink\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cFakeSource \u4f1a\u751f\u6210\u603b\u5171 16 \u884c\u6570\u636e\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"row.num=16"),"\uff09\uff0c\u6bcf\u4e00\u884c\u90fd\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5\uff0c\u5373 ",(0,l.yg)("inlineCode",{parentName:"p"},"name"),"\uff08\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"age"),"\uff08\u6574\u578b\uff09\u3002\u6700\u7ec8\uff0c\u8fd9\u4e9b\u6570\u636e\u5c06\u88ab\u53d1\u9001\u5230\u540d\u4e3a test_topic \u7684 topic \u4e2d\uff0c\u56e0\u6b64\u8be5 topic \u4e5f\u5c06\u5305\u542b 16 \u884c\u6570\u636e\u3002\n\u5982\u679c\u4f60\u8fd8\u672a\u5b89\u88c5\u548c\u90e8\u7f72 SeaTunnel\uff0c\u4f60\u9700\u8981\u53c2\u7167 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.5/start-v2/locally/deployment"},"\u5b89\u88c5SeaTunnel")," \u7684\u6307\u5357\u6765\u8fdb\u884c\u5b89\u88c5\u548c\u90e8\u7f72\u3002\u5b8c\u6210\u5b89\u88c5\u548c\u90e8\u7f72\u540e\uff0c\u4f60\u53ef\u4ee5\u6309\u7167 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.5/start-v2/locally/quick-start-seatunnel-engine"},"\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 SeaTunnel \u5f15\u64ce")," \u7684\u6307\u5357\u6765\u8fd0\u884c\u4efb\u52a1\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'# Defining the runtime environment\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  kafka {\n      topic = "test_topic"\n      bootstrap.servers = "localhost:9092"\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.config = {\n        acks = "all"\n        request.timeout.ms = 60000\n        buffer.memory = 33554432\n      }\n  }\n}\n')),(0,l.yg)("h3",{id:"aws-msk-saslscram"},"AWS MSK SASL/SCRAM"),(0,l.yg)("p",null,"\u5c06\u4ee5\u4e0b ",(0,l.yg)("inlineCode",{parentName:"p"},"${username}")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"${password}")," \u66ff\u6362\u4e3a AWS MSK \u4e2d\u7684\u914d\u7f6e\u503c\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.config = {\n         security.protocol=SASL_SSL\n         sasl.mechanism=SCRAM-SHA-512\n         sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required \\nusername=${username}\\npassword=${password};"\n      }\n  }\n}\n')),(0,l.yg)("h3",{id:"aws-msk-iam"},"AWS MSK IAM"),(0,l.yg)("p",null,"\u4ece ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/aws/aws-msk-iam-auth/releases"},"https://github.com/aws/aws-msk-iam-auth/releases")," \u4e0b\u8f7d ",(0,l.yg)("inlineCode",{parentName:"p"},"aws-msk-iam-auth-1.1.5.jar"),"\n\u5e76\u5c06\u5176\u653e\u5165 ",(0,l.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/plugin/kafka/lib")," \u4e2d\u76ee\u5f55\u3002\n\u8bf7\u786e\u4fdd IAM \u7b56\u7565\u5177\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"kafka-cluster:Connect"),"\n\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'"Effect": "Allow",\n"Action": [\n    "kafka-cluster:Connect",\n    "kafka-cluster:AlterCluster",\n    "kafka-cluster:DescribeCluster"\n],\n')),(0,l.yg)("p",null,"\u63a5\u6536\u5668\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.config = {\n         security.protocol=SASL_SSL\n         sasl.mechanism=AWS_MSK_IAM\n         sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n         sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n      }\n  }\n}\n')))}u.isMDXComponent=!0}}]);