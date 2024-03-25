"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[35073],{46793:function(e,n,t){t.r(n);var a=t(52322),r=t(45392);function o(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",strong:"strong"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["With the ",(0,a.jsx)(n.code,{children:"Form.useData"})," hook, you can manage your form data from nested components and outside the form context (",(0,a.jsx)(n.code,{children:"Form.Handler"}),")."]}),"\n",(0,a.jsx)(n.h2,{children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:['Here "ComponentB" is rendered inside the ',(0,a.jsx)(n.code,{children:"Form.Handler"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction ComponentA() {\n  return (\n    <Form.Handler>\n      ...\n      <ComponentB />\n      ...\n    </Form.Handler>\n  )\n}\n\nfunction ComponentB() {\n  const { data } = Form.useData()\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:['While in this example, "ComponentB" is outside the ',(0,a.jsx)(n.code,{children:"Form.Handler"})," and linked together via the ",(0,a.jsx)(n.code,{children:"id"})," (string) property:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction ComponentA() {\n  return (\n    <>\n      <Form.Handler id=\"unique\">...</Form.Handler>\n      <ComponentB />\n    </>\n  )\n}\n\nfunction ComponentB() {\n  const { data } = Form.useData('unique')\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This is beneficial when you need to utilize the form data in other places within your application."}),"\n",(0,a.jsx)(n.p,{children:"You can define the TypeScript type structure for data like so:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"type Data = { foo: string }\nconst { data } = Form.useData<Data>('unique')\n"})}),"\n",(0,a.jsx)(n.h2,{children:"Initial data"}),"\n",(0,a.jsxs)(n.p,{children:["You decide where and when you want to provide the initial ",(0,a.jsx)(n.code,{children:"data"})," to the form. It can be done via the ",(0,a.jsx)(n.code,{children:"Form.Handler"})," component, or via the ",(0,a.jsx)(n.code,{children:"Form.useData"})," Hook or ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Form/setData/",children:"Form.setData"})," method – or even in each Field, with the value property."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nconst initialData = { foo: 'bar' }\n\nfunction ComponentA() {\n  return (\n    <Form.Handler id=\"unique\" data={initialData}>\n      <Field.String path=\"/foo\" />\n    </Form.Handler>\n  )\n}\n\nfunction ComponentB() {\n  Form.useData('unique', { foo: 'bar' })\n}\n\nfunction ComponentC() {\n  const { set } = Form.useData('unique')\n\n  useEffect(() => {\n    set({ foo: 'bar' })\n  }, [])\n}\n"})}),"\n",(0,a.jsx)(n.h2,{children:"Update data"}),"\n",(0,a.jsxs)(n.p,{children:["If you need to update the data, you can use the ",(0,a.jsx)(n.code,{children:"update"})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["It takes a path (",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/getting-started/#what-is-a-json-pointer",children:"JSON Pointer"}),") and a callback function. The callback function receives the existing value as the first argument, and the second argument is the path itself. The callback function must return the new value."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction Component() {\n  const { update } = Form.useData('unique', { foo: 'bar' })\n\n  useEffect(() => {\n    update('/foo', 'new value')\n\n    // - or with a callback function to get the existing value\n    update('/foo', (existingValue) => existingValue + 'new value')\n  }, [])\n}\n"})}),"\n",(0,a.jsx)(n.h2,{children:"Extend the whole data set"}),"\n",(0,a.jsxs)(n.p,{children:["With the ",(0,a.jsx)(n.code,{children:"set"})," method, you can extend the data set. Existing data paths will be overwritten."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nfunction Component() {\n  const { data, set } = Form.useData('unique')\n\n  useEffect(() => {\n    set({ foo: 'bar' })\n  }, [])\n\n  return (\n    <Form.Handler id=\"unique\">\n      <Field.String path=\"/foo\" />\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,a.jsx)(n.h2,{children:"Filter data"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"filterData"})," method to filter your data."]}),"\n",(0,a.jsxs)(n.p,{children:["You simply give it the same kind of callback function as you would with the ",(0,a.jsx)(n.code,{children:"Form.Handler"})," ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Form/Handler/demos/#filter-your-data",children:"filterData"})," property method."]}),"\n",(0,a.jsx)(n.p,{children:"The callback function receives the path as the first argument, the value as the second argument, and the related field properties as the third argument. The callback function must return a boolean value or undefined. Return false to exclude an entry."}),"\n",(0,a.jsx)(n.p,{children:"It returns the filtered form data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'const filterDataHandler = (path, value, props, internal) => {\n  if (props.disabled === true) {\n    return false\n  }\n}\n\nconst Component = () => {\n  const { data, filterData } = Form.useData(id)\n\n  const filteredData = filterData(filterDataHandler)\n\n  return (\n    <Form.Handler id={id}>\n      <Field.String path="/foo" disabled />\n    </Form.Handler>\n  )\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"internal"})," parameter contains ",(0,a.jsx)(n.code,{children:"{ error: Error | undefined }"})," you can utilize if needed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const filterDataHandler = (path, value, props, internal) => {\n  return !(internal.error instanceof Error)\n}\n"})}),"\n",(0,a.jsx)(n.h2,{children:"Validation"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"tl;dr:"})," the ",(0,a.jsx)(n.code,{children:"useData"})," hook returns unvalidated data."]}),"\n",(0,a.jsxs)(n.p,{children:["When you use an async ",(0,a.jsx)(n.code,{children:"onChange"})," or ",(0,a.jsx)(n.code,{children:"validator"}),' event handler on a filed, it will delay the "submitted" value, because of its async nature.']}),"\n",(0,a.jsxs)(n.p,{children:["That means, if you want to access the value of a field immediately, you can use the ",(0,a.jsx)(n.code,{children:"useData"})," hook for that, as it always returns unvalidated data, in sync."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-use-data-info-mdx-c1ea862b4b1da805873b.js.map