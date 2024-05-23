"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[97057,28649,66433],{21561:function(r,n,e){e.r(n);var o=e(52322),s=e(45392),t=e(578),i=e(25425);function a(r){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.default,{}),"\n",(0,o.jsx)(i.default,{})]})}n.default=function(r){void 0===r&&(r={});const{wrapper:n}=Object.assign({},(0,s.ah)(),r.components);return n?(0,o.jsx)(n,Object.assign({},r,{children:(0,o.jsx)(a,r)})):a()}},25425:function(r,n,e){e.r(n),e.d(n,{default:function(){return c}});var o={};e.r(o),e.d(o,{HasErrors:function(){return a}});var s=e(52322),t=e(45392),i=e(75333);function a(){return(0,s.jsx)(i.Z,{noInline:!0,children:'const Component = () => {\n  const { data } = Form.useData(\'default-id\', {\n    showError: true,\n    isVisible: true,\n  })\n  const { hasErrors, hasFieldError } = Form.useError(\'default-id\')\n  return (\n    <Form.Handler id="default-id">\n      <Flex.Stack>\n        <Section innerSpace backgroundColor="sand-yellow" breakout={false}>\n          <output>\n            <pre>\n              hasErrors: {JSON.stringify(hasErrors(), null, 2)}\n              hasFieldError:{\' \'}\n              {JSON.stringify(hasFieldError(\'/foo\'), null, 2)}\n            </pre>\n          </output>\n        </Section>\n\n        <Field.Boolean label="Error" variant="button" path="/showError" />\n\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n        />\n\n        <Form.Visibility pathTrue="/isVisible">\n          <Field.String\n            path="/foo"\n            label="Label"\n            value={data.showError ? \'error\' : \'valid\'}\n            pattern="^valid$"\n            validateInitially\n          />\n        </Form.Visibility>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n'})}function l(r){const n=Object.assign({h2:"h2",h3:"h3"},(0,t.ah)(),r.components);return o||d("Examples",!1),a||d("Examples.HasErrors",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Demos"}),"\n",(0,s.jsx)(n.h3,{children:"Check for errors with hasErrors"}),"\n",(0,s.jsx)(a,{})]})}var c=function(r){void 0===r&&(r={});const{wrapper:n}=Object.assign({},(0,t.ah)(),r.components);return n?(0,s.jsx)(n,Object.assign({},r,{children:(0,s.jsx)(l,r)})):l(r)};function d(r,n){throw new Error("Expected "+(n?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}},578:function(r,n,e){e.r(n);var o=e(52322),s=e(45392);function t(r){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,s.ah)(),r.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.code,{children:"Form.useError"})," hook, you can monitor your form errors outside of the form itself."]}),"\n",(0,o.jsx)(n.h2,{children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["You can use it in several ways. Like within the context of ",(0,o.jsx)(n.code,{children:"Form.Handler"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  return (\n    <Form.Handler>\n      ...\n      <Component />\n      ...\n    </Form.Handler>\n  )\n}\n\nfunction Component() {\n  const { hasErrors, hasFieldError, setFormError } = Form.useError()\n\n  hasErrors() // true if any error is present\n  hasFieldError('/path/to/field') // true if the field has an error\n  setFormError(new Error('This is a global form error')) // report a form error\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Or by linking the hook together with the form by using the ",(0,o.jsx)(n.code,{children:"id"})," (string) property:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  return (\n    <>\n      <Form.Handler id=\"unique\">...</Form.Handler>\n      <Component />\n    </>\n  )\n}\n\nfunction Component() {\n  const { hasErrors, hasFieldError } = Form.useError('unique')\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or by using it in the form component itself:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  const { hasErrors } = Form.useError('unique')\n\n  return <Form.Handler id=\"unique\">...</Form.Handler>\n}\n"})}),"\n",(0,o.jsx)(n.h2,{children:"Report a form error"}),"\n",(0,o.jsxs)(n.p,{children:["You can also report a form error that gets displayed on the bottom of the form by using the ",(0,o.jsx)(n.code,{children:"Form.useError"})," hook:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  const { setFormError } = Form.useError('unique')\n\n  useEffect(() => {\n    setFormError('This is a global form error')\n  }, [])\n\n  return <Form.Handler id=\"unique\">...</Form.Handler>\n}\n"})}),"\n",(0,o.jsx)(n.h2,{children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:["The form error is connected with the ",(0,o.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," itself via ",(0,o.jsx)(n.code,{children:"aria-labelledby"})," for screen reader support."]})]})}n.default=function(r){void 0===r&&(r={});const{wrapper:n}=Object.assign({},(0,s.ah)(),r.components);return n?(0,o.jsx)(n,Object.assign({},r,{children:(0,o.jsx)(t,r)})):t(r)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-use-error-mdx-d91007f2bdad615083f2.js.map