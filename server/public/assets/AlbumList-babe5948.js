import{D as k,a as E,r as i,o as y,s as xe,y as j,l as ce,n as X,b as H,O as _,M as R,p as Ve,R as m,t as K,c as we,d as N,N as Ye,T as ze,e as ye,g as I,h as Ge,I as D,i as ae,k as Ue,S as ve,C as _e,m as G,q as qe,v as Je,w as Xe,j as c,x as Z,X as Ke,z as ee,B as Qe}from"./index-0525d998.js";import{N as Ze,C as et}from"./Card-d8e2b740.js";let tt="div";var q=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(q||{});function nt(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return E({ourProps:l,theirProps:r,slot:{},defaultTag:tt,name:"Hidden"})}let le=k(nt);function ue(e,t){let n=i.useRef([]),r=y(e);i.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let s=r(t,l);return n.current=t,s}},[r,...t])}function rt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function at(e,t,n){let r=xe(t);i.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function lt(){let e=i.useRef(0);return at("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function be(e,t,n,r){let l=xe(n);i.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function ot(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function ke(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let st="div";var Ee=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ee||{});function it(e,t){let n=i.useRef(null),r=j(n,t),{initialFocus:l,containers:a,features:o=30,...s}=e;ce()||(o=1);let u=X(n);dt({ownerDocument:u},!!(o&16));let d=ft({ownerDocument:u,container:n,initialFocus:l},!!(o&2));ht({ownerDocument:u,container:n,containers:a,previousActiveElement:d},!!(o&8));let f=lt(),b=y(p=>{let $=n.current;$&&(T=>T())(()=>{H(f.current,{[B.Forwards]:()=>{_($,R.First,{skipElements:[p.relatedTarget]})},[B.Backwards]:()=>{_($,R.Last,{skipElements:[p.relatedTarget]})}})})}),g=Ve(),M=i.useRef(!1),C={ref:r,onKeyDown(p){p.key=="Tab"&&(M.current=!0,g.requestAnimationFrame(()=>{M.current=!1}))},onBlur(p){let $=ke(a);n.current instanceof HTMLElement&&$.add(n.current);let T=p.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&($e($,T)||(M.current?_(n.current,H(f.current,{[B.Forwards]:()=>R.Next,[B.Backwards]:()=>R.Previous})|R.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&N(p.target)))}};return m.createElement(m.Fragment,null,!!(o&4)&&m.createElement(le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:b,features:q.Focusable}),E({ourProps:C,theirProps:s,defaultTag:st,name:"FocusTrap"}),!!(o&4)&&m.createElement(le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:b,features:q.Focusable}))}let ct=k(it),O=Object.assign(ct,{features:Ee}),S=[];ot(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&S[0]!==t.target&&(S.unshift(t.target),S=S.filter(n=>n!=null&&n.isConnected),S.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ut(e=!0){let t=i.useRef(S.slice());return ue(([n],[r])=>{r===!0&&n===!1&&K(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=S.slice())},[e,S,t]),y(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function dt({ownerDocument:e},t){let n=ut(t);ue(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]);let r=i.useRef(!1);i.useEffect(()=>(r.current=!1,()=>{r.current=!0,K(()=>{r.current&&N(n())})}),[])}function ft({ownerDocument:e,container:t,initialFocus:n},r){let l=i.useRef(null),a=we();return ue(()=>{if(!r)return;let o=t.current;o&&K(()=>{if(!a.current)return;let s=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===s){l.current=s;return}}else if(o.contains(s)){l.current=s;return}n!=null&&n.current?N(n.current):_(o,R.First)===Ye.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function ht({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=we();be(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let s=ke(n);t.current instanceof HTMLElement&&s.add(t.current);let u=r.current;if(!u)return;let d=o.target;d&&d instanceof HTMLElement?$e(s,d)?(r.current=d,N(d)):(o.preventDefault(),o.stopPropagation(),N(u)):N(r.current)},!0)}function $e(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let je=i.createContext(!1);function pt(){return i.useContext(je)}function oe(e){return m.createElement(je.Provider,{value:e.force},e.children)}function mt(e){let t=pt(),n=i.useContext(Ce),r=X(e),[l,a]=i.useState(()=>{if(!t&&n!==null||ye.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let s=r.createElement("div");return s.setAttribute("id","headlessui-portal-root"),r.body.appendChild(s)});return i.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),i.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let vt=i.Fragment;function gt(e,t){let n=e,r=i.useRef(null),l=j(ze(f=>{r.current=f}),t),a=X(r),o=mt(r),[s]=i.useState(()=>{var f;return ye.isServer?null:(f=a==null?void 0:a.createElement("div"))!=null?f:null}),u=ce(),d=i.useRef(!1);return I(()=>{if(d.current=!1,!(!o||!s))return o.contains(s)||(s.setAttribute("data-headlessui-portal",""),o.appendChild(s)),()=>{d.current=!0,K(()=>{var f;d.current&&(!o||!s||(s instanceof Node&&o.contains(s)&&o.removeChild(s),o.childNodes.length<=0&&((f=o.parentElement)==null||f.removeChild(o))))})}},[o,s]),u?!o||!s?null:Ge.createPortal(E({ourProps:{ref:l},theirProps:n,defaultTag:vt,name:"Portal"}),s):null}let xt=i.Fragment,Ce=i.createContext(null);function wt(e,t){let{target:n,...r}=e,l={ref:j(t)};return m.createElement(Ce.Provider,{value:n},E({ourProps:l,theirProps:r,defaultTag:xt,name:"Popover.Group"}))}let yt=k(gt),bt=k(wt),se=Object.assign(yt,{Group:bt}),Te=i.createContext(null);function Se(){let e=i.useContext(Te);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Se),t}return e}function kt(){let[e,t]=i.useState([]);return[e.length>0?e.join(" "):void 0,i.useMemo(()=>function(n){let r=y(a=>(t(o=>[...o,a]),()=>t(o=>{let s=o.slice(),u=s.indexOf(a);return u!==-1&&s.splice(u,1),s}))),l=i.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Te.Provider,{value:l},n.children)},[t])]}let Et="p";function $t(e,t){let n=D(),{id:r=`headlessui-description-${n}`,...l}=e,a=Se(),o=j(t);I(()=>a.register(r),[r,a.register]);let s={ref:o,...a.props,id:r};return E({ourProps:s,theirProps:l,slot:a.slot||{},defaultTag:Et,name:a.name||"Description"})}let jt=k($t),Ct=Object.assign(jt,{}),de=i.createContext(()=>{});de.displayName="StackContext";var ie=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ie||{});function Tt(){return i.useContext(de)}function St({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=Tt(),o=y((...s)=>{t==null||t(...s),a(...s)});return I(()=>{let s=l===void 0||l===!0;return s&&o(0,n,r),()=>{s&&o(1,n,r)}},[o,n,r,l]),m.createElement(de.Provider,{value:o},e)}function Lt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Nt=typeof Object.is=="function"?Object.is:Lt,{useState:Ft,useEffect:Pt,useLayoutEffect:Rt,useDebugValue:Dt}=ae;function Mt(e,t,n){const r=t(),[{inst:l},a]=Ft({inst:{value:r,getSnapshot:t}});return Rt(()=>{l.value=r,l.getSnapshot=t,te(l)&&a({inst:l})},[e,r,t]),Pt(()=>(te(l)&&a({inst:l}),e(()=>{te(l)&&a({inst:l})})),[e]),Dt(r),r}function te(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Nt(n,r)}catch{return!0}}function Ot(e,t,n){return t()}const At=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bt=!At,Ht=Bt?Ot:Mt,It="useSyncExternalStore"in ae?(e=>e.useSyncExternalStore)(ae):Ht;function Wt(e){return It(e.subscribe,e.getSnapshot,e.getSnapshot)}function Vt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(s=>s()))}}}function Yt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function zt(){if(!rt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(s=>s()).some(s=>s.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let s=o.target.closest("a");if(!s)return;let{hash:u}=new URL(s.href),d=t.querySelector(u);d&&!l(d)&&(a=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function Gt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ut(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let L=Vt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Ue(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ut(n)},l=[zt(),Yt(),Gt()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});L.subscribe(()=>{let e=L.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&L.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&L.dispatch("TEARDOWN",n)}});function _t(e,t,n){let r=Wt(L),l=e?r.get(e):void 0,a=l?l.count>0:!1;return I(()=>{if(!(!e||!t))return L.dispatch("PUSH",e,n),()=>L.dispatch("POP",e,n)},[t,e]),a}let ne=new Map,A=new Map;function ge(e,t=!0){I(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let s=(o=A.get(r))!=null?o:1;if(s===1?A.delete(r):A.set(r,s-1),s!==1)return;let u=ne.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,ne.delete(r))}let a=(n=A.get(r))!=null?n:0;return A.set(r,a+1),a!==0||(ne.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}var qt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qt||{}),Jt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Jt||{});let Xt={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=i.createContext(null);J.displayName="DialogContext";function W(e){let t=i.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function Kt(e,t,n=()=>[document.body]){_t(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function Qt(e,t){return H(t.type,Xt,e,t)}let Zt="div",en=ve.RenderStrategy|ve.Static;function tn(e,t){let n=D(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:a,initialFocus:o,__demoMode:s=!1,...u}=e,[d,f]=i.useState(0),b=_e();l===void 0&&b!==null&&(l=(b&G.Open)===G.Open);let g=i.useRef(null),M=j(g,t),C=i.useRef(null),p=X(g),$=e.hasOwnProperty("open")||b!==null,T=e.hasOwnProperty("onClose");if(!$&&!T)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!$)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!T)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let x=l?0:1,[F,Le]=i.useReducer(Qt,{titleId:null,descriptionId:null,panelRef:i.createRef()}),P=y(()=>a(!1)),fe=y(h=>Le({type:0,id:h})),V=ce()?s?!1:x===0:!1,Y=d>1,he=i.useContext(J)!==null,Ne=Y?"parent":"leaf",pe=b!==null?(b&G.Closing)===G.Closing:!1,Fe=(()=>he||pe?!1:V)(),Pe=i.useCallback(()=>{var h,w;return(w=Array.from((h=p==null?void 0:p.querySelectorAll("body > *"))!=null?h:[]).find(v=>v.id==="headlessui-portal-root"?!1:v.contains(C.current)&&v instanceof HTMLElement))!=null?w:null},[C]);ge(Pe,Fe);let Re=(()=>Y?!0:V)(),De=i.useCallback(()=>{var h,w;return(w=Array.from((h=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(v=>v.contains(C.current)&&v instanceof HTMLElement))!=null?w:null},[C]);ge(De,Re);let Q=y(()=>{var h,w;return[...Array.from((h=p==null?void 0:p.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?h:[]).filter(v=>!(v===document.body||v===document.head||!(v instanceof HTMLElement)||v.contains(C.current)||F.panelRef.current&&v.contains(F.panelRef.current))),(w=F.panelRef.current)!=null?w:g.current]}),Me=(()=>!(!V||Y))();qe(()=>Q(),P,Me);let Oe=(()=>!(Y||x!==0))();be(p==null?void 0:p.defaultView,"keydown",h=>{Oe&&(h.defaultPrevented||h.key===Je.Escape&&(h.preventDefault(),h.stopPropagation(),P()))});let Ae=(()=>!(pe||x!==0||he))();Kt(p,Ae,Q),i.useEffect(()=>{if(x!==0||!g.current)return;let h=new ResizeObserver(w=>{for(let v of w){let z=v.target.getBoundingClientRect();z.x===0&&z.y===0&&z.width===0&&z.height===0&&P()}});return h.observe(g.current),()=>h.disconnect()},[x,g,P]);let[Be,He]=kt(),Ie=i.useMemo(()=>[{dialogState:x,close:P,setTitleId:fe},F],[x,F,P,fe]),me=i.useMemo(()=>({open:x===0}),[x]),We={ref:M,id:r,role:"dialog","aria-modal":x===0?!0:void 0,"aria-labelledby":F.titleId,"aria-describedby":Be};return m.createElement(St,{type:"Dialog",enabled:x===0,element:g,onUpdate:y((h,w)=>{w==="Dialog"&&H(h,{[ie.Add]:()=>f(v=>v+1),[ie.Remove]:()=>f(v=>v-1)})})},m.createElement(oe,{force:!0},m.createElement(se,null,m.createElement(J.Provider,{value:Ie},m.createElement(se.Group,{target:g},m.createElement(oe,{force:!1},m.createElement(He,{slot:me,name:"Dialog.Description"},m.createElement(O,{initialFocus:o,containers:Q,features:V?H(Ne,{parent:O.features.RestoreFocus,leaf:O.features.All&~O.features.FocusLock}):O.features.None},E({ourProps:We,theirProps:u,slot:me,defaultTag:Zt,features:en,visible:x===0,name:"Dialog"})))))))),m.createElement(le,{features:q.Hidden,ref:C}))}let nn="div";function rn(e,t){let n=D(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=W("Dialog.Overlay"),s=j(t),u=y(f=>{if(f.target===f.currentTarget){if(Xe(f.currentTarget))return f.preventDefault();f.preventDefault(),f.stopPropagation(),o()}}),d=i.useMemo(()=>({open:a===0}),[a]);return E({ourProps:{ref:s,id:r,"aria-hidden":!0,onClick:u},theirProps:l,slot:d,defaultTag:nn,name:"Dialog.Overlay"})}let an="div";function ln(e,t){let n=D(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Backdrop"),s=j(t);i.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let u=i.useMemo(()=>({open:a===0}),[a]);return m.createElement(oe,{force:!0},m.createElement(se,null,E({ourProps:{ref:s,id:r,"aria-hidden":!0},theirProps:l,slot:u,defaultTag:an,name:"Dialog.Backdrop"})))}let on="div";function sn(e,t){let n=D(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Panel"),s=j(t,o.panelRef),u=i.useMemo(()=>({open:a===0}),[a]),d=y(f=>{f.stopPropagation()});return E({ourProps:{ref:s,id:r,onClick:d},theirProps:l,slot:u,defaultTag:on,name:"Dialog.Panel"})}let cn="h2";function un(e,t){let n=D(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=W("Dialog.Title"),s=j(t);i.useEffect(()=>(o(r),()=>o(null)),[r,o]);let u=i.useMemo(()=>({open:a===0}),[a]);return E({ourProps:{ref:s,id:r},theirProps:l,slot:u,defaultTag:cn,name:"Dialog.Title"})}let dn=k(tn),fn=k(ln),hn=k(sn),pn=k(rn),mn=k(un),re=Object.assign(dn,{Backdrop:fn,Panel:hn,Overlay:pn,Title:mn,Description:Ct});function vn({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"}))}const gn=i.forwardRef(vn),xn=gn;function wn({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))}const yn=i.forwardRef(wn),bn=yn;function kn({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z",clipRule:"evenodd"}))}const En=i.forwardRef(kn),$n=En;function jn({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"}))}const Cn=i.forwardRef(jn),Tn=Cn,U=[{name:"Styles",current:!1,options:[{value:"Rock",checked:!1},{value:"Pop",checked:!1},{value:"Jazz",checked:!1},{value:"Blues",checked:!1},{value:"Rap",checked:!1},{value:"Classique",checked:!1},{value:"Metal",checked:!1},{value:"Reggae",checked:!1},{value:"Electro",checked:!1},{value:"Funk",checked:!1},{value:"Disco",checked:!1},{value:"Country",checked:!1},{value:"Soul",checked:!1},{value:"Folk",checked:!1},{value:"RnB",checked:!1},{value:"Hip-Hop",checked:!1},{value:"Techno",checked:!1},{value:"House",checked:!1},{value:"Ambient",checked:!1},{value:"Chill",checked:!1},{value:"Lounge",checked:!1},{value:"Dance",checked:!1},{value:"Trance",checked:!1},{value:"Drum and Bass",checked:!1},{value:"Dubstep",checked:!1},{value:"Hardcore",checked:!1},{value:"Hardstyle",checked:!1},{value:"Jungle",checked:!1},{value:"New Age",checked:!1},{value:"Trip-Hop",checked:!1},{value:"World",checked:!1},{value:"Autre",checked:!1}]},{name:"Artist",current:!1,options:[{value:"The Beatles",checked:!1},{value:"The Rolling Stones",checked:!1},{value:"Pink Floyd",checked:!1},{value:"Led Zeppelin",checked:!1},{value:"Queen",checked:!1},{value:"Elvis Presley",checked:!1},{value:"AC/DC",checked:!1},{value:"Michael Jackson",checked:!1},{value:"Eagles",checked:!1},{value:"U2",checked:!1},{value:"Nirvana",checked:!1},{value:"The Bee Gees",checked:!1},{value:"Metallica",checked:!1},{value:"The Doors",checked:!1},{value:"The Police",checked:!1},{value:"Bob Marley",checked:!1},{value:"The Who",checked:!1},{value:"David Bowie",checked:!1},{value:"Elton John",checked:!1}]}];function Sn({showFilter:e,setShowFilter:t,filter:n,setFilter:r}){function l(a,o){let s=[...n],u=s.findIndex(d=>d.name===a.toLowerCase());if(u===-1)s.push({name:a.toLowerCase(),value:[o]});else{let d=s[u].value.findIndex(f=>f===o);d===-1?s[u].value.push(o):s[u].value.splice(d,1)}r(s)}return i.useEffect(()=>{console.log("old",U),U.forEach(a=>{let o=n.findIndex(s=>s.name===a.name.toLowerCase());o!==-1?(a.current=!0,a.options.forEach(s=>{let u=n[o].value.findIndex(d=>d===s.value);s.checked=u!==-1})):(a.current=!1,a.options.forEach(s=>{s.checked=!1}))}),console.log("new",U)},[]),c.jsx(Z.Root,{show:e,as:i.Fragment,children:c.jsxs(re,{as:"div",className:"relative z-10",onClose:t,children:[c.jsx(Z.Child,{as:i.Fragment,enter:"ease-in-out duration-700",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-700",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:c.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"})}),c.jsx("div",{className:"fixed inset-0 overflow-hidden",children:c.jsx("div",{className:"absolute inset-0 overflow-hidden",children:c.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:c.jsx(Z.Child,{as:i.Fragment,enter:"transform transition ease-in-out duration-700 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-700 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:c.jsx(re.Panel,{className:"pointer-events-auto w-screen max-w-xl",children:c.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-dark py-6 shadow-xl",children:[c.jsx("div",{className:"px-4 sm:px-6",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsx(re.Title,{className:"text-base font-semibold leading-6 text-gray-100",children:"Filtrer les albums"}),c.jsx("div",{className:"ml-3 flex h-7 items-center",children:c.jsxs("button",{type:"button",className:"rounded-md bg-dark text-gray-100 hover:text-gray-500 outline-none",onClick:()=>t(!1),children:[c.jsx("span",{className:"sr-only",children:"Close panel"}),c.jsx(Ke,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),c.jsx("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:U.map(a=>c.jsx(ee,{as:"div",className:"border-t border-gray-700",children:({open:o})=>c.jsxs(c.Fragment,{children:[c.jsx("h3",{children:c.jsxs(ee.Button,{className:`flex w-full items-center justify-between px-2 py-3 text-gray-100 hover:bg-light ${o&&"bg-light"}`,onClick:()=>{},children:[c.jsx("span",{className:"font-medium text-gray-100",children:a.name}),c.jsx("span",{className:"ml-6 flex items-center",children:o?c.jsx($n,{className:"h-5 w-5","aria-hidden":"true"}):c.jsx(Tn,{className:"h-5 w-5","aria-hidden":"true"})})]})}),c.jsx(ee.Panel,{className:"pl-4 pt-2",children:a.options.map((s,u)=>c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{id:`filterElement-${a.id}-${u}`,name:`${a.id}[]`,defaultValue:s.value,type:"checkbox",defaultChecked:s.checked,className:"h-4 w-4 rounded border-gray-100 accent-primary",onChange:()=>l(a.name,s.value)}),c.jsx("label",{htmlFor:`filterElement-${a.id}-${u}`,className:"ml-3 min-w-0 flex-1 text-gray-100",children:s.value})]},s.value))})]})},a.name))})]})})})})})})]})})}function Ln({filter:e,setFilter:t,search:n,setSearch:r}){const[l,a]=i.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flex items-center justify-center px-6 py-4 w-full md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0",children:[c.jsxs("div",{className:"md:w-1/3 w-full",children:[c.jsx("label",{htmlFor:"search",className:"sr-only",children:"Search"}),c.jsxs("div",{className:"relative mr-2",children:[c.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:c.jsx(bn,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),c.jsx("input",{id:"search",name:"search",className:"block w-full rounded-md border-0 bg-dark py-1.5 pl-10 pr-3 text-gray-100 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-primary sm:text-sm sm:leading-6",placeholder:"Search",type:"search",value:n,onChange:o=>r(o.target.value)})]})]}),c.jsx("button",{children:c.jsx(xn,{className:"h-5 w-5 text-gray-400","aria-hidden":"true",onClick:()=>a(!l)})}),e.length>0&&c.jsx("button",{type:"button",className:"py-1 px-2 text-sm text-gray-100/50",onClick:()=>{t([]),r("")},children:"Supprimer les filtres"})]}),l&&c.jsx(Sn,{filter:e,setFilter:t,showFilter:l,setShowFilter:a})]})}function Nn(e){return e.map(t=>c.jsx(et,{onClickLink:`/user/album/${t.id}`,imgLink:t.cover,title:t.title,artist:t.artist,year:t.year},t.id))}function Rn(){const[e,t]=i.useState([]),[n,r]=i.useState(""),{albums:l}=i.useContext(Qe);function a(o,s,u){let d=[...e],f=d.findIndex(g=>g.name===s),b=d[f].value.findIndex(g=>g===u);d[f].value.splice(b,1),t(d)}return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"bg-light mb-8",children:[c.jsx(Ln,{filter:e,setFilter:t,search:n,setSearch:r}),e.length>0&&c.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:e.map(o=>o.value.map(s=>c.jsxs("span",{className:"mb-4 inline-flex items-center gap-x-1 rounded-md bg-gradient-to-r from-primary/25 to-secondary/50 px-2 py-1 text-xs font-medium text-gray-200",children:[s,c.jsxs("button",{type:"button",className:"group relative -mr-1 h-5 w-5 rounded-full hover:bg-light/50",onClick:()=>a(e,o.name,s),children:[c.jsx("span",{className:"sr-only",children:"Remove"}),c.jsx("svg",{viewBox:"0 0 14 14",className:"h-5 w-5 stroke-gray-100",children:c.jsx("path",{d:"M4 4l6 6m0-6l-6 6"})}),c.jsx("span",{className:"absolute -inset-1"})]})]})))})]}),c.jsx("div",{className:"grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 place-content-around",children:l.length>0?Nn(l):c.jsx(Ze,{})})]})}export{Rn as default};
