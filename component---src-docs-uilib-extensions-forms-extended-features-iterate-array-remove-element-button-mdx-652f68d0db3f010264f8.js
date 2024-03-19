"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[49868,65435,67554,18429],{14959:function(e,n,t){t.r(n);var o=t(52322),r=t(45392),a=t(21236),s=t(94365),i=t(32087),l=t(39237);function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.default,{}),"\n",(0,o.jsx)(s.default,{}),"\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(l.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c()}},94365:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var o={};t.r(o),t.d(o,{ObjectElements:function(){return d},PrimitiveElements:function(){return c}});var r=t(52322),a=t(45392),s=t(7325),i=t(10535),l=t(42277);const c=()=>(0,r.jsx)(s.Z,{scope:{Iterate:i,TrashIcon:l.Z},children:"<Iterate.Array\n  value={['One', 'Two', 'Three', 'Four', 'Five']}\n  onChange={(value) => console.log('onChange', value)}\n>\n  <Flex.Horizontal align=\"center\">\n    <Field.String itemPath=\"/\" />\n    <Iterate.ArrayRemoveElementButton\n      icon={TrashIcon}\n      onChange={(value) => console.log('onChange', value)}\n    />\n  </Flex.Horizontal>\n</Iterate.Array>\n"}),d=()=>(0,r.jsx)(s.Z,{scope:{Iterate:i},children:"<Form.Handler\n  data={[\n    {\n      name: 'Iron Man',\n    },\n    {\n      name: 'Captain America',\n    },\n    {\n      name: 'Thor',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  <Iterate.Array path=\"/\">\n    <Flex.Horizontal align=\"center\">\n      <Field.String itemPath=\"/name\" />\n      <Iterate.ArrayRemoveElementButton text=\"Remove avenger\" />\n    </Flex.Horizontal>\n  </Iterate.Array>\n</Form.Handler>\n"});function u(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,a.ah)(),e.components);return o||p("Examples",!1),d||p("Examples.ObjectElements",!0),c||p("Examples.PrimitiveElements",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Demos"}),"\n",(0,r.jsx)(n.h3,{children:"Primitive elements"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h3,{children:"Object elements"}),"\n",(0,r.jsx)(d,{})]})}var h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)};function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},39237:function(e,n,t){t.r(n);var o=t(52322),r=t(45392),a=t(85179),s=t(6024);function i(e){const n=Object.assign({h2:"h2"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{children:"Events"}),"\n",(0,o.jsx)(a.Z,{props:s.d})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}},21236:function(e,n,t){t.r(n);var o=t(52322),r=t(45392);function a(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Iterate.ArrayRemoveElementButton"})," connects to the array of a surrounding ",(0,o.jsx)(n.code,{children:"Iterate.Array"})," and removes the element when clicked."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Iterate, Field } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Iterate.Array path="/">\n      <Field.String itemPath="/name" />\n    </Iterate.Array>\n\n    <Iterate.ArrayRemoveElementButton\n      text="Remove element"\n      path="/"\n      pushValue={{}}\n    />\n  </>,\n)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},32087:function(e,n,t){t.r(n);var o=t(52322),r=t(45392);function a(e){const n=Object.assign({h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",em:"em",a:"a"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{children:"Properties"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"text"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.em,{children:"(optional)"})," Button text."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"children"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ReactNode"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.em,{children:"(optional)"})," Alternative to ",(0,o.jsx)(n.code,{children:"text"})," for button contents."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/uilib/components/button/properties",children:"Button"})}),(0,o.jsx)(n.td,{children:"Various"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.em,{children:"(optional)"})," all button properties."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/uilib/layout/space/properties",children:"Space"})}),(0,o.jsx)(n.td,{children:"Various"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.em,{children:"(optional)"})," spacing properties like ",(0,o.jsx)(n.code,{children:"top"})," or ",(0,o.jsx)(n.code,{children:"bottom"})," are supported."]})]})]})]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},85179:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(70894),r=t(61185),a=t(55560),s=t(41676),i=t(6210),l=t(30730),c=t(64223),d=t(37339),u=t(1864),h=t(88504),p=t(52322);const m={...u.L,p:e=>(0,p.jsx)("span",{...e})},f=(0,o.Z)(a.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"});function g(e){let{props:n,valueType:t="string",camelCase:o,omit:u}=e;const g=Object.keys(n),b=Object.entries(n).map((e=>{let[n,{type:a,doc:c,status:f}]=e;return u&&u.includes(n)?null:("string"==typeof a&&String(a).includes("{valueType}")&&(a=t),(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(i.Z,{children:(0,p.jsx)(h.Z,{children:(0,p.jsx)(l.Z,{children:j(o?(0,d.zW)(n):n)})})}),(0,p.jsx)(i.Z,{children:Array.isArray(a)?a.map((e=>(0,p.jsx)(h.Z,{children:(0,p.jsx)(l.Z,{children:e})},e))).reduce(((e,n)=>(0,p.jsxs)(p.Fragment,{children:[e," or ",n]}))):(0,p.jsx)(h.Z,{children:(0,p.jsx)(l.Z,{children:a})})}),(0,p.jsxs)(i.Z,{children:[(0,p.jsxs)("em",{children:["(",f,")"]})," ",(0,p.jsx)(r.D,{components:m,children:o?x(c,g):c})]})]},n))}));return(0,p.jsx)(a.ZP.ScrollView,{children:(0,p.jsxs)(f,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{children:"Property"}),(0,p.jsx)(c.Z,{children:"Type"}),(0,p.jsx)(c.Z,{children:"Description"})]})}),(0,p.jsx)("tbody",{children:b})]})})}function x(e,n){return n.forEach((n=>{e=e.replace(new RegExp(n,"g"),(0,d.zW)(n))})),e}function j(e){return e.includes("/")?(0,p.jsx)(r.D,{components:m,children:e}):e}},6024:function(e,n,t){t.d(n,{d:function(){return r},u:function(){return o}});const o={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},id:{doc:"Unique id for connecting Form.Handler and helper tools such as Form.useData.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the input.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the input.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the input.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:"any",status:"optional"},required:{doc:"When set `true`, the input will give an error if the value cannot be empty.",type:"boolean",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that will be called for every change done by the user. Can be asynchronous or synchronous.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that will be called when the user leaves the field (blurring a text input, closing a dropdown etc). Can be asynchronous or synchronous.",type:"function",status:"optional"},toInput:{doc:"Derivate called when the received / active value is sent to the input. Can be used for casting, changing syntax etc.",type:"function",status:"optional"},fromInput:{doc:"Derivate called when changes is made by the user, to cast or change syntax back to the original (opposite of `toInput`).",type:"function",status:"optional"},...t(84187).o},r={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"function",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"function",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"function",status:"optional"}}},84187:function(e,n,t){t.d(n,{o:function(){return o}});const o={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}},10535:function(e,n,t){t.r(n),t.d(n,{Array:function(){return g},ArrayPushButton:function(){return y},ArrayRemoveElementButton:function(){return w},IterateElementContext:function(){return c.Z}});var o=t(84616),r=t(2784),a=t(72779),s=t.n(a),i=t(95955),l=t.n(i),c=t(38875),d=t(96781),u=t(26409),h=t(26),p=t(30392),m=t(52322);function f(e){const{className:n,layout:t="vertical",placeholder:a,label:i,labelDescription:f,path:g,value:x,info:j,warning:b,error:y,emptyValue:v,width:w,handleChange:C,children:Z}=(0,u.Z)(e),E=(0,r.useMemo)((()=>(null!=x?x:[]).map(((e,n)=>({elementValue:e,handleElementChange:(e,n)=>{const t=structuredClone(x);l().set(t,e,n),null==C||C(t)},handleRemoveElement:()=>{const e=structuredClone(x);e.splice(n,1),null==C||C(e)}})))),[x,C]),F=(0,r.useCallback)((e=>{C([].concat((0,o.Z)(null!=x?x:[]),[e]))}),[x,C]);return(0,m.jsx)(d.Z,{className:s()("dnb-forms-field-number",n),layout:t,label:i,labelDescription:f,info:j,warning:b,error:y,width:w,contentWidth:!1!==w?w:void 0,...(0,h.SR)(e),children:(0,m.jsx)(p.Z,{...(0,p.W)(e,{spacing:"small"}),children:x===v?(0,m.jsx)("em",{children:a}):E.map(((e,n)=>{let{elementValue:t,handleElementChange:o,handleRemoveElement:r}=e;return(0,m.jsx)(c.Z.Provider,{value:{index:n,value:t,path:g,handleChange:o,handleRemove:r,handlePush:F},children:Array.isArray(Z)?Z.map((e=>"function"==typeof e?e(t,n):e)):"function"==typeof Z?Z(t,n):Z},`element-${n}`)}))})})}f._supportsSpacingProps=!0;var g=f,x=t(96844),j=t(27439);function b(e){const n=(0,r.useContext)(c.Z),{handlePush:t}=null!=n?n:{},{pushValue:a,...i}=e,l=(0,j.wH)(i),{value:d,handleChange:h,children:p}=(0,u.Z)(i);if(void 0!==d&&!Array.isArray(d))throw new Error("ArrayPushButton received a non-array value.");const f=(0,r.useCallback)((()=>{t?t(a):h([].concat((0,o.Z)(null!=d?d:[]),[a]))}),[d,a,t,h]);return(0,m.jsx)(x.Z,{className:s()("dnb-forms-array-push-button",e.className),on_click:f,...l,children:p})}b._supportsSpacingProps=!0;var y=b;function v(e){const n=(0,r.useContext)(c.Z),{handleRemove:t}=null!=n?n:{};if(!n)throw new Error("ArrayRemoveElementButton must be inside an Iterate.Array component.");const o=(0,j.wH)(e),{children:a}=(0,u.Z)(e),i=(0,r.useCallback)((()=>{t()}),[t]);return(0,m.jsx)(x.Z,{className:s()("dnb-forms-array-remove-element-button",e.className),on_click:i,...o,children:a})}v._supportsSpacingProps=!0;var w=v}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-iterate-array-remove-element-button-mdx-652f68d0db3f010264f8.js.map