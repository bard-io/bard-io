import{S as t,i as e,s,e as a,k as r,t as o,c as l,a as n,n as c,g as i,d as u,b as h,f,E as d,G as m,F as $,M as p,N as g,j as v,m as S,o as y,x as E,u as w,O as k,v as N,l as I,w as j,P as b,H as T,Q as q,R as x,T as z,r as O,U as R,V}from"../chunks/vendor-31f7a821.js";import{N as D,R as G,M as U}from"../chunks/ReceiveGoldUI-6b15f5f5.js";import{M as A}from"../chunks/MessageBox-8aabb71c.js";/* empty css                                                     */import{g as M,m as P}from"../chunks/stores-1f946ea2.js";function H(t){let e,s,$,p,g,v,S,y,E,w,k,N,I,j,b,T,q,x,z;return{c(){e=a("div"),s=a("img"),p=r(),g=a("div"),v=a("p"),S=o("chords are build from different notes of the major scale"),y=r(),E=a("p"),w=o("The "),k=a("strong"),N=o("first"),I=o(","),j=a("strong"),b=o("third"),T=o(" and\n      "),q=a("strong"),x=o("5th"),z=o(" note create a major chord"),this.h()},l(t){e=l(t,"DIV",{class:!0});var a=n(e);s=l(a,"IMG",{src:!0,alt:!0,class:!0}),p=c(a),g=l(a,"DIV",{class:!0});var r=n(g);v=l(r,"P",{class:!0});var o=n(v);S=i(o,"chords are build from different notes of the major scale"),o.forEach(u),y=c(r),E=l(r,"P",{class:!0});var h=n(E);w=i(h,"The "),k=l(h,"STRONG",{class:!0});var f=n(k);N=i(f,"first"),f.forEach(u),I=i(h,","),j=l(h,"STRONG",{class:!0});var d=n(j);b=i(d,"third"),d.forEach(u),T=i(h," and\n      "),q=l(h,"STRONG",{class:!0});var m=n(q);x=i(m,"5th"),m.forEach(u),z=i(h," note create a major chord"),h.forEach(u),r.forEach(u),a.forEach(u),this.h()},h(){s.src!==($=`/static/scrolls/${t[0]}-major-scroll.png`)&&h(s,"src",$),h(s,"alt",""),h(s,"class","svelte-1pyzqsh"),h(v,"class","svelte-1pyzqsh"),h(k,"class","svelte-1pyzqsh"),h(j,"class","svelte-1pyzqsh"),h(q,"class","svelte-1pyzqsh"),h(E,"class","svelte-1pyzqsh"),h(g,"class","scroll-text svelte-1pyzqsh"),h(e,"class","scroll svelte-1pyzqsh")},m(t,a){f(t,e,a),d(e,s),d(e,p),d(e,g),d(g,v),d(v,S),d(g,y),d(g,E),d(E,w),d(E,k),d(k,N),d(E,I),d(E,j),d(j,b),d(E,T),d(E,q),d(q,x),d(E,z)},p(t,[e]){1&e&&s.src!==($=`/static/scrolls/${t[0]}-major-scroll.png`)&&h(s,"src",$)},i:m,o:m,d(t){t&&u(e)}}}function B(t,e,s){let{type:a="c"}=e;return t.$$set=t=>{"type"in t&&s(0,a=t.type)},[a]}class C extends t{constructor(t){super(),e(this,t,B,H,s,{type:0})}}function F(t){let e,s,v,S,y,E,w,k,N,I,j;return{c(){e=a("section"),s=a("h1"),v=o("welcome to the forest of letters"),S=r(),y=a("button"),E=o("enter"),this.h()},l(t){e=l(t,"SECTION",{class:!0});var a=n(e);s=l(a,"H1",{class:!0});var r=n(s);v=i(r,"welcome to the forest of letters"),r.forEach(u),S=c(a),y=l(a,"BUTTON",{class:!0});var o=n(y);E=i(o,"enter"),o.forEach(u),a.forEach(u),this.h()},h(){h(s,"class","svelte-1sm3nkc"),h(y,"class","svelte-1sm3nkc"),h(e,"class","welcome svelte-1sm3nkc")},m(a,r){f(a,e,r),d(e,s),d(s,v),d(e,S),d(e,y),d(y,E),N=!0,I||(j=$(y,"click",t[3]),I=!0)},p:m,i(t){N||(p((()=>{k&&k.end(1),w||(w=q(e,R,{duration:400})),w.start()})),N=!0)},o(t){w&&w.invalidate(),k=g(e,x,{}),N=!1},d(t){t&&u(e),t&&k&&k.end(),I=!1,j()}}}function L(t){let e,s,r,o;return s=new C({props:{type:"c"}}),{c(){e=a("div"),v(s.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var a=n(e);S(s.$$.fragment,a),a.forEach(u),this.h()},h(){h(e,"class","scroll svelte-1sm3nkc")},m(t,a){f(t,e,a),y(s,e,null),o=!0},i(t){o||(E(s.$$.fragment,t),p((()=>{r||(r=k(e,z,{y:200,duration:200},!0)),r.run(1)})),o=!0)},o(t){w(s.$$.fragment,t),r||(r=k(e,z,{y:200,duration:200},!1)),r.run(0),o=!1},d(t){t&&u(e),N(s),t&&r&&r.end()}}}function Q(t){let e,s,o,i,d;s=new A({props:{mood:t[0],message:t[2][t[1].tutorialState][1]}});let m=t[1].tutorialState>=4&&_(t);return{c(){e=a("div"),v(s.$$.fragment),o=r(),m&&m.c(),i=I(),this.h()},l(t){e=l(t,"DIV",{id:!0,class:!0});var a=n(e);S(s.$$.fragment,a),a.forEach(u),o=c(t),m&&m.l(t),i=I(),this.h()},h(){h(e,"id","npc-box"),h(e,"class","svelte-1sm3nkc")},m(t,a){f(t,e,a),y(s,e,null),f(t,o,a),m&&m.m(t,a),f(t,i,a),d=!0},p(t,e){const a={};1&e&&(a.mood=t[0]),6&e&&(a.message=t[2][t[1].tutorialState][1]),s.$set(a),t[1].tutorialState>=4?m?(m.p(t,e),2&e&&E(m,1)):(m=_(t),m.c(),E(m,1),m.m(i.parentNode,i)):m&&(O(),w(m,1,1,(()=>{m=null})),j())},i(t){d||(E(s.$$.fragment,t),E(m),d=!0)},o(t){w(s.$$.fragment,t),w(m),d=!1},d(t){t&&u(e),N(s),t&&u(o),m&&m.d(t),t&&u(i)}}}function _(t){let e,s,o,i,m,$,g;s=new D({});const I=[K,J],b=[];function T(t,e){return t[1].tutorialState<=5?0:1}return i=T(t),m=b[i]=I[i](t),{c(){e=a("section"),v(s.$$.fragment),o=r(),m.c(),this.h()},l(t){e=l(t,"SECTION",{class:!0});var a=n(e);S(s.$$.fragment,a),o=c(a),m.l(a),a.forEach(u),this.h()},h(){h(e,"class","main-content svelte-1sm3nkc")},m(t,a){f(t,e,a),y(s,e,null),d(e,o),b[i].m(e,null),g=!0},p(t,s){let a=i;i=T(t),i!==a&&(O(),w(b[a],1,1,(()=>{b[a]=null})),j(),m=b[i],m||(m=b[i]=I[i](t),m.c()),E(m,1),m.m(e,null))},i(t){g||(E(s.$$.fragment,t),E(m),p((()=>{$||($=k(e,R,{duration:20},!0)),$.run(1)})),g=!0)},o(t){w(s.$$.fragment,t),w(m),$||($=k(e,R,{duration:20},!1)),$.run(0),g=!1},d(t){t&&u(e),N(s),b[i].d(),t&&$&&$.end()}}}function J(t){let e,s,r,o,c;return s=new G({}),{c(){e=a("div"),v(s.$$.fragment)},l(t){e=l(t,"DIV",{});var a=n(e);S(s.$$.fragment,a),a.forEach(u)},m(t,a){f(t,e,a),y(s,e,null),c=!0},i(t){c||(E(s.$$.fragment,t),p((()=>{o&&o.end(1),r||(r=q(e,z,{y:-200,duration:500})),r.start()})),c=!0)},o(t){w(s.$$.fragment,t),r&&r.invalidate(),o=g(e,R,{}),c=!1},d(t){t&&u(e),N(s),t&&o&&o.end()}}}function K(t){let e,s;return e=new U({}),{c(){v(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){y(e,t,a),s=!0},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function W(t){let e,s,o,i,d,m,$,p=0==t[1].tutorialState&&F(t),g=1==t[1].tutorialState&&L(),k=t[1].tutorialState>=2&&Q(t);return m=new A({props:{player:!0,message:t[2][t[1].tutorialState][0]}}),m.$on("click",t[4]),{c(){e=r(),p&&p.c(),s=r(),g&&g.c(),o=r(),k&&k.c(),i=r(),d=a("div"),v(m.$$.fragment),this.h()},l(t){b('[data-svelte="svelte-1086fqi"]',document.head).forEach(u),e=c(t),p&&p.l(t),s=c(t),g&&g.l(t),o=c(t),k&&k.l(t),i=c(t),d=l(t,"DIV",{id:!0,class:!0});var a=n(d);S(m.$$.fragment,a),a.forEach(u),this.h()},h(){document.title="bard.io",h(d,"id","player-box"),h(d,"class","svelte-1sm3nkc")},m(t,a){f(t,e,a),p&&p.m(t,a),f(t,s,a),g&&g.m(t,a),f(t,o,a),k&&k.m(t,a),f(t,i,a),f(t,d,a),y(m,d,null),$=!0},p(t,[e]){0==t[1].tutorialState?p?(p.p(t,e),2&e&&E(p,1)):(p=F(t),p.c(),E(p,1),p.m(s.parentNode,s)):p&&(O(),w(p,1,1,(()=>{p=null})),j()),1==t[1].tutorialState?g?2&e&&E(g,1):(g=L(),g.c(),E(g,1),g.m(o.parentNode,o)):g&&(O(),w(g,1,1,(()=>{g=null})),j()),t[1].tutorialState>=2?k?(k.p(t,e),2&e&&E(k,1)):(k=Q(t),k.c(),E(k,1),k.m(i.parentNode,i)):k&&(O(),w(k,1,1,(()=>{k=null})),j());const a={};6&e&&(a.message=t[2][t[1].tutorialState][0]),m.$set(a)},i(t){$||(E(p),E(g),E(k),E(m.$$.fragment,t),$=!0)},o(t){w(p),w(g),w(k),w(m.$$.fragment,t),$=!1},d(t){t&&u(e),p&&p.d(t),t&&u(s),g&&g.d(t),t&&u(o),k&&k.d(t),t&&u(i),t&&u(d),N(m)}}}const X=!0;function Y(t,e,s){let a,r;T(t,M,(t=>s(1,a=t))),T(t,P,(t=>s(2,r=t)));let o="sad";2===a.tutorialState&&V(M,a.showUI=!1,a),3===a.tutorialState&&(console.log("state 3 fired"),V(M,a.showUI=!0,a)),a.tutorialState>=7&&(console.log("state 3 fired"),V(M,a.showUI=!1,a));return[o,a,r,()=>{V(M,a.tutorialState=1,a),V(M,a.showScroll=!0,a)},()=>{console.log("checking answer..."),console.log("playing chord"),a.enteredHalfTones.forEach(((t,e)=>{console.log("it issssss . . ."),console.log(t),new Audio(`../static/sounds/note${t}.wav`).play()}));const t=[a.currentScale[0],a.currentScale[2],a.currentScale[4]];a.currentScale[0],a.currentScale[2],a.currentScale[4],console.log("chord needed: "+t),console.log("your chord: "+a.enteredNotes),!function(t,e){if(!Array.isArray(t)||!Array.isArray(e)||t.length!==e.length)return!1;const s=t.concat().sort(),a=e.concat().sort();for(let r=0;r<s.length;r++)if(s[r]!==a[r])return!1;return!0}(t,a.enteredNotes)?V(M,a.tutorialState=5,a):(a.entered&&s(0,o="happy"),V(M,a.tutorialState=6,a),V(M,a.gold+=25,a),V(M,a.wonRound=!0,a),V(M,a.canPresent=!1,a),a.completedLetters.push("c"))}]}export default class extends t{constructor(t){super(),e(this,t,Y,W,s,{})}}export{X as prerender};
