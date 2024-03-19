"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[24221],{76875:function(e,t,o){o.r(t);var n=o(52322),a=o(45392),s=o(85179),i=o(6024);function r(e){const t=Object.assign({h2:"h2"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Events"}),"\n",(0,n.jsx)(s.Z,{props:i.d})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(r,e)})):r(e)}},85179:function(e,t,o){o.d(t,{Z:function(){return y}});var n=o(70894),a=o(61185),s=o(55560),i=o(41676),r=o(6210),l=o(30730),c=o(64223),d=o(37339),u=o(1864),h=o(88504),p=o(52322);const f={...u.L,p:e=>(0,p.jsx)("span",{...e})},g=(0,n.Z)(s.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"});function y(e){let{props:t,valueType:o="string",camelCase:n,omit:u}=e;const y=Object.keys(t),w=Object.entries(t).map((e=>{let[t,{type:s,doc:c,status:g}]=e;return u&&u.includes(t)?null:("string"==typeof s&&String(s).includes("{valueType}")&&(s=o),(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(r.Z,{children:(0,p.jsx)(h.Z,{children:(0,p.jsx)(l.Z,{children:m(n?(0,d.zW)(t):t)})})}),(0,p.jsx)(r.Z,{children:Array.isArray(s)?s.map((e=>(0,p.jsx)(h.Z,{children:(0,p.jsx)(l.Z,{children:e})},e))).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," or ",t]}))):(0,p.jsx)(h.Z,{children:(0,p.jsx)(l.Z,{children:s})})}),(0,p.jsxs)(r.Z,{children:[(0,p.jsxs)("em",{children:["(",g,")"]})," ",(0,p.jsx)(a.D,{components:f,children:n?b(c,y):c})]})]},t))}));return(0,p.jsx)(s.ZP.ScrollView,{children:(0,p.jsxs)(g,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(c.Z,{children:"Property"}),(0,p.jsx)(c.Z,{children:"Type"}),(0,p.jsx)(c.Z,{children:"Description"})]})}),(0,p.jsx)("tbody",{children:w})]})})}function b(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,d.zW)(t))})),e}function m(e){return e.includes("/")?(0,p.jsx)(a.D,{components:f,children:e}):e}},64223:function(e,t,o){var n=o(91859);t.Z=n.Z},41676:function(e,t,o){var n=o(47048);t.Z=n.Z},6024:function(e,t,o){o.d(t,{d:function(){return a},u:function(){return n}});const n={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},id:{doc:"Unique id for connecting Form.Handler and helper tools such as Form.useData.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the input.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the input.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the input.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:"any",status:"optional"},required:{doc:"When set `true`, the input will give an error if the value cannot be empty.",type:"boolean",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that will be called for every change done by the user. Can be asynchronous or synchronous.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that will be called when the user leaves the field (blurring a text input, closing a dropdown etc). Can be asynchronous or synchronous.",type:"function",status:"optional"},toInput:{doc:"Derivate called when the received / active value is sent to the input. Can be used for casting, changing syntax etc.",type:"function",status:"optional"},fromInput:{doc:"Derivate called when changes is made by the user, to cast or change syntax back to the original (opposite of `toInput`).",type:"function",status:"optional"},...o(84187).o},a={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"function",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"function",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"function",status:"optional"}}},84187:function(e,t,o){o.d(t,{o:function(){return n}});const n={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-number-events-mdx-a8c7dc03d813394e5c68.js.map