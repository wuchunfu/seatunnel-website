"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7022],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(87462),r=t(67294),o=t(72389),l=t(65450),i=t(86010),u="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,r.useState)(g),O=N[0],E=N[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=k[m];null!=S&&S!==O&&h.some((function(e){return e.value===S}))&&E(S)}var j=function(e){var n=e.currentTarget,t=T.indexOf(n),a=h[t].value;a!==O&&(x(n),E(a),null!=m&&w(m,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function s(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},81195:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=(t(9877),t(58215),["components"]),i={sidebar_position:1},u=void 0,c={unversionedId:"start-v2/locally/deployment",id:"start-v2/locally/deployment",title:"deployment",description:"----------------",source:"@site/docs/start-v2/locally/deployment.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/deployment",permalink:"/docs/start-v2/locally/deployment",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/start-v2/locally/deployment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"About Seatunnel",permalink:"/docs/about"},next:{title:"quick-start-seatunnel-engine",permalink:"/docs/start-v2/locally/quick-start-seatunnel-engine"}},s={},p=[{value:"Step 1: Prepare the environment",id:"step-1-prepare-the-environment",level:2},{value:"Step 2: Download SeaTunnel",id:"step-2-download-seatunnel",level:2},{value:"Step 3: Install connectors plugin",id:"step-3-install-connectors-plugin",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"step-1-prepare-the-environment"},"Step 1: Prepare the environment"),(0,o.kt)("p",null,"Before you getting start the local run, you need to make sure you already have installed the following software which SeaTunnel required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (Java 8 or 11, other versions greater than Java 8 can theoretically work as well) installed and ",(0,o.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," set.")),(0,o.kt)("h2",{id:"step-2-download-seatunnel"},"Step 2: Download SeaTunnel"),(0,o.kt)("p",null,"Enter the ",(0,o.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"seatunnel download page")," and download the latest version of distribute\npackage ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-<version>-bin.tar.gz")),(0,o.kt)("p",null,"Or you can download it by terminal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export version="2.3.0-beta"\nwget "https://archive.apache.org/dist/incubator/seatunnel/${version}/apache-seatunnel-incubating-${version}-bin.tar.gz"\ntar -xzvf "apache-seatunnel-incubating-${version}-bin.tar.gz"\n')),(0,o.kt)("h2",{id:"step-3-install-connectors-plugin"},"Step 3: Install connectors plugin"),(0,o.kt)("p",null,"Since 2.2.0-beta, the binary package does not provide connector dependencies by default, so when using it for the first time, we need to execute the following command to install the connector: (Of course, you can also manually download the connector from ","[Apache Maven Repository]","(",(0,o.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/seatunnel/"},"https://repo.maven.apache.org/maven2/org/apache/seatunnel/")," to download, then manually move to the seatunnel subdirectory under the connectors directory)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh 2.3.0-beta\n")),(0,o.kt)("p",null,"If you need to specify the version of the connector, take 2.3.0-beta as an example, we need to execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh 2.3.0-beta\n")),(0,o.kt)("p",null,"Usually we don't need all the connector plugins, so you can specify the plugins you need by configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"config/plugin_config"),", for example, you only need the ",(0,o.kt)("inlineCode",{parentName:"p"},"connector-console")," plugin, then you can modify plugin.properties as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-console\n--end--\n")),(0,o.kt)("p",null,"If we want our sample application to work properly, we need to add the following plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-fake\nconnector-console\n--end--\n")),(0,o.kt)("p",null,"You can find all supported connectors and corresponding plugin_config configuration names under ",(0,o.kt)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/connectors/plugins-mapping.properties"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to install the connector plugin by manually downloading the connector, you need to pay special attention to the following"),(0,o.kt)("p",{parentName:"div"},"The connectors directory contains the following subdirectories, if they do not exist, you need to create them manually"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"flink\nflink-sql\nseatunnel\nspark\n")),(0,o.kt)("p",{parentName:"div"},"If you want to install the V2 connector plugin manually, you only need to download the V2 connector plugin you need and put them in the seatunnel directory"))),(0,o.kt)("h2",{id:"whats-more"},"What's More"),(0,o.kt)("p",null,"For now, you are already deployment SeaTunnel complete. You can follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start")," to configure and run a data synchronization job."))}m.isMDXComponent=!0}}]);