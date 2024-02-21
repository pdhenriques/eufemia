"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[33925],{67425:function(e,s,t){t.r(s);var r=t(52322),n=t(45392);function d(e){const s=Object.assign({h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",em:"em",a:"a",p:"p",pre:"pre"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{children:"Properties"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Properties"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"value"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(required)"})," the ",(0,r.jsx)(s.code,{children:"value"})," of the slider as a number or an array. If an array with numbers is provided, each number will represent a thumb button (the ",(0,r.jsx)(s.code,{children:"+"})," and ",(0,r.jsx)(s.code,{children:"-"})," button will be hidden on multiple thumbs)."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"min"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," the minimum value. Can be a negative number as well. Defaults to ",(0,r.jsx)(s.code,{children:"0"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"max"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," the maximum value. Defaults to ",(0,r.jsx)(s.code,{children:"100"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"step"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," the steps the slider takes on changing the value. Defaults to ",(0,r.jsx)(s.code,{children:"null"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"vertical"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," show the slider vertically. Defaults to ",(0,r.jsx)(s.code,{children:"false"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"reverse"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," show the slider reversed. Defaults to ",(0,r.jsx)(s.code,{children:"false"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"stretch"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," if set to ",(0,r.jsx)(s.code,{children:"true"}),", then the slider will be 100% in ",(0,r.jsx)(s.code,{children:"width"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"hideButtons"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," removes the helper buttons. Defaults to ",(0,r.jsx)(s.code,{children:"false"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"multiThumbBehavior"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," use either ",(0,r.jsx)(s.code,{children:"omit"}),", ",(0,r.jsx)(s.code,{children:"push"})," or ",(0,r.jsx)(s.code,{children:"swap"}),". This property only works for two (range) or more thumb buttons, while ",(0,r.jsx)(s.code,{children:"omit"})," will stop the thumb from swapping, ",(0,r.jsx)(s.code,{children:"push"})," will push its nearest thumb along. Defaults to ",(0,r.jsx)(s.code,{children:"swap"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"thumbTitle"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," give the slider thumb button a title for accessibility reasons. Defaults to ",(0,r.jsx)(s.code,{children:"null"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"subtractTitle"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," give the subtract button a title for accessibility reasons. Defaults to ",(0,r.jsx)(s.code,{children:"−"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"addTitle"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," give the add button a title for accessibility reasons. Defaults to ",(0,r.jsx)(s.code,{children:"+"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"numberFormat"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," will extend the return object with a ",(0,r.jsx)(s.code,{children:"number"})," property (from ",(0,r.jsx)(s.code,{children:"onChange"})," event). You can use all the options from the ",(0,r.jsx)(s.a,{href:"/uilib/components/number-format/properties",children:"NumberFormat"})," component. It also will use that formatted number in the increase/decrease buttons. If it has to represent a currency, then use e.g. ",(0,r.jsx)(s.code,{children:"numberFormat={{ currency: true, decimals: 0 }}"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tooltip"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," use ",(0,r.jsx)(s.code,{children:"true"})," to show a tooltip on ",(0,r.jsx)(s.code,{children:"mouseOver"}),", ",(0,r.jsx)(s.code,{children:"touchStart"})," and ",(0,r.jsx)(s.code,{children:"focus"}),", showing the current number (if ",(0,r.jsx)(s.code,{children:"numberFormat"})," is given) or the raw value."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"alwaysShowTooltip"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," use ",(0,r.jsx)(s.code,{children:"true"})," to always show the tooltip, in addition to the ",(0,r.jsx)(s.code,{children:"tooltip"})," property."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"label"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," prepends the Form Label component. If no ID is provided, a random ID is created."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"labelDirection"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," use ",(0,r.jsx)(s.code,{children:'labelDirection="vertical"'})," to change the label layout direction. Defaults to ",(0,r.jsx)(s.code,{children:"horizontal"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"labelSrOnly"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," use ",(0,r.jsx)(s.code,{children:"true"})," to make the label only readable by screen readers."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," text with a status message. The style defaults to an error message. You can use ",(0,r.jsx)(s.code,{children:"true"})," to only get the status color, without a message."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"statusState"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," defines the state of the status. Currently, there are two statuses ",(0,r.jsx)(s.code,{children:"[error, info]"}),". Defaults to ",(0,r.jsx)(s.code,{children:"error"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"statusProps"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," use an object to define additional FormStatus properties."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"globalStatusId"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," the ",(0,r.jsx)(s.code,{children:"status_id"})," used for the target ",(0,r.jsx)(s.a,{href:"/uilib/components/global-status",children:"GlobalStatus"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"suffix"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," text describing the content of the Slider more than the label. You can also send in a React component, so it gets wrapped inside the Slider component."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"skeleton"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," if set to ",(0,r.jsx)(s.code,{children:"true"}),", an overlaying skeleton with animation will be shown."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"extensions"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," makes it possible to display overlays with other functionality such as a marker on the slider marking a given value."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/uilib/layout/space/properties",children:"Space"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"(optional)"})," spacing properties like ",(0,r.jsx)(s.code,{children:"top"})," or ",(0,r.jsx)(s.code,{children:"bottom"})," are supported."]})]})]})]}),"\n",(0,r.jsx)(s.h2,{children:"Extensions"}),"\n",(0,r.jsx)(s.p,{children:"A Slider Extension should be an object with the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import Slider, { SliderMarker } from '@dnb/eufemia/components/Slider'\n\nrende(\n  <Slider\n    extensions={{\n      marker: {\n        instance: SliderMarker,\n        value: 50,\n      },\n    }}\n  />,\n)\n"})})]})}s.default=function(e){void 0===e&&(e={});const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-slider-properties-mdx-1c73babcab28a1b6ac01.js.map