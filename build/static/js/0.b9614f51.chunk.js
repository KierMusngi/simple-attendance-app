(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[0],{547:function(e,t,o){"use strict";var r=o(14),n=o(3),a=o(4),i=o(2),c=o(0),p=(o(10),o(6)),u=o(90),l=o(79);function s(e,t,o){return Object(l.a)(e)?t:Object(i.a)({},t,{ownerState:Object(i.a)({},t.ownerState,o)})}var m=o(68),b=o(5),d=o(21),f=o(8),h=o(7),v=o(203),O=o(218),g=o(45),j=o(15),T=o(110),w=o(75),y=o(77),x=o(69),R=o(91);function M(e){return Object(x.a)("MuiTooltip",e)}var P=Object(R.a)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),S=o(1),C=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var L=Object(b.a)(O.a,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var o=e.ownerState;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((function(e){var t,o=e.theme,r=e.ownerState,a=e.open;return Object(i.a)({zIndex:o.zIndex.tooltip,pointerEvents:"none"},!r.disableInteractive&&{pointerEvents:"auto"},!a&&{pointerEvents:"none"},r.arrow&&(t={},Object(n.a)(t,'&[data-popper-placement*="bottom"] .'.concat(P.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),Object(n.a)(t,'&[data-popper-placement*="top"] .'.concat(P.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),Object(n.a)(t,'&[data-popper-placement*="right"] .'.concat(P.arrow),Object(i.a)({},r.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),Object(n.a)(t,'&[data-popper-placement*="left"] .'.concat(P.arrow),Object(i.a)({},r.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),k=Object(b.a)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var o=e.ownerState;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat(Object(h.a)(o.placement.split("-")[0]))]]}})((function(e){var t,o,r=e.theme,a=e.ownerState;return Object(i.a)({backgroundColor:Object(m.a)(r.palette.grey[700],.92),borderRadius:r.shape.borderRadius,color:r.palette.common.white,fontFamily:r.typography.fontFamily,padding:"4px 8px",fontSize:r.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:r.typography.fontWeightMedium},a.arrow&&{position:"relative",margin:0},a.touch&&{padding:"8px 16px",fontSize:r.typography.pxToRem(14),lineHeight:"".concat((o=16/14,Math.round(1e5*o)/1e5),"em"),fontWeight:r.typography.fontWeightRegular},(t={},Object(n.a)(t,".".concat(P.popper,'[data-popper-placement*="left"] &'),Object(i.a)({transformOrigin:"right center"},a.isRtl?Object(i.a)({marginLeft:"14px"},a.touch&&{marginLeft:"24px"}):Object(i.a)({marginRight:"14px"},a.touch&&{marginRight:"24px"}))),Object(n.a)(t,".".concat(P.popper,'[data-popper-placement*="right"] &'),Object(i.a)({transformOrigin:"left center"},a.isRtl?Object(i.a)({marginRight:"14px"},a.touch&&{marginRight:"24px"}):Object(i.a)({marginLeft:"14px"},a.touch&&{marginLeft:"24px"}))),Object(n.a)(t,".".concat(P.popper,'[data-popper-placement*="top"] &'),Object(i.a)({transformOrigin:"center bottom",marginBottom:"14px"},a.touch&&{marginBottom:"24px"})),Object(n.a)(t,".".concat(P.popper,'[data-popper-placement*="bottom"] &'),Object(i.a)({transformOrigin:"center top",marginTop:"14px"},a.touch&&{marginTop:"24px"})),t))})),E=Object(b.a)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(m.a)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),I=!1,N=null;function B(e,t){return function(o){t&&t(o),e(o)}}var D=c.forwardRef((function(e,t){var o,n,l,m,b,x=Object(f.a)({props:e,name:"MuiTooltip"}),R=x.arrow,P=void 0!==R&&R,D=x.children,F=x.components,W=void 0===F?{}:F,A=x.componentsProps,z=void 0===A?{}:A,U=x.describeChild,H=void 0!==U&&U,J=x.disableFocusListener,V=void 0!==J&&J,X=x.disableHoverListener,Y=void 0!==X&&X,q=x.disableInteractive,G=void 0!==q&&q,K=x.disableTouchListener,Q=void 0!==K&&K,Z=x.enterDelay,$=void 0===Z?100:Z,_=x.enterNextDelay,ee=void 0===_?0:_,te=x.enterTouchDelay,oe=void 0===te?700:te,re=x.followCursor,ne=void 0!==re&&re,ae=x.id,ie=x.leaveDelay,ce=void 0===ie?0:ie,pe=x.leaveTouchDelay,ue=void 0===pe?1500:pe,le=x.onClose,se=x.onOpen,me=x.open,be=x.placement,de=void 0===be?"bottom":be,fe=x.PopperComponent,he=x.PopperProps,ve=void 0===he?{}:he,Oe=x.title,ge=x.TransitionComponent,je=void 0===ge?v.a:ge,Te=x.TransitionProps,we=Object(a.a)(x,C),ye=Object(d.a)(),xe="rtl"===ye.direction,Re=c.useState(),Me=Object(r.a)(Re,2),Pe=Me[0],Se=Me[1],Ce=c.useState(null),Le=Object(r.a)(Ce,2),ke=Le[0],Ee=Le[1],Ie=c.useRef(!1),Ne=G||ne,Be=c.useRef(),De=c.useRef(),Fe=c.useRef(),We=c.useRef(),Ae=Object(y.a)({controlled:me,default:!1,name:"Tooltip",state:"open"}),ze=Object(r.a)(Ae,2),Ue=ze[0],He=ze[1],Je=Ue,Ve=Object(T.a)(ae),Xe=c.useRef(),Ye=c.useCallback((function(){void 0!==Xe.current&&(document.body.style.WebkitUserSelect=Xe.current,Xe.current=void 0),clearTimeout(We.current)}),[]);c.useEffect((function(){return function(){clearTimeout(Be.current),clearTimeout(De.current),clearTimeout(Fe.current),Ye()}}),[Ye]);var qe=function(e){clearTimeout(N),I=!0,He(!0),se&&!Je&&se(e)},Ge=Object(g.a)((function(e){clearTimeout(N),N=setTimeout((function(){I=!1}),800+ce),He(!1),le&&Je&&le(e),clearTimeout(Be.current),Be.current=setTimeout((function(){Ie.current=!1}),ye.transitions.duration.shortest)})),Ke=function(e){Ie.current&&"touchstart"!==e.type||(Pe&&Pe.removeAttribute("title"),clearTimeout(De.current),clearTimeout(Fe.current),$||I&&ee?De.current=setTimeout((function(){qe(e)}),I?ee:$):qe(e))},Qe=function(e){clearTimeout(De.current),clearTimeout(Fe.current),Fe.current=setTimeout((function(){Ge(e)}),ce)},Ze=Object(w.a)(),$e=Ze.isFocusVisibleRef,_e=Ze.onBlur,et=Ze.onFocus,tt=Ze.ref,ot=c.useState(!1),rt=Object(r.a)(ot,2)[1],nt=function(e){_e(e),!1===$e.current&&(rt(!1),Qe(e))},at=function(e){Pe||Se(e.currentTarget),et(e),!0===$e.current&&(rt(!0),Ke(e))},it=function(e){Ie.current=!0;var t=D.props;t.onTouchStart&&t.onTouchStart(e)},ct=Ke,pt=Qe;c.useEffect((function(){if(Je)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ge(e)}}),[Ge,Je]);var ut=Object(j.a)(Se,t),lt=Object(j.a)(tt,ut),st=Object(j.a)(D.ref,lt);""===Oe&&(Je=!1);var mt=c.useRef({x:0,y:0}),bt=c.useRef(),dt={},ft="string"===typeof Oe;H?(dt.title=Je||!ft||Y?null:Oe,dt["aria-describedby"]=Je?Ve:null):(dt["aria-label"]=ft?Oe:null,dt["aria-labelledby"]=Je&&!ft?Ve:null);var ht=Object(i.a)({},dt,we,D.props,{className:Object(p.a)(we.className,D.props.className),onTouchStart:it,ref:st},ne?{onMouseMove:function(e){var t=D.props;t.onMouseMove&&t.onMouseMove(e),mt.current={x:e.clientX,y:e.clientY},bt.current&&bt.current.update()}}:{});var vt={};Q||(ht.onTouchStart=function(e){it(e),clearTimeout(Fe.current),clearTimeout(Be.current),Ye(),Xe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",We.current=setTimeout((function(){document.body.style.WebkitUserSelect=Xe.current,Ke(e)}),oe)},ht.onTouchEnd=function(e){D.props.onTouchEnd&&D.props.onTouchEnd(e),Ye(),clearTimeout(Fe.current),Fe.current=setTimeout((function(){Ge(e)}),ue)}),Y||(ht.onMouseOver=B(ct,ht.onMouseOver),ht.onMouseLeave=B(pt,ht.onMouseLeave),Ne||(vt.onMouseOver=ct,vt.onMouseLeave=pt)),V||(ht.onFocus=B(at,ht.onFocus),ht.onBlur=B(nt,ht.onBlur),Ne||(vt.onFocus=at,vt.onBlur=nt));var Ot=c.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(ke),options:{element:ke,padding:4}}];return null!=(e=ve.popperOptions)&&e.modifiers&&(t=t.concat(ve.popperOptions.modifiers)),Object(i.a)({},ve.popperOptions,{modifiers:t})}),[ke,ve]),gt=Object(i.a)({},x,{isRtl:xe,arrow:P,disableInteractive:Ne,placement:de,PopperComponentProp:fe,touch:Ie.current}),jt=function(e){var t=e.classes,o=e.disableInteractive,r=e.arrow,n=e.touch,a=e.placement,i={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch","tooltipPlacement".concat(Object(h.a)(a.split("-")[0]))],arrow:["arrow"]};return Object(u.a)(i,M,t)}(gt),Tt=null!=(o=W.Popper)?o:L,wt=null!=(n=null!=je?je:W.Transition)?n:v.a,yt=null!=(l=W.Tooltip)?l:k,xt=null!=(m=W.Arrow)?m:E,Rt=s(Tt,Object(i.a)({},ve,z.popper),gt),Mt=s(wt,Object(i.a)({},Te,z.transition),gt),Pt=s(yt,Object(i.a)({},z.tooltip),gt),St=s(xt,Object(i.a)({},z.arrow),gt);return Object(S.jsxs)(c.Fragment,{children:[c.cloneElement(D,ht),Object(S.jsx)(Tt,Object(i.a)({as:null!=fe?fe:O.a,placement:de,anchorEl:ne?{getBoundingClientRect:function(){return{top:mt.current.y,left:mt.current.x,right:mt.current.x,bottom:mt.current.y,width:0,height:0}}}:Pe,popperRef:bt,open:!!Pe&&Je,id:Ve,transition:!0},vt,Rt,{className:Object(p.a)(jt.popper,null==(b=z.popper)?void 0:b.className),popperOptions:Ot,children:function(e){var t,o,r=e.TransitionProps;return Object(S.jsx)(wt,Object(i.a)({timeout:ye.transitions.duration.shorter},r,Mt,{children:Object(S.jsxs)(yt,Object(i.a)({},Pt,{className:Object(p.a)(jt.tooltip,null==(t=z.tooltip)?void 0:t.className),children:[Oe,P?Object(S.jsx)(xt,Object(i.a)({},St,{className:Object(p.a)(jt.arrow,null==(o=z.arrow)?void 0:o.className),ref:Ee})):null]}))}))}}))]})}));t.a=D}}]);
//# sourceMappingURL=0.b9614f51.chunk.js.map