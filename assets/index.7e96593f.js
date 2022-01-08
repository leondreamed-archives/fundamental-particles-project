var O=Object.defineProperty,_=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var G=(t,e,r)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))S.call(e,r)&&G(t,r,e[r]);if(w)for(var r of w(e))V.call(e,r)&&G(t,r,e[r]);return t},b=(t,e)=>_(t,R(e));import{m as v}from"./vendor.8c0b89ba.js";function y(t){if(!Array.isArray(t))throw new TypeError(`Expected an array, got ${typeof t}`);t=[...t];for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}var A=1/0,I=9007199254740991,C=17976931348623157e292,T=0/0,N="[object Function]",$="[object GeneratorFunction]",j="[object Symbol]",B=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,q=/^0o[0-7]+$/i,L=/^(?:0|[1-9]\d*)$/,W=parseInt,X=Object.prototype,x=X.toString,H=Math.ceil,K=Math.max;function U(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(i);++n<i;)a[n]=t[n+e];return a}function Y(t,e){return e=e==null?I:e,!!e&&(typeof t=="number"||L.test(t))&&t>-1&&t%1==0&&t<e}function Z(t,e,r){if(!m(r))return!1;var n=typeof e;return(n=="number"?z(r)&&Y(e,r.length):n=="string"&&e in r)?Q(r[e],t):!1}function J(t,e,r){(r?Z(t,e,r):e===void 0)?e=1:e=K(st(e),0);var n=t?t.length:0;if(!n||e<1)return[];for(var i=0,a=0,c=Array(H(n/e));i<n;)c[a++]=U(t,i,i+=e);return c}function Q(t,e){return t===e||t!==t&&e!==e}function z(t){return t!=null&&et(t.length)&&!tt(t)}function tt(t){var e=m(t)?x.call(t):"";return e==N||e==$}function et(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=I}function m(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function rt(t){return!!t&&typeof t=="object"}function nt(t){return typeof t=="symbol"||rt(t)&&x.call(t)==j}function it(t){if(!t)return t===0?t:0;if(t=ot(t),t===A||t===-A){var e=t<0?-1:1;return e*C}return t===t?t:0}function st(t){var e=it(t),r=e%1;return e===e?r?e-r:e:0}function ot(t){if(typeof t=="number")return t;if(nt(t))return T;if(m(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=m(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(B,"");var r=F.test(t);return r||q.test(t)?W(t.slice(2),r?2:8):D.test(t)?T:+t}var at=J;const l=[["up","charm","top",["photon","gluon"],"higgsBoson"],["down","strange","bottom",["photon","gluon"]],["electron","muon","tau","zBoson"],["electronNeutrino","muonNeutrino","tauNeutrino","wBoson"]],E=t=>typeof t=="object"&&t!==null,M=t=>E(t)&&!(t instanceof RegExp)&&!(t instanceof Error)&&!(t instanceof Date),ct=Symbol("mapObjectSkip"),f=(t,e,r,n=new WeakMap)=>{if(r=o({deep:!1,target:{}},r),n.has(t))return n.get(t);n.set(t,r.target);const{target:i}=r;delete r.target;const a=c=>c.map(p=>M(p)?f(p,e,r,n):p);if(Array.isArray(t))return a(t);for(const[c,p]of Object.entries(t)){const h=e(c,p,t);if(h===ct)continue;let[g,u,{shouldRecurse:P=!0}={}]=h;g!=="__proto__"&&(r.deep&&P&&M(u)&&(u=Array.isArray(u)?a(u):f(u,e,r,n)),i[g]=u)}return i};function ut(t,e,r){if(!E(t))throw new TypeError(`Expected an object, got \`${t}\` (${typeof t})`);return f(t,e,r)}const d=(t,e)=>ut(e,(r,n)=>[r,b(o({},n),{type:t})]),s=({mass:t,lessThan:e,approx:r,unit:n})=>{let i="";return r?i+="\u2248":e&&(i+="<"),i+=`${t} ${n}/c<sup>2</sup>`,i},pt=d("boson",{gluon:{name:"gluon",mass:"0",charge:"0",spin:"1"},photon:{name:"photon",mass:"0",charge:"0",spin:"1"},zBoson:{name:"Z boson",mass:s({mass:91.2,unit:"GeV",approx:!0}),charge:"0",spin:"1"},wBoson:{name:"W boson",mass:s({mass:80.4,unit:"GeV",approx:!0}),charge:"\xB11",spin:"1"},higgsBoson:{name:"higgs",mass:s({mass:126,unit:"GeV",approx:!0}),charge:"0",spin:"0"}}),mt=d("quark",{up:{name:"up",charge:"2/3",spin:"1/2",mass:s({mass:2.3,unit:"MeV",approx:!0})},down:{name:"down",charge:"-1/3",spin:"1/2",mass:s({mass:4.8,unit:"MeV",approx:!0})},charm:{name:"charm",charge:"2/3",spin:"1/2",mass:s({mass:1.275,unit:"GeV",approx:!0})},strange:{name:"strange",charge:"-1/3",spin:"1/2",mass:s({mass:95,unit:"MeV",approx:!0})},top:{name:"top",charge:"2/3",spin:"1/2",mass:s({mass:137,unit:"GeV",approx:!0})},bottom:{name:"bottom",charge:"-1/3",spin:"1/2",mass:s({mass:4.12,unit:"GeV",approx:!0})}}),lt=d("lepton",{electron:{name:"electron",mass:s({mass:.511,unit:"MeV",approx:!0}),charge:"-1",spin:"1/2"},muon:{name:"muon",mass:s({mass:.511,unit:"MeV",approx:!0}),charge:"-1",spin:"1/2"},tau:{name:"tau",mass:s({mass:1.777,unit:"GeV",approx:!0}),charge:"-1",spin:"1/2"},electronNeutrino:{name:"electron neutrino",mass:s({mass:2.2,unit:"eV",lessThan:!0}),charge:"0",spin:"1/2"},muonNeutrino:{name:"muon neutrino",mass:s({mass:.17,unit:"MeV",lessThan:!0}),charge:"0",spin:"1/2"},tauNeutrino:{name:"tau neutrino",mass:s({mass:15.5,unit:"MeV",lessThan:!0}),charge:"0",spin:"1/2"}}),ft=o(o(o({},mt),lt),pt),dt=Object.keys(ft);function k(){return{hardMode:!1,secondsElapsed:0,timer:void 0,isComplete:!1,highlightErrors:!1,particleAnswerGrid:l,particleGrid:[[void 0,void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0]],particleDock:[...dt]}}function ht(){this.particleAnswerGrid=y(l)}function gt({row:t,column:e}){const r=this.particleAnswerGrid[t];if(r===void 0)throw new Error(`Invalid row: ${t}`);return[r[e]].flat()}function wt(t){if(this.particleGrid[t]===void 0)throw new Error(`Invalid row: ${t}`);return this.particleGrid[t]}function Gt({column:t,row:e}){return this.getRow(e)[t]}function bt({particleId:t,column:e,row:r}){const n=this.getRow(r);n[e]=t}function yt({column:t,row:e}){const r=this.getRow(e);r[t]=void 0}function At(){this.highlightErrors=!0;for(let t=0;t<this.particleGrid.length;t+=1){const e=this.getRow(t);for(let r=0;r<e.length;r+=1){const n=this.getParticleGridCell({row:t,column:r});if(n===void 0||!this.getAnswerParticleIds({row:t,column:r}).includes(n))return!1}}return this.stopTimer(),this.isComplete=!0,!0}function It(){if(this.hardMode){const t=y(l.flat(1));this.particleAnswerGrid=at(t,5)}this.startTimer()}function Tt(){this.clearTimer();const t=k();this.isComplete=!1,this.highlightErrors=!1,this.particleGrid=t.particleGrid,this.particleDock=t.particleDock}function xt(){this.clearGame(),this.startTimer()}function Et(){this.timer===void 0&&(this.timer=setInterval(()=>{this.secondsElapsed+=1},1e3))}function Mt(){this.timer!==void 0&&(clearInterval(this.timer),this.timer=void 0)}function kt(){this.stopTimer(),this.secondsElapsed=0}var Pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",randomizeAnswerGrid:ht,getAnswerParticleIds:gt,getRow:wt,getParticleGridCell:Gt,setParticleGridCell:bt,unsetParticleGridCell:yt,checkAnswers:At,startGame:It,clearGame:Tt,resetGame:xt,startTimer:Et,stopTimer:Mt,clearTimer:kt});function Ot(){return this.particleGrid.flat().every(t=>t===void 0)}function _t(){return[...this.particleDock].sort()}var Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",isGridEmpty:Ot,orderedDockParticleIds:_t});const vt=v({id:"app",state:k,actions:o({},Pt),getters:o({},Rt)});export{k as c,ft as p,vt as u};
