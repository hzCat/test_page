import{c as A,d as $,a as y,$ as E,A as F,m as H,a0 as O,I as T,w as V,a1 as q,r as b,N as j,o as l,g as i,q as e,j as a,t as u,F as g,h as w,k as L,l as k,s as C,a2 as z,v as D,x as M,_ as I,a3 as K,B as U,T as G,a4 as J,a5 as P}from"./index-DrH4ebPx.js";import{u as N,a as Q,b as W}from"./login-T4CXF4fA.js";import{P as X}from"./mount-component-BRwBUCyJ.js";import{a as Y}from"./index-DMMOGL-Y.js";import"./index-DxfqEgN6.js";const[Z,S]=A("tag"),ee={size:String,mark:Boolean,show:F,type:H("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var te=$({name:Z,props:ee,emits:["close"],setup(t,{slots:h,emit:n}){const r=p=>{p.stopPropagation(),n("close",p)},_=()=>t.plain?{color:t.textColor||t.color,borderColor:t.color}:{color:t.textColor,background:t.color},x=()=>{var p;const{type:v,mark:f,plain:d,round:m,size:c,closeable:s}=t,o={mark:f,plain:d,round:m};c&&(o[c]=c);const B=s&&y(T,{name:"cross",class:[S("close"),O],onClick:r},null);return y("span",{style:_(),class:S([o,v])},[(p=h.default)==null?void 0:p.call(h),B])};return()=>y(E,{name:t.closeable?"van-fade":void 0},{default:()=>[t.show?x():null]})}});const se=V(te),R=t=>(D("data-v-a067f85a"),t=t(),M(),t),oe={class:"list-item flex middle start"},ae=["src"],ne={class:"right flex1 flex column start top"},le={class:"title"},ce={class:"tags"},ie={class:"price flex middle start"},re={class:"price-num"},de=R(()=>e("span",{class:"small"},"¥",-1)),ue={class:"calc"},_e={class:"buy flex middle between"},pe={class:"radio"},me={class:"radio-num"},fe=R(()=>e("button",{class:"buy-button"},"抢",-1)),he=$({__name:"ListItem",props:{item:{type:Object,required:!0}},setup(t){const h=t,{item:n}=q(h);let r=b(Math.floor(new Date().getHours()/24*100)),_=j(()=>r.value>20?r.value:20);return(x,p)=>{const v=se;return l(),i("div",oe,[e("img",{src:a(n).img,class:"left"},null,8,ae),e("div",ne,[e("h4",le,u(a(n).name),1),e("div",ce,[(l(!0),i(g,null,w(a(n).tags,(f,d)=>(l(),L(v,{style:{"margin-right":"10px"},plain:"",type:d==0?"danger":"warning",key:d},{default:k(()=>[C(u(f),1)]),_:2},1032,["type"]))),128))]),e("div",ie,[e("span",re,[de,C(u((a(n).price*10-a(n).saveMoney*10)/10),1)]),y(v,{plain:"",class:"save-money",type:"danger"},{default:k(()=>[C(" 省"+u(a(n).saveMoney)+"元",1)]),_:1}),e("span",ue,"日常价:"+u(a(n).price)+"元",1)]),e("div",_e,[e("div",pe,[e("div",{class:"inside",style:z({width:`${a(_)-a(n).offset}%`})},null,4)]),e("div",me,u(a(_)-a(n).offset)+"%",1),fe])])])}}}),ve=I(he,[["__scopeId","data-v-a067f85a"]]),ge={class:"low-price"},ye={class:"text flex column around"},xe=$({__name:"LowPrice",props:{texts:{type:Array,default:()=>[{value:"您将获得1-3个优惠券",style:"color:var(--jd-color)"},{value:"请及时使用"},{value:"点击按钮登录后领取",style:"color:var(--jd-color)"}]},path:{type:String,default:"/wechat"}},setup(t,{expose:h}){const{toLogin:n}=N();let{show:r,open:_,close:x}=Q();const p=t;_();async function v(){try{await Y({message:"确定要关闭吗？",confirmButtonText:"确定",confirmButtonColor:"var(--jd-color)",cancelButtonText:"取消",showCancelButton:!0,closeOnClickOverlay:!0}),x()}catch{}}return h({open:_}),(f,d)=>{const m=U,c=T,s=X;return l(),L(s,{show:a(r),"onUpdate:show":d[1]||(d[1]=o=>K(r)?r.value=o:r=o),style:{padding:"64px"}},{default:k(()=>[e("div",ge,[e("div",ye,[(l(!0),i(g,null,w(p.texts,(o,B)=>(l(),i("div",{class:"line",key:B,style:z(o==null?void 0:o.style)},u(o.value),5))),128))]),y(m,{class:"btn",round:"",size:"normal",color:"var(--jd-color)",onClick:d[0]||(d[0]=o=>a(n)(t.path))},{default:k(()=>[C("登录后领取")]),_:1}),y(c,{name:"close",class:"close",onClick:v})])]),_:1},8,["show"])}}}),we=I(xe,[["__scopeId","data-v-69fa337f"]]),be=t=>(D("data-v-135268c7"),t=t(),M(),t),Ce=be(()=>e("img",{class:"head",src:"http://img.seaboats.cn/prevent_page/jd_top.png",alt:""},null,-1)),ke={class:"list-1 flex middle between"},$e=["src"],Be={class:"name"},Le={class:"time-list flex middle between"},Ie={class:"line-1"},Pe={class:"line-2"},Se={class:"class-list flex middle between"},Te={class:"product-list"},je=$({__name:"index",setup(t){const{toLogin:h}=N(),{getLimitList:n}=W();let r=n(5);const _=b(null);G(()=>{setTimeout(()=>{var m;(m=_.value)==null||m.open()},1e3)});let x=b([{name:"欢乐淘金",img:"http://img.seaboats.cn/prevent_page/icon_1.png"},{name:"转赚红包",img:"http://img.seaboats.cn/prevent_page/icon_2.png"},{name:"大牌奥莱",img:"http://img.seaboats.cn/prevent_page/icon_3.png"},{name:"低价捡漏",img:"http://img.seaboats.cn/prevent_page/icon_4.png"}]),p=b(["精选","家居家电","医药健康","食品饮料","美妆个护","服饰鞋包","母婴玩具","数码家电","运动户外","生鲜水果","图书音像","游戏周边","其他"]),f=new Date().getHours(),d=j(()=>{f%2==1&&f--;let m=[];for(let c=0;c<6;c++){let s=f+c*2;s>=24&&(s=s-24),s=s<10?"0"+s:s,m.push(s)}return m});return(m,c)=>(l(),i(g,null,[e("div",{class:"jd-index",onTouchend:c[0]||(c[0]=J(s=>a(h)("/wechat"),["stop"]))},[Ce,e("div",ke,[(l(!0),i(g,null,w(a(x),(s,o)=>(l(),i("div",{class:"item flex middle center",key:o},[e("img",{class:"icon",src:s.img,alt:""},null,8,$e),e("div",Be,u(s.name),1)]))),128))]),e("div",Le,[(l(!0),i(g,null,w(a(d),(s,o)=>(l(),i("div",{class:P(["time-item flex middle center column",{selected:o==0}])},[e("div",Ie,u(s)+":00",1),e("div",Pe,u(o==0?"正在抢购":"即将开抢"),1)],2))),256))]),e("div",Se,[(l(!0),i(g,null,w(a(p),(s,o)=>(l(),i("div",{class:P(["class-item",{selected:o==0}])},u(s),3))),256))]),e("div",Te,[(l(!0),i(g,null,w(a(r),s=>(l(),L(ve,{item:s,key:s.name},null,8,["item"]))),128))])],32),y(we,{ref_key:"LowPriceRef",ref:_},null,512)],64))}}),Ae=I(je,[["__scopeId","data-v-135268c7"]]);export{Ae as default};
