const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BOpjaEUN-5ox2sj5s.js","assets/app-9FC2Of4-.js"])))=>i.map(i=>d[i]);
var Ge=Object.getPrototypeOf;var Be=Reflect.get;var Rt=t=>{throw TypeError(t)};var mt=(t,e,s)=>e.has(t)||Rt("Cannot "+s);var S=(t,e,s)=>(mt(t,e,"read from private field"),s?s.call(t):e.get(t)),O=(t,e,s)=>e.has(t)?Rt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),tt=(t,e,s,a)=>(mt(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s),M=(t,e,s)=>(mt(t,e,"access private method"),s);var vt=(t,e,s)=>Be(Ge(t),s,e);import{O as Fe,P as Ne,Q as h,R as T,S as Le,U as x,V as qt,W as We,X as I,Y as q,Z as j,$,a0 as H,f as Ve,a1 as Re,a2 as Et,a3 as jt,a4 as _e,a5 as Ke,a6 as Ht,a7 as et,a8 as wt,a9 as Qe,aa as Ut,ab as ze,ac as qe,ad as Ee,ae as je,af as F,ag as He,ah as Ue,ai as Ye,aj as Yt,ak as ft,al as Ze,am as Xe,an as Je,ao as ts,ap as Zt}from"./app-9FC2Of4-.js";import{A as gt,x as o,s as es,$ as ss,L as Xt}from"./vidstack-D2YigfqZ-BLArkuQb.js";import{e as Jt,c as as,L as ns,I as is,$ as i,l as os,S as te,i as ls,a as rs}from"./vidstack-CSXkYvDj-CV_ka66j.js";const $t=new WeakMap,it=Jt(class extends as{render(t){return gt}update(t,[e]){var s;const a=e!==this.G;return a&&this.G!==void 0&&this.ot(void 0),(a||this.rt!==this.lt)&&(this.G=e,this.dt=(s=t.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=t.element)),gt}ot(t){var e;if(typeof this.G=="function"){const s=(e=this.dt)!==null&&e!==void 0?e:globalThis;let a=$t.get(s);a===void 0&&(a=new WeakMap,$t.set(s,a)),a.get(this.G)!==void 0&&this.G.call(this.dt,void 0),a.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return typeof this.G=="function"?(e=$t.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),ee=Re();function u(){return Fe(ee)}const us={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var ds=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,se=(t,e,s,a)=>{for(var n=cs(e,s),l=t.length-1,r;l>=0;l--)(r=t[l])&&(n=r(e,s,n)||n);return n&&ds(e,s,n),n},U,W,G,Y,yt;const Ft=class Ft extends Ne{constructor(){super(...arguments);O(this,Y);O(this,U);O(this,W,h(()=>{const s=this.$props.when();return M(this,Y,yt).call(this,s)}));O(this,G,h(()=>{const s=this.$props.smallWhen();return M(this,Y,yt).call(this,s)}))}get isMatch(){return S(this,W).call(this)}get isSmallLayout(){return S(this,G).call(this)}onSetup(){tt(this,U,T()),this.setAttributes({"data-match":S(this,W),"data-sm":()=>S(this,G).call(this)?"":null,"data-lg":()=>S(this,G).call(this)?null:"","data-size":()=>S(this,G).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),Le(ee,{...this.$props,when:S(this,W),smallWhen:S(this,G),userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),menuPortal:x(null)})}onAttach(s){qt(s,this.$props.colorScheme)}};U=new WeakMap,W=new WeakMap,G=new WeakMap,Y=new WeakSet,yt=function(s){return s!=="never"&&(We(s)?s:h(()=>s(S(this,U).player.state))())},Ft.props=us;let _=Ft;se([Et],_.prototype,"isMatch");se([Et],_.prototype,"isSmallLayout");function ae(t,e){I(()=>{const{player:s}=T(),a=s.el;return a&&q(a,"data-layout",e()&&t),()=>a==null?void 0:a.removeAttribute("data-layout")})}function k(t,e){var s;return((s=t())==null?void 0:s[e])??e}function Tt(){return i(()=>{const{translations:t,userPrefersAnnouncements:e}=u();return e()?o`<media-announcer .translations=${i(t)}></media-announcer>`:null})}function C(t,e=""){return o`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function X(t){return t.map(e=>C(e))}function d(t,e){return i(()=>k(t,e))}function Ct({tooltip:t}){const{translations:e}=u(),{remotePlaybackState:s}=$(),a=i(()=>{const l=k(e,"AirPlay"),r=jt(s());return`${l} ${r}`}),n=d(e,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${a}>
          ${C("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ne({tooltip:t}){const{translations:e}=u(),{remotePlaybackState:s}=$(),a=i(()=>{const l=k(e,"Google Cast"),r=jt(s());return`${l} ${r}`}),n=d(e,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${a}>
          ${C("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ot({tooltip:t}){const{translations:e}=u(),s=d(e,"Play"),a=d(e,"Pause");return o`
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
  `}function _t({tooltip:t,ref:e=ze}){const{translations:s}=u(),a=d(s,"Mute"),n=d(s,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${it(e)}
        >
          ${X(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${n}</span>
        <span class="vds-unmute-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Dt({tooltip:t}){const{translations:e}=u(),s=d(e,"Closed-Captions On"),a=d(e,"Closed-Captions Off");return o`
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
  `}function ps(){const{translations:t}=u(),e=d(t,"Enter PiP"),s=d(t,"Exit PiP");return o`
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
  `}function ie({tooltip:t}){const{translations:e}=u(),s=d(e,"Enter Fullscreen"),a=d(e,"Exit Fullscreen");return o`
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
  `}function Kt({backward:t,tooltip:e}){const{translations:s,seekStep:a}=u(),n=t?"Seek Backward":"Seek Forward",l=d(s,n);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${i(()=>(t?-1:1)*a())}
          aria-label=${l}
        >
          ${C(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${d(s,n)}
      </media-tooltip-content>
    </media-tooltip>
  `}function oe(){const{translations:t}=u(),{live:e}=$(),s=d(t,"Skip To Live"),a=d(t,"LIVE");return e()?o`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${a}</span>
        </media-live-button>
      `:null}function Mt(){return i(()=>{const{download:t,translations:e}=u(),s=t();if(_e(s))return null;const{source:a,title:n}=$(),l=a(),r=Ke({title:n(),src:l,download:s});return r?o`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(e,"Download")}
                href=${r.url+`?download=${r.name}`}
                download=${r.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(e,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function Ot(){const{translations:t}=u();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(t,"Captions look like this")}
    ></media-captions>
  `}function P(){return o`<div class="vds-controls-spacer"></div>`}function le(t,e){return o`
    <media-menu-portal .container=${i(t)} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function re(t,e,s,a){let n=j(e)?document.querySelector(e):e;n||(n=t==null?void 0:t.closest("dialog")),n||(n=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(s),n.append(l),I(()=>{if(!l)return;const{viewType:p}=$(),c=a();q(l,"data-view-type",p()),q(l,"data-sm",c),q(l,"data-lg",!c),q(l,"data-size",c?"sm":"lg")});const{colorScheme:r}=u();return qt(l,r),l}function ue({placement:t,tooltip:e,portal:s}){const{textTracks:a}=T(),{viewType:n,clipStartTime:l,clipEndTime:r}=$(),{translations:p,thumbnails:c,menuPortal:b,noModal:v,menuGroup:m,smallWhen:f}=u();if(h(()=>{var Wt;const Pe=l(),Ae=r()||1/0,Lt=x(null);Ht(a,"chapters",Lt.set);const pt=(Wt=Lt())==null?void 0:Wt.cues.filter(Vt=>Vt.startTime<=Ae&&Vt.endTime>=Pe);return!(pt!=null&&pt.length)})())return null;const y=h(()=>v()?et(t):f()?null:et(t)),Q=h(()=>!f()&&m()==="bottom"&&n()==="video"?26:0),z=x(!1);function Oe(){z.set(!0)}function Ie(){z.set(!1)}const Nt=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(y)}
      offset=${i(Q)}
    >
      ${i(()=>z()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${i(c)}
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
    <media-menu class="vds-chapters-menu vds-menu" @open=${Oe} @close=${Ie}>
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
          placement=${wt(e)?i(e):e}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?le(b,Nt):Nt}
    </media-menu>
  `}function bt(t){const{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const It={type:"color"},ms={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},vs={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},fs={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},$s={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},st={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},N=Object.keys(st).reduce((t,e)=>({...t,[e]:x(st[e])}),{});for(const t of Object.keys(N)){const e=localStorage.getItem(`vds-player:${H(t)}`);j(e)&&N[t].set(e)}function bs(){for(const t of Object.keys(N)){const e=st[t];N[t].set(e)}}let Qt=!1,ht=new Set;function hs(){const{player:t}=T();ht.add(t),qe(()=>ht.delete(t)),Qt||(Ee(()=>{for(const e of je(N)){const s=N[e],a=st[e],n=`--media-user-${H(e)}`,l=`vds-player:${H(e)}`;I(()=>{var b;const r=s(),p=r===a,c=p?null:gs(t,e,r);for(const v of ht)(b=v.el)==null||b.style.setProperty(n,c);p?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),Qt=!0)}function gs(t,e,s){var a;switch(e){case"fontFamily":const n=s==="capitals"?"small-caps":"";return(a=t.el)==null||a.style.setProperty("--media-user-font-variant",n),xs(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return ys(s);case"textColor":return`rgb(${bt(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return Ss(s);case"textBg":return`rgb(${bt(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${bt(s)} / var(--media-user-display-bg-opacity, 1))`}}function ys(t){return(parseInt(t)/100).toString()}function xs(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Ss(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let ks=0;function D({label:t="",value:e="",children:s}){if(!t)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const a=`vds-menu-section-${++ks}`;return o`
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
  `}function L({label:t,icon:e,hint:s}){return o`
    <media-menu-button class="vds-menu-item">
      ${C("menu-arrow-left","vds-menu-close-icon")}
      ${e?C(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${i(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?i(s):null} </span>
      ${C("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function ws({value:t=null,options:e,hideLabel:s=!1,children:a=null,onChange:n=null}){function l(r){const{value:p,label:c}=r;return o`
      <media-radio class="vds-radio" value=${p}>
        ${C("menu-radio-check")}
        ${s?null:o`
              <span class="vds-radio-label" data-part="label">
                ${j(c)?c:i(c)}
              </span>
            `}
        ${wt(a)?a(r):a}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${j(t)?t:t?i(t):""}
      @change=${n}
    >
      ${F(e)?e.map(l):i(()=>e().map(l))}
    </media-radio-group>
  `}function Ts(t){return F(t)?t.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(t).map(e=>({label:e,value:t[e]}))}function lt(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function rt(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function ut({label:t=null,value:e=null,upIcon:s="",downIcon:a="",children:n,isMin:l,isMax:r}){const p=t||e,c=[a?C(a,"down"):null,n,s?C(s,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${i(()=>l()?"":null)}
      data-max=${i(()=>r()?"":null)}
    >
      ${p?o`
            <div class="vds-menu-slider-title">
              ${[t?o`<div>${t}</div>`:null,e?o`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const Cs={...vs,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},Pt={...fs,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function Ds(){return i(()=>{const{hasCaptions:t}=$(),{translations:e}=u();return t()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${L({label:()=>k(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[D({label:d(e,"Font"),children:[Ms(),Os()]}),D({label:d(e,"Text"),children:[Is(),As(),Ps()]}),D({label:d(e,"Text Background"),children:[Gs(),Bs()]}),D({label:d(e,"Display Background"),children:[Fs(),Ns()]}),D({children:[Ls()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Ms(){return A({label:"Family",option:ms,type:"fontFamily"})}function Os(){return A({label:"Size",option:Cs,type:"fontSize"})}function Is(){return A({label:"Color",option:It,type:"textColor"})}function Ps(){return A({label:"Opacity",option:Pt,type:"textOpacity"})}function As(){return A({label:"Shadow",option:$s,type:"textShadow"})}function Gs(){return A({label:"Color",option:It,type:"textBg"})}function Bs(){return A({label:"Opacity",option:Pt,type:"textBgOpacity"})}function Fs(){return A({label:"Color",option:It,type:"displayBg"})}function Ns(){return A({label:"Opacity",option:Pt,type:"displayBgOpacity"})}function Ls(){const{translations:t}=u();return o`
    <button class="vds-menu-item" role="menuitem" @click=${bs}>
      <span class="vds-menu-item-label">${i(()=>k(t,"Reset"))}</span>
    </button>
  `}function A({label:t,option:e,type:s}){const{player:a}=T(),{translations:n}=u(),l=N[s],r=()=>k(n,t);function p(){Ye(),a.dispatchEvent(new Event("vds-font-change"))}if(e.type==="color"){let v=function(m){l.set(m.target.value),p()};return J({label:i(r),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${i(l)}
          @input=${v}
        />
      `})}if(e.type==="slider"){let v=function(z){l.set(z.detail+"%"),p()};const{min:m,max:f,step:g,upIcon:y,downIcon:Q}=e;return ut({label:i(r),value:i(l),upIcon:y,downIcon:Q,isMin:()=>l()===m+"%",isMax:()=>l()===f+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${m}
          max=${f}
          step=${g}
          key-step=${g}
          .value=${i(()=>parseInt(l()))}
          aria-label=${i(r)}
          @value-change=${v}
          @drag-value-change=${v}
        >
          ${lt()}${rt()}
        </media-slider>
      `})}const c=Ts(e.values),b=()=>{var f;const v=l(),m=((f=c.find(g=>g.value===v))==null?void 0:f.label)||"";return k(n,j(m)?m:m())};return o`
    <media-menu class=${`vds-${H(s)}-menu vds-menu`}>
      ${L({label:r,hint:b})}
      <media-menu-items class="vds-menu-items">
        ${ws({value:l,options:c,onChange({detail:v}){l.set(v),p()}})}
      </media-menu-items>
    </media-menu>
  `}function dt({label:t,checked:e,defaultChecked:s=!1,storageKey:a,onChange:n}){const{translations:l}=u(),r=a?localStorage.getItem(a):null,p=x(!!(r??s)),c=x(!1),b=i(ss(p)),v=d(l,t);a&&n(He(p)),e&&I(()=>void p.set(e()));function m(y){(y==null?void 0:y.button)!==1&&(p.set(Q=>!Q),a&&localStorage.setItem(a,p()?"1":""),n(p(),y),c.set(!1))}function f(y){Ue(y)&&m()}function g(y){y.button===0&&c.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${b}
      data-active=${i(()=>c()?"":null)}
      @pointerup=${m}
      @pointerdown=${g}
      @keydown=${f}
    ></div>
  `}function Ws(){return i(()=>{const{translations:t}=u();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${L({label:()=>k(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:[Vs(),Rs()]}),D({children:[Ds()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Vs(){const{userPrefersAnnouncements:t,translations:e}=u(),s="Announcements";return J({label:d(e,s),children:dt({label:s,storageKey:"vds-player::announcements",onChange(a){t.set(a)}})})}function Rs(){return i(()=>{const{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:s}=u(),{viewType:a}=$();if(h(()=>a()!=="video"||s())())return null;const l="Keyboard Animations";return J({label:d(t,l),children:dt({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){e.set(r)}})})})}function _s(){return i(()=>{const{noAudioGain:t,translations:e}=u(),{audioTracks:s,canSetAudioGain:a}=$();return h(()=>!(a()&&!t())&&s().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${L({label:()=>k(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[Ks(),Qs()]}
        </media-menu-items>
      </media-menu>
    `})}function Ks(){return i(()=>{const{translations:t}=u(),{audioTracks:e}=$(),s=d(t,"Default");return h(()=>e().length<=1)()?null:D({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${L({label:()=>k(t,"Track")})}
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
      `})})}function Qs(){return i(()=>{const{noAudioGain:t,translations:e}=u(),{canSetAudioGain:s}=$();if(h(()=>!s()||t())())return null;const{audioGain:n}=$();return D({label:d(e,"Boost"),value:i(()=>Math.round(((n()??1)-1)*100)+"%"),children:[ut({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:zs(),isMin:()=>((n()??1)-1)*100<=de(),isMax:()=>((n()??1)-1)*100===ce()})]})})}function zs(){const{translations:t}=u(),e=d(t,"Boost"),s=de,a=ce,n=qs;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${i(s)}
      max=${i(a)}
      step=${i(n)}
      key-step=${i(n)}
    >
      ${lt()}${rt()}
    </media-audio-gain-slider>
  `}function de(){const{audioGains:t}=u(),e=t();return F(e)?e[0]??0:e.min}function ce(){const{audioGains:t}=u(),e=t();return F(e)?e[e.length-1]??300:e.max}function qs(){const{audioGains:t}=u(),e=t();return F(e)?e[1]-e[0]||25:e.step}function Es(){return i(()=>{const{translations:t}=u(),{hasCaptions:e}=$(),s=d(t,"Off");return e()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${L({label:()=>k(t,"Captions"),icon:"menu-captions"})}
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
    `:null})}function js(){return i(()=>{const{translations:t}=u();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${L({label:()=>k(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:Hs()}),Us(),Js()]}
        </media-menu-items>
      </media-menu>
    `})}function Hs(){const{remote:t}=T(),{translations:e}=u(),s="Loop";return J({label:d(e,s),children:dt({label:s,storageKey:"vds-player::user-loop",onChange(a,n){t.userPrefersLoopChange(a,n)}})})}function Us(){return i(()=>{const{translations:t}=u(),{canSetPlaybackRate:e,playbackRate:s}=$();return e()?D({label:d(t,"Speed"),value:i(()=>s()===1?k(t,"Normal"):s()+"x"),children:[ut({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Zs(),isMin:()=>s()===pe(),isMax:()=>s()===me()})]}):null})}function pe(){const{playbackRates:t}=u(),e=t();return F(e)?e[0]??0:e.min}function me(){const{playbackRates:t}=u(),e=t();return F(e)?e[e.length-1]??2:e.max}function Ys(){const{playbackRates:t}=u(),e=t();return F(e)?e[1]-e[0]||.25:e.step}function Zs(){const{translations:t}=u(),e=d(t,"Speed"),s=pe,a=me,n=Ys;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${i(s)}
      max=${i(a)}
      step=${i(n)}
      key-step=${i(n)}
    >
      ${lt()}${rt()}
    </media-speed-slider>
  `}function Xs(){const{remote:t,qualities:e}=T(),{autoQuality:s,canSetQuality:a,qualities:n}=$(),{translations:l}=u(),r="Auto";return h(()=>!a()||n().length<=1)()?null:J({label:d(l,r),children:dt({label:r,checked:s,onChange(c,b){c?t.requestAutoQuality(b):t.changeQuality(e.selectedIndex,b)}})})}function Js(){return i(()=>{const{hideQualityBitrate:t,translations:e}=u(),{canSetQuality:s,qualities:a,quality:n}=$(),l=h(()=>!s()||a().length<=1),r=h(()=>es(a()));return l()?null:D({label:d(e,"Quality"),value:i(()=>{var m,f;const p=(m=n())==null?void 0:m.height,c=t()?null:(f=n())==null?void 0:f.bitrate,b=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,v=k(e,"Auto");return p?`${p}p${b?` (${b})`:""}`:v}),children:[ut({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:ta(),isMin:()=>r()[0]===n(),isMax:()=>r().at(-1)===n()}),Xs()]})})}function ta(){const{translations:t}=u(),e=d(t,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${lt()}${rt()}
    </media-quality-slider>
  `}function ve({placement:t,portal:e,tooltip:s}){return i(()=>{const{viewType:a}=$(),{translations:n,menuPortal:l,noModal:r,menuGroup:p,smallWhen:c}=u(),b=h(()=>r()?et(t):c()?null:et(t)),v=h(()=>!c()&&p()==="bottom"&&a()==="video"?26:0),m=x(!1);hs();function f(){m.set(!0)}function g(){m.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i(b)}
        offset=${i(v)}
      >
        ${i(()=>m()?[js(),Ws(),_s(),Es()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${f} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(n,"Settings")}
            >
              ${C("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${wt(s)?i(s):s}
          >
            ${d(n,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?le(l,y):y}
      </media-menu>
    `})}function At({orientation:t,tooltip:e}){return i(()=>{const{pointer:s,muted:a,canSetVolume:n}=$();if(s()==="coarse"&&!a())return null;if(!n())return _t({tooltip:e});const l=x(void 0),r=Qe(l);return o`
      <div class="vds-volume" ?data-active=${i(r)} ${it(l.set)}>
        ${_t({tooltip:e})}
        <div class="vds-volume-popup">${ea({orientation:t})}</div>
      </div>
    `})}function ea({orientation:t}={}){const{translations:e}=u(),s=d(e,"Volume");return o`
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
  `}function Gt(){const t=x(void 0),e=x(0),{thumbnails:s,translations:a,sliderChaptersMinWidth:n,disableTimeSlider:l,seekStep:r,noScrubGesture:p}=u(),c=d(a,"Seek"),b=i(l),v=i(()=>e()<n()),m=i(s);return Ut(t,()=>{const f=t();f&&e.set(f.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${i(r)}
      ?disabled=${b}
      ?no-swipe-gesture=${i(p)}
      ${it(t.set)}
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
  `}function sa(){return o`
    <div class="vds-time-group">
      ${i(()=>{const{duration:t}=$();return t()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function aa(){return i(()=>{const{live:t,duration:e}=$();return t()?oe():e()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function fe(){return i(()=>{const{live:t}=$();return t()?oe():sa()})}function $e(){return i(()=>{const{textTracks:t}=T(),{title:e,started:s}=$(),a=x(null);return Ht(t,"chapters",a.set),a()&&(s()||!e())?be():o`<media-title class="vds-chapter-title"></media-title>`})}function be(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class he extends ns{async loadIcons(){const e=(await Ve(async()=>{const{icons:a}=await import("./vidstack-BOpjaEUN-5ox2sj5s.js");return{icons:a}},__vite__mapDeps([0,1]))).icons,s={};for(const a of Object.keys(e))s[a]=is({name:a,paths:e[a]});return s}}var B;let na=(B=class extends _{},B.props={...vt(B,B,"props"),when:({viewType:e})=>e==="audio",smallWhen:({width:e})=>e<576},B);function ia(){return[Tt(),Ot(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Kt({backward:!0,tooltip:"top start"}),ot({tooltip:"top"}),Kt({tooltip:"top"}),oa(),Gt(),aa(),At({orientation:"vertical",tooltip:"top"}),Dt({tooltip:"top"}),Mt(),Ct({tooltip:"top"}),la()]}
        </media-controls-group>
      </media-controls>
    `]}function oa(){return i(()=>{let t=x(void 0),e=x(!1),s=T(),{title:a,started:n,currentTime:l,ended:r}=$(),{translations:p}=u(),c=Xe(t),b=()=>n()||l()>0;const v=()=>{const g=r()?"Replay":b()?"Continue":"Play";return`${k(p,g)}: ${a()}`};I(()=>{var g;c()&&document.activeElement===document.body&&((g=s.player.el)==null||g.focus({preventScroll:!0}))});function m(){const g=t(),y=!!g&&!c()&&g.clientWidth<g.children[0].clientWidth;g&&Je(g,"vds-marquee",y),e.set(y)}function f(){return o`
        <span class="vds-title-text">
          ${i(v)}${i(()=>b()?be():null)}
        </span>
      `}return Ut(t,m),a()?o`
          <span class="vds-title" title=${i(v)} ${it(t.set)}>
            ${[f(),i(()=>e()&&!c()?f():null)]}
          </span>
        `:P()})}function la(){const t="top end";return[ue({tooltip:"top",placement:t,portal:!0}),ve({tooltip:"top end",placement:t,portal:!0})]}var Z,V,w,ge,ye,xe,Se,ke,we;const at=class at extends Yt(Xt,na){constructor(){super(...arguments);O(this,w);O(this,Z);O(this,V,x(!1))}onSetup(){this.forwardKeepAlive=!1,tt(this,Z,T()),this.classList.add("vds-audio-layout"),M(this,w,xe).call(this)}onConnect(){ae("audio",()=>this.isMatch),M(this,w,ye).call(this)}render(){return i(M(this,w,ge).bind(this))}};Z=new WeakMap,V=new WeakMap,w=new WeakSet,ge=function(){return this.isMatch?ia():null},ye=function(){const{menuPortal:s}=u();I(()=>{if(!this.isMatch)return;const a=re(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),n=a?[this,a]:[this];return(this.$props.customIcons()?new te(n):new he(n)).connect(),s.set(a),()=>{a.remove(),s.set(null)}})},xe=function(){const{pointer:s}=S(this,Z).$state;I(()=>{s()==="coarse"&&I(M(this,w,Se).bind(this))})},Se=function(){if(!S(this,V).call(this)){ft(this,"pointerdown",M(this,w,ke).bind(this),{capture:!0});return}ft(this,"pointerdown",s=>s.stopPropagation()),ft(window,"pointerdown",M(this,w,we).bind(this))},ke=function(s){const{target:a}=s;Ze(a)&&a.closest(".vds-time-slider")&&(s.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),S(this,V).set(!0))},we=function(){S(this,V).set(!1),this.removeAttribute("data-scrubbing")},at.tagName="media-audio-layout",at.attrs={smallWhen:{converter(s){return s!=="never"&&!!s}}};let xt=at;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ra=Jt(class extends ls{constructor(){super(...arguments),this.key=gt}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(rs(t),this.key=e),s}}),E=class E extends _{};E.props={...vt(E,E,"props"),when:({viewType:e})=>e==="video",smallWhen:({width:e,height:s})=>e<576||s<380};let St=E;function Te(){return i(()=>{const t=T(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:s}=u();if(h(()=>e()||!s())())return null;const n=x(!1),{lastKeyboardAction:l}=t.$state;I(()=>{n.set(!!l());const m=setTimeout(()=>n.set(!1),500);return()=>{n.set(!1),window.clearTimeout(m)}});const r=h(()=>{var f;const m=(f=l())==null?void 0:f.action;return m&&n()?H(m):null}),p=h(()=>`vds-kb-action${n()?"":" hidden"}`),c=h(ua),b=h(()=>{const m=da();return m?ts(m):null});function v(){const m=b();return m?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return o`
      <div class=${i(p)} data-action=${i(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(c)}</div>
        </div>
        ${i(()=>ra(l(),v()))}
      </div>
    `})}function ua(){var a;const{$state:t}=T(),e=(a=t.lastKeyboardAction())==null?void 0:a.action,s=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":zt(t.volume(),s);case"volumeUp":case"volumeDown":return zt(t.volume(),s);default:return""}}function zt(t,e){return`${Math.round(t*e*100)}%`}function da(){var s;const{$state:t}=T();switch((s=t.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||t.volume()===0?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function ca(){return[Tt(),Ce(),ct(),Te(),Ot(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[ma(),P(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,P(),o`
            <media-controls-group class="vds-controls-group">
              ${Gt()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[ot({tooltip:"top start"}),At({orientation:"horizontal",tooltip:"top"}),fe(),$e(),Dt({tooltip:"top"}),pa(),Ct({tooltip:"top"}),ne({tooltip:"top"}),Mt(),ps(),ie({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function pa(){return i(()=>{const{menuGroup:t}=u();return t()==="bottom"?Bt():null})}function ma(){return o`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{const{menuGroup:t}=u();return t()==="top"?[P(),Bt()]:null})}
    </media-controls-group>
  `}function va(){return[Tt(),Ce(),ct(),Ot(),Te(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Ct({tooltip:"top start"}),ne({tooltip:"bottom start"}),P(),Dt({tooltip:"bottom"}),Mt(),Bt(),At({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${P()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[P(),ot({tooltip:"top"}),P()]}
        </media-controls-group>

        ${P()}

        <media-controls-group class="vds-controls-group">
          ${[fe(),$e(),ie({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Gt()}
        </media-controls-group>
      </media-controls>
    `,$a()]}function fa(){return o`
    <div class="vds-load-container">
      ${[ct(),ot({tooltip:"top"})]}
    </div>
  `}function $a(){return i(()=>{const{duration:t}=$();return t()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function ct(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Bt(){const{menuGroup:t,smallWhen:e}=u(),s=()=>t()==="top"||e()?"bottom":"top",a=h(()=>`${s()} ${t()==="top"?"end":"center"}`),n=h(()=>`${s()} end`);return[ue({tooltip:a,placement:n,portal:!0}),ve({tooltip:a,placement:n,portal:!0})]}function Ce(){return i(()=>{const{noGestures:t}=u();return t()?null:o`
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
    `})}var R,K,De,Me;const nt=class nt extends Yt(Xt,St){constructor(){super(...arguments);O(this,K);O(this,R)}onSetup(){this.forwardKeepAlive=!1,tt(this,R,T()),this.classList.add("vds-video-layout")}onConnect(){ae("video",()=>this.isMatch),M(this,K,De).call(this)}render(){return i(M(this,K,Me).bind(this))}};R=new WeakMap,K=new WeakSet,De=function(){const{menuPortal:s}=u();I(()=>{if(!this.isMatch)return;const a=re(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),n=a?[this,a]:[this];return(this.$props.customIcons()?new te(n):new he(n)).connect(),s.set(a),()=>{a.remove(),s.set(null)}})},Me=function(){const{load:s}=S(this,R).$props,{canLoad:a,streamType:n,nativeControls:l}=S(this,R).$state;return!l()&&this.isMatch?s()==="play"&&!a()?fa():n()==="unknown"?ct():this.isSmallLayout?va():ca():null},nt.tagName="media-video-layout",nt.attrs={smallWhen:{converter(s){return s!=="never"&&!!s}}};let kt=nt;Zt(xt);Zt(kt);
