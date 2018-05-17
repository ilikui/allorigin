define("modules/lib/template/template",function(e,n,r){!function(e,t){var o=t(e);if("function"==typeof define&&define.amd)define("template",function(){return o});else if("object"==typeof n)r.exports=o;else{var _=e.template;o.noConflict=function(){return e.template===o&&(e.template=_),o},e.template=o}}(this,function(){"use strict";function e(e){if(null===e)return"null";var n=typeof e;if("object"!==n)return n;var r=f.call(e).slice(8,-1).toLowerCase();return"object"!==r?r:e.constructor==Object?r:"unkonw"}function n(n){return"object"===e(n)}function r(){for(var e=arguments[0]||{},n=Array.prototype.slice.call(arguments,1),r=n.length,t=0;r>t;t++){var o=n[t];for(var _ in o)e[_]=o[_]}return e}function t(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")}function _(e){function n(){return"template.js error"}var r="template.js error\n\n";for(var t in e)r+="<"+t+">\n"+e[t]+"\n\n";return r+="<message>\n"+e.message+"\n\n","undefined"!=typeof console&&console.error&&console.error(r),l.error(e),n.toString=function(){return'__code__ = "template.js error"'},n}function c(e,n){function r(e){return e=e.replace(/('|")/g,"\\$1").replace(/\n/g," "),';__code__ += ("'+e+'")\n'}function t(e){var n;return-1!==e.search(/^=/)?(n=e.slice(1),n=a?"__encodeHTML__(typeof ("+n+') === "undefined" ? "" : '+n+")":n,";__code__ += ("+n+")\n"):-1!==e.search(/^:h=/)?(n=e.slice(3),";__code__ += (__encodeHTML__(typeof ("+n+') === "undefined" ? "" : '+n+"))\n"):-1!==e.search(/^:=/)?(n=e.slice(2),";__code__ += (typeof ("+n+') === "undefined" ? "" : '+n+")\n"):-1!==e.search(/^:u=/)?(n=e.slice(3),";__code__ += (typeof ("+n+') === "undefined" ? "" : encodeURI('+n+"))\n"):";"+e+"\n"}for(var o="",_=n.sTag,c=n.eTag,a=n.escape,u=e.split(_),i=0,l=u.length;l>i;i++){var f=u[i].split(c);1===f.length?o+=r(f[0]):(o+=t(f[0],!0),f[1]&&(o+=r(f[1])))}return o}function a(e,n){var r=c(e,n),t='\n    var html = (function (__data__, __encodeHTML__) {\n        var __str__ = "", __code__ = "";\n        for(var key in __data__) {\n            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n        }\n        eval(__str__);\n\n',o="\n        ;return __code__;\n    }(__data__, __encodeHTML__));\n    return html;\n",_=t+r+o;_=_.replace(/[\r]/g," ");try{var a=new Function("__data__","__encodeHTML__",_);return a.toString=function(){return r},a}catch(u){throw u.temp="function anonymous(__data__, __encodeHTML__) {"+_+"}",u}}function u(e,n){function c(r){try{var c=u(r,t);return c=n.compress?o(c):c}catch(a){return a.name="RenderError",a.tpl=e,a.render=u.toString(),_(a)}}n=r({},l,n);try{var u=a(e,n)}catch(i){return i.name="CompileError",i.tpl=e,i.render=i.temp,delete i.temp,_(i)}return c.toString=function(){return u.toString()},c}function i(e,r){if("string"!=typeof e)return"";var t=u(e);return n(r)?t(r):t}var l={sTag:"<%",eTag:"%>",compress:!1,escape:!0,error:function(){}},f={}.toString;return i.config=function(e){return n(e)&&(l=r(l,e)),r({},l)},i.__encodeHTML=t,i.__compress=o,i.__handelError=_,i.__compile=u,i.version="0.6.1",i})});