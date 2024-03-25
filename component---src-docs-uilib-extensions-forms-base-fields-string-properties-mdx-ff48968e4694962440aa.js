"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[65166],{89920:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var n=o(52322),a=o(45392),s=o(85179),i=o(68793);const l={multiline:{doc:"True to be able to write in multiple lines (switching from input-element to textarea-element).",type:"boolean",status:"optional"},leftIcon:{doc:"For icon at the left side of the text input.",type:"string",status:"optional"},rightIcon:{doc:"For icon at the right side of the text input.",type:"string",status:"optional"},capitalize:{doc:"When set to true, it will capitalize the first letter of every word, transforming the rest to lowercase.",type:"boolean",status:"optional"},trim:{doc:"When true, it will trim leading and trailing whitespaces on blur, triggering onChange if the value changes.",type:"boolean",status:"optional"},inputMode:{doc:"Define an [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).",type:"string",status:"optional"},autoComplete:{doc:"For HTML [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attributes.",type:["on","string"],status:"optional"},minLength:{doc:"Validation for minimum length of the text (number of characters).",type:"number",status:"optional"},maxLength:{doc:"Validation for maximum length of the text (number of characters).",type:"number",status:"optional"},pattern:{doc:"Validation based on regex pattern.",type:"string",status:"optional"},width:{doc:"`false` for no width (use browser default), small, medium or large for predefined standard widths, stretch for fill available width.",type:["string","false"],status:"optional"},help:{doc:"Provide a help button. Object consisting of title and content.",type:"object",status:"optional"},size:i.G.size,align:i.G.align,selectall:i.G.selectall,clear:i.G.clear,keepPlaceholder:i.G.keep_placeholder,rows:{doc:"For multiline, set how many rows of text can be shown by default. Defaults to 2.",type:"number",status:"optional"},autoresizeMaxRows:{doc:"For multiline, set how many rows of text can be shown at max. Defaults to 6",type:"number",status:"optional"},characterCounter:{doc:"For multiline, use a number to define the displayed max length e.g. `40` or `{ max: 40, variant: 'down' }`.",type:["number","object"],status:"optional"},autoresize:{doc:"For multiline, set true to expand when writing longer texts. Defaults to true.",type:"boolean",status:"optional"},inputClassName:{doc:"Class name set on the <input> DOM element.",type:"string",status:"optional"},innerRef:{doc:"By providing a React.Ref we can get the internally used input element (DOM).",type:"React.Ref",status:"optional"},submitElement:{doc:'Accepts a React element which will show up like the "submit button" would do on type="search".',type:"React.Element",status:"optional"}};var r=o(6024);function u(e){const t=Object.assign({h2:"h2",h3:"h3"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Properties"}),"\n",(0,n.jsx)(t.h3,{children:"Field-specific props"}),"\n",(0,n.jsx)(s.Z,{props:l}),"\n",(0,n.jsx)(t.h3,{children:"General props"}),"\n",(0,n.jsx)(s.Z,{props:r.u})]})}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},85179:function(e,t,o){o.d(t,{Z:function(){return g}});var n=o(70894),a=o(61185),s=o(55560),i=o(41676),l=o(6210),r=o(30730),u=o(64223),c=o(37339),p=o(1864),d=o(88504),h=o(52322);const f={...p.L,p:e=>(0,h.jsx)("span",{...e})},m=(0,n.Z)(s.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"});function g(e){let{props:t,valueType:o="string",camelCase:n,omit:p}=e;const g=Object.keys(t),w=Object.entries(t).map((e=>{let[t,{type:s,doc:u,status:m}]=e;return p&&p.includes(t)?null:("string"==typeof s&&String(s).includes("{valueType}")&&(s=o),(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(l.Z,{children:(0,h.jsx)(d.Z,{children:(0,h.jsx)(r.Z,{children:y(n?(0,c.zW)(t):t)})})}),(0,h.jsx)(l.Z,{children:Array.isArray(s)?s.map((e=>(0,h.jsx)(d.Z,{children:(0,h.jsx)(r.Z,{children:e})},e))).reduce(((e,t)=>(0,h.jsxs)(h.Fragment,{children:[e," or ",t]}))):(0,h.jsx)(d.Z,{children:(0,h.jsx)(r.Z,{children:s})})}),(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)("em",{children:["(",m,")"]})," ",(0,h.jsx)(a.D,{components:f,children:n?b(u,g):u})]})]},t))}));return(0,h.jsx)(s.ZP.ScrollView,{children:(0,h.jsxs)(m,{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(u.Z,{children:"Property"}),(0,h.jsx)(u.Z,{children:"Type"}),(0,h.jsx)(u.Z,{children:"Description"})]})}),(0,h.jsx)("tbody",{children:w})]})})}function b(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function y(e){return e.includes("/")?(0,h.jsx)(a.D,{components:f,children:e}):e}},68793:function(e,t,o){o.d(t,{G:function(){return n}});const n={value:{doc:"The content value of the input.",type:"string",status:"optional"},align:{doc:"Defines the text alignment of the input. Can be `left`, `right` or `center`. Defaults to `left`.",type:"string",status:"optional"},label:{doc:"Prepends the Form Label component. If no ID is provided, a random ID is created.",type:"React.Node",status:"optional"},label_sr_only:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},label_direction:{doc:'Use `label_direction="vertical"` to change the label layout direction. Defaults to `horizontal`.',type:"string",status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},status_state:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:"string",status:"optional"},status_props:{doc:"Use an object to define additional FormStatus properties.",type:"object",status:"optional"},globalStatus:{doc:"The [configuration](/uilib/components/global-status/properties/#configuration-object) used for the target [GlobalStatus](/uilib/components/global-status).",type:"object",status:"optional"},placeholder:{doc:"The placeholder which shows up once the input value is empty.",type:"string",status:"optional"},icon:{doc:"Icon to show before or after the input / placeholder. Can be either a string defining a primary icon or a Component using an SVG icon of either 16px or 24px.",type:["string","React.Node"],status:"optional"},icon_position:{doc:"Defines the position of icon inside the input. Set to `left` or `right`. Defaults to `left` if not set.",type:"string",status:"optional"},icon_size:{doc:"The icon size of the icon shows. Defaults to `medium`.",type:"string",status:"optional"},keep_placeholder:{doc:"Set to `true` in case the `placeholder` has to be kept during focus. By default, the placeholder disappears on focus.",type:"boolean",status:"optional"},input_class:{doc:"In case we have to set a custom input class.",type:"string",status:"optional"},type:{doc:"Choose between `text`, `number`, `email`, `password`, `url`, `tel` and `search`.",type:"string",status:"optional"},autocomplete:{doc:"Defaults to `off`. Set to `on` or any of [allowed `attributes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete). Keep in mind, 1. you may have to define a `name`, 2. have the input as a descendant of a `<form>` element, 3. and have a submit button inside the form.",type:"string",status:"optional"},submit_button_title:{doc:"Title attribute for the search icon. Only relevant if search input.",type:"string",status:"optional"},suffix:{doc:"Text describing the content of the input more than the label. you can also send in a React component, so it gets wrapped inside the Input component.",type:["string","React.Node"],status:"optional"},size:{doc:"The sizes you can choose is `default` (2rem), `medium` (2.5rem) and `large` (3rem) are supported component sizes. Defaults to `default` / `null`. Also, if you define a number like `size={2}` then it will be forwarded as the input element attribute.",type:["string","number"],status:"optional"},selectall:{doc:"If set to `true`, then the whole input value gets selected on the entry focus. A second click will place the cursor on the wanted position.",type:"boolean",status:"optional"},clear:{doc:"If set to `true`, then a clear button will be shown which lets the user clear any given input value.",type:"boolean",status:"optional"},stretch:{doc:"If set to `true`, then the input field will be 100% in `width`.",type:"boolean",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},input_attributes:{doc:"Provide the Input element with any attributes by using an Object `input_attributes={{size:'2'}}` or a JSON Object `input_attributes='{\"size\":\"2\"}'`. **NB:** Keep in mind, that also every not listed component property will be sent along and set as an Input element attribute.",type:"object",status:"optional"},input_state:{doc:"Defines a custom visual state of the input. Use it only if you have to simulate a custom state. Currently are three statuses `virgin` , `focus` and `dirty`. Defaults to `null`.",type:"string",status:"optional"},submit_element:{doc:'Accepts a React element which will show up like the "submit button" would do on `type="search"`.',type:["string","React.Element"],status:"optional"},inner_ref:{doc:"By providing a React.ref we can get the internally used input element (DOM). E.g. `inner_ref={myRef}` by using `React.createRef()` or `React.useRef()`.",type:"React.Ref",status:"optional"},input_element:{doc:'By providing a new component we can change the internally used element. Also supports a string only, like `input_element="input"`.',type:["string","React.Element"],status:"internal"},inner_element:{doc:'By providing a new component to be rendered inside the "shell" – we can add a freely customizable internal element. Used by the Autocomplete component.',type:["string","React.Element"],status:"internal"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}},64223:function(e,t,o){var n=o(91859);t.Z=n.Z},41676:function(e,t,o){var n=o(47048);t.Z=n.Z},6024:function(e,t,o){o.d(t,{d:function(){return a},u:function(){return n}});const n={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},id:{doc:"Unique id for connecting Form.Handler and helper tools such as Form.useData.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the input.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the input.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the input.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:"any",status:"optional"},required:{doc:"When set `true`, the input will give an error if the value cannot be empty.",type:"boolean",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that will be called for every change done by the user. Can be asynchronous or synchronous.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that will be called when the user leaves the field (blurring a text input, closing a dropdown etc). Can be asynchronous or synchronous.",type:"function",status:"optional"},toInput:{doc:"Derivate called when the received / active value is sent to the input. Can be used for casting, changing syntax etc.",type:"function",status:"optional"},fromInput:{doc:"Derivate called when changes is made by the user, to cast or change syntax back to the original (opposite of `toInput`).",type:"function",status:"optional"},...o(84187).o},a={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"function",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"function",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"function",status:"optional"}}},84187:function(e,t,o){o.d(t,{o:function(){return n}});const n={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-string-properties-mdx-ff48968e4694962440aa.js.map