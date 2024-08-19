"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25037],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return t?n.createElement(d,i(i({ref:a},g),{},{components:t})):n.createElement(d,i({ref:a},g))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8947:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const l={},i="Kafka",o={unversionedId:"connector-v2/sink/Kafka",id:"version-2.3.1/connector-v2/sink/Kafka",title:"Kafka",description:"Kafka sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/Kafka.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Kafka",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Kafka",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/Kafka.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"JDBC",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Jdbc"},next:{title:"Kudu",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Kudu"}},s={},p=[{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topic string",id:"topic-string",level:3},{value:"bootstrap.servers string",id:"bootstrapservers-string",level:3},{value:"kafka.config kafka producer config",id:"kafkaconfig-kafka-producer-config",level:3},{value:"semantics string",id:"semantics-string",level:3},{value:"partition_key_fields array",id:"partition_key_fields-array",level:3},{value:"partition int",id:"partition-int",level:3},{value:"assign_partitions array",id:"assign_partitions-array",level:3},{value:"transaction_prefix string",id:"transaction_prefix-string",level:3},{value:"format",id:"format",level:3},{value:"field_delimiter",id:"field_delimiter",level:3},{value:"common options config",id:"common-options-config",level:3},{value:"Examples",id:"examples",level:2},{value:"AWS MSK SASL/SCRAM",id:"aws-msk-saslscram",level:3},{value:"AWS MSK IAM",id:"aws-msk-iam",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],g={toc:p},m="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka"},"Kafka"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Kafka sink connector"),(0,r.yg)("h2",{parentName:"blockquote",id:"description"},"Description")),(0,r.yg)("p",null,"Write Rows to a Kafka topic."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("p",null,"By default, we will use 2pc to guarantee the message is sent to kafka exactly once."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kafka.config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"semantics"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"NON")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_key_fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"assign_partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},",")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"topic-string"},"topic ","[string]"),(0,r.yg)("p",null,"Kafka Topic."),(0,r.yg)("p",null,"Currently two formats are supported:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fill in the name of the topic.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use value of a field from upstream data as topic,the format is ",(0,r.yg)("inlineCode",{parentName:"p"},"${your field name}"),", where topic is the value of one of the columns of the upstream data."),(0,r.yg)("p",{parentName:"li"},"For example, Upstream data is the following:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"data"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jack"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mary"),(0,r.yg)("td",{parentName:"tr",align:null},"23"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,r.yg)("p",{parentName:"li"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"${name}")," is set as the topic. So the first row is sent to Jack topic, and the second row is sent to Mary topic."))),(0,r.yg)("h3",{id:"bootstrapservers-string"},"bootstrap.servers ","[string]"),(0,r.yg)("p",null,"Kafka Brokers List."),(0,r.yg)("h3",{id:"kafkaconfig-kafka-producer-config"},"kafka.config ","[kafka producer config]"),(0,r.yg)("p",null,"In addition to the above parameters that must be specified by the ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka producer")," client, the user can also specify multiple non-mandatory parameters for the ",(0,r.yg)("inlineCode",{parentName:"p"},"producer")," client, covering ",(0,r.yg)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#producerconfigs"},"all the producer parameters specified in the official Kafka document"),"."),(0,r.yg)("h3",{id:"semantics-string"},"semantics ","[string]"),(0,r.yg)("p",null,"Semantics that can be chosen EXACTLY_ONCE/AT_LEAST_ONCE/NON, default NON."),(0,r.yg)("p",null,"In EXACTLY_ONCE, producer will write all messages in a Kafka transaction that will be committed to Kafka on a checkpoint."),(0,r.yg)("p",null,"In AT_LEAST_ONCE, producer will wait for all outstanding messages in the Kafka buffers to be acknowledged by the Kafka producer on a checkpoint."),(0,r.yg)("p",null,"NON does not provide any guarantees: messages may be lost in case of issues on the Kafka broker and messages may be duplicated."),(0,r.yg)("h3",{id:"partition_key_fields-array"},"partition_key_fields ","[array]"),(0,r.yg)("p",null,"Configure which fields are used as the key of the kafka message."),(0,r.yg)("p",null,"For example, if you want to use value of fields from upstream data as key, you can assign field names to this property."),(0,r.yg)("p",null,"Upstream data is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"data"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jack"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mary"),(0,r.yg)("td",{parentName:"tr",align:null},"23"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,r.yg)("p",null,"If name is set as the key, then the hash value of the name column will determine which partition the message is sent to."),(0,r.yg)("p",null,"If not set partition key fields, the null message key will be sent to."),(0,r.yg)("p",null,'The format of the message key is json, If name is set as the key, for example \'{"name":"Jack"}\'.'),(0,r.yg)("p",null,"The selected field must be an existing field in the upstream."),(0,r.yg)("h3",{id:"partition-int"},"partition ","[int]"),(0,r.yg)("p",null,"We can specify the partition, all messages will be sent to this partition."),(0,r.yg)("h3",{id:"assign_partitions-array"},"assign_partitions ","[array]"),(0,r.yg)("p",null,"We can decide which partition to send based on the content of the message. The function of this parameter is to distribute information."),(0,r.yg)("p",null,"For example, there are five partitions in total, and the assign_partitions field in config is as follows:\nassign_partitions = ",'["shoe", "clothing"]'),(0,r.yg)("p",null,'Then the message containing "shoe" will be sent to partition zero ,because "shoe" is subscribed as zero in assign_partitions, and the message containing "clothing" will be sent to partition one.For other messages, the hash algorithm will be used to divide them into the remaining partitions.'),(0,r.yg)("p",null,"This function by ",(0,r.yg)("inlineCode",{parentName:"p"},"MessageContentPartitioner")," class implements ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.kafka.clients.producer.Partitioner")," interface.If we need custom partitions, we need to implement this interface as well."),(0,r.yg)("h3",{id:"transaction_prefix-string"},"transaction_prefix ","[string]"),(0,r.yg)("p",null,"If semantic is specified as EXACTLY_ONCE, the producer will write all messages in a Kafka transaction.\nKafka distinguishes different transactions by different transactionId. This parameter is prefix of  kafka  transactionId, make sure different job use different prefix."),(0,r.yg)("h3",{id:"format"},"format"),(0,r.yg)("p",null,'Data format. The default format is json. Optional text format. The default field separator is ",".\nIf you customize the delimiter, add the "field_delimiter" option.'),(0,r.yg)("h3",{id:"field_delimiter"},"field_delimiter"),(0,r.yg)("p",null,"Customize the field delimiter for data format."),(0,r.yg)("h3",{id:"common-options-config"},"common options ","[config]"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      partition = 3\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.config = {\n        acks = "all"\n        request.timeout.ms = 60000\n        buffer.memory = 33554432\n      }\n  }\n  \n}\n')),(0,r.yg)("h3",{id:"aws-msk-saslscram"},"AWS MSK SASL/SCRAM"),(0,r.yg)("p",null,"Replace the following ",(0,r.yg)("inlineCode",{parentName:"p"},"${username}")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"${password}")," with the configuration values in AWS MSK."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      partition = 3\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.config = {\n         security.protocol=SASL_SSL\n         sasl.mechanism=SCRAM-SHA-512\n         sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required \\nusername=${username}\\npassword=${password};"\n      }\n  }\n  \n}\n')),(0,r.yg)("h3",{id:"aws-msk-iam"},"AWS MSK IAM"),(0,r.yg)("p",null,"Download ",(0,r.yg)("inlineCode",{parentName:"p"},"aws-msk-iam-auth-1.1.5.jar")," from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aws/aws-msk-iam-auth/releases"},"https://github.com/aws/aws-msk-iam-auth/releases")," and put it in ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/plugin/kafka/lib")," dir."),(0,r.yg)("p",null,"Please ensure the IAM policy have ",(0,r.yg)("inlineCode",{parentName:"p"},'"kafka-cluster:Connect",'),". Like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'"Effect": "Allow",\n"Action": [\n    "kafka-cluster:Connect",\n    "kafka-cluster:AlterCluster",\n    "kafka-cluster:DescribeCluster"\n],\n')),(0,r.yg)("p",null,"Sink Config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      partition = 3\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.config = {\n         security.protocol=SASL_SSL\n         sasl.mechanism=AWS_MSK_IAM\n         sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n         sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n      }\n  }\n  \n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Kafka Sink Connector")),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Support to specify multiple partition keys ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3230"},"3230")),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Add text format for kafka sink connector ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3711"},"3711")),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Support extract topic from SeaTunnelRow fields ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3742"},"3742")),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Change Connector Custom Config Prefix To Map ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3719"},"3719"))))}u.isMDXComponent=!0}}]);