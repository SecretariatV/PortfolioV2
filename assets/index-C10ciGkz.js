import{d,r as c,j as e,A as k,L as C,O as N}from"./index-DwHBZWlG.js";const A=d.div`
  border-radius: 8px;
  background-color: ${({$bgColor:t})=>t};
  width: ${({$width:t})=>t};
  height: ${({$height:t})=>t};
  padding: 6px;
  box-sizing: border-box;
  overflow: hidden;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`,F=d.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({$width:t})=>t};
  height: ${({$height:t})=>t};
  background-color: yellow;
  z-index: 0;
  border-radius: 8px;
  transition: transform 0.4s ease-in-out;
`,L=d.label`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: ${({$active:t,$activeColor:o,$color:l})=>t?o:l};
`,S=d.input`
  display: none;
`,B=({value:t,label:o,active:l,setActive:h,className:u,activeColor:a,color:b})=>{const n=()=>{h(t)};return e.jsxs(e.Fragment,{children:[e.jsx(S,{type:"radio",name:t,id:t,checked:l,onChange:n}),e.jsx(L,{htmlFor:t,onClick:n,className:u,$active:l,$activeColor:a,$color:b,children:o})]})},E=({fullWidth:t,width:o,height:l,root:h,bgColor:u,dataLists:a,mask:b,tab:n,activeColor:_,color:f,onChange:m})=>{const[j,w]=c.useState(""),[x,$]=c.useState(a[0].value),g=c.useRef(null);c.useEffect(()=>{w(100/a.length+"%")},[a]),c.useEffect(()=>{const s=a.findIndex(p=>p.value===x);g.current&&(g.current.style.transform=`translate3d(${100*s}%, 0, 0)`)},[x]);const y=s=>{$(s),m&&m(s)};return e.jsx(A,{$width:t?"100%":`${o}px`,$height:`${l}px`,$bgColor:u||"#eee",className:h,children:e.jsxs("div",{className:"wrapper",children:[e.jsx(F,{$width:j,$height:"100%",ref:g,className:b}),a.map((s,p)=>e.jsx(B,{label:s.label,value:s.value,active:x===s.value,setActive:y,className:n,activeColor:_,color:f},p))]})})},z="_body_x4ure_23",O="_wrapper_x4ure_27",R="_logo_x4ure_36",T="_root_x4ure_46",G="_mask_x4ure_51",H="_tab_x4ure_55",r={body:z,wrapper:O,logo:R,root:T,mask:G,tab:H},P="_body_16an0_23",W="_toggle_16an0_23",I="_label_16an0_26",M="_labelBack_16an0_30",V="_reverset_16an0_1",i={body:P,toggle:W,label:I,labelBack:M,switch:"_switch_16an0_1",reverset:V},q=()=>{const{send:t}=k.useActorRef();return e.jsxs("span",{className:i.body,children:[e.jsx("input",{type:"checkbox",className:i.toggle,id:"toggle",onChange:o=>t({type:"TOGGLE",value:o.target.checked})}),e.jsx("label",{htmlFor:"toggle",className:i.label,children:e.jsx("span",{className:i.labelBack})})]})},D=()=>e.jsx("div",{className:r.body,children:e.jsxs("div",{className:r.wrapper,children:[e.jsxs("div",{className:r.logo,children:[e.jsx("img",{src:"./logo.png",alt:""}),e.jsx("p",{id:"logo",children:"OVB"})]}),e.jsx(E,{fullWidth:!1,width:500,height:40,activeColor:"#20c997",color:"#000",dataLists:[{value:"home",label:"Home"},{value:"about",label:"About"},{value:"portfolio",label:"Portfolio"},{value:"resume",label:"Resume"},{value:"contact",label:"Contact"}],root:r.root,mask:r.mask,tab:r.tab}),e.jsx(q,{})]})}),J={},K={},Q=()=>e.jsx("div",{className:K.body,children:"Footer"});let v=!1,U=null;const X=t=>{if(!v)throw U||(U=new Promise(o=>{setTimeout(()=>{v=!0,o()},t)}))},Z=()=>(X(3e3),e.jsxs(e.Fragment,{children:[e.jsx(C,{effect:"-100vh"}),e.jsxs("div",{className:J.body,children:[e.jsx(D,{}),e.jsx(N,{}),e.jsx(Q,{})]})]}));export{Z as default};
