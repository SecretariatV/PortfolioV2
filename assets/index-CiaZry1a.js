import{A as c,j as e,L as n,O as i}from"./index-Byuxw2aM.js";import{p as d}from"./index-DMiMSzYr.js";const _="_body_8va4x_17",b="_wrapper_8va4x_26",p="_logo_8va4x_35",g="_root_8va4x_45",x="_mask_8va4x_50",m="_tab_8va4x_54",o={body:_,wrapper:b,logo:p,root:g,mask:x,tab:m},h="_body_1e3ki_17",u="_toggle_1e3ki_17",v="_label_1e3ki_20",j="_labelBack_1e3ki_24",y="_reverset_1e3ki_1",s={body:h,toggle:u,label:v,labelBack:j,switch:"_switch_1e3ki_1",reverset:y},k=()=>{const{send:t}=c.useActorRef();return e.jsxs("span",{className:s.body,children:[e.jsx("input",{type:"checkbox",className:s.toggle,id:"toggle",onChange:a=>t({type:"TOGGLE",value:a.target.checked})}),e.jsx("label",{htmlFor:"toggle",className:s.label,children:e.jsx("span",{className:s.labelBack})})]})},f=()=>e.jsx("div",{className:o.body,children:e.jsxs("div",{className:o.wrapper,children:[e.jsxs("div",{className:o.logo,children:[e.jsx("img",{src:"./logo.png",alt:"Logo img"}),e.jsx("p",{id:"logo",children:"OVB"})]}),e.jsx(d,{fullWidth:!1,width:700,height:40,activeColor:"#20c997",color:"#000",dataLists:[{value:"home",label:"Home"},{value:"about",label:"About"},{value:"service",label:"Services"},{value:"portfolio",label:"Portfolio"},{value:"contact",label:"Contact"}],root:o.root,mask:o.mask,tab:o.tab}),e.jsx(k,{})]})}),w={},N="_body_1cz9t_17",L="_body_wrapper_1cz9t_20",l={body:N,body_wrapper:L},A=()=>e.jsx("footer",{className:l.body,children:e.jsx("div",{className:l.body_wrapper,children:e.jsxs("p",{children:["Copyright @ ",new Date().getFullYear()," ",e.jsx("span",{children:"Oliver"}),". All Rights Reserved."]})})});let r=!1,B=null;const C=t=>{if(!r)throw B||(B=new Promise(a=>{setTimeout(()=>{r=!0,a()},t)}))},$=()=>(C(3e3),e.jsxs(e.Fragment,{children:[e.jsx(n,{effect:"-100%"}),e.jsxs("div",{className:w.body,children:[e.jsx(f,{}),e.jsx(i,{}),e.jsx(A,{})]})]}));export{$ as default};
