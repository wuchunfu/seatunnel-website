"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[31934],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=g(n),y=a,d=u["".concat(p,".").concat(y)]||u[y]||c[y]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},46650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const l={},i="Iceberg",o={unversionedId:"spark/configuration/sink-plugins/Iceberg",id:"version-2.1.0/spark/configuration/sink-plugins/Iceberg",title:"Iceberg",description:"Sink plugin: Iceberg [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Iceberg.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Iceberg",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Iceberg",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Iceberg.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Hudi"},next:{title:"Jdbc",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Jdbc"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"path",id:"path",level:3},{value:"saveMode",id:"savemode",level:3},{value:"target-file-size-bytes",id:"target-file-size-bytes",level:3},{value:"check-nullability",id:"check-nullability",level:3},{value:"snapshot-property.custom-key",id:"snapshot-propertycustom-key",level:3},{value:"fanout-enabled",id:"fanout-enabled",level:3},{value:"check-ordering",id:"check-ordering",level:3},{value:"Example",id:"example",level:2}],s={toc:g},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"iceberg"},"Iceberg"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Sink plugin: Iceberg ","[Spark]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Write data to Iceberg."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#path"},"path")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#saveMode"},"saveMode")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"append")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#target-file-size-bytes"},"target-file-size-bytes")),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#check-nullability"},"check-nullability")),(0,a.yg)("td",{parentName:"tr",align:null},"bool"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#snapshot-property.custom-key"},"snapshot-property.custom-key")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#fanout-enabled"},"fanout-enabled")),(0,a.yg)("td",{parentName:"tr",align:null},"bool"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#check-ordering"},"check-ordering")),(0,a.yg)("td",{parentName:"tr",align:null},"bool"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("p",null,"Refer to ",(0,a.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/spark-configuration/"},"iceberg write options")," for more configurations."),(0,a.yg)("h3",{id:"path"},"path"),(0,a.yg)("p",null,"Iceberg table location."),(0,a.yg)("h3",{id:"savemode"},"saveMode"),(0,a.yg)("p",null,"append or overwrite. Only these two modes are supported by iceberg. The default value is append."),(0,a.yg)("h3",{id:"target-file-size-bytes"},"target-file-size-bytes"),(0,a.yg)("p",null,"Overrides this table\u2019s write.target-file-size-bytes"),(0,a.yg)("h3",{id:"check-nullability"},"check-nullability"),(0,a.yg)("p",null,"Sets the nullable check on fields"),(0,a.yg)("h3",{id:"snapshot-propertycustom-key"},"snapshot-property.custom-key"),(0,a.yg)("p",null,'Adds an entry with custom-key and corresponding value in the snapshot summary\neg: snapshot-property.aaaa="bbbb"'),(0,a.yg)("h3",{id:"fanout-enabled"},"fanout-enabled"),(0,a.yg)("p",null,"Overrides this table\u2019s write.spark.fanout.enabled"),(0,a.yg)("h3",{id:"check-ordering"},"check-ordering"),(0,a.yg)("p",null,"Checks if input schema and table schema are same"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'iceberg {\n    path = "hdfs://localhost:9000/iceberg/warehouse/db/table"\n  }\n')))}c.isMDXComponent=!0}}]);