const __vite__fileDeps=["assets/vidstack-CRlTZX3Z-PBDNdscv.js","assets/vidstack-DQ6dSZwe-BTtv5vWE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var oe=Object.getPrototypeOf;var le=Reflect.get;var Y=(e,t,a)=>le(oe(e),a,t);import{N as C,O as ot,P as re,Q as ue,R as et,S as R,U as w,V as de,W as ce,X as g,Y as pe,Z as x,$ as Mt,a0 as me,a1 as F,a2 as $,a3 as ve,a4 as fe,a5 as lt,a6 as At,a7 as $e,a8 as be,a9 as It,aa as W,ab as rt,ac as ge,ad as Pt,f as he,ae as ye,af as M,ag as xe,ah as Se,ai as Ce,aj as Te,ak as at,al as ke,am as ut,an as we,ao as De,ap as Oe,aq as Me,ar as Ae,as as Gt,at as X,au as Ie,av as Pe,aw as Ge,ax as Be,ay as Bt}from"./app-BxjGQbDW.js";import{x as o,n as Q,l as Fe,L as Ft,i as Le}from"./vidstack-rsZGrNIW-CJxWesQC.js";import{$ as n,L as Ne,I as Ve,S as Lt}from"./vidstack-BWm2s146-D_yvUbvi.js";function J(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}let kt=!1,tt=new Set;function Re(){const{player:e}=C();tt.add(e),ot(()=>tt.delete(e)),kt||(re(()=>{for(const t of ue(et)){const a=et[t],s=de[t],i=`--media-user-${R(t)}`,l=`vds-player:${R(t)}`;w(()=>{var b;const r=a(),m=r===s,p=m?null:We(e,t,r);for(const v of tt)(b=v.el)==null||b.style.setProperty(i,p);m?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),kt=!0)}function We(e,t,a){var s;switch(t){case"fontFamily":const i=a==="capitals"?"small-caps":"";return(s=e.el)==null||s.style.setProperty("--media-user-font-variant",i),Ke(a);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return _e(a);case"textColor":return`rgb(${J(a)} / var(--media-user-text-opacity, 1))`;case"textShadow":return Qe(a);case"textBg":return`rgb(${J(a)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${J(a)} / var(--media-user-display-bg-opacity, 1))`}}function _e(e){return(parseInt(e)/100).toString()}function Ke(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Qe(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}const Nt=ve();function u(){return fe(Nt)}const Ee={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var qe=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,dt=(e,t,a,s)=>{for(var i=s>1?void 0:s?ze(t,a):t,l=e.length-1,r;l>=0;l--)(r=e[l])&&(i=(s?r(t,a,i):r(i))||i);return s&&i&&qe(t,a,i),i};const yt=class yt extends ce{constructor(){super(...arguments),this.cn=g(()=>{const t=this.$props.when();return this.fn(t)}),this.$m=g(()=>{const t=this.$props.smallWhen();return this.fn(t)}),this.menuContainer=null}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=C(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;pe(Nt,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),get menuContainer(){return t.menuContainer}})}onAttach(t){Mt(t,this.$props.colorScheme)}fn(t){return t!=="never"&&(me(t)?t:g(()=>t(this.a.player.state))())}};yt.props=Ee;let I=yt;dt([lt],I.prototype,"menuContainer",2);dt([lt],I.prototype,"isMatch",1);dt([lt],I.prototype,"isSmallLayout",1);function Vt(e,t){w(()=>{const{player:a}=C(),s=a.el;return s&&F(s,"data-layout",t()&&e),()=>s==null?void 0:s.removeAttribute("data-layout")})}function S(e,t){var a;return((a=e())==null?void 0:a[t])??t}function ct(){return n(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?o`<media-announcer .translations=${n(e)}></media-announcer>`:null})}function T(e,t=""){return o`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function N(e){return e.map(t=>T(t))}function d(e,t){return n(()=>S(e,t))}function pt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:a}=$(),s=n(()=>{const l=S(t,"AirPlay"),r=At(a());return`${l} ${r}`}),i=d(t,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${s}>
          ${T("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Rt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:a}=$(),s=n(()=>{const l=S(t,"Google Cast"),r=At(a());return`${l} ${r}`}),i=d(t,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${s}>
          ${T("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function E({tooltip:e}){const{translations:t}=u(),a=d(t,"Play"),s=d(t,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${N(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${a}</span>
        <span class="vds-pause-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function wt({tooltip:e,ref:t=ye}){const{translations:a}=u(),s=d(a,"Mute"),i=d(a,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(a,"Mute")}
          ${Q(t)}
        >
          ${N(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function mt({tooltip:e}){const{translations:t}=u(),a=d(t,"Closed-Captions On"),s=d(t,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${N(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${s}</span>
        <span class="vds-cc-off-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function He(){const{translations:e}=u(),t=d(e,"Enter PiP"),a=d(e,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${N(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Wt({tooltip:e}){const{translations:t}=u(),a=d(t,"Enter Fullscreen"),s=d(t,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${N(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${a}</span>
        <span class="vds-fs-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Dt({backward:e,tooltip:t}){const{translations:a,seekStep:s}=u(),i=e?"Seek Backward":"Seek Forward",l=d(a,i);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${n(()=>(e?-1:1)*s())}
          aria-label=${l}
        >
          ${T(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(a,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function _t(){const{translations:e}=u(),{live:t}=$(),a=d(e,"Skip To Live"),s=d(e,"LIVE");return t()?o`
        <media-live-button class="vds-live-button" aria-label=${a}>
          <span class="vds-live-button-text">${s}</span>
        </media-live-button>
      `:null}function vt(){return n(()=>{const{download:e,translations:t}=u(),a=e();if($e(a))return null;const{source:s,title:i}=$(),l=s(),r=be({title:i(),src:l,download:a});return r?o`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(t,"Download")}
                href=${r.url+`?download=${r.name}`}
                download=${r.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function ft(){const{translations:e}=u();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function D(){return o`<div class="vds-controls-spacer"></div>`}function Kt(e,t){return o`
    <media-menu-portal .container=${e} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Qt(e,t){let a=document.querySelector(`body > .${e}`);a||(a=document.createElement("div"),a.style.display="contents",a.classList.add(e),document.body.append(a));const{viewType:s}=$(),{colorScheme:i}=u();return w(()=>{if(!a)return;const l=t();F(a,"data-view-type",s()),F(a,"data-sm",l),F(a,"data-lg",!l),F(a,"data-size",l?"sm":"lg")}),Mt(a,i),a}function Et({placement:e,tooltip:t,portal:a}){const{textTracks:s}=C(),{viewType:i,clipStartTime:l,clipEndTime:r}=$(),{translations:m,thumbnails:p,menuContainer:b,noModal:v,menuGroup:c,smallWhen:f}=u();if(g(()=>{var Ct;const ne=l(),ie=r()||1/0,St=x(null);It(s,"chapters",St.set);const j=(Ct=St())==null?void 0:Ct.cues.filter(Tt=>Tt.startTime<=ie&&Tt.endTime>=ne);return!(j!=null&&j.length)})())return null;const y=g(()=>v()?W(e):f()?null:W(e)),G=g(()=>!f()&&c()==="bottom"&&i()==="video"?26:0),B=x(!1);function ae(){B.set(!0)}function se(){B.set(!1)}const xt=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${n(y)}
      offset=${n(G)}
    >
      ${n(()=>B()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${n(p)}
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
    <media-menu class="vds-chapters-menu vds-menu" @open=${ae} @close=${se}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(m,"Chapters")}
          >
            ${T("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${rt(t)?n(t):t}
        >
          ${d(m,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${a?Kt(b,xt):xt}
    </media-menu>
  `}let Ue=0;function k({label:e="",value:t="",children:a}){if(!e)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${a}</div>
      </div>
    `;const s=`vds-menu-section-${++Ue}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${s}>
      <div class="vds-menu-section-title">
        <header id=${s}>${e}</header>
        ${t?o`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${a}</div>
    </section>
  `}function V({label:e,children:t}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function P({label:e,icon:t,hint:a}){return o`
    <media-menu-button class="vds-menu-item">
      ${T("menu-arrow-left","vds-menu-close-icon")}
      ${t?T(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${n(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${a?n(a):null} </span>
      ${T("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function Ze({value:e=null,options:t,hideLabel:a=!1,children:s=null,onChange:i=null}){function l(r){const{value:m,label:p}=r;return o`
      <media-radio class="vds-radio" value=${m}>
        ${T("menu-radio-check")}
        ${a?null:o`
              <span class="vds-radio-label" data-part="label">
                ${at(p)?p:n(p)}
              </span>
            `}
        ${rt(s)?s(r):s}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${at(e)?e:e?n(e):""}
      @change=${i}
    >
      ${M(t)?t.map(l):n(()=>t().map(l))}
    </media-radio-group>
  `}function je(e){return M(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function q(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function z(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function H({label:e=null,value:t=null,upIcon:a="",downIcon:s="",children:i,isMin:l,isMax:r}){const m=e||t,p=[s?T(s,"down"):null,i,a?T(a,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${m?" group":""}`}
      data-min=${n(()=>l()?"":null)}
      data-max=${n(()=>r()?"":null)}
    >
      ${m?o`
            <div class="vds-menu-slider-title">
              ${[e?o`<div>${e}</div>`:null,t?o`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${p}</div>
          `:p}
    </div>
  `}const Ye={...Oe,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},$t={...Me,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function Xe(){return n(()=>{const{hasCaptions:e}=$(),{translations:t}=u();return e()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${P({label:()=>S(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[k({label:d(t,"Font"),children:[Je(),ta()]}),k({label:d(t,"Text"),children:[ea(),sa(),aa()]}),k({label:d(t,"Text Background"),children:[na(),ia()]}),k({label:d(t,"Display Background"),children:[oa(),la()]}),k({children:[ra()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Je(){return O({label:"Family",option:ke,type:"fontFamily"})}function ta(){return O({label:"Size",option:Ye,type:"fontSize"})}function ea(){return O({label:"Color",option:ut,type:"textColor"})}function aa(){return O({label:"Opacity",option:$t,type:"textOpacity"})}function sa(){return O({label:"Shadow",option:we,type:"textShadow"})}function na(){return O({label:"Color",option:ut,type:"textBg"})}function ia(){return O({label:"Opacity",option:$t,type:"textBgOpacity"})}function oa(){return O({label:"Color",option:ut,type:"displayBg"})}function la(){return O({label:"Opacity",option:$t,type:"displayBgOpacity"})}function ra(){const{translations:e}=u();return o`
    <button class="vds-menu-item" role="menuitem" @click=${Se}>
      <span class="vds-menu-item-label">${n(()=>S(e,"Reset"))}</span>
    </button>
  `}function O({label:e,option:t,type:a}){const{player:s}=C(),{translations:i}=u(),l=et[a],r=()=>S(i,e);function m(){Ae(),s.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let v=function(c){l.set(c.target.value),m()};return V({label:n(r),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${n(l)}
          @input=${v}
        />
      `})}if(t.type==="slider"){let v=function(B){l.set(B.detail+"%"),m()};const{min:c,max:f,step:h,upIcon:y,downIcon:G}=t;return H({label:n(r),value:n(l),upIcon:y,downIcon:G,isMin:()=>l()===c+"%",isMax:()=>l()===f+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${c}
          max=${f}
          step=${h}
          key-step=${h}
          .value=${n(()=>parseInt(l()))}
          aria-label=${n(r)}
          @value-change=${v}
          @drag-value-change=${v}
        >
          ${q()}${z()}
        </media-slider>
      `})}const p=je(t.values),b=()=>{var f;const v=l(),c=((f=p.find(h=>h.value===v))==null?void 0:f.label)||"";return S(i,at(c)?c:c())};return o`
    <media-menu class=${`vds-${R(a)}-menu vds-menu`}>
      ${P({label:r,hint:b})}
      <media-menu-items class="vds-menu-items">
        ${Ze({value:l,options:p,onChange({detail:v}){l.set(v),m()}})}
      </media-menu-items>
    </media-menu>
  `}function U({label:e,checked:t,defaultChecked:a=!1,storageKey:s,onChange:i}){const{translations:l}=u(),r=s?localStorage.getItem(s):null,m=x(!!(r??a)),p=x(!1),b=n(Ce(m)),v=d(l,e);s&&i(Te(m)),t&&w(()=>void m.set(t()));function c(y){(y==null?void 0:y.button)!==1&&(m.set(G=>!G),s&&localStorage.setItem(s,m()?"1":""),i(m(),y),p.set(!1))}function f(y){De(y)&&c()}function h(y){y.button===0&&p.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${b}
      data-active=${n(()=>p()?"":null)}
      @pointerup=${c}
      @pointerdown=${h}
      @keydown=${f}
    ></div>
  `}function ua(){return n(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${P({label:()=>S(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[k({children:[da(),ca()]}),k({children:[Xe()]})]}
        </media-menu-items>
      </media-menu>
    `})}function da(){const{userPrefersAnnouncements:e,translations:t}=u(),a="Announcements";return V({label:d(t,a),children:U({label:a,storageKey:"vds-player::announcements",onChange(s){e.set(s)}})})}function ca(){return n(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:a}=u(),{viewType:s}=$();if(g(()=>s()!=="video"||a())())return null;const l="Keyboard Animations";return V({label:d(e,l),children:U({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function pa(){return n(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:a,canSetAudioGain:s}=$();return g(()=>!(s()&&!e())&&a().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${P({label:()=>S(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[ma(),va()]}
        </media-menu-items>
      </media-menu>
    `})}function ma(){return n(()=>{const{translations:e}=u(),{audioTracks:t}=$(),a=d(e,"Default");return g(()=>t().length<=1)()?null:k({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${P({label:()=>S(e,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${a}
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
      `})})}function va(){return n(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:a}=$();if(g(()=>!a()||e())())return null;const{audioGain:i}=$();return k({label:d(t,"Boost"),value:n(()=>Math.round(((i()??1)-1)*100)+"%"),children:[H({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:fa(),isMin:()=>((i()??1)-1)*100<=qt(),isMax:()=>((i()??1)-1)*100===zt()})]})})}function fa(){const{translations:e}=u(),t=d(e,"Boost"),a=qt,s=zt,i=$a;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${n(a)}
      max=${n(s)}
      step=${n(i)}
      key-step=${n(i)}
    >
      ${q()}${z()}
    </media-audio-gain-slider>
  `}function qt(){const{audioGains:e}=u(),t=e();return M(t)?t[0]??0:t.min}function zt(){const{audioGains:e}=u(),t=e();return M(t)?t[t.length-1]??300:t.max}function $a(){const{audioGains:e}=u(),t=e();return M(t)?t[1]-t[0]||25:t.step}function ba(){return n(()=>{const{translations:e}=u(),{hasCaptions:t}=$(),a=d(e,"Off");return t()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${P({label:()=>S(e,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${a}
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
    `:null})}function ga(){return n(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${P({label:()=>S(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[k({children:ha()}),ya(),Ta()]}
        </media-menu-items>
      </media-menu>
    `})}function ha(){const{remote:e}=C(),{translations:t}=u(),a="Loop";return V({label:d(t,a),children:U({label:a,storageKey:"vds-player::user-loop",onChange(s,i){e.userPrefersLoopChange(s,i)}})})}function ya(){return n(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:a}=$();return t()?k({label:d(e,"Speed"),value:n(()=>a()===1?S(e,"Normal"):a()+"x"),children:[H({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Sa(),isMin:()=>a()===Ht(),isMax:()=>a()===Ut()})]}):null})}function Ht(){const{playbackRates:e}=u(),t=e();return M(t)?t[0]??0:t.min}function Ut(){const{playbackRates:e}=u(),t=e();return M(t)?t[t.length-1]??2:t.max}function xa(){const{playbackRates:e}=u(),t=e();return M(t)?t[1]-t[0]||.25:t.step}function Sa(){const{translations:e}=u(),t=d(e,"Speed"),a=Ht,s=Ut,i=xa;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${n(a)}
      max=${n(s)}
      step=${n(i)}
      key-step=${n(i)}
    >
      ${q()}${z()}
    </media-speed-slider>
  `}function Ca(){const{remote:e,qualities:t}=C(),{autoQuality:a,canSetQuality:s,qualities:i}=$(),{translations:l}=u(),r="Auto";return g(()=>!s()||i().length<=1)()?null:V({label:d(l,r),children:U({label:r,checked:a,onChange(p,b){p?e.requestAutoQuality(b):e.changeQuality(t.selectedIndex,b)}})})}function Ta(){return n(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:a,qualities:s,quality:i}=$(),l=g(()=>!a()||s().length<=1),r=g(()=>xe(s()));return l()?null:k({label:d(t,"Quality"),value:n(()=>{var c,f;const m=(c=i())==null?void 0:c.height,p=e()?null:(f=i())==null?void 0:f.bitrate,b=p&&p>0?`${(p/1e6).toFixed(2)} Mbps`:null,v=S(t,"Auto");return m?`${m}p${b?` (${b})`:""}`:v}),children:[H({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:ka(),isMin:()=>r()[0]===i(),isMax:()=>r().at(-1)===i()}),Ca()]})})}function ka(){const{translations:e}=u(),t=d(e,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${q()}${z()}
    </media-quality-slider>
  `}function Zt({placement:e,portal:t,tooltip:a}){return n(()=>{const{viewType:s}=$(),{translations:i,menuContainer:l,noModal:r,menuGroup:m,smallWhen:p}=u(),b=g(()=>r()?W(e):p()?null:W(e)),v=g(()=>!p()&&m()==="bottom"&&s()==="video"?26:0),c=x(!1);Re();function f(){c.set(!0)}function h(){c.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${n(b)}
        offset=${n(v)}
      >
        ${n(()=>c()?[ga(),ua(),pa(),ba()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${f} @close=${h}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(i,"Settings")}
            >
              ${T("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${rt(a)?n(a):a}
          >
            ${d(i,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?Kt(l,y):y}
      </media-menu>
    `})}function bt({orientation:e,tooltip:t}){return n(()=>{const{pointer:a,muted:s,canSetVolume:i}=$();if(a()==="coarse"&&!s())return null;if(!i())return wt({tooltip:t});const l=x(void 0),r=ge(l);return o`
      <div class="vds-volume" ?data-active=${n(r)} ${Q(l.set)}>
        ${wt({tooltip:t})}
        <div class="vds-volume-popup">${wa({orientation:e})}</div>
      </div>
    `})}function wa({orientation:e}={}){const{translations:t}=u(),a=d(t,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${a}
      orientation=${Fe(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function gt(){const e=x(void 0),t=x(0),{thumbnails:a,translations:s,sliderChaptersMinWidth:i,disableTimeSlider:l,seekStep:r,noScrubGesture:m}=u(),p=d(s,"Seek"),b=n(l),v=n(()=>t()<i()),c=n(a);return Pt(e,()=>{const f=e();f&&t.set(f.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${p}
      key-step=${n(r)}
      ?disabled=${b}
      ?no-swipe-gesture=${n(m)}
      ${Q(e.set)}
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
          .src=${c}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Da(){return o`
    <div class="vds-time-group">
      ${n(()=>{const{duration:e}=$();return e()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Oa(){return n(()=>{const{live:e,duration:t}=$();return e()?_t():t()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function jt(){return n(()=>{const{live:e}=$();return e()?_t():Da()})}function Yt(){return n(()=>{const{textTracks:e}=C(),{title:t,started:a}=$(),s=x(null);return It(e,"chapters",s.set),s()&&(a()||!t())?Xt():o`<media-title class="vds-chapter-title"></media-title>`})}function Xt(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Jt extends Ne{async Pf(){const t=(await he(()=>import("./vidstack-CRlTZX3Z-PBDNdscv.js"),__vite__mapDeps([0,1]))).icons,a={};for(const s of Object.keys(t))a[s]=Ve({name:s,paths:t[s]});return a}}var A;let Ma=(A=class extends I{},A.props={...Y(A,A,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},A);function Aa(){return[ct(),ft(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Dt({backward:!0,tooltip:"top start"}),E({tooltip:"top"}),Dt({tooltip:"top"}),Ia(),gt(),Oa(),bt({orientation:"vertical",tooltip:"top"}),mt({tooltip:"top"}),vt(),pt({tooltip:"top"}),Pa()]}
        </media-controls-group>
      </media-controls>
    `]}function Ia(){return n(()=>{let e=x(void 0),t=x(!1),a=C(),{title:s,started:i,currentTime:l,ended:r}=$(),{translations:m}=u(),p=Pe(e),b=()=>i()||l()>0;const v=()=>{const h=r()?"Replay":b()?"Continue":"Play";return`${S(m,h)}: ${s()}`};w(()=>{var h;p()&&document.activeElement===document.body&&((h=a.player.el)==null||h.focus())});function c(){const h=e(),y=!!h&&!p()&&h.clientWidth<h.children[0].clientWidth;h&&Ge(h,"vds-marquee",y),t.set(y)}function f(){return o`
        <span class="vds-title-text">
          ${n(v)}${n(()=>b()?Xt():null)}
        </span>
      `}return Pt(e,c),s()?o`
          <span class="vds-title" title=${n(v)} ${Q(e.set)}>
            ${[f(),n(()=>t()&&!p()?f():null)]}
          </span>
        `:D()})}function Pa(){const e="top end";return[Et({tooltip:"top",placement:e,portal:!0}),Zt({tooltip:"top end",placement:e,portal:!0})]}const _=class _ extends Gt(Ft,Ma){constructor(){super(...arguments),this.en=x(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=C(),this.classList.add("vds-audio-layout"),this.menuContainer=Qt("vds-audio-layout",()=>this.isSmallLayout);const{pointer:t}=this.a.$state;w(()=>{t()==="coarse"&&w(this.rn.bind(this))}),ot(()=>{var a;return(a=this.menuContainer)==null?void 0:a.remove()})}onConnect(){Vt("audio",()=>this.isMatch),w(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new Lt(t).connect():new Jt(t).connect()})}render(){return n(this.Zm.bind(this))}Zm(){return this.isMatch?Aa():null}rn(){if(!this.en()){X(this,"pointerdown",this.sn.bind(this),{capture:!0});return}X(this,"pointerdown",t=>t.stopPropagation()),X(window,"pointerdown",this.tn.bind(this))}sn(t){const{target:a}=t;Ie(a)&&a.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}};_.tagName="media-audio-layout",_.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let st=_;const L=class L extends I{};L.props={...Y(L,L,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:a})=>t<576||a<380};let nt=L;function te(){return n(()=>{const e=C(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:a}=u();if(g(()=>t()||!a())())return null;const i=x(!1),{lastKeyboardAction:l}=e.$state;w(()=>{i.set(!!l());const c=setTimeout(()=>i.set(!1),500);return()=>{i.set(!1),window.clearTimeout(c)}});const r=g(()=>{var f;const c=(f=l())==null?void 0:f.action;return c&&i()?R(c):null}),m=g(()=>`vds-kb-action${i()?"":" hidden"}`),p=g(Ga),b=g(()=>{const c=Ba();return c?Be(c):null});function v(){const c=b();return c?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${c}</div>
        </div>
      `:null}return o`
      <div class=${n(m)} data-action=${n(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${n(p)}</div>
        </div>
        ${n(()=>Le(l(),v()))}
      </div>
    `})}function Ga(){var s;const{$state:e}=C(),t=(s=e.lastKeyboardAction())==null?void 0:s.action,a=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":Ot(e.volume(),a);case"volumeUp":case"volumeDown":return Ot(e.volume(),a);default:return""}}function Ot(e,t){return`${Math.round(e*t*100)}%`}function Ba(){var a;const{$state:e}=C();switch((a=e.lastKeyboardAction())==null?void 0:a.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Fa(){return[ct(),ee(),Z(),te(),ft(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[Na(),D(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,D(),o`
            <media-controls-group class="vds-controls-group">
              ${gt()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[E({tooltip:"top start"}),bt({orientation:"horizontal",tooltip:"top"}),jt(),Yt(),mt({tooltip:"top"}),La(),pt({tooltip:"top"}),Rt({tooltip:"top"}),vt(),He(),Wt({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function La(){return n(()=>{const{menuGroup:e}=u();return e()==="bottom"?ht():null})}function Na(){return o`
    <media-controls-group class="vds-controls-group">
      ${n(()=>{const{menuGroup:e}=u();return e()==="top"?[D(),ht()]:null})}
    </media-controls-group>
  `}function Va(){return[ct(),ee(),Z(),ft(),te(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[pt({tooltip:"top start"}),Rt({tooltip:"bottom start"}),D(),mt({tooltip:"bottom"}),vt(),ht(),bt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[D(),E({tooltip:"top"}),D()]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group">
          ${[jt(),Yt(),Wt({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${gt()}
        </media-controls-group>
      </media-controls>
    `,Wa()]}function Ra(){return o`
    <div class="vds-load-container">
      ${[Z(),E({tooltip:"top"})]}
    </div>
  `}function Wa(){return n(()=>{const{duration:e}=$();return e()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function Z(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function ht(){const{menuGroup:e,smallWhen:t}=u(),a=()=>e()==="top"||t()?"bottom":"top",s=g(()=>`${a()} ${e()==="top"?"end":"center"}`),i=g(()=>`${a()} end`);return[Et({tooltip:s,placement:i,portal:!0}),Zt({tooltip:s,placement:i,portal:!0})]}function ee(){return n(()=>{const{noGestures:e}=u();return e()?null:o`
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
    `})}const K=class K extends Gt(Ft,nt){onSetup(){this.forwardKeepAlive=!1,this.a=C(),this.classList.add("vds-video-layout"),this.menuContainer=Qt("vds-video-layout",()=>this.isSmallLayout),ot(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){Vt("video",()=>this.isMatch),w(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new Lt(t).connect():new Jt(t).connect()})}render(){return n(this.Zm.bind(this))}Zm(){const{load:t}=this.a.$props,{canLoad:a,streamType:s,nativeControls:i}=this.a.$state;return!i()&&this.isMatch?t()==="play"&&!a()?Ra():s()==="unknown"?Z():this.isSmallLayout?Va():Fa():null}};K.tagName="media-video-layout",K.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let it=K;Bt(st);Bt(it);
