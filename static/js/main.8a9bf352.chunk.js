(this.webpackJsonprunwea=this.webpackJsonprunwea||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/01d.1430ef66.png"},function(e,t,a){e.exports=a.p+"static/media/01n.060b9232.png"},function(e,t,a){e.exports=a.p+"static/media/02d.ce60e2fb.png"},function(e,t,a){e.exports=a.p+"static/media/02n.6dff63eb.png"},function(e,t,a){e.exports=a.p+"static/media/03d.92c83b3d.png"},function(e,t,a){e.exports=a.p+"static/media/03n.b7439057.png"},function(e,t,a){e.exports=a.p+"static/media/04d.3cff3c52.png"},function(e,t,a){e.exports=a.p+"static/media/04n.767d2cd8.png"},function(e,t,a){e.exports=a.p+"static/media/09d.38ca4f11.png"},function(e,t,a){e.exports=a.p+"static/media/09n.afb2b61f.png"},function(e,t,a){e.exports=a.p+"static/media/10d.e449d904.png"},function(e,t,a){e.exports=a.p+"static/media/10n.842cb44a.png"},function(e,t,a){e.exports=a.p+"static/media/11d.715ecfbd.png"},function(e,t,a){e.exports=a.p+"static/media/11n.0f98124b.png"},function(e,t,a){e.exports=a.p+"static/media/13d.c5cec41a.png"},function(e,t,a){e.exports=a.p+"static/media/13n.589021d0.png"},function(e,t,a){e.exports=a.p+"static/media/50d.df5c1b1d.png"},function(e,t,a){e.exports=a.p+"static/media/50n.f030f52e.png"},,,,function(e,t,a){e.exports=a.p+"static/media/logo.9f140372.png"},function(e,t,a){e.exports=a(78)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/STOP.2eeadbb8.png"},function(e,t,a){e.exports=a.p+"static/media/MOREWARNING.e27a15e6.png"},function(e,t,a){e.exports=a.p+"static/media/WARNING.c07a62a6.png"},function(e,t,a){e.exports=a.p+"static/media/GO.e1c0255f.png"},function(e,t,a){e.exports=a.p+"static/media/GO FAST.448f5b49.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),c=a.n(i),o=(a(40),a(1)),l=a(32),u=(a(41),a(42),r.a.createContext({Location:"",CurrentTemperature:"",HiToday:"",LoToday:"",Humidity:"",Conditions:"",Wind:"",lat:"",lon:"",uv:"",IconCode:"",Main:""})),d=(a(43),a(3)),s=a.n(d),m=function(e){return s.a.get("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")},p=function(e,t){return s.a.get("https://api.weatherbit.io/v2.0/current?&lat="+e+"&lon="+t+"&key=65b5358bddc244cd9a27693298887a93")},h=function(e,t){return s.a.get("https://api.openweathermap.org/data/2.5/onecall?lat="+e+"&lon="+t+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")},f=function(e,t){return s.a.get("https://api.weatherbit.io/v2.0/alerts?lat="+e+"&lon="+t+"&key=87da17ff489a4395a867802c0742eaa5")},E=function(e,t){return s.a.get("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+e+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")},g=function(){var e=Object(n.useContext)(u),t=e.lat,a=e.lon,i=Object(n.useState)([]),c=Object(o.a)(i,2),l=c[0],d=c[1],s=Object(n.useState)(),m=Object(o.a)(s,2),p=m[0],h=m[1];Object(n.useEffect)((function(){E()}),[t,a]);var E=function(e){f(t,a).then((function(e){try{d("Top Alert: "+e.data.alerts[0].title),h("Total Alerts: "+e.data.alerts.length+" | "),console.log(e.data)}catch(t){d(" "),h(" ")}}))};return r.a.createElement("div",{className:"condition1"},r.a.createElement("p",null,p," ",l))};a(61);var y=function(){var e=Object(n.useContext)(u).IconCode;return"01d"===e?r.a.createElement("img",{src:a(13),alt:"Runwea Weather Icon"}):"01n"===e?r.a.createElement("img",{src:a(14),alt:"Runwea Weather Icon"}):"02d"===e?r.a.createElement("img",{src:a(15),alt:"Runwea Weather Icon"}):"02n"===e?r.a.createElement("img",{src:a(16),alt:"Runwea Weather Icon"}):"03d"===e?r.a.createElement("img",{src:a(17),alt:"Runwea Weather Icon"}):"03n"===e?r.a.createElement("img",{src:a(18),alt:"Runwea Weather Icon"}):"04d"===e?r.a.createElement("img",{src:a(19),alt:"Runwea Weather Icon"}):"04n"===e?r.a.createElement("img",{src:a(20),alt:"Runwea Weather Icon"}):"09d"===e?r.a.createElement("img",{src:a(21),alt:"Runwea Weather Icon"}):"09n"===e?r.a.createElement("img",{src:a(22),alt:"Runwea Weather Icon"}):"10d"===e?r.a.createElement("img",{src:a(23),alt:"Runwea Weather Icon"}):"10n"===e?r.a.createElement("img",{src:a(24),alt:"Runwea Weather Icon"}):"11d"===e?r.a.createElement("img",{src:a(25),alt:"Runwea Weather Icon"}):"11n"===e?r.a.createElement("img",{src:a(26),alt:"Runwea Weather Icon"}):"13d"===e?r.a.createElement("img",{src:a(27),alt:"Runwea Weather Icon"}):"13n"===e?r.a.createElement("img",{src:a(28),alt:"Runwea Weather Icon"}):"50d"===e?r.a.createElement("img",{src:a(29),alt:"Runwea Weather Icon"}):"50n"===e?r.a.createElement("img",{src:a(30),alt:"Runwea Weather Icon"}):null},w=function(){var e=Object(n.useContext)(u),t=e.Location,a=e.CurrentTemperature,i=e.HiToday,c=e.LoToday,o=e.Humidity,l=e.Conditions,d=e.Wind,s=e.uv,m=e.IconCode;return r.a.createElement("div",{className:"currentWeather"},r.a.createElement("div",{className:"currentLocation"},r.a.createElement("h1",null,t),r.a.createElement(g,null)),r.a.createElement("div",{className:"conditions"},r.a.createElement("div",{className:"condition",id:"icon"},r.a.createElement(y,{code:m})),r.a.createElement("div",{className:"condition"},r.a.createElement("h2",null,r.a.createElement("p",{className:"CurrentTemp"},a,"\xb0"),r.a.createElement("p",null,l),r.a.createElement("p",null,"H ",i,"\xb0 / L ",c,"\xb0"))),r.a.createElement("div",{className:"condition"},r.a.createElement("h2",null,r.a.createElement("p",null,"Humidity: ",o,"%"),r.a.createElement("p",null,"Wind: ",d," mph"),r.a.createElement("p",null,"UV Index: ",s)))))},v=r.a.createContext([{},{},{},{},{}]),b=a(33),R=a.n(b),I=(a(64),a(65),function(e){var t=e.icon;return"01d"===t?r.a.createElement("img",{src:a(13),alt:"Runwea Weather Forecast Icon"}):"01n"===t?r.a.createElement("img",{src:a(14),alt:"Runwea Weather Forecast Icon"}):"02d"===t?r.a.createElement("img",{src:a(15),alt:"Runwea Weather Forecast Icon"}):"02n"===t?r.a.createElement("img",{src:a(16),alt:"Runwea Weather Forecast Icon"}):"03d"===t?r.a.createElement("img",{src:a(17),alt:"Runwea Weather Forecast Icon"}):"03n"===t?r.a.createElement("img",{src:a(18),alt:"Runwea Weather Forecast Icon"}):"04d"===t?r.a.createElement("img",{src:a(19),alt:"Runwea Weather Forecast Icon"}):"04n"===t?r.a.createElement("img",{src:a(20),alt:"Runwea Weather Forecast Icon"}):"09d"===t?r.a.createElement("img",{src:a(21),alt:"Runwea Weather Forecast Icon"}):"09n"===t?r.a.createElement("img",{src:a(22),alt:"Runwea Weather Forecast Icon"}):"10d"===t?r.a.createElement("img",{src:a(23),alt:"Runwea Weather Forecast Icon"}):"10n"===t?r.a.createElement("img",{src:a(24),alt:"Runwea Weather Forecast Icon"}):"11d"===t?r.a.createElement("img",{src:a(25),alt:"Runwea Weather Forecast Icon"}):"11n"===t?r.a.createElement("img",{src:a(26),alt:"Runwea Weather Forecast Icon"}):"13d"===t?r.a.createElement("img",{src:a(27),alt:"Runwea Weather Forecast Icon"}):"13n"===t?r.a.createElement("img",{src:a(28),alt:"Runwea Weather Forecast Icon"}):"50d"===t?r.a.createElement("img",{src:a(29),alt:"Runwea Weather Forecast Icon"}):"50n"===t?r.a.createElement("img",{src:a(30),alt:"Runwea Weather Forecast Icon"}):r.a.createElement("p",null,"Icons are unavailable at this time... Try again later")}),N=function(e){var t=e.app;return r.a.createElement("div",{className:"nextDay"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(R.a,{unix:!0,format:"ddd"},t.time)),r.a.createElement(I,{icon:t.icon}),r.a.createElement("strong",null,r.a.createElement("p",{className:"condition"},t.condition)),r.a.createElement("p",null,"Hi ",t.hi,"\xb0 / Lo ",t.lo,"\xb0"),r.a.createElement("p",null,"Humidity: ",t.humidity,"%"),r.a.createElement("p",null,"Wind: ",t.wind," mph")))};a(66);var W=function(){var e=Object(n.useContext)(v);return r.a.createElement("div",{className:"daysAhead"},e.map((function(e,t){return r.a.createElement(N,{app:e})})))},O=function(){var e=Object(n.useState)([{},{},{},{},{}]),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useContext)(u),l=c.lat,d=c.lon;Object(n.useEffect)((function(){s({})}),[l,d]);var s=function(){h(l,d).then((function(e){i([{time:e.data.daily[1].dt,icon:e.data.daily[1].weather[0].icon,hi:Math.round(e.data.daily[1].temp.max),lo:Math.round(e.data.daily[1].temp.min),condition:e.data.daily[1].weather[0].description,wind:Math.round(e.data.daily[1].wind_speed),humidity:e.data.daily[1].humidity},{time:e.data.daily[2].dt,icon:e.data.daily[2].weather[0].icon,hi:Math.round(e.data.daily[2].temp.max),lo:Math.round(e.data.daily[2].temp.min),condition:e.data.daily[2].weather[0].description,wind:Math.round(e.data.daily[2].wind_speed),humidity:e.data.daily[2].humidity},{time:e.data.daily[3].dt,icon:e.data.daily[3].weather[0].icon,hi:Math.round(e.data.daily[3].temp.max),lo:Math.round(e.data.daily[3].temp.min),condition:e.data.daily[3].weather[0].description,wind:Math.round(e.data.daily[3].wind_speed),humidity:e.data.daily[3].humidity},{time:e.data.daily[4].dt,icon:e.data.daily[4].weather[0].icon,hi:Math.round(e.data.daily[4].temp.max),lo:Math.round(e.data.daily[4].temp.min),condition:e.data.daily[4].weather[0].description,wind:Math.round(e.data.daily[4].wind_speed),humidity:e.data.daily[4].humidity},{time:e.data.daily[5].dt,icon:e.data.daily[5].weather[0].icon,hi:Math.round(e.data.daily[5].temp.max),lo:Math.round(e.data.daily[5].temp.min),condition:e.data.daily[5].weather[0].description,wind:Math.round(e.data.daily[5].wind_speed),humidity:e.data.daily[5].humidity}])}))};return r.a.createElement(v.Provider,{value:a},r.a.createElement(W,null))},T=(a(67),a(68),function(e){var t=e.number,n=[e.currenttemp,e.hitemp,e.lotemp,e.humidity,e.uv,e.main,e.wind].map((function(e){return r.a.createElement("p",{key:e},e)}));return t>=11?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#7e0600",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(69),alt:"Stop"}),r.a.createElement("h3",null,"TERRIBLE, DON'T RUN")),r.a.createElement("p",null,n)):t>=9?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#dc4d00",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(70),alt:"Poor"}),r.a.createElement("h3",null,"POOR")),r.a.createElement("p",null,n)):t>=7?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#ffd000",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(71),alt:"Fair"}),r.a.createElement("h3",null,"FAIR")),r.a.createElement("p",null,n)):t>=5?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#30bf0c",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(72),alt:"Good"}),r.a.createElement("h3",null,"GOOD")),r.a.createElement("p",null,n)):t>=1?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#007bb1",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(73),alt:"Perfect"}),r.a.createElement("h3",null,"PERFECT")),r.a.createElement("p",null,n)):0===t?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#7e0600",color:"white"}},r.a.createElement("p",null,"CITY NOT FOUND, ENTER A VALID CITY OR TRY AGAIN LATER")):void 0}),C=(a(74),function(){var e=Object(n.useContext)(u),t=Object(n.useState)(0),a=Object(o.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(""),d=Object(o.a)(l,2),s=d[0],m=d[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),f=h[0],E=h[1],g=Object(n.useState)(""),y=Object(o.a)(g,2),w=y[0],v=y[1],b=Object(n.useState)(""),R=Object(o.a)(b,2),I=R[0],N=R[1],W=Object(n.useState)(""),O=Object(o.a)(W,2),C=O[0],M=O[1];Object(n.useEffect)((function(){S()}),[e]);var S=function(){c(0),e.CurrentTemperature>100?(c((function(e){return e+4})),m("HEAT: Extreme heat. Run Indoors.")):e.CurrentTemperature>=95?(c((function(e){return e+3})),m("HEAT: Consider Running Indoors.")):e.CurrentTemperature>=85?(c((function(e){return e+2})),m("HEAT: Avoid Direct Sunlight if Possible.")):e.CurrentTemperature>=75?(c((function(e){return e+1})),m("HEAT: Wear light clothing. Hydrate!")):e.CurrentTemperature<=25?(c((function(e){return e+3})),m("COLD: Avoid Outdoor Running")):e.CurrentTemperature<=35?(c((function(e){return e+2})),m("COLD: Wear extra heavy layers. Remember to Hydrate!")):e.CurrentTemperature<=50?(c((function(e){return e+1})),m("COLD: Wear extra layers. Hydrate!")):(c((function(e){return e+0})),m("")),e.Humidity>85?(c((function(e){return e+3})),E("HUMIDITY: Expect Extreme Dehydration, Run Indoors If Hot")):e.Humidity>70?(c((function(e){return e+2})),E("HUMIDITY: Expect Fast Dehydration, Hydrate Frequently!")):e.Humidity>40?(c((function(e){return e+1})),E("HUMIDITY: Hydrate!")):(c((function(e){return e+0})),E("")),e.uv>10?(c((function(e){return e+4})),v("UV: Extreme risk of harm. Run indoors to avoid burning in minutes.")):e.uv>8?(c((function(e){return e+3})),v("UV: Very high risk of harm. Take extra precaution with skin and eyes.")):e.uv>=6?(c((function(e){return e+2})),v("UV: Run in Shaded Areas. Reduce time in Sun between 10am to 4pm.")):e.uv>=3?(c((function(e){return e+1})),v("UV:  Wear Sunglasses, apply Sunscreen!")):(c((function(e){return e+0})),v("")),e.Wind>40?(c((function(e){return e+5})),M("WIND: STORM WINDS 39MPH OR MORE")):e.Wind>=27?(c((function(e){return e+3})),M("WIND: Very High Winds Will Impact Run")):e.Wind>=19?(c((function(e){return e+2})),M("WIND: Winds May Impact Run")):e.Wind>=12?(c((function(e){return e+1})),M("WIND: Moderate Breeze, dust and particles in air ")):(c((function(e){return e+0})),M("")),"Thunderstorm"===e.Main?(c((function(e){return e+20})),N("THUNDERSTORM: STAY INDOORS.")):"Tornado"===e.Main?(c((function(e){return e+20})),N("TORNADO: SEEK SHELTER.")):"Ash"===e.Main?(c((function(e){return e+20})),N("ASH: SEEK SHELTER.")):"Smoke"===e.Main?(c((function(e){return e+20})),N("SMOKE: SEEK SHELTER.")):"Sand"===e.Main?(c((function(e){return e+4})),N("SAND: Recommended to stay indoors.")):"Dust"===e.Main?(c((function(e){return e+4})),N("DUST: Recommended to stay indoors.")):"Squall"===e.Main?(c((function(e){return e+4})),N("SQUALL: Recommended to stay indoors.")):"Haze"===e.Main?(c((function(e){return e+4})),N("HAZE: Recommended to stay indoors.")):"Snow"===e.Main?(c((function(e){return e+4})),N("SNOW: Recommended to stay indoors.")):"Rain"===e.Main?(c((function(e){return e+3})),N("RAIN: Recommended to stay indoors.")):"Drizzle"===e.Main?(c((function(e){return e+3})),N("DRIZZLE: Recommended to stay indoors.")):"Mist"===e.Main?(c((function(e){return e+2})),N("MIST: Be cautious while running.")):"Fog"===e.Main?(c((function(e){return e+2})),N("FOG: Be cautious while running with limited visiblity.")):(c((function(e){return e+1})),N(""))};return r.a.createElement(T,{number:i,currenttemp:s,humidity:f,uv:w,main:I,wind:C})});var M=function(){return r.a.createElement("div",{className:"RunDashboard"},r.a.createElement(C,null))};a(75);var S=function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"WeatherDash"},r.a.createElement(w,null)),r.a.createElement("section",{className:"RunDash"},r.a.createElement(M,null)),r.a.createElement("section",{className:"ForecastDash"},r.a.createElement(O,null)))},x=a(34),H=a.n(x);var D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("Dallas",{Location:"",CurrentTemperature:"",HiToday:"",LoToday:"",Humidity:"",Conditions:"",Wind:"",lat:"",lon:"",uv:"",IconCode:"",Main:""}),d=Object(o.a)(c,2),s=d[0],h=d[1],f=Object(l.a)();Object(n.useEffect)((function(){g()}),[s]);var g=function(){m(s).then((function(e){var t=e.data.weather[0].icon,a=e.data.name,n=Math.round(e.data.main.temp),r=Math.round(e.data.main.temp_max),i=Math.round(e.data.main.temp_min),c=Math.round(e.data.main.humidity),o=e.data.weather[0].description,l=Math.round(e.data.wind.speed),u=e.data.coord.lat,d=e.data.coord.lon,s=e.data.weather[0].main;p(u,d).then((function(e){var m=Math.round(e.data.data[0].uv);h({Location:a,CurrentTemperature:n,HiToday:r,LoToday:i,Humidity:c,Conditions:o,Wind:l,uv:m,lat:u,lon:d,IconCode:t,Main:s})}))}))};return r.a.createElement(u.Provider,{value:s},r.a.createElement("nav",{className:"container"},r.a.createElement("div",{className:"logospace"},r.a.createElement("img",{className:"logo",src:H.a,alt:"Runwea"}),r.a.createElement("h1",null,"RUNWEA")),r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""==a?alert("Enter a city"):h(a)},className:"searchbar",id:"Find-Area-Form"},r.a.createElement("input",{type:"text",className:"searchTerm",placeholder:"Search for an area",label:"search",value:a,onChange:function(e){i(e.target.value)},id:"Find-Area"}),r.a.createElement("button",{type:"submit",className:"searchButton","aria-label":"Search"},r.a.createElement("i",{class:"fa fa-search"}))),r.a.createElement("button",{className:"geo",onClick:function(){var e=f.longitude,t=f.latitude;E(e,t).then((function(e){var t=e.data.weather[0].icon,a=e.data.name,n=Math.round(e.data.main.temp),r=Math.round(e.data.main.temp_max),i=Math.round(e.data.main.temp_min),c=Math.round(e.data.main.humidity),o=e.data.weather[0].description,l=Math.round(e.data.wind.speed),u=e.data.coord.lat,d=e.data.coord.lon,s=e.data.weather[0].main;p(u,d).then((function(e){var m=Math.round(e.data.data[0].uv);h({Location:a,CurrentTemperature:n,HiToday:r,LoToday:i,Humidity:c,Conditions:o,Wind:l,uv:m,lat:u,lon:d,IconCode:t,Main:s})}))}))},"aria-label":"Geo-Detect"},r.a.createElement("i",{class:"fas fa-globe"})))),r.a.createElement(S,null))};a(76);var A=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 Javier A. Barragan | RUNWEA Unreleased | Hello, Coding With Friends!"))};a(77);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(A,null))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Runwea",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Runwea","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}],[[35,1,2]]]);
//# sourceMappingURL=main.8a9bf352.chunk.js.map