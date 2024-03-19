"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[24181,1594,55545],{37210:function(e,n,r){r.r(n);var a=r(52322),o=r(45392),i=r(49945),t=r(66856);function s(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(t.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(s,e)})):s()}},66856:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var a={};r.r(a),r.d(a,{NestedSize:function(){return l},Size:function(){return s}});var o=r(52322),i=r(45392),t=r(7325);const s=()=>(0,o.jsx)(t.Z,{"data-visual-test":"form-appearance-size",children:'<Form.Appearance size="medium">\n  <Form.Handler>\n    <Flex.Stack>\n      <Field.String label="String" value="Foo" />\n      <Field.Number label="Number" value={1234} />\n      <Field.Number\n        label="Number"\n        currency\n        currencyDisplay="name"\n        value={1234}\n        showStepControls\n      />\n      <Field.Date />\n      <Field.Email value="mail@dnb.no" />\n      <Field.Currency label="Amount" currencyDisplay="name" value={1234} />\n      <Field.Expiry />\n      <Field.NationalIdentityNumber value="12345678012" />\n      <Field.OrganizationNumber value="123123123" />\n      <Field.PhoneNumber />\n      <Field.PostalCodeAndCity\n        postalCode={{}}\n        city={{\n          value: \'Oslo\',\n        }}\n      />\n      <Field.SelectCountry />\n\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n      </Form.ButtonRow>\n    </Flex.Stack>\n  </Form.Handler>\n</Form.Appearance>\n'}),l=()=>(0,o.jsx)(t.Z,{"data-visual-test":"form-appearance-size-nested",children:'<Form.Appearance size="medium">\n  <Form.Handler>\n    <Flex.Stack>\n      <Field.String label="Medium" value="Foo" />\n\n      <Form.Appearance size="large">\n        <Field.String label="Large" value="Bar" />\n      </Form.Appearance>\n    </Flex.Stack>\n  </Form.Handler>\n</Form.Appearance>\n'});function c(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,i.ah)(),e.components);return a||p("Examples",!1),l||p("Examples.NestedSize",!0),s||p("Examples.Size",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{children:"Demos"}),"\n",(0,o.jsx)(n.h3,{children:"Medium size"}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(n.h3,{children:"Nested sizing"}),"\n",(0,o.jsx)(l,{})]})}var d=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)};function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},49945:function(e,n,r){r.r(n);var a=r(52322),o=r(45392);function i(e){const n=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Form.Appearance"})," is a provider for theming form fields."]}),"\n",(0,a.jsx)(n.p,{children:"For now, it only provides theming of sizes of input fields, including Autocomplete and Dropdown. See example below."}),"\n",(0,a.jsxs)(n.p,{children:["You can nest ",(0,a.jsx)(n.code,{children:"Form.Appearance"})," to provide different themes for different parts of the form."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"BETA:"})," The sizes are not 100% finalised and may change to be officially approved by UX through an RFC."]}),"\n",(0,a.jsx)(n.h2,{children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <Form.Appearance size="medium">\n    <Form.Input />\n    <Form.Appearance size="large">\n      <Form.Input />\n    </Form.Appearance>\n  </Form.Appearance>,\n)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-appearance-mdx-937d5dfa768e35c7803c.js.map