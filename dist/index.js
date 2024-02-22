"use strict";var c=function(o,f){return function(){return f||o((f={exports:{}}).exports,f),f.exports}};var l=c(function(D,S){S.exports=[701,301,132,57,23,10,4,1]});var h=c(function(E,s){
var y=require('@stdlib/math-base-assert-is-negative-zero/dist'),b=require('@stdlib/math-base-assert-is-nan/dist'),p=l(),j=p.length;function Z(o,f,a,r){var i,q,n,v,g,t,u,e;if(o<=0||f===0)return a;for(f<0&&(r*=-1),r<0?i=(1-o)*r:i=0,t=0;t<j;t++)for(n=p[t],u=n;u<o;u++)if(v=a[i+u*r],!b(v)){for(q=y(v),e=u;e>=n&&(g=a[i+(e-n)*r],!(g<=v&&!(q&&g===v)));e-=n)a[i+e*r]=g;a[i+e*r]=v}return a}s.exports=Z
});var G=c(function(F,A){
var m=require('@stdlib/math-base-assert-is-negative-zero/dist'),O=require('@stdlib/math-base-assert-is-nan/dist'),k=l(),R=k.length;function w(o,f,a,r,i){var q,n,v,g,t,u,e;if(o<=0||f===0)return a;for(f<0&&(r*=-1,i-=(o-1)*r),t=0;t<R;t++)for(n=k[t],u=n;u<o;u++)if(v=a[i+u*r],!O(v)){for(q=m(v),e=u;e>=n&&(g=a[i+(e-n)*r],!(g<=v&&!(q&&g===v)));e-=n)a[i+e*r]=g;a[i+e*r]=v}return a}A.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=h(),B=G();z(P,"ndarray",B);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
