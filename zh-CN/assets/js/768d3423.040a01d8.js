"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[59536],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=l,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return t?a.createElement(y,r(r({ref:n},c),{},{components:t})):a.createElement(y,r({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(58168),l=(t(96540),t(15680));const o={},r="Console",i={unversionedId:"connector-v2/sink/Console",id:"version-2.3.5/connector-v2/sink/Console",title:"Console",description:"Console \u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/sink/Console.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Console",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Console",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/sink/Console.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"ClickhouseFile",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/ClickhouseFile"},next:{title:"CosFile",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/CosFile"}},s={},u=[{value:"\u652f\u6301\u8fde\u63a5\u5668\u7248\u672c",id:"\u652f\u6301\u8fde\u63a5\u5668\u7248\u672c",level:2},{value:"\u652f\u6301\u7684\u5f15\u64ce",id:"\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63a5\u6536\u5668\u9009\u9879",id:"\u63a5\u6536\u5668\u9009\u9879",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u591a\u6570\u636e\u6e90\u793a\u4f8b\uff1a",id:"\u591a\u6570\u636e\u6e90\u793a\u4f8b",level:3},{value:"\u63a7\u5236\u53f0\u793a\u4f8b\u6570\u636e",id:"\u63a7\u5236\u53f0\u793a\u4f8b\u6570\u636e",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"console"},"Console"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Console \u6570\u636e\u63a5\u6536\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u8fde\u63a5\u5668\u7248\u672c"},"\u652f\u6301\u8fde\u63a5\u5668\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6240\u6709\u7248\u672c")),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce"},"\u652f\u6301\u7684\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u63a5\u6536Source\u7aef\u4f20\u5165\u7684\u6570\u636e\u5e76\u6253\u5370\u5230\u63a7\u5236\u53f0\u3002\u652f\u6301\u6279\u540c\u6b65\u548c\u6d41\u540c\u6b65\u4e24\u79cd\u6a21\u5f0f\u3002"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff0c\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u4e3a ","[",(0,l.yg)("inlineCode",{parentName:"p"},"age: 12, name: jared"),"]"," \uff0c\u5219\u53d1\u9001\u5230\u63a7\u5236\u53f0\u7684\u5185\u5bb9\u4e3a: ",(0,l.yg)("inlineCode",{parentName:"p"},'{"name":"jared"\uff0c"age":17}'))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.5/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,l.yg)("h2",{id:"\u63a5\u6536\u5668\u9009\u9879"},"\u63a5\u6536\u5668\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.5/connector-v2/sink/common-options"},"Sink\u5e38\u7528\u9009\u9879")," \u4e86\u89e3\u8be6\u60c5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"log.print.data"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u786e\u5b9a\u662f\u5426\u5e94\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u6570\u636e\u7684\u6807\u5fd7\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,l.yg)("inlineCode",{parentName:"td"},"true"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"log.print.delay.ms"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5c06\u6bcf\u4e2a\u6570\u636e\u9879\u6253\u5370\u5230\u65e5\u5fd7\u4e4b\u95f4\u7684\u5ef6\u8fdf(\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d)\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,l.yg)("inlineCode",{parentName:"td"},"0"))))),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u968f\u673a\u751f\u6210\u7684\u6570\u636e,\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5\uff0c\u5373 ",(0,l.yg)("inlineCode",{parentName:"p"},"name"),"\uff08\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"age"),"\uff08\u6574\u578b\uff09\uff0c\u5199\u5165\u63a7\u5236\u53f0\uff0c\u5e76\u884c\u5ea6\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"1"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake"\n  }\n}\n')),(0,l.yg)("h3",{id:"\u591a\u6570\u636e\u6e90\u793a\u4f8b"},"\u591a\u6570\u636e\u6e90\u793a\u4f8b\uff1a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u591a\u6570\u636e\u6e90\u793a\u4f8b\uff0c\u901a\u8fc7\u914d\u7f6e\u53ef\u4ee5\u6307\u5b9a\u6570\u636e\u6e90\u5199\u5165\u6307\u5b9a\u63a5\u6536\u5668")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake1"\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n        age = "int"\n        sex = "string"\n      }\n    }\n  }\n   FakeSource {\n    result_table_name = "fake2"\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n  Console {\n    source_table_name = "fake2"\n  }\n}\n')),(0,l.yg)("h2",{id:"\u63a7\u5236\u53f0\u793a\u4f8b\u6570\u636e"},"\u63a7\u5236\u53f0\u793a\u4f8b\u6570\u636e"),(0,l.yg)("p",null,"\u63a7\u5236\u53f0\u6253\u5370\u7684\u8f93\u51fa:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"2022-12-19 11:01:45,417 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - output rowType: name<STRING>, age<INT>\n2022-12-19 11:01:46,489 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=1: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: CpiOd, 8520946\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=2: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: eQqTs, 1256802974\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=3: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: UsRgO, 2053193072\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=4: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jDQJj, 1993016602\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=5: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: rqdKp, 1392682764\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=6: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: wCoWN, 986999925\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=7: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: qomTU, 72775247\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=8: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jcqXR, 1074529204\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=9: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: AkWIO, 1961723427\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=10: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: hBoib, 929089763\n")))}d.isMDXComponent=!0}}]);