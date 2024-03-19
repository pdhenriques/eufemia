"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[16980],{45799:function(n,e,t){t.r(e);var r=t(52322),o=t(45392),i=t(17897);function a(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",strong:"strong"},(0,o.ah)(),n.components);return i||s("Examples",!1),i.AsyncChangeBehavior||s("Examples.AsyncChangeBehavior",!0),i.AsyncSubmitBehavior||s("Examples.AsyncSubmitBehavior",!0),i.Default||s("Examples.Default",!0),i.WithinOtherComponents||s("Examples.WithinOtherComponents",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(e.h3,{children:"Default appearance"}),"\n",(0,r.jsx)(i.Default,{}),"\n",(0,r.jsx)(e.h3,{children:"SubmitIndicator in a simple form"}),"\n",(0,r.jsx)(e.p,{children:'Press the "Send" button to see the submit indicator.'}),"\n",(0,r.jsx)(i.AsyncSubmitBehavior,{}),"\n",(0,r.jsx)(e.h3,{children:"SubmitIndicator with field validation"}),"\n",(0,r.jsxs)(e.p,{children:["This example shows a combination of async validation and async change behavior, which could be used for e.g. ",(0,r.jsx)(e.strong,{children:"autosaving"})," the field value."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"NB:"})," if the indicator in the label does not have enough room, it will animate to a new line."]}),"\n",(0,r.jsx)(e.p,{children:"Make a change in the input field."}),"\n",(0,r.jsx)(i.AsyncChangeBehavior,{}),"\n",(0,r.jsx)(e.h3,{children:"Used in other components"}),"\n",(0,r.jsx)(i.WithinOtherComponents,{})]})}function s(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},17897:function(n,e,t){t.r(e),t.d(e,{AsyncChangeBehavior:function(){return c},AsyncSubmitBehavior:function(){return s},Default:function(){return a},WithinOtherComponents:function(){return u},createRequest:function(){return l}});var r=t(7325),o=t(52750),i=t(52322);const a=()=>(0,i.jsx)(r.Z,{children:'<Form.SubmitIndicator state="pending" />\n'}),s=()=>(0,i.jsx)(r.Z,{scope:{createRequest:l,debounceAsync:o.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay}>\n    <Card stack>\n      <Field.String path="/myField" label="Short label" />\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),c=()=>(0,i.jsx)(r.Z,{scope:{createRequest:l,debounceAsync:o.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay} onChange={delay}>\n    <Card stack>\n      <Field.String\n        path="/myField1"\n        label="Label (with async validation)"\n        placeholder="Write something ..."\n        validator={delay}\n      />\n      <FieldBlock width="medium">\n        <Field.String\n          path="/myField2"\n          width="stretch"\n          label="This is a long label"\n        />\n      </FieldBlock>\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),l=()=>{let n,e;const t=t=>new Promise((r=>{e=r,n=setTimeout((()=>{r({hasError:!1})}),t)}));return t.cancel=()=>{var t;null===(t=e)||void 0===t||t({hasError:!0}),clearTimeout(n),n=null},t},u=()=>(0,i.jsx)(r.Z,{children:'<Form.Handler>\n  <Flex.Horizontal align="center">\n    <Form.SubmitButton showIndicator />\n    <Button variant="secondary" icon="chevron_right">\n      Secondary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <Button variant="tertiary">\n      Tertiary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <FormLabel>\n      Label\n      <Form.SubmitIndicator state="pending" />\n    </FormLabel>\n  </Flex.Horizontal>\n</Form.Handler>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-submit-indicator-demos-mdx-16c02256d71dd29bc91b.js.map