define("modules/app/index.es",function(e,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){y.on("keypress",function(e){if(13!==e.keyCode)return 1;var o=a["default"](this).val().trim();return""===o?(i["default"]("#index"),2):void i["default"]("#search?code="+encodeURIComponent(o))}),b.on("select",function(e,o){i["default"]("#search?code="+encodeURIComponent(o.code))}),h.on("select",function(e,o){i["default"]("#detail?code="+encodeURIComponent(o.code))})}function u(){y.autocomplete({source:l.getOwnMember(window)}),i["default"].base("/allorigin"),i["default"]("*",function(e,o){var t=e.hash.split("?"),n=t[0],u=t[1];return"index"===n?(b.render(),1):"search"===n?(h.render(decodeURIComponent(c.getQueryString("code",u))),2):"detail"===n?(C.render(decodeURIComponent(c.getQueryString("code",u))),3):"about"===n?(f.render(),9):(o(),0)}),i["default"]("/",function(){b.render()}),i["default"](),n()}Object.defineProperty(o,"__esModule",{value:!0});var d=e("components/jquery/jquery"),a=t(d);e("components/jquery-ui/autocomplete");var r=e("modules/lib/page.js/page"),i=t(r),c=e("modules/util/uri/uri.es"),l=(e("modules/util/type/type.es"),e("modules/util/object/object.es")),s=e("modules/app/common-case/common-case.es"),p=e("modules/app/proto-chain/proto-chain.es"),m=e("modules/app/detail/detail.es"),f=e("modules/app/about/about.es"),y=(a["default"]("#screen"),a["default"]("#aio")),b=new s.CommonCase,h=new p.ProtoChain,C=new m.Detail;o.init=u});