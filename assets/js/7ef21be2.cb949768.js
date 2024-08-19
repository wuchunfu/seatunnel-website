"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26287],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},67893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={},i="How To Add New License",l={unversionedId:"contribution/new-license",id:"version-2.3.5/contribution/new-license",title:"How To Add New License",description:"ASF 3RD PARTY LICENSE POLICY",source:"@site/versioned_docs/version-2.3.5/contribution/new-license.md",sourceDirName:"contribution",slug:"/contribution/new-license",permalink:"/docs/2.3.5/contribution/new-license",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.5/contribution/new-license.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"Set Up Develop Environment",permalink:"/docs/2.3.5/contribution/setup"},next:{title:"Coding guide",permalink:"/docs/2.3.5/contribution/coding-guide"}},s={},c=[{value:"ASF 3RD PARTY LICENSE POLICY",id:"asf-3rd-party-license-policy",level:3},{value:"How to Legally Use 3rd Party Open-source Software in the SeaTunnel",id:"how-to-legally-use-3rd-party-open-source-software-in-the-seatunnel",level:3},{value:"SeaTunnel-License Check Rules",id:"seatunnel-license-check-rules",level:3},{value:"References",id:"references",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"how-to-add-new-license"},"How To Add New License"),(0,o.yg)("h3",{id:"asf-3rd-party-license-policy"},"ASF 3RD PARTY LICENSE POLICY"),(0,o.yg)("p",null,"You have to pay attention to the following open-source software protocols which Apache projects support when you intend to add a new feature to the SeaTunnel (or other Apache projects), which functions refers to other open-source software references."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY")),(0,o.yg)("p",null,"If the 3rd party software is not present at the above policy, we could't that accept your code."),(0,o.yg)("h3",{id:"how-to-legally-use-3rd-party-open-source-software-in-the-seatunnel"},"How to Legally Use 3rd Party Open-source Software in the SeaTunnel"),(0,o.yg)("p",null,"Moreover, when we intend to refer a new software ( not limited to 3rd party jar, text, CSS, js, pics, icons, audios etc and modifications based on 3rd party files) to our project, we need to use them legally in addition to the permission of ASF. Refer to the following article:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"'))),(0,o.yg)("p",null,'For example, we should contain the NOTICE file (most of open-source project has NOTICE file, generally under root directory) of ZooKeeper in our project when we are using ZooKeeper. As the Apache explains, "Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work.'),(0,o.yg)("p",null,"We are not going to dive into every 3rd party open-source license policy in here, you may look up them if interested."),(0,o.yg)("h3",{id:"seatunnel-license-check-rules"},"SeaTunnel-License Check Rules"),(0,o.yg)("p",null,"In general, we would have our License-check scripts to our project. SeaTunnel-License-Check is provided by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},"SkyWalking")," which differ a bit from other open-source projects. All in all, we are trying to make sure avoiding the license issues at the first time."),(0,o.yg)("p",null,"We need to follow the following steps when we need to add new jars or external resources:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add the name and the version of the jar file in the known-dependencies.txt"),(0,o.yg)("li",{parentName:"ul"},"Add relevant maven repository address under 'seatunnel-dist/release-docs/LICENSE' directory"),(0,o.yg)("li",{parentName:"ul"},"Append relevant NOTICE files under 'seatunnel-dist/release-docs/NOTICE' directory and make sure they are no different to the original repository"),(0,o.yg)("li",{parentName:"ul"},"Add relevant source code protocols under 'seatunnel-dist/release-docs/licenses' directory and the file name should be named as license+filename.txt. Eg: license-zk.txt"),(0,o.yg)("li",{parentName:"ul"},"check dependency license fail")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"--- /dev/fd/63 2020-12-03 03:08:57.191579482 +0000\n+++ /dev/fd/62 2020-12-03 03:08:57.191579482 +0000\n@@ -1,0 +2 @@\n+HikariCP-java6-2.3.13.jar\n@@ -16,0 +18 @@\n+c3p0-0.9.5.2.jar\n@@ -149,0 +152 @@\n+mchange-commons-java-0.2.11.jar\n\n- commons-lang-2.1.3.jar\nError: Process completed with exit code 1.\n")),(0,o.yg)("p",null,"Generally speaking, the work of adding a jar is often not so easy to end, because it often depends on various other jars, and we also need to add corresponding licenses for these jars. In this case, we will get the error message of check dependency license fail in check. As above, we are missing the license declaration of ",(0,o.yg)("inlineCode",{parentName:"p"},"HikariCP-java6-2.3.13"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"c3p0"),", etc. (",(0,o.yg)("inlineCode",{parentName:"p"},"+")," means new, ",(0,o.yg)("inlineCode",{parentName:"p"},"-")," means need to delete ), follow the steps to add jar to add"),(0,o.yg)("h3",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY"))))}u.isMDXComponent=!0}}]);