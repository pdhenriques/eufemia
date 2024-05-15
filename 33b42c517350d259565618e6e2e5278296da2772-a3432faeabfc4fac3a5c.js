"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[94063],{83606:function(e,n,t){t.d(n,{aB:function(){return g},eE:function(){return v},t1:function(){return j},JV:function(){return F},_m:function(){return I},lC:function(){return y},Yj:function(){return S},z0:function(){return x},T_:function(){return f},jl:function(){return k},Ke:function(){return b}});var l=t(2784),r=t(72913),o=t(75333),i=t(28952),a=t(45869),s=t(84285),u=t(81665),d=t(72779),c=t.n(d),m=t(52322);let h=function(e){function n(n){var t;t=e.call(this,n)||this;const{rows:l}=n,r=[70,80,60,40,50,20,0];return t.rowsLength=new Array(l).fill(!0).map(((e,n)=>{const t=n%r.length;return t===r.length-1&&r.concat(r.reverse()),r[t]})),t}return(0,u.Z)(n,e),n.prototype.render=function(){const{rows:e,children:n,...t}=this.props;return(0,m.jsxs)("div",{className:c()("dnb-skeleton__figure","dnb-skeleton__figure--show"),"aria-busy":!0,...t,children:[(0,m.jsx)("div",{className:c()("dnb-h--xx-large","dnb-skeleton","dnb-skeleton--shape","dnb-space__bottom--large"),"aria-hidden":!0,style:{width:"50%"},children:"‌"}),this.rowsLength.map(((e,n)=>(0,m.jsx)("div",{className:c()("dnb-p","dnb-skeleton","dnb-skeleton--shape","dnb-space__top--x-small"),style:{width:`${e}%`},children:"‌"},n))),n]})},n}(l.PureComponent);h.contextType=i.Z,h.defaultProps={rows:3,children:null};var p=t(59525);const x=()=>(0,m.jsx)(o.Z,{children:'<Input label="Input" skeleton />\n'}),f=()=>(0,m.jsx)(o.Z,{"data-visual-test":"skeleton-exclude",noInline:!0,children:'const UserData = () => {\n  const [state, setState] = React.useState(true)\n  return (\n    <Skeleton show={state}>\n      <H2 top bottom>\n        Heading\n      </H2>\n      <P top bottom>\n        Paragraph Non habitasse ut nisi dictum laoreet ridiculus dui.\n      </P>\n      <Input label_direction="vertical" label="Input" />\n      <Skeleton.Exclude>\n        <ToggleButton\n          checked={state}\n          on_change={({ checked }) => setState(checked)}\n          top="large"\n        >\n          Toggle\n        </ToggleButton>\n      </Skeleton.Exclude>\n    </Skeleton>\n  )\n}\nrender(<UserData />)\n'}),b=()=>(0,m.jsx)(o.Z,{children:"<Skeleton show>\n  <H2 top bottom>\n    Heading\n  </H2>\n  <P top bottom>\n    Paragraph Non habitasse ut nisi dictum laoreet ridiculus dui.\n  </P>\n  <Button>Button</Button>\n</Skeleton>\n"}),g=()=>(0,m.jsx)(o.Z,{children:"<Provider skeleton={true}>\n  <H2 top bottom>\n    Heading\n  </H2>\n  <P top bottom>\n    Paragraph Non habitasse ut nisi dictum laoreet ridiculus dui.\n  </P>\n  <Button>Button</Button>\n</Provider>\n"}),v=()=>(0,m.jsx)(o.Z,{scope:{Article:h},"data-visual-test":"skeleton-figure-article",children:"<Skeleton show figure={<Article rows={5} />}>\n  hidden content\n</Skeleton>\n"}),k=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{show:!0,no_animation:!0,children:(0,m.jsx)(s.AllComponentsHorizontalTestCase,{"data-visual-test":"skeleton-all-horizontal"})}),(0,m.jsx)(a.Z,{show:!0,no_animation:!0,children:(0,m.jsx)(s.AllComponentsVerticalLabelsTestCase,{"data-visual-test":"skeleton-all-vertical"})})]}),y=()=>(0,m.jsx)(o.Z,{hidePreview:!0,children:"<Div id=\"your-app\">\n  <Skeleton show={true}>\n    <Input>I'm hidden behind the skeleton</Input>\n    <Input>I'm hidden behind the skeleton</Input>\n  </Skeleton>\n</Div>\n"}),I=()=>(0,m.jsx)(o.Z,{hidePreview:!0,children:'<Provider locale="nb-NO">\n  <Div id="your-app">\n    <Provider skeleton={true}>\n      <Input>I\'m hidden behind the skeleton</Input>\n      <Input>I\'m hidden behind the skeleton</Input>\n    </Provider>\n  </Div>\n</Provider>\n'}),F=()=>(0,m.jsx)(o.Z,{hidePreview:!0,children:"<Skeleton show={true}>\n  <Input>I'm hidden behind the skeleton</Input>\n\n  <Skeleton.Exclude>\n    <Input>I'm NOT hidden</Input>\n  </Skeleton.Exclude>\n</Skeleton>\n"}),S=()=>(0,m.jsx)(o.Z,{scope:{Suspense:l.Suspense},hidePreview:!0,hideToolbar:!0,children:'<Suspense\n  fallback={\n    <Skeleton show={true}>\n      <Div id="user-data" />\n    </Skeleton>\n  }\n>\n  <Div id="user-data" />\n</Suspense>\n'}),j=()=>(0,m.jsx)(o.Z,{hidePreview:!0,hideToolbar:!0,scope:{createBrowserHistory:r.lX,skeletonDOMAttributes:p.rZ,createSkeletonClass:p.BD,Context:i.Z},noInline:!0,children:'function Component({ skeleton = false, ...params } = {}) {\n  const context = React.useContext(Context)\n\n  // Handle accessibility features\n  skeletonDOMAttributes(params, skeleton, context)\n\n  // Handle CSS classes – use either "shape" or "font"\n  const className = createSkeletonClass(\'font\', skeleton, context)\n  return (\n    <div {...params} id="my-component" className={className}>\n      Hello World\n    </div>\n  )\n}\nrender(<Component />)\n'})},84285:function(e,n,t){t.r(n),t.d(n,{AllComponentsHorizontalTestCase:function(){return O},AllComponentsVerticalLabelsTestCase:function(){return D},AllComponentsVerticalTestCase:function(){return Q},FormSetAlternativeAfter:function(){return N},FormSetAlternativeBefore:function(){return A},FormSetAlternativeForms:function(){return G},HorizontalFlexItemResponsiveSize:function(){return H},HorizontalFlexItemResponsiveSizeCustomColumns:function(){return z},LayoutComponents:function(){return E},MediaQueryLiveExample:function(){return L},MediaQueryUseMedia:function(){return M},ResponsiveGridContainer:function(){return _},colors:function(){return T}});var l=t(2784),r=t(75333),o=t(35235),i=t(80215),a=t(3805),s=t(96844),u=t(75511),d=t(469),c=t(25807),m=t(71618),h=t(59194),p=t(20167),x=t(35944),f=t(55904),b=t(16353),g=t(99399),v=t(89751),k=t(38644),y=t(5284),I=t(88422),F=t(99210),S=t(67571),j=t(87682),w=t(81858),Z=t(60131),C=t(44086),P=t(52322);const E=()=>(0,P.jsx)(r.Z,{scope:{Field:y,Form:I},hideCode:!0,children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),T=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],H=()=>(0,P.jsx)(r.Z,{scope:{colors:T,TestElement:F.Z},hideCode:!0,"data-visual-test":"flex-item-size",children:"<Flex.Container>\n  <Flex.Item size={8}>\n    <TestElement style={colors[0]}>FlexItem (8)</TestElement>\n  </Flex.Item>\n  <Flex.Item size={4}>\n    <TestElement style={colors[1]}>FlexItem (4)</TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 4,\n    }}\n  >\n    <TestElement style={colors[2]}>\n      FlexItem (small: 8, medium: 4)\n    </TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 8,\n    }}\n  >\n    <TestElement style={colors[3]}>\n      FlexItem (small: 4, medium: 8)\n    </TestElement>\n  </Flex.Item>\n</Flex.Container>\n"}),z=()=>(0,P.jsx)(r.Z,{hideCode:!0,scope:{colors:T,TestElement:F.Z,Field:y,defaultBreakpoints:S.R1,defaultQueries:j.L},"data-visual-test":"flex-item-custom-size",noInline:!0,children:"const breakpoints = {\n  ...defaultBreakpoints,\n  xsmall: '30em',\n}\nconst queries = {\n  ...defaultQueries,\n  xsmall: {\n    min: 0,\n    max: 'xsmall',\n  },\n  small: {\n    min: 'xsmall',\n    max: 'small',\n  },\n}\nconst CustomMediaQuery = styled.div`\n  display: flex;\n  flex-direction: column;\n  .dnb-flex-container[data-media-key='xsmall'] .dnb-flex-item--responsive {\n    --size: var(--xsmall);\n  }\n`\nrender(\n  <CustomMediaQuery>\n    <Flex.Container\n      direction=\"horizontal\"\n      sizeCount={4}\n      breakpoints={breakpoints}\n      queries={queries}\n    >\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 3,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[0]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 1,\n          large: 2,\n        }}\n      >\n        <TestElement style={colors[1]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 1,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[2]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 3,\n          large: 4,\n        }}\n      >\n        <TestElement style={colors[3]}>FlexItem</TestElement>\n      </Flex.Item>\n    </Flex.Container>\n  </CustomMediaQuery>,\n)\n"}),B=()=>{const[e,n]=l.useState("undefined"!=typeof window?window.innerWidth:0);return l.useEffect((()=>{const e=()=>{n(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{innerWidth:e}},M=()=>(0,P.jsx)(r.Z,{scope:{useMedia:j.Z,useWindowWidth:B},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const { isSmall, isMedium, isLarge, isSSR } = useMedia()\n  const { innerWidth } = useWindowWidth()\n  return (\n    <Code>\n      <pre>\n        {JSON.stringify(\n          {\n            isSmall,\n            isMedium,\n            isLarge,\n            isSSR,\n            innerWidth,\n          },\n          null,\n          2,\n        )}\n      </pre>\n    </Code>\n  )\n}\nrender(<Playground />)\n"}),L=()=>(0,P.jsx)(r.Z,{scope:{MediaQuery:o.Z,useMediaQuery:w.Z},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const [query, updateQuery] = React.useState({\n    screen: true,\n    not: true,\n    min: 'small',\n    max: 'large',\n  })\n  const match1 = useMediaQuery({\n    matchOnSSR: true,\n    when: query,\n  })\n  const match2 = useMediaQuery({\n    matchOnSSR: true,\n    not: true,\n    when: query,\n  })\n  React.useEffect(() => {\n    console.log('mediaQuery:', match1, match2)\n  }, [match1, match2])\n  return (\n    <>\n      <Button\n        onClick={() => {\n          updateQuery({\n            ...query,\n            screen: !query.screen,\n          })\n        }}\n        right\n      >\n        Switch\n      </Button>\n      <MediaQuery when={query}>\n        <Code>when</Code>\n      </MediaQuery>\n      <MediaQuery not when={query}>\n        <Code>not when</Code>\n      </MediaQuery>\n    </>\n  )\n}\nrender(<Playground />)\n"}),_=()=>(0,P.jsx)(r.Z,{hideCode:!0,scope:{TestElement:F.Z,colors:T},children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),A=()=>(0,P.jsx)(r.Z,{children:'<FormSet label_direction="vertical">\n  <H2 top={0}>Heading</H2>\n  <FormRow label={<span className="dnb-h--medium">Legend</span>}>\n    <Input label="Label A" right />\n    <Input label="Label B" />\n  </FormRow>\n</FormSet>\n'}),N=()=>(0,P.jsx)(r.Z,{children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Form.Handler>\n    <H2 top={0}>Heading</H2>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Input label="Label A" />\n        <Input label="Label B" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Form.Handler>\n</Provider>\n'}),G=()=>(0,P.jsx)(r.Z,{children:'<Form.Handler>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Field.String label="Label A" width="medium" />\n        <Field.String label="Label B" width="large" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Flex.Stack>\n</Form.Handler>\n'}),R=function(e){let{direction:n="vertical",showText:t=!1,hideLabel:l=!1}=void 0===e?{}:e;const r={left:"horizontal"===n?"small":null,top:"horizontal"!==n?"small":null};let o={datePicker:"DatePicker:",dropdown:"Dropdown:",autocomplete:"Autocomplete:",checkbox:"Checkbox",radio:"Radio",radioGroup:"Radio Group:",toggleButton:"Toggle:",toggleButtonGroup:"Toggle Group:",switch:"Switch",input:"Input:",textarea:"Textarea:",slider:"Slider:"};l&&(o=Object.entries(o).reduce(((e,n)=>{let[t]=n;return e[t]="",e}),{}));const y=()=>(0,P.jsxs)(P.Fragment,{children:[t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i.Z,{...r,inline:!0,children:(0,P.jsxs)("p",{className:"dnb-p",children:["paragraph"," ",(0,P.jsx)(a.Z,{icon:"bell",size:"medium",...r,style:{margin:0}})]})}),"text"]}),(0,P.jsx)(s.Z,{text:"Button",...r}),(0,P.jsx)(s.Z,{icon:"add",...r}),(0,P.jsx)(u.ZP,{label:o.input,...r}),(0,P.jsx)(d.Z,{label:o.dropdown,data:["Item A","Item B","Item C"],...r}),(0,P.jsx)(c.Z,{label:o.autocomplete,data:["Item A","Item B","Item C"],...r}),(0,P.jsx)(m.Z,{label:o.datePicker,...r}),(0,P.jsx)(a.Z,{icon:"bell",size:"medium",...r}),(0,P.jsx)(h.Z,{label:o.checkbox,...r}),(0,P.jsx)(p.Z,{label:o.radio,...r}),(0,P.jsxs)(p.Z.Group,{label:o.radioGroup,...r,children:[(0,P.jsx)(p.Z,{label:o.radio,value:"a"}),(0,P.jsx)(p.Z,{label:o.radio,value:"b"})]}),(0,P.jsx)(x.Z,{label:o.toggleButton,text:"Toggle",...r}),(0,P.jsxs)(x.Z.Group,{label:o.toggleButtonGroup,...r,children:[(0,P.jsx)(x.Z,{text:"Toggle A",value:"a"}),(0,P.jsx)(x.Z,{text:"Toggle B",value:"b"})]}),(0,P.jsx)(f.Z,{label:o.switch,...r}),(0,P.jsx)(b.Z,{label:o.textarea,rows:"5",...r}),(0,P.jsx)("div",{style:{display:"inline-flex"},children:(0,P.jsx)(g.Z,{label:o.slider,value:50,...r})})]});return"horizontal"===n?(0,P.jsx)(v.Z,{style:{padding:"1rem",whiteSpace:"nowrap"},children:(0,P.jsx)(y,{})}):(y._supportsSpacingProps=!0,(0,P.jsx)(k.Z,{style:{padding:"1rem"},children:(0,P.jsx)(y,{})}))},Q=e=>(0,P.jsx)("div",{"data-visual-test":"form-components-alignment-vertical",...e,children:(0,P.jsx)(R,{direction:"vertical"})}),D=e=>(0,P.jsx)("div",{"data-visual-test":"form-components-alignment-vertical-labels",...e,children:(0,P.jsx)(Z.Z,{formElement:{label_direction:"vertical"},children:(0,P.jsx)(R,{direction:"vertical"})})}),O=e=>(0,P.jsx)("div",{"data-visual-test":"form-components-alignment-horizontal",...e,children:(0,P.jsx)(C.Z,{children:(0,P.jsx)(R,{direction:"horizontal"})})})},99210:function(e,n,t){t.d(n,{Z:function(){return a}});var l=t(72779),r=t.n(l),o=t(80215),i=t(52322);function a(e){let{className:n=null,...t}=e;return(0,i.jsx)(o.Z,{className:r()("dnb-forms-test-element",n),...t})}a._supportsSpacingProps=!0},72913:function(e,n,t){t.d(n,{lX:function(){return m}});var l,r=t(7896),o=l||(l={});o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE";var i=function(e){return e};function a(e){e.preventDefault(),e.returnValue=""}function s(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter((function(e){return e!==n}))}},call:function(n){e.forEach((function(e){return e&&e(n)}))}}}function u(){return Math.random().toString(36).substr(2,8)}function d(e){var n=e.pathname,t=e.search;return(void 0===n?"/":n)+(void 0===t?"":t)+(void 0===(e=e.hash)?"":e)}function c(e){var n={};if(e){var t=e.indexOf("#");0<=t&&(n.hash=e.substr(t),e=e.substr(0,t)),0<=(t=e.indexOf("?"))&&(n.search=e.substr(t),e=e.substr(0,t)),e&&(n.pathname=e)}return n}function m(e){function n(){var e=p.location,n=x.state||{};return[n.idx,i({pathname:e.pathname,search:e.search,hash:e.hash,state:n.usr||null,key:n.key||"default"})]}function t(e){return"string"==typeof e?e:d(e)}function o(e,n){return void 0===n&&(n=null),i((0,r.Z)({pathname:v.pathname,hash:"",search:""},"string"==typeof e?c(e):e,{state:n,key:u()}))}function m(e){b=e,e=n(),g=e[0],v=e[1],k.call({action:b,location:v})}function h(e){x.go(e)}void 0===e&&(e={});var p=void 0===(e=e.window)?document.defaultView:e,x=p.history,f=null;p.addEventListener("popstate",(function(){if(f)y.call(f),f=null;else{var e=l.Pop,t=n(),r=t[0];if(t=t[1],y.length){if(null!=r){var o=g-r;o&&(f={action:e,location:t,retry:function(){h(-1*o)}},h(o))}}else m(e)}}));var b=l.Pop,g=(e=n())[0],v=e[1],k=s(),y=s();return null==g&&(g=0,x.replaceState((0,r.Z)({},x.state,{idx:g}),"")),{get action(){return b},get location(){return v},createHref:t,push:function e(n,r){var i=l.Push,a=o(n,r);if(!y.length||(y.call({action:i,location:a,retry:function(){e(n,r)}}),0)){var s=[{usr:a.state,key:a.key,idx:g+1},t(a)];a=s[0],s=s[1];try{x.pushState(a,"",s)}catch(u){p.location.assign(s)}m(i)}},replace:function e(n,r){var i=l.Replace,a=o(n,r);y.length&&(y.call({action:i,location:a,retry:function(){e(n,r)}}),1)||(a=[{usr:a.state,key:a.key,idx:g},t(a)],x.replaceState(a[0],"",a[1]),m(i))},go:h,back:function(){h(-1)},forward:function(){h(1)},listen:function(e){return k.push(e)},block:function(e){var n=y.push(e);return 1===y.length&&p.addEventListener("beforeunload",a),function(){n(),y.length||p.removeEventListener("beforeunload",a)}}}}}}]);
//# sourceMappingURL=33b42c517350d259565618e6e2e5278296da2772-a3432faeabfc4fac3a5c.js.map