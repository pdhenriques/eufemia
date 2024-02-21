"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[50843,17551,7439],{67413:function(e,n,o){o.r(n);var s=o(52322),r=o(45392),a=o(22183),l=o(15641);function t(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.default,{}),"\n",(0,s.jsx)(l.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t()}},15641:function(e,n,o){o.r(n),o.d(n,{default:function(){return p}});var s={};o.r(s),o.d(s,{Disabled:function(){return u},Error:function(){return w},Label:function(){return d},LabelAndValue:function(){return c},Pattern:function(){return g},Placeholder:function(){return i},ValidationRequired:function(){return v},WithHelp:function(){return h}});var r=o(52322),a=o(45392),l=o(52394),t=o(27439);const i=()=>(0,r.jsx)(l.Z,{children:"<Field.Password\n  placeholder=\"Please enter your password\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n/>\n"}),d=()=>(0,r.jsx)(l.Z,{children:"<Field.Password\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n/>\n"}),c=()=>(0,r.jsx)(l.Z,{children:"<Field.Password\n  label=\"Label text\"\n  value=\"password123\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n/>\n"}),h=()=>(0,r.jsx)(l.Z,{children:"<Field.Password\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  help={{\n    title: 'Help is available',\n    content:\n      'Helping others, encouraging others, are often acts of being kind that have more meaning that you may realize.',\n  }}\n/>\n"}),u=()=>(0,r.jsx)(l.Z,{children:"<Field.Password\n  value=\"password123\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  disabled\n/>\n"}),w=()=>(0,r.jsx)(l.Z,{scope:{FormError:t.Xq},children:"<Field.Password\n  value=\"your-birthday\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  error={new FormError('This is what is wrong...')}\n/>\n"}),v=()=>(0,r.jsx)(l.Z,{children:"<Field.Password\n  value=\"pass\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  required\n/>\n"}),g=()=>(0,r.jsx)(l.Z,{children:"<Field.Password\n  value=\"password123\"\n  pattern=\"\\w{8}[0-9]{2}\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  required\n/>\n"});function x(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,a.ah)(),e.components);return s||j("Examples",!1),u||j("Examples.Disabled",!0),w||j("Examples.Error",!0),d||j("Examples.Label",!0),c||j("Examples.LabelAndValue",!0),g||j("Examples.Pattern",!0),i||j("Examples.Placeholder",!0),v||j("Examples.ValidationRequired",!0),h||j("Examples.WithHelp",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Demos"}),"\n",(0,r.jsx)(n.h3,{children:"Placeholder"}),"\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h3,{children:"Label"}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h3,{children:"Label and value"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h3,{children:"With help"}),"\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(n.h3,{children:"Disabled"}),"\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(n.h3,{children:"Error"}),"\n",(0,r.jsx)(w,{}),"\n",(0,r.jsx)(n.h3,{children:"Validation - Required"}),"\n",(0,r.jsx)(v,{}),"\n",(0,r.jsx)(n.h3,{children:"Validation - Pattern"}),"\n",(0,r.jsx)(g,{})]})}var p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(x,e)})):x(e)};function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},22183:function(e,n,o){o.r(n);var s=o(52322),r=o(45392);function a(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Field.Password"})," is a wrapper component for the ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/base-fields/String",children:"input of strings"}),", with user experience tailored for passwords. The input also comes with a button to toggle the password visibility."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.Password />)\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Validation"}),"\n",(0,s.jsxs)(n.p,{children:["By default it has no validation. But you can enable it by giving a ",(0,s.jsx)(n.code,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"pattern"}),", ",(0,s.jsx)(n.code,{children:"schema"})," or ",(0,s.jsx)(n.code,{children:"validator"})," property with the needed validation. More about validation in the ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/getting-started/#validation",children:"Getting Started"})," section."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-password-mdx-dedf717aa7b9a6e4a27a.js.map