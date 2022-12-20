"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2488],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54734:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_position:6},l="TCP NetWork",u={unversionedId:"seatunnel-engine/tcp",id:"seatunnel-engine/tcp",title:"TCP NetWork",description:"If multicast is not the preferred way of discovery for your environment, then you can configure SeaTunnel Engine to be a full TCP/IP cluster. When you configure SeaTunnel Engine to discover members by TCP/IP, you must list all or a subset of the members' host names and/or IP addresses as cluster members. You do not have to list all of these cluster members, but at least one of the listed members has to be active in the cluster when a new member joins.",source:"@site/docs/seatunnel-engine/tcp.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/tcp",permalink:"/zh-CN/docs/seatunnel-engine/tcp",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/tcp.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Checkpoint Storage",permalink:"/zh-CN/docs/seatunnel-engine/checkpoint-storage"},next:{title:"flink",permalink:"/zh-CN/docs/other-engine/flink"}},c={},m=[],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tcp-network"},"TCP NetWork"),(0,a.kt)("p",null,"If multicast is not the preferred way of discovery for your environment, then you can configure SeaTunnel Engine to be a full TCP/IP cluster. When you configure SeaTunnel Engine to discover members by TCP/IP, you must list all or a subset of the members' host names and/or IP addresses as cluster members. You do not have to list all of these cluster members, but at least one of the listed members has to be active in the cluster when a new member joins."),(0,a.kt)("p",null,"To configure your Hazelcast to be a full TCP/IP cluster, set the following configuration elements. See the tcp-ip element section for the full descriptions of the TCP/IP discovery configuration elements."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the enabled attribute of the tcp-ip element to true."),(0,a.kt)("li",{parentName:"ul"},"Provide your member elements within the tcp-ip element.")),(0,a.kt)("p",null,"The following is an example declarative configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - machine1\n          - machine2\n          - machine3:5799\n          - 192.168.1.0-7\n          - 192.168.1.21\n")),(0,a.kt)("p",null,"As shown above, you can provide IP addresses or host names for member elements. You can also give a range of IP addresses, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.0-7"),"."),(0,a.kt)("p",null,"Instead of providing members line-by-line as shown above, you also have the option to use the members element and write comma-separated IP addresses, as shown below."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<members>192.168.1.0-7,192.168.1.21</members>")),(0,a.kt)("p",null,"If you do not provide ports for the members, Hazelcast automatically tries the ports ",(0,a.kt)("inlineCode",{parentName:"p"},"5701"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"5702")," and so on."))}f.isMDXComponent=!0}}]);