!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n),t.d(n,"helpers",(function(){return f})),t.d(n,"OWMClient",(function(){return p}));var r={};function o(e){return e+273.15}function u(e){return 1.8*e+32}function i(e){return(e-32)/1.8}function c(e){return o(i(e))}function a(e){return e-273.15}function d(e){return u(a(e))}function l(e){return null==e||""===e||Array.isArray(e)&&0===e.length}t.r(r),t.d(r,"celsiusToKelvin",(function(){return o})),t.d(r,"celsiusToFahrenheit",(function(){return u})),t.d(r,"fahrenheitToCelsius",(function(){return i})),t.d(r,"fahrenheitToKelvin",(function(){return c})),t.d(r,"kelvinToCelsius",(function(){return a})),t.d(r,"kelvinToFahrenheit",(function(){return d})),t.d(r,"isEmpty",(function(){return l}));const s={jsonp:e=>new Promise((function(n,t){let r="_"+Math.round(1e4*Math.random()),o="jsonp_callback_"+r,u=document.getElementsByTagName("head")[0]||document.body||document.documentElement,i=document.createElement("script"),c=e+"&callback="+o;window[o]=function(e){delete window[o];let t=document.getElementById(r);t.parentNode.removeChild(t),n(e)},i.src=c,i.id=r,i.addEventListener("error",()=>t(new Error("Request failed"))),u.appendChild(i)}))},f=r,p=class{constructor(e){this.baseUrl=e.baseUrl||"https://api.openweathermap.org/data/2.5",this.appid=e.appid}_getJSON(e){return s.jsonp(e).then(e=>JSON.parse(e))}getCurrent(e){let n=`${this.baseUrl}/weather?q=${encodeURIComponent(e)}&appid=${encodeURIComponent(this.appid)}`;return this._getJSON(n)}getForecast(e){let n=`${this.baseUrl}/forecast?q=${encodeURIComponent(e)}&appid=${encodeURIComponent(this.appid)}`;return this._getJSON(n)}}}]);