(this.webpackJsonpfilter=this.webpackJsonpfilter||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(1),r=n.n(a),i=n(9),s=n.n(i),u=n(8),o=n(11),f=n(20),d=n.n(f),j=n(24),l=(n(37),n(38),Object(o.b)({name:"video",initialState:{hue:0,active:!1},reducers:{changeHue:function(e,t){var n=t.payload;e.hue=n},setActive:function(e,t){var n=t.payload;e.active=n}}})),v=l.actions,b=l.reducer,O=(v.changeHue,v.setActive),p=b,h=n(6),m=n.n(h),x=n(22),w=n(23);n(40);function g(){var e=Object(a.useRef)(null),t=Object(a.useState)(void 0),n=Object(w.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){return function(){var t=Object(x.a)(m.a.mark((function t(){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={audio:!1,video:{facingMode:"environment"}},t.next=3,navigator.mediaDevices.getUserMedia(n);case 3:c=t.sent,i(c),e&&(e.current.srcObject=c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){r&&r.getTracks().forEach((function(e){e.stop()}))}}),[]),Object(c.jsx)("video",{ref:e,className:"stream",playsInline:!0,autoPlay:!0})}var k=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.active})),n=Object(a.useCallback)((function(){e(O(!0))}),[e]);return Object(c.jsxs)(c.Fragment,{children:[!t&&Object(c.jsx)("div",{className:"button",onClick:n,children:"Clicca per attivare la videocamera filtrata"}),t&&Object(c.jsxs)("div",{className:"containerStream",children:[Object(c.jsx)(g,{}),Object(c.jsx)("div",{className:"filter"})]})]})},y=p,S=n(25),N=m.a.mark(C),A=m.a.mark(E);function C(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),N)}function E(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)("START",C);case 2:case"end":return e.stop()}}),A)}var M=E,T=Object(j.a)(),H=Object(o.a)({reducer:y,middleware:function(e){return e().concat(T).concat(d.a)}});T.run(M),s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u.a,{store:H,children:Object(c.jsx)(k,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.01c08d46.chunk.js.map