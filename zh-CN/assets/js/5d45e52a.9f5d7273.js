"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[27667],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294);function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),l=n(67294),r=n(72389),i=n(65450),o=n(86010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,p=e.block,d=e.defaultValue,m=e.values,c=e.groupId,k=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(N,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==b&&!N.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),f=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,l.useState)(b),T=w[0],C=w[1],q=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var _=f[c];null!=_&&_!==T&&N.some((function(e){return e.value===_}))&&C(_)}var E=function(e){var t=e.currentTarget,n=q.indexOf(t),a=N[n].value;a!==T&&(x(t),C(a),null!=c&&y(c,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=q.indexOf(e.currentTarget)+1;n=q[a]||q[0];break;case"ArrowLeft":var l=q.indexOf(e.currentTarget)-1;n=q[l]||q[q.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},N.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return q.push(e)},onKeyDown:j,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,l.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,r.Z)();return l.createElement(u,(0,a.Z)({key:String(t)},e))}},80344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return m},toc:function(){return c},default:function(){return g}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=n(9877),o=n(58215),s=["components"],u={},p="Jdbc",d={unversionedId:"connector/sink/Jdbc",id:"connector/sink/Jdbc",title:"Jdbc",description:"JDBC sink connector",source:"@site/docs/connector/sink/Jdbc.mdx",sourceDirName:"connector/sink",slug:"/connector/sink/Jdbc",permalink:"/zh-CN/docs/connector/sink/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/sink/Jdbc.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"InfluxDB",permalink:"/zh-CN/docs/connector/sink/InfluxDB"},next:{title:"Kafka",permalink:"/zh-CN/docs/connector/sink/Kafka"}},m={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:5},{value:"dbTable string",id:"dbtable-string",level:3},{value:"saveMode string",id:"savemode-string",level:3},{value:"useSsl string",id:"usessl-string",level:3},{value:"isolationLevel string",id:"isolationlevel-string",level:3},{value:"customUpdateStmt string",id:"customupdatestmt-string",level:3},{value:"duplicateIncs string",id:"duplicateincs-string",level:3},{value:"showSql",id:"showsql",level:3},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string-1",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string-1",level:3},{value:"query string",id:"query-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"pre_sql string",id:"pre_sql-string",level:3},{value:"post_sql string",id:"post_sql-string",level:3},{value:"ignore_post_sql_exceptions boolean",id:"ignore_post_sql_exceptions-boolean",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],k={toc:c};function g(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jdbc"},"Jdbc"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JDBC sink connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Write data through jdbc"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,r.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Jdbc"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Jdbc")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"driver"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbTable"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"saveMode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useSsl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customUpdateStmt"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duplicateIncs"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showSql"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"url-string"},"url ","[string]"),(0,r.kt)("p",null,"The URL of the JDBC connection. Refer to a case: ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost/dbName")),(0,r.kt)("h3",{id:"user-string"},"user ","[string]"),(0,r.kt)("p",null,"username"),(0,r.kt)("h5",{id:"password-string"},"password ","[string]"),(0,r.kt)("p",null,"user password"),(0,r.kt)("h3",{id:"dbtable-string"},"dbTable ","[string]"),(0,r.kt)("p",null,"Sink table name, if the table does not exist, it will be created."),(0,r.kt)("h3",{id:"savemode-string"},"saveMode ","[string]"),(0,r.kt)("p",null,"Storage mode, add mode ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," , perform data overwrite in a specified way when inserting data key conflicts"),(0,r.kt)("p",null,"Basic mode, currently supports ",(0,r.kt)("inlineCode",{parentName:"p"},"overwrite")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," . For the specific meaning of each mode, see ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html#save-modes"},"save-modes")),(0,r.kt)("h3",{id:"usessl-string"},"useSsl ","[string]"),(0,r.kt)("p",null,"Configure when ",(0,r.kt)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," , whether to enable ssl, the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h3",{id:"isolationlevel-string"},"isolationLevel ","[string]"),(0,r.kt)("p",null,"The transaction isolation level, which applies to current connection. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_UNCOMMITTED")),(0,r.kt)("h3",{id:"customupdatestmt-string"},"customUpdateStmt ","[string]"),(0,r.kt)("p",null,"Configure when ",(0,r.kt)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," , which is used to specify the update statement template for key conflicts.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"customUpdateStmt")," is empty, the sql will auto-generate for all columns, else use the sql which refer to the usage of\n",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO table (...) values (...) ON DUPLICATE KEY UPDATE... ")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," , use placeholders or fixed values in ",(0,r.kt)("inlineCode",{parentName:"p"},"values"),"\ntips: the tableName of sql should be consistent with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dbTable"),"."),(0,r.kt)("h3",{id:"duplicateincs-string"},"duplicateIncs ","[string]"),(0,r.kt)("p",null,"Configure when ",(0,r.kt)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," , and when the specified key conflicts, the value is updated to the existing value plus the original value"),(0,r.kt)("h3",{id:"showsql"},"showSql"),(0,r.kt)("p",null,"Configure when ",(0,r.kt)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," , whether to show sql")),(0,r.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"driver"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pre_sql"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post_sql"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignore_post_sql_exceptions"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,r.kt)("p",null,"Driver name, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver")," for MySQL."),(0,r.kt)("p",null,"Warn: for license compliance, you have to provide MySQL JDBC driver yourself, e.g. copy ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-connector-java-xxx.jar")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib")," for Standalone."),(0,r.kt)("h3",{id:"url-string-1"},"url ","[string]"),(0,r.kt)("p",null,"The URL of the JDBC connection. Such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/test")),(0,r.kt)("h3",{id:"username-string"},"username ","[string]"),(0,r.kt)("p",null,"username"),(0,r.kt)("h3",{id:"password-string-1"},"password ","[string]"),(0,r.kt)("p",null,"password"),(0,r.kt)("h3",{id:"query-string"},"query ","[string]"),(0,r.kt)("p",null,"Insert statement"),(0,r.kt)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.kt)("p",null,"Number of writes per batch"),(0,r.kt)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,r.kt)("p",null,"The parallelism of an individual operator, for JdbcSink."),(0,r.kt)("h3",{id:"pre_sql-string"},"pre_sql ","[string]"),(0,r.kt)("p",null,"This sql can be executed before output."),(0,r.kt)("h3",{id:"post_sql-string"},"post_sql ","[string]"),(0,r.kt)("p",null,"This sql can be executed after output, and just supports for batch job."),(0,r.kt)("h3",{id:"ignore_post_sql_exceptions-boolean"},"ignore_post_sql_exceptions ","[boolean]"),(0,r.kt)("p",null,"Whether to ignore post_sql exceptions."),(0,r.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector/sink/common-options"},"Sink Plugin")," for details"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.cj.jdbc.Driver",\n    saveMode = "update",\n    url = "jdbc:mysql://ip:3306/database",\n    user = "userName",\n    password = "***********",\n    dbTable = "tableName",\n    customUpdateStmt = "INSERT INTO table (column1, column2, created, modified, yn) values(?, ?, now(), now(), 1) ON DUPLICATE KEY UPDATE column1 = IFNULL(VALUES (column1), column1), column2 = IFNULL(VALUES (column2), column2)"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Insert data through JDBC")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.cj.jdbc.Driver",\n    saveMode = "update",\n    truncate = "true",\n    url = "jdbc:mysql://ip:3306/database",\n    user = "userName",\n    password = "***********",\n    dbTable = "tableName",\n    customUpdateStmt = "INSERT INTO tableName (column1, column2, created, modified, yn) values(?, ?, now(), now(), 1) ON DUPLICATE KEY UPDATE column1 = IFNULL(VALUES (column1), column1), column2 = IFNULL(VALUES (column2), column2)"\n    jdbc.connect_timeout = 10000\n    jdbc.socket_timeout = 10000\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Timeout config"))),(0,r.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'JdbcSink {\n    source_table_name = fake\n    driver = com.mysql.cj.jdbc.Driver\n    url = "jdbc:mysql://localhost/test"\n    username = root\n    query = "insert into test(name,age) values(?,?)"\n    batch_size = 2\n}\n')))))}g.isMDXComponent=!0}}]);