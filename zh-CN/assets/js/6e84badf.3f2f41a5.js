"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7821],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,c=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(c,r(r({ref:t},g),{},{components:n})):a.createElement(c,r({ref:t},g))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),l=(n(96540),n(15680));const i={},r="Hive",o={unversionedId:"connector-v2/sink/Hive",id:"connector-v2/sink/Hive",title:"Hive",description:"Hive sink connector",source:"@site/docs/connector-v2/sink/Hive.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hive",permalink:"/zh-CN/docs/connector-v2/sink/Hive",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Hive.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hdfs\u6587\u4ef6",permalink:"/zh-CN/docs/connector-v2/sink/HdfsFile"},next:{title:"Http",permalink:"/zh-CN/docs/connector-v2/sink/Http"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"metastore_uri string",id:"metastore_uri-string",level:3},{value:"hdfs_site_path string",id:"hdfs_site_path-string",level:3},{value:"hive_site_path string",id:"hive_site_path-string",level:3},{value:"hive.hadoop.conf map",id:"hivehadoopconf-map",level:3},{value:"hive.hadoop.conf-path string",id:"hivehadoopconf-path-string",level:3},{value:"krb5_path string",id:"krb5_path-string",level:3},{value:"kerberos_principal string",id:"kerberos_principal-string",level:3},{value:"kerberos_keytab_path string",id:"kerberos_keytab_path-string",level:3},{value:"abort_drop_partition_metadata list",id:"abort_drop_partition_metadata-list",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"example 1",id:"example-1",level:3},{value:"Hive on s3",id:"hive-on-s3",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Hive on oss",id:"hive-on-oss",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"Step 4",id:"step-4-1",level:3},{value:"example 2",id:"example-2",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3},{value:"Next version",id:"next-version",level:3}],g={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hive"},"Hive"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hive sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Write data to Hive."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"In order to use this connector, You must ensure your spark/flink cluster already integrated hive. The tested hive version is 2.3.9."),(0,l.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, You need put seatunnel-hadoop3-3.1.4-uber.jar and hive-exec-3.1.3.jar and libfb303-0.9.3.jar in $SEATUNNEL_HOME/lib/ dir.")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support multiple table write")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,l.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,l.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","compress codec",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","lzo")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metastore_uri"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive.hadoop.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive.hadoop.conf-path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"krb5_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"/etc/krb5.conf")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"abort_drop_partition_metadata"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.yg)("p",null,"Target Hive table name eg: db1.table1, and if the source is multiple mode, you can use ",(0,l.yg)("inlineCode",{parentName:"p"},"${database_name}.${table_name}")," to generate the table name, it will replace the ",(0,l.yg)("inlineCode",{parentName:"p"},"${database_name}")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"${table_name}")," with the value of the CatalogTable generate from the source."),(0,l.yg)("h3",{id:"metastore_uri-string"},"metastore_uri ","[string]"),(0,l.yg)("p",null,"Hive metastore uri"),(0,l.yg)("h3",{id:"hdfs_site_path-string"},"hdfs_site_path ","[string]"),(0,l.yg)("p",null,"The path of ",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml"),", used to load ha configuration of namenodes"),(0,l.yg)("h3",{id:"hive_site_path-string"},"hive_site_path ","[string]"),(0,l.yg)("p",null,"The path of ",(0,l.yg)("inlineCode",{parentName:"p"},"hive-site.xml")),(0,l.yg)("h3",{id:"hivehadoopconf-map"},"hive.hadoop.conf ","[map]"),(0,l.yg)("p",null,"Properties in hadoop conf('core-site.xml', 'hdfs-site.xml', 'hive-site.xml')"),(0,l.yg)("h3",{id:"hivehadoopconf-path-string"},"hive.hadoop.conf-path ","[string]"),(0,l.yg)("p",null,"The specified loading path for the 'core-site.xml', 'hdfs-site.xml', 'hive-site.xml' files"),(0,l.yg)("h3",{id:"krb5_path-string"},"krb5_path ","[string]"),(0,l.yg)("p",null,"The path of ",(0,l.yg)("inlineCode",{parentName:"p"},"krb5.conf"),", used to authentication kerberos"),(0,l.yg)("p",null,"The path of ",(0,l.yg)("inlineCode",{parentName:"p"},"hive-site.xml"),", used to authentication hive metastore"),(0,l.yg)("h3",{id:"kerberos_principal-string"},"kerberos_principal ","[string]"),(0,l.yg)("p",null,"The principal of kerberos"),(0,l.yg)("h3",{id:"kerberos_keytab_path-string"},"kerberos_keytab_path ","[string]"),(0,l.yg)("p",null,"The keytab path of kerberos"),(0,l.yg)("h3",{id:"abort_drop_partition_metadata-list"},"abort_drop_partition_metadata ","[list]"),(0,l.yg)("p",null,"Flag to decide whether to drop partition metadata from Hive Metastore during an abort operation. Note: this only affects the metadata in the metastore, the data in the partition will always be deleted(data generated during the synchronization process)."),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"common-options.md"},"Sink Common Options")," for details"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'\n  Hive {\n    table_name = "default.seatunnel_orc"\n    metastore_uri = "thrift://namenode001:9083"\n  }\n\n')),(0,l.yg)("h3",{id:"example-1"},"example 1"),(0,l.yg)("p",null,"We have a source table like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_source(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE,\n     test_array                            ARRAY<INT>,\n     test_map                              MAP<STRING, FLOAT>,\n     test_struct                           STRUCT<street:STRING, city:STRING, state:STRING, zip:INT>\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n\n")),(0,l.yg)("p",null,"We need read data from the source table and write to another table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_sink_text_simple(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n\n")),(0,l.yg)("p",null,"The job config file can like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  parallelism = 3\n  job.name="test_hive_source_to_hive"\n}\n\nsource {\n  Hive {\n    table_name = "test_hive.test_hive_source"\n    metastore_uri = "thrift://ctyun7:9083"\n  }\n}\n\nsink {\n  # choose stdout output plugin to output data to console\n\n  Hive {\n    table_name = "test_hive.test_hive_sink_text_simple"\n    metastore_uri = "thrift://ctyun7:9083"\n    hive.hadoop.conf = {\n      bucket = "s3a://mybucket"\n      fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    }\n}\n')),(0,l.yg)("h2",{id:"hive-on-s3"},"Hive on s3"),(0,l.yg)("h3",{id:"step-1"},"Step 1"),(0,l.yg)("p",null,"Create the lib dir for hive of emr."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"step-2"},"Step 2"),(0,l.yg)("p",null,"Get the jars from maven center to the lib."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ${SEATUNNEL_HOME}/plugins/Hive/lib\nwget https://repo1.maven.org/maven2/org/apache/hadoop/hadoop-aws/2.6.5/hadoop-aws-2.6.5.jar\nwget https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.9/hive-exec-2.3.9.jar\n")),(0,l.yg)("h3",{id:"step-3"},"Step 3"),(0,l.yg)("p",null,"Copy the jars from your environment on emr to the lib dir."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp /usr/share/aws/emr/emrfs/lib/emrfs-hadoop-assembly-2.60.0.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/hadoop-common-3.3.6-amzn-1.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/javax.inject-1.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/aopalliance-1.0.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"step-4"},"Step 4"),(0,l.yg)("p",null,"Run the case."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_s3"\n    metastore_uri = "thrift://ip-192-168-0-202.cn-north-1.compute.internal:9083"\n    hive.hadoop.conf-path = "/home/ec2-user/hadoop-conf"\n    hive.hadoop.conf = {\n       bucket="s3://ws-package"\n       fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"hive-on-oss"},"Hive on oss"),(0,l.yg)("h3",{id:"step-1-1"},"Step 1"),(0,l.yg)("p",null,"Create the lib dir for hive of emr."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"step-2-1"},"Step 2"),(0,l.yg)("p",null,"Get the jars from maven center to the lib."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ${SEATUNNEL_HOME}/plugins/Hive/lib\nwget https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.9/hive-exec-2.3.9.jar\n")),(0,l.yg)("h3",{id:"step-3-1"},"Step 3"),(0,l.yg)("p",null,"Copy the jars from your environment on emr to the lib dir and delete the conflicting jar."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp -r /opt/apps/JINDOSDK/jindosdk-current/lib/jindo-*.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\nrm -f ${SEATUNNEL_HOME}/lib/hadoop-aliyun-*.jar\n")),(0,l.yg)("h3",{id:"step-4-1"},"Step 4"),(0,l.yg)("p",null,"Run the case."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_oss"\n    metastore_uri = "thrift://master-1-1.c-1009b01725b501f2.cn-wulanchabu.emr.aliyuncs.com:9083"\n    hive.hadoop.conf-path = "/tmp/hadoop"\n    hive.hadoop.conf = {\n        bucket="oss://emr-osshdfs.cn-wulanchabu.oss-dls.aliyuncs.com"\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"example-2"},"example 2"),(0,l.yg)("p",null,"We have multiple source table like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_1(\n)\nPARTITIONED BY (xx);\n\ncreate table test_2(\n)\nPARTITIONED BY (xx);\n...\n")),(0,l.yg)("p",null,"We need read data from these source tables and write to another tables:"),(0,l.yg)("p",null,"The job config file can like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  # You can set flink configuration here\n  parallelism = 3\n  job.name="test_hive_source_to_hive"\n}\n\nsource {\n  Hive {\n    tables_configs = [\n      {\n        table_name = "test_hive.test_1"\n        metastore_uri = "thrift://ctyun6:9083"\n      },\n      {\n        table_name = "test_hive.test_2"\n        metastore_uri = "thrift://ctyun7:9083"\n      }\n    ]\n  }\n}\n\nsink {\n  # choose stdout output plugin to output data to console\n  Hive {\n    table_name = "${database_name}.${table_name}"\n    metastore_uri = "thrift://ctyun7:9083"\n  }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Hive Sink Connector")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Hive Sink supports automatic partition repair (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3133"},"3133"),")")),(0,l.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3258"},"3258"),")",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,l.yg)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,l.yg)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed")))),(0,l.yg)("h3",{id:"next-version"},"Next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support kerberos authentication (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3840"},"3840"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Added partition_dir_expression validation logic (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3886"},"3886"),")")))}u.isMDXComponent=!0}}]);