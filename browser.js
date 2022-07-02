// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__,f=t,c=function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?f:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Number.NEGATIVE_INFINITY,b=function(e){return 0===e&&1/e===d},s=function(e){return e!=e},y=[701,301,132,57,23,10,4,1],v=y.length;function g(e,r,t,n){var o,i,u,a,l,f,c,_;if(e<=0||0===r)return t;for(r<0&&(n*=-1),o=n<0?(1-e)*n:0,f=0;f<v;f++)for(c=u=y[f];c<e;c++)if(a=t[o+c*n],!s(a)){for(i=b(a),_=c;_>=u&&(!((l=t[o+(_-u)*n])<=a)||i&&l===a);_-=u)t[o+_*n]=l;t[o+_*n]=a}return t}var m=y.length;return p(g,"ndarray",(function(e,r,t,n,o){var i,u,a,l,f,c,_;if(e<=0||0===r)return t;for(r<0&&(o-=(e-1)*(n*=-1)),f=0;f<m;f++)for(c=u=y[f];c<e;c++)if(a=t[o+c*n],!s(a)){for(i=b(a),_=c;_>=u&&(!((l=t[o+(_-u)*n])<=a)||i&&l===a);_-=u)t[o+_*n]=l;t[o+_*n]=a}return t})),g},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gsortsh=r();
//# sourceMappingURL=browser.js.map
