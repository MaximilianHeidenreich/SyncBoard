import{H as e,S as t,i as n,s,e as o,t as a,c as l,a as r,b as c,d as i,o as f,f as d,g as u,L as m,h,n as p,O as g,P as $,p as y,q as v,r as w,u as x,v as b,w as E,x as B,y as I,j as C,l as z,C as S,D as L,Q as D,m as N,R as k,K as A,T as V,M as U,G as O,B as R,U as T,V as M,W as P}from"../chunks/singletons-4c30898b.js";import{g as H}from"../chunks/navigation-e6affc58.js";const j=e([]),J=e("");function F(e){let t,n,s,g,$,y,v,w;return{c(){t=o("div"),n=o("div"),s=o("h5"),g=a(e[0]),this.h()},l(o){t=l(o,"DIV",{class:!0});var a=r(t);n=l(a,"DIV",{class:!0});var f=r(n);s=l(f,"H5",{class:!0});var d=r(s);g=c(d,e[0]),d.forEach(i),f.forEach(i),a.forEach(i),this.h()},h(){f(s,"class",$=e[3]+" text-center"),f(n,"class","self-center flex items-center justify-center w-full"),f(t,"class",y=e[1]+" "+e[2]+" "+e[4]+" "+e[5]+" rounded-lg flex p-6")},m(o,a){d(o,t,a),u(t,n),u(n,s),u(s,g),v||(w=m(t,"click",e[6]),v=!0)},p(e,[n]){1&n&&h(g,e[0]),8&n&&$!==($=e[3]+" text-center")&&f(s,"class",$),54&n&&y!==(y=e[1]+" "+e[2]+" "+e[4]+" "+e[5]+" rounded-lg flex p-6")&&f(t,"class",y)},i:p,o:p,d(e){e&&i(t),v=!1,w()}}}function Y(e,t,n){const s=g();let o,a,l,r,{name:c}=t,{completed:i}=t,{completedBy:f}=t,{clazz:d}=t;return e.$$set=e=>{"name"in e&&n(0,c=e.name),"completed"in e&&n(7,i=e.completed),"completedBy"in e&&n(8,f=e.completedBy),"clazz"in e&&n(1,d=e.clazz)},e.$$.update=()=>{384&e.$$.dirty&&n(2,o=i?f===$(J)?"bg-purple-600":"bg-red-500":"bg-gray-300"),128&e.$$.dirty&&n(3,a=i?"text-white":""),128&e.$$.dirty&&n(4,l=i?"opacity-60":""),128&e.$$.dirty&&n(5,r=i?"cursor-not-allowed":"cursor-pointer")},[c,d,o,a,l,r,function(){s("itemCompletion",{name:c})},i,f]}class _ extends t{constructor(e){super(),n(this,e,Y,F,s,{name:0,completed:7,completedBy:8,clazz:1})}}function q(e,t,n){const s=e.slice();return s[2]=t[n],s}function G(e){let t,n;return{c(){t=o("h2"),n=a("No items 😴"),this.h()},l(e){t=l(e,"H2",{class:!0});var s=r(t);n=c(s,"No items 😴"),s.forEach(i),this.h()},h(){f(t,"class","text-center")},m(e,s){d(e,t,s),u(t,n)},d(e){e&&i(t)}}}function K(e){let t,n;const s=[e[2]];let o={};for(let a=0;a<s.length;a+=1)o=N(o,s[a]);return t=new _({props:o}),t.$on("itemCompletion",e[1]),{c(){y(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,s){w(t,e,s),n=!0},p(e,n){const o=1&n?x(s,[b(e[2])]):{};t.$set(o)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function Q(e){let t,n,s,a,c=e[0].length<=0&&G(),m=e[0],h=[];for(let o=0;o<m.length;o+=1)h[o]=K(q(e,m,o));const p=e=>B(h[e],1,1,(()=>{h[e]=null}));return{c(){t=o("div"),c&&c.c(),n=C(),s=o("div");for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){t=l(e,"DIV",{});var o=r(t);c&&c.l(o),n=z(o),s=l(o,"DIV",{class:!0});var a=r(s);for(let t=0;t<h.length;t+=1)h[t].l(a);a.forEach(i),o.forEach(i),this.h()},h(){f(s,"class","grid grid-cols-3 grid-rows-3 gap-3")},m(e,o){d(e,t,o),c&&c.m(t,null),u(t,n),u(t,s);for(let t=0;t<h.length;t+=1)h[t].m(s,null);a=!0},p(e,[o]){if(e[0].length<=0?c||(c=G(),c.c(),c.m(t,n)):c&&(c.d(1),c=null),1&o){let t;for(m=e[0],t=0;t<m.length;t+=1){const n=q(e,m,t);h[t]?(h[t].p(n,o),E(h[t],1)):(h[t]=K(n),h[t].c(),E(h[t],1),h[t].m(s,null))}for(S(),t=m.length;t<h.length;t+=1)p(t);L()}},i(e){if(!a){for(let e=0;e<m.length;e+=1)E(h[e]);a=!0}},o(e){h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)B(h[t]);a=!1},d(e){e&&i(t),c&&c.d(),D(h,e)}}}function W(e,t,n){let{items:s=[]}=t;return e.$$set=e=>{"items"in e&&n(0,s=e.items)},[s,function(t){k(e,t)}]}class X extends t{constructor(e){super(),n(this,e,W,Q,s,{items:0})}}function Z(e){let t,n,s,m,g,$,y;return{c(){t=o("div"),n=o("div"),s=o("span"),m=a(e[0]),g=C(),$=o("span"),y=a(e[1]),this.h()},l(o){t=l(o,"DIV",{class:!0});var a=r(t);n=l(a,"DIV",{class:!0});var f=r(n);s=l(f,"SPAN",{class:!0});var d=r(s);m=c(d,e[0]),d.forEach(i),g=z(f),$=l(f,"SPAN",{class:!0});var u=r($);y=c(u,e[1]),u.forEach(i),f.forEach(i),a.forEach(i),this.h()},h(){f(s,"class","inline-flex bg-"+e[2]+" text-white rounded-full h-6 px-3 justify-center items-center"),f($,"class","inline-flex px-2"),f(n,"class","inline-flex items-center bg-white leading-none text-"+e[2]+" rounded-full p-2 shadow text-teal text-sm"),f(t,"class","mb-3")},m(e,o){d(e,t,o),u(t,n),u(n,s),u(s,m),u(n,g),u(n,$),u($,y)},p(e,[t]){1&t&&h(m,e[0]),2&t&&h(y,e[1])},i:p,o:p,d(e){e&&i(t)}}}function ee(e,t,n){let{id:s}=t,{type:o}=t,{message:a}=t,l="error"===o?"pink-600":"info"===o?"purple-600":"blue-600";return e.$$set=e=>{"id"in e&&n(3,s=e.id),"type"in e&&n(0,o=e.type),"message"in e&&n(1,a=e.message)},[o,a,l,s]}class te extends t{constructor(e){super(),n(this,e,ee,Z,s,{id:3,type:0,message:1})}}function ne(e,t,n){const s=e.slice();return s[1]=t[n],s}function se(e){let t,n;const s=[e[1]];let o={};for(let a=0;a<s.length;a+=1)o=N(o,s[a]);return t=new te({props:o}),{c(){y(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,s){w(t,e,s),n=!0},p(e,n){const o=1&n?x(s,[b(e[1])]):{};t.$set(o)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function oe(e){let t,n,s=e[0],a=[];for(let o=0;o<s.length;o+=1)a[o]=se(ne(e,s,o));const c=e=>B(a[e],1,1,(()=>{a[e]=null}));return{c(){t=o("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=l(e,"DIV",{class:!0});var n=r(t);for(let t=0;t<a.length;t+=1)a[t].l(n);n.forEach(i),this.h()},h(){f(t,"class","p-4 svelte-1akglop")},m(e,s){d(e,t,s);for(let n=0;n<a.length;n+=1)a[n].m(t,null);n=!0},p(e,[n]){if(1&n){let o;for(s=e[0],o=0;o<s.length;o+=1){const l=ne(e,s,o);a[o]?(a[o].p(l,n),E(a[o],1)):(a[o]=se(l),a[o].c(),E(a[o],1),a[o].m(t,null))}for(S(),o=s.length;o<a.length;o+=1)c(o);L()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)E(a[e]);n=!0}},o(e){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)B(a[t]);n=!1},d(e){e&&i(t),D(a,e)}}}function ae(e,t,n){let{toasts:s=[]}=t;return e.$$set=e=>{"toasts"in e&&n(0,s=e.toasts)},[s]}class le extends t{constructor(e){super(),n(this,e,ae,oe,s,{toasts:0})}}const re=e([]);function ce(e,t){re.update((n=>{let s=ie();return n.push({id:s,type:e,message:t}),setTimeout((()=>function(e){re.update((t=>(t.forEach((n=>{n.id===e&&t.splice(t.indexOf(n),1)})),t)))}(s)),4e3),n}))}let ie=()=>{let e=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};function fe(e){let t;return{c(){t=a("Not Connected")},l(e){t=c(e,"Not Connected")},m(e,n){d(e,t,n)},d(e){e&&i(t)}}}function de(e){let t;return{c(){t=a("Connected")},l(e){t=c(e,"Connected")},m(e,n){d(e,t,n)},d(e){e&&i(t)}}}function ue(e){let t,n,s,p,g,$,x,b,S,L,D,N,k,O,R,H,j,J,F,Y,q,G,K,Q,W,Z,ee,te,ne,se,oe,ae,re,ce,ie,ue,me,he,pe,ge,$e,ye,ve,we,xe,be,Ee,Be,Ie,Ce,ze,Se,Le,De,Ne,ke,Ae,Ve,Ue,Oe=e[5].length+"",Re=e[1].length+"";function Te(e,t){return e[0]?de:fe}t=new le({props:{toasts:e[6]}});let Me=Te(e),Pe=Me(e);function He(t){e[15](t)}let je={};return void 0!==e[1]&&(je.items=e[1]),$e=new X({props:je}),T.push((()=>M($e,"items",He))),$e.$on("itemCompletion",e[9]),Se=new _({props:{clazz:"w-full p-3",name:"Click to complete",completed:!1}}),De=new _({props:{clazz:"w-full p-3",name:"Completed by you",completed:!0,completedBy:e[7]}}),ke=new _({props:{clazz:"w-full p-3",name:"Completed by others",completed:!0,completedBy:null}}),{c(){y(t.$$.fragment),n=C(),s=o("section"),p=o("div"),g=o("h2"),$=a("SyncBoard"),x=C(),b=o("button"),S=a("Copy Board URL"),L=C(),D=o("small"),N=a("Peer: "),k=o("small"),Pe.c(),O=C(),R=o("br"),H=C(),j=o("small"),J=a("Board URL: "),F=o("a"),Y=a(e[3]),q=C(),G=o("br"),K=C(),Q=o("small"),W=a("Your score: "),Z=a(Oe),ee=a(" / "),te=a(Re),ne=C(),se=o("div"),oe=C(),ae=o("div"),re=o("form"),ce=o("input"),ie=C(),ue=o("button"),me=a("Add item"),he=C(),pe=o("div"),ge=C(),y($e.$$.fragment),ve=C(),we=o("section"),xe=o("h4"),be=a("How it works?"),Ee=C(),Be=o("p"),Ie=a('Just share the "Board URL" with your friends and start adding items.\n        All items will be synchronized with everyone in the session.'),Ce=C(),ze=o("div"),y(Se.$$.fragment),Le=C(),y(De.$$.fragment),Ne=C(),y(ke.$$.fragment),this.h()},l(o){v(t.$$.fragment,o),n=z(o),s=l(o,"SECTION",{});var a=r(s);p=l(a,"DIV",{class:!0});var f=r(p);g=l(f,"H2",{class:!0});var d=r(g);$=c(d,"SyncBoard"),d.forEach(i),x=z(f),b=l(f,"BUTTON",{class:!0});var u=r(b);S=c(u,"Copy Board URL"),u.forEach(i),f.forEach(i),L=z(a),D=l(a,"SMALL",{});var m=r(D);N=c(m,"Peer: "),m.forEach(i),k=l(a,"SMALL",{class:!0});var h=r(k);Pe.l(h),h.forEach(i),O=z(a),R=l(a,"BR",{}),H=z(a),j=l(a,"SMALL",{});var y=r(j);J=c(y,"Board URL: "),F=l(y,"A",{href:!0});var w=r(F);Y=c(w,e[3]),w.forEach(i),y.forEach(i),q=z(a),G=l(a,"BR",{}),K=z(a),Q=l(a,"SMALL",{});var E=r(Q);W=c(E,"Your score: "),Z=c(E,Oe),ee=c(E," / "),te=c(E,Re),E.forEach(i),ne=z(a),se=l(a,"DIV",{class:!0}),r(se).forEach(i),oe=z(a),ae=l(a,"DIV",{});var B=r(ae);re=l(B,"FORM",{class:!0});var I=r(re);ce=l(I,"INPUT",{placeholder:!0,class:!0}),ie=z(I),ue=l(I,"BUTTON",{});var C=r(ue);me=c(C,"Add item"),C.forEach(i),I.forEach(i),B.forEach(i),he=z(a),pe=l(a,"DIV",{class:!0}),r(pe).forEach(i),ge=z(a),v($e.$$.fragment,a),a.forEach(i),ve=z(o),we=l(o,"SECTION",{class:!0});var A=r(we);xe=l(A,"H4",{class:!0});var V=r(xe);be=c(V,"How it works?"),V.forEach(i),Ee=z(A),Be=l(A,"P",{class:!0});var U=r(Be);Ie=c(U,'Just share the "Board URL" with your friends and start adding items.\n        All items will be synchronized with everyone in the session.'),U.forEach(i),Ce=z(A),ze=l(A,"DIV",{class:!0});var T=r(ze);v(Se.$$.fragment,T),Le=z(T),v(De.$$.fragment,T),Ne=z(T),v(ke.$$.fragment,T),T.forEach(i),A.forEach(i),this.h()},h(){f(g,"class","mb-1 cursor-pointer"),f(b,"class","secondary"),f(p,"class","w-full flex justify-between"),f(k,"class",e[4]),f(F,"href",""),f(se,"class","mb-4"),f(ce,"placeholder","Item name"),f(ce,"class",""),f(re,"class","flex space-x-4"),f(pe,"class","mb-8"),f(xe,"class","mb-4"),f(Be,"class","mb-4"),f(ze,"class","flex content-between items-stretch space-x-3"),f(we,"class","mt-24")},m(o,a){w(t,o,a),d(o,n,a),d(o,s,a),u(s,p),u(p,g),u(g,$),u(p,x),u(p,b),u(b,S),u(s,L),u(s,D),u(D,N),u(s,k),Pe.m(k,null),u(s,O),u(s,R),u(s,H),u(s,j),u(j,J),u(j,F),u(F,Y),u(s,q),u(s,G),u(s,K),u(s,Q),u(Q,W),u(Q,Z),u(Q,ee),u(Q,te),u(s,ne),u(s,se),u(s,oe),u(s,ae),u(ae,re),u(re,ce),A(ce,e[2]),u(re,ie),u(re,ue),u(ue,me),u(s,he),u(s,pe),u(s,ge),w($e,s,null),d(o,ve,a),d(o,we,a),u(we,xe),u(xe,be),u(we,Ee),u(we,Be),u(Be,Ie),u(we,Ce),u(we,ze),w(Se,ze,null),u(ze,Le),w(De,ze,null),u(ze,Ne),w(ke,ze,null),Ae=!0,Ve||(Ue=[m(g,"click",e[13]),m(b,"click",e[10]),m(ce,"input",e[14]),m(ue,"click",e[8]),m(re,"submit",V(e[8]))],Ve=!0)},p(e,[n]){const s={};64&n&&(s.toasts=e[6]),t.$set(s),Me!==(Me=Te(e))&&(Pe.d(1),Pe=Me(e),Pe&&(Pe.c(),Pe.m(k,null))),(!Ae||16&n)&&f(k,"class",e[4]),(!Ae||8&n)&&h(Y,e[3]),(!Ae||32&n)&&Oe!==(Oe=e[5].length+"")&&h(Z,Oe),(!Ae||2&n)&&Re!==(Re=e[1].length+"")&&h(te,Re),4&n&&ce.value!==e[2]&&A(ce,e[2]);const o={};!ye&&2&n&&(ye=!0,o.items=e[1],P((()=>ye=!1))),$e.$set(o);const a={};128&n&&(a.completedBy=e[7]),De.$set(a)},i(e){Ae||(E(t.$$.fragment,e),E($e.$$.fragment,e),E(Se.$$.fragment,e),E(De.$$.fragment,e),E(ke.$$.fragment,e),Ae=!0)},o(e){B(t.$$.fragment,e),B($e.$$.fragment,e),B(Se.$$.fragment,e),B(De.$$.fragment,e),B(ke.$$.fragment,e),Ae=!1},d(e){I(t,e),e&&i(n),e&&i(s),Pe.d(),I($e),e&&i(ve),e&&i(we),I(Se),I(De),I(ke),Ve=!1,U(Ue)}}}async function me({page:e}){return{props:{roomId:e.params.roomId}}}function he(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(s){console.error("Fallback: Oops, unable to copy",s)}document.body.removeChild(t)}(e)}function pe(e,t,n){let s,o,a;O(e,j,(e=>n(1,s=e))),O(e,re,(e=>n(6,o=e))),O(e,J,(e=>n(7,a=e)));var l=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,a){function l(e){try{c(s.next(e))}catch(t){a(t)}}function r(e){try{c(s.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}c((s=s.apply(e,t||[])).next())}))};let{roomId:r="new"}=t,c="",i={},f=[];function d(e){console.log("New connection!: "+e),f.push(e),n(0,h=!0),e.on("data",(e=>{var t;"itemsUpdate"===(t=JSON.parse(e)).type&&j.update((e=>t.items))}))}function u(){console.log("cons: "+f),f.forEach((e=>{e.send(JSON.stringify({type:"itemsUpdate",items:$(j)}))}))}R((()=>l(void 0,void 0,void 0,(function*(){n(3,m=window.location.origin),n(12,i=new Peer),i.on("error",(e=>{console.error(e)})),i.on("open",(function(e){if(console.log("My peer ID is: "+e),"new"===r)J.update((t=>e)),n(3,m+=`/${e}`),history.replaceState(null,`SyncBoard - ${e}`,`/${e}`);else{let e=i.connect(r);e.on("open",d(e))}})),i.on("connection",(e=>d(e)))}))));let m="oops, there was an error :(",h=!1,p=h?"text-green-500":"text-red-500",g=[];return e.$$set=e=>{"roomId"in e&&n(11,r=e.roomId)},e.$$.update=()=>{1&e.$$.dirty&&n(4,p=h?"text-green-500":"text-red-500"),4098&e.$$.dirty&&n(5,g=s.filter((e=>!0===e.completed&&e.completedBy===i.id)))},[h,s,c,m,p,g,o,a,function(){""!==c&&(j.update((e=>[...e,{name:c,completed:!1,completedBy:""}])),n(2,c=""),u())},function(e){let t=e.detail.name;j.update((e=>(e.forEach((n=>{n.name!==t||n.completed||(e[e.indexOf(n)]={name:n.name,completed:!0,completedBy:i.id})})),e))),u()},function(){he(m),ce("info","Copied url to clipboard!")},r,i,()=>H("/"),function(){c=this.value,n(2,c)},function(e){s=e,j.set(s)}]}export default class extends t{constructor(e){super(),n(this,e,pe,ue,s,{roomId:11})}}export{me as load};