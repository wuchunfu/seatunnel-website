"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[96900],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=p(n),u=r,s=y["".concat(g,".").concat(u)]||y[u]||d[u]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="IoTDB",o={unversionedId:"connector-v2/sink/IoTDB",id:"version-2.3.1/connector-v2/sink/IoTDB",title:"IoTDB",description:"IoTDB sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/IoTDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/IoTDB",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/IoTDB",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/IoTDB.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"InfluxDB",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/InfluxDB"},next:{title:"JDBC",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Jdbc"}},g={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"node_urls list",id:"node_urls-list",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"key_device string",id:"key_device-string",level:3},{value:"key_timestamp string",id:"key_timestamp-string",level:3},{value:"key_measurement_fields array",id:"key_measurement_fields-array",level:3},{value:"storage_group string",id:"storage_group-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"batch_interval_ms int",id:"batch_interval_ms-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"default_thrift_buffer_size int",id:"default_thrift_buffer_size-int",level:3},{value:"max_thrift_frame_size int",id:"max_thrift_frame_size-int",level:3},{value:"zone_id string",id:"zone_id-string",level:3},{value:"enable_rpc_compression boolean",id:"enable_rpc_compression-boolean",level:3},{value:"connection_timeout_in_ms int",id:"connection_timeout_in_ms-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Case1",id:"case1",level:3},{value:"Case2",id:"case2",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],m={toc:p},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"iotdb"},"IoTDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"IoTDB sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to write data to IoTDB."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"There is a conflict of thrift version between IoTDB and Spark.Therefore, you need to execute ",(0,r.yg)("inlineCode",{parentName:"p"},"rm -f $SPARK_HOME/jars/libthrift*")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/")," to resolve it.")),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("p",null,"IoTDB supports the ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")," feature through idempotent writing. If two pieces of data have\nthe same ",(0,r.yg)("inlineCode",{parentName:"p"},"key")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"timestamp"),", the new data will overwrite the old one."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_urls"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_device"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"processing time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_measurement_fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"exclude ",(0,r.yg)("inlineCode",{parentName:"td"},"device")," & ",(0,r.yg)("inlineCode",{parentName:"td"},"timestamp"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"storage_group"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"default_thrift_buffer_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_thrift_frame_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zone_id"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_rpc_compression"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_timeout_in_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"node_urls-list"},"node_urls ","[list]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," cluster address, the format is ",(0,r.yg)("inlineCode",{parentName:"p"},'["host:port", ...]')),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," user username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," user password"),(0,r.yg)("h3",{id:"key_device-string"},"key_device ","[string]"),(0,r.yg)("p",null,"Specify field name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," deviceId in SeaTunnelRow"),(0,r.yg)("h3",{id:"key_timestamp-string"},"key_timestamp ","[string]"),(0,r.yg)("p",null,"Specify field-name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," timestamp in SeaTunnelRow. If not specified, use processing-time as timestamp"),(0,r.yg)("h3",{id:"key_measurement_fields-array"},"key_measurement_fields ","[array]"),(0,r.yg)("p",null,"Specify field-name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," measurement list in SeaTunnelRow. If not specified, include all fields but exclude ",(0,r.yg)("inlineCode",{parentName:"p"},"device")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"timestamp")),(0,r.yg)("h3",{id:"storage_group-string"},"storage_group ","[string]"),(0,r.yg)("p",null,"Specify device storage group(path prefix)"),(0,r.yg)("p",null,'example: deviceId = ${storage_group} + "." +  ${key_device}'),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the IoTDB"),(0,r.yg)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the IoTDB"),(0,r.yg)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,r.yg)("p",null,"The number of retries to flush failed"),(0,r.yg)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,r.yg)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,r.yg)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,r.yg)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")),(0,r.yg)("h3",{id:"default_thrift_buffer_size-int"},"default_thrift_buffer_size ","[int]"),(0,r.yg)("p",null,"Thrift init buffer size in ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,r.yg)("h3",{id:"max_thrift_frame_size-int"},"max_thrift_frame_size ","[int]"),(0,r.yg)("p",null,"Thrift max frame size in ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,r.yg)("h3",{id:"zone_id-string"},"zone_id ","[string]"),(0,r.yg)("p",null,"java.time.ZoneId in ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,r.yg)("h3",{id:"enable_rpc_compression-boolean"},"enable_rpc_compression ","[boolean]"),(0,r.yg)("p",null,"Enable rpc compression in ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,r.yg)("h3",{id:"connection_timeout_in_ms-int"},"connection_timeout_in_ms ","[int]"),(0,r.yg)("p",null,"The maximum time (in ms) to wait when connecting to ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"case1"},"Case1"),(0,r.yg)("p",null,"Common options:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    node_urls = ["localhost:6667"]\n    username = "root"\n    password = "root"\n    batch_size = 1024\n    batch_interval_ms = 1000\n  }\n}\n')),(0,r.yg)("p",null,"When you assign ",(0,r.yg)("inlineCode",{parentName:"p"},"key_device"),"  is ",(0,r.yg)("inlineCode",{parentName:"p"},"device_name"),", for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    ...\n    key_device = "device_name"\n  }\n}\n')),(0,r.yg)("p",null,"Upstream SeaTunnelRow data format is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"device_name"),(0,r.yg)("th",{parentName:"tr",align:null},"field_1"),(0,r.yg)("th",{parentName:"tr",align:null},"field_2"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_a"),(0,r.yg)("td",{parentName:"tr",align:null},"1001"),(0,r.yg)("td",{parentName:"tr",align:null},"1002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_b"),(0,r.yg)("td",{parentName:"tr",align:null},"2001"),(0,r.yg)("td",{parentName:"tr",align:null},"2002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_c"),(0,r.yg)("td",{parentName:"tr",align:null},"3001"),(0,r.yg)("td",{parentName:"tr",align:null},"3002")))),(0,r.yg)("p",null,"Output to ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT * FROM root.test_group.* align by device;\n+------------------------+------------------------+-----------+----------+\n|                    Time|                  Device|   field_1|    field_2|\n+------------------------+------------------------+----------+-----------+\n|2022-09-26T17:50:01.201Z|root.test_group.device_a|      1001|       1002|\n|2022-09-26T17:50:01.202Z|root.test_group.device_b|      2001|       2002|\n|2022-09-26T17:50:01.203Z|root.test_group.device_c|      3001|       3002|\n+------------------------+------------------------+----------+-----------+\n")),(0,r.yg)("h3",{id:"case2"},"Case2"),(0,r.yg)("p",null,"When you assign ",(0,r.yg)("inlineCode",{parentName:"p"},"key_device"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"key_timestamp"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"key_measurement_fields"),", for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    ...\n    key_device = "device_name"\n    key_timestamp = "ts"\n    key_measurement_fields = ["temperature", "moisture"]\n  }\n}\n')),(0,r.yg)("p",null,"Upstream SeaTunnelRow data format is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ts"),(0,r.yg)("th",{parentName:"tr",align:null},"device_name"),(0,r.yg)("th",{parentName:"tr",align:null},"field_1"),(0,r.yg)("th",{parentName:"tr",align:null},"field_2"),(0,r.yg)("th",{parentName:"tr",align:null},"temperature"),(0,r.yg)("th",{parentName:"tr",align:null},"moisture"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_a"),(0,r.yg)("td",{parentName:"tr",align:null},"1001"),(0,r.yg)("td",{parentName:"tr",align:null},"1002"),(0,r.yg)("td",{parentName:"tr",align:null},"36.1"),(0,r.yg)("td",{parentName:"tr",align:null},"100")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_b"),(0,r.yg)("td",{parentName:"tr",align:null},"2001"),(0,r.yg)("td",{parentName:"tr",align:null},"2002"),(0,r.yg)("td",{parentName:"tr",align:null},"36.2"),(0,r.yg)("td",{parentName:"tr",align:null},"101")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_c"),(0,r.yg)("td",{parentName:"tr",align:null},"3001"),(0,r.yg)("td",{parentName:"tr",align:null},"3002"),(0,r.yg)("td",{parentName:"tr",align:null},"36.3"),(0,r.yg)("td",{parentName:"tr",align:null},"102")))),(0,r.yg)("p",null,"Output to ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT * FROM root.test_group.* align by device;\n+------------------------+------------------------+--------------+-----------+\n|                    Time|                  Device|   temperature|   moisture|\n+------------------------+------------------------+--------------+-----------+\n|2022-09-25T00:00:00.001Z|root.test_group.device_a|          36.1|        100|\n|2022-09-25T00:00:00.001Z|root.test_group.device_b|          36.2|        101|\n|2022-09-25T00:00:00.001Z|root.test_group.device_c|          36.3|        102|\n+------------------------+------------------------+--------------+-----------+\n")),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add IoTDB Sink Connector")),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Improve IoTDB Sink Connector (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2917"},"2917"),")",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Support align by sql syntax"),(0,r.yg)("li",{parentName:"ul"},"Support sql split ignore case"),(0,r.yg)("li",{parentName:"ul"},"Support restore split offset to at-least-once"),(0,r.yg)("li",{parentName:"ul"},"Support read timestamp from RowRecord"))),(0,r.yg)("li",{parentName:"ul"},"[BugFix]"," Fix IoTDB connector sink NPE (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3080"},"3080"),")")))}d.isMDXComponent=!0}}]);