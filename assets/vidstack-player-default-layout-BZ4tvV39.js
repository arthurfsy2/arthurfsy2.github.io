const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-H72EDyqs-D7AHRYO0.js","assets/app-KuiwjXnk.js"])))=>i.map(i=>d[i]);
var Ae=Object.defineProperty;var Pe=Object.getPrototypeOf;var Ge=Reflect.get;var Vt=t=>{throw TypeError(t)};var Be=(t,e,s)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var G=(t,e,s)=>Be(t,typeof e!="symbol"?e+"":e,s),pt=(t,e,s)=>e.has(t)||Vt("Cannot "+s);var S=(t,e,s)=>(pt(t,e,"read from private field"),s?s.call(t):e.get(t)),I=(t,e,s)=>e.has(t)?Vt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),tt=(t,e,s,a)=>(pt(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s),M=(t,e,s)=>(pt(t,e,"access private method"),s);var mt=(t,e,s)=>Ge(Pe(t),s,e);import{O as Le,P as Fe,Q as h,R as w,S as Ne,U as x,V as Qt,W as Ve,X as Et,Y as O,Z as z,$ as H,a0 as $,a1 as U,f as We,a2 as Re,a3 as zt,a4 as _e,a5 as Ke,a6 as qt,a7 as et,a8 as kt,a9 as Qe,aa as Ht,ab as Ee,ac as ze,ad as qe,ae as He,af as F,ag as Ue,ah as je,ai as Ye,aj as Ut,ak as vt,al as Ze,am as Xe,an as Je,ao as ts,ap as jt}from"./app-KuiwjXnk.js";import{A as ht,x as o,s as es,$ as ss,L as Yt}from"./vidstack-CwTj4H1w-Bp4ARBvF.js";import{e as Zt,c as as,L as ns,I as is,$ as n,l as os,S as Xt,i as ls,a as rs}from"./vidstack-7xep0lg7-DudgxXjv.js";const ft=new WeakMap,at=Zt(class extends as{render(t){return ht}update(t,[e]){var s;const a=e!==this.G;return a&&this.G!==void 0&&this.ot(void 0),(a||this.rt!==this.lt)&&(this.G=e,this.dt=(s=t.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=t.element)),ht}ot(t){var e;if(typeof this.G=="function"){const s=(e=this.dt)!==null&&e!==void 0?e:globalThis;let a=ft.get(s);a===void 0&&(a=new WeakMap,ft.set(s,a)),a.get(this.G)!==void 0&&this.G.call(this.dt,void 0),a.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return typeof this.G=="function"?(e=ft.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Jt=Re();function r(){return Le(Jt)}const us={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var j,W,B,Y,gt;class nt extends Fe{constructor(){super(...arguments);I(this,Y);I(this,j);I(this,W,h(()=>{const s=this.$props.when();return M(this,Y,gt).call(this,s)}));I(this,B,h(()=>{const s=this.$props.smallWhen();return M(this,Y,gt).call(this,s)}))}get isMatch(){return S(this,W).call(this)}get isSmallLayout(){return S(this,B).call(this)}onSetup(){tt(this,j,w()),this.setAttributes({"data-match":S(this,W),"data-sm":()=>S(this,B).call(this)?"":null,"data-lg":()=>S(this,B).call(this)?null:"","data-size":()=>S(this,B).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),Ne(Jt,{...this.$props,when:S(this,W),smallWhen:S(this,B),userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),menuPortal:x(null)})}onAttach(s){Qt(s,this.$props.colorScheme)}}j=new WeakMap,W=new WeakMap,B=new WeakMap,Y=new WeakSet,gt=function(s){return s!=="never"&&(Ve(s)?s:h(()=>s(S(this,j).player.state))())},G(nt,"props",us);const te=nt.prototype;Et(te,"isMatch");Et(te,"isSmallLayout");function ee(t,e){O(()=>{const{player:s}=w(),a=s.el;return a&&z(a,"data-layout",e()&&t),()=>a==null?void 0:a.removeAttribute("data-layout")})}function k(t,e){var s;return((s=t())==null?void 0:s[e])??e}function Tt(){return n(()=>{const{translations:t,userPrefersAnnouncements:e}=r();return e()?o`<media-announcer .translations=${n(t)}></media-announcer>`:null})}function C(t,e=""){return o`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function X(t){return t.map(e=>C(e))}function d(t,e){return n(()=>k(t,e))}function wt({tooltip:t}){const{translations:e}=r(),{remotePlaybackState:s}=$(),a=n(()=>{const l=k(e,"AirPlay"),u=zt(s());return`${l} ${u}`}),i=d(e,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${a}>
          ${C("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function se({tooltip:t}){const{translations:e}=r(),{remotePlaybackState:s}=$(),a=n(()=>{const l=k(e,"Google Cast"),u=zt(s());return`${l} ${u}`}),i=d(e,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${a}>
          ${C("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function it({tooltip:t}){const{translations:e}=r(),s=d(e,"Play"),a=d(e,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(e,"Play")}
        >
          ${X(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Wt({tooltip:t,ref:e=Ee}){const{translations:s}=r(),a=d(s,"Mute"),i=d(s,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${at(e)}
        >
          ${X(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ct({tooltip:t}){const{translations:e}=r(),s=d(e,"Closed-Captions On"),a=d(e,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(e,"Captions")}
        >
          ${X(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${a}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ds(){const{translations:t}=r(),e=d(t,"Enter PiP"),s=d(t,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(t,"PiP")}
        >
          ${X(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ae({tooltip:t}){const{translations:e}=r(),s=d(e,"Enter Fullscreen"),a=d(e,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(e,"Fullscreen")}
        >
          ${X(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Rt({backward:t,tooltip:e}){const{translations:s,seekStep:a}=r(),i=t?"Seek Backward":"Seek Forward",l=d(s,i);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${n(()=>(t?-1:1)*a())}
          aria-label=${l}
        >
          ${C(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${d(s,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function ne(){const{translations:t}=r(),{live:e}=$(),s=d(t,"Skip To Live"),a=d(t,"LIVE");return e()?o`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${a}</span>
        </media-live-button>
      `:null}function Dt(){return n(()=>{const{download:t,translations:e}=r(),s=t();if(_e(s))return null;const{source:a,title:i}=$(),l=a(),u=Ke({title:i(),src:l,download:s});return u?o`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(e,"Download")}
                href=${u.url+`?download=${u.name}`}
                download=${u.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(e,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function Mt(){const{translations:t}=r();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(t,"Captions look like this")}
    ></media-captions>
  `}function A(){return o`<div class="vds-controls-spacer"></div>`}function ie(t,e){return o`
    <media-menu-portal .container=${n(t)} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function oe(t,e,s,a){let i=H(e)?document.querySelector(e):e;i||(i=t==null?void 0:t.closest("dialog")),i||(i=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(s),i.append(l),O(()=>{if(!l)return;const{viewType:p}=$(),c=a();z(l,"data-view-type",p()),z(l,"data-sm",c),z(l,"data-lg",!c),z(l,"data-size",c?"sm":"lg")});const{colorScheme:u}=r();return Qt(l,u),l}function le({placement:t,tooltip:e,portal:s}){const{textTracks:a}=w(),{viewType:i,clipStartTime:l,clipEndTime:u}=$(),{translations:p,thumbnails:c,menuPortal:b,noModal:v,menuGroup:m,smallWhen:f}=r();if(h(()=>{var Ft;const Ie=l(),Oe=u()||1/0,Lt=x(null);qt(a,"chapters",Lt.set);const ct=(Ft=Lt())==null?void 0:Ft.cues.filter(Nt=>Nt.startTime<=Oe&&Nt.endTime>=Ie);return!(ct!=null&&ct.length)})())return null;const y=h(()=>v()?et(t):f()?null:et(t)),Q=h(()=>!f()&&m()==="bottom"&&i()==="video"?26:0),E=x(!1);function De(){E.set(!0)}function Me(){E.set(!1)}const Bt=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${n(y)}
      offset=${n(Q)}
    >
      ${n(()=>E()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${n(c)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return o`
    <media-menu class="vds-chapters-menu vds-menu" @open=${De} @close=${Me}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${C("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${kt(e)?n(e):e}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?ie(b,Bt):Bt}
    </media-menu>
  `}function $t(t){const{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const It={type:"color"},cs={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},ps={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},ms={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},vs={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},st={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},N=Object.keys(st).reduce((t,e)=>({...t,[e]:x(st[e])}),{});for(const t of Object.keys(N)){const e=localStorage.getItem(`vds-player:${U(t)}`);H(e)&&N[t].set(e)}function fs(){for(const t of Object.keys(N)){const e=st[t];N[t].set(e)}}let _t=!1,bt=new Set;function $s(){const{player:t}=w();bt.add(t),ze(()=>bt.delete(t)),_t||(qe(()=>{for(const e of He(N)){const s=N[e],a=st[e],i=`--media-user-${U(e)}`,l=`vds-player:${U(e)}`;O(()=>{var b;const u=s(),p=u===a,c=p?null:bs(t,e,u);for(const v of bt)(b=v.el)==null||b.style.setProperty(i,c);p?localStorage.removeItem(l):localStorage.setItem(l,u)})}},null),_t=!0)}function bs(t,e,s){var a;switch(e){case"fontFamily":const i=s==="capitals"?"small-caps":"";return(a=t.el)==null||a.style.setProperty("--media-user-font-variant",i),gs(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return hs(s);case"textColor":return`rgb(${$t(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return ys(s);case"textBg":return`rgb(${$t(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${$t(s)} / var(--media-user-display-bg-opacity, 1))`}}function hs(t){return(parseInt(t)/100).toString()}function gs(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function ys(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let xs=0;function D({label:t="",value:e="",children:s}){if(!t)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const a=`vds-menu-section-${++xs}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${a}>
      <div class="vds-menu-section-title">
        <header id=${a}>${t}</header>
        ${e?o`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function J({label:t,children:e}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function V({label:t,icon:e,hint:s}){return o`
    <media-menu-button class="vds-menu-item">
      ${C("menu-arrow-left","vds-menu-close-icon")}
      ${e?C(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${n(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?n(s):null} </span>
      ${C("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function Ss({value:t=null,options:e,hideLabel:s=!1,children:a=null,onChange:i=null}){function l(u){const{value:p,label:c}=u;return o`
      <media-radio class="vds-radio" value=${p}>
        ${C("menu-radio-check")}
        ${s?null:o`
              <span class="vds-radio-label" data-part="label">
                ${H(c)?c:n(c)}
              </span>
            `}
        ${kt(a)?a(u):a}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${H(t)?t:t?n(t):""}
      @change=${i}
    >
      ${F(e)?e.map(l):n(()=>e().map(l))}
    </media-radio-group>
  `}function ks(t){return F(t)?t.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(t).map(e=>({label:e,value:t[e]}))}function ot(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function lt(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function rt({label:t=null,value:e=null,upIcon:s="",downIcon:a="",children:i,isMin:l,isMax:u}){const p=t||e,c=[a?C(a,"down"):null,i,s?C(s,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${n(()=>l()?"":null)}
      data-max=${n(()=>u()?"":null)}
    >
      ${p?o`
            <div class="vds-menu-slider-title">
              ${[t?o`<div>${t}</div>`:null,e?o`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const Ts={...ps,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},Ot={...ms,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function ws(){return n(()=>{const{hasCaptions:t}=$(),{translations:e}=r();return t()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${V({label:()=>k(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[D({label:d(e,"Font"),children:[Cs(),Ds()]}),D({label:d(e,"Text"),children:[Ms(),Os(),Is()]}),D({label:d(e,"Text Background"),children:[As(),Ps()]}),D({label:d(e,"Display Background"),children:[Gs(),Bs()]}),D({children:[Ls()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Cs(){return P({label:"Family",option:cs,type:"fontFamily"})}function Ds(){return P({label:"Size",option:Ts,type:"fontSize"})}function Ms(){return P({label:"Color",option:It,type:"textColor"})}function Is(){return P({label:"Opacity",option:Ot,type:"textOpacity"})}function Os(){return P({label:"Shadow",option:vs,type:"textShadow"})}function As(){return P({label:"Color",option:It,type:"textBg"})}function Ps(){return P({label:"Opacity",option:Ot,type:"textBgOpacity"})}function Gs(){return P({label:"Color",option:It,type:"displayBg"})}function Bs(){return P({label:"Opacity",option:Ot,type:"displayBgOpacity"})}function Ls(){const{translations:t}=r();return o`
    <button class="vds-menu-item" role="menuitem" @click=${fs}>
      <span class="vds-menu-item-label">${n(()=>k(t,"Reset"))}</span>
    </button>
  `}function P({label:t,option:e,type:s}){const{player:a}=w(),{translations:i}=r(),l=N[s],u=()=>k(i,t);function p(){Ye(),a.dispatchEvent(new Event("vds-font-change"))}if(e.type==="color"){let v=function(m){l.set(m.target.value),p()};return J({label:n(u),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${n(l)}
          @input=${v}
        />
      `})}if(e.type==="slider"){let v=function(E){l.set(E.detail+"%"),p()};const{min:m,max:f,step:g,upIcon:y,downIcon:Q}=e;return rt({label:n(u),value:n(l),upIcon:y,downIcon:Q,isMin:()=>l()===m+"%",isMax:()=>l()===f+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${m}
          max=${f}
          step=${g}
          key-step=${g}
          .value=${n(()=>parseInt(l()))}
          aria-label=${n(u)}
          @value-change=${v}
          @drag-value-change=${v}
        >
          ${ot()}${lt()}
        </media-slider>
      `})}const c=ks(e.values),b=()=>{var f;const v=l(),m=((f=c.find(g=>g.value===v))==null?void 0:f.label)||"";return k(i,H(m)?m:m())};return o`
    <media-menu class=${`vds-${U(s)}-menu vds-menu`}>
      ${V({label:u,hint:b})}
      <media-menu-items class="vds-menu-items">
        ${Ss({value:l,options:c,onChange({detail:v}){l.set(v),p()}})}
      </media-menu-items>
    </media-menu>
  `}function ut({label:t,checked:e,defaultChecked:s=!1,storageKey:a,onChange:i}){const{translations:l}=r(),u=a?localStorage.getItem(a):null,p=x(!!(u??s)),c=x(!1),b=n(ss(p)),v=d(l,t);a&&i(Ue(p)),e&&O(()=>void p.set(e()));function m(y){(y==null?void 0:y.button)!==1&&(p.set(Q=>!Q),a&&localStorage.setItem(a,p()?"1":""),i(p(),y),c.set(!1))}function f(y){je(y)&&m()}function g(y){y.button===0&&c.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${b}
      data-active=${n(()=>c()?"":null)}
      @pointerup=${m}
      @pointerdown=${g}
      @keydown=${f}
    ></div>
  `}function Fs(){return n(()=>{const{translations:t}=r();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${V({label:()=>k(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:[Ns(),Vs()]}),D({children:[ws()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Ns(){const{userPrefersAnnouncements:t,translations:e}=r(),s="Announcements";return J({label:d(e,s),children:ut({label:s,storageKey:"vds-player::announcements",onChange(a){t.set(a)}})})}function Vs(){return n(()=>{const{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:s}=r(),{viewType:a}=$();if(h(()=>a()!=="video"||s())())return null;const l="Keyboard Animations";return J({label:d(t,l),children:ut({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(u){e.set(u)}})})})}function Ws(){return n(()=>{const{noAudioGain:t,translations:e}=r(),{audioTracks:s,canSetAudioGain:a}=$();return h(()=>!(a()&&!t())&&s().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${V({label:()=>k(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[Rs(),_s()]}
        </media-menu-items>
      </media-menu>
    `})}function Rs(){return n(()=>{const{translations:t}=r(),{audioTracks:e}=$(),s=d(t,"Default");return h(()=>e().length<=1)()?null:D({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${V({label:()=>k(t,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function _s(){return n(()=>{const{noAudioGain:t,translations:e}=r(),{canSetAudioGain:s}=$();if(h(()=>!s()||t())())return null;const{audioGain:i}=$();return D({label:d(e,"Boost"),value:n(()=>Math.round(((i()??1)-1)*100)+"%"),children:[rt({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:Ks(),isMin:()=>((i()??1)-1)*100<=re(),isMax:()=>((i()??1)-1)*100===ue()})]})})}function Ks(){const{translations:t}=r(),e=d(t,"Boost"),s=re,a=ue,i=Qs;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${n(s)}
      max=${n(a)}
      step=${n(i)}
      key-step=${n(i)}
    >
      ${ot()}${lt()}
    </media-audio-gain-slider>
  `}function re(){const{audioGains:t}=r(),e=t();return F(e)?e[0]??0:e.min}function ue(){const{audioGains:t}=r(),e=t();return F(e)?e[e.length-1]??300:e.max}function Qs(){const{audioGains:t}=r(),e=t();return F(e)?e[1]-e[0]||25:e.step}function Es(){return n(()=>{const{translations:t}=r(),{hasCaptions:e}=$(),s=d(t,"Off");return e()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${V({label:()=>k(t,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function zs(){return n(()=>{const{translations:t}=r();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${V({label:()=>k(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:qs()}),Hs(),Zs()]}
        </media-menu-items>
      </media-menu>
    `})}function qs(){const{remote:t}=w(),{translations:e}=r(),s="Loop";return J({label:d(e,s),children:ut({label:s,storageKey:"vds-player::user-loop",onChange(a,i){t.userPrefersLoopChange(a,i)}})})}function Hs(){return n(()=>{const{translations:t}=r(),{canSetPlaybackRate:e,playbackRate:s}=$();return e()?D({label:d(t,"Speed"),value:n(()=>s()===1?k(t,"Normal"):s()+"x"),children:[rt({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:js(),isMin:()=>s()===de(),isMax:()=>s()===ce()})]}):null})}function de(){const{playbackRates:t}=r(),e=t();return F(e)?e[0]??0:e.min}function ce(){const{playbackRates:t}=r(),e=t();return F(e)?e[e.length-1]??2:e.max}function Us(){const{playbackRates:t}=r(),e=t();return F(e)?e[1]-e[0]||.25:e.step}function js(){const{translations:t}=r(),e=d(t,"Speed"),s=de,a=ce,i=Us;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${n(s)}
      max=${n(a)}
      step=${n(i)}
      key-step=${n(i)}
    >
      ${ot()}${lt()}
    </media-speed-slider>
  `}function Ys(){const{remote:t,qualities:e}=w(),{autoQuality:s,canSetQuality:a,qualities:i}=$(),{translations:l}=r(),u="Auto";return h(()=>!a()||i().length<=1)()?null:J({label:d(l,u),children:ut({label:u,checked:s,onChange(c,b){c?t.requestAutoQuality(b):t.changeQuality(e.selectedIndex,b)}})})}function Zs(){return n(()=>{const{hideQualityBitrate:t,translations:e}=r(),{canSetQuality:s,qualities:a,quality:i}=$(),l=h(()=>!s()||a().length<=1),u=h(()=>es(a()));return l()?null:D({label:d(e,"Quality"),value:n(()=>{var m,f;const p=(m=i())==null?void 0:m.height,c=t()?null:(f=i())==null?void 0:f.bitrate,b=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,v=k(e,"Auto");return p?`${p}p${b?` (${b})`:""}`:v}),children:[rt({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:Xs(),isMin:()=>u()[0]===i(),isMax:()=>u().at(-1)===i()}),Ys()]})})}function Xs(){const{translations:t}=r(),e=d(t,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${ot()}${lt()}
    </media-quality-slider>
  `}function pe({placement:t,portal:e,tooltip:s}){return n(()=>{const{viewType:a}=$(),{translations:i,menuPortal:l,noModal:u,menuGroup:p,smallWhen:c}=r(),b=h(()=>u()?et(t):c()?null:et(t)),v=h(()=>!c()&&p()==="bottom"&&a()==="video"?26:0),m=x(!1);$s();function f(){m.set(!0)}function g(){m.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${n(b)}
        offset=${n(v)}
      >
        ${n(()=>m()?[zs(),Fs(),Ws(),Es()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${f} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(i,"Settings")}
            >
              ${C("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${kt(s)?n(s):s}
          >
            ${d(i,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?ie(l,y):y}
      </media-menu>
    `})}function At({orientation:t,tooltip:e}){return n(()=>{const{pointer:s,muted:a,canSetVolume:i}=$();if(s()==="coarse"&&!a())return null;if(!i())return Wt({tooltip:e});const l=x(void 0),u=Qe(l);return o`
      <div class="vds-volume" ?data-active=${n(u)} ${at(l.set)}>
        ${Wt({tooltip:e})}
        <div class="vds-volume-popup">${Js({orientation:t})}</div>
      </div>
    `})}function Js({orientation:t}={}){const{translations:e}=r(),s=d(e,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${os(t)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function Pt(){const t=x(void 0),e=x(0),{thumbnails:s,translations:a,sliderChaptersMinWidth:i,disableTimeSlider:l,seekStep:u,noScrubGesture:p}=r(),c=d(a,"Seek"),b=n(l),v=n(()=>e()<i()),m=n(s);return Ht(t,()=>{const f=t();f&&e.set(f.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${n(u)}
      ?disabled=${b}
      ?no-swipe-gesture=${n(p)}
      ${at(t.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${v}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${m}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function ta(){return o`
    <div class="vds-time-group">
      ${n(()=>{const{duration:t}=$();return t()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function ea(){return n(()=>{const{live:t,duration:e}=$();return t()?ne():e()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function me(){return n(()=>{const{live:t}=$();return t()?ne():ta()})}function ve(){return n(()=>{const{textTracks:t}=w(),{title:e,started:s}=$(),a=x(null);return qt(t,"chapters",a.set),a()&&(s()||!e())?fe():o`<media-title class="vds-chapter-title"></media-title>`})}function fe(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class $e extends ns{async loadIcons(){const e=(await We(async()=>{const{icons:a}=await import("./vidstack-H72EDyqs-D7AHRYO0.js");return{icons:a}},__vite__mapDeps([0,1]))).icons,s={};for(const a of Object.keys(e))s[a]=is({name:a,paths:e[a]});return s}}var L;let sa=(L=class extends nt{},G(L,"props",{...mt(L,L,"props"),when:({viewType:e})=>e==="audio",smallWhen:({width:e})=>e<576}),L);function aa(){return[Tt(),Mt(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Rt({backward:!0,tooltip:"top start"}),it({tooltip:"top"}),Rt({tooltip:"top"}),na(),Pt(),ea(),At({orientation:"vertical",tooltip:"top"}),Ct({tooltip:"top"}),Dt(),wt({tooltip:"top"}),ia()]}
        </media-controls-group>
      </media-controls>
    `]}function na(){return n(()=>{let t=x(void 0),e=x(!1),s=w(),{title:a,started:i,currentTime:l,ended:u}=$(),{translations:p}=r(),c=Xe(t),b=()=>i()||l()>0;const v=()=>{const g=u()?"Replay":b()?"Continue":"Play";return`${k(p,g)}: ${a()}`};O(()=>{var g;c()&&document.activeElement===document.body&&((g=s.player.el)==null||g.focus({preventScroll:!0}))});function m(){const g=t(),y=!!g&&!c()&&g.clientWidth<g.children[0].clientWidth;g&&Je(g,"vds-marquee",y),e.set(y)}function f(){return o`
        <span class="vds-title-text">
          ${n(v)}${n(()=>b()?fe():null)}
        </span>
      `}return Ht(t,m),a()?o`
          <span class="vds-title" title=${n(v)} ${at(t.set)}>
            ${[f(),n(()=>e()&&!c()?f():null)]}
          </span>
        `:A()})}function ia(){const t="top end";return[le({tooltip:"top",placement:t,portal:!0}),pe({tooltip:"top end",placement:t,portal:!0})]}var Z,R,T,be,he,ge,ye,xe,Se;class yt extends Ut(Yt,sa){constructor(){super(...arguments);I(this,T);I(this,Z);I(this,R,x(!1))}onSetup(){this.forwardKeepAlive=!1,tt(this,Z,w()),this.classList.add("vds-audio-layout"),M(this,T,ge).call(this)}onConnect(){ee("audio",()=>this.isMatch),M(this,T,he).call(this)}render(){return n(M(this,T,be).bind(this))}}Z=new WeakMap,R=new WeakMap,T=new WeakSet,be=function(){return this.isMatch?aa():null},he=function(){const{menuPortal:s}=r();O(()=>{if(!this.isMatch)return;const a=oe(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),i=a?[this,a]:[this];return(this.$props.customIcons()?new Xt(i):new $e(i)).connect(),s.set(a),()=>{a.remove(),s.set(null)}})},ge=function(){const{pointer:s}=S(this,Z).$state;O(()=>{s()==="coarse"&&O(M(this,T,ye).bind(this))})},ye=function(){if(!S(this,R).call(this)){vt(this,"pointerdown",M(this,T,xe).bind(this),{capture:!0});return}vt(this,"pointerdown",s=>s.stopPropagation()),vt(window,"pointerdown",M(this,T,Se).bind(this))},xe=function(s){const{target:a}=s;Ze(a)&&a.closest(".vds-time-slider")&&(s.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),S(this,R).set(!0))},Se=function(){S(this,R).set(!1),this.removeAttribute("data-scrubbing")},G(yt,"tagName","media-audio-layout"),G(yt,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa=Zt(class extends ls{constructor(){super(...arguments),this.key=ht}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(rs(t),this.key=e),s}}),q=class q extends nt{};G(q,"props",{...mt(q,q,"props"),when:({viewType:e})=>e==="video",smallWhen:({width:e,height:s})=>e<576||s<380});let xt=q;function ke(){return n(()=>{const t=w(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:s}=r();if(h(()=>e()||!s())())return null;const i=x(!1),{lastKeyboardAction:l}=t.$state;O(()=>{i.set(!!l());const m=setTimeout(()=>i.set(!1),500);return()=>{i.set(!1),window.clearTimeout(m)}});const u=h(()=>{var f;const m=(f=l())==null?void 0:f.action;return m&&i()?U(m):null}),p=h(()=>`vds-kb-action${i()?"":" hidden"}`),c=h(la),b=h(()=>{const m=ra();return m?ts(m):null});function v(){const m=b();return m?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return o`
      <div class=${n(p)} data-action=${n(u)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${n(c)}</div>
        </div>
        ${n(()=>oa(l(),v()))}
      </div>
    `})}function la(){var a;const{$state:t}=w(),e=(a=t.lastKeyboardAction())==null?void 0:a.action,s=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":Kt(t.volume(),s);case"volumeUp":case"volumeDown":return Kt(t.volume(),s);default:return""}}function Kt(t,e){return`${Math.round(t*e*100)}%`}function ra(){var s;const{$state:t}=w();switch((s=t.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||t.volume()===0?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function ua(){return[Tt(),Te(),dt(),ke(),Mt(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[ca(),A(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,A(),o`
            <media-controls-group class="vds-controls-group">
              ${Pt()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[it({tooltip:"top start"}),At({orientation:"horizontal",tooltip:"top"}),me(),ve(),Ct({tooltip:"top"}),da(),wt({tooltip:"top"}),se({tooltip:"top"}),Dt(),ds(),ae({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function da(){return n(()=>{const{menuGroup:t}=r();return t()==="bottom"?Gt():null})}function ca(){return o`
    <media-controls-group class="vds-controls-group">
      ${n(()=>{const{menuGroup:t}=r();return t()==="top"?[A(),Gt()]:null})}
    </media-controls-group>
  `}function pa(){return[Tt(),Te(),dt(),Mt(),ke(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[wt({tooltip:"top start"}),se({tooltip:"bottom start"}),A(),Ct({tooltip:"bottom"}),Dt(),Gt(),At({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${A()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[A(),it({tooltip:"top"}),A()]}
        </media-controls-group>

        ${A()}

        <media-controls-group class="vds-controls-group">
          ${[me(),ve(),ae({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Pt()}
        </media-controls-group>
      </media-controls>
    `,va()]}function ma(){return o`
    <div class="vds-load-container">
      ${[dt(),it({tooltip:"top"})]}
    </div>
  `}function va(){return n(()=>{const{duration:t}=$();return t()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function dt(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Gt(){const{menuGroup:t,smallWhen:e}=r(),s=()=>t()==="top"||e()?"bottom":"top",a=h(()=>`${s()} ${t()==="top"?"end":"center"}`),i=h(()=>`${s()} end`);return[le({tooltip:a,placement:i,portal:!0}),pe({tooltip:a,placement:i,portal:!0})]}function Te(){return n(()=>{const{noGestures:t}=r();return t()?null:o`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var _,K,we,Ce;class St extends Ut(Yt,xt){constructor(){super(...arguments);I(this,K);I(this,_)}onSetup(){this.forwardKeepAlive=!1,tt(this,_,w()),this.classList.add("vds-video-layout")}onConnect(){ee("video",()=>this.isMatch),M(this,K,we).call(this)}render(){return n(M(this,K,Ce).bind(this))}}_=new WeakMap,K=new WeakSet,we=function(){const{menuPortal:s}=r();O(()=>{if(!this.isMatch)return;const a=oe(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),i=a?[this,a]:[this];return(this.$props.customIcons()?new Xt(i):new $e(i)).connect(),s.set(a),()=>{a.remove(),s.set(null)}})},Ce=function(){const{load:s}=S(this,_).$props,{canLoad:a,streamType:i,nativeControls:l}=S(this,_).$state;return!l()&&this.isMatch?s()==="play"&&!a()?ma():i()==="unknown"?dt():this.isSmallLayout?pa():ua():null},G(St,"tagName","media-video-layout"),G(St,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});jt(yt);jt(St);
