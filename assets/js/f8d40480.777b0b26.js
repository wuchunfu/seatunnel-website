"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[39397],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:3},s=void 0,l={unversionedId:"seatunnel-engine/deployment",id:"seatunnel-engine/deployment",title:"deployment",description:"----------------",source:"@site/docs/seatunnel-engine/deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/deployment",permalink:"/docs/seatunnel-engine/deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"download-seatunnel",permalink:"/docs/seatunnel-engine/download-seatunnel"},next:{title:"local-mode-deployment",permalink:"/docs/seatunnel-engine/local-mode-deployment"}},i={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"seatunnel-enginezeta-deployment"},"SeaTunnel Engine(Zeta) Deployment"),(0,a.yg)("p",null,"SeaTunnel Engine(Zeta) supports three different deployment modes: local mode, hybrid cluster mode, and separated cluster mode."),(0,a.yg)("p",null,"Each deployment mode has different usage scenarios, advantages, and disadvantages. You should choose a deployment mode according to your needs and environment."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Local mode:")," Only used for testing, each task will start an independent process, and the process will exit after the task is completed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Hybrid cluster mode:")," The Master service and Worker service of SeaTunnel Engine are mixed in the same process. All nodes can run jobs and participate in the election to become the master, that is, the master node is also running synchronous tasks simultaneously. In this mode, Imap (saving the state information of the task to provide support for the fault tolerance of the task) data will be distributed among all nodes."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Separated cluster mode(experimental feature):")," The Master service and Worker service of SeaTunnel Engine are separated, and each service is a single process. The Master node is only responsible for job scheduling, rest api, task submission, etc., and Imap data is only stored in the Master node. The Worker node is only responsible for the execution of the task, does not participate in the election to become the master, and does not store Imap data."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage suggestion:")," Although ",(0,a.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/separated-cluster-deployment"},"Separated Cluster Mode")," is an experimental feature, the first recommended usage will be made in the future. In the hybrid cluster mode, the Master node needs to run tasks synchronously. When the task scale is large, it will affect the stability of the Master node. Once the Master node crashes or the heartbeat times out, it will lead to the switch of the Master node, and the switch of the Master node will cause fault tolerance of all running tasks, which will further increase the load of the cluster. Therefore, we recommend using the separated mode more."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/local-mode-deployment"},"Local Mode Deployment")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/hybrid-cluster-deployment"},"Hybrid Cluster Mode Deployment")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/separated-cluster-deployment"},"Separated Cluster Mode Deployment")))}u.isMDXComponent=!0}}]);