var Z=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(t,e,r)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))U.call(e,r)&&T(t,r,e[r]);if(M)for(var r of M(e))X.call(e,r)&&T(t,r,e[r]);return t},O=(t,e)=>K(t,Q(e));import{m as Y,d as C,c as b,o as d,a as p,b as c,u as i,n as G,e as P,t as I,f as ee,g as te,F as x,r as D,w as B,h as R,i as re,j as oe,k as ne,l as se,p as E,q as ae,s as ie}from"./vendor.93284d51.js";const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};le();const S=(t,e)=>Y(e,(r,s)=>[r,O(v({},s),{type:t})]),u=({mass:t,lessThan:e,approx:r,unit:s})=>{let o="";return r?o+="\u2248":e&&(o+="<"),o+=`${t} ${s}/c<sup>2</sup>`,o},ce=S("boson",{gluon:{name:"gluon",mass:"0",charge:"0",spin:"1"},photon:{name:"photon",mass:"0",charge:"0",spin:"1"},zBoson:{name:"Z boson",mass:u({mass:91.2,unit:"GeV"}),charge:"0",spin:"1"},wBoson:{name:"W boson",mass:u({mass:80.4,unit:"GeV"}),charge:"\xB11",spin:"1"},higgsBoson:{name:"higgs",mass:u({mass:126,unit:"GeV"}),charge:"0",spin:"0"}}),ue=S("quark",{up:{name:"up",charge:"2/3",spin:"1/2",mass:u({mass:2.3,approx:!0,unit:"MeV"})},down:{name:"down",charge:"-1/3",spin:"1/2",mass:u({mass:4.8,unit:"MeV",approx:!0})},charm:{name:"charm",charge:"2/3",spin:"1/2",mass:u({mass:1.275,unit:"GeV",approx:!0})},strange:{name:"strange",charge:"-1/3",spin:"1/2",mass:u({mass:95,unit:"MeV",approx:!0})},top:{name:"top",charge:"2/3",spin:"1/2",mass:u({mass:137,unit:"GeV",approx:!0})},bottom:{name:"bottom",charge:"-1/3",spin:"1/2",mass:u({mass:4.12,unit:"GeV",approx:!0})}}),de=S("lepton",{electron:{name:"electron",mass:u({mass:.511,unit:"MeV"}),charge:"-1",spin:"1/2"},muon:{name:"muon",mass:u({mass:.511,unit:"MeV"}),charge:"-1",spin:"1/2"},tau:{name:"tau",mass:u({mass:1.777,unit:"GeV"}),charge:"-1",spin:"1/2"},electronNeutrino:{name:"electron neutrino",mass:u({mass:2.2,unit:"eV",lessThan:!0}),charge:"0",spin:"1/2"},muonNeutrino:{name:"muon neutrino",mass:u({mass:.17,unit:"MeV",lessThan:!0}),charge:"0",spin:"1/2"},tauNeutrino:{name:"tau neutrino",mass:u({mass:15.5,unit:"MeV",lessThan:!0}),charge:"0",spin:"1/2"}}),j=v(v(v({},ue),de),ce),pe=Object.keys(j),me={up:"u",down:"d",charm:"c",strange:"s",top:"t",bottom:"b",electron:"e",electronNeutrino:"<i>v</i><sub>e</sub>",muon:"\xB5",muonNeutrino:"<i>v</i><sub>\xB5</sub>",tau:"\u03C4",tauNeutrino:"<i>v</i><sub>\u03C4</sub>",gluon:"g",photon:"\u03B3",zBoson:"Z",wBoson:"W",higgsBoson:"H"};function A(t){return j[t]}function ge(t){return me[t]}var fe=(t,e)=>{const r=t.__vccOpts||t;for(const[s,o]of e)r[s]=o;return r};const he=["innerHTML"],be=C({props:{particleId:null},setup(t){const e=t,r={boson:"bg-red-300",lepton:"bg-green-300",quark:"bg-purple-300"},s=b(()=>ge(e.particleId)),o=b(()=>A(e.particleId));return(n,a)=>(d(),p("div",{class:G(["bg-blue-200 rounded-full w-[4.5rem] h-[4.5rem] row center text-[50px]",r[i(o).type]])},[c("div",{class:"particle-letter",innerHTML:i(s)},null,8,he)],2))}});var z=fe(be,[["__scopeId","data-v-da32646a"]]);const ve={class:"mt-1"},we=C({props:{particleId:null},setup(t){const e=t,r=b(()=>A(e.particleId));function s(o){var n;(n=o.dataTransfer)==null||n.setData("data",JSON.stringify({type:"particle-drop",payload:{particleId:e.particleId}}))}return(o,n)=>(d(),p("div",{draggable:"true",class:"rounded-md w-28 h-28 m-2 center border-2 bg-white border-black column text-center text-xs cursor-grab",onDragstart:s},[P(z,{"particle-id":t.particleId},null,8,["particle-id"]),c("span",ve,I(i(r).name),1)],32))}}),L=[["up","charm","top",["photon","gluon"],"higgsBoson"],["down","strange","bottom",["photon","gluon"]],["electron","muon","tau","zBoson"],["electronNeutrino","muonNeutrino","tauNeutrino","wBoson"]];function H(){return{hardMode:!1,createConfetti:void 0,isComplete:!1,highlightErrors:!1,particleAnswerGrid:L,particleGrid:[[void 0,void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0]]}}function _e(){this.particleAnswerGrid=ee(L)}function ye({row:t,column:e}){const r=this.particleAnswerGrid[t];if(r===void 0)throw new Error(`Invalid row: ${t}`);return[r[e]].flat()}function Ce(t){if(this.particleGrid[t]===void 0)throw new Error(`Invalid row: ${t}`);return this.particleGrid[t]}function Pe({column:t,row:e}){return this.getRow(e)[t]}function Ge({particleId:t,column:e,row:r}){const s=this.getRow(r);s[e]=t}function Ie({column:t,row:e}){const r=this.getRow(e);r[t]=void 0}function xe(){this.highlightErrors=!0;for(let t=0;t<this.particleGrid.length;t+=1){const e=this.getRow(t);for(let r=0;r<e.length;r+=1){const s=this.getParticleGridCell({row:t,column:r});if(s===void 0||!this.getAnswerParticleIds({row:t,column:r}).includes(s))return!1}}return this.isComplete=!0,!0}function Be(){this.$state=H()}var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",randomizeAnswerGrid:_e,getAnswerParticleIds:ye,getRow:Ce,getParticleGridCell:Pe,setParticleGridCell:Ge,unsetParticleGridCell:Ie,checkAnswers:xe,reset:Be});function $e(){return this.particleGrid.flat().every(t=>t===void 0)}var Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",isGridEmpty:$e});const k=te({id:"app",state:H,actions:v({},ke),getters:v({},Ne)});function q(t){return t!==null&&typeof t=="object"?t.type==="particle-drop":!1}const De=["onDrop"],Se={class:"row gap-3"},Ae=["disabled"],Ve=C({setup(t){const e=k(),r=b(()=>pe.filter(o=>!e.particleGrid.flat().includes(o)));function s(o){var a,m;const n=(m=(a=o.dataTransfer)==null?void 0:a.getData("data"))!=null?m:"";if(n!==""){const f=JSON.parse(n);if(q(f)){const{sourceCell:g}=f.payload;g!==void 0&&e.unsetParticleGridCell({column:g.column,row:g.row})}}}return(o,n)=>(d(),p("div",{class:"column items-center pb-5 pt-3 bg-white border-t-2 border-gray-200 max-h-[50vh] overflow-y-auto",onDrop:B(s,["prevent"]),onDragover:n[2]||(n[2]=B(()=>{},["prevent"]))},[c("div",{class:G(["row flex-wrap content-start z-1 justify-center",{"mb-3":i(r).length>0}])},[(d(!0),p(x,null,D(i(r),a=>(d(),p("div",{key:a},[P(we,{"particle-id":a},null,8,["particle-id"])]))),128))],2),c("div",Se,[c("button",{class:"font-bold text-white bg-green-500 px-5 py-2 rounded-md",onClick:n[0]||(n[0]=a=>i(e).isComplete?()=>{var m,f;return(f=(m=i(e)).createConfetti)==null?void 0:f.call(m)}:i(e).checkAnswers)},I(i(e).isComplete?"Congratulations!":"Check Answers"),1),c("button",{disabled:i(e).isGridEmpty,class:G(["font-bold text-white px-5 p-2 rounded-md",[i(e).isGridEmpty?"bg-red-300 cursor-not-allowed":"bg-red-500"]]),onClick:n[1]||(n[1]=(...a)=>i(e).reset&&i(e).reset(...a))}," Reset ",10,Ae)])],40,De))}}),Me=["draggable","onDrop"],Te={class:"row justify-between text-xs p-2"},Oe=c("strong",null,"Charge:",-1),Re=c("strong",null,"Spin:",-1),Ee={class:"text-center text-sm pb-1"},je=c("strong",null,"Mass: ",-1),ze=["innerHTML"],Le=C({props:{currentParticleId:null,column:null,row:null},setup(t){const e=t,r=b(()=>g.getAnswerParticleIds({row:e.row,column:e.column})),s=b(()=>A(r.value[0])),o={boson:{bg:"bg-orange-50",border:"border-orange-50"},lepton:{bg:"bg-cyan-50",border:"border-cyan-50"},quark:{bg:"bg-purple-50",border:"border-purple-50"}},n={boson:{bg:"bg-orange-50",border:"border-orange-200"},lepton:{bg:"bg-cyan-50",border:"border-cyan-200"},quark:{bg:"bg-purple-50",border:"border-purple-200"}},a="border-green-500",m="border-red-500",f=b(()=>{const w=e.currentParticleId===void 0?"":"cursor-grab";let l,h;if(e.currentParticleId===void 0)if(r.value.includes("higgsBoson"))l="border-yellow-100",h="bg-yellow-50";else{const{bg:_,border:y}=o[s.value.type];l=y,h=_}else if(r.value.includes("higgsBoson"))h="bg-yellow-100",l="bg-yellow-100";else{const{bg:_,border:y}=n[s.value.type];h=_,l=y}return g.highlightErrors&&(e.currentParticleId===void 0&&(l=m),l=e.currentParticleId!==void 0&&r.value.includes(e.currentParticleId)?a:m),`${w} ${l} ${h}`}),g=k();function F(w){var _,y;const l=(y=(_=w.dataTransfer)==null?void 0:_.getData("data"))!=null?y:"";if(l==="")return;const h=JSON.parse(l);if(q(h)){const{payload:V}=h;if(V.sourceCell!==void 0){const{row:$,column:N}=V.sourceCell;g.getParticleGridCell({column:N,row:$})!==void 0&&(e.currentParticleId===void 0?g.unsetParticleGridCell({column:N,row:$}):g.setParticleGridCell({particleId:e.currentParticleId,column:N,row:$}))}g.setParticleGridCell({particleId:h.payload.particleId,column:e.column,row:e.row})}}function W(w){var l;e.currentParticleId!==void 0&&((l=w.dataTransfer)==null||l.setData("data",JSON.stringify({type:"particle-drop",payload:{particleId:e.currentParticleId,sourceCell:{row:e.row,column:e.column}}})))}return(w,l)=>(d(),p("div",{class:"p-2",draggable:t.currentParticleId!==void 0,onDragstart:W,onDrop:B(F,["prevent"]),onDragover:l[0]||(l[0]=B(()=>{},["prevent"]))},[c("div",{class:G(["rounded-md h-40 w-40 border-2 column justify-between",i(f)])},[c("div",Te,[c("span",null,[Oe,R(" "+I(i(s).charge),1)]),c("span",null,[Re,R(" "+I(i(s).spin),1)])]),t.currentParticleId!==void 0?(d(),re(z,{key:0,class:"self-center","particle-id":t.currentParticleId},null,8,["particle-id"])):oe("",!0),c("div",Ee,[je,c("span",{innerHTML:i(s).mass},null,8,ze)])],2)],40,Me))}}),He={class:"overflow-y-auto overflow-x-auto column w-full"},qe={class:"grid grid-rows-4 grid-cols-[repeat(5,max-content)] p-2 mx-auto"},Je=C({setup(t){const e=k(),r=b(()=>e.particleGrid);return(s,o)=>(d(),p("div",He,[c("div",qe,[(d(!0),p(x,null,D(i(r),(n,a)=>(d(),p(x,{key:a},[(d(!0),p(x,null,D(n,(m,f)=>(d(),p("div",{key:m,class:"row",style:ne({"grid-row-start":a+1})},[P(Le,{"current-particle-id":m,column:f,row:a},null,8,["current-particle-id","column","row"])],4))),128))],64))),128))])]))}});async function Fe(){await se({particleCount:100,spread:160})}const We={class:"column h-full"},Ze=C({setup(t){const e=k();return E(()=>e.isComplete,async r=>{r&&await Fe()}),E(e.particleGrid,()=>{console.log("hi"),e.highlightErrors=!1}),(r,s)=>(d(),p("div",We,[P(Je,{class:"m-auto"}),P(Ve)]))}});const J=ae(Ze);J.use(ie());J.mount("#app");