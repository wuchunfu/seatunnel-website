"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38972],{15680:(n,e,a)=>{a.d(e,{xA:()=>d,yg:()=>y});var t=a(96540);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var p=t.createContext({}),g=function(n){var e=t.useContext(p),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},d=function(n){var e=g(n.components);return t.createElement(p.Provider,{value:e},n.children)},m="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,l=n.originalType,p=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),m=g(a),u=r,y=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return a?t.createElement(y,o(o({ref:e},d),{},{components:a})):t.createElement(y,o({ref:e},d))}));function y(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i[m]="string"==typeof n?n:r,o[1]=i;for(var g=2;g<l;g++)o[g]=a[g];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51605:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var t=a(58168),r=(a(96540),a(15680));const l={},o="Paimon",i={unversionedId:"connector-v2/sink/Paimon",id:"version-2.3.6/connector-v2/sink/Paimon",title:"Paimon",description:"Paimon \u6570\u636e\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/sink/Paimon.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Paimon",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Paimon",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/sink/Paimon.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"OssJindoFile",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/OssJindoFile"},next:{title:"Phoenix",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Phoenix"}},p={},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6570\u636e\u6e90\u4f9d\u8d56",id:"\u6570\u636e\u6e90\u4f9d\u8d56",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u8fde\u63a5\u5668\u9009\u9879",id:"\u8fde\u63a5\u5668\u9009\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5355\u8868",id:"\u5355\u8868",level:3},{value:"\u5355\u8868(\u6307\u5b9ahadoop HA\u914d\u7f6e\u548ckerberos\u914d\u7f6e)",id:"\u5355\u8868\u6307\u5b9ahadoop-ha\u914d\u7f6e\u548ckerberos\u914d\u7f6e",level:3},{value:"\u5355\u8868(\u4f7f\u7528Hive catalog)",id:"\u5355\u8868\u4f7f\u7528hive-catalog",level:3},{value:"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868",id:"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868",level:3},{value:"\u591a\u8868",id:"\u591a\u8868",level:3}],d={toc:g},m="wrapper";function s(n){let{components:e,...a}=n;return(0,r.yg)(m,(0,t.A)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"paimon"},"Paimon"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Paimon \u6570\u636e\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Apache Paimon\u6570\u636e\u8fde\u63a5\u5668\u3002\u652f\u6301cdc\u5199\u4ee5\u53ca\u81ea\u52a8\u5efa\u8868\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,r.yg)("th",{parentName:"tr",align:null},"\u4f9d\u8d56"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,r.yg)("td",{parentName:"tr",align:null},"hive-exec"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.hive/hive-exec"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,r.yg)("td",{parentName:"tr",align:null},"libfb303"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.thrift/libfb303"},"Download"))))),(0,r.yg)("h2",{id:"\u6570\u636e\u6e90\u4f9d\u8d56"},"\u6570\u636e\u6e90\u4f9d\u8d56"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u517c\u5bb9\u4e0d\u540c\u7248\u672c\u7684Hadoop\u548cHive\uff0c\u5728\u9879\u76eepom\u6587\u4ef6\u4e2dHive -exec\u7684\u4f5c\u7528\u57df\u4e3aprovided\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u4f7f\u7528Flink\u5f15\u64ce\uff0c\u9996\u5148\u53ef\u80fd\u9700\u8981\u5c06\u4ee5\u4e0bJar\u5305\u6dfb\u52a0\u5230<FLINK_HOME>/lib\u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u60a8\u4f7f\u7528Spark\u5f15\u64ce\u5e76\u4e0eHadoop\u96c6\u6210\uff0c\u5219\u4e0d\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0bJar\u5305\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hive-exec-xxx.jar\nlibfb303-xxx.jar\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6709\u4e9b\u7248\u672c\u7684hive-exec\u5305\u6ca1\u6709libfb303-xxx.jar\uff0c\u6240\u4ee5\u60a8\u8fd8\u9700\u8981\u624b\u52a8\u5bfc\u5165Jar\u5305\u3002")),(0,r.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("h2",{id:"\u8fde\u63a5\u5668\u9009\u9879"},"\u8fde\u63a5\u5668\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Paimon warehouse\u8def\u5f84"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_type"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"filesystem"),(0,r.yg)("td",{parentName:"tr",align:null},"Paimon\u7684catalog\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301filesystem\u548chive"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_uri"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Paimon catalog\u7684uri\uff0c\u4ec5\u5f53catalog_type\u4e3ahive\u65f6\u9700\u8981\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u540d"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"hdfs-site.xml\u6587\u4ef6\u8def\u5f84"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"\u679a\u4e3e"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,r.yg)("td",{parentName:"tr",align:null},"Schema\u4fdd\u5b58\u6a21\u5f0f"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"\u679a\u4e3e"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u4fdd\u5b58\u6a21\u5f0f"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.table.primary-keys"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e3b\u952e\u5b57\u6bb5\u5217\u8868\uff0c\u8054\u5408\u4e3b\u952e\u4f7f\u7528\u9017\u53f7\u5206\u9694(\u6ce8\u610f\uff1a\u5206\u533a\u5b57\u6bb5\u9700\u8981\u5305\u542b\u5728\u4e3b\u952e\u5b57\u6bb5\u4e2d)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.table.partition-keys"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5206\u533a\u5b57\u6bb5\u5217\u8868\uff0c\u591a\u5b57\u6bb5\u4f7f\u7528\u9017\u53f7\u5206\u9694"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.table.write-props"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Paimon\u8868\u521d\u59cb\u5316\u6307\u5b9a\u7684\u5c5e\u6027, ",(0,r.yg)("a",{parentName:"td",href:"https://paimon.apache.org/docs/0.6/maintenance/configurations/#coreoptions"},"\u53c2\u8003")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u6587\u4ef6\u5c5e\u6027\u4fe1\u606f"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf-path"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u7528\u4e8e\u52a0\u8f7d'core-site.xml', 'hdfs-site.xml', 'hive-site.xml'\u6587\u4ef6\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("h3",{id:"\u5355\u8868"},"\u5355\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n  }\n}\n')),(0,r.yg)("h3",{id:"\u5355\u8868\u6307\u5b9ahadoop-ha\u914d\u7f6e\u548ckerberos\u914d\u7f6e"},"\u5355\u8868(\u6307\u5b9ahadoop HA\u914d\u7f6e\u548ckerberos\u914d\u7f6e)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="hdfs:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n      security.kerberos.login.principal = "your-kerberos-principal"\n      security.kerberos.login.keytab = "your-kerberos-keytab-path"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"\u5355\u8868\u4f7f\u7528hive-catalog"},"\u5355\u8868(\u4f7f\u7528Hive catalog)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n      {\n        kind = UPDATE_BEFORE\n        fields = [1, "A", 100]\n      },\n      {\n        kind = UPDATE_AFTER\n        fields = [1, "A_1", 100]\n      },\n      {\n        kind = DELETE\n        fields = [2, "B", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Paimon {\n    schema_save_mode = "RECREATE_SCHEMA"\n    catalog_name="seatunnel_test"\n    catalog_type="hive"\n    catalog_uri="thrift://hadoop04:9083"\n    warehouse="hdfs:///tmp/seatunnel"\n    database="seatunnel_test"\n    table="st_test3"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n\n')),(0,r.yg)("h3",{id:"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868"},"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.table.write-props = {\n        bucket = 2\n        file.format = "parquet"\n    }\n    paimon.table.partition-keys = "dt"\n    paimon.table.primary-keys = "pk_id,dt"\n  }\n}\n')),(0,r.yg)("h3",{id:"\u591a\u8868"},"\u591a\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="${database_name}"\n    table="${table_name}"\n  }\n}\n')))}s.isMDXComponent=!0}}]);