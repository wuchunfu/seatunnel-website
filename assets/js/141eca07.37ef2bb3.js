"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5915],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5463:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),o=["components"],i={},c="Command usage instructions",p={unversionedId:"spark/commands/start-seatunnel-spark.sh",id:"version-2.1.0/spark/commands/start-seatunnel-spark.sh",title:"Command usage instructions",description:"Command usage instructions [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/commands/start-seatunnel-spark.sh.md",sourceDirName:"spark/commands",slug:"/spark/commands/start-seatunnel-spark.sh",permalink:"/docs/2.1.0/spark/commands/start-seatunnel-spark.sh",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/commands/start-seatunnel-spark.sh.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/docs/2.1.0/spark/configuration/transform-plugins/transform-plugin"}},l={},u=[{value:"seatunnel spark start command",id:"seatunnel-spark-start-command",level:2},{value:"usage instructions",id:"usage-instructions",level:3},{value:"Use Cases",id:"use-cases",level:4}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"command-usage-instructions"},"Command usage instructions"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Command usage instructions ","[Spark]")),(0,s.kt)("h2",{id:"seatunnel-spark-start-command"},"seatunnel spark start command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark.sh\n")),(0,s.kt)("h3",{id:"usage-instructions"},"usage instructions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark.sh \\\n-c config-path \\\n-m master \\\n-e deploy-mode \\\n-i city=beijing\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"--config")," to specify the path of the configuration file")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"-m")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"--master")," to specify the cluster manager")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"-e")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"--deploy-mode")," to specify the deployment mode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"--variable")," to specify the variables in the configuration file, you can configure multiple"))),(0,s.kt)("h4",{id:"use-cases"},"Use Cases"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Yarn client mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode client \\\n--config ./config/application.conf\n\n# Yarn cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n")))}d.isMDXComponent=!0}}]);