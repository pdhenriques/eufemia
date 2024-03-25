"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[94841],{50527:function(e,t,o){o.r(t);var n=o(52322),a=o(45392),s=o(85179),i=o(11763),l=o(56394);function r(e){const t=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Properties"}),"\n",(0,n.jsxs)(t.p,{children:["You may check out the ",(0,n.jsx)(t.a,{href:"#drawerlist-properties",children:"DrawerList Properties"})," down below as well as the ",(0,n.jsx)(t.a,{href:"#data-structure",children:"Data structure examples"}),"."]}),"\n",(0,n.jsx)(s.Z,{props:i.V}),"\n",(0,n.jsx)(t.h2,{children:"DrawerList Properties"}),"\n",(0,n.jsx)(s.Z,{props:l.T}),"\n",(0,n.jsx)(t.h2,{children:"Data structure"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// 1. as array\nconst data = [\n  // Every data item can, beside \"content\" - contain what ever\n  {\n    // (optional) can be what ever\n    selected_key: 'key_0',\n\n    // (optional) is show instead of \"content\", once selected\n    selected_value: 'Item 1 Value',\n    suffix_value: 'Addition 1',\n\n    // Item content as a string, array or React Element\n    content: 'Item 1 Content',\n  },\n\n  // more items ...\n  {\n    selected_key: 'key_1',\n    content: (\n      <>\n        <IconPrimary icon=\"bell\" />\n        <span className=\"dnb-typo-bold\">Searchable content</span>\n      </>\n    ),\n  },\n  {\n    selected_key: 'key_2',\n    selected_value: 'Item 3 Value',\n    suffix_value: 'Addition 3',\n    content: (\n      <Autocomplete.HorizontalItem>\n        <IconPrimary icon=\"bell\" />\n        <span className=\"dnb-typo-bold\">Searchable content</span>\n      </Autocomplete.HorizontalItem>\n    ),\n  },\n  {\n    selected_key: 'key_3',\n    selected_value: 'Item 4 Value',\n    suffix_value: 'Addition 4',\n    content: ['Item 4 Content A', <>Custom Component</>],\n  },\n]\n\n// 2. as object\nconst data = {\n  a: 'A',\n  b: 'B',\n}\n"})})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(r,e)})):r(e)}},85179:function(e,t,o){o.d(t,{Z:function(){return m}});var n=o(70894),a=o(61185),s=o(55560),i=o(41676),l=o(6210),r=o(30730),c=o(64223),u=o(37339),d=o(1864),p=o(88504),h=o(52322);const b={...d.L,p:e=>(0,h.jsx)("span",{...e})},f=(0,n.Z)(s.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"});function m(e){let{props:t,valueType:o="string",camelCase:n,omit:d}=e;const m=Object.keys(t),w=Object.entries(t).map((e=>{let[t,{type:s,doc:c,status:f}]=e;return d&&d.includes(t)?null:("string"==typeof s&&String(s).includes("{valueType}")&&(s=o),(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(l.Z,{children:(0,h.jsx)(p.Z,{children:(0,h.jsx)(r.Z,{children:g(n?(0,u.zW)(t):t)})})}),(0,h.jsx)(l.Z,{children:Array.isArray(s)?s.map((e=>(0,h.jsx)(p.Z,{children:(0,h.jsx)(r.Z,{children:e})},e))).reduce(((e,t)=>(0,h.jsxs)(h.Fragment,{children:[e," or ",t]}))):(0,h.jsx)(p.Z,{children:(0,h.jsx)(r.Z,{children:s})})}),(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)("em",{children:["(",f,")"]})," ",(0,h.jsx)(a.D,{components:b,children:n?y(c,m):c})]})]},t))}));return(0,h.jsx)(s.ZP.ScrollView,{children:(0,h.jsxs)(f,{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(c.Z,{children:"Property"}),(0,h.jsx)(c.Z,{children:"Type"}),(0,h.jsx)(c.Z,{children:"Description"})]})}),(0,h.jsx)("tbody",{children:w})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,u.zW)(t))})),e}function g(e){return e.includes("/")?(0,h.jsx)(a.D,{components:b,children:e}):e}},11763:function(e,t,o){o.d(t,{V:function(){return n},h:function(){return a}});const n={mode:{doc:'If set to `async`, it prevents showing the "no options" message during typing / filtering. Defaults to `sync`.',type:"string",status:"optional"},input_value:{doc:"Lets you define a custom input value.",type:"string",status:"optional"},placeholder:{doc:'Use this to define the pre-filled placeholder text in the input. Defaults to `title="Skriv og velg"`.',type:"string",status:"optional"},title:{doc:"Give a title to let the user know what they have to do. Defaults to `Skriv og få alternativer`.",type:"React.Node",status:"optional"},disable_filter:{doc:"If set to `true`, word highlighting will still be active, but no options will be filtered out. Defaults to `false`.",type:"boolean",status:"optional"},disable_highlighting:{doc:"If set to `true`, word highlighting will be disabled, but the options will still get filtered. Defaults to `false`.",type:"boolean",status:"optional"},disable_reorder:{doc:"If set to `true`, reordering of search results will be disabled. Defaults to `false`.",type:"boolean",status:"optional"},search_numbers:{doc:"If set to `true` and `search_in_word_index` is not set, the user will be able to more easily search and filter e.g. bank account numbers. Defaults to `false`.",type:"boolean",status:"optional"},search_in_word_index:{doc:'This gives you the possibility to change the threshold number, which defines from what word on we search "inside words". Defaults to `3`.',type:"boolean",status:"optional"},keep_value:{doc:"Use `true` to not remove the typed value on input blur, if it is invalid. By default, the typed value will disappear / replaced by a selected value from the data list during the input field blur. Defaults to `false`.",type:"boolean",status:"optional"},keep_selection:{doc:"Use `true` to not remove selected item on input blur, when the input value is empty. Defaults to `false`.",type:"boolean",status:"optional"},keep_value_and_selection:{doc:"Like `keep_value` – but would not reset to the selected value during input field blur. Also, the selected value would still be kept. Defaults to `false`.",type:"boolean",status:"optional"},prevent_selection:{doc:"If set to `true`, no permanent selection will be made. Also, the typed value will not disappear on input blur (like `keep_value`). Defaults to `false`.",type:"boolean",status:"optional"},show_clear_button:{doc:"If set to `true`, a clear button is shown inside the input field. Defaults to `false`.",type:"boolean",status:"optional"},icon:{doc:"To be included in the autocomplete input.",type:["string","React.Node"],status:"optional"},icon_size:{doc:"Change the size of the icon pragmatically.",type:"string",status:"optional"},icon_position:{doc:"Position of the icon inside the autocomplete. Set to `left` or `right`. Defaults to `left`.",type:"string",status:"optional"},input_icon:{doc:"Same as `icon`.",type:["string","React.Node"],status:"optional"},triangle_position:{doc:"Position of icon arrow / triangle the drawer. Set to `left` or `right`. Defaults to `left`.",type:"string",status:"optional"},size:{doc:"Define the height of the Autocomplete. Can be set to `small`, `default`, `medium` and `large`. Defaults to `default`.",type:"string",status:"optional"},drawer_class:{doc:"Define a custom class for the internal drawer-list. This makes it possible more easily customize the drawer-list style with styled-components and the `css` style method. Defaults to `null`.",type:"string",status:"optional"},show_submit_button:{doc:'Use `true` to show a Autocomplete button to toggle the <a href="/uilib/components/fragments/drawer-list">DrawerList</a>. Defaults to `false`.',type:"boolean",status:"optional"},align_autocomplete:{doc:"Use `right` to change the options alignment direction. Defaults to `left`.",type:"string",status:"optional"},no_options:{doc:'Text show in the "no options" item. Defaults to `Ingen alternativer`.',type:"boolean",status:"optional"},aria_live_options:{doc:"Text read out by screen readers. This way users with screen readers know how many options they got during typing. Defaults to `%s alternativer`.",type:"React.Node",status:"optional"},show_all:{doc:"Text that lets a user unravel all the available options. Defaults to `Vis alt`.",type:"boolean",status:"optional"},indicator_label:{doc:'Text show on indicator "options" item. Defaults to `Henter data ...`.',type:"React.Node",status:"optional"},show_options_sr:{doc:"Only for screen readers. Title of the button to show the suggestions / options. It is always present and when activating, it opens the DrawerList and sets the focus on it. Defaults to `Bla gjennom alternativer`.",type:"string",status:"optional"},selected_sr:{doc:"Only for screen readers (VoiceOver). The label used to announce the selected item. Defaults to `Valgt:`.",type:"string",status:"optional"},submit_button_title:{doc:"Title on submit button. Defaults to `Vis alternativer`.",type:"React.Node",status:"optional"},submit_button_icon:{doc:"The icon used in the submit button. Defaults to `chevron_down`.",type:["string","React.Element"],status:"optional"},submit_element:{doc:"Replace the dropdown / submit button with a custom React element. Defaults to the input SubmitButton `import { SubmitButton } from &#39;@dnb/eufemia/components/input/Input&#39;`.",type:"React.Node",status:"optional"},opened:{doc:"If set to `true`, the Autocomplete will be rendered initially with a visible and accessible data list / options.",type:"boolean",status:"optional"},open_on_focus:{doc:"Use `true` to auto open the list once the user is entering the input field with the keyboard.",type:"boolean",status:"optional"},stretch:{doc:"If set to `true`, then the autocomplete will be 100% in available `width`.",type:"boolean",status:"optional"},skip_portal:{doc:"Set to `true` to disable the React Portal behavior. Defaults to `false`.",type:"string",status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},status_state:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:"string",status:"optional"},status_props:{doc:"Use an object to define additional FormStatus properties.",type:"object",status:"optional"},globalStatus:{doc:'The <a href="/uilib/components/global-status/properties/#configuration-object">configuration</a> used for the target <a href="/uilib/components/global-status">GlobalStatus</a>.',type:"object",status:"optional"},label:{doc:"Prepends the Form Label component. If no ID is provided, a random ID is created.",type:"React.Node",status:"optional"},label_direction:{doc:'Use `label_direction="vertical"` to change the label layout direction. Defaults to `horizontal`.',type:"React.Node",status:"optional"},label_sr_only:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},suffix:{doc:"Text describing the content of the Autocomplete more than the label. You can also send in a React component, so it gets wrapped inside the Autocomplete component.",type:"React.Node",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},input_ref:{doc:"Use a React.Ref to get access to the `input` DOM element.",type:"React.Ref",status:"optional"},input_element:{doc:"Lets you provide a custom React element as the input HTML element.",type:["string","React.Element"],status:"optional"},"[DrawerList](/uilib/components/fragments/drawer-list/properties)":{doc:"all DrawerList properties.",type:"Various",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},a={on_type:{doc:'Will be called for every key change the users makes. Returns an object with the input `value` inside `{ value, event, attributes }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_focus:{doc:'Will be called on user generated focus action. Returns an object with the input `value` inside `{ value, event, attributes }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_blur:{doc:'Will be called on user generated blur action. Returns an object with the input `value` inside `{ value, event, attributes }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_change:{doc:'Will be called on state changes made by the user. Returns an object with the new selected `data` item `{ data, event, attributes, value }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_select:{doc:'Will be called once the users selects an item by a click or keyboard navigation. Returns an object with the new selected `data` item `{ data, event, attributes, value, active_item }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>. The "active_item" property is the currently selected item by keyboard navigation',type:"function",status:"optional"},on_show:{doc:"Will be called once the user presses the autocomplete. Returns the data item `{ data, attributes }`.",type:"function",status:"optional"},on_hide:{doc:"Will be called once the user presses the autocomplete again, or clicks somewhere else. Returns the data item `{ data, attributes }`.",type:"function",status:"optional"}}},64223:function(e,t,o){var n=o(91859);t.Z=n.Z},41676:function(e,t,o){var n=o(47048);t.Z=n.Z},56394:function(e,t,o){o.d(t,{T:function(){return n},h:function(){return a}});const n={data:{doc:"The data we want to fill the list with. Provide the data as a JSON string, array, or object in the specified data structure. If you don't have to define a value, you can also send in a function which will be called once the user opens the DrawerList.",type:"string | object | function",status:"required"},value:{doc:"Define a preselected data entry (index) or key inside an array item. Can be a string or integer.",type:["string","number"],status:"optional"},default_value:{doc:"Define a startup value or handle a re-render without handling the state during the re-render by yourself. Defaults to null.",type:"number",status:"optional"},triangle_position:{doc:"Position of the arrow icon/triangle inside the drawer-list. Set to 'left' or 'right'. Defaults to 'left' if not set.",type:"string",status:"optional"},direction:{doc:"Defines the direction of how the drawer-list shows the options list. Can be 'bottom' or 'top'. Defaults to 'auto'.",type:"string",status:"optional"},label_direction:{doc:"The direction of the label. If set to 'horizontal', the label will be positioned horizontally next to the input element. If set to 'vertical', the label will be positioned vertically above the input element.",type:"string",status:"optional"},prevent_selection:{doc:"If set to `true`, the DrawerList will then not make any permanent selection.",type:"boolean",status:"optional"},focusable:{doc:"If set to `true`, the element is then focusable by assertive technologies.",type:"boolean",status:"optional"},prevent_close:{doc:"If set to `true`, the DrawerList will not close on any events.",type:"boolean",status:"optional"},keep_open:{doc:"If set to `true`, the DrawerList will close on outside clicks, but not on selection.",type:"boolean",status:"optional"},independent_width:{doc:"If set to `true`, the DrawerList will handle its width and position independently of the parent/mother element.",type:"boolean",status:"optional"},fixed_position:{doc:"If set to `true`, the DrawerList will be fixed in its scroll position by using CSS `position: fixed;`.",type:"boolean",status:"optional"},enable_body_lock:{doc:"If set to `true`, the HTML body will get locked from scrolling when the Dropdown is open.",type:"boolean",status:"optional"},skip_keysearch:{doc:"If set to `true`, search items by the first key will be ignored.",type:"boolean",status:"optional"},ignore_events:{doc:"If set to `true`, all keyboard and mouse events will be ignored.",type:"boolean",status:"optional"},align_drawer:{doc:"Use 'right' to change the options alignment direction. Makes only sense to use in combination with `prevent_selection` or `more_menu` - or if an independent width is used.",type:"string",status:"optional"},list_class:{doc:"Define an HTML class that will be set on the list, beside `dnb-drawer-list__list`.",type:"string",status:"optional"},portal_class:{doc:"Define an HTML class that will be set on the DOM portal beside `dnb-drawer-list__portal__style`. Can be useful to handle e.g. a custom `z-index` in relation to a header.",type:"string",status:"optional"},scrollable:{doc:"Defines if the options list should be scrollable (the `max-height` is set by default to `50vh`).",type:"boolean",status:"optional"},no_scroll_animation:{doc:"To disable scrolling animation.",type:"boolean",status:"optional"},no_animation:{doc:"To disable appear/disappear (show/hide) animation.",type:"boolean",status:"optional"},skip_portal:{doc:"To disable the React Portal behavior.",type:"boolean",status:"optional"},min_height:{doc:"Defines the minimum height (in `rem`) of the options list.",type:"string",status:"optional"},max_height:{doc:"Defines the maximum height (in `rem`) of the options list.",type:"string",status:"optional"},page_offset:{doc:"Defines the available scrollable height. If scrolling should not change the height of the drawer-list, then set it to `0` (useful if the DrawerList is used in fixed positions on contrast to a scrollable page content).",type:"string",status:"optional"},observer_element:{doc:"Set a HTML element, either as a selector or a DOM element. Can be used to send in an element which will be used to make the direction calculation on.",type:"string",status:"optional"},cache_hash:{doc:"Set a `cache_hash` as a string to enable internal memorizing of the list to enhance rerendering performance. Components like Autocomplete are using this because of the huge data changes due to search and reorder.",type:"string",status:"optional"},wrapper_element:{doc:"Has to be an HTML Element, ideally a mother element, used to calculate sizes and distances. Also used for the 'click outside' detection. Clicking on the `wrapper_element` will not trigger an outside click.",type:"HTMLElement",status:"optional"},options_render:{doc:"Has to be a function, returning the items again. See [example](/uilib/components/fragments/drawer-list#example-usage-of-options_render). This can be used to add additional options above the actual rendered list.",type:"function",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},a={on_pre_change:{doc:"Will be called before `on_change`, this way you can return false to prevent selection and to prevent `on_change` execution.",type:"function",status:"optional"},on_change:{doc:"Will be called on state changes made by the user.",type:"function",status:"optional"},on_select:{doc:"Will be called once the user selects an item by a click or keyboard navigation.",type:"function",status:"optional"},on_show:{doc:"Will be called once the user presses the drawer-list.",type:"function",status:"optional"},on_hide:{doc:"Will be called once the user presses the drawer-list again, or clicks somewhere else.",type:"function",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-autocomplete-properties-mdx-02b2539a978ba5a94bd5.js.map