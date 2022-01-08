import{f as r,o as c,g as d,h as e,u as s,n as m,i as p,j as h,k as f,w as b,l as g}from"./vendor.8c0b89ba.js";import{u as _,c as x}from"./index.a54df7a3.js";let v=(n=21)=>{let t="",a=crypto.getRandomValues(new Uint8Array(n));for(;n--;){let o=a[n]&63;o<36?t+=o.toString(36):o<62?t+=(o-26).toString(36).toUpperCase():o<63?t+="_":t+="-"}return t};const k={class:"form-check"},y=["id","value"],V=["for"],w=r({props:{inputClass:null,modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n){const t=v();return(a,o)=>(c(),d("div",k,[e("input",{id:s(t),class:m(["form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-0.5 mr-2 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer",n.inputClass]),type:"checkbox",value:n.modelValue,onChange:o[0]||(o[0]=i=>a.$emit("update:modelValue",!n.modelValue))},null,42,y),e("label",{class:"form-check-label inline-block text-gray-800 cursor-pointer",for:s(t)},[p(a.$slots,"default")],8,V)]))}}),C={class:"column items-center h-full p-8"},$=e("div",{class:"mb-auto flex-1"},null,-1),S={class:"flex-1 column center"},j=e("div",{class:"text-[8rem] text-center font-bold leading-none"}," Fundamental Particles Game ",-1),B=e("div",{class:"text-xl"},[e("strong",null,"By:"),g(" Leon Si")],-1),G=e("div",{class:"text-lg text-center my-5"},[e("span",{class:"font-bold"},"Instructions: "),e("span",null," Drag the fundamental particles to the grid cell with the correct information! ")],-1),M=e("span",{class:"text-3xl font-bold"},"Hard Mode",-1),A=e("div",{class:"mt-auto flex-1 column justify-end"},[e("div",null,[e("strong",null,"Source Code: "),e("a",{class:"text-blue-500 hover:text-blue-600 underline",target:"_blank",href:"https://github.com/leonzalion/fundamental-particles-project"},"https://github.com/leonzalion/fundamental-particles-project ")])],-1),I=r({setup(n){const t=_();t.clearGame(),t.$state=x();const a=h();async function o(){t.startGame(),await a.push(`/game${t.hardMode?"?mode=hard":""}`)}return(i,l)=>(c(),d("div",C,[$,e("div",S,[j,B,G,f(w,{modelValue:s(t).hardMode,"onUpdate:modelValue":l[0]||(l[0]=u=>s(t).hardMode=u),class:"mb-5","input-class":"h-8 w-8"},{default:b(()=>[M]),_:1},8,["modelValue"]),e("div",{role:"button",class:"bg-green-500 text-white font-bold rounded-md px-5 py-2 text-4xl hover:bg-green-600 cursor-pointer",onClick:o}," Start Game ")]),A]))}});export{I as default};
