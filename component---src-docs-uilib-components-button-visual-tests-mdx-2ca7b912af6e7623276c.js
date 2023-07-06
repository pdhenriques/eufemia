"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[5094],{34121:function(n,t,i){i.r(t);var o=i(52322),e=i(45392),r=i(49938);function a(n){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.IS,{}),"\n",(0,o.jsx)(r.qS,{}),"\n",(0,o.jsx)(r.zM,{}),"\n",(0,o.jsx)(r.a1,{})]})}t.default=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,e.ah)(),n.components);return t?(0,o.jsx)(t,Object.assign({},n,{children:(0,o.jsx)(a,n)})):a()}},49938:function(n,t,i){i.d(t,{CG:function(){return y},Cr:function(){return x},DF:function(){return l},Ei:function(){return m},Eq:function(){return s},Gb:function(){return S},HL:function(){return w},IS:function(){return D},LS:function(){return Z},PL:function(){return u},RS:function(){return _},a1:function(){return k},iE:function(){return v},ij:function(){return h},jm:function(){return d},oM:function(){return b},oq:function(){return j},pP:function(){return T},qS:function(){return z},y:function(){return g},zM:function(){return p},zh:function(){return f},zx:function(){return B}});var o=i(92310),e=i(84385),r=i(46515),a=i(49502),c=i(52322);const l=()=>(0,c.jsx)(o.Z,{children:'<Button\n  text="Primary button with text only"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  data-visual-test="button-primary"\n/>\n'}),u=()=>(0,c.jsx)(o.Z,{children:'<Button\n  variant="secondary"\n  onClick={() => {\n    console.log(\'onClick\')\n  }}\n  data-visual-test="button-secondary"\n>\n  Secondary button with text only\n</Button>\n'}),s=()=>(0,c.jsx)(o.Z,{"data-visual-test":"button-disabled",children:'\n<Button text="Disabled primary button" disabled right />\n<Button\n  text="Disabled secondary button"\n  variant="secondary"\n  disabled\n  right\n/>\n<Button\n  text="Disabled tertiary button"\n  variant="tertiary"\n  disabled\n  right\n/>\n<Button title="Disabled Icon Button" icon="calendar" disabled right />\n\n'}),d=()=>(0,c.jsx)(o.Z,{scope:{question:e.Z},children:'\n<Button text="Primary button error" status="error" />\n<Button\n  text="Secondary button error"\n  variant="secondary"\n  status="error"\n  left\n/>\n<Button\n  title="Primary icon button error"\n  variant="primary"\n  icon={question}\n  size="default"\n  status="error"\n  left\n/>\n<Button\n  title="Secondary icon button error"\n  icon={question}\n  size="default"\n  status="error"\n  left\n/>\n\n'}),h=()=>(0,c.jsx)(o.Z,{children:'<Button text="Primary button with icon" icon="chevron_right" />\n'}),g=()=>(0,c.jsx)(o.Z,{children:'<Button icon_position="left" icon="chevron_left">\n  Primary button with icon on left\n</Button>\n'}),b=()=>(0,c.jsx)(o.Z,{"data-visual-test":"button-tertiary-all",children:'\n<Button\n  variant="tertiary"\n  text="Tertiary button with icon on left"\n  icon_position="left"\n  icon="chevron_left"\n  data-visual-test="button-tertiary"\n/>\n<Button\n  variant="tertiary"\n  text={<span>Text inside additional span</span>}\n  icon_position="left"\n  icon="chevron_left"\n  left\n/>\n\n'}),f=()=>(0,c.jsx)(o.Z,{"data-visual-test":"button-tertiary-top",children:'\n<Button\n  variant="tertiary"\n  icon_position="top"\n  icon="close"\n  text="Button text"\n/>\n<Button\n  variant="tertiary"\n  icon_position="top"\n  icon="close"\n  text="Large button"\n  size="large"\n/>\n\n'}),_=()=>(0,c.jsx)(o.Z,{"data-visual-test":"button-custom-content",children:'<Button\n  icon="close"\n  icon_position="right"\n  text="Button with custom content"\n  custom_content={<IconPrimary icon="check" right="small" />}\n/>\n'}),v=()=>(0,c.jsx)(o.Z,{"data-visual-test":"button-tertiary-wrap",children:'<Button\n  wrap\n  variant="tertiary"\n  text="A long text where wrap is enabled magnis rutrum netus neque ridiculus euismod sit dictum laoreet libero"\n  icon="chevron_left"\n  icon_position="left"\n/>\n'}),B=()=>(0,c.jsx)(o.Z,{"data-visual-test":"button-anchor",children:'\n<Button\n  text="Primary with href"\n  href="/uilib/components/button/demos"\n  icon_position="right"\n  icon="chevron_right"\n  on_click={({ event }) => {\n    event.preventDefault()\n  }}\n  right\n/>\n<Button\n  variant="secondary"\n  text="Secondary with href"\n  href="/uilib/components/button/demos"\n  target="_blank"\n  right\n/>\n<Button\n  href="/uilib/components/button/demos"\n  title="This is a link"\n  icon="chevron_right"\n  size="default"\n  right\n/>\n\n'}),x=()=>(0,c.jsx)(o.Z,{scope:{Bell:r.Z},children:'<Button\n  variant="signal"\n  text="Signal Button"\n  icon={Bell}\n  data-visual-test="button-signal"\n/>\n'}),y=()=>(0,c.jsx)(o.Z,{scope:{Bell:r.Z},children:'<Button\n  variant="signal"\n  text="Large Signal Button"\n  icon={<Bell />}\n  size="large"\n  icon_size="medium"\n/>\n'}),m=()=>(0,c.jsx)(o.Z,{scope:{question:e.Z,VisibilityByTheme:a.Z},"data-visual-test":"button-icons",children:'\n<Button\n  title="Disabled Icon only Button"\n  icon="calendar"\n  disabled\n  right\n/>\n<Button\n  title="Button with Icon only"\n  icon="calendar"\n  data-visual-test="button-icon"\n/>\n<Button title="Small sized icon button" icon="add" size="small" left />\n<Button\n  title="Large sized icon button"\n  icon={question}\n  size="large"\n  left\n/>\n<Button\n  title="Icon button with status"\n  icon={question}\n  status="error"\n  left\n/>\n<VisibilityByTheme visible="sbanken">\n  <Button\n    title="Tertiary icon button"\n    size="large"\n    icon={question}\n    variant="tertiary"\n    data-visual-test="button-icon-tertiary"\n  />\n</VisibilityByTheme>\n\n'}),p=()=>globalThis.IS_TEST?(0,c.jsx)(o.Z,{"data-visual-test":"button-tertiary-no-icon",children:'<Button text="Tertiary button with no icon" variant="tertiary" />\n'}):null,k=()=>globalThis.IS_TEST?(0,c.jsx)(o.Z,{"data-visual-test":"button-unstyled",children:'<Button text="Unstyled button with icon" icon="bell" variant="unstyled" />\n'}):null,z=()=>globalThis.IS_TEST?(0,c.jsx)(o.Z,{scope:{Bell:r.Z},children:'<Button\n  text="A stretched button"\n  icon={<Bell />}\n  size="large"\n  data-visual-test="button-stretch"\n/>\n'}):null,j=()=>(0,c.jsx)(o.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n/>\n<Button\n  text="Large button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  left\n/>\n<Button\n  text="Default button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  left\n/>\n<Button\n  text="Large button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  icon="chevron_right"\n  left\n/>\n\n'}),Z=()=>(0,c.jsx)(o.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  variant="secondary"\n/>\n<Button\n  text="Large button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  variant="secondary"\n  left\n/>\n<Button\n  text="Default button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="secondary"\n  left\n/>\n<Button\n  text="Large button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  icon="chevron_right"\n  variant="secondary"\n  left\n/>\n\n'}),w=()=>(0,c.jsx)(o.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="tertiary"\n/>\n<Button\n  text="Button large"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="tertiary"\n  size="large"\n  left\n/>\n<Button\n  text="Button text"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="bell"\n  icon_position="top"\n  variant="tertiary"\n  left\n/>\n\n'}),S=()=>(0,c.jsx)(o.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  variant="signal"\n/>\n<Button\n  text="Large button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  variant="signal"\n  left\n/>\n<Button\n  text="Default button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="signal"\n  left\n/>\n<Button\n  text="Large button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  icon="chevron_right"\n  variant="signal"\n  left\n/>\n\n'}),T=()=>(0,c.jsx)(o.Z,{hideCode:!0,children:'\n<Button\n  title="Small sized button with add icon"\n  icon="add"\n  size="small"\n/>\n<Button\n  title="Medium sized button with add icon (default)"\n  icon="add"\n  size="medium"\n  left\n/>\n<Button\n  title="Default sized button with add icon (not default)"\n  icon="add"\n  size="default"\n  left\n/>\n<Button\n  title="Large sized button with add icon"\n  icon="add"\n  size="large"\n  left\n/>\n\n'}),D=()=>globalThis.IS_TEST?(0,c.jsx)(o.Z,{"data-visual-test":"button-tertiary-alignment",children:'\n<span className="dnb-p">text</span>{\' \'}\n<Button text="right" variant="tertiary" icon="chevron_right" />\n<Button\n  text="left"\n  variant="tertiary"\n  icon_position="left"\n  icon="chevron_left"\n/>\n<br />\n<Button\n  text="right medium"\n  variant="tertiary"\n  icon="chevron_right"\n  icon_size="medium"\n/>\n<Button\n  text="left medium"\n  variant="tertiary"\n  icon_position="left"\n  icon="chevron_left"\n  icon_size="medium"\n/>\n<br />\n<Button\n  text="right large"\n  variant="tertiary"\n  icon="chevron_right"\n  icon_size="large"\n/>\n<Button\n  text="left large"\n  variant="tertiary"\n  icon_position="left"\n  icon="chevron_left"\n  icon_size="large"\n/>\n<br />\n<Button variant="tertiary" icon="chevron_right" />\n<Button variant="tertiary" icon="chevron_right" icon_size="medium" />\n<Button variant="tertiary" icon="chevron_right" icon_size="large" />{\' \'}\n<span className="dnb-p">text</span>\n\n'}):null}}]);
//# sourceMappingURL=component---src-docs-uilib-components-button-visual-tests-mdx-2ca7b912af6e7623276c.js.map