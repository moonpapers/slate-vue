(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{31:function(t,e,r){var n=r(10),o=r(37);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);t.exports=o.locals||{}},32:function(t,e,r){var n=r(10),o=r(39);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);t.exports=o.locals||{}},34:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"button",style:{color:t.color},on:{mousedown:function(e){return t.$emit("mouseDown",e)}}},[t._t("default")],2)};n._withStripped=!0;var o={name:"s-button",props:{active:Boolean,reversed:Boolean},computed:{color:function(){return this.reversed?this.active?"white":"#aaa":this.active?"black":"#ccc"}}},a=(r(36),r(5)),i=Object(a.a)(o,n,[],!1,null,"2b41aaf4",null);i.options.__file="site/pages/components/button.vue";e.a=i.exports},35:function(t,e,r){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"toolbar"},[this._t("default")],2)};n._withStripped=!0;var o={name:"toolbar"},a=(r(38),r(5)),i=Object(a.a)(o,n,[],!1,null,"39400657",null);i.options.__file="site/pages/components/toolbar.vue";e.a=i.exports},36:function(t,e,r){"use strict";var n=r(31);r.n(n).a},37:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n)()(!1);o.push([t.i,".button[data-v-2b41aaf4] {\n  cursor: pointer;\n}\n",""]),e.default=o},38:function(t,e,r){"use strict";var n=r(32);r.n(n).a},39:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n)()(!1);o.push([t.i,".toolbar[data-v-39400657] {\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 2px solid #eee;\n  margin-bottom: 20px;\n}\n",""]),e.default=o},54:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Slate",{attrs:{value:JSON.stringify(t.initialValue)}},[r("Toolbar",[r("MarkButton",{attrs:{format:"bold",icon:"format_bold"}}),t._v(" "),r("MarkButton",{attrs:{format:"italic",icon:"format_italic"}}),t._v(" "),r("MarkButton",{attrs:{format:"underline",icon:"format_underlined"}}),t._v(" "),r("MarkButton",{attrs:{format:"code",icon:"code"}}),t._v(" "),r("BlockButton",{attrs:{format:"heading-one",icon:"looks_one"}}),t._v(" "),r("BlockButton",{attrs:{format:"heading-two",icon:"looks_two"}}),t._v(" "),r("BlockButton",{attrs:{format:"block-quote",icon:"format_quote"}}),t._v(" "),r("BlockButton",{attrs:{format:"numbered-list",icon:"format_list_numbered"}}),t._v(" "),r("BlockButton",{attrs:{format:"bulleted-list",icon:"format_list_bulleted"}})],1),t._v(" "),r("Editable",{attrs:{placeholder:"Enter some rich text…",renderLeaf:t.renderLeaf,renderElement:t.renderElement}})],1)};n._withStripped=!0;var o=r(12);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=function(t){var e=t.attributes,r=t.children,n=t.leaf;return{render:function(){var t=arguments[0];return n.bold&&(r=t("strong",[r])),n.code&&(r=t("code",[r])),n.italic&&(r=t("em",[r])),n.underline&&(r=t("u",[r])),t("span",{attrs:i({},e)},[r])}}},c=function(t){var e=t.attributes,r=t.children,n=t.element;return{render:function(){var t=arguments[0];switch(n.type){case"block-quote":return t("blockquote",{attrs:i({},e)},[r]);case"bulleted-list":return t("ul",{attrs:i({},e)},[r]);case"heading-one":return t("h1",{attrs:i({},e)},[r]);case"heading-two":return t("h2",{attrs:i({},e)},[r]);case"list-item":return t("li",{attrs:i({},e)},[r]);case"numbered-list":return t("ol",{attrs:i({},e)},[r]);default:return t("p",{attrs:i({},e)},[r])}}}},l=r(34),f=r(13),d=r(0),p=function(t,e){var r=d.a.marks(t);return!!r&&!0===r[e]},m=function(t,e){p(t,e)?d.a.removeMark(t,e):d.a.addMark(t,e,!0)},b={name:"markButton",mixins:[o.f],components:{Button:l.a,Icon:f.a},props:{format:String,icon:String},render:function(){var t=this,e=arguments[0],r=this.$editor;return e(l.a,{attrs:{active:p(r,this.format)},on:{mouseDown:function(e){e.preventDefault(),m(r,t.format)}}},[e(f.a,{attrs:{icon:this.icon}})])}},v=r(5),h=Object(v.a)(b,void 0,void 0,!1,null,"5be7199a",null);h.options.__file="site/pages/components/markButton.vue";var y=h.exports;function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var x=["numbered-list","bulleted-list"],w=function(t,e){return!!_(d.a.nodes(t,{match:function(t){return t.type===e}}),1)[0]},k=function(t,e){var r=w(t,e),n=x.includes(e);if(d.i.unwrapNodes(t,{match:function(t){return x.includes(t.type)},split:!0}),d.i.setNodes(t,{type:r?"paragraph":n?"list-item":e}),!r&&n){var o={type:e,children:[]};d.i.wrapNodes(t,o)}},O={name:"blockButton",mixins:[o.f],components:{Button:l.a,Icon:f.a},props:{format:String,icon:String},render:function(){var t=this,e=arguments[0],r=this.$editor;return e(l.a,{attrs:{active:w(r,this.format)},on:{mouseDown:function(e){e.preventDefault(),k(r,t.format)}}},[e(f.a,{attrs:{icon:this.icon}})])}},B=Object(v.a)(O,void 0,void 0,!1,null,"0e6280fb",null);B.options.__file="site/pages/components/blockButton.vue";var j=B.exports,S=r(35),E=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0,italic:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}],M={name:"richtext",components:{Slate:o.e,Editable:o.a,Toolbar:S.a,MarkButton:y,BlockButton:j},data:function(){return{initialValue:E,renderLeaf:s,renderElement:c}}},D=Object(v.a)(M,n,[],!1,null,"1d4f74be",null);D.options.__file="site/pages/richtext/index.vue";e.default=D.exports}}]);