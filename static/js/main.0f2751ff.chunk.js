(this["webpackJsonpfootball-stats-api2"]=this["webpackJsonpfootball-stats-api2"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var o=a(7),n=a.n(o),r=a(21),s=a.n(r),c=(a(26),a(13)),l=a(9),i=a(19),u=a(11),d=a.p+"static/media/logo.6ce24c58.svg",h=(a(27),a(2)),b=a(0),m=a(1),f=a(4),v=a(3),p=a(10),g=a(20),j=a(5);g.a.register(p.a,p.g,p.b,p.i,p.j,p.c,p.e,p.h,p.f);var O,w={showTrendLines:!1,showAllDataPoints:!0,showYears:{2017:!1,2018:!1,2019:!1,2020:!1,2021:!0,2022:!0}},x=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimumYear:2017,maximumYear:2022,pointsPerYear:{2017:[],2018:[],2019:[],2020:[],2021:[],2022:[]},eventsPerYear:{2017:[],2018:[],2019:[],2020:[],2021:[],2022:[]}};return Object(b.a)(this,a),(e=t.call(this,o)).handleShowTrendLines=function(){e.setState((function(e){var t=Object(h.a)({},e);return t.showTrendLines=!e.showTrendLines,t.showYears=Object(h.a)({},e.showYears),console.warn("handleShowTrendLines"),console.warn(JSON.stringify(t)),t}))},e.handleShowAllDataPoints=function(){e.setState((function(e){var t=Object(h.a)({},e);return t.showAllDataPoints=!e.showAllDataPoints,t.showYears=Object(h.a)({},e.showYears),console.warn("showAllDataPoints"),console.warn(JSON.stringify(t)),t}))},e.handleShowYear=function(t){e.setState((function(e){var a=Object(h.a)({},e);return a.showYears=Object(h.a)({},e.showYears),a.showYears[t]=!e.showYears[t],console.warn("handleShowYear : "+t),console.warn(JSON.stringify(a)),a}))},e.state=w,e}return Object(m.a)(a,[{key:"render",value:function(){var e,t,a,o,n,r,s,c=this,l="255, 0, 0",i="rgba(".concat(l,", 1)"),u="rgba(".concat(l,", 0.4)"),d="85, 85, 85",b="rgba(".concat(d,", 1)"),m="rgba(".concat(d,", 0.4)"),f="0, 100, 0",v="rgba(".concat(f,", 1)"),p="rgba(".concat(f,", 0.4)"),O="rgba(".concat("220, 220, 220",", 1)"),w="0, 0, 255",x="rgba(".concat(w,", 1)"),y="rgba(".concat(w,", 0.4)"),k="75, 192, 192",T="rgba(".concat(k,", 1)"),C="rgba(".concat(k,", 0.4)"),S="255, 165, 0",N="rgba(".concat(S,", 1)"),Y="rgba(".concat(S,", 0.4)"),P={fill:!1,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBorderColor:O,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]},D={2017:[],2018:[],2019:[],2020:[],2021:[],2022:[]},B=this.props.pointsPerYear;for(var L in D)if(Object.prototype.hasOwnProperty.call(D,L)){var A=D[L];if(B[L])for(var E=0;E<B[L].length;E++){var F=(0===E?0:A[E-1])+B[L][E];A.push(F)}}for(var I=this.state.showAllDataPoints?Math.max((null===(e=B[2017])||void 0===e?void 0:e.length)||0,(null===(t=B[2018])||void 0===t?void 0:t.length)||0,(null===(a=B[2019])||void 0===a?void 0:a.length)||0,(null===(o=B[2020])||void 0===o?void 0:o.length)||0,(null===(n=B[2021])||void 0===n?void 0:n.length)||0,(null===(r=B[2022])||void 0===r?void 0:r.length)||0):Math.max(((null===(s=B[2022])||void 0===s?void 0:s.length)||0)+10,12),H=[],R=0;R<I;R++){var W=R%5!==0&&1!==R&&23!==R&&46!==R||45===R?"":R.toString(10);H.push(W)}var X={labels:H,datasets:[]},J=function(e,t){var a=t.map((function(t,a){var o={x:a+1,y:t};return o.event=c.props.eventsPerYear?c.props.eventsPerYear[e][a]:null,o}));return a};if(this.state.showYears[2017]&&X.datasets&&X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"2017-",backgroundColor:y,borderColor:x,pointBorderColor:x,pointHoverBackgroundColor:x,data:J(2017,D[2017].slice(0,I))})),this.state.showYears[2018]&&X.datasets&&X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"2018-",backgroundColor:m,borderColor:b,pointBorderColor:b,pointHoverBackgroundColor:b,data:J(2018,D[2018].slice(0,I))})),this.state.showYears[2019]&&X.datasets&&X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"2019-",backgroundColor:p,borderColor:v,pointBorderColor:v,pointHoverBackgroundColor:v,data:J(2019,D[2019].slice(0,I))})),this.state.showYears[2020]&&X.datasets&&X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"2020-",backgroundColor:p,borderColor:v,pointBorderColor:v,pointHoverBackgroundColor:v,borderDash:[],data:J(2020,D[2020].slice(0,I))})),this.state.showYears[2021]&&X.datasets&&X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"2021-",backgroundColor:m,borderColor:b,pointBorderColor:b,pointHoverBackgroundColor:b,borderDash:[],data:J(2021,D[2021].slice(0,I))})),this.state.showYears[2022]&&X.datasets&&X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"2022-",backgroundColor:u,borderColor:i,pointBorderColor:i,pointHoverBackgroundColor:i,borderDash:[],data:J(2022,D[2022].slice(0,I)),borderWidth:4})),this.state.showTrendLines){for(var U=[],M=0;M<I;M++){var V=1.61*M;U.push(V)}for(var K=[],G=0;G<I;G++){var z=1*G;K.push(z)}X.datasets&&(X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"Playoffs",backgroundColor:C,borderColor:T,pointBorderColor:T,pointHoverBackgroundColor:T,borderDash:[5,15],data:U})),X.datasets.push(Object(h.a)(Object(h.a)({},P),{},{label:"Relegation",backgroundColor:Y,borderColor:N,pointBorderColor:N,pointHoverBackgroundColor:N,borderDash:[5,15],data:K})))}var q={maintainAspectRatio:!1,scales:{x:{},yAxis:{type:"linear"}},plugins:{tooltip:{callbacks:{label:function(e){var t,a=e.dataset.label||"";if(0===e.dataIndex)return"";if((t=e.raw)&&"object"===typeof t&&t.constructor===Object){if(a&&(a+=": ".concat(1===e.raw.y?e.raw.y+" pt":e.raw.y+" pts")),a){var o,n,r=e.raw.event,s=null===r||void 0===r||null===(o=r.eventProgress)||void 0===o?void 0:o.status;["RESULT","LIVE"].includes(s)&&(a+=" : ".concat(r.homeTeam.name.full," ").concat(r.homeTeam.scores.score," - ").concat(r.awayTeam.scores.score," ").concat(r.awayTeam.name.full)),"LIVE"===(null===r||void 0===r||null===(n=r.eventProgress)||void 0===n?void 0:n.status)&&(a+=" : ".concat(r.eventProgress.status," (").concat(r.minutesElapsed,"'").concat(r.minutesIntoAddedTime?" +"+r.minutesIntoAddedTime:"",")"))}}else a&&(a+=": ".concat(e.raw));return a}}}}};return Object(j.jsxs)("div",{style:{position:"relative",height:"80vh"},children:[Object(j.jsxs)("div",{className:"custom-control custom-checkbox",style:{margin:"10px 30px 5px 25px"},children:[Object(j.jsx)("label",{className:"custom-control-label",children:"Show: "})," ",Object(j.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:function(){return c.handleShowTrendLines()}}),Object(j.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Trend Lines"}),Object(j.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck2",onChange:function(){return c.handleShowAllDataPoints()},checked:this.state.showAllDataPoints}),Object(j.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck2",children:"All Points"}),Object.keys(D).map((function(e){return!isNaN(+e)&&Object(j.jsxs)("div",{style:{display:"inline"},children:[Object(j.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"show".concat(e,"Checkbox"),onChange:function(){return c.handleShowYear(+e)},style:{marginLeft:"10px"},checked:c.state.showYears[e]}),Object(j.jsxs)("label",{className:"custom-control-label",htmlFor:"show".concat(e,"Checkbox"),children:[e,"-"]})]},+e)}))]}),Object(j.jsx)(g.a,{type:"line",data:X,options:q}),!1]})}}]),a}(o.Component),y=x;!function(e){e.Loss="loss",e.Tie="tie",e.Win="win",e.Undecided="undecided"}(O||(O={}));var k={linkText:"bristol-city",fullName:"Bristol City"},T=["premier-league","championship","league-one","league-two","scottish-premiership","spanish-la-liga"],C=2022;var S=function(){var e=Object(o.useState)(void 0),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(void 0),s=Object(u.a)(r,2),h=s[0],b=s[1],m=Object(o.useState)([]),f=Object(u.a)(m,2),v=f[0],p=f[1],g=Object(o.useState)([]),w=Object(u.a)(g,2),x=w[0],S=w[1],N=Object(o.useState)(k),Y=Object(u.a)(N,2),P=Y[0],D=Y[1],B=Object(o.useState)(!1),L=Object(u.a)(B,2),A=L[0],E=L[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t,a,o,n,r,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=[],o=Object(c.a)().mark((function e(){var o,r,s,i,u,d,h;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://push.api.bbci.co.uk/batch?t=/data/bbc-morph-sport-tables-data/competition/".concat(T[n],"/sport/football/version/2.0.2?timeout=5"),e.next=4,fetch(o);case 4:return r=e.sent,e.next=7,r.json();case 7:s=e.sent,i=null===s||void 0===s?void 0:s.payload[0].body.sportTables.tables[0].rows,u=i.map((function(e){return e.cells[2].td.abbrLink})),d=u.map((function(e){return e?e.link.split("/").slice(-1)[0]:null})),t.push.apply(t,Object(l.a)(u)),h=[],d.forEach((function(e){null!=e&&h.push(e)})),a.push.apply(a,h);case 15:case"end":return e.stop()}}),e)})),n=0;case 4:if(!(n<T.length)){e.next=9;break}return e.delegateYield(o(),"t0",6);case 6:n++,e.next=4;break;case 9:r=t.map((function(e){if(void 0!==e)return{linkText:e.link.split("/").slice(-1)[0],fullName:e.text}})),a.sort(),p(a),(s=r.filter((function(e){return void 0!==e}))).sort((function(e,t){return void 0===e||void 0===t?0:e.fullName<t.fullName?-1:e.fullName>t.fullName?1:0})),S(s);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(o.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t,a,o,r,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!0),t=function(e){var t=e.homeTeam.name.full===P.fullName?e.homeTeam:e.awayTeam,a=e.homeTeam.name.full!==P.fullName?e.homeTeam:e.awayTeam;if("LIVE"===e.eventProgress.status){var o=t.scores.score,n=a.scores.score;return o<n?0:o>n?3:1}return"loss"===t.eventOutcome?0:"win"===t.eventOutcome?3:1},a={},o={},r=Object(c.a)().mark((function e(){var r,l,i,u,d,h,m,f,v,p,g,j,w,x,y,k;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(s,"-07-29"),u="".concat(s+1,"-07-28"),d=(new Date).toISOString().substr(0,10),h="%2Fdata%2Fbbc-morph-football-scores-match-list-data%2FendDate%2F".concat(u,"%2FstartDate%2F").concat(i,"%2Fteam%2F").concat(P.linkText,"%2FtodayDate%2F").concat(d,"%2Fversion%2F2.4.6?timeout=5"),m="https://push.api.bbci.co.uk/batch?t=".concat(h),e.next=7,fetch(m);case 7:return f=e.sent,e.next=10,f.json();case 10:if(v=e.sent,g=null===(p=v)||void 0===p?void 0:p.payload,j=g&&g.length>0?g[0]:null,w=null===j||void 0===j||null===(r=j.body)||void 0===r?void 0:r.matchData,x=w&&w.length>0?null===(l=w[0])||void 0===l?void 0:l.tournamentDatesWithEvents:null,y=[],(k=[].concat(T)).push("national-league"),x)p.payload[0].body.matchData.forEach((function(e){Object.keys(e.tournamentDatesWithEvents).forEach((function(t){return e.tournamentDatesWithEvents[t][0].events.forEach((function(e){-1===k.indexOf(e.tournamentSlug)&&console.warn("".concat(e.tournamentSlug)),"RESULT"!==e.eventProgress.status&&console.warn("".concat(e.tournamentSlug," : ").concat(e.eventProgress.status)),k.indexOf(e.tournamentSlug)>-1&&("RESULT"===e.eventProgress.status||"LIVE"===e.eventProgress.status)&&y.push(e)}))}))}));else try{console.warn(JSON.stringify(v,null,2))}catch(c){console.warn(c)}y.sort((function(e,t){return e.startTime<t.startTime?-1:e.startTime>t.startTime?1:0})),a[s]=y.map((function(e){return t(e)})),a[s].unshift(0),o[s]=y,o[s].unshift({eventKey:"",startTime:"",isTBC:!1,minutesElapsed:0,minutesIntoAddedTime:0,eventStatus:"",eventStatusNote:"",eventStatusReason:null,eventOutcomeType:"",eventType:"",seriesWinner:null,cpsId:"",cpsLive:"",homeTeam:{key:"1",scores:{score:0,halfTime:0,fullTime:0,extraTime:0,shootout:0,aggregate:0,aggregateGoalsAway:0},formation:"",eventOutcome:O.Loss,name:{first:P.fullName,full:P.fullName,abbreviation:P.fullName}},awayTeam:{key:"1",scores:{score:1,halfTime:1,fullTime:1,extraTime:1,shootout:1,aggregate:1,aggregateGoalsAway:1},formation:"",eventOutcome:O.Win,name:{first:P.fullName+"X",full:P.fullName+"X",abbreviation:P.fullName+"X"}},eventProgress:{period:"",status:"RESULT"},venue:{name:{first:"X",full:"X",abbreviation:"X"},homeCountry:"UK"},officials:[],tournamentInfo:"",eventActions:"",startTimeInUKHHMM:"",comment:"",href:"",tournamentName:{first:"X",full:"X",abbreviation:"X"},tournamentSlug:""}),2021===s&&(n(a),b(o),E(!1));case 26:case"end":return e.stop()}}),e)})),s=C;case 6:if(!(s>=2017)){e.next=11;break}return e.delegateYield(r(),"t0",8);case 8:s--,e.next=6;break;case 11:n(a),b(o),E(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[P]),Object(j.jsxs)("div",{children:[v&&Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)("select",{name:"teamNameInfoItems",id:"teamNameInfoItems",onChange:function(e){var t,a=e.target.value,o={linkText:a,fullName:(null===(t=x.find((function(e){return(null===e||void 0===e?void 0:e.linkText)===a})))||void 0===t?void 0:t.fullName)||"NA"};D(o)},style:{fontSize:"20pt"},value:P.linkText,children:x.map((function(e){return Object(j.jsx)("option",{value:null===e||void 0===e?void 0:e.linkText,children:null===e||void 0===e?void 0:e.fullName},(null===e||void 0===e?void 0:e.linkText)||1)}))})}),a&&!A&&Object(j.jsx)(y,{pointsPerYear:a,eventsPerYear:h,minimumYear:2017,maximumYear:C}),(!a||A)&&Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",border:"3px solid white"},children:Object(j.jsx)("img",{src:d,className:"App-logo",alt:"logo"})}),Object(j.jsx)("div",{})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),o(e),n(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),N()}},[[29,1,2]]]);
//# sourceMappingURL=main.0f2751ff.chunk.js.map