"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[89430],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||l;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(58168),o=(t(96540),t(15680));const l={sidebar_position:2},a=void 0,i={unversionedId:"seatunnel-engine/local-mode",id:"version-2.3.5/seatunnel-engine/local-mode",title:"local-mode",description:"----------------",source:"@site/versioned_docs/version-2.3.5/seatunnel-engine/local-mode.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/local-mode",permalink:"/docs/2.3.5/seatunnel-engine/local-mode",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.5/seatunnel-engine/local-mode.md",tags:[],version:"2.3.5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"deployment",permalink:"/docs/2.3.5/seatunnel-engine/deployment"},next:{title:"cluster-mode",permalink:"/docs/2.3.5/seatunnel-engine/cluster-mode"}},c={},u=[{value:"Deploy SeaTunnel Engine Local Mode",id:"deploy-seatunnel-engine-local-mode",level:2},{value:"Change SeaTunnel Engine Config",id:"change-seatunnel-engine-config",level:2},{value:"Submit Job",id:"submit-job",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("h1",{id:"run-job-with-local-mode"},"Run Job With Local Mode"),(0,o.yg)("p",null,"Only for test."),(0,o.yg)("p",null,"The most recommended way to use SeaTunnel Engine in the production environment is ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.3.5/seatunnel-engine/cluster-mode"},"Cluster Mode"),"."),(0,o.yg)("h2",{id:"deploy-seatunnel-engine-local-mode"},"Deploy SeaTunnel Engine Local Mode"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/2.3.5/start-v2/locally/deployment"},"Deploy a SeaTunnel Engine Local Mode reference")),(0,o.yg)("h2",{id:"change-seatunnel-engine-config"},"Change SeaTunnel Engine Config"),(0,o.yg)("p",null,"Update the auto-increment to true in the $SEATUNNEL_HOME/config/hazelcast.yaml"),(0,o.yg)("h2",{id:"submit-job"},"Submit Job"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template -e local\n")))}d.isMDXComponent=!0}}]);