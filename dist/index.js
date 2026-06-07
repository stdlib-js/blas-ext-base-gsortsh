"use strict";var h=function(e,v){return function(){return v||e((v={exports:{}}).exports,v),v.exports}};var k=h(function(T,m){m.exports=[701,301,132,57,23,10,4,1]});var f=h(function(U,b){
var O=require('@stdlib/math-base-assert-is-negative-zero/dist'),R=require('@stdlib/math-base-assert-is-nan/dist'),P=k(),w=P.length;function z(e,v,a,r,u){var q,s,g,t,c,i,o,n,p,l;for(q=a.data,s=a.accessors[0],g=a.accessors[1],v<0&&(r*=-1,u-=(e-1)*r),n=0;n<w;n++)for(c=P[n],p=c;p<e;p++)if(i=s(q,u+p*r),!R(i)){for(t=O(i),l=p;l>=c&&(o=s(q,u+(l-c)*r),!(o<=i&&!(t&&o===i)));l-=c)g(q,u+l*r,o);g(q,u+l*r,i)}return a}b.exports=z
});var y=h(function(V,G){
var B=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/math-base-assert-is-negative-zero/dist'),D=require('@stdlib/math-base-assert-is-nan/dist'),A=k(),E=f(),F=A.length;function H(e,v,a,r,u){var q,s,g,t,c,i,o,n;if(e<=0||v===0)return a;if(g=B(a),g.accessorProtocol)return E(e,v,g,r,u),a;for(v<0&&(r*=-1,u-=(e-1)*r),i=0;i<F;i++)for(s=A[i],o=s;o<e;o++)if(t=a[u+o*r],!D(t)){for(q=C(t),n=o;n>=s&&(c=a[u+(n-s)*r],!(c<=t&&!(q&&c===t)));n-=s)a[u+n*r]=c;a[u+n*r]=t}return a}G.exports=H
});var j=h(function(W,S){
var I=require('@stdlib/strided-base-stride2offset/dist'),J=y();function K(e,v,a,r){return J(e,v,a,r,I(e,r))}S.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=j(),M=y();L(Z,"ndarray",M);module.exports=Z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
