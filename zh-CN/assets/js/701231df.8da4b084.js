"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92509],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return a?t.createElement(m,o(o({ref:n},c),{},{components:a})):t.createElement(m,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>o});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},n)}},11470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(58168),r=a(96540),l=a(20053),o=a(23104),i=a(56347),s=a(57485),u=a(31682),c=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function d(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??p(a);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[s,u]=m({queryString:a,groupId:t}),[p,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),h=(()=>{const e=s??p;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var h=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),t=u[a].value;t!==i&&(p(n),s(t))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},u.map((e=>{let{value:n,label:a,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:g,onClick:d},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===n})}),a??n)})))}function v(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function w(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,t.A)({},e,n)),r.createElement(v,(0,t.A)({},e,n)))}function k(e){const n=(0,h.A)();return r.createElement(w,(0,t.A)({key:String(n)},e))}},7102:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=a(58168),r=(a(96540),a(15680)),l=a(11470),o=a(19365);const i={sidebar_position:2},s="Set Up with Locally",u={unversionedId:"start/local",id:"version-2.3.0-beta/start/local",title:"Set Up with Locally",description:"Prepare",source:"@site/versioned_docs/version-2.3.0-beta/start/local.mdx",sourceDirName:"start",slug:"/start/local",permalink:"/zh-CN/docs/2.3.0-beta/start/local",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/start/local.mdx",tags:[],version:"2.3.0-beta",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Quick Start",permalink:"/zh-CN/docs/2.3.0-beta/category/start"},next:{title:"Set Up with Docker",permalink:"/zh-CN/docs/2.3.0-beta/start/docker"}},c={},p=[{value:"Prepare",id:"prepare",level:2},{value:"Installation",id:"installation",level:2},{value:"Install connectors plugin",id:"install-connectors-plugin",level:2},{value:"Run SeaTunnel Application",id:"run-seatunnel-application",level:2},{value:"Explore More Build-in Examples",id:"explore-more-build-in-examples",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],d={toc:p},g="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"set-up-with-locally"},"Set Up with Locally"),(0,r.yg)("h2",{id:"prepare"},"Prepare"),(0,r.yg)("p",null,"Before you getting start the local run, you need to make sure you already have installed the following software which SeaTunnel required:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (Java 8 or 11, other versions greater than Java 8 can theoretically work as well) installed and ",(0,r.yg)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,r.yg)("li",{parentName:"ul"},"Download the engine, you can choose and download one of them from below as your favour, you could see more information about ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/faq#why-i-should-install-computing-engine-like-spark-or-flink"},"why we need engine in SeaTunnel"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Spark: Please ",(0,r.yg)("a",{parentName:"li",href:"https://spark.apache.org/downloads.html"},"download Spark")," first(",(0,r.yg)("strong",{parentName:"li"},"required version >= 2 and version < 3.x "),"). For more information you could\nsee ",(0,r.yg)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/spark-standalone.html#installing-spark-standalone-to-a-cluster"},"Getting Started: standalone")),(0,r.yg)("li",{parentName:"ul"},"Flink: Please ",(0,r.yg)("a",{parentName:"li",href:"https://flink.apache.org/downloads.html"},"download Flink")," first(",(0,r.yg)("strong",{parentName:"li"},"required version >= 1.12.0 and version < 1.14.x "),"). For more information you could see ",(0,r.yg)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/standalone/overview/"},"Getting Started: standalone"))))),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Enter the ",(0,r.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"seatunnel download page")," and download the latest version of distribute\npackage ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-<version>-bin.tar.gz")),(0,r.yg)("p",null,"Or you can download it by terminal"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'export version="2.1.0"\nwget "https://archive.apache.org/dist/incubator/seatunnel/${version}/apache-seatunnel-incubating-${version}-bin.tar.gz"\ntar -xzvf "apache-seatunnel-incubating-${version}-bin.tar.gz"\n')),(0,r.yg)("h2",{id:"install-connectors-plugin"},"Install connectors plugin"),(0,r.yg)("p",null,"Since 2.3.0-beta, the binary package does not provide connector dependencies by default, so when using it for the first time, we need to execute the following command to install the connector: (Of course, you can also manually download the connector from ","[Apache Maven Repository]","(",(0,r.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/seatunnel/"},"https://repo.maven.apache.org/maven2/org/apache/seatunnel/")," to download, then manually move to the connectors directory)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh\n")),(0,r.yg)("p",null,"If you need to specify the version of the connector, take 2.3.0-beta as an example, we need to execute"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh 2.3.0-beta\n")),(0,r.yg)("p",null,"Usually we don't need all the connector plugins, so you can specify the plugins you need by configuring ",(0,r.yg)("inlineCode",{parentName:"p"},"config/plugin_config"),", for example, you only need the ",(0,r.yg)("inlineCode",{parentName:"p"},"flink-assert")," plugin, then you can modify plugin.properties as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plugin_config"},"--flink-connectors--\nseatunnel-connector-flink-assert\n--end--\n")),(0,r.yg)("h2",{id:"run-seatunnel-application"},"Run SeaTunnel Application"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Configure SeaTunnel"),": Change the setting in ",(0,r.yg)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),", it is base on the path your engine install at ",(0,r.yg)("a",{parentName:"p",href:"#prepare"},"prepare step two"),".\nChange ",(0,r.yg)("inlineCode",{parentName:"p"},"SPARK_HOME")," if you using Spark as your engine, or change ",(0,r.yg)("inlineCode",{parentName:"p"},"FLINK_HOME")," if you're using Flink."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Run Application with Build-in Configure"),": We already provide an out-of-box configuration in the directory ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," which\nyou could find when you extract the tarball. You could start the application by the following commands"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/spark.streaming.conf.template\n'))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink.sh \\\n--config ./config/flink.streaming.conf.template\n')))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console or in Flink UI, You can think this\nis a sign that the command ran successfully or not."),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},"The SeaTunnel console will prints some logs as below:",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"Hello World, SeaTunnel\nHello World, SeaTunnel\nHello World, SeaTunnel\n...\nHello World, SeaTunnel\n"))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("p",null,"The content printed in the TaskManager Stdout log of ",(0,r.yg)("inlineCode",{parentName:"p"},"flink WebUI"),", is two columned record just like below(your\ncontent maybe different cause we use fake source to create data random):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"apache, 15\nseatunnel, 30\nincubator, 20\n...\ntopLevel, 20\n")))),(0,r.yg)("h2",{id:"explore-more-build-in-examples"},"Explore More Build-in Examples"),(0,r.yg)("p",null,"Our local quick start is using one of the build-in example in directory ",(0,r.yg)("inlineCode",{parentName:"p"},"config"),", and we provide more than one out-of-box\nexample you could and feel free to have a try and make your hands dirty. All you have to do is change the started command\noption value in ",(0,r.yg)("a",{parentName:"p",href:"#run-seaTunnel-application"},"running application")," to the configuration you want to run, we use batch\ntemplate in ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," as examples:"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/spark.batch.conf.template\n'))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink.sh \\\n--config ./config/flink.batch.conf.template\n')))),(0,r.yg)("h2",{id:"whats-more"},"What's More"),(0,r.yg)("p",null,"For now, you are already take a quick look about SeaTunnel, you could see ",(0,r.yg)("a",{parentName:"p",href:"/category/connector"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/deployment"},"deployment")," if you want to submit your application in other\nkind of your engine cluster."))}m.isMDXComponent=!0}}]);