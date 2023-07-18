"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20392],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91682:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},s="MongoDB",p={unversionedId:"connector-v2/source/MongoDB",id:"connector-v2/source/MongoDB",title:"MongoDB",description:"MongoDB Source Connector",source:"@site/docs/connector-v2/source/MongoDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/MongoDB",permalink:"/zh-CN/docs/connector-v2/source/MongoDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/MongoDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MongoDB CDC",permalink:"/zh-CN/docs/connector-v2/source/MongoDB-CDC"},next:{title:"My Hours",permalink:"/zh-CN/docs/connector-v2/source/MyHours"}},u={},c=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Tips",id:"tips",level:3},{value:"How to Create a MongoDB Data Synchronization Jobs",id:"how-to-create-a-mongodb-data-synchronization-jobs",level:2},{value:"Parameter Interpretation",id:"parameter-interpretation",level:2},{value:"MongoDB Database Connection URI Examples",id:"mongodb-database-connection-uri-examples",level:3},{value:"MatchQuery Scan",id:"matchquery-scan",level:3},{value:"Projection Scan",id:"projection-scan",level:3},{value:"Partitioned Scan",id:"partitioned-scan",level:3},{value:"Flat Sync String",id:"flat-sync-string",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"Next Version",id:"next-version",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDB"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MongoDB Source Connector")),(0,o.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Spark",(0,o.kt)("br",null),"\nFlink",(0,o.kt)("br",null),"\nSeaTunnel Zeta",(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The MongoDB Connector provides the ability to read and write data from and to MongoDB.\nThis document describes how to set up the MongoDB connector to run data reads against MongoDB."),(0,o.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,o.kt)("p",null,"In order to use the Mongodb connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,o.kt)("th",{parentName:"tr",align:null},"Dependency"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,o.kt)("td",{parentName:"tr",align:null},"universal"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-mongodb"},"Download"))))),(0,o.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,o.kt)("p",null,"The following table lists the field data type mapping from MongoDB BSON type to SeaTunnel data type."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"MongoDB BSON type"),(0,o.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ObjectId"),(0,o.kt)("td",{parentName:"tr",align:null},"STRING")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"STRING")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Binary"),(0,o.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Int32"),(0,o.kt)("td",{parentName:"tr",align:null},"INTEGER")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Int64"),(0,o.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Double"),(0,o.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Decimal128"),(0,o.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Date"),(0,o.kt)("td",{parentName:"tr",align:null},"Date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"ROW")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Array"),(0,o.kt)("td",{parentName:"tr",align:null},"ARRAY")))),(0,o.kt)("p",null,"For specific types in MongoDB, we use Extended JSON format to map them to SeaTunnel STRING type."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"MongoDB BSON type"),(0,o.kt)("th",{parentName:"tr",align:null},"SeaTunnel STRING"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Symbol"),(0,o.kt)("td",{parentName:"tr",align:null},'{"_value": {"$symbol": "12"}}')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RegularExpression"),(0,o.kt)("td",{parentName:"tr",align:null},'{"_value": {"$regularExpression": {"pattern": "^9$", "options": "i"}}}')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,o.kt)("td",{parentName:"tr",align:null},'{"_value": {"$code": "function() { return 10; }"}}')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DbPointer"),(0,o.kt)("td",{parentName:"tr",align:null},'{"_value": {"$dbPointer": {"$ref": "db.coll", "$id": {"$oid": "63932a00da01604af329e33c"}}}}')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tips")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"1.When using the DECIMAL type in SeaTunnel, be aware that the maximum range cannot exceed 34 digits, which means you should use decimal(34, 18).",(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"source-options"},"Source Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uri"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The MongoDB standard connection uri. eg. mongodb://user:password@hosts:27017/database?readPreference=secondary&slaveOk=true.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"database"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of MongoDB database to read or write.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"collection"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of MongoDB collection to read or write.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"MongoDB's BSON and seatunnel data structure mapping.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"match.query"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"In MongoDB, filters are used to filter documents for query operations.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"match.projection"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"In MongoDB, Projection is used to control the fields contained in the query results.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"partition.split-key"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"_id"),(0,o.kt)("td",{parentName:"tr",align:null},"The key of Mongodb fragmentation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"partition.split-size"),(0,o.kt)("td",{parentName:"tr",align:null},"Long"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"64 ",(0,o.kt)("em",{parentName:"td"}," 1024 ")," 1024"),(0,o.kt)("td",{parentName:"tr",align:null},"The size of Mongodb fragment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cursor.no-timeout"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"MongoDB server normally times out idle cursors after an inactivity period (10 minutes) to prevent excess memory use. Set this option to true to prevent that. However, if the application takes longer than 30 minutes to process the current batch of documents, the session is marked as expired and closed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fetch.size"),(0,o.kt)("td",{parentName:"tr",align:null},"Int"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"2048"),(0,o.kt)("td",{parentName:"tr",align:null},"Set the number of documents obtained from the server for each batch. Setting the appropriate batch size can improve query performance and avoid the memory pressure caused by obtaining a large amount of data at one time.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"max.time-min"),(0,o.kt)("td",{parentName:"tr",align:null},"Long"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"600"),(0,o.kt)("td",{parentName:"tr",align:null},"This parameter is a MongoDB query option that limits the maximum execution time for query operations. The value of maxTimeMin is in Minute. If the execution time of the query exceeds the specified time limit, MongoDB will terminate the operation and return an error.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"flat.sync-string"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"By utilizing flatSyncString, only one field attribute value can be set, and the field type must be a String. This operation will perform a string mapping on a single MongoDB data entry.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,o.kt)("h3",{id:"tips"},"Tips"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"1.The parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"match.query")," is compatible with the historical old version parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"matchQuery"),", and they are equivalent replacements.",(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"how-to-create-a-mongodb-data-synchronization-jobs"},"How to Create a MongoDB Data Synchronization Jobs"),(0,o.kt)("p",null,"The following example demonstrates how to create a data synchronization job that reads data from MongoDB and prints it on the local client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to Mongodb\nsource {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "source_table"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_int = int\n        c_bigint = bigint\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          c_map = "map<string, string>"\n          c_array = "array<int>"\n          c_string = string\n          c_boolean = boolean\n          c_int = int\n          c_bigint = bigint\n          c_double = double\n          c_bytes = bytes\n          c_date = date\n          c_decimal = "decimal(38, 18)"\n          c_timestamp = timestamp\n        }\n      }\n    }\n  }\n}\n\n# Console printing of the read Mongodb data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')),(0,o.kt)("h2",{id:"parameter-interpretation"},"Parameter Interpretation"),(0,o.kt)("h3",{id:"mongodb-database-connection-uri-examples"},"MongoDB Database Connection URI Examples"),(0,o.kt)("p",null,"Unauthenticated single node connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.100:27017/mydb\n")),(0,o.kt)("p",null,"Replica set connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.100:27017/mydb?replicaSet=xxx\n")),(0,o.kt)("p",null,"Authenticated replica set connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin\n")),(0,o.kt)("p",null,"Multi-node replica set connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb?replicaSet=xxx\n")),(0,o.kt)("p",null,"Sharded cluster connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.100:27017/mydb\n")),(0,o.kt)("p",null,"Multiple mongos connections:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb\n")),(0,o.kt)("p",null,"Note: The username and password in the URI must be URL-encoded before being concatenated into the connection string."),(0,o.kt)("h3",{id:"matchquery-scan"},"MatchQuery Scan"),(0,o.kt)("p",null,"In data synchronization scenarios, the matchQuery approach needs to be used early to reduce the number of documents that need to be processed by subsequent operators, thus improving performance.\nHere is a simple example of a seatunnel using ",(0,o.kt)("inlineCode",{parentName:"p"},"match.query")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "orders"\n    match.query = "{status: \\"A\\"}"\n    schema = {\n      fields {\n        id = bigint\n        status = string\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The following are examples of MatchQuery query statements of various data types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Query Boolean type\n"{c_boolean:true}"\n# Query string type\n"{c_string:\\"OCzCj\\"}"\n# Query the integer\n"{c_int:2}"\n# Type of query time\n"{c_date:ISODate(\\"2023-06-26T16:00:00.000Z\\")}"\n# Query floating point type\n{c_double:{$gte:1.71763202185342e+308}}\n')),(0,o.kt)("p",null,"Please refer to how to write the syntax of ",(0,o.kt)("inlineCode",{parentName:"p"},"match.query"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/query-documents"},"https://www.mongodb.com/docs/manual/tutorial/query-documents")),(0,o.kt)("h3",{id:"projection-scan"},"Projection Scan"),(0,o.kt)("p",null,"In MongoDB, Projection is used to control which fields are included in the query results. This can be accomplished by specifying which fields need to be returned and which fields do not.\nIn the find() method, a projection object can be passed as a second argument. The key of the projection object indicates the fields to include or exclude, and a value of 1 indicates inclusion and 0 indicates exclusion.\nHere is a simple example, assuming we have a collection named users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Returns only the name and email fields\ndb.users.find({}, { name: 1, email: 0 });\n")),(0,o.kt)("p",null,"In data synchronization scenarios, projection needs to be used early to reduce the number of documents that need to be processed by subsequent operators, thus improving performance.\nHere is a simple example of a seatunnel using projection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    match.projection = "{ name: 1, email: 0 }"\n    schema = {\n      fields {\n        name = string\n      }\n    }\n  }\n}\n\n')),(0,o.kt)("h3",{id:"partitioned-scan"},"Partitioned Scan"),(0,o.kt)("p",null,"To speed up reading data in parallel source task instances, seatunnel provides a partitioned scan feature for MongoDB collections. The following partitioning strategies are provided.\nUsers can control data sharding by setting the partition.split-key for sharding keys and partition.split-size for sharding size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    partition.split-key = "id"\n    partition.split-size = 1024\n    schema = {\n      fields {\n        id = bigint\n        status = string\n      }\n    }\n  }\n}\n\n')),(0,o.kt)("h3",{id:"flat-sync-string"},"Flat Sync String"),(0,o.kt)("p",null,"By utilizing ",(0,o.kt)("inlineCode",{parentName:"p"},"flat.sync-string"),", only one field attribute value can be set, and the field type must be a String.\nThis operation will perform a string mapping on a single MongoDB data entry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    flat.sync-string = true\n    schema = {\n      fields {\n        data = string\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Use the data samples synchronized with modified parameters, such as the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id":{\n    "$oid":"643d41f5fdc6a52e90e59cbf"\n  },\n  "c_map":{\n    "OQBqH":"jllt",\n    "rkvlO":"pbfdf",\n    "pCMEX":"hczrdtve",\n    "DAgdj":"t",\n    "dsJag":"voo"\n  },\n  "c_array":[\n    {\n      "$numberInt":"-865590937"\n    },\n    {\n      "$numberInt":"833905600"\n    },\n    {\n      "$numberInt":"-1104586446"\n    },\n    {\n      "$numberInt":"2076336780"\n    },\n    {\n      "$numberInt":"-1028688944"\n    }\n  ],\n  "c_string":"bddkzxr",\n  "c_boolean":false,\n  "c_tinyint":{\n    "$numberInt":"39"\n  },\n  "c_smallint":{\n    "$numberInt":"23672"\n  },\n  "c_int":{\n    "$numberInt":"-495763561"\n  },\n  "c_bigint":{\n    "$numberLong":"3768307617923954543"\n  },\n  "c_float":{\n    "$numberDouble":"5.284220288280258E37"\n  },\n  "c_double":{\n    "$numberDouble":"1.1706091642478246E308"\n  },\n  "c_bytes":{\n    "$binary":{\n      "base64":"ZWJ4",\n      "subType":"00"\n    }\n  },\n  "c_date":{\n    "$date":{\n      "$numberLong":"1686614400000"\n    }\n  },\n  "c_decimal":{\n    "$numberDecimal":"683265300"\n  },\n  "c_timestamp":{\n    "$date":{\n      "$numberLong":"1684283772000"\n    }\n  },\n  "c_row":{\n    "c_map":{\n      "OQBqH":"cbrzhsktmm",\n      "rkvlO":"qtaov",\n      "pCMEX":"tuq",\n      "DAgdj":"jzop",\n      "dsJag":"vwqyxtt"\n    },\n    "c_array":[\n      {\n        "$numberInt":"1733526799"\n      },\n      {\n        "$numberInt":"-971483501"\n      },\n      {\n        "$numberInt":"-1716160960"\n      },\n      {\n        "$numberInt":"-919976360"\n      },\n      {\n        "$numberInt":"727499700"\n      }\n    ],\n    "c_string":"oboislr",\n    "c_boolean":true,\n    "c_tinyint":{\n      "$numberInt":"-66"\n    },\n    "c_smallint":{\n      "$numberInt":"1308"\n    },\n    "c_int":{\n      "$numberInt":"-1573886733"\n    },\n    "c_bigint":{\n      "$numberLong":"4877994302999518682"\n    },\n    "c_float":{\n      "$numberDouble":"1.5353209063652051E38"\n    },\n    "c_double":{\n      "$numberDouble":"1.1952441956458565E308"\n    },\n    "c_bytes":{\n      "$binary":{\n        "base64":"cWx5Ymp0Yw==",\n        "subType":"00"\n      }\n    },\n    "c_date":{\n      "$date":{\n        "$numberLong":"1686614400000"\n      }\n    },\n    "c_decimal":{\n      "$numberDecimal":"656406177"\n    },\n    "c_timestamp":{\n      "$date":{\n        "$numberLong":"1684283772000"\n      }\n    }\n  },\n  "id":{\n    "$numberInt":"2"\n  }\n}\n')),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add MongoDB Source Connector")),(0,o.kt)("h3",{id:"next-version"},"Next Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[Feature]","Refactor mongodb source connector(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4620"},"4620"),")")))}m.isMDXComponent=!0}}]);