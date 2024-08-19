"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23746],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={},o="JDBC",i={unversionedId:"connector-v2/source/Jdbc",id:"version-2.2.0-beta/connector-v2/source/Jdbc",title:"JDBC",description:"JDBC source connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/source/Jdbc.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Jdbc",permalink:"/docs/2.2.0-beta/connector-v2/source/Jdbc",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/source/Jdbc.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/docs/2.2.0-beta/connector-v2/source/IoTDB"},next:{title:"Kudu",permalink:"/docs/2.2.0-beta/connector-v2/source/Kudu"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"partition_column string",id:"partition_column-string",level:3},{value:"partition_upper_bound long",id:"partition_upper_bound-long",level:3},{value:"partition_lower_bound long",id:"partition_lower_bound-long",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2}],s={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"jdbc"},"JDBC"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"JDBC source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read external data source data through JDBC."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"schema projection"))),(0,a.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"driver"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"user"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"query"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,a.yg)("td",{parentName:"tr",align:null},"Int"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"30")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,a.yg)("td",{parentName:"tr",align:null},"Long"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,a.yg)("td",{parentName:"tr",align:null},"Long"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,a.yg)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is com.mysql.cj.jdbc.Driver.\nWarn: for license compliance, you have to provide MySQL JDBC driver yourself, e.g. copy mysql-connector-java-xxx.jar to $SEATNUNNEL_HOME/lib for Standalone."),(0,a.yg)("h3",{id:"user-string"},"user ","[string]"),(0,a.yg)("p",null,"userName"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"password"),(0,a.yg)("h3",{id:"url-string"},"url ","[string]"),(0,a.yg)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,a.yg)("h3",{id:"query-string"},"query ","[string]"),(0,a.yg)("p",null,"Query statement"),(0,a.yg)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,a.yg)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,a.yg)("h3",{id:"partition_column-string"},"partition_column ","[string]"),(0,a.yg)("p",null,"The column name for parallelism's partition, only support numeric type."),(0,a.yg)("h3",{id:"partition_upper_bound-long"},"partition_upper_bound ","[long]"),(0,a.yg)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,a.yg)("h3",{id:"partition_lower_bound-long"},"partition_lower_bound ","[long]"),(0,a.yg)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."),(0,a.yg)("h2",{id:"tips"},"tips"),(0,a.yg)("p",null,"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed in parallel according to the concurrency of tasks."),(0,a.yg)("h2",{id:"appendix"},"appendix"),(0,a.yg)("p",null,"there are some reference value for params above."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"datasource"),(0,a.yg)("th",{parentName:"tr",align:null},"driver"),(0,a.yg)("th",{parentName:"tr",align:null},"url"),(0,a.yg)("th",{parentName:"tr",align:null},"maven"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mysql"),(0,a.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,a.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,a.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,a.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/postgres"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dm"),(0,a.yg)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmDriver"),(0,a.yg)("td",{parentName:"tr",align:null},"jdbc:dm://localhost:5236"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"))))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"simple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'    Jdbc {\n        url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n        driver = "com.mysql.cj.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        query = "select * from type_bin"\n    }\n')),(0,a.yg)("p",null,"parallel:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'    Jdbc {\n        url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n        driver = "com.mysql.cj.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        query = "select * from type_bin"\n        partition_column= "id"\n    }\n')))}g.isMDXComponent=!0}}]);