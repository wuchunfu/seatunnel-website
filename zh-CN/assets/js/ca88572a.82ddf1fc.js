"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[53352],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=g(t),y=r,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||l;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=t[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},48509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const l={},o="Notion",i={unversionedId:"connector-v2/source/Notion",id:"version-2.3.2/connector-v2/source/Notion",title:"Notion",description:"Notion source connector",source:"@site/versioned_docs/version-2.3.2/connector-v2/source/Notion.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Notion",permalink:"/zh-CN/docs/2.3.2/connector-v2/source/Notion",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/source/Notion.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Neo4j",permalink:"/zh-CN/docs/2.3.2/connector-v2/source/Neo4j"},next:{title:"OneSignal",permalink:"/zh-CN/docs/2.3.2/connector-v2/source/OneSignal"}},s={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url String",id:"url-string",level:3},{value:"password String",id:"password-string",level:3},{value:"version String",id:"version-string",level:3},{value:"method String",id:"method-string",level:3},{value:"params Map",id:"params-map",level:3},{value:"body String",id:"body-string",level:3},{value:"poll_interval_ms int",id:"poll_interval_ms-int",level:3},{value:"retry int",id:"retry-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"retry_backoff_max_ms int",id:"retry_backoff_max_ms-int",level:3},{value:"format String",id:"format-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"content_json String",id:"content_json-string",level:3},{value:"json_field Config",id:"json_field-config",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:g},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"notion"},"Notion"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Notion source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to read data from Notion."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"method"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"get")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"body"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"json_field"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"content_json"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll_interval_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"100")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_max_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"10000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_multi_lines"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"url-string"},"url ","[String]"),(0,r.yg)("p",null,"http request url"),(0,r.yg)("h3",{id:"password-string"},"password ","[String]"),(0,r.yg)("p",null,"API key for login, you can get more detail at this link:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://developers.notion.com/docs/authorization"},"https://developers.notion.com/docs/authorization")),(0,r.yg)("h3",{id:"version-string"},"version ","[String]"),(0,r.yg)("p",null,"The Notion API is versioned. API versions are named for the date the version is released"),(0,r.yg)("h3",{id:"method-string"},"method ","[String]"),(0,r.yg)("p",null,"http request method, only supports GET, POST method"),(0,r.yg)("h3",{id:"params-map"},"params ","[Map]"),(0,r.yg)("p",null,"http params"),(0,r.yg)("h3",{id:"body-string"},"body ","[String]"),(0,r.yg)("p",null,"http body"),(0,r.yg)("h3",{id:"poll_interval_ms-int"},"poll_interval_ms ","[int]"),(0,r.yg)("p",null,"request http api interval(millis) in stream mode"),(0,r.yg)("h3",{id:"retry-int"},"retry ","[int]"),(0,r.yg)("p",null,"The max retry times if request http return to ",(0,r.yg)("inlineCode",{parentName:"p"},"IOException")),(0,r.yg)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,r.yg)("p",null,"The retry-backoff times(millis) multiplier if request http failed"),(0,r.yg)("h3",{id:"retry_backoff_max_ms-int"},"retry_backoff_max_ms ","[int]"),(0,r.yg)("p",null,"The maximum retry-backoff times(millis) if request http failed"),(0,r.yg)("h3",{id:"format-string"},"format ","[String]"),(0,r.yg)("p",null,"the format of upstream data, now only support ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),", default ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),"."),(0,r.yg)("p",null,"when you assign format is ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option, for example:"),(0,r.yg)("p",null,"upstream data is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": "get success",\n  "success": true\n}\n')),(0,r.yg)("p",null,"you should assign schema as the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,r.yg)("p",null,"connector will generate data as the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"data"),(0,r.yg)("th",{parentName:"tr",align:null},"success"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"get success"),(0,r.yg)("td",{parentName:"tr",align:null},"true")))),(0,r.yg)("p",null,"when you assign format is ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),", connector will do nothing for upstream data, for example:"),(0,r.yg)("p",null,"upstream data is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": "get success",\n  "success": true\n}\n')),(0,r.yg)("p",null,"connector will generate data as the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"content"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'{"code":  200, "data":  "get success", "success":  true}')))),(0,r.yg)("h3",{id:"schema-config"},"schema ","[Config]"),(0,r.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,r.yg)("p",null,"the schema fields of upstream data"),(0,r.yg)("h3",{id:"content_json-string"},"content_json ","[String]"),(0,r.yg)("p",null,"This parameter can get some json data.If you only need the data in the 'book' section, configure ",(0,r.yg)("inlineCode",{parentName:"p"},'content_field = "$.store.book.*"'),"."),(0,r.yg)("p",null,"If your return data looks something like this."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "store": {\n    "book": [\n      {\n        "category": "reference",\n        "author": "Nigel Rees",\n        "title": "Sayings of the Century",\n        "price": 8.95\n      },\n      {\n        "category": "fiction",\n        "author": "Evelyn Waugh",\n        "title": "Sword of Honour",\n        "price": 12.99\n      }\n    ],\n    "bicycle": {\n      "color": "red",\n      "price": 19.95\n    }\n  },\n  "expensive": 10\n}\n')),(0,r.yg)("p",null,"You can configure ",(0,r.yg)("inlineCode",{parentName:"p"},'content_field = "$.store.book.*"')," and the result returned looks like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "category": "reference",\n    "author": "Nigel Rees",\n    "title": "Sayings of the Century",\n    "price": 8.95\n  },\n  {\n    "category": "fiction",\n    "author": "Evelyn Waugh",\n    "title": "Sword of Honour",\n    "price": 12.99\n  }\n]\n')),(0,r.yg)("p",null,"Then you can get the desired result with a simpler schema,like"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'Http {\n  url = "http://mockserver:1080/contentjson/mock"\n  method = "GET"\n  format = "json"\n  content_field = "$.store.book.*"\n  schema = {\n    fields {\n      category = string\n      author = string\n      title = string\n      price = string\n    }\n  }\n}\n')),(0,r.yg)("p",null,"Here is an example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Test data can be found at this link ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/mockserver-config.json"},"mockserver-config.json")),(0,r.yg)("li",{parentName:"ul"},"See this link for task configuration ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/http_contentjson_to_assert.conf"},"http_contentjson_to_assert.conf"),".")),(0,r.yg)("h3",{id:"json_field-config"},"json_field ","[Config]"),(0,r.yg)("p",null,"This parameter helps you configure the schema,so this parameter must be used with schema."),(0,r.yg)("p",null,"If your data looks something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "store": {\n    "book": [\n      {\n        "category": "reference",\n        "author": "Nigel Rees",\n        "title": "Sayings of the Century",\n        "price": 8.95\n      },\n      {\n        "category": "fiction",\n        "author": "Evelyn Waugh",\n        "title": "Sword of Honour",\n        "price": 12.99\n      }\n    ],\n    "bicycle": {\n      "color": "red",\n      "price": 19.95\n    }\n  },\n  "expensive": 10\n}\n')),(0,r.yg)("p",null,"You can get the contents of 'book' by configuring the task as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Http {\n    url = "http://mockserver:1080/jsonpath/mock"\n    method = "GET"\n    format = "json"\n    json_field = {\n      category = "$.store.book[*].category"\n      author = "$.store.book[*].author"\n      title = "$.store.book[*].title"\n      price = "$.store.book[*].price"\n    }\n    schema = {\n      fields {\n        category = string\n        author = string\n        title = string\n        price = string\n      }\n    }\n  }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Test data can be found at this link ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/mockserver-config.json"},"mockserver-config.json")),(0,r.yg)("li",{parentName:"ul"},"See this link for task configuration ",(0,r.yg)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/http_jsonpath_to_assert.conf"},"http_jsonpath_to_assert.conf"),".")),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.2/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'Notion {\n    url = "https://api.notion.com/v1/users"\n    password = "Seatunnel-test"\n    version = "2022-06-28"\n    content_field = "$.results.*"\n    schema = {\n       fields {\n          object = string\n          id = string\n          type = string\n          person = {\n              email = string\n          }\n          avatar_url = string\n       }\n    }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Notion Source Connector")))}u.isMDXComponent=!0}}]);