define("modules/ui/base/base.es",function(t,e){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,o){for(var r=!0;r;){var n=t,i=e,u=o;r=!1,null===n&&(n=Function.prototype);var c=Object.getOwnPropertyDescriptor(n,i);if(void 0!==c){if("value"in c)return c.value;var a=c.get;return void 0===a?void 0:a.call(u)}var l=Object.getPrototypeOf(n);if(null===l)return void 0;t=l,e=i,o=u,r=!0,c=l=void 0}},i=t("modules/util/event/event.es"),u=1,c=function(t){function e(){o(this,e),n(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.guid=u++}return r(e,t),e}(i.EventEmitter);e.UIBase=c});