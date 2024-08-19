"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[82414],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,m=d["".concat(g,".").concat(y)]||d[y]||u[y]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="PostgreSql",o={unversionedId:"connector-v2/sink/PostgreSql",id:"connector-v2/sink/PostgreSql",title:"PostgreSql",description:"JDBC PostgreSql Sink Connector",source:"@site/docs/connector-v2/sink/PostgreSql.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/PostgreSql",permalink:"/docs/connector-v2/sink/PostgreSql",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/PostgreSql.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/docs/connector-v2/sink/Phoenix"},next:{title:"Pulsar",permalink:"/docs/connector-v2/sink/Pulsar"}},g={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Options",id:"options",level:2},{value:"table string",id:"table-string",level:3},{value:"schema_save_modeEnum",id:"schema_save_modeenum",level:3},{value:"data_save_modeEnum",id:"data_save_modeenum",level:3},{value:"custom_sqlString",id:"custom_sqlstring",level:3},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Generate Sink SQL",id:"generate-sink-sql",level:3},{value:"Exactly-once :",id:"exactly-once-",level:3},{value:"CDC(Change Data Capture) Event",id:"cdcchange-data-capture-event",level:3},{value:"Save mode function",id:"save-mode-function",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"postgresql"},"PostgreSql"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC PostgreSql Sink Connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once\nsemantics (using XA transaction guarantee)."),(0,r.yg)("h2",{id:"using-dependency"},"Using Dependency"),(0,r.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is\nsupport ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,r.yg)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it.")),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"If you want to manipulate the GEOMETRY type in PostgreSQL."),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.postgis/postgis-jdbc"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database Dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.yg)("br",null),"\nFor example PostgreSQL datasource: cp postgresql-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/",(0,r.yg)("br",null),"\nIf you want to manipulate the GEOMETRY type in PostgreSQL, add postgresql-xxx.jar and postgis-jdbc-xxx.jar to $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"PostgreSQL Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_BOOL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","BOOLEAN",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTEA",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_BYTEA",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","TINYINT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT2",(0,r.yg)("br",null),"SMALLSERIAL",(0,r.yg)("br",null),"INT4",(0,r.yg)("br",null),"SERIAL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_INT2",(0,r.yg)("br",null),"_INT4",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","INT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT8",(0,r.yg)("br",null),"BIGSERIAL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_INT8",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","BIGINT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT4",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_FLOAT4",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","FLOAT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT8",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_FLOAT8",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","DOUBLE",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size>0)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(Get the designated column's specified column size,Gets the number of digits in the specified column to the right of the decimal point)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size<0)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BPCHAR",(0,r.yg)("br",null),"CHARACTER",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"GEOMETRY",(0,r.yg)("br",null),"GEOGRAPHY",(0,r.yg)("br",null),"JSON",(0,r.yg)("br",null),"JSONB",(0,r.yg)("br",null),"UUID"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_BPCHAR",(0,r.yg)("br",null),"_CHARACTER",(0,r.yg)("br",null),"_VARCHAR",(0,r.yg)("br",null),"_TEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","STRING",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OTHER DATA TYPES"),(0,r.yg)("td",{parentName:"tr",align:null},"NOT SUPPORTED YET")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost:5432/test ",(0,r.yg)("br",null),"  if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,r.yg)("br",null)," if you use PostgreSQL the value is ",(0,r.yg)("inlineCode",{parentName:"td"},"org.postgresql.Driver"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use this sql write upstream input datas to database. e.g ",(0,r.yg)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,r.yg)("inlineCode",{parentName:"td"},"query")," have the higher priority")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use this ",(0,r.yg)("inlineCode",{parentName:"td"},"database")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"table-name")," auto-generate sql and receive upstream input datas write to database.",(0,r.yg)("br",null),"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use database and this table-name auto-generate sql and receive upstream input datas write to database.",(0,r.yg)("br",null),"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.The table parameter can fill in the name of an unwilling table, which will eventually be used as the table name of the creation table, and supports variables (",(0,r.yg)("inlineCode",{parentName:"td"},"${table_name}"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"${schema_name}"),"). Replacement rules: ",(0,r.yg)("inlineCode",{parentName:"td"},"${schema_name}")," will replace the SCHEMA name passed to the target side, and ",(0,r.yg)("inlineCode",{parentName:"td"},"${table_name}")," will replace the name of the table passed to the table at the target side.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,r.yg)("inlineCode",{parentName:"td"},"insert"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"delete"),", and ",(0,r.yg)("inlineCode",{parentName:"td"},"update")," when automatically generate sql.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupport upsert syntax. ",(0,r.yg)("strong",{parentName:"td"},"Note"),": that this method has low performance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of retries to submit failed (executeBatch)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffered records reaches the number of ",(0,r.yg)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),(0,r.yg)("br",null),", the data will be flushed into the database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to",(0,r.yg)("br",null),"set ",(0,r.yg)("inlineCode",{parentName:"td"},"xa_data_source_class_name"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Generate sql statements based on the database table you want to write to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The xa data source class name of the database Driver, for example, PostgreSQL is ",(0,r.yg)("inlineCode",{parentName:"td"},"org.postgresql.xa.PGXADataSource"),", and",(0,r.yg)("br",null),"please refer to appendix for other data sources")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of retries for transaction commit failures")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect",(0,r.yg)("br",null),"exactly-once semantics")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auto_commit"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Automatic transaction commit is enabled by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_ide"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Identify whether the field needs to be converted when synchronizing from the source to the sink. ",(0,r.yg)("inlineCode",{parentName:"td"},"ORIGINAL")," indicates no conversion is needed;",(0,r.yg)("inlineCode",{parentName:"td"},"UPPERCASE")," indicates conversion to uppercase;",(0,r.yg)("inlineCode",{parentName:"td"},"LOWERCASE")," indicates conversion to lowercase.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,r.yg)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,r.yg)("td",{parentName:"tr",align:null},"Before the synchronous task is turned on, different treatment schemes are selected for the existing surface structure of the target side.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,r.yg)("td",{parentName:"tr",align:null},"Before the synchronous task is turned on, different processing schemes are selected for data existing data on the target side.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"When data_save_mode selects CUSTOM_PROCESSING, you should fill in the CUSTOM_SQL parameter. This parameter usually fills in a SQL that can be executed. SQL will be executed before synchronization tasks.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_upsert"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable upsert by primary_keys exist, If the task has no key duplicate data, setting this parameter to ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," can speed up data import")))),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"database")," and this ",(0,r.yg)("inlineCode",{parentName:"p"},"table-name")," auto-generate sql and receive upstream input datas write to database."),(0,r.yg)("p",null,"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," and has a higher priority."),(0,r.yg)("p",null,"The table parameter can fill in the name of an unwilling table, which will eventually be used as the table name of the creation table, and supports variables (",(0,r.yg)("inlineCode",{parentName:"p"},"${table_name}"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"${schema_name}"),"). Replacement rules: ",(0,r.yg)("inlineCode",{parentName:"p"},"${schema_name}")," will replace the SCHEMA name passed to the target side, and ",(0,r.yg)("inlineCode",{parentName:"p"},"${table_name}")," will replace the name of the table passed to the table at the target side."),(0,r.yg)("p",null,"for example:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"${schema_name}.${table_name} _test"),(0,r.yg)("li",{parentName:"ol"},"dbo.tt_${table_name} _sink"),(0,r.yg)("li",{parentName:"ol"},"public.sink_table")),(0,r.yg)("h3",{id:"schema_save_modeenum"},"schema_save_mode","[Enum]"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different treatment schemes are selected for the existing surface structure of the target side.",(0,r.yg)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1aWill create when the table does not exist, delete and rebuild when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1aWill Created when the table does not exist, skipped when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1aError will be reported when the table does not exist"),(0,r.yg)("h3",{id:"data_save_modeenum"},"data_save_mode","[Enum]"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different processing schemes are selected for data existing data on the target side.",(0,r.yg)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a Preserve database structure and delete data",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1aPreserve database structure, preserve data",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_PROCESSING"),"\uff1aUser defined processing",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1aWhen there is data, an error is reported"),(0,r.yg)("h3",{id:"custom_sqlstring"},"custom_sql","[String]"),(0,r.yg)("p",null,"When data_save_mode selects CUSTOM_PROCESSING, you should fill in the CUSTOM_SQL parameter. This parameter usually fills in a SQL that can be executed. SQL will be executed before synchronization tasks."),(0,r.yg)("h3",{id:"tips"},"Tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to JDBC Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target table is test_table will also be 16 rows of data in the table. Before run this job, you need create database test and table test_table in your PostgreSQL. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    jdbc {\n       # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = "org.postgresql.Driver"\n        user = root\n        password = 123456\n        query = "insert into test_table(name,age) values(?,?)"\n     }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,r.yg)("h3",{id:"generate-sink-sql"},"Generate Sink SQL"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example  not need to write complex sql statements, you can configure the database name table name to automatically generate add statements for you")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Jdbc {\n        # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = org.postgresql.Driver\n        user = root\n        password = 123456\n        \n        generate_sink_sql = true\n        database = test\n        table = "public.test_table"\n    }\n}\n')),(0,r.yg)("h3",{id:"exactly-once-"},"Exactly-once :"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For accurate write scene we guarantee accurate once")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n       # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = "org.postgresql.Driver"\n    \n        max_retries = 0\n        user = root\n        password = 123456\n        query = "insert into test_table(name,age) values(?,?)"\n    \n        is_exactly_once = "true"\n    \n        xa_data_source_class_name = "org.postgresql.xa.PGXADataSource"\n    }\n}\n')),(0,r.yg)("h3",{id:"cdcchange-data-capture-event"},"CDC(Change Data Capture) Event"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"CDC change data is also supported by us In this case, you need config database, table and primary_keys.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = "org.postgresql.Driver"\n        user = root\n        password = 123456\n        \n        generate_sink_sql = true\n        # You need to configure both database and table\n        database = test\n        table = sink_table\n        primary_keys = ["id","name"]\n        field_ide = UPPERCASE\n    }\n}\n')),(0,r.yg)("h3",{id:"save-mode-function"},"Save mode function"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Jdbc {\n        # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = org.postgresql.Driver\n        user = root\n        password = 123456\n        \n        generate_sink_sql = true\n        database = test\n        table = "public.test_table"\n        schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n        data_save_mode="APPEND_DATA"\n    }\n}\n')))}u.isMDXComponent=!0}}]);