(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[12],{262:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},263:function(e,t,n){"use strict";t.a=function(e,t){}},269:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},285:function(e,t,n){"use strict";var r=n(5),a=Object(r.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=a},286:function(e,t,n){"use strict";var r=n(12),a=n(54),i=n(228),c=n(71),o=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,s);return Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(o.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},288:function(e,t,n){"use strict";var r=n(14),a=n(0),i=n(553),c=n(537),o=n(1),s=Object(a.forwardRef)((function(e,t){var n,a,s,l,d=e.children,u=e.type,j=e.direction,b=e.offset,h=e.scale;switch(j){case"up":case"left":s=b,l=0;break;default:s=0,l=b}var p=Object(i.a)(s,l),x=Object(r.a)(p,2),f=x[0],m=x[1],O=Object(i.a)(s,l),v=Object(r.a)(O,2),g=v[0],w=v[1];switch(u){case"rotate":return Object(o.jsx)(c.a.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:d});case"slide":return"up"===j||"down"===j?Object(o.jsx)(c.a.div,{ref:t,animate:{y:void 0!==g?g:""},onHoverEnd:function(){return w()},onHoverStart:function(){return w()},children:d}):Object(o.jsx)(c.a.div,{ref:t,animate:{x:void 0!==f?f:""},onHoverEnd:function(){return m()},onHoverStart:function(){return m()},children:d});default:return"number"===typeof h&&(h={hover:h,tap:h}),Object(o.jsx)(c.a.div,{ref:t,whileHover:{scale:null===(n=h)||void 0===n?void 0:n.hover},whileTap:{scale:null===(a=h)||void 0===a?void 0:a.tap},children:d})}}));s.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.a=s},551:function(e,t,n){"use strict";n.r(t);var r=n(21),a=n(213),i=n(223),c=n(209),o=n(70),s=n(285),l=n(286),d=n(12),u=n(93),j=n.n(u),b=n(109),h=n(14),p=n(0),x=n(238),f=n(222),m=n(226),O=n(552),v=n(344),g=n(240),w=n(228),y=n(234),k=n(342),P=n(16),C=n(288),S=n(317),H=n.n(S),B=n(318),I=n.n(B),W=n(36),E=n(257),F=n.n(E),z=n(1),D=function(e){var t=Object.assign({},e),n=Object(r.a)(),a=Object(P.f)(),i=Object(p.useState)(!1),c=Object(h.a)(i,2),o=c[0],s=c[1],l=function(){s(!o)},u=function(e){e.preventDefault()},S=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(W.a.backendUri,"/login"),{userName:t,password:n}).then((function(e){console.log(e),localStorage.setItem("token",e.data.token),a("/dashboard")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(k.a,{initialValues:{email:"kierm",password:"8NVu%&y3^t2Pv$#",submit:null},onSubmit:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S(t.email,t.password));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,a=e.handleBlur,i=e.handleChange,c=e.handleSubmit,s=e.isSubmitting,j=e.touched,b=e.values;return Object(z.jsxs)("form",Object(d.a)(Object(d.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(z.jsxs)(x.a,{fullWidth:!0,error:Boolean(j.email&&r.email),sx:Object(d.a)({},n.typography.customInput),children:[Object(z.jsx)(f.a,{htmlFor:"outlined-adornment-email-login",children:"Username"}),Object(z.jsx)(m.a,{id:"outlined-adornment-email-login",type:"text",value:b.email,name:"email",onBlur:a,onChange:i,label:"Username",inputProps:{}})]}),Object(z.jsxs)(x.a,{fullWidth:!0,error:Boolean(j.password&&r.password),sx:Object(d.a)({},n.typography.customInput),children:[Object(z.jsx)(f.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(z.jsx)(m.a,{id:"outlined-adornment-password-login",type:o?"text":"password",value:b.password,name:"password",onBlur:a,onChange:i,endAdornment:Object(z.jsx)(O.a,{position:"end",children:Object(z.jsx)(v.a,{"aria-label":"toggle password visibility",onClick:l,onMouseDown:u,edge:"end",size:"large",children:o?Object(z.jsx)(H.a,{}):Object(z.jsx)(I.a,{})})}),label:"Password",inputProps:{}}),j.password&&r.password&&Object(z.jsx)(g.a,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),r.submit&&Object(z.jsx)(w.a,{sx:{mt:3},children:Object(z.jsx)(g.a,{error:!0,children:r.submit})}),Object(z.jsx)(w.a,{sx:{mt:2},children:Object(z.jsx)(C.a,{children:Object(z.jsx)(y.a,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})})},U=n(81);t.default=function(){var e=Object(r.a)(),t=Object(a.a)(e.breakpoints.down("md"));return Object(z.jsx)(s.a,{children:Object(z.jsx)(i.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:Object(z.jsx)(i.a,{item:!0,xs:12,children:Object(z.jsx)(i.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(z.jsx)(i.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(z.jsx)(l.a,{children:Object(z.jsxs)(i.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(z.jsx)(i.a,{item:!0,sx:{mb:3},children:Object(z.jsx)(U.a,{width:"300"})}),Object(z.jsx)(i.a,{item:!0,xs:12,children:Object(z.jsx)(i.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(z.jsx)(i.a,{item:!0,children:Object(z.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(z.jsx)(o.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(z.jsx)(o.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),Object(z.jsx)(i.a,{item:!0,xs:12,children:Object(z.jsx)(D,{})})]})})})})})})})}}}]);
//# sourceMappingURL=12.2e4887ba.chunk.js.map