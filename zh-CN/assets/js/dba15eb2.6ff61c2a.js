"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[85517],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const l={},i="SQL Server",o={unversionedId:"connector-v2/source/SqlServer",id:"connector-v2/source/SqlServer",title:"SQL Server",description:"JDBC SQL Server Source Connector",source:"@site/docs/connector-v2/source/SqlServer.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/SqlServer",permalink:"/zh-CN/docs/connector-v2/source/SqlServer",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/SqlServer.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SQL Server CDC",permalink:"/zh-CN/docs/connector-v2/source/SqlServer-CDC"},next:{title:"StarRocks",permalink:"/zh-CN/docs/connector-v2/source/StarRocks"}},s={},u=[{value:"Support SQL Server Version",id:"support-sql-server-version",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Parallel Reader",id:"parallel-reader",level:2},{value:"Options Related To Split",id:"options-related-to-split",level:3},{value:"split.size",id:"splitsize",level:4},{value:"split.even-distribution.factor.lower-bound",id:"spliteven-distributionfactorlower-bound",level:4},{value:"split.even-distribution.factor.upper-bound",id:"spliteven-distributionfactorupper-bound",level:4},{value:"split.sample-sharding.threshold",id:"splitsample-shardingthreshold",level:4},{value:"split.inverse-sampling.rate",id:"splitinverse-samplingrate",level:4},{value:"partition_column string",id:"partition_column-string",level:4},{value:"partition_upper_bound BigDecimal",id:"partition_upper_bound-bigdecimal",level:4},{value:"partition_lower_bound BigDecimal",id:"partition_lower_bound-bigdecimal",level:4},{value:"partition_num int",id:"partition_num-int",level:4},{value:"tips",id:"tips",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Parallel:",id:"parallel",level:3},{value:"Fragmented Parallel Read Simple:",id:"fragmented-parallel-read-simple",level:3}],d={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sql-server"},"SQL Server"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC SQL Server Source Connector")),(0,r.yg)("h2",{id:"support-sql-server-version"},"Support SQL Server Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"server:2008 (Or later version for information only)")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark ",(0,r.yg)("br",null),"\nFlink ",(0,r.yg)("br",null),"\nSeatunnel Zeta ",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"using-dependency"},"Using Dependency"),(0,r.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"supports query SQL and can achieve projection effect.")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through JDBC."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"supported versions"),(0,r.yg)("th",{parentName:"tr",align:null},"driver"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SQL Server"),(0,r.yg)("td",{parentName:"tr",align:null},"support version >= 2008"),(0,r.yg)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:sqlserver://localhost:1433"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.yg)("br",null),"\nFor example SQL Server datasource: cp mssql-jdbc-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SQLserver Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"Seatunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIT"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,r.yg)("br",null),"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER",(0,r.yg)("br",null),"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(p,s)",(0,r.yg)("br",null),"DECIMAL(p,s)",(0,r.yg)("br",null),"MONEY",(0,r.yg)("br",null),"SMALLMONEY"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT(1~24)",(0,r.yg)("br",null),"REAL"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.yg)("br",null),"FLOAT(>24)"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"NCHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"NTEXT",(0,r.yg)("br",null),"NVARCHAR",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"XML"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME(s)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME(s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME(s)",(0,r.yg)("br",null),"DATETIME2(s)",(0,r.yg)("br",null),"DATETIMEOFFSET(s)",(0,r.yg)("br",null),"SMALLDATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY",(0,r.yg)("br",null),"VARBINARY",(0,r.yg)("br",null),"IMAGE"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:sqlserver://127.0.0.1:1434;database=TestDB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,r.yg)("br",null)," if you use SQLserver the value is ",(0,r.yg)("inlineCode",{parentName:"td"},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Query statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The column name for parallelism's partition, only support numeric type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column min value for scan, if not set SeaTunnel will query database get min value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column max value for scan, if not set SeaTunnel will query database get max value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"job parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of partition count, only support positive integer. default value is job parallelism")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"For queries that return a large number of objects,you can configure",(0,r.yg)("br",null)," the row fetch size used in the query toimprove performance by",(0,r.yg)("br",null)," reducing the number database hits required to satisfy the selection criteria.",(0,r.yg)("br",null)," Zero means use jdbc default value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,r.yg)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_path"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The path to the full path of table, you can use this configuration instead of ",(0,r.yg)("inlineCode",{parentName:"td"},"query"),". ",(0,r.yg)("br",null),"examples: ",(0,r.yg)("br",null),'mysql: "testdb.table1" ',(0,r.yg)("br",null),'oracle: "test_schema.table1" ',(0,r.yg)("br",null),'sqlserver: "testdb.test_schema.table1" ',(0,r.yg)("br",null),'postgresql: "testdb.test_schema.table1"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_list"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The list of tables to be read, you can use this configuration instead of ",(0,r.yg)("inlineCode",{parentName:"td"},"table_path")," example: ",(0,r.yg)("inlineCode",{parentName:"td"},'[{ table_path = "testdb.table1"}, {table_path = "testdb.table2", query = "select * id, name from testdb.table2"}]'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"where_condition"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Common row filter conditions for all tables/queries, must start with ",(0,r.yg)("inlineCode",{parentName:"td"},"where"),". for example ",(0,r.yg)("inlineCode",{parentName:"td"},"where id > 100"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"8096"),(0,r.yg)("td",{parentName:"tr",align:null},"The split size (number of rows) of table, captured tables are split into multiple splits when read of table.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split.even-distribution.factor.lower-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0.05"),(0,r.yg)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split.even-distribution.factor.upper-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split.sample-sharding.threshold"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split.inverse-sampling.rate"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"common-options.md"},"Source Common Options")," for details")))),(0,r.yg)("h2",{id:"parallel-reader"},"Parallel Reader"),(0,r.yg)("p",null,"The JDBC Source connector supports parallel reading of data from tables. SeaTunnel will use certain rules to split the data in the table, which will be handed over to readers for reading. The number of readers is determined by the ",(0,r.yg)("inlineCode",{parentName:"p"},"parallelism")," option."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Split Key Rules:")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If ",(0,r.yg)("inlineCode",{parentName:"li"},"partition_column")," is not null, It will be used to calculate split. The column must in ",(0,r.yg)("strong",{parentName:"li"},"Supported split data type"),"."),(0,r.yg)("li",{parentName:"ol"},"If ",(0,r.yg)("inlineCode",{parentName:"li"},"partition_column")," is null, seatunnel will read the schema from table and get the Primary Key and Unique Index. If there are more than one column in Primary Key and Unique Index, The first column which in the ",(0,r.yg)("strong",{parentName:"li"},"supported split data type")," will be used to split data. For example, the table have Primary Key(nn guid, name varchar), because ",(0,r.yg)("inlineCode",{parentName:"li"},"guid")," id not in ",(0,r.yg)("strong",{parentName:"li"},"supported split data type"),", so the column ",(0,r.yg)("inlineCode",{parentName:"li"},"name")," will be used to split data.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Supported split data type:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"String"),(0,r.yg)("li",{parentName:"ul"},"Number(int, bigint, decimal, ...)"),(0,r.yg)("li",{parentName:"ul"},"Date")),(0,r.yg)("h3",{id:"options-related-to-split"},"Options Related To Split"),(0,r.yg)("h4",{id:"splitsize"},"split.size"),(0,r.yg)("p",null,"How many rows in one split, captured tables are split into multiple splits when read of table."),(0,r.yg)("h4",{id:"spliteven-distributionfactorlower-bound"},"split.even-distribution.factor.lower-bound"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Not recommended for use")),(0,r.yg)("p",null,"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"sample-sharding.threshold"),". The default value is 0.05."),(0,r.yg)("h4",{id:"spliteven-distributionfactorupper-bound"},"split.even-distribution.factor.upper-bound"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Not recommended for use")),(0,r.yg)("p",null,"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"sample-sharding.threshold"),". The default value is 100.0."),(0,r.yg)("h4",{id:"splitsample-shardingthreshold"},"split.sample-sharding.threshold"),(0,r.yg)("p",null,"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards."),(0,r.yg)("h4",{id:"splitinverse-samplingrate"},"split.inverse-sampling.rate"),(0,r.yg)("p",null,"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000."),(0,r.yg)("h4",{id:"partition_column-string"},"partition_column ","[string]"),(0,r.yg)("p",null,"The column name for split data."),(0,r.yg)("h4",{id:"partition_upper_bound-bigdecimal"},"partition_upper_bound ","[BigDecimal]"),(0,r.yg)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,r.yg)("h4",{id:"partition_lower_bound-bigdecimal"},"partition_lower_bound ","[BigDecimal]"),(0,r.yg)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."),(0,r.yg)("h4",{id:"partition_num-int"},"partition_num ","[int]"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Not recommended for use, The correct approach is to control the number of split through ",(0,r.yg)("inlineCode",{parentName:"p"},"split.size"))),(0,r.yg)("p",null,"How many splits do we need to split into, only support positive integer. default value is job parallelism."),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If the table can not be split(for example, table have no Primary Key or Unique Index, and ",(0,r.yg)("inlineCode",{parentName:"p"},"partition_column")," is not set), it will run in single concurrency."),(0,r.yg)("p",{parentName:"blockquote"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"table_path")," to replace ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," for single table reading. If you need to read multiple tables, use ",(0,r.yg)("inlineCode",{parentName:"p"},"table_list"),".")),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Simple single task to read the data table")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\nsource{\n    Jdbc {\n        driver = com.microsoft.sqlserver.jdbc.SQLServerDriver\n        url = "jdbc:sqlserver://localhost:1433;databaseName=column_type_test"\n        user = SA\n        password = "Y.sa123456"\n        query = "select * from full_types_jdbc"\n    }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("h3",{id:"parallel"},"Parallel:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Read your query table in parallel with the shard field you configured and the shard data You can do this if you want to read the whole table")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 10\n  job.mode = "BATCH"\n}\n\nsource {\n    Jdbc {\n        driver = com.microsoft.sqlserver.jdbc.SQLServerDriver\n        url = "jdbc:sqlserver://localhost:1433;databaseName=column_type_test"\n        user = SA\n        password = "Y.sa123456"\n        # Define query logic as required\n        query = "select * from full_types_jdbc"\n        # Parallel sharding reads fields\n        partition_column = "id"\n        # Number of fragments\n        partition_num = 10\n    }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink {\n    Console {}\n}\n\n')),(0,r.yg)("h3",{id:"fragmented-parallel-read-simple"},"Fragmented Parallel Read Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"It is a shard that reads data in parallel fast")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 10\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Jdbc {\n    driver = com.microsoft.sqlserver.jdbc.SQLServerDriver\n    url = "jdbc:sqlserver://localhost:1433;databaseName=column_type_test"\n    user = SA\n    password = "Y.sa123456"\n    query = "select * from column_type_test.dbo.full_types_jdbc"\n    # Parallel sharding reads fields\n    partition_column = "id"\n    # Number of fragments\n    partition_num = 10\n\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/connector-v2/source/Jdbc\n}\n\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink {\n  Console {}\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/connector-v2/sink/Jdbc\n}\n')))}g.isMDXComponent=!0}}]);