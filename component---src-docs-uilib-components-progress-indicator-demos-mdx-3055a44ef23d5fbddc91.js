"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[16969],{78745:function(n,r,e){e.r(r);var t=e(52322),s=e(45392),i=e(99187);function a(n){const r=Object.assign({h2:"h2",h3:"h3",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{children:"Demos"}),"\n",(0,t.jsx)(r.h3,{children:"Default ProgressIndicator is Circular"}),"\n",(0,t.jsx)(i.fU,{}),"\n",(0,t.jsx)(r.h3,{children:"Default Circular ProgressIndicator"}),"\n",(0,t.jsx)(i.YY,{}),"\n",(0,t.jsx)(r.h3,{children:"Circular ProgressIndicator with a label in a horizontal direction"}),"\n",(0,t.jsx)(i.sm,{}),"\n",(0,t.jsx)(r.h3,{children:"Circular ProgressIndicator with a label in a vertical direction"}),"\n",(0,t.jsx)(i.wE,{}),"\n",(0,t.jsx)(r.h3,{children:"Shows a large Circular ProgressIndicator with a static 50% in progress"}),"\n",(0,t.jsx)(i.r,{}),"\n",(0,t.jsx)(r.h3,{children:"Circular ProgressIndicator with random value"}),"\n",(0,t.jsx)(i.CC,{}),"\n",(0,t.jsx)(r.h3,{children:"Circular ProgressIndicator with random progress value to show the transition"}),"\n",(0,t.jsx)(i.MV,{}),"\n",(0,t.jsxs)(r.h3,{children:["Circular ProgressIndicator with random ",(0,t.jsx)(r.code,{children:"on_complete"})," callback"]}),"\n",(0,t.jsx)(i.jj,{}),"\n",(0,t.jsx)(r.h3,{children:"Circular ProgressIndicator inside a Dialog"}),"\n",(0,t.jsx)(i.tp,{}),"\n",(0,t.jsx)(r.h3,{children:"Default Linear ProgressIndicator"}),"\n",(0,t.jsx)(i.Zp,{}),"\n",(0,t.jsx)(r.h3,{children:"Small Linear ProgressIndicator"}),"\n",(0,t.jsx)(i.iQ,{}),"\n",(0,t.jsx)(r.h3,{children:"Linear ProgressIndicator with a label in a horizontal direction"}),"\n",(0,t.jsx)(i.qr,{}),"\n",(0,t.jsx)(r.h3,{children:"Linear ProgressIndicator with a label in a vertical direction"}),"\n",(0,t.jsx)(i.F,{}),"\n",(0,t.jsx)(r.h3,{children:"Shows a large Linear ProgressIndicator with a static 50% in progress"}),"\n",(0,t.jsx)(i.oK,{}),"\n",(0,t.jsx)(r.h3,{children:"Linear ProgressIndicator with random value"}),"\n",(0,t.jsx)(i.mO,{}),"\n",(0,t.jsx)(r.h3,{children:"Linear ProgressIndicator with random progress value to show the transition"}),"\n",(0,t.jsx)(i.xG,{}),"\n",(0,t.jsxs)(r.h3,{children:["Linear ProgressIndicator with random ",(0,t.jsx)(r.code,{children:"on_complete"})," callback"]}),"\n",(0,t.jsx)(i.dN,{}),"\n",(0,t.jsx)(r.h3,{children:"Linear ProgressIndicator inside a Dialog"}),"\n",(0,t.jsx)(i.Ol,{})]})}r.default=function(n){void 0===n&&(n={});const{wrapper:r}=Object.assign({},(0,s.ah)(),n.components);return r?(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(a,n)})):a(n)}},99187:function(n,r,e){e.d(r,{CC:function(){return d},F:function(){return j},MV:function(){return u},Ol:function(){return v},VL:function(){return C},YY:function(){return a},Zp:function(){return m},dN:function(){return P},fU:function(){return i},iQ:function(){return x},jj:function(){return h},mO:function(){return f},oK:function(){return I},qr:function(){return p},r:function(){return c},sm:function(){return o},tp:function(){return g},wE:function(){return l},xG:function(){return b}});e(2784);var t=e(7325),s=e(52322);const i=()=>(0,s.jsx)(t.Z,{children:"<ProgressIndicator />\n"}),a=()=>(0,s.jsx)(t.Z,{children:'<ProgressIndicator type="circular" />\n'}),o=()=>(0,s.jsx)(t.Z,{children:'<ProgressIndicator\n  // label="Custom label ..."\n  type="circular"\n  show_label={true}\n  label_direction="horizontal"\n/>\n'}),l=()=>(0,s.jsx)(t.Z,{children:'<ProgressIndicator\n  // label="Custom label ..."\n  type="circular"\n  show_label={true}\n  label_direction="vertical"\n/>\n'}),c=()=>(0,s.jsx)(t.Z,{"data-visual-test":"progress-indicator-circular--primary",children:'<ProgressIndicator\n  type="circular"\n  progress="50"\n  size="large"\n  no_animation\n/>\n'}),d=()=>(0,s.jsx)(t.Z,{noInline:!0,children:'const ChangeValue = () => {\n  const [value, setValue] = React.useState(50)\n  return (\n    <Flex.Horizontal align="center">\n      <ProgressIndicator\n        type="circular"\n        progress={value}\n        show_label\n        no_animation\n      />\n      <Button\n        left\n        size="small"\n        variant="secondary"\n        onClick={() => setValue(Math.random() * 100)}\n      >\n        Change\n      </Button>\n    </Flex.Horizontal>\n  )\n}\nrender(<ChangeValue />)\n'}),u=()=>(0,s.jsx)(t.Z,{noInline:!0,children:'const Example = () => {\n  const random = (min, max) =>\n    Math.floor(Math.random() * (max - min + 1)) + min\n  const [progress, setProgressIndicator] = React.useState(random(1, 100))\n  React.useEffect(() => {\n    const timer = setInterval(\n      () => setProgressIndicator(random(1, 100)),\n      1e3,\n    )\n    return () => clearInterval(timer)\n  })\n  return (\n    <ProgressIndicator type="circular" size="large" progress={progress} />\n  )\n}\nrender(<Example />)\n'}),h=()=>(0,s.jsx)(t.Z,{noInline:!0,children:'const Example = () => {\n  const random = (min, max) =>\n    Math.floor(Math.random() * (max - min + 1)) + min\n  const [visible, setVisible] = React.useState(true)\n  React.useEffect(() => {\n    const timer = setInterval(\n      () => setVisible(!visible),\n      random(2400, 4200),\n    )\n    return () => clearTimeout(timer)\n  })\n  return (\n    <ProgressIndicator\n      type="circular"\n      size="large"\n      visible={visible}\n      on_complete={() => {\n        console.log(\'on_complete_circular\')\n      }}\n    />\n  )\n}\nrender(<Example />)\n'}),g=()=>(0,s.jsx)(t.Z,{children:'<Dialog\n  spacing={false}\n  maxWidth="12rem"\n  fullscreen={false}\n  alignContent="centered"\n  hideCloseButton\n  triggerAttributes={{\n    text: \'Show\',\n  }}\n  preventClose={false}\n>\n  <ProgressIndicator\n    type="circular"\n    show_label\n    label_direction="vertical"\n    top="large"\n    bottom="large"\n    size="large"\n  />\n</Dialog>\n'}),m=()=>(0,s.jsx)(t.Z,{children:'<ProgressIndicator type="linear" />\n'}),x=()=>(0,s.jsx)(t.Z,{children:'<ProgressIndicator type="linear" size="small" />\n'}),p=()=>(0,s.jsx)(t.Z,{children:'<ProgressIndicator\n  type="linear"\n  // label="Custom label ..."\n  show_label={true}\n  label_direction="horizontal"\n/>\n'}),j=()=>(0,s.jsx)(t.Z,{children:'<ProgressIndicator\n  type="linear"\n  // label="Custom label ..."\n  show_label={true}\n  label_direction="vertical"\n/>\n'}),I=()=>(0,s.jsx)(t.Z,{"data-visual-test":"progress-indicator-linear--primary",children:'<ProgressIndicator\n  type="linear"\n  progress="50"\n  size="large"\n  no_animation\n/>\n'}),f=()=>(0,s.jsx)(t.Z,{noInline:!0,children:'const ChangeValue = () => {\n  const [value, setValue] = React.useState(50)\n  return (\n    <FormRow centered>\n      <ProgressIndicator type="linear" progress={value} no_animation />\n      <Button\n        left\n        size="small"\n        variant="secondary"\n        onClick={() => setValue(Math.random() * 100)}\n      >\n        Change\n      </Button>\n    </FormRow>\n  )\n}\nrender(<ChangeValue />)\n'}),b=()=>(0,s.jsx)(t.Z,{noInline:!0,children:'const Example = () => {\n  const random = (min, max) =>\n    Math.floor(Math.random() * (max - min + 1)) + min\n  const [progress, setProgressIndicator] = React.useState(random(1, 100))\n  React.useEffect(() => {\n    const timer = setInterval(\n      () => setProgressIndicator(random(1, 100)),\n      1e3,\n    )\n    return () => clearInterval(timer)\n  })\n  return <ProgressIndicator type="linear" progress={progress} />\n}\nrender(<Example />)\n'}),P=()=>(0,s.jsx)(t.Z,{noInline:!0,children:'const Example = () => {\n  const random = (min, max) =>\n    Math.floor(Math.random() * (max - min + 1)) + min\n  const [visible, setVisible] = React.useState(true)\n  React.useEffect(() => {\n    const timer = setInterval(\n      () => setVisible(!visible),\n      random(2400, 4200),\n    )\n    return () => clearTimeout(timer)\n  })\n  return (\n    <ProgressIndicator\n      type="linear"\n      size="large"\n      visible={visible}\n      on_complete={() => {\n        console.log(\'on_complete_linear\')\n      }}\n    />\n  )\n}\nrender(<Example />)\n'}),v=()=>(0,s.jsx)(t.Z,{children:'<Dialog\n  spacing={false}\n  maxWidth="12rem"\n  fullscreen={false}\n  alignContent="centered"\n  hideCloseButton\n  triggerAttributes={{\n    text: \'Show\',\n  }}\n  preventClose={false}\n>\n  <ProgressIndicator\n    type="linear"\n    show_label\n    label_direction="vertical"\n    top="large"\n    bottom="large"\n  />\n</Dialog>\n'}),C=()=>(0,s.jsx)(t.Z,{"data-visual-test":"progress-indicator-sizes",children:'<div\n  style={{\n    display: \'flex\',\n  }}\n>\n  <ProgressIndicator progress="50" size="small" />\n  <ProgressIndicator progress="50" size="medium" />\n  <ProgressIndicator progress="50" />\n  <ProgressIndicator progress="50" size="large" />\n</div>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-progress-indicator-demos-mdx-3055a44ef23d5fbddc91.js.map