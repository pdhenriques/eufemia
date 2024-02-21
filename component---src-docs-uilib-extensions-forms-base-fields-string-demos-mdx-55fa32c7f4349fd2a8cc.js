"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[30327],{82085:function(n,e,l){l.r(e),l.d(e,{default:function(){return H}});var a={};l.r(a),l.d(a,{AsynchronousExternalBlurValidator:function(){return Z},AsynchronousExternalValidator:function(){return y},Capitalize:function(){return g},Clear:function(){return p},Disabled:function(){return j},Empty:function(){return u},Error:function(){return C},HorizontalLayout:function(){return x},Icons:function(){return v},Info:function(){return f},Label:function(){return h},LabelAndValue:function(){return c},MultipleEmpty:function(){return M},MultipleLabelAndValue:function(){return I},MultiplePlaceholder:function(){return A},MultipleWithHelp:function(){return W},Placeholder:function(){return s},SynchronousExternalBlurValidator:function(){return V},SynchronousExternalValidator:function(){return w},ValidateMaximumLengthCustomError:function(){return S},ValidateMinimumLength:function(){return F},ValidatePattern:function(){return L},ValidateRequired:function(){return E},Warning:function(){return b},Widths:function(){return m},WithHelp:function(){return d}});var o=l(52322),r=l(45392),i=l(52394),t=l(27439);const u=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  onFocus={(value) => console.log('onFocus', value)}\n  onBlur={(value) => console.log('onBlur', value)}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),s=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  placeholder=\"Enter a text...\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),h=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),c=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  label="Label text"\n  value="foo"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),d=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  label=\"Label text\"\n  value=\"foo\"\n  help={{\n    title: 'Help is available',\n    content:\n      'Take the time to help other people without expecting a reward or gratitude is definitely important in living an optimistic life.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),g=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  label="Label text"\n  value="foo bar"\n  capitalize\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),x=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  label="Label text"\n  value="foo"\n  layout="horizontal"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),m=()=>(0,o.jsx)(i.Z,{hideCode:!0,"data-visual-test":"string-widths",children:'<Flex.Stack>\n  <Field.String label="Default width (property omitted)" value="foo" />\n  <Field.String label="Small" value="foo" width="small" />\n  <Field.String label="Medium" value="foo" width="medium" />\n  <Field.String label="Large" value="foo" width="large" />\n  <Field.String label="Stretch" value="foo" width="stretch" />\n\n  <Field.String\n    label="Default width (property omitted)"\n    value="foo"\n    multiline\n  />\n  <Field.String label="Small" value="foo" width="small" multiline />\n  <Field.String label="Medium" value="foo" width="medium" multiline />\n  <Field.String label="Large" value="foo" width="large" multiline />\n  <Field.String label="Stretch" value="foo" width="stretch" multiline />\n</Flex.Stack>\n'}),v=()=>(0,o.jsx)(i.Z,{children:'\n<Field.String\n  label="Icon left"\n  value="foo"\n  leftIcon="check"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="Icon right"\n  value="foo"\n  rightIcon="loupe"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),p=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  value=\"foo\"\n  onChange={(value) => console.log('onChange', value)}\n  clear\n/>\n"}),j=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  disabled\n/>\n'}),f=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  info="Useful information (?)"\n/>\n'}),b=()=>(0,o.jsx)(i.Z,{scope:{FormError:t.Xq},children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  warning="I\'m warning you..."\n/>\n'}),C=()=>(0,o.jsx)(i.Z,{scope:{FormError:t.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new FormError('This is what is wrong...')}\n/>\n"}),E=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  required\n/>\n'}),F=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  value="foo"\n  label="Label text (minimum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  minLength={8}\n/>\n'}),S=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  value="foo"\n  label="Label text (maximum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maxLength={8}\n  errorMessages={{\n    maxLength: "You can\'t write THAT long.. Max 8 chars!",\n  }}\n/>\n'}),L=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  pattern="^foo123"\n/>\n'}),w=()=>(0,o.jsx)(i.Z,{scope:{FormError:t.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    value.length < 4 ? new FormError('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),y=()=>(0,o.jsx)(i.Z,{scope:{FormError:t.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5\n              ? new FormError('At least 5 characters')\n              : undefined,\n          ),\n        1500,\n      ),\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),V=()=>(0,o.jsx)(i.Z,{scope:{FormError:t.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    value.length < 4 ? new FormError('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),Z=()=>(0,o.jsx)(i.Z,{scope:{FormError:t.Xq},children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5\n              ? new FormError('At least 5 characters')\n              : undefined,\n          ),\n        1500,\n      ),\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),M=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),A=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  placeholder=\"Enter text here\"\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),I=()=>(0,o.jsx)(i.Z,{children:'<Field.String\n  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tempus odio, nec interdum orci. Integer vehicula ipsum et risus finibus, vitae commodo ex luctus. Nam viverra sollicitudin dictum. Vivamus maximus dignissim lorem, vitae viverra erat dapibus a."\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  multiline\n/>\n'}),W=()=>(0,o.jsx)(i.Z,{children:"<Field.String\n  label=\"Label text\"\n  help={{\n    title: 'Help is available',\n    content: 'There is more happiness in giving than in receiving.',\n  }}\n  multiline\n  onChange={(value) => console.log('onChange', value)}\n/>\n"});function q(n){const e=Object.assign({h2:"h2",h3:"h3",h4:"h4"},(0,r.ah)(),n.components);return a||P("Examples",!1),Z||P("Examples.AsynchronousExternalBlurValidator",!0),y||P("Examples.AsynchronousExternalValidator",!0),g||P("Examples.Capitalize",!0),p||P("Examples.Clear",!0),j||P("Examples.Disabled",!0),u||P("Examples.Empty",!0),C||P("Examples.Error",!0),x||P("Examples.HorizontalLayout",!0),v||P("Examples.Icons",!0),f||P("Examples.Info",!0),h||P("Examples.Label",!0),c||P("Examples.LabelAndValue",!0),M||P("Examples.MultipleEmpty",!0),I||P("Examples.MultipleLabelAndValue",!0),A||P("Examples.MultiplePlaceholder",!0),W||P("Examples.MultipleWithHelp",!0),s||P("Examples.Placeholder",!0),V||P("Examples.SynchronousExternalBlurValidator",!0),w||P("Examples.SynchronousExternalValidator",!0),S||P("Examples.ValidateMaximumLengthCustomError",!0),F||P("Examples.ValidateMinimumLength",!0),L||P("Examples.ValidatePattern",!0),E||P("Examples.ValidateRequired",!0),b||P("Examples.Warning",!0),m||P("Examples.Widths",!0),d||P("Examples.WithHelp",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsx)(e.h3,{children:"Empty"}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(e.h3,{children:"Label"}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(e.h3,{children:"Label and value"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(e.h3,{children:"Capitalize each word"}),"\n",(0,o.jsx)(g,{}),"\n",(0,o.jsx)(e.h4,{children:"With help"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(e.h3,{children:"Horizontal layout"}),"\n",(0,o.jsx)(x,{}),"\n",(0,o.jsx)(e.h3,{children:"Icons"}),"\n",(0,o.jsx)(v,{}),"\n",(0,o.jsx)(e.h3,{children:"Clear"}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(e.h3,{children:"Disabled"}),"\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(e.h3,{children:"Info"}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(e.h3,{children:"Warning"}),"\n",(0,o.jsx)(b,{}),"\n",(0,o.jsx)(e.h3,{children:"Error"}),"\n",(0,o.jsx)(C,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,o.jsx)(E,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Minimum length"}),"\n",(0,o.jsx)(F,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Maximum length and custom error message"}),"\n",(0,o.jsx)(S,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Pattern"}),"\n",(0,o.jsx)(L,{}),"\n",(0,o.jsx)(e.h3,{children:"Synchronous external validator (called on every change)"}),"\n",(0,o.jsx)(w,{}),"\n",(0,o.jsx)(e.h3,{children:"Asynchronous external validator (called on every change)"}),"\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(e.h3,{children:"Synchronous external validator (called on blur)"}),"\n",(0,o.jsx)(V,{}),"\n",(0,o.jsx)(e.h3,{children:"Asynchronous external validator (called on blur)"}),"\n",(0,o.jsx)(Z,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, empty"}),"\n",(0,o.jsx)(M,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, placeholder"}),"\n",(0,o.jsx)(A,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, label & value"}),"\n",(0,o.jsx)(I,{}),"\n",(0,o.jsx)(e.h3,{children:"Multiline, with help"}),"\n",(0,o.jsx)(W,{}),"\n",(0,o.jsx)(e.h3,{children:"Widths"}),"\n",(0,o.jsx)(m,{})]})}var H=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(q,n)})):q(n)};function P(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-string-demos-mdx-55fa32c7f4349fd2a8cc.js.map