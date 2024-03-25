"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[64339],{52185:function(e,n,t){t.r(n);var s=t(52322),o=t(45392);function a(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"StepsLayout"})," is a wrapper component for showing forms with a ",(0,s.jsx)(n.a,{href:"/uilib/components/step-indicator/",children:"StepIndicator"})," for navigation between several steps."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/StepsLayout/Step/",children:"StepsLayout.Step"})," component to define the steps. It uses ",(0,s.jsx)(n.code,{children:"Flex.Stack"})," so you don't need to wrap your content additionally."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { StepsLayout, Form } from '@dnb/eufemia/extensions/forms'\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <StepsLayout>\n        <StepsLayout.Step title=\"Step 1\">...</StepsLayout.Step>\n      </StepsLayout>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also split or separate the ",(0,s.jsx)(n.code,{children:"StepsLayout.Step"})," and its content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { StepsLayout, Form } from '@dnb/eufemia/extensions/forms'\n\n// You can use the `StepsLayout.Step` in an external component like this:\nconst Step1 = () => (\n  <StepsLayout.Step title=\"Step 1\">\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n    <StepsLayout.NextButton />\n  </StepsLayout.Step>\n)\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <StepsLayout>\n        <Step1 />\n      </StepsLayout>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can mix and match the usage of ",(0,s.jsx)(n.code,{children:"StepsLayout.Step"})," and ",(0,s.jsx)(n.code,{children:"Flex.Stack"})," depending on your needs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { StepsLayout, Form } from '@dnb/eufemia/extensions/forms'\n\nconst Step2 = () => (\n  <Flex.Stack>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n  </Flex.Stack>\n)\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <StepsLayout>\n        <StepsLayout.Step title=\"Step 2\">\n          <Form.MainHeading>Heading</Form.MainHeading>\n          <Step2 />\n          <StepsLayout.Buttons />\n        </StepsLayout.Step>\n      </StepsLayout>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Controlling the steps"}),"\n",(0,s.jsxs)(n.p,{children:["To define a different initial index (than 0), you can use ",(0,s.jsx)(n.code,{children:"initialActiveIndex"})," hook."]}),"\n",(0,s.jsxs)(n.p,{children:["For controlling the steps interactively, you can use the ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/StepsLayout/useStep/",children:"useStep"})," hook:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { StepsLayout, Form } from '@dnb/eufemia/extensions/forms'\n\nconst MyStep = () => {\n  const { setActiveIndex, activeIndex } = StepsLayout.useStep()\n  return (\n    <Card stack>\n      <Button onClick={() => setActiveIndex(1)}>Go to step 2</Button>\n    </Card>\n  )\n}\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <StepsLayout initialActiveIndex={3}>\n        <StepsLayout.Step>\n          <MyStep />\n        </StepsLayout.Step>\n      </StepsLayout>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When using the ",(0,s.jsx)(n.code,{children:"useStep"})," hook outside of the ",(0,s.jsx)(n.code,{children:"StepsLayout"})," context, you need to provide na unique ",(0,s.jsx)(n.code,{children:"id"})," (string):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { StepsLayout, Form } from '@dnb/eufemia/extensions/forms'\n\nconst MyForm = () => {\n  const { setActiveIndex, activeIndex } = StepsLayout.useStep('unique-id')\n\n  return (\n    <Form.Handler>\n      <StepsLayout id=\"unique-id\">\n        <StepsLayout.Step>\n          <Button onClick={() => setActiveIndex(0)}>Step 1</Button>\n        </StepsLayout.Step>\n        <StepsLayout.Step>\n          <Button onClick={() => setActiveIndex(1)}>Step 2</Button>\n        </StepsLayout.Step>\n      </StepsLayout>\n    </Form.Handler>\n  )\n}\n"})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-steps-layout-steps-layout-info-mdx-1e891d28bec7b674e33a.js.map