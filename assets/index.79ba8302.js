import{o as e,c as t,a as n,b as r}from"./vendor.44ebb960.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const c=new URL(e,r);if(self[t].moduleMap[c])return n(self[t].moduleMap[c]);const a=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),o(l)},onload(){n(self[t].moduleMap[c]),o(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");const o={name:"App"},s={class:"w-screen h-screen flex flex-col items-center justify-center text-center"},c=n("h1",{class:"text-5xl leading-tight mb-4 break-words"}," My website is under reconstruction. ",-1),a=n("h5",{class:"text-xl"}," Please wait until further announcement. ",-1);o.render=function(n,r,o,l,i,m){return e(),t("div",s,[c,a])};r(o).mount("#app");