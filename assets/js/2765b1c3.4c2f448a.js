"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5554],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(67294);function r(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(72389),i=n(65450),s=n(86010),o="tabItem_LplD";function u(t){var e,n,l,u=t.lazy,d=t.block,p=t.defaultValue,m=t.values,c=t.groupId,k=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,i.lx)(b,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(e=null!=p?p:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=g[0])?void 0:l.props.value;if(null!==f&&!b.some((function(t){return t.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),h=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,r.useState)(f),D=w[0],_=w[1],x=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=h[c];null!=O&&O!==D&&b.some((function(t){return t.value===O}))&&_(O)}var E=function(t){var e=t.currentTarget,n=x.indexOf(e),a=b[n].value;a!==D&&(T(e),_(a),null!=c&&y(c,a))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=x.indexOf(t.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(t.currentTarget)-1;n=x[r]||x[x.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},k)},b.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:function(t){return x.push(t)},onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":D===e})}),null!=n?n:e)}))),u?(0,r.cloneElement)(g.filter((function(t){return t.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==D})}))))}function d(t){var e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},26815:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(9877),s=n(58215),o=["components"],u={},d="Doris",p={unversionedId:"connector/sink/Doris",id:"connector/sink/Doris",title:"Doris",description:"Doris sink connector",source:"@site/docs/connector/sink/Doris.mdx",sourceDirName:"connector/sink",slug:"/connector/sink/Doris",permalink:"/docs/connector/sink/Doris",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/sink/Doris.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Console",permalink:"/docs/connector/sink/Console"},next:{title:"Druid",permalink:"/docs/connector/sink/Druid"}},m={},c=[{value:"Description:",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"fenodes string",id:"fenodes-string",level:5},{value:"database string",id:"database-string",level:5},{value:"table string",id:"table-string",level:5},{value:"user string",id:"user-string",level:5},{value:"password string",id:"password-string",level:5},{value:"batch_size string",id:"batch_size-string",level:5},{value:"doris. string",id:"doris-string",level:5},{value:"fenodes string",id:"fenodes-string-1",level:5},{value:"database string",id:"database-string-1",level:5},{value:"table string",id:"table-string-1",level:5},{value:"user string",id:"user-string-1",level:5},{value:"password string",id:"password-string-1",level:5},{value:"batch_size int",id:"batch_size-int",level:5},{value:"interval int",id:"interval-int",level:5},{value:"max_retries int",id:"max_retries-int",level:5},{value:"doris.* string",id:"doris-string-1",level:5},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:3}],k={toc:c};function g(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"doris"},"Doris"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Doris sink connector")),(0,l.kt)("h3",{id:"description"},"Description:"),(0,l.kt)("p",null,"Write Data to a Doris Table."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,l.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Doris"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: DorisSink")))),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doris.*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"fenodes-string"},"fenodes ","[string]"),(0,l.kt)("p",null,"Doris FE address:8030"),(0,l.kt)("h5",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"Doris target database name"),(0,l.kt)("h5",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"Doris target table name"),(0,l.kt)("h5",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"Doris user name"),(0,l.kt)("h5",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"Doris user's password"),(0,l.kt)("h5",{id:"batch_size-string"},"batch_size ","[string]"),(0,l.kt)("p",null,"Doris number of submissions per batch"),(0,l.kt)("p",null,"Default value\uff1a5000"),(0,l.kt)("h5",{id:"doris-string"},"doris. ","[string]"),(0,l.kt)("p",null,"Doris stream_load properties,you can use 'doris.' prefix + stream_load properties\n",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html"},"More Doris stream_load Configurations"))),(0,l.kt)(s.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doris.*"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"fenodes-string-1"},"fenodes ","[string]"),(0,l.kt)("p",null,"Doris FE http address"),(0,l.kt)("h5",{id:"database-string-1"},"database ","[string]"),(0,l.kt)("p",null,"Doris database name"),(0,l.kt)("h5",{id:"table-string-1"},"table ","[string]"),(0,l.kt)("p",null,"Doris table name"),(0,l.kt)("h5",{id:"user-string-1"},"user ","[string]"),(0,l.kt)("p",null,"Doris username"),(0,l.kt)("h5",{id:"password-string-1"},"password ","[string]"),(0,l.kt)("p",null,"Doris password"),(0,l.kt)("h5",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.kt)("p",null,"Maximum number of lines in a single write Doris,default value is 5000."),(0,l.kt)("h5",{id:"interval-int"},"interval ","[int]"),(0,l.kt)("p",null,"The flush interval millisecond, after which the asynchronous thread will write the data in the cache to Doris.Set to 0 to turn off periodic writing."),(0,l.kt)("p",null,"Default value \uff1a5000"),(0,l.kt)("h5",{id:"max_retries-int"},"max_retries ","[int]"),(0,l.kt)("p",null,"Number of retries after writing Doris failed"),(0,l.kt)("h5",{id:"doris-string-1"},"doris.* ","[string]"),(0,l.kt)("p",null,"The doris stream load parameters.you can use 'doris.' prefix + stream_load properties. eg:doris.column_separator' = ','\n",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html"},"More Doris stream_load Configurations")),(0,l.kt)("h3",{id:"parallelism-int"},"parallelism ","[Int]"),(0,l.kt)("p",null,"The parallelism of an individual operator, for DorisSink"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'Doris {\n    fenodes="0.0.0.0:8030"\n    database="test"\n    table="user"\n    user="doris"\n    password="doris"\n    batch_size=10000\n    doris.column_separator="\\t"\n    doris.columns="id,user_name,user_name_cn,create_time,last_login_time"\n}\n'))),(0,l.kt)(s.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'DorisSink {\n    fenodes = "127.0.0.1:8030"\n    database = database\n    table = table\n    user = root\n    password = password\n    batch_size = 1\n    doris.column_separator="\\t"\n    doris.columns="id,user_name,user_name_cn,create_time,last_login_time"\n}\n')))))}g.isMDXComponent=!0}}]);