var de=Object.defineProperty;var ue=(t,a,s)=>a in t?de(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;var I=(t,a,s)=>(ue(t,typeof a!="symbol"?a+"":a,s),s);import{d as e,j as h,g as J,D as w,h as T,F as P,f as $,Q as he,i as pe,e as fe}from"./index-a5171272.js";import{r as O}from"./react-432945ee.js";import{m as _,u as A,n as Z,r as ge,L as me,s as Se,v as ve,w as ye,p as xe,R as Ce}from"./vendor-7c97820b.js";import{D as ke,L as U,I as H,d as we,S as Ne,a as E,F,s as z,b as be,c as V,T as Oe,e as ee,f as De,P as Le}from"./AddOutlined-3054a82a.js";import{d as te,s as ze}from"./DeleteOutlineOutlined-7018ca68.js";import{S as M,r as B,i as Q}from"./createSvgIcon-7f30e35c.js";import{j as G}from"./reactDnd-8591509b.js";import{b as ae}from"./reactSelect-eafcd993.js";import"./memoize-acaceb73.js";const j=t=>{const{value:a,onClick:s,primary:c,title:l}=t;return e(ke,{title:l,onClick:s,primary:c,children:a})},Ae=t=>T("display:flex;flex:",t?1:0,";",""),ne=({value:t,locked:a,onChange:s,opts:c,label:l,labelWidth:f,name:S,fullWidth:C,width:v})=>{const[y,x]=O.useState(""),N=O.useRef(null),k=O.useMemo(()=>typeof c[0]=="string"?c.map(u=>({value:u,name:u})):c,[c]);return O.useEffect(()=>{var m,n;const u=(m=k==null?void 0:k.find(r=>r.name===t))==null?void 0:m.value;u&&((n=N==null?void 0:N.current)==null?void 0:n.value)!==u&&(x(u),N.current.value=u)},[t]),h(H,{width:v,children:[(l==null?void 0:l.length)>0&&e(U,{width:f||null,children:l}),e("select",{ref:N,className:J(Ae(C)),disabled:a,defaultValue:w.sanitize(y),onChange:u=>s(u,S),children:k==null?void 0:k.map((u,m)=>e("option",{value:w.sanitize(u.value),children:u.name},m))})]})},se=t=>{const{value:a,onChange:s,locked:c,label:l}=t;return h(H,{children:[e(U,{children:l}),e(M,{disabled:c,size:"small",checked:a,onChange:s})]})};var W={},Ie=Q;Object.defineProperty(W,"__esModule",{value:!0});var ie=W.default=void 0,Je=Ie(B()),Fe=G,Te=(0,Je.default)((0,Fe.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"CachedOutlined");ie=W.default=Te;var K={},_e=Q;Object.defineProperty(K,"__esModule",{value:!0});var re=K.default=void 0,Ee=_e(B()),Re=G,je=(0,Ee.default)((0,Re.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");re=K.default=je;const le=t=>a=>{a({type:"SET_IS_DATASOURCE_SAVED",isDsSaved:t})};var X={},Pe=Q;Object.defineProperty(X,"__esModule",{value:!0});var oe=X.default=void 0,$e=Pe(B()),Me=G,Ue=(0,$e.default)((0,Me.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");oe=X.default=Ue;const ce=T({name:"vtwnvy",styles:"height:12px!important;width:12px!important;color:white;margin:0px 4px"}),He=t=>T("display:flex;align-items:center;background:",t.primary,";color:white;font-size:11px;padding:4px;border-radius:3px;margin-right:10px;cursor:pointer;span{margin-right:4px;font-weight:bold;}",""),qe=T({name:"1t9g6tg",styles:"display:flex;align-items:center;background:#b62c14;color:white;font-size:12px;padding:4px;border-radius:3px;margin-right:10px;cursor:pointer;span{margin-right:4px;font-weight:bold;}"}),Ve=T({name:"9hkg7e",styles:"display:flex;align-items:center;font-size:12px;&.loading-icon{height:14px;width:14px;}"}),Be=({setIsSaved:t})=>{const a=$();return h("div",{className:J(He(a)),onClick:s=>t(!1),children:[e(re,{className:J(ce)})," ",e("span",{children:"Saved"})]})},Y=({errorText:t})=>h("div",{className:J(qe),children:[e(oe,{className:J(ce)})," ",e("span",{children:t})]});function q(t){const{onClickAdd:a,isAdd:s,title:c,isEditing:l,fieldErrors:f}=t,S=_(),[C,v]=O.useState(!1);return O.useEffect(()=>(l&&(setTimeout(()=>{v(!0),S(le(!0))},800),v(!1)),v(!1),()=>{v(!1)}),[l]),h(Ne,{children:[c,h("div",{className:"edit-buttons",children:[l&&h("div",{className:Ve,children:[e(ie,{style:{height:"13px",width:"13px"}})," ","Saving ..."]}),(f==null?void 0:f.protocol)&&e(Y,{errorText:"Insecure Mixed Content. Mixing HTTP and HTTPS is insecure and is not supported."}),(f==null?void 0:f.url)&&e(Y,{errorText:"Please complete API URL"}),C&&e(Be,{setIsSaved:v}),s&&e(P,{children:e(we,{fontSize:"small",style:{cursor:"pointer",display:"flex"},onClick:a})})]})]})}const Qe=t=>{const a=_(),s=A(u=>u.dataSources),[c,l]=O.useState(!1),{headers:f,id:S}=t,[C,v]=O.useState((t==null?void 0:t.cors)||!1),y=u=>{const m=u.target.checked,n=s.map(r=>(r.id===S&&(r.cors=m),r));v(()=>m),localStorage.setItem("dataSources",JSON.stringify(n)),a(z(n))},x=(u,m,n)=>{l(()=>!0);const r=u.target.value,g=(s.find(p=>p.id===S).headers||[]).map(p=>(p.id===m&&(p[n]=r),p)),o=s.map(p=>(p.id===S&&(p.headers=[...g]),p));localStorage.setItem("dataSources",JSON.stringify(o)),a(z(o)),setTimeout(()=>{l(()=>!1)},800)},N=u=>{u.preventDefault();const m=s==null?void 0:s.find(i=>i.id===S),n=m.headers,r=JSON.parse(JSON.stringify([...s]));if(f.length>0){const i={...n[n.length-1],id:Z()},d={...m,headers:[...m.headers,i]},g=r==null?void 0:r.map(o=>o.id===S?{...d}:o);localStorage.setItem("dataSources",JSON.stringify(g)),a(z(g))}},k=(u,m)=>{const n=s==null?void 0:s.find(o=>o.id===S),i=[...f].filter(o=>o.id!==m),d={...n,headers:[...i]},g=s==null?void 0:s.map(o=>o.id===S?{...d}:o);localStorage.setItem("dataSources",JSON.stringify(g)),a(z(g))};return e("div",{className:"",children:f&&h(P,{children:[e(q,{title:"Custom HTTP Headers",isEdit:!1,isAdd:!0,isEditing:c,onClickAdd:N}),h(E,{children:[e(U,{children:"Use CORS"})," ",e(M,{size:"small",checked:C,onChange:y})]}),f==null?void 0:f.map((u,m)=>e(E,{children:h(H,{children:[e(F,{label:"header",value:w.sanitize(u.header),onChange:n=>x(n,u.id,"header")}),e(F,{label:"value",value:w.sanitize(u.value),onChange:n=>x(n,u.id,"value")}),e(te,{onClick:n=>k(n,u.id),style:{cursor:"pointer",marginLeft:"10px"},fontSize:"small"})]})},m))]})})};function Ge(t){const a=ge(),s=$(),c=A(y=>y.urlLocation),l=_(),{title:f}=t,S=A(y=>y.isDsSaved),C=O.useMemo(()=>S?"Save":"Back",[S]),v=()=>{let y=(c==null?void 0:c.length)>0;l(le(!1)),a((y||C==="Back")&&f!=="DataSources"?-1:"")};return h("div",{className:"ds-header",children:[e("div",{style:{display:"flex",alignItems:"center"},children:h("div",{style:{display:"flex",flexDirection:"column"},children:[h("div",{style:{display:"flex"},children:[e(he,{}),e("h1",{children:f})]}),h("p",{style:{color:s.contrast,fontSize:"10px",marginTop:"5px",marginLeft:"10px",opacity:".5"},children:["v","0.28.8"]})]})}),e(j,{value:w.sanitize(C),onClick:v,editing:!0,primary:S})]})}const We=t=>{const{id:a,name:s,regex:c,urlLabel:l,internalLink:f,linkType:S,locked:C,dataSourceId:v,fieldEditing:y}=t,x=_(),N=A(i=>i.dataSources),k=O.useMemo(()=>N.map(i=>({name:i.name,value:i.id})),[N]),u=(i,d)=>{y();const g=JSON.parse(JSON.stringify(N)),L=g.find(b=>b.id===v).linkedFields.map(b=>b.id===a?{...b,[i]:d}:b);return g.map(b=>b.id===v?{...b,linkedFields:L}:b)},m=i=>{y();const d=JSON.parse(JSON.stringify(N)),p=d.find(b=>b.id===v).linkedFields.filter(b=>b.id!==a),L=d.map(b=>b.id===v?{...b,linkedFields:[...p]}:b);localStorage.setItem("dataSources",JSON.stringify(L)),x(z(L))},n=(i,d)=>{y();const g=i.target.value,o=u(d,g);localStorage.setItem("dataSources",JSON.stringify(o)),x(z(o))},r=(i,d)=>{y();const g=!!i.target.checked,o=u(d,g);localStorage.setItem("dataSources",JSON.stringify(o)),x(z(o))};return h(be,{children:[h(E,{children:[e(F,{value:w.sanitize(s),label:"Name",onChange:i=>n(i,"name")}),e(F,{value:w.sanitize(c),label:"Regex",onChange:i=>n(i,"regex")}),e(F,{value:w.sanitize(l),label:"URL Label",onChange:i=>n(i,"urlLabel")}),e(te,{onClick:m,fontSize:"small",style:{marginLeft:"10px",cursor:"pointer",display:C?"none":"inline-block"}})]}),h(E,{className:"internal",children:[e(se,{value:f,label:"Internal Link",onChange:i=>r(i,"internalLink")}),e(ne,{label:"",value:w.sanitize(S),opts:k,selectType:"linkedField",onChange:i=>n(i,"linkID")})]})]})};class Ke{constructor(){I(this,"id");I(this,"dataSource");I(this,"ds_id");I(this,"name");I(this,"regex");I(this,"query");I(this,"urlLabel");I(this,"url");I(this,"internalLink");I(this,"linkType");this.id=Z(),this.dataSource="Logs",this.ds_id="logs",this.name="traceID",this.regex='^.*?"traceID" ="(w+)".*$/',this.query="${__value.raw}",this.urlLabel="",this.url="",this.internalLink=!0,this.linkType="Traces"}create(){const{id:a,dataSource:s,ds_id:c,name:l,regex:f,query:S,urlLabel:C,url:v,internalLink:y,linkType:x}=this;return{id:a,dataSource:s,ds_id:c,name:l,regex:f,query:S,urlLabel:C,url:v,internalLink:y,linkType:x}}}const Xe=t=>{const{linkedFields:a,name:s,id:c}=t,l=A(x=>x.dataSources),f=_(),[S,C]=O.useState(!1),v=()=>{const x=new Ke;x.dataSource=s,x.create();const k=[...JSON.parse(JSON.stringify(a)),{...x}],u=JSON.parse(JSON.stringify(l)),m=u==null?void 0:u.map(n=>n.id===c?{...n,linkedFields:k}:n);localStorage.setItem("dataSources",JSON.stringify(m)),f(z(m))},y=()=>{C(()=>!0),setTimeout(()=>{C(()=>!1)},800)};return(a==null?void 0:a.length)>0?h(P,{children:[e(q,{title:"Linked Fields",isEdit:!0,isAdd:!0,onClickAdd:v,isEditing:S}),e(V,{children:a==null?void 0:a.map((x,N)=>e(We,{...x,dataSourceId:c,locked:!1,fieldEditing:y},N))})]}):null};function Ye(t){const{value:a,label:s,onChange:c,placeholder:l}=t;return h(H,{children:[e(U,{children:s}),e(Oe,{className:"ds-input",onChange:c,placeholder:l,value:w.sanitize(a)})]})}function Ze(t){const{auth:a,id:s}=t,c=_(),l=A(n=>n.dataSources),[f,S]=O.useState([]),[C,v]=O.useState(!1),y=O.useMemo(()=>{var n;return(n=Object.entries(a))==null?void 0:n.map(([r,i])=>({name:r,...i})).filter(r=>r.name!=="fields")},[a]),x=O.useMemo(()=>{var n;return(n=Object.entries(a))==null?void 0:n.map(([r,i])=>({name:r,...i})).find(r=>r.name==="fields")},[a]),N=(n,r)=>{const i=JSON.parse(JSON.stringify(a));i[r].value=n;const g=JSON.parse(JSON.stringify(l)).map(o=>o.id===s?{...o,auth:{...i}}:o);return localStorage.setItem("dataSources",JSON.stringify(g)),c(z(g)),g};O.useEffect(()=>{var r,i;const n=(i=(r=y.filter(d=>d.form_type==="switch"&&!!(d!=null&&d.value)))==null?void 0:r.filter(d=>!!d.withFields))==null?void 0:i.map(d=>d.name);S(n)},[y,S]);const k=(n,r)=>{v(()=>!0);const i=n.target.value;N(i,r),setTimeout(()=>{v(()=>!1)},800)},u=(n,r)=>{v(()=>!0);const i=n.target.checked;N(i,r),setTimeout(()=>{v(()=>!1)},800)},m=(n,r,i)=>{var b;v(()=>!0);const d=n.target.value,g=JSON.parse(JSON.stringify(a)),o={...g,fields:{...g.fields,[i]:(b=g==null?void 0:g.fields[i])==null?void 0:b.map(D=>D.name===r?(D.value=d,{...D}):D)}},p=JSON.parse(JSON.stringify([...l])),L=p==null?void 0:p.map(D=>(D.id===s&&(D.auth=o),D));localStorage.setItem("dataSources",JSON.stringify(L)),c(z(L)),setTimeout(()=>{v(()=>!1)},600)};return h(P,{children:[e(q,{title:"HTTP Auth Fields",isEditing:C,isEdit:!1,isAdd:!1}),h(V,{children:[y&&y.map((n,r)=>n.form_type==="select"?e(ne,{value:w.sanitize(n.value),name:w.sanitize(n.name),onChange:i=>k(i,n.name),locked:!1,opts:n.options,label:n.label},r):n.form_type==="switch"?e(se,{label:n.label,value:n.value,onChange:i=>u(i,n.name)},r):null),e(E,{children:f&&f.map((n,r)=>{var i;return e(E,{children:x[n]&&((i=x[n])==null?void 0:i.map((d,g)=>d.form_type==="input"||d.form_type==="password"?e(F,{onChange:o=>m(o,d.name,n),type:d.form_type,value:w.sanitize(d.value),label:d.label,placeholder:d.placeholder},g):d.form_type==="textarea"?e(Ye,{onChange:o=>m(o,d.name,n),value:w.sanitize(d.value),label:d.label,placeholder:d.placeholder},g):null))},r)})})]})]})}const et=pe("div",{target:"emiacor0"})("position:absolute;left:0;top:0;background:",({theme:t})=>t.background,";display:flex;flex-direction:culumn;justify-content:center;color:",({theme:t})=>t.contrast,";flex:1;height:100%;width:100%;.body-cont{max-width:1440px;padding:10px;margin:10px;border-radius:3px;flex:1;background:",({theme:t})=>t.shadow,";overflow-y:auto;overflow-x:hidden;}.ds-header{padding:10px;padding-bottom:20px;font-size:24px;flex:1;display:flex;width:100%;justify-content:space-between;align-items:center;padding-left:0px;.logo{margin-right:10px;}}.ds-cont{margin-bottom:10px;border:1px solid ",({theme:t})=>t.accentNeutral,";border-radius:3px;overflow-y:auto;}.ds-item{padding:10px;border-radius:3px 3px 0px 0px;padding-bottom:14px;display:flex;.logo{padding:10px;padding-right:20px;padding-left:0px;}.ds-text{display:flex;flex-direction:column;flex:1;}.ds-type{font-size:18px;padding:10px;padding-left:0px;color:",({theme:t})=>t.contrast,";}small{font-size:12px;}.setting-icon{justify-self:flex-end;cursor:pointer;}.ds-settings{background:",({theme:t})=>t.background,";}}");function tt(){const t=A(({dataSources:a})=>a);return(t==null?void 0:t.length)>0?e("div",{style:{margin:"10px"},children:t.map((a,s)=>{const{icon:c,id:l,name:f,type:S,url:C}=a;return e("div",{className:"ds-cont",children:e(me,{to:l,children:h("div",{className:"ds-item",children:[e(ee,{icon:c}),h("div",{className:"ds-text",children:[e("div",{className:"ds-type",children:f}),h("span",{children:[h("small",{children:[S," | "," "]}),e("small",{style:{userSelect:"all"},children:C})]})]})]})})},s)})}):e("div",{children:e("h1",{children:"No Data Sources Found."})})}const at=t=>{const{headers:a,id:s,linkedFields:c,name:l,url:f,cors:S}=t,C=_(),v=A(({dataSources:r})=>r),[y,x]=O.useState({url:!1,protocol:!1}),N=(r,i)=>{let d=i;r==="url"&&(d=i.replace(/\/$/,""));const g=JSON.parse(JSON.stringify(v));return g.forEach(o=>{o.id===s&&(o[r]=d)}),g},[k,u]=O.useState(!1),m=r=>{try{const i=window.location.protocol,d=new URL(r).protocol;return{value:i===d,error:""}}catch{return{value:!1,error:"url"}}},n=(r,i)=>{u(()=>!0);const d=r.target.value;if(i==="url"){const o=m(d);if((o==null?void 0:o.error)==="url"&&x(p=>({...p,url:!0})),!(o!=null&&o.value)&&(o==null?void 0:o.error)===""&&x(p=>({...p,protocol:!0})),(o==null?void 0:o.error)===""&&(o!=null&&o.value)){x(L=>({...L,protocol:!1,url:!1}));const p=N(i,d);localStorage.setItem("dataSources",JSON.stringify(p)),C(z(p)),setTimeout(()=>{u(()=>!1)},800)}}const g=N(i,d);localStorage.setItem("dataSources",JSON.stringify(g)),C(z(g)),setTimeout(()=>{u(()=>!1)},800)};return h(De,{children:[e(q,{isEditing:k,isEdit:!0,isAdd:!1,title:"DataSource Settings",fieldErrors:y}),e(V,{children:h(E,{children:[e(F,{value:w.sanitize(l),label:"Name",onChange:r=>n(r,"name")}),e(F,{value:w.sanitize(f),label:"URL",error:y.url||y.protocol,onChange:r=>n(r,"url")})]})}),e(Ze,{...t}),e(Qe,{cors:S,headers:a,id:s}),e(Xe,{...t,linkedFields:c})]})},nt=T({name:"9rq8lq",styles:"display:flex;align-items:center;justify-content:space-between;margin-right:20px"});function st(t,a,s){let c={},l=s&&s!==""&&a&&a!=="",f=l?`${btoa(a)}:${btoa(s)}`:"",S=JSON.parse(JSON.stringify(t));return l&&f&&(c.auth=f),c.url=S,JSON.stringify(c)}function it(t){const{url:a,auth:{basicAuth:s,fields:{basicAuth:[c,l]}}}=t,[f,S]=ve(["qryn-dev-cookie","qryn-settings"]),C=_(),v=A(k=>k.dataSources),y=()=>{const k=[...v],u=JSON.parse(JSON.stringify(k)),m=u==null?void 0:u.map(n=>({...n,url:w.sanitize(a),auth:{...n.auth,basicAuth:{...n.auth.basicAuth,value:s.value},fields:{...n.auth.fields,basicAuth:[...n.auth.fields.basicAuth].map(r=>r.name==="user"?{...r,value:w.sanitize(c.value)}:r.name==="password"?{...r,value:w.sanitize(l.value)}:r)}}}));localStorage.setItem("dataSources",JSON.stringify(m)),C(z(m)),C(fe({type:"success",message:"Set same URL and Basic Auth for All Data Sources"}))};function x(){const k=new Date;new Date().setDate(k.getDate()+1);try{S("qryn-settings",st(a,c.value,l.value),{path:""})}catch(m){console.log(m)}}function N(){const{headers:k,id:u,name:m,linkedFields:n}=t,r=k==null?void 0:k.map(({header:o,value:p})=>({[o]:p})),d=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify({id:u,name:m,headers:r,linkedFields:n}))}`,g=document.createElement("a");g.href=d,g.download=`${m}_${u}.json`,g.click()}return h("div",{className:"ds-cont",children:[h("div",{className:J(nt),children:[e(rt,{...t}),h("div",{style:{display:"flex",alignItems:"center"},children:[e(j,{title:"Download Datasource settings as JSON",value:w.sanitize("Download JSON"),onClick:N,primary:!0}),e(j,{title:"Set Cookie with name: qryn-settings",value:w.sanitize("Save Cookie"),onClick:x,primary:!0}),e(j,{title:"Use same URL and Basic Auth for all Data Sources",value:w.sanitize("Use For All"),onClick:y,primary:!0})]})]}),e("div",{className:"ds-settings",children:e(at,{...t})})]})}const rt=t=>{const{icon:a,name:s,type:c,url:l}=t;return h("div",{className:"ds-item",children:[e(ee,{icon:a}),h("div",{className:"ds-text",children:[e("div",{className:"ds-type",children:s}),h("small",{children:[w.sanitize(c)," | ",w.sanitize(l)]})]})]})};function lt(){let{id:t}=Se();const a=$(),s=A(l=>l.dataSources),c=O.useMemo(()=>!s||s.length===0?{}:s.find(l=>l.id===t)||{},[t,s]);return e(ae,{theme:a,children:e(et,{children:h("div",{className:"body-cont",children:[e(Ge,{title:"DataSource Settings",datasource:c}),e("div",{className:"datasource-body",children:e(it,{...c})})]})})})}const ot=t=>T("display:flex;flex-direction:column;flex:1;flex-wrap:wrap;width:400px;border:1px solid ",t.accentNeutral,";padding:5px;border-radius:3px;margin-left:10px;",""),ct=T({name:"1reekiy",styles:"display:flex;padding:4px 12px;font-size:14px;border-radius:4px;white-space:nowrap;align-items:center;justify-content:space-between"}),dt=T({name:"t10jb8",styles:"margin:5px"}),ut=T({name:"1wnuhlc",styles:"margin-left:20px;display:flex;align-items:center;span{font-size:12px;}"}),ht=T({name:"17moij0",styles:"align-items:center;width:100%;display:flex;margin-top:10px;justify-content:space-between;flex:1"}),pt=t=>{const[a,s]=O.useState(""),[c,l]=O.useState(""),[f,S]=O.useState(""),[C,v]=O.useState(!1),[y,x]=O.useState(!1),N=A(p=>p.dataSources),k=_(),u="Save",m=$(),n=p=>{var D;const b=(((D=p==null?void 0:p.target)==null?void 0:D.value)||"").replace(/\/$/,"");s(()=>b)},r=p=>{l(()=>p.target.value)},i=p=>{S(()=>p.target.value)},d=p=>{v(()=>p.target.checked)},g=p=>{x(()=>p.target.checked)},o=p=>{const L=JSON.parse(JSON.stringify(N)),b=L==null?void 0:L.map(D=>({...D,url:a,auth:{...D.auth,basicAuth:{...D.auth.basicAuth,value:y},fields:{...D.auth.fields,basicAuth:[...D.auth.fields.basicAuth].map(R=>R.name==="user"?{...R,value:c}:R.name==="password"?{...R,value:f}:R)}}}));localStorage.setItem("dataSources",JSON.stringify(b)),k(z(b))};return h("div",{className:J(ot(m)),children:[h("div",{className:J(ct),children:["Use one setting for all Data Sources",e(M,{checked:C,size:"small",onChange:d})]}),C&&h("div",{className:J(dt),children:[e(F,{value:w.sanitize(a),label:"url",onChange:n,placeholder:"http://qryn.dev"}),y&&h(P,{children:[e(F,{value:w.sanitize(c),label:"user",onChange:r,placeholder:"default"}),e(F,{value:w.sanitize(f),label:"password",onChange:i,type:"password",placeholder:""})]}),h("div",{className:J(ht),children:[h("div",{className:J(ut),children:[e("span",{children:"Use Basic Auth"})," ",e(M,{checked:y,size:"small",onChange:g})," "]}),e(j,{value:w.sanitize(u),onClick:o,editing:!1,primary:!0})]})]})]})};function Nt(t){const a=t.replace(/#/,""),s=decodeURIComponent(a),c=new URLSearchParams(s);for(let[l,f]of c)(l==="left"||l==="right")&&JSON.parse(f)}function bt(){const t=ye.useMediaQuery({query:"(prefers-color-scheme: dark)"}),a=_(),s=$(),c=A(l=>l.autoTheme);return O.useEffect(()=>{if(c){const l=t?"dark":"light";a(ze(l)),localStorage.setItem("theme",JSON.stringify({theme:l,auto:c}))}},[t,c,a]),h(ae,{theme:s,children:[e(Le,{children:h("div",{className:"cont",children:[e(tt,{}),e("div",{style:{display:"flex",flex:1},children:e("div",{style:{height:"40px"},children:e(pt,{})})})]})}),e(Ce,{children:e(xe,{path:":id",element:e(lt,{})})})]})}export{bt as default,Nt as getURlParams};
