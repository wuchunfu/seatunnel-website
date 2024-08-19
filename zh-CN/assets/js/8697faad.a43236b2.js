"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92261],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,y=c["".concat(g,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o="Http",i={unversionedId:"connector-v2/source/Http",id:"version-2.3.6/connector-v2/source/Http",title:"Http",description:"Http source connector",source:"@site/versioned_docs/version-2.3.6/connector-v2/source/Http.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Http",permalink:"/zh-CN/docs/2.3.6/connector-v2/source/Http",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/source/Http.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"HiveJdbc",permalink:"/zh-CN/docs/2.3.6/connector-v2/source/HiveJdbc"},next:{title:"Apache Iceberg",permalink:"/zh-CN/docs/2.3.6/connector-v2/source/Iceberg"}},g={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features-1",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Source Options",id:"source-options",level:2},{value:"How to Create a Http Data Synchronization Jobs",id:"how-to-create-a-http-data-synchronization-jobs",level:2},{value:"Parameter Interpretation",id:"parameter-interpretation",level:2},{value:"format",id:"format",level:3},{value:"content_json",id:"content_json",level:3},{value:"json_field",id:"json_field",level:3},{value:"pageing",id:"pageing",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"new version",id:"new-version",level:3}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"http"},"Http"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Http source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to read data from Http."),(0,r.yg)("h2",{id:"key-features-1"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("p",null,"In order to use the Http connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Dependency"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Http"),(0,r.yg)("td",{parentName:"tr",align:null},"universal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-http"},"Download"))))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Http request url.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Http and seatunnel data structure mapping")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The schema fields of upstream data")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"json_field"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This parameter helps you configure the schema,so this parameter must be used with schema.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pageing"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This parameter is used for paging queries")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pageing.page_field"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This parameter is used to specify the page field name in the request parameter")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pageing.total_page_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This parameter is used to control the total number of pages")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pageing.batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The batch size returned per request is used to determine whether to continue when the total number of pages is unknown")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"content_json"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This parameter can get some json data.If you only need the data in the 'book' section, configure ",(0,r.yg)("inlineCode",{parentName:"td"},'content_field = "$.store.book.*"'),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"text"),(0,r.yg)("td",{parentName:"tr",align:null},"The format of upstream data, now only support ",(0,r.yg)("inlineCode",{parentName:"td"},"json")," ",(0,r.yg)("inlineCode",{parentName:"td"},"text"),", default ",(0,r.yg)("inlineCode",{parentName:"td"},"text"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"method"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"get"),(0,r.yg)("td",{parentName:"tr",align:null},"Http request method, only supports GET, POST method.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"headers"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Http headers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Http params,the program will automatically add http header application/x-www-form-urlencoded.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"body"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Http body,the program will automatically add http header application/json,body is jsonbody.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll_interval_millis"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Request http api interval(millis) in stream mode.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The max retry times if request http return to ",(0,r.yg)("inlineCode",{parentName:"td"},"IOException"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"The retry-backoff times(millis) multiplier if request http failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_max_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum retry-backoff times(millis) if request http failed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_multi_lines"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"12000"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection timeout setting, default 12s.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"socket_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null},"Socket timeout setting, default 60s.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"common-options.md"},"Source Common Options")," for details")))),(0,r.yg)("h2",{id:"how-to-create-a-http-data-synchronization-jobs"},"How to Create a Http Data Synchronization Jobs"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Http {\n    result_table_name = "http"\n    url = "http://mockserver:1080/example/http"\n    method = "GET"\n    format = "json"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          C_MAP = "map<string, string>"\n          C_ARRAY = "array<int>"\n          C_STRING = string\n          C_BOOLEAN = boolean\n          C_TINYINT = tinyint\n          C_SMALLINT = smallint\n          C_INT = int\n          C_BIGINT = bigint\n          C_FLOAT = float\n          C_DOUBLE = double\n          C_BYTES = bytes\n          C_DATE = date\n          C_DECIMAL = "decimal(38, 18)"\n          C_TIMESTAMP = timestamp\n        }\n      }\n    }\n  }\n}\n\n# Console printing of the read Http data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')),(0,r.yg)("h2",{id:"parameter-interpretation"},"Parameter Interpretation"),(0,r.yg)("h3",{id:"format"},"format"),(0,r.yg)("p",null,"when you assign format is ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option, for example:"),(0,r.yg)("p",null,"upstream data is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": "get success",\n  "success": true\n}\n')),(0,r.yg)("p",null,"you should assign schema as the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n  fields {\n    code = int\n    data = string\n    success = boolean\n  }\n}\n\n")),(0,r.yg)("p",null,"connector will generate data as the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"data"),(0,r.yg)("th",{parentName:"tr",align:null},"success"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"get success"),(0,r.yg)("td",{parentName:"tr",align:null},"true")))),(0,r.yg)("p",null,"when you assign format is ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),", connector will do nothing for upstream data, for example:"),(0,r.yg)("p",null,"upstream data is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": "get success",\n  "success": true\n}\n')),(0,r.yg)("p",null,"connector will generate data as the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"content"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'{"code":  200, "data":  "get success", "success":  true}')))),(0,r.yg)("h3",{id:"content_json"},"content_json"),(0,r.yg)("p",null,"This parameter can get some json data.If you only need the data in the 'book' section, configure ",(0,r.yg)("inlineCode",{parentName:"p"},'content_field = "$.store.book.*"'),"."),(0,r.yg)("p",null,"If your return data looks something like this."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "store": {\n    "book": [\n      {\n        "category": "reference",\n        "author": "Nigel Rees",\n        "title": "Sayings of the Century",\n        "price": 8.95\n      },\n      {\n        "category": "fiction",\n        "author": "Evelyn Waugh",\n        "title": "Sword of Honour",\n        "price": 12.99\n      }\n    ],\n    "bicycle": {\n      "color": "red",\n      "price": 19.95\n    }\n  },\n  "expensive": 10\n}\n')),(0,r.yg)("p",null,"You can configure ",(0,r.yg)("inlineCode",{parentName:"p"},'content_field = "$.store.book.*"')," and the result returned looks like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "category": "reference",\n    "author": "Nigel Rees",\n    "title": "Sayings of the Century",\n    "price": 8.95\n  },\n  {\n    "category": "fiction",\n    "author": "Evelyn Waugh",\n    "title": "Sword of Honour",\n    "price": 12.99\n  }\n]\n')),(0,r.yg)("p",null,"Then you can get the desired result with a simpler schema,like"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'Http {\n  url = "http://mockserver:1080/contentjson/mock"\n  method = "GET"\n  format = "json"\n  content_field = "$.store.book.*"\n  schema = {\n    fields {\n      category = string\n      author = string\n      title = string\n      price = string\n    }\n  }\n}\n')),(0,r.yg)("p",null,"Here is an example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Test data can be found at this link ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/mockserver-config.json"},"mockserver-config.json")),(0,r.yg)("li",{parentName:"ul"},"See this link for task configuration ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/http_contentjson_to_assert.conf"},"http_contentjson_to_assert.conf"),".")),(0,r.yg)("h3",{id:"json_field"},"json_field"),(0,r.yg)("p",null,"This parameter helps you configure the schema,so this parameter must be used with schema."),(0,r.yg)("p",null,"If your data looks something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{ \n  "store": {\n    "book": [\n      {\n        "category": "reference",\n        "author": "Nigel Rees",\n        "title": "Sayings of the Century",\n        "price": 8.95\n      },\n      {\n        "category": "fiction",\n        "author": "Evelyn Waugh",\n        "title": "Sword of Honour",\n        "price": 12.99\n      }\n    ],\n    "bicycle": {\n      "color": "red",\n      "price": 19.95\n    }\n  },\n  "expensive": 10\n}\n')),(0,r.yg)("p",null,"You can get the contents of 'book' by configuring the task as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Http {\n    url = "http://mockserver:1080/jsonpath/mock"\n    method = "GET"\n    format = "json"\n    json_field = {\n      category = "$.store.book[*].category"\n      author = "$.store.book[*].author"\n      title = "$.store.book[*].title"\n      price = "$.store.book[*].price"\n    }\n    schema = {\n      fields {\n        category = string\n        author = string\n        title = string\n        price = string\n      }\n    }\n  }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Test data can be found at this link ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/mockserver-config.json"},"mockserver-config.json")),(0,r.yg)("li",{parentName:"ul"},"See this link for task configuration ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/http_jsonpath_to_assert.conf"},"http_jsonpath_to_assert.conf"),".")),(0,r.yg)("h3",{id:"pageing"},"pageing"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Http {\n      url = "http://localhost:8080/mock/queryData"\n      method = "GET"\n      format = "json"\n      params={\n       page: "${page}"\n      }\n      content_field = "$.data.*"\n      pageing={\n       total_page_size=20\n       page_field=page\n       #when don\'t know the total_page_size use batch_size if read size<batch_size finish ,otherwise continue\n       #batch_size=10\n      }\n      schema = {\n        fields {\n          name = string\n          age = string\n        }\n      }\n    }\n}\n\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Http Source Connector")),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature][Connector-V2]","[HTTP]"," Use json-path parsing (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3510"},"3510"),")")))}u.isMDXComponent=!0}}]);