define("modules/app/proto-chain/proto-chain.es",function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_get=function(e,t,r){for(var o=!0;o;){var n=e,i=t,_=r;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,i);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(_)}var c=Object.getPrototypeOf(n);if(null===c)return void 0;e=c,t=i,r=_,o=!0,a=c=void 0}},_jquery=require("components/jquery/jquery"),_jquery2=_interopRequireDefault(_jquery),_uiBaseBase=require("modules/ui/base/base.es"),_utilObjectObject=require("modules/util/object/object.es");require("modules/util/template/template.es");var _utilTypeType=require("modules/util/type/type.es"),_utilEvalCodeEvalCode=require("modules/util/evalCode/evalCode.es"),protoChainTpl=function render(data){var keyArr=[],valArr=[];data=data||{},data.__encodeHTML__=window.template.__encodeHTML;for(var key in data)keyArr.push('"'+key+'"'),valArr.push(data[key]);var source="new Function("+keyArr.join(",")+', "\\"use strict\\";var __code__ = \\"\\";;__code__ += (\\"<div class=\\\\\\"wgt-proto-chain\\\\\\">     \\");list.forEach(function (v, k) {;__code__ += (\\"     <div class=\\\\\\"proto-item\\\\\\" data-index=\\\\\\"\\");__code__ += (__encodeHTML__(typeof (k) === \\"undefined\\" ? \\"\\" : k));__code__ += (\\"\\\\\\">         <header>             <h3>                 \\");__code__ += (__encodeHTML__(typeof (getName(v)) === \\"undefined\\" ? \\"\\" : getName(v)));__code__ += (\\"             </h3>         </header>         <div class=\\\\\\"body\\\\\\">             <p>类型：\\");__code__ += (__encodeHTML__(typeof (type(v)) === \\"undefined\\" ? \\"\\" : type(v)));__code__ += (\\"</p>             <p>自身属性(可枚举)：\\");__code__ += (__encodeHTML__(typeof (getOwnMember(v).length) === \\"undefined\\" ? \\"\\" : getOwnMember(v).length));__code__ += (\\"</p>             <p>自身属性(全部)：\\");__code__ += (__encodeHTML__(typeof (getOwnAllMember(v).length) === \\"undefined\\" ? \\"\\" : getOwnAllMember(v).length));__code__ += (\\"</p>             <p>继承属性(可枚举)：\\");__code__ += (__encodeHTML__(typeof (getMember(v).length) === \\"undefined\\" ? \\"\\" : getMember(v).length));__code__ += (\\"</p>         </div>         \\");if (k < list.length - 1) {;__code__ += (\\"             <div class=\\\\\\"arrow\\\\\\">                 <svg width=\\\\\\"300\\\\\\" height=\\\\\\"40\\\\\\">                     <line x1=\\\\\\"150\\\\\\" y1=\\\\\\"0\\\\\\" x2=\\\\\\"150\\\\\\" y2=\\\\\\"40\\\\\\" style=\\\\\\"stroke:rgb(0,0,0);stroke-width:1\\\\\\"/>                     <line x1=\\\\\\"146\\\\\\" y1=\\\\\\"34\\\\\\" x2=\\\\\\"150\\\\\\" y2=\\\\\\"40\\\\\\" style=\\\\\\"stroke:rgb(0,0,0);stroke-width:1\\\\\\"/>                     <line x1=\\\\\\"154\\\\\\" y1=\\\\\\"34\\\\\\" x2=\\\\\\"150\\\\\\" y2=\\\\\\"40\\\\\\" style=\\\\\\"stroke:rgb(0,0,0);stroke-width:1\\\\\\"/>                 </svg>             </div>         \\");};__code__ += (\\"     </div>     \\");});__code__ += (\\" </div> \\");return __code__")';try{var fn=eval(source),html=fn.apply(null,valArr)}catch(e){return e.name="RenderError",e.tpl="modules/app/proto-chain/proto-chain.tmpl",window.template.__handelError(e),"template.js error"}return html},ProtoChain=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.$screen=_jquery2["default"]("#screen"),this.chain=[],this.code="",this.bindEvent()}return _inherits(t,e),_createClass(t,[{key:"bindEvent",value:function(){var e=this;this.$screen.on("click",".wgt-proto-chain .proto-item",function(){var t,r=_jquery2["default"](this).data("index");0==r?t=e.code:(t=e.chain[r],t=_utilTypeType.isNullOrUndef(t)?t:t.constructor.name),e.emit("select",{code:t})})}},{key:"render",value:function(e){var t=_utilEvalCodeEvalCode.evalCode(e);this.chain=_utilObjectObject.getProtoChain(t),this.code=e,this.$screen.html(protoChainTpl({list:this.chain,type:_utilTypeType.type,getName:_utilObjectObject.getName,getMember:_utilObjectObject.getMember,getOwnMember:_utilObjectObject.getOwnMember,getOwnAllMember:_utilObjectObject.getOwnAllMember}))}}]),t}(_uiBaseBase.UIBase);exports.ProtoChain=ProtoChain});