import{P as z,m as M,u as N}from"./mount-component-BRwBUCyJ.js";import{c as L,d as j,R as w,T as U,at as V,a as s,b as O,p as q,m as k,n as v,au as D,u as p,I as F,av as H,V as R,e as h,i as _,f as A,r as E,y as G,w as J}from"./index-DrH4ebPx.js";let d=0;function K(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[Q,l]=L("toast"),W=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],X={icon:String,show:Boolean,type:k("text"),overlay:Boolean,message:v,iconSize:v,duration:D(2e3),position:k("middle"),teleport:[String,Object],wordBreak:String,className:p,iconPrefix:String,transition:k("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:p,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:v};var S=j({name:Q,props:X,emits:["update:show"],setup(e,{emit:a,slots:o}){let u,i=!1;const c=()=>{const t=e.show&&e.forbidClick;i!==t&&(i=t,K(i))},r=t=>a("update:show",t),y=()=>{e.closeOnClick&&r(!1)},f=()=>clearTimeout(u),m=()=>{const{icon:t,type:n,iconSize:C,iconPrefix:T,loadingType:B}=e;if(t||n==="success"||n==="fail")return s(F,{name:t||n,size:C,class:l("icon"),classPrefix:T},null);if(n==="loading")return s(H,{class:l("loading"),size:C,type:B},null)},I=()=>{const{type:t,message:n}=e;if(o.message)return s("div",{class:l("text")},[o.message()]);if(R(n)&&n!=="")return t==="html"?s("div",{key:0,class:l("text"),innerHTML:String(n)},null):s("div",{class:l("text")},[n])};return w(()=>[e.show,e.forbidClick],c),w(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(u=setTimeout(()=>{r(!1)},e.duration))}),U(c),V(c),()=>s(z,O({class:[l([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:f,"onUpdate:show":r},q(e,W)),{default:()=>[m(),I()]})}});const Y={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let g=[],Z=!1,b=h({},Y);const $=new Map;function P(e){return A(e)?e:{message:e}}function ee(){const{instance:e,unmount:a}=M({setup(){const o=E(""),{open:u,state:i,close:c,toggle:r}=N(),y=()=>{},f=()=>s(S,O(i,{onClosed:y,"onUpdate:show":r}),null);return w(o,m=>{i.message=m}),G().render=f,{open:u,close:c,message:o}}});return e}function te(){if(!g.length||Z){const e=ee();g.push(e)}return g[g.length-1]}function ne(e={}){if(!_)return{};const a=te(),o=P(e);return a.open(h({},b,$.get(o.type||b.type),o)),a}const x=e=>a=>ne(h({type:e},P(a))),ie=x("loading"),le=x("fail");J(S);export{le as a,ne as b,ie as s};
