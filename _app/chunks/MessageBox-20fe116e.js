import{S as t,i as s,s as e,e as a,k as n,c as l,a as c,n as r,d as o,b as i,f as d,E as h,r as u,u as m,w as f,x as p,H as g,V as $,a2 as v,a3 as x,j as b,l as q,m as E,o as N,v as S,t as I,g as y,h as w,F as L,G as k}from"./vendor-31f7a821.js";import{g as P}from"./stores-eb101737.js";function T(t){let s,e,a,l;function c(t,s){return t[4]?B:z}s=new x({props:{interval:100,cursor:!1,$$slots:{default:[D]},$$scope:{ctx:t}}}),s.$on("done",t[6]);let i=c(t),h=i(t);return{c(){b(s.$$.fragment),e=n(),h.c(),a=q()},l(t){E(s.$$.fragment,t),e=r(t),h.l(t),a=q()},m(t,n){N(s,t,n),d(t,e,n),h.m(t,n),d(t,a,n),l=!0},p(t,e){const n={};520&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n),i===(i=c(t))&&h?h.p(t,e):(h.d(1),h=i(t),h&&(h.c(),h.m(a.parentNode,a)))},i(t){l||(p(s.$$.fragment,t),l=!0)},o(t){m(s.$$.fragment,t),l=!1},d(t){S(s,t),t&&o(e),h.d(t),t&&o(a)}}}function V(t){let s,e,g,$,v,x,b,q,E,N,S,w,k=t[5].finishedTutorial&&G(t),P=t[5].enteredNotes.length>=3&&t[5].canPresent&&M(t),T=t[5].enteredNotes.length<3&&j(t);return{c(){k&&k.c(),s=n(),e=a("img"),$=n(),P&&P.c(),v=n(),T&&T.c(),x=n(),b=a("button"),q=a("span"),E=I("next"),this.h()},l(t){k&&k.l(t),s=r(t),e=l(t,"IMG",{id:!0,src:!0,alt:!0,class:!0}),$=r(t),P&&P.l(t),v=r(t),T&&T.l(t),x=r(t),b=l(t,"BUTTON",{id:!0,class:!0});var a=c(b);q=l(a,"SPAN",{class:!0});var n=c(q);E=y(n,"next"),n.forEach(o),a.forEach(o),this.h()},h(){i(e,"id","player-img"),e.src!==(g="/static/assets/favicon.png")&&i(e,"src","/static/assets/favicon.png"),i(e,"alt",""),i(e,"class","svelte-s0q8t1"),i(q,"class","svelte-s0q8t1"),i(b,"id","next-button"),i(b,"class","hidden svelte-s0q8t1")},m(a,n){k&&k.m(a,n),d(a,s,n),d(a,e,n),d(a,$,n),P&&P.m(a,n),d(a,v,n),T&&T.m(a,n),d(a,x,n),d(a,b,n),h(b,q),h(q,E),N=!0,S||(w=L(b,"click",t[7]),S=!0)},p(t,e){t[5].finishedTutorial?k?k.p(t,e):(k=G(t),k.c(),k.m(s.parentNode,s)):k&&(k.d(1),k=null),t[5].enteredNotes.length>=3&&t[5].canPresent?P||(P=M(t),P.c(),P.m(v.parentNode,v)):P&&(P.d(1),P=null),t[5].enteredNotes.length<3?T?(T.p(t,e),32&e&&p(T,1)):(T=j(t),T.c(),p(T,1),T.m(x.parentNode,x)):T&&(u(),m(T,1,1,(()=>{T=null})),f())},i(t){N||(p(T),N=!0)},o(t){m(T),N=!1},d(t){k&&k.d(t),t&&o(s),t&&o(e),t&&o($),P&&P.d(t),t&&o(v),T&&T.d(t),t&&o(x),t&&o(b),S=!1,w()}}}function D(t){let s,e;return{c(){s=a("p"),e=I(t[3]),this.h()},l(a){s=l(a,"P",{class:!0});var n=c(s);e=y(n,t[3]),n.forEach(o),this.h()},h(){i(s,"class","msg-txt svelte-s0q8t1")},m(t,a){d(t,s,a),h(s,e)},p(t,s){8&s&&w(e,t[3])},d(t){t&&o(s)}}}function z(t){let s,e;return{c(){s=a("img"),this.h()},l(t){s=l(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){s.src!==(e=`/static/forest-of-letters/${t[2]}-${t[1]}.png`)&&i(s,"src",e),i(s,"alt",""),i(s,"class","svelte-s0q8t1")},m(t,e){d(t,s,e)},p(t,a){6&a&&s.src!==(e=`/static/forest-of-letters/${t[2]}-${t[1]}.png`)&&i(s,"src",e)},d(t){t&&o(s)}}}function B(t){let s,e;return{c(){s=a("img"),this.h()},l(t){s=l(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){s.src!==(e="/scale-the-mountain/monk.png")&&i(s,"src","/scale-the-mountain/monk.png"),i(s,"alt",""),i(s,"class","svelte-s0q8t1")},m(t,e){d(t,s,e)},p:k,d(t){t&&o(s)}}}function G(t){let s,e,n=`${t[5].gold} gold`;return{c(){s=a("span"),e=I(n),this.h()},l(t){s=l(t,"SPAN",{class:!0});var a=c(s);e=y(a,n),a.forEach(o),this.h()},h(){i(s,"class","gold-count svelte-s0q8t1")},m(t,a){d(t,s,a),h(s,e)},p(t,s){32&s&&n!==(n=`${t[5].gold} gold`)&&w(e,n)},d(t){t&&o(s)}}}function M(t){let s,e,n,r;return{c(){s=a("button"),e=I("present chord"),this.h()},l(t){s=l(t,"BUTTON",{class:!0});var a=c(s);e=y(a,"present chord"),a.forEach(o),this.h()},h(){i(s,"class","check-btn svelte-s0q8t1")},m(a,l){d(a,s,l),h(s,e),n||(r=L(s,"click",t[8]),n=!0)},d(t){t&&o(s),n=!1,r()}}}function j(t){let s,e;return s=new x({props:{interval:100,cursor:!1,$$slots:{default:[A]},$$scope:{ctx:t}}}),s.$on("done",t[6]),{c(){b(s.$$.fragment)},l(t){E(s.$$.fragment,t)},m(t,a){N(s,t,a),e=!0},p(t,e){const a={};520&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){e||(p(s.$$.fragment,t),e=!0)},o(t){m(s.$$.fragment,t),e=!1},d(t){S(s,t)}}}function A(t){let s,e;return{c(){s=a("p"),e=I(t[3]),this.h()},l(a){s=l(a,"P",{class:!0});var n=c(s);e=y(n,t[3]),n.forEach(o),this.h()},h(){i(s,"class","msg-txt svelte-s0q8t1")},m(t,a){d(t,s,a),h(s,e)},p(t,s){8&s&&w(e,t[3])},d(t){t&&o(s)}}}function O(t){let s,e,g,$,v,x,b,q,E,N,S,I;const y=[V,T],w=[];function L(t,s){return t[0]?0:1}return e=L(t),g=w[e]=y[e](t),{c(){s=a("div"),g.c(),$=n(),v=a("div"),x=n(),b=a("div"),q=n(),E=a("div"),N=n(),S=a("div"),this.h()},l(t){s=l(t,"DIV",{class:!0});var e=c(s);g.l(e),$=r(e),v=l(e,"DIV",{class:!0}),c(v).forEach(o),x=r(e),b=l(e,"DIV",{class:!0}),c(b).forEach(o),q=r(e),E=l(e,"DIV",{class:!0}),c(E).forEach(o),N=r(e),S=l(e,"DIV",{class:!0}),c(S).forEach(o),e.forEach(o),this.h()},h(){i(v,"class","box b1 svelte-s0q8t1"),i(b,"class","box b2 svelte-s0q8t1"),i(E,"class","box b3 svelte-s0q8t1"),i(S,"class","box b4 svelte-s0q8t1"),i(s,"class","message-box svelte-s0q8t1")},m(t,a){d(t,s,a),w[e].m(s,null),h(s,$),h(s,v),h(s,x),h(s,b),h(s,q),h(s,E),h(s,N),h(s,S),I=!0},p(t,[a]){let n=e;e=L(t),e===n?w[e].p(t,a):(u(),m(w[n],1,1,(()=>{w[n]=null})),f(),g=w[e],g?g.p(t,a):(g=w[e]=y[e](t),g.c()),p(g,1),g.m(s,$))},i(t){I||(p(g),I=!0)},o(t){m(g),I=!1},d(t){t&&o(s),w[e].d()}}}function U(t,s,e){let a;g(t,P,(t=>e(5,a=t)));let{player:n=!1}=s,{mood:l="sad"}=s,{noteLetter:c="c"}=s,{message:r="YALLS"}=s,{wizard:o=!1}=s;return t.$$set=t=>{"player"in t&&e(0,n=t.player),"mood"in t&&e(1,l=t.mood),"noteLetter"in t&&e(2,c=t.noteLetter),"message"in t&&e(3,r=t.message),"wizard"in t&&e(4,o=t.wizard)},[n,l,c,r,o,a,()=>{0!==a.tutorialState&&4!==a.tutorialState&&5!==a.tutorialState&&6!==a.tutorialState&&7!==a.tutorialState&&8!==a.tutorialState&&(console.log("showing btn"),document.getElementById("next-button").classList.remove("hidden"))},()=>{document.getElementById("next-button").classList.add("hidden"),4!==a.tutorialState&&$(P,a.tutorialState+=1,a)},function(s){v.call(this,t,s)}]}class F extends t{constructor(t){super(),s(this,t,U,O,e,{player:0,mood:1,noteLetter:2,message:3,wizard:4})}}export{F as M};
