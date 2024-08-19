"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[75174],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>s});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,s=u["".concat(p,".").concat(g)]||u[g]||y[g]||l;return t?r.createElement(s,i(i({ref:n},d),{},{components:t})):r.createElement(s,i({ref:n},d))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},31589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const l={},i="JobEnvConfig",o={unversionedId:"concept/JobEnvConfig",id:"version-2.3.6/concept/JobEnvConfig",title:"JobEnvConfig",description:"\u672c\u6587\u6863\u63cf\u8ff0\u4e86env\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u516c\u5171\u53c2\u6570\u53ef\u4ee5\u5728\u6240\u6709\u5f15\u64ce\u4e2d\u4f7f\u7528\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u533a\u5206\u5f15\u64ce\u53c2\u6570\uff0c\u5176\u4ed6\u5f15\u64ce\u7684\u9644\u52a0\u53c2\u6570\u9700\u8981\u643a\u5e26\u524d\u7f00\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/concept/JobEnvConfig.md",sourceDirName:"concept",slug:"/concept/JobEnvConfig",permalink:"/zh-CN/docs/2.3.6/concept/JobEnvConfig",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/concept/JobEnvConfig.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Schema \u7279\u6027\u7b80\u4ecb",permalink:"/zh-CN/docs/2.3.6/concept/schema-feature"},next:{title:"Sink \u53c2\u6570\u5360\u4f4d\u7b26",permalink:"/zh-CN/docs/2.3.6/concept/sink-options-placeholders"}},p={},c=[{value:"\u516c\u5171\u53c2\u6570",id:"\u516c\u5171\u53c2\u6570",level:2},{value:"job.name",id:"jobname",level:3},{value:"jars",id:"jars",level:3},{value:"job.mode",id:"jobmode",level:3},{value:"checkpoint.interval",id:"checkpointinterval",level:3},{value:"parallelism",id:"parallelism",level:3},{value:"job.retry.times",id:"jobretrytimes",level:3},{value:"job.retry.interval.seconds",id:"jobretryintervalseconds",level:3},{value:"savemode.execute.location",id:"savemodeexecutelocation",level:3},{value:"shade.identifier",id:"shadeidentifier",level:3},{value:"Flink \u5f15\u64ce\u53c2\u6570",id:"flink-\u5f15\u64ce\u53c2\u6570",level:2},{value:"Spark \u5f15\u64ce\u53c2\u6570",id:"spark-\u5f15\u64ce\u53c2\u6570",level:2}],d={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"jobenvconfig"},"JobEnvConfig"),(0,a.yg)("p",null,"\u672c\u6587\u6863\u63cf\u8ff0\u4e86env\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u516c\u5171\u53c2\u6570\u53ef\u4ee5\u5728\u6240\u6709\u5f15\u64ce\u4e2d\u4f7f\u7528\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u533a\u5206\u5f15\u64ce\u53c2\u6570\uff0c\u5176\u4ed6\u5f15\u64ce\u7684\u9644\u52a0\u53c2\u6570\u9700\u8981\u643a\u5e26\u524d\u7f00\u3002\n\u5728flink\u5f15\u64ce\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"flink."),"\u4f5c\u4e3a\u524d\u7f00\u3002\u5728spark\u5f15\u64ce\u4e2d\uff0c\u6211\u4eec\u4e0d\u4f7f\u7528\u4efb\u4f55\u524d\u7f00\u6765\u4fee\u6539\u53c2\u6570\uff0c\u56e0\u4e3a\u5b98\u65b9\u7684spark\u53c2\u6570\u672c\u8eab\u5c31\u662f\u4ee5",(0,a.yg)("inlineCode",{parentName:"p"},"spark."),"\u5f00\u5934\u3002"),(0,a.yg)("h2",{id:"\u516c\u5171\u53c2\u6570"},"\u516c\u5171\u53c2\u6570"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u53c2\u6570\u5bf9\u6240\u6709\u5f15\u64ce\u901a\u7528\uff1a"),(0,a.yg)("h3",{id:"jobname"},"job.name"),(0,a.yg)("p",null,"\u8be5\u53c2\u6570\u914d\u7f6e\u4efb\u52a1\u540d\u79f0\u3002"),(0,a.yg)("h3",{id:"jars"},"jars"),(0,a.yg)("p",null,"\u7b2c\u4e09\u65b9\u5305\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"jars"),"\u52a0\u8f7d\uff0c\u4f8b\u5982\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},'jars="file://local/jar1.jar;file://local/jar2.jar"')),(0,a.yg)("h3",{id:"jobmode"},"job.mode"),(0,a.yg)("p",null,"\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"job.mode"),"\u4f60\u53ef\u4ee5\u914d\u7f6e\u4efb\u52a1\u662f\u5728\u6279\u5904\u7406\u6a21\u5f0f\u8fd8\u662f\u6d41\u5904\u7406\u6a21\u5f0f\u3002\u4f8b\u5982\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},'job.mode = "BATCH"')," \u6216\u8005 ",(0,a.yg)("inlineCode",{parentName:"p"},'job.mode = "STREAMING"')),(0,a.yg)("h3",{id:"checkpointinterval"},"checkpoint.interval"),(0,a.yg)("p",null,"\u83b7\u53d6\u5b9a\u65f6\u8c03\u5ea6\u68c0\u67e5\u70b9\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,a.yg)("p",null,"\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"STREAMING"),"\u6a21\u5f0f\u4e0b\uff0c\u68c0\u67e5\u70b9\u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5c06\u4ece\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u6587\u4ef6",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml"),"\u4e2d\u83b7\u53d6\u3002 \u5728",(0,a.yg)("inlineCode",{parentName:"p"},"BATCH"),"\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0d\u8bbe\u7f6e\u6b64\u53c2\u6570\u6765\u7981\u7528\u68c0\u67e5\u70b9\u3002"),(0,a.yg)("h3",{id:"parallelism"},"parallelism"),(0,a.yg)("p",null,"\u8be5\u53c2\u6570\u914d\u7f6esource\u548csink\u7684\u5e76\u884c\u5ea6\u3002"),(0,a.yg)("h3",{id:"jobretrytimes"},"job.retry.times"),(0,a.yg)("p",null,"\u7528\u4e8e\u63a7\u5236\u4f5c\u4e1a\u5931\u8d25\u65f6\u7684\u9ed8\u8ba4\u91cd\u8bd5\u6b21\u6570\u3002\u9ed8\u8ba4\u503c\u4e3a3\uff0c\u5e76\u4e14\u4ec5\u9002\u7528\u4e8eZeta\u5f15\u64ce\u3002"),(0,a.yg)("h3",{id:"jobretryintervalseconds"},"job.retry.interval.seconds"),(0,a.yg)("p",null,"\u7528\u4e8e\u63a7\u5236\u4f5c\u4e1a\u5931\u8d25\u65f6\u7684\u9ed8\u8ba4\u91cd\u8bd5\u95f4\u9694\u3002\u9ed8\u8ba4\u503c\u4e3a3\u79d2\uff0c\u5e76\u4e14\u4ec5\u9002\u7528\u4e8eZeta\u5f15\u64ce\u3002"),(0,a.yg)("h3",{id:"savemodeexecutelocation"},"savemode.execute.location"),(0,a.yg)("p",null,"\u6b64\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u5728Zeta\u5f15\u64ce\u4e2d\u6267\u884c\u4f5c\u4e1a\u65f6SaveMode\u6267\u884c\u7684\u65f6\u673a\u3002\n\u9ed8\u8ba4\u503c\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"CLUSTER"),"\uff0c\u8fd9\u610f\u5473\u7740SaveMode\u5728\u4f5c\u4e1a\u63d0\u4ea4\u5230\u96c6\u7fa4\u4e0a\u4e4b\u540e\u5728\u96c6\u7fa4\u4e0a\u6267\u884c\u3002\n\u5f53\u503c\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"CLIENT"),"\u65f6\uff0cSaveMode\u64cd\u4f5c\u5728\u4f5c\u4e1a\u63d0\u4ea4\u7684\u8fc7\u7a0b\u4e2d\u6267\u884c\uff0c\u4f7f\u7528shell\u811a\u672c\u63d0\u4ea4\u4f5c\u4e1a\u65f6\uff0c\u8be5\u8fc7\u7a0b\u5728\u63d0\u4ea4\u4f5c\u4e1a\u7684shell\u8fdb\u7a0b\u4e2d\u6267\u884c\u3002\u4f7f\u7528rest api\u63d0\u4ea4\u4f5c\u4e1a\u65f6\uff0c\u8be5\u8fc7\u7a0b\u5728http\u8bf7\u6c42\u7684\u5904\u7406\u7ebf\u7a0b\u4e2d\u6267\u884c\u3002\n\u8bf7\u5c3d\u91cf\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"CLUSTER"),"\u6a21\u5f0f\uff0c\u56e0\u4e3a\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"CLUSTER"),"\u6a21\u5f0f\u6ca1\u6709\u95ee\u9898\u65f6\uff0c\u6211\u4eec\u5c06\u5220\u9664",(0,a.yg)("inlineCode",{parentName:"p"},"CLIENT"),"\u6a21\u5f0f\u3002"),(0,a.yg)("h3",{id:"shadeidentifier"},"shade.identifier"),(0,a.yg)("p",null,"\u6307\u5b9a\u52a0\u5bc6\u65b9\u5f0f\uff0c\u5982\u679c\u60a8\u6ca1\u6709\u52a0\u5bc6\u6216\u89e3\u5bc6\u914d\u7f6e\u6587\u4ef6\u7684\u9700\u6c42\uff0c\u6b64\u9009\u9879\u53ef\u4ee5\u5ffd\u7565\u3002"),(0,a.yg)("p",null,"\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u6587\u6863 ",(0,a.yg)("a",{parentName:"p",href:"../../en/connector-v2/Config-Encryption-Decryption.md"},"Config Encryption Decryption")),(0,a.yg)("h2",{id:"flink-\u5f15\u64ce\u53c2\u6570"},"Flink \u5f15\u64ce\u53c2\u6570"),(0,a.yg)("p",null,"\u8fd9\u91cc\u5217\u51fa\u4e86\u4e00\u4e9b\u4e0e Flink \u4e2d\u540d\u79f0\u76f8\u5bf9\u5e94\u7684 SeaTunnel \u53c2\u6570\u540d\u79f0\uff0c\u5e76\u975e\u5168\u90e8\uff0c\u66f4\u591a\u5185\u5bb9\u8bf7\u53c2\u8003\u5b98\u65b9 ",(0,a.yg)("a",{parentName:"p",href:"https://flink.apache.org/"},"Flink Documentation")," for more."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Flink \u914d\u7f6e\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u914d\u7f6e\u540d\u79f0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pipeline.max-parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},"flink.pipeline.max-parallelism")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"execution.checkpointing.mode"),(0,a.yg)("td",{parentName:"tr",align:null},"flink.execution.checkpointing.mode")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"execution.checkpointing.timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"flink.execution.checkpointing.timeout")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"..."),(0,a.yg)("td",{parentName:"tr",align:null},"...")))),(0,a.yg)("h2",{id:"spark-\u5f15\u64ce\u53c2\u6570"},"Spark \u5f15\u64ce\u53c2\u6570"),(0,a.yg)("p",null,"\u7531\u4e8eSpark\u914d\u7f6e\u9879\u5e76\u65e0\u8c03\u6574\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5217\u51fa\u6765\u4e86\uff0c\u8bf7\u53c2\u8003\u5b98\u65b9 ",(0,a.yg)("a",{parentName:"p",href:"https://spark.apache.org/"},"Spark Documentation"),"."))}y.isMDXComponent=!0}}]);