"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[239],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return t?o.createElement(g,a(a({ref:n},s),{},{components:t})):o.createElement(g,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1720:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],l={},u="Config Examples",c={unversionedId:"flink/configuration/ConfigExamples",id:"flink/configuration/ConfigExamples",title:"Config Examples",description:"Full configuration file example [Flink]",source:"@site/docs/flink/configuration/ConfigExamples.md",sourceDirName:"flink/configuration",slug:"/flink/configuration/ConfigExamples",permalink:"/zh-CN/docs/flink/configuration/ConfigExamples",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/configuration/ConfigExamples.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command usage instructions",permalink:"/zh-CN/docs/flink/commands/start-seatunnel-flink.sh"},next:{title:"Console",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Console"}},s=[],f={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config-examples"},"Config Examples"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Full configuration file example ","[Flink]")),(0,i.kt)("p",null,"An example is as follows:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In the configuration, the behavior comment beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'######\n###### This config file is a demonstration of streaming processing in seatunnel config\n######\n\nenv {\n    # You can set flink configuration here\n    execution.parallelism = 1\n    #execution.checkpoint.interval = 10000\n    #execution.checkpoint.data-uri = "hdfs://localhost:9000/checkpoint"\n}\n\nsource {\n    # This is a example source plugin **only for test and demonstrate the feature source plugin**\n    FakeSourceStream {\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n\n    # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n    # please go to https://seatunnel.apache.org/docs/flink/configuration/source-plugins/Fake\n}\n\ntransform {\n    sql {\n      sql = "select name,age from fake"\n    }\n\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/flink/configuration/transform-plugins/Sql\n}\n\nsink {\n    ConsoleSink {}\n\n    # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n    # please go to https://seatunnel.apache.org/docs/flink/configuration/sink-plugins/Console\n}\n')),(0,i.kt)("p",null,"If you want to know the details of this format configuration, Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"."))}p.isMDXComponent=!0}}]);