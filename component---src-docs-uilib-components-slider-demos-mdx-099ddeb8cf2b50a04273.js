"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[7169],{59390:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var l=r(52322),t=r(45392),a=r(2784),i=r(7325),o=r(41672),s=r(37339),c=r(19230),u=r(38856),d=r(90595);function h(n){let{value:e,text:r}=n;const{isReverse:t,isVertical:i,allProps:o}=(0,c.e)(),{min:h,max:m,numberFormat:p}=o,v=(0,a.useCallback)((()=>{const n=`slider-marker-${(0,s.Xo)()}`,{number:a,aria:o}=(0,u.bj)(e,p||{});let c=(0,u.uZ)(100*(e-h)/(m-h));t&&(c=100-c);return{id:n,"aria-label":o,tabIndex:0,style:{[""+(i?"top":"left")]:`${c}%`},children:(0,l.jsx)(d.Z,{targetSelector:`#${n}`,children:r||a})}}),[t,i,m,h,p,r,e]);if(!e)return null;const x=v();return(0,l.jsx)("mark",{className:"dnb-slider__marker",...x})}const m=()=>(0,l.jsx)(i.Z,{"data-visual-test":"slider-default",children:"<Slider\n  min={0}\n  max={100}\n  value={70}\n  label=\"Default Slider\"\n  numberFormat={{\n    currency: 'EUR',\n  }}\n  tooltip={true}\n  onChange={({ value }) => console.log('onChange:', value)}\n/>\n"}),p=()=>(0,l.jsx)(i.Z,{"data-visual-test":"slider-multi",scope:{format:o.WU},children:"<Provider\n  formElement={{\n    label_direction: 'vertical',\n  }}\n>\n  <Flex.Vertical align=\"stretch\">\n    <Slider\n      min={0}\n      max={100}\n      value={[30, 70]}\n      step={5}\n      label=\"Range with steps\"\n      numberFormat={{\n        currency: 'USD',\n      }}\n      tooltip\n      onChange={({ value }) => console.log('onChange:', value)}\n    />\n    <Slider\n      min={0}\n      max={100}\n      value={[10, 30, 50, 70]}\n      label=\"Multi thumbs\"\n      numberFormat={(value) =>\n        format(value, {\n          percent: true,\n          decimals: 0,\n        })\n      }\n      tooltip\n      onChange={({ value, number }) =>\n        console.log('onChange:', value, number)\n      }\n    />\n  </Flex.Vertical>\n</Provider>\n"}),v=()=>(0,l.jsx)(i.Z,{children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Flex.Vertical align="stretch">\n    <Slider\n      multiThumbBehavior="omit"\n      value={[30, 70]}\n      label="Omit behavior"\n      numberFormat={{\n        currency: \'EUR\',\n      }}\n      tooltip={true}\n      onChange={({ value }) => console.log(\'onChange:\', value)}\n    />\n    <Slider\n      multiThumbBehavior="push"\n      min={-40}\n      value={[-10, 50, 70]}\n      step={1}\n      label="Push behavior"\n      numberFormat={{\n        currency: true,\n      }}\n      tooltip={true}\n      onChange={({ value, number }) =>\n        console.log(\'onChange:\', value, number)\n      }\n    />\n  </Flex.Vertical>\n</Provider>\n'}),x=()=>(0,l.jsx)(i.Z,{scope:{format:o.WU},noInline:!0,children:'const Component = () => {\n  const [value, setValue] = React.useState(70)\n  return (\n    <>\n      <Slider\n        value={value}\n        step={1}\n        hideButtons\n        label="Slider A"\n        numberFormat={{\n          currency: \'EUR\',\n        }}\n        tooltip={true}\n        onChange={({ value }) => setValue(parseFloat(String(value)))}\n      />\n      <VerticalWrapper>\n        <Slider\n          value={value}\n          vertical={true}\n          hideButtons={true}\n          step={10}\n          label="Slider B"\n          labelDirection="vertical"\n          numberFormat={(value) =>\n            format(value, {\n              currency: \'NOK\',\n            })\n          }\n          tooltip\n          alwaysShowTooltip\n          onChange={({ value }) => setValue(parseFloat(String(value)))}\n        />\n        <Input\n          align="center"\n          selectall\n          value={String(value)}\n          on_change={({ value }) => setValue(value)}\n        />\n      </VerticalWrapper>\n    </>\n  )\n}\nconst VerticalWrapper = styled.div`\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  height: 20rem; /* max-height works fine except in Safari */\n  margin-top: 1rem;\n  padding: 1rem;\n  background: dimgray;\n  .dnb-input {\n    width: 4rem;\n    margin-top: 1rem;\n  }\n`\nrender(<Component />)\n'}),b=()=>(0,l.jsx)(i.Z,{children:'<Slider\n  min={0}\n  max={100}\n  value={70}\n  label="Slider with suffix"\n  suffix={<HelpButton title="Modal Title">Modal content</HelpButton>}\n/>\n'}),g=()=>(0,l.jsx)(i.Z,{"data-visual-test":"slider-vertical",noInline:!0,children:'const VerticalWrapper = styled.div`\n  display: inline-flex;\n  flex-direction: column;\n  height: 12rem; /* max-height works fine except in Safari */\n`\nrender(\n  <VerticalWrapper>\n    <Slider\n      min={0}\n      max={100}\n      value={20}\n      step={10}\n      vertical={true}\n      label="Vertical slider"\n      labelDirection="vertical"\n      onChange={({ value }) => console.log(\'onChange:\', value)}\n    />\n  </VerticalWrapper>,\n)\n'}),j=()=>(0,l.jsx)(i.Z,{"data-visual-test":"slider-marker",scope:{SliderMarker:h},children:"<Slider\n  min={0}\n  max={100}\n  value={50}\n  extensions={{\n    marker: {\n      instance: SliderMarker,\n      value: 20,\n      text: 'Default value',\n    },\n  }}\n  label=\"Slider with marker\"\n/>\n"});function f(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre"},(0,t.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{children:"Demos"}),"\n",(0,l.jsx)(e.h3,{children:"Default Slider"}),"\n",(0,l.jsx)(m,{}),"\n",(0,l.jsx)(e.h3,{children:"Slider with multiple thumb buttons"}),"\n",(0,l.jsxs)(e.p,{children:["Provide the ",(0,l.jsx)(e.code,{children:"value"})," property as an array with numbers. The ",(0,l.jsx)(e.code,{children:"onChange"})," event will then also return the property ",(0,l.jsx)(e.code,{children:"value"})," as an array. The ",(0,l.jsx)(e.code,{children:"+"})," and ",(0,l.jsx)(e.code,{children:"-"})," buttons will not be visible when when more than one thumb button is present."]}),"\n",(0,l.jsx)(p,{}),"\n",(0,l.jsxs)(e.p,{children:["By default, the thumbs can swap positions. You can change that behavior with ",(0,l.jsx)(e.code,{children:"multiThumbBehavior"}),"."]}),"\n",(0,l.jsx)(v,{}),"\n",(0,l.jsx)(e.h3,{children:"Vertical slider with steps of 10"}),"\n",(0,l.jsx)(g,{}),"\n",(0,l.jsx)(e.h3,{children:"Horizontal and vertical slider in sync with input field"}),"\n",(0,l.jsx)(x,{}),"\n",(0,l.jsx)(e.h3,{children:"Slider with a suffix"}),"\n",(0,l.jsx)(b,{}),"\n",(0,l.jsx)(e.h3,{children:"Slider with a marker"}),"\n",(0,l.jsxs)(e.p,{children:["Marks a given point in the Slider with a small marker. If ",(0,l.jsx)(e.code,{children:"text"})," property is provided to the ",(0,l.jsx)(e.code,{children:"marker"})," object, it will be displayed in a tooltip."]}),"\n",(0,l.jsx)(e.p,{children:"You can import the marker like so:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { SliderMarker } from '@dnb/eufemia/components/Slider'\n"})}),"\n",(0,l.jsx)(j,{})]})}var S=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(f,n)})):f(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-slider-demos-mdx-099ddeb8cf2b50a04273.js.map