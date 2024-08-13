var H=e=>{throw TypeError(e)};var F=(e,t,a)=>t.has(e)||H("Cannot "+a);var T=(e,t,a)=>(F(e,t,"read from private field"),a?a.call(e):t.get(e)),M=(e,t,a)=>t.has(e)?H("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),G=(e,t,a,n)=>(F(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a),K=(e,t,a)=>(F(e,t,"access private method"),a);import{P as ae,R as _,S as ne,U as x,X as k,a1 as se,O as le,bd as re,aj as oe,ac as ie,f as ue,Q as pe,ag as ce,a5 as de,ak as me,a$ as z,ah as X,ap as i}from"./app-CPoBZ0C7.js";import{g as _e,h as ye,i as $e,k as be,j as fe,l as ve,n as ge,E as he,o as we,p as Te,q as ke,u as xe,t as Me,v as Pe,w as Ee,x as Ce,y as Le,z as Be,A as Se,B as Ae,C as De,F as Ie,D as Re}from"./vidstack-DWSQv5Lq-CzXFAN-S.js";import{L as Fe,x as s}from"./vidstack-D2YigfqZ-BLArkuQb.js";import{S as Ge,$ as l,L as Ve,I as Oe,o as J}from"./vidstack-CSXkYvDj-ZIdmSruu.js";import{MediaPosterElement as qe}from"./vidstack-6YG9bNcm-CNepLRa_.js";const W=se();function r(){return le(W)}const Qe={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]};var P;const q=class q extends ae{constructor(){super(...arguments);M(this,P)}onSetup(){G(this,P,_()),ne(W,{...this.$props,previewTime:x(0)})}};P=new WeakMap,q.props=Qe;let V=q;function je(e,t){const{canAirPlay:a,canFullscreen:n,canPictureInPicture:u,controlsHidden:d,currentTime:$,fullscreen:m,hasCaptions:c,isAirPlayConnected:y,paused:f,pictureInPicture:h,playing:B,pointer:S,poster:A,textTrack:D,viewType:p,waiting:g}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");const w={"plyr--airplay-active":y,"plyr--airplay-supported":a,"plyr--fullscreen-active":m,"plyr--fullscreen-enabled":n,"plyr--hide-controls":d,"plyr--is-touch":()=>S()==="coarse","plyr--loading":g,"plyr--paused":f,"plyr--pip-active":h,"plyr--pip-enabled":u,"plyr--playing":B,"plyr__poster-enabled":A,"plyr--stopped":()=>f()&&$()===0,"plyr--captions-active":D,"plyr--captions-enabled":c},I=re();for(const v of Object.keys(w))I.add(k(()=>void e.classList.toggle(v,!!w[v]())));return I.add(k(()=>{const v=`plyr--${p()}`;return e.classList.add(v),()=>e.classList.remove(v)}),k(()=>{var N;const{$provider:v}=t,R=(N=v())==null?void 0:N.type,j=`plyr--${Ne(R)?"html5":R}`;return e.classList.toggle(j,!!R),()=>e.classList.remove(j)})),()=>I.empty()}function Ne(e){return e==="audio"||e==="video"}class He extends Ve{async loadIcons(){const t=(await ue(async()=>{const{icons:n}=await import("./vidstack-DXxIKXmd-Dge3KT8k.js");return{icons:n}},[])).icons,a={};for(const n of Object.keys(t))a[n]=Oe({name:n,paths:t[n],viewBox:"0 0 18 18"});return a}}function C(e,t){var a;return((a=e())==null?void 0:a[t])??t}function Ke(){return Je()}function Ue(){const e=_(),{load:t}=e.$props,{canLoad:a}=e.$state;return pe(()=>t()==="play"&&!a())()?[Y(),U()]:[ze(),Xe(),U(),We(),dt(),mt()]}function Y(){const e=_(),{translations:t}=r(),{title:a}=e.$state,n=l(()=>`${C(t,"Play")}, ${a()}`);return s`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function ze(){const{controls:e}=r();return l(()=>e().includes("play-large")?Y():null)}function Xe(){const{thumbnails:e,previewTime:t}=r();return s`
    <media-thumbnail
      .src=${l(e)}
      class="plyr__preview-scrubbing"
      time=${l(()=>t())}
    ></media-thumbnail>
  `}function U(){const e=_(),{poster:t}=e.$state,a=l(()=>`background-image: url("${t()}");`);return s`<div class="plyr__poster" style=${a}></div>`}function Je(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=r(),a=l(()=>t().filter(n=>!e.has(n)).map(Z));return s`<div class="plyr__controls">${a}</div>`}function We(){const{controls:e}=r(),t=l(()=>e().map(Z));return s`<div class="plyr__controls">${t}</div>`}function Z(e){switch(e){case"airplay":return Ye();case"captions":return Ze();case"current-time":return pt();case"download":return ct();case"duration":return ee();case"fast-forward":return rt();case"fullscreen":return et();case"mute":case"volume":case"mute+volume":return it(e);case"pip":return at();case"play":return nt();case"progress":return ot();case"restart":return st();case"rewind":return lt();case"settings":return _t();default:return null}}function Ye(){const{translations:e}=r();return s`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${o(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function Ze(){const{translations:e}=r(),t=o(e,"Disable captions"),a=o(e,"Enable captions");return s`
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
  `}function et(){const{translations:e}=r(),t=o(e,"Enter Fullscreen"),a=o(e,"Exit Fullscreen");return s`
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
  `}function tt(){const{translations:e}=r(),t=o(e,"Mute"),a=o(e,"Unmute");return s`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function at(){const{translations:e}=r(),t=o(e,"Enter PiP"),a=o(e,"Exit PiP");return s`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function nt(){const{translations:e}=r(),t=o(e,"Play"),a=o(e,"Pause");return s`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function st(){const{translations:e}=r(),{remote:t}=_(),a=o(e,"Restart");function n(u){z(u)&&!X(u)||t.seek(0,u)}return s`
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
  `}function lt(){const{translations:e,seekTime:t}=r(),a=l(()=>`${C(e,"Rewind")} ${t()}s`),n=l(()=>-1*t());return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function rt(){const{translations:e,seekTime:t}=r(),a=l(()=>`${C(e,"Forward")} ${t()}s`),n=l(t);return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function ot(){let e=_(),{duration:t,viewType:a}=e.$state,{translations:n,markers:u,thumbnails:d,seekTime:$,previewTime:m}=r(),c=o(n,"Seek"),y=x(null),f=l(()=>{const p=y();return p?s`<span class="plyr__progress__marker-label">${J(p.label)}<br /></span>`:null});function h(p){m.set(p.detail)}function B(){y.set(this)}function S(){y.set(null)}function A(){const p=d(),g=l(()=>a()==="audio");return p?s`
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
        `}function D(){var g;const p=t();return Number.isFinite(p)?(g=u())==null?void 0:g.map(w=>s`
        <span
          class="plyr__progress__marker"
          @mouseenter=${B.bind(w)}
          @mouseleave=${S}
          style=${`left: ${w.time/p*100}%;`}
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
          @media-seeking-request=${h}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${l(A)}${l(D)}
        </media-time-slider>
      </div>
    </div>
  `}function it(e){return l(()=>{const t=e==="mute"||e==="mute+volume",a=e==="volume"||e==="mute+volume";return s`
      <div class="plyr__controls__item plyr__volume">
        ${[t?tt():null,a?ut():null]}
      </div>
    `})}function ut(){const{translations:e}=r(),t=o(e,"Volume");return s`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function pt(){const e=_(),{translations:t,invertTime:a,toggleTime:n,displayDuration:u}=r(),d=x(ce(a));function $(c){!n()||u()||z(c)&&!X(c)||d.set(y=>!y)}function m(){return l(()=>u()?ee():null)}return l(()=>{const{streamType:c}=e.$state,y=o(t,"LIVE"),f=o(t,"Current time"),h=l(()=>!u()&&d());return c()==="live"||c()==="ll-live"?s`
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
            ?remainder=${h}
            @pointerup=${$}
            @keydown=${$}
          ></media-time>
          ${m()}
        `})}function ee(){const{translations:e}=r(),t=o(e,"Duration");return s`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function ct(){return l(()=>{const e=_(),{translations:t,download:a}=r(),{title:n,source:u}=e.$state,d=u(),$=a(),m=de({title:n(),src:d,download:$}),c=o(t,"Download");return m?s`
          <a
            class="plyr__controls__item plyr__control"
            href=${m.url+`?download=${m.name}`}
            download=${m.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${c}</span>
          </a>
        `:null})}function dt(){return l(()=>{const{clickToPlay:e,clickToFullscreen:t}=r();return[e()?s`
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
          `:null]})}function mt(){const e=_(),t=x(void 0),a=l(()=>{var n;return J((n=t())==null?void 0:n.text)});return k(()=>{const n=e.$state.textTrack();if(!n)return;function u(){t.set(n==null?void 0:n.activeCues[0])}return u(),me(n,"cue-change",u)}),s`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${a}</span>
    </div>
  `}function _t(){const{translations:e}=r(),t=o(e,"Settings");return s`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[$t(),gt(),wt(),ft()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function L({label:e,children:t}){const a=x(!1);return s`
    <media-menu @open=${()=>a.set(!0)} @close=${()=>a.set(!1)}>
      ${yt({label:e,open:a})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function yt({open:e,label:t}){const{translations:a}=r(),n=l(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function u(){const d=o(a,"Go back to previous menu");return l(()=>e()?s`<span class="plyr__sr-only">${d}</span>`:null)}return s`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${kt(e)}>
        ${o(a,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${u()}
    </media-menu-button>
  `}function $t(){return L({label:"Audio",children:bt()})}function bt(){const{translations:e}=r();return s`
    <media-audio-radio-group empty-label=${o(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function ft(){return L({label:"Speed",children:vt()})}function vt(){const{translations:e,speed:t}=r();return s`
    <media-speed-radio-group .rates=${t} normal-label=${o(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function gt(){return L({label:"Captions",children:ht()})}function ht(){const{translations:e}=r();return s`
    <media-captions-radio-group off-label=${o(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function wt(){return L({label:"Quality",children:Tt()})}function Tt(){const{translations:e}=r();return s`
    <media-quality-radio-group auto-label=${o(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function kt(e){return l(()=>e()?"true":"false")}function o(e,t){return l(()=>C(e,t))}var b,E,te;const Q=class Q extends oe(Fe,V){constructor(){super(...arguments);M(this,E);M(this,b)}onSetup(){this.forwardKeepAlive=!1,G(this,b,_())}onConnect(){var a;(a=T(this,b).player.el)==null||a.setAttribute("data-layout","plyr"),ie(()=>{var n;return(n=T(this,b).player.el)==null?void 0:n.removeAttribute("data-layout")}),je(this,T(this,b)),k(()=>{this.$props.customIcons()?new Ge([this]).connect():new He([this]).connect()})}render(){return l(K(this,E,te).bind(this))}};b=new WeakMap,E=new WeakSet,te=function(){const{viewType:a}=T(this,b).$state;return a()==="audio"?Ke():a()==="video"?Ue():null},Q.tagName="media-plyr-layout";let O=Q;i(O);i(qe);i(_e);i(ye);i($e);i(be);i(fe);i(ve);i(ge);i(he);i(we);i(Te);i(ke);i(xe);i(Me);i(Pe);i(Ee);i(Ce);i(Le);i(Be);i(Se);i(Ae);i(De);i(Ie);i(Re);
