"use strict";(self.webpackChunkd14_inlinecssinreact_navlink_usenavigate_uselocation=self.webpackChunkd14_inlinecssinreact_navlink_usenavigate_uselocation||[]).push([[453],{453:(e,n,t)=>{t.r(n),t.d(n,{getCLS:()=>y,getFCP:()=>g,getFID:()=>F,getLCP:()=>P,getTTFB:()=>_});var i,a,r,o,u=function(e,n){return{name:e,value:void 0===n?-1:n,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver((function(e){return e.getEntries().map(n)}));return t.observe({type:e,buffered:!0}),t}}catch(e){}},s=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},f=function(e){addEventListener("pageshow",(function(n){n.persisted&&e(n)}),!0)},m=function(e,n,t){var i;return function(a){n.value>=0&&(a||t)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,e(n)))}},v=-1,d=function(){return"hidden"===document.visibilityState?0:1/0},p=function(){s((function(e){var n=e.timeStamp;v=n}),!0)},l=function(){return v<0&&(v=d(),p(),f((function(){setTimeout((function(){v=d(),p()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,n){var t,i=l(),a=u("FCP"),r=function(e){"first-contentful-paint"===e.name&&(s&&s.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=e.startTime,a.entries.push(e),t(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],s=o?null:c("paint",r);(o||s)&&(t=m(e,a,n),o&&r(o),f((function(i){a=u("FCP"),t=m(e,a,n),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,t(!0)}))}))})))},h=!1,T=-1,y=function(e,n){h||(g((function(e){T=e.value})),h=!0);var t,i=function(n){T>-1&&e(n)},a=u("CLS",0),r=0,o=[],v=function(e){if(!e.hadRecentInput){var n=o[0],i=o[o.length-1];r&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(r+=e.value,o.push(e)):(r=e.value,o=[e]),r>a.value&&(a.value=r,a.entries=o,t())}},d=c("layout-shift",v);d&&(t=m(i,a,n),s((function(){d.takeRecords().map(v),t(!0)})),f((function(){r=0,T=-1,a=u("CLS",0),t=m(i,a,n)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,n){i||(i=n,a=e,r=new Date,k(removeEventListener),S())},S=function(){if(a>=0&&a<r-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(n){n(e)})),o=[]}},b=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){L(e,n),a()},i=function(){a()},a=function(){removeEventListener("pointerup",t,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",t,E),addEventListener("pointercancel",i,E)}(n,e):L(n,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,b,E)}))},F=function(e,n){var t,r=l(),v=u("FID"),d=function(e){e.startTime<r.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),t(!0))},p=c("first-input",d);t=m(e,v,n),p&&s((function(){p.takeRecords().map(d),p.disconnect()}),!0),p&&f((function(){var r;v=u("FID"),t=m(e,v,n),o=[],a=-1,i=null,k(addEventListener),r=d,o.push(r),S()}))},C={},P=function(e,n){var t,i=l(),a=u("LCP"),r=function(e){var n=e.startTime;n<i.firstHiddenTime&&(a.value=n,a.entries.push(e),t())},o=c("largest-contentful-paint",r);if(o){t=m(e,a,n);var v=function(){C[a.id]||(o.takeRecords().map(r),o.disconnect(),C[a.id]=!0,t(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),s(v,!0),f((function(i){a=u("LCP"),t=m(e,a,n),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,C[a.id]=!0,t(!0)}))}))}))}},_=function(e){var n,t=u("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,n={entryType:"navigation",startTime:0};for(var t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now())return;t.entries=[n],e(t)}catch(e){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("load",(function(){return setTimeout(n,0)}))}}}]);
//# sourceMappingURL=453.06ac9868.chunk.js.map