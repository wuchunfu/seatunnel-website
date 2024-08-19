"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[28710],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),m=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),y=a,s=d["".concat(g,".").concat(y)]||d[y]||u[y]||l;return n?r.createElement(s,i(i({ref:t},p),{},{components:n})):r.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},47462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(58168),a=(n(96540),n(15680));const l={},i=void 0,o={unversionedId:"configuration/filter-plugins/Date",id:"version-1.x/configuration/filter-plugins/Date",title:"Date",description:"Filter plugin : Date",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Date.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Date",permalink:"/docs/1.x/configuration/filter-plugins/Date",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Date.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Convert",permalink:"/docs/1.x/configuration/filter-plugins/Convert"},next:{title:"Drop",permalink:"/docs/1.x/configuration/filter-plugins/Drop"}},g={},m=[{value:"Filter plugin : Date",id:"filter-plugin--date",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"default_value string",id:"default_value-string",level:5},{value:"locale string",id:"locale-string",level:5},{value:"source_field string",id:"source_field-string",level:5},{value:"source_time_format string",id:"source_time_format-string",level:5},{value:"target_field string",id:"target_field-string",level:5},{value:"target_time_format string",id:"target_time_format-string",level:5},{value:"time_zone string",id:"time_zone-string",level:5},{value:"Examples",id:"examples",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"filter-plugin--date"},"Filter plugin : Date"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.yg)("li",{parentName:"ul"},"Homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"The date filter is used for parsing dates from specified field."),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#default_value-string"},"default_value")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"${now}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#locale-string"},"locale")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"Locale.US")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"_","_","root","_","_")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#source_time_format-string"},"source_time_format")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"UNIX_MS")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"datetime")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#target_time_format-string"},"target_time_format")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"yyyy/MM/dd HH:mm:ss"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#time_zone-string"},"time_zone")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h5",{id:"default_value-string"},"default_value ","[string]"),(0,a.yg)("p",null,"If the date conversion fails, the current time(",(0,a.yg)("inlineCode",{parentName:"p"},"${now}"),") will be used in the specified format."),(0,a.yg)("h5",{id:"locale-string"},"locale ","[string]"),(0,a.yg)("p",null,"Locale of source field."),(0,a.yg)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,a.yg)("p",null,"Source field, if not configured, the current time will be used."),(0,a.yg)("h5",{id:"source_time_format-string"},"source_time_format ","[string]"),(0,a.yg)("p",null,"Source field time format, currently supports UNIX(10-bit seconds timestamp), UNIX_MS(13-bit millisecond timestamp) and ",(0,a.yg)("inlineCode",{parentName:"p"},"SimpleDateFormat")," format. The commonly used time formats are listed below:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"y"),(0,a.yg)("td",{parentName:"tr",align:null},"Year")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"M"),(0,a.yg)("td",{parentName:"tr",align:null},"Month")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"d"),(0,a.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"H"),(0,a.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"m"),(0,a.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"s"),(0,a.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,a.yg)("p",null,"The detailed time format syntax:",(0,a.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat"),"."),(0,a.yg)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,a.yg)("p",null,"Target field, default is ",(0,a.yg)("inlineCode",{parentName:"p"},"datetime"),"."),(0,a.yg)("h5",{id:"target_time_format-string"},"target_time_format ","[string]"),(0,a.yg)("p",null,"Target field time format, The detailed time format syntax:",(0,a.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat"),"."),(0,a.yg)("h5",{id:"time_zone-string"},"time_zone ","[string]"),(0,a.yg)("p",null,"Timezone of source field"),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'date {\n    source_field = "timestamp"\n    target_field = "date"\n    source_time_format = "UNIX"\n    target_time_format = "yyyy/MM/dd"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Convert the ",(0,a.yg)("inlineCode",{parentName:"p"},"timestamp")," field from UNIX timestamp to the ",(0,a.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd")," format.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'date {\n    source_field = "httpdate"\n    target_field = "datetime"\n    source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n    target_time_format = "yyyy/MM/dd HH:mm:ss"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Convert the ",(0,a.yg)("inlineCode",{parentName:"p"},"httpdate")," field from ",(0,a.yg)("inlineCode",{parentName:"p"},"dd/MMM/yyyy:HH:mm:ss Z")," format to the ",(0,a.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd HH:mm:ss")," format")))}u.isMDXComponent=!0}}]);