(this["webpackJsonpfootball-stats-api2"]=this["webpackJsonpfootball-stats-api2"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var o=a(6),n=a.n(o),r=a(19),s=a.n(r),c=(a(24),a(13)),l=a.n(c),i=a(9),u=a(17),d=a(11),h=a.p+"static/media/logo.6ce24c58.svg",b=(a(26),a(2)),f=a(0),v=a(1),m=a(4),p=a(3),g=a(10),j=a(18),O=a(5);j.a.register(g.a,g.g,g.b,g.i,g.j,g.c,g.e,g.h,g.f);var w,x={showTrendLines:!1,showAllDataPoints:!0,showYears:{2016:!1,2017:!1,2018:!1,2019:!1,2020:!0,2021:!0}},y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pointsPerYear:{2016:[],2017:[],2018:[],2019:[],2020:[],2021:[]},eventsPerYear:{2016:[],2017:[],2018:[],2019:[],2020:[],2021:[]}};return Object(f.a)(this,a),(e=t.call(this,o)).handleShowTrendLines=function(){e.setState((function(e){var t=Object(b.a)({},e);return t.showTrendLines=!e.showTrendLines,t.showYears=Object(b.a)({},e.showYears),console.warn("handleShowTrendLines"),console.warn(JSON.stringify(t)),t}))},e.handleShowAllDataPoints=function(){e.setState((function(e){var t=Object(b.a)({},e);return t.showAllDataPoints=!e.showAllDataPoints,t.showYears=Object(b.a)({},e.showYears),console.warn("showAllDataPoints"),console.warn(JSON.stringify(t)),t}))},e.handleShowYear=function(t){e.setState((function(e){var a=Object(b.a)({},e);return a.showYears=Object(b.a)({},e.showYears),a.showYears[t]=!e.showYears[t],console.warn("handleShowYear : "+t),console.warn(JSON.stringify(a)),a}))},e.state=x,e}return Object(v.a)(a,[{key:"render",value:function(){var e,t,a,o,n,r,s,c=this,l="255, 0, 0",i="rgba(".concat(l,", 1)"),u="rgba(".concat(l,", 0.4)"),d="85, 85, 85",h="rgba(".concat(d,", 1)"),f="rgba(".concat(d,", 0.4)"),v="0, 100, 0",m="rgba(".concat(v,", 1)"),p="rgba(".concat(v,", 0.4)"),g="rgba(".concat("220, 220, 220",", 1)"),w="0, 0, 255",x="rgba(".concat(w,", 1)"),y="rgba(".concat(w,", 0.4)"),k="75, 192, 192",C="rgba(".concat(k,", 1)"),T="rgba(".concat(k,", 0.4)"),S="255, 165, 0",N="rgba(".concat(S,", 1)"),P="rgba(".concat(S,", 0.4)"),Y={fill:!1,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBorderColor:g,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]},D={2016:[],2017:[],2018:[],2019:[],2020:[],2021:[]},B=this.props.pointsPerYear;for(var L in D)if(Object.prototype.hasOwnProperty.call(D,L)){var F=D[L];if(B[L])for(var A=0;A<B[L].length;A++){var E=(0===A?0:F[A-1])+B[L][A];F.push(E)}}for(var I=this.state.showAllDataPoints?Math.max((null===(e=B[2016])||void 0===e?void 0:e.length)||0,(null===(t=B[2017])||void 0===t?void 0:t.length)||0,(null===(a=B[2018])||void 0===a?void 0:a.length)||0,(null===(o=B[2019])||void 0===o?void 0:o.length)||0,(null===(n=B[2020])||void 0===n?void 0:n.length)||0,(null===(r=B[2021])||void 0===r?void 0:r.length)||0):Math.max(((null===(s=B[2021])||void 0===s?void 0:s.length)||0)+10,12),H=[],R=0;R<I;R++){var W=R%5!==0&&1!==R&&23!==R&&46!==R||45===R?"":R.toString(10);H.push(W)}var X={labels:H,datasets:[]},J=function(e,t){return t.map((function(t,a){var o={x:a+1,y:t};return o.event=c.props.eventsPerYear?c.props.eventsPerYear[e][a]:null,o}))};if(this.state.showYears[2016]&&X.datasets&&X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"2016-",backgroundColor:y,borderColor:x,pointBorderColor:x,pointHoverBackgroundColor:x,data:J(2016,D[2016].slice(0,I))})),this.state.showYears[2017]&&X.datasets&&X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"2017-",backgroundColor:f,borderColor:h,pointBorderColor:h,pointHoverBackgroundColor:h,data:J(2017,D[2017].slice(0,I))})),this.state.showYears[2018]&&X.datasets&&X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"2018-",backgroundColor:p,borderColor:m,pointBorderColor:m,pointHoverBackgroundColor:m,data:J(2018,D[2018].slice(0,I))})),this.state.showYears[2019]&&X.datasets&&X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"2019-",backgroundColor:p,borderColor:m,pointBorderColor:m,pointHoverBackgroundColor:m,borderDash:[],data:J(2019,D[2019].slice(0,I))})),this.state.showYears[2020]&&X.datasets&&X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"2020-",backgroundColor:f,borderColor:h,pointBorderColor:h,pointHoverBackgroundColor:h,borderDash:[],data:J(2020,D[2020].slice(0,I))})),this.state.showYears[2021]&&X.datasets&&X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"2021-",backgroundColor:u,borderColor:i,pointBorderColor:i,pointHoverBackgroundColor:i,borderDash:[],data:J(2021,D[2021].slice(0,I)),borderWidth:4})),this.state.showTrendLines){for(var U=[],M=0;M<I;M++){var V=1.61*M;U.push(V)}for(var K=[],G=0;G<I;G++){var z=1*G;K.push(z)}X.datasets&&(X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"Playoffs",backgroundColor:T,borderColor:C,pointBorderColor:C,pointHoverBackgroundColor:C,borderDash:[5,15],data:U})),X.datasets.push(Object(b.a)(Object(b.a)({},Y),{},{label:"Relegation",backgroundColor:P,borderColor:N,pointBorderColor:N,pointHoverBackgroundColor:N,borderDash:[5,15],data:K})))}var q={maintainAspectRatio:!1,scales:{x:{},yAxis:{type:"linear"}},plugins:{tooltip:{callbacks:{label:function(e){var t,a=e.dataset.label||"";if(0===e.dataIndex)return"";if((t=e.raw)&&"object"===typeof t&&t.constructor===Object){if(a&&(a+=": ".concat(e.raw.y)),a){var o,n,r=e.raw.event,s=null===r||void 0===r||null===(o=r.eventProgress)||void 0===o?void 0:o.status;["RESULT","LIVE"].includes(s)&&(a+=" : ".concat(r.homeTeam.name.full," ").concat(r.homeTeam.scores.score," - ").concat(r.awayTeam.scores.score," ").concat(r.awayTeam.name.full)),"LIVE"===(null===r||void 0===r||null===(n=r.eventProgress)||void 0===n?void 0:n.status)&&(a+=" : ".concat(r.eventProgress.status))}}else a&&(a+=": ".concat(e.raw));return a}}}}};return Object(O.jsxs)("div",{style:{position:"relative",height:"80vh"},children:[Object(O.jsxs)("div",{className:"custom-control custom-checkbox",style:{margin:"10px 30px 5px 25px"},children:[Object(O.jsx)("label",{className:"custom-control-label",children:"Show: "})," ",Object(O.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:function(){return c.handleShowTrendLines()}}),Object(O.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Trend Lines"}),Object(O.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck2",onChange:function(){return c.handleShowAllDataPoints()},checked:this.state.showAllDataPoints}),Object(O.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck2",children:"All Points"}),Object.keys(D).map((function(e){return!isNaN(+e)&&Object(O.jsxs)("div",{style:{display:"inline"},children:[Object(O.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"show".concat(e,"Checkbox"),onChange:function(){return c.handleShowYear(+e)},style:{marginLeft:"10px"},checked:c.state.showYears[e]}),Object(O.jsxs)("label",{className:"custom-control-label",htmlFor:"show".concat(e,"Checkbox"),children:[e,"-"]})]},+e)}))]}),Object(O.jsx)(j.a,{type:"line",data:X,options:q}),!1]})}}]),a}(o.Component);!function(e){e.Loss="loss",e.Tie="tie",e.Win="win",e.Undecided="undecided"}(w||(w={}));var k={linkText:"bristol-city",fullName:"Bristol City"},C=["premier-league","championship","league-one","league-two","scottish-premiership"];var T=function(){var e=Object(o.useState)(void 0),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(void 0),s=Object(d.a)(r,2),c=s[0],b=s[1],f=Object(o.useState)([]),v=Object(d.a)(f,2),m=v[0],p=v[1],g=Object(o.useState)([]),j=Object(d.a)(g,2),x=j[0],T=j[1],S=Object(o.useState)(k),N=Object(d.a)(S,2),P=N[0],Y=N[1],D=Object(o.useState)(!1),B=Object(d.a)(D,2),L=B[0],F=B[1];return Object(o.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,o,n,r,s,c,u,d,h,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=[],o=0;case 3:if(!(o<C.length)){e.next=20;break}return n="https://push.api.bbci.co.uk/batch?t=/data/bbc-morph-sport-tables-data/competition/".concat(C[o],"/sport/football/version/2.0.2?timeout=5"),e.next=8,fetch(n);case 8:return r=e.sent,e.next=11,r.json();case 11:s=e.sent,c=null===s||void 0===s?void 0:s.payload[0].body.sportTables.tables[0].rows,u=c.map((function(e){return e.cells[2].td.abbrLink})),d=u.map((function(e){return e.link.split("/").slice(-1)[0]})),t.push.apply(t,Object(i.a)(u)),a.push.apply(a,Object(i.a)(d));case 17:o++,e.next=3;break;case 20:h=t.map((function(e){if(void 0!==e)return{linkText:e.link.split("/").slice(-1)[0],fullName:e.text}})),a.sort(),p(a),(b=h.filter((function(e){return void 0!==e}))).sort((function(e,t){return void 0===e||void 0===t?0:e.fullName<t.fullName?-1:e.fullName>t.fullName?1:0})),T(b);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,o,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(!0),t=function(e){var t=e.homeTeam.name.full===P.fullName?e.homeTeam:e.awayTeam,a=e.homeTeam.name.full!==P.fullName?e.homeTeam:e.awayTeam;if("LIVE"===e.eventProgress.status){var o=t.scores.score,n=a.scores.score;return o<n?0:o>n?3:1}return"loss"===t.eventOutcome?0:"win"===t.eventOutcome?3:1},a={},o={},r=2016,2021,s=l.a.mark((function e(r){var s,c,i,u,d,h,f,v,m,p,g,j,O,x,y,k;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(r,"-07-31"),u="".concat(r+1,"-07-30"),d=(new Date).toISOString().substr(0,10),h="%2Fdata%2Fbbc-morph-football-scores-match-list-data%2FendDate%2F".concat(u,"%2FstartDate%2F").concat(i,"%2Fteam%2F").concat(P.linkText,"%2FtodayDate%2F").concat(d,"%2Fversion%2F2.4.6?timeout=5"),f="https://push.api.bbci.co.uk/batch?t=".concat(h),e.next=7,fetch(f);case 7:return v=e.sent,e.next=10,v.json();case 10:if(m=e.sent,g=null===(p=m)||void 0===p?void 0:p.payload,j=g&&g.length>0?g[0]:null,O=null===j||void 0===j||null===(s=j.body)||void 0===s?void 0:s.matchData,x=O&&O.length>0?null===(c=O[0])||void 0===c?void 0:c.tournamentDatesWithEvents:null,y=[],(k=[].concat(C)).push("national-league"),x)p.payload[0].body.matchData.forEach((function(e){Object.keys(e.tournamentDatesWithEvents).forEach((function(t){return e.tournamentDatesWithEvents[t][0].events.forEach((function(e){-1===k.indexOf(e.tournamentSlug)&&console.warn("".concat(e.tournamentSlug)),"RESULT"!==e.eventProgress.status&&console.warn("".concat(e.tournamentSlug," : ").concat(e.eventProgress.status)),k.indexOf(e.tournamentSlug)>-1&&("RESULT"===e.eventProgress.status||"LIVE"===e.eventProgress.status)&&y.push(e)}))}))}));else try{console.warn(JSON.stringify(m,null,2))}catch(l){console.warn(l)}y.sort((function(e,t){return e.startTime<t.startTime?-1:e.startTime>t.startTime?1:0})),a[r]=y.map((function(e){return t(e)})),a[r].unshift(0),o[r]=y,o[r].unshift({eventKey:"",startTime:"",isTBC:!1,minutesElapsed:0,minutesIntoAddedTime:0,eventStatus:"",eventStatusNote:"",eventStatusReason:null,eventOutcomeType:"",eventType:"",seriesWinner:null,cpsId:"",cpsLive:"",homeTeam:{key:"1",scores:{score:0,halfTime:0,fullTime:0,extraTime:0,shootout:0,aggregate:0,aggregateGoalsAway:0},formation:"",eventOutcome:w.Loss,name:{first:P.fullName,full:P.fullName,abbreviation:P.fullName}},awayTeam:{key:"1",scores:{score:1,halfTime:1,fullTime:1,extraTime:1,shootout:1,aggregate:1,aggregateGoalsAway:1},formation:"",eventOutcome:w.Win,name:{first:P.fullName+"X",full:P.fullName+"X",abbreviation:P.fullName+"X"}},eventProgress:{period:"",status:"RESULT"},venue:{name:{first:"X",full:"X",abbreviation:"X"},homeCountry:"UK"},officials:[],tournamentInfo:"",eventActions:"",startTimeInUKHHMM:"",comment:"",href:"",tournamentName:{first:"X",full:"X",abbreviation:"X"},tournamentSlug:""}),2020===r&&(n(a),b(o),F(!1));case 26:case"end":return e.stop()}}),e)})),c=2021;case 8:if(!(c>=r)){e.next=13;break}return e.delegateYield(s(c),"t0",10);case 10:c--,e.next=8;break;case 13:n(a),b(o),F(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[P]),Object(O.jsxs)("div",{children:[m&&Object(O.jsx)("div",{style:{textAlign:"center"},children:Object(O.jsx)("select",{name:"teamNameInfoItems",id:"teamNameInfoItems",onChange:function(e){var t,a=e.target.value,o={linkText:a,fullName:(null===(t=x.find((function(e){return(null===e||void 0===e?void 0:e.linkText)===a})))||void 0===t?void 0:t.fullName)||"NA"};Y(o)},style:{fontSize:"20pt"},value:P.linkText,children:x.map((function(e){return Object(O.jsx)("option",{value:null===e||void 0===e?void 0:e.linkText,children:null===e||void 0===e?void 0:e.fullName},(null===e||void 0===e?void 0:e.linkText)||1)}))})}),a&&!L&&Object(O.jsx)(y,{pointsPerYear:a,eventsPerYear:c}),(!a||L)&&Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",border:"3px solid white"},children:Object(O.jsx)("img",{src:h,className:"App-logo",alt:"logo"})}),Object(O.jsx)("div",{})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),o(e),n(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),S()}},[[28,1,2]]]);
//# sourceMappingURL=main.b6808cfd.chunk.js.map