"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72135],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98914:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={},s="Deployment and run",u={unversionedId:"flink/deployment",id:"version-2.1.0/flink/deployment",title:"Deployment and run",description:"seatunnel For Flink relies on the Java runtime environment and Flink . For detailed seatunnel installation steps, refer to installing seatunnel",source:"@site/versioned_docs/version-2.1.0/flink/deployment.md",sourceDirName:"flink",slug:"/flink/deployment",permalink:"/zh-CN/docs/2.1.0/flink/deployment",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/deployment.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set Up Environment and Run Simple Example",permalink:"/zh-CN/docs/2.1.0/developement/setup"},next:{title:"Download and install",permalink:"/zh-CN/docs/2.1.0/flink/installation"}},p={},c=[{value:"Run seatunnel on Flink Standalone cluster",id:"run-seatunnel-on-flink-standalone-cluster",level:2},{value:"Run seatunnel on Yarn cluster",id:"run-seatunnel-on-yarn-cluster",level:2}],f={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment-and-run"},"Deployment and run"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel For Flink")," relies on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Java")," runtime environment and ",(0,o.kt)("inlineCode",{parentName:"p"},"Flink")," . For detailed ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," installation steps, refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/flink/installation"},"installing seatunnel")),(0,o.kt)("p",null,"The following focuses on how different platforms run:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"First edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," directory after decompression, and specify the required environment configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOME"))),(0,o.kt)("h2",{id:"run-seatunnel-on-flink-standalone-cluster"},"Run seatunnel on Flink Standalone cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n--config config-path\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n--config config-path\n")),(0,o.kt)("h2",{id:"run-seatunnel-on-yarn-cluster"},"Run seatunnel on Yarn cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n--config config-path\n\n# -ynm seatunnel specifies the name displayed in the yarn webUI as seatunnel, you can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n-ynm seatunnel \\\n--config config-path\n")),(0,o.kt)("p",null,"Refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/yarn"},"Flink Yarn Setup")))}d.isMDXComponent=!0}}]);