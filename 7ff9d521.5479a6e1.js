(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(86)),i={id:"tags",title:"Tags",sidebar_label:"Tags"},l={unversionedId:"tags",id:"tags",isDocsHomePage:!1,title:"Tags",description:"- Block Syntax",source:"@site/docs\\tags.md",slug:"/tags",permalink:"/boopie-docs/docs/tags",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tags.md",version:"current",sidebar_label:"Tags",sidebar:"someSidebar",previous:{title:"AutoMod V2",permalink:"/boopie-docs/docs/automod"},next:{title:"TagScriptEngine Blocks",permalink:"/boopie-docs/docs/tagscript"}},c=[{value:"Block Syntax",id:"block-syntax",children:[]},{value:"Usage",id:"usage",children:[{value:"Default Variables",id:"default-variables",children:[]}]}],b={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#block-syntax"}),"Block Syntax")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#default-variables"}),"Default Variables"))))),Object(o.b)("p",null,"Boopie comes with the ability to create powerful custom commands through the usage of tag blocks. The basic block begins with a ",Object(o.b)("inlineCode",{parentName:"p"},"{")," and ends with an ",Object(o.b)("inlineCode",{parentName:"p"},"}"),". More advanced blocks may contain after the block declaration ",Object(o.b)("inlineCode",{parentName:"p"},"()")," to specify a parameter or a ",Object(o.b)("inlineCode",{parentName:"p"},":")," to specify a payload."),Object(o.b)("h2",{id:"block-syntax"},"Block Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"{block(parameter):payload}")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[arg]")," = Optional"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<arg>")," = Required"),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Add a tag using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]tag add mytag Hello world!\n")),Object(o.b)("p",null,"Invoke the tag with your bot prefix and the tag\u2019s name as if it were a command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]mytag\n")),Object(o.b)("p",null,"The bot will then respond with the stored tag content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Hello world!\n")),Object(o.b)("h3",{id:"default-variables"},"Default Variables"),Object(o.b)("p",null,"Tags come with built-in variable blocks you can access for more information about the invocation context. These are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"args")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"author")," | ",Object(o.b)("inlineCode",{parentName:"li"},"user")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"target")," | ",Object(o.b)("inlineCode",{parentName:"li"},"member")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"channel")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"guild")," | ",Object(o.b)("inlineCode",{parentName:"li"},"server"))),Object(o.b)("p",null,"You can see attributes available using these blocks in Default Variables."),Object(o.b)("p",null,"Below is an example tag that returns info related to the tag author."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]tag add authorinfo Username: **{author}**\nID: **{author(id)}**\nCreation Date: **{author(created_at)}**\nBot: **{author(bot)}**\n")),Object(o.b)("p",null,"The args block can be useful for customizing tags and works well with the Command Block. Simple echo command that validates if args were provided:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]tag add echo {if({args}==):You must provide text to echo.|{args}}\n")),Object(o.b)("p",null,"Here\u2019s a tag that uses the default variable blocks as well as the If Block:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'    [p]tag add startertag Hi, this is an example of a tag.\n    This tag will now invoke a ping command.\n    {c:ping}\n    {delete({args(0)}==delete)}\n    {embed({\n        "title":"The server this was invoked on was {server}.",\n        "description":"{if({args}==):You did not provide any arguments for this tag|The arguments provided were: `{args}`}",\n        "thumbnail":{"url":"{guild(icon)}"},\n        "author":{"name":"{author} invoked this tag.","icon_url":"{author(avatar)}"},\n        "color":2105893,\n        "footer":{"icon_url":"{author(avatar)}","text":"{target} is the target of this tag."}\n    })}\n')))}u.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);