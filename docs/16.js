(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1131:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[e("Editable",{attrs:{decorate:this.decorate,placeholder:"Enter some plain text...",renderLeaf:this.renderLeaf}})],1)};r._withStripped=!0;var a=n(1117),i=n.n(a),o=n(5),l=n(0),u=n(30),c=n.n(u);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t){var e=t.attributes,n=t.children,r=t.leaf;return{render:function(){var t=arguments[0],a={fontWeight:r.bold&&"bold",fontStyle:r.italic&&"italic",textDecoration:r.underlined&&"underline"};r.title&&(a=s({},a,{},{display:"inline-block",fontWeight:"bold",fontSize:"20px",margin:"20px 0 10px 0"})),r.list&&(a=s({},a,{},{paddingLeft:"10px",fontSize:"20px",lineHeight:"10px"})),r.hr&&(a=s({},a,{},{display:"block",textAlign:"center",borderBottom:"2px solid #ddd"})),r.blockquote&&(a=s({},a,{},{display:"inlineBlock",borderLeft:"2px solid #ddd",paddingLeft:"10px",color:"#aaa",fontStyle:"italic"})),r.code&&(a=s({},a,{},{fontFamily:"monospace",backgroundColor:"#eee",padding:"3px"}));var i={style:a,attrs:e};return t("span",c()([{},i]),[n])}}};function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}i.a.languages.markdown=i.a.languages.extend("markup",{}),i.a.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),i.a.languages.markdown.bold.inside.url=i.a.util.clone(i.a.languages.markdown.url),i.a.languages.markdown.italic.inside.url=i.a.util.clone(i.a.languages.markdown.url),i.a.languages.markdown.bold.inside.italic=i.a.util.clone(i.a.languages.markdown.italic),i.a.languages.markdown.italic.inside.bold=i.a.util.clone(i.a.languages.markdown.bold);var h=[{children:[{text:"Slate is flexible enough to add **decorations** that can format text based on its content. For example, this editor has **Markdown** preview decorations on it, to make it _dead_ simple to make an editor with built-in Markdown previewing."}]},{children:[{text:"## Try it out!"}]},{children:[{text:"Try it out for yourself!"}]}],w={name:"markdown-preview",components:{Slate:o.e,Editable:o.a},mixins:[o.f],data:function(){return{initialValue:h,renderLeaf:p}},computed:{decorate:function(){return function(t){var e=g(t,2),n=e[0],r=e[1],a=[];if(!l.h.isText(n))return a;var o,u=function t(e){return"string"==typeof e?e.length:"string"==typeof e.content?e.content.length:e.content.reduce((function(e,n){return e+t(n)}),0)},c=0,d=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=y(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,i=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){o=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw a}}}}(i.a.tokenize(n.text,i.a.languages.markdown));try{for(d.s();!(o=d.n()).done;){var s,f=o.value,p=c+u(f);if("string"!=typeof f)a.push((b(s={},f.type,!0),b(s,"anchor",{path:r,offset:c}),b(s,"focus",{path:r,offset:p}),s));c=p}}catch(t){d.e(t)}finally{d.f()}return a}}}},v=n(6),k=Object(v.a)(w,r,[],!1,null,"1ea24f7c",null);k.options.__file="site/pages/markdown-preview/index.vue";e.default=k.exports}}]);