"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[17444],{6436:function(e,t,n){n.d(t,{ZP:function(){return x}});var r=n(2784),a=n(95955),s=n.n(a),o=n(34763),l=n(52750),u=n(77498),i=n(33496),c=n(8139),d=n(56239),f=n(43151),h=n(21608),m=n(21068),v=n(57039),b=n(52322);const p="undefined"==typeof window?r.useEffect:r.useLayoutEffect,g=/^\/\d+(\/|$)/;function x(e){var t;const{1:n}=(0,r.useReducer)((()=>({})),{}),{id:a,globalStatusId:x="main",defaultData:_,data:w,schema:S,onChange:y,onPathChange:C,onSubmit:k,onSubmitRequest:Z,onSubmitComplete:j,scrollTopOnSubmit:O,minimumAsyncBehaviorTime:R,asyncSubmitTimeout:F,sessionStorageId:z,ajvInstance:A,transformIn:P,transformOut:E,filterSubmitData:T,filterData:M,locale:D,translations:I,required:B,errorMessages:H,children:N,...L}=e;void 0!==w&&void 0!==z&&console.error("Providing both data and sessionStorageId could lead to competing data sources. To provide default data to use only before anything is changed in the interface, use defaultData.");const $=(0,h.Z)().Form,V=(0,r.useRef)((0,o.Oy)(A)),q=(0,r.useRef)([]),W=(0,r.useRef)(),U=(0,r.useRef)(!1),J=(0,r.useCallback)((e=>{U.current=e,n()}),[]),K=(0,r.useRef)({}),X=(0,r.useCallback)((e=>{Object.assign(K.current,e),n()}),[]),G=(0,r.useRef)(),Q=(0,r.useCallback)((e=>{G.current=e,n()}),[]),Y=(0,r.useRef)({}),ee=(0,r.useRef)({}),te=(0,r.useMemo)((()=>{if(z&&"undefined"!=typeof window){var e;const t=null===(e=window.sessionStorage)||void 0===e?void 0:e.getItem(z);if(t)return JSON.parse(t)}return null!=w?w:_}),[]),ne=(0,r.useRef)(te),re=(0,r.useRef)(),ae=(0,r.useCallback)((()=>{var e;re.current&&(null!==(e=re.current)&&void 0!==e&&e.call(re,ne.current)?W.current=void 0:W.current=(0,o.gs)(re.current.errors,ne.current))}),[]),se=(0,r.useCallback)((()=>{re.current&&(ae(),n())}),[ae]),oe=(0,r.useCallback)(((e,t)=>{var n;return Boolean("error"===t?(null===(n=W.current)||void 0===n?void 0:n[e])instanceof Error||Y.current[e]instanceof Error:ee.current[e]===t)}),[]),le=(0,r.useCallback)((e=>q.current.some((t=>oe(t,e)))),[oe]),ue=(0,r.useCallback)((()=>le("error")),[le]),ie=(0,r.useCallback)(((e,t)=>{Y.current[e]=t}),[]),ce=(0,r.useCallback)(((e,t)=>{t!==ee.current[e]&&(ee.current[e]=t,n())}),[]),de=(0,r.useCallback)((function(e,t,n){return void 0===n&&(n=!1),t?(Object.entries(he.current).forEach((r=>{let[a,o]=r;if(s().has(e,a)){var l;const r=t(a,s().get(e,a),o,{error:null===(l=Y.current)||void 0===l?void 0:l[a]});n?!1===r&&(e=(0,v.ZP)(e),s().remove(e,a)):void 0!==r&&(e=(0,v.ZP)(e),s().set(e,a,r))}})),e):e}),[]),fe=(0,r.useCallback)((function(e,t){return void 0===t&&(t=M||T),t?de(e,t,!0):e}),[M,T,de]),he=(0,r.useRef)({}),me=(0,r.useCallback)(((e,t)=>{he.current[e]={...he.current[e],...t};for(const n in he.current[e])Object.prototype.hasOwnProperty.call(t,n)||delete he.current[e][n]}),[]),ve=(0,r.useCallback)((()=>{for(const e in he.current){const t=he.current[e];if((0,d.S)(t.validator)||(0,d.S)(t.onBlurValidator))return!0}return!1}),[]),be=(0,f.O)(a),pe=(0,f.O)(a+"-attachments"),ge=be.set,xe=be.extend,_e=pe.extend,we=null===(t=pe.data)||void 0===t?void 0:t.rerenderUseDataHook,Se=(0,r.useRef)({data:w,schema:S,shared:be.data,hasUsedInitialData:!1});ne.current=(0,r.useMemo)((()=>(a&&te&&!be.data&&be.update(te),a&&te&&be.data&&Se.current.shared===be.data&&ne.current===te?{...ne.current,...be.data}:a&&!te&&!ne.current&&be.data&&Se.current.shared===be.data?be.data:a&&be.data&&Se.current.shared!==be.data&&be.data!==ne.current?(Se.current.shared=be.data,{...ne.current,...be.data}):w!==Se.current.data?(Se.current.data=w,w):ne.current)),[w,a,te,be]),p((()=>{a&&te&&!be.data&&(null==xe||xe(te))}),[a,te,xe,be.data]),(0,r.useMemo)((()=>{ae()}),[ne.current]),p((()=>{a&&(null==_e||_e({filterDataHandler:fe,hasErrors:ue,setShowAllErrors:J,setSubmitState:X}),(M||T)&&(null==we||we()))}),[_e,M,fe,T,ue,a,we,J,X]);const ye=(0,r.useMemo)((()=>(0,l.D)((()=>{var e;null===(e=window.sessionStorage)||void 0===e||e.setItem(z,JSON.stringify(ne.current))}),800)),[z]),Ce=(0,r.useCallback)(((e,t)=>{var r;if(!e)return;const o="/"===e?t:null!==(r=ne.current)&&void 0!==r?r:e.match(g)?[]:{};let l=null;try{l=(0,v.ZP)(o)}catch(u){l=o}"/"!==e&&s().set(l,e,t),P&&(l=de(l,P)),ne.current=l,a&&(null==xe||xe(l),(M||T)&&(null==we||we())),z&&"undefined"!=typeof window&&ye(),n()}),[xe,M,T,a,de,we,z,ye,P]),ke=(0,r.useCallback)((e=>{ne.current=e,n()}),[]),Ze=(0,r.useCallback)((async(e,t)=>{if(!e)return null;Ce(e,t),(0,d.S)(C)?await(null==C?void 0:C(e,t)):null==C||C(e,t)}),[C,Ce]),je=(0,r.useCallback)((async function(e,t){if(void 0===t&&(t="_undefined_"),!e)return null;"_undefined_"!==t&&Ze(e,t),U.current=!1,se();const n=ne.current,r=E?de(n,E):n;return(0,d.S)(y)?await y(r):null==y?void 0:y(r)}),[Ze,de,y,E,se]),Oe=(0,r.useCallback)((e=>{q.current=function(e,t){return e.includes(t)?e:e.concat(t)}(q.current,e)}),[]),Re=(0,r.useCallback)((e=>{var t;q.current=function(e,t){return e.filter((e=>e!==t))}(q.current,e),null!==(t=he.current)&&void 0!==t&&t[e]&&delete he.current[e]}),[]),Fe=(0,r.useCallback)((()=>{var e,t;"undefined"!=typeof window&&(null===(e=window)||void 0===e||null===(t=e.scrollTo)||void 0===t||t.call(e,{top:0,behavior:"smooth"}))}),[]),ze=(0,r.useCallback)((async e=>{const{onSubmit:t,enableAsyncBehaviour:n,skipFieldValidation:r,skipErrorCheck:a}=e;X({error:void 0});const s=(!!a||(!ue()||le("pending")))&&(n||ve());if(s&&Q("pending"),!r)for(const{path:l,type:u,callback:i}of Pe.current)"onSubmit"===u&&q.current.includes(l)&&(s?await i():i());if(!a&&ue()||le("pending")||!r&&le("error"))s&&(window.requestAnimationFrame((()=>{Q(void 0)})),r||(Te.current=()=>{window.requestAnimationFrame((()=>{ze({...e,skipFieldValidation:!0})}))})),null==Z||Z(),J(!0);else{let e;try{if(e=await t(),e instanceof Error)throw e}catch(o){e={error:o}}const n=e;s&&Q(null!=n&&n.error?"abort":"complete"),null!=n&&n.status&&Q(null==n?void 0:n.status),(null!=n&&n.error||null!=n&&n.warning||null!=n&&n.info)&&X(n)}return ne.current}),[X,ue,ve,le,Q,Z,J]),Ae=(0,r.useCallback)((async function(e){let{formElement:t=null}=void 0===e?{}:e;ze({enableAsyncBehaviour:(0,d.S)(k),onSubmit:async()=>{const e=ne.current,r=fe(E?de(e,E):e),s={resetForm:()=>{var e;null==t||null===(e=t.reset)||void 0===e||e.call(t),"undefined"!=typeof window&&z&&window.sessionStorage.removeItem(z),n()},clearData:()=>{ne.current={},a?null==ge||ge({}):n()}};let o;o=(0,d.S)(k)?await k(r,s):null==k?void 0:k(r,s);const l=await(null==j?void 0:j(r,o));return l&&(o=Object.keys(o).length>0?{...o,...l}:l),O&&Fe(),o}})}),[fe,ze,a,de,k,j,Fe,O,z,ge,E]),Pe=(0,r.useRef)([]),Ee=(0,r.useCallback)(((e,t,n)=>{Pe.current=Pe.current.filter((n=>{let{path:r,type:a}=n;return!(r===e&&a===t)})),Pe.current.push({path:e,type:t,callback:n})}),[]),Te=(0,r.useRef)(null);var Me;le("pending")||(null===(Me=Te.current)||void 0===Me||Me.call(Te),Te.current=null);(0,i.Z)((()=>{var e;S&&(re.current=null===(e=V.current)||void 0===e?void 0:e.compile(S));se()})),(0,c.Z)((()=>{var e;S&&S!==Se.current.schema&&(Se.current.schema=S,re.current=null===(e=V.current)||void 0===e?void 0:e.compile(S),se(),n())}),[S,se,n]);const De=(0,r.useCallback)((()=>{Q(void 0),X({info:void 0,warning:void 0,error:void 0})}),[Q,X]),{bufferedFormState:Ie}=function(e){const{formState:t,waitFor:n,minimumAsyncBehaviorTime:a,asyncSubmitTimeout:s,onTimeout:o}=e||{},{1:l}=(0,r.useReducer)((()=>({})),{}),u=(0,r.useRef)(),i=(0,r.useRef)(null),c=(0,r.useRef)({}),d=(0,r.useCallback)((e=>{u.current=e,l()}),[l]),f=(0,r.useCallback)((()=>{for(const e in c.current)clearTimeout(c.current[e])}),[]),h=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{const e=!1,r=null!=a?a:e?1:1e3;if(u.current&&"error"===t)return f(),void d(void 0);if("abort"===t)return f(),d("abort"),void(c.current.reset=setTimeout((()=>{i.current=0,d(void 0)}),r));if("complete"===t&&(h.current=!0),"pending"===t&&"pending"!==u.current)f(),i.current=Date.now(),h.current=!1,d("pending");else if("pending"===u.current){const t=Math.max(Date.now()-i.current),a=e?r:Math.max(r-t,0);n||(c.current.complete=setTimeout((()=>{h.current&&d("complete")}),a),c.current.reset=setTimeout((()=>{i.current=0,d(void 0),f()}),a+r))}return"pending"===u.current&&(c.current.timeout=setTimeout((()=>{f(),d(void 0),null==o||o()}),null!=s?s:3e4)),f}),[f,a,t,d,n,s,o]),{bufferedFormState:u.current}}({formState:G.current,waitFor:le("pending"),minimumAsyncBehaviorTime:R,asyncSubmitTimeout:F,onTimeout:De}),Be=K.current,He="boolean"==typeof(null==L?void 0:L.disabled)?null==L?void 0:L.disabled:"pending"===Ie==!0||void 0;return(0,b.jsx)(m.Z.Provider,{value:{handlePathChange:je,handlePathChangeUnvalidated:Ze,handleSubmit:Ae,handleMountField:Oe,handleUnMountField:Re,handleSubmitCall:ze,setFormState:Q,setSubmitState:X,setShowAllErrors:J,setFieldEventListener:Ee,setFieldState:ce,setFieldError:ie,setProps:me,hasErrors:ue,hasFieldState:le,checkFieldStateFor:oe,validateData:se,updateDataValue:Ce,setData:ke,filterDataHandler:fe,scrollToTop:Fe,schema:S,disabled:He,required:B,formState:Ie,submitState:Be,contextErrorMessages:H,hasContext:!0,errors:W.current,showAllErrors:U.current,mountedFieldPaths:q.current,ajvInstance:V.current,id:a,data:ne.current,props:e,...L},children:(0,b.jsx)(u.Z,{FormStatus:x?{globalStatus:{id:x,title:$.errorSummaryTitle,show:U.current}}:void 0,formElement:He?{disabled:!0}:void 0,locale:D||void 0,translations:I||void 0,children:N})})}},19404:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2784),a=n(21068),s=n(80215),o=n(72779),l=n.n(o),u=n(52322);function i(e){let{children:t,className:n=null,onSubmit:o=null,...i}=e;const c=r.useContext(a.Z);return c._isInsideFormElement=!0,(0,u.jsx)(s.Z,{element:"form",className:l()("dnb-forms-form",n),onSubmit:function(e){var t;null==e||e.preventDefault();const n=e.target;null==c||null===(t=c.handleSubmit)||void 0===t||t.call(c,{formElement:n}),"function"==typeof o&&o(e)},...i,children:t})}},77498:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2784),a=n(21068),s=n(11507);var o=n(12997),l=n(60131),u=n(52322);function i(e){const{children:t,formElement:n,FormStatus:i,...c}=e,d=(0,r.useContext)(o.Z),f=(0,r.useRef)();f.current=(0,r.useContext)(a.Z);const h={},{locale:m,translations:v,...b}=Object.assign((null==d?void 0:d.inheritedContext)||{},c);return"boolean"==typeof b.disabled&&(h.formElement={disabled:b.disabled}),n&&(h.formElement=n),i&&(h.FormStatus=i),m&&(h.locale=m),v&&(h.translations=function(e){const t={},n=e;for(const r in n){const e={Forms:{}};for(const t in n[r]){const a={};for(const e in n[r][t])a[e]=n[r][t][e];e.Forms[t]=a}t[r]=e}return t}(v)),(0,u.jsx)(o.Z.Provider,{value:{extend:function(e){const{required:t}=f.current;return d.extend(function(e){e=Object.isFrozen(e)?{...e}:e;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=(0,s.bz)(n);return Object.entries(a).reduce(((t,n)=>{let[r,a]=n;return e&&Object.prototype.hasOwnProperty.call(e,r)||(t[r]=a),t}),e||{})}(e,{required:t},b))},inheritedContext:c},children:(0,u.jsx)(l.Z,{...h,children:t})})}},33658:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2784),a=n(6436),s=n(21068),o=n(19404),l=n(84928),u=n(67155),i=n(37339),c=n(52322);function d(e){let{children:t,defaultData:n,data:r,schema:s,ajvInstance:o,errorMessages:l,globalStatusId:u,filterSubmitData:i,filterData:d,transformIn:h,onChange:m,onPathChange:v,onSubmit:b,onSubmitRequest:p,onSubmitComplete:g,minimumAsyncBehaviorTime:x,asyncSubmitTimeout:_,scrollTopOnSubmit:w,sessionStorageId:S,autoComplete:y,locale:C,translations:k,disabled:Z,required:j,...O}=e;const R={id:O.id,defaultData:n,data:r,schema:s,ajvInstance:o,errorMessages:l,globalStatusId:u,filterSubmitData:i,filterData:d,transformIn:h,onChange:m,onPathChange:v,onSubmit:b,onSubmitRequest:p,onSubmitComplete:g,minimumAsyncBehaviorTime:x,asyncSubmitTimeout:_,scrollTopOnSubmit:w,sessionStorageId:S,autoComplete:y,locale:C,translations:k,disabled:Z,required:j};return(0,c.jsx)(a.ZP,{...R,children:(0,c.jsx)(f,{...O,children:t})})}function f(e){let{children:t,...n}=e;const a=(0,u.Z)(),{submitState:d}=(0,r.useContext)(s.Z)||{},f=Object.entries(d).filter((e=>{let[,t]=e;return t}));return(0,c.jsxs)(o.Z,{...n,"aria-labelledby":(0,i.on)(n,f.map((e=>{let[t]=e;return`${a}-form-status-${t}`})))||void 0,children:[t,["error","warning","info"].map((e=>{const t=d[e];return(0,c.jsx)(l.ZP,{state:e,id:`${a}-form-status-${e}`,className:"dnb-forms-status",show:Boolean(t),no_animation:!1,shellSpace:{top:"small",bottom:"medium"},children:String((null==t?void 0:t.message)||t||"")},e)}))]})}},45031:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(2784),a=n(72779),s=n.n(a),o=n(37339),l=n(28952),u=n(89810).Z,i=n(47657),c=n(66292),d=n(88268),f=n(52322);function h(e){const t=(0,r.useContext)(l.Z),{variant:n,text:a,max:h,className:m,locale:v,...b}=e,p=(0,r.useRef)(a),g=/up|down/.test(String(n))?n:"down",x=(a||"").length,_=(0,r.useMemo)((()=>{if(!(h>0))return"";const n="down"===g?Math.abs(h-x):x,r=`character${x>h?"Exceeded":(0,o.Mh)(g)}`;return t.getTranslation(e).TextCounter[r].replace("%count",String(n)).replace("%max",String(h))}),[h,x,g,t,e]),w=(0,r.useMemo)((()=>{const e=p.current===a;return p.current=a,e}),[a]);return(0,f.jsxs)(d.Z,{size:"small",className:s()("dnb-text-counter",x>h&&"dnb-text-counter--exceeded",m),...b,children:[(0,f.jsx)(i.ZP,{icon:c.Z}),_,(0,f.jsx)(u,{element:"span",disabled:w,delay:2e3,children:_})]})}},66292:function(e,t,n){var r=n(52322);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 9.06V5.88m-.177 6.133h.346m6.612-.257a2.038 2.038 0 0 1-.09 1.998 2.083 2.083 0 0 1-1.761.973H3.07a2.082 2.082 0 0 1-1.761-.973 2.04 2.04 0 0 1-.09-1.998l4.93-8.62c.171-.342.435-.629.762-.83a2.082 2.082 0 0 1 2.94.83l4.93 8.62Zm-6.533.257c0 .183-.16.243-.248.243-.092 0-.252-.06-.252-.243 0-.197.16-.257.252-.257.088 0 .248.06.248.257Z"})})},42277:function(e,t,n){var r=n(52322);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.5 11.5v-5m-3 5v-5M1 3h14m-2.423 11.083a1 1 0 0 1-.997.917H4.42a1 1 0 0 1-.996-.917L2.5 3h11l-.923 11.083ZM9.5 1h-3a1 1 0 0 0-1 1v1h5V2a1 1 0 0 0-1-1Z"})})},16353:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(80753),a=n(81665),s=n(2784),o=n(72779),l=n.n(o),u=n(9149),i=n(79583),c=n(45031),d=n(37339),f=n(80945),h=n(11507),m=n(20364),v=n(57733),b=n(2045),p=n(59525),g=n(28952),x=n(67959),_=n(52322);let w=function(e){function t(n){var a;(a=e.call(this,n)||this).state={textareaState:"virgin",value:null,_value:null},a.onFocusHandler=e=>{const{value:t}=a._ref.current;a.setState({value:t,textareaState:"focus"}),(0,d.RW)((0,r.Z)(a),"on_focus",{value:t,event:e})},a.onBlurHandler=e=>{const{value:n}=e.target;a.setState({value:n,textareaState:t.hasValue(n)?"dirty":"initial"}),(0,d.RW)((0,r.Z)(a),"on_blur",{value:n,event:e})},a.onChangeHandler=e=>{const{value:t}=e.target,n=a.getProps(),s=(0,d.oA)(n.autoresize);s&&a.prepareAutosize();const o=a.getRows(t);!1!==(0,d.RW)((0,r.Z)(a),"on_change",{value:t,rows:o,event:e})&&(a.setState({value:t}),s&&a.setAutosize(o))},a.onKeyDownHandler=e=>{const t=a.getRows(),{value:n}=e.target;(0,d.RW)((0,r.Z)(a),"on_key_down",{value:n,rows:t,event:e})},a.prepareAutosize=()=>{const e=a._ref.current;if(e)try{e.style.height="auto"}catch(t){(0,f.ZK)(t)}},a.setAutosize=function(e){void 0===e&&(e=null);const t=a._ref.current;if(t)try{void 0===a._heightOffset&&(a._heightOffset=t.offsetHeight-t.clientHeight),t.style.height="auto";const n=a.getLineHeight();let r=t.scrollHeight+a._heightOffset;e||(e=a.getRows()),1===e&&r>n&&(r=n);const s=a.getProps(),o=parseFloat(s.autoresize_max_rows);if(o>0){const t=o*n;(e>o||r>t)&&(r=t)}t.style.height=r+"px"}catch(n){(0,f.ZK)(n)}},a._ref=s.createRef(),a._id=n.id||(0,d.Xo)(),n.textarea_state&&(a.state.textareaState=n.textarea_state);try{"undefined"!=typeof navigator&&(a.resizeModifier=!!(/Firefox|Edg/.test(navigator.userAgent)||/Chrome/.test(navigator.userAgent)&&/Win/.test(navigator.platform))&&"large",a.resizeModifier||(a.resizeModifier=!(!/Safari|Chrome/.test(navigator.userAgent)||!/Mac/.test(navigator.platform))&&"medium"))}catch(o){console.error(o)}return a}(0,a.Z)(t,e),t.getDerivedStateFromProps=function(e,n){const r=t.getValue(e);return"initval"!==r&&r!==n.value&&r!==n._value&&(r!==n.value&&"function"==typeof e.on_state_update&&(0,d.RW)({props:e},"on_state_update",{value:r}),n.value=r),e.textarea_state&&(n.textareaState=e.textarea_state),n._value=e.value,n},t.hasValue=function(e){return("string"==typeof e||"number"==typeof e)&&String(e).length>0||!1},t.getValue=function(e){const n=(0,d.Ob)(e);return""===n||t.hasValue(n)?n:e.value};var n=t.prototype;return n.componentDidMount=function(){const e=this.getProps();if(e.inner_ref&&("function"==typeof e.inner_ref?e.inner_ref(this._ref.current):e.inner_ref.current=this._ref.current),(0,d.oA)(e.autoresize)&&"undefined"!=typeof window){this.setAutosize();try{this.resizeObserver=new ResizeObserver(this.setAutosize),this.resizeObserver.observe(document.body)}catch(t){window.addEventListener("resize",this.setAutosize)}}},n.componentWillUnmount=function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),"undefined"!=typeof window&&window.removeEventListener("resize",this.setAutosize)},n.getRows=function(){return Math.floor(this._ref.current.scrollHeight/this.getLineHeight())||1},n.getLineHeight=function(){return parseFloat(getComputedStyle(this._ref.current).lineHeight)||0},n.getProps=function(){var e,n,r;return(0,h.$P)(this.props,t.defaultProps,{skeleton:null===(e=this.context)||void 0===e?void 0:e.skeleton},this.context.getTranslation(this.props).Textarea,(0,m.gv)(null===(n=this.context)||void 0===n?void 0:n.FormRow),(0,m.gv)(null===(r=this.context)||void 0===r?void 0:r.formElement),this.context.Textarea)},n.render=function(){const e=this.getProps(),{label:n,label_direction:r,label_sr_only:a,status:s,status_state:o,status_props:f,status_no_animation:h,globalStatus:m,suffix:g,disabled:w,skeleton:S,stretch:y,placeholder:C,keepPlaceholder:k,align:Z,size:j,textarea_class:O,readOnly:R,textarea_attributes:F,class:z,className:A,autoresize:P,characterCounter:E,autoresize_max_rows:T,id:M,children:D,value:I,textarea_element:B,...H}=e,{value:N,textareaState:L}=this.state,$=this._id,V=(0,d.Bx)(s),q=t.hasValue(N);let{textarea_element:W}=e;const U=F?"string"==typeof F?JSON.parse(F):F:{},J={className:l()("dnb-textarea__textarea",O),role:"textbox",value:q?N:"",id:$,name:$,disabled:(0,d.oA)(w)||(0,d.oA)(S),"aria-placeholder":C?(0,d.F4)(C):void 0,...H,...U,onChange:this.onChangeHandler,onFocus:this.onFocusHandler,onBlur:this.onBlurHandler,onKeyDown:this.onKeyDownHandler};(V||g)&&(J["aria-describedby"]=(0,d.u5)(J,V?$+"-status":null,g?$+"-suffix":null)),R&&(J["aria-readonly"]=J.readOnly=!0);const K={className:l()("dnb-textarea",`dnb-textarea--${L}`,w&&"dnb-textarea--disabled",q&&"dnb-textarea--has-content",Z&&`dnb-textarea__align--${Z}`,j&&`dnb-textarea__size--${j}`,s&&`dnb-textarea__status--${o}`,P&&"dnb-textarea__autoresize",!P&&this.resizeModifier&&`dnb-textarea__resize--${this.resizeModifier}`,r&&`dnb-textarea--${r}`,(0,d.oA)(y)&&"dnb-textarea--stretch",(0,d.oA)(k)&&"dnb-textarea--keep-placeholder","dnb-form-component",(0,p.BD)(null,S),(0,b.HU)(e),z,A)},X={className:l()("dnb-textarea__inner",(0,p.BD)("shape",S,this.context))},G={className:l()("dnb-textarea__shell")};((0,d.oA)(w)||(0,d.oA)(S))&&(G["aria-disabled"]=!0);const Q=parseFloat(e.rows)>0?{"--textarea-rows":parseFloat(e.rows)}:null;return(0,p.rZ)(X,S,this.context),(0,d.L_)(this.props,J),(0,d.L_)(null,X),(0,d.L_)(null,G),W&&"function"==typeof W?W=W(J,this._ref):!W&&B&&(W=B),(0,_.jsxs)("span",{...K,children:[n&&(0,_.jsx)(u.Z,{id:$+"-label",for_id:$,text:n,label_direction:r,sr_only:a,disabled:w,skeleton:S}),(0,_.jsxs)("span",{...X,children:[(0,_.jsx)(v.Z,{}),(0,_.jsx)(i.ZP,{show:V,id:$+"-form-status",globalStatus:m,label:n,text_id:$+"-status",text:s,state:o,no_animation:h,skeleton:S,...f}),(0,_.jsxs)("span",{className:"dnb-textarea__row",children:[(0,_.jsxs)("span",{...G,children:[W||(0,_.jsx)("textarea",{ref:this._ref,...J}),!q&&C&&("focus"!==L||k)&&(0,_.jsx)("span",{className:l()("dnb-textarea__placeholder",Z?`dnb-textarea__align--${Z}`:null),style:Q,"aria-hidden":!0,children:C}),(0,_.jsx)("span",{className:"dnb-textarea__state"})]}),g&&(0,_.jsx)(x.Z,{className:"dnb-textarea__suffix",id:$+"-suffix",context:e,children:g})]}),E&&(0,_.jsx)(c.Z,{top:"x-small",text:N,max:E,lang:e.lang,locale:e.locale,...E})]})]})},t}(s.PureComponent);w.contextType=g.Z,w.defaultProps={value:"initval",id:null,label:null,label_direction:null,label_sr_only:null,status:null,textarea_state:null,status_state:"error",status_props:null,status_no_animation:null,globalStatus:null,suffix:null,placeholder:null,keepPlaceholder:null,align:null,size:null,stretch:null,disabled:null,skeleton:null,autoresize:null,autoresize_max_rows:null,characterCounter:null,textarea_class:null,class:null,textarea_attributes:null,readOnly:!1,rows:null,cols:null,inner_ref:null,className:null,textarea_element:null,children:null,on_change:null,on_focus:null,on_blur:null,on_key_down:null,on_state_update:null},w._formElement=!0,w._supportsSpacingProps=!0},57039:function(e,t,n){n.d(t,{ZP:function(){return d}});const r="object"==typeof self?self:globalThis,a=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),a=s=>{if(e.has(s))return e.get(s);const[o,l]=t[s];switch(o){case 0:case-1:return n(l,s);case 1:{const e=n([],s);for(const t of l)e.push(a(t));return e}case 2:{const e=n({},s);for(const[t,n]of l)e[a(t)]=a(n);return e}case 3:return n(new Date(l),s);case 4:{const{source:e,flags:t}=l;return n(new RegExp(e,t),s)}case 5:{const e=n(new Map,s);for(const[t,n]of l)e.set(a(t),a(n));return e}case 6:{const e=n(new Set,s);for(const t of l)e.add(a(t));return e}case 7:{const{name:e,message:t}=l;return n(new r[e](t),s)}case 8:return n(BigInt(l),s);case"BigInt":return n(Object(BigInt(l)),s)}return n(new r[o](l),s)};return a})(new Map,e)(0),s="",{toString:o}={},{keys:l}=Object,u=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=o.call(e).slice(8,-1);switch(n){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},i=([e,t])=>0===e&&("function"===t||"symbol"===t),c=(e,{json:t,lossy:n}={})=>{const r=[];return((e,t,n,r)=>{const a=(e,t)=>{const a=r.push(e)-1;return n.set(t,a),a},s=r=>{if(n.has(r))return n.get(r);let[o,c]=u(r);switch(o){case 0:{let t=r;switch(c){case"bigint":o=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);t=null;break;case"undefined":return a([-1],r)}return a([o,t],r)}case 1:{if(c)return a([c,[...r]],r);const e=[],t=a([o,e],r);for(const n of r)e.push(s(n));return t}case 2:{if(c)switch(c){case"BigInt":return a([c,r.toString()],r);case"Boolean":case"Number":case"String":return a([c,r.valueOf()],r)}if(t&&"toJSON"in r)return s(r.toJSON());const n=[],d=a([o,n],r);for(const t of l(r))!e&&i(u(r[t]))||n.push([s(t),s(r[t])]);return d}case 3:return a([o,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return a([o,{source:e,flags:t}],r)}case 5:{const t=[],n=a([o,t],r);for(const[a,o]of r)(e||!i(u(a))&&!i(u(o)))&&t.push([s(a),s(o)]);return n}case 6:{const t=[],n=a([o,t],r);for(const a of r)!e&&i(u(a))||t.push(s(a));return n}}const{message:d}=r;return a([o,{name:c,message:d}],r)};return s})(!(t||n),!!t,new Map,r)(e),r};var d="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?a(c(e,t)):structuredClone(e):(e,t)=>a(c(e,t))}}]);
//# sourceMappingURL=ea0ee722e3aaf88b3dbc53d348ef1beb1970778a-9673cd644bba864f8f90.js.map