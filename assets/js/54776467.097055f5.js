"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[83445],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),y=r,c=g["".concat(s,".").concat(y)]||g[y]||m[y]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},88704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={},l="S3Redshift",o={unversionedId:"connector-v2/sink/S3-Redshift",id:"version-2.3.2/connector-v2/sink/S3-Redshift",title:"S3Redshift",description:"The way of S3Redshift is to write data into S3, and then use Redshift's COPY command to import data from S3 to Redshift.",source:"@site/versioned_docs/version-2.3.2/connector-v2/sink/S3-Redshift.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/S3-Redshift",permalink:"/docs/2.3.2/connector-v2/sink/S3-Redshift",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/sink/S3-Redshift.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"RocketMQ",permalink:"/docs/2.3.2/connector-v2/sink/RocketMQ"},next:{title:"S3File",permalink:"/docs/2.3.2/connector-v2/sink/S3File"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"jdbc_url",id:"jdbc_url",level:3},{value:"jdbc_user",id:"jdbc_user",level:3},{value:"jdbc_password",id:"jdbc_password",level:3},{value:"execute_sql",id:"execute_sql",level:3},{value:"path string",id:"path-string",level:3},{value:"bucket string",id:"bucket-string",level:3},{value:"access_key string",id:"access_key-string",level:3},{value:"access_secret string",id:"access_secret-string",level:3},{value:"hadoop_s3_properties map",id:"hadoop_s3_properties-map",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"s3redshift"},"S3Redshift"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The way of S3Redshift is to write data into S3, and then use Redshift's COPY command to import data from S3 to Redshift.")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Output data to AWS Redshift."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Tips:\nWe based on the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.2/connector-v2/sink/S3File"},"S3File")," to implement this connector. So you can use the same configuration as S3File.\nWe made some trade-offs in order to support more file types, so we used the HDFS protocol for internal access to S3 and this connector need some hadoop dependencies.\nIt's only support hadoop version ",(0,r.yg)("strong",{parentName:"p"},"2.6.5+"),".")),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.2/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,r.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc_url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc_user"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc_password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"execute_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bucket"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access_secret"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hadoop_s3_properties"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"${transactionId}"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"text"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"'\\001'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"\\n"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1000000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"jdbc_url"},"jdbc_url"),(0,r.yg)("p",null,"The JDBC URL to connect to the Redshift database."),(0,r.yg)("h3",{id:"jdbc_user"},"jdbc_user"),(0,r.yg)("p",null,"The JDBC user to connect to the Redshift database."),(0,r.yg)("h3",{id:"jdbc_password"},"jdbc_password"),(0,r.yg)("p",null,"The JDBC password to connect to the Redshift database."),(0,r.yg)("h3",{id:"execute_sql"},"execute_sql"),(0,r.yg)("p",null,"The SQL to execute after the data is written to S3."),(0,r.yg)("p",null,"eg:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nCOPY target_table FROM 's3://yourbucket${path}' IAM_ROLE 'arn:XXX' REGION 'your region' format as json 'auto';\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"target_table")," is the table name in Redshift."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${path}")," is the path of the file written to S3. please confirm your sql include this variable. and don't need replace it. we will replace it when execute sql."),(0,r.yg)("p",null,"IAM_ROLE is the role that has permission to access S3."),(0,r.yg)("p",null,"format is the format of the file written to S3. please confirm this format is same as the file format you set in the configuration."),(0,r.yg)("p",null,"please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html"},"Redshift COPY")," for more details."),(0,r.yg)("p",null,"please confirm that the role has permission to access S3."),(0,r.yg)("h3",{id:"path-string"},"path ","[string]"),(0,r.yg)("p",null,"The target dir path is required."),(0,r.yg)("h3",{id:"bucket-string"},"bucket ","[string]"),(0,r.yg)("p",null,"The bucket address of s3 file system, for example: ",(0,r.yg)("inlineCode",{parentName:"p"},"s3n://seatunnel-test"),", if you use ",(0,r.yg)("inlineCode",{parentName:"p"},"s3a")," protocol, this parameter should be ",(0,r.yg)("inlineCode",{parentName:"p"},"s3a://seatunnel-test"),"."),(0,r.yg)("h3",{id:"access_key-string"},"access_key ","[string]"),(0,r.yg)("p",null,"The access key of s3 file system. If this parameter is not set, please confirm that the credential provider chain can be authenticated correctly, you could check this ",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,r.yg)("h3",{id:"access_secret-string"},"access_secret ","[string]"),(0,r.yg)("p",null,"The access secret of s3 file system. If this parameter is not set, please confirm that the credential provider chain can be authenticated correctly, you could check this ",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,r.yg)("h3",{id:"hadoop_s3_properties-map"},"hadoop_s3_properties ","[map]"),(0,r.yg)("p",null,"If you need to add a other option, you could add it here and refer to this ",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"Hadoop-AWS")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'hadoop_s3_properties {\n  "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n }\n')),(0,r.yg)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,r.yg)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,r.yg)("inlineCode",{parentName:"p"},"${now}")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,r.yg)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,r.yg)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,r.yg)("p",null,"Please note that, If ",(0,r.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,r.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,r.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,r.yg)("p",null,"We supported as the following file types:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"text")," ",(0,r.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,r.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,r.yg)("inlineCode",{parentName:"p"},"json")),(0,r.yg)("p",null,"Please note that, The final file name will end with the file_format's suffix, the suffix of the text file is ",(0,r.yg)("inlineCode",{parentName:"p"},"txt"),"."),(0,r.yg)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,r.yg)("p",null,"When the format in the ",(0,r.yg)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,r.yg)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"y"),(0,r.yg)("td",{parentName:"tr",align:null},"Year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"Month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H"),(0,r.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"m"),(0,r.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,r.yg)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,r.yg)("p",null,"The separator between columns in a row of data. Only needed by ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"csv")," file format."),(0,r.yg)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,r.yg)("p",null,"The separator between rows in a file. Only needed by ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"csv")," file format."),(0,r.yg)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,r.yg)("p",null,"Partition data based on selected fields"),(0,r.yg)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,r.yg)("p",null,"Default ",(0,r.yg)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,r.yg)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,r.yg)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be written into data file."),(0,r.yg)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,r.yg)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,r.yg)("p",null,"Which columns need be written to file, default value is all the columns get from ",(0,r.yg)("inlineCode",{parentName:"p"},"Transform")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,r.yg)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,r.yg)("p",null,"Please note that, If ",(0,r.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,r.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,r.yg)("p",null,"Only support ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," now."),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,r.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger."),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.2/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"For text file format"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  S3Redshift {\n    jdbc_url = "jdbc:redshift://xxx.amazonaws.com.cn:5439/xxx"\n    jdbc_user = "xxx"\n    jdbc_password = "xxxx"\n    execute_sql="COPY table_name FROM \'s3://test${path}\' IAM_ROLE \'arn:aws-cn:iam::xxx\' REGION \'cn-north-1\' removequotes emptyasnull blanksasnull maxerror 100 delimiter \'|\' ;"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/text"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format_type = "text"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,r.yg)("p",null,"For parquet file format"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  S3Redshift {\n    jdbc_url = "jdbc:redshift://xxx.amazonaws.com.cn:5439/xxx"\n    jdbc_user = "xxx"\n    jdbc_password = "xxxx"\n    execute_sql="COPY table_name FROM \'s3://test${path}\' IAM_ROLE \'arn:aws-cn:iam::xxx\' REGION \'cn-north-1\' format as PARQUET;"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/parquet"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format_type = "parquet"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,r.yg)("p",null,"For orc file format"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  S3Redshift {\n    jdbc_url = "jdbc:redshift://xxx.amazonaws.com.cn:5439/xxx"\n    jdbc_user = "xxx"\n    jdbc_password = "xxxx"\n    execute_sql="COPY table_name FROM \'s3://test${path}\' IAM_ROLE \'arn:aws-cn:iam::xxx\' REGION \'cn-north-1\' format as ORC;"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/orc"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format_type = "orc"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"))}m.isMDXComponent=!0}}]);