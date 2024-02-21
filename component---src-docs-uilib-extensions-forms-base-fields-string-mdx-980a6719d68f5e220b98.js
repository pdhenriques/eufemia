"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[3035,30327,13649],{97029:function(n,e,l){l.r(e);var a=l(52322),o=l(45392),r=l(50657),t=l(82085);function i(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(t.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(i,n)})):i()}},82085:function(n,e,l){l.r(e),l.d(e,{default:function(){return W}});var a={};l.r(a),l.d(a,{AsynchronousExternalBlurValidator:function(){return Z},AsynchronousExternalValidator:function(){return w},Capitalize:function(){return g},Clear:function(){return v},Disabled:function(){return j},Empty:function(){return s},Error:function(){return C},HorizontalLayout:function(){return x},Icons:function(){return p},Info:function(){return f},Label:function(){return h},LabelAndValue:function(){return c},MultipleEmpty:function(){return M},MultipleLabelAndValue:function(){return H},MultiplePlaceholder:function(){return A},MultipleWithHelp:function(){return I},Placeholder:function(){return u},SynchronousExternalBlurValidator:function(){return V},SynchronousExternalValidator:function(){return L},ValidateMaximumLengthCustomError:function(){return S},ValidateMinimumLength:function(){return E},ValidatePattern:function(){return y},ValidateRequired:function(){return F},Warning:function(){return b},Widths:function(){return m},WithHelp:function(){return d}});var o=l(52322),r=l(45392),t=l(52394),i=l(27439);const s=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  onFocus={(value) => console.log('onFocus', value)}\n  onBlur={(value) => console.log('onBlur', value)}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),u=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  placeholder=\"Enter a text...\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),h=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),c=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  label="Label text"\n  value="foo"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),d=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  label=\"Label text\"\n  value=\"foo\"\n  help={{\n    title: 'Help is available',\n    content:\n      'Take the time to help other people without expecting a reward or gratitude is definitely important in living an optimistic life.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),g=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  label="Label text"\n  value="foo bar"\n  capitalize\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),x=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  label="Label text"\n  value="foo"\n  layout="horizontal"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),m=()=>(0,o.jsx)(t.Z,{hideCode:!0,"data-visual-test":"string-widths",children:'<Flex.Stack>\n  <Field.String label="Default width (property omitted)" value="foo" />\n  <Field.String label="Small" value="foo" width="small" />\n  <Field.String label="Medium" value="foo" width="medium" />\n  <Field.String label="Large" value="foo" width="large" />\n  <Field.String label="Stretch" value="foo" width="stretch" />\n\n  <Field.String\n    label="Default width (property omitted)"\n    value="foo"\n    multiline\n  />\n  <Field.String label="Small" value="foo" width="small" multiline />\n  <Field.String label="Medium" value="foo" width="medium" multiline />\n  <Field.String label="Large" value="foo" width="large" multiline />\n  <Field.String label="Stretch" value="foo" width="stretch" multiline />\n</Flex.Stack>\n'}),p=()=>(0,o.jsx)(t.Z,{children:'\n<Field.String\n  label="Icon left"\n  value="foo"\n  leftIcon="check"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="Icon right"\n  value="foo"\n  rightIcon="loupe"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),v=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  value=\"foo\"\n  onChange={(value) => console.log('onChange', value)}\n  clear\n/>\n"}),j=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  disabled\n/>\n'}),f=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  info="Useful information (?)"\n/>\n'}),b=()=>(0,o.jsx)(t.Z,{scope:{FormError:i.Xq},children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  warning="I\'m warning you..."\n/>\n'}),C=()=>(0,o.jsx)(t.Z,{scope:{FormError:i.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new FormError('This is what is wrong...')}\n/>\n"}),F=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  required\n/>\n'}),E=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  value="foo"\n  label="Label text (minimum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  minLength={8}\n/>\n'}),S=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  value="foo"\n  label="Label text (maximum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maxLength={8}\n  errorMessages={{\n    maxLength: "You can\'t write THAT long.. Max 8 chars!",\n  }}\n/>\n'}),y=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  pattern="^foo123"\n/>\n'}),L=()=>(0,o.jsx)(t.Z,{scope:{FormError:i.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    value.length < 4 ? new FormError('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),w=()=>(0,o.jsx)(t.Z,{scope:{FormError:i.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5\n              ? new FormError('At least 5 characters')\n              : undefined,\n          ),\n        1500,\n      ),\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),V=()=>(0,o.jsx)(t.Z,{scope:{FormError:i.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    value.length < 4 ? new FormError('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),Z=()=>(0,o.jsx)(t.Z,{scope:{FormError:i.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5\n              ? new FormError('At least 5 characters')\n              : undefined,\n          ),\n        1500,\n      ),\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),M=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),A=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  placeholder=\"Enter text here\"\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),H=()=>(0,o.jsx)(t.Z,{children:'<Field.String\n  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tempus odio, nec interdum orci. Integer vehicula ipsum et risus finibus, vitae commodo ex luctus. Nam viverra sollicitudin dictum. Vivamus maximus dignissim lorem, vitae viverra erat dapibus a."\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  multiline\n/>\n'}),I=()=>(0,o.jsx)(t.Z,{children:"<Field.String\n  label=\"Label text\"\n  help={{\n    title: 'Help is available',\n    content: 'There is more happiness in giving than in receiving.',\n  }}\n  multiline\n  onChange={(value) => console.log('onChange', value)}\n/>\n"});function T(n){const e=Object.assign({h2:"h2",h3:"h3",h4:"h4"},(0,r.ah)(),n.components);return a||q("Examples",!1),Z||q("Examples.AsynchronousExternalBlurValidator",!0),w||q("Examples.AsynchronousExternalValidator",!0),g||q("Examples.Capitalize",!0),v||q("Examples.Clear",!0),j||q("Examples.Disabled",!0),s||q("Examples.Empty",!0),C||q("Examples.Error",!0),x||q("Examples.HorizontalLayout",!0),p||q("Examples.Icons",!0),f||q("Examples.Info",!0),h||q("Examples.Label",!0),c||q("Examples.LabelAndValue",!0),M||q("Examples.MultipleEmpty",!0),H||q("Examples.MultipleLabelAndValue",!0),A||q("Examples.MultiplePlaceholder",!0),I||q("Examples.MultipleWithHelp",!0),u||q("Examples.Placeholder",!0),V||q("Examples.SynchronousExternalBlurValidator",!0),L||q("Examples.SynchronousExternalValidator",!0),S||q("Examples.ValidateMaximumLengthCustomError",!0),E||q("Examples.ValidateMinimumLength",!0),y||q("Examples.ValidatePattern",!0),F||q("Examples.ValidateRequired",!0),b||q("Examples.Warning",!0),m||q("Examples.Widths",!0),d||q("Examples.WithHelp",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsx)(e.h3,{children:"Empty"}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(e.h3,{children:"Label"}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(e.h3,{children:"Label and value"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(e.h3,{children:"Capitalize each word"}),"\n",(0,o.jsx)(g,{}),"\n",(0,o.jsx)(e.h4,{children:"With help"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(e.h3,{children:"Horizontal layout"}),"\n",(0,o.jsx)(x,{}),"\n",(0,o.jsx)(e.h3,{children:"Icons"}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(e.h3,{children:"Clear"}),"\n",(0,o.jsx)(v,{}),"\n",(0,o.jsx)(e.h3,{children:"Disabled"}),"\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(e.h3,{children:"Info"}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(e.h3,{children:"Warning"}),"\n",(0,o.jsx)(b,{}),"\n",(0,o.jsx)(e.h3,{children:"Error"}),"\n",(0,o.jsx)(C,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,o.jsx)(F,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Minimum length"}),"\n",(0,o.jsx)(E,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Maximum length and custom error message"}),"\n",(0,o.jsx)(S,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Pattern"}),"\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(e.h3,{children:"Synchronous external validator (called on every change)"}),"\n",(0,o.jsx)(L,{}),"\n",(0,o.jsx)(e.h3,{children:"Asynchronous external validator (called on every change)"}),"\n",(0,o.jsx)(w,{}),"\n",(0,o.jsx)(e.h3,{children:"Synchronous external validator (called on blur)"}),"\n",(0,o.jsx)(V,{}),"\n",(0,o.jsx)(e.h3,{children:"Asynchronous external validator (called on blur)"}),"\n",(0,o.jsx)(Z,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, empty"}),"\n",(0,o.jsx)(M,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, placeholder"}),"\n",(0,o.jsx)(A,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, label & value"}),"\n",(0,o.jsx)(H,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, with help"}),"\n",(0,o.jsx)(I,{}),"\n",(0,o.jsx)(e.h3,{children:"Widths"}),"\n",(0,o.jsx)(m,{})]})}var W=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(T,n)})):T(n)};function q(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},50657:function(n,e,l){l.r(e);var a=l(52322),o=l(45392);function r(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ol:"ol",li:"li"},(0,o.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Field.String"})," is the base component for receiving user input where the target data is of type ",(0,a.jsx)(e.code,{children:"string"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["There is a corresponding ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Value/String",children:"Value.String"})," component."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.String path=\"/myState\" />)\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Browser autofill"}),"\n",(0,a.jsxs)(e.p,{children:["The string component does support HTML ",(0,a.jsx)(e.code,{children:"autocomplete"})," ",(0,a.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",children:"attributes"}),"."]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"You may either set the property directly on each field:"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'<Form.Handler>\n  <Field.String autoComplete="first-name" path="/your-pointer" />\n  <Field.String autoComplete="last-name" path="/your-pointer" />\n</Form.Handler>\n'})}),"\n",(0,a.jsxs)(e.ol,{start:"2",children:["\n",(0,a.jsxs)(e.li,{children:['Or use the "less-code" approach, by just giving the data pointer ',(0,a.jsx)(e.code,{children:"path"})," a meaningful name:"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'<Form.Handler autoComplete={true}>\n  <Field.String path="/firstName" />\n  <Field.String path="/lastName" />\n</Form.Handler>\n'})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"path"})," property will be used to set the ",(0,a.jsx)(e.code,{children:"name"})," attribute."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(r,n)})):r(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-string-mdx-980a6719d68f5e220b98.js.map