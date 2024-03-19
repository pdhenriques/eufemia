"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[90635],{13155:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r={};e.r(r),e.d(r,{Default:function(){return l},WithLayout:function(){return d}});var o=e(52322),s=e(45392),i=e(7325),a=e(64129),c=e(46817),u=e(38311);const l=()=>(0,o.jsx)(i.Z,{scope:{StepsLayout:a.Z,Form:c},children:'<Form.ButtonRow>\n  <StepsLayout.PreviousButton />\n  <StepsLayout.NextButton />\n  <Button variant="secondary">Other button</Button>\n</Form.ButtonRow>\n'}),d=()=>(0,o.jsx)(i.Z,{scope:{sendIcon:u.Z},children:'<Form.Element onSubmit={(data) => console.log(\'onSubmit\', data)}>\n  <Card spacing="medium">\n    <Field.Email />\n    <Form.ButtonRow>\n      <Form.SubmitButton icon={sendIcon} />\n      <Button variant="secondary">Cancel</Button>\n    </Form.ButtonRow>\n  </Card>\n</Form.Element>\n'});function p(n){const t=Object.assign({h2:"h2",h3:"h3"},(0,s.ah)(),n.components);return r||h("Examples",!1),l||h("Examples.Default",!0),d||h("Examples.WithLayout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:"Demo"}),"\n",(0,o.jsx)(t.h3,{children:"Without any surrounding layout"}),"\n",(0,o.jsx)(l,{}),"\n",(0,o.jsx)(t.h3,{children:"In combination with a Layout"}),"\n",(0,o.jsx)(d,{})]})}var m=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,s.ah)(),n.components);return t?(0,o.jsx)(t,Object.assign({},n,{children:(0,o.jsx)(p,n)})):p(n)};function h(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},59626:function(n,t,e){const r=e(2784).createContext(void 0);t.Z=r},64129:function(n,t,e){e.d(t,{Z:function(){return E}});var r=e(2784),o=e(72779),s=e.n(o),i=e(80215),a=e(76603),c=e(80945),u=e(56239),l=e(67155),d=e(21068),p=e(30392),m=e(59626),h=e(52322);function x(n){const{className:t,index:e,children:o}=n,i=(0,r.useContext)(m.Z);return(null==i?void 0:i.activeIndex)!==e?null:(0,h.jsx)(p.Z,{className:s()("dnb-forms-step",t),direction:"vertical",...(0,p.W)(n),children:o})}x._supportsSpacingProps=!0;var v=x,b=e(28952),f=e(65927),j=e(71370);function y(n){const t=(0,r.useContext)(b.Z),{className:e,variant:o="primary",icon_position:i="right",icon:a="chevron_right",children:c=(null==t?void 0:t.translation.Forms.stepNext)}=n,u=(0,r.useContext)(m.Z);return(0,h.jsx)(f.Z,{children:(0,h.jsx)(j.Z,{type:"button",className:s()("dnb-forms-next-button",e),onClick:null==u?void 0:u.handleNext,variant:o,icon_position:i,icon:a,...n,children:c})})}y._supportsSpacingProps=!0;var Z=y,w=e(96844);function _(n){const t=(0,r.useContext)(b.Z),{className:e,variant:o="tertiary",icon_position:i="left",icon:a="chevron_left",children:c=(null==t?void 0:t.translation.Forms.stepPrevious)}=n,u=(0,r.useContext)(m.Z),l={};return 0===(null==u?void 0:u.activeIndex)&&(l.disabled=!0),(0,h.jsx)(f.Z,{children:(0,h.jsx)(w.Z,{className:s()("dnb-forms-previous-button",e),onClick:null==u?void 0:u.handlePrevious,variant:o,icon_position:i,icon:a,...l,...n,children:c})})}_._supportsSpacingProps=!0;var S=_;function g(n){const{className:t}=n;return(0,h.jsxs)(f.Z,{className:s()("dnb-forms-buttons",t),...n,children:[(0,h.jsx)(S,{}),(0,h.jsx)(Z,{})]})}g._supportsSpacingProps=!0;var C=g,k=e(80370);function B(n){const{className:t,id:e,mode:o="strict",scrollTopOnStepChange:p,initialActiveIndex:x=0,onStepChange:b,children:f,noAnimation:j=!0,variant:y="sidebar",sidebarId:Z,...w}=n,_=(0,r.useContext)(d.Z),{hasContext:S,setFormState:g,handleSubmitCall:C,setShowAllErrors:E,showAllErrors:N,scrollToTop:F}=_,P=(0,l.Z)(e),{1:L}=(0,r.useReducer)((()=>({})),{}),I=(0,r.useRef)(x),R=(0,r.useRef)({});R.current[I.current]=N;const A=(0,r.useCallback)((async(n,t)=>(0,u.S)(b)?await b(n,t):null==b?void 0:b(n,t)),[b]),O=(0,r.useCallback)((()=>{C({skipFieldValidation:!0,skipErrorCheck:!0,enableAsyncBehaviour:(0,u.S)(b),onSubmit:async()=>{const n=await A(I.current-1,"previous");return g("abort"),n instanceof Error||(I.current=I.current-1,L()),p&&F(),n}})}),[A,C,b,F,p,g]),W=(0,r.useCallback)((()=>{C({enableAsyncBehaviour:(0,u.S)(b),onSubmit:async()=>{const n=await A(I.current+1,"next");return g("abort"),E(R.current[I.current+1]),n instanceof Error||(I.current=I.current+1,L()),p&&F(),n}})}),[A,C,b,F,p,g,E]),T=r.Children.map(f,(n=>{var t;if(!r.isValidElement(n)||n.type!==v)throw new Error("Only Step can be children of StepsLayout");return null!==(t=n.props.title)&&void 0!==t?t:"Title missing"})),D=(0,r.useCallback)((n=>{let{current_step:t}=n;I.current=t,E(R.current[t]),L()}),[E]);return S?(0,h.jsx)(m.Z.Provider,{value:{activeIndex:I.current,handlePrevious:O,handleNext:W},children:(0,h.jsxs)(i.Z,{className:s()("dnb-forms-steps-layout","drawer"===y&&"dnb-forms-steps-layout--drawer",t),...w,children:[(0,h.jsxs)("aside",{className:"dnb-forms-steps-layout__sidebar",children:[(0,h.jsx)(a.Z.Sidebar,{sidebar_id:P}),(0,h.jsx)(a.Z,{bottom:!0,current_step:I.current,data:T,mode:o,no_animation:j,on_change:D,sidebar_id:"drawer"!==y||Z?Z||P:""})]}),(0,h.jsx)("div",{className:"dnb-forms-steps-layout__contents",children:r.Children.map(f,((n,t)=>r.isValidElement(n)&&n.type===v?r.cloneElement(n,{index:t}):n))})]})}):((0,c.ZK)("You may wrap StepsLayout in Form.Handler"),(0,h.jsx)(k.Z,{children:(0,h.jsx)(B,{...n,id:P})}))}B._supportsSpacingProps=!0,B.Step=v,B.NextButton=Z,B.PreviousButton=S,B.Buttons=C;var E=B},38311:function(n,t,e){var r=e(52322);t.Z=n=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...n,children:(0,r.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m7.225 10.26 3.241 4.326a1.035 1.035 0 0 0 1.846-.43l2.24-11.928a1.035 1.035 0 0 0-1.566-1.07l-11.5 7.188a1.035 1.035 0 0 0 .55 1.913h5.189Zm0 0H5.669v3.216a1.035 1.035 0 0 0 1.618.855l1.977-1.348-2.04-2.724Zm0 0 6.893-9.078"})})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-button-row-demos-mdx-0b245d67e988cb760572.js.map