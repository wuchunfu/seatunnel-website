"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[94625],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),g=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=g(e.components);return l.createElement(o.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},y=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=g(t),y=a,m=s["".concat(o,".").concat(y)]||s[y]||d[y]||r;return t?l.createElement(m,i(i({ref:n},p),{},{components:t})):l.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=y;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var g=2;g<r;g++)i[g]=t[g];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},72663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>g});var l=t(58168),a=(t(96540),t(15680));const r={},i="Assert",u={unversionedId:"connector-v2/sink/Assert",id:"version-2.3.0-beta/connector-v2/sink/Assert",title:"Assert",description:"Assert sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector-v2/sink/Assert.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Assert",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/Assert",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector-v2/sink/Assert.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Sink",permalink:"/zh-CN/docs/2.3.0-beta/category/sink-v2"},next:{title:"Clickhouse",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/Clickhouse"}},o={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"rules ConfigMap",id:"rules-configmap",level:3},{value:"field_rules ConfigList",id:"field_rules-configlist",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"field_type string",id:"field_type-string",level:3},{value:"field_value ConfigList",id:"field_value-configlist",level:3},{value:"rule_type string",id:"rule_type-string",level:3},{value:"rule_value double",id:"rule_value-double",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],p={toc:g},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,l.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"assert"},"Assert"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Assert sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"A flink sink plugin which can assert illegal data by user defined rules"),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"schema projection"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigMap"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_value"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_value.rule_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_value.rule_value"),(0,a.yg)("td",{parentName:"tr",align:null},"double"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.row_rules"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.row_rules.rule_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.row_rules.rule_value"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"rules-configmap"},"rules ","[ConfigMap]"),(0,a.yg)("p",null,"Rule definition of user's available data.  Each rule represents one field validation or row num validation."),(0,a.yg)("h3",{id:"field_rules-configlist"},"field_rules ","[ConfigList]"),(0,a.yg)("p",null,"field rules for field validation"),(0,a.yg)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,a.yg)("p",null,"field name\uff08string\uff09"),(0,a.yg)("h3",{id:"field_type-string"},"field_type ","[string]"),(0,a.yg)("p",null,"field type (string),  e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"string,boolean,byte,short,int,long,float,double,char,void,BigInteger,BigDecimal,Instant")),(0,a.yg)("h3",{id:"field_value-configlist"},"field_value ","[ConfigList]"),(0,a.yg)("p",null,"A list value rule define the data value validation"),(0,a.yg)("h3",{id:"rule_type-string"},"rule_type ","[string]"),(0,a.yg)("p",null,"The following rules are supported for now"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"NOT_NULL ",(0,a.yg)("inlineCode",{parentName:"li"},"value can't be null")),(0,a.yg)("li",{parentName:"ul"},"MIN ",(0,a.yg)("inlineCode",{parentName:"li"},"define the minimum value of data")),(0,a.yg)("li",{parentName:"ul"},"MAX ",(0,a.yg)("inlineCode",{parentName:"li"},"define the maximum value of data")),(0,a.yg)("li",{parentName:"ul"},"MIN_LENGTH ",(0,a.yg)("inlineCode",{parentName:"li"},"define the minimum string length of a string data")),(0,a.yg)("li",{parentName:"ul"},"MAX_LENGTH ",(0,a.yg)("inlineCode",{parentName:"li"},"define the maximum string length of a string data")),(0,a.yg)("li",{parentName:"ul"},"MIN_ROW ",(0,a.yg)("inlineCode",{parentName:"li"},"define the minimun number of rows")),(0,a.yg)("li",{parentName:"ul"},"MAX_ROW ",(0,a.yg)("inlineCode",{parentName:"li"},"define the maximum number of rows"))),(0,a.yg)("h3",{id:"rule_value-double"},"rule_value ","[double]"),(0,a.yg)("p",null,"the value related to rule type"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"the whole config obey with ",(0,a.yg)("inlineCode",{parentName:"p"},"hocon")," style"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},"Assert {\n    rules =\n      {\n        row_rules = [\n          {\n            rule_type = MAX_ROW\n            rule_value = 10\n          },\n          {\n            rule_type = MIN_ROW\n            rule_value = 5\n          }\n        ],\n        field_rules = [{\n          field_name = name\n          field_type = string\n          field_value = [\n            {\n              rule_type = NOT_NULL\n            },\n            {\n              rule_type = MIN_LENGTH\n              rule_value = 5\n            },\n            {\n              rule_type = MAX_LENGTH\n              rule_value = 10\n            }\n          ]\n        }, {\n          field_name = age\n          field_type = int\n          field_value = [\n            {\n              rule_type = NOT_NULL\n            },\n            {\n              rule_type = MIN\n              rule_value = 32767\n            },\n            {\n              rule_type = MAX\n              rule_value = 2147483647\n            }\n          ]\n        }\n        ]\n      }\n\n  }\n\n")),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Assert Sink Connector")),(0,a.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[Improve]"," 1.Support check the number of rows (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2844"},"2844"),") (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3031"},"3031"),"):",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"check rows not empty"),(0,a.yg)("li",{parentName:"ul"},"check minimum number of rows"),(0,a.yg)("li",{parentName:"ul"},"check maximum number of rows"))),(0,a.yg)("li",{parentName:"ul"},"[Improve]"," 2.Support direct define of data values(row) (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2844"},"2844"),") (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3031"},"3031"),")"),(0,a.yg)("li",{parentName:"ul"},"[Improve]"," 3.Support setting parallelism as 1 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2844"},"2844"),") (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3031"},"3031"),")")))}d.isMDXComponent=!0}}]);