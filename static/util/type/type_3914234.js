define("modules/util/type/type.es",function(n,t){"use strict";function e(n){if(null===n)return"null";var t=typeof n;if("object"!==t)return t;var e;try{e=l.call(n).slice(8,-1).toLowerCase()}catch(u){return"object"}return"object"!==e?e:n.constructor==Object?e:"unknown"}function u(n){return"object"===e(n)}function r(n){return"function"===e(n)}function c(n){return"null"===e(n)}function i(n){return"undefined"===e(n)}function o(n){return c(n)||i(n)}Object.defineProperty(t,"__esModule",{value:!0});var l="".toString;t.type=e,t.isObject=u,t.isFunction=r,t.isNull=c,t.isUndef=i,t.isNullOrUndef=o});