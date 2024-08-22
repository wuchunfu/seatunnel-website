"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[36726],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,y=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},87732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(58168),o=(n(96540),n(15680));const a={sidebar_position:8},i="Savepoint And Restore With Savepoint",s={unversionedId:"seatunnel-engine/savepoint",id:"seatunnel-engine/savepoint",title:"Savepoint And Restore With Savepoint",description:"Savepoint is created for using the checkpoint. A global mirror of job execution status can be used for job or seatunnel stop and recovery, upgrade, etc.",source:"@site/docs/seatunnel-engine/savepoint.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/savepoint",permalink:"/docs/seatunnel-engine/savepoint",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/savepoint.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"Deploy SeaTunnel Engine In Separated Cluster Mode",permalink:"/docs/seatunnel-engine/separated-cluster-deployment"},next:{title:"Checkpoint Storage",permalink:"/docs/seatunnel-engine/checkpoint-storage"}},p={},l=[{value:"Use Savepoint",id:"use-savepoint",level:2},{value:"Use Restore With Savepoint",id:"use-restore-with-savepoint",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"savepoint-and-restore-with-savepoint"},"Savepoint And Restore With Savepoint"),(0,o.yg)("p",null,"Savepoint is created for using the checkpoint. A global mirror of job execution status can be used for job or seatunnel stop and recovery, upgrade, etc."),(0,o.yg)("h2",{id:"use-savepoint"},"Use Savepoint"),(0,o.yg)("p",null,"To use savepoint, you need to ensure that the connector used by the job supports checkpoint, otherwise data may be lost or duplicated."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Make sure the job is running")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use the following command to trigger savepoint:",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"./bin/seatunnel.sh -s {jobId}")))),(0,o.yg)("p",null,"After successful execution, the checkpoint data will be saved and the task will end."),(0,o.yg)("h2",{id:"use-restore-with-savepoint"},"Use Restore With Savepoint"),(0,o.yg)("p",null,"Resume from savepoint using jobId",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"./bin/seatunnel.sh -c {jobConfig} -r {jobId}")))}d.isMDXComponent=!0}}]);