"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6525],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2075:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},s="Neo4j",u={unversionedId:"connector-v2/sink/Neo4j",id:"connector-v2/sink/Neo4j",title:"Neo4j",description:"Neo4j sink connector",source:"@site/docs/connector-v2/sink/Neo4j.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Neo4j",permalink:"/docs/connector-v2/sink/Neo4j",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Neo4j.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MongoDb",permalink:"/docs/connector-v2/sink/MongoDB"},next:{title:"OssFile",permalink:"/docs/connector-v2/sink/OssFile"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"bearer_token string",id:"bearer_token-string",level:3},{value:"kerberos_ticket string",id:"kerberos_ticket-string",level:3},{value:"database string",id:"database-string",level:3},{value:"query string",id:"query-string",level:3},{value:"queryParamPosition object",id:"queryparamposition-object",level:3},{value:"max_transaction_retry_time long",id:"max_transaction_retry_time-long",level:3},{value:"max_connection_timeout long",id:"max_connection_timeout-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],m={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"neo4j"},"Neo4j"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Neo4j sink connector")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Write data to Neo4j. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"neo4j-java-driver")," version 4.4.9"),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uri"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"username"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"password"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bearer_token"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kerberos_ticket"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"database"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"query"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryParamPosition"),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"max_transaction_retry_time"),(0,o.kt)("td",{parentName:"tr",align:null},"Long"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"max_connection_timeout"),(0,o.kt)("td",{parentName:"tr",align:null},"Long"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"uri-string"},"uri ","[string]"),(0,o.kt)("p",null,"The URI of the Neo4j database. Refer to a case: ",(0,o.kt)("inlineCode",{parentName:"p"},"neo4j://localhost:7687")),(0,o.kt)("h3",{id:"username-string"},"username ","[string]"),(0,o.kt)("p",null,"username of the Neo4j"),(0,o.kt)("h3",{id:"password-string"},"password ","[string]"),(0,o.kt)("p",null,"password of the Neo4j. required if ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," is provided"),(0,o.kt)("h3",{id:"bearer_token-string"},"bearer_token ","[string]"),(0,o.kt)("p",null,"base64 encoded bearer token of the Neo4j. for Auth. "),(0,o.kt)("h3",{id:"kerberos_ticket-string"},"kerberos_ticket ","[string]"),(0,o.kt)("p",null,"base64 encoded kerberos ticket of the Neo4j. for Auth."),(0,o.kt)("h3",{id:"database-string"},"database ","[string]"),(0,o.kt)("p",null,"database name."),(0,o.kt)("h3",{id:"query-string"},"query ","[string]"),(0,o.kt)("p",null,"Query statement. contain parameter placeholders that are substituted with the corresponding values at runtime"),(0,o.kt)("h3",{id:"queryparamposition-object"},"queryParamPosition ","[object]"),(0,o.kt)("p",null,"position mapping information for query parameters."),(0,o.kt)("p",null,"key name is parameter placeholder name."),(0,o.kt)("p",null,"associated value is position of field in input data row. "),(0,o.kt)("h3",{id:"max_transaction_retry_time-long"},"max_transaction_retry_time ","[long]"),(0,o.kt)("p",null,"maximum transaction retry time(seconds). transaction fail if exceeded"),(0,o.kt)("h3",{id:"max_connection_timeout-long"},"max_connection_timeout ","[long]"),(0,o.kt)("p",null,"The maximum amount of time to wait for a TCP connection to be established (seconds)"),(0,o.kt)("h3",{id:"common-options"},"common options"),(0,o.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sink {\n  Neo4j {\n    uri = "neo4j://localhost:7687"\n    username = "neo4j"\n    password = "1234"\n    database = "neo4j"\n\n    max_transaction_retry_time = 10\n    max_connection_timeout = 10\n\n    query = "CREATE (a:Person {name: $name, age: $age})"\n    queryParamPosition = {\n        name = 0\n        age = 1\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Neo4j Sink Connector")))}d.isMDXComponent=!0}}]);