const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-CmqqnRgc-wTJlaeOL.js","assets/app-DTUtFBaL.js"])))=>i.map(i=>d[i]);
var ue=Object.getPrototypeOf;var de=Reflect.get;var tt=(e,t,s)=>de(ue(e),s,t);import{O as ce,P as pe,Q as h,R as k,S as me,U as x,V as Ot,W as ve,X as C,Y as N,Z as V,$ as R,a0 as fe,a1 as Pt,a2 as $,a3 as It,a4 as $e,a5 as be,a6 as At,a7 as K,a8 as ut,a9 as he,aa as Gt,f as ge,ab as ye,ac as xe,ad as Se,ae as ke,af as P,ag as Te,ah as we,ai as Ce,aj as Bt,ak as et,al as De,am as Me,an as Oe,ao as Pe,ap as Ft}from"./app-DTUtFBaL.js";import{A as it,x as o,s as Ie,$ as Ae,L as Nt}from"./vidstack-D2YigfqZ-BLArkuQb.js";import{e as Lt,c as Ge,$ as i,l as Be,L as Fe,I as Ne,S as Vt,i as Le,a as Ve}from"./vidstack-BUfQcGbf-DNXhccY2.js";const st=new WeakMap,q=Lt(class extends Ge{render(e){return it}update(e,[t]){var s;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),it}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=st.get(s);n===void 0&&(n=new WeakMap,st.set(s,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=st.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Rt=fe();function u(){return ce(Rt)}const Re={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var We=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Wt=(e,t,s,n)=>{for(var a=_e(t,s),l=e.length-1,r;l>=0;l--)(r=e[l])&&(a=r(t,s,a)||a);return a&&We(t,s,a),a};const yt=class yt extends pe{constructor(){super(...arguments),this.cn=h(()=>{const t=this.$props.when();return this.fn(t)}),this.$m=h(()=>{const t=this.$props.smallWhen();return this.fn(t)})}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=k(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),me(Rt,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),menuPortal:x(null)})}onAttach(t){Ot(t,this.$props.colorScheme)}fn(t){return t!=="never"&&(ve(t)?t:h(()=>t(this.a.player.state))())}};yt.props=Re;let G=yt;Wt([Pt],G.prototype,"isMatch");Wt([Pt],G.prototype,"isSmallLayout");function _t(e,t){C(()=>{const{player:s}=k(),n=s.el;return n&&N(n,"data-layout",t()&&e),()=>n==null?void 0:n.removeAttribute("data-layout")})}function S(e,t){var s;return((s=e())==null?void 0:s[t])??t}function dt(){return i(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?o`<media-announcer .translations=${i(e)}></media-announcer>`:null})}function T(e,t=""){return o`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function W(e){return e.map(t=>T(t))}function d(e,t){return i(()=>S(e,t))}function ct({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=$(),n=i(()=>{const l=S(t,"AirPlay"),r=It(s());return`${l} ${r}`}),a=d(t,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${T("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Kt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=$(),n=i(()=>{const l=S(t,"Google Cast"),r=It(s());return`${l} ${r}`}),a=d(t,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${T("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function j({tooltip:e}){const{translations:t}=u(),s=d(t,"Play"),n=d(t,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${W(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function wt({tooltip:e,ref:t=ye}){const{translations:s}=u(),n=d(s,"Mute"),a=d(s,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${q(t)}
        >
          ${W(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${a}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function pt({tooltip:e}){const{translations:t}=u(),s=d(t,"Closed-Captions On"),n=d(t,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${W(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ke(){const{translations:e}=u(),t=d(e,"Enter PiP"),s=d(e,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${W(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Qt({tooltip:e}){const{translations:t}=u(),s=d(t,"Enter Fullscreen"),n=d(t,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${W(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ct({backward:e,tooltip:t}){const{translations:s,seekStep:n}=u(),a=e?"Seek Backward":"Seek Forward",l=d(s,a);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${i(()=>(e?-1:1)*n())}
          aria-label=${l}
        >
          ${T(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(s,a)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Et(){const{translations:e}=u(),{live:t}=$(),s=d(e,"Skip To Live"),n=d(e,"LIVE");return t()?o`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function mt(){return i(()=>{const{download:e,translations:t}=u(),s=e();if($e(s))return null;const{source:n,title:a}=$(),l=n(),r=be({title:a(),src:l,download:s});return r?o`
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
        `:null})}function vt(){const{translations:e}=u();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function D(){return o`<div class="vds-controls-spacer"></div>`}function zt(e,t){return o`
    <media-menu-portal .container=${i(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function qt(e,t,s,n){let a=R(t)?document.querySelector(t):t;a||(a=e==null?void 0:e.closest("dialog")),a||(a=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(s),a.append(l),C(()=>{if(!l)return;const{viewType:p}=$(),c=n();N(l,"data-view-type",p()),N(l,"data-sm",c),N(l,"data-lg",!c),N(l,"data-size",c?"sm":"lg")});const{colorScheme:r}=u();return Ot(l,r),l}function jt({placement:e,tooltip:t,portal:s}){const{textTracks:n}=k(),{viewType:a,clipStartTime:l,clipEndTime:r}=$(),{translations:p,thumbnails:c,menuPortal:b,noModal:v,menuGroup:m,smallWhen:f}=u();if(h(()=>{var kt;const le=l(),re=r()||1/0,St=x(null);At(n,"chapters",St.set);const J=(kt=St())==null?void 0:kt.cues.filter(Tt=>Tt.startTime<=re&&Tt.endTime>=le);return!(J!=null&&J.length)})())return null;const y=h(()=>v()?K(e):f()?null:K(e)),B=h(()=>!f()&&m()==="bottom"&&a()==="video"?26:0),F=x(!1);function ie(){F.set(!0)}function oe(){F.set(!1)}const xt=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(y)}
      offset=${i(B)}
    >
      ${i(()=>F()?o`
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
    <media-menu class="vds-chapters-menu vds-menu" @open=${ie} @close=${oe}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${T("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ut(t)?i(t):t}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?zt(b,xt):xt}
    </media-menu>
  `}function nt(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const ft={type:"color"},Qe={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},Ee={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},ze={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},qe={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},Q={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},I=Object.keys(Q).reduce((e,t)=>({...e,[t]:x(Q[t])}),{});for(const e of Object.keys(I)){const t=localStorage.getItem(`vds-player:${V(e)}`);R(t)&&I[e].set(t)}function je(){for(const e of Object.keys(I)){const t=Q[e];I[e].set(t)}}let Dt=!1,at=new Set;function He(){const{player:e}=k();at.add(e),xe(()=>at.delete(e)),Dt||(Se(()=>{for(const t of ke(I)){const s=I[t],n=Q[t],a=`--media-user-${V(t)}`,l=`vds-player:${V(t)}`;C(()=>{var b;const r=s(),p=r===n,c=p?null:Ue(e,t,r);for(const v of at)(b=v.el)==null||b.style.setProperty(a,c);p?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),Dt=!0)}function Ue(e,t,s){var n;switch(t){case"fontFamily":const a=s==="capitals"?"small-caps":"";return(n=e.el)==null||n.style.setProperty("--media-user-font-variant",a),Ye(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return Ze(s);case"textColor":return`rgb(${nt(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return Xe(s);case"textBg":return`rgb(${nt(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${nt(s)} / var(--media-user-display-bg-opacity, 1))`}}function Ze(e){return(parseInt(e)/100).toString()}function Ye(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Xe(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let Je=0;function w({label:e="",value:t="",children:s}){if(!e)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++Je}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?o`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function _({label:e,children:t}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function A({label:e,icon:t,hint:s}){return o`
    <media-menu-button class="vds-menu-item">
      ${T("menu-arrow-left","vds-menu-close-icon")}
      ${t?T(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${i(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?i(s):null} </span>
      ${T("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function ts({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:a=null}){function l(r){const{value:p,label:c}=r;return o`
      <media-radio class="vds-radio" value=${p}>
        ${T("menu-radio-check")}
        ${s?null:o`
              <span class="vds-radio-label" data-part="label">
                ${R(c)?c:i(c)}
              </span>
            `}
        ${ut(n)?n(r):n}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${R(e)?e:e?i(e):""}
      @change=${a}
    >
      ${P(t)?t.map(l):i(()=>t().map(l))}
    </media-radio-group>
  `}function es(e){return P(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function H(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function U(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function Z({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:a,isMin:l,isMax:r}){const p=e||t,c=[n?T(n,"down"):null,a,s?T(s,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${i(()=>l()?"":null)}
      data-max=${i(()=>r()?"":null)}
    >
      ${p?o`
            <div class="vds-menu-slider-title">
              ${[e?o`<div>${e}</div>`:null,t?o`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const ss={...Ee,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},$t={...ze,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function ns(){return i(()=>{const{hasCaptions:e}=$(),{translations:t}=u();return e()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${A({label:()=>S(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[w({label:d(t,"Font"),children:[as(),is()]}),w({label:d(t,"Text"),children:[os(),rs(),ls()]}),w({label:d(t,"Text Background"),children:[us(),ds()]}),w({label:d(t,"Display Background"),children:[cs(),ps()]}),w({children:[ms()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function as(){return M({label:"Family",option:Qe,type:"fontFamily"})}function is(){return M({label:"Size",option:ss,type:"fontSize"})}function os(){return M({label:"Color",option:ft,type:"textColor"})}function ls(){return M({label:"Opacity",option:$t,type:"textOpacity"})}function rs(){return M({label:"Shadow",option:qe,type:"textShadow"})}function us(){return M({label:"Color",option:ft,type:"textBg"})}function ds(){return M({label:"Opacity",option:$t,type:"textBgOpacity"})}function cs(){return M({label:"Color",option:ft,type:"displayBg"})}function ps(){return M({label:"Opacity",option:$t,type:"displayBgOpacity"})}function ms(){const{translations:e}=u();return o`
    <button class="vds-menu-item" role="menuitem" @click=${je}>
      <span class="vds-menu-item-label">${i(()=>S(e,"Reset"))}</span>
    </button>
  `}function M({label:e,option:t,type:s}){const{player:n}=k(),{translations:a}=u(),l=I[s],r=()=>S(a,e);function p(){Ce(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let v=function(m){l.set(m.target.value),p()};return _({label:i(r),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${i(l)}
          @input=${v}
        />
      `})}if(t.type==="slider"){let v=function(F){l.set(F.detail+"%"),p()};const{min:m,max:f,step:g,upIcon:y,downIcon:B}=t;return Z({label:i(r),value:i(l),upIcon:y,downIcon:B,isMin:()=>l()===m+"%",isMax:()=>l()===f+"%",children:o`
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
          ${H()}${U()}
        </media-slider>
      `})}const c=es(t.values),b=()=>{var f;const v=l(),m=((f=c.find(g=>g.value===v))==null?void 0:f.label)||"";return S(a,R(m)?m:m())};return o`
    <media-menu class=${`vds-${V(s)}-menu vds-menu`}>
      ${A({label:r,hint:b})}
      <media-menu-items class="vds-menu-items">
        ${ts({value:l,options:c,onChange({detail:v}){l.set(v),p()}})}
      </media-menu-items>
    </media-menu>
  `}function Y({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:a}){const{translations:l}=u(),r=n?localStorage.getItem(n):null,p=x(!!(r??s)),c=x(!1),b=i(Ae(p)),v=d(l,e);n&&a(Te(p)),t&&C(()=>void p.set(t()));function m(y){(y==null?void 0:y.button)!==1&&(p.set(B=>!B),n&&localStorage.setItem(n,p()?"1":""),a(p(),y),c.set(!1))}function f(y){we(y)&&m()}function g(y){y.button===0&&c.set(!0)}return o`
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
  `}function vs(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${A({label:()=>S(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[w({children:[fs(),$s()]}),w({children:[ns()]})]}
        </media-menu-items>
      </media-menu>
    `})}function fs(){const{userPrefersAnnouncements:e,translations:t}=u(),s="Announcements";return _({label:d(t,s),children:Y({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function $s(){return i(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=u(),{viewType:n}=$();if(h(()=>n()!=="video"||s())())return null;const l="Keyboard Animations";return _({label:d(e,l),children:Y({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function bs(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:s,canSetAudioGain:n}=$();return h(()=>!(n()&&!e())&&s().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${A({label:()=>S(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[hs(),gs()]}
        </media-menu-items>
      </media-menu>
    `})}function hs(){return i(()=>{const{translations:e}=u(),{audioTracks:t}=$(),s=d(e,"Default");return h(()=>t().length<=1)()?null:w({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${A({label:()=>S(e,"Track")})}
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
      `})})}function gs(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:s}=$();if(h(()=>!s()||e())())return null;const{audioGain:a}=$();return w({label:d(t,"Boost"),value:i(()=>Math.round(((a()??1)-1)*100)+"%"),children:[Z({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:ys(),isMin:()=>((a()??1)-1)*100<=Ht(),isMax:()=>((a()??1)-1)*100===Ut()})]})})}function ys(){const{translations:e}=u(),t=d(e,"Boost"),s=Ht,n=Ut,a=xs;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${i(s)}
      max=${i(n)}
      step=${i(a)}
      key-step=${i(a)}
    >
      ${H()}${U()}
    </media-audio-gain-slider>
  `}function Ht(){const{audioGains:e}=u(),t=e();return P(t)?t[0]??0:t.min}function Ut(){const{audioGains:e}=u(),t=e();return P(t)?t[t.length-1]??300:t.max}function xs(){const{audioGains:e}=u(),t=e();return P(t)?t[1]-t[0]||25:t.step}function Ss(){return i(()=>{const{translations:e}=u(),{hasCaptions:t}=$(),s=d(e,"Off");return t()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${A({label:()=>S(e,"Captions"),icon:"menu-captions"})}
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
    `:null})}function ks(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${A({label:()=>S(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[w({children:Ts()}),ws(),Os()]}
        </media-menu-items>
      </media-menu>
    `})}function Ts(){const{remote:e}=k(),{translations:t}=u(),s="Loop";return _({label:d(t,s),children:Y({label:s,storageKey:"vds-player::user-loop",onChange(n,a){e.userPrefersLoopChange(n,a)}})})}function ws(){return i(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:s}=$();return t()?w({label:d(e,"Speed"),value:i(()=>s()===1?S(e,"Normal"):s()+"x"),children:[Z({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Ds(),isMin:()=>s()===Zt(),isMax:()=>s()===Yt()})]}):null})}function Zt(){const{playbackRates:e}=u(),t=e();return P(t)?t[0]??0:t.min}function Yt(){const{playbackRates:e}=u(),t=e();return P(t)?t[t.length-1]??2:t.max}function Cs(){const{playbackRates:e}=u(),t=e();return P(t)?t[1]-t[0]||.25:t.step}function Ds(){const{translations:e}=u(),t=d(e,"Speed"),s=Zt,n=Yt,a=Cs;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${i(s)}
      max=${i(n)}
      step=${i(a)}
      key-step=${i(a)}
    >
      ${H()}${U()}
    </media-speed-slider>
  `}function Ms(){const{remote:e,qualities:t}=k(),{autoQuality:s,canSetQuality:n,qualities:a}=$(),{translations:l}=u(),r="Auto";return h(()=>!n()||a().length<=1)()?null:_({label:d(l,r),children:Y({label:r,checked:s,onChange(c,b){c?e.requestAutoQuality(b):e.changeQuality(t.selectedIndex,b)}})})}function Os(){return i(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:s,qualities:n,quality:a}=$(),l=h(()=>!s()||n().length<=1),r=h(()=>Ie(n()));return l()?null:w({label:d(t,"Quality"),value:i(()=>{var m,f;const p=(m=a())==null?void 0:m.height,c=e()?null:(f=a())==null?void 0:f.bitrate,b=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,v=S(t,"Auto");return p?`${p}p${b?` (${b})`:""}`:v}),children:[Z({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:Ps(),isMin:()=>r()[0]===a(),isMax:()=>r().at(-1)===a()}),Ms()]})})}function Ps(){const{translations:e}=u(),t=d(e,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${H()}${U()}
    </media-quality-slider>
  `}function Xt({placement:e,portal:t,tooltip:s}){return i(()=>{const{viewType:n}=$(),{translations:a,menuPortal:l,noModal:r,menuGroup:p,smallWhen:c}=u(),b=h(()=>r()?K(e):c()?null:K(e)),v=h(()=>!c()&&p()==="bottom"&&n()==="video"?26:0),m=x(!1);He();function f(){m.set(!0)}function g(){m.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i(b)}
        offset=${i(v)}
      >
        ${i(()=>m()?[ks(),vs(),bs(),Ss()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${f} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(a,"Settings")}
            >
              ${T("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${ut(s)?i(s):s}
          >
            ${d(a,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?zt(l,y):y}
      </media-menu>
    `})}function bt({orientation:e,tooltip:t}){return i(()=>{const{pointer:s,muted:n,canSetVolume:a}=$();if(s()==="coarse"&&!n())return null;if(!a())return wt({tooltip:t});const l=x(void 0),r=he(l);return o`
      <div class="vds-volume" ?data-active=${i(r)} ${q(l.set)}>
        ${wt({tooltip:t})}
        <div class="vds-volume-popup">${Is({orientation:e})}</div>
      </div>
    `})}function Is({orientation:e}={}){const{translations:t}=u(),s=d(t,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${Be(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function ht(){const e=x(void 0),t=x(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:a,disableTimeSlider:l,seekStep:r,noScrubGesture:p}=u(),c=d(n,"Seek"),b=i(l),v=i(()=>t()<a()),m=i(s);return Gt(e,()=>{const f=e();f&&t.set(f.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${i(r)}
      ?disabled=${b}
      ?no-swipe-gesture=${i(p)}
      ${q(e.set)}
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
  `}function As(){return o`
    <div class="vds-time-group">
      ${i(()=>{const{duration:e}=$();return e()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Gs(){return i(()=>{const{live:e,duration:t}=$();return e()?Et():t()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function Jt(){return i(()=>{const{live:e}=$();return e()?Et():As()})}function te(){return i(()=>{const{textTracks:e}=k(),{title:t,started:s}=$(),n=x(null);return At(e,"chapters",n.set),n()&&(s()||!t())?ee():o`<media-title class="vds-chapter-title"></media-title>`})}function ee(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class se extends Fe{async Pf(){const t=(await ge(async()=>{const{icons:n}=await import("./vidstack-CmqqnRgc-wTJlaeOL.js");return{icons:n}},__vite__mapDeps([0,1]))).icons,s={};for(const n of Object.keys(t))s[n]=Ne({name:n,paths:t[n]});return s}}var O;let Bs=(O=class extends G{},O.props={...tt(O,O,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},O);function Fs(){return[dt(),vt(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Ct({backward:!0,tooltip:"top start"}),j({tooltip:"top"}),Ct({tooltip:"top"}),Ns(),ht(),Gs(),bt({orientation:"vertical",tooltip:"top"}),pt({tooltip:"top"}),mt(),ct({tooltip:"top"}),Ls()]}
        </media-controls-group>
      </media-controls>
    `]}function Ns(){return i(()=>{let e=x(void 0),t=x(!1),s=k(),{title:n,started:a,currentTime:l,ended:r}=$(),{translations:p}=u(),c=Me(e),b=()=>a()||l()>0;const v=()=>{const g=r()?"Replay":b()?"Continue":"Play";return`${S(p,g)}: ${n()}`};C(()=>{var g;c()&&document.activeElement===document.body&&((g=s.player.el)==null||g.focus())});function m(){const g=e(),y=!!g&&!c()&&g.clientWidth<g.children[0].clientWidth;g&&Oe(g,"vds-marquee",y),t.set(y)}function f(){return o`
        <span class="vds-title-text">
          ${i(v)}${i(()=>b()?ee():null)}
        </span>
      `}return Gt(e,m),n()?o`
          <span class="vds-title" title=${i(v)} ${q(e.set)}>
            ${[f(),i(()=>t()&&!c()?f():null)]}
          </span>
        `:D()})}function Ls(){const e="top end";return[jt({tooltip:"top",placement:e,portal:!0}),Xt({tooltip:"top end",placement:e,portal:!0})]}const E=class E extends Bt(Nt,Bs){constructor(){super(...arguments),this.en=x(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=k(),this.classList.add("vds-audio-layout"),this.Fn()}onConnect(){_t("audio",()=>this.isMatch),this.En()}render(){return i(this.Zm.bind(this))}Zm(){return this.isMatch?Fs():null}En(){const{menuPortal:t}=u();C(()=>{if(!this.isMatch)return;const s=qt(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Vt(n):new se(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})}Fn(){const{pointer:t}=this.a.$state;C(()=>{t()==="coarse"&&C(this.rn.bind(this))})}rn(){if(!this.en()){et(this,"pointerdown",this.sn.bind(this),{capture:!0});return}et(this,"pointerdown",t=>t.stopPropagation()),et(window,"pointerdown",this.tn.bind(this))}sn(t){const{target:s}=t;De(s)&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}};E.tagName="media-audio-layout",E.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let ot=E;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=Lt(class extends Le{constructor(){super(...arguments),this.key=it}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(Ve(e),this.key=t),s}}),L=class L extends G{};L.props={...tt(L,L,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380};let lt=L;function ne(){return i(()=>{const e=k(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=u();if(h(()=>t()||!s())())return null;const a=x(!1),{lastKeyboardAction:l}=e.$state;C(()=>{a.set(!!l());const m=setTimeout(()=>a.set(!1),500);return()=>{a.set(!1),window.clearTimeout(m)}});const r=h(()=>{var f;const m=(f=l())==null?void 0:f.action;return m&&a()?V(m):null}),p=h(()=>`vds-kb-action${a()?"":" hidden"}`),c=h(Rs),b=h(()=>{const m=Ws();return m?Pe(m):null});function v(){const m=b();return m?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return o`
      <div class=${i(p)} data-action=${i(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(c)}</div>
        </div>
        ${i(()=>Vs(l(),v()))}
      </div>
    `})}function Rs(){var n;const{$state:e}=k(),t=(n=e.lastKeyboardAction())==null?void 0:n.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":Mt(e.volume(),s);case"volumeUp":case"volumeDown":return Mt(e.volume(),s);default:return""}}function Mt(e,t){return`${Math.round(e*t*100)}%`}function Ws(){var s;const{$state:e}=k();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function _s(){return[dt(),ae(),X(),ne(),vt(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[Qs(),D(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,D(),o`
            <media-controls-group class="vds-controls-group">
              ${ht()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[j({tooltip:"top start"}),bt({orientation:"horizontal",tooltip:"top"}),Jt(),te(),pt({tooltip:"top"}),Ks(),ct({tooltip:"top"}),Kt({tooltip:"top"}),mt(),Ke(),Qt({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Ks(){return i(()=>{const{menuGroup:e}=u();return e()==="bottom"?gt():null})}function Qs(){return o`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{const{menuGroup:e}=u();return e()==="top"?[D(),gt()]:null})}
    </media-controls-group>
  `}function Es(){return[dt(),ae(),X(),vt(),ne(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[ct({tooltip:"top start"}),Kt({tooltip:"bottom start"}),D(),pt({tooltip:"bottom"}),mt(),gt(),bt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[D(),j({tooltip:"top"}),D()]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group">
          ${[Jt(),te(),Qt({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${ht()}
        </media-controls-group>
      </media-controls>
    `,qs()]}function zs(){return o`
    <div class="vds-load-container">
      ${[X(),j({tooltip:"top"})]}
    </div>
  `}function qs(){return i(()=>{const{duration:e}=$();return e()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function X(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function gt(){const{menuGroup:e,smallWhen:t}=u(),s=()=>e()==="top"||t()?"bottom":"top",n=h(()=>`${s()} ${e()==="top"?"end":"center"}`),a=h(()=>`${s()} end`);return[jt({tooltip:n,placement:a,portal:!0}),Xt({tooltip:n,placement:a,portal:!0})]}function ae(){return i(()=>{const{noGestures:e}=u();return e()?null:o`
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
    `})}const z=class z extends Bt(Nt,lt){onSetup(){this.forwardKeepAlive=!1,this.a=k(),this.classList.add("vds-video-layout")}onConnect(){_t("video",()=>this.isMatch),this.En()}render(){return i(this.Zm.bind(this))}En(){const{menuPortal:t}=u();C(()=>{if(!this.isMatch)return;const s=qt(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Vt(n):new se(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})}Zm(){const{load:t}=this.a.$props,{canLoad:s,streamType:n,nativeControls:a}=this.a.$state;return!a()&&this.isMatch?t()==="play"&&!s()?zs():n()==="unknown"?X():this.isSmallLayout?Es():_s():null}};z.tagName="media-video-layout",z.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let rt=z;Ft(ot);Ft(rt);
