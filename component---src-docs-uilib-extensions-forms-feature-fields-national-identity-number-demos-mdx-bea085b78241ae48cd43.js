"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[3101],{54850:function(n,e,l){l.r(e),l.d(e,{default:function(){return p}});var a={};l.r(a),l.d(a,{Disabled:function(){return x},Empty:function(){return r},Label:function(){return d},LabelAndValue:function(){return h},OmitMask:function(){return s},Placeholder:function(){return u},ValidationFunction:function(){return m},ValidationRequired:function(){return b},WithError:function(){return v},WithHelp:function(){return c}});var t=l(52322),i=l(45392),o=l(7325);const r=()=>(0,t.jsx)(o.Z,{children:"<Field.NationalIdentityNumber\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),s=()=>(0,t.jsx)(o.Z,{children:"<Field.NationalIdentityNumber\n  onChange={(value) => console.log('onChange', value)}\n  omitMask\n/>\n"}),u=()=>(0,t.jsx)(o.Z,{children:"<Field.NationalIdentityNumber\n  placeholder=\"Enter 11 digits...\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),d=()=>(0,t.jsx)(o.Z,{children:"<Field.NationalIdentityNumber\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),h=()=>(0,t.jsx)(o.Z,{children:'<Field.NationalIdentityNumber\n  label="Label text"\n  value="01017501234"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),c=()=>(0,t.jsx)(o.Z,{children:"<Field.NationalIdentityNumber\n  label=\"Label text\"\n  value=\"01017501234\"\n  help={{\n    title: 'Help is available',\n    content: 'The more I help others to succeed, the more I succeed.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),x=()=>(0,t.jsx)(o.Z,{children:'<Field.NationalIdentityNumber\n  value="01010101010"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  disabled\n/>\n'}),v=()=>(0,t.jsx)(o.Z,{children:"<Field.NationalIdentityNumber\n  value=\"007\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new Error('This is what is wrong...')}\n/>\n"}),b=()=>(0,t.jsx)(o.Z,{children:'<Field.NationalIdentityNumber\n  value="12345678901"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  required\n/>\n'}),m=()=>(0,t.jsx)(o.Z,{noInline:!0,children:"const fnr = (value: string) =>\n  value.length >= 11\n    ? {\n        status: 'valid',\n      }\n    : {\n        status: 'invalid',\n      }\nconst validator = (value, errorMessages) => {\n  const result = fnr(value)\n  return result.status === 'invalid'\n    ? new Error(errorMessages.pattern)\n    : undefined\n}\nrender(\n  <Field.NationalIdentityNumber\n    required\n    value=\"123\"\n    validator={validator}\n    validateInitially\n  />,\n)\n"});function g(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a"},(0,i.ah)(),n.components);return a||j("Examples",!1),x||j("Examples.Disabled",!0),r||j("Examples.Empty",!0),d||j("Examples.Label",!0),h||j("Examples.LabelAndValue",!0),s||j("Examples.OmitMask",!0),u||j("Examples.Placeholder",!0),m||j("Examples.ValidationFunction",!0),b||j("Examples.ValidationRequired",!0),v||j("Examples.WithError",!0),c||j("Examples.WithHelp",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Demos"}),"\n",(0,t.jsx)(e.h3,{children:"Empty"}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(e.h3,{children:"Omit mask"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(e.h3,{children:"Label"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(e.h3,{children:"Label and value"}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(e.h3,{children:"With help"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(e.h3,{children:"Disabled"}),"\n",(0,t.jsx)(x,{}),"\n",(0,t.jsx)(e.h3,{children:"Error"}),"\n",(0,t.jsx)(v,{}),"\n",(0,t.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(e.h3,{children:"Validation function"}),"\n",(0,t.jsxs)(e.p,{children:["You can provide your own validation function or may use the one ",(0,t.jsx)(e.a,{href:"https://github.com/navikt/fnrvalidator",children:"from NAV"}),"."]}),"\n",(0,t.jsx)(m,{})]})}var p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(g,n)})):g(n)};function j(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-national-identity-number-demos-mdx-bea085b78241ae48cd43.js.map