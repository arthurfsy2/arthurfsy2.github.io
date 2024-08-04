import{Q as p,aq as v,ac as l,ag as T,X as w,ar as N,$ as L,R as C}from"./app-CdId2-MO.js";import{A as a,T as I,D as _,x as E}from"./vidstack-D2YigfqZ-BLArkuQb.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=e=>e??a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},A=e=>(...t)=>({_$litDirective$:e,values:t});class b{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let u=class extends b{constructor(t){if(super(t),this.et=a,t.type!==d.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===a||t==null)return this.ft=void 0,this.et=t;if(t===I)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}};u.directiveName="unsafeHTML",u.resultType=1;const Q=A(u);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends u{}$.directiveName="unsafeSVG",$.resultType=2;const x=A($);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=e=>e.strings===void 0,M={},q=(e,t=M)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=(e,t)=>{var s,i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=(s=o)._$AO)===null||i===void 0||i.call(s,t,!1),r(o,t);return!0},f=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},g=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),D(t)}};function O(e){this._$AN!==void 0?(f(this),this._$AM=e,g(this)):this._$AM=e}function S(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let o=s;o<i.length;o++)r(i[o],!1),f(i[o]);else i!=null&&(r(i,!1),f(i));else r(this,e)}const D=e=>{var t,s,i,n;e.type==d.CHILD&&((t=(i=e)._$AP)!==null&&t!==void 0||(i._$AP=S),(s=(n=e)._$AQ)!==null&&s!==void 0||(n._$AQ=O))};class G extends b{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),g(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),s&&(r(this,t),f(this))}setValue(t){if(H(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}class B extends G{constructor(t){super(t),this.h=null,this.w=!1,this.$=null,this.w=t.type===d.ATTRIBUTE||t.type===d.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Gl()),this.h?this.x(T(this.h)):a}reconnected(){this.Gl()}disconnected(){var t;(t=this.$)==null||t.call(this),this.$=null}Gl(){this.h&&(this.$=w(this.l.bind(this)))}x(t){return this.w?m(t):t}y(t){this.setValue(this.x(t))}l(){var t;this.y((t=this.h)==null?void 0:t.call(this))}}function R(e){return A(B)(p(e))}class y{constructor(t,s){this._m=t,this.La=s,this.elements=new Set,this.Gc=v(this.Ha.bind(this))}connect(){this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0,subtree:!0});l(()=>t.disconnect()),l(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){N(t)?(s.textContent="",s.append(t)):(_(null,s),_(t,s)),s.style.display||(s.style.display="contents");const i=s.firstElementChild;if(!i)return;const n=s.getAttribute("data-class");n&&i.classList.add(...n.split(" "))}Ha(t){if(t&&!t.some(n=>n.addedNodes.length))return;let s=!1,i=this._m.flatMap(n=>[...n.querySelectorAll("slot")]);for(const n of i)!n.hasAttribute("name")||this.elements.has(n)||(this.elements.add(n),s=!0);s&&this.La(this.elements)}}let U=0,h="data-slot-id";class z{constructor(t){this._m=t,this.Gc=v(this.Ha.bind(this)),this.slots=new y(t,this.Ha.bind(this))}connect(){this.slots.connect(),this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0});l(()=>t.disconnect())}Ha(){for(const t of this._m)for(const s of t.children){if(s.nodeType!==1)continue;const i=s.getAttribute("slot");if(!i)continue;s.style.display="none";let n=s.getAttribute(h);n||s.setAttribute(h,n=++U+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==i||o.getAttribute(h)===n)continue;const c=document.importNode(s,!0);i.includes("-icon")&&c.classList.add("vds-icon"),c.style.display="",c.removeAttribute("slot"),this.slots.assign(c,o),o.setAttribute(h,n)}}}}function F({name:e,class:t,state:s,paths:i,viewBox:n="0 0 32 32"}){return E`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${n}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${m(e??s)}
  >
    ${L(i)?x(i):R(i)}
  </svg>`}class P{constructor(t){this._m=t,this.dn={},this.gn=!1,this.slots=new y(t,this.hn.bind(this))}connect(){this.slots.connect()}load(){this.Pf().then(t=>{this.dn=t,this.gn=!0,this.hn()})}*jn(){for(const t of Object.keys(this.dn)){const s=`${t}-icon`;for(const i of this.slots.elements)i.name===s&&(yield{icon:this.dn[t],slot:i})}}hn(){if(this.gn)for(const{icon:t,slot:s}of this.jn())this.slots.assign(t,s)}}class X extends P{connect(){super.connect();const{player:t}=C();if(!t.el)return;let s,i=new IntersectionObserver(n=>{var o;(o=n[0])!=null&&o.isIntersecting&&(s==null||s(),s=void 0,this.load())});i.observe(t.el),s=l(()=>i.disconnect())}}export{R as $,F as I,X as L,z as S,q as a,G as c,A as e,b as i,m as l,Q as o};
