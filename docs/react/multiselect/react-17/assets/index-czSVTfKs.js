var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o(((e,t)=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(e==null)throw TypeError(`Object.assign cannot be called with null or undefined`);return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String(`abc`);if(e[5]=`de`,Object.getOwnPropertyNames(e)[0]===`5`)return!1;for(var t={},n=0;n<10;n++)t[`_`+String.fromCharCode(n)]=n;if(Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(``)!==`0123456789`)return!1;var r={};return`abcdefghijklmnopqrst`.split(``).forEach(function(e){r[e]=e}),Object.keys(Object.assign({},r)).join(``)===`abcdefghijklmnopqrst`}catch{return!1}}t.exports=o()?Object.assign:function(e,t){for(var o,s=a(e),c,l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]),o)r.call(o,u)&&(s[u]=o[u]);if(n){c=n(o);for(var d=0;d<c.length;d++)i.call(o,c[d])&&(s[c[d]]=o[c[d]])}}return s}})),u=o((e=>{var t=l(),n=60103,r=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var i=60109,a=60110,o=60112;e.Suspense=60113;var s=60115,c=60116;if(typeof Symbol==`function`&&Symbol.for){var u=Symbol.for;n=u(`react.element`),r=u(`react.portal`),e.Fragment=u(`react.fragment`),e.StrictMode=u(`react.strict_mode`),e.Profiler=u(`react.profiler`),i=u(`react.provider`),a=u(`react.context`),o=u(`react.forward_ref`),e.Suspense=u(`react.suspense`),s=u(`react.memo`),c=u(`react.lazy`)}var d=typeof Symbol==`function`&&Symbol.iterator;function f(e){return typeof e!=`object`||!e?null:(e=d&&e[d]||e[`@@iterator`],typeof e==`function`?e:null)}function p(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(p(85));this.updater.enqueueSetState(this,e,t,`setState`)},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function _(){}_.prototype=g.prototype;function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}var y=v.prototype=new _;y.constructor=v,t(y,g.prototype),y.isPureReactComponent=!0;var b={current:null},x=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=``+t.key),t)x.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=t[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:b.current}}function ee(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===n}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function O(e,t,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case n:case r:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+D(c,0):a,Array.isArray(o)?(i=``,e!=null&&(i=e.replace(E,`$&/`)+`/`),O(o,t,i,``,function(e){return e})):o!=null&&(w(o)&&(o=ee(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+e)),t.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,Array.isArray(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+D(s,l);c+=O(s,t,i,u,o)}else if(u=f(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+D(s,l++),c+=O(s,t,i,u,o);else if(s===`object`)throw t=``+e,Error(p(31,t===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:t));return c}function te(e,t,n){if(e==null)return e;var r=[],i=0;return O(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var re={current:null};function k(){var e=re.current;if(e===null)throw Error(p(321));return e}var A={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};e.Children={map:te,forEach:function(e,t,n){te(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return te(e,function(){t++}),t},toArray:function(e){return te(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},e.Component=g,e.PureComponent=v,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,e.cloneElement=function(e,r,i){if(e==null)throw Error(p(267,e));var a=t({},e.props),o=e.key,s=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,c=b.current),r.key!==void 0&&(o=``+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)x.call(r,u)&&!S.hasOwnProperty(u)&&(a[u]=r[u]===void 0&&l!==void 0?l[u]:r[u])}var u=arguments.length-2;if(u===1)a.children=i;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:n,type:e.type,key:o,ref:s,props:a,_owner:c}},e.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:i,_context:e},e.Consumer=e},e.createElement=C,e.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:o,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:s,type:e,compare:t===void 0?null:t}},e.useCallback=function(e,t){return k().useCallback(e,t)},e.useContext=function(e,t){return k().useContext(e,t)},e.useDebugValue=function(){},e.useEffect=function(e,t){return k().useEffect(e,t)},e.useImperativeHandle=function(e,t,n){return k().useImperativeHandle(e,t,n)},e.useLayoutEffect=function(e,t){return k().useLayoutEffect(e,t)},e.useMemo=function(e,t){return k().useMemo(e,t)},e.useReducer=function(e,t,n){return k().useReducer(e,t,n)},e.useRef=function(e){return k().useRef(e)},e.useState=function(e){return k().useState(e)},e.version=`17.0.2`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t,n,r,i;if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}if(typeof window>`u`||typeof MessageChannel!=`function`){var c=null,l=null,u=function(){if(c!==null)try{var t=e.unstable_now();c(!0,t),c=null}catch(e){throw setTimeout(u,0),e}};t=function(e){c===null?(c=e,setTimeout(u,0)):setTimeout(t,0,e)},n=function(e,t){l=setTimeout(e,t)},r=function(){clearTimeout(l)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,f=window.clearTimeout;if(typeof console<`u`){var p=window.cancelAnimationFrame;typeof window.requestAnimationFrame!=`function`&&console.error(`This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`),typeof p!=`function`&&console.error(`This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`)}var m=!1,h=null,g=-1,_=5,v=0;e.unstable_shouldYield=function(){return e.unstable_now()>=v},i=function(){},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):_=0<e?Math.floor(1e3/e):5};var y=new MessageChannel,b=y.port2;y.port1.onmessage=function(){if(h!==null){var t=e.unstable_now();v=t+_;try{h(!0,t)?b.postMessage(null):(m=!1,h=null)}catch(e){throw b.postMessage(null),e}}else m=!1},t=function(e){h=e,m||(m=!0,b.postMessage(null))},n=function(t,n){g=d(function(){t(e.unstable_now())},n)},r=function(){f(g),g=-1}}function x(e,t){var n=e.length;e.push(t);a:for(;;){var r=n-1>>>1,i=e[r];if(i!==void 0&&0<ee(i,t))e[r]=t,e[n]=i,n=r;else break a}}function S(e){return e=e[0],e===void 0?null:e}function C(e){var t=e[0];if(t!==void 0){var n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,i=e.length;r<i;){var a=2*(r+1)-1,o=e[a],s=a+1,c=e[s];if(o!==void 0&&0>ee(o,n))c!==void 0&&0>ee(c,o)?(e[r]=c,e[s]=n,r=s):(e[r]=o,e[a]=n,r=a);else if(c!==void 0&&0>ee(c,n))e[r]=c,e[s]=n,r=s;else break a}}return t}return null}function ee(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}var w=[],T=[],E=1,D=null,O=3,te=!1,ne=!1,re=!1;function k(e){for(var t=S(T);t!==null;){if(t.callback===null)C(T);else if(t.startTime<=e)C(T),t.sortIndex=t.expirationTime,x(w,t);else break;t=S(T)}}function A(e){if(re=!1,k(e),!ne)if(S(w)!==null)ne=!0,t(ie);else{var r=S(T);r!==null&&n(A,r.startTime-e)}}function ie(t,i){ne=!1,re&&(re=!1,r()),te=!0;var a=O;try{for(k(i),D=S(w);D!==null&&(!(D.expirationTime>i)||t&&!e.unstable_shouldYield());){var o=D.callback;if(typeof o==`function`){D.callback=null,O=D.priorityLevel;var s=o(D.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?D.callback=s:D===S(w)&&C(w),k(i)}else C(w);D=S(w)}if(D!==null)var c=!0;else{var l=S(T);l!==null&&n(A,l.startTime-i),c=!1}return c}finally{D=null,O=a,te=!1}}var ae=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){ne||te||(ne=!0,t(ie))},e.unstable_getCurrentPriorityLevel=function(){return O},e.unstable_getFirstCallbackNode=function(){return S(w)},e.unstable_next=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=ae,e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},e.unstable_scheduleCallback=function(i,a,o){var s=e.unstable_now();switch(typeof o==`object`&&o?(o=o.delay,o=typeof o==`number`&&0<o?s+o:s):o=s,i){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=o+c,i={id:E++,callback:a,priorityLevel:i,startTime:o,expirationTime:c,sortIndex:-1},o>s?(i.sortIndex=o,x(T,i),S(w)===null&&i===S(T)&&(re?r():re=!0,n(A,o-s))):(i.sortIndex=c,x(w,i),ne||te||(ne=!0,t(ie))),i},e.unstable_wrapCallback=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=l(),r=p();function i(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}if(!t)throw Error(i(227));var a=new Set,o={};function s(e,t){c(e,t),c(e+`Capture`,t)}function c(e,t){for(o[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m=Object.prototype.hasOwnProperty,h={},g={};function _(e){return m.call(g,e)?!0:m.call(h,e)?!1:f.test(e)?g[e]=!0:(h[e]=!0,!1)}function v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function y(e,t,n,r){if(t==null||v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var x={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){x[e]=new b(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];x[t]=new b(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){x[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){x[e]=new b(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){x[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){x[e]=new b(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){x[e]=new b(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){x[e]=new b(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){x[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(S,C);x[t]=new b(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var i=x.hasOwnProperty(t)?x[t]:null;(i===null?!r&&!(!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`):i.type===0)||(y(t,n,i,r)&&(n=null),r||i===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var w=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=60103,E=60106,D=60107,O=60108,te=60114,ne=60109,re=60110,k=60112,A=60113,ie=60120,ae=60115,oe=60116,se=60121,ce=60128,le=60129,ue=60130,j=60131;if(typeof Symbol==`function`&&Symbol.for){var M=Symbol.for;T=M(`react.element`),E=M(`react.portal`),D=M(`react.fragment`),O=M(`react.strict_mode`),te=M(`react.profiler`),ne=M(`react.provider`),re=M(`react.context`),k=M(`react.forward_ref`),A=M(`react.suspense`),ie=M(`react.suspense_list`),ae=M(`react.memo`),oe=M(`react.lazy`),se=M(`react.block`),M(`react.scope`),ce=M(`react.opaque.id`),le=M(`react.debug_trace_mode`),ue=M(`react.offscreen`),j=M(`react.legacy_hidden`)}var N=typeof Symbol==`function`&&Symbol.iterator;function P(e){return typeof e!=`object`||!e?null:(e=N&&e[N]||e[`@@iterator`],typeof e==`function`?e:null)}var de;function F(e){if(de===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);de=t&&t[1]||``}return`
`+de+e}var fe=!1;function I(e,t){if(!e||fe)return``;fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&typeof e.stack==`string`){for(var i=e.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s])return`
`+i[o].replace(` at new `,` at `);while(1<=o&&0<=s);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?F(e):``}function pe(e){switch(e.tag){case 5:return F(e.type);case 16:return F(`Lazy`);case 13:return F(`Suspense`);case 19:return F(`SuspenseList`);case 0:case 2:case 15:return e=I(e.type,!1),e;case 11:return e=I(e.type.render,!1),e;case 22:return e=I(e.type._render,!1),e;case 1:return e=I(e.type,!0),e;default:return``}}function me(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case D:return`Fragment`;case E:return`Portal`;case te:return`Profiler`;case O:return`StrictMode`;case A:return`Suspense`;case ie:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case re:return(e.displayName||`Context`)+`.Consumer`;case ne:return(e._context.displayName||`Context`)+`.Provider`;case k:var t=e.render;return t=t.displayName||t.name||``,e.displayName||(t===``?`ForwardRef`:`ForwardRef(`+t+`)`);case ae:return me(e.type);case se:return me(e._render);case oe:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function he(e){switch(typeof e){case`boolean`:case`number`:case`object`:case`string`:case`undefined`:return e;default:return``}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function _e(e){var t=ge(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ve(e){e._valueTracker||=_e(e)}function ye(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ge(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function be(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function xe(e,t){var r=t.checked;return n({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Se(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=he(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ce(e,t){t=t.checked,t!=null&&ee(e,`checked`,t,!1)}function we(e,t){Ce(e,t);var n=he(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ee(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ee(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Te(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ee(e,t,n){(t!==`number`||be(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}function De(e){var n=``;return t.Children.forEach(e,function(e){e!=null&&(n+=e)}),n}function Oe(e,t){return e=n({children:void 0},t),(t=De(t.children))&&(e.children=t),e}function ke(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+he(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ae(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return n({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function je(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(i(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:he(n)}}function Me(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ne(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}var Pe={html:`http://www.w3.org/1999/xhtml`,mathml:`http://www.w3.org/1998/Math/MathML`,svg:`http://www.w3.org/2000/svg`};function Fe(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ie(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Fe(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Le,Re=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Pe.svg||`innerHTML`in e)e.innerHTML=t;else{for(Le||=document.createElement(`div`),Le.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Le.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ze(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var L={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(L).forEach(function(e){Be.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),L[t]=L[e]})});function Ve(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||L.hasOwnProperty(e)&&L[e]?(``+t).trim():t+`px`}function He(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ve(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ue=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(e,t){if(t){if(Ue[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(!(typeof t.dangerouslySetInnerHTML==`object`&&`__html`in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(i(62))}}function Ge(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}function Ke(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qe=null,Je=null,Ye=null;function Xe(e){if(e=Ai(e)){if(typeof qe!=`function`)throw Error(i(280));var t=e.stateNode;t&&(t=Mi(t),qe(e.stateNode,e.type,t))}}function Ze(e){Je?Ye?Ye.push(e):Ye=[e]:Je=e}function Qe(){if(Je){var e=Je,t=Ye;if(Ye=Je=null,Xe(e),t)for(e=0;e<t.length;e++)Xe(t[e])}}function $e(e,t){return e(t)}function et(e,t,n,r,i){return e(t,n,r,i)}function tt(){}var nt=$e,rt=!1,it=!1;function at(){(Je!==null||Ye!==null)&&(tt(),Qe())}function ot(e,t,n){if(it)return e(t,n);it=!0;try{return nt(e,t,n)}finally{it=!1,at()}}function st(e,t){var n=e.stateNode;if(n===null)return null;var r=Mi(n);if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ct=!1;if(u)try{var lt={};Object.defineProperty(lt,`passive`,{get:function(){ct=!0}}),window.addEventListener(`test`,lt,lt),window.removeEventListener(`test`,lt,lt)}catch{ct=!1}function ut(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var dt=!1,ft=null,pt=!1,mt=null,ht={onError:function(e){dt=!0,ft=e}};function gt(e,t,n,r,i,a,o,s,c){dt=!1,ft=null,ut.apply(ht,arguments)}function _t(e,t,n,r,a,o,s,c,l){if(gt.apply(this,arguments),dt){if(dt){var u=ft;dt=!1,ft=null}else throw Error(i(198));pt||(pt=!0,mt=u)}}function vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bt(e){if(vt(e)!==e)throw Error(i(188))}function xt(e){var t=e.alternate;if(!t){if(t=vt(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return bt(a),e;if(o===r)return bt(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,r=o;break}if(c===r){s=!0,r=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=a;break}if(c===r){s=!0,r=o,n=a;break}c=c.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function St(e){if(e=xt(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Ct(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var wt,Tt,Et,Dt,Ot=!1,kt=[],At=null,jt=null,Mt=null,Nt=new Map,Pt=new Map,Ft=[],It=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function Lt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Rt(e,t){switch(e){case`focusin`:case`focusout`:At=null;break;case`dragenter`:case`dragleave`:jt=null;break;case`mouseover`:case`mouseout`:Mt=null;break;case`pointerover`:case`pointerout`:Nt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Pt.delete(t.pointerId)}}function zt(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e=Lt(t,n,r,i,a),t!==null&&(t=Ai(t),t!==null&&Tt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bt(e,t,n,r,i){switch(t){case`focusin`:return At=zt(At,e,t,n,r,i),!0;case`dragenter`:return jt=zt(jt,e,t,n,r,i),!0;case`mouseover`:return Mt=zt(Mt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Nt.set(a,zt(Nt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Pt.set(a,zt(Pt.get(a)||null,e,t,n,r,i)),!0}return!1}function Vt(e){var t=ki(e.target);if(t!==null){var n=vt(t);if(n!==null){if(t=n.tag,t===13){if(t=yt(n),t!==null){e.blockedOn=t,Dt(e.lanePriority,function(){r.unstable_runWithPriority(e.priority,function(){Et(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ht(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Ai(n),t!==null&&Tt(t),e.blockedOn=n,!1;t.shift()}return!0}function Ut(e,t,n){Ht(e)&&n.delete(t)}function Wt(){for(Ot=!1;0<kt.length;){var e=kt[0];if(e.blockedOn!==null){e=Ai(e.blockedOn),e!==null&&wt(e);break}for(var t=e.targetContainers;0<t.length;){var n=Dn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&kt.shift()}At!==null&&Ht(At)&&(At=null),jt!==null&&Ht(jt)&&(jt=null),Mt!==null&&Ht(Mt)&&(Mt=null),Nt.forEach(Ut),Pt.forEach(Ut)}function Gt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ot||(Ot=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Wt)))}function Kt(e){function t(t){return Gt(t,e)}if(0<kt.length){Gt(kt[0],e);for(var n=1;n<kt.length;n++){var r=kt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&Gt(At,e),jt!==null&&Gt(jt,e),Mt!==null&&Gt(Mt,e),Nt.forEach(t),Pt.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Vt(n),n.blockedOn===null&&Ft.shift()}function qt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Jt={animationend:qt(`Animation`,`AnimationEnd`),animationiteration:qt(`Animation`,`AnimationIteration`),animationstart:qt(`Animation`,`AnimationStart`),transitionend:qt(`Transition`,`TransitionEnd`)},Yt={},Xt={};u&&(Xt=document.createElement(`div`).style,`AnimationEvent`in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),`TransitionEvent`in window||delete Jt.transitionend.transition);function Zt(e){if(Yt[e])return Yt[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xt)return Yt[e]=t[n];return e}var Qt=Zt(`animationend`),$t=Zt(`animationiteration`),en=Zt(`animationstart`),tn=Zt(`transitionend`),nn=new Map,rn=new Map,an=[`abort`,`abort`,Qt,`animationEnd`,$t,`animationIteration`,en,`animationStart`,`canplay`,`canPlay`,`canplaythrough`,`canPlayThrough`,`durationchange`,`durationChange`,`emptied`,`emptied`,`encrypted`,`encrypted`,`ended`,`ended`,`error`,`error`,`gotpointercapture`,`gotPointerCapture`,`load`,`load`,`loadeddata`,`loadedData`,`loadedmetadata`,`loadedMetadata`,`loadstart`,`loadStart`,`lostpointercapture`,`lostPointerCapture`,`playing`,`playing`,`progress`,`progress`,`seeking`,`seeking`,`stalled`,`stalled`,`suspend`,`suspend`,`timeupdate`,`timeUpdate`,tn,`transitionEnd`,`waiting`,`waiting`];function on(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i=`on`+(i[0].toUpperCase()+i.slice(1)),rn.set(r,t),nn.set(r,i),s(i,[r])}}var sn=r.unstable_now;sn();var R=8;function cn(e){if(1&e)return R=15,1;if(2&e)return R=14,2;if(4&e)return R=13,4;var t=24&e;return t===0?e&32?(R=11,32):(t=192&e,t===0?e&256?(R=9,256):(t=3584&e,t===0?e&4096?(R=7,4096):(t=4186112&e,t===0?(t=62914560&e,t===0?e&67108864?(R=4,67108864):e&134217728?(R=3,134217728):(t=805306368&e,t===0?1073741824&e?(R=1,1073741824):(R=8,e):(R=2,t)):(R=5,t)):(R=6,t)):(R=8,t)):(R=10,t)):(R=12,t)}function ln(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function un(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}function dn(e,t){var n=e.pendingLanes;if(n===0)return R=0;var r=0,i=0,a=e.expiredLanes,o=e.suspendedLanes,s=e.pingedLanes;if(a!==0)r=a,i=R=15;else if(a=n&134217727,a!==0){var c=a&~o;c===0?(s&=a,s!==0&&(r=cn(s),i=R)):(r=cn(c),i=R)}else a=n&~o,a===0?s!==0&&(r=cn(s),i=R):(r=cn(a),i=R);if(r===0)return 0;if(r=31-_n(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&o)===0){if(cn(t),i<=R)return t;R=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_n(t),i=1<<n,r|=e[n],t&=~i;return r}function fn(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function pn(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=mn(24&~t),e===0?pn(10,t):e;case 10:return e=mn(192&~t),e===0?pn(8,t):e;case 8:return e=mn(3584&~t),e===0&&(e=mn(4186112&~t),e===0&&(e=512)),e;case 2:return t=mn(805306368&~t),t===0&&(t=268435456),t}throw Error(i(358,e))}function mn(e){return e&-e}function hn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gn(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-_n(t),e[t]=n}var _n=Math.clz32?Math.clz32:bn,vn=Math.log,yn=Math.LN2;function bn(e){return e===0?32:31-(vn(e)/yn|0)|0}var xn=r.unstable_UserBlockingPriority,Sn=r.unstable_runWithPriority,Cn=!0;function wn(e,t,n,r){rt||tt();var i=En,a=rt;rt=!0;try{et(i,e,t,n,r)}finally{(rt=a)||at()}}function Tn(e,t,n,r){Sn(xn,En.bind(null,e,t,n,r))}function En(e,t,n,r){if(Cn){var i;if((i=(t&4)==0)&&0<kt.length&&-1<It.indexOf(e))e=Lt(null,e,t,n,r),kt.push(e);else{var a=Dn(e,t,n,r);if(a===null)i&&Rt(e,r);else{if(i){if(-1<It.indexOf(e)){e=Lt(a,e,t,n,r),kt.push(e);return}if(Bt(a,e,t,n,r))return;Rt(e,r)}si(e,t,r,null,n)}}}}function Dn(e,t,n,r){var i=Ke(r);if(i=ki(i),i!==null){var a=vt(i);if(a===null)i=null;else{var o=a.tag;if(o===13){if(i=yt(a),i!==null)return i;i=null}else if(o===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return si(e,t,r,i,n),null}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return n(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=n({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=n({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(n({},Un,{dataTransfer:0})),Kn=Fn(n({},Rn,{relatedTarget:0})),qn=Fn(n({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(n({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(n({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(n({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(n({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(n({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=Fn(n({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=Fn(n({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=u&&`CompositionEvent`in window,cr=null;u&&`documentMode`in document&&(cr=document.documentMode);var lr=u&&`TextEvent`in window&&!cr,ur=u&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=jn(),An=kn=On=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){Ze(r),t=li(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){ni(e,0)}function wr(e){if(ye(ji(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(u){var Dr;if(u){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];if(br(t,Sr,e,Ke(e)),e=Cr,rt)e(t);else{rt=!0;try{$e(e,t)}finally{rt=!1,at()}}}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir,Rr=Object.prototype.hasOwnProperty;function zr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Rr.call(t,n[r])||!Lr(e[n[r]],t[n[r]]))return!1;return!0}function Br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vr(e,t){var n=Br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Br(n)}}function Hr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ur(){for(var e=window,t=be();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=be(e.document)}return t}function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Gr=u&&`documentMode`in document&&11>=document.documentMode,Kr=null,qr=null,Jr=null,Yr=!1;function Xr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yr||Kr==null||Kr!==be(r)||(r=Kr,`selectionStart`in r&&Wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&zr(Jr,r)||(Jr=r,r=li(qr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}on(`cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange`.split(` `),0),on(`drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel`.split(` `),1),on(an,2);for(var Zr=`change selectionchange textInput compositionstart compositionend compositionupdate`.split(` `),Qr=0;Qr<Zr.length;Qr++)rn.set(Zr[Qr],0);c(`onMouseEnter`,[`mouseout`,`mouseover`]),c(`onMouseLeave`,[`mouseout`,`mouseover`]),c(`onPointerEnter`,[`pointerout`,`pointerover`]),c(`onPointerLeave`,[`pointerout`,`pointerover`]),s(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),s(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),s(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),s(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),s(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),s(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var $r=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ei=new Set(`cancel close invalid load scroll toggle`.split(` `).concat($r));function ti(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,_t(r,t,void 0,e),e.currentTarget=null}function ni(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ti(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ti(i,s,l),a=c}}}if(pt)throw e=mt,pt=!1,mt=null,e}function z(e,t){var n=Ni(t),r=e+`__bubble`;n.has(r)||(oi(t,e,2,!1),n.add(r))}var ri=`_reactListening`+Math.random().toString(36).slice(2);function ii(e){e[ri]||(e[ri]=!0,a.forEach(function(t){ei.has(t)||ai(t,!1,e,null),ai(t,!0,e,null)}))}function ai(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(e===`selectionchange`&&n.nodeType!==9&&(a=n.ownerDocument),r!==null&&!t&&ei.has(e)){if(e!==`scroll`)return;i|=2,a=r}var o=Ni(a),s=e+`__`+(t?`capture`:`bubble`);o.has(s)||(t&&(i|=4),oi(a,e,i,t),o.add(s))}function oi(e,t,n,r){var i=rn.get(t);switch(i===void 0?2:i){case 0:i=wn;break;case 1:i=Tn;break;default:i=En}n=i.bind(null,t,n,e),i=void 0,!ct||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function si(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ki(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}ot(function(){var r=a,i=Ke(n),o=[];a:{var s=nn.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case Qt:case $t:case en:c=qn;break;case tn:c=ir;break;case`scroll`:c=zn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=st(p,f),h!=null&&u.push(ci(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&!(t&16)&&(l=n.relatedTarget||n.fromElement)&&(ki(l)||l[Di]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?ki(l):null,l!==null&&(d=vt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:ji(c),m=l==null?s:ji(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,ki(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=ui(m))p++;for(m=0,h=f;h;h=ui(h))m++;for(;0<p-m;)u=ui(u),p--;for(;0<m-p;)f=ui(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=ui(u),f=ui(f)}u=null}else u=null;c!==null&&di(o,s,c,u,!1),l!==null&&d!==null&&di(o,d,l,u,!0)}}a:{if(s=r?ji(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Tr;else if(yr(s))if(Er)g=Fr;else{g=Nr;var _=Mr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Pr);if(g&&=g(e,r)){br(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ee(s,`number`,s.value)}switch(_=r?ji(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(Kr=_,qr=r,Jr=null);break;case`focusout`:Jr=qr=Kr=null;break;case`mousedown`:Yr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Yr=!1,Xr(o,n,i);break;case`selectionchange`:if(Gr)break;case`keydown`:case`keyup`:Xr(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,hr=!0)),_=li(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=li(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ni(o,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function li(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=st(e,n),a!=null&&r.unshift(ci(e,a,i)),a=st(e,t),a!=null&&r.push(ci(e,a,i))),e=e.return}return r}function ui(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function di(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=st(n,a),c!=null&&o.unshift(ci(n,c,s))):i||(c=st(n,a),c!=null&&o.push(ci(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function fi(){}var pi=null,mi=null;function hi(e,t){switch(e){case`button`:case`input`:case`select`:case`textarea`:return!!t.autoFocus}return!1}function gi(e,t){return e===`textarea`||e===`option`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout==`function`?setTimeout:void 0,vi=typeof clearTimeout==`function`?clearTimeout:void 0;function yi(e){e.nodeType===1?e.textContent=``:e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=``))}function bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function xi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Si=0;function Ci(e){return{$$typeof:ce,toString:e,valueOf:e}}var wi=Math.random().toString(36).slice(2),Ti=`__reactFiber$`+wi,Ei=`__reactProps$`+wi,Di=`__reactContainer$`+wi,Oi=`__reactEvents$`+wi;function ki(e){var t=e[Ti];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Di]||n[Ti]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xi(e);e!==null;){if(n=e[Ti])return n;e=xi(e)}return t}e=n,n=e.parentNode}return null}function Ai(e){return e=e[Ti]||e[Di],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Mi(e){return e[Ei]||null}function Ni(e){var t=e[Oi];return t===void 0&&(t=e[Oi]=new Set),t}var Pi=[],Fi=-1;function Ii(e){return{current:e}}function B(e){0>Fi||(e.current=Pi[Fi],Pi[Fi]=null,Fi--)}function V(e,t){Fi++,Pi[Fi]=e.current,e.current=t}var Li={},H=Ii(Li),Ri=Ii(!1),zi=Li;function Bi(e,t){var n=e.type.contextTypes;if(!n)return Li;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Vi(e){return e=e.childContextTypes,e!=null}function Hi(){B(Ri),B(H)}function Ui(e,t,n){if(H.current!==Li)throw Error(i(168));V(H,t),V(Ri,n)}function Wi(e,t,r){var a=e.stateNode;if(e=t.childContextTypes,typeof a.getChildContext!=`function`)return r;for(var o in a=a.getChildContext(),a)if(!(o in e))throw Error(i(108,me(t)||`Unknown`,o));return n({},r,a)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Li,zi=H.current,V(H,e),V(Ri,Ri.current),!0}function Ki(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Wi(e,t,zi),r.__reactInternalMemoizedMergedChildContext=e,B(Ri),B(H),V(H,e)):B(Ri),V(Ri,n)}var qi=null,Ji=null,Yi=r.unstable_runWithPriority,Xi=r.unstable_scheduleCallback,Zi=r.unstable_cancelCallback,Qi=r.unstable_shouldYield,$i=r.unstable_requestPaint,ea=r.unstable_now,ta=r.unstable_getCurrentPriorityLevel,na=r.unstable_ImmediatePriority,ra=r.unstable_UserBlockingPriority,ia=r.unstable_NormalPriority,aa=r.unstable_LowPriority,oa=r.unstable_IdlePriority,sa={},ca=$i===void 0?function(){}:$i,la=null,ua=null,da=!1,fa=ea(),U=1e4>fa?ea:function(){return ea()-fa};function pa(){switch(ta()){case na:return 99;case ra:return 98;case ia:return 97;case aa:return 96;case oa:return 95;default:throw Error(i(332))}}function ma(e){switch(e){case 99:return na;case 98:return ra;case 97:return ia;case 96:return aa;case 95:return oa;default:throw Error(i(332))}}function ha(e,t){return e=ma(e),Yi(e,t)}function ga(e,t,n){return e=ma(e),Xi(e,t,n)}function _a(){if(ua!==null){var e=ua;ua=null,Zi(e)}va()}function va(){if(!da&&la!==null){da=!0;var e=0;try{var t=la;ha(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),la=null}catch(t){throw la!==null&&(la=la.slice(e+1)),Xi(na,_a),t}finally{da=!1}}}var ya=w.ReactCurrentBatchConfig;function ba(e,t){if(e&&e.defaultProps){for(var r in t=n({},t),e=e.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var xa=Ii(null),Sa=null,Ca=null,wa=null;function Ta(){wa=Ca=Sa=null}function Ea(e){var t=xa.current;B(xa),e.type._context._currentValue=t}function Da(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Oa(e,t){Sa=e,wa=Ca=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ns=!0),e.firstContext=null)}function ka(e,t){if(wa!==e&&!1!==t&&t!==0)if((typeof t!=`number`||t===1073741823)&&(wa=e,t=1073741823),t={context:e,observedBits:t,next:null},Ca===null){if(Sa===null)throw Error(i(308));Ca=t,Sa.dependencies={lanes:0,firstContext:t,responders:null}}else Ca=Ca.next=t;return e._currentValue}var Aa=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Na(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ia(e,t,r,i){var a=e.updateQueue;Aa=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var l=c,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;if(d!==null){d=d.updateQueue;var f=d.lastBaseUpdate;f!==s&&(f===null?d.firstBaseUpdate=u:f.next=u,d.lastBaseUpdate=l)}}if(o!==null){f=a.baseState,s=0,d=u=l=null;do{c=o.lane;var p=o.eventTime;if((i&c)===c){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});a:{var m=e,h=o;switch(c=t,p=r,h.tag){case 1:if(m=h.payload,typeof m==`function`){f=m.call(p,f,c);break a}f=m;break a;case 3:m.flags=m.flags&-4097|64;case 0:if(m=h.payload,c=typeof m==`function`?m.call(p,f,c):m,c==null)break a;f=n({},f,c);break a;case 2:Aa=!0}}o.callback!==null&&(e.flags|=32,c=a.effects,c===null?a.effects=[o]:c.push(o))}else p={eventTime:p,lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=c;if(o=o.next,o===null){if(c=a.shared.pending,c===null)break;o=c.next,c.next=null,a.lastBaseUpdate=c,a.shared.pending=null}}while(1);d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,tc|=s,e.lanes=s,e.memoizedState=f}}function La(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!=`function`)throw Error(i(191,a));a.call(r)}}}var Ra=new t.Component().refs;function za(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:n({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ba={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wc(),i=Tc(e),a=Na(r,i);a.payload=t,n!=null&&(a.callback=n),Pa(e,a),Ec(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wc(),i=Tc(e),a=Na(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),Pa(e,a),Ec(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wc(),r=Tc(e),i=Na(n,r);i.tag=2,t!=null&&(i.callback=t),Pa(e,i),Ec(e,r,n)}};function Va(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,a):!0}function Ha(e,t,n){var r=!1,i=Li,a=t.contextType;return typeof a==`object`&&a?a=ka(a):(i=Vi(t)?zi:H.current,r=t.contextTypes,a=(r=r!=null)?Bi(e,i):Li),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ua(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function Wa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ra,ja(e);var a=t.contextType;typeof a==`object`&&a?i.context=ka(a):(a=Vi(t)?zi:H.current,i.context=Bi(e,a)),Ia(e,n,i,r),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(za(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ba.enqueueReplaceState(i,i.state,null),Ia(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4)}var Ga=Array.isArray;function Ka(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===a?t.ref:(t=function(e){var t=r.refs;t===Ra&&(t=r.refs={}),e===null?delete t[a]:t[a]=e},t._stringRef=a,t)}if(typeof e!=`string`)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function qa(e,t){if(e.type!==`textarea`)throw Error(i(31,Object.prototype.toString.call(t)===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:t))}function Ja(e){function t(t,n){if(e){var r=t.lastEffect;r===null?t.firstEffect=t.lastEffect=n:(r.nextEffect=n,t.lastEffect=n),n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=sl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags=2,n):(r=r.index,r<n?(t.flags=2,n):r)):n}function s(t){return e&&t.alternate===null&&(t.flags=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=dl(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){return t!==null&&t.elementType===n.type?(r=a(t,n.props),r.ref=Ka(e,t,n),r.return=e,r):(r=cl(n.type,n.key,n.props,null,e.mode,r),r.ref=Ka(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fl(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ll(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`||typeof t==`number`)return t=dl(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case T:return n=cl(t.type,t.key,t.props,null,e.mode,n),n.ref=Ka(e,null,t),n.return=e,n;case E:return t=fl(t,e.mode,n),t.return=e,t}if(Ga(t)||P(t))return t=ll(t,e.mode,n,null),t.return=e,t;qa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case T:return n.key===i?n.type===D?d(e,t,n.props.children,r,i):l(e,t,n,r):null;case E:return n.key===i?u(e,t,n,r):null}if(Ga(n)||P(n))return i===null?d(e,t,n,r,null):null;qa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case T:return e=e.get(r.key===null?n:r.key)||null,r.type===D?d(t,e,r.props.children,i,r.key):l(t,e,r,i);case E:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i)}if(Ga(r)||P(r))return e=e.get(n)||null,d(t,e,r,i,null);qa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return l}for(d=r(i,d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),l}function g(a,s,c,l){var u=P(c);if(typeof u!=`function`)throw Error(i(150));if(c=u.call(c),c==null)throw Error(i(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return u}for(h=r(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),u}return function(e,r,o,c){var l=typeof o==`object`&&!!o&&o.type===D&&o.key===null;l&&(o=o.props.children);var u=typeof o==`object`&&!!o;if(u)switch(o.$$typeof){case T:a:{for(u=o.key,l=r;l!==null;){if(l.key===u){switch(l.tag){case 7:if(o.type===D){n(e,l.sibling),r=a(l,o.props.children),r.return=e,e=r;break a}break;default:if(l.elementType===o.type){n(e,l.sibling),r=a(l,o.props),r.ref=Ka(e,l,o),r.return=e,e=r;break a}}n(e,l);break}else t(e,l);l=l.sibling}o.type===D?(r=ll(o.props.children,e.mode,c,o.key),r.return=e,e=r):(c=cl(o.type,o.key,o.props,null,e.mode,c),c.ref=Ka(e,r,o),c.return=e,e=c)}return s(e);case E:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),r=a(r,o.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=fl(o,e.mode,c),r.return=e,e=r}return s(e)}if(typeof o==`string`||typeof o==`number`)return o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,o),r.return=e,e=r):(n(e,r),r=dl(o,e.mode,c),r.return=e,e=r),s(e);if(Ga(o))return h(e,r,o,c);if(P(o))return g(e,r,o,c);if(u&&qa(e,o),o===void 0&&!l)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,me(e.type)||`Component`))}return n(e,r)}}var Ya=Ja(!0),Xa=Ja(!1),Za={},Qa=Ii(Za),$a=Ii(Za),eo=Ii(Za);function to(e){if(e===Za)throw Error(i(174));return e}function no(e,t){switch(V(eo,t),V($a,e),V(Qa,Za),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ie(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ie(t,e)}B(Qa),V(Qa,t)}function ro(){B(Qa),B($a),B(eo)}function io(e){to(eo.current);var t=to(Qa.current),n=Ie(t,e.type);t!==n&&(V($a,e),V(Qa,n))}function ao(e){$a.current===e&&(B(Qa),B($a))}var W=Ii(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=null,co=null,lo=!1;function uo(e,t){var n=il(5,null,null,0);n.elementType=`DELETED`,n.type=`DELETED`,n.stateNode=t,n.return=e,n.flags=8,e.lastEffect===null?e.firstEffect=e.lastEffect=n:(e.lastEffect.nextEffect=n,e.lastEffect=n)}function fo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,!0);case 13:return!1;default:return!1}}function po(e){if(lo){var t=co;if(t){var n=t;if(!fo(e,t)){if(t=bi(n.nextSibling),!t||!fo(e,t)){e.flags=e.flags&-1025|2,lo=!1,so=e;return}uo(so,n)}so=e,co=bi(t.firstChild)}else e.flags=e.flags&-1025|2,lo=!1,so=e}}function mo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;so=e}function ho(e){if(e!==so)return!1;if(!lo)return mo(e),lo=!0,!1;var t=e.type;if(e.tag!==5||t!==`head`&&t!==`body`&&!gi(t,e.memoizedProps))for(t=co;t;)uo(e,t),t=bi(t.nextSibling);if(mo(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){co=bi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}co=null}}else co=so?bi(e.stateNode.nextSibling):null;return!0}function go(){co=so=null,lo=!1}var _o=[];function vo(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var yo=w.ReactCurrentDispatcher,bo=w.ReactCurrentBatchConfig,xo=0,G=null,K=null,q=null,So=!1,Co=!1;function wo(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,a,o){if(xo=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?Qo:$o,e=n(r,a),Co){o=0;do{if(Co=!1,!(25>o))throw Error(i(301));o+=1,q=K=null,t.updateQueue=null,yo.current=es,e=n(r,a)}while(Co)}if(yo.current=Zo,t=K!==null&&K.next!==null,xo=0,q=K=G=null,So=!1,t)throw Error(i(300));return e}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?G.memoizedState=q=e:q=q.next=e,q}function Oo(){if(K===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=K.next;var t=q===null?G.memoizedState:q.next;if(t!==null)q=t,K=e;else{if(e===null)throw Error(i(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},q===null?G.memoizedState=q=e:q=q.next=e}return q}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=K,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(a!==null){a=a.next,r=r.baseState;var c=s=o=null,l=a;do{var u=l.lane;if((xo&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var d={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};c===null?(s=c=d,o=r):c=c.next=d,G.lanes|=u,tc|=u}l=l.next}while(l!==null&&l!==a);c===null?o=r:c.next=s,Lr(r,t.memoizedState)||(ns=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function jo(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(ns=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mo(e,t,n){var r=t._getVersion;r=r(t._source);var a=t._workInProgressVersionPrimary;if(a===null?(e=e.mutableReadLanes,(e=(xo&e)===e)&&(t._workInProgressVersionPrimary=r,_o.push(t))):e=a===r,e)return n(t._source);throw _o.push(t),Error(i(350))}function No(e,t,n,r){var a=Y;if(a===null)throw Error(i(349));var o=t._getVersion,s=o(t._source),c=yo.current,l=c.useState(function(){return Mo(a,t,n)}),u=l[1],d=l[0];l=q;var f=e.memoizedState,p=f.refs,m=p.getSnapshot,h=f.source;f=f.subscribe;var g=G;return e.memoizedState={refs:p,source:t,subscribe:r},c.useEffect(function(){p.getSnapshot=n,p.setSnapshot=u;var e=o(t._source);if(!Lr(s,e)){e=n(t._source),Lr(d,e)||(u(e),e=Tc(g),a.mutableReadLanes|=e&a.pendingLanes),e=a.mutableReadLanes,a.entangledLanes|=e;for(var r=a.entanglements,i=e;0<i;){var c=31-_n(i),l=1<<c;r[c]|=e,i&=~l}}},[n,t,r]),c.useEffect(function(){return r(t._source,function(){var e=p.getSnapshot,n=p.setSnapshot;try{n(e(t._source));var r=Tc(g);a.mutableReadLanes|=r&a.pendingLanes}catch(e){n(function(){throw e})}})},[t,r]),Lr(m,n)&&Lr(h,t)&&Lr(f,r)||(e={pending:null,dispatch:null,lastRenderedReducer:ko,lastRenderedState:d},e.dispatch=u=Xo.bind(null,G,e),l.queue=e,l.baseQueue=null,d=Mo(a,t,n),l.memoizedState=l.baseState=d),d}function Po(e,t,n){return No(Oo(),e,t,n)}function Fo(e){var t=Do();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},e=e.dispatch=Xo.bind(null,G,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lo(e){var t=Do();return e={current:e},t.memoizedState=e}function Ro(){return Oo().memoizedState}function zo(e,t,n,r){var i=Do();G.flags|=e,i.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=void 0;if(K!==null){var o=K.memoizedState;if(a=o.destroy,r!==null&&To(r,o.deps)){Io(t,n,a,r);return}}G.flags|=e,i.memoizedState=Io(1|t,n,a,r)}function Vo(e,t){return zo(516,4,e,t)}function Ho(e,t){return Bo(516,4,e,t)}function Uo(e,t){return Bo(4,2,e,t)}function Wo(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Go(e,t,n){return n=n==null?null:n.concat([e]),Bo(4,2,Wo.bind(null,t,e),n)}function Ko(){}function qo(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jo(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yo(e,t){var n=pa();ha(98>n?98:n,function(){e(!0)}),ha(97<n?97:n,function(){var n=bo.transition;bo.transition=1;try{e(!1),t()}finally{bo.transition=n}})}function Xo(e,t,n){var r=wc(),i=Tc(e),a={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(o===null?a.next=a:(a.next=o.next,o.next=a),t.pending=a,o=e.alternate,e===G||o!==null&&o===G)Co=So=!0;else{if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,n);if(a.eagerReducer=o,a.eagerState=c,Lr(c,s))return}catch{}Ec(e,i,r)}}var Zo={readContext:ka,useCallback:wo,useContext:wo,useEffect:wo,useImperativeHandle:wo,useLayoutEffect:wo,useMemo:wo,useReducer:wo,useRef:wo,useState:wo,useDebugValue:wo,useDeferredValue:wo,useTransition:wo,useMutableSource:wo,useOpaqueIdentifier:wo,unstable_isNewReconciler:!1},Qo={readContext:ka,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:ka,useEffect:Vo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),zo(4,2,Wo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=Do();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Do();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Xo.bind(null,G,e),[r.memoizedState,e]},useRef:Lo,useState:Fo,useDebugValue:Ko,useDeferredValue:function(e){var t=Fo(e),n=t[0],r=t[1];return Vo(function(){var t=bo.transition;bo.transition=1;try{r(e)}finally{bo.transition=t}},[e]),n},useTransition:function(){var e=Fo(!1),t=e[0];return e=Yo.bind(null,e[1]),Lo(e),[e,t]},useMutableSource:function(e,t,n){var r=Do();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},No(r,e,t,n)},useOpaqueIdentifier:function(){if(lo){var e=!1,t=Ci(function(){throw e||(e=!0,n(`r:`+(Si++).toString(36))),Error(i(355))}),n=Fo(t)[1];return!(G.mode&2)&&(G.flags|=516,Io(5,function(){n(`r:`+(Si++).toString(36))},void 0,null)),t}return t=`r:`+(Si++).toString(36),Fo(t),t},unstable_isNewReconciler:!1},$o={readContext:ka,useCallback:qo,useContext:ka,useEffect:Ho,useImperativeHandle:Go,useLayoutEffect:Uo,useMemo:Jo,useReducer:Ao,useRef:Ro,useState:function(){return Ao(ko)},useDebugValue:Ko,useDeferredValue:function(e){var t=Ao(ko),n=t[0],r=t[1];return Ho(function(){var t=bo.transition;bo.transition=1;try{r(e)}finally{bo.transition=t}},[e]),n},useTransition:function(){var e=Ao(ko)[0];return[Ro().current,e]},useMutableSource:Po,useOpaqueIdentifier:function(){return Ao(ko)[0]},unstable_isNewReconciler:!1},es={readContext:ka,useCallback:qo,useContext:ka,useEffect:Ho,useImperativeHandle:Go,useLayoutEffect:Uo,useMemo:Jo,useReducer:jo,useRef:Ro,useState:function(){return jo(ko)},useDebugValue:Ko,useDeferredValue:function(e){var t=jo(ko),n=t[0],r=t[1];return Ho(function(){var t=bo.transition;bo.transition=1;try{r(e)}finally{bo.transition=t}},[e]),n},useTransition:function(){var e=jo(ko)[0];return[Ro().current,e]},useMutableSource:Po,useOpaqueIdentifier:function(){return jo(ko)[0]},unstable_isNewReconciler:!1},ts=w.ReactCurrentOwner,ns=!1;function rs(e,t,n,r){t.child=e===null?Xa(t,null,n,r):Ya(t,e.child,n,r)}function is(e,t,n,r,i){n=n.render;var a=t.ref;return Oa(t,i),r=Eo(e,t,n,r,a,i),e!==null&&!ns?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,xs(e,t,i)):(t.flags|=1,rs(e,t,r,i),t.child)}function as(e,t,n,r,i,a){if(e===null){var o=n.type;return typeof o==`function`&&!al(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,os(e,t,o,r,i,a)):(e=cl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}return o=e.child,(i&a)===0&&(i=o.memoizedProps,n=n.compare,n=n===null?zr:n,n(i,r)&&e.ref===t.ref)?xs(e,t,a):(t.flags|=1,e=sl(o,r),e.ref=t.ref,e.return=t,t.child=e)}function os(e,t,n,r,i,a){if(e!==null&&zr(e.memoizedProps,r)&&e.ref===t.ref)if(ns=!1,(a&i)!==0)e.flags&16384&&(ns=!0);else return t.lanes=e.lanes,xs(e,t,a);return ls(e,t,n,r,a)}function ss(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`||r.mode===`unstable-defer-without-hiding`)if(!(t.mode&4))t.memoizedState={baseLanes:0},Fc(t,n);else if(n&1073741824)t.memoizedState={baseLanes:0},Fc(t,a===null?n:a.baseLanes);else return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Fc(t,e),null;else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Fc(t,r);return rs(e,t,i,n),t.child}function cs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function ls(e,t,n,r,i){var a=Vi(n)?zi:H.current;return a=Bi(t,a),Oa(t,i),n=Eo(e,t,n,r,a,i),e!==null&&!ns?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,xs(e,t,i)):(t.flags|=1,rs(e,t,n,i),t.child)}function us(e,t,n,r,i){if(Vi(n)){var a=!0;Gi(t)}else a=!1;if(Oa(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Ha(t,n,r),Wa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=ka(l):(l=Vi(n)?zi:H.current,l=Bi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ua(t,o,r,l),Aa=!1;var f=t.memoizedState;o.state=f,Ia(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Ri.current||Aa?(typeof u==`function`&&(za(t,n,u,r),c=t.memoizedState),(s=Aa||Va(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4)):(typeof o.componentDidMount==`function`&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4),r=!1)}else{o=t.stateNode,Ma(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:ba(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=ka(c):(c=Vi(n)?zi:H.current,c=Bi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ua(t,o,r,c),Aa=!1,f=t.memoizedState,o.state=f,Ia(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Ri.current||Aa?(typeof p==`function`&&(za(t,n,p,r),m=t.memoizedState),(l=Aa||Va(t,n,l,r,f,m,c))?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=256)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return ds(e,t,n,r,a,i)}function ds(e,t,n,r,i,a){cs(e,t);var o=(t.flags&64)!=0;if(!r&&!o)return i&&Ki(t,n,!1),xs(e,t,a);r=t.stateNode,ts.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ya(t,e.child,null,a),t.child=Ya(t,null,s,a)):rs(e,t,s,a),t.memoizedState=r.state,i&&Ki(t,n,!0),t.child}function fs(e){var t=e.stateNode;t.pendingContext?Ui(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ui(e,t.context,!1),no(e,t.containerInfo)}var ps={dehydrated:null,retryLane:0};function ms(e,t,n){var r=t.pendingProps,i=W.current,a=!1,o;return(o=(t.flags&64)!=0)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!=0),o?(a=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||!0===r.unstable_avoidThisFallback||(i|=1),V(W,i&1),e===null?(r.fallback!==void 0&&po(t),e=r.children,i=r.fallback,a?(e=hs(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ps,e):typeof r.unstable_expectedLoadTime==`number`?(e=hs(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ps,t.lanes=33554432,e):(n=ul({mode:`visible`,children:e},t.mode,n,null),n.return=t,t.child=n)):(e.memoizedState,a?(r=_s(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=ps,r):(n=gs(e,t,r.children,n),t.memoizedState=null,n))}function hs(e,t,n,r){var i=e.mode,a=e.child;return t={mode:`hidden`,children:t},!(i&2)&&a!==null?(a.childLanes=0,a.pendingProps=t):a=ul(t,i,0,null),n=ll(n,i,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function gs(e,t,n,r){var i=e.child;return e=i.sibling,n=sl(i,{mode:`visible`,children:n}),!(t.mode&2)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function _s(e,t,n,r,i){var a=t.mode,o=e.child;e=o.sibling;var s={mode:`hidden`,children:n};return!(a&2)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,o=n.lastEffect,o===null?t.firstEffect=t.lastEffect=null:(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null)):n=sl(o,s),e===null?(r=ll(r,a,i,null),r.flags|=2):r=sl(e,r),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function vs(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Da(e.return,t)}function ys(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=a)}function bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(rs(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=64;else{if(e!==null&&e.flags&64)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vs(e,n);else if(e.tag===19)vs(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(W,r),!(t.mode&2))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ys(t,!1,i,n,a,t.lastEffect);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ys(t,!0,n,null,a,t.lastEffect);break;case`together`:ys(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function xs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tc|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=sl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Ss=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Cs=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,to(Qa.current);var s=null;switch(r){case`input`:a=xe(e,a),i=xe(e,i),s=[];break;case`option`:a=Oe(e,a),i=Oe(e,i),s=[];break;case`select`:a=n({},a,{value:void 0}),i=n({},i,{value:void 0}),s=[];break;case`textarea`:a=Ae(e,a),i=Ae(e,i),s=[];break;default:typeof a.onClick!=`function`&&typeof i.onClick==`function`&&(e.onclick=fi)}We(r,i);var c;for(d in r=null,a)if(!i.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d===`style`){var l=a[d];for(c in l)l.hasOwnProperty(c)&&(r||={},r[c]=``)}else d!==`dangerouslySetInnerHTML`&&d!==`children`&&d!==`suppressContentEditableWarning`&&d!==`suppressHydrationWarning`&&d!==`autoFocus`&&(o.hasOwnProperty(d)?s||=[]:(s||=[]).push(d,null));for(d in i){var u=i[d];if(l=a?.[d],i.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d===`style`)if(l){for(c in l)!l.hasOwnProperty(c)||u&&u.hasOwnProperty(c)||(r||={},r[c]=``);for(c in u)u.hasOwnProperty(c)&&l[c]!==u[c]&&(r||={},r[c]=u[c])}else r||(s||=[],s.push(d,r)),r=u;else d===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s||=[]).push(d,u)):d===`children`?typeof u!=`string`&&typeof u!=`number`||(s||=[]).push(d,``+u):d!==`suppressContentEditableWarning`&&d!==`suppressHydrationWarning`&&(o.hasOwnProperty(d)?(u!=null&&d===`onScroll`&&z(`scroll`,e),s||l===u||(s=[])):typeof u==`object`&&u&&u.$$typeof===ce?u.toString():(s||=[]).push(d,u))}r&&(s||=[]).push(`style`,r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}},ws=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ts(e,t){if(!lo)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Es(e,t,r){var a=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Vi(t.type)&&Hi(),null;case 3:return ro(),B(Ri),B(H),vo(),a=t.stateNode,a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:a.hydrate||(t.flags|=256)),null;case 5:ao(t);var s=to(eo.current);if(r=t.type,e!==null&&t.stateNode!=null)Cs(e,t,r,a,s),e.ref!==t.ref&&(t.flags|=128);else{if(!a){if(t.stateNode===null)throw Error(i(166));return null}if(e=to(Qa.current),ho(t)){a=t.stateNode,r=t.type;var c=t.memoizedProps;switch(a[Ti]=t,a[Ei]=c,r){case`dialog`:z(`cancel`,a),z(`close`,a);break;case`iframe`:case`object`:case`embed`:z(`load`,a);break;case`video`:case`audio`:for(e=0;e<$r.length;e++)z($r[e],a);break;case`source`:z(`error`,a);break;case`img`:case`image`:case`link`:z(`error`,a),z(`load`,a);break;case`details`:z(`toggle`,a);break;case`input`:Se(a,c),z(`invalid`,a);break;case`select`:a._wrapperState={wasMultiple:!!c.multiple},z(`invalid`,a);break;case`textarea`:je(a,c),z(`invalid`,a)}for(var l in We(r,c),e=null,c)c.hasOwnProperty(l)&&(s=c[l],l===`children`?typeof s==`string`?a.textContent!==s&&(e=[`children`,s]):typeof s==`number`&&a.textContent!==``+s&&(e=[`children`,``+s]):o.hasOwnProperty(l)&&s!=null&&l===`onScroll`&&z(`scroll`,a));switch(r){case`input`:ve(a),Te(a,c,!0);break;case`textarea`:ve(a),Ne(a);break;case`select`:case`option`:break;default:typeof c.onClick==`function`&&(a.onclick=fi)}a=e,t.updateQueue=a,a!==null&&(t.flags|=4)}else{switch(l=s.nodeType===9?s:s.ownerDocument,e===Pe.html&&(e=Fe(r)),e===Pe.html?r===`script`?(e=l.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof a.is==`string`?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),r===`select`&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[Ti]=t,e[Ei]=a,Ss(e,t,!1,!1),t.stateNode=e,l=Ge(r,a),r){case`dialog`:z(`cancel`,e),z(`close`,e),s=a;break;case`iframe`:case`object`:case`embed`:z(`load`,e),s=a;break;case`video`:case`audio`:for(s=0;s<$r.length;s++)z($r[s],e);s=a;break;case`source`:z(`error`,e),s=a;break;case`img`:case`image`:case`link`:z(`error`,e),z(`load`,e),s=a;break;case`details`:z(`toggle`,e),s=a;break;case`input`:Se(e,a),s=xe(e,a),z(`invalid`,e);break;case`option`:s=Oe(e,a);break;case`select`:e._wrapperState={wasMultiple:!!a.multiple},s=n({},a,{value:void 0}),z(`invalid`,e);break;case`textarea`:je(e,a),s=Ae(e,a),z(`invalid`,e);break;default:s=a}We(r,s);var u=s;for(c in u)if(u.hasOwnProperty(c)){var d=u[c];c===`style`?He(e,d):c===`dangerouslySetInnerHTML`?(d=d?d.__html:void 0,d!=null&&Re(e,d)):c===`children`?typeof d==`string`?(r!==`textarea`||d!==``)&&ze(e,d):typeof d==`number`&&ze(e,``+d):c!==`suppressContentEditableWarning`&&c!==`suppressHydrationWarning`&&c!==`autoFocus`&&(o.hasOwnProperty(c)?d!=null&&c===`onScroll`&&z(`scroll`,e):d!=null&&ee(e,c,d,l))}switch(r){case`input`:ve(e),Te(e,a,!1);break;case`textarea`:ve(e),Ne(e);break;case`option`:a.value!=null&&e.setAttribute(`value`,``+he(a.value));break;case`select`:e.multiple=!!a.multiple,c=a.value,c==null?a.defaultValue!=null&&ke(e,!!a.multiple,a.defaultValue,!0):ke(e,!!a.multiple,c,!1);break;default:typeof s.onClick==`function`&&(e.onclick=fi)}hi(r,a)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)ws(e,t,e.memoizedProps,a);else{if(typeof a!=`string`&&t.stateNode===null)throw Error(i(166));r=to(eo.current),to(Qa.current),ho(t)?(a=t.stateNode,r=t.memoizedProps,a[Ti]=t,a.nodeValue!==r&&(t.flags|=4)):(a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Ti]=t,t.stateNode=a)}return null;case 13:return B(W),a=t.memoizedState,t.flags&64?(t.lanes=r,t):(a=a!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&ho(t):r=e.memoizedState!==null,a&&!r&&t.mode&2&&(e===null&&!0!==t.memoizedProps.unstable_avoidThisFallback||W.current&1?Q===0&&(Q=3):((Q===0||Q===3)&&(Q=4),Y===null||!(tc&134217727)&&!(nc&134217727)||Ac(Y,Z))),(a||r)&&(t.flags|=4),null);case 4:return ro(),e===null&&ii(t.stateNode.containerInfo),null;case 10:return Ea(t),null;case 17:return Vi(t.type)&&Hi(),null;case 19:if(B(W),a=t.memoizedState,a===null)return null;if(c=(t.flags&64)!=0,l=a.rendering,l===null)if(c)Ts(a,!1);else{if(Q!==0||e!==null&&e.flags&64)for(e=t.child;e!==null;){if(l=oo(e),l!==null){for(t.flags|=64,Ts(a,!1),c=l.updateQueue,c!==null&&(t.updateQueue=c,t.flags|=4),a.lastEffect===null&&(t.firstEffect=null),t.lastEffect=a.lastEffect,a=r,r=t.child;r!==null;)c=r,e=a,c.flags&=2,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null,l=c.alternate,l===null?(c.childLanes=0,c.lanes=e,c.child=null,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=l.childLanes,c.lanes=l.lanes,c.child=l.child,c.memoizedProps=l.memoizedProps,c.memoizedState=l.memoizedState,c.updateQueue=l.updateQueue,c.type=l.type,e=l.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return V(W,W.current&1|2),t.child}e=e.sibling}a.tail!==null&&U()>oc&&(t.flags|=64,c=!0,Ts(a,!1),t.lanes=33554432)}else{if(!c)if(e=oo(l),e!==null){if(t.flags|=64,c=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ts(a,!0),a.tail===null&&a.tailMode===`hidden`&&!l.alternate&&!lo)return t=t.lastEffect=a.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*U()-a.renderingStartTime>oc&&r!==1073741824&&(t.flags|=64,c=!0,Ts(a,!1),t.lanes=33554432);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r===null?t.child=l:r.sibling=l,a.last=l)}return a.tail===null?null:(r=a.tail,a.rendering=r,a.tail=r.sibling,a.lastEffect=t.lastEffect,a.renderingStartTime=U(),r.sibling=null,t=W.current,V(W,c?t&1|2:t&1),r);case 23:case 24:return Ic(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&a.mode!==`unstable-defer-without-hiding`&&(t.flags|=4),null}throw Error(i(156,t.tag))}function Ds(e){switch(e.tag){case 1:Vi(e.type)&&Hi();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(ro(),B(Ri),B(H),vo(),t=e.flags,t&64)throw Error(i(285));return e.flags=t&-4097|64,e;case 5:return ao(e),null;case 13:return B(W),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return B(W),null;case 4:return ro(),null;case 10:return Ea(e),null;case 23:case 24:return Ic(),null;default:return null}}function Os(e,t){try{var n=``,r=t;do n+=pe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i}}function ks(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var As=typeof WeakMap==`function`?WeakMap:Map;function js(e,t,n){n=Na(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cc||(cc=!0,lc=r),ks(e,t)},n}function Ms(e,t,n){n=Na(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return ks(e,t),r(i)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){typeof r!=`function`&&(uc===null?uc=new Set([this]):uc.add(this),ks(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}var Ns=typeof WeakSet==`function`?WeakSet:Set;function Ps(e){var t=e.ref;if(t!==null)if(typeof t==`function`)try{t(null)}catch(t){$c(e,t)}else t.current=null}function Fs(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:ba(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&yi(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(i(163))}function Is(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t===null?null:t.lastEffect,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t===null?null:t.lastEffect,t!==null){e=t=t.next;do{var a=e;r=a.next,a=a.tag,a&4&&a&1&&(Xc(n,e),Yc(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ba(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&La(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}La(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&hi(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Kt(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(i(163))}function Ls(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`;else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty(`display`)?i.display:null,r.style.display=Ve(`display`,i)}}else if(n.tag===6)n.stateNode.nodeValue=t?``:n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Rs(e,t){if(Ji&&typeof Ji.onCommitFiberUnmount==`function`)try{Ji.onCommitFiberUnmount(qi,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if(r&4)Xc(t,n);else{r=t;try{i()}catch(e){$c(r,e)}}n=n.next}while(n!==e)}break;case 1:if(Ps(t),e=t.stateNode,typeof e.componentWillUnmount==`function`)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){$c(t,e)}break;case 5:Ps(t);break;case 4:Ws(e,t)}}function zs(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Bs(e){return e.tag===5||e.tag===3||e.tag===4}function Vs(e){a:{for(var t=e.return;t!==null;){if(Bs(t))break a;t=t.return}throw Error(i(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(i(161))}n.flags&16&&(ze(t,``),n.flags&=-17);a:b:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Bs(n.return)){n=null;break a}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue b;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break a}}r?Hs(e,n,t):Us(e,n,t)}function Hs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Us(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}function Ws(e,t){for(var n=t,r=!1,a,o;;){if(!r){r=n.return;a:for(;;){if(r===null)throw Error(i(160));switch(a=r.stateNode,r.tag){case 5:o=!1;break a;case 3:a=a.containerInfo,o=!0;break a;case 4:a=a.containerInfo,o=!0;break a}r=r.return}r=!0}if(n.tag===5||n.tag===6){a:for(var s=e,c=n,l=c;;)if(Rs(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===c)break a;for(;l.sibling===null;){if(l.return===null||l.return===c)break a;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=a,c=n.stateNode,s.nodeType===8?s.parentNode.removeChild(c):s.removeChild(c)):a.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){a=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(Rs(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Gs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n===null?null:n.lastEffect,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var a=e===null?r:e.memoizedProps;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Ei]=r,e===`input`&&r.type===`radio`&&r.name!=null&&Ce(n,r),Ge(e,a),t=Ge(e,r),a=0;a<o.length;a+=2){var s=o[a],c=o[a+1];s===`style`?He(n,c):s===`dangerouslySetInnerHTML`?Re(n,c):s===`children`?ze(n,c):ee(n,s,c,t)}switch(e){case`input`:we(n,r);break;case`textarea`:Me(n,r);break;case`select`:e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o==null?e!==!!r.multiple&&(r.defaultValue==null?ke(n,!!r.multiple,r.multiple?[]:``,!1):ke(n,!!r.multiple,r.defaultValue,!0)):ke(n,!!r.multiple,o,!1)}}}return;case 6:if(t.stateNode===null)throw Error(i(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Kt(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(ac=U(),Ls(t.child,!0)),Ks(t);return;case 19:Ks(t);return;case 17:return;case 23:case 24:Ls(t,t.memoizedState!==null);return}throw Error(i(163))}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ns),t.forEach(function(t){var r=tl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function qs(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Js=Math.ceil,Ys=w.ReactCurrentDispatcher,Xs=w.ReactCurrentOwner,J=0,Y=null,X=null,Z=0,Zs=0,Qs=Ii(0),Q=0,$s=null,ec=0,tc=0,nc=0,rc=0,ic=null,ac=0,oc=1/0;function sc(){oc=U()+500}var $=null,cc=!1,lc=null,uc=null,dc=!1,fc=null,pc=90,mc=[],hc=[],gc=null,_c=0,vc=null,yc=-1,bc=0,xc=0,Sc=null,Cc=!1;function wc(){return J&48?U():yc===-1?yc=U():yc}function Tc(e){if(e=e.mode,!(e&2))return 1;if(!(e&4))return pa()===99?1:2;if(bc===0&&(bc=ec),ya.transition!==0){xc!==0&&(xc=ic===null?0:ic.pendingLanes),e=bc;var t=4186112&~xc;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=pa(),J&4&&e===98?e=pn(12,bc):(e=ln(e),e=pn(e,bc)),e}function Ec(e,t,n){if(50<_c)throw _c=0,vc=null,Error(i(185));if(e=Dc(e,t),e===null)return null;gn(e,t,n),e===Y&&(nc|=t,Q===4&&Ac(e,Z));var r=pa();t===1?J&8&&!(J&48)?jc(e):(Oc(e,n),J===0&&(sc(),_a())):(!(J&4)||r!==98&&r!==99||(gc===null?gc=new Set([e]):gc.add(e)),Oc(e,n)),ic=e}function Dc(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Oc(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-_n(o),c=1<<s,l=a[s];if(l===-1){if((c&r)===0||(c&i)!==0){l=t,cn(c);var u=R;a[s]=10<=u?l+250:6<=u?l+5e3:-1}}else l<=t&&(e.expiredLanes|=c);o&=~c}if(r=dn(e,e===Y?Z:0),t=R,r===0)n!==null&&(n!==sa&&Zi(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==sa&&Zi(n)}t===15?(n=jc.bind(null,e),la===null?(la=[n],ua=Xi(na,va)):la.push(n),n=sa):t===14?n=ga(99,jc.bind(null,e)):(n=un(t),n=ga(n,kc.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function kc(e){if(yc=-1,xc=bc=0,J&48)throw Error(i(327));var t=e.callbackNode;if(Jc()&&e.callbackNode!==t)return null;var n=dn(e,e===Y?Z:0);if(n===0)return null;var r=n,a=J;J|=16;var o=zc();(Y!==e||Z!==r)&&(sc(),Lc(e,r));do try{Hc();break}catch(t){Rc(e,t)}while(1);if(Ta(),Ys.current=o,J=a,X===null?(Y=null,Z=0,r=Q):r=0,(ec&nc)!==0)Lc(e,0);else if(r!==0){if(r===2&&(J|=64,e.hydrate&&(e.hydrate=!1,yi(e.containerInfo)),n=fn(e),n!==0&&(r=Bc(e,n))),r===1)throw t=$s,Lc(e,0),Ac(e,n),Oc(e,U()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Gc(e);break;case 3:if(Ac(e,n),(n&62914560)===n&&(r=ac+500-U(),10<r)){if(dn(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){wc(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_i(Gc.bind(null,e),r);break}Gc(e);break;case 4:if(Ac(e,n),(n&4186112)===n)break;for(r=e.eventTimes,a=-1;0<n;){var s=31-_n(n);o=1<<s,s=r[s],s>a&&(a=s),n&=~o}if(n=a,n=U()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Js(n/1960))-n,10<n){e.timeoutHandle=_i(Gc.bind(null,e),n);break}Gc(e);break;case 5:Gc(e);break;default:throw Error(i(329))}}return Oc(e,U()),e.callbackNode===t?kc.bind(null,e):null}function Ac(e,t){for(t&=~rc,t&=~nc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_n(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(J&48)throw Error(i(327));if(Jc(),e===Y&&(e.expiredLanes&Z)!==0){var t=Z,n=Bc(e,t);(ec&nc)!==0&&(t=dn(e,t),n=Bc(e,t))}else t=dn(e,0),n=Bc(e,t);if(e.tag!==0&&n===2&&(J|=64,e.hydrate&&(e.hydrate=!1,yi(e.containerInfo)),t=fn(e),t!==0&&(n=Bc(e,t))),n===1)throw n=$s,Lc(e,0),Ac(e,t),Oc(e,U()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gc(e),Oc(e,U()),null}function Mc(){if(gc!==null){var e=gc;gc=null,e.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Oc(e,U())})}_a()}function Nc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(sc(),_a())}}function Pc(e,t){var n=J;J&=-2,J|=8;try{return e(t)}finally{J=n,J===0&&(sc(),_a())}}function Fc(e,t){V(Qs,Zs),Zs|=t,ec|=t}function Ic(){Zs=Qs.current,B(Qs)}function Lc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vi(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hi();break;case 3:ro(),B(Ri),B(H),vo();break;case 5:ao(r);break;case 4:ro();break;case 13:B(W);break;case 19:B(W);break;case 10:Ea(r);break;case 23:case 24:Ic()}n=n.return}Y=e,X=sl(e.current,null),Z=Zs=ec=t,Q=0,$s=null,rc=nc=tc=0}function Rc(e,t){do{var n=X;try{if(Ta(),yo.current=Zo,So){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}So=!1}if(xo=0,q=K=G=null,Co=!1,Xs.current=null,n===null||n.return===null){Q=1,$s=t,X=null;break}a:{var a=e,o=n.return,s=n,c=t;if(t=Z,s.flags|=2048,s.firstEffect=s.lastEffect=null,typeof c==`object`&&c&&typeof c.then==`function`){var l=c;if(!(s.mode&2)){var u=s.alternate;u?(s.updateQueue=u.updateQueue,s.memoizedState=u.memoizedState,s.lanes=u.lanes):(s.updateQueue=null,s.memoizedState=null)}var d=(W.current&1)!=0,f=o;do{var p;if(p=f.tag===13){var m=f.memoizedState;if(m!==null)p=m.dehydrated!==null;else{var h=f.memoizedProps;p=h.fallback===void 0?!1:!0===h.unstable_avoidThisFallback?!d:!0}}if(p){var g=f.updateQueue;if(g===null){var _=new Set;_.add(l),f.updateQueue=_}else g.add(l);if(!(f.mode&2)){if(f.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var v=Na(-1,1);v.tag=2,Pa(s,v)}s.lanes|=1;break a}c=void 0,s=t;var y=a.pingCache;if(y===null?(y=a.pingCache=new As,c=new Set,y.set(l,c)):(c=y.get(l),c===void 0&&(c=new Set,y.set(l,c))),!c.has(s)){c.add(s);var b=el.bind(null,a,l,s);l.then(b,b)}f.flags|=4096,f.lanes=t;break a}f=f.return}while(f!==null);c=Error((me(s.type)||`A React component`)+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Q!==5&&(Q=2),c=Os(c,s),f=o;do{switch(f.tag){case 3:a=c,f.flags|=4096,t&=-t,f.lanes|=t;var x=js(f,a,t);Fa(f,x);break a;case 1:a=c;var S=f.type,C=f.stateNode;if(!(f.flags&64)&&(typeof S.getDerivedStateFromError==`function`||C!==null&&typeof C.componentDidCatch==`function`&&(uc===null||!uc.has(C)))){f.flags|=4096,t&=-t,f.lanes|=t;var ee=Ms(f,a,t);Fa(f,ee);break a}}f=f.return}while(f!==null)}Wc(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function zc(){var e=Ys.current;return Ys.current=Zo,e===null?Zo:e}function Bc(e,t){var n=J;J|=16;var r=zc();Y===e&&Z===t||Lc(e,t);do try{Vc();break}catch(t){Rc(e,t)}while(1);if(Ta(),J=n,Ys.current=r,X!==null)throw Error(i(261));return Y=null,Z=0,Q}function Vc(){for(;X!==null;)Uc(X)}function Hc(){for(;X!==null&&!Qi();)Uc(X)}function Uc(e){var t=nl(e.alternate,e,Zs);e.memoizedProps=e.pendingProps,t===null?Wc(e):X=t,Xs.current=null}function Wc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&2048){if(n=Ds(t),n!==null){n.flags&=2047,X=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}else{if(n=Es(n,t,Zs),n!==null){X=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||Zs&1073741824||!(n.mode&4)){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&!(e.flags&2048)&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect===null?e.firstEffect=t:e.lastEffect.nextEffect=t,e.lastEffect=t))}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Q===0&&(Q=5)}function Gc(e){var t=pa();return ha(99,Kc.bind(null,e,t)),null}function Kc(e,t){do Jc();while(fc!==null);if(J&48)throw Error(i(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null;var r=n.lanes|n.childLanes,a=r,o=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;for(var s=e.eventTimes,c=e.expirationTimes;0<o;){var l=31-_n(o),u=1<<l;a[l]=0,s[l]=-1,c[l]=-1,o&=~u}if(gc!==null&&!(r&24)&&gc.has(e)&&gc.delete(e),e===Y&&(X=Y=null,Z=0),1<n.flags?n.lastEffect===null?r=n:(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n.firstEffect,r!==null){if(a=J,J|=32,Xs.current=null,pi=Cn,s=Ur(),Wr(s)){if(`selectionStart`in s)c={start:s.selectionStart,end:s.selectionEnd};else a:if(c=(c=s.ownerDocument)&&c.defaultView||window,(u=c.getSelection&&c.getSelection())&&u.rangeCount!==0){c=u.anchorNode,o=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{c.nodeType,l.nodeType}catch{c=null;break a}var d=0,f=-1,p=-1,m=0,h=0,g=s,_=null;b:for(;;){for(var v;g!==c||o!==0&&g.nodeType!==3||(f=d+o),g!==l||u!==0&&g.nodeType!==3||(p=d+u),g.nodeType===3&&(d+=g.nodeValue.length),(v=g.firstChild)!==null;)_=g,g=v;for(;;){if(g===s)break b;if(_===c&&++m===o&&(f=d),_===l&&++h===u&&(p=d),(v=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=v}c=f===-1||p===-1?null:{start:f,end:p}}else c=null;c||={start:0,end:0}}else c=null;mi={focusedElem:s,selectionRange:c},Cn=!1,Sc=null,Cc=!1,$=r;do try{qc()}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);Sc=null,$=r;do try{for(s=e;$!==null;){var y=$.flags;if(y&16&&ze($.stateNode,``),y&128){var b=$.alternate;if(b!==null){var x=b.ref;x!==null&&(typeof x==`function`?x(null):x.current=null)}}switch(y&1038){case 2:Vs($),$.flags&=-3;break;case 6:Vs($),$.flags&=-3,Gs($.alternate,$);break;case 1024:$.flags&=-1025;break;case 1028:$.flags&=-1025,Gs($.alternate,$);break;case 4:Gs($.alternate,$);break;case 8:c=$,Ws(s,c);var S=c.alternate;zs(c),S!==null&&zs(S)}$=$.nextEffect}}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);if(x=mi,b=Ur(),y=x.focusedElem,s=x.selectionRange,b!==y&&y&&y.ownerDocument&&Hr(y.ownerDocument.documentElement,y)){for(s!==null&&Wr(y)&&(b=s.start,x=s.end,x===void 0&&(x=b),(`selectionStart`in y)?(y.selectionStart=b,y.selectionEnd=Math.min(x,y.value.length)):(x=(b=y.ownerDocument||document)&&b.defaultView||window,x.getSelection&&(x=x.getSelection(),c=y.textContent.length,S=Math.min(s.start,c),s=s.end===void 0?S:Math.min(s.end,c),!x.extend&&S>s&&(c=s,s=S,S=c),c=Vr(y,S),o=Vr(y,s),c&&o&&(x.rangeCount!==1||x.anchorNode!==c.node||x.anchorOffset!==c.offset||x.focusNode!==o.node||x.focusOffset!==o.offset)&&(b=b.createRange(),b.setStart(c.node,c.offset),x.removeAllRanges(),S>s?(x.addRange(b),x.extend(o.node,o.offset)):(b.setEnd(o.node,o.offset),x.addRange(b)))))),b=[],x=y;x=x.parentNode;)x.nodeType===1&&b.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof y.focus==`function`&&y.focus(),y=0;y<b.length;y++)x=b[y],x.element.scrollLeft=x.left,x.element.scrollTop=x.top}Cn=!!pi,mi=pi=null,e.current=n,$=r;do try{for(y=e;$!==null;){var C=$.flags;if(C&36&&Is(y,$.alternate,$),C&128){b=void 0;var ee=$.ref;if(ee!==null){var w=$.stateNode;switch($.tag){case 5:b=w;break;default:b=w}typeof ee==`function`?ee(b):ee.current=b}}$=$.nextEffect}}catch(e){if($===null)throw Error(i(330));$c($,e),$=$.nextEffect}while($!==null);$=null,ca(),J=a}else e.current=n;if(dc)dc=!1,fc=e,pc=t;else for($=r;$!==null;)t=$.nextEffect,$.nextEffect=null,$.flags&8&&(C=$,C.sibling=null,C.stateNode=null),$=t;if(r=e.pendingLanes,r===0&&(uc=null),r===1?e===vc?_c++:(_c=0,vc=e):_c=0,n=n.stateNode,Ji&&typeof Ji.onCommitFiberRoot==`function`)try{Ji.onCommitFiberRoot(qi,n,void 0,(n.current.flags&64)==64)}catch{}if(Oc(e,U()),cc)throw cc=!1,e=lc,lc=null,e;return J&8||_a(),null}function qc(){for(;$!==null;){var e=$.alternate;Cc||Sc===null||($.flags&8?Ct($,Sc)&&(Cc=!0):$.tag===13&&qs(e,$)&&Ct($,Sc)&&(Cc=!0));var t=$.flags;t&256&&Fs(e,$),!(t&512)||dc||(dc=!0,ga(97,function(){return Jc(),null})),$=$.nextEffect}}function Jc(){if(pc!==90){var e=97<pc?97:pc;return pc=90,ha(e,Zc)}return!1}function Yc(e,t){mc.push(t,e),dc||(dc=!0,ga(97,function(){return Jc(),null}))}function Xc(e,t){hc.push(t,e),dc||(dc=!0,ga(97,function(){return Jc(),null}))}function Zc(){if(fc===null)return!1;var e=fc;if(fc=null,J&48)throw Error(i(331));var t=J;J|=32;var n=hc;hc=[];for(var r=0;r<n.length;r+=2){var a=n[r],o=n[r+1],s=a.destroy;if(a.destroy=void 0,typeof s==`function`)try{s()}catch(e){if(o===null)throw Error(i(330));$c(o,e)}}for(n=mc,mc=[],r=0;r<n.length;r+=2){a=n[r],o=n[r+1];try{var c=a.create;a.destroy=c()}catch(e){if(o===null)throw Error(i(330));$c(o,e)}}for(c=e.current.firstEffect;c!==null;)e=c.nextEffect,c.nextEffect=null,c.flags&8&&(c.sibling=null,c.stateNode=null),c=e;return J=t,_a(),!0}function Qc(e,t,n){t=Os(n,t),t=js(e,t,1),Pa(e,t),t=wc(),e=Dc(e,1),e!==null&&(gn(e,1,t),Oc(e,t))}function $c(e,t){if(e.tag===3)Qc(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Qc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(uc===null||!uc.has(r))){e=Os(t,e);var i=Ms(n,e,1);if(Pa(n,i),i=wc(),n=Dc(n,1),n!==null)gn(n,1,i),Oc(n,i);else if(typeof r.componentDidCatch==`function`&&(uc===null||!uc.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function el(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wc(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&62914560)===Z&&500>U()-ac?Lc(e,0):rc|=n),Oc(e,t)}function tl(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,t&2?t&4?(bc===0&&(bc=ec),t=mn(62914560&~bc),t===0&&(t=4194304)):t=pa()===99?1:2:t=1),n=wc(),e=Dc(e,t),e!==null&&(gn(e,t,n),Oc(e,n))}var nl=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Ri.current)ns=!0;else if((n&r)!==0)ns=!!(e.flags&16384);else{switch(ns=!1,t.tag){case 3:fs(t),go();break;case 5:io(t);break;case 1:Vi(t.type)&&Gi(t);break;case 4:no(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var a=t.type._context;V(xa,a._currentValue),a._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)===0?(V(W,W.current&1),t=xs(e,t,n),t===null?null:t.sibling):ms(e,t,n);V(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&64){if(r)return bs(e,t,n);t.flags|=64}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),V(W,W.current),r)break;return null;case 23:case 24:return t.lanes=0,ss(e,t,n)}return xs(e,t,n)}else ns=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=Bi(t,H.current),Oa(t,n),a=Eo(null,t,r,e,a,n),t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vi(r)){var o=!0;Gi(t)}else o=!1;t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ja(t);var s=r.getDerivedStateFromProps;typeof s==`function`&&za(t,r,s,e),a.updater=Ba,t.stateNode=a,a._reactInternals=t,Wa(t,r,e,n),t=ds(null,t,r,!0,o,n)}else t.tag=0,rs(null,t,a,n),t=t.child;return t;case 16:a=t.elementType;a:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=ol(a),e=ba(a,e),o){case 0:t=ls(null,t,a,e,n);break a;case 1:t=us(null,t,a,e,n);break a;case 11:t=is(null,t,a,e,n);break a;case 14:t=as(null,t,a,ba(a.type,e),r,n);break a}throw Error(i(306,a,``))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),ls(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),us(e,t,r,a,n);case 3:if(fs(t),r=t.updateQueue,e===null||r===null)throw Error(i(282));if(r=t.pendingProps,a=t.memoizedState,a=a===null?null:a.element,Ma(e,t),Ia(t,r,null,n),r=t.memoizedState.element,r===a)go(),t=xs(e,t,n);else{if(a=t.stateNode,(o=a.hydrate)&&(co=bi(t.stateNode.containerInfo.firstChild),so=t,o=lo=!0),o){if(e=a.mutableSourceEagerHydrationData,e!=null)for(a=0;a<e.length;a+=2)o=e[a],o._workInProgressVersionPrimary=e[a+1],_o.push(o);for(n=Xa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else rs(e,t,r,n),go();t=t.child}return t;case 5:return io(t),e===null&&po(t),r=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,gi(r,a)?s=null:o!==null&&gi(r,o)&&(t.flags|=16),cs(e,t),rs(e,t,s,n),t.child;case 6:return e===null&&po(t),null;case 13:return ms(e,t,n);case 4:return no(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ya(t,null,r,n):rs(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),is(e,t,r,a,n);case 7:return rs(e,t,t.pendingProps,n),t.child;case 8:return rs(e,t,t.pendingProps.children,n),t.child;case 12:return rs(e,t,t.pendingProps.children,n),t.child;case 10:a:{r=t.type._context,a=t.pendingProps,s=t.memoizedProps,o=a.value;var c=t.type._context;if(V(xa,c._currentValue),c._currentValue=o,s!==null)if(c=s.value,o=Lr(c,o)?0:(typeof r._calculateChangedBits==`function`?r._calculateChangedBits(c,o):1073741823)|0,o===0){if(s.children===a.children&&!Ri.current){t=xs(e,t,n);break a}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var l=c.dependencies;if(l!==null){s=c.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!==0){c.tag===1&&(u=Na(-1,n&-n),u.tag=2,Pa(c,u)),c.lanes|=n,u=c.alternate,u!==null&&(u.lanes|=n),Da(c.return,n),l.lanes|=n;break}u=u.next}}else s=c.tag===10&&c.type===t.type?null:c.child;if(s!==null)s.return=c;else for(s=c;s!==null;){if(s===t){s=null;break}if(c=s.sibling,c!==null){c.return=s.return,s=c;break}s=s.return}c=s}rs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps,r=o.children,Oa(t,n),a=ka(a,o.unstable_observedBits),r=r(a),t.flags|=1,rs(e,t,r,n),t.child;case 14:return a=t.type,o=ba(a,t.pendingProps),o=ba(a.type,o),as(e,t,a,o,r,n);case 15:return os(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ba(r,a),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Vi(r)?(e=!0,Gi(t)):e=!1,Oa(t,n),Ha(t,r,a),Wa(t,r,a,n),ds(null,t,r,!0,e,n);case 19:return bs(e,t,n);case 23:return ss(e,t,n);case 24:return ss(e,t,n)}throw Error(i(156,t.tag))};function rl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function il(e,t,n,r){return new rl(e,t,n,r)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ol(e){if(typeof e==`function`)return al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===k)return 11;if(e===ae)return 14}return 2}function sl(e,t){var n=e.alternate;return n===null?(n=il(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function cl(e,t,n,r,a,o){var s=2;if(r=e,typeof e==`function`)al(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case D:return ll(n.children,a,o,t);case le:s=8,a|=16;break;case O:s=8,a|=1;break;case te:return e=il(12,n,t,a|8),e.elementType=te,e.type=te,e.lanes=o,e;case A:return e=il(13,n,t,a),e.type=A,e.elementType=A,e.lanes=o,e;case ie:return e=il(19,n,t,a),e.elementType=ie,e.lanes=o,e;case ue:return ul(n,a,o,t);case j:return e=il(24,n,t,a),e.elementType=j,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case ne:s=10;break a;case re:s=9;break a;case k:s=11;break a;case ae:s=14;break a;case oe:s=16,r=null;break a;case se:s=22;break a}throw Error(i(130,e==null?e:typeof e,``))}return t=il(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ll(e,t,n,r){return e=il(7,e,r,t),e.lanes=n,e}function ul(e,t,n,r){return e=il(23,e,r,t),e.elementType=ue,e.lanes=n,e}function dl(e,t,n){return e=il(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=il(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pl(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.mutableSourceEagerHydrationData=null}function ml(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function hl(e,t,n,r){var a=t.current,o=wc(),s=Tc(a);a:if(n){n=n._reactInternals;b:{if(vt(n)!==n||n.tag!==1)throw Error(i(170));var c=n;do{switch(c.tag){case 3:c=c.stateNode.context;break b;case 1:if(Vi(c.type)){c=c.stateNode.__reactInternalMemoizedMergedChildContext;break b}}c=c.return}while(c!==null);throw Error(i(171))}if(n.tag===1){var l=n.type;if(Vi(l)){n=Wi(n,l,c);break a}}n=c}else n=Li;return t.context===null?t.context=n:t.pendingContext=n,t=Na(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Pa(a,t),Ec(a,s,o),s}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _l(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vl(e,t){_l(e,t),(e=e.alternate)&&_l(e,t)}function yl(){return null}function bl(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new pl(e,t,n!=null&&!0===n.hydrate),t=il(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,ja(t),e[Di]=n.current,ii(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}bl.prototype.render=function(e){hl(e,this._internalRoot,null,null)},bl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;hl(null,e,null,function(){t[Di]=null})};function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function Sl(e,t){if(t||=(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,!(!t||t.nodeType!==1||!t.hasAttribute(`data-reactroot`))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new bl(e,0,t?{hydrate:!0}:void 0)}function Cl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a._internalRoot;if(typeof i==`function`){var s=i;i=function(){var e=gl(o);s.call(e)}}hl(t,o,e,i)}else{if(a=n._reactRootContainer=Sl(n,r),o=a._internalRoot,typeof i==`function`){var c=i;i=function(){var e=gl(o);c.call(e)}}Pc(function(){hl(t,o,e,i)})}return gl(o)}wt=function(e){e.tag===13&&(Ec(e,4,wc()),vl(e,4))},Tt=function(e){e.tag===13&&(Ec(e,67108864,wc()),vl(e,67108864))},Et=function(e){if(e.tag===13){var t=wc(),n=Tc(e);Ec(e,n,t),vl(e,n)}},Dt=function(e,t){return t()},qe=function(e,t,n){switch(t){case`input`:if(we(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Mi(r);if(!a)throw Error(i(90));ye(r),we(r,a)}}}break;case`textarea`:Me(e,n);break;case`select`:t=n.value,t!=null&&ke(e,!!n.multiple,t,!1)}},$e=Nc,et=function(e,t,n,r,i){var a=J;J|=4;try{return ha(98,e.bind(null,t,n,r,i))}finally{J=a,J===0&&(sc(),_a())}},tt=function(){!(J&49)&&(Mc(),Jc())},nt=function(e,t){var n=J;J|=2;try{return e(t)}finally{J=n,J===0&&(sc(),_a())}};function wl(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xl(t))throw Error(i(200));return ml(e,t,null,n)}var Tl={findFiberByHostInstance:ki,bundleType:0,version:`17.0.2`,rendererPackageName:`react-dom`},El={bundleType:Tl.bundleType,version:Tl.version,rendererPackageName:Tl.rendererPackageName,rendererConfig:Tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=St(e),e===null?null:e.stateNode},findFiberByHostInstance:Tl.findFiberByHostInstance||yl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{qi=Dl.inject(El),Ji=Dl}catch{}}e.createPortal=wl,e.render=function(e,t,n){if(!xl(t))throw Error(i(200));return Cl(null,e,t,!1,n)}})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{l();var t=d(),n=60103;if(e.Fragment=60107,typeof Symbol==`function`&&Symbol.for){var r=Symbol.for;n=r(`react.element`),e.Fragment=r(`react.fragment`)}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)a.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:i.current}}e.jsx=s,e.jsxs=s})),_=o(((e,t)=>{t.exports=g()})),v=c(d(),1),y=c(h(),1),b=_(),x=`stackline-react-multiselect-dropdown-styles`,S=`
.rmsd-root {
  --rmsd-primary: #3f51b5;
  --rmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --rmsd-bg: #ffffff;
  --rmsd-surface: #f5f7fb;
  --rmsd-surface-muted: #e8eaf6;
  --rmsd-border: #c5cae9;
  --rmsd-border-strong: #7986cb;
  --rmsd-ink: #212121;
  --rmsd-muted: #5f6368;
  --rmsd-chip-bg: #e8eaf6;
  --rmsd-chip-text: #303f9f;
  --rmsd-chip-remove: #303f9f;
  --rmsd-divider: rgba(125, 119, 134, 0.16);
  --rmsd-section-bg: #f5f7fb;
  --rmsd-focus: rgba(63, 81, 181, 0.32);
  --rmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --rmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
  position: relative;
  display: block;
  width: 100%;
  color: var(--rmsd-ink);
  font: inherit;
}

.rmsd-root *,
.rmsd-root *::before,
.rmsd-root *::after,
.rmsd-menu,
.rmsd-menu *,
.rmsd-menu *::before,
.rmsd-menu *::after {
  box-sizing: border-box;
}

.rmsd-trigger {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 56px;
  gap: 8px;
  border: 1px solid var(--rmsd-border);
  border-radius: 18px;
  background-color: var(--rmsd-bg);
  color: var(--rmsd-ink);
  padding: 11px 54px 11px 16px;
  box-shadow: var(--rmsd-shadow-soft);
  text-align: left;
  cursor: pointer;
  line-height: 1.45;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease, transform 160ms ease;
}

.rmsd-trigger:hover {
  border-color: var(--rmsd-border-strong);
}

.rmsd-root[data-open="true"] .rmsd-trigger,
.rmsd-trigger:focus-visible {
  outline: none;
  border-color: var(--rmsd-primary);
  box-shadow: 0 0 0 3px var(--rmsd-focus), var(--rmsd-shadow-soft);
}

.rmsd-trigger.rmsd-disabled {
  cursor: not-allowed;
  opacity: 0.68;
}

.rmsd-value {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.rmsd-placeholder,
.rmsd-single-value {
  min-width: 0;
  color: var(--rmsd-muted);
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rmsd-single-value {
  color: var(--rmsd-ink);
  font-weight: 500;
}

.rmsd-badge-list {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.rmsd-badge {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-height: 32px;
  max-width: 100%;
  border-radius: 999px;
  background-color: var(--rmsd-chip-bg);
  color: var(--rmsd-chip-text);
  padding: 6px 30px 6px 12px;
  box-shadow: inset 0 0 0 1px rgba(103, 80, 164, 0.08);
  line-height: 1.35;
  white-space: normal;
  overflow-wrap: anywhere;
}

.rmsd-badge-label {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: 100%;
  line-height: 1.3;
  font-weight: 500;
  white-space: normal;
  overflow-wrap: anywhere;
}

.rmsd-badge-remove,
.rmsd-clear,
.rmsd-search-clear,
.rmsd-arrow-button,
.rmsd-group-action {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
}

.rmsd-badge-remove {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-grid;
  width: 16px;
  height: 16px;
  place-items: center;
  transform: translateY(-50%);
  color: var(--rmsd-chip-remove);
  font-size: 12px;
  line-height: 1;
}

.rmsd-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  color: var(--rmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic) .rmsd-trigger {
  padding-right: 104px;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic):not(.rmsd-has-clear) .rmsd-trigger {
  padding-right: 74px;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic) .rmsd-overflow {
  position: absolute;
  top: 50%;
  right: 76px;
  transform: translateY(-50%);
  z-index: 1;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic):not(.rmsd-has-clear) .rmsd-overflow {
  right: 42px;
}

.rmsd-actions {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transform: translateY(-50%);
}

.rmsd-clear {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--rmsd-muted);
  font-size: 14px;
  line-height: 1;
}

.rmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.rmsd-badge-remove .rmsd-icon {
  width: 10px;
  height: 10px;
}

.rmsd-clear .rmsd-icon {
  width: 12px;
  height: 12px;
}

.rmsd-search-clear .rmsd-icon {
  width: 18px;
  height: 18px;
}

.rmsd-arrow-button {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--rmsd-muted);
}

.rmsd-arrow-button:disabled {
  cursor: not-allowed;
}

.rmsd-badge-remove:focus-visible,
.rmsd-clear:focus-visible,
.rmsd-search-clear:focus-visible,
.rmsd-arrow-button:focus-visible,
.rmsd-group-action:focus-visible,
.rmsd-inline-button:focus-visible {
  outline: 3px solid var(--rmsd-focus);
  outline-offset: 2px;
}

.rmsd-arrow {
  display: inline-flex;
  width: 100%;
  height: 100%;
  line-height: 0;
}

.rmsd-arrow .rmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.rmsd-menu {
  position: absolute;
  left: 0;
  z-index: 99999;
  width: 100%;
  border: 1px solid var(--rmsd-border);
  border-radius: 22px;
  background-color: var(--rmsd-bg);
  box-shadow: var(--rmsd-shadow);
  overflow: hidden;
}

.rmsd-menu.rmsd-body-overlay {
  position: fixed;
  right: auto;
  top: auto;
  bottom: auto;
  max-width: calc(100vw - 16px);
  z-index: 100000;
}

.rmsd-menu.rmsd-bottom {
  top: calc(100% + 8px);
}

.rmsd-menu.rmsd-top {
  bottom: calc(100% + 8px);
}

.rmsd-menu.rmsd-body-overlay.rmsd-bottom,
.rmsd-menu.rmsd-body-overlay.rmsd-top {
  top: auto;
  bottom: auto;
}

.rmsd-toolbar {
  display: grid;
  gap: 0;
  padding: 0;
  background-color: var(--rmsd-bg);
}

.rmsd-search-shell {
  position: relative;
  min-height: 52px;
  border-bottom: 1px solid var(--rmsd-divider);
  background-color: var(--rmsd-bg);
}

.rmsd-search-icon {
  position: absolute;
  top: 50%;
  left: 16px;
  width: 18px;
  height: 18px;
  color: var(--rmsd-muted);
  fill: currentColor;
  pointer-events: none;
  transform: translateY(-50%);
}

.rmsd-search-input {
  width: 100%;
  min-height: 52px;
  border: 0;
  border-radius: 0;
  background-color: var(--rmsd-bg);
  color: var(--rmsd-ink);
  font: inherit;
  padding: 0 44px 0 48px;
}

.rmsd-search-input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--rmsd-primary);
}

.rmsd-search-clear {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-grid;
  width: 18px;
  height: 18px;
  place-items: center;
  transform: translateY(-50%);
  border-radius: 999px;
  color: var(--rmsd-muted);
}

.rmsd-bulk-actions {
  display: block;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid var(--rmsd-divider);
  background: var(--rmsd-section-bg);
}

.rmsd-inline-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 39px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--rmsd-ink);
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  padding: 10px 14px;
  text-align: left;
}

.rmsd-inline-button:hover {
  background-color: var(--rmsd-surface);
}

.rmsd-inline-button:disabled {
  opacity: 0.58;
  cursor: not-allowed;
}

.rmsd-add-button {
  justify-content: center;
  border-top: 1px solid var(--rmsd-divider);
  color: var(--rmsd-primary);
  font-weight: 700;
}

.rmsd-list {
  max-height: 300px;
  overflow: auto;
  padding: 8px;
  background: var(--rmsd-bg);
  scrollbar-width: thin;
  scrollbar-color: rgba(125, 119, 134, 0.34) transparent;
}

.rmsd-list:focus {
  outline: none;
}

.rmsd-menu ::-webkit-scrollbar {
  width: 10px;
}

.rmsd-menu ::-webkit-scrollbar-thumb {
  background: rgba(125, 119, 134, 0.34);
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
}

.rmsd-menu ::-webkit-scrollbar-track {
  background: transparent;
}

.rmsd-option {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 0;
  margin: 4px;
  padding: 12px 14px;
  border-radius: 14px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  line-height: 1.35;
}

.rmsd-option:hover {
  background-color: var(--rmsd-surface);
}

.rmsd-option:focus-visible {
  outline: 3px solid var(--rmsd-focus);
  outline-offset: 1px;
}

.rmsd-option.rmsd-selected {
  background-color: var(--rmsd-primary-soft);
  color: var(--rmsd-primary);
}

.rmsd-option.rmsd-disabled {
  opacity: 0.54;
  cursor: not-allowed;
}

.rmsd-checkbox {
  position: relative;
  box-sizing: content-box;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 0;
  border: 2px solid var(--rmsd-border-strong);
  border-radius: 6px;
  background-color: var(--rmsd-bg);
}

.rmsd-checkbox[data-checked="true"] {
  border-color: var(--rmsd-primary);
  background-color: var(--rmsd-primary);
}

.rmsd-checkbox[data-checked="true"]::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 4px;
  margin-top: 0;
  border-color: #fff;
  border-style: solid;
  border-width: 0 0 2px 2px;
  transform: translate(-50%, -58%) rotate(-45deg);
  transform-origin: 50%;
}

.rmsd-option-body {
  min-width: 0;
  flex: 1;
}

.rmsd-option-label {
  font-weight: 500;
}

.rmsd-option-hint {
  display: block;
  margin-top: 3px;
  color: var(--rmsd-muted);
  font-size: 12px;
}

.rmsd-group {
  margin-bottom: 8px;
}

.rmsd-group:last-child {
  margin-bottom: 0;
}

.rmsd-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 10px;
  color: var(--rmsd-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.rmsd-group-action {
  color: var(--rmsd-primary);
  font-size: 12px;
  font-weight: 800;
}

.rmsd-state {
  padding: 18px 12px;
  text-align: center;
  color: var(--rmsd-muted);
}

.theme-material,
.skin-material {
  --rmsd-primary: #3f51b5;
  --rmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --rmsd-bg: #ffffff;
  --rmsd-surface: #f5f7fb;
  --rmsd-surface-muted: #e8eaf6;
  --rmsd-border: #c5cae9;
  --rmsd-border-strong: #7986cb;
  --rmsd-ink: #212121;
  --rmsd-muted: #5f6368;
  --rmsd-chip-bg: #e8eaf6;
  --rmsd-chip-text: #303f9f;
  --rmsd-chip-remove: #303f9f;
  --rmsd-divider: rgba(125, 119, 134, 0.16);
  --rmsd-section-bg: #f5f7fb;
  --rmsd-focus: rgba(63, 81, 181, 0.32);
  --rmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --rmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
}

.theme-material .rmsd-trigger,
.skin-material .rmsd-trigger {
  min-height: 56px;
  border-radius: 18px;
  padding: 11px 54px 11px 16px;
}

.theme-material .rmsd-menu,
.skin-material .rmsd-menu,
.rmsd-menu.theme-material,
.rmsd-menu.skin-material {
  border-radius: 22px;
}

.theme-material .rmsd-option,
.skin-material .rmsd-option {
  border-radius: 14px;
  margin: 4px;
  padding: 12px 14px;
}

.theme-dark,
.skin-dark {
  --rmsd-primary: #8ab4f8;
  --rmsd-primary-soft: rgba(138, 180, 248, 0.18);
  --rmsd-bg: #151a23;
  --rmsd-surface: #202736;
  --rmsd-surface-muted: #111722;
  --rmsd-border: #384456;
  --rmsd-border-strong: #8ab4f8;
  --rmsd-ink: #edf2f7;
  --rmsd-muted: #aab6c5;
  --rmsd-chip-bg: #263247;
  --rmsd-chip-text: #d7e6ff;
  --rmsd-chip-remove: #d7e6ff;
  --rmsd-divider: rgba(170, 182, 197, 0.18);
  --rmsd-section-bg: #202736;
  --rmsd-focus: rgba(138, 180, 248, 0.34);
  --rmsd-shadow: 0 20px 50px rgba(0, 0, 0, 0.42);
  --rmsd-shadow-soft: 0 1px 2px rgba(0, 0, 0, 0.45), 0 10px 24px rgba(0, 0, 0, 0.28);
}

.theme-custom,
.skin-custom {
  --rmsd-primary: var(--stackline-ms-primary, #0f766e);
  --rmsd-primary-soft: var(--stackline-ms-primary-soft, rgba(15, 118, 110, 0.14));
  --rmsd-bg: var(--stackline-ms-surface, #ffffff);
  --rmsd-surface: var(--stackline-ms-surface-soft, #ecfdf5);
  --rmsd-surface-muted: var(--stackline-ms-surface-muted, #d1fae5);
  --rmsd-border: var(--stackline-ms-outline, #99f6e4);
  --rmsd-border-strong: var(--stackline-ms-outline-strong, #0f766e);
  --rmsd-ink: var(--stackline-ms-on-surface, #102a2a);
  --rmsd-muted: var(--stackline-ms-on-surface-muted, #47615f);
  --rmsd-chip-bg: var(--stackline-ms-chip-bg, #ccfbf1);
  --rmsd-chip-text: var(--stackline-ms-chip-text, #115e59);
  --rmsd-chip-remove: var(--stackline-ms-chip-remove, #115e59);
  --rmsd-divider: var(--stackline-ms-divider, rgba(15, 118, 110, 0.18));
  --rmsd-section-bg: var(--stackline-ms-section-bg, #ecfdf5);
  --rmsd-focus: var(--stackline-ms-focus, rgba(15, 118, 110, 0.28));
  --rmsd-shadow: var(--stackline-ms-shadow, 0 18px 42px rgba(15, 118, 110, 0.15));
  --rmsd-shadow-soft: var(--stackline-ms-shadow-soft, 0 1px 2px rgba(15, 118, 110, 0.16), 0 8px 18px rgba(15, 118, 110, 0.09));
}

.theme-brand,
.skin-brand {
  --stackline-ms-primary: #7c3aed;
  --stackline-ms-primary-soft: rgba(124, 58, 237, 0.14);
  --stackline-ms-surface: #ffffff;
  --stackline-ms-surface-soft: #f5f3ff;
  --stackline-ms-surface-muted: #ede9fe;
  --stackline-ms-outline: #c4b5fd;
  --stackline-ms-outline-strong: #7c3aed;
  --stackline-ms-on-surface: #22183f;
  --stackline-ms-on-surface-muted: #6b5d80;
  --stackline-ms-chip-bg: #ede9fe;
  --stackline-ms-chip-text: #5b21b6;
  --stackline-ms-chip-remove: #5b21b6;
  --stackline-ms-divider: rgba(124, 58, 237, 0.16);
  --stackline-ms-section-bg: #f5f3ff;
}

.theme-classic,
.skin-classic {
  --rmsd-primary: #0079fe;
  --rmsd-primary-soft: #e9f4ff;
  --rmsd-bg: #ffffff;
  --rmsd-surface: #f5f5f5;
  --rmsd-surface-muted: #e9f4ff;
  --rmsd-border: #cccccc;
  --rmsd-border-strong: #0079fe;
  --rmsd-ink: #333333;
  --rmsd-muted: #333333;
  --rmsd-chip-bg: #0079fe;
  --rmsd-chip-text: #ffffff;
  --rmsd-chip-remove: #ffffff;
  --rmsd-focus: rgba(0, 121, 254, 0.26);
  --rmsd-divider: #cccccc;
  --rmsd-section-bg: #ffffff;
  --rmsd-shadow: 0 1px 5px #959595;
  --rmsd-shadow-soft: 0 1px 5px #959595;
  color: #333333;
}

.theme-classic .rmsd-trigger,
.skin-classic .rmsd-trigger {
  flex-wrap: nowrap;
  gap: 6px;
  min-height: 42px;
  border-radius: 3px;
  padding: 10px 68px 10px 10px;
  border: 1px solid #cccccc;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
  color: #333333;
  font-size: 14px;
  line-height: 1.35;
}

.theme-classic .rmsd-trigger:hover,
.skin-classic .rmsd-trigger:hover,
.theme-classic[data-open="true"] .rmsd-trigger,
.skin-classic[data-open="true"] .rmsd-trigger {
  border-color: #cccccc;
  box-shadow: 0 1px 5px #959595;
}

.theme-classic .rmsd-trigger.rmsd-disabled,
.skin-classic .rmsd-trigger.rmsd-disabled {
  background: #cccccc;
  opacity: 1;
}

.theme-classic .rmsd-placeholder,
.theme-classic .rmsd-single-value,
.skin-classic .rmsd-placeholder,
.skin-classic .rmsd-single-value {
  color: #333333;
  font-size: 14px;
}

.theme-classic .rmsd-value,
.theme-classic .rmsd-badge-list,
.skin-classic .rmsd-value,
.skin-classic .rmsd-badge-list {
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 0;
}

.theme-classic .rmsd-badge,
.skin-classic .rmsd-badge {
  display: inline-block;
  min-height: 0;
  margin: 2px 0 0;
  border-radius: 2px;
  padding: 2px 24px 2px 6px;
  box-shadow: none;
  color: #ffffff;
  line-height: 1.4;
}

.theme-classic .rmsd-badge-label,
.skin-classic .rmsd-badge-label {
  display: inline;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

.theme-classic .rmsd-badge-remove,
.skin-classic .rmsd-badge-remove {
  right: 5px;
  width: 14px;
  height: 14px;
  color: #ffffff;
}

.theme-classic .rmsd-badge-remove .rmsd-icon,
.skin-classic .rmsd-badge-remove .rmsd-icon {
  width: 9px;
  height: 9px;
}

.theme-classic .rmsd-overflow,
.skin-classic .rmsd-overflow {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
}

.theme-classic .rmsd-actions,
.skin-classic .rmsd-actions {
  right: 10px;
  gap: 12px;
}

.theme-classic .rmsd-clear,
.skin-classic .rmsd-clear {
  width: 18px;
  height: 18px;
  color: #333333;
}

.theme-classic .rmsd-clear .rmsd-icon,
.skin-classic .rmsd-clear .rmsd-icon {
  width: 11px;
  height: 11px;
}

.theme-classic .rmsd-arrow-button,
.skin-classic .rmsd-arrow-button {
  width: 20px;
  height: 20px;
  color: #333333;
}

.theme-classic .rmsd-menu,
.skin-classic .rmsd-menu,
.rmsd-menu.theme-classic,
.rmsd-menu.skin-classic {
  overflow: visible;
  border: 1px solid #cccccc;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
}

.rmsd-menu.theme-classic.rmsd-bottom,
.rmsd-menu.skin-classic.rmsd-bottom {
  top: calc(100% + 14px);
}

.rmsd-menu.theme-classic.rmsd-top,
.rmsd-menu.skin-classic.rmsd-top {
  bottom: calc(100% + 14px);
}

.rmsd-menu.rmsd-body-overlay.rmsd-bottom,
.rmsd-menu.rmsd-body-overlay.rmsd-top {
  bottom: auto;
}

.rmsd-menu.theme-classic::before,
.rmsd-menu.theme-classic::after,
.rmsd-menu.skin-classic::before,
.rmsd-menu.skin-classic::after {
  content: "";
  position: absolute;
  left: 15px;
  width: 0;
  height: 0;
  border-right: 13px solid transparent;
  border-left: 13px solid transparent;
}

.rmsd-menu.theme-classic.rmsd-bottom::before,
.rmsd-menu.skin-classic.rmsd-bottom::before {
  top: -15px;
  border-bottom: 15px solid #cccccc;
}

.rmsd-menu.theme-classic.rmsd-bottom::after,
.rmsd-menu.skin-classic.rmsd-bottom::after {
  top: -14px;
  border-bottom: 15px solid #ffffff;
}

.rmsd-menu.theme-classic.rmsd-top::before,
.rmsd-menu.skin-classic.rmsd-top::before {
  bottom: -15px;
  border-top: 15px solid #cccccc;
}

.rmsd-menu.theme-classic.rmsd-top::after,
.rmsd-menu.skin-classic.rmsd-top::after {
  bottom: -14px;
  border-top: 15px solid #ffffff;
}

.theme-classic .rmsd-toolbar,
.skin-classic .rmsd-toolbar,
.rmsd-menu.theme-classic .rmsd-toolbar,
.rmsd-menu.skin-classic .rmsd-toolbar {
  gap: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .rmsd-search-shell,
.skin-classic .rmsd-search-shell,
.rmsd-menu.theme-classic .rmsd-search-shell,
.rmsd-menu.skin-classic .rmsd-search-shell {
  min-height: 35px;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .rmsd-search-icon,
.skin-classic .rmsd-search-icon,
.rmsd-menu.theme-classic .rmsd-search-icon,
.rmsd-menu.skin-classic .rmsd-search-icon {
  left: 13px;
  width: 18px;
  height: 18px;
}

.theme-classic .rmsd-search-input,
.skin-classic .rmsd-search-input,
.rmsd-menu.theme-classic .rmsd-search-input,
.rmsd-menu.skin-classic .rmsd-search-input {
  min-height: 35px;
  height: 35px;
  padding: 0 35px;
  border: 0;
  color: #333333;
}

.theme-classic .rmsd-search-input:focus,
.skin-classic .rmsd-search-input:focus,
.rmsd-menu.theme-classic .rmsd-search-input:focus,
.rmsd-menu.skin-classic .rmsd-search-input:focus {
  box-shadow: none;
}

.theme-classic .rmsd-search-clear,
.skin-classic .rmsd-search-clear,
.rmsd-menu.theme-classic .rmsd-search-clear,
.rmsd-menu.skin-classic .rmsd-search-clear {
  right: 13px;
}

.theme-classic .rmsd-bulk-actions,
.skin-classic .rmsd-bulk-actions,
.rmsd-menu.theme-classic .rmsd-bulk-actions,
.rmsd-menu.skin-classic .rmsd-bulk-actions {
  border-top: 0;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .rmsd-inline-button,
.skin-classic .rmsd-inline-button,
.rmsd-menu.theme-classic .rmsd-inline-button,
.rmsd-menu.skin-classic .rmsd-inline-button {
  min-height: 35px;
  border-radius: 0;
  color: #333333;
  font-weight: 400;
  padding: 10px;
}

.theme-classic .rmsd-inline-button:hover,
.skin-classic .rmsd-inline-button:hover,
.rmsd-menu.theme-classic .rmsd-inline-button:hover,
.rmsd-menu.skin-classic .rmsd-inline-button:hover {
  background: #f5f5f5;
}

.theme-classic .rmsd-list,
.skin-classic .rmsd-list,
.rmsd-menu.theme-classic .rmsd-list,
.rmsd-menu.skin-classic .rmsd-list {
  margin: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .rmsd-option,
.skin-classic .rmsd-option,
.rmsd-menu.theme-classic .rmsd-option,
.rmsd-menu.skin-classic .rmsd-option {
  border-radius: 0;
  margin: 0;
  padding: 10px;
  color: #333333;
  line-height: 1.35;
}

.theme-classic .rmsd-option:hover,
.skin-classic .rmsd-option:hover,
.rmsd-menu.theme-classic .rmsd-option:hover,
.rmsd-menu.skin-classic .rmsd-option:hover {
  background: #f5f5f5;
}

.theme-classic .rmsd-option.rmsd-selected,
.skin-classic .rmsd-option.rmsd-selected,
.rmsd-menu.theme-classic .rmsd-option.rmsd-selected,
.rmsd-menu.skin-classic .rmsd-option.rmsd-selected {
  background: #e9f4ff;
  color: #333333;
}

.theme-classic .rmsd-checkbox,
.skin-classic .rmsd-checkbox,
.rmsd-menu.theme-classic .rmsd-checkbox,
.rmsd-menu.skin-classic .rmsd-checkbox {
  width: 14px;
  height: 14px;
  border: 2px solid #0079fe;
  border-radius: 0;
  background: #ffffff;
}

.theme-classic .rmsd-checkbox[data-checked="true"],
.skin-classic .rmsd-checkbox[data-checked="true"],
.rmsd-menu.theme-classic .rmsd-checkbox[data-checked="true"],
.rmsd-menu.skin-classic .rmsd-checkbox[data-checked="true"] {
  border-color: #0079fe;
  background: #0079fe;
}

.theme-classic .rmsd-checkbox[data-checked="true"]::after,
.skin-classic .rmsd-checkbox[data-checked="true"]::after,
.rmsd-menu.theme-classic .rmsd-checkbox[data-checked="true"]::after,
.rmsd-menu.skin-classic .rmsd-checkbox[data-checked="true"]::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 3px;
  margin-top: 0;
  border-width: 0 0 3px 3px;
  transform: translate(-50%, -58%) rotate(-45deg);
}

.theme-classic .rmsd-option-label,
.skin-classic .rmsd-option-label,
.rmsd-menu.theme-classic .rmsd-option-label,
.rmsd-menu.skin-classic .rmsd-option-label {
  color: #000000;
  font-weight: 300;
}

.theme-classic .rmsd-group-header,
.skin-classic .rmsd-group-header,
.rmsd-menu.theme-classic .rmsd-group-header,
.rmsd-menu.skin-classic .rmsd-group-header {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: capitalize;
}

.custom-class-example {
  --rmsd-primary: #0f766e;
  --rmsd-primary-soft: #ccfbf1;
  --rmsd-bg: #f8fffd;
  --rmsd-surface: #ecfdf5;
  --rmsd-border: #99f6e4;
  --rmsd-border-strong: #0f766e;
}

@media (max-width: 720px) {
  .rmsd-trigger {
    align-items: flex-start;
    padding-right: 54px;
  }
}
`;function C(){if(typeof document>`u`||document.getElementById(x))return;let e=document.createElement(`style`);e.id=x,e.textContent=S,document.head.appendChild(e)}var ee={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`},w=typeof window>`u`?v.useEffect:v.useLayoutEffect;function T({name:e,className:t=`rmsd-icon`}){return e===`remove`?(0,b.jsx)(`svg`,{className:t,viewBox:`0 0 47.971 47.971`,focusable:`false`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`})}):e===`clear`?(0,b.jsx)(`svg`,{className:t,viewBox:`0 0 51.976 51.976`,focusable:`false`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`})}):e===`search`?(0,b.jsx)(`svg`,{className:t,viewBox:`0 0 615.52 615.52`,focusable:`false`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`})}):(0,b.jsx)(`svg`,{className:t,viewBox:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`,children:e===`angle-up`?(0,b.jsx)(`path`,{d:`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`}):(0,b.jsx)(`path`,{d:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`})})}function E(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function D(e,t){if(E(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function O(e,t){if(E(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return D(e,t)}function te(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set;if(i.add(D(e,n).toLowerCase()),!E(e)){let t=n.searchBy.length?n.searchBy:[n.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}for(let e of i)if(e.includes(r))return!0;return!1}function ne(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!E(e)){let n=t.groupBy,r=e;if(n in r)return String(r[n]??``)}return``}function re(e,t,n){let r=new Map;for(let i of[...e,...t])r.set(O(i,n),i);return Array.from(r.values())}function k(e,t,n){return n&&!E(n)?{[t.primaryKey]:e.toLowerCase().replace(/\s+/g,`-`),[t.labelKey]:e}:e}function A(e){return!E(e)&&!!e.disabled}function ie(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=ne(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function ae(e,t,n){let[r,i]=(0,v.useState)(t??[]),a=e!==void 0;return[a?e:r,e=>{a||i(e),n?.(e)}]}function oe(e){return e.replace(/[^a-zA-Z0-9_-]+/g,`-`).replace(/^-+|-+$/g,``).slice(0,56)||`option`}function se(e){return oe(e.toLowerCase())||`classic`}function ce(e,t){return Number.isFinite(t)?Math.min(e,Math.max(0,Math.floor(t))):e}function le({data:e,settings:t,loading:n,className:r,style:i,selectedItems:a,defaultSelectedItems:o,onChange:s,onSelect:c,onDeSelect:l,onSelectAll:u,onDeSelectAll:d,onOpen:f,onClose:p,onScrollToEnd:m,onFilterSelectAll:h,onFilterDeSelectAll:g,onAddFilterNewItem:_,onGroupSelect:x,onGroupDeSelect:S,renderItem:ne,renderBadge:le,renderSearch:ue,renderEmptyState:j},M){C();let N={...ee,...t},[P,de]=ae(a,o,s),[F,fe]=(0,v.useState)(!1),[I,pe]=(0,v.useState)(``),[me,he]=(0,v.useState)([]),[ge,_e]=(0,v.useState)(null),[ve,ye]=(0,v.useState)(),[be,xe]=(0,v.useState)(),[Se,Ce]=(0,v.useState)(N.position===`top`?`top`:`bottom`),we=(0,v.useRef)(null),Te=(0,v.useRef)(null),Ee=(0,v.useRef)(null),De=(0,v.useRef)(null),Oe=(0,v.useRef)(null),ke=(0,v.useRef)(0),Ae=(0,v.useRef)(null),je=(0,v.useRef)(`rmsd-${Math.random().toString(36).slice(2)}`),Me=(0,v.useMemo)(()=>re(e,me,N),[me,e,N]),Ne=(0,v.useMemo)(()=>Me.filter(e=>te(e,I,N)),[Me,I,N]),Pe=(0,v.useMemo)(()=>ie(Ne,N),[Ne,N]),Fe=`${je.current}-listbox`,Ie=(e,t,n)=>`${je.current}-${n}-${t}-${oe(O(e,N))}`,Le=e=>P.some(t=>O(t,N)===O(e,N)),Re=Ne.filter(e=>!A(e)),ze=!!N.limitSelection&&P.length>=N.limitSelection,L=!!(N.appendToBody||N.tagToBody),Be=()=>Array.from(Oe.current?.querySelectorAll(`[data-rmsd-option="true"]:not([aria-disabled="true"])`)??[]),Ve=e=>{let t=Be();if(!t.length)return;let n=t[Math.max(0,Math.min(e,t.length-1))];n.focus(),_e(n.id||null),n.scrollIntoView({block:`nearest`})},He=()=>Ve(0),Ue=()=>Ve(Be().length-1),We=e=>{de(e)},Ge=(e=`search`)=>{N.disabled||(Ae.current=e,fe(e=>(e||f?.(),!0)))},Ke=(e=!1)=>{fe(e=>(e&&p?.(),!1)),_e(null),ye(void 0),xe(void 0),e&&window.setTimeout(()=>Te.current?.focus(),0)},qe=()=>{let e=P;We([]),d?.(e)},Je=()=>{F?Ke():Ge(`search`)},Ye=e=>{We(P.filter(t=>O(t,N)!==O(e,N))),l?.(e)},Xe=e=>{if(!(N.disabled||A(e))){if(Le(e)){Ye(e);return}if(N.singleSelection){We([e]),c?.(e),Ke(!0);return}N.limitSelection&&P.length>=N.limitSelection||(We([...P,e]),c?.(e),N.closeDropDownOnSelection&&Ke(!0))}},Ze=(e,t=!1)=>{if(N.singleSelection)return;let n=new Set(P.map(e=>O(e,N))),r=N.limitSelection?Math.max(N.limitSelection-P.length,0):2**53-1,i=e.filter(e=>!n.has(O(e,N))).filter(e=>!A(e)).slice(0,r),a=[...P,...i];We(a),t?h?.(i):u?.(a)},Qe=(e,t=!1)=>{let n=new Set(e.map(e=>O(e,N)));We(P.filter(e=>!n.has(O(e,N)))),t?g?.(e):d?.(e)},$e=async()=>{let t=I.trim();if(!t)return;let n=await _?.(t),r=n===void 0?k(t,N,e[0]):n;he(e=>re(e,[r],N)),N.singleSelection?We([r]):We(re(P,[r],N)),pe(``)},et=(e,t)=>{let n=t.filter(e=>!A(e));if(n.length>0&&n.every(e=>Le(e))){Qe(n,!1),S?.(e,n);return}Ze(n,!1),x?.(e,n)},tt=()=>{if(!Oe.current||!m)return;let{scrollHeight:e,scrollTop:t,clientHeight:n}=Oe.current;e===ke.current&&t+n<e-12||t+n>=e-12&&(ke.current=e,m({scrollTop:t,scrollHeight:e,clientHeight:n}))},nt=(e,t)=>{let n=N.position===`top`?`top`:`bottom`;if(!N.autoPosition||typeof window>`u`||typeof document>`u`)return n;let r=window.innerHeight||document.documentElement.clientHeight,i=e.top,a=r-e.bottom,o=i>a+48;return a<t&&o&&t<i?`top`:`bottom`};(0,v.useEffect)(()=>{if(!F)return;let e=e=>{let t=e.target;!we.current?.contains(t)&&!Ee.current?.contains(t)&&Ke()},t=e=>{e.key===`Escape`&&N.escapeToClose&&Ke(!0)};return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e),document.removeEventListener(`keydown`,t)}},[F,N.escapeToClose]);let rt=()=>{if(!L||!Te.current||typeof window>`u`)return;let e=Te.current.getBoundingClientRect(),t=Ee.current?.offsetHeight??0,n=Oe.current?.offsetHeight??Math.min(N.maxHeight,t),r=Math.max(0,t-n),i=nt(e,t),a=i===`top`?Math.max(0,e.top-8-8):Math.max(0,window.innerHeight-e.bottom-8-8),o=t>0?Math.max(0,Math.min(N.maxHeight,a-r)):N.maxHeight,s=r+o,c=i===`top`?e.top-s-8:e.bottom+8,l=i===`top`?Math.max(8,c):c;Ce(e=>e===i?e:i),xe(e=>e===o?e:o);let u=Math.max(0,window.innerWidth-16),d=Math.min(e.width,u);ye({position:`fixed`,top:l,left:Math.min(Math.max(8,e.left),window.innerWidth-d-8),width:d,maxWidth:u,zIndex:1e5})},it=()=>{if(!Te.current||!Ee.current||L)return;xe(e=>e===void 0?e:void 0);let e=Te.current.getBoundingClientRect(),t=Ee.current.offsetHeight,n=nt(e,t);Ce(e=>e===n?e:n)};w(()=>{if(F){if(L){rt();return}it()}},[F,L,N.position,N.autoPosition,N.maxHeight,Ne.length,P.length,I]),(0,v.useEffect)(()=>{if(!F||!L||typeof window>`u`)return;let e=()=>rt(),t=()=>window.requestAnimationFrame(e);window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0);let n=typeof ResizeObserver<`u`&&Ee.current?new ResizeObserver(t):null;return n&&Ee.current&&n.observe(Ee.current),()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),n?.disconnect()}},[F,L,N.position,N.autoPosition,N.maxHeight,Ne.length,P.length]),(0,v.useEffect)(()=>{if(!F)return;let e=Ae.current;Ae.current=null,window.setTimeout(()=>{if(e===`first`){He();return}if(e===`last`){Ue();return}N.enableSearchFilter&&N.searchAutofocus&&De.current?.focus()},0)},[F,Ne.length,N.enableSearchFilter,N.searchAutofocus]),(0,v.useEffect)(()=>{ke.current=0},[Ne.length]),(0,v.useImperativeHandle)(M,()=>({openDropdown:()=>Ge(`search`),closeDropdown:()=>Ke(),clearSelection:qe,focusSearch:()=>{Ge(`search`),window.setTimeout(()=>De.current?.focus(),0)},selectAll:()=>Ze(Re),deSelectAll:()=>Qe(P),getSelectedItems:()=>P}),[Re,P]);let at=P.length,ot=ce(at,N.badgeShowLimit),st=N.singleSelection?P:P.slice(0,ot),ct=N.singleSelection?0:Math.max(at-st.length,0),lt=Ne.length>0,ut=Re.length>0&&Re.every(e=>Le(e)),dt=N.enableCheckAll&&!N.singleSelection||!!(N.addNewItemOnFilter&&I.trim()),ft=se(String(N.skin||N.theme||`classic`)),pt=[`classic`,`material`,`dark`,`custom`].includes(ft)?``:`theme-custom`,mt=[`rmsd-root`,`skin-${ft}`,`theme-${ft}`,pt,F?`rmsd-open`:``,ct>0?`rmsd-has-overflow`:``,N.clearAll&&P.length>0&&!N.disabled?`rmsd-has-clear`:``,Se===`top`?`rmsd-opens-up`:`rmsd-opens-down`,N.classes,r].filter(Boolean).join(` `),ht=e=>typeof N.removeItemAriaLabel==`function`?N.removeItemAriaLabel(e):`${N.removeItemAriaLabel}: ${D(e,N)}`,gt=()=>P.length?`${N.ariaLabel}: ${P.map(e=>D(e,N)).join(`, `)}`:N.ariaLabel,_t=e=>{(e.key===`Enter`||e.key===` `)&&e.stopPropagation()},vt=e=>{if(!N.disabled){if(e.key===`Enter`||e.key===` `){e.preventDefault(),Je();return}if(e.key===`ArrowDown`){e.preventDefault(),F?He():Ge(`first`);return}if(e.key===`ArrowUp`){e.preventDefault(),F?Ue():Ge(`last`);return}e.key===`Escape`&&F&&(e.preventDefault(),Ke(!0))}},yt=e=>{if(e.key===`Enter`||e.key===` `){e.preventDefault(),e.stopPropagation(),Je();return}if(e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation(),Ge(`first`);return}e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),Ge(`last`))},bt=e=>{if(e.key===`ArrowDown`){e.preventDefault(),He();return}e.key===`Escape`&&N.escapeToClose&&(e.preventDefault(),Ke(!0))},xt=(e,t,n)=>{if(e.key===`Enter`||e.key===` `){e.preventDefault(),Xe(t);return}if(e.key===`ArrowDown`){e.preventDefault();let t=n+1;t<Be().length?Ve(t):N.lazyLoading&&tt();return}if(e.key===`ArrowUp`){e.preventDefault(),n>0?Ve(n-1):N.enableSearchFilter?De.current?.focus():Te.current?.focus();return}if(e.key===`Home`){e.preventDefault(),He();return}if(e.key===`End`){e.preventDefault(),Ue();return}e.key===`Escape`&&N.escapeToClose&&(e.preventDefault(),Ke(!0))},St=e=>{let t={item:e,label:D(e,N),selected:Le(e),disabled:N.disabled||A(e)||!Le(e)&&ze,query:I,toggle:()=>Xe(e),remove:()=>Ye(e)};return ne?ne(e,t):(0,b.jsxs)(`div`,{className:`rmsd-option-body`,children:[(0,b.jsx)(`div`,{className:`rmsd-option-label`,children:t.label}),!E(e)&&e.caption?(0,b.jsx)(`span`,{className:`rmsd-option-hint`,children:String(e.caption)}):null]})},Ct=e=>{let t={item:e,label:D(e,N),selected:!0,disabled:N.disabled||A(e),query:I,toggle:()=>Xe(e),remove:()=>Ye(e)};return le?le(e,t):t.label},wt=-1,Tt=(e,t,n)=>{let r=Le(e),i=N.disabled||A(e)||ze&&!r;wt+=1;let a=wt,o=Ie(e,n,t);return(0,b.jsxs)(`div`,{id:o,className:`rmsd-option${r?` rmsd-selected`:``}${i?` rmsd-disabled`:``}`,role:`option`,"aria-selected":r,"aria-disabled":i,tabIndex:i?-1:0,"data-rmsd-option":`true`,onFocus:()=>_e(o),onClick:()=>{i||Xe(e)},onKeyDown:t=>xt(t,e,a),children:[N.showCheckbox?(0,b.jsx)(`span`,{className:`rmsd-checkbox`,"data-checked":r,"aria-hidden":`true`}):null,St(e)]},`${t}-${O(e,N)}-${n}`)},Et=e=>{e.target.closest(`button`)||Je()},Dt=F?(0,b.jsxs)(`div`,{ref:Ee,className:`rmsd-menu rmsd-${Se} skin-${ft} theme-${ft}${pt?` ${pt}`:``}${L?` rmsd-body-overlay`:``}`,style:L?ve:void 0,onMouseDown:e=>e.stopPropagation(),onTouchStart:e=>e.stopPropagation(),children:[(0,b.jsxs)(`div`,{className:`rmsd-toolbar`,children:[dt?(0,b.jsxs)(`div`,{className:`rmsd-bulk-actions`,children:[N.enableCheckAll&&!N.singleSelection?(0,b.jsxs)(`button`,{type:`button`,className:`rmsd-inline-button rmsd-select-all-button`,onClick:()=>ut?Qe(Re,!!I.trim()):Ze(Re,!!I.trim()),disabled:N.disabled||Re.length===0,children:[N.showCheckbox?(0,b.jsx)(`span`,{className:`rmsd-checkbox`,"data-checked":ut,"aria-hidden":`true`}):null,(0,b.jsx)(`span`,{children:ut?I.trim()?N.filterUnSelectAllText:N.unSelectAllText:I.trim()?N.filterSelectAllText:N.selectAllText})]}):null,N.addNewItemOnFilter&&I.trim()?(0,b.jsxs)(`button`,{type:`button`,className:`rmsd-inline-button rmsd-add-button`,onClick:$e,children:[N.addNewButtonText,` "`,I.trim(),`"`]}):null]}):null,N.enableSearchFilter?ue?ue({query:I,setQuery:pe,closeDropdown:()=>Ke()}):(0,b.jsxs)(`div`,{className:`rmsd-search-shell`,children:[(0,b.jsx)(T,{name:`search`,className:`rmsd-search-icon`}),(0,b.jsx)(`input`,{ref:De,className:`rmsd-search-input`,value:I,onChange:e=>pe(e.target.value),onKeyDown:bt,placeholder:N.searchPlaceholderText,"aria-label":N.searchAriaLabel}),I?(0,b.jsx)(`button`,{type:`button`,className:`rmsd-search-clear`,"aria-label":N.clearSearchAriaLabel,onKeyDown:_t,onClick:()=>pe(``),children:(0,b.jsx)(T,{name:`clear`})}):null]}):null]}),(0,b.jsx)(`div`,{className:`rmsd-list`,ref:Oe,style:{maxHeight:L?be??N.maxHeight:N.maxHeight},onScroll:N.lazyLoading?tt:void 0,id:Fe,role:`listbox`,"aria-label":N.listboxAriaLabel,"aria-multiselectable":!N.singleSelection,children:n??N.loading?(0,b.jsx)(`div`,{className:`rmsd-state`,role:`status`,children:N.loadingText}):Pe.length>0?Pe.map((e,t)=>(0,b.jsxs)(`div`,{className:`rmsd-group`,role:`group`,"aria-label":e.name,children:[(0,b.jsxs)(`div`,{className:`rmsd-group-header`,children:[(0,b.jsxs)(`span`,{children:[e.name,` · `,e.items.length]}),N.selectGroup&&!N.singleSelection?(0,b.jsx)(`button`,{type:`button`,className:`rmsd-group-action`,onClick:()=>et(e.name,e.items),children:e.items.filter(e=>!A(e)).every(e=>Le(e))?`Unselect`:`Select`}):null]}),e.items.map((e,n)=>Tt(e,`group-${t}`,n))]},e.name)):lt?Ne.map((e,t)=>Tt(e,`item`,t)):(0,b.jsx)(`div`,{className:`rmsd-state`,children:j?j(I):N.noDataLabel})})]}):null;return(0,b.jsxs)(`div`,{className:mt,style:i,ref:we,"data-open":F,children:[(0,b.jsxs)(`div`,{ref:Te,className:`rmsd-trigger${N.disabled?` rmsd-disabled`:``}`,onClick:Et,onKeyDown:vt,tabIndex:N.disabled?-1:0,role:`combobox`,"aria-expanded":F,"aria-haspopup":`listbox`,"aria-controls":Fe,"aria-disabled":N.disabled,"aria-activedescendant":ge||void 0,"aria-label":gt(),children:[(0,b.jsx)(`div`,{className:`rmsd-value`,children:P.length===0?(0,b.jsx)(`span`,{className:`rmsd-placeholder`,children:N.text}):N.singleSelection?(0,b.jsx)(`span`,{className:`rmsd-single-value`,children:D(P[0],N)}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:`rmsd-badge-list`,children:st.map(e=>(0,b.jsxs)(`span`,{className:`rmsd-badge`,children:[(0,b.jsx)(`span`,{className:`rmsd-badge-label`,children:Ct(e)}),N.disabled?null:(0,b.jsx)(`button`,{type:`button`,className:`rmsd-badge-remove`,"aria-label":ht(e),onKeyDown:_t,onClick:t=>{t.stopPropagation(),Ye(e)},children:(0,b.jsx)(T,{name:`remove`})})]},O(e,N)))}),ct>0?(0,b.jsxs)(`span`,{className:`rmsd-overflow`,children:[`+`,ct]}):null]})}),(0,b.jsxs)(`div`,{className:`rmsd-actions`,children:[N.clearAll&&P.length>0&&!N.disabled?(0,b.jsx)(`button`,{type:`button`,className:`rmsd-clear`,"aria-label":N.clearAllAriaLabel,onKeyDown:_t,onClick:e=>{e.stopPropagation(),qe()},children:(0,b.jsx)(T,{name:`remove`})}):null,(0,b.jsx)(`button`,{type:`button`,className:`rmsd-arrow-button`,disabled:N.disabled,"aria-label":F?N.closeDropdownAriaLabel:N.openDropdownAriaLabel,"aria-expanded":F,"aria-controls":Fe,onKeyDown:yt,onClick:e=>{e.stopPropagation(),Je()},children:(0,b.jsx)(`span`,{className:`rmsd-arrow`,"aria-hidden":`true`,children:(0,b.jsx)(T,{name:F?`angle-up`:`angle-down`})})})]})]}),L&&Dt&&typeof document<`u`?(0,y.createPortal)(Dt,document.body):Dt]})}var ue=(0,v.forwardRef)(le),j=[{id:1,itemName:`Brazil`,name:`BR`,capital:`Brasilia`,category:`South America`,region:`Americas`,flag:`BR`,caption:`Brasilia - Americas`},{id:2,itemName:`Canada`,name:`CA`,capital:`Ottawa`,category:`North America`,region:`Americas`,flag:`CA`,caption:`Ottawa - Americas`},{id:3,itemName:`Portugal`,name:`PT`,capital:`Lisbon`,category:`Europe`,region:`Europe`,flag:`PT`,caption:`Lisbon - Europe`},{id:4,itemName:`United States`,name:`US`,capital:`Washington, DC`,category:`North America`,region:`Americas`,flag:`US`,caption:`Washington, DC - Americas`},{id:5,itemName:`Argentina`,name:`AR`,capital:`Buenos Aires`,category:`South America`,region:`Americas`,flag:`AR`,caption:`Buenos Aires - Americas`},{id:6,itemName:`Germany`,name:`DE`,capital:`Berlin`,category:`Europe`,region:`Europe`,flag:`DE`,caption:`Berlin - Europe`},{id:7,itemName:`Mexico`,name:`MX`,capital:`Mexico City`,category:`North America`,region:`Americas`,flag:`MX`,caption:`Mexico City - Americas`},{id:8,itemName:`Colombia`,name:`CO`,capital:`Bogota`,category:`South America`,region:`Americas`,flag:`CO`,caption:`Bogota - Americas`},{id:9,itemName:`Uruguay`,name:`UY`,capital:`Montevideo`,category:`South America`,region:`Americas`,flag:`UY`,caption:`Montevideo - Americas`},{id:10,itemName:`Costa Rica`,name:`CR`,capital:`San Jose`,category:`Central America`,region:`Americas`,flag:`CR`,caption:`San Jose - Americas`,disabled:!0}],M=[{id:1,itemName:`React`,category:`Frontend`},{id:2,itemName:`TypeScript`,category:`Frontend`},{id:3,itemName:`Node.js`,category:`Backend`},{id:4,itemName:`GraphQL`,category:`Backend`},{id:5,itemName:`Docker`,category:`DevOps`},{id:6,itemName:`Kubernetes`,category:`DevOps`},{id:7,itemName:`Jest`,category:`Testing`},{id:8,itemName:`Playwright`,category:`Testing`}];j.slice(0,6).map(e=>({id:e.id,itemName:e.itemName,name:e.name})),j.slice(0,2),j.slice(4,6);var N=[`Brazilian`,`Canadian`,`Mexican`,`Colombian`],P=[`Smith`,`Johnson`,`Williams`,`Brown`,`Jones`,`Miller`,`Davis`,`Garcia`,`Wilson`,`Taylor`,`Thomas`,`Moore`,`Martin`,`Jackson`,`Thompson`,`White`,`Lopez`,`Lee`,`Harris`,`Clark`],de=Array.from({length:180},(e,t)=>({id:t+1,name:`${P[t%P.length]} ${t+1}`,category:N[t%N.length]})),F=[{id:`basic-counter`,title:`01. Basic multi select`,description:`Search, select all, clear all, and a real overflow counter with only three visible badges.`,dataName:`countries`,selectedName:`selectedCountries`,settingsName:`countrySettings`,data:j,initialSelected:j.slice(0,4),settings:{text:`Select Countries`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3,clearAll:!0}},{id:`all-visible-counter`,title:`02. All selected badges visible`,description:`The counter disappears when every selected item is visible in the trigger.`,dataName:`countries`,selectedName:`visibleCountries`,settingsName:`visibleBadgeSettings`,data:j.slice(0,6),initialSelected:j.slice(0,4),settings:{text:`All Selected Visible`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:10,clearAll:!0}},{id:`single-selection`,title:`03. Single selection`,description:`One selected value, searchable data, and close-on-selection behavior.`,dataName:`countries`,selectedName:`selectedCountry`,settingsName:`singleSettings`,data:j,initialSelected:j.slice(0,1),settings:{text:`Select Country`,singleSelection:!0,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`}},{id:`search-by`,title:`04. Search by specific fields`,description:`Search only in the configured object keys and keep the display label stable.`,dataName:`countries`,selectedName:`searchCountries`,settingsName:`searchSettings`,data:j,initialSelected:j.slice(2,5),settings:{text:`Search by Country or Capital`,enableSearchFilter:!0,searchBy:[`itemName`,`capital`],searchPlaceholderText:`Search country or capital`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`grouped`,title:`05. Grouped options`,description:`Group rows by category and select or unselect a whole group.`,dataName:`countries`,selectedName:`groupedCountries`,settingsName:`groupSettings`,data:j,initialSelected:[j[0],j[4]],settings:{text:`Grouped Countries`,enableSearchFilter:!0,groupBy:`category`,selectGroup:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`limit-selection`,title:`06. Selection limit`,description:`Stop new selections after the configured limit while keeping removal available.`,dataName:`countries`,selectedName:`limitedCountries`,settingsName:`limitSettings`,data:j,initialSelected:j.slice(0,2),settings:{text:`Pick Two Countries`,enableSearchFilter:!0,limitSelection:2,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2}},{id:`custom-rendering`,title:`07. Custom item and badge rendering`,description:`Use React render functions for menu rows and selected chips.`,dataName:`countries`,selectedName:`templateCountries`,settingsName:`templateSettings`,data:j,initialSelected:j.slice(0,3),customRenderer:`country`,settings:{text:`Countries With Templates`,enableSearchFilter:!0,groupBy:`region`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`add-filter-item`,title:`08. Search and add item`,description:`Create a new option from the current filter text and select it immediately.`,dataName:`countries`,selectedName:`createdCountries`,settingsName:`addSettings`,data:j.slice(0,6),initialSelected:j.slice(0,2),addFromFilter:!0,settings:{text:`Add Country`,enableSearchFilter:!0,addNewItemOnFilter:!0,addNewButtonText:`Add country`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`disabled-toggle`,title:`09. Disabled state`,description:`Toggle disabled mode without losing the controlled selection state.`,dataName:`countries`,selectedName:`disabledCountries`,settingsName:`disabledSettings`,data:j.slice(0,6),initialSelected:j.slice(0,3),allowDisabledToggle:!0,settings:{text:`Toggle Disabled`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`form-validation`,title:`10. Controlled form validation`,description:`Keep selected items in React form state and derive validation from the array.`,dataName:`skills`,selectedName:`selectedSkills`,settingsName:`skillSettings`,data:M,initialSelected:M.slice(0,1),settings:{text:`Select Skills`,enableSearchFilter:!0,groupBy:`category`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`long-list`,title:`11. Long list with keyboard scroll`,description:`A compact max height keeps the list scrollable with pointer and keyboard navigation.`,dataName:`people`,selectedName:`selectedPeople`,settingsName:`peopleSettings`,data:de.slice(0,120),initialSelected:de.slice(0,3),settings:{text:`Select People`,enableSearchFilter:!0,maxHeight:140,primaryKey:`id`,labelKey:`name`,badgeShowLimit:3}},{id:`lazy-loading`,title:`12. Local lazy loading`,description:`Append more rows when the scrollable menu reaches the end.`,dataName:`people`,selectedName:`lazyPeople`,settingsName:`lazySettings`,data:de.slice(0,30),initialSelected:[],lazy:!0,settings:{text:`Lazy People`,enableSearchFilter:!0,lazyLoading:!0,maxHeight:140,primaryKey:`id`,labelKey:`name`,badgeShowLimit:3}},{id:`body-overlay`,title:`13. Dialog and overflow container`,description:`Use appendToBody/tagToBody to escape clipping inside overflow, dialogs, drawers, and modal surfaces.`,dataName:`countries`,selectedName:`overlayCountries`,settingsName:`overlaySettings`,data:j,initialSelected:j.slice(0,3),overflowDemo:!0,settings:{text:`Dialog dropdown`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2,maxHeight:180,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`}},{id:`body-overlay-top`,title:`14. Body overlay auto direction`,description:`Prefer opening above the trigger, but let autoPosition choose below when the viewport has room.`,dataName:`countries`,selectedName:`overlayTopCountries`,settingsName:`overlayTopSettings`,data:j,initialSelected:j.slice(2,5),overflowDemo:!0,settings:{text:`Dialog dropdown top`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2,maxHeight:180,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`top`}},{id:`methods`,title:`15. Ref methods`,description:`Open, close, focus search, select all, and clear from external controls.`,dataName:`countries`,selectedName:`methodCountries`,settingsName:`methodSettings`,data:j.slice(0,8),initialSelected:j.slice(0,2),showMethods:!0,settings:{text:`Ref Controlled`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}}];function fe(e,t,n=!1){return{...e,disabled:e.disabled||n,skin:t}}function I(e,t){return{id:t+100,itemName:e,name:e.slice(0,2).toUpperCase(),capital:e,category:`Custom`,region:`Custom`,flag:`NA`,caption:`${e} - Custom`}}var pe=[{path:`basic`,label:`Basic example`,example:F[0]},{path:`allvisible`,label:`All visible counter`,example:F[1]},{path:`singleselection`,label:`Single selection`,example:F[2]},{path:`searchfilter`,label:`Search filter`,example:F[3]},{path:`groupby`,label:`Group By`,example:F[4]},{path:`limitselection`,label:`Selection limit`,example:F[5]},{path:`templating`,label:`Templating`,example:F[6]},{path:`searchfilterAddNewItem`,label:`Search and Add New Item`,example:F[7]},{path:`disabledstate`,label:`Disabled state`,example:F[8]},{path:`usinginform`,label:`Using in Forms`,example:F[9]},{path:`virtualscrolling`,label:`Virtual Scrolling`,example:F[10]},{path:`lazyloading`,label:`Lazy Loading`,example:F[11]},{path:`usingInDialog`,label:`Using Inside Dialog`,example:F[12]},{path:`bodyOverlayTop`,label:`Body Overlay Auto`,example:F[13]},{path:`dropdownMethods`,label:`Methods`,example:F[14]}];function me(){return window.location.hash.replace(/^#\/?/,``).trim()||`basic`}function he({item:e}){return(0,b.jsxs)(`div`,{className:`country-row`,children:[(0,b.jsx)(`span`,{className:`country-flag`,children:e.flag}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`strong`,{children:e.itemName}),(0,b.jsx)(`small`,{children:e.capital})]})]})}function ge({item:e}){return(0,b.jsxs)(`span`,{className:`country-badge`,children:[e.flag,` `,e.name]})}function _e({example:e,skin:t,pushLog:n}){let r=(0,v.useRef)(null),[i,a]=(0,v.useState)(e.data),[o,s]=(0,v.useState)(e.initialSelected),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(``),[f,p]=(0,v.useState)(`ascasc@aa.com`),m=(0,v.useMemo)(()=>fe(e.settings,t,e.allowDisabledToggle?c:!1),[c,e,t]),h=e.id===`form-validation`,g=f.trim().length>0&&o.length>0,_=e.customRenderer===`country`?e=>(0,b.jsx)(he,{item:e}):void 0,y=e.customRenderer===`country`?e=>(0,b.jsx)(ge,{item:e}):void 0,x=()=>{if(!e.lazy)return;let t=de.slice(i.length,i.length+20);if(!t.length){n(`${e.title}: no more lazy rows`);return}a(e=>e.concat(t)),n(`${e.title}: appended ${t.length} rows`)},S=()=>(0,b.jsx)(ue,{ref:r,data:i,selectedItems:o,onChange:t=>{s(t),n(`${e.title}: ${t.length} selected`)},settings:m,renderItem:_,renderBadge:y,onAddFilterNewItem:e.addFromFilter?t=>{let r=I(t,i.length);return a(e=>e.concat(r)),n(`${e.title}: created ${t}`),r}:void 0,onScrollToEnd:e.lazy?x:void 0,onOpen:()=>n(`${e.title}: opened`),onClose:()=>n(`${e.title}: closed`),onSelect:t=>n(`${e.title}: selected ${JSON.stringify(t)}`),onDeSelect:t=>n(`${e.title}: removed ${JSON.stringify(t)}`)});if(h){let t={name:u,email:f,skills:o};return(0,b.jsx)(`div`,{className:`preview-example`,children:(0,b.jsxs)(`div`,{className:`example-live`,children:[(0,b.jsxs)(`form`,{className:`docs-form`,onSubmit:t=>{t.preventDefault(),n(`${e.title}: submitted`)},children:[(0,b.jsxs)(`label`,{className:`form-field`,children:[(0,b.jsx)(`span`,{children:`Name`}),(0,b.jsx)(`input`,{value:u,onChange:e=>d(e.target.value)})]}),(0,b.jsxs)(`label`,{className:`form-field`,children:[(0,b.jsxs)(`span`,{children:[`Email Address `,(0,b.jsx)(`em`,{children:`* required`})]}),(0,b.jsx)(`input`,{value:f,onChange:e=>p(e.target.value)})]}),(0,b.jsxs)(`div`,{className:`form-field`,children:[(0,b.jsxs)(`span`,{children:[`Skills `,(0,b.jsx)(`em`,{children:`* required`})]}),S()]}),(0,b.jsx)(`button`,{className:`submit-button`,type:`submit`,disabled:!g,children:`Submit`})]}),(0,b.jsx)(`table`,{className:`form-output`,children:(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`label`,{children:`Name`})}),(0,b.jsx)(`td`,{children:u})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`label`,{children:`Email`})}),(0,b.jsx)(`td`,{children:f})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`label`,{children:`Skills`})}),(0,b.jsx)(`td`,{children:o.map(e=>String(e.itemName)).join(`, `)})]})]})}),(0,b.jsx)(`p`,{className:`form-json`,children:JSON.stringify(t)}),(0,b.jsxs)(`p`,{className:`form-json`,children:[`Form status: "`,g?`VALID`:`INVALID`,`"`]})]})})}return(0,b.jsx)(`div`,{className:`preview-example`,children:(0,b.jsxs)(`div`,{className:`example-live`,children:[e.allowDisabledToggle?(0,b.jsx)(`div`,{className:`method-bar`,children:(0,b.jsx)(`button`,{className:`small-button`,type:`button`,onClick:()=>{l(e=>!e),n(`${e.title}: disabled ${c?`off`:`on`}`)},children:c?`Enable`:`Disable`})}):null,e.showMethods?(0,b.jsxs)(`div`,{className:`method-bar`,children:[(0,b.jsx)(`button`,{type:`button`,onClick:()=>r.current?.openDropdown(),children:`Open`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>r.current?.closeDropdown(),children:`Close`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>r.current?.focusSearch(),children:`Focus search`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>r.current?.selectAll(),children:`Select all`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>r.current?.clearSelection(),children:`Clear`})]}):null,(0,b.jsxs)(`div`,{className:e.overflowDemo?`overflow-lab`:void 0,children:[e.overflowDemo?(0,b.jsxs)(`div`,{className:`overflow-label`,children:[`Simulated dialog surface with `,(0,b.jsx)(`code`,{children:`overflow: hidden`})]}):null,S()]})]})})}function ve({docsMeta:e}){let t=`classic`,[n,r]=(0,v.useState)(()=>me());(0,v.useEffect)(()=>{let e=()=>r(me());return window.addEventListener(`hashchange`,e),window.location.hash||(window.history.replaceState(null,``,`#/basic`),r(`basic`)),()=>window.removeEventListener(`hashchange`,e)},[]);let i=pe.find(e=>e.path===n)??pe[0],a=e=>{},o=`npm install @stackline/react-multiselect-dropdown@${e.packageVersion} --save-exact`,s=[`import { useMemo, useState } from 'react';`,`import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';`,``,`type Country = { id: number; itemName: string; capital: string };`].join(`
`),c=[`const settings = useMemo(() => ({`,`  text: 'Select countries',`,`  primaryKey: 'id',`,`  labelKey: 'itemName',`,`  enableSearchFilter: true,`,`  badgeShowLimit: 3,`,`  clearAll: true,`,`  skin: '${t}'`,`}), []);`].join(`
`),l=[`const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);`,``,`<MultiSelectDropdown`,`  data={countries}`,`  selectedItems={selectedCountries}`,`  onChange={setSelectedCountries}`,`  settings={settings}`,`/>`].join(`
`),u=[`Controlled state`,`Search`,`Grouping`,`Custom renderers`,`Lazy loading`,`Ref methods`,`ADA-compliant keyboard/ARIA`,`appendToBody`,`Classic and modern skins`],d=[{kicker:`Component`,title:`<MultiSelectDropdown />`,copy:`Use a controlled React state array through selectedItems and onChange while keeping the settings object familiar.`},{kicker:`Settings`,title:`settings.skin`,copy:`Use settings.skin for classic, material, dark, custom, and brand visual modes. The legacy theme alias stays compatibility-only.`},{kicker:`Events`,title:`onSelect and onDeSelect`,copy:`React callbacks expose selection changes, select-all, clear-all, lazy scrolling, and custom item creation.`},{kicker:`Rendering`,title:`renderItem and renderBadge`,copy:`Pass React render functions for option rows and selected chips instead of framework templates.`},{kicker:`Accessibility`,title:`ADA-compliant keyboard and ARIA support`,copy:`The trigger, clear-all action, option rows, lazy lists, selected chips, and listbox states expose keyboard flow and ARIA metadata.`},{kicker:`Dialogs`,title:`appendToBody / tagToBody`,copy:`Set appendToBody inside modals, drawers, and overflow containers so the list is portaled to document.body and avoids clipping.`}];return(0,b.jsxs)(`div`,{className:`docs-shell`,children:[(0,b.jsxs)(`header`,{className:`topbar`,children:[(0,b.jsxs)(`div`,{className:`brand`,children:[(0,b.jsx)(`div`,{className:`brand-mark`,children:`R`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`topbar-eyebrow`,children:`Stackline maintained line`}),(0,b.jsx)(`h1`,{children:`@stackline/react-multiselect-dropdown`})]})]}),(0,b.jsxs)(`div`,{className:`topbar-meta`,children:[(0,b.jsx)(`span`,{className:`meta-pill`,children:`React 17.x`}),(0,b.jsxs)(`span`,{className:`meta-pill primary`,children:[`v`,e.packageVersion]})]})]}),(0,b.jsxs)(`div`,{className:`docs-layout`,children:[(0,b.jsxs)(`aside`,{className:`rail`,children:[(0,b.jsxs)(`section`,{className:`rail-card`,children:[(0,b.jsx)(`div`,{className:`rail-label`,children:`Overview`}),(0,b.jsx)(`a`,{className:`rail-link`,href:`#install`,children:`Install`}),(0,b.jsx)(`a`,{className:`rail-link`,href:`#preview`,children:`Preview`}),(0,b.jsx)(`a`,{className:`rail-link`,href:`live/`,target:`_blank`,rel:`noopener`,children:`Live project`}),(0,b.jsx)(`a`,{className:`rail-link`,href:`#api`,children:`API`})]}),(0,b.jsxs)(`section`,{className:`rail-card`,children:[(0,b.jsx)(`div`,{className:`rail-label`,children:`Examples`}),(0,b.jsx)(`nav`,{className:`example-nav`,"aria-label":`React multiselect examples`,children:pe.map(e=>(0,b.jsx)(`a`,{className:e.path===i.path?`example-link active`:`example-link`,href:`#/${e.path}`,children:e.label},e.path))})]}),(0,b.jsxs)(`section`,{className:`rail-card`,children:[(0,b.jsx)(`div`,{className:`rail-label`,children:`Release line`}),(0,b.jsxs)(`div`,{className:`release-item`,children:[(0,b.jsx)(`strong`,{children:`Package`}),(0,b.jsx)(`span`,{children:e.packageVersion})]}),(0,b.jsxs)(`div`,{className:`release-item`,children:[(0,b.jsx)(`strong`,{children:`React`}),(0,b.jsx)(`span`,{children:`17.0.2`})]}),(0,b.jsxs)(`div`,{className:`release-item`,children:[(0,b.jsx)(`strong`,{children:`Docs path`}),(0,b.jsxs)(`span`,{children:[`/`,e.docsPath,`/`]})]}),(0,b.jsxs)(`div`,{className:`release-item`,children:[(0,b.jsx)(`strong`,{children:`Promise`}),(0,b.jsx)(`span`,{children:`ADA-compliant keyboard/ARIA support`})]})]})]}),(0,b.jsxs)(`main`,{className:`docs-main`,children:[(0,b.jsxs)(`section`,{className:`preview-card`,id:`preview`,children:[(0,b.jsxs)(`div`,{className:`preview-head`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`setup-label`,children:`Live preview`}),(0,b.jsx)(`h3`,{children:i.label}),(0,b.jsxs)(`p`,{children:[`Running against package line `,(0,b.jsx)(`code`,{children:e.packageVersion}),` and React `,(0,b.jsx)(`code`,{children:`17.0.2`}),`.`]})]}),(0,b.jsx)(`span`,{className:`status-pill`,children:`Classic selector preserved`})]}),(0,b.jsx)(`div`,{className:`preview-canvas`,children:(0,b.jsx)(_e,{example:i.example,skin:t,pushLog:a},i.path)})]}),(0,b.jsxs)(`section`,{className:`hero-card`,children:[(0,b.jsx)(`span`,{className:`hero-badge`,children:e.badge}),(0,b.jsx)(`h2`,{children:`Material-inspired multiselect, shaped for controlled React applications.`}),(0,b.jsxs)(`p`,{className:`hero-copy`,children:[`This React 17 line keeps the familiar Stackline settings contract while using idiomatic React state, render functions, refs, and callback events. Version `,(0,b.jsx)(`code`,{children:e.packageVersion}),` includes ADA-compliant keyboard and ARIA behavior, accurate badge counters, clear-all controls, dialog-safe body overlays, and matching classic/material/dark/custom/brand skins.`]}),(0,b.jsx)(`div`,{className:`pill-row`,children:u.map(e=>(0,b.jsx)(`span`,{className:`feature-pill`,children:e},e))}),(0,b.jsxs)(`div`,{className:`compat-grid`,children:[(0,b.jsxs)(`div`,{className:`compat-card`,children:[(0,b.jsx)(`strong`,{children:`React state first`}),`Keep selection in component state through `,(0,b.jsx)(`code`,{children:`selectedItems`}),` and `,(0,b.jsx)(`code`,{children:`onChange`}),`.`]}),(0,b.jsxs)(`div`,{className:`compat-card`,children:[(0,b.jsx)(`strong`,{children:`Consistent behavior where it matters`}),`Skins, counters, keyboard behavior, and body overlays follow the validated Stackline behavior.`]}),(0,b.jsxs)(`div`,{className:`compat-card`,children:[(0,b.jsx)(`strong`,{children:`Render functions instead of templates`}),`Customize option rows and selected chips with React functions, not string templates.`]})]})]}),(0,b.jsxs)(`section`,{className:`setup-grid`,id:`install`,children:[(0,b.jsxs)(`article`,{className:`setup-card`,children:[(0,b.jsx)(`div`,{className:`setup-label`,children:`Step 1`}),(0,b.jsx)(`h3`,{children:`Install the package`}),(0,b.jsx)(`pre`,{children:o})]}),(0,b.jsxs)(`article`,{className:`setup-card`,children:[(0,b.jsx)(`div`,{className:`setup-label`,children:`Step 2`}),(0,b.jsx)(`h3`,{children:`Import the component`}),(0,b.jsx)(`pre`,{children:s})]}),(0,b.jsxs)(`article`,{className:`setup-card`,children:[(0,b.jsx)(`div`,{className:`setup-label`,children:`Step 3`}),(0,b.jsx)(`h3`,{children:`Create settings`}),(0,b.jsx)(`pre`,{children:c})]}),(0,b.jsxs)(`article`,{className:`setup-card`,children:[(0,b.jsx)(`div`,{className:`setup-label`,children:`Step 4`}),(0,b.jsx)(`h3`,{children:`Render with controlled state`}),(0,b.jsx)(`pre`,{children:l})]})]}),(0,b.jsx)(`section`,{className:`api-grid`,id:`api`,children:d.map(e=>(0,b.jsxs)(`article`,{className:`api-card`,children:[(0,b.jsx)(`div`,{className:`setup-label`,children:e.kicker}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.copy})]},e.title))})]})]})]})}var ye=document.getElementById(`root`);if(!ye)throw Error(`Root element not found.`);y.render((0,b.jsx)(v.default.StrictMode,{children:(0,b.jsx)(ve,{docsMeta:{badge:`React 17 family · Multiselect dropdown`,reactLine:`17.0.0 package · React runtime 17.0.2`,packageVersion:`17.0.0`,packageRange:`17.0.0`,docsPath:`react-17`}})}),ye);