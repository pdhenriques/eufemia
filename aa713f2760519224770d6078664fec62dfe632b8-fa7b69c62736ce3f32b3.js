"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[5008],{88452:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var a=t(52322),o=t(45392),r=t(70894),i=(t(2784),t(7325));t(55560);const s=(0,r.Z)("div",{target:"eb0r9f23"})("display:flex;justify-content:center;align-items:center;height:15vw;background-color:",(n=>n.color||"tomato"),";font-size:15vw;font-weight:var(--font-weight-bold);font-feature-settings:'pnum' on,'lnum' on;color:var(--color-white);"),c=()=>(0,a.jsx)(i.Z,{"data-visual-test":"pagination-default",children:"<Pagination\n  page_count={888}\n  current_page={4}\n  on_change={({ pageNumber }) => {\n    console.log('on_change:', pageNumber)\n  }}\n>\n  <P>Current Page Content</P>\n</Pagination>\n"}),g=()=>(0,a.jsx)(i.Z,{hideCode:!0,children:"<Pagination\n  page_count={5}\n  startup_page={3}\n  on_change={({ pageNumber }) => {\n    console.log('on_change:', pageNumber)\n  }}\n>\n  {({ pageNumber }) => <P>Page {pageNumber}</P>}\n</Pagination>\n"}),h=()=>(0,a.jsx)(i.Z,{scope:{LargePage:s},children:'<Pagination align="center" page_count={30}>\n  {({ pageNumber, setContent }) => {\n    // simulate server communication delay\n    const timeout = setTimeout(() => {\n      setContent(pageNumber, <LargePage>{pageNumber}</LargePage>)\n    }, Math.ceil(Math.random() * 500))\n    return () => clearTimeout(timeout)\n  }}\n</Pagination>\n'}),l=[];for(let d=1;d<=300;d++)l.push({ssn:d,text:String(d),expanded:!1});function u(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a"},(0,o.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demos"}),"\n",(0,a.jsx)(e.h3,{children:"Default pagination"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(e.p,{children:"If you need to access methods provided by the render prop arguments."}),"\n",(0,a.jsx)(g,{}),"\n",(0,a.jsx)(e.h3,{children:"Centered Pagination with random delay"}),"\n",(0,a.jsx)(e.p,{children:"Note that we keep the height of the previous page. All pages can for sure have their own height."}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(e.h3,{children:"Infinity scroller demos"}),"\n",(0,a.jsxs)(e.p,{children:["Check out ",(0,a.jsx)(e.a,{href:"/uilib/components/pagination/infinity-scroller",children:"demos for the Infinity Scroller"}),"."]})]})}var p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(u,n)})):u(n)}}}]);
//# sourceMappingURL=aa713f2760519224770d6078664fec62dfe632b8-fa7b69c62736ce3f32b3.js.map