// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";var n=[701,301,132,57,23,10,4,1],s=n.length;function i(r,i,a,o){var d,f,m,l,v,h,j,p;if(r<=0||0===i)return a;for(i<0&&(o*=-1),d=o<0?(1-r)*o:0,h=0;h<s;h++)for(j=m=n[h];j<r;j++)if(l=a[d+j*o],!t(l)){for(f=e(l),p=j;p>=m&&(!((v=a[d+(p-m)*o])<=l)||f&&v===l);p-=m)a[d+p*o]=v;a[d+p*o]=l}return a}var a=n.length;function o(r,s,i,o,d){var f,m,l,v,h,j,p;if(r<=0||0===s)return i;for(s<0&&(d-=(r-1)*(o*=-1)),h=0;h<a;h++)for(j=m=n[h];j<r;j++)if(l=i[d+j*o],!t(l)){for(f=e(l),p=j;p>=m&&(!((v=i[d+(p-m)*o])<=l)||f&&v===l);p-=m)i[d+p*o]=v;i[d+p*o]=l}return i}r(i,"ndarray",o);export{i as default,o as ndarray};
//# sourceMappingURL=index.mjs.map