import{W as K,N as _,Y as Z,Z as T,U as w,a3 as U,a4 as W,bp as X,as as Y,O as z,X as J,aj as ee,a8 as te,at as ae,f as ne,bq as V,ao as q,ay as i}from"./app-C_hNWyQi.js";import{M as se,a as le,b as re,d as oe,c as ie,e as ue,f as pe,v as ce,g as de,h as me,i as _e,k as ye,j as $e,l as be,m as fe,n as ve,o as ge,p as he,q as we,s as Te,t as ke,w as Me,u as xe}from"./vidstack-DfdxShpD-ZWCuvSPN.js";import{L as Pe,x as n,a as O}from"./vidstack-rsZGrNIW-CJxWesQC.js";import{$ as l,S as Ee,L as Ce,I as Le}from"./vidstack-BWm2s146-PRmTxTyk.js";import{MediaPosterElement as Be}from"./vidstack-TNK4vPcR-qkXAznMu.js";const N=U();function r(){return W(N)}const Se={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]},D=class D extends K{onSetup(){this.a=_(),Z(N,{...this.$props,previewTime:T(0)})}};D.props=Se;let S=D;function Ae(e,t){const{canAirPlay:a,canFullscreen:s,canPictureInPicture:u,controlsHidden:d,currentTime:$,fullscreen:m,hasCaptions:c,isAirPlayConnected:y,paused:b,pictureInPicture:g,playing:x,pointer:P,poster:E,textTrack:C,viewType:p,waiting:v}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");const h={"plyr--airplay-active":y,"plyr--airplay-supported":a,"plyr--fullscreen-active":m,"plyr--fullscreen-enabled":s,"plyr--hide-controls":d,"plyr--is-touch":()=>P()==="coarse","plyr--loading":v,"plyr--paused":b,"plyr--pip-active":g,"plyr--pip-enabled":u,"plyr--playing":x,"plyr__poster-enabled":E,"plyr--stopped":()=>b()&&$()===0,"plyr--captions-active":C,"plyr--captions-enabled":c},L=X();for(const f of Object.keys(h))L.add(w(()=>void e.classList.toggle(f,!!h[f]())));return L.add(w(()=>{const f=`plyr--${p()}`;return e.classList.add(f),()=>e.classList.remove(f)}),w(()=>{var F;const{$provider:f}=t,B=(F=f())==null?void 0:F.type,R=`plyr--${De(B)?"html5":B}`;return e.classList.toggle(R,!!B),()=>e.classList.remove(R)})),()=>L.empty()}function De(e){return e==="audio"||e==="video"}class Ie extends Ce{async Pf(){const t=(await ne(()=>import("./vidstack-DXxIKXmd-Dge3KT8k.js"),[])).icons,a={};for(const s of Object.keys(t))a[s]=Le({name:s,paths:t[s],viewBox:"0 0 18 18"});return a}}function k(e,t){var a;return((a=e())==null?void 0:a[t])??t}function Re(){return qe()}function Fe(){const e=_(),{load:t}=e.$props,{canLoad:a}=e.$state;return J(()=>t()==="play"&&!a())()?[j(),G()]:[Ge(),Ve(),G(),Oe(),at(),nt()]}function j(){const e=_(),{translations:t}=r(),{title:a}=e.$state,s=l(()=>`${k(t,"Play")}, ${a()}`);return n`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${s}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Ge(){const{controls:e}=r();return l(()=>e().includes("play-large")?j():null)}function Ve(){const{thumbnails:e,previewTime:t}=r();return n`
    <media-thumbnail
      .src=${l(e)}
      class="plyr__preview-scrubbing"
      time=${l(()=>t())}
    ></media-thumbnail>
  `}function G(){const e=_(),{poster:t}=e.$state,a=l(()=>`background-image: url("${t()}");`);return n`<div class="plyr__poster" style=${a}></div>`}function qe(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=r(),a=l(()=>t().filter(s=>!e.has(s)).map(Q));return n`<div class="plyr__controls">${a}</div>`}function Oe(){const{controls:e}=r(),t=l(()=>e().map(Q));return n`<div class="plyr__controls">${t}</div>`}function Q(e){switch(e){case"airplay":return Ne();case"captions":return je();case"current-time":return et();case"download":return tt();case"duration":return H();case"fast-forward":return Xe();case"fullscreen":return Qe();case"mute":case"volume":case"mute+volume":return ze(e);case"pip":return Ke();case"play":return Ze();case"progress":return Ye();case"restart":return Ue();case"rewind":return We();case"settings":return st();default:return null}}function Ne(){const{translations:e}=r();return n`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${o(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function je(){const{translations:e}=r(),t=o(e,"Disable captions"),a=o(e,"Enable captions");return n`
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
  `}function Qe(){const{translations:e}=r(),t=o(e,"Enter Fullscreen"),a=o(e,"Exit Fullscreen");return n`
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
  `}function He(){const{translations:e}=r(),t=o(e,"Mute"),a=o(e,"Unmute");return n`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Ke(){const{translations:e}=r(),t=o(e,"Enter PiP"),a=o(e,"Exit PiP");return n`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function Ze(){const{translations:e}=r(),t=o(e,"Play"),a=o(e,"Pause");return n`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function Ue(){const{translations:e}=r(),{remote:t}=_(),a=o(e,"Restart");function s(u){V(u)&&!q(u)||t.seek(0,u)}return n`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${s}
      @keydown=${s}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </button>
  `}function We(){const{translations:e,seekTime:t}=r(),a=l(()=>`${k(e,"Rewind")} ${t()}s`),s=l(()=>-1*t());return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${s}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function Xe(){const{translations:e,seekTime:t}=r(),a=l(()=>`${k(e,"Forward")} ${t()}s`),s=l(t);return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${s}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function Ye(){let e=_(),{duration:t,viewType:a}=e.$state,{translations:s,markers:u,thumbnails:d,seekTime:$,previewTime:m}=r(),c=o(s,"Seek"),y=T(null),b=l(()=>{const p=y();return p?n`<span class="plyr__progress__marker-label">${O(p.label)}<br /></span>`:null});function g(p){m.set(p.detail)}function x(){y.set(this)}function P(){y.set(null)}function E(){const p=d(),v=l(()=>a()==="audio");return p?n`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${v}>
            <media-slider-thumbnail .src=${p} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${b}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:n`
          <span class="plyr__tooltip">
            ${b}
            <media-slider-value></media-slider-value>
          </span>
        `}function C(){var v;const p=t();return Number.isFinite(p)?(v=u())==null?void 0:v.map(h=>n`
        <span
          class="plyr__progress__marker"
          @mouseenter=${x.bind(h)}
          @mouseleave=${P}
          style=${`left: ${h.time/p*100}%;`}
        ></span>
      `):null}return n`
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
  `}function ze(e){return l(()=>{const t=e==="mute"||e==="mute+volume",a=e==="volume"||e==="mute+volume";return n`
      <div class="plyr__controls__item plyr__volume">
        ${[t?He():null,a?Je():null]}
      </div>
    `})}function Je(){const{translations:e}=r(),t=o(e,"Volume");return n`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function et(){const e=_(),{translations:t,invertTime:a,toggleTime:s,displayDuration:u}=r(),d=T(ee(a));function $(c){!s()||u()||V(c)&&!q(c)||d.set(y=>!y)}function m(){return l(()=>u()?H():null)}return l(()=>{const{streamType:c}=e.$state,y=o(t,"LIVE"),b=o(t,"Current time"),g=l(()=>!u()&&d());return c()==="live"||c()==="ll-live"?n`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${y}</span>
          </media-live-button>
        `:n`
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
        `})}function H(){const{translations:e}=r(),t=o(e,"Duration");return n`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function tt(){return l(()=>{const e=_(),{translations:t,download:a}=r(),{title:s,source:u}=e.$state,d=u(),$=a(),m=te({title:s(),src:d,download:$}),c=o(t,"Download");return m?n`
          <a
            class="plyr__controls__item plyr__control"
            href=${m.url+`?download=${m.name}`}
            download=${m.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${c}</span>
          </a>
        `:null})}function at(){return l(()=>{const{clickToPlay:e,clickToFullscreen:t}=r();return[e()?n`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?n`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function nt(){const e=_(),t=T(void 0),a=l(()=>{var s;return O((s=t())==null?void 0:s.text)});return w(()=>{const s=e.$state.textTrack();if(!s)return;function u(){t.set(s==null?void 0:s.activeCues[0])}return u(),ae(s,"cue-change",u)}),n`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${a}</span>
    </div>
  `}function st(){const{translations:e}=r(),t=o(e,"Settings");return n`
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
  `}function M({label:e,children:t}){const a=T(!1);return n`
    <media-menu @open=${()=>a.set(!0)} @close=${()=>a.set(!1)}>
      ${lt({label:e,open:a})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function lt({open:e,label:t}){const{translations:a}=r(),s=l(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function u(){const d=o(a,"Go back to previous menu");return l(()=>e()?n`<span class="plyr__sr-only">${d}</span>`:null)}return n`
    <media-menu-button class=${s} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${_t(e)}>
        ${o(a,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${u()}
    </media-menu-button>
  `}function rt(){return M({label:"Audio",children:ot()})}function ot(){const{translations:e}=r();return n`
    <media-audio-radio-group empty-label=${o(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function it(){return M({label:"Speed",children:ut()})}function ut(){const{translations:e,speed:t}=r();return n`
    <media-speed-radio-group .rates=${t} normal-label=${o(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function pt(){return M({label:"Captions",children:ct()})}function ct(){const{translations:e}=r();return n`
    <media-captions-radio-group off-label=${o(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function dt(){return M({label:"Quality",children:mt()})}function mt(){const{translations:e}=r();return n`
    <media-quality-radio-group auto-label=${o(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function _t(e){return l(()=>e()?"true":"false")}function o(e,t){return l(()=>k(e,t))}const I=class I extends Y(Pe,S){onSetup(){this.forwardKeepAlive=!1,this.a=_()}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","plyr"),z(()=>{var a;return(a=this.a.player.el)==null?void 0:a.removeAttribute("data-layout")}),Ae(this,this.a),w(()=>{this.$props.customIcons()?new Ee([this]).connect():new Ie([this]).connect()})}render(){return l(this.Zm.bind(this))}Zm(){const{viewType:t}=this.a.$state;return t()==="audio"?Re():t()==="video"?Fe():null}};I.tagName="media-plyr-layout";let A=I;i(A);i(Be);i(se);i(le);i(re);i(oe);i(ie);i(ue);i(pe);i(ce);i(de);i(me);i(_e);i(ye);i($e);i(be);i(fe);i(ve);i(ge);i(he);i(we);i(Te);i(ke);i(Me);i(xe);
