"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[76438],{30261:function(e,n,i){i.r(n);var r=i(52322),s=i(45392);function t(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Best Practices on Forms"}),"\n",(0,r.jsx)(n.p,{children:"This document provides a set of best practices to follow when creating forms for DNB."}),"\n",(0,r.jsx)(n.h2,{children:"General"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure you have a ",(0,r.jsx)(n.code,{children:"form"})," element. It will add support for additional keyboard (enter key) and auto-complete features. Use the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Form/Handler/",children:"Form.Handler"})," that uses a HTML form element under the hood."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure your form HTML elements have a semantic and unique ",(0,r.jsx)(n.code,{children:"name"}),". By using the ",(0,r.jsx)(n.code,{children:"path"})," property (e.g. ",(0,r.jsx)(n.code,{children:'path="/firstName"'}),"), it will set an unique ",(0,r.jsx)(n.code,{children:"name"})," attribute to the rendered HTML element without the need of more work."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure you have a submit button. Use the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Form/SubmitButton/",children:"Form.SubmitButton"})," for that."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<Form.Handler>\n  <Field.String path="/myField" />\n  <Form.SubmitButton>Submit</Form.SubmitButton>\n</Form.Handler>\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Workflow and browser features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure to let browser autofill personal data if applicable, based on HTML ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",children:"autocomplete attributes"}),". By using the ",(0,r.jsx)(n.code,{children:"path"})," property with semantic names (e.g. ",(0,r.jsx)(n.code,{children:'path="/firstName"'}),"), browser will be able to provide a correct autofill integration."]}),"\n",(0,r.jsxs)(n.li,{children:["In some cases, it is appreciated to temporary store user entered input data. Use the ",(0,r.jsx)(n.code,{children:"sessionStorageId"})," feature provided by ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Form/Handler/",children:"Form.Handler"})," for that."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<Form.Handler sessionStorageId="my-form">\n  <Field.String\n    path="/organizationTitle"\n    autoComplete="organization-title"\n  />\n</Form.Handler>\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Validation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"tab"})," (Tab) key should be used to navigate between form fields. It should NOT trigger validation."]}),"\n",(0,r.jsxs)(n.li,{children:["Required fields should have ",(0,r.jsx)(n.code,{children:'aria-required="true"'})," attribute. Use the ",(0,r.jsx)(n.code,{children:"required"})," property for that."]}),"\n",(0,r.jsxs)(n.li,{children:["Validation should be triggered on ",(0,r.jsx)(n.code,{children:"submit"})," events and on ",(0,r.jsx)(n.code,{children:"blur"})," – if the user has made changes. In some cases, it is appreciated to trigger validation on ",(0,r.jsx)(n.code,{children:"change"})," events. This behavior can be changed if needed by using ",(0,r.jsx)(n.code,{children:"validateInitially"}),", ",(0,r.jsx)(n.code,{children:"validateUnchanged"})," and ",(0,r.jsx)(n.code,{children:"continuousValidation"}),". More info about these properties can be found in the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/create-component/useFieldProps/",children:"useFieldProps"})," documentation."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<Field.String\n  path="/myField"\n  required\n  onBlurValidator={validationFunction}\n/>\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Error messages"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fields with errors should have ",(0,r.jsx)(n.code,{children:'aria-invalid="true"'})," attribute."]}),"\n",(0,r.jsxs)(n.li,{children:["When a ",(0,r.jsx)(n.a,{href:"/uilib/components/form-status/",children:"FormStatus"})," (Messageboxes) is used, it should be placed in the DOM before the form element itself and it should be linked together with the related form element by using ",(0,r.jsx)(n.code,{children:"aria-describedby"}),". This is done automatically by the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/create-component/FieldBlock",children:"FieldBlock"}),", which is used in each ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/fields/",children:"field"}),". This will allow screen readers to find and announce the error message without too much frustration."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<Field.String\n  label="Show me an error message"\n  required\n  validateInitially\n/>\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Semantics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When several form elements do share the same label, a ",(0,r.jsx)(n.code,{children:"fieldset"})," and ",(0,r.jsx)(n.code,{children:"legend"})," element should be used to group them together. Use the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/create-component/FieldBlock",children:"FieldBlock"})," for that."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<FieldBlock label="My legend">\n  <Field.String path="/myFirstField" />\n  <Field.String path="/mySecondField" />\n</FieldBlock>\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-best-practices-on-forms-mdx-9990d6780acddeb9f1eb.js.map