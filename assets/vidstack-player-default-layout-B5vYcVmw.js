const __vite__fileDeps=["assets/vidstack-CRlTZX3Z-PBDNdscv.js","assets/vidstack-DQ6dSZwe-BTtv5vWE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ie=Object.getPrototypeOf;var oe=Reflect.get;var X=(e,t,a)=>oe(ie(e),a,t);import{N as k,O as le,P as re,Q as ue,R as at,S as R,U as C,V as de,W as ce,X as pe,Y as g,Z as me,$ as x,a0 as Ct,a1 as ve,a2 as B,a3 as fe,a4 as Dt,a5 as $,a6 as Mt,a7 as $e,a8 as be,a9 as W,aa as Pt,ab as _,ac as ot,ad as ge,ae as Ot,f as he,af as ye,ag as O,ah as xe,ai as Se,aj as ke,ak as Te,al as we,am as lt,an as Ce,ao as De,ap as Me,aq as Pe,ar as Oe,as as At,at as J,au as Ae,av as Ie,aw as Ge,ax as Fe,ay as It}from"./app-BVYIHN7e.js";import{x as o,n as Q,l as Be,L as Gt,i as Ne}from"./vidstack-rsZGrNIW-CJxWesQC.js";import{$ as i,L as Le,I as Ve,S as Ft}from"./vidstack-BWm2s146-DWEvJ06k.js";function tt(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}let St=!1,et=new Set;function Re(){const{player:e}=k();et.add(e),le(()=>et.delete(e)),St||(re(()=>{for(const t of ue(at)){const a=at[t],s=de[t],n=`--media-user-${R(t)}`,l=`vds-player:${R(t)}`;C(()=>{var b;const r=a(),c=r===s,m=c?null:We(e,t,r);for(const v of et)(b=v.el)==null||b.style.setProperty(n,m);c?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),St=!0)}function We(e,t,a){var s;switch(t){case"fontFamily":const n=a==="capitals"?"small-caps":"";return(s=e.el)==null||s.style.setProperty("--media-user-font-variant",n),Ee(a);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return _e(a);case"textColor":return`rgb(${tt(a)} / var(--media-user-text-opacity, 1))`;case"textShadow":return Ke(a);case"textBg":return`rgb(${tt(a)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${tt(a)} / var(--media-user-display-bg-opacity, 1))`}}function _e(e){return(parseInt(e)/100).toString()}function Ee(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Ke(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}const Bt=fe();function u(){return ce(Bt)}const Qe={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var qe=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,Nt=(e,t,a,s)=>{for(var n=ze(t,a),l=e.length-1,r;l>=0;l--)(r=e[l])&&(n=r(t,a,n)||n);return n&&qe(t,a,n),n};const bt=class bt extends pe{constructor(){super(...arguments),this.cn=g(()=>{const t=this.$props.when();return this.fn(t)}),this.$m=g(()=>{const t=this.$props.smallWhen();return this.fn(t)})}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=k(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),me(Bt,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),menuPortal:x(null)})}onAttach(t){Ct(t,this.$props.colorScheme)}fn(t){return t!=="never"&&(ve(t)?t:g(()=>t(this.a.player.state))())}};bt.props=Qe;let I=bt;Nt([Dt],I.prototype,"isMatch");Nt([Dt],I.prototype,"isSmallLayout");function Lt(e,t){C(()=>{const{player:a}=k(),s=a.el;return s&&B(s,"data-layout",t()&&e),()=>s==null?void 0:s.removeAttribute("data-layout")})}function S(e,t){var a;return((a=e())==null?void 0:a[t])??t}function rt(){return i(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?o`<media-announcer .translations=${i(e)}></media-announcer>`:null})}function T(e,t=""){return o`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function L(e){return e.map(t=>T(t))}function d(e,t){return i(()=>S(e,t))}function ut({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:a}=$(),s=i(()=>{const l=S(t,"AirPlay"),r=Mt(a());return`${l} ${r}`}),n=d(t,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${s}>
          ${T("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Vt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:a}=$(),s=i(()=>{const l=S(t,"Google Cast"),r=Mt(a());return`${l} ${r}`}),n=d(t,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${s}>
          ${T("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function q({tooltip:e}){const{translations:t}=u(),a=d(t,"Play"),s=d(t,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${L(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${a}</span>
        <span class="vds-pause-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function kt({tooltip:e,ref:t=ye}){const{translations:a}=u(),s=d(a,"Mute"),n=d(a,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(a,"Mute")}
          ${Q(t)}
        >
          ${L(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${n}</span>
        <span class="vds-unmute-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function dt({tooltip:e}){const{translations:t}=u(),a=d(t,"Closed-Captions On"),s=d(t,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${L(["cc-on","cc-off"])}
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
          ${L(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Rt({tooltip:e}){const{translations:t}=u(),a=d(t,"Enter Fullscreen"),s=d(t,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${L(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${a}</span>
        <span class="vds-fs-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Tt({backward:e,tooltip:t}){const{translations:a,seekStep:s}=u(),n=e?"Seek Backward":"Seek Forward",l=d(a,n);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${i(()=>(e?-1:1)*s())}
          aria-label=${l}
        >
          ${T(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(a,n)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Wt(){const{translations:e}=u(),{live:t}=$(),a=d(e,"Skip To Live"),s=d(e,"LIVE");return t()?o`
        <media-live-button class="vds-live-button" aria-label=${a}>
          <span class="vds-live-button-text">${s}</span>
        </media-live-button>
      `:null}function ct(){return i(()=>{const{download:e,translations:t}=u(),a=e();if($e(a))return null;const{source:s,title:n}=$(),l=s(),r=be({title:n(),src:l,download:a});return r?o`
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
        `:null})}function pt(){const{translations:e}=u();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function D(){return o`<div class="vds-controls-spacer"></div>`}function _t(e,t){return o`
    <media-menu-portal .container=${i(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Et(e,t,a){let s=W(e)?document.querySelector(e):e;s||(s=document.body);const n=document.createElement("div");n.style.display="contents",n.classList.add(t),s.append(n),C(()=>{if(!n)return;const{viewType:r}=$(),c=a();B(n,"data-view-type",r()),B(n,"data-sm",c),B(n,"data-lg",!c),B(n,"data-size",c?"sm":"lg")});const{colorScheme:l}=u();return Ct(n,l),n}function Kt({placement:e,tooltip:t,portal:a}){const{textTracks:s}=k(),{viewType:n,clipStartTime:l,clipEndTime:r}=$(),{translations:c,thumbnails:m,menuPortal:b,noModal:v,menuGroup:p,smallWhen:f}=u();if(g(()=>{var yt;const se=l(),ne=r()||1/0,ht=x(null);Pt(s,"chapters",ht.set);const Y=(yt=ht())==null?void 0:yt.cues.filter(xt=>xt.startTime<=ne&&xt.endTime>=se);return!(Y!=null&&Y.length)})())return null;const y=g(()=>v()?_(e):f()?null:_(e)),G=g(()=>!f()&&p()==="bottom"&&n()==="video"?26:0),F=x(!1);function ee(){F.set(!0)}function ae(){F.set(!1)}const gt=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(y)}
      offset=${i(G)}
    >
      ${i(()=>F()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${i(m)}
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
    <media-menu class="vds-chapters-menu vds-menu" @open=${ee} @close=${ae}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(c,"Chapters")}
          >
            ${T("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ot(t)?i(t):t}
        >
          ${d(c,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${a?_t(b,gt):gt}
    </media-menu>
  `}let Ue=0;function w({label:e="",value:t="",children:a}){if(!e)return o`
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
  `}function A({label:e,icon:t,hint:a}){return o`
    <media-menu-button class="vds-menu-item">
      ${T("menu-arrow-left","vds-menu-close-icon")}
      ${t?T(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${i(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${a?i(a):null} </span>
      ${T("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function Ze({value:e=null,options:t,hideLabel:a=!1,children:s=null,onChange:n=null}){function l(r){const{value:c,label:m}=r;return o`
      <media-radio class="vds-radio" value=${c}>
        ${T("menu-radio-check")}
        ${a?null:o`
              <span class="vds-radio-label" data-part="label">
                ${W(m)?m:i(m)}
              </span>
            `}
        ${ot(s)?s(r):s}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${W(e)?e:e?i(e):""}
      @change=${n}
    >
      ${O(t)?t.map(l):i(()=>t().map(l))}
    </media-radio-group>
  `}function je(e){return O(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function z(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function H(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function U({label:e=null,value:t=null,upIcon:a="",downIcon:s="",children:n,isMin:l,isMax:r}){const c=e||t,m=[s?T(s,"down"):null,n,a?T(a,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${c?" group":""}`}
      data-min=${i(()=>l()?"":null)}
      data-max=${i(()=>r()?"":null)}
    >
      ${c?o`
            <div class="vds-menu-slider-title">
              ${[e?o`<div>${e}</div>`:null,t?o`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${m}</div>
          `:m}
    </div>
  `}const Ye={...Me,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},mt={...Pe,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function Xe(){return i(()=>{const{hasCaptions:e}=$(),{translations:t}=u();return e()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${A({label:()=>S(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[w({label:d(t,"Font"),children:[Je(),ta()]}),w({label:d(t,"Text"),children:[ea(),sa(),aa()]}),w({label:d(t,"Text Background"),children:[na(),ia()]}),w({label:d(t,"Display Background"),children:[oa(),la()]}),w({children:[ra()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Je(){return M({label:"Family",option:we,type:"fontFamily"})}function ta(){return M({label:"Size",option:Ye,type:"fontSize"})}function ea(){return M({label:"Color",option:lt,type:"textColor"})}function aa(){return M({label:"Opacity",option:mt,type:"textOpacity"})}function sa(){return M({label:"Shadow",option:Ce,type:"textShadow"})}function na(){return M({label:"Color",option:lt,type:"textBg"})}function ia(){return M({label:"Opacity",option:mt,type:"textBgOpacity"})}function oa(){return M({label:"Color",option:lt,type:"displayBg"})}function la(){return M({label:"Opacity",option:mt,type:"displayBgOpacity"})}function ra(){const{translations:e}=u();return o`
    <button class="vds-menu-item" role="menuitem" @click=${Se}>
      <span class="vds-menu-item-label">${i(()=>S(e,"Reset"))}</span>
    </button>
  `}function M({label:e,option:t,type:a}){const{player:s}=k(),{translations:n}=u(),l=at[a],r=()=>S(n,e);function c(){Oe(),s.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let v=function(p){l.set(p.target.value),c()};return V({label:i(r),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${i(l)}
          @input=${v}
        />
      `})}if(t.type==="slider"){let v=function(F){l.set(F.detail+"%"),c()};const{min:p,max:f,step:h,upIcon:y,downIcon:G}=t;return U({label:i(r),value:i(l),upIcon:y,downIcon:G,isMin:()=>l()===p+"%",isMax:()=>l()===f+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${p}
          max=${f}
          step=${h}
          key-step=${h}
          .value=${i(()=>parseInt(l()))}
          aria-label=${i(r)}
          @value-change=${v}
          @drag-value-change=${v}
        >
          ${z()}${H()}
        </media-slider>
      `})}const m=je(t.values),b=()=>{var f;const v=l(),p=((f=m.find(h=>h.value===v))==null?void 0:f.label)||"";return S(n,W(p)?p:p())};return o`
    <media-menu class=${`vds-${R(a)}-menu vds-menu`}>
      ${A({label:r,hint:b})}
      <media-menu-items class="vds-menu-items">
        ${Ze({value:l,options:m,onChange({detail:v}){l.set(v),c()}})}
      </media-menu-items>
    </media-menu>
  `}function Z({label:e,checked:t,defaultChecked:a=!1,storageKey:s,onChange:n}){const{translations:l}=u(),r=s?localStorage.getItem(s):null,c=x(!!(r??a)),m=x(!1),b=i(ke(c)),v=d(l,e);s&&n(Te(c)),t&&C(()=>void c.set(t()));function p(y){(y==null?void 0:y.button)!==1&&(c.set(G=>!G),s&&localStorage.setItem(s,c()?"1":""),n(c(),y),m.set(!1))}function f(y){De(y)&&p()}function h(y){y.button===0&&m.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${b}
      data-active=${i(()=>m()?"":null)}
      @pointerup=${p}
      @pointerdown=${h}
      @keydown=${f}
    ></div>
  `}function ua(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${A({label:()=>S(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[w({children:[da(),ca()]}),w({children:[Xe()]})]}
        </media-menu-items>
      </media-menu>
    `})}function da(){const{userPrefersAnnouncements:e,translations:t}=u(),a="Announcements";return V({label:d(t,a),children:Z({label:a,storageKey:"vds-player::announcements",onChange(s){e.set(s)}})})}function ca(){return i(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:a}=u(),{viewType:s}=$();if(g(()=>s()!=="video"||a())())return null;const l="Keyboard Animations";return V({label:d(e,l),children:Z({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function pa(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:a,canSetAudioGain:s}=$();return g(()=>!(s()&&!e())&&a().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${A({label:()=>S(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[ma(),va()]}
        </media-menu-items>
      </media-menu>
    `})}function ma(){return i(()=>{const{translations:e}=u(),{audioTracks:t}=$(),a=d(e,"Default");return g(()=>t().length<=1)()?null:w({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${A({label:()=>S(e,"Track")})}
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
      `})})}function va(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:a}=$();if(g(()=>!a()||e())())return null;const{audioGain:n}=$();return w({label:d(t,"Boost"),value:i(()=>Math.round(((n()??1)-1)*100)+"%"),children:[U({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:fa(),isMin:()=>((n()??1)-1)*100<=Qt(),isMax:()=>((n()??1)-1)*100===qt()})]})})}function fa(){const{translations:e}=u(),t=d(e,"Boost"),a=Qt,s=qt,n=$a;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${i(a)}
      max=${i(s)}
      step=${i(n)}
      key-step=${i(n)}
    >
      ${z()}${H()}
    </media-audio-gain-slider>
  `}function Qt(){const{audioGains:e}=u(),t=e();return O(t)?t[0]??0:t.min}function qt(){const{audioGains:e}=u(),t=e();return O(t)?t[t.length-1]??300:t.max}function $a(){const{audioGains:e}=u(),t=e();return O(t)?t[1]-t[0]||25:t.step}function ba(){return i(()=>{const{translations:e}=u(),{hasCaptions:t}=$(),a=d(e,"Off");return t()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${A({label:()=>S(e,"Captions"),icon:"menu-captions"})}
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
    `:null})}function ga(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${A({label:()=>S(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[w({children:ha()}),ya(),Ta()]}
        </media-menu-items>
      </media-menu>
    `})}function ha(){const{remote:e}=k(),{translations:t}=u(),a="Loop";return V({label:d(t,a),children:Z({label:a,storageKey:"vds-player::user-loop",onChange(s,n){e.userPrefersLoopChange(s,n)}})})}function ya(){return i(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:a}=$();return t()?w({label:d(e,"Speed"),value:i(()=>a()===1?S(e,"Normal"):a()+"x"),children:[U({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Sa(),isMin:()=>a()===zt(),isMax:()=>a()===Ht()})]}):null})}function zt(){const{playbackRates:e}=u(),t=e();return O(t)?t[0]??0:t.min}function Ht(){const{playbackRates:e}=u(),t=e();return O(t)?t[t.length-1]??2:t.max}function xa(){const{playbackRates:e}=u(),t=e();return O(t)?t[1]-t[0]||.25:t.step}function Sa(){const{translations:e}=u(),t=d(e,"Speed"),a=zt,s=Ht,n=xa;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${i(a)}
      max=${i(s)}
      step=${i(n)}
      key-step=${i(n)}
    >
      ${z()}${H()}
    </media-speed-slider>
  `}function ka(){const{remote:e,qualities:t}=k(),{autoQuality:a,canSetQuality:s,qualities:n}=$(),{translations:l}=u(),r="Auto";return g(()=>!s()||n().length<=1)()?null:V({label:d(l,r),children:Z({label:r,checked:a,onChange(m,b){m?e.requestAutoQuality(b):e.changeQuality(t.selectedIndex,b)}})})}function Ta(){return i(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:a,qualities:s,quality:n}=$(),l=g(()=>!a()||s().length<=1),r=g(()=>xe(s()));return l()?null:w({label:d(t,"Quality"),value:i(()=>{var p,f;const c=(p=n())==null?void 0:p.height,m=e()?null:(f=n())==null?void 0:f.bitrate,b=m&&m>0?`${(m/1e6).toFixed(2)} Mbps`:null,v=S(t,"Auto");return c?`${c}p${b?` (${b})`:""}`:v}),children:[U({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:wa(),isMin:()=>r()[0]===n(),isMax:()=>r().at(-1)===n()}),ka()]})})}function wa(){const{translations:e}=u(),t=d(e,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${z()}${H()}
    </media-quality-slider>
  `}function Ut({placement:e,portal:t,tooltip:a}){return i(()=>{const{viewType:s}=$(),{translations:n,menuPortal:l,noModal:r,menuGroup:c,smallWhen:m}=u(),b=g(()=>r()?_(e):m()?null:_(e)),v=g(()=>!m()&&c()==="bottom"&&s()==="video"?26:0),p=x(!1);Re();function f(){p.set(!0)}function h(){p.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i(b)}
        offset=${i(v)}
      >
        ${i(()=>p()?[ga(),ua(),pa(),ba()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${f} @close=${h}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(n,"Settings")}
            >
              ${T("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${ot(a)?i(a):a}
          >
            ${d(n,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?_t(l,y):y}
      </media-menu>
    `})}function vt({orientation:e,tooltip:t}){return i(()=>{const{pointer:a,muted:s,canSetVolume:n}=$();if(a()==="coarse"&&!s())return null;if(!n())return kt({tooltip:t});const l=x(void 0),r=ge(l);return o`
      <div class="vds-volume" ?data-active=${i(r)} ${Q(l.set)}>
        ${kt({tooltip:t})}
        <div class="vds-volume-popup">${Ca({orientation:e})}</div>
      </div>
    `})}function Ca({orientation:e}={}){const{translations:t}=u(),a=d(t,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${a}
      orientation=${Be(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function ft(){const e=x(void 0),t=x(0),{thumbnails:a,translations:s,sliderChaptersMinWidth:n,disableTimeSlider:l,seekStep:r,noScrubGesture:c}=u(),m=d(s,"Seek"),b=i(l),v=i(()=>t()<n()),p=i(a);return Ot(e,()=>{const f=e();f&&t.set(f.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${m}
      key-step=${i(r)}
      ?disabled=${b}
      ?no-swipe-gesture=${i(c)}
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
          .src=${p}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Da(){return o`
    <div class="vds-time-group">
      ${i(()=>{const{duration:e}=$();return e()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Ma(){return i(()=>{const{live:e,duration:t}=$();return e()?Wt():t()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function Zt(){return i(()=>{const{live:e}=$();return e()?Wt():Da()})}function jt(){return i(()=>{const{textTracks:e}=k(),{title:t,started:a}=$(),s=x(null);return Pt(e,"chapters",s.set),s()&&(a()||!t())?Yt():o`<media-title class="vds-chapter-title"></media-title>`})}function Yt(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Xt extends Le{async Pf(){const t=(await he(async()=>{const{icons:s}=await import("./vidstack-CRlTZX3Z-PBDNdscv.js");return{icons:s}},__vite__mapDeps([0,1]))).icons,a={};for(const s of Object.keys(t))a[s]=Ve({name:s,paths:t[s]});return a}}var P;let Pa=(P=class extends I{},P.props={...X(P,P,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},P);function Oa(){return[rt(),pt(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Tt({backward:!0,tooltip:"top start"}),q({tooltip:"top"}),Tt({tooltip:"top"}),Aa(),ft(),Ma(),vt({orientation:"vertical",tooltip:"top"}),dt({tooltip:"top"}),ct(),ut({tooltip:"top"}),Ia()]}
        </media-controls-group>
      </media-controls>
    `]}function Aa(){return i(()=>{let e=x(void 0),t=x(!1),a=k(),{title:s,started:n,currentTime:l,ended:r}=$(),{translations:c}=u(),m=Ie(e),b=()=>n()||l()>0;const v=()=>{const h=r()?"Replay":b()?"Continue":"Play";return`${S(c,h)}: ${s()}`};C(()=>{var h;m()&&document.activeElement===document.body&&((h=a.player.el)==null||h.focus())});function p(){const h=e(),y=!!h&&!m()&&h.clientWidth<h.children[0].clientWidth;h&&Ge(h,"vds-marquee",y),t.set(y)}function f(){return o`
        <span class="vds-title-text">
          ${i(v)}${i(()=>b()?Yt():null)}
        </span>
      `}return Ot(e,p),s()?o`
          <span class="vds-title" title=${i(v)} ${Q(e.set)}>
            ${[f(),i(()=>t()&&!m()?f():null)]}
          </span>
        `:D()})}function Ia(){const e="top end";return[Kt({tooltip:"top",placement:e,portal:!0}),Ut({tooltip:"top end",placement:e,portal:!0})]}const E=class E extends At(Gt,Pa){constructor(){super(...arguments),this.en=x(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=k(),this.classList.add("vds-audio-layout"),this.Fn()}onConnect(){Lt("audio",()=>this.isMatch),this.En()}render(){return i(this.Zm.bind(this))}Zm(){return this.isMatch?Oa():null}En(){const{menuPortal:t}=u();C(()=>{if(!this.isMatch)return;const a=Et(this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),s=a?[this,a]:[this];return(this.$props.customIcons()?new Ft(s):new Xt(s)).connect(),t.set(a),()=>{a.remove(),t.set(null)}})}Fn(){const{pointer:t}=this.a.$state;C(()=>{t()==="coarse"&&C(this.rn.bind(this))})}rn(){if(!this.en()){J(this,"pointerdown",this.sn.bind(this),{capture:!0});return}J(this,"pointerdown",t=>t.stopPropagation()),J(window,"pointerdown",this.tn.bind(this))}sn(t){const{target:a}=t;Ae(a)&&a.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}};E.tagName="media-audio-layout",E.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let st=E;const N=class N extends I{};N.props={...X(N,N,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:a})=>t<576||a<380};let nt=N;function Jt(){return i(()=>{const e=k(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:a}=u();if(g(()=>t()||!a())())return null;const n=x(!1),{lastKeyboardAction:l}=e.$state;C(()=>{n.set(!!l());const p=setTimeout(()=>n.set(!1),500);return()=>{n.set(!1),window.clearTimeout(p)}});const r=g(()=>{var f;const p=(f=l())==null?void 0:f.action;return p&&n()?R(p):null}),c=g(()=>`vds-kb-action${n()?"":" hidden"}`),m=g(Ga),b=g(()=>{const p=Fa();return p?Fe(p):null});function v(){const p=b();return p?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${p}</div>
        </div>
      `:null}return o`
      <div class=${i(c)} data-action=${i(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(m)}</div>
        </div>
        ${i(()=>Ne(l(),v()))}
      </div>
    `})}function Ga(){var s;const{$state:e}=k(),t=(s=e.lastKeyboardAction())==null?void 0:s.action,a=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":wt(e.volume(),a);case"volumeUp":case"volumeDown":return wt(e.volume(),a);default:return""}}function wt(e,t){return`${Math.round(e*t*100)}%`}function Fa(){var a;const{$state:e}=k();switch((a=e.lastKeyboardAction())==null?void 0:a.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Ba(){return[rt(),te(),j(),Jt(),pt(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[La(),D(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,D(),o`
            <media-controls-group class="vds-controls-group">
              ${ft()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[q({tooltip:"top start"}),vt({orientation:"horizontal",tooltip:"top"}),Zt(),jt(),dt({tooltip:"top"}),Na(),ut({tooltip:"top"}),Vt({tooltip:"top"}),ct(),He(),Rt({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Na(){return i(()=>{const{menuGroup:e}=u();return e()==="bottom"?$t():null})}function La(){return o`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{const{menuGroup:e}=u();return e()==="top"?[D(),$t()]:null})}
    </media-controls-group>
  `}function Va(){return[rt(),te(),j(),pt(),Jt(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[ut({tooltip:"top start"}),Vt({tooltip:"bottom start"}),D(),dt({tooltip:"bottom"}),ct(),$t(),vt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[D(),q({tooltip:"top"}),D()]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group">
          ${[Zt(),jt(),Rt({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${ft()}
        </media-controls-group>
      </media-controls>
    `,Wa()]}function Ra(){return o`
    <div class="vds-load-container">
      ${[j(),q({tooltip:"top"})]}
    </div>
  `}function Wa(){return i(()=>{const{duration:e}=$();return e()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function j(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function $t(){const{menuGroup:e,smallWhen:t}=u(),a=()=>e()==="top"||t()?"bottom":"top",s=g(()=>`${a()} ${e()==="top"?"end":"center"}`),n=g(()=>`${a()} end`);return[Kt({tooltip:s,placement:n,portal:!0}),Ut({tooltip:s,placement:n,portal:!0})]}function te(){return i(()=>{const{noGestures:e}=u();return e()?null:o`
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
    `})}const K=class K extends At(Gt,nt){onSetup(){this.forwardKeepAlive=!1,this.a=k(),this.classList.add("vds-video-layout")}onConnect(){Lt("video",()=>this.isMatch),this.En()}render(){return i(this.Zm.bind(this))}En(){const{menuPortal:t}=u();C(()=>{if(!this.isMatch)return;const a=Et(this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),s=a?[this,a]:[this];return(this.$props.customIcons()?new Ft(s):new Xt(s)).connect(),t.set(a),()=>{a.remove(),t.set(null)}})}Zm(){const{load:t}=this.a.$props,{canLoad:a,streamType:s,nativeControls:n}=this.a.$state;return!n()&&this.isMatch?t()==="play"&&!a()?Ra():s()==="unknown"?j():this.isSmallLayout?Va():Ba():null}};K.tagName="media-video-layout",K.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let it=K;It(st);It(it);
