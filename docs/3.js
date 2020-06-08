(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7],{1118:function(t,e,n){"use strict";var r=n(51);n.n(r).a},1119:function(t,e,n){(e=n(10)(!1)).push([t.i,".editableVoidElement[data-v-201a7140] {\n  box-shadow: 0 0 0 3px #ddd;\n  padding: 8px;\n}\n.editableVoidElement__input[data-v-201a7140] {\n  margin: 8px 0;\n}\n.editableVoidElement__richtext[data-v-201a7140] {\n  padding: 20px;\n  border: 2px solid #ddd;\n}\n.unset[data-v-201a7140] {\n  width: unset;\n}\n",""]),t.exports=e},1122:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[e("Toolbar",[e("InsertEditableVoidButton")],1),this._v(" "),e("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement}})],1)};r._withStripped=!0;var o=n(5),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{contenteditable:"false"}},[n("div",{staticClass:"editableVoidElement"},[n("h4",[t._v("Name:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"editableVoidElement__input",attrs:{type:"text"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),n("h4",[t._v("Left or right handed:")]),t._v(" "),n("input",{staticClass:"unset",attrs:{type:"radio",name:"handedness",value:"left"}}),t._v("Left"),n("br"),t._v(" "),n("input",{staticClass:"unset",attrs:{type:"radio",name:"handedness",value:"right"}}),t._v("Right\n    "),n("h4",[t._v("Tell us about yourself:")]),t._v(" "),n("div",{staticClass:"editableVoidElement__richtext"},[n("RichText")],1)]),t._v(" "),t._t("default")],2)};i._withStripped=!0;var a={name:"editableVoidElement",components:{RichText:n(54).default},data:function(){return{inputValue:""}}},s=(n(1118),n(6)),l=Object(s.a)(a,i,[],!1,null,"201a7140",null);l.options.__file="site/pages/editable-voids/editableVoidElement.vue";var u=l.exports;function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t){var e=t.attributes,n=t.children,r=t.element;return{components:{EditableVoidElement:u},render:function(){var t=arguments[0];switch(r.type){case"editable-void":return t(u,{attrs:d({},e,{element:r})},[n]);default:return t("p",{attrs:d({},e)},[n])}}}},v=n(35),b=function(){var t=this.$createElement,e=this._self._c||t;return e("Button",{on:{mouseDown:this.onMouseDown}},[e("Icon",{attrs:{icon:"add"}})],1)};b._withStripped=!0;var m=n(32),h=n(31),_={name:"insertEditableVoidButton",components:{Button:m.a,Icon:h.a},methods:{onMouseDown:function(t){var e,n;t.preventDefault(),e=this.$editor,n={type:"editable-void",children:[{text:""}]},o.h.insertNodes(e,n)}}},y=Object(s.a)(_,b,[],!1,null,"c1285292",null);y.options.__file="site/pages/editable-voids/insertEditableVoidButton.vue";var g=y.exports,x=[{type:"paragraph",children:[{text:"In addition to nodes that contain editable text, you can insert void nodes, which can also contain editable elements, inputs, or an entire other Slate editor."}]},{type:"editable-void",children:[{text:""}]},{type:"paragraph",children:[{text:""}]}],w={name:"editable-voids",components:{Slate:o.e,Editable:o.a,Toolbar:v.a,InsertEditableVoidButton:g},data:function(){return{initialValue:x,renderElement:f}},created:function(){var t,e;t=this.$editor,e=t.isVoid,t.isVoid=function(t){return"editable-void"===t.type||e(t)}}},O=Object(s.a)(w,r,[],!1,null,"51a1b84e",null);O.options.__file="site/pages/editable-voids/index.vue";e.default=O.exports},27:function(t,e,n){var r=n(9),o=n(34);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},28:function(t,e,n){var r=n(9),o=n(37);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},29:function(t,e,n){var r=n(9),o=n(39);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},31:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon material-icons"},[this._v(this._s(this.icon))])};r._withStripped=!0;var o={name:"icon",props:{icon:String}},i=(n(33),n(6)),a=Object(i.a)(o,r,[],!1,null,"0a3f834d",null);a.options.__file="site/pages/components/icon.vue";e.a=a.exports},32:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"button",style:{color:t.color},on:{mousedown:function(e){return t.$emit("mouseDown",e)}}},[t._t("default")],2)};r._withStripped=!0;var o={name:"s-button",props:{active:Boolean,reversed:Boolean},computed:{color:function(){return this.reversed?this.active?"white":"#aaa":this.active?"black":"#ccc"}}},i=(n(36),n(6)),a=Object(i.a)(o,r,[],!1,null,"2b41aaf4",null);a.options.__file="site/pages/components/button.vue";e.a=a.exports},33:function(t,e,n){"use strict";var r=n(27);n.n(r).a},34:function(t,e,n){(e=n(10)(!1)).push([t.i,".icon[data-v-0a3f834d] {\n  font-size: 18px;\n  vertical-align: text-bottom;\n}\n",""]),t.exports=e},35:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"toolbar"},[this._t("default")],2)};r._withStripped=!0;var o={name:"toolbar"},i=(n(38),n(6)),a=Object(i.a)(o,r,[],!1,null,"39400657",null);a.options.__file="site/pages/components/toolbar.vue";e.a=a.exports},36:function(t,e,n){"use strict";var r=n(28);n.n(r).a},37:function(t,e,n){(e=n(10)(!1)).push([t.i,".button[data-v-2b41aaf4] {\n  cursor: pointer;\n}\n",""]),t.exports=e},38:function(t,e,n){"use strict";var r=n(29);n.n(r).a},39:function(t,e,n){(e=n(10)(!1)).push([t.i,".toolbar[data-v-39400657] {\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 2px solid #eee;\n  margin-bottom: 20px;\n}\n",""]),t.exports=e},51:function(t,e,n){var r=n(9),o=n(1119);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},54:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Slate",{attrs:{value:JSON.stringify(t.initialValue)}},[n("Toolbar",[n("MarkButton",{attrs:{format:"bold",icon:"format_bold"}}),t._v(" "),n("MarkButton",{attrs:{format:"italic",icon:"format_italic"}}),t._v(" "),n("MarkButton",{attrs:{format:"underline",icon:"format_underlined"}}),t._v(" "),n("MarkButton",{attrs:{format:"code",icon:"code"}}),t._v(" "),n("BlockButton",{attrs:{format:"heading-one",icon:"looks_one"}}),t._v(" "),n("BlockButton",{attrs:{format:"heading-two",icon:"looks_two"}}),t._v(" "),n("BlockButton",{attrs:{format:"block-quote",icon:"format_quote"}}),t._v(" "),n("BlockButton",{attrs:{format:"numbered-list",icon:"format_list_numbered"}}),t._v(" "),n("BlockButton",{attrs:{format:"bulleted-list",icon:"format_list_bulleted"}})],1),t._v(" "),n("Editable",{attrs:{placeholder:"Enter some rich text…",renderLeaf:t.renderLeaf,renderElement:t.renderElement}})],1)};r._withStripped=!0;var o=n(5);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t){var e=t.attributes,n=t.children,r=t.leaf;return{render:function(){var t=arguments[0];return r.bold&&(n=t("strong",[n])),r.code&&(n=t("code",[n])),r.italic&&(n=t("em",[n])),r.underline&&(n=t("u",[n])),t("span",{attrs:a({},e)},[n])}}},u=function(t){var e=t.attributes,n=t.children,r=t.element;return{render:function(){var t=arguments[0];switch(r.type){case"block-quote":return t("blockquote",{attrs:a({},e)},[n]);case"bulleted-list":return t("ul",{attrs:a({},e)},[n]);case"heading-one":return t("h1",{attrs:a({},e)},[n]);case"heading-two":return t("h2",{attrs:a({},e)},[n]);case"list-item":return t("li",{attrs:a({},e)},[n]);case"numbered-list":return t("ol",{attrs:a({},e)},[n]);default:return t("p",{attrs:a({},e)},[n])}}}},c=n(32),d=n(31),p=n(0),f=function(t,e){var n=p.a.marks(t);return!!n&&!0===n[e]},v=function(t,e){f(t,e)?p.a.removeMark(t,e):p.a.addMark(t,e,!0)},b={name:"markButton",mixins:[o.f],components:{Button:c.a,Icon:d.a},props:{format:String,icon:String},render:function(){var t=this,e=arguments[0],n=this.$editor;return e(c.a,{attrs:{active:f(n,this.format)},on:{mouseDown:function(e){e.preventDefault(),v(n,t.format)}}},[e(d.a,{attrs:{icon:this.icon}})])}},m=n(6),h=Object(m.a)(b,void 0,void 0,!1,null,"5be7199a",null);h.options.__file="site/pages/components/markButton.vue";var _=h.exports;function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=["numbered-list","bulleted-list"],w=function(t,e){return!!y(p.a.nodes(t,{match:function(t){return t.type===e}}),1)[0]},O=function(t,e){var n=w(t,e),r=x.includes(e);if(p.i.unwrapNodes(t,{match:function(t){return x.includes(t.type)},split:!0}),p.i.setNodes(t,{type:n?"paragraph":r?"list-item":e}),!n&&r){var o={type:e,children:[]};p.i.wrapNodes(t,o)}},E={name:"blockButton",mixins:[o.f],components:{Button:c.a,Icon:d.a},props:{format:String,icon:String},render:function(){var t=this,e=arguments[0],n=this.$editor;return e(c.a,{attrs:{active:w(n,this.format)},on:{mouseDown:function(e){e.preventDefault(),O(n,t.format)}}},[e(d.a,{attrs:{icon:this.icon}})])}},j=Object(m.a)(E,void 0,void 0,!1,null,"0e6280fb",null);j.options.__file="site/pages/components/blockButton.vue";var k=j.exports,B=n(35),S=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0,italic:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}],V={name:"richtext",components:{Slate:o.e,Editable:o.a,Toolbar:B.a,MarkButton:_,BlockButton:k},data:function(){return{initialValue:S,renderLeaf:l,renderElement:u}}},P=Object(m.a)(V,r,[],!1,null,"1d4f74be",null);P.options.__file="site/pages/richtext/index.vue";e.default=P.exports}}]);