"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[32362,3101,79321],{85316:function(n,e,a){a.r(e);var t=a(52322),i=a(45392),r=a(59958),l=a(54850);function o(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{}),"\n",(0,t.jsx)(l.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(o,n)})):o()}},54850:function(n,e,a){a.r(e),a.d(e,{default:function(){return g}});var t={};a.r(t),a.d(t,{Disabled:function(){return x},Empty:function(){return o},Label:function(){return u},LabelAndValue:function(){return c},OmitMask:function(){return s},Placeholder:function(){return d},ValidationFunction:function(){return j},ValidationRequired:function(){return p},WithError:function(){return m},WithHelp:function(){return h}});var i=a(52322),r=a(45392),l=a(7325);const o=()=>(0,i.jsx)(l.Z,{children:"<Field.NationalIdentityNumber\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),s=()=>(0,i.jsx)(l.Z,{children:"<Field.NationalIdentityNumber\n  onChange={(value) => console.log('onChange', value)}\n  omitMask\n/>\n"}),d=()=>(0,i.jsx)(l.Z,{children:"<Field.NationalIdentityNumber\n  placeholder=\"Enter 11 digits...\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),u=()=>(0,i.jsx)(l.Z,{children:"<Field.NationalIdentityNumber\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),c=()=>(0,i.jsx)(l.Z,{children:'<Field.NationalIdentityNumber\n  label="Label text"\n  value="01017501234"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),h=()=>(0,i.jsx)(l.Z,{children:"<Field.NationalIdentityNumber\n  label=\"Label text\"\n  value=\"01017501234\"\n  help={{\n    title: 'Help is available',\n    content: 'The more I help others to succeed, the more I succeed.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),x=()=>(0,i.jsx)(l.Z,{children:'<Field.NationalIdentityNumber\n  value="01010101010"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  disabled\n/>\n'}),m=()=>(0,i.jsx)(l.Z,{children:"<Field.NationalIdentityNumber\n  value=\"007\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new Error('This is what is wrong...')}\n/>\n"}),p=()=>(0,i.jsx)(l.Z,{children:'<Field.NationalIdentityNumber\n  value="12345678901"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  required\n/>\n'}),j=()=>(0,i.jsx)(l.Z,{noInline:!0,children:"const fnr = (value: string) =>\n  value.length >= 11\n    ? {\n        status: 'valid',\n      }\n    : {\n        status: 'invalid',\n      }\nconst validator = (value, errorMessages) => {\n  const result = fnr(value)\n  return result.status === 'invalid'\n    ? new Error(errorMessages.pattern)\n    : undefined\n}\nrender(\n  <Field.NationalIdentityNumber\n    required\n    value=\"123\"\n    validator={validator}\n    validateInitially\n  />,\n)\n"});function b(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a"},(0,r.ah)(),n.components);return t||f("Examples",!1),x||f("Examples.Disabled",!0),o||f("Examples.Empty",!0),u||f("Examples.Label",!0),c||f("Examples.LabelAndValue",!0),s||f("Examples.OmitMask",!0),d||f("Examples.Placeholder",!0),j||f("Examples.ValidationFunction",!0),p||f("Examples.ValidationRequired",!0),m||f("Examples.WithError",!0),h||f("Examples.WithHelp",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{children:"Demos"}),"\n",(0,i.jsx)(e.h3,{children:"Empty"}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(e.h3,{children:"Omit mask"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(e.h3,{children:"Label"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(e.h3,{children:"Label and value"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(e.h3,{children:"With help"}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(e.h3,{children:"Disabled"}),"\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(e.h3,{children:"Error"}),"\n",(0,i.jsx)(m,{}),"\n",(0,i.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,i.jsx)(p,{}),"\n",(0,i.jsx)(e.h3,{children:"Validation function"}),"\n",(0,i.jsxs)(e.p,{children:["You can provide your own validation function or may use the one ",(0,i.jsx)(e.a,{href:"https://github.com/navikt/fnrvalidator",children:"from NAV"}),"."]}),"\n",(0,i.jsx)(j,{})]})}var g=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(b,n)})):b(n)};function f(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},59958:function(n,e,a){a.r(e);var t=a(52322),i=a(45392);function r(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Field.NationalIdentityNumber"})," is a wrapper component for the ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String",children:"input of strings"}),", with user experience tailored for national identity number values."]}),"\n",(0,t.jsxs)(e.p,{children:["This field is meant for norwegian national identity numbers, and therefor takes a 11-digit string as a value. A norwegian national identity number can have a leading zero, hence why its a string and not a number.\nMore info can be found at ",(0,t.jsx)(e.a,{href:"https://www.skatteetaten.no/en/person/national-registry/identitetsnummer/fodselsnummer/#:~:text=A%20national%20identity%20number%20consists,national%20identity%20number%20are%20220676",children:"Skatteetaten"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.NationalIdentityNumber />)\n"})}),"\n",(0,t.jsxs)(e.p,{children:["There is a corresponding ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Value/NationalIdentityNumber",children:"Value.NationalIdentityNumber"})," component."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(r,n)})):r(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-national-identity-number-mdx-8f060cbbfa1ee097aec9.js.map