"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8164],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(87462),r=t(67294),l=t(72389),i=t(65450),o=t(86010),u="tabItem_LplD";function p(e){var n,t,l,p=e.lazy,s=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=k[0])?void 0:l.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,r.useState)(v),T=C[0],x=C[1],w=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=g[d];null!=E&&E!==T&&b.some((function(e){return e.value===E}))&&x(E)}var j=function(e){var n=e.currentTarget,t=w.indexOf(n),a=b[t].value;a!==T&&(O(n),x(a),null!=d&&N(d,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function s(e){var n=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},93400:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return k}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(9877),o=t(58215),u=["components"],p={},s="Command usage",c={unversionedId:"command/usage",id:"command/usage",title:"Command usage",description:"Command Entrypoint",source:"@site/docs/command/usage.mdx",sourceDirName:"command",slug:"/command/usage",permalink:"/docs/command/usage",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/command/usage.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"UUID",permalink:"/docs/transform/uuid"},next:{title:"Deployment",permalink:"/docs/deployment"}},m={},d=[{value:"Command Entrypoint",id:"command-entrypoint",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],f={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"command-usage"},"Command usage"),(0,l.kt)("h2",{id:"command-entrypoint"},"Command Entrypoint"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark.sh\n"))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh  \n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark.sh \\\n    -c config-path \\\n    -m master \\\n    -e deploy-mode \\\n    -i city=beijing\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"-m")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--master")," to specify the cluster manager")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"-e")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--deploy-mode")," to specify the deployment mode")))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -c config-path \\\n    -i key=value \\\n    -r run-application \\\n    [other params]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"-r")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"--run-mode")," to specify the flink job run mode, you can use ",(0,l.kt)("inlineCode",{parentName:"li"},"run-application")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"run")," (default value)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," to specify the path of the configuration file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--variable")," to specify the variables in the configuration file, you can configure multiple"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Yarn client mode\n./bin/start-seatunnel-spark.sh \\\n    --master yarn \\\n    --deploy-mode client \\\n    --config ./config/application.conf\n\n# Yarn cluster mode\n./bin/start-seatunnel-spark.sh \\\n    --master yarn \\\n    --deploy-mode cluster \\\n    --config ./config/application.conf\n"))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'env {\n    execution.parallelism = 1\n}\n\nsource {\n    FakeSourceStream {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n        sql = "select name,age from fake where name=\'"${my_name}"\'"\n    }\n}\n\nsink {\n    ConsoleSink {}\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Run")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -c config-path \\\n    -i my_name=kid-xiong\n")),(0,l.kt)("p",null,"This designation will replace ",(0,l.kt)("inlineCode",{parentName:"p"},'"${my_name}"')," in the configuration file with ",(0,l.kt)("inlineCode",{parentName:"p"},"kid-xiong")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"All the configurations in the ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," section will be applied to Flink dynamic parameters with the format of ",(0,l.kt)("inlineCode",{parentName:"p"},"-D"),", such as ",(0,l.kt)("inlineCode",{parentName:"p"},"-Dexecution.parallelism=1")," .")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For the rest of the parameters, refer to the original flink parameters. Check the flink parameter method: ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/flink run -h")," . The parameters can be added as needed. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"-m yarn-cluster")," is specified as ",(0,l.kt)("inlineCode",{parentName:"p"},"on yarn")," mode.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/flink run -h\n")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-p 2")," specifies that the job parallelism is ",(0,l.kt)("inlineCode",{parentName:"li"},"2"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -p 2 \\\n    -c config-path\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configurable parameters of ",(0,l.kt)("inlineCode",{parentName:"li"},"flink yarn-cluster"))),(0,l.kt)("p",null,"For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"-m yarn-cluster -ynm seatunnel")," specifies that the job is running on ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),", and the name of ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn WebUI")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"seatunnel")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -m yarn-cluster \\\n    -ynm seatunnel \\\n    -c config-path\n")))))}k.isMDXComponent=!0}}]);