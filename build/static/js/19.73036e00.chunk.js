(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[19],{253:function(e,t,n){"use strict";var r=n(21),a=n(547),o=n(130),i=n(267),c=n(12),l=n(54),s=n(225),u=n(1),b=["color","outline","size","sx"],p=function(e){var t=e.color,n=e.outline,a=e.size,o=e.sx,i=Object(l.a)(e,b),p=Object(r.a)(),d=t&&!n&&{color:p.palette.background.paper,bgcolor:"".concat(t,".main")},h=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:p.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},j={};switch(a){case"badge":j={width:p.spacing(3.5),height:p.spacing(3.5)};break;case"xs":j={width:p.spacing(4.25),height:p.spacing(4.25)};break;case"sm":j={width:p.spacing(5),height:p.spacing(5)};break;case"lg":j={width:p.spacing(9),height:p.spacing(9)};break;case"xl":j={width:p.spacing(10.25),height:p.spacing(10.25)};break;case"md":j={width:p.spacing(7.5),height:p.spacing(7.5)};break;default:j={}}return Object(u.jsx)(s.a,Object(c.a)({sx:Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},d),h),j),o)},i))};t.a=function(e){var t=e.title,n=e.link,c=e.icon,l=Object(r.a)();return Object(u.jsx)(a.a,{title:t||"Reference",placement:"left",children:Object(u.jsxs)(o.a,{disableRipple:!0,children:[!c&&Object(u.jsx)(p,{component:i.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(u.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(u.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:l.palette.primary[800]}),Object(u.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:l.palette.primary.main}),Object(u.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:l.palette.primary[800]}),Object(u.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:l.palette.primary.main})]}),Object(u.jsx)("defs",{children:Object(u.jsx)("clipPath",{id:"clip0",children:Object(u.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&Object(u.jsx)(p,{component:i.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:c})]})})}},267:function(e,t,n){"use strict";var r=n(14),a=n(3),o=n(4),i=n(2),c=n(0),l=(n(10),n(6)),s=n(90),u=n(11),b=n(68),p=n(7),d=n(5),h=n(8),j=n(75),m=n(15),O=n(70),g=n(69),f=n(91);function x(e){return Object(g.a)("MuiLink",e)}var v=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(d.a)(O.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(p.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(u.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(b.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),V=c.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiLink"}),a=n.className,u=n.color,b=void 0===u?"primary":u,d=n.component,O=void 0===d?"a":d,g=n.onBlur,f=n.onFocus,v=n.TypographyClasses,k=n.underline,V=void 0===k?"always":k,M=n.variant,C=void 0===M?"inherit":M,R=Object(o.a)(n,w),S=Object(j.a)(),z=S.isFocusVisibleRef,D=S.onBlur,B=S.onFocus,F=S.ref,Z=c.useState(!1),A=Object(r.a)(Z,2),N=A[0],I=A[1],P=Object(m.a)(t,F),T=Object(i.a)({},n,{color:b,component:O,focusVisible:N,underline:V,variant:C}),H=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(p.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(s.a)(o,x,t)}(T);return Object(y.jsx)(L,Object(i.a)({className:Object(l.a)(H.root,a),classes:v,color:b,component:O,onBlur:function(e){D(e),!1===z.current&&I(!1),g&&g(e)},onFocus:function(e){B(e),!0===z.current&&I(!0),f&&f(e)},ref:P,ownerState:T,variant:C},R))}));t.a=V},525:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(169),o=n(71),i=n(253),c=n(1),l=Object(r.a)("iframe")((function(e){return{height:"calc(100vh - 210px)",border:"1px solid",borderColor:e.theme.palette.primary.light}}));t.default=function(){return Object(c.jsx)(o.a,{title:"Material Icons",secondary:Object(c.jsx)(i.a,{link:"https://next.material-ui.com/components/material-icons/"}),children:Object(c.jsx)(a.a,{sx:{overflow:"hidden"},children:Object(c.jsx)(l,{title:"Material Icon",width:"100%",src:"https://material-ui.com/components/material-icons/"})})})}}}]);
//# sourceMappingURL=19.73036e00.chunk.js.map