"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[55129],{15680:(e,n,l)=>{l.d(n,{xA:()=>g,yg:()=>m});var t=l(96540);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function u(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),o=p(l),y=a,m=o["".concat(s,".").concat(y)]||o[y]||d[y]||i;return l?t.createElement(m,r(r({ref:n},g),{},{components:l})):t.createElement(m,r({ref:n},g))}));function m(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=y;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[o]="string"==typeof e?e:a,r[1]=u;for(var p=2;p<i;p++)r[p]=l[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}y.displayName="MDXCreateElement"},12071:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=l(58168),a=(l(96540),l(15680));const i={},r="SQL Functions",u={unversionedId:"transform-v2/sql-functions",id:"version-2.3.2/transform-v2/sql-functions",title:"SQL Functions",description:"The Functions of SQL transform plugin",source:"@site/versioned_docs/version-2.3.2/transform-v2/sql-functions.md",sourceDirName:"transform-v2",slug:"/transform-v2/sql-functions",permalink:"/docs/2.3.2/transform-v2/sql-functions",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/transform-v2/sql-functions.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Split",permalink:"/docs/2.3.2/transform-v2/split"},next:{title:"SQL UDF",permalink:"/docs/2.3.2/transform-v2/sql-udf"}},s={},p=[{value:"String Functions",id:"string-functions",level:2},{value:"ASCII",id:"ascii",level:3},{value:"BIT_LENGTH",id:"bit_length",level:3},{value:"CHAR_LENGTH / LENGTH",id:"char_length--length",level:3},{value:"OCTET_LENGTH",id:"octet_length",level:3},{value:"CHAR / CHR",id:"char--chr",level:3},{value:"CONCAT",id:"concat",level:3},{value:"CONCAT_WS",id:"concat_ws",level:3},{value:"HEXTORAW",id:"hextoraw",level:3},{value:"RAWTOHEX",id:"rawtohex",level:3},{value:"INSERT",id:"insert",level:3},{value:"LOWER / LCASE",id:"lower--lcase",level:3},{value:"UPPER / UCASE",id:"upper--ucase",level:3},{value:"LEFT",id:"left",level:3},{value:"RIGHT",id:"right",level:3},{value:"LOCATE / INSTR / POSITION",id:"locate--instr--position",level:3},{value:"LPAD",id:"lpad",level:3},{value:"RPAD",id:"rpad",level:3},{value:"LTRIM",id:"ltrim",level:3},{value:"RTRIM",id:"rtrim",level:3},{value:"TRIM",id:"trim",level:3},{value:"REGEXP_REPLACE",id:"regexp_replace",level:3},{value:"REGEXP_LIKE",id:"regexp_like",level:3},{value:"REGEXP_SUBSTR",id:"regexp_substr",level:3},{value:"REPEAT",id:"repeat",level:3},{value:"REPLACE",id:"replace",level:3},{value:"SOUNDEX",id:"soundex",level:3},{value:"SPACE",id:"space",level:3},{value:"SUBSTRING / SUBSTR",id:"substring--substr",level:3},{value:"TO_CHAR",id:"to_char",level:3},{value:"TRANSLATE",id:"translate",level:3},{value:"Numeric Functions",id:"numeric-functions",level:2},{value:"ABS",id:"abs",level:3},{value:"ACOS",id:"acos",level:3},{value:"ASIN",id:"asin",level:3},{value:"ATAN",id:"atan",level:3},{value:"COS",id:"cos",level:3},{value:"COSH",id:"cosh",level:3},{value:"COT",id:"cot",level:3},{value:"SIN",id:"sin",level:3},{value:"SINH",id:"sinh",level:3},{value:"TAN",id:"tan",level:3},{value:"TANH",id:"tanh",level:3},{value:"MOD",id:"mod",level:3},{value:"CEIL / CEILING",id:"ceil--ceiling",level:3},{value:"EXP",id:"exp",level:3},{value:"FLOOR",id:"floor",level:3},{value:"LN",id:"ln",level:3},{value:"LOG",id:"log",level:3},{value:"LOG10",id:"log10",level:3},{value:"RADIANS",id:"radians",level:3},{value:"SQRT",id:"sqrt",level:3},{value:"PI",id:"pi",level:3},{value:"POWER",id:"power",level:3},{value:"RAND / RANDOM",id:"rand--random",level:3},{value:"ROUND",id:"round",level:3},{value:"SIGN",id:"sign",level:3},{value:"TRUNC",id:"trunc",level:3},{value:"Time and Date Functions",id:"time-and-date-functions",level:2},{value:"CURRENT_DATE",id:"current_date",level:3},{value:"CURRENT_TIME",id:"current_time",level:3},{value:"CURRENT_TIMESTAMP / NOW",id:"current_timestamp--now",level:3},{value:"DATEADD / TIMESTAMPADD",id:"dateadd--timestampadd",level:3},{value:"DATEDIFF",id:"datediff",level:3},{value:"DATE_TRUNC",id:"date_trunc",level:3},{value:"DAYNAME",id:"dayname",level:3},{value:"DAY_OF_MONTH",id:"day_of_month",level:3},{value:"DAY_OF_WEEK",id:"day_of_week",level:3},{value:"DAY_OF_YEAR",id:"day_of_year",level:3},{value:"EXTRACT",id:"extract",level:3},{value:"FORMATDATETIME",id:"formatdatetime",level:3},{value:"HOUR",id:"hour",level:3},{value:"MINUTE",id:"minute",level:3},{value:"MONTH",id:"month",level:3},{value:"MONTHNAME",id:"monthname",level:3},{value:"PARSEDATETIME / TO_DATE",id:"parsedatetime--to_date",level:3},{value:"QUARTER",id:"quarter",level:3},{value:"SECOND",id:"second",level:3},{value:"WEEK",id:"week",level:3},{value:"YEAR",id:"year",level:3},{value:"System Functions",id:"system-functions",level:2},{value:"CAST",id:"cast",level:3},{value:"COALESCE",id:"coalesce",level:3},{value:"IFNULL",id:"ifnull",level:3},{value:"NULLIF",id:"nullif",level:3}],g={toc:p},o="wrapper";function d(e){let{components:n,...l}=e;return(0,a.yg)(o,(0,t.A)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sql-functions"},"SQL Functions"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The Functions of SQL transform plugin")),(0,a.yg)("h2",{id:"string-functions"},"String Functions"),(0,a.yg)("h3",{id:"ascii"},"ASCII"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ASCII(string)")),(0,a.yg)("p",null,"Returns the ",(0,a.yg)("inlineCode",{parentName:"p"},"ASCII")," value of the first character in the string. This method returns an int."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"ASCII('Hi')"),(0,a.yg)("h3",{id:"bit_length"},"BIT_LENGTH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIT_LENGTH(bytes)")),(0,a.yg)("p",null,"Returns the number of bits in a binary string. This method returns a long."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"BIT_LENGTH(NAME)"),(0,a.yg)("h3",{id:"char_length--length"},"CHAR_LENGTH / LENGTH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CHAR_LENGTH | LENGTH (string)")),(0,a.yg)("p",null,"Returns the number of characters in a character string. This method returns a long."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CHAR_LENGTH(NAME)"),(0,a.yg)("h3",{id:"octet_length"},"OCTET_LENGTH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"OCTET_LENGTH(bytes)")),(0,a.yg)("p",null,"Returns the number of bytes in a binary string. This method returns a long."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"OCTET_LENGTH(NAME)"),(0,a.yg)("h3",{id:"char--chr"},"CHAR / CHR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CHAR | CHR (int)")),(0,a.yg)("p",null,"Returns the character that represents the ASCII value. This method returns a string."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CHAR(65)"),(0,a.yg)("h3",{id:"concat"},"CONCAT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CONCAT(string, string[, string ...] )")),(0,a.yg)("p",null,"Combines strings. Unlike with the operator ",(0,a.yg)("inlineCode",{parentName:"p"},"||"),", ",(0,a.yg)("strong",{parentName:"p"},"NULL")," parameters are ignored, and do not cause the result to become ",(0,a.yg)("strong",{parentName:"p"},"NULL"),". If all parameters are NULL the result is an empty string. This method returns a string."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CONCAT(NAME, '_')"),(0,a.yg)("h3",{id:"concat_ws"},"CONCAT_WS"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CONCAT_WS(separatorString, string, string[, string ...] )")),(0,a.yg)("p",null,"Combines strings with separator. If separator is ",(0,a.yg)("strong",{parentName:"p"},"NULL")," it is treated like an empty string. Other ",(0,a.yg)("strong",{parentName:"p"},"NULL")," parameters are ignored. Remaining ",(0,a.yg)("strong",{parentName:"p"},"non-NULL")," parameters, if any, are concatenated with the specified separator. If there are no remaining parameters the result is an empty string. This method returns a string."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CONCAT",(0,a.yg)("em",{parentName:"p"},"WS(',', NAME, '"),"')"),(0,a.yg)("h3",{id:"hextoraw"},"HEXTORAW"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"HEXTORAW(string)")),(0,a.yg)("p",null,"Converts a hex representation of a string to a string. 4 hex characters per string character are used."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"HEXTORAW(DATA)"),(0,a.yg)("h3",{id:"rawtohex"},"RAWTOHEX"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RAWTOHEX(string)")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RAWTOHEX(bytes)")),(0,a.yg)("p",null,"Converts a string or bytes to the hex representation. 4 hex characters per string character are used. This method returns a string."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"RAWTOHEX(DATA)"),(0,a.yg)("h3",{id:"insert"},"INSERT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INSERT(originalString, startInt, lengthInt, addString)")),(0,a.yg)("p",null,"Inserts a additional string into the original string at a specified start position. The length specifies the number of characters that are removed at the start position in the original string. This method returns a string."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"INSERT(NAME, 1, 1, ' ')"),(0,a.yg)("h3",{id:"lower--lcase"},"LOWER / LCASE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LOWER | LCASE (string)")),(0,a.yg)("p",null,"Converts a string to lowercase."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LOWER(NAME)"),(0,a.yg)("h3",{id:"upper--ucase"},"UPPER / UCASE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"UPPER | UCASE (string)")),(0,a.yg)("p",null,"Converts a string to uppercase."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"UPPER(NAME)"),(0,a.yg)("h3",{id:"left"},"LEFT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LEFT(string, int)")),(0,a.yg)("p",null,"Returns the leftmost number of characters."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LEFT(NAME, 3)"),(0,a.yg)("h3",{id:"right"},"RIGHT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RIGHT(string, int)")),(0,a.yg)("p",null,"Returns the rightmost number of characters."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"RIGHT(NAME, 3)"),(0,a.yg)("h3",{id:"locate--instr--position"},"LOCATE / INSTR / POSITION"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LOCATE(searchString, string[, startInit])")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INSTR(string, searchString[, startInit])")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"POSITION(searchString, string)")),(0,a.yg)("p",null,"Returns the location of a search string in a string. If a start position is used, the characters before it are ignored. If position is negative, the rightmost location is returned. 0 is returned if the search string is not found. Please note this function is case sensitive, even if the parameters are not."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LOCATE('.', NAME)"),(0,a.yg)("h3",{id:"lpad"},"LPAD"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LPAD(string ,int[, string])")),(0,a.yg)("p",null,"Left pad the string to the specified length. If the length is shorter than the string, it will be truncated at the end. If the padding string is not set, spaces will be used."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LPAD(AMOUNT, 10, '*')"),(0,a.yg)("h3",{id:"rpad"},"RPAD"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RPAD(string, int[, string])")),(0,a.yg)("p",null,"Right pad the string to the specified length. If the length is shorter than the string, it will be truncated. If the padding string is not set, spaces will be used."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"RPAD(TEXT, 10, '-')"),(0,a.yg)("h3",{id:"ltrim"},"LTRIM"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LTRIM(string[, characterToTrimString])")),(0,a.yg)("p",null,"Removes all leading spaces or other specified characters from a string."),(0,a.yg)("p",null,"This function is deprecated, use TRIM instead of it."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LTRIM(NAME)"),(0,a.yg)("h3",{id:"rtrim"},"RTRIM"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RTRIM(string[, characterToTrimString])")),(0,a.yg)("p",null,"Removes all trailing spaces or other specified characters from a string."),(0,a.yg)("p",null,"This function is deprecated, use TRIM instead of it."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"RTRIM(NAME)"),(0,a.yg)("h3",{id:"trim"},"TRIM"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TRIM(string[, characterToTrimString])")),(0,a.yg)("p",null,"Removes all leading spaces or other specified characters from a string."),(0,a.yg)("p",null,"This function is deprecated, use TRIM instead of it."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LTRIM(NAME)"),(0,a.yg)("h3",{id:"regexp_replace"},"REGEXP_REPLACE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"REGEXP_REPLACE(inputString, regexString, replacementString[, flagsString])")),(0,a.yg)("p",null,"Replaces each substring that matches a regular expression. For details, see the Java String.replaceAll() method. If any parameter is null (except optional flagsString parameter), the result is null."),(0,a.yg)("p",null,"Flags values are limited to 'i', 'c', 'n', 'm'. Other symbols cause exception. Multiple symbols could be used in one flagsString parameter (like 'im'). Later flags override first ones, for example 'ic' is equivalent to case sensitive matching 'c'."),(0,a.yg)("p",null,"'i' enables case insensitive matching (Pattern.CASE_INSENSITIVE)"),(0,a.yg)("p",null,"'c' disables case insensitive matching (Pattern.CASE_INSENSITIVE)"),(0,a.yg)("p",null,"'n' allows the period to match the newline character (Pattern.DOTALL)"),(0,a.yg)("p",null,"'m' enables multiline mode (Pattern.MULTILINE)"),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"REGEXP_REPLACE('Hello    World', ' +', ' ')\nREGEXP_REPLACE('Hello WWWWorld', 'w+', 'W', 'i')"),(0,a.yg)("h3",{id:"regexp_like"},"REGEXP_LIKE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"REGEXP_LIKE(inputString, regexString[, flagsString])")),(0,a.yg)("p",null,"Matches string to a regular expression. For details, see the Java Matcher.find() method. If any parameter is null (except optional flagsString parameter), the result is null."),(0,a.yg)("p",null,"Flags values are limited to 'i', 'c', 'n', 'm'. Other symbols cause exception. Multiple symbols could be used in one flagsString parameter (like 'im'). Later flags override first ones, for example 'ic' is equivalent to case sensitive matching 'c'."),(0,a.yg)("p",null,"'i' enables case insensitive matching (Pattern.CASE_INSENSITIVE)"),(0,a.yg)("p",null,"'c' disables case insensitive matching (Pattern.CASE_INSENSITIVE)"),(0,a.yg)("p",null,"'n' allows the period to match the newline character (Pattern.DOTALL)"),(0,a.yg)("p",null,"'m' enables multiline mode (Pattern.MULTILINE)"),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"REGEXP_LIKE('Hello    World', '","[A-Z ]","*', 'i')"),(0,a.yg)("h3",{id:"regexp_substr"},"REGEXP_SUBSTR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"REGEXP_SUBSTR(inputString, regexString[, positionInt, occurrenceInt, flagsString, groupInt])")),(0,a.yg)("p",null,"Matches string to a regular expression and returns the matched substring. For details, see the java.util.regex.Pattern and related functionality."),(0,a.yg)("p",null,"The parameter position specifies where in inputString the match should start. Occurrence indicates which occurrence of pattern in inputString to search for."),(0,a.yg)("p",null,"Flags values are limited to 'i', 'c', 'n', 'm'. Other symbols cause exception. Multiple symbols could be used in one flagsString parameter (like 'im'). Later flags override first ones, for example 'ic' is equivalent to case sensitive matching 'c'."),(0,a.yg)("p",null,"'i' enables case insensitive matching (Pattern.CASE_INSENSITIVE)"),(0,a.yg)("p",null,"'c' disables case insensitive matching (Pattern.CASE_INSENSITIVE)"),(0,a.yg)("p",null,"'n' allows the period to match the newline character (Pattern.DOTALL)"),(0,a.yg)("p",null,"'m' enables multiline mode (Pattern.MULTILINE)"),(0,a.yg)("p",null,"If the pattern has groups, the group parameter can be used to specify which group to return."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"REGEXP_SUBSTR('2020-10-01', '\\d{4}')\nREGEXP_SUBSTR('2020-10-01', '(\\d{4})-(\\d{2})-(\\d{2})', 1, 1, NULL, 2)"),(0,a.yg)("h3",{id:"repeat"},"REPEAT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"REPEAT(string, int)")),(0,a.yg)("p",null,"Returns a string repeated some number of times."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"REPEAT(NAME || ' ', 10)"),(0,a.yg)("h3",{id:"replace"},"REPLACE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE(string, searchString[, replacementString])")),(0,a.yg)("p",null,"Replaces all occurrences of a search string in a text with another string. If no replacement is specified, the search string is removed from the original string. If any parameter is null, the result is null."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"REPLACE(NAME, ' ')"),(0,a.yg)("h3",{id:"soundex"},"SOUNDEX"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SOUNDEX(string)")),(0,a.yg)("p",null,"Returns a four character code representing the sound of a string. This method returns a string, or null if parameter is null. See ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Soundex"},"https://en.wikipedia.org/wiki/Soundex")," for more information."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"SOUNDEX(NAME)"),(0,a.yg)("h3",{id:"space"},"SPACE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SPACE(int)")),(0,a.yg)("p",null,"Returns a string consisting of a number of spaces."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"SPACE(80)"),(0,a.yg)("h3",{id:"substring--substr"},"SUBSTRING / SUBSTR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SUBSTRING | SUBSTR (string, startInt[, lengthInt ])")),(0,a.yg)("p",null,"Returns a substring of a string starting at a position. If the start index is negative, then the start index is relative to the end of the string. The length is optional."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CALL SUBSTRING('","[Hello]","', 2);\nCALL SUBSTRING('hour', 3, 2);"),(0,a.yg)("h3",{id:"to_char"},"TO_CHAR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TO_CHAR(value[, formatString])")),(0,a.yg)("p",null,"Oracle-compatible TO_CHAR function that can format a timestamp, a number, or text."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CALL TO_CHAR(SYS_TIME, 'yyyy-MM-dd HH:mm:ss')"),(0,a.yg)("h3",{id:"translate"},"TRANSLATE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TRANSLATE(value, searchString, replacementString)")),(0,a.yg)("p",null,"Oracle-compatible TRANSLATE function that replaces a sequence of characters in a string with another set of characters."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CALL TRANSLATE('Hello world', 'eo', 'EO')"),(0,a.yg)("h2",{id:"numeric-functions"},"Numeric Functions"),(0,a.yg)("h3",{id:"abs"},"ABS"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ABS(numeric)")),(0,a.yg)("p",null,"Returns the absolute value of a specified value. The returned value is of the same data type as the parameter."),(0,a.yg)("p",null,"Note that TINYINT, SMALLINT, INT, and BIGINT data types cannot represent absolute values of their minimum negative values, because they have more negative values than positive. For example, for INT data type allowed values are from -2147483648 to 2147483647. ABS(-2147483648) should be 2147483648, but this value is not allowed for this data type. It leads to an exception. To avoid it cast argument of this function to a higher data type."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"ABS(I)"),(0,a.yg)("h3",{id:"acos"},"ACOS"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ACOS(numeric)")),(0,a.yg)("p",null,"Calculate the arc cosine. See also Java Math.acos. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"ACOS(D)"),(0,a.yg)("h3",{id:"asin"},"ASIN"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ASIN(numeric)")),(0,a.yg)("p",null,"Calculate the arc sine. See also Java Math.asin. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"ASIN(D)"),(0,a.yg)("h3",{id:"atan"},"ATAN"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ATAN(numeric)")),(0,a.yg)("p",null,"Calculate the arc tangent. See also Java Math.atan. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"ATAN(D)"),(0,a.yg)("h3",{id:"cos"},"COS"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"COS(numeric)")),(0,a.yg)("p",null,"Calculate the trigonometric cosine. See also Java Math.cos. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"COS(ANGLE)"),(0,a.yg)("h3",{id:"cosh"},"COSH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"COSH(numeric)")),(0,a.yg)("p",null,"Calculate the hyperbolic cosine. See also Java Math.cosh. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"COSH(X)"),(0,a.yg)("h3",{id:"cot"},"COT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"COT(numeric)")),(0,a.yg)("p",null,"Calculate the trigonometric cotangent (1/TAN(ANGLE)). See also Java Math.* functions. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"COT(ANGLE)"),(0,a.yg)("h3",{id:"sin"},"SIN"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SIN(numeric)")),(0,a.yg)("p",null,"Calculate the trigonometric sine. See also Java Math.sin. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"SIN(ANGLE)"),(0,a.yg)("h3",{id:"sinh"},"SINH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SINH(numeric)")),(0,a.yg)("p",null,"Calculate the hyperbolic sine. See also Java Math.sinh. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"SINH(ANGLE)"),(0,a.yg)("h3",{id:"tan"},"TAN"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TAN(numeric)")),(0,a.yg)("p",null,"Calculate the trigonometric tangent. See also Java Math.tan. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"TAN(ANGLE)"),(0,a.yg)("h3",{id:"tanh"},"TANH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TANH(numeric)")),(0,a.yg)("p",null,"Calculate the hyperbolic tangent. See also Java Math.tanh. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"TANH(X)"),(0,a.yg)("h3",{id:"mod"},"MOD"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MOD(dividendNumeric, divisorNumeric )")),(0,a.yg)("p",null,"The modulus expression."),(0,a.yg)("p",null,"Result has the same type as divisor. Result is NULL if either of arguments is NULL. If divisor is 0, an exception is raised. Result has the same sign as dividend or is equal to 0."),(0,a.yg)("p",null,"Usually arguments should have scale 0, but it isn't required by H2."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"MOD(A, B)"),(0,a.yg)("h3",{id:"ceil--ceiling"},"CEIL / CEILING"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CEIL | CEILING (numeric)")),(0,a.yg)("p",null,"Returns the smallest integer value that is greater than or equal to the argument. This method returns value of the same type as argument, but with scale set to 0 and adjusted precision, if applicable."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CEIL(A)"),(0,a.yg)("h3",{id:"exp"},"EXP"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"EXP(numeric)")),(0,a.yg)("p",null,"See also Java Math.exp. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"EXP(A)"),(0,a.yg)("h3",{id:"floor"},"FLOOR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"FLOOR(numeric)")),(0,a.yg)("p",null,"Returns the largest integer value that is less than or equal to the argument. This method returns value of the same type as argument, but with scale set to 0 and adjusted precision, if applicable."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"FLOOR(A)"),(0,a.yg)("h3",{id:"ln"},"LN"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LN(numeric)")),(0,a.yg)("p",null,"Calculates the natural (base e) logarithm as a double value. Argument must be a positive numeric value."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LN(A)"),(0,a.yg)("h3",{id:"log"},"LOG"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LOG(baseNumeric, numeric)")),(0,a.yg)("p",null,"Calculates the logarithm with specified base as a double value. Argument and base must be positive numeric values. Base cannot be equal to 1."),(0,a.yg)("p",null,"The default base is e (natural logarithm), in the PostgreSQL mode the default base is base 10. In MSSQLServer mode the optional base is specified after the argument."),(0,a.yg)("p",null,"Single-argument variant of LOG function is deprecated, use LN or LOG10 instead."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LOG(2, A)"),(0,a.yg)("h3",{id:"log10"},"LOG10"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LOG10(numeric)")),(0,a.yg)("p",null,"Calculates the base 10 logarithm as a double value. Argument must be a positive numeric value."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"LOG10(A)"),(0,a.yg)("h3",{id:"radians"},"RADIANS"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RADIANS(numeric)")),(0,a.yg)("p",null,"See also Java Math.toRadians. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"RADIANS(A)"),(0,a.yg)("h3",{id:"sqrt"},"SQRT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SQRT(numeric)")),(0,a.yg)("p",null,"See also Java Math.sqrt. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"SQRT(A)"),(0,a.yg)("h3",{id:"pi"},"PI"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PI()")),(0,a.yg)("p",null,"See also Java Math.PI. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"PI()"),(0,a.yg)("h3",{id:"power"},"POWER"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"POWER(numeric, numeric)")),(0,a.yg)("p",null,"See also Java Math.pow. This method returns a double."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"POWER(A, B)"),(0,a.yg)("h3",{id:"rand--random"},"RAND / RANDOM"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RAND | RANDOM([ int ])")),(0,a.yg)("p",null,"Calling the function without parameter returns the next a pseudo random number. Calling it with an parameter seeds the session's random number generator. This method returns a double between 0 (including) and 1 (excluding)."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"RAND()"),(0,a.yg)("h3",{id:"round"},"ROUND"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ROUND(numeric[, digitsInt])")),(0,a.yg)("p",null,"Rounds to a number of fractional digits. This method returns value of the same type as argument, but with adjusted precision and scale, if applicable."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"ROUND(N, 2)"),(0,a.yg)("h3",{id:"sign"},"SIGN"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SIGN(numeric)")),(0,a.yg)("p",null,"Returns -1 if the value is smaller than 0, 0 if zero or NaN, and otherwise 1."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"SIGN(N)"),(0,a.yg)("h3",{id:"trunc"},"TRUNC"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TRUNC | TRUNCATE(numeric[, digitsInt])")),(0,a.yg)("p",null,"When a numeric argument is specified, truncates it to a number of digits (to the next value closer to 0) and returns value of the same type as argument, but with adjusted precision and scale, if applicable."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"TRUNC(N, 2)"),(0,a.yg)("h2",{id:"time-and-date-functions"},"Time and Date Functions"),(0,a.yg)("h3",{id:"current_date"},"CURRENT_DATE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CURRENT_DATE [()]")),(0,a.yg)("p",null,"Returns the current date."),(0,a.yg)("p",null,"These functions return the same value within a transaction (default) or within a command depending on database mode."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CURRENT_DATE"),(0,a.yg)("h3",{id:"current_time"},"CURRENT_TIME"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CURRENT_TIME [()]")),(0,a.yg)("p",null,"Returns the current time with system time zone. The actual maximum available precision depends on operating system and JVM and can be 3 (milliseconds) or higher. Higher precision is not available before Java 9."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CURRENT_TIME"),(0,a.yg)("h3",{id:"current_timestamp--now"},"CURRENT_TIMESTAMP / NOW"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CURRENT_TIMESTAMP[()] | NOW()")),(0,a.yg)("p",null,"Returns the current timestamp with system time zone. The actual maximum available precision depends on operating system and JVM and can be 3 (milliseconds) or higher. Higher precision is not available before Java 9."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CURRENT_TIMESTAMP"),(0,a.yg)("h3",{id:"dateadd--timestampadd"},"DATEADD / TIMESTAMPADD"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATEADD| TIMESTAMPADD(dateAndTime, addIntLong, datetimeFieldString)")),(0,a.yg)("p",null,"Adds units to a date-time value. The datetimeFieldString indicates the unit. Use negative values to subtract units. addIntLong may be a long value when manipulating milliseconds, microseconds, or nanoseconds otherwise its range is restricted to int. This method returns a value with the same type as specified value if unit is compatible with this value. If specified field is a HOUR, MINUTE, SECOND, MILLISECOND, etc and value is a DATE value DATEADD returns combined TIMESTAMP. Fields DAY, MONTH, YEAR, WEEK, etc are not allowed for TIME values."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"DATEADD(CREATED, 1, 'MONTH')"),(0,a.yg)("h3",{id:"datediff"},"DATEDIFF"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATEDIFF(aDateAndTime, bDateAndTime, datetimeFieldString)")),(0,a.yg)("p",null,"Returns the number of crossed unit boundaries between two date-time values. This method returns a long. The datetimeField indicates the unit."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"DATEDIFF(T1.CREATED, T2.CREATED, 'MONTH')"),(0,a.yg)("h3",{id:"date_trunc"},"DATE_TRUNC"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATE_TRUNC (dateAndTime, datetimeFieldString)")),(0,a.yg)("p",null,"Truncates the specified date-time value to the specified field."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"DATE_TRUNC(CREATED, 'DAY');"),(0,a.yg)("h3",{id:"dayname"},"DAYNAME"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DAYNAME(dateAndTime)")),(0,a.yg)("p",null,"Returns the name of the day (in English)."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"DAYNAME(CREATED)"),(0,a.yg)("h3",{id:"day_of_month"},"DAY_OF_MONTH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DAY_OF_MONTH(dateAndTime)")),(0,a.yg)("p",null,"Returns the day of the month (1-31)."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"DAY_OF_MONTH(CREATED)"),(0,a.yg)("h3",{id:"day_of_week"},"DAY_OF_WEEK"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DAY_OF_WEEK(dateAndTime)")),(0,a.yg)("p",null,"Returns the day of the week (1-7) (Monday-Sunday), locale-specific."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"DAY_OF_WEEK(CREATED)"),(0,a.yg)("h3",{id:"day_of_year"},"DAY_OF_YEAR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DAY_OF_YEAR(dateAndTime)")),(0,a.yg)("p",null,"Returns the day of the year (1-366)."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"DAY_OF_YEAR(CREATED)"),(0,a.yg)("h3",{id:"extract"},"EXTRACT"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"EXTRACT ( datetimeField FROM dateAndTime)")),(0,a.yg)("p",null,"Returns a value of the specific time unit from a date/time value. This method returns a numeric value with EPOCH field and an int for all other fields."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"EXTRACT(SECOND FROM CURRENT_TIMESTAMP)"),(0,a.yg)("h3",{id:"formatdatetime"},"FORMATDATETIME"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"FORMATDATETIME (dateAndTime, formatString)")),(0,a.yg)("p",null,"Formats a date, time or timestamp as a string. The most important format characters are: y year, M month, d day, H hour, m minute, s second. For details of the format, see java.time.format.DateTimeFormatter."),(0,a.yg)("p",null,"This method returns a string."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CALL FORMATDATETIME(CREATED, 'yyyy-MM-dd HH:mm:ss')"),(0,a.yg)("h3",{id:"hour"},"HOUR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"HOUR(dateAndTime)")),(0,a.yg)("p",null,"Returns the hour (0-23) from a date/time value."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"HOUR(CREATED)"),(0,a.yg)("h3",{id:"minute"},"MINUTE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MINUTE(dateAndTime)")),(0,a.yg)("p",null,"Returns the minute (0-59) from a date/time value."),(0,a.yg)("p",null,"This function is deprecated, use EXTRACT instead of it."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"MINUTE(CREATED)"),(0,a.yg)("h3",{id:"month"},"MONTH"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MONTH(dateAndTime)")),(0,a.yg)("p",null,"Returns the month (1-12) from a date/time value."),(0,a.yg)("p",null,"This function is deprecated, use EXTRACT instead of it."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"MONTH(CREATED)"),(0,a.yg)("h3",{id:"monthname"},"MONTHNAME"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MONTHNAME(dateAndTime)")),(0,a.yg)("p",null,"Returns the name of the month (in English)."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"MONTHNAME(CREATED)"),(0,a.yg)("h3",{id:"parsedatetime--to_date"},"PARSEDATETIME / TO_DATE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PARSEDATETIME | TO_DATE(string, formatString)"),"\nParses a string and returns a TIMESTAMP WITH TIME ZONE value. The most important format characters are: y year, M month, d day, H hour, m minute, s second. For details of the format, see java.time.format.DateTimeFormatter."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CALL PARSEDATETIME('2021-04-08 13:34:45','yyyy-MM-dd HH:mm:ss')"),(0,a.yg)("h3",{id:"quarter"},"QUARTER"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"QUARTER(dateAndTime)")),(0,a.yg)("p",null,"Returns the quarter (1-4) from a date/time value."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"QUARTER(CREATED)"),(0,a.yg)("h3",{id:"second"},"SECOND"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SECOND(dateAndTime)")),(0,a.yg)("p",null,"Returns the second (0-59) from a date/time value."),(0,a.yg)("p",null,"This function is deprecated, use EXTRACT instead of it."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"SECOND(CREATED)"),(0,a.yg)("h3",{id:"week"},"WEEK"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"WEEK(dateAndTime)")),(0,a.yg)("p",null,"Returns the week (1-53) from a date/time value."),(0,a.yg)("p",null,"This function uses the current system locale."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"WEEK(CREATED)"),(0,a.yg)("h3",{id:"year"},"YEAR"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"YEAR(dateAndTime)")),(0,a.yg)("p",null,"Returns the year from a date/time value."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"YEAR(CREATED)"),(0,a.yg)("h2",{id:"system-functions"},"System Functions"),(0,a.yg)("h3",{id:"cast"},"CAST"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CAST(value as dataType)")),(0,a.yg)("p",null,"Converts a value to another data type."),(0,a.yg)("p",null,"Supported data types: STRING | VARCHAR, INT | INTEGER, LONG | BIGINT, BYTE, FLOAT, DOUBLE, DECIMAL(p,s), TIMESTAMP, DATE, TIME"),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"CONVERT(NAME AS INT)"),(0,a.yg)("h3",{id:"coalesce"},"COALESCE"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"COALESCE(aValue, bValue [,...])")),(0,a.yg)("p",null,"Returns the first value that is not null."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"COALESCE(A, B, C)"),(0,a.yg)("h3",{id:"ifnull"},"IFNULL"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"IFNULL(aValue, bValue)")),(0,a.yg)("p",null,"Returns the first value that is not null."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"IFNULL(A, B)"),(0,a.yg)("h3",{id:"nullif"},"NULLIF"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"NULLIF(aValue, bValue)")),(0,a.yg)("p",null,"Returns NULL if 'a' is equal to 'b', otherwise 'a'."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"NULLIF(A, B)"))}d.isMDXComponent=!0}}]);