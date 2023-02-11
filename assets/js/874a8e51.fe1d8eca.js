"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3699],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,v=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={sidebar_position:5},u=void 0,p={unversionedId:"seatunnel-engine/savepoint",id:"seatunnel-engine/savepoint",title:"savepoint",description:"----------------",source:"@site/docs/seatunnel-engine/savepoint.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/savepoint",permalink:"/docs/seatunnel-engine/savepoint",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/savepoint.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5}},c={},l=[{value:"use savepoint",id:"use-savepoint",level:2},{value:"use restore with savepoint",id:"use-restore-with-savepoint",level:2}],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"savepoint-and-restore-with-savepoint"},"savepoint and restore with savepoint"),(0,i.kt)("p",null,"savepoint is created using the checkpoint. a global mirror of job execution status, which can be used for job or seatunnel stop and recovery, upgrade, etc."),(0,i.kt)("h2",{id:"use-savepoint"},"use savepoint"),(0,i.kt)("p",null,"To use savepoint, you need to ensure that the connector used by the job supports checkpoint, otherwise data may be lost or duplicated."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure the job is running")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the following command to trigger savepoint:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"./bin/seatunnel.sh -s {jobId}")))),(0,i.kt)("p",null,"After successful execution, the checkpoint data will be saved and the task will end."),(0,i.kt)("h2",{id:"use-restore-with-savepoint"},"use restore with savepoint"),(0,i.kt)("p",null,"Resume from savepoint using jobId",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"./bin/seatunnel.sh -c {jobConfig} -r {jobId}")))}d.isMDXComponent=!0}}]);