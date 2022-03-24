"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6058],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4744:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={},d="Hudi",u={unversionedId:"spark/configuration/source-plugins/Hudi",id:"spark/configuration/source-plugins/Hudi",title:"Hudi",description:"Source plugin: Hudi [Spark]",source:"@site/docs/spark/configuration/source-plugins/Hudi.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Hudi",permalink:"/docs/spark/configuration/source-plugins/Hudi",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/source-plugins/Hudi.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/spark/configuration/source-plugins/Hive"},next:{title:"Iceberg",permalink:"/docs/spark/configuration/source-plugins/Iceberg"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hoodie.datasource.read.paths",id:"hoodiedatasourcereadpaths",level:3},{value:"hoodie.file.index.enable",id:"hoodiefileindexenable",level:3},{value:"hoodie.datasource.read.end.instanttime",id:"hoodiedatasourcereadendinstanttime",level:3},{value:"hoodie.datasource.write.precombine.field",id:"hoodiedatasourcewriteprecombinefield",level:3},{value:"hoodie.datasource.read.incr.filters",id:"hoodiedatasourcereadincrfilters",level:3},{value:"hoodie.datasource.merge.type",id:"hoodiedatasourcemergetype",level:3},{value:"hoodie.datasource.read.begin.instanttime",id:"hoodiedatasourcereadbegininstanttime",level:3},{value:"hoodie.enable.data.skipping",id:"hoodieenabledataskipping",level:3},{value:"as.of.instant",id:"asofinstant",level:3},{value:"hoodie.datasource.query.type",id:"hoodiedatasourcequerytype",level:3},{value:"hoodie.datasource.read.schema.use.end.instanttime",id:"hoodiedatasourcereadschemauseendinstanttime",level:3},{value:"Example",id:"example",level:2}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hudi"},"Hudi"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source plugin: Hudi ","[Spark]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Read data from Hudi."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadpaths"},"hoodie.datasource.read.paths")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiefileindexenable"},"hoodie.file.index.enable")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadendinstanttime"},"hoodie.datasource.read.end.instanttime")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcewriteprecombinefield"},"hoodie.datasource.write.precombine.field")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadincrfilters"},"hoodie.datasource.read.incr.filters")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcemergetype"},"hoodie.datasource.merge.type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadbegininstanttime"},"hoodie.datasource.read.begin.instanttime")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodieenabledataskipping"},"hoodie.enable.data.skipping")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#asofinstant"},"as.of.instant")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcequerytype"},"hoodie.datasource.query.type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hoodiedatasourcereadschemauseendinstanttime"},"hoodie.datasource.read.schema.use.end.instanttime")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#Read-Options"},"hudi read options")," for configurations."),(0,i.kt)("h3",{id:"hoodiedatasourcereadpaths"},"hoodie.datasource.read.paths"),(0,i.kt)("p",null,"Comma separated list of file paths to read within a Hudi table."),(0,i.kt)("h3",{id:"hoodiefileindexenable"},"hoodie.file.index.enable"),(0,i.kt)("p",null,"Enables use of the spark file index implementation for Hudi, that speeds up listing of large tables."),(0,i.kt)("h3",{id:"hoodiedatasourcereadendinstanttime"},"hoodie.datasource.read.end.instanttime"),(0,i.kt)("p",null,"Instant time to limit incrementally fetched data to. New data written with an instant_time <= END_INSTANTTIME are fetched out."),(0,i.kt)("h3",{id:"hoodiedatasourcewriteprecombinefield"},"hoodie.datasource.write.precombine.field"),(0,i.kt)("p",null,"Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)"),(0,i.kt)("h3",{id:"hoodiedatasourcereadincrfilters"},"hoodie.datasource.read.incr.filters"),(0,i.kt)("p",null,"For use-cases like DeltaStreamer which reads from Hoodie Incremental table and applies opaque map functions, filters appearing late in the sequence of transformations cannot be automatically pushed down. This option allows setting filters directly on Hoodie Source."),(0,i.kt)("h3",{id:"hoodiedatasourcemergetype"},"hoodie.datasource.merge.type"),(0,i.kt)("p",null,"For Snapshot query on merge on read table, control whether we invoke the record payload implementation to merge (payload_combine) or skip merging altogetherskip_merge"),(0,i.kt)("h3",{id:"hoodiedatasourcereadbegininstanttime"},"hoodie.datasource.read.begin.instanttime"),(0,i.kt)("p",null,"Instant time to start incrementally pulling data from. The instanttime here need not necessarily correspond to an instant on the timeline. New data written with an instant_time > BEGIN_INSTANTTIME are fetched out. For e.g: \u201820170901080000\u2019 will get all new data written after Sep 1, 2017 08:00AM."),(0,i.kt)("h3",{id:"hoodieenabledataskipping"},"hoodie.enable.data.skipping"),(0,i.kt)("p",null,"enable data skipping to boost query after doing z-order optimize for current table"),(0,i.kt)("h3",{id:"asofinstant"},"as.of.instant"),(0,i.kt)("p",null,"The query instant for time travel. Without specified this option, we query the latest snapshot."),(0,i.kt)("h3",{id:"hoodiedatasourcequerytype"},"hoodie.datasource.query.type"),(0,i.kt)("p",null,"Whether data needs to be read, in incremental mode (new data since an instantTime) (or) Read Optimized mode (obtain latest view, based on base files) (or) Snapshot mode (obtain latest view, by merging base and (if any) log files)"),(0,i.kt)("h3",{id:"hoodiedatasourcereadschemauseendinstanttime"},"hoodie.datasource.read.schema.use.end.instanttime"),(0,i.kt)("p",null,"Uses end instant schema when incrementally fetched data to. Default: users latest instant schema."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'hudi {\n    hoodie.datasource.read.paths = "hdfs://"\n}\n')))}m.isMDXComponent=!0}}]);