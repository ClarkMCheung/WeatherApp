(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(4),r=n.n(s),i=(n(32),n(11)),o=n.n(i),u=n(17),l=n(9),j=(n(34),n(35),n(36),n(59)),d=n(12),h=n.n(d),p=n(3),b=function(e){var t=e.weatherData,n=9*t.main.temp/5+32;return Object(p.jsx)(j.a,{children:Object(p.jsx)(j.a.Content,{children:Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)("p",{className:"header",children:t.name}),Object(p.jsxs)("div",{className:"flex",children:[Object(p.jsxs)("p",{className:"day",children:["Day: ",h()().format("dddd")]}),Object(p.jsx)("p",{className:"day",children:h()().format("LL")})]}),Object(p.jsxs)("div",{className:"flex",children:[Object(p.jsxs)("p",{className:"temp",children:["Temprature: ",n," \xb0F"]}),Object(p.jsxs)("p",{className:"temp",children:["Humidity: ",t.main.humidity," %"]})]})]})})})};var m=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)([]),h=Object(l.a)(d,2),m=h[0],f=h[1],O=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){a(e.coords.latitude),j(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(n,"&lon=").concat(i,"&units=metric&APPID=").concat("29cc188e148a04ea767bbba58a9110e4")).then((function(e){return e.json()})).then((function(e){f(e),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O(),console.log("Lat",n),console.log("Long",i)}),[n,i]),Object(p.jsx)("div",{className:"App",children:m.main&&Object(p.jsx)(b,{weatherData:m})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.5e33376e.chunk.js.map