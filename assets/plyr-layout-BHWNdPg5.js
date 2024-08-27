var te=Object.defineProperty;var Q=e=>{throw TypeError(e)};var ae=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var F=(e,t,a)=>ae(e,typeof t!="symbol"?t+"":t,a),G=(e,t,a)=>t.has(e)||Q("Cannot "+a);var h=(e,t,a)=>(G(e,t,"read from private field"),a?a.call(e):t.get(e)),x=(e,t,a)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),V=(e,t,a,n)=>(G(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a),j=(e,t,a)=>(G(e,t,"access private method"),a);import{P as ne,R as _,S as se,U as M,Y as k,a2 as le,O as re,bd as oe,aj as ie,ac as ue,f as pe,Q as ce,ag as de,a5 as me,ak as _e,aY as H,ah as K,ap as i}from"./app-BEMYSCCF.js";import{g as ye,h as $e,i as be,k as fe,j as ve,l as ge,n as we,E as Te,o as he,p as ke,q as Me,u as xe,t as Pe,v as Ee,w as Ce,x as Le,y as Be,z as Se,A as Ae,B as De,C as Ie,F as Re,D as Fe}from"./vidstack-BOLMn4nu-DzY3b4Zd.js";import{L as Ge,x as s}from"./vidstack-CwTj4H1w-Bp4ARBvF.js";import{S as Ve,$ as l,L as Oe,I as qe,o as U}from"./vidstack-7xep0lg7-rdSMwCnB.js";import{MediaPosterElement as Qe}from"./vidstack-DiirHtXs-tmDeLwC3.js";const Y=le();function r(){return re(Y)}const je={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]};var P;class z extends ne{constructor(){super(...arguments);x(this,P)}onSetup(){V(this,P,_()),se(Y,{...this.$props,previewTime:M(0)})}}P=new WeakMap,F(z,"props",je);function Ne(e,t){const{canAirPlay:a,canFullscreen:n,canPictureInPicture:u,controlsHidden:d,currentTime:$,fullscreen:m,hasCaptions:c,isAirPlayConnected:y,paused:f,pictureInPicture:w,playing:B,pointer:S,poster:A,textTrack:D,viewType:p,waiting:g}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");const T={"plyr--airplay-active":y,"plyr--airplay-supported":a,"plyr--fullscreen-active":m,"plyr--fullscreen-enabled":n,"plyr--hide-controls":d,"plyr--is-touch":()=>S()==="coarse","plyr--loading":g,"plyr--paused":f,"plyr--pip-active":w,"plyr--pip-enabled":u,"plyr--playing":B,"plyr__poster-enabled":A,"plyr--stopped":()=>f()&&$()===0,"plyr--captions-active":D,"plyr--captions-enabled":c},I=oe();for(const v of Object.keys(T))I.add(k(()=>void e.classList.toggle(v,!!T[v]())));return I.add(k(()=>{const v=`plyr--${p()}`;return e.classList.add(v),()=>e.classList.remove(v)}),k(()=>{var q;const{$provider:v}=t,R=(q=v())==null?void 0:q.type,O=`plyr--${He(R)?"html5":R}`;return e.classList.toggle(O,!!R),()=>e.classList.remove(O)})),()=>I.empty()}function He(e){return e==="audio"||e==="video"}class Ke extends Oe{async loadIcons(){const t=(await pe(async()=>{const{icons:n}=await import("./vidstack-DXxIKXmd-Dge3KT8k.js");return{icons:n}},[])).icons,a={};for(const n of Object.keys(t))a[n]=qe({name:n,paths:t[n],viewBox:"0 0 18 18"});return a}}function C(e,t){var a;return((a=e())==null?void 0:a[t])??t}function Ue(){return We()}function Ye(){const e=_(),{load:t}=e.$props,{canLoad:a}=e.$state;return ce(()=>t()==="play"&&!a())()?[J(),N()]:[ze(),Je(),N(),Xe(),mt(),_t()]}function J(){const e=_(),{translations:t}=r(),{title:a}=e.$state,n=l(()=>`${C(t,"Play")}, ${a()}`);return s`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function ze(){const{controls:e}=r();return l(()=>e().includes("play-large")?J():null)}function Je(){const{thumbnails:e,previewTime:t}=r();return s`
    <media-thumbnail
      .src=${l(e)}
      class="plyr__preview-scrubbing"
      time=${l(()=>t())}
    ></media-thumbnail>
  `}function N(){const e=_(),{poster:t}=e.$state,a=l(()=>`background-image: url("${t()}");`);return s`<div class="plyr__poster" style=${a}></div>`}function We(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=r(),a=l(()=>t().filter(n=>!e.has(n)).map(W));return s`<div class="plyr__controls">${a}</div>`}function Xe(){const{controls:e}=r(),t=l(()=>e().map(W));return s`<div class="plyr__controls">${t}</div>`}function W(e){switch(e){case"airplay":return Ze();case"captions":return et();case"current-time":return ct();case"download":return dt();case"duration":return X();case"fast-forward":return ot();case"fullscreen":return tt();case"mute":case"volume":case"mute+volume":return ut(e);case"pip":return nt();case"play":return st();case"progress":return it();case"restart":return lt();case"rewind":return rt();case"settings":return yt();default:return null}}function Ze(){const{translations:e}=r();return s`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${o(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function et(){const{translations:e}=r(),t=o(e,"Disable captions"),a=o(e,"Enable captions");return s`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${t}</span>
      <span class="label--not-pressed plyr__tooltip">${a}</span>
    </media-caption-button>
  `}function tt(){const{translations:e}=r(),t=o(e,"Enter Fullscreen"),a=o(e,"Exit Fullscreen");return s`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}function at(){const{translations:e}=r(),t=o(e,"Mute"),a=o(e,"Unmute");return s`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function nt(){const{translations:e}=r(),t=o(e,"Enter PiP"),a=o(e,"Exit PiP");return s`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function st(){const{translations:e}=r(),t=o(e,"Play"),a=o(e,"Pause");return s`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function lt(){const{translations:e}=r(),{remote:t}=_(),a=o(e,"Restart");function n(u){H(u)&&!K(u)||t.seek(0,u)}return s`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${n}
      @keydown=${n}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </button>
  `}function rt(){const{translations:e,seekTime:t}=r(),a=l(()=>`${C(e,"Rewind")} ${t()}s`),n=l(()=>-1*t());return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function ot(){const{translations:e,seekTime:t}=r(),a=l(()=>`${C(e,"Forward")} ${t()}s`),n=l(t);return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function it(){let e=_(),{duration:t,viewType:a}=e.$state,{translations:n,markers:u,thumbnails:d,seekTime:$,previewTime:m}=r(),c=o(n,"Seek"),y=M(null),f=l(()=>{const p=y();return p?s`<span class="plyr__progress__marker-label">${U(p.label)}<br /></span>`:null});function w(p){m.set(p.detail)}function B(){y.set(this)}function S(){y.set(null)}function A(){const p=d(),g=l(()=>a()==="audio");return p?s`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${g}>
            <media-slider-thumbnail .src=${p} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${f}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:s`
          <span class="plyr__tooltip">
            ${f}
            <media-slider-value></media-slider-value>
          </span>
        `}function D(){var g;const p=t();return Number.isFinite(p)?(g=u())==null?void 0:g.map(T=>s`
        <span
          class="plyr__progress__marker"
          @mouseenter=${B.bind(T)}
          @mouseleave=${S}
          style=${`left: ${T.time/p*100}%;`}
        ></span>
      `):null}return s`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${l($)}
          aria-label=${c}
          @media-seeking-request=${w}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${l(A)}${l(D)}
        </media-time-slider>
      </div>
    </div>
  `}function ut(e){return l(()=>{const t=e==="mute"||e==="mute+volume",a=e==="volume"||e==="mute+volume";return s`
      <div class="plyr__controls__item plyr__volume">
        ${[t?at():null,a?pt():null]}
      </div>
    `})}function pt(){const{translations:e}=r(),t=o(e,"Volume");return s`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function ct(){const e=_(),{translations:t,invertTime:a,toggleTime:n,displayDuration:u}=r(),d=M(de(a));function $(c){!n()||u()||H(c)&&!K(c)||d.set(y=>!y)}function m(){return l(()=>u()?X():null)}return l(()=>{const{streamType:c}=e.$state,y=o(t,"LIVE"),f=o(t,"Current time"),w=l(()=>!u()&&d());return c()==="live"||c()==="ll-live"?s`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${y}</span>
          </media-live-button>
        `:s`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${f}
            ?remainder=${w}
            @pointerup=${$}
            @keydown=${$}
          ></media-time>
          ${m()}
        `})}function X(){const{translations:e}=r(),t=o(e,"Duration");return s`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function dt(){return l(()=>{const e=_(),{translations:t,download:a}=r(),{title:n,source:u}=e.$state,d=u(),$=a(),m=me({title:n(),src:d,download:$}),c=o(t,"Download");return m?s`
          <a
            class="plyr__controls__item plyr__control"
            href=${m.url+`?download=${m.name}`}
            download=${m.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${c}</span>
          </a>
        `:null})}function mt(){return l(()=>{const{clickToPlay:e,clickToFullscreen:t}=r();return[e()?s`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?s`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function _t(){const e=_(),t=M(void 0),a=l(()=>{var n;return U((n=t())==null?void 0:n.text)});return k(()=>{const n=e.$state.textTrack();if(!n)return;function u(){t.set(n==null?void 0:n.activeCues[0])}return u(),_e(n,"cue-change",u)}),s`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${a}</span>
    </div>
  `}function yt(){const{translations:e}=r(),t=o(e,"Settings");return s`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[bt(),wt(),ht(),vt()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function L({label:e,children:t}){const a=M(!1);return s`
    <media-menu @open=${()=>a.set(!0)} @close=${()=>a.set(!1)}>
      ${$t({label:e,open:a})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function $t({open:e,label:t}){const{translations:a}=r(),n=l(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function u(){const d=o(a,"Go back to previous menu");return l(()=>e()?s`<span class="plyr__sr-only">${d}</span>`:null)}return s`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${Mt(e)}>
        ${o(a,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${u()}
    </media-menu-button>
  `}function bt(){return L({label:"Audio",children:ft()})}function ft(){const{translations:e}=r();return s`
    <media-audio-radio-group empty-label=${o(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function vt(){return L({label:"Speed",children:gt()})}function gt(){const{translations:e,speed:t}=r();return s`
    <media-speed-radio-group .rates=${t} normal-label=${o(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function wt(){return L({label:"Captions",children:Tt()})}function Tt(){const{translations:e}=r();return s`
    <media-captions-radio-group off-label=${o(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function ht(){return L({label:"Quality",children:kt()})}function kt(){const{translations:e}=r();return s`
    <media-quality-radio-group auto-label=${o(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function Mt(e){return l(()=>e()?"true":"false")}function o(e,t){return l(()=>C(e,t))}var b,E,ee;class Z extends ie(Ge,z){constructor(){super(...arguments);x(this,E);x(this,b)}onSetup(){this.forwardKeepAlive=!1,V(this,b,_())}onConnect(){var a;(a=h(this,b).player.el)==null||a.setAttribute("data-layout","plyr"),ue(()=>{var n;return(n=h(this,b).player.el)==null?void 0:n.removeAttribute("data-layout")}),Ne(this,h(this,b)),k(()=>{this.$props.customIcons()?new Ve([this]).connect():new Ke([this]).connect()})}render(){return l(j(this,E,ee).bind(this))}}b=new WeakMap,E=new WeakSet,ee=function(){const{viewType:a}=h(this,b).$state;return a()==="audio"?Ue():a()==="video"?Ye():null},F(Z,"tagName","media-plyr-layout");i(Z);i(Qe);i(ye);i($e);i(be);i(fe);i(ve);i(ge);i(we);i(Te);i(he);i(ke);i(Me);i(xe);i(Pe);i(Ee);i(Ce);i(Le);i(Be);i(Se);i(Ae);i(De);i(Ie);i(Re);i(Fe);
