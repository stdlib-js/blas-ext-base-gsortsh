"use strict";var h=function(v,e){return function(){try{return e||v((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var k=h(function(T,m){m.exports=[701,301,132,57,23,10,4,1]});var f=h(function(U,b){
var O=require('@stdlib/math-base-assert-is-negative-zero/dist'),R=require('@stdlib/math-base-assert-is-nan/dist'),P=k(),w=P.length;function z(v,e,r,a,u){var q,s,g,t,c,i,o,n,p,l;for(q=r.data,s=r.accessors[0],g=r.accessors[1],e<0&&(a*=-1,u-=(v-1)*a),n=0;n<w;n++)for(c=P[n],p=c;p<v;p++)if(i=s(q,u+p*a),!R(i)){for(t=O(i),l=p;l>=c&&(o=s(q,u+(l-c)*a),!(o<=i&&!(t&&o===i)));l-=c)g(q,u+l*a,o);g(q,u+l*a,i)}return r}b.exports=z
});var y=h(function(V,G){
var B=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/math-base-assert-is-negative-zero/dist'),D=require('@stdlib/math-base-assert-is-nan/dist'),A=k(),E=f(),F=A.length;function H(v,e,r,a,u){var q,s,g,t,c,i,o,n;if(v<=0||e===0)return r;if(g=B(r),g.accessorProtocol)return E(v,e,g,a,u),r;for(e<0&&(a*=-1,u-=(v-1)*a),i=0;i<F;i++)for(s=A[i],o=s;o<v;o++)if(t=r[u+o*a],!D(t)){for(q=C(t),n=o;n>=s&&(c=r[u+(n-s)*a],!(c<=t&&!(q&&c===t)));n-=s)r[u+n*a]=c;r[u+n*a]=t}return r}G.exports=H
});var j=h(function(W,S){
var I=require('@stdlib/strided-base-stride2offset/dist'),J=y();function K(v,e,r,a){return J(v,e,r,a,I(v,a))}S.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=j(),M=y();L(Z,"ndarray",M);module.exports=Z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
