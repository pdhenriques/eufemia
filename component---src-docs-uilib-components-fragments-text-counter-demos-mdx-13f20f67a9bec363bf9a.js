"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[32864],{60483:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r={};e.r(r),e.d(r,{CountCharactersDown:function(){return c},CountCharactersExceeded:function(){return i},CountCharactersInteractive:function(){return x},CountCharactersUp:function(){return u}});var a=e(52322),o=e(45392),s=e(75333);function c(){return(0,a.jsx)(s.Z,{"data-visual-test":"text-counter-down",children:'<TextCounter variant="down" text="test" max={10} />\n'})}function u(){return(0,a.jsx)(s.Z,{"data-visual-test":"text-counter-up",children:'<TextCounter variant="up" text="test" max={10} />\n'})}function i(){return(0,a.jsx)(s.Z,{"data-visual-test":"text-counter-exceeded",children:'<TextCounter text="test" max={2} />\n'})}function x(){return(0,a.jsx)(s.Z,{noInline:!0,children:'const text = \'Count me!\'\nconst variant: TextCounterProps[\'variant\'] = \'down\'\nconst Counter = () => {\n  const { data } = Form.useData(\'text-counter\', {\n    max: 10,\n    variant,\n    text,\n  })\n  return (\n    <Flex.Stack divider="line">\n      <Flex.Vertical gap="x-small">\n        <Field.String label="Text" path="/text" maxLength={data.max} />\n        <TextCounter\n          variant={data.variant}\n          text={data.text}\n          max={data.max}\n        />\n      </Flex.Vertical>\n      <Field.Toggle\n        valueOn="down"\n        valueOff="up"\n        textOn="Down"\n        textOff="Up"\n        variant="buttons"\n        label="Variant"\n        path="/variant"\n      />\n    </Flex.Stack>\n  )\n}\nrender(\n  <Form.Handler id="text-counter">\n    <Counter />\n  </Form.Handler>,\n)\n'})}function d(n){const t=Object.assign({h2:"h2",h3:"h3"},(0,o.ah)(),n.components);return r||h("Examples",!1),c||h("Examples.CountCharactersDown",!0),i||h("Examples.CountCharactersExceeded",!0),x||h("Examples.CountCharactersInteractive",!0),u||h("Examples.CountCharactersUp",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:"Demos"}),"\n",(0,a.jsx)(t.h3,{children:"Interactive"}),"\n",(0,a.jsx)(x,{}),"\n",(0,a.jsx)(t.h3,{children:"Count characters downwards"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(t.h3,{children:"Count characters upwards"}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(t.h3,{children:"Show message as exceeded"}),"\n",(0,a.jsx)(i,{})]})}var l=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,o.ah)(),n.components);return t?(0,a.jsx)(t,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)};function h(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-fragments-text-counter-demos-mdx-13f20f67a9bec363bf9a.js.map