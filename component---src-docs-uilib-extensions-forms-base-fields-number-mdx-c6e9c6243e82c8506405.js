"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[39950,42487,14032],{74634:function(n,e,l){l.r(e);var r=l(52322),a=l(45392),t=l(51361),o=l(86067);function i(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.default,{}),"\n",(0,r.jsx)(o.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i()}},86067:function(n,e,l){l.r(e),l.d(e,{default:function(){return V}});var r={};l.r(r),l.d(r,{Alignment:function(){return m},Disabled:function(){return g},Empty:function(){return s},Error:function(){return v},HorizontalLayout:function(){return x},Info:function(){return p},Label:function(){return d},LabelAndValue:function(){return h},Percentage:function(){return F},Placeholder:function(){return u},ValidateMaximumCustomError:function(){return w},ValidateMinimum:function(){return C},ValidateRequired:function(){return f},Warning:function(){return j},Widths:function(){return b},WithHelp:function(){return c},WithSlider:function(){return y},WithStepControls:function(){return E},WithStepControlsDisabled:function(){return S},WithStepControlsError:function(){return N}});var a=l(52322),t=l(45392),o=l(52394),i=l(27439);l(2784);const s=()=>(0,a.jsx)(o.Z,{"data-visual-test":"number-input",children:"<Field.Number\n  onFocus={(value) => console.log('onFocus', value)}\n  onBlur={(value) => console.log('onBlur', value)}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),u=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  placeholder=\"Enter a number\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),d=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),h=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  value={420000.25}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),m=()=>(0,a.jsx)(o.Z,{children:'\n<Field.Number\n  align="center"\n  label="Center aligned (default)"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  align="left"\n  label="Left aligned"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  align="right"\n  label="Right aligned"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),c=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  value={12345}\n  label=\"Label text\"\n  help={{\n    title: 'Help is available',\n    content:\n      'Here is what a team can do for you. . . . It allows you to help others do their best.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),x=()=>(0,a.jsx)(o.Z,{children:'<Field.Number\n  value={420000}\n  label="Label text"\n  layout="horizontal"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),b=()=>(0,a.jsx)(o.Z,{hideCode:!0,"data-visual-test":"number-widths",children:'<Flex.Stack>\n  <Form.SubHeading>Without step controls</Form.SubHeading>\n\n  <Field.Number label="Default width (property omitted)" value={1234} />\n  <Field.Number label="Small" value={1234} width="small" />\n  <Field.Number\n    label="Medium (and medium size)"\n    value={1234}\n    width="medium"\n    size="medium"\n  />\n  <Field.Number\n    label="Large (and large size)"\n    value={1234}\n    width="large"\n    size="large"\n  />\n  <Field.Number label="Stretch" value={1234} width="stretch" />\n  <Form.SubHeading>With step controls</Form.SubHeading>\n  <Field.Number\n    showStepControls\n    label="Default width (property omitted)"\n    value={1234}\n  />\n  <Field.Number\n    showStepControls\n    label="Small"\n    value={1234}\n    width="small"\n  />\n  <Field.Number\n    showStepControls\n    label="Medium (and medium size)"\n    value={1234}\n    width="medium"\n    size="medium"\n  />\n  <Field.Number\n    showStepControls\n    label="Large (and large size)"\n    value={1234}\n    width="large"\n    size="large"\n  />\n  <Field.Number\n    showStepControls\n    label="Stretch"\n    value={1234}\n    width="stretch"\n  />\n</Flex.Stack>\n'}),g=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  value={135}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  disabled\n/>\n"}),p=()=>(0,a.jsx)(o.Z,{children:'<Field.Number\n  value={135}\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  info="Useful information (?)"\n/>\n'}),j=()=>(0,a.jsx)(o.Z,{scope:{FormError:i.Xq},children:'<Field.Number\n  value={135}\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  warning="I\'m warning you..."\n/>\n'}),v=()=>(0,a.jsx)(o.Z,{scope:{FormError:i.Xq},children:"<Field.Number\n  value={135}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new FormError('This is what is wrong...')}\n/>\n"}),f=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  value={123}\n  label=\"Remove and blur field\"\n  onChange={(value) => console.log('onChange', value)}\n  required\n/>\n"}),C=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  value={300}\n  label=\"Enter a number below 250 and blur to trigger error\"\n  onChange={(value) => console.log('onChange', value)}\n  minimum={250}\n/>\n"}),F=()=>(0,a.jsx)(o.Z,{children:"<Field.Number\n  value={80}\n  label=\"Percentage\"\n  onChange={(value) => console.log('onChange', value)}\n  minimum={90}\n/>\n"}),w=()=>(0,a.jsx)(o.Z,{children:'<Field.Number\n  value={200}\n  label="Enter a number above 250 and blur to trigger error"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maximum={250}\n  errorMessages={{\n    maximum: "You can\'t enter a number THAR large.. Max 250!",\n  }}\n/>\n'}),E=()=>(0,a.jsx)(o.Z,{"data-visual-test":"number-input-step-controls",children:"<Field.Number\n  showStepControls\n  minimum={0}\n  maximum={100}\n  step={10}\n  value={50}\n/>\n"}),N=()=>(0,a.jsx)(o.Z,{scope:{FormError:i.Xq},"data-visual-test":"number-input-step-controls-error",children:"<Field.Number\n  showStepControls\n  maximum={100}\n  value={150}\n  error={new FormError('You done messed up, A-a-ron!')}\n/>\n"}),S=()=>(0,a.jsx)(o.Z,{scope:{FormError:i.Xq},"data-visual-test":"number-input-step-controls-disabled",children:"<Field.Number showStepControls disabled />\n"}),y=()=>(0,a.jsx)(o.Z,{hideCode:!0,noInline:!0,children:'const Component = () => {\n  const [value, setValue] = React.useState(50000)\n  const settings = {\n    min: 0,\n    max: 100000,\n    step: 1000,\n  }\n  return (\n    <Grid.Container>\n      <Grid.Item\n        span={{\n          small: [1, 12],\n          medium: [1, 4],\n          large: [1, 3],\n        }}\n      >\n        <Field.Number\n          showStepControls\n          minimum={settings.min}\n          maximum={settings.max}\n          step={settings.step}\n          value={value}\n          onChange={(value) => setValue(value)}\n          width="stretch"\n          bottom="small"\n        />\n        <Slider\n          min={settings.min}\n          max={settings.max}\n          step={settings.step}\n          value={value}\n          onChange={({ value }) => setValue(parseFloat(String(value)))}\n          hideButtons\n          tooltip\n        />\n      </Grid.Item>\n    </Grid.Container>\n  )\n}\nrender(<Component />)\n'});function W(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,t.ah)(),n.components),{VisibleWhenVisualTest:l}=e;return r||Z("Examples",!1),m||Z("Examples.Alignment",!0),g||Z("Examples.Disabled",!0),s||Z("Examples.Empty",!0),v||Z("Examples.Error",!0),x||Z("Examples.HorizontalLayout",!0),p||Z("Examples.Info",!0),d||Z("Examples.Label",!0),h||Z("Examples.LabelAndValue",!0),F||Z("Examples.Percentage",!0),u||Z("Examples.Placeholder",!0),w||Z("Examples.ValidateMaximumCustomError",!0),C||Z("Examples.ValidateMinimum",!0),f||Z("Examples.ValidateRequired",!0),j||Z("Examples.Warning",!0),b||Z("Examples.Widths",!0),c||Z("Examples.WithHelp",!0),y||Z("Examples.WithSlider",!0),E||Z("Examples.WithStepControls",!0),S||Z("Examples.WithStepControlsDisabled",!0),N||Z("Examples.WithStepControlsError",!0),l||Z("VisibleWhenVisualTest",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demos"}),"\n",(0,a.jsx)(e.h3,{children:"Empty"}),"\n",(0,a.jsx)(s,{}),"\n",(0,a.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(e.h3,{children:"Label"}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(e.h3,{children:"Label and value"}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(e.h3,{children:"Alignment"}),"\n",(0,a.jsx)(m,{}),"\n",(0,a.jsx)(e.h3,{children:"Horizontal layout"}),"\n",(0,a.jsx)(x,{}),"\n",(0,a.jsx)(e.h3,{children:"With help"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(e.h3,{children:"With step controls"}),"\n",(0,a.jsx)(E,{}),"\n",(0,a.jsx)(e.h3,{children:"With step controls in conjunction with Slider"}),"\n",(0,a.jsx)(y,{}),"\n",(0,a.jsx)(e.h3,{children:"Disabled"}),"\n",(0,a.jsx)(g,{}),"\n",(0,a.jsx)(e.h3,{children:"Info"}),"\n",(0,a.jsx)(p,{}),"\n",(0,a.jsx)(e.h3,{children:"Warning"}),"\n",(0,a.jsx)(j,{}),"\n",(0,a.jsx)(e.h3,{children:"Error"}),"\n",(0,a.jsx)(v,{}),"\n",(0,a.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,a.jsx)(f,{}),"\n",(0,a.jsx)(e.h3,{children:"Validation - Minimum"}),"\n",(0,a.jsx)(C,{}),"\n",(0,a.jsx)(e.h3,{children:"Validation - Maximum and custom error message"}),"\n",(0,a.jsx)(w,{}),"\n",(0,a.jsx)(e.h3,{children:"Percentage"}),"\n",(0,a.jsx)(F,{}),"\n",(0,a.jsx)(e.h3,{children:"Widths"}),"\n",(0,a.jsx)(b,{}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)(N,{}),(0,a.jsx)(S,{})]})]})}var V=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(W,n)})):W(n)};function Z(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},51361:function(n,e,l){l.r(e);var r=l(52322),a=l(45392);function t(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Field.Number"})," is the base component for receiving user input where the target data is of type ",(0,r.jsx)(e.code,{children:"number"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["There is a corresponding ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Value/Number",children:"Value.Number"})," component."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.Number path=\"/myNumber\" />)\n"})}),"\n",(0,r.jsx)(e.h2,{children:"When to use and not to use"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Field.Number"})," only allows the user to enter numbers (negative and positive) and decimal numbers."]}),"\n",(0,r.jsx)(e.p,{children:"If a number has the type of number, and can not start with a zero, this field may be considered."}),"\n",(0,r.jsxs)(e.p,{children:["But for e.g. a customer number, you rather use ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String/",children:"Field.String"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Internally, it is used by e.g. ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/feature-fields/Currency/",children:"Field.Currency"}),"."]}),"\n",(0,r.jsx)(e.h2,{children:"Browser autofill"}),"\n",(0,r.jsxs)(e.p,{children:["Check out the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String/#autocomplete-and-autofill",children:"Field.String"})," docs about autocomplete."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(t,n)})):t(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-number-mdx-c6e9c6243e82c8506405.js.map