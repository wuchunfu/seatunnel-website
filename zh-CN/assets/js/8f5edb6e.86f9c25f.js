"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6817],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77742:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},l="JobEnvConfig",u={unversionedId:"concept/JobEnvConfig",id:"concept/JobEnvConfig",title:"JobEnvConfig",description:"This document describes env configuration information,env unifies the environment variables of all engines.",source:"@site/docs/concept/JobEnvConfig.md",sourceDirName:"concept",slug:"/concept/JobEnvConfig",permalink:"/zh-CN/docs/concept/JobEnvConfig",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/JobEnvConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Intro to schema feature",permalink:"/zh-CN/docs/concept/schema-feature"},next:{title:"Connector Release Status",permalink:"/zh-CN/docs/Connector-v2-release-state"}},p={},s=[{value:"job.name",id:"jobname",level:2},{value:"jars",id:"jars",level:2},{value:"job.mode",id:"jobmode",level:2},{value:"checkpoint.interval",id:"checkpointinterval",level:2},{value:"parallelism",id:"parallelism",level:2}],f={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jobenvconfig"},"JobEnvConfig"),(0,i.kt)("p",null,"This document describes env configuration information,env unifies the environment variables of all engines."),(0,i.kt)("h2",{id:"jobname"},"job.name"),(0,i.kt)("p",null,"This parameter configures the task name."),(0,i.kt)("h2",{id:"jars"},"jars"),(0,i.kt)("p",null,"Third-party packages can be loaded via ",(0,i.kt)("inlineCode",{parentName:"p"},"jars"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},'jars="file://local/jar1.jar;file://local/jar2.jar"')),(0,i.kt)("h2",{id:"jobmode"},"job.mode"),(0,i.kt)("p",null,"You can configure whether the task is in batch mode or stream mode through ",(0,i.kt)("inlineCode",{parentName:"p"},"job.mode"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},'job.mode = "BATCH"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'job.mode = "STREAMING"')),(0,i.kt)("h2",{id:"checkpointinterval"},"checkpoint.interval"),(0,i.kt)("p",null,"Gets the interval in which checkpoints are periodically scheduled."),(0,i.kt)("h2",{id:"parallelism"},"parallelism"),(0,i.kt)("p",null,"This parameter configures the parallelism of source and sink."))}m.isMDXComponent=!0}}]);