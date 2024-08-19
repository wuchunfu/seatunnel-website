"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[19206],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,y=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},47430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:10},i=void 0,l={unversionedId:"seatunnel-engine/tcp",id:"version-2.3.6/seatunnel-engine/tcp",title:"tcp",description:"-----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/seatunnel-engine/tcp.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/tcp",permalink:"/zh-CN/docs/2.3.6/seatunnel-engine/tcp",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/seatunnel-engine/tcp.md",tags:[],version:"2.3.6",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docs",previous:{title:"engine-jar-storage-mode",permalink:"/zh-CN/docs/2.3.6/seatunnel-engine/engine-jar-storage-mode"},next:{title:"resource-isolation",permalink:"/zh-CN/docs/2.3.6/seatunnel-engine/resource-isolation"}},c={},p=[],s={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"tcp-network"},"TCP NetWork"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u7684\u73af\u5883\u4e2d\u591a\u64ad\u4e0d\u662f\u9996\u9009\u7684\u53d1\u73b0\u65b9\u5f0f\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u5c06 SeaTunnel \u5f15\u64ce\u914d\u7f6e\u4e3a\u4e00\u4e2a\u5b8c\u6574\u7684 TCP/IP \u96c6\u7fa4\u3002\u5f53\u60a8\u901a\u8fc7 TCP/IP \u914d\u7f6e SeaTunnel \u5f15\u64ce\u4ee5\u53d1\u73b0\u6210\u5458\u65f6\uff0c\u60a8\u5fc5\u987b\u5c06\u6240\u6709\u6216\u4e00\u90e8\u5206\u6210\u5458\u7684\u4e3b\u673a\u540d\u548c/\u6216 IP \u5730\u5740\u5217\u4e3a\u96c6\u7fa4\u6210\u5458\u3002\u60a8\u4e0d\u5fc5\u5217\u51fa\u6240\u6709\u8fd9\u4e9b\u96c6\u7fa4\u6210\u5458\uff0c\u4f46\u5728\u65b0\u6210\u5458\u52a0\u5165\u65f6\uff0c\u81f3\u5c11\u6709\u4e00\u4e2a\u5217\u51fa\u7684\u6210\u5458\u5fc5\u987b\u662f\u6d3b\u8dc3\u7684\u3002"),(0,a.yg)("p",null,"\u8981\u914d\u7f6e\u60a8\u7684 Hazelcast \u4f5c\u4e3a\u4e00\u4e2a\u5b8c\u6574\u7684 TCP/IP \u96c6\u7fa4\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u914d\u7f6e\u5143\u7d20\u3002\u6709\u5173 TCP/IP \u53d1\u73b0\u914d\u7f6e\u5143\u7d20\u7684\u5b8c\u6574\u63cf\u8ff0\uff0c\u8bf7\u53c2\u89c1 tcp-ip \u5143\u7d20\u90e8\u5206\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5c06 tcp-ip \u5143\u7d20\u7684 enabled \u5c5e\u6027\u8bbe\u7f6e\u4e3a true\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5728 tcp-ip \u5143\u7d20\u5185\u63d0\u4f9b\u60a8\u7684\u6210\u5458\u5143\u7d20\u3002")),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\u58f0\u660e\u6027\u914d\u7f6e\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - machine1\n          - machine2\n          - machine3:5799\n          - 192.168.1.0-7\n          - 192.168.1.21\n")),(0,a.yg)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6210\u5458\u5143\u7d20\u63d0\u4f9b IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002\u60a8\u8fd8\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a IP \u5730\u5740\u8303\u56f4\uff0c\u4f8b\u5982 ",(0,a.yg)("inlineCode",{parentName:"p"},"192.168.1.0-7"),"."),(0,a.yg)("p",null,"\u9664\u4e86\u50cf\u4e0a\u9762\u5c55\u793a\u7684\u90a3\u6837\u9010\u884c\u63d0\u4f9b\u6210\u5458\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 members \u5143\u7d20\u5e76\u5199\u5165\u9017\u53f7\u5206\u9694\u7684 IP \u5730\u5740\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"<members>192.168.1.0-7,192.168.1.21</members>")),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u4e3a\u6210\u5458\u63d0\u4f9b\u7aef\u53e3\uff0cHazelcast \u4f1a\u81ea\u52a8\u5c1d\u8bd5\u7aef\u53e3 ",(0,a.yg)("inlineCode",{parentName:"p"},"5701"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"5702")," \u7b49\u3002"))}m.isMDXComponent=!0}}]);