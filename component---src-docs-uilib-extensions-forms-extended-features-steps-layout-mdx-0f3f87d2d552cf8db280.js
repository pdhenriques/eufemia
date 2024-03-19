"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[88108,36936],{54154:function(n,e,t){t.r(e);var r=t(52322),a=t(45392),o=t(94040),s=t(70198);function i(n){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre",h2:"h2"},(0,a.ah)(),n.components);return o||u("Examples",!1),o.Default||u("Examples.Default",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"StepsLayout"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"StepsLayout"})," is a wrapper component for showing forms with a ",(0,r.jsx)(e.a,{href:"/uilib/components/step-indicator/",children:"StepIndicator"})," for navigation between several steps. It also includes components for navigating between steps."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { StepsLayout } from '@dnb/eufemia/extensions/forms'\n"})}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(e.h2,{children:"Demo"}),"\n",(0,r.jsx)(o.Default,{})]})}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i(n)}},17897:function(n,e,t){t.r(e),t.d(e,{AsyncChangeBehavior:function(){return u},AsyncSubmitBehavior:function(){return i},Default:function(){return s},WithinOtherComponents:function(){return c},createRequest:function(){return l}});var r=t(7325),a=t(52750),o=t(52322);const s=()=>(0,o.jsx)(r.Z,{children:'<Form.SubmitIndicator state="pending" />\n'}),i=()=>(0,o.jsx)(r.Z,{scope:{createRequest:l,debounceAsync:a.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay}>\n    <Card stack>\n      <Field.String path="/myField" label="Short label" />\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),u=()=>(0,o.jsx)(r.Z,{scope:{createRequest:l,debounceAsync:a.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay} onChange={delay}>\n    <Card stack>\n      <Field.String\n        path="/myField1"\n        label="Label (with async validation)"\n        placeholder="Write something ..."\n        validator={delay}\n      />\n      <FieldBlock width="medium">\n        <Field.String\n          path="/myField2"\n          width="stretch"\n          label="This is a long label"\n        />\n      </FieldBlock>\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),l=()=>{let n,e;const t=t=>new Promise((r=>{e=r,n=setTimeout((()=>{r({hasError:!1})}),t)}));return t.cancel=()=>{var t;null===(t=e)||void 0===t||t({hasError:!0}),clearTimeout(n),n=null},t},c=()=>(0,o.jsx)(r.Z,{children:'<Form.Handler>\n  <Flex.Horizontal align="center">\n    <Form.SubmitButton showIndicator />\n    <Button variant="secondary" icon="chevron_right">\n      Secondary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <Button variant="tertiary">\n      Tertiary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <FormLabel>\n      Label\n      <Form.SubmitIndicator state="pending" />\n    </FormLabel>\n  </Flex.Horizontal>\n</Form.Handler>\n'})},70198:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(68270),a=t(77491),o=t(52322);function s(n){const{allMdx:{edges:e}}=(0,r.useStaticQuery)("126258106");return(0,o.jsx)(a.Z,{edges:e,...n})}},94040:function(n,e,t){t.r(e),t.d(e,{AsyncStepsLayout:function(){return l},Default:function(){return u}});var r=t(7325),a=t(64129),o=t(52750),s=(t(2784),t(17897)),i=t(52322);const u=()=>(0,i.jsx)(r.Z,{scope:{StepsLayout:a.Z},"data-visual-test":"steps-layout-card-border",children:'<Form.Handler\n  data={{\n    firstName: \'John\',\n    lastName: \'Doe\',\n    streetName: \'Osloveien\',\n    streetNr: 12,\n    postalCode: \'1234\',\n    city: \'Oslo\',\n  }}\n>\n  <StepsLayout>\n    <StepsLayout.Step title="Step 1">\n      <Form.MainHeading>Heading</Form.MainHeading>\n      <Card>\n        <P>Contents</P>\n      </Card>\n      <Card>\n        <P>Contents</P>\n      </Card>\n      <StepsLayout.NextButton />\n    </StepsLayout.Step>\n\n    <StepsLayout.Step title="Step 2">\n      <Form.MainHeading>Heading</Form.MainHeading>\n      <Card>\n        <P>Contents</P>\n      </Card>\n      <Form.ButtonRow>\n        <StepsLayout.PreviousButton />\n        <StepsLayout.NextButton />\n      </Form.ButtonRow>\n    </StepsLayout.Step>\n\n    <StepsLayout.Step title="Summary">\n      <Form.MainHeading>Summary</Form.MainHeading>\n      <Card stack>\n        <Form.SubHeading>Deliver address</Form.SubHeading>\n\n        <Value.SummaryList layout="grid">\n          <Value.String label="First name" path="/firstName" />\n          <Value.String label="Last name" path="/lastName" />\n\n          <Value.String label="Street" path="/streetName" />\n          <Value.Number label="Nr." path="/streetNr" />\n\n          <Value.String label="Postalc." path="/postalCode" />\n          <Value.String label="City" path="/city" />\n        </Value.SummaryList>\n      </Card>\n      <StepsLayout.PreviousButton />\n    </StepsLayout.Step>\n  </StepsLayout>\n</Form.Handler>\n'}),l=()=>(0,i.jsx)(r.Z,{scope:{StepsLayout:a.Z,createRequest:s.createRequest,debounceAsync:o.k},noInline:!0,children:"const MyForm = () => {\n  const onStepChange = React.useCallback(async (index, mode) => {\n    console.log('onStepChange', index)\n    if (mode === 'next') {\n      try {\n        const request = createRequest()\n        await request(1000) // Simulate a request\n      } catch (error) {\n        return error\n      }\n    }\n\n    // Optional, you can show a FormStatus at the bottom of the form\n    return {\n      info: 'Info message: ' + index,\n    }\n  }, [])\n  const onSubmit = React.useCallback(async (data) => {\n    console.log('onSubmit', data)\n    try {\n      const request = createRequest()\n      await request(1000) // Simulate a request\n    } catch (error) {\n      return error\n    }\n\n    // Optional, you can show a FormStatus at the bottom of the form\n    return {\n      warning: 'Warning message',\n    }\n  }, [])\n  const validator = React.useCallback(async (value) => {\n    try {\n      const request = createRequest()\n      await request(1000) // Simulate a request\n    } catch (error) {\n      return error\n    }\n    if (value === 'invalid') {\n      return Error('Error message')\n    }\n  }, [])\n  const validator1 = debounceAsync(validator)\n  const validator2 = debounceAsync(validator)\n  return (\n    <Form.Handler onSubmit={onSubmit}>\n      <StepsLayout onStepChange={onStepChange} variant=\"drawer\">\n        <StepsLayout.Step title=\"Step 1\">\n          <Card stack>\n            <Field.String\n              label=\"Required field with async validator\"\n              validator={validator1}\n              path=\"/field1\"\n              required\n            />\n            <Field.String\n              label=\"Field with async validator\"\n              validator={validator2}\n              path=\"/field2\"\n            />\n          </Card>\n          <Form.ButtonRow>\n            <StepsLayout.PreviousButton />\n            <StepsLayout.NextButton />\n          </Form.ButtonRow>\n        </StepsLayout.Step>\n\n        <StepsLayout.Step title=\"Step 2\">\n          <Form.MainHeading>Heading</Form.MainHeading>\n          <Card>\n            <P>Contents of step 2</P>\n          </Card>\n          <Form.ButtonRow>\n            <StepsLayout.PreviousButton />\n            <Form.SubmitButton />\n          </Form.ButtonRow>\n        </StepsLayout.Step>\n      </StepsLayout>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n"})},77491:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(2784),a=t(42351),o=t(65359),s=t(43095),i=t(79254),u=t(68514),l=t(61185),c=t(1864),d=t(52322);function m(n){let{edges:e,level:t,size:m,description:p=null,returnListItems:h=!1,...S}=n;const y=h?a.Z:r.Fragment;(0,u.TW)(t||2);const b=e.map(((n,e)=>{let{node:{frontmatter:{title:r,description:a},fields:{slug:u}}}=n;return(0,d.jsx)(y,{children:(0,d.jsx)(b,{})},e);function b(){return h?(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(i.Z,{href:"/"+u,children:r}),(0,d.jsx)("br",{})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{level:t||2,size:m,useSlug:"/"+u,title:r,...S,children:(0,d.jsx)(i.Z,{href:"/"+u,children:r})}),(null!==p?p:a)&&(0,d.jsx)(l.D,{components:c.L,children:null!==p?p:a})]})}}));return(0,d.jsx)(d.Fragment,{children:b})}},59626:function(n,e,t){const r=t(2784).createContext(void 0);e.Z=r},64129:function(n,e,t){t.d(e,{Z:function(){return N}});var r=t(2784),a=t(72779),o=t.n(a),s=t(80215),i=t(76603),u=t(80945),l=t(56239),c=t(67155),d=t(21068),m=t(30392),p=t(59626),h=t(52322);function S(n){const{className:e,index:t,children:a}=n,s=(0,r.useContext)(p.Z);return(null==s?void 0:s.activeIndex)!==t?null:(0,h.jsx)(m.Z,{className:o()("dnb-forms-step",e),direction:"vertical",...(0,m.W)(n),children:a})}S._supportsSpacingProps=!0;var y=S,b=t(28952),f=t(65927),v=t(71370);function x(n){const e=(0,r.useContext)(b.Z),{className:t,variant:a="primary",icon_position:s="right",icon:i="chevron_right",children:u=(null==e?void 0:e.translation.Forms.stepNext)}=n,l=(0,r.useContext)(p.Z);return(0,h.jsx)(f.Z,{children:(0,h.jsx)(v.Z,{type:"button",className:o()("dnb-forms-next-button",t),onClick:null==l?void 0:l.handleNext,variant:a,icon_position:s,icon:i,...n,children:u})})}x._supportsSpacingProps=!0;var g=x,F=t(96844);function C(n){const e=(0,r.useContext)(b.Z),{className:t,variant:a="tertiary",icon_position:s="left",icon:i="chevron_left",children:u=(null==e?void 0:e.translation.Forms.stepPrevious)}=n,l=(0,r.useContext)(p.Z),c={};return 0===(null==l?void 0:l.activeIndex)&&(c.disabled=!0),(0,h.jsx)(f.Z,{children:(0,h.jsx)(F.Z,{className:o()("dnb-forms-previous-button",t),onClick:null==l?void 0:l.handlePrevious,variant:a,icon_position:s,icon:i,...c,...n,children:u})})}C._supportsSpacingProps=!0;var j=C;function w(n){const{className:e}=n;return(0,h.jsxs)(f.Z,{className:o()("dnb-forms-buttons",e),...n,children:[(0,h.jsx)(j,{}),(0,h.jsx)(g,{})]})}w._supportsSpacingProps=!0;var B=w,L=t(80370);function Z(n){const{className:e,id:t,mode:a="strict",scrollTopOnStepChange:m,initialActiveIndex:S=0,onStepChange:b,children:f,noAnimation:v=!0,variant:x="sidebar",sidebarId:g,...F}=n,C=(0,r.useContext)(d.Z),{hasContext:j,setFormState:w,handleSubmitCall:B,setShowAllErrors:N,showAllErrors:_,scrollToTop:q}=C,R=(0,c.Z)(t),{1:k}=(0,r.useReducer)((()=>({})),{}),H=(0,r.useRef)(S),P=(0,r.useRef)({});P.current[H.current]=_;const E=(0,r.useCallback)((async(n,e)=>(0,l.S)(b)?await b(n,e):null==b?void 0:b(n,e)),[b]),I=(0,r.useCallback)((()=>{B({skipFieldValidation:!0,skipErrorCheck:!0,enableAsyncBehaviour:(0,l.S)(b),onSubmit:async()=>{const n=await E(H.current-1,"previous");return w("abort"),n instanceof Error||(H.current=H.current-1,k()),m&&q(),n}})}),[E,B,b,q,m,w]),A=(0,r.useCallback)((()=>{B({enableAsyncBehaviour:(0,l.S)(b),onSubmit:async()=>{const n=await E(H.current+1,"next");return w("abort"),N(P.current[H.current+1]),n instanceof Error||(H.current=H.current+1,k()),m&&q(),n}})}),[E,B,b,q,m,w,N]),M=r.Children.map(f,(n=>{var e;if(!r.isValidElement(n)||n.type!==y)throw new Error("Only Step can be children of StepsLayout");return null!==(e=n.props.title)&&void 0!==e?e:"Title missing"})),V=(0,r.useCallback)((n=>{let{current_step:e}=n;H.current=e,N(P.current[e]),k()}),[N]);return j?(0,h.jsx)(p.Z.Provider,{value:{activeIndex:H.current,handlePrevious:I,handleNext:A},children:(0,h.jsxs)(s.Z,{className:o()("dnb-forms-steps-layout","drawer"===x&&"dnb-forms-steps-layout--drawer",e),...F,children:[(0,h.jsxs)("aside",{className:"dnb-forms-steps-layout__sidebar",children:[(0,h.jsx)(i.Z.Sidebar,{sidebar_id:R}),(0,h.jsx)(i.Z,{bottom:!0,current_step:H.current,data:M,mode:a,no_animation:v,on_change:V,sidebar_id:"drawer"!==x||g?g||R:""})]}),(0,h.jsx)("div",{className:"dnb-forms-steps-layout__contents",children:r.Children.map(f,((n,e)=>r.isValidElement(n)&&n.type===y?r.cloneElement(n,{index:e}):n))})]})}):((0,u.ZK)("You may wrap StepsLayout in Form.Handler"),(0,h.jsx)(L.Z,{children:(0,h.jsx)(Z,{...n,id:R})}))}Z._supportsSpacingProps=!0,Z.Step=y,Z.NextButton=g,Z.PreviousButton=j,Z.Buttons=B;var N=Z}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-steps-layout-mdx-0f3f87d2d552cf8db280.js.map