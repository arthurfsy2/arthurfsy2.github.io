import{P as K,R as _,S as U,U as T,X as w,a0 as Z,O as z,aS as X,aj as J,ac as W,Q as Y,ag as ee,a5 as te,ak as ae,f as ne,a$ as V,ah as O,ap as i}from"./app-D6U5jHZ_.js";import{g as se,h as le,i as re,k as oe,j as ie,l as ue,n as pe,E as ce,o as de,p as me,q as _e,u as ye,t as $e,v as be,w as fe,x as ve,y as ge,z as he,A as we,B as Te,C as ke,F as xe,D as Me}from"./vidstack-B8Ky97PY-kg_Jp8gP.js";import{L as Pe,x as s}from"./vidstack-D2YigfqZ-BLArkuQb.js";import{$ as l,o as q,S as Ee,L as Ce,I as Le}from"./vidstack-BUfQcGbf-CEKK94Pd.js";import{MediaPosterElement as Se}from"./vidstack-BwnT8mmU-DNnVtrEp.js";const Q=Z();function r(){return z(Q)}const Be={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]},D=class D extends K{onSetup(){this.a=_(),U(Q,{...this.$props,previewTime:T(0)})}};D.props=Be;let B=D;function Ae(e,t){const{canAirPlay:a,canFullscreen:n,canPictureInPicture:u,controlsHidden:d,currentTime:$,fullscreen:m,hasCaptions:c,isAirPlayConnected:y,paused:b,pictureInPicture:g,playing:M,pointer:P,poster:E,textTrack:C,viewType:p,waiting:v}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");const h={"plyr--airplay-active":y,"plyr--airplay-supported":a,"plyr--fullscreen-active":m,"plyr--fullscreen-enabled":n,"plyr--hide-controls":d,"plyr--is-touch":()=>P()==="coarse","plyr--loading":v,"plyr--paused":b,"plyr--pip-active":g,"plyr--pip-enabled":u,"plyr--playing":M,"plyr__poster-enabled":E,"plyr--stopped":()=>b()&&$()===0,"plyr--captions-active":C,"plyr--captions-enabled":c},L=X();for(const f of Object.keys(h))L.add(w(()=>void e.classList.toggle(f,!!h[f]())));return L.add(w(()=>{const f=`plyr--${p()}`;return e.classList.add(f),()=>e.classList.remove(f)}),w(()=>{var F;const{$provider:f}=t,S=(F=f())==null?void 0:F.type,I=`plyr--${De(S)?"html5":S}`;return e.classList.toggle(I,!!S),()=>e.classList.remove(I)})),()=>L.empty()}function De(e){return e==="audio"||e==="video"}class Re extends Ce{async Pf(){const t=(await ne(async()=>{const{icons:n}=await import("./vidstack-DXxIKXmd-Dge3KT8k.js");return{icons:n}},[])).icons,a={};for(const n of Object.keys(t))a[n]=Le({name:n,paths:t[n],viewBox:"0 0 18 18"});return a}}function k(e,t){var a;return((a=e())==null?void 0:a[t])??t}function Ie(){return Oe()}function Fe(){const e=_(),{load:t}=e.$props,{canLoad:a}=e.$state;return Y(()=>t()==="play"&&!a())()?[j(),G()]:[Ge(),Ve(),G(),qe(),at(),nt()]}function j(){const e=_(),{translations:t}=r(),{title:a}=e.$state,n=l(()=>`${k(t,"Play")}, ${a()}`);return s`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Ge(){const{controls:e}=r();return l(()=>e().includes("play-large")?j():null)}function Ve(){const{thumbnails:e,previewTime:t}=r();return s`
    <media-thumbnail
      .src=${l(e)}
      class="plyr__preview-scrubbing"
      time=${l(()=>t())}
    ></media-thumbnail>
  `}function G(){const e=_(),{poster:t}=e.$state,a=l(()=>`background-image: url("${t()}");`);return s`<div class="plyr__poster" style=${a}></div>`}function Oe(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=r(),a=l(()=>t().filter(n=>!e.has(n)).map(N));return s`<div class="plyr__controls">${a}</div>`}function qe(){const{controls:e}=r(),t=l(()=>e().map(N));return s`<div class="plyr__controls">${t}</div>`}function N(e){switch(e){case"airplay":return Qe();case"captions":return je();case"current-time":return et();case"download":return tt();case"duration":return H();case"fast-forward":return Xe();case"fullscreen":return Ne();case"mute":case"volume":case"mute+volume":return We(e);case"pip":return Ke();case"play":return Ue();case"progress":return Je();case"restart":return Ze();case"rewind":return ze();case"settings":return st();default:return null}}function Qe(){const{translations:e}=r();return s`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${o(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function je(){const{translations:e}=r(),t=o(e,"Disable captions"),a=o(e,"Enable captions");return s`
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
  `}function Ne(){const{translations:e}=r(),t=o(e,"Enter Fullscreen"),a=o(e,"Exit Fullscreen");return s`
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
  `}function He(){const{translations:e}=r(),t=o(e,"Mute"),a=o(e,"Unmute");return s`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Ke(){const{translations:e}=r(),t=o(e,"Enter PiP"),a=o(e,"Exit PiP");return s`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function Ue(){const{translations:e}=r(),t=o(e,"Play"),a=o(e,"Pause");return s`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function Ze(){const{translations:e}=r(),{remote:t}=_(),a=o(e,"Restart");function n(u){V(u)&&!O(u)||t.seek(0,u)}return s`
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
  `}function ze(){const{translations:e,seekTime:t}=r(),a=l(()=>`${k(e,"Rewind")} ${t()}s`),n=l(()=>-1*t());return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function Xe(){const{translations:e,seekTime:t}=r(),a=l(()=>`${k(e,"Forward")} ${t()}s`),n=l(t);return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function Je(){let e=_(),{duration:t,viewType:a}=e.$state,{translations:n,markers:u,thumbnails:d,seekTime:$,previewTime:m}=r(),c=o(n,"Seek"),y=T(null),b=l(()=>{const p=y();return p?s`<span class="plyr__progress__marker-label">${q(p.label)}<br /></span>`:null});function g(p){m.set(p.detail)}function M(){y.set(this)}function P(){y.set(null)}function E(){const p=d(),v=l(()=>a()==="audio");return p?s`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${v}>
            <media-slider-thumbnail .src=${p} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${b}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:s`
          <span class="plyr__tooltip">
            ${b}
            <media-slider-value></media-slider-value>
          </span>
        `}function C(){var v;const p=t();return Number.isFinite(p)?(v=u())==null?void 0:v.map(h=>s`
        <span
          class="plyr__progress__marker"
          @mouseenter=${M.bind(h)}
          @mouseleave=${P}
          style=${`left: ${h.time/p*100}%;`}
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
          @media-seeking-request=${g}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${l(E)}${l(C)}
        </media-time-slider>
      </div>
    </div>
  `}function We(e){return l(()=>{const t=e==="mute"||e==="mute+volume",a=e==="volume"||e==="mute+volume";return s`
      <div class="plyr__controls__item plyr__volume">
        ${[t?He():null,a?Ye():null]}
      </div>
    `})}function Ye(){const{translations:e}=r(),t=o(e,"Volume");return s`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function et(){const e=_(),{translations:t,invertTime:a,toggleTime:n,displayDuration:u}=r(),d=T(ee(a));function $(c){!n()||u()||V(c)&&!O(c)||d.set(y=>!y)}function m(){return l(()=>u()?H():null)}return l(()=>{const{streamType:c}=e.$state,y=o(t,"LIVE"),b=o(t,"Current time"),g=l(()=>!u()&&d());return c()==="live"||c()==="ll-live"?s`
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
            aria-label=${b}
            ?remainder=${g}
            @pointerup=${$}
            @keydown=${$}
          ></media-time>
          ${m()}
        `})}function H(){const{translations:e}=r(),t=o(e,"Duration");return s`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function tt(){return l(()=>{const e=_(),{translations:t,download:a}=r(),{title:n,source:u}=e.$state,d=u(),$=a(),m=te({title:n(),src:d,download:$}),c=o(t,"Download");return m?s`
          <a
            class="plyr__controls__item plyr__control"
            href=${m.url+`?download=${m.name}`}
            download=${m.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${c}</span>
          </a>
        `:null})}function at(){return l(()=>{const{clickToPlay:e,clickToFullscreen:t}=r();return[e()?s`
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
          `:null]})}function nt(){const e=_(),t=T(void 0),a=l(()=>{var n;return q((n=t())==null?void 0:n.text)});return w(()=>{const n=e.$state.textTrack();if(!n)return;function u(){t.set(n==null?void 0:n.activeCues[0])}return u(),ae(n,"cue-change",u)}),s`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${a}</span>
    </div>
  `}function st(){const{translations:e}=r(),t=o(e,"Settings");return s`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[rt(),pt(),dt(),it()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function x({label:e,children:t}){const a=T(!1);return s`
    <media-menu @open=${()=>a.set(!0)} @close=${()=>a.set(!1)}>
      ${lt({label:e,open:a})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function lt({open:e,label:t}){const{translations:a}=r(),n=l(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function u(){const d=o(a,"Go back to previous menu");return l(()=>e()?s`<span class="plyr__sr-only">${d}</span>`:null)}return s`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${_t(e)}>
        ${o(a,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${u()}
    </media-menu-button>
  `}function rt(){return x({label:"Audio",children:ot()})}function ot(){const{translations:e}=r();return s`
    <media-audio-radio-group empty-label=${o(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function it(){return x({label:"Speed",children:ut()})}function ut(){const{translations:e,speed:t}=r();return s`
    <media-speed-radio-group .rates=${t} normal-label=${o(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function pt(){return x({label:"Captions",children:ct()})}function ct(){const{translations:e}=r();return s`
    <media-captions-radio-group off-label=${o(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function dt(){return x({label:"Quality",children:mt()})}function mt(){const{translations:e}=r();return s`
    <media-quality-radio-group auto-label=${o(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function _t(e){return l(()=>e()?"true":"false")}function o(e,t){return l(()=>k(e,t))}const R=class R extends J(Pe,B){onSetup(){this.forwardKeepAlive=!1,this.a=_()}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","plyr"),W(()=>{var a;return(a=this.a.player.el)==null?void 0:a.removeAttribute("data-layout")}),Ae(this,this.a),w(()=>{this.$props.customIcons()?new Ee([this]).connect():new Re([this]).connect()})}render(){return l(this.Zm.bind(this))}Zm(){const{viewType:t}=this.a.$state;return t()==="audio"?Ie():t()==="video"?Fe():null}};R.tagName="media-plyr-layout";let A=R;i(A);i(Se);i(se);i(le);i(re);i(oe);i(ie);i(ue);i(pe);i(ce);i(de);i(me);i(_e);i(ye);i($e);i(be);i(fe);i(ve);i(ge);i(he);i(we);i(Te);i(ke);i(xe);i(Me);
