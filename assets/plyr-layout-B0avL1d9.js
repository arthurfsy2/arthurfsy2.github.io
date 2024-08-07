var X=e=>{throw TypeError(e)};var H=(e,t,a)=>t.has(e)||X("Cannot "+a);var x=(e,t,a)=>(H(e,t,"read from private field"),a?a.call(e):t.get(e)),F=(e,t,a)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Z=(e,t,a,s)=>(H(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a),Y=(e,t,a)=>(H(e,t,"access private method"),a);import{X as ee,a as te,z as ae,W as le,b as se,Y as ne,e as re,x as ie,f as oe,s as pe,p as ce,n as ue,l as de,g as _e,k as me,m as ye,o as $e,Z as be,q as ve,r as fe,v as ge,D as we,w as he}from"./vidstack-HPLO6OXE-LZtH7jHf.js";import{MediaPosterElement as ke}from"./vidstack-BD2BMTWS-Bhqq8r7I.js";import{a5 as Te,a6 as m,aa as xe,R as A,F as P,ax as Pe,ai as Ae,aZ as Fe,aH as Le,v as De,q as Ee,aj as qe,A as Ie,a_ as Se,s as Ce,aq as M,a$ as U,aY as o}from"./app-CodmWtM_.js";import{S as Re,T as n,x as We,W as je,o as V}from"./vidstack-CCM3MRIS-7soFA6OL.js";import{t as He,x as l}from"./vidstack-X3U7UG6U-B9xcI1mI.js";var z=Pe();function r(){return Ae(z)}var Ze={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]},L,w,Ne=(w=class extends Te{constructor(){super(...arguments);F(this,L)}onSetup(){Z(this,L,m()),xe(z,{...this.$props,previewTime:A(0)})}},L=new WeakMap,w.props=Ze,w);function Oe(e,t){let{canAirPlay:a,canFullscreen:s,canPictureInPicture:p,controlsHidden:d,currentTime:$,fullscreen:_,hasCaptions:u,isAirPlayConnected:y,paused:v,pictureInPicture:k,playing:I,pointer:S,poster:C,textTrack:R,viewType:c,waiting:g}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");let T={"plyr--airplay-active":y,"plyr--airplay-supported":a,"plyr--fullscreen-active":_,"plyr--fullscreen-enabled":s,"plyr--hide-controls":d,"plyr--is-touch":()=>S()==="coarse","plyr--loading":g,"plyr--paused":v,"plyr--pip-active":k,"plyr--pip-enabled":p,"plyr--playing":I,"plyr__poster-enabled":C,"plyr--stopped":()=>v()&&$()===0,"plyr--captions-active":R,"plyr--captions-enabled":u},W=Fe();for(let f of Object.keys(T))W.add(P(()=>void e.classList.toggle(f,!!T[f]())));return W.add(P(()=>{let f=`plyr--${c()}`;return e.classList.add(f),()=>e.classList.remove(f)}),P(()=>{var O;let{$provider:f}=t,j=(O=f())==null?void 0:O.type,N=`plyr--${Xe(j)?"html5":j}`;return e.classList.toggle(N,!!j),()=>e.classList.remove(N)})),()=>W.empty()}function Xe(e){return e==="audio"||e==="video"}var Ye=class extends We{async loadIcons(){let e=(await Ee(async()=>{const{icons:a}=await import("./vidstack-2UAGKNCA-BfTvMPpP.js");return{icons:a}},[])).icons,t={};for(let a of Object.keys(e))t[a]=je({name:a,paths:e[a],viewBox:"0 0 18 18"});return t}};function E(e,t){var a;return((a=e())==null?void 0:a[t])??t}function Ke(){return ze()}function Me(){let e=m(),{load:t}=e.$props,{canLoad:a}=e.$state;return qe(()=>t()==="play"&&!a())()?[G(),K()]:[Ue(),Ve(),K(),Ge(),ut(),dt()]}function G(){let e=m(),{translations:t}=r(),{title:a}=e.$state,s=n(()=>`${E(t,"Play")}, ${a()}`);return l`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${s}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Ue(){let{controls:e}=r();return n(()=>e().includes("play-large")?G():null)}function Ve(){let{thumbnails:e,previewTime:t}=r();return l`
    <media-thumbnail
      .src=${n(e)}
      class="plyr__preview-scrubbing"
      time=${n(()=>t())}
    ></media-thumbnail>
  `}function K(){let e=m(),{poster:t}=e.$state,a=n(()=>`background-image: url("${t()}");`);return l`<div class="plyr__poster" style=${a}></div>`}function ze(){let e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=r(),a=n(()=>t().filter(s=>!e.has(s)).map(J));return l`<div class="plyr__controls">${a}</div>`}function Ge(){let{controls:e}=r(),t=n(()=>e().map(J));return l`<div class="plyr__controls">${t}</div>`}function J(e){switch(e){case"airplay":return Je();case"captions":return Qe();case"current-time":return pt();case"download":return ct();case"duration":return Q();case"fast-forward":return nt();case"fullscreen":return Be();case"mute":case"volume":case"mute+volume":return it(e);case"pip":return tt();case"play":return at();case"progress":return rt();case"restart":return lt();case"rewind":return st();case"settings":return _t();default:return null}}function Je(){let{translations:e}=r();return l`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${i(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function Qe(){let{translations:e}=r(),t=i(e,"Disable captions"),a=i(e,"Enable captions");return l`
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
  `}function Be(){let{translations:e}=r(),t=i(e,"Enter Fullscreen"),a=i(e,"Exit Fullscreen");return l`
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
  `}function et(){let{translations:e}=r(),t=i(e,"Mute"),a=i(e,"Unmute");return l`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function tt(){let{translations:e}=r(),t=i(e,"Enter PiP"),a=i(e,"Exit PiP");return l`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function at(){let{translations:e}=r(),t=i(e,"Play"),a=i(e,"Pause");return l`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function lt(){let{translations:e}=r(),{remote:t}=m(),a=i(e,"Restart");function s(p){M(p)&&!U(p)||t.seek(0,p)}return l`
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
  `}function st(){let{translations:e,seekTime:t}=r(),a=n(()=>`${E(e,"Rewind")} ${t()}s`),s=n(()=>-1*t());return l`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${s}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function nt(){let{translations:e,seekTime:t}=r(),a=n(()=>`${E(e,"Forward")} ${t()}s`),s=n(t);return l`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${s}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function rt(){let e=m(),{duration:t,viewType:a}=e.$state,{translations:s,markers:p,thumbnails:d,seekTime:$,previewTime:_}=r(),u=i(s,"Seek"),y=A(null),v=n(()=>{let c=y();return c?l`<span class="plyr__progress__marker-label">${V(c.label)}<br /></span>`:null});function k(c){_.set(c.detail)}function I(){y.set(this)}function S(){y.set(null)}function C(){let c=d(),g=n(()=>a()==="audio");return c?l`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${g}>
            <media-slider-thumbnail .src=${c} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${v}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:l`
          <span class="plyr__tooltip">
            ${v}
            <media-slider-value></media-slider-value>
          </span>
        `}function R(){var g;let c=t();return Number.isFinite(c)?(g=p())==null?void 0:g.map(T=>l`
        <span
          class="plyr__progress__marker"
          @mouseenter=${I.bind(T)}
          @mouseleave=${S}
          style=${`left: ${T.time/c*100}%;`}
        ></span>
      `):null}return l`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${n($)}
          aria-label=${u}
          @media-seeking-request=${k}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${n(C)}${n(R)}
        </media-time-slider>
      </div>
    </div>
  `}function it(e){return n(()=>{let t=e==="mute"||e==="mute+volume",a=e==="volume"||e==="mute+volume";return l`
      <div class="plyr__controls__item plyr__volume">
        ${[t?et():null,a?ot():null]}
      </div>
    `})}function ot(){let{translations:e}=r(),t=i(e,"Volume");return l`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function pt(){let e=m(),{translations:t,invertTime:a,toggleTime:s,displayDuration:p}=r(),d=A(Ie(a));function $(u){!s()||p()||M(u)&&!U(u)||d.set(y=>!y)}function _(){return n(()=>p()?Q():null)}return n(()=>{let{streamType:u}=e.$state,y=i(t,"LIVE"),v=i(t,"Current time"),k=n(()=>!p()&&d());return u()==="live"||u()==="ll-live"?l`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${y}</span>
          </media-live-button>
        `:l`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${v}
            ?remainder=${k}
            @pointerup=${$}
            @keydown=${$}
          ></media-time>
          ${_()}
        `})}function Q(){let{translations:e}=r(),t=i(e,"Duration");return l`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function ct(){return n(()=>{let e=m(),{translations:t,download:a}=r(),{title:s,source:p}=e.$state,d=p(),$=a(),_=Se({title:s(),src:d,download:$}),u=i(t,"Download");return _?l`
          <a
            class="plyr__controls__item plyr__control"
            href=${_.url+`?download=${_.name}`}
            download=${_.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${u}</span>
          </a>
        `:null})}function ut(){return n(()=>{let{clickToPlay:e,clickToFullscreen:t}=r();return[e()?l`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?l`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function dt(){let e=m(),t=A(void 0),a=n(()=>{var s;return V((s=t())==null?void 0:s.text)});return P(()=>{let s=e.$state.textTrack();if(!s)return;function p(){t.set(s==null?void 0:s.activeCues[0])}return p(),Ce(s,"cue-change",p)}),l`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${a}</span>
    </div>
  `}function _t(){let{translations:e}=r(),t=i(e,"Settings");return l`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[yt(),ft(),wt(),bt()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function q({label:e,children:t}){let a=A(!1);return l`
    <media-menu @open=${()=>a.set(!0)} @close=${()=>a.set(!1)}>
      ${mt({label:e,open:a})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function mt({open:e,label:t}){let{translations:a}=r(),s=n(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function p(){let d=i(a,"Go back to previous menu");return n(()=>e()?l`<span class="plyr__sr-only">${d}</span>`:null)}return l`
    <media-menu-button class=${s} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${kt(e)}>
        ${i(a,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${p()}
    </media-menu-button>
  `}function yt(){return q({label:"Audio",children:$t()})}function $t(){let{translations:e}=r();return l`
    <media-audio-radio-group empty-label=${i(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function bt(){return q({label:"Speed",children:vt()})}function vt(){let{translations:e,speed:t}=r();return l`
    <media-speed-radio-group .rates=${t} normal-label=${i(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function ft(){return q({label:"Captions",children:gt()})}function gt(){let{translations:e}=r();return l`
    <media-captions-radio-group off-label=${i(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function wt(){return q({label:"Quality",children:ht()})}function ht(){let{translations:e}=r();return l`
    <media-quality-radio-group auto-label=${i(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function kt(e){return n(()=>e()?"true":"false")}function i(e,t){return n(()=>E(e,t))}var b,D,B,h,Tt=(h=class extends Le(He,Ne){constructor(){super(...arguments);F(this,D);F(this,b)}onSetup(){this.forwardKeepAlive=!1,Z(this,b,m())}onConnect(){var a;(a=x(this,b).player.el)==null||a.setAttribute("data-layout","plyr"),De(()=>{var s;return(s=x(this,b).player.el)==null?void 0:s.removeAttribute("data-layout")}),Oe(this,x(this,b)),P(()=>{this.$props.customIcons()?new Re([this]).connect():new Ye([this]).connect()})}render(){return n(Y(this,D,B).bind(this))}},b=new WeakMap,D=new WeakSet,B=function(){let{viewType:a}=x(this,b).$state;return a()==="audio"?Ke():a()==="video"?Me():null},h.tagName="media-plyr-layout",h);o(Tt);o(ke);o(ee);o(te);o(ae);o(le);o(se);o(ne);o(re);o(ie);o(oe);o(pe);o(ce);o(ue);o(de);o(_e);o(me);o(ye);o($e);o(be);o(ve);o(fe);o(ge);o(we);o(he);
