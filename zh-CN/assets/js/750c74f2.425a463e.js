"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,m=k["".concat(u,".").concat(d)]||k[d]||c[d]||l;return n?a.createElement(m,i(i({ref:t},o),{},{components:n})):a.createElement(m,i({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8505:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return o},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={slug:"spark-execute-tidb",title:"\u600e\u4e48\u7528 Spark \u5728 TiDB \u4e0a\u505a OLAP \u5206\u6790",tags:["Spark","TiDB"]},u="\u600e\u4e48\u7528Spark\u5728TiDB\u4e0a\u505aOLAP\u5206\u6790",s={permalink:"/zh-CN/blog/spark-execute-tidb",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2021-12-30-spark-execute-tidb.md",source:"@site/blog/2021-12-30-spark-execute-tidb.md",title:"\u600e\u4e48\u7528 Spark \u5728 TiDB \u4e0a\u505a OLAP \u5206\u6790",description:"TiDB \u662f\u4e00\u6b3e\u5b9a\u4f4d\u4e8e\u5728\u7ebf\u4e8b\u52a1\u5904\u7406/\u5728\u7ebf\u5206\u6790\u5904\u7406\u7684\u878d\u5408\u578b\u6570\u636e\u5e93\u4ea7\u54c1\uff0c\u5b9e\u73b0\u4e86\u4e00\u952e\u6c34\u5e73\u4f38\u7f29\uff0c\u5f3a\u4e00\u81f4\u6027\u7684\u591a\u526f\u672c\u6570\u636e\u5b89\u5168\uff0c\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u5b9e\u65f6 OLAP \u7b49\u91cd\u8981\u7279\u6027\u3002",date:"2021-12-30T00:00:00.000Z",formattedDate:"2021\u5e7412\u670830\u65e5",tags:[{label:"Spark",permalink:"/zh-CN/blog/tags/spark"},{label:"TiDB",permalink:"/zh-CN/blog/tags/ti-db"}],readingTime:8.58,truncated:!1,authors:[],frontMatter:{slug:"spark-execute-tidb",title:"\u600e\u4e48\u7528 Spark \u5728 TiDB \u4e0a\u505a OLAP \u5206\u6790",tags:["Spark","TiDB"]},prevItem:{title:"\u5982\u4f55\u4f7f\u7528 Spark \u5feb\u901f\u5c06\u6570\u636e\u5199\u5165 Elasticsearch",permalink:"/zh-CN/blog/spark-execute-elasticsearch"},nextItem:{title:"\u5982\u4f55\u652f\u6301\u7684 Spark StructuredStreaming",permalink:"/zh-CN/blog/spark-structured-streaming"}},o={authorsImageUrls:[]},c=[{value:"\u4f7f\u7528 Seatunnel \u64cd\u4f5cTiDB",id:"\u4f7f\u7528-seatunnel-\u64cd\u4f5ctidb",children:[{value:"Seatunnel",id:"seatunnel",children:[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[{value:"1. TiDB \u8868\u7ed3\u6784\u4ecb\u7ecd",id:"1-tidb-\u8868\u7ed3\u6784\u4ecb\u7ecd",children:[],level:5},{value:"2. \u5b89\u88c5 Seatunnel",id:"2-\u5b89\u88c5-seatunnel",children:[],level:5}],level:4}],level:3},{value:"\u5b9e\u73b0 Seatunnel \u5904\u7406\u6d41\u7a0b",id:"\u5b9e\u73b0-seatunnel-\u5904\u7406\u6d41\u7a0b",children:[{value:"Input (TiDB)",id:"input-tidb",children:[],level:5},{value:"Filter",id:"filter",children:[],level:5},{value:"Output (TiDB)",id:"output-tidb",children:[],level:5},{value:"Spark",id:"spark",children:[],level:5},{value:"\u8fd0\u884c Seatunnel",id:"\u8fd0\u884c-seatunnel",children:[],level:4},{value:"\u68c0\u67e5\u7ed3\u679c",id:"\u68c0\u67e5\u7ed3\u679c",children:[],level:4}],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2},{value:"\u8054\u7cfb\u6211\u4eec",id:"\u8054\u7cfb\u6211\u4eec",children:[],level:2}],k={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://download.pingcap.com/images/tidb-planet.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb"},"TiDB")," \u662f\u4e00\u6b3e\u5b9a\u4f4d\u4e8e\u5728\u7ebf\u4e8b\u52a1\u5904\u7406/\u5728\u7ebf\u5206\u6790\u5904\u7406\u7684\u878d\u5408\u578b\u6570\u636e\u5e93\u4ea7\u54c1\uff0c\u5b9e\u73b0\u4e86\u4e00\u952e\u6c34\u5e73\u4f38\u7f29\uff0c\u5f3a\u4e00\u81f4\u6027\u7684\u591a\u526f\u672c\u6570\u636e\u5b89\u5168\uff0c\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u5b9e\u65f6 OLAP \u7b49\u91cd\u8981\u7279\u6027\u3002"),(0,l.kt)("p",null,"TiSpark \u662f PingCAP \u4e3a\u89e3\u51b3\u7528\u6237\u590d\u6742 OLAP \u9700\u6c42\u800c\u63a8\u51fa\u7684\u4ea7\u54c1\u3002\u5b83\u501f\u52a9 Spark \u5e73\u53f0\uff0c\u540c\u65f6\u878d\u5408 TiKV \u5206\u5e03\u5f0f\u96c6\u7fa4\u7684\u4f18\u52bf\u3002"),(0,l.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 TiSpark \u5b8c\u6210 OLAP \u64cd\u4f5c\u9700\u8981\u4e86\u89e3 Spark\uff0c\u8fd8\u9700\u8981\u4e00\u4e9b\u5f00\u53d1\u5de5\u4f5c\u3002\u90a3\u4e48\uff0c\u6709\u6ca1\u6709\u4e00\u4e9b\u5f00\u7bb1\u5373\u7528\u7684\u5de5\u5177\u80fd\u5e2e\u6211\u4eec\u66f4\u5feb\u901f\u5730\u4f7f\u7528 TiSpark \u5728 TiDB \u4e0a\u5b8c\u6210 OLAP \u5206\u6790\u5462\uff1f"),(0,l.kt)("p",null,"\u76ee\u524d\u5f00\u6e90\u793e\u533a\u4e0a\u6709\u4e00\u6b3e\u5de5\u5177 ",(0,l.kt)("strong",{parentName:"p"},"Seatunnel"),"\uff0c\u9879\u76ee\u5730\u5740 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel")," \uff0c\u53ef\u4ee5\u57fa\u4e8eSpark\uff0c\u5728 TiSpark \u7684\u57fa\u7840\u4e0a\u5feb\u901f\u5b9e\u73b0 TiDB \u6570\u636e\u8bfb\u53d6\u548c OLAP \u5206\u6790\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-seatunnel-\u64cd\u4f5ctidb"},"\u4f7f\u7528 Seatunnel \u64cd\u4f5cTiDB"),(0,l.kt)("p",null,"\u5728\u6211\u4eec\u7ebf\u4e0a\u6709\u8fd9\u4e48\u4e00\u4e2a\u9700\u6c42\uff0c\u4ece TiDB \u4e2d\u8bfb\u53d6\u67d0\u4e00\u5929\u7684\u7f51\u7ad9\u8bbf\u95ee\u6570\u636e\uff0c\u7edf\u8ba1\u6bcf\u4e2a\u57df\u540d\u4ee5\u53ca\u670d\u52a1\u8fd4\u56de\u72b6\u6001\u7801\u7684\u8bbf\u95ee\u6b21\u6570\uff0c\u6700\u540e\u5c06\u7edf\u8ba1\u7ed3\u679c\u5199\u5165 TiDB \u53e6\u5916\u4e00\u4e2a\u8868\u4e2d\u3002 \u6211\u4eec\u6765\u770b\u770b Seatunnel \u662f\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e48\u4e00\u4e2a\u529f\u80fd\u7684\u3002"),(0,l.kt)("h3",{id:"seatunnel"},"Seatunnel"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," \u662f\u4e00\u4e2a\u975e\u5e38\u6613\u7528\uff0c\u9ad8\u6027\u80fd\uff0c\u80fd\u591f\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u5b9e\u65f6\u6570\u636e\u5904\u7406\u4ea7\u54c1\uff0c\u5b83\u6784\u5efa\u5728 Spark \u4e4b\u4e0a\u3002Seatunnel \u62e5\u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u652f\u6301\u4ece TiDB\u3001Kafka\u3001HDFS\u3001Kudu \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u8fdb\u884c\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u5904\u7406\uff0c\u7136\u540e\u5c06\u7ed3\u679c\u5199\u5165 TiDB\u3001ClickHouse\u3001Elasticsearch \u6216\u8005 Kafka \u4e2d\u3002"),(0,l.kt)("h4",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("h5",{id:"1-tidb-\u8868\u7ed3\u6784\u4ecb\u7ecd"},"1. TiDB \u8868\u7ed3\u6784\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Input"),"\uff08\u5b58\u50a8\u8bbf\u95ee\u65e5\u5fd7\u7684\u8868\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE access_log (\n    domain VARCHAR(255),\n    datetime VARCHAR(63),\n    remote_addr VARCHAR(63),\n    http_ver VARCHAR(15),\n    body_bytes_send INT,\n    status INT,\n    request_time FLOAT,\n    url TEXT\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+-----------------+--------------+------+------+---------+-------+\n| Field           | Type         | Null | Key  | Default | Extra |\n+-----------------+--------------+------+------+---------+-------+\n| domain          | varchar(255) | YES  |      | NULL    |       |\n| datetime        | varchar(63)  | YES  |      | NULL    |       |\n| remote_addr     | varchar(63)  | YES  |      | NULL    |       |\n| http_ver        | varchar(15)  | YES  |      | NULL    |       |\n| body_bytes_send | int(11)      | YES  |      | NULL    |       |\n| status          | int(11)      | YES  |      | NULL    |       |\n| request_time    | float        | YES  |      | NULL    |       |\n| url             | text         | YES  |      | NULL    |       |\n+-----------------+--------------+------+------+---------+-------+\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output"),"\uff08\u5b58\u50a8\u7ed3\u679c\u6570\u636e\u7684\u8868\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE access_collect (\n    date VARCHAR(23),\n    domain VARCHAR(63),\n    status INT,\n    hit INT\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+--------+-------------+------+------+---------+-------+\n| Field  | Type        | Null | Key  | Default | Extra |\n+--------+-------------+------+------+---------+-------+\n| date   | varchar(23) | YES  |      | NULL    |       |\n| domain | varchar(63) | YES  |      | NULL    |       |\n| status | int(11)     | YES  |      | NULL    |       |\n| hit    | int(11)     | YES  |      | NULL    |       |\n+--------+-------------+------+------+---------+-------+\n")),(0,l.kt)("h5",{id:"2-\u5b89\u88c5-seatunnel"},"2. \u5b89\u88c5 Seatunnel"),(0,l.kt)("p",null,"\u6709\u4e86 TiDB \u8f93\u5165\u548c\u8f93\u51fa\u8868\u4e4b\u540e\uff0c \u6211\u4eec\u9700\u8981\u5b89\u88c5 Seatunnel\uff0c\u5b89\u88c5\u5341\u5206\u7b80\u5355\uff0c\u65e0\u9700\u914d\u7f6e\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u51c6\u5907 Spark\u73af\u5883"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Seatunnel"),(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e Seatunnel")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u7b80\u6613\u6b65\u9aa4\uff0c\u5177\u4f53\u5b89\u88c5\u53ef\u4ee5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u4e0b\u8f7d\u5b89\u88c5Spark\ncd /usr/local\nwget https://archive.apache.org/dist/spark/spark-2.1.0/spark-2.1.0-bin-hadoop2.7.tgz\ntar -xvf https://archive.apache.org/dist/spark/spark-2.1.0/spark-2.1.0-bin-hadoop2.7.tgz\nwget\n# \u4e0b\u8f7d\u5b89\u88c5seatunnel\nhttps://github.com/InterestingLab/seatunnel/releases/download/v1.2.0/seatunnel-1.2.0.zip\nunzip seatunnel-1.2.0.zip\ncd seatunnel-1.2.0\n\nvim config/seatunnel-env.sh\n# \u6307\u5b9aSpark\u5b89\u88c5\u8def\u5f84\nSPARK_HOME=${SPARK_HOME:-/usr/local/spark-2.1.0-bin-hadoop2.7}\n")),(0,l.kt)("h3",{id:"\u5b9e\u73b0-seatunnel-\u5904\u7406\u6d41\u7a0b"},"\u5b9e\u73b0 Seatunnel \u5904\u7406\u6d41\u7a0b"),(0,l.kt)("p",null,"\u6211\u4eec\u4ec5\u9700\u8981\u7f16\u5199\u4e00\u4e2a Seatunnel \u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u5b8c\u6210\u6570\u636e\u7684\u8bfb\u53d6\u3001\u5904\u7406\u3001\u5199\u5165\u3002"),(0,l.kt)("p",null,"Seatunnel \u914d\u7f6e\u6587\u4ef6\u7531\u56db\u4e2a\u90e8\u5206\u7ec4\u6210\uff0c\u5206\u522b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Spark"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Input"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," \u90e8\u5206\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u7684\u8f93\u5165\u6e90\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," \u90e8\u5206\u7528\u4e8e\u5b9a\u4e49\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u5904\u7406\u3001\u805a\u5408\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u90e8\u5206\u8d1f\u8d23\u5c06\u5904\u7406\u4e4b\u540e\u7684\u6570\u636e\u5199\u5165\u6307\u5b9a\u7684\u6570\u636e\u5e93\u6216\u8005\u6d88\u606f\u961f\u5217\u3002"),(0,l.kt)("p",null,"\u6574\u4e2a\u5904\u7406\u6d41\u7a0b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),"\uff0c\u6574\u4e2a\u6d41\u7a0b\u7ec4\u6210\u4e86 Seatunnel \u7684 \u5904\u7406\u6d41\u7a0b\uff08Pipeline\uff09\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5177\u4f53\u914d\u7f6e\uff0c\u6b64\u914d\u7f6e\u6765\u6e90\u4e8e\u7ebf\u4e0a\u5b9e\u9645\u5e94\u7528\uff0c\u4f46\u662f\u4e3a\u4e86\u6f14\u793a\u6709\u6240\u7b80\u5316\u3002")),(0,l.kt)("h5",{id:"input-tidb"},"Input (TiDB)"),(0,l.kt)("p",null,"\u8fd9\u91cc\u90e8\u5206\u914d\u7f6e\u5b9a\u4e49\u8f93\u5165\u6e90\uff0c\u5982\u4e0b\u662f\u4ece TiDB \u4e00\u5f20\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'input {\n    tidb {\n        database = "nginx"\n        pre_sql = "select * from nginx.access_log"\n        table_name = "spark_nginx_input"\n    }\n}\n')),(0,l.kt)("h5",{id:"filter"},"Filter"),(0,l.kt)("p",null,"\u5728Filter\u90e8\u5206\uff0c\u8fd9\u91cc\u6211\u4eec\u914d\u7f6e\u4e00\u7cfb\u5217\u7684\u8f6c\u5316, \u5927\u90e8\u5206\u6570\u636e\u5206\u6790\u7684\u9700\u6c42\uff0c\u90fd\u662f\u5728Filter\u5b8c\u6210\u7684\u3002Seatunnel \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u8db3\u4ee5\u6ee1\u8db3\u5404\u79cd\u6570\u636e\u5206\u6790\u9700\u6c42\u3002\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7 SQL \u63d2\u4ef6\u5b8c\u6210\u6570\u636e\u7684\u805a\u5408\u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'filter {\n    sql {\n        table_name = "spark_nginx_log"\n        sql = "select count(*) as hit, domain, status, substring(datetime, 1, 10) as date from spark_nginx_log where substring(datetime, 1, 10)=\'2019-01-20\' group by domain, status, substring(datetime, 1, 10)"\n    }\n}\n')),(0,l.kt)("h5",{id:"output-tidb"},"Output (TiDB)"),(0,l.kt)("p",null,"\u6700\u540e\uff0c \u6211\u4eec\u5c06\u5904\u7406\u540e\u7684\u7ed3\u679c\u5199\u5165TiDB\u53e6\u5916\u4e00\u5f20\u8868\u4e2d\u3002TiDB Output\u662f\u901a\u8fc7JDBC\u5b9e\u73b0\u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'output {\n    tidb {\n        url = "jdbc:mysql://127.0.0.1:4000/nginx?useUnicode=true&characterEncoding=utf8"\n        table = "access_collect"\n        user = "username"\n        password = "password"\n        save_mode = "append"\n    }\n}\n')),(0,l.kt)("h5",{id:"spark"},"Spark"),(0,l.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u662f Spark \u7684\u76f8\u5173\u914d\u7f6e\uff0c\u4e3b\u8981\u914d\u7f6e Spark \u6267\u884c\u65f6\u6240\u9700\u7684\u8d44\u6e90\u5927\u5c0f\u4ee5\u53ca\u5176\u4ed6 Spark \u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u7684 TiDB Input \u63d2\u4ef6\u662f\u57fa\u4e8e TiSpark \u5b9e\u73b0\u7684\uff0c\u800c TiSpark \u4f9d\u8d56\u4e8e TiKV \u96c6\u7fa4\u548c Placement Driver (PD)\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u6307\u5b9a PD \u8282\u70b9\u4fe1\u606f\u4ee5\u53ca TiSpark \u76f8\u5173\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"spark.tispark.pd.addresses"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"spark.sql.extensions"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel-tidb"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  # Set for TiSpark\n  spark.tispark.pd.addresses = "localhost:2379"\n  spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\n')),(0,l.kt)("h4",{id:"\u8fd0\u884c-seatunnel"},"\u8fd0\u884c Seatunnel"),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u4e0a\u8ff0\u56db\u90e8\u5206\u914d\u7f6e\u7ec4\u5408\u6210\u6211\u4eec\u6700\u7ec8\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/tidb.conf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'spark {\n    spark.app.name = "seatunnel-tidb"\n    spark.executor.instances = 2\n    spark.executor.cores = 1\n    spark.executor.memory = "1g"\n    # Set for TiSpark\n    spark.tispark.pd.addresses = "localhost:2379"\n    spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\ninput {\n    tidb {\n        database = "nginx"\n        pre_sql = "select * from nginx.access_log"\n        table_name = "spark_table"\n    }\n}\nfilter {\n    sql {\n        table_name = "spark_nginx_log"\n        sql = "select count(*) as hit, domain, status, substring(datetime, 1, 10) as date from spark_nginx_log where substring(datetime, 1, 10)=\'2019-01-20\' group by domain, status, substring(datetime, 1, 10)"\n    }\n}\noutput {\n    tidb {\n        url = "jdbc:mysql://127.0.0.1:4000/nginx?useUnicode=true&characterEncoding=utf8"\n        table = "access_collect"\n        user = "username"\n        password = "password"\n        save_mode = "append"\n    }\n}\n')),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd0\u884c Seatunnel \uff0c\u5373\u53ef\u5b9e\u73b0\u6211\u4eec\u7684\u6570\u636e\u5904\u7406\u903b\u8f91\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Local")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"./bin/start-seatunnel.sh --config config/tidb.conf --deploy-mode client --master 'local","[2]","'")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"yarn-client")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"./bin/start-seatunnel.sh --config config/tidb.conf --deploy-mode client --master yarn")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"yarn-cluster")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"./bin/start-seatunnel.sh --config config/tidb.conf --deploy-mode cluster -master yarn")),(0,l.kt)("p",null,"\u5982\u679c\u662f\u672c\u673a\u6d4b\u8bd5\u9a8c\u8bc1\u903b\u8f91\uff0c\u7528\u672c\u5730\u6a21\u5f0f\uff08Local\uff09\u5c31\u53ef\u4ee5\u4e86\uff0c\u4e00\u822c\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u90fd\u662f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"yarn-client"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"yarn-cluster"),"\u6a21\u5f0f\u3002"),(0,l.kt)("h4",{id:"\u68c0\u67e5\u7ed3\u679c"},"\u68c0\u67e5\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select * from access_collect;\n+------------+--------+--------+------+\n| date       | domain | status | hit  |\n+------------+--------+--------+------+\n| 2019-01-20 | b.com  |    200 |   63 |\n| 2019-01-20 | a.com  |    200 |   85 |\n+------------+--------+--------+------+\n2 rows in set (0.21 sec)\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Seatunnel \u4ece TiDB \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u505a\u7b80\u5355\u7684\u6570\u636e\u5904\u7406\u4e4b\u540e\u5199\u5165 TiDB \u53e6\u5916\u4e00\u4e2a\u8868\u4e2d\u3002\u4ec5\u901a\u8fc7\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4fbf\u53ef\u5feb\u901f\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165\uff0c\u65e0\u9700\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u652f\u6301 TiDB \u6570\u636e\u6e90\u4e4b\u5916\uff0cSeatunnel \u540c\u6837\u652f\u6301Elasticsearch, Kafka, Kudu, ClickHouse\u7b49\u6570\u636e\u6e90\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e8e\u6b64\u540c\u65f6\uff0c\u6211\u4eec\u6b63\u5728\u7814\u53d1\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\uff0c\u5c31\u662f\u5728 Seatunnel \u4e2d\uff0c\u5229\u7528 TiDB \u7684\u4e8b\u52a1\u7279\u6027\uff0c\u5b9e\u73b0\u4ece Kafka \u5230 TiDB \u6d41\u5f0f\u6570\u636e\u5904\u7406\uff0c\u5e76\u4e14\u652f\u6301\u7aef\uff08Kafka\uff09\u5230\u7aef\uff08TiDB\uff09\u7684 Exactly-Once \u6570\u636e\u4e00\u81f4\u6027\u3002")),(0,l.kt)("p",null,"\u5e0c\u671b\u4e86\u89e3 Seatunnel \u548c TiDB\uff0cClickHouse\u3001Elasticsearch\u3001Kafka\u7ed3\u5408\u4f7f\u7528\u7684\u66f4\u591a\u529f\u80fd\u548c\u6848\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165\u5b98\u7f51 ",(0,l.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,l.kt)("h2",{id:"\u8054\u7cfb\u6211\u4eec"},"\u8054\u7cfb\u6211\u4eec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u90ae\u4ef6\u5217\u8868 : ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". \u53d1\u9001\u4efb\u610f\u5185\u5bb9\u81f3 ",(0,l.kt)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org"),"\uff0c \u6309\u7167\u56de\u590d\u8ba2\u9605\u90ae\u4ef6\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"Slack: \u53d1\u9001 ",(0,l.kt)("inlineCode",{parentName:"li"},"Request to join SeaTunnel slack")," \u90ae\u4ef6\u5230\u90ae\u4ef6\u5217\u8868 (",(0,l.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org"),"), \u6211\u4eec\u4f1a\u9080\u8bf7\u4f60\u52a0\u5165\uff08\u5728\u6b64\u4e4b\u524d\u8bf7\u786e\u8ba4\u5df2\u7ecf\u6ce8\u518cSlack\uff09."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://space.bilibili.com/1542095008"},"bilibili B\u7ad9 \u89c6\u9891"))),(0,l.kt)("p",null,"-- Power by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab"},"InterestingLab")))}d.isMDXComponent=!0}}]);