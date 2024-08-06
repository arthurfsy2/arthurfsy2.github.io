const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-OENSM7UP-CxuX_qgb.js","assets/vidstack-R2Q3NYNU-CkXr2CRQ.js"])))=>i.map(i=>d[i]);
var Ie=Object.getPrototypeOf;var Ge=Reflect.get;var Dt=t=>{throw TypeError(t)};var mt=(t,e,a)=>e.has(t)||Dt("Cannot "+a);var k=(t,e,a)=>(mt(t,e,"read from private field"),a?a.call(t):e.get(t)),I=(t,e,a)=>e.has(t)?Dt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),et=(t,e,a,s)=>(mt(t,e,"write to private field"),s?s.call(t,a):e.set(t,a),a),A=(t,e,a)=>(mt(t,e,"access private method"),a);var vt=(t,e,a)=>Ge(Ie(t),a,e);import{ai as Te,F as G,a6 as C,ao as U,L as V,bp as $,bq as zt,q as Oe,a5 as We,aj as b,aa as Be,R as x,n as Le,ak as qt,au as Ft,r as _,ax as Ke,br as Ht,aO as De,a_ as qe,an as Nt,bs as at,E as xt,bt as Fe,bu as Ut,bv as Re,v as Ee,a as Qe,u as je,I as K,A as ze,a$ as He,ar as Ne,aH as Vt,s as $t,aw as Ue,bw as Ve,bx as _e,by as Xe,aY as _t}from"./app-DuOX08xf.js";import{e as Xt,c as Ye,x as Je,W as Ze,T as i,l as ta,S as Yt,i as ea,a as aa}from"./vidstack-CCM3MRIS-BzTJB3Yc.js";import{A as ft,x as n,a as sa,l as ia,t as Jt}from"./vidstack-X3U7UG6U-B9xcI1mI.js";const bt=new WeakMap,nt=Xt(class extends Ye{render(t){return ft}update(t,[e]){var a;const s=e!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.dt=(a=t.options)===null||a===void 0?void 0:a.host,this.ot(this.lt=t.element)),ft}ot(t){var e;if(typeof this.G=="function"){const a=(e=this.dt)!==null&&e!==void 0?e:globalThis;let s=bt.get(a);s===void 0&&(s=new WeakMap,bt.set(a,s)),s.get(this.G)!==void 0&&this.G.call(this.dt,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,a;return typeof this.G=="function"?(e=bt.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(a=this.G)===null||a===void 0?void 0:a.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Zt=Ke();function r(){return Te(Zt)}function te(t,e){G(()=>{let{player:a}=C(),s=a.el;return s&&U(s,"data-layout",e()&&t),()=>s==null?void 0:s.removeAttribute("data-layout")})}function ee(t,e){return n`
    <media-menu-portal .container=${i(t)} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function ae(t,e,a,s){let o=V(e)?document.querySelector(e):e;o||(o=t==null?void 0:t.closest("dialog")),o||(o=document.body);let l=document.createElement("div");l.style.display="contents",l.classList.add(a),o.append(l),G(()=>{if(!l)return;let{viewType:p}=$(),c=s();U(l,"data-view-type",p()),U(l,"data-sm",c),U(l,"data-lg",!c),U(l,"data-size",c?"sm":"lg")});let{colorScheme:u}=r();return zt(l,u),l}var se=class extends Je{async loadIcons(){let t=(await Oe(async()=>{const{icons:a}=await import("./vidstack-OENSM7UP-CxuX_qgb.js");return{icons:a}},__vite__mapDeps([0,1]))).icons,e={};for(let a of Object.keys(t))e[a]=Ze({name:a,paths:t[a]});return e}},na={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1},X,Q,W,Y,yt,j,st=(j=class extends We{constructor(){super(...arguments);I(this,Y);I(this,X);I(this,Q,b(()=>{let a=this.$props.when();return A(this,Y,yt).call(this,a)}));I(this,W,b(()=>{let a=this.$props.smallWhen();return A(this,Y,yt).call(this,a)}))}get isMatch(){return k(this,Q).call(this)}get isSmallLayout(){return k(this,W).call(this)}onSetup(){et(this,X,C()),this.setAttributes({"data-match":k(this,Q),"data-sm":()=>k(this,W).call(this)?"":null,"data-lg":()=>k(this,W).call(this)?null:"","data-size":()=>k(this,W).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),Be(Zt,{...this.$props,when:k(this,Q),smallWhen:k(this,W),userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),menuPortal:x(null)})}onAttach(a){zt(a,this.$props.colorScheme)}},X=new WeakMap,Q=new WeakMap,W=new WeakMap,Y=new WeakSet,yt=function(a){return a!=="never"&&(Le(a)?a:b(()=>a(k(this,X).player.state))())},j.props=na,j);qt([Ft],st.prototype,"isMatch",1),qt([Ft],st.prototype,"isSmallLayout",1);function w(t,e){var a;return((a=t())==null?void 0:a[e])??e}function kt(){return i(()=>{let{translations:t,userPrefersAnnouncements:e}=r();return e()?n`<media-announcer .translations=${i(t)}></media-announcer>`:null})}function M(t,e=""){return n`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function Z(t){return t.map(e=>M(e))}function d(t,e){return i(()=>w(t,e))}function wt({tooltip:t}){let{translations:e}=r(),{remotePlaybackState:a}=$(),s=i(()=>{let l=w(e,"AirPlay"),u=Ht(a());return`${l} ${u}`}),o=d(e,"AirPlay");return n`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${s}>
          ${M("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ie({tooltip:t}){let{translations:e}=r(),{remotePlaybackState:a}=$(),s=i(()=>{let l=w(e,"Google Cast"),u=Ht(a());return`${l} ${u}`}),o=d(e,"Google Cast");return n`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${s}>
          ${M("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ot({tooltip:t}){let{translations:e}=r(),a=d(e,"Play"),s=d(e,"Pause");return n`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(e,"Play")}
        >
          ${Z(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${a}</span>
        <span class="vds-pause-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Rt({tooltip:t,ref:e=Re}){let{translations:a}=r(),s=d(a,"Mute"),o=d(a,"Unmute");return n`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(a,"Mute")}
          ${nt(e)}
        >
          ${Z(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${o}</span>
        <span class="vds-unmute-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function St({tooltip:t}){let{translations:e}=r(),a=d(e,"Closed-Captions On"),s=d(e,"Closed-Captions Off");return n`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(e,"Captions")}
        >
          ${Z(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${s}</span>
        <span class="vds-cc-off-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function oa(){let{translations:t}=r(),e=d(t,"Enter PiP"),a=d(t,"Exit PiP");return n`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(t,"PiP")}
        >
          ${Z(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ne({tooltip:t}){let{translations:e}=r(),a=d(e,"Enter Fullscreen"),s=d(e,"Exit Fullscreen");return n`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(e,"Fullscreen")}
        >
          ${Z(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${a}</span>
        <span class="vds-fs-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Et({backward:t,tooltip:e}){let{translations:a,seekStep:s}=r(),o=t?"Seek Backward":"Seek Forward",l=d(a,o);return n`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${i(()=>(t?-1:1)*s())}
          aria-label=${l}
        >
          ${M(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${d(a,o)}
      </media-tooltip-content>
    </media-tooltip>
  `}function oe(){let{translations:t}=r(),{live:e}=$(),a=d(t,"Skip To Live"),s=d(t,"LIVE");return e()?n`
        <media-live-button class="vds-live-button" aria-label=${a}>
          <span class="vds-live-button-text">${s}</span>
        </media-live-button>
      `:null}function Ct(){return i(()=>{let{download:t,translations:e}=r(),a=t();if(De(a))return null;let{source:s,title:o}=$(),l=s(),u=qe({title:o(),src:l,download:a});return u?n`
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
        `:null})}function Mt(){let{translations:t}=r();return n`
    <media-captions
      class="vds-captions"
      .exampleText=${d(t,"Captions look like this")}
    ></media-captions>
  `}function T(){return n`<div class="vds-controls-spacer"></div>`}function le({placement:t,tooltip:e,portal:a}){let{textTracks:s}=C(),{viewType:o,clipStartTime:l,clipEndTime:u}=$(),{translations:p,thumbnails:c,menuPortal:f,noModal:m,menuGroup:v,smallWhen:h}=r();if(b(()=>{var Bt,Lt;let Pe=l(),Ae=u()||1/0,Wt=x(null);return Nt(s,"chapters",Wt.set),!((Lt=(Bt=Wt())==null?void 0:Bt.cues.filter(Kt=>Kt.startTime<=Ae&&Kt.endTime>=Pe))!=null&&Lt.length)})())return null;let g=b(()=>m()?at(t):h()?null:at(t)),y=b(()=>!h()&&v()==="bottom"&&o()==="video"?26:0),D=x(!1);function pt(){D.set(!0)}function Me(){D.set(!1)}let Ot=n`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(g)}
      offset=${i(y)}
    >
      ${i(()=>D()?n`
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
  `;return n`
    <media-menu class="vds-chapters-menu vds-menu" @open=${pt} @close=${Me}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${M("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${xt(e)?i(e):e}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${a?ee(f,Ot):Ot}
    </media-menu>
  `}function ht(t){let{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}var Pt={type:"color"},la={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},ra={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},da={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},ua={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},it={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},R=Object.keys(it).reduce((t,e)=>({...t,[e]:x(it[e])}),{});for(let t of Object.keys(R)){let e=localStorage.getItem(`vds-player:${_(t)}`);V(e)&&R[t].set(e)}function ca(){for(let t of Object.keys(R)){let e=it[t];R[t].set(e)}}var Qt=!1,gt=new Set;function pa(){let{player:t}=C();gt.add(t),Ee(()=>gt.delete(t)),Qt||(Qe(()=>{for(let e of je(R)){let a=R[e],s=it[e],o=`--media-user-${_(e)}`,l=`vds-player:${_(e)}`;G(()=>{var f;let u=a(),p=u===s,c=p?null:ma(t,e,u);for(let m of gt)(f=m.el)==null||f.style.setProperty(o,c);p?localStorage.removeItem(l):localStorage.setItem(l,u)})}},null),Qt=!0)}function ma(t,e,a){var s;switch(e){case"fontFamily":let o=a==="capitals"?"small-caps":"";return(s=t.el)==null||s.style.setProperty("--media-user-font-variant",o),$a(a);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return va(a);case"textColor":return`rgb(${ht(a)} / var(--media-user-text-opacity, 1))`;case"textShadow":return ba(a);case"textBg":return`rgb(${ht(a)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${ht(a)} / var(--media-user-display-bg-opacity, 1))`}}function va(t){return(parseInt(t)/100).toString()}function $a(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function ba(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}var ha=0;function P({label:t="",value:e="",children:a}){if(!t)return n`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${a}</div>
      </div>
    `;let s=`vds-menu-section-${++ha}`;return n`
    <section class="vds-menu-section" role="group" aria-labelledby=${s}>
      <div class="vds-menu-section-title">
        <header id=${s}>${t}</header>
        ${e?n`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${a}</div>
    </section>
  `}function tt({label:t,children:e}){return n`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function E({label:t,icon:e,hint:a}){return n`
    <media-menu-button class="vds-menu-item">
      ${M("menu-arrow-left","vds-menu-close-icon")}
      ${e?M(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${i(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${a?i(a):null} </span>
      ${M("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function ga({value:t=null,options:e,hideLabel:a=!1,children:s=null,onChange:o=null}){function l(u){let{value:p,label:c}=u;return n`
      <media-radio class="vds-radio" value=${p}>
        ${M("menu-radio-check")}
        ${a?null:n`
              <span class="vds-radio-label" data-part="label">
                ${V(c)?c:i(c)}
              </span>
            `}
        ${xt(s)?s(u):s}
      </media-radio>
    `}return n`
    <media-radio-group
      class="vds-radio-group"
      value=${V(t)?t:t?i(t):""}
      @change=${o}
    >
      ${K(e)?e.map(l):i(()=>e().map(l))}
    </media-radio-group>
  `}function fa(t){return K(t)?t.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(t).map(e=>({label:e,value:t[e]}))}function lt(){return n`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function rt(){return n`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function dt({label:t=null,value:e=null,upIcon:a="",downIcon:s="",children:o,isMin:l,isMax:u}){let p=t||e,c=[s?M(s,"down"):null,o,a?M(a,"up"):null];return n`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${i(()=>l()?"":null)}
      data-max=${i(()=>u()?"":null)}
    >
      ${p?n`
            <div class="vds-menu-slider-title">
              ${[t?n`<div>${t}</div>`:null,e?n`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}var ya={...ra,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},At={...da,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function xa(){return i(()=>{let{hasCaptions:t}=$(),{translations:e}=r();return t()?n`
      <media-menu class="vds-font-menu vds-menu">
        ${E({label:()=>w(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[P({label:d(e,"Font"),children:[ka(),wa()]}),P({label:d(e,"Text"),children:[Sa(),Ma(),Ca()]}),P({label:d(e,"Text Background"),children:[Pa(),Aa()]}),P({label:d(e,"Display Background"),children:[Ia(),Ga()]}),P({children:[Ta()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function ka(){return O({label:"Family",option:la,type:"fontFamily"})}function wa(){return O({label:"Size",option:ya,type:"fontSize"})}function Sa(){return O({label:"Color",option:Pt,type:"textColor"})}function Ca(){return O({label:"Opacity",option:At,type:"textOpacity"})}function Ma(){return O({label:"Shadow",option:ua,type:"textShadow"})}function Pa(){return O({label:"Color",option:Pt,type:"textBg"})}function Aa(){return O({label:"Opacity",option:At,type:"textBgOpacity"})}function Ia(){return O({label:"Color",option:Pt,type:"displayBg"})}function Ga(){return O({label:"Opacity",option:At,type:"displayBgOpacity"})}function Ta(){let{translations:t}=r();return n`
    <button class="vds-menu-item" role="menuitem" @click=${ca}>
      <span class="vds-menu-item-label">${i(()=>w(t,"Reset"))}</span>
    </button>
  `}function O({label:t,option:e,type:a}){let{player:s}=C(),{translations:o}=r(),l=R[a],u=()=>w(o,t);function p(){Ne(),s.dispatchEvent(new Event("vds-font-change"))}if(e.type==="color"){let m=function(v){l.set(v.target.value),p()};return tt({label:i(u),children:n`
        <input
          class="vds-color-picker"
          type="color"
          .value=${i(l)}
          @input=${m}
        />
      `})}if(e.type==="slider"){let m=function(pt){l.set(pt.detail+"%"),p()},{min:v,max:h,step:g,upIcon:y,downIcon:D}=e;return dt({label:i(u),value:i(l),upIcon:y,downIcon:D,isMin:()=>l()===v+"%",isMax:()=>l()===h+"%",children:n`
        <media-slider
          class="vds-slider"
          min=${v}
          max=${h}
          step=${g}
          key-step=${g}
          .value=${i(()=>parseInt(l()))}
          aria-label=${i(u)}
          @value-change=${m}
          @drag-value-change=${m}
        >
          ${lt()}${rt()}
        </media-slider>
      `})}let c=fa(e.values),f=()=>{var h;let m=l(),v=((h=c.find(g=>g.value===m))==null?void 0:h.label)||"";return w(o,V(v)?v:v())};return n`
    <media-menu class=${`vds-${_(a)}-menu vds-menu`}>
      ${E({label:u,hint:f})}
      <media-menu-items class="vds-menu-items">
        ${ga({value:l,options:c,onChange({detail:m}){l.set(m),p()}})}
      </media-menu-items>
    </media-menu>
  `}function ut({label:t,checked:e,defaultChecked:a=!1,storageKey:s,onChange:o}){let{translations:l}=r(),u=s?localStorage.getItem(s):null,p=x(!!(u??a)),c=x(!1),f=i(ia(p)),m=d(l,t);s&&o(ze(p)),e&&G(()=>void p.set(e()));function v(y){(y==null?void 0:y.button)!==1&&(p.set(D=>!D),s&&localStorage.setItem(s,p()?"1":""),o(p(),y),c.set(!1))}function h(y){He(y)&&v()}function g(y){y.button===0&&c.set(!0)}return n`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${m}
      aria-checked=${f}
      data-active=${i(()=>c()?"":null)}
      @pointerup=${v}
      @pointerdown=${g}
      @keydown=${h}
    ></div>
  `}function Oa(){return i(()=>{let{translations:t}=r();return n`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${E({label:()=>w(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[P({children:[Wa(),Ba()]}),P({children:[xa()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Wa(){let{userPrefersAnnouncements:t,translations:e}=r(),a="Announcements";return tt({label:d(e,a),children:ut({label:a,storageKey:"vds-player::announcements",onChange(s){t.set(s)}})})}function Ba(){return i(()=>{let{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:a}=r(),{viewType:s}=$();if(b(()=>s()!=="video"||a())())return null;let o="Keyboard Animations";return tt({label:d(t,o),children:ut({label:o,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(l){e.set(l)}})})})}function La(){return i(()=>{let{noAudioGain:t,translations:e}=r(),{audioTracks:a,canSetAudioGain:s}=$();return b(()=>!(s()&&!t())&&a().length<=1)()?null:n`
      <media-menu class="vds-audio-menu vds-menu">
        ${E({label:()=>w(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[Ka(),Da()]}
        </media-menu-items>
      </media-menu>
    `})}function Ka(){return i(()=>{let{translations:t}=r(),{audioTracks:e}=$(),a=d(t,"Default");return b(()=>e().length<=1)()?null:P({children:n`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${E({label:()=>w(t,"Track")})}
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
      `})})}function Da(){return i(()=>{let{noAudioGain:t,translations:e}=r(),{canSetAudioGain:a}=$();if(b(()=>!a()||t())())return null;let{audioGain:s}=$();return P({label:d(e,"Boost"),value:i(()=>Math.round(((s()??1)-1)*100)+"%"),children:[dt({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:qa(),isMin:()=>((s()??1)-1)*100<=re(),isMax:()=>((s()??1)-1)*100===de()})]})})}function qa(){let{translations:t}=r(),e=d(t,"Boost"),a=re,s=de,o=Fa;return n`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${i(a)}
      max=${i(s)}
      step=${i(o)}
      key-step=${i(o)}
    >
      ${lt()}${rt()}
    </media-audio-gain-slider>
  `}function re(){let{audioGains:t}=r(),e=t();return K(e)?e[0]??0:e.min}function de(){let{audioGains:t}=r(),e=t();return K(e)?e[e.length-1]??300:e.max}function Fa(){let{audioGains:t}=r(),e=t();return K(e)?e[1]-e[0]||25:e.step}function Ra(){return i(()=>{let{translations:t}=r(),{hasCaptions:e}=$(),a=d(t,"Off");return e()?n`
      <media-menu class="vds-captions-menu vds-menu">
        ${E({label:()=>w(t,"Captions"),icon:"menu-captions"})}
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
    `:null})}function Ea(){return i(()=>{let{translations:t}=r();return n`
      <media-menu class="vds-playback-menu vds-menu">
        ${E({label:()=>w(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[P({children:Qa()}),ja(),Ua()]}
        </media-menu-items>
      </media-menu>
    `})}function Qa(){let{remote:t}=C(),{translations:e}=r(),a="Loop";return tt({label:d(e,a),children:ut({label:a,storageKey:"vds-player::user-loop",onChange(s,o){t.userPrefersLoopChange(s,o)}})})}function ja(){return i(()=>{let{translations:t}=r(),{canSetPlaybackRate:e,playbackRate:a}=$();return e()?P({label:d(t,"Speed"),value:i(()=>a()===1?w(t,"Normal"):a()+"x"),children:[dt({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Ha(),isMin:()=>a()===ue(),isMax:()=>a()===ce()})]}):null})}function ue(){let{playbackRates:t}=r(),e=t();return K(e)?e[0]??0:e.min}function ce(){let{playbackRates:t}=r(),e=t();return K(e)?e[e.length-1]??2:e.max}function za(){let{playbackRates:t}=r(),e=t();return K(e)?e[1]-e[0]||.25:e.step}function Ha(){let{translations:t}=r(),e=d(t,"Speed"),a=ue,s=ce,o=za;return n`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${i(a)}
      max=${i(s)}
      step=${i(o)}
      key-step=${i(o)}
    >
      ${lt()}${rt()}
    </media-speed-slider>
  `}function Na(){let{remote:t,qualities:e}=C(),{autoQuality:a,canSetQuality:s,qualities:o}=$(),{translations:l}=r(),u="Auto";return b(()=>!s()||o().length<=1)()?null:tt({label:d(l,u),children:ut({label:u,checked:a,onChange(p,c){p?t.requestAutoQuality(c):t.changeQuality(e.selectedIndex,c)}})})}function Ua(){return i(()=>{let{hideQualityBitrate:t,translations:e}=r(),{canSetQuality:a,qualities:s,quality:o}=$(),l=b(()=>!a()||s().length<=1),u=b(()=>sa(s()));return l()?null:P({label:d(e,"Quality"),value:i(()=>{var v,h;let p=(v=o())==null?void 0:v.height,c=t()?null:(h=o())==null?void 0:h.bitrate,f=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,m=w(e,"Auto");return p?`${p}p${f?` (${f})`:""}`:m}),children:[dt({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:Va(),isMin:()=>u()[0]===o(),isMax:()=>u().at(-1)===o()}),Na()]})})}function Va(){let{translations:t}=r(),e=d(t,"Quality");return n`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${lt()}${rt()}
    </media-quality-slider>
  `}function pe({placement:t,portal:e,tooltip:a}){return i(()=>{let{viewType:s}=$(),{translations:o,menuPortal:l,noModal:u,menuGroup:p,smallWhen:c}=r(),f=b(()=>u()?at(t):c()?null:at(t)),m=b(()=>!c()&&p()==="bottom"&&s()==="video"?26:0),v=x(!1);pa();function h(){v.set(!0)}function g(){v.set(!1)}let y=n`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i(f)}
        offset=${i(m)}
      >
        ${i(()=>v()?[Ea(),Oa(),La(),Ra()]:null)}
      </media-menu-items>
    `;return n`
      <media-menu class="vds-settings-menu vds-menu" @open=${h} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(o,"Settings")}
            >
              ${M("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${xt(a)?i(a):a}
          >
            ${d(o,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?ee(l,y):y}
      </media-menu>
    `})}function It({orientation:t,tooltip:e}){return i(()=>{let{pointer:a,muted:s,canSetVolume:o}=$();if(a()==="coarse"&&!s())return null;if(!o())return Rt({tooltip:e});let l=x(void 0),u=Fe(l);return n`
      <div class="vds-volume" ?data-active=${i(u)} ${nt(l.set)}>
        ${Rt({tooltip:e})}
        <div class="vds-volume-popup">${_a({orientation:t})}</div>
      </div>
    `})}function _a({orientation:t}={}){let{translations:e}=r(),a=d(e,"Volume");return n`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${a}
      orientation=${ta(t)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function Gt(){let t=x(void 0),e=x(0),{thumbnails:a,translations:s,sliderChaptersMinWidth:o,disableTimeSlider:l,seekStep:u,noScrubGesture:p}=r(),c=d(s,"Seek"),f=i(l),m=i(()=>e()<o()),v=i(a);return Ut(t,()=>{let h=t();h&&e.set(h.clientWidth)}),n`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${i(u)}
      ?disabled=${f}
      ?no-swipe-gesture=${i(p)}
      ${nt(t.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${m}>
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
          .src=${v}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Xa(){return n`
    <div class="vds-time-group">
      ${i(()=>{let{duration:t}=$();return t()?[n`<media-time class="vds-time" type="current"></media-time>`,n`<div class="vds-time-divider">/</div>`,n`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Ya(){return i(()=>{let{live:t,duration:e}=$();return t()?oe():e()?n`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function me(){return i(()=>{let{live:t}=$();return t()?oe():Xa()})}function ve(){return i(()=>{let{textTracks:t}=C(),{title:e,started:a}=$(),s=x(null);return Nt(t,"chapters",s.set),s()&&(a()||!e())?$e():n`<media-title class="vds-chapter-title"></media-title>`})}function $e(){return n`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}var B,Ja=(B=class extends st{},B.props={...vt(B,B,"props"),when:({viewType:e})=>e==="audio",smallWhen:({width:e})=>e<576},B);function Za(){return[kt(),Mt(),n`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Et({backward:!0,tooltip:"top start"}),ot({tooltip:"top"}),Et({tooltip:"top"}),ts(),Gt(),Ya(),It({orientation:"vertical",tooltip:"top"}),St({tooltip:"top"}),Ct(),wt({tooltip:"top"}),es()]}
        </media-controls-group>
      </media-controls>
    `]}function ts(){return i(()=>{let t=x(void 0),e=x(!1),a=C(),{title:s,started:o,currentTime:l,ended:u}=$(),{translations:p}=r(),c=Ve(t),f=()=>o()||l()>0,m=()=>{let g=u()?"Replay":f()?"Continue":"Play";return`${w(p,g)}: ${s()}`};G(()=>{var g;c()&&document.activeElement===document.body&&((g=a.player.el)==null||g.focus({preventScroll:!0}))});function v(){let g=t(),y=!!g&&!c()&&g.clientWidth<g.children[0].clientWidth;g&&_e(g,"vds-marquee",y),e.set(y)}function h(){return n`
        <span class="vds-title-text">
          ${i(m)}${i(()=>f()?$e():null)}
        </span>
      `}return Ut(t,v),s()?n`
          <span class="vds-title" title=${i(m)} ${nt(t.set)}>
            ${[h(),i(()=>e()&&!c()?h():null)]}
          </span>
        `:T()})}function es(){let t="top end";return[le({tooltip:"top",placement:t,portal:!0}),pe({tooltip:"top end",placement:t,portal:!0})]}var J,z,S,be,he,ge,fe,ye,xe,q,as=(q=class extends Vt(Jt,Ja){constructor(){super(...arguments);I(this,S);I(this,J);I(this,z,x(!1))}onSetup(){this.forwardKeepAlive=!1,et(this,J,C()),this.classList.add("vds-audio-layout"),A(this,S,ge).call(this)}onConnect(){te("audio",()=>this.isMatch),A(this,S,he).call(this)}render(){return i(A(this,S,be).bind(this))}},J=new WeakMap,z=new WeakMap,S=new WeakSet,be=function(){return this.isMatch?Za():null},he=function(){let{menuPortal:a}=r();G(()=>{if(!this.isMatch)return;let s=ae(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),o=s?[this,s]:[this];return(this.$props.customIcons()?new Yt(o):new se(o)).connect(),a.set(s),()=>{s.remove(),a.set(null)}})},ge=function(){let{pointer:a}=k(this,J).$state;G(()=>{a()==="coarse"&&G(A(this,S,fe).bind(this))})},fe=function(){if(!k(this,z).call(this)){$t(this,"pointerdown",A(this,S,ye).bind(this),{capture:!0});return}$t(this,"pointerdown",a=>a.stopPropagation()),$t(window,"pointerdown",A(this,S,xe).bind(this))},ye=function(a){let{target:s}=a;Ue(s)&&s.closest(".vds-time-slider")&&(a.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),k(this,z).set(!0))},xe=function(){k(this,z).set(!1),this.removeAttribute("data-scrubbing")},q.tagName="media-audio-layout",q.attrs={smallWhen:{converter(a){return a!=="never"&&!!a}}},q);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=Xt(class extends ea{constructor(){super(...arguments),this.key=ft}render(t,e){return this.key=t,e}update(t,[e,a]){return e!==this.key&&(aa(t),this.key=e),a}});var L,is=(L=class extends st{},L.props={...vt(L,L,"props"),when:({viewType:e})=>e==="video",smallWhen:({width:e,height:a})=>e<576||a<380},L);function ke(){return i(()=>{let t=C(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:a}=r();if(b(()=>e()||!a())())return null;let s=x(!1),{lastKeyboardAction:o}=t.$state;G(()=>{s.set(!!o());let m=setTimeout(()=>s.set(!1),500);return()=>{s.set(!1),window.clearTimeout(m)}});let l=b(()=>{var v;let m=(v=o())==null?void 0:v.action;return m&&s()?_(m):null}),u=b(()=>`vds-kb-action${s()?"":" hidden"}`),p=b(ns),c=b(()=>{let m=os();return m?Xe(m):null});function f(){let m=c();return m?n`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return n`
      <div class=${i(u)} data-action=${i(l)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(p)}</div>
        </div>
        ${i(()=>ss(o(),f()))}
      </div>
    `})}function ns(){var s;let{$state:t}=C(),e=(s=t.lastKeyboardAction())==null?void 0:s.action,a=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":jt(t.volume(),a);case"volumeUp":case"volumeDown":return jt(t.volume(),a);default:return""}}function jt(t,e){return`${Math.round(t*e*100)}%`}function os(){var e;let{$state:t}=C();switch((e=t.lastKeyboardAction())==null?void 0:e.action){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||t.volume()===0?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function ls(){return[kt(),we(),ct(),ke(),Mt(),n`<div class="vds-scrim"></div>`,n`
      <media-controls class="vds-controls">
        ${[ds(),T(),n`<media-controls-group class="vds-controls-group"></media-controls-group>`,T(),n`
            <media-controls-group class="vds-controls-group">
              ${Gt()}
            </media-controls-group>
          `,n`
            <media-controls-group class="vds-controls-group">
              ${[ot({tooltip:"top start"}),It({orientation:"horizontal",tooltip:"top"}),me(),ve(),St({tooltip:"top"}),rs(),wt({tooltip:"top"}),ie({tooltip:"top"}),Ct(),oa(),ne({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function rs(){return i(()=>{let{menuGroup:t}=r();return t()==="bottom"?Tt():null})}function ds(){return n`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{let{menuGroup:t}=r();return t()==="top"?[T(),Tt()]:null})}
    </media-controls-group>
  `}function us(){return[kt(),we(),ct(),Mt(),ke(),n`<div class="vds-scrim"></div>`,n`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[wt({tooltip:"top start"}),ie({tooltip:"bottom start"}),T(),St({tooltip:"bottom"}),Ct(),Tt(),It({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${T()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[T(),ot({tooltip:"top"}),T()]}
        </media-controls-group>

        ${T()}

        <media-controls-group class="vds-controls-group">
          ${[me(),ve(),ne({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Gt()}
        </media-controls-group>
      </media-controls>
    `,ps()]}function cs(){return n`
    <div class="vds-load-container">
      ${[ct(),ot({tooltip:"top"})]}
    </div>
  `}function ps(){return i(()=>{let{duration:t}=$();return t()===0?null:n`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function ct(){return n`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Tt(){let{menuGroup:t,smallWhen:e}=r(),a=()=>t()==="top"||e()?"bottom":"top",s=b(()=>`${a()} ${t()==="top"?"end":"center"}`),o=b(()=>`${a()} end`);return[le({tooltip:s,placement:o,portal:!0}),pe({tooltip:s,placement:o,portal:!0})]}function we(){return i(()=>{let{noGestures:t}=r();return t()?null:n`
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
    `})}var H,N,Se,Ce,F,ms=(F=class extends Vt(Jt,is){constructor(){super(...arguments);I(this,N);I(this,H)}onSetup(){this.forwardKeepAlive=!1,et(this,H,C()),this.classList.add("vds-video-layout")}onConnect(){te("video",()=>this.isMatch),A(this,N,Se).call(this)}render(){return i(A(this,N,Ce).bind(this))}},H=new WeakMap,N=new WeakSet,Se=function(){let{menuPortal:a}=r();G(()=>{if(!this.isMatch)return;let s=ae(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),o=s?[this,s]:[this];return(this.$props.customIcons()?new Yt(o):new se(o)).connect(),a.set(s),()=>{s.remove(),a.set(null)}})},Ce=function(){let{load:a}=k(this,H).$props,{canLoad:s,streamType:o,nativeControls:l}=k(this,H).$state;return!l()&&this.isMatch?a()==="play"&&!s()?cs():o()==="unknown"?ct():this.isSmallLayout?us():ls():null},F.tagName="media-video-layout",F.attrs={smallWhen:{converter(a){return a!=="never"&&!!a}}},F);_t(as);_t(ms);
