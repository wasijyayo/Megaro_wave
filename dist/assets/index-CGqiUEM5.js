(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var im={exports:{}},mc={},rm={exports:{}},It={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function dM(){if(L1)return It;L1=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function S(G){return G===null||typeof G!="object"?null:(G=y&&G[y]||G["@@iterator"],typeof G=="function"?G:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,N={};function T(G,re,Pe){this.props=G,this.context=re,this.refs=N,this.updater=Pe||A}T.prototype.isReactComponent={},T.prototype.setState=function(G,re){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,re,"setState")},T.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function x(){}x.prototype=T.prototype;function H(G,re,Pe){this.props=G,this.context=re,this.refs=N,this.updater=Pe||A}var z=H.prototype=new x;z.constructor=H,P(z,T.prototype),z.isPureReactComponent=!0;var O=Array.isArray,K=Object.prototype.hasOwnProperty,j={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function R(G,re,Pe){var se,ve={},Ae=null,Ee=null;if(re!=null)for(se in re.ref!==void 0&&(Ee=re.ref),re.key!==void 0&&(Ae=""+re.key),re)K.call(re,se)&&!L.hasOwnProperty(se)&&(ve[se]=re[se]);var Ue=arguments.length-2;if(Ue===1)ve.children=Pe;else if(1<Ue){for(var He=Array(Ue),at=0;at<Ue;at++)He[at]=arguments[at+2];ve.children=He}if(G&&G.defaultProps)for(se in Ue=G.defaultProps,Ue)ve[se]===void 0&&(ve[se]=Ue[se]);return{$$typeof:t,type:G,key:Ae,ref:Ee,props:ve,_owner:j.current}}function M(G,re){return{$$typeof:t,type:G.type,key:re,ref:G.ref,props:G.props,_owner:G._owner}}function E(G){return typeof G=="object"&&G!==null&&G.$$typeof===t}function C(G){var re={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(Pe){return re[Pe]})}var k=/\/+/g;function I(G,re){return typeof G=="object"&&G!==null&&G.key!=null?C(""+G.key):re.toString(36)}function fe(G,re,Pe,se,ve){var Ae=typeof G;(Ae==="undefined"||Ae==="boolean")&&(G=null);var Ee=!1;if(G===null)Ee=!0;else switch(Ae){case"string":case"number":Ee=!0;break;case"object":switch(G.$$typeof){case t:case e:Ee=!0}}if(Ee)return Ee=G,ve=ve(Ee),G=se===""?"."+I(Ee,0):se,O(ve)?(Pe="",G!=null&&(Pe=G.replace(k,"$&/")+"/"),fe(ve,re,Pe,"",function(at){return at})):ve!=null&&(E(ve)&&(ve=M(ve,Pe+(!ve.key||Ee&&Ee.key===ve.key?"":(""+ve.key).replace(k,"$&/")+"/")+G)),re.push(ve)),1;if(Ee=0,se=se===""?".":se+":",O(G))for(var Ue=0;Ue<G.length;Ue++){Ae=G[Ue];var He=se+I(Ae,Ue);Ee+=fe(Ae,re,Pe,He,ve)}else if(He=S(G),typeof He=="function")for(G=He.call(G),Ue=0;!(Ae=G.next()).done;)Ae=Ae.value,He=se+I(Ae,Ue++),Ee+=fe(Ae,re,Pe,He,ve);else if(Ae==="object")throw re=String(G),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Ee}function _e(G,re,Pe){if(G==null)return G;var se=[],ve=0;return fe(G,se,"","",function(Ae){return re.call(Pe,Ae,ve++)}),se}function pe(G){if(G._status===-1){var re=G._result;re=re(),re.then(function(Pe){(G._status===0||G._status===-1)&&(G._status=1,G._result=Pe)},function(Pe){(G._status===0||G._status===-1)&&(G._status=2,G._result=Pe)}),G._status===-1&&(G._status=0,G._result=re)}if(G._status===1)return G._result.default;throw G._result}var me={current:null},q={transition:null},ge={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:q,ReactCurrentOwner:j};function le(){throw Error("act(...) is not supported in production builds of React.")}return It.Children={map:_e,forEach:function(G,re,Pe){_e(G,function(){re.apply(this,arguments)},Pe)},count:function(G){var re=0;return _e(G,function(){re++}),re},toArray:function(G){return _e(G,function(re){return re})||[]},only:function(G){if(!E(G))throw Error("React.Children.only expected to receive a single React element child.");return G}},It.Component=T,It.Fragment=n,It.Profiler=o,It.PureComponent=H,It.StrictMode=r,It.Suspense=d,It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,It.act=le,It.cloneElement=function(G,re,Pe){if(G==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+G+".");var se=P({},G.props),ve=G.key,Ae=G.ref,Ee=G._owner;if(re!=null){if(re.ref!==void 0&&(Ae=re.ref,Ee=j.current),re.key!==void 0&&(ve=""+re.key),G.type&&G.type.defaultProps)var Ue=G.type.defaultProps;for(He in re)K.call(re,He)&&!L.hasOwnProperty(He)&&(se[He]=re[He]===void 0&&Ue!==void 0?Ue[He]:re[He])}var He=arguments.length-2;if(He===1)se.children=Pe;else if(1<He){Ue=Array(He);for(var at=0;at<He;at++)Ue[at]=arguments[at+2];se.children=Ue}return{$$typeof:t,type:G.type,key:ve,ref:Ae,props:se,_owner:Ee}},It.createContext=function(G){return G={$$typeof:c,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},G.Provider={$$typeof:a,_context:G},G.Consumer=G},It.createElement=R,It.createFactory=function(G){var re=R.bind(null,G);return re.type=G,re},It.createRef=function(){return{current:null}},It.forwardRef=function(G){return{$$typeof:f,render:G}},It.isValidElement=E,It.lazy=function(G){return{$$typeof:v,_payload:{_status:-1,_result:G},_init:pe}},It.memo=function(G,re){return{$$typeof:m,type:G,compare:re===void 0?null:re}},It.startTransition=function(G){var re=q.transition;q.transition={};try{G()}finally{q.transition=re}},It.unstable_act=le,It.useCallback=function(G,re){return me.current.useCallback(G,re)},It.useContext=function(G){return me.current.useContext(G)},It.useDebugValue=function(){},It.useDeferredValue=function(G){return me.current.useDeferredValue(G)},It.useEffect=function(G,re){return me.current.useEffect(G,re)},It.useId=function(){return me.current.useId()},It.useImperativeHandle=function(G,re,Pe){return me.current.useImperativeHandle(G,re,Pe)},It.useInsertionEffect=function(G,re){return me.current.useInsertionEffect(G,re)},It.useLayoutEffect=function(G,re){return me.current.useLayoutEffect(G,re)},It.useMemo=function(G,re){return me.current.useMemo(G,re)},It.useReducer=function(G,re,Pe){return me.current.useReducer(G,re,Pe)},It.useRef=function(G){return me.current.useRef(G)},It.useState=function(G){return me.current.useState(G)},It.useSyncExternalStore=function(G,re,Pe){return me.current.useSyncExternalStore(G,re,Pe)},It.useTransition=function(){return me.current.useTransition()},It.version="18.3.1",It}var I1;function u0(){return I1||(I1=1,rm.exports=dM()),rm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1;function pM(){if(D1)return mc;D1=1;var t=u0(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,m){var v,y={},S=null,A=null;m!==void 0&&(S=""+m),d.key!==void 0&&(S=""+d.key),d.ref!==void 0&&(A=d.ref);for(v in d)r.call(d,v)&&!a.hasOwnProperty(v)&&(y[v]=d[v]);if(f&&f.defaultProps)for(v in d=f.defaultProps,d)y[v]===void 0&&(y[v]=d[v]);return{$$typeof:e,type:f,key:S,ref:A,props:y,_owner:o.current}}return mc.Fragment=n,mc.jsx=c,mc.jsxs=c,mc}var N1;function mM(){return N1||(N1=1,im.exports=pM()),im.exports}var Ie=mM(),tt=u0(),af={},sm={exports:{}},Hi={},om={exports:{}},am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function gM(){return U1||(U1=1,(function(t){function e(q,ge){var le=q.length;q.push(ge);e:for(;0<le;){var G=le-1>>>1,re=q[G];if(0<o(re,ge))q[G]=ge,q[le]=re,le=G;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ge=q[0],le=q.pop();if(le!==ge){q[0]=le;e:for(var G=0,re=q.length,Pe=re>>>1;G<Pe;){var se=2*(G+1)-1,ve=q[se],Ae=se+1,Ee=q[Ae];if(0>o(ve,le))Ae<re&&0>o(Ee,ve)?(q[G]=Ee,q[Ae]=le,G=Ae):(q[G]=ve,q[se]=le,G=se);else if(Ae<re&&0>o(Ee,le))q[G]=Ee,q[Ae]=le,G=Ae;else break e}}return ge}function o(q,ge){var le=q.sortIndex-ge.sortIndex;return le!==0?le:q.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var d=[],m=[],v=1,y=null,S=3,A=!1,P=!1,N=!1,T=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(q){for(var ge=n(m);ge!==null;){if(ge.callback===null)r(m);else if(ge.startTime<=q)r(m),ge.sortIndex=ge.expirationTime,e(d,ge);else break;ge=n(m)}}function O(q){if(N=!1,z(q),!P)if(n(d)!==null)P=!0,pe(K);else{var ge=n(m);ge!==null&&me(O,ge.startTime-q)}}function K(q,ge){P=!1,N&&(N=!1,x(R),R=-1),A=!0;var le=S;try{for(z(ge),y=n(d);y!==null&&(!(y.expirationTime>ge)||q&&!C());){var G=y.callback;if(typeof G=="function"){y.callback=null,S=y.priorityLevel;var re=G(y.expirationTime<=ge);ge=t.unstable_now(),typeof re=="function"?y.callback=re:y===n(d)&&r(d),z(ge)}else r(d);y=n(d)}if(y!==null)var Pe=!0;else{var se=n(m);se!==null&&me(O,se.startTime-ge),Pe=!1}return Pe}finally{y=null,S=le,A=!1}}var j=!1,L=null,R=-1,M=5,E=-1;function C(){return!(t.unstable_now()-E<M)}function k(){if(L!==null){var q=t.unstable_now();E=q;var ge=!0;try{ge=L(!0,q)}finally{ge?I():(j=!1,L=null)}}else j=!1}var I;if(typeof H=="function")I=function(){H(k)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,_e=fe.port2;fe.port1.onmessage=k,I=function(){_e.postMessage(null)}}else I=function(){T(k,0)};function pe(q){L=q,j||(j=!0,I())}function me(q,ge){R=T(function(){q(t.unstable_now())},ge)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,pe(K))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(q){switch(S){case 1:case 2:case 3:var ge=3;break;default:ge=S}var le=S;S=ge;try{return q()}finally{S=le}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ge){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var le=S;S=q;try{return ge()}finally{S=le}},t.unstable_scheduleCallback=function(q,ge,le){var G=t.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?G+le:G):le=G,q){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,q={id:v++,callback:ge,priorityLevel:q,startTime:le,expirationTime:re,sortIndex:-1},le>G?(q.sortIndex=le,e(m,q),n(d)===null&&q===n(m)&&(N?(x(R),R=-1):N=!0,me(O,le-G))):(q.sortIndex=re,e(d,q),P||A||(P=!0,pe(K))),q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(q){var ge=S;return function(){var le=S;S=ge;try{return q.apply(this,arguments)}finally{S=le}}}})(am)),am}var F1;function _M(){return F1||(F1=1,om.exports=gM()),om.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function vM(){if(O1)return Hi;O1=1;var t=u0(),e=_M();function n(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function S(i){return d.call(y,i)?!0:d.call(v,i)?!1:m.test(i)?y[i]=!0:(v[i]=!0,!1)}function A(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function P(i,s,l,h){if(s===null||typeof s>"u"||A(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function N(i,s,l,h,p,_,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=b}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){T[i]=new N(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];T[s]=new N(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){T[i]=new N(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){T[i]=new N(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){T[i]=new N(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){T[i]=new N(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){T[i]=new N(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){T[i]=new N(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){T[i]=new N(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function H(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,H);T[s]=new N(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,H);T[s]=new N(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,H);T[s]=new N(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){T[i]=new N(i,1,!1,i.toLowerCase(),null,!1,!1)}),T.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){T[i]=new N(i,1,!1,i.toLowerCase(),null,!0,!0)});function z(i,s,l,h){var p=T.hasOwnProperty(s)?T[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(P(s,l,p,h)&&(l=null),h||p===null?S(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var O=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),j=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),q=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=q&&i[q]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,G;function re(i){if(G===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);G=s&&s[1]||""}return`
`+G+i}var Pe=!1;function se(i,s){if(!i||Pe)return"";Pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var h=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){h=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){h=ae}i()}}catch(ae){if(ae&&h&&typeof ae.stack=="string"){for(var p=ae.stack.split(`
`),_=h.stack.split(`
`),b=p.length-1,V=_.length-1;1<=b&&0<=V&&p[b]!==_[V];)V--;for(;1<=b&&0<=V;b--,V--)if(p[b]!==_[V]){if(b!==1||V!==1)do if(b--,V--,0>V||p[b]!==_[V]){var W=`
`+p[b].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=b&&0<=V);break}}}finally{Pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?re(i):""}function ve(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=se(i.type,!1),i;case 11:return i=se(i.type.render,!1),i;case 1:return i=se(i.type,!0),i;default:return""}}function Ae(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case L:return"Fragment";case j:return"Portal";case M:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case fe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case C:return(i.displayName||"Context")+".Consumer";case E:return(i._context.displayName||"Context")+".Provider";case k:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case _e:return s=i.displayName||null,s!==null?s:Ae(i.type)||"Memo";case pe:s=i._payload,i=i._init;try{return Ae(i(s))}catch{}}return null}function Ee(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function He(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function at(i){var s=He(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(b){h=""+b,_.call(this,b)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(b){h=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Bt(i){i._valueTracker||(i._valueTracker=at(i))}function Mt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=He(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function Jt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function X(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Hn(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Ue(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Tt(i,s){s=s.checked,s!=null&&z(i,"checked",s,!1)}function wt(i,s){Tt(i,s);var l=Ue(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Gt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Gt(i,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function nt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Gt(i,s,l){(s!=="number"||Jt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Ke=Array.isArray;function B(i,s,l,h){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ue(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function D(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ne(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(n(92));if(Ke(l)){if(1<l.length)throw Error(n(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ue(l)}}function Se(i,s){var l=Ue(s.value),h=Ue(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function xe(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var De,We=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=De.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function xt(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ge=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(i){Ge.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ce[s]=Ce[i]})});function lt(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ce.hasOwnProperty(i)&&Ce[i]?(""+s).trim():s+"px"}function dt(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=lt(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Xe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function At(i,s){if(s){if(Xe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function vt(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ut=null;function $(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Oe=null,ue=null,ye=null;function ze(i){if(i=ec(i)){if(typeof Oe!="function")throw Error(n(280));var s=i.stateNode;s&&(s=xh(s),Oe(i.stateNode,i.type,s))}}function Fe(i){ue?ye?ye.push(i):ye=[i]:ue=i}function gt(){if(ue){var i=ue,s=ye;if(ye=ue=null,ze(i),s)for(i=0;i<s.length;i++)ze(s[i])}}function Qt(i,s){return i(s)}function Tn(){}var Ct=!1;function ui(i,s,l){if(Ct)return i(s,l);Ct=!0;try{return Qt(i,s,l)}finally{Ct=!1,(ue!==null||ye!==null)&&(Tn(),gt())}}function Yt(i,s){var l=i.stateNode;if(l===null)return null;var h=xh(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(n(231,s,typeof l));return l}var Ls=!1;if(f)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Ls=!1}function Ai(i,s,l,h,p,_,b,V,W){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(l,ae)}catch(Te){this.onError(Te)}}var Pr=!1,Is=null,Ii=!1,rs=null,Ka={onError:function(i){Pr=!0,Is=i}};function ss(i,s,l,h,p,_,b,V,W){Pr=!1,Is=null,Ai.apply(Ka,arguments)}function Za(i,s,l,h,p,_,b,V,W){if(ss.apply(this,arguments),Pr){if(Pr){var ae=Is;Pr=!1,Is=null}else throw Error(n(198));Ii||(Ii=!0,rs=ae)}}function Di(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Ds(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function $i(i){if(Di(i)!==i)throw Error(n(188))}function Ja(i){var s=i.alternate;if(!s){if(s=Di(i),s===null)throw Error(n(188));return s!==i?null:i}for(var l=i,h=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return $i(p),i;if(_===h)return $i(p),s;_=_.sibling}throw Error(n(188))}if(l.return!==h.return)l=p,h=_;else{for(var b=!1,V=p.child;V;){if(V===l){b=!0,l=p,h=_;break}if(V===h){b=!0,h=p,l=_;break}V=V.sibling}if(!b){for(V=_.child;V;){if(V===l){b=!0,l=_,h=p;break}if(V===h){b=!0,h=_,l=p;break}V=V.sibling}if(!b)throw Error(n(189))}}if(l.alternate!==h)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?i:s}function Jo(i){return i=Ja(i),i!==null?fo(i):null}function fo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=fo(i);if(s!==null)return s;i=i.sibling}return null}var po=e.unstable_scheduleCallback,U=e.unstable_cancelCallback,Z=e.unstable_shouldYield,oe=e.unstable_requestPaint,Q=e.unstable_now,J=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,qe=e.unstable_LowPriority,mt=e.unstable_IdlePriority,ct=null,Ye=null;function Lt(i){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ct,i,void 0,(i.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Dt,an=Math.log,sn=Math.LN2;function Dt(i){return i>>>=0,i===0?32:31-(an(i)/sn|0)|0}var it=64,fn=4194304;function bt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Gn(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,b=l&268435455;if(b!==0){var V=b&~p;V!==0?h=bt(V):(_&=b,_!==0&&(h=bt(_)))}else b=l&~p,b!==0?h=bt(b):_!==0&&(h=bt(_));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-yt(s),p=1<<l,h|=i[l],s&=~p;return h}function os(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _n(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var b=31-yt(_),V=1<<b,W=p[b];W===-1?((V&l)===0||(V&h)!==0)&&(p[b]=os(V,s)):W<=s&&(i.expiredLanes|=V),_&=~V}}function Wn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Wt(){var i=it;return it<<=1,(it&4194240)===0&&(it=64),i}function Pn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ln(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-yt(s),i[s]=l}function St(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-yt(l),_=1<<p;s[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function vn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-yt(l),p=1<<h;p&s|i[h]&s&&(i[h]|=s),l&=~p}}var Pt=0;function _i(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var eh,Qa,th,nh,ih,Bu=!1,as=[],ci=null,Lr=null,Ir=null,mo=new Map,pr=new Map,ls=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(i,s){switch(i){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":mo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(s.pointerId)}}function Ni(i,s,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ec(s),s!==null&&Qa(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Ud(i,s,l,h,p){switch(s){case"focusin":return ci=Ni(ci,i,s,l,h,p),!0;case"dragenter":return Lr=Ni(Lr,i,s,l,h,p),!0;case"mouseover":return Ir=Ni(Ir,i,s,l,h,p),!0;case"pointerover":var _=p.pointerId;return mo.set(_,Ni(mo.get(_)||null,i,s,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,pr.set(_,Ni(pr.get(_)||null,i,s,l,h,p)),!0}return!1}function sh(i){var s=na(i.target);if(s!==null){var l=Di(s);if(l!==null){if(s=l.tag,s===13){if(s=Ds(l),s!==null){i.blockedOn=s,ih(i.priority,function(){th(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ns(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=el(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Ut=h,l.target.dispatchEvent(h),Ut=null}else return s=ec(l),s!==null&&Qa(s),i.blockedOn=l,!1;s.shift()}return!0}function Qo(i,s,l){Ns(i)&&l.delete(s)}function oh(){Bu=!1,ci!==null&&Ns(ci)&&(ci=null),Lr!==null&&Ns(Lr)&&(Lr=null),Ir!==null&&Ns(Ir)&&(Ir=null),mo.forEach(Qo),pr.forEach(Qo)}function Dr(i,s){i.blockedOn===s&&(i.blockedOn=null,Bu||(Bu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,oh)))}function Nr(i){function s(p){return Dr(p,i)}if(0<as.length){Dr(as[0],i);for(var l=1;l<as.length;l++){var h=as[l];h.blockedOn===i&&(h.blockedOn=null)}}for(ci!==null&&Dr(ci,i),Lr!==null&&Dr(Lr,i),Ir!==null&&Dr(Ir,i),mo.forEach(s),pr.forEach(s),l=0;l<ls.length;l++)h=ls[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<ls.length&&(l=ls[0],l.blockedOn===null);)sh(l),l.blockedOn===null&&ls.shift()}var Us=O.ReactCurrentBatchConfig,go=!0;function yn(i,s,l,h){var p=Pt,_=Us.transition;Us.transition=null;try{Pt=1,zu(i,s,l,h)}finally{Pt=p,Us.transition=_}}function Fd(i,s,l,h){var p=Pt,_=Us.transition;Us.transition=null;try{Pt=4,zu(i,s,l,h)}finally{Pt=p,Us.transition=_}}function zu(i,s,l,h){if(go){var p=el(i,s,l,h);if(p===null)qd(i,s,h,ea,l),rh(i,h);else if(Ud(p,i,s,l,h))h.stopPropagation();else if(rh(i,h),s&4&&-1<Nd.indexOf(i)){for(;p!==null;){var _=ec(p);if(_!==null&&eh(_),_=el(i,s,l,h),_===null&&qd(i,s,h,ea,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else qd(i,s,h,null,l)}}var ea=null;function el(i,s,l,h){if(ea=null,i=$(h),i=na(i),i!==null)if(s=Di(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Ds(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ea=i,null}function Vu(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J()){case we:return 1;case Ne:return 4;case ke:case qe:return 16;case mt:return 536870912;default:return 16}default:return 16}}var Ki=null,tl=null,Ui=null;function Hu(){if(Ui)return Ui;var i,s=tl,l=s.length,h,p="value"in Ki?Ki.value:Ki.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var b=l-i;for(h=1;h<=b&&s[l-h]===p[_-h];h++);return Ui=p.slice(i,1<h?1-h:void 0)}function nl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function us(){return!0}function Gu(){return!1}function hi(i){function s(l,h,p,_,b){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var V in i)i.hasOwnProperty(V)&&(l=i[V],this[V]=l?l(_):_[V]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?us:Gu,this.isPropagationStopped=Gu,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=us)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=us)},persist:function(){},isPersistent:us}),s}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=hi(Ur),cs=le({},Ur,{view:0,detail:0}),Od=hi(cs),rl,Fs,_o,ta=le({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:u,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==_o&&(_o&&i.type==="mousemove"?(rl=i.screenX-_o.screenX,Fs=i.screenY-_o.screenY):Fs=rl=0,_o=i),rl)},movementY:function(i){return"movementY"in i?i.movementY:Fs}}),sl=hi(ta),Wu=le({},ta,{dataTransfer:0}),ah=hi(Wu),ol=le({},cs,{relatedTarget:0}),al=hi(ol),lh=le({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Os=hi(lh),uh=le({},Ur,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ch=hi(uh),hh=le({},Ur,{data:0}),ju=hi(hh),Fi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vo(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=dh[i])?!!s[i]:!1}function u(){return vo}var g=le({},cs,{key:function(i){if(i.key){var s=Fi[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=nl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?fh[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:u,charCode:function(i){return i.type==="keypress"?nl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?nl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),w=hi(g),F=le({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ee=hi(F),he=le({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:u}),Le=hi(he),en=le({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),jn=hi(en),Ft=le({},ta,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Qn=hi(Ft),ei=[9,13,27,32],hs=f&&"CompositionEvent"in window,fi=null;f&&"documentMode"in document&&(fi=document.documentMode);var ll=f&&"TextEvent"in window&&!fi,ul=f&&(!hs||fi&&8<fi&&11>=fi),T_=" ",w_=!1;function A_(i,s){switch(i){case"keyup":return ei.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var cl=!1;function cE(i,s){switch(i){case"compositionend":return R_(s);case"keypress":return s.which!==32?null:(w_=!0,T_);case"textInput":return i=s.data,i===T_&&w_?null:i;default:return null}}function hE(i,s){if(cl)return i==="compositionend"||!hs&&A_(i,s)?(i=Hu(),Ui=tl=Ki=null,cl=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ul&&s.locale!=="ko"?null:s.data;default:return null}}var fE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function C_(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!fE[i.type]:s==="textarea"}function b_(i,s,l,h){Fe(h),s=vh(s,"onChange"),0<s.length&&(l=new il("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var Xu=null,qu=null;function dE(i){q_(i,0)}function ph(i){var s=ml(i);if(Mt(s))return i}function pE(i,s){if(i==="change")return s}var P_=!1;if(f){var kd;if(f){var Bd="oninput"in document;if(!Bd){var L_=document.createElement("div");L_.setAttribute("oninput","return;"),Bd=typeof L_.oninput=="function"}kd=Bd}else kd=!1;P_=kd&&(!document.documentMode||9<document.documentMode)}function I_(){Xu&&(Xu.detachEvent("onpropertychange",D_),qu=Xu=null)}function D_(i){if(i.propertyName==="value"&&ph(qu)){var s=[];b_(s,qu,i,$(i)),ui(dE,s)}}function mE(i,s,l){i==="focusin"?(I_(),Xu=s,qu=l,Xu.attachEvent("onpropertychange",D_)):i==="focusout"&&I_()}function gE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ph(qu)}function _E(i,s){if(i==="click")return ph(s)}function vE(i,s){if(i==="input"||i==="change")return ph(s)}function yE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Fr=typeof Object.is=="function"?Object.is:yE;function Yu(i,s){if(Fr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!d.call(s,p)||!Fr(i[p],s[p]))return!1}return!0}function N_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function U_(i,s){var l=N_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=N_(l)}}function F_(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?F_(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function O_(){for(var i=window,s=Jt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Jt(i.document)}return s}function zd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function SE(i){var s=O_(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&F_(l.ownerDocument.documentElement,l)){if(h!==null&&zd(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=U_(l,_);var b=U_(l,h);p&&b&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var xE=f&&"documentMode"in document&&11>=document.documentMode,hl=null,Vd=null,$u=null,Hd=!1;function k_(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Hd||hl==null||hl!==Jt(h)||(h=hl,"selectionStart"in h&&zd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),$u&&Yu($u,h)||($u=h,h=vh(Vd,"onSelect"),0<h.length&&(s=new il("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=hl)))}function mh(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var fl={animationend:mh("Animation","AnimationEnd"),animationiteration:mh("Animation","AnimationIteration"),animationstart:mh("Animation","AnimationStart"),transitionend:mh("Transition","TransitionEnd")},Gd={},B_={};f&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function gh(i){if(Gd[i])return Gd[i];if(!fl[i])return i;var s=fl[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in B_)return Gd[i]=s[l];return i}var z_=gh("animationend"),V_=gh("animationiteration"),H_=gh("animationstart"),G_=gh("transitionend"),W_=new Map,j_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yo(i,s){W_.set(i,s),a(s,[i])}for(var Wd=0;Wd<j_.length;Wd++){var jd=j_[Wd],EE=jd.toLowerCase(),ME=jd[0].toUpperCase()+jd.slice(1);yo(EE,"on"+ME)}yo(z_,"onAnimationEnd"),yo(V_,"onAnimationIteration"),yo(H_,"onAnimationStart"),yo("dblclick","onDoubleClick"),yo("focusin","onFocus"),yo("focusout","onBlur"),yo(G_,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ku));function X_(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,Za(h,s,void 0,i),i.currentTarget=null}function q_(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(s)for(var b=h.length-1;0<=b;b--){var V=h[b],W=V.instance,ae=V.currentTarget;if(V=V.listener,W!==_&&p.isPropagationStopped())break e;X_(p,V,ae),_=W}else for(b=0;b<h.length;b++){if(V=h[b],W=V.instance,ae=V.currentTarget,V=V.listener,W!==_&&p.isPropagationStopped())break e;X_(p,V,ae),_=W}}}if(Ii)throw i=rs,Ii=!1,rs=null,i}function cn(i,s){var l=s[Qd];l===void 0&&(l=s[Qd]=new Set);var h=i+"__bubble";l.has(h)||(Y_(s,i,2,!1),l.add(h))}function Xd(i,s,l){var h=0;s&&(h|=4),Y_(l,i,h,s)}var _h="_reactListening"+Math.random().toString(36).slice(2);function Zu(i){if(!i[_h]){i[_h]=!0,r.forEach(function(l){l!=="selectionchange"&&(TE.has(l)||Xd(l,!1,i),Xd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[_h]||(s[_h]=!0,Xd("selectionchange",!1,s))}}function Y_(i,s,l,h){switch(Vu(s)){case 1:var p=yn;break;case 4:p=Fd;break;default:p=zu}l=p.bind(null,s,l,i),p=void 0,!Ls||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function qd(i,s,l,h,p){var _=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var b=h.tag;if(b===3||b===4){var V=h.stateNode.containerInfo;if(V===p||V.nodeType===8&&V.parentNode===p)break;if(b===4)for(b=h.return;b!==null;){var W=b.tag;if((W===3||W===4)&&(W=b.stateNode.containerInfo,W===p||W.nodeType===8&&W.parentNode===p))return;b=b.return}for(;V!==null;){if(b=na(V),b===null)return;if(W=b.tag,W===5||W===6){h=_=b;continue e}V=V.parentNode}}h=h.return}ui(function(){var ae=_,Te=$(l),Re=[];e:{var Me=W_.get(i);if(Me!==void 0){var je=il,Ze=i;switch(i){case"keypress":if(nl(l)===0)break e;case"keydown":case"keyup":je=w;break;case"focusin":Ze="focus",je=al;break;case"focusout":Ze="blur",je=al;break;case"beforeblur":case"afterblur":je=al;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=Le;break;case z_:case V_:case H_:je=Os;break;case G_:je=jn;break;case"scroll":je=Od;break;case"wheel":je=Qn;break;case"copy":case"cut":case"paste":je=ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=ee}var Qe=(s&4)!==0,In=!Qe&&i==="scroll",te=Qe?Me!==null?Me+"Capture":null:Me;Qe=[];for(var Y=ae,ie;Y!==null;){ie=Y;var be=ie.stateNode;if(ie.tag===5&&be!==null&&(ie=be,te!==null&&(be=Yt(Y,te),be!=null&&Qe.push(Ju(Y,be,ie)))),In)break;Y=Y.return}0<Qe.length&&(Me=new je(Me,Ze,null,l,Te),Re.push({event:Me,listeners:Qe}))}}if((s&7)===0){e:{if(Me=i==="mouseover"||i==="pointerover",je=i==="mouseout"||i==="pointerout",Me&&l!==Ut&&(Ze=l.relatedTarget||l.fromElement)&&(na(Ze)||Ze[ks]))break e;if((je||Me)&&(Me=Te.window===Te?Te:(Me=Te.ownerDocument)?Me.defaultView||Me.parentWindow:window,je?(Ze=l.relatedTarget||l.toElement,je=ae,Ze=Ze?na(Ze):null,Ze!==null&&(In=Di(Ze),Ze!==In||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(je=null,Ze=ae),je!==Ze)){if(Qe=sl,be="onMouseLeave",te="onMouseEnter",Y="mouse",(i==="pointerout"||i==="pointerover")&&(Qe=ee,be="onPointerLeave",te="onPointerEnter",Y="pointer"),In=je==null?Me:ml(je),ie=Ze==null?Me:ml(Ze),Me=new Qe(be,Y+"leave",je,l,Te),Me.target=In,Me.relatedTarget=ie,be=null,na(Te)===ae&&(Qe=new Qe(te,Y+"enter",Ze,l,Te),Qe.target=ie,Qe.relatedTarget=In,be=Qe),In=be,je&&Ze)t:{for(Qe=je,te=Ze,Y=0,ie=Qe;ie;ie=dl(ie))Y++;for(ie=0,be=te;be;be=dl(be))ie++;for(;0<Y-ie;)Qe=dl(Qe),Y--;for(;0<ie-Y;)te=dl(te),ie--;for(;Y--;){if(Qe===te||te!==null&&Qe===te.alternate)break t;Qe=dl(Qe),te=dl(te)}Qe=null}else Qe=null;je!==null&&$_(Re,Me,je,Qe,!1),Ze!==null&&In!==null&&$_(Re,In,Ze,Qe,!0)}}e:{if(Me=ae?ml(ae):window,je=Me.nodeName&&Me.nodeName.toLowerCase(),je==="select"||je==="input"&&Me.type==="file")var et=pE;else if(C_(Me))if(P_)et=vE;else{et=gE;var ht=mE}else(je=Me.nodeName)&&je.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(et=_E);if(et&&(et=et(i,ae))){b_(Re,et,l,Te);break e}ht&&ht(i,Me,ae),i==="focusout"&&(ht=Me._wrapperState)&&ht.controlled&&Me.type==="number"&&Gt(Me,"number",Me.value)}switch(ht=ae?ml(ae):window,i){case"focusin":(C_(ht)||ht.contentEditable==="true")&&(hl=ht,Vd=ae,$u=null);break;case"focusout":$u=Vd=hl=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,k_(Re,l,Te);break;case"selectionchange":if(xE)break;case"keydown":case"keyup":k_(Re,l,Te)}var ft;if(hs)e:{switch(i){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else cl?A_(i,l)&&(_t="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(_t="onCompositionStart");_t&&(ul&&l.locale!=="ko"&&(cl||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&cl&&(ft=Hu()):(Ki=Te,tl="value"in Ki?Ki.value:Ki.textContent,cl=!0)),ht=vh(ae,_t),0<ht.length&&(_t=new ju(_t,i,null,l,Te),Re.push({event:_t,listeners:ht}),ft?_t.data=ft:(ft=R_(l),ft!==null&&(_t.data=ft)))),(ft=ll?cE(i,l):hE(i,l))&&(ae=vh(ae,"onBeforeInput"),0<ae.length&&(Te=new ju("onBeforeInput","beforeinput",null,l,Te),Re.push({event:Te,listeners:ae}),Te.data=ft))}q_(Re,s)})}function Ju(i,s,l){return{instance:i,listener:s,currentTarget:l}}function vh(i,s){for(var l=s+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Yt(i,l),_!=null&&h.unshift(Ju(i,_,p)),_=Yt(i,s),_!=null&&h.push(Ju(i,_,p))),i=i.return}return h}function dl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function $_(i,s,l,h,p){for(var _=s._reactName,b=[];l!==null&&l!==h;){var V=l,W=V.alternate,ae=V.stateNode;if(W!==null&&W===h)break;V.tag===5&&ae!==null&&(V=ae,p?(W=Yt(l,_),W!=null&&b.unshift(Ju(l,W,V))):p||(W=Yt(l,_),W!=null&&b.push(Ju(l,W,V)))),l=l.return}b.length!==0&&i.push({event:s,listeners:b})}var wE=/\r\n?/g,AE=/\u0000|\uFFFD/g;function K_(i){return(typeof i=="string"?i:""+i).replace(wE,`
`).replace(AE,"")}function yh(i,s,l){if(s=K_(s),K_(i)!==s&&l)throw Error(n(425))}function Sh(){}var Yd=null,$d=null;function Kd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,CE=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(i){return Z_.resolve(null).then(i).catch(bE)}:Zd;function bE(i){setTimeout(function(){throw i})}function Jd(i,s){var l=s,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Nr(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Nr(s)}function So(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function J_(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var pl=Math.random().toString(36).slice(2),fs="__reactFiber$"+pl,Qu="__reactProps$"+pl,ks="__reactContainer$"+pl,Qd="__reactEvents$"+pl,PE="__reactListeners$"+pl,LE="__reactHandles$"+pl;function na(i){var s=i[fs];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ks]||l[fs]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=J_(i);i!==null;){if(l=i[fs])return l;i=J_(i)}return s}i=l,l=i.parentNode}return null}function ec(i){return i=i[fs]||i[ks],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ml(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function xh(i){return i[Qu]||null}var ep=[],gl=-1;function xo(i){return{current:i}}function hn(i){0>gl||(i.current=ep[gl],ep[gl]=null,gl--)}function ln(i,s){gl++,ep[gl]=i.current,i.current=s}var Eo={},vi=xo(Eo),Oi=xo(!1),ia=Eo;function _l(i,s){var l=i.type.contextTypes;if(!l)return Eo;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function ki(i){return i=i.childContextTypes,i!=null}function Eh(){hn(Oi),hn(vi)}function Q_(i,s,l){if(vi.current!==Eo)throw Error(n(168));ln(vi,s),ln(Oi,l)}function ev(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(n(108,Ee(i)||"Unknown",p));return le({},l,h)}function Mh(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Eo,ia=vi.current,ln(vi,i),ln(Oi,Oi.current),!0}function tv(i,s,l){var h=i.stateNode;if(!h)throw Error(n(169));l?(i=ev(i,s,ia),h.__reactInternalMemoizedMergedChildContext=i,hn(Oi),hn(vi),ln(vi,i)):hn(Oi),ln(Oi,l)}var Bs=null,Th=!1,tp=!1;function nv(i){Bs===null?Bs=[i]:Bs.push(i)}function IE(i){Th=!0,nv(i)}function Mo(){if(!tp&&Bs!==null){tp=!0;var i=0,s=Pt;try{var l=Bs;for(Pt=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Bs=null,Th=!1}catch(p){throw Bs!==null&&(Bs=Bs.slice(i+1)),po(we,Mo),p}finally{Pt=s,tp=!1}}return null}var vl=[],yl=0,wh=null,Ah=0,mr=[],gr=0,ra=null,zs=1,Vs="";function sa(i,s){vl[yl++]=Ah,vl[yl++]=wh,wh=i,Ah=s}function iv(i,s,l){mr[gr++]=zs,mr[gr++]=Vs,mr[gr++]=ra,ra=i;var h=zs;i=Vs;var p=32-yt(h)-1;h&=~(1<<p),l+=1;var _=32-yt(s)+p;if(30<_){var b=p-p%5;_=(h&(1<<b)-1).toString(32),h>>=b,p-=b,zs=1<<32-yt(s)+p|l<<p|h,Vs=_+i}else zs=1<<_|l<<p|h,Vs=i}function np(i){i.return!==null&&(sa(i,1),iv(i,1,0))}function ip(i){for(;i===wh;)wh=vl[--yl],vl[yl]=null,Ah=vl[--yl],vl[yl]=null;for(;i===ra;)ra=mr[--gr],mr[gr]=null,Vs=mr[--gr],mr[gr]=null,zs=mr[--gr],mr[gr]=null}var Zi=null,Ji=null,dn=!1,Or=null;function rv(i,s){var l=Sr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function sv(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Zi=i,Ji=So(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Zi=i,Ji=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ra!==null?{id:zs,overflow:Vs}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Sr(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Zi=i,Ji=null,!0):!1;default:return!1}}function rp(i){return(i.mode&1)!==0&&(i.flags&128)===0}function sp(i){if(dn){var s=Ji;if(s){var l=s;if(!sv(i,s)){if(rp(i))throw Error(n(418));s=So(l.nextSibling);var h=Zi;s&&sv(i,s)?rv(h,l):(i.flags=i.flags&-4097|2,dn=!1,Zi=i)}}else{if(rp(i))throw Error(n(418));i.flags=i.flags&-4097|2,dn=!1,Zi=i}}}function ov(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Zi=i}function Rh(i){if(i!==Zi)return!1;if(!dn)return ov(i),dn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Kd(i.type,i.memoizedProps)),s&&(s=Ji)){if(rp(i))throw av(),Error(n(418));for(;s;)rv(i,s),s=So(s.nextSibling)}if(ov(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Ji=So(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Ji=null}}else Ji=Zi?So(i.stateNode.nextSibling):null;return!0}function av(){for(var i=Ji;i;)i=So(i.nextSibling)}function Sl(){Ji=Zi=null,dn=!1}function op(i){Or===null?Or=[i]:Or.push(i)}var DE=O.ReactCurrentBatchConfig;function tc(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var h=l.stateNode}if(!h)throw Error(n(147,i));var p=h,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(b){var V=p.refs;b===null?delete V[_]:V[_]=b},s._stringRef=_,s)}if(typeof i!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,i))}return i}function Ch(i,s){throw i=Object.prototype.toString.call(s),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function lv(i){var s=i._init;return s(i._payload)}function uv(i){function s(te,Y){if(i){var ie=te.deletions;ie===null?(te.deletions=[Y],te.flags|=16):ie.push(Y)}}function l(te,Y){if(!i)return null;for(;Y!==null;)s(te,Y),Y=Y.sibling;return null}function h(te,Y){for(te=new Map;Y!==null;)Y.key!==null?te.set(Y.key,Y):te.set(Y.index,Y),Y=Y.sibling;return te}function p(te,Y){return te=Lo(te,Y),te.index=0,te.sibling=null,te}function _(te,Y,ie){return te.index=ie,i?(ie=te.alternate,ie!==null?(ie=ie.index,ie<Y?(te.flags|=2,Y):ie):(te.flags|=2,Y)):(te.flags|=1048576,Y)}function b(te){return i&&te.alternate===null&&(te.flags|=2),te}function V(te,Y,ie,be){return Y===null||Y.tag!==6?(Y=Zp(ie,te.mode,be),Y.return=te,Y):(Y=p(Y,ie),Y.return=te,Y)}function W(te,Y,ie,be){var et=ie.type;return et===L?Te(te,Y,ie.props.children,be,ie.key):Y!==null&&(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===pe&&lv(et)===Y.type)?(be=p(Y,ie.props),be.ref=tc(te,Y,ie),be.return=te,be):(be=Jh(ie.type,ie.key,ie.props,null,te.mode,be),be.ref=tc(te,Y,ie),be.return=te,be)}function ae(te,Y,ie,be){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=Jp(ie,te.mode,be),Y.return=te,Y):(Y=p(Y,ie.children||[]),Y.return=te,Y)}function Te(te,Y,ie,be,et){return Y===null||Y.tag!==7?(Y=da(ie,te.mode,be,et),Y.return=te,Y):(Y=p(Y,ie),Y.return=te,Y)}function Re(te,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Zp(""+Y,te.mode,ie),Y.return=te,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case K:return ie=Jh(Y.type,Y.key,Y.props,null,te.mode,ie),ie.ref=tc(te,null,Y),ie.return=te,ie;case j:return Y=Jp(Y,te.mode,ie),Y.return=te,Y;case pe:var be=Y._init;return Re(te,be(Y._payload),ie)}if(Ke(Y)||ge(Y))return Y=da(Y,te.mode,ie,null),Y.return=te,Y;Ch(te,Y)}return null}function Me(te,Y,ie,be){var et=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return et!==null?null:V(te,Y,""+ie,be);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case K:return ie.key===et?W(te,Y,ie,be):null;case j:return ie.key===et?ae(te,Y,ie,be):null;case pe:return et=ie._init,Me(te,Y,et(ie._payload),be)}if(Ke(ie)||ge(ie))return et!==null?null:Te(te,Y,ie,be,null);Ch(te,ie)}return null}function je(te,Y,ie,be,et){if(typeof be=="string"&&be!==""||typeof be=="number")return te=te.get(ie)||null,V(Y,te,""+be,et);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case K:return te=te.get(be.key===null?ie:be.key)||null,W(Y,te,be,et);case j:return te=te.get(be.key===null?ie:be.key)||null,ae(Y,te,be,et);case pe:var ht=be._init;return je(te,Y,ie,ht(be._payload),et)}if(Ke(be)||ge(be))return te=te.get(ie)||null,Te(Y,te,be,et,null);Ch(Y,be)}return null}function Ze(te,Y,ie,be){for(var et=null,ht=null,ft=Y,_t=Y=0,ii=null;ft!==null&&_t<ie.length;_t++){ft.index>_t?(ii=ft,ft=null):ii=ft.sibling;var jt=Me(te,ft,ie[_t],be);if(jt===null){ft===null&&(ft=ii);break}i&&ft&&jt.alternate===null&&s(te,ft),Y=_(jt,Y,_t),ht===null?et=jt:ht.sibling=jt,ht=jt,ft=ii}if(_t===ie.length)return l(te,ft),dn&&sa(te,_t),et;if(ft===null){for(;_t<ie.length;_t++)ft=Re(te,ie[_t],be),ft!==null&&(Y=_(ft,Y,_t),ht===null?et=ft:ht.sibling=ft,ht=ft);return dn&&sa(te,_t),et}for(ft=h(te,ft);_t<ie.length;_t++)ii=je(ft,te,_t,ie[_t],be),ii!==null&&(i&&ii.alternate!==null&&ft.delete(ii.key===null?_t:ii.key),Y=_(ii,Y,_t),ht===null?et=ii:ht.sibling=ii,ht=ii);return i&&ft.forEach(function(Io){return s(te,Io)}),dn&&sa(te,_t),et}function Qe(te,Y,ie,be){var et=ge(ie);if(typeof et!="function")throw Error(n(150));if(ie=et.call(ie),ie==null)throw Error(n(151));for(var ht=et=null,ft=Y,_t=Y=0,ii=null,jt=ie.next();ft!==null&&!jt.done;_t++,jt=ie.next()){ft.index>_t?(ii=ft,ft=null):ii=ft.sibling;var Io=Me(te,ft,jt.value,be);if(Io===null){ft===null&&(ft=ii);break}i&&ft&&Io.alternate===null&&s(te,ft),Y=_(Io,Y,_t),ht===null?et=Io:ht.sibling=Io,ht=Io,ft=ii}if(jt.done)return l(te,ft),dn&&sa(te,_t),et;if(ft===null){for(;!jt.done;_t++,jt=ie.next())jt=Re(te,jt.value,be),jt!==null&&(Y=_(jt,Y,_t),ht===null?et=jt:ht.sibling=jt,ht=jt);return dn&&sa(te,_t),et}for(ft=h(te,ft);!jt.done;_t++,jt=ie.next())jt=je(ft,te,_t,jt.value,be),jt!==null&&(i&&jt.alternate!==null&&ft.delete(jt.key===null?_t:jt.key),Y=_(jt,Y,_t),ht===null?et=jt:ht.sibling=jt,ht=jt);return i&&ft.forEach(function(fM){return s(te,fM)}),dn&&sa(te,_t),et}function In(te,Y,ie,be){if(typeof ie=="object"&&ie!==null&&ie.type===L&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case K:e:{for(var et=ie.key,ht=Y;ht!==null;){if(ht.key===et){if(et=ie.type,et===L){if(ht.tag===7){l(te,ht.sibling),Y=p(ht,ie.props.children),Y.return=te,te=Y;break e}}else if(ht.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===pe&&lv(et)===ht.type){l(te,ht.sibling),Y=p(ht,ie.props),Y.ref=tc(te,ht,ie),Y.return=te,te=Y;break e}l(te,ht);break}else s(te,ht);ht=ht.sibling}ie.type===L?(Y=da(ie.props.children,te.mode,be,ie.key),Y.return=te,te=Y):(be=Jh(ie.type,ie.key,ie.props,null,te.mode,be),be.ref=tc(te,Y,ie),be.return=te,te=be)}return b(te);case j:e:{for(ht=ie.key;Y!==null;){if(Y.key===ht)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){l(te,Y.sibling),Y=p(Y,ie.children||[]),Y.return=te,te=Y;break e}else{l(te,Y);break}else s(te,Y);Y=Y.sibling}Y=Jp(ie,te.mode,be),Y.return=te,te=Y}return b(te);case pe:return ht=ie._init,In(te,Y,ht(ie._payload),be)}if(Ke(ie))return Ze(te,Y,ie,be);if(ge(ie))return Qe(te,Y,ie,be);Ch(te,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,Y!==null&&Y.tag===6?(l(te,Y.sibling),Y=p(Y,ie),Y.return=te,te=Y):(l(te,Y),Y=Zp(ie,te.mode,be),Y.return=te,te=Y),b(te)):l(te,Y)}return In}var xl=uv(!0),cv=uv(!1),bh=xo(null),Ph=null,El=null,ap=null;function lp(){ap=El=Ph=null}function up(i){var s=bh.current;hn(bh),i._currentValue=s}function cp(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Ml(i,s){Ph=i,ap=El=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Bi=!0),i.firstContext=null)}function _r(i){var s=i._currentValue;if(ap!==i)if(i={context:i,memoizedValue:s,next:null},El===null){if(Ph===null)throw Error(n(308));El=i,Ph.dependencies={lanes:0,firstContext:i}}else El=El.next=i;return s}var oa=null;function hp(i){oa===null?oa=[i]:oa.push(i)}function hv(i,s,l,h){var p=s.interleaved;return p===null?(l.next=l,hp(s)):(l.next=p.next,p.next=l),s.interleaved=l,Hs(i,h)}function Hs(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var To=!1;function fp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Gs(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function wo(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(zt&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Hs(i,l)}return p=h.interleaved,p===null?(s.next=s,hp(h)):(s.next=p.next,p.next=s),h.interleaved=s,Hs(i,l)}function Lh(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,vn(i,l)}}function dv(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=b:_=_.next=b,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ih(i,s,l,h){var p=i.updateQueue;To=!1;var _=p.firstBaseUpdate,b=p.lastBaseUpdate,V=p.shared.pending;if(V!==null){p.shared.pending=null;var W=V,ae=W.next;W.next=null,b===null?_=ae:b.next=ae,b=W;var Te=i.alternate;Te!==null&&(Te=Te.updateQueue,V=Te.lastBaseUpdate,V!==b&&(V===null?Te.firstBaseUpdate=ae:V.next=ae,Te.lastBaseUpdate=W))}if(_!==null){var Re=p.baseState;b=0,Te=ae=W=null,V=_;do{var Me=V.lane,je=V.eventTime;if((h&Me)===Me){Te!==null&&(Te=Te.next={eventTime:je,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var Ze=i,Qe=V;switch(Me=s,je=l,Qe.tag){case 1:if(Ze=Qe.payload,typeof Ze=="function"){Re=Ze.call(je,Re,Me);break e}Re=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Qe.payload,Me=typeof Ze=="function"?Ze.call(je,Re,Me):Ze,Me==null)break e;Re=le({},Re,Me);break e;case 2:To=!0}}V.callback!==null&&V.lane!==0&&(i.flags|=64,Me=p.effects,Me===null?p.effects=[V]:Me.push(V))}else je={eventTime:je,lane:Me,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Te===null?(ae=Te=je,W=Re):Te=Te.next=je,b|=Me;if(V=V.next,V===null){if(V=p.shared.pending,V===null)break;Me=V,V=Me.next,Me.next=null,p.lastBaseUpdate=Me,p.shared.pending=null}}while(!0);if(Te===null&&(W=Re),p.baseState=W,p.firstBaseUpdate=ae,p.lastBaseUpdate=Te,s=p.shared.interleaved,s!==null){p=s;do b|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ua|=b,i.lanes=b,i.memoizedState=Re}}function pv(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(n(191,p));p.call(h)}}}var nc={},ds=xo(nc),ic=xo(nc),rc=xo(nc);function aa(i){if(i===nc)throw Error(n(174));return i}function dp(i,s){switch(ln(rc,s),ln(ic,i),ln(ds,nc),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Be(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Be(s,i)}hn(ds),ln(ds,s)}function Tl(){hn(ds),hn(ic),hn(rc)}function mv(i){aa(rc.current);var s=aa(ds.current),l=Be(s,i.type);s!==l&&(ln(ic,i),ln(ds,l))}function pp(i){ic.current===i&&(hn(ds),hn(ic))}var Sn=xo(0);function Dh(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var mp=[];function gp(){for(var i=0;i<mp.length;i++)mp[i]._workInProgressVersionPrimary=null;mp.length=0}var Nh=O.ReactCurrentDispatcher,_p=O.ReactCurrentBatchConfig,la=0,xn=null,Xn=null,ti=null,Uh=!1,sc=!1,oc=0,NE=0;function yi(){throw Error(n(321))}function vp(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Fr(i[l],s[l]))return!1;return!0}function yp(i,s,l,h,p,_){if(la=_,xn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Nh.current=i===null||i.memoizedState===null?kE:BE,i=l(h,p),sc){_=0;do{if(sc=!1,oc=0,25<=_)throw Error(n(301));_+=1,ti=Xn=null,s.updateQueue=null,Nh.current=zE,i=l(h,p)}while(sc)}if(Nh.current=kh,s=Xn!==null&&Xn.next!==null,la=0,ti=Xn=xn=null,Uh=!1,s)throw Error(n(300));return i}function Sp(){var i=oc!==0;return oc=0,i}function ps(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ti===null?xn.memoizedState=ti=i:ti=ti.next=i,ti}function vr(){if(Xn===null){var i=xn.alternate;i=i!==null?i.memoizedState:null}else i=Xn.next;var s=ti===null?xn.memoizedState:ti.next;if(s!==null)ti=s,Xn=i;else{if(i===null)throw Error(n(310));Xn=i,i={memoizedState:Xn.memoizedState,baseState:Xn.baseState,baseQueue:Xn.baseQueue,queue:Xn.queue,next:null},ti===null?xn.memoizedState=ti=i:ti=ti.next=i}return ti}function ac(i,s){return typeof s=="function"?s(i):s}function xp(i){var s=vr(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var h=Xn,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var b=p.next;p.next=_.next,_.next=b}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var V=b=null,W=null,ae=_;do{var Te=ae.lane;if((la&Te)===Te)W!==null&&(W=W.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),h=ae.hasEagerState?ae.eagerState:i(h,ae.action);else{var Re={lane:Te,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};W===null?(V=W=Re,b=h):W=W.next=Re,xn.lanes|=Te,ua|=Te}ae=ae.next}while(ae!==null&&ae!==_);W===null?b=h:W.next=V,Fr(h,s.memoizedState)||(Bi=!0),s.memoizedState=h,s.baseState=b,s.baseQueue=W,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,xn.lanes|=_,ua|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Ep(i){var s=vr(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var b=p=p.next;do _=i(_,b.action),b=b.next;while(b!==p);Fr(_,s.memoizedState)||(Bi=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,h]}function gv(){}function _v(i,s){var l=xn,h=vr(),p=s(),_=!Fr(h.memoizedState,p);if(_&&(h.memoizedState=p,Bi=!0),h=h.queue,Mp(Sv.bind(null,l,h,i),[i]),h.getSnapshot!==s||_||ti!==null&&ti.memoizedState.tag&1){if(l.flags|=2048,lc(9,yv.bind(null,l,h,p,s),void 0,null),ni===null)throw Error(n(349));(la&30)!==0||vv(l,s,p)}return p}function vv(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=xn.updateQueue,s===null?(s={lastEffect:null,stores:null},xn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function yv(i,s,l,h){s.value=l,s.getSnapshot=h,xv(s)&&Ev(i)}function Sv(i,s,l){return l(function(){xv(s)&&Ev(i)})}function xv(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Fr(i,l)}catch{return!0}}function Ev(i){var s=Hs(i,1);s!==null&&Vr(s,i,1,-1)}function Mv(i){var s=ps();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ac,lastRenderedState:i},s.queue=i,i=i.dispatch=OE.bind(null,xn,i),[s.memoizedState,i]}function lc(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=xn.updateQueue,s===null?(s={lastEffect:null,stores:null},xn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function Tv(){return vr().memoizedState}function Fh(i,s,l,h){var p=ps();xn.flags|=i,p.memoizedState=lc(1|s,l,void 0,h===void 0?null:h)}function Oh(i,s,l,h){var p=vr();h=h===void 0?null:h;var _=void 0;if(Xn!==null){var b=Xn.memoizedState;if(_=b.destroy,h!==null&&vp(h,b.deps)){p.memoizedState=lc(s,l,_,h);return}}xn.flags|=i,p.memoizedState=lc(1|s,l,_,h)}function wv(i,s){return Fh(8390656,8,i,s)}function Mp(i,s){return Oh(2048,8,i,s)}function Av(i,s){return Oh(4,2,i,s)}function Rv(i,s){return Oh(4,4,i,s)}function Cv(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function bv(i,s,l){return l=l!=null?l.concat([i]):null,Oh(4,4,Cv.bind(null,s,i),l)}function Tp(){}function Pv(i,s){var l=vr();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&vp(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function Lv(i,s){var l=vr();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&vp(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function Iv(i,s,l){return(la&21)===0?(i.baseState&&(i.baseState=!1,Bi=!0),i.memoizedState=l):(Fr(l,s)||(l=Wt(),xn.lanes|=l,ua|=l,i.baseState=!0),s)}function UE(i,s){var l=Pt;Pt=l!==0&&4>l?l:4,i(!0);var h=_p.transition;_p.transition={};try{i(!1),s()}finally{Pt=l,_p.transition=h}}function Dv(){return vr().memoizedState}function FE(i,s,l){var h=bo(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Nv(i))Uv(s,l);else if(l=hv(i,s,l,h),l!==null){var p=Ci();Vr(l,i,h,p),Fv(l,s,h)}}function OE(i,s,l){var h=bo(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Nv(i))Uv(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var b=s.lastRenderedState,V=_(b,l);if(p.hasEagerState=!0,p.eagerState=V,Fr(V,b)){var W=s.interleaved;W===null?(p.next=p,hp(s)):(p.next=W.next,W.next=p),s.interleaved=p;return}}catch{}finally{}l=hv(i,s,p,h),l!==null&&(p=Ci(),Vr(l,i,h,p),Fv(l,s,h))}}function Nv(i){var s=i.alternate;return i===xn||s!==null&&s===xn}function Uv(i,s){sc=Uh=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Fv(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,vn(i,l)}}var kh={readContext:_r,useCallback:yi,useContext:yi,useEffect:yi,useImperativeHandle:yi,useInsertionEffect:yi,useLayoutEffect:yi,useMemo:yi,useReducer:yi,useRef:yi,useState:yi,useDebugValue:yi,useDeferredValue:yi,useTransition:yi,useMutableSource:yi,useSyncExternalStore:yi,useId:yi,unstable_isNewReconciler:!1},kE={readContext:_r,useCallback:function(i,s){return ps().memoizedState=[i,s===void 0?null:s],i},useContext:_r,useEffect:wv,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Fh(4194308,4,Cv.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Fh(4194308,4,i,s)},useInsertionEffect:function(i,s){return Fh(4,2,i,s)},useMemo:function(i,s){var l=ps();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=ps();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=FE.bind(null,xn,i),[h.memoizedState,i]},useRef:function(i){var s=ps();return i={current:i},s.memoizedState=i},useState:Mv,useDebugValue:Tp,useDeferredValue:function(i){return ps().memoizedState=i},useTransition:function(){var i=Mv(!1),s=i[0];return i=UE.bind(null,i[1]),ps().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=xn,p=ps();if(dn){if(l===void 0)throw Error(n(407));l=l()}else{if(l=s(),ni===null)throw Error(n(349));(la&30)!==0||vv(h,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,wv(Sv.bind(null,h,_,i),[i]),h.flags|=2048,lc(9,yv.bind(null,h,_,l,s),void 0,null),l},useId:function(){var i=ps(),s=ni.identifierPrefix;if(dn){var l=Vs,h=zs;l=(h&~(1<<32-yt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=oc++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=NE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},BE={readContext:_r,useCallback:Pv,useContext:_r,useEffect:Mp,useImperativeHandle:bv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Lv,useReducer:xp,useRef:Tv,useState:function(){return xp(ac)},useDebugValue:Tp,useDeferredValue:function(i){var s=vr();return Iv(s,Xn.memoizedState,i)},useTransition:function(){var i=xp(ac)[0],s=vr().memoizedState;return[i,s]},useMutableSource:gv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1},zE={readContext:_r,useCallback:Pv,useContext:_r,useEffect:Mp,useImperativeHandle:bv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Lv,useReducer:Ep,useRef:Tv,useState:function(){return Ep(ac)},useDebugValue:Tp,useDeferredValue:function(i){var s=vr();return Xn===null?s.memoizedState=i:Iv(s,Xn.memoizedState,i)},useTransition:function(){var i=Ep(ac)[0],s=vr().memoizedState;return[i,s]},useMutableSource:gv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1};function kr(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function wp(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Bh={isMounted:function(i){return(i=i._reactInternals)?Di(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=Ci(),p=bo(i),_=Gs(h,p);_.payload=s,l!=null&&(_.callback=l),s=wo(i,_,p),s!==null&&(Vr(s,i,p,h),Lh(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=Ci(),p=bo(i),_=Gs(h,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=wo(i,_,p),s!==null&&(Vr(s,i,p,h),Lh(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Ci(),h=bo(i),p=Gs(l,h);p.tag=2,s!=null&&(p.callback=s),s=wo(i,p,h),s!==null&&(Vr(s,i,h,l),Lh(s,i,h))}};function Ov(i,s,l,h,p,_,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,b):s.prototype&&s.prototype.isPureReactComponent?!Yu(l,h)||!Yu(p,_):!0}function kv(i,s,l){var h=!1,p=Eo,_=s.contextType;return typeof _=="object"&&_!==null?_=_r(_):(p=ki(s)?ia:vi.current,h=s.contextTypes,_=(h=h!=null)?_l(i,p):Eo),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Bh,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function Bv(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Bh.enqueueReplaceState(s,s.state,null)}function Ap(i,s,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},fp(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=_r(_):(_=ki(s)?ia:vi.current,p.context=_l(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(wp(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Bh.enqueueReplaceState(p,p.state,null),Ih(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function wl(i,s){try{var l="",h=s;do l+=ve(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Rp(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Cp(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var VE=typeof WeakMap=="function"?WeakMap:Map;function zv(i,s,l){l=Gs(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Xh||(Xh=!0,Gp=h),Cp(i,s)},l}function Vv(i,s,l){l=Gs(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Cp(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Cp(i,s),typeof h!="function"&&(Ro===null?Ro=new Set([this]):Ro.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function Hv(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new VE;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),i=tM.bind(null,i,s,l),s.then(i,i))}function Gv(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Wv(i,s,l,h,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Gs(-1,1),s.tag=2,wo(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var HE=O.ReactCurrentOwner,Bi=!1;function Ri(i,s,l,h){s.child=i===null?cv(s,null,l,h):xl(s,i.child,l,h)}function jv(i,s,l,h,p){l=l.render;var _=s.ref;return Ml(s,p),h=yp(i,s,l,h,_,p),l=Sp(),i!==null&&!Bi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Ws(i,s,p)):(dn&&l&&np(s),s.flags|=1,Ri(i,s,h,p),s.child)}function Xv(i,s,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Kp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,qv(i,s,_,h,p)):(i=Jh(l.type,null,h,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var b=_.memoizedProps;if(l=l.compare,l=l!==null?l:Yu,l(b,h)&&i.ref===s.ref)return Ws(i,s,p)}return s.flags|=1,i=Lo(_,h),i.ref=s.ref,i.return=s,s.child=i}function qv(i,s,l,h,p){if(i!==null){var _=i.memoizedProps;if(Yu(_,h)&&i.ref===s.ref)if(Bi=!1,s.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Bi=!0);else return s.lanes=i.lanes,Ws(i,s,p)}return bp(i,s,l,h,p)}function Yv(i,s,l){var h=s.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ln(Rl,Qi),Qi|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,ln(Rl,Qi),Qi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,ln(Rl,Qi),Qi|=h}else _!==null?(h=_.baseLanes|l,s.memoizedState=null):h=l,ln(Rl,Qi),Qi|=h;return Ri(i,s,p,l),s.child}function $v(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function bp(i,s,l,h,p){var _=ki(l)?ia:vi.current;return _=_l(s,_),Ml(s,p),l=yp(i,s,l,h,_,p),h=Sp(),i!==null&&!Bi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Ws(i,s,p)):(dn&&h&&np(s),s.flags|=1,Ri(i,s,l,p),s.child)}function Kv(i,s,l,h,p){if(ki(l)){var _=!0;Mh(s)}else _=!1;if(Ml(s,p),s.stateNode===null)Vh(i,s),kv(s,l,h),Ap(s,l,h,p),h=!0;else if(i===null){var b=s.stateNode,V=s.memoizedProps;b.props=V;var W=b.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=_r(ae):(ae=ki(l)?ia:vi.current,ae=_l(s,ae));var Te=l.getDerivedStateFromProps,Re=typeof Te=="function"||typeof b.getSnapshotBeforeUpdate=="function";Re||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V!==h||W!==ae)&&Bv(s,b,h,ae),To=!1;var Me=s.memoizedState;b.state=Me,Ih(s,h,b,p),W=s.memoizedState,V!==h||Me!==W||Oi.current||To?(typeof Te=="function"&&(wp(s,l,Te,h),W=s.memoizedState),(V=To||Ov(s,l,V,h,Me,W,ae))?(Re||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=W),b.props=h,b.state=W,b.context=ae,h=V):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{b=s.stateNode,fv(i,s),V=s.memoizedProps,ae=s.type===s.elementType?V:kr(s.type,V),b.props=ae,Re=s.pendingProps,Me=b.context,W=l.contextType,typeof W=="object"&&W!==null?W=_r(W):(W=ki(l)?ia:vi.current,W=_l(s,W));var je=l.getDerivedStateFromProps;(Te=typeof je=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V!==Re||Me!==W)&&Bv(s,b,h,W),To=!1,Me=s.memoizedState,b.state=Me,Ih(s,h,b,p);var Ze=s.memoizedState;V!==Re||Me!==Ze||Oi.current||To?(typeof je=="function"&&(wp(s,l,je,h),Ze=s.memoizedState),(ae=To||Ov(s,l,ae,h,Me,Ze,W)||!1)?(Te||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(h,Ze,W),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(h,Ze,W)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||V===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=Ze),b.props=h,b.state=Ze,b.context=W,h=ae):(typeof b.componentDidUpdate!="function"||V===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),h=!1)}return Pp(i,s,l,h,_,p)}function Pp(i,s,l,h,p,_){$v(i,s);var b=(s.flags&128)!==0;if(!h&&!b)return p&&tv(s,l,!1),Ws(i,s,_);h=s.stateNode,HE.current=s;var V=b&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&b?(s.child=xl(s,i.child,null,_),s.child=xl(s,null,V,_)):Ri(i,s,V,_),s.memoizedState=h.state,p&&tv(s,l,!0),s.child}function Zv(i){var s=i.stateNode;s.pendingContext?Q_(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Q_(i,s.context,!1),dp(i,s.containerInfo)}function Jv(i,s,l,h,p){return Sl(),op(p),s.flags|=256,Ri(i,s,l,h),s.child}var Lp={dehydrated:null,treeContext:null,retryLane:0};function Ip(i){return{baseLanes:i,cachePool:null,transitions:null}}function Qv(i,s,l){var h=s.pendingProps,p=Sn.current,_=!1,b=(s.flags&128)!==0,V;if((V=b)||(V=i!==null&&i.memoizedState===null?!1:(p&2)!==0),V?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ln(Sn,p&1),i===null)return sp(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=h.children,i=h.fallback,_?(h=s.mode,_=s.child,b={mode:"hidden",children:b},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=Qh(b,h,0,null),i=da(i,h,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Ip(l),s.memoizedState=Lp,i):Dp(s,b));if(p=i.memoizedState,p!==null&&(V=p.dehydrated,V!==null))return GE(i,s,b,h,V,p,l);if(_){_=h.fallback,b=s.mode,p=i.child,V=p.sibling;var W={mode:"hidden",children:h.children};return(b&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=W,s.deletions=null):(h=Lo(p,W),h.subtreeFlags=p.subtreeFlags&14680064),V!==null?_=Lo(V,_):(_=da(_,b,l,null),_.flags|=2),_.return=s,h.return=s,h.sibling=_,s.child=h,h=_,_=s.child,b=i.child.memoizedState,b=b===null?Ip(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=i.childLanes&~l,s.memoizedState=Lp,h}return _=i.child,i=_.sibling,h=Lo(_,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function Dp(i,s){return s=Qh({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function zh(i,s,l,h){return h!==null&&op(h),xl(s,i.child,null,l),i=Dp(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function GE(i,s,l,h,p,_,b){if(l)return s.flags&256?(s.flags&=-257,h=Rp(Error(n(422))),zh(i,s,b,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=h.fallback,p=s.mode,h=Qh({mode:"visible",children:h.children},p,0,null),_=da(_,p,b,null),_.flags|=2,h.return=s,_.return=s,h.sibling=_,s.child=h,(s.mode&1)!==0&&xl(s,i.child,null,b),s.child.memoizedState=Ip(b),s.memoizedState=Lp,_);if((s.mode&1)===0)return zh(i,s,b,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var V=h.dgst;return h=V,_=Error(n(419)),h=Rp(_,h,void 0),zh(i,s,b,h)}if(V=(b&i.childLanes)!==0,Bi||V){if(h=ni,h!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|b))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Hs(i,p),Vr(h,i,p,-1))}return $p(),h=Rp(Error(n(421))),zh(i,s,b,h)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=nM.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Ji=So(p.nextSibling),Zi=s,dn=!0,Or=null,i!==null&&(mr[gr++]=zs,mr[gr++]=Vs,mr[gr++]=ra,zs=i.id,Vs=i.overflow,ra=s),s=Dp(s,h.children),s.flags|=4096,s)}function e1(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),cp(i.return,s,l)}function Np(i,s,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function t1(i,s,l){var h=s.pendingProps,p=h.revealOrder,_=h.tail;if(Ri(i,s,h.children,l),h=Sn.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&e1(i,l,s);else if(i.tag===19)e1(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(ln(Sn,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Dh(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Np(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Dh(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Np(s,!0,l,null,_);break;case"together":Np(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vh(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Ws(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ua|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(n(153));if(s.child!==null){for(i=s.child,l=Lo(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Lo(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function WE(i,s,l){switch(s.tag){case 3:Zv(s),Sl();break;case 5:mv(s);break;case 1:ki(s.type)&&Mh(s);break;case 4:dp(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;ln(bh,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(ln(Sn,Sn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Qv(i,s,l):(ln(Sn,Sn.current&1),i=Ws(i,s,l),i!==null?i.sibling:null);ln(Sn,Sn.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return t1(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ln(Sn,Sn.current),h)break;return null;case 22:case 23:return s.lanes=0,Yv(i,s,l)}return Ws(i,s,l)}var n1,Up,i1,r1;n1=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Up=function(){},i1=function(i,s,l,h){var p=i.memoizedProps;if(p!==h){i=s.stateNode,aa(ds.current);var _=null;switch(l){case"input":p=X(i,p),h=X(i,h),_=[];break;case"select":p=le({},p,{value:void 0}),h=le({},h,{value:void 0}),_=[];break;case"textarea":p=D(i,p),h=D(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Sh)}At(l,h);var b;l=null;for(ae in p)if(!h.hasOwnProperty(ae)&&p.hasOwnProperty(ae)&&p[ae]!=null)if(ae==="style"){var V=p[ae];for(b in V)V.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?_||(_=[]):(_=_||[]).push(ae,null));for(ae in h){var W=h[ae];if(V=p!=null?p[ae]:void 0,h.hasOwnProperty(ae)&&W!==V&&(W!=null||V!=null))if(ae==="style")if(V){for(b in V)!V.hasOwnProperty(b)||W&&W.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in W)W.hasOwnProperty(b)&&V[b]!==W[b]&&(l||(l={}),l[b]=W[b])}else l||(_||(_=[]),_.push(ae,l)),l=W;else ae==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,V=V?V.__html:void 0,W!=null&&V!==W&&(_=_||[]).push(ae,W)):ae==="children"?typeof W!="string"&&typeof W!="number"||(_=_||[]).push(ae,""+W):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(W!=null&&ae==="onScroll"&&cn("scroll",i),_||V===W||(_=[])):(_=_||[]).push(ae,W))}l&&(_=_||[]).push("style",l);var ae=_;(s.updateQueue=ae)&&(s.flags|=4)}},r1=function(i,s,l,h){l!==h&&(s.flags|=4)};function uc(i,s){if(!dn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Si(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function jE(i,s,l){var h=s.pendingProps;switch(ip(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Si(s),null;case 1:return ki(s.type)&&Eh(),Si(s),null;case 3:return h=s.stateNode,Tl(),hn(Oi),hn(vi),gp(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Rh(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Or!==null&&(Xp(Or),Or=null))),Up(i,s),Si(s),null;case 5:pp(s);var p=aa(rc.current);if(l=s.type,i!==null&&s.stateNode!=null)i1(i,s,l,h,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(n(166));return Si(s),null}if(i=aa(ds.current),Rh(s)){h=s.stateNode,l=s.type;var _=s.memoizedProps;switch(h[fs]=s,h[Qu]=_,i=(s.mode&1)!==0,l){case"dialog":cn("cancel",h),cn("close",h);break;case"iframe":case"object":case"embed":cn("load",h);break;case"video":case"audio":for(p=0;p<Ku.length;p++)cn(Ku[p],h);break;case"source":cn("error",h);break;case"img":case"image":case"link":cn("error",h),cn("load",h);break;case"details":cn("toggle",h);break;case"input":Hn(h,_),cn("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},cn("invalid",h);break;case"textarea":ne(h,_),cn("invalid",h)}At(l,_),p=null;for(var b in _)if(_.hasOwnProperty(b)){var V=_[b];b==="children"?typeof V=="string"?h.textContent!==V&&(_.suppressHydrationWarning!==!0&&yh(h.textContent,V,i),p=["children",V]):typeof V=="number"&&h.textContent!==""+V&&(_.suppressHydrationWarning!==!0&&yh(h.textContent,V,i),p=["children",""+V]):o.hasOwnProperty(b)&&V!=null&&b==="onScroll"&&cn("scroll",h)}switch(l){case"input":Bt(h),nt(h,_,!0);break;case"textarea":Bt(h),xe(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Sh)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=b.createElement(l,{is:h.is}):(i=b.createElement(l),l==="select"&&(b=i,h.multiple?b.multiple=!0:h.size&&(b.size=h.size))):i=b.createElementNS(i,l),i[fs]=s,i[Qu]=h,n1(i,s,!1,!1),s.stateNode=i;e:{switch(b=vt(l,h),l){case"dialog":cn("cancel",i),cn("close",i),p=h;break;case"iframe":case"object":case"embed":cn("load",i),p=h;break;case"video":case"audio":for(p=0;p<Ku.length;p++)cn(Ku[p],i);p=h;break;case"source":cn("error",i),p=h;break;case"img":case"image":case"link":cn("error",i),cn("load",i),p=h;break;case"details":cn("toggle",i),p=h;break;case"input":Hn(i,h),p=X(i,h),cn("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=le({},h,{value:void 0}),cn("invalid",i);break;case"textarea":ne(i,h),p=D(i,h),cn("invalid",i);break;default:p=h}At(l,p),V=p;for(_ in V)if(V.hasOwnProperty(_)){var W=V[_];_==="style"?dt(i,W):_==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&We(i,W)):_==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&xt(i,W):typeof W=="number"&&xt(i,""+W):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?W!=null&&_==="onScroll"&&cn("scroll",i):W!=null&&z(i,_,W,b))}switch(l){case"input":Bt(i),nt(i,h,!1);break;case"textarea":Bt(i),xe(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ue(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?B(i,!!h.multiple,_,!1):h.defaultValue!=null&&B(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Sh)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Si(s),null;case 6:if(i&&s.stateNode!=null)r1(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(n(166));if(l=aa(rc.current),aa(ds.current),Rh(s)){if(h=s.stateNode,l=s.memoizedProps,h[fs]=s,(_=h.nodeValue!==l)&&(i=Zi,i!==null))switch(i.tag){case 3:yh(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&yh(h.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[fs]=s,s.stateNode=h}return Si(s),null;case 13:if(hn(Sn),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(dn&&Ji!==null&&(s.mode&1)!==0&&(s.flags&128)===0)av(),Sl(),s.flags|=98560,_=!1;else if(_=Rh(s),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(n(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(n(317));_[fs]=s}else Sl(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Si(s),_=!1}else Or!==null&&(Xp(Or),Or=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Sn.current&1)!==0?qn===0&&(qn=3):$p())),s.updateQueue!==null&&(s.flags|=4),Si(s),null);case 4:return Tl(),Up(i,s),i===null&&Zu(s.stateNode.containerInfo),Si(s),null;case 10:return up(s.type._context),Si(s),null;case 17:return ki(s.type)&&Eh(),Si(s),null;case 19:if(hn(Sn),_=s.memoizedState,_===null)return Si(s),null;if(h=(s.flags&128)!==0,b=_.rendering,b===null)if(h)uc(_,!1);else{if(qn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(b=Dh(i),b!==null){for(s.flags|=128,uc(_,!1),h=b.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)_=l,i=h,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,i=b.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ln(Sn,Sn.current&1|2),s.child}i=i.sibling}_.tail!==null&&Q()>Cl&&(s.flags|=128,h=!0,uc(_,!1),s.lanes=4194304)}else{if(!h)if(i=Dh(b),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),uc(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!dn)return Si(s),null}else 2*Q()-_.renderingStartTime>Cl&&l!==1073741824&&(s.flags|=128,h=!0,uc(_,!1),s.lanes=4194304);_.isBackwards?(b.sibling=s.child,s.child=b):(l=_.last,l!==null?l.sibling=b:s.child=b,_.last=b)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Q(),s.sibling=null,l=Sn.current,ln(Sn,h?l&1|2:l&1),s):(Si(s),null);case 22:case 23:return Yp(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(Qi&1073741824)!==0&&(Si(s),s.subtreeFlags&6&&(s.flags|=8192)):Si(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function XE(i,s){switch(ip(s),s.tag){case 1:return ki(s.type)&&Eh(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Tl(),hn(Oi),hn(vi),gp(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return pp(s),null;case 13:if(hn(Sn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(n(340));Sl()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return hn(Sn),null;case 4:return Tl(),null;case 10:return up(s.type._context),null;case 22:case 23:return Yp(),null;case 24:return null;default:return null}}var Hh=!1,xi=!1,qE=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Al(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){wn(i,s,h)}else l.current=null}function Fp(i,s,l){try{l()}catch(h){wn(i,s,h)}}var s1=!1;function YE(i,s){if(Yd=go,i=O_(),zd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var b=0,V=-1,W=-1,ae=0,Te=0,Re=i,Me=null;t:for(;;){for(var je;Re!==l||p!==0&&Re.nodeType!==3||(V=b+p),Re!==_||h!==0&&Re.nodeType!==3||(W=b+h),Re.nodeType===3&&(b+=Re.nodeValue.length),(je=Re.firstChild)!==null;)Me=Re,Re=je;for(;;){if(Re===i)break t;if(Me===l&&++ae===p&&(V=b),Me===_&&++Te===h&&(W=b),(je=Re.nextSibling)!==null)break;Re=Me,Me=Re.parentNode}Re=je}l=V===-1||W===-1?null:{start:V,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for($d={focusedElem:i,selectionRange:l},go=!1,$e=s;$e!==null;)if(s=$e,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,$e=i;else for(;$e!==null;){s=$e;try{var Ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Qe=Ze.memoizedProps,In=Ze.memoizedState,te=s.stateNode,Y=te.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:kr(s.type,Qe),In);te.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ie=s.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){wn(s,s.return,be)}if(i=s.sibling,i!==null){i.return=s.return,$e=i;break}$e=s.return}return Ze=s1,s1=!1,Ze}function cc(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Fp(s,l,_)}p=p.next}while(p!==h)}}function Gh(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Op(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function o1(i){var s=i.alternate;s!==null&&(i.alternate=null,o1(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[fs],delete s[Qu],delete s[Qd],delete s[PE],delete s[LE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function a1(i){return i.tag===5||i.tag===3||i.tag===4}function l1(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||a1(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function kp(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Sh));else if(h!==4&&(i=i.child,i!==null))for(kp(i,s,l),i=i.sibling;i!==null;)kp(i,s,l),i=i.sibling}function Bp(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Bp(i,s,l),i=i.sibling;i!==null;)Bp(i,s,l),i=i.sibling}var di=null,Br=!1;function Ao(i,s,l){for(l=l.child;l!==null;)u1(i,s,l),l=l.sibling}function u1(i,s,l){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ct,l)}catch{}switch(l.tag){case 5:xi||Al(l,s);case 6:var h=di,p=Br;di=null,Ao(i,s,l),di=h,Br=p,di!==null&&(Br?(i=di,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):di.removeChild(l.stateNode));break;case 18:di!==null&&(Br?(i=di,l=l.stateNode,i.nodeType===8?Jd(i.parentNode,l):i.nodeType===1&&Jd(i,l),Nr(i)):Jd(di,l.stateNode));break;case 4:h=di,p=Br,di=l.stateNode.containerInfo,Br=!0,Ao(i,s,l),di=h,Br=p;break;case 0:case 11:case 14:case 15:if(!xi&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&Fp(l,s,b),p=p.next}while(p!==h)}Ao(i,s,l);break;case 1:if(!xi&&(Al(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(V){wn(l,s,V)}Ao(i,s,l);break;case 21:Ao(i,s,l);break;case 22:l.mode&1?(xi=(h=xi)||l.memoizedState!==null,Ao(i,s,l),xi=h):Ao(i,s,l);break;default:Ao(i,s,l)}}function c1(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new qE),s.forEach(function(h){var p=iM.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function zr(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,b=s,V=b;e:for(;V!==null;){switch(V.tag){case 5:di=V.stateNode,Br=!1;break e;case 3:di=V.stateNode.containerInfo,Br=!0;break e;case 4:di=V.stateNode.containerInfo,Br=!0;break e}V=V.return}if(di===null)throw Error(n(160));u1(_,b,p),di=null,Br=!1;var W=p.alternate;W!==null&&(W.return=null),p.return=null}catch(ae){wn(p,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)h1(s,i),s=s.sibling}function h1(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(zr(s,i),ms(i),h&4){try{cc(3,i,i.return),Gh(3,i)}catch(Qe){wn(i,i.return,Qe)}try{cc(5,i,i.return)}catch(Qe){wn(i,i.return,Qe)}}break;case 1:zr(s,i),ms(i),h&512&&l!==null&&Al(l,l.return);break;case 5:if(zr(s,i),ms(i),h&512&&l!==null&&Al(l,l.return),i.flags&32){var p=i.stateNode;try{xt(p,"")}catch(Qe){wn(i,i.return,Qe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,b=l!==null?l.memoizedProps:_,V=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{V==="input"&&_.type==="radio"&&_.name!=null&&Tt(p,_),vt(V,b);var ae=vt(V,_);for(b=0;b<W.length;b+=2){var Te=W[b],Re=W[b+1];Te==="style"?dt(p,Re):Te==="dangerouslySetInnerHTML"?We(p,Re):Te==="children"?xt(p,Re):z(p,Te,Re,ae)}switch(V){case"input":wt(p,_);break;case"textarea":Se(p,_);break;case"select":var Me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var je=_.value;je!=null?B(p,!!_.multiple,je,!1):Me!==!!_.multiple&&(_.defaultValue!=null?B(p,!!_.multiple,_.defaultValue,!0):B(p,!!_.multiple,_.multiple?[]:"",!1))}p[Qu]=_}catch(Qe){wn(i,i.return,Qe)}}break;case 6:if(zr(s,i),ms(i),h&4){if(i.stateNode===null)throw Error(n(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(Qe){wn(i,i.return,Qe)}}break;case 3:if(zr(s,i),ms(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Nr(s.containerInfo)}catch(Qe){wn(i,i.return,Qe)}break;case 4:zr(s,i),ms(i);break;case 13:zr(s,i),ms(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Hp=Q())),h&4&&c1(i);break;case 22:if(Te=l!==null&&l.memoizedState!==null,i.mode&1?(xi=(ae=xi)||Te,zr(s,i),xi=ae):zr(s,i),ms(i),h&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!Te&&(i.mode&1)!==0)for($e=i,Te=i.child;Te!==null;){for(Re=$e=Te;$e!==null;){switch(Me=$e,je=Me.child,Me.tag){case 0:case 11:case 14:case 15:cc(4,Me,Me.return);break;case 1:Al(Me,Me.return);var Ze=Me.stateNode;if(typeof Ze.componentWillUnmount=="function"){h=Me,l=Me.return;try{s=h,Ze.props=s.memoizedProps,Ze.state=s.memoizedState,Ze.componentWillUnmount()}catch(Qe){wn(h,l,Qe)}}break;case 5:Al(Me,Me.return);break;case 22:if(Me.memoizedState!==null){p1(Re);continue}}je!==null?(je.return=Me,$e=je):p1(Re)}Te=Te.sibling}e:for(Te=null,Re=i;;){if(Re.tag===5){if(Te===null){Te=Re;try{p=Re.stateNode,ae?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(V=Re.stateNode,W=Re.memoizedProps.style,b=W!=null&&W.hasOwnProperty("display")?W.display:null,V.style.display=lt("display",b))}catch(Qe){wn(i,i.return,Qe)}}}else if(Re.tag===6){if(Te===null)try{Re.stateNode.nodeValue=ae?"":Re.memoizedProps}catch(Qe){wn(i,i.return,Qe)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===i)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===i)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===i)break e;Te===Re&&(Te=null),Re=Re.return}Te===Re&&(Te=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:zr(s,i),ms(i),h&4&&c1(i);break;case 21:break;default:zr(s,i),ms(i)}}function ms(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(a1(l)){var h=l;break e}l=l.return}throw Error(n(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(xt(p,""),h.flags&=-33);var _=l1(i);Bp(i,_,p);break;case 3:case 4:var b=h.stateNode.containerInfo,V=l1(i);kp(i,V,b);break;default:throw Error(n(161))}}catch(W){wn(i,i.return,W)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function $E(i,s,l){$e=i,f1(i)}function f1(i,s,l){for(var h=(i.mode&1)!==0;$e!==null;){var p=$e,_=p.child;if(p.tag===22&&h){var b=p.memoizedState!==null||Hh;if(!b){var V=p.alternate,W=V!==null&&V.memoizedState!==null||xi;V=Hh;var ae=xi;if(Hh=b,(xi=W)&&!ae)for($e=p;$e!==null;)b=$e,W=b.child,b.tag===22&&b.memoizedState!==null?m1(p):W!==null?(W.return=b,$e=W):m1(p);for(;_!==null;)$e=_,f1(_),_=_.sibling;$e=p,Hh=V,xi=ae}d1(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,$e=_):d1(i)}}function d1(i){for(;$e!==null;){var s=$e;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:xi||Gh(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!xi)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:kr(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&pv(s,_,h);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}pv(s,b,l)}break;case 5:var V=s.stateNode;if(l===null&&s.flags&4){l=V;var W=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var Te=ae.memoizedState;if(Te!==null){var Re=Te.dehydrated;Re!==null&&Nr(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xi||s.flags&512&&Op(s)}catch(Me){wn(s,s.return,Me)}}if(s===i){$e=null;break}if(l=s.sibling,l!==null){l.return=s.return,$e=l;break}$e=s.return}}function p1(i){for(;$e!==null;){var s=$e;if(s===i){$e=null;break}var l=s.sibling;if(l!==null){l.return=s.return,$e=l;break}$e=s.return}}function m1(i){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Gh(4,s)}catch(W){wn(s,l,W)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(W){wn(s,p,W)}}var _=s.return;try{Op(s)}catch(W){wn(s,_,W)}break;case 5:var b=s.return;try{Op(s)}catch(W){wn(s,b,W)}}}catch(W){wn(s,s.return,W)}if(s===i){$e=null;break}var V=s.sibling;if(V!==null){V.return=s.return,$e=V;break}$e=s.return}}var KE=Math.ceil,Wh=O.ReactCurrentDispatcher,zp=O.ReactCurrentOwner,yr=O.ReactCurrentBatchConfig,zt=0,ni=null,Fn=null,pi=0,Qi=0,Rl=xo(0),qn=0,hc=null,ua=0,jh=0,Vp=0,fc=null,zi=null,Hp=0,Cl=1/0,js=null,Xh=!1,Gp=null,Ro=null,qh=!1,Co=null,Yh=0,dc=0,Wp=null,$h=-1,Kh=0;function Ci(){return(zt&6)!==0?Q():$h!==-1?$h:$h=Q()}function bo(i){return(i.mode&1)===0?1:(zt&2)!==0&&pi!==0?pi&-pi:DE.transition!==null?(Kh===0&&(Kh=Wt()),Kh):(i=Pt,i!==0||(i=window.event,i=i===void 0?16:Vu(i.type)),i)}function Vr(i,s,l,h){if(50<dc)throw dc=0,Wp=null,Error(n(185));Ln(i,l,h),((zt&2)===0||i!==ni)&&(i===ni&&((zt&2)===0&&(jh|=l),qn===4&&Po(i,pi)),Vi(i,h),l===1&&zt===0&&(s.mode&1)===0&&(Cl=Q()+500,Th&&Mo()))}function Vi(i,s){var l=i.callbackNode;_n(i,s);var h=Gn(i,i===ni?pi:0);if(h===0)l!==null&&U(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&U(l),s===1)i.tag===0?IE(_1.bind(null,i)):nv(_1.bind(null,i)),CE(function(){(zt&6)===0&&Mo()}),l=null;else{switch(_i(h)){case 1:l=we;break;case 4:l=Ne;break;case 16:l=ke;break;case 536870912:l=mt;break;default:l=ke}l=w1(l,g1.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function g1(i,s){if($h=-1,Kh=0,(zt&6)!==0)throw Error(n(327));var l=i.callbackNode;if(bl()&&i.callbackNode!==l)return null;var h=Gn(i,i===ni?pi:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=Zh(i,h);else{s=h;var p=zt;zt|=2;var _=y1();(ni!==i||pi!==s)&&(js=null,Cl=Q()+500,ha(i,s));do try{QE();break}catch(V){v1(i,V)}while(!0);lp(),Wh.current=_,zt=p,Fn!==null?s=0:(ni=null,pi=0,s=qn)}if(s!==0){if(s===2&&(p=Wn(i),p!==0&&(h=p,s=jp(i,p))),s===1)throw l=hc,ha(i,0),Po(i,h),Vi(i,Q()),l;if(s===6)Po(i,h);else{if(p=i.current.alternate,(h&30)===0&&!ZE(p)&&(s=Zh(i,h),s===2&&(_=Wn(i),_!==0&&(h=_,s=jp(i,_))),s===1))throw l=hc,ha(i,0),Po(i,h),Vi(i,Q()),l;switch(i.finishedWork=p,i.finishedLanes=h,s){case 0:case 1:throw Error(n(345));case 2:fa(i,zi,js);break;case 3:if(Po(i,h),(h&130023424)===h&&(s=Hp+500-Q(),10<s)){if(Gn(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){Ci(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Zd(fa.bind(null,i,zi,js),s);break}fa(i,zi,js);break;case 4:if(Po(i,h),(h&4194240)===h)break;for(s=i.eventTimes,p=-1;0<h;){var b=31-yt(h);_=1<<b,b=s[b],b>p&&(p=b),h&=~_}if(h=p,h=Q()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*KE(h/1960))-h,10<h){i.timeoutHandle=Zd(fa.bind(null,i,zi,js),h);break}fa(i,zi,js);break;case 5:fa(i,zi,js);break;default:throw Error(n(329))}}}return Vi(i,Q()),i.callbackNode===l?g1.bind(null,i):null}function jp(i,s){var l=fc;return i.current.memoizedState.isDehydrated&&(ha(i,s).flags|=256),i=Zh(i,s),i!==2&&(s=zi,zi=l,s!==null&&Xp(s)),i}function Xp(i){zi===null?zi=i:zi.push.apply(zi,i)}function ZE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!Fr(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Po(i,s){for(s&=~Vp,s&=~jh,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-yt(s),h=1<<l;i[l]=-1,s&=~h}}function _1(i){if((zt&6)!==0)throw Error(n(327));bl();var s=Gn(i,0);if((s&1)===0)return Vi(i,Q()),null;var l=Zh(i,s);if(i.tag!==0&&l===2){var h=Wn(i);h!==0&&(s=h,l=jp(i,h))}if(l===1)throw l=hc,ha(i,0),Po(i,s),Vi(i,Q()),l;if(l===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,fa(i,zi,js),Vi(i,Q()),null}function qp(i,s){var l=zt;zt|=1;try{return i(s)}finally{zt=l,zt===0&&(Cl=Q()+500,Th&&Mo())}}function ca(i){Co!==null&&Co.tag===0&&(zt&6)===0&&bl();var s=zt;zt|=1;var l=yr.transition,h=Pt;try{if(yr.transition=null,Pt=1,i)return i()}finally{Pt=h,yr.transition=l,zt=s,(zt&6)===0&&Mo()}}function Yp(){Qi=Rl.current,hn(Rl)}function ha(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,RE(l)),Fn!==null)for(l=Fn.return;l!==null;){var h=l;switch(ip(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Eh();break;case 3:Tl(),hn(Oi),hn(vi),gp();break;case 5:pp(h);break;case 4:Tl();break;case 13:hn(Sn);break;case 19:hn(Sn);break;case 10:up(h.type._context);break;case 22:case 23:Yp()}l=l.return}if(ni=i,Fn=i=Lo(i.current,null),pi=Qi=s,qn=0,hc=null,Vp=jh=ua=0,zi=fc=null,oa!==null){for(s=0;s<oa.length;s++)if(l=oa[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var b=_.next;_.next=p,h.next=b}l.pending=h}oa=null}return i}function v1(i,s){do{var l=Fn;try{if(lp(),Nh.current=kh,Uh){for(var h=xn.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Uh=!1}if(la=0,ti=Xn=xn=null,sc=!1,oc=0,zp.current=null,l===null||l.return===null){qn=1,hc=s,Fn=null;break}e:{var _=i,b=l.return,V=l,W=s;if(s=pi,V.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ae=W,Te=V,Re=Te.tag;if((Te.mode&1)===0&&(Re===0||Re===11||Re===15)){var Me=Te.alternate;Me?(Te.updateQueue=Me.updateQueue,Te.memoizedState=Me.memoizedState,Te.lanes=Me.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var je=Gv(b);if(je!==null){je.flags&=-257,Wv(je,b,V,_,s),je.mode&1&&Hv(_,ae,s),s=je,W=ae;var Ze=s.updateQueue;if(Ze===null){var Qe=new Set;Qe.add(W),s.updateQueue=Qe}else Ze.add(W);break e}else{if((s&1)===0){Hv(_,ae,s),$p();break e}W=Error(n(426))}}else if(dn&&V.mode&1){var In=Gv(b);if(In!==null){(In.flags&65536)===0&&(In.flags|=256),Wv(In,b,V,_,s),op(wl(W,V));break e}}_=W=wl(W,V),qn!==4&&(qn=2),fc===null?fc=[_]:fc.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var te=zv(_,W,s);dv(_,te);break e;case 1:V=W;var Y=_.type,ie=_.stateNode;if((_.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Ro===null||!Ro.has(ie)))){_.flags|=65536,s&=-s,_.lanes|=s;var be=Vv(_,V,s);dv(_,be);break e}}_=_.return}while(_!==null)}x1(l)}catch(et){s=et,Fn===l&&l!==null&&(Fn=l=l.return);continue}break}while(!0)}function y1(){var i=Wh.current;return Wh.current=kh,i===null?kh:i}function $p(){(qn===0||qn===3||qn===2)&&(qn=4),ni===null||(ua&268435455)===0&&(jh&268435455)===0||Po(ni,pi)}function Zh(i,s){var l=zt;zt|=2;var h=y1();(ni!==i||pi!==s)&&(js=null,ha(i,s));do try{JE();break}catch(p){v1(i,p)}while(!0);if(lp(),zt=l,Wh.current=h,Fn!==null)throw Error(n(261));return ni=null,pi=0,qn}function JE(){for(;Fn!==null;)S1(Fn)}function QE(){for(;Fn!==null&&!Z();)S1(Fn)}function S1(i){var s=T1(i.alternate,i,Qi);i.memoizedProps=i.pendingProps,s===null?x1(i):Fn=s,zp.current=null}function x1(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=jE(l,s,Qi),l!==null){Fn=l;return}}else{if(l=XE(l,s),l!==null){l.flags&=32767,Fn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{qn=6,Fn=null;return}}if(s=s.sibling,s!==null){Fn=s;return}Fn=s=i}while(s!==null);qn===0&&(qn=5)}function fa(i,s,l){var h=Pt,p=yr.transition;try{yr.transition=null,Pt=1,eM(i,s,l,h)}finally{yr.transition=p,Pt=h}return null}function eM(i,s,l,h){do bl();while(Co!==null);if((zt&6)!==0)throw Error(n(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(St(i,_),i===ni&&(Fn=ni=null,pi=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||qh||(qh=!0,w1(ke,function(){return bl(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=yr.transition,yr.transition=null;var b=Pt;Pt=1;var V=zt;zt|=4,zp.current=null,YE(i,l),h1(l,i),SE($d),go=!!Yd,$d=Yd=null,i.current=l,$E(l),oe(),zt=V,Pt=b,yr.transition=_}else i.current=l;if(qh&&(qh=!1,Co=i,Yh=p),_=i.pendingLanes,_===0&&(Ro=null),Lt(l.stateNode),Vi(i,Q()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Xh)throw Xh=!1,i=Gp,Gp=null,i;return(Yh&1)!==0&&i.tag!==0&&bl(),_=i.pendingLanes,(_&1)!==0?i===Wp?dc++:(dc=0,Wp=i):dc=0,Mo(),null}function bl(){if(Co!==null){var i=_i(Yh),s=yr.transition,l=Pt;try{if(yr.transition=null,Pt=16>i?16:i,Co===null)var h=!1;else{if(i=Co,Co=null,Yh=0,(zt&6)!==0)throw Error(n(331));var p=zt;for(zt|=4,$e=i.current;$e!==null;){var _=$e,b=_.child;if(($e.flags&16)!==0){var V=_.deletions;if(V!==null){for(var W=0;W<V.length;W++){var ae=V[W];for($e=ae;$e!==null;){var Te=$e;switch(Te.tag){case 0:case 11:case 15:cc(8,Te,_)}var Re=Te.child;if(Re!==null)Re.return=Te,$e=Re;else for(;$e!==null;){Te=$e;var Me=Te.sibling,je=Te.return;if(o1(Te),Te===ae){$e=null;break}if(Me!==null){Me.return=je,$e=Me;break}$e=je}}}var Ze=_.alternate;if(Ze!==null){var Qe=Ze.child;if(Qe!==null){Ze.child=null;do{var In=Qe.sibling;Qe.sibling=null,Qe=In}while(Qe!==null)}}$e=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,$e=b;else e:for(;$e!==null;){if(_=$e,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:cc(9,_,_.return)}var te=_.sibling;if(te!==null){te.return=_.return,$e=te;break e}$e=_.return}}var Y=i.current;for($e=Y;$e!==null;){b=$e;var ie=b.child;if((b.subtreeFlags&2064)!==0&&ie!==null)ie.return=b,$e=ie;else e:for(b=Y;$e!==null;){if(V=$e,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:Gh(9,V)}}catch(et){wn(V,V.return,et)}if(V===b){$e=null;break e}var be=V.sibling;if(be!==null){be.return=V.return,$e=be;break e}$e=V.return}}if(zt=p,Mo(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ct,i)}catch{}h=!0}return h}finally{Pt=l,yr.transition=s}}return!1}function E1(i,s,l){s=wl(l,s),s=zv(i,s,1),i=wo(i,s,1),s=Ci(),i!==null&&(Ln(i,1,s),Vi(i,s))}function wn(i,s,l){if(i.tag===3)E1(i,i,l);else for(;s!==null;){if(s.tag===3){E1(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ro===null||!Ro.has(h))){i=wl(l,i),i=Vv(s,i,1),s=wo(s,i,1),i=Ci(),s!==null&&(Ln(s,1,i),Vi(s,i));break}}s=s.return}}function tM(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=Ci(),i.pingedLanes|=i.suspendedLanes&l,ni===i&&(pi&l)===l&&(qn===4||qn===3&&(pi&130023424)===pi&&500>Q()-Hp?ha(i,0):Vp|=l),Vi(i,s)}function M1(i,s){s===0&&((i.mode&1)===0?s=1:(s=fn,fn<<=1,(fn&130023424)===0&&(fn=4194304)));var l=Ci();i=Hs(i,s),i!==null&&(Ln(i,s,l),Vi(i,l))}function nM(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),M1(i,l)}function iM(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(n(314))}h!==null&&h.delete(s),M1(i,l)}var T1;T1=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Oi.current)Bi=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Bi=!1,WE(i,s,l);Bi=(i.flags&131072)!==0}else Bi=!1,dn&&(s.flags&1048576)!==0&&iv(s,Ah,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Vh(i,s),i=s.pendingProps;var p=_l(s,vi.current);Ml(s,l),p=yp(null,s,h,i,p,l);var _=Sp();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ki(h)?(_=!0,Mh(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,fp(s),p.updater=Bh,s.stateNode=p,p._reactInternals=s,Ap(s,h,i,l),s=Pp(null,s,h,!0,_,l)):(s.tag=0,dn&&_&&np(s),Ri(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Vh(i,s),i=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=sM(h),i=kr(h,i),p){case 0:s=bp(null,s,h,i,l);break e;case 1:s=Kv(null,s,h,i,l);break e;case 11:s=jv(null,s,h,i,l);break e;case 14:s=Xv(null,s,h,kr(h.type,i),l);break e}throw Error(n(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:kr(h,p),bp(i,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:kr(h,p),Kv(i,s,h,p,l);case 3:e:{if(Zv(s),i===null)throw Error(n(387));h=s.pendingProps,_=s.memoizedState,p=_.element,fv(i,s),Ih(s,h,null,l);var b=s.memoizedState;if(h=b.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=wl(Error(n(423)),s),s=Jv(i,s,h,l,p);break e}else if(h!==p){p=wl(Error(n(424)),s),s=Jv(i,s,h,l,p);break e}else for(Ji=So(s.stateNode.containerInfo.firstChild),Zi=s,dn=!0,Or=null,l=cv(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Sl(),h===p){s=Ws(i,s,l);break e}Ri(i,s,h,l)}s=s.child}return s;case 5:return mv(s),i===null&&sp(s),h=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,b=p.children,Kd(h,p)?b=null:_!==null&&Kd(h,_)&&(s.flags|=32),$v(i,s),Ri(i,s,b,l),s.child;case 6:return i===null&&sp(s),null;case 13:return Qv(i,s,l);case 4:return dp(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=xl(s,null,h,l):Ri(i,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:kr(h,p),jv(i,s,h,p,l);case 7:return Ri(i,s,s.pendingProps,l),s.child;case 8:return Ri(i,s,s.pendingProps.children,l),s.child;case 12:return Ri(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,_=s.memoizedProps,b=p.value,ln(bh,h._currentValue),h._currentValue=b,_!==null)if(Fr(_.value,b)){if(_.children===p.children&&!Oi.current){s=Ws(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var V=_.dependencies;if(V!==null){b=_.child;for(var W=V.firstContext;W!==null;){if(W.context===h){if(_.tag===1){W=Gs(-1,l&-l),W.tag=2;var ae=_.updateQueue;if(ae!==null){ae=ae.shared;var Te=ae.pending;Te===null?W.next=W:(W.next=Te.next,Te.next=W),ae.pending=W}}_.lanes|=l,W=_.alternate,W!==null&&(W.lanes|=l),cp(_.return,l,s),V.lanes|=l;break}W=W.next}}else if(_.tag===10)b=_.type===s.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(n(341));b.lanes|=l,V=b.alternate,V!==null&&(V.lanes|=l),cp(b,l,s),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===s){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Ri(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Ml(s,l),p=_r(p),h=h(p),s.flags|=1,Ri(i,s,h,l),s.child;case 14:return h=s.type,p=kr(h,s.pendingProps),p=kr(h.type,p),Xv(i,s,h,p,l);case 15:return qv(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:kr(h,p),Vh(i,s),s.tag=1,ki(h)?(i=!0,Mh(s)):i=!1,Ml(s,l),kv(s,h,p),Ap(s,h,p,l),Pp(null,s,h,!0,i,l);case 19:return t1(i,s,l);case 22:return Yv(i,s,l)}throw Error(n(156,s.tag))};function w1(i,s){return po(i,s)}function rM(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(i,s,l,h){return new rM(i,s,l,h)}function Kp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function sM(i){if(typeof i=="function")return Kp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===k)return 11;if(i===_e)return 14}return 2}function Lo(i,s){var l=i.alternate;return l===null?(l=Sr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Jh(i,s,l,h,p,_){var b=2;if(h=i,typeof i=="function")Kp(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case L:return da(l.children,p,_,s);case R:b=8,p|=8;break;case M:return i=Sr(12,l,s,p|2),i.elementType=M,i.lanes=_,i;case I:return i=Sr(13,l,s,p),i.elementType=I,i.lanes=_,i;case fe:return i=Sr(19,l,s,p),i.elementType=fe,i.lanes=_,i;case me:return Qh(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case E:b=10;break e;case C:b=9;break e;case k:b=11;break e;case _e:b=14;break e;case pe:b=16,h=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return s=Sr(b,l,s,p),s.elementType=i,s.type=h,s.lanes=_,s}function da(i,s,l,h){return i=Sr(7,i,h,s),i.lanes=l,i}function Qh(i,s,l,h){return i=Sr(22,i,h,s),i.elementType=me,i.lanes=l,i.stateNode={isHidden:!1},i}function Zp(i,s,l){return i=Sr(6,i,null,s),i.lanes=l,i}function Jp(i,s,l){return s=Sr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function oM(i,s,l,h,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pn(0),this.expirationTimes=Pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Qp(i,s,l,h,p,_,b,V,W){return i=new oM(i,s,l,V,W),s===1?(s=1,_===!0&&(s|=8)):s=0,_=Sr(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(_),i}function aM(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function A1(i){if(!i)return Eo;i=i._reactInternals;e:{if(Di(i)!==i||i.tag!==1)throw Error(n(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ki(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(i.tag===1){var l=i.type;if(ki(l))return ev(i,l,s)}return s}function R1(i,s,l,h,p,_,b,V,W){return i=Qp(l,h,!0,i,p,_,b,V,W),i.context=A1(null),l=i.current,h=Ci(),p=bo(l),_=Gs(h,p),_.callback=s??null,wo(l,_,p),i.current.lanes=p,Ln(i,p,h),Vi(i,h),i}function ef(i,s,l,h){var p=s.current,_=Ci(),b=bo(p);return l=A1(l),s.context===null?s.context=l:s.pendingContext=l,s=Gs(_,b),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=wo(p,s,b),i!==null&&(Vr(i,p,b,_),Lh(i,p,b)),b}function tf(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function C1(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function em(i,s){C1(i,s),(i=i.alternate)&&C1(i,s)}function lM(){return null}var b1=typeof reportError=="function"?reportError:function(i){console.error(i)};function tm(i){this._internalRoot=i}nf.prototype.render=tm.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(n(409));ef(i,s,null,null)},nf.prototype.unmount=tm.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ca(function(){ef(null,i,null,null)}),s[ks]=null}};function nf(i){this._internalRoot=i}nf.prototype.unstable_scheduleHydration=function(i){if(i){var s=nh();i={blockedOn:null,target:i,priority:s};for(var l=0;l<ls.length&&s!==0&&s<ls[l].priority;l++);ls.splice(l,0,i),l===0&&sh(i)}};function nm(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function rf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function P1(){}function uM(i,s,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var ae=tf(b);_.call(ae)}}var b=R1(s,h,i,0,null,!1,!1,"",P1);return i._reactRootContainer=b,i[ks]=b.current,Zu(i.nodeType===8?i.parentNode:i),ca(),b}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var V=h;h=function(){var ae=tf(W);V.call(ae)}}var W=Qp(i,0,!1,null,null,!1,!1,"",P1);return i._reactRootContainer=W,i[ks]=W.current,Zu(i.nodeType===8?i.parentNode:i),ca(function(){ef(s,W,l,h)}),W}function sf(i,s,l,h,p){var _=l._reactRootContainer;if(_){var b=_;if(typeof p=="function"){var V=p;p=function(){var W=tf(b);V.call(W)}}ef(s,b,i,p)}else b=uM(l,s,i,p,h);return tf(b)}eh=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=bt(s.pendingLanes);l!==0&&(vn(s,l|1),Vi(s,Q()),(zt&6)===0&&(Cl=Q()+500,Mo()))}break;case 13:ca(function(){var h=Hs(i,1);if(h!==null){var p=Ci();Vr(h,i,1,p)}}),em(i,1)}},Qa=function(i){if(i.tag===13){var s=Hs(i,134217728);if(s!==null){var l=Ci();Vr(s,i,134217728,l)}em(i,134217728)}},th=function(i){if(i.tag===13){var s=bo(i),l=Hs(i,s);if(l!==null){var h=Ci();Vr(l,i,s,h)}em(i,s)}},nh=function(){return Pt},ih=function(i,s){var l=Pt;try{return Pt=i,s()}finally{Pt=l}},Oe=function(i,s,l){switch(s){case"input":if(wt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var p=xh(h);if(!p)throw Error(n(90));Mt(h),wt(h,p)}}}break;case"textarea":Se(i,l);break;case"select":s=l.value,s!=null&&B(i,!!l.multiple,s,!1)}},Qt=qp,Tn=ca;var cM={usingClientEntryPoint:!1,Events:[ec,ml,xh,Fe,gt,qp]},pc={findFiberByHostInstance:na,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hM={bundleType:pc.bundleType,version:pc.version,rendererPackageName:pc.rendererPackageName,rendererConfig:pc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Jo(i),i===null?null:i.stateNode},findFiberByHostInstance:pc.findFiberByHostInstance||lM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var of=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!of.isDisabled&&of.supportsFiber)try{ct=of.inject(hM),Ye=of}catch{}}return Hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cM,Hi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nm(s))throw Error(n(200));return aM(i,s,null,l)},Hi.createRoot=function(i,s){if(!nm(i))throw Error(n(299));var l=!1,h="",p=b1;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Qp(i,1,!1,null,null,l,!1,h,p),i[ks]=s.current,Zu(i.nodeType===8?i.parentNode:i),new tm(s)},Hi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=Jo(s),i=i===null?null:i.stateNode,i},Hi.flushSync=function(i){return ca(i)},Hi.hydrate=function(i,s,l){if(!rf(s))throw Error(n(200));return sf(null,i,s,!0,l)},Hi.hydrateRoot=function(i,s,l){if(!nm(i))throw Error(n(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",b=b1;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=R1(s,null,i,1,l??null,p,!1,_,b),i[ks]=s.current,Zu(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new nf(s)},Hi.render=function(i,s,l){if(!rf(s))throw Error(n(200));return sf(null,i,s,!1,l)},Hi.unmountComponentAtNode=function(i){if(!rf(i))throw Error(n(40));return i._reactRootContainer?(ca(function(){sf(null,null,i,!1,function(){i._reactRootContainer=null,i[ks]=null})}),!0):!1},Hi.unstable_batchedUpdates=qp,Hi.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!rf(l))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return sf(i,s,l,!1,h)},Hi.version="18.3.1-next-f1338f8080-20240426",Hi}var k1;function yM(){if(k1)return sm.exports;k1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),sm.exports=vM(),sm.exports}var B1;function SM(){if(B1)return af;B1=1;var t=yM();return af.createRoot=t.createRoot,af.hydrateRoot=t.hydrateRoot,af}var xM=SM();const z1=10;function _S(t=3e3){const[e,n]=tt.useState(()=>{const r=navigator.connection;return{downlink:(r==null?void 0:r.downlink)??z1,effectiveType:(r==null?void 0:r.effectiveType)??"unknown",rtt:(r==null?void 0:r.rtt)??0,supported:!!r}});return tt.useEffect(()=>{const r=navigator.connection;if(!r)return;const o=()=>{n({downlink:r.downlink??z1,effectiveType:r.effectiveType??"unknown",rtt:r.rtt??0,supported:!0})};r.addEventListener("change",o);const a=setInterval(o,t);return()=>{r.removeEventListener("change",o),clearInterval(a)}},[t]),e}function gc(t,e,n){return t+(e-t)*Math.min(Math.max(n,0),1)}function ql(t){const e=Math.min(t,100)/100,n=gc(.15,2.8,e),r=gc(.3,1.8,e),o=gc(.4,3,e),a=gc(0,1,e),c=gc(1,5,e),f=t<5?"湖のように穏やか":t<20?"穏やか":t<50?"普通":t<80?"荒れ":"嵐",d={deep:t<20?"#0d4f8c":t<50?"#0a3d6b":"#061d3a",surface:t<20?"#1a9eba":t<50?"#0e7aa0":"#0a5570"};return{amplitude:n,frequency:r,speed:o,turbulence:a,difficultyMultiplier:c,label:f,color:d}}function EM(t,e,n,r,o){const a=o,c=e,f=n,d=t,m=c*d*Math.cos(f*a)+c*1.7*d*.5*Math.cos(-f*.9*a+2.1)+c*2*.7*d*.2*r*Math.cos(f*1.8*a);return Math.tanh(m*.3)}function MM({onStart:t}){const[e,n]=tt.useState(""),{downlink:r,effectiveType:o,supported:a}=_S(),c=ql(r);return Ie.jsxs("div",{style:mi.root,children:[Ie.jsx("h1",{style:mi.title,children:"MEGARO WAVE"}),Ie.jsx("p",{style:mi.subtitle,children:"Wii Balance Board × MediaPipe サーフィンゲーム"}),Ie.jsxs("div",{style:mi.card,children:[Ie.jsx("div",{style:mi.cardLabel,children:"今日のステージ"}),Ie.jsx("div",{style:{fontSize:28,fontWeight:800,margin:"8px 0"},children:c.label}),Ie.jsxs("div",{style:{display:"flex",gap:24,justifyContent:"center",fontSize:13,color:"#aaa"},children:[Ie.jsxs("span",{children:["WiFi速度: ",Ie.jsxs("b",{style:{color:"#fff"},children:[r," Mbps"]})]}),Ie.jsxs("span",{children:["スコア倍率: ",Ie.jsxs("b",{style:{color:"#00aaff"},children:["x",c.difficultyMultiplier.toFixed(1)]})]})]}),!a&&Ie.jsx("div",{style:{marginTop:8,fontSize:12,color:"#888"},children:"※ Network Information API 非対応ブラウザ — デフォルト値で動作"})]}),Ie.jsx("input",{value:e,onChange:f=>n(f.target.value),onKeyDown:f=>f.key==="Enter"&&e.trim()&&t(e.trim()),placeholder:"プレイヤー名を入力",maxLength:20,style:mi.input}),Ie.jsx("button",{onClick:()=>t(e.trim()||"Player"),style:mi.btn,children:"ゲームスタート"}),Ie.jsxs("div",{style:mi.help,children:[Ie.jsx("div",{style:mi.helpTitle,children:"操作方法"}),Ie.jsxs("div",{style:mi.helpRow,children:[Ie.jsx("span",{style:mi.helpKey,children:"Wii Balance Board"})," 波の傾きに合わせて体重移動でバランスを保つ"]}),Ie.jsxs("div",{style:mi.helpRow,children:[Ie.jsx("span",{style:mi.helpKey,children:"ジャンプ"})," 体を使ってジャンプ → ポイント獲得"]}),Ie.jsxs("div",{style:mi.helpRow,children:[Ie.jsx("span",{style:mi.helpKey,children:"腕を上げる"})," ジャンプ中に両手を挙げるとトリック判定"]}),Ie.jsxs("div",{style:mi.helpRow,children:[Ie.jsx("span",{style:mi.helpKey,children:"しゃがむ"})," 低い波の下を潜る"]}),Ie.jsx("div",{style:{marginTop:8,color:"#666",fontSize:12},children:"バランスを 2 秒以上崩すとライフ -1 (3ライフ制)"})]})]})}const mi={root:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg, #071428 0%, #040c1a 100%)",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},title:{fontSize:52,fontWeight:900,letterSpacing:"0.05em",marginBottom:6},subtitle:{color:"#888",fontSize:14,marginBottom:32},card:{background:"#0e1f3d",border:"1px solid #1e3a6a",borderRadius:12,padding:"20px 36px",marginBottom:28,textAlign:"center",minWidth:320},cardLabel:{fontSize:12,color:"#666",letterSpacing:"0.08em",textTransform:"uppercase"},input:{padding:"12px 16px",borderRadius:8,border:"1px solid #334",background:"#0e1f3d",color:"#fff",fontSize:15,outline:"none",width:280,marginBottom:14},btn:{padding:"14px 48px",borderRadius:8,border:"none",background:"#1a4fc4",color:"#fff",fontSize:17,fontWeight:700,cursor:"pointer",marginBottom:36,boxShadow:"0 0 20px rgba(26,79,196,0.5)"},help:{background:"#0a1628",border:"1px solid #1a2e50",borderRadius:10,padding:"16px 24px",maxWidth:480,width:"100%"},helpTitle:{fontSize:12,color:"#555",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10},helpRow:{fontSize:13,color:"#ccc",marginBottom:6,lineHeight:1.5},helpKey:{display:"inline-block",background:"#1a3060",borderRadius:4,padding:"1px 7px",marginRight:8,fontSize:12,color:"#7aadff"}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const c0="172",TM=0,V1=1,wM=2,vS=1,AM=2,Zs=3,Yo=0,Xi=1,qr=2,Wo=0,Zl=1,H1=2,G1=3,W1=4,RM=5,Ta=100,CM=101,bM=102,PM=103,LM=104,IM=200,DM=201,NM=202,UM=203,eg=204,tg=205,FM=206,OM=207,kM=208,BM=209,zM=210,VM=211,HM=212,GM=213,WM=214,ng=0,ig=1,rg=2,ru=3,sg=4,og=5,ag=6,lg=7,yS=0,jM=1,XM=2,jo=0,qM=1,YM=2,$M=3,KM=4,ZM=5,JM=6,QM=7,SS=300,su=301,ou=302,ug=303,cg=304,ad=306,hg=1e3,Ra=1001,fg=1002,Jr=1003,eT=1004,lf=1005,xs=1006,lm=1007,Ca=1008,io=1009,xS=1010,ES=1011,Dc=1012,h0=1013,za=1014,eo=1015,zc=1016,f0=1017,d0=1018,au=1020,MS=35902,TS=1021,wS=1022,$r=1023,AS=1024,RS=1025,Jl=1026,lu=1027,CS=1028,p0=1029,bS=1030,m0=1031,g0=1033,Of=33776,kf=33777,Bf=33778,zf=33779,dg=35840,pg=35841,mg=35842,gg=35843,_g=36196,vg=37492,yg=37496,Sg=37808,xg=37809,Eg=37810,Mg=37811,Tg=37812,wg=37813,Ag=37814,Rg=37815,Cg=37816,bg=37817,Pg=37818,Lg=37819,Ig=37820,Dg=37821,Vf=36492,Ng=36494,Ug=36495,PS=36283,Fg=36284,Og=36285,kg=36286,tT=3200,nT=3201,iT=0,rT=1,Ho="",wr="srgb",uu="srgb-linear",Xf="linear",nn="srgb",Pl=7680,j1=519,sT=512,oT=513,aT=514,LS=515,lT=516,uT=517,cT=518,hT=519,X1=35044,q1="300 es",to=2e3,qf=2001;class Tu{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],um=Math.PI/180,Bg=180/Math.PI;function Vc(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ei[t&255]+Ei[t>>8&255]+Ei[t>>16&255]+Ei[t>>24&255]+"-"+Ei[e&255]+Ei[e>>8&255]+"-"+Ei[e>>16&15|64]+Ei[e>>24&255]+"-"+Ei[n&63|128]+Ei[n>>8&255]+"-"+Ei[n>>16&255]+Ei[n>>24&255]+Ei[r&255]+Ei[r>>8&255]+Ei[r>>16&255]+Ei[r>>24&255]).toLowerCase()}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function fT(t,e){return(t%e+e)%e}function cm(t,e,n){return(1-n)*t+n*e}function _c(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Gi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tn{constructor(e=0,n=0){tn.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,n,r,o,a,c,f,d,m){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,a,c,f,d,m)}set(e,n,r,o,a,c,f,d,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=a,v[5]=d,v[6]=r,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,c=r[0],f=r[3],d=r[6],m=r[1],v=r[4],y=r[7],S=r[2],A=r[5],P=r[8],N=o[0],T=o[3],x=o[6],H=o[1],z=o[4],O=o[7],K=o[2],j=o[5],L=o[8];return a[0]=c*N+f*H+d*K,a[3]=c*T+f*z+d*j,a[6]=c*x+f*O+d*L,a[1]=m*N+v*H+y*K,a[4]=m*T+v*z+y*j,a[7]=m*x+v*O+y*L,a[2]=S*N+A*H+P*K,a[5]=S*T+A*z+P*j,a[8]=S*x+A*O+P*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],m=e[7],v=e[8];return n*c*v-n*f*m-r*a*v+r*f*d+o*a*m-o*c*d}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],m=e[7],v=e[8],y=v*c-f*m,S=f*d-v*a,A=m*a-c*d,P=n*y+r*S+o*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=y*N,e[1]=(o*m-v*r)*N,e[2]=(f*r-o*c)*N,e[3]=S*N,e[4]=(v*n-o*d)*N,e[5]=(o*a-f*n)*N,e[6]=A*N,e[7]=(r*d-m*n)*N,e[8]=(c*n-r*a)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,a,c,f){const d=Math.cos(a),m=Math.sin(a);return this.set(r*d,r*m,-r*(d*c+m*f)+c+e,-o*m,o*d,-o*(-m*c+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(hm.makeScale(e,n)),this}rotate(e){return this.premultiply(hm.makeRotation(-e)),this}translate(e,n){return this.premultiply(hm.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hm=new Et;function IS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dT(){const t=Yf("canvas");return t.style.display="block",t}const Y1={};function Yl(t){t in Y1||(Y1[t]=!0,console.warn(t))}function pT(t,e,n){return new Promise(function(r,o){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:o();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function mT(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gT(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $1=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K1=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _T(){const t={enabled:!0,workingColorSpace:uu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===nn&&(o.r=no(o.r),o.g=no(o.g),o.b=no(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===nn&&(o.r=Ql(o.r),o.g=Ql(o.g),o.b=Ql(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ho?Xf:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[uu]:{primaries:e,whitePoint:r,transfer:Xf,toXYZ:$1,fromXYZ:K1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wr},outputColorSpaceConfig:{drawingBufferColorSpace:wr}},[wr]:{primaries:e,whitePoint:r,transfer:nn,toXYZ:$1,fromXYZ:K1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wr}}}),t}const Xt=_T();function no(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ql(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ll;class vT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ll===void 0&&(Ll=Yf("canvas")),Ll.width=e.width,Ll.height=e.height;const r=Ll.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ll}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yf("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=no(a[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(no(n[r]/255)*255):n[r]=no(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yT=0;class DS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=Vc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?a.push(fm(o[c].image)):a.push(fm(o[c]))}else a=fm(o);r.url=a}return n||(e.images[this.uuid]=r),r}}function fm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ST=0;class qi extends Tu{constructor(e=qi.DEFAULT_IMAGE,n=qi.DEFAULT_MAPPING,r=Ra,o=Ra,a=xs,c=Ca,f=$r,d=io,m=qi.DEFAULT_ANISOTROPY,v=Ho){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=Vc(),this.name="",this.source=new DS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=d,this.offset=new tn(0,0),this.repeat=new tn(1,1),this.center=new tn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==SS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hg:e.x=e.x-Math.floor(e.x);break;case Ra:e.x=e.x<0?0:1;break;case fg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hg:e.y=e.y-Math.floor(e.y);break;case Ra:e.y=e.y<0?0:1;break;case fg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qi.DEFAULT_IMAGE=null;qi.DEFAULT_MAPPING=SS;qi.DEFAULT_ANISOTROPY=1;class Rn{constructor(e=0,n=0,r=0,o=1){Rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,a;const d=e.elements,m=d[0],v=d[4],y=d[8],S=d[1],A=d[5],P=d[9],N=d[2],T=d[6],x=d[10];if(Math.abs(v-S)<.01&&Math.abs(y-N)<.01&&Math.abs(P-T)<.01){if(Math.abs(v+S)<.1&&Math.abs(y+N)<.1&&Math.abs(P+T)<.1&&Math.abs(m+A+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(m+1)/2,O=(A+1)/2,K=(x+1)/2,j=(v+S)/4,L=(y+N)/4,R=(P+T)/4;return z>O&&z>K?z<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(z),o=j/r,a=L/r):O>K?O<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(O),r=j/o,a=R/o):K<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(K),r=L/a,o=R/a),this.set(r,o,a,n),this}let H=Math.sqrt((T-P)*(T-P)+(y-N)*(y-N)+(S-v)*(S-v));return Math.abs(H)<.001&&(H=1),this.x=(T-P)/H,this.y=(y-N)/H,this.z=(S-v)/H,this.w=Math.acos((m+A+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this.w=Nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this.w=Nt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xT extends Tu{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rn(0,0,e,n),this.scissorTest=!1,this.viewport=new Rn(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xs,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const a=new qi(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new DS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Va extends xT{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class NS extends qi{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Jr,this.minFilter=Jr,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ET extends qi{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Jr,this.minFilter=Jr,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hc{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,a,c,f){let d=r[o+0],m=r[o+1],v=r[o+2],y=r[o+3];const S=a[c+0],A=a[c+1],P=a[c+2],N=a[c+3];if(f===0){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(f===1){e[n+0]=S,e[n+1]=A,e[n+2]=P,e[n+3]=N;return}if(y!==N||d!==S||m!==A||v!==P){let T=1-f;const x=d*S+m*A+v*P+y*N,H=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const K=Math.sqrt(z),j=Math.atan2(K,x*H);T=Math.sin(T*j)/K,f=Math.sin(f*j)/K}const O=f*H;if(d=d*T+S*O,m=m*T+A*O,v=v*T+P*O,y=y*T+N*O,T===1-f){const K=1/Math.sqrt(d*d+m*m+v*v+y*y);d*=K,m*=K,v*=K,y*=K}}e[n]=d,e[n+1]=m,e[n+2]=v,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,a,c){const f=r[o],d=r[o+1],m=r[o+2],v=r[o+3],y=a[c],S=a[c+1],A=a[c+2],P=a[c+3];return e[n]=f*P+v*y+d*A-m*S,e[n+1]=d*P+v*S+m*y-f*A,e[n+2]=m*P+v*A+f*S-d*y,e[n+3]=v*P-f*y-d*S-m*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,a=e._z,c=e._order,f=Math.cos,d=Math.sin,m=f(r/2),v=f(o/2),y=f(a/2),S=d(r/2),A=d(o/2),P=d(a/2);switch(c){case"XYZ":this._x=S*v*y+m*A*P,this._y=m*A*y-S*v*P,this._z=m*v*P+S*A*y,this._w=m*v*y-S*A*P;break;case"YXZ":this._x=S*v*y+m*A*P,this._y=m*A*y-S*v*P,this._z=m*v*P-S*A*y,this._w=m*v*y+S*A*P;break;case"ZXY":this._x=S*v*y-m*A*P,this._y=m*A*y+S*v*P,this._z=m*v*P+S*A*y,this._w=m*v*y-S*A*P;break;case"ZYX":this._x=S*v*y-m*A*P,this._y=m*A*y+S*v*P,this._z=m*v*P-S*A*y,this._w=m*v*y+S*A*P;break;case"YZX":this._x=S*v*y+m*A*P,this._y=m*A*y+S*v*P,this._z=m*v*P-S*A*y,this._w=m*v*y-S*A*P;break;case"XZY":this._x=S*v*y-m*A*P,this._y=m*A*y-S*v*P,this._z=m*v*P+S*A*y,this._w=m*v*y+S*A*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],a=n[8],c=n[1],f=n[5],d=n[9],m=n[2],v=n[6],y=n[10],S=r+f+y;if(S>0){const A=.5/Math.sqrt(S+1);this._w=.25/A,this._x=(v-d)*A,this._y=(a-m)*A,this._z=(c-o)*A}else if(r>f&&r>y){const A=2*Math.sqrt(1+r-f-y);this._w=(v-d)/A,this._x=.25*A,this._y=(o+c)/A,this._z=(a+m)/A}else if(f>y){const A=2*Math.sqrt(1+f-r-y);this._w=(a-m)/A,this._x=(o+c)/A,this._y=.25*A,this._z=(d+v)/A}else{const A=2*Math.sqrt(1+y-r-f);this._w=(c-o)/A,this._x=(a+m)/A,this._y=(d+v)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,a=e._z,c=e._w,f=n._x,d=n._y,m=n._z,v=n._w;return this._x=r*v+c*f+o*m-a*d,this._y=o*v+c*d+a*f-r*m,this._z=a*v+c*m+r*d-o*f,this._w=c*v-r*f-o*d-a*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,c=this._w;let f=c*e._w+r*e._x+o*e._y+a*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=o,this._z=a,this;const d=1-f*f;if(d<=Number.EPSILON){const A=1-n;return this._w=A*c+n*this._w,this._x=A*r+n*this._x,this._y=A*o+n*this._y,this._z=A*a+n*this._z,this.normalize(),this}const m=Math.sqrt(d),v=Math.atan2(m,f),y=Math.sin((1-n)*v)/m,S=Math.sin(n*v)/m;return this._w=c*y+this._w*S,this._x=r*y+this._x*S,this._y=o*y+this._y*S,this._z=a*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,n=0,r=0){ce.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Z1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Z1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*o,this.y=a[1]*n+a[4]*r+a[7]*o,this.z=a[2]*n+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*n+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*n+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*n+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,a=e.x,c=e.y,f=e.z,d=e.w,m=2*(c*o-f*r),v=2*(f*n-a*o),y=2*(a*r-c*n);return this.x=n+d*m+c*y-f*v,this.y=r+d*v+f*m-a*y,this.z=o+d*y+a*v-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*o,this.y=a[1]*n+a[5]*r+a[9]*o,this.z=a[2]*n+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,a=e.z,c=n.x,f=n.y,d=n.z;return this.x=o*d-a*f,this.y=a*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dm.copy(this).projectOnVector(e),this.sub(dm)}reflect(e){return this.sub(dm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dm=new ce,Z1=new Hc;class Gc{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Hr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Hr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Hr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Hr):Hr.fromBufferAttribute(a,c),Hr.applyMatrix4(e.matrixWorld),this.expandByPoint(Hr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uf.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uf.copy(r.boundingBox)),uf.applyMatrix4(e.matrixWorld),this.union(uf)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hr),Hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vc),cf.subVectors(this.max,vc),Il.subVectors(e.a,vc),Dl.subVectors(e.b,vc),Nl.subVectors(e.c,vc),Do.subVectors(Dl,Il),No.subVectors(Nl,Dl),pa.subVectors(Il,Nl);let n=[0,-Do.z,Do.y,0,-No.z,No.y,0,-pa.z,pa.y,Do.z,0,-Do.x,No.z,0,-No.x,pa.z,0,-pa.x,-Do.y,Do.x,0,-No.y,No.x,0,-pa.y,pa.x,0];return!pm(n,Il,Dl,Nl,cf)||(n=[1,0,0,0,1,0,0,0,1],!pm(n,Il,Dl,Nl,cf))?!1:(hf.crossVectors(Do,No),n=[hf.x,hf.y,hf.z],pm(n,Il,Dl,Nl,cf))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xs=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Hr=new ce,uf=new Gc,Il=new ce,Dl=new ce,Nl=new ce,Do=new ce,No=new ce,pa=new ce,vc=new ce,cf=new ce,hf=new ce,ma=new ce;function pm(t,e,n,r,o){for(let a=0,c=t.length-3;a<=c;a+=3){ma.fromArray(t,a);const f=o.x*Math.abs(ma.x)+o.y*Math.abs(ma.y)+o.z*Math.abs(ma.z),d=e.dot(ma),m=n.dot(ma),v=r.dot(ma);if(Math.max(-Math.max(d,m,v),Math.min(d,m,v))>f)return!1}return!0}const MT=new Gc,yc=new ce,mm=new ce;class _0{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):MT.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yc.subVectors(e,this.center);const n=yc.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(yc,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yc.copy(e.center).add(mm)),this.expandByPoint(yc.copy(e.center).sub(mm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qs=new ce,gm=new ce,ff=new ce,Uo=new ce,_m=new ce,df=new ce,vm=new ce;class TT{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qs.copy(this.origin).addScaledVector(this.direction,n),qs.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){gm.copy(e).add(n).multiplyScalar(.5),ff.copy(n).sub(e).normalize(),Uo.copy(this.origin).sub(gm);const a=e.distanceTo(n)*.5,c=-this.direction.dot(ff),f=Uo.dot(this.direction),d=-Uo.dot(ff),m=Uo.lengthSq(),v=Math.abs(1-c*c);let y,S,A,P;if(v>0)if(y=c*d-f,S=c*f-d,P=a*v,y>=0)if(S>=-P)if(S<=P){const N=1/v;y*=N,S*=N,A=y*(y+c*S+2*f)+S*(c*y+S+2*d)+m}else S=a,y=Math.max(0,-(c*S+f)),A=-y*y+S*(S+2*d)+m;else S=-a,y=Math.max(0,-(c*S+f)),A=-y*y+S*(S+2*d)+m;else S<=-P?(y=Math.max(0,-(-c*a+f)),S=y>0?-a:Math.min(Math.max(-a,-d),a),A=-y*y+S*(S+2*d)+m):S<=P?(y=0,S=Math.min(Math.max(-a,-d),a),A=S*(S+2*d)+m):(y=Math.max(0,-(c*a+f)),S=y>0?a:Math.min(Math.max(-a,-d),a),A=-y*y+S*(S+2*d)+m);else S=c>0?-a:a,y=Math.max(0,-(c*S+f)),A=-y*y+S*(S+2*d)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(gm).addScaledVector(ff,S),A}intersectSphere(e,n){qs.subVectors(e.center,this.origin);const r=qs.dot(this.direction),o=qs.dot(qs)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,a,c,f,d;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),v>=0?(a=(e.min.y-S.y)*v,c=(e.max.y-S.y)*v):(a=(e.max.y-S.y)*v,c=(e.min.y-S.y)*v),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),y>=0?(f=(e.min.z-S.z)*y,d=(e.max.z-S.z)*y):(f=(e.max.z-S.z)*y,d=(e.min.z-S.z)*y),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,qs)!==null}intersectTriangle(e,n,r,o,a){_m.subVectors(n,e),df.subVectors(r,e),vm.crossVectors(_m,df);let c=this.direction.dot(vm),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Uo.subVectors(this.origin,e);const d=f*this.direction.dot(df.crossVectors(Uo,df));if(d<0)return null;const m=f*this.direction.dot(_m.cross(Uo));if(m<0||d+m>c)return null;const v=-f*Uo.dot(vm);return v<0?null:this.at(v/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cn{constructor(e,n,r,o,a,c,f,d,m,v,y,S,A,P,N,T){Cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,a,c,f,d,m,v,y,S,A,P,N,T)}set(e,n,r,o,a,c,f,d,m,v,y,S,A,P,N,T){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=a,x[5]=c,x[9]=f,x[13]=d,x[2]=m,x[6]=v,x[10]=y,x[14]=S,x[3]=A,x[7]=P,x[11]=N,x[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ul.setFromMatrixColumn(e,0).length(),a=1/Ul.setFromMatrixColumn(e,1).length(),c=1/Ul.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),m=Math.sin(o),v=Math.cos(a),y=Math.sin(a);if(e.order==="XYZ"){const S=c*v,A=c*y,P=f*v,N=f*y;n[0]=d*v,n[4]=-d*y,n[8]=m,n[1]=A+P*m,n[5]=S-N*m,n[9]=-f*d,n[2]=N-S*m,n[6]=P+A*m,n[10]=c*d}else if(e.order==="YXZ"){const S=d*v,A=d*y,P=m*v,N=m*y;n[0]=S+N*f,n[4]=P*f-A,n[8]=c*m,n[1]=c*y,n[5]=c*v,n[9]=-f,n[2]=A*f-P,n[6]=N+S*f,n[10]=c*d}else if(e.order==="ZXY"){const S=d*v,A=d*y,P=m*v,N=m*y;n[0]=S-N*f,n[4]=-c*y,n[8]=P+A*f,n[1]=A+P*f,n[5]=c*v,n[9]=N-S*f,n[2]=-c*m,n[6]=f,n[10]=c*d}else if(e.order==="ZYX"){const S=c*v,A=c*y,P=f*v,N=f*y;n[0]=d*v,n[4]=P*m-A,n[8]=S*m+N,n[1]=d*y,n[5]=N*m+S,n[9]=A*m-P,n[2]=-m,n[6]=f*d,n[10]=c*d}else if(e.order==="YZX"){const S=c*d,A=c*m,P=f*d,N=f*m;n[0]=d*v,n[4]=N-S*y,n[8]=P*y+A,n[1]=y,n[5]=c*v,n[9]=-f*v,n[2]=-m*v,n[6]=A*y+P,n[10]=S-N*y}else if(e.order==="XZY"){const S=c*d,A=c*m,P=f*d,N=f*m;n[0]=d*v,n[4]=-y,n[8]=m*v,n[1]=S*y+N,n[5]=c*v,n[9]=A*y-P,n[2]=P*y-A,n[6]=f*v,n[10]=N*y+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wT,e,AT)}lookAt(e,n,r){const o=this.elements;return er.subVectors(e,n),er.lengthSq()===0&&(er.z=1),er.normalize(),Fo.crossVectors(r,er),Fo.lengthSq()===0&&(Math.abs(r.z)===1?er.x+=1e-4:er.z+=1e-4,er.normalize(),Fo.crossVectors(r,er)),Fo.normalize(),pf.crossVectors(er,Fo),o[0]=Fo.x,o[4]=pf.x,o[8]=er.x,o[1]=Fo.y,o[5]=pf.y,o[9]=er.y,o[2]=Fo.z,o[6]=pf.z,o[10]=er.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,c=r[0],f=r[4],d=r[8],m=r[12],v=r[1],y=r[5],S=r[9],A=r[13],P=r[2],N=r[6],T=r[10],x=r[14],H=r[3],z=r[7],O=r[11],K=r[15],j=o[0],L=o[4],R=o[8],M=o[12],E=o[1],C=o[5],k=o[9],I=o[13],fe=o[2],_e=o[6],pe=o[10],me=o[14],q=o[3],ge=o[7],le=o[11],G=o[15];return a[0]=c*j+f*E+d*fe+m*q,a[4]=c*L+f*C+d*_e+m*ge,a[8]=c*R+f*k+d*pe+m*le,a[12]=c*M+f*I+d*me+m*G,a[1]=v*j+y*E+S*fe+A*q,a[5]=v*L+y*C+S*_e+A*ge,a[9]=v*R+y*k+S*pe+A*le,a[13]=v*M+y*I+S*me+A*G,a[2]=P*j+N*E+T*fe+x*q,a[6]=P*L+N*C+T*_e+x*ge,a[10]=P*R+N*k+T*pe+x*le,a[14]=P*M+N*I+T*me+x*G,a[3]=H*j+z*E+O*fe+K*q,a[7]=H*L+z*C+O*_e+K*ge,a[11]=H*R+z*k+O*pe+K*le,a[15]=H*M+z*I+O*me+K*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],a=e[12],c=e[1],f=e[5],d=e[9],m=e[13],v=e[2],y=e[6],S=e[10],A=e[14],P=e[3],N=e[7],T=e[11],x=e[15];return P*(+a*d*y-o*m*y-a*f*S+r*m*S+o*f*A-r*d*A)+N*(+n*d*A-n*m*S+a*c*S-o*c*A+o*m*v-a*d*v)+T*(+n*m*y-n*f*A-a*c*y+r*c*A+a*f*v-r*m*v)+x*(-o*f*v-n*d*y+n*f*S+o*c*y-r*c*S+r*d*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],m=e[7],v=e[8],y=e[9],S=e[10],A=e[11],P=e[12],N=e[13],T=e[14],x=e[15],H=y*T*m-N*S*m+N*d*A-f*T*A-y*d*x+f*S*x,z=P*S*m-v*T*m-P*d*A+c*T*A+v*d*x-c*S*x,O=v*N*m-P*y*m+P*f*A-c*N*A-v*f*x+c*y*x,K=P*y*d-v*N*d-P*f*S+c*N*S+v*f*T-c*y*T,j=n*H+r*z+o*O+a*K;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/j;return e[0]=H*L,e[1]=(N*S*a-y*T*a-N*o*A+r*T*A+y*o*x-r*S*x)*L,e[2]=(f*T*a-N*d*a+N*o*m-r*T*m-f*o*x+r*d*x)*L,e[3]=(y*d*a-f*S*a-y*o*m+r*S*m+f*o*A-r*d*A)*L,e[4]=z*L,e[5]=(v*T*a-P*S*a+P*o*A-n*T*A-v*o*x+n*S*x)*L,e[6]=(P*d*a-c*T*a-P*o*m+n*T*m+c*o*x-n*d*x)*L,e[7]=(c*S*a-v*d*a+v*o*m-n*S*m-c*o*A+n*d*A)*L,e[8]=O*L,e[9]=(P*y*a-v*N*a-P*r*A+n*N*A+v*r*x-n*y*x)*L,e[10]=(c*N*a-P*f*a+P*r*m-n*N*m-c*r*x+n*f*x)*L,e[11]=(v*f*a-c*y*a-v*r*m+n*y*m+c*r*A-n*f*A)*L,e[12]=K*L,e[13]=(v*N*o-P*y*o+P*r*S-n*N*S-v*r*T+n*y*T)*L,e[14]=(P*f*o-c*N*o-P*r*d+n*N*d+c*r*T-n*f*T)*L,e[15]=(c*y*o-v*f*o+v*r*d-n*y*d-c*r*S+n*f*S)*L,this}scale(e){const n=this.elements,r=e.x,o=e.y,a=e.z;return n[0]*=r,n[4]*=o,n[8]*=a,n[1]*=r,n[5]*=o,n[9]*=a,n[2]*=r,n[6]*=o,n[10]*=a,n[3]*=r,n[7]*=o,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),a=1-r,c=e.x,f=e.y,d=e.z,m=a*c,v=a*f;return this.set(m*c+r,m*f-o*d,m*d+o*f,0,m*f+o*d,v*f+r,v*d-o*c,0,m*d-o*f,v*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,a=n._x,c=n._y,f=n._z,d=n._w,m=a+a,v=c+c,y=f+f,S=a*m,A=a*v,P=a*y,N=c*v,T=c*y,x=f*y,H=d*m,z=d*v,O=d*y,K=r.x,j=r.y,L=r.z;return o[0]=(1-(N+x))*K,o[1]=(A+O)*K,o[2]=(P-z)*K,o[3]=0,o[4]=(A-O)*j,o[5]=(1-(S+x))*j,o[6]=(T+H)*j,o[7]=0,o[8]=(P+z)*L,o[9]=(T-H)*L,o[10]=(1-(S+N))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let a=Ul.set(o[0],o[1],o[2]).length();const c=Ul.set(o[4],o[5],o[6]).length(),f=Ul.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Gr.copy(this);const m=1/a,v=1/c,y=1/f;return Gr.elements[0]*=m,Gr.elements[1]*=m,Gr.elements[2]*=m,Gr.elements[4]*=v,Gr.elements[5]*=v,Gr.elements[6]*=v,Gr.elements[8]*=y,Gr.elements[9]*=y,Gr.elements[10]*=y,n.setFromRotationMatrix(Gr),r.x=a,r.y=c,r.z=f,this}makePerspective(e,n,r,o,a,c,f=to){const d=this.elements,m=2*a/(n-e),v=2*a/(r-o),y=(n+e)/(n-e),S=(r+o)/(r-o);let A,P;if(f===to)A=-(c+a)/(c-a),P=-2*c*a/(c-a);else if(f===qf)A=-c/(c-a),P=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=y,d[12]=0,d[1]=0,d[5]=v,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=P,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,r,o,a,c,f=to){const d=this.elements,m=1/(n-e),v=1/(r-o),y=1/(c-a),S=(n+e)*m,A=(r+o)*v;let P,N;if(f===to)P=(c+a)*y,N=-2*y;else if(f===qf)P=a*y,N=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*m,d[4]=0,d[8]=0,d[12]=-S,d[1]=0,d[5]=2*v,d[9]=0,d[13]=-A,d[2]=0,d[6]=0,d[10]=N,d[14]=-P,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ul=new ce,Gr=new Cn,wT=new ce(0,0,0),AT=new ce(1,1,1),Fo=new ce,pf=new ce,er=new ce,J1=new Cn,Q1=new Hc;class ro{constructor(e=0,n=0,r=0,o=ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],f=o[8],d=o[1],m=o[5],v=o[9],y=o[2],S=o[6],A=o[10];switch(n){case"XYZ":this._y=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,A),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,A),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-y,a),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,A),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Nt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,A),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,a)):(this._x=0,this._y=Math.atan2(f,A));break;case"XZY":this._z=Math.asin(-Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-v,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return J1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J1,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Q1.setFromEuler(this),this.setFromQuaternion(Q1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ro.DEFAULT_ORDER="XYZ";class US{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RT=0;const e2=new ce,Fl=new Hc,Ys=new Cn,mf=new ce,Sc=new ce,CT=new ce,bT=new Hc,t2=new ce(1,0,0),n2=new ce(0,1,0),i2=new ce(0,0,1),r2={type:"added"},PT={type:"removed"},Ol={type:"childadded",child:null},ym={type:"childremoved",child:null};class wi extends Tu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=Vc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wi.DEFAULT_UP.clone();const e=new ce,n=new ro,r=new Hc,o=new ce(1,1,1);function a(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Cn},normalMatrix:{value:new Et}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new US,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fl.setFromAxisAngle(e,n),this.quaternion.multiply(Fl),this}rotateOnWorldAxis(e,n){return Fl.setFromAxisAngle(e,n),this.quaternion.premultiply(Fl),this}rotateX(e){return this.rotateOnAxis(t2,e)}rotateY(e){return this.rotateOnAxis(n2,e)}rotateZ(e){return this.rotateOnAxis(i2,e)}translateOnAxis(e,n){return e2.copy(e).applyQuaternion(this.quaternion),this.position.add(e2.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(t2,e)}translateY(e){return this.translateOnAxis(n2,e)}translateZ(e){return this.translateOnAxis(i2,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ys.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?mf.copy(e):mf.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ys.lookAt(Sc,mf,this.up):Ys.lookAt(mf,Sc,this.up),this.quaternion.setFromRotationMatrix(Ys),o&&(Ys.extractRotation(o.matrixWorld),Fl.setFromRotationMatrix(Ys),this.quaternion.premultiply(Fl.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r2),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(PT),ym.child=e,this.dispatchEvent(ym),ym.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ys.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ys.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ys),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r2),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,e,CT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,bT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let m=0,v=d.length;m<v;m++){const y=d[m];a(e.shapes,y)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,m=this.material.length;d<m;d++)f.push(a(e.materials,this.material[d]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(a(e.animations,d))}}if(n){const f=c(e.geometries),d=c(e.materials),m=c(e.textures),v=c(e.images),y=c(e.shapes),S=c(e.skeletons),A=c(e.animations),P=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),A.length>0&&(r.animations=A),P.length>0&&(r.nodes=P)}return r.object=o,r;function c(f){const d=[];for(const m in f){const v=f[m];delete v.metadata,d.push(v)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}wi.DEFAULT_UP=new ce(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wr=new ce,$s=new ce,Sm=new ce,Ks=new ce,kl=new ce,Bl=new ce,s2=new ce,xm=new ce,Em=new ce,Mm=new ce,Tm=new Rn,wm=new Rn,Am=new Rn;class Yr{constructor(e=new ce,n=new ce,r=new ce){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Wr.subVectors(e,n),o.cross(Wr);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,n,r,o,a){Wr.subVectors(o,n),$s.subVectors(r,n),Sm.subVectors(e,n);const c=Wr.dot(Wr),f=Wr.dot($s),d=Wr.dot(Sm),m=$s.dot($s),v=$s.dot(Sm),y=c*m-f*f;if(y===0)return a.set(0,0,0),null;const S=1/y,A=(m*d-f*v)*S,P=(c*v-f*d)*S;return a.set(1-A-P,P,A)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ks)===null?!1:Ks.x>=0&&Ks.y>=0&&Ks.x+Ks.y<=1}static getInterpolation(e,n,r,o,a,c,f,d){return this.getBarycoord(e,n,r,o,Ks)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Ks.x),d.addScaledVector(c,Ks.y),d.addScaledVector(f,Ks.z),d)}static getInterpolatedAttribute(e,n,r,o,a,c){return Tm.setScalar(0),wm.setScalar(0),Am.setScalar(0),Tm.fromBufferAttribute(e,n),wm.fromBufferAttribute(e,r),Am.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Tm,a.x),c.addScaledVector(wm,a.y),c.addScaledVector(Am,a.z),c}static isFrontFacing(e,n,r,o){return Wr.subVectors(r,n),$s.subVectors(e,n),Wr.cross($s).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wr.subVectors(this.c,this.b),$s.subVectors(this.a,this.b),Wr.cross($s).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,a){return Yr.getInterpolation(e,this.a,this.b,this.c,n,r,o,a)}containsPoint(e){return Yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,a=this.c;let c,f;kl.subVectors(o,r),Bl.subVectors(a,r),xm.subVectors(e,r);const d=kl.dot(xm),m=Bl.dot(xm);if(d<=0&&m<=0)return n.copy(r);Em.subVectors(e,o);const v=kl.dot(Em),y=Bl.dot(Em);if(v>=0&&y<=v)return n.copy(o);const S=d*y-v*m;if(S<=0&&d>=0&&v<=0)return c=d/(d-v),n.copy(r).addScaledVector(kl,c);Mm.subVectors(e,a);const A=kl.dot(Mm),P=Bl.dot(Mm);if(P>=0&&A<=P)return n.copy(a);const N=A*m-d*P;if(N<=0&&m>=0&&P<=0)return f=m/(m-P),n.copy(r).addScaledVector(Bl,f);const T=v*P-A*y;if(T<=0&&y-v>=0&&A-P>=0)return s2.subVectors(a,o),f=(y-v)/(y-v+(A-P)),n.copy(o).addScaledVector(s2,f);const x=1/(T+N+S);return c=N*x,f=S*x,n.copy(r).addScaledVector(kl,c).addScaledVector(Bl,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const FS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oo={h:0,s:0,l:0},gf={h:0,s:0,l:0};function Rm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Xt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Xt.workingColorSpace){if(e=fT(e,1),n=Nt(n,0,1),r=Nt(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,c=2*r-a;this.r=Rm(c,a,e+1/3),this.g=Rm(c,a,e),this.b=Rm(c,a,e-1/3)}return Xt.toWorkingColorSpace(this,o),this}setStyle(e,n=wr){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wr){const r=FS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=Ql(e.r),this.g=Ql(e.g),this.b=Ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wr){return Xt.fromWorkingColorSpace(Mi.copy(this),e),Math.round(Nt(Mi.r*255,0,255))*65536+Math.round(Nt(Mi.g*255,0,255))*256+Math.round(Nt(Mi.b*255,0,255))}getHexString(e=wr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Mi.copy(this),n);const r=Mi.r,o=Mi.g,a=Mi.b,c=Math.max(r,o,a),f=Math.min(r,o,a);let d,m;const v=(f+c)/2;if(f===c)d=0,m=0;else{const y=c-f;switch(m=v<=.5?y/(c+f):y/(2-c-f),c){case r:d=(o-a)/y+(o<a?6:0);break;case o:d=(a-r)/y+2;break;case a:d=(r-o)/y+4;break}d/=6}return e.h=d,e.s=m,e.l=v,e}getRGB(e,n=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Mi.copy(this),n),e.r=Mi.r,e.g=Mi.g,e.b=Mi.b,e}getStyle(e=wr){Xt.fromWorkingColorSpace(Mi.copy(this),e);const n=Mi.r,r=Mi.g,o=Mi.b;return e!==wr?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Oo),this.setHSL(Oo.h+e,Oo.s+n,Oo.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Oo),e.getHSL(gf);const r=cm(Oo.h,gf.h,n),o=cm(Oo.s,gf.s,n),a=cm(Oo.l,gf.l,n);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*n+a[3]*r+a[6]*o,this.g=a[1]*n+a[4]*r+a[7]*o,this.b=a[2]*n+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mi=new Vt;Vt.NAMES=FS;let LT=0;class ld extends Tu{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Vc(),this.name="",this.type="Material",this.blending=Zl,this.side=Yo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eg,this.blendDst=tg,this.blendEquation=Ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ru,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zl&&(r.blending=this.blending),this.side!==Yo&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==eg&&(r.blendSrc=this.blendSrc),this.blendDst!==tg&&(r.blendDst=this.blendDst),this.blendEquation!==Ta&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ru&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j1&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pl&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pl&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pl&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}if(n){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class v0 extends ld{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ro,this.combine=yS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const On=new ce,_f=new tn;class Ts{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=X1,this.updateRanges=[],this.gpuType=eo,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_f.fromBufferAttribute(this,n),_f.applyMatrix3(e),this.setXY(n,_f.x,_f.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)On.fromBufferAttribute(this,n),On.applyMatrix3(e),this.setXYZ(n,On.x,On.y,On.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)On.fromBufferAttribute(this,n),On.applyMatrix4(e),this.setXYZ(n,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)On.fromBufferAttribute(this,n),On.applyNormalMatrix(e),this.setXYZ(n,On.x,On.y,On.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)On.fromBufferAttribute(this,n),On.transformDirection(e),this.setXYZ(n,On.x,On.y,On.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=_c(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Gi(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_c(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_c(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_c(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_c(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Gi(n,this.array),r=Gi(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Gi(n,this.array),r=Gi(r,this.array),o=Gi(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,a){return e*=this.itemSize,this.normalized&&(n=Gi(n,this.array),r=Gi(r,this.array),o=Gi(o,this.array),a=Gi(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X1&&(e.usage=this.usage),e}}class OS extends Ts{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class kS extends Ts{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ia extends Ts{constructor(e,n,r){super(new Float32Array(e),n,r)}}let IT=0;const xr=new Cn,Cm=new wi,zl=new ce,tr=new Gc,xc=new Gc,ri=new ce;class Xa extends Tu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Vc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IS(e)?kS:OS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Et().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,n,r){return xr.makeTranslation(e,n,r),this.applyMatrix4(xr),this}scale(e,n,r){return xr.makeScale(e,n,r),this.applyMatrix4(xr),this}lookAt(e){return Cm.lookAt(e),Cm.updateMatrix(),this.applyMatrix4(Cm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zl).negate(),this.translate(zl.x,zl.y,zl.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ia(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const a=e[o];n.setXYZ(o,a.x,a.y,a.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,tr.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,tr.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(tr.min),this.boundingBox.expandByPoint(tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(tr.setFromBufferAttribute(e),n)for(let a=0,c=n.length;a<c;a++){const f=n[a];xc.setFromBufferAttribute(f),this.morphTargetsRelative?(ri.addVectors(tr.min,xc.min),tr.expandByPoint(ri),ri.addVectors(tr.max,xc.max),tr.expandByPoint(ri)):(tr.expandByPoint(xc.min),tr.expandByPoint(xc.max))}tr.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)ri.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(ri));if(n)for(let a=0,c=n.length;a<c;a++){const f=n[a],d=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)ri.fromBufferAttribute(f,m),d&&(zl.fromBufferAttribute(e,m),ri.add(zl)),o=Math.max(o,r.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ts(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let R=0;R<r.count;R++)f[R]=new ce,d[R]=new ce;const m=new ce,v=new ce,y=new ce,S=new tn,A=new tn,P=new tn,N=new ce,T=new ce;function x(R,M,E){m.fromBufferAttribute(r,R),v.fromBufferAttribute(r,M),y.fromBufferAttribute(r,E),S.fromBufferAttribute(a,R),A.fromBufferAttribute(a,M),P.fromBufferAttribute(a,E),v.sub(m),y.sub(m),A.sub(S),P.sub(S);const C=1/(A.x*P.y-P.x*A.y);isFinite(C)&&(N.copy(v).multiplyScalar(P.y).addScaledVector(y,-A.y).multiplyScalar(C),T.copy(y).multiplyScalar(A.x).addScaledVector(v,-P.x).multiplyScalar(C),f[R].add(N),f[M].add(N),f[E].add(N),d[R].add(T),d[M].add(T),d[E].add(T))}let H=this.groups;H.length===0&&(H=[{start:0,count:e.count}]);for(let R=0,M=H.length;R<M;++R){const E=H[R],C=E.start,k=E.count;for(let I=C,fe=C+k;I<fe;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const z=new ce,O=new ce,K=new ce,j=new ce;function L(R){K.fromBufferAttribute(o,R),j.copy(K);const M=f[R];z.copy(M),z.sub(K.multiplyScalar(K.dot(M))).normalize(),O.crossVectors(j,M);const C=O.dot(d[R])<0?-1:1;c.setXYZW(R,z.x,z.y,z.z,C)}for(let R=0,M=H.length;R<M;++R){const E=H[R],C=E.start,k=E.count;for(let I=C,fe=C+k;I<fe;I+=3)L(e.getX(I+0)),L(e.getX(I+1)),L(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ts(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,A=r.count;S<A;S++)r.setXYZ(S,0,0,0);const o=new ce,a=new ce,c=new ce,f=new ce,d=new ce,m=new ce,v=new ce,y=new ce;if(e)for(let S=0,A=e.count;S<A;S+=3){const P=e.getX(S+0),N=e.getX(S+1),T=e.getX(S+2);o.fromBufferAttribute(n,P),a.fromBufferAttribute(n,N),c.fromBufferAttribute(n,T),v.subVectors(c,a),y.subVectors(o,a),v.cross(y),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,T),f.add(v),d.add(v),m.add(v),r.setXYZ(P,f.x,f.y,f.z),r.setXYZ(N,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z)}else for(let S=0,A=n.count;S<A;S+=3)o.fromBufferAttribute(n,S+0),a.fromBufferAttribute(n,S+1),c.fromBufferAttribute(n,S+2),v.subVectors(c,a),y.subVectors(o,a),v.cross(y),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ri.fromBufferAttribute(e,n),ri.normalize(),e.setXYZ(n,ri.x,ri.y,ri.z)}toNonIndexed(){function e(f,d){const m=f.array,v=f.itemSize,y=f.normalized,S=new m.constructor(d.length*v);let A=0,P=0;for(let N=0,T=d.length;N<T;N++){f.isInterleavedBufferAttribute?A=d[N]*f.data.stride+f.offset:A=d[N]*v;for(let x=0;x<v;x++)S[P++]=m[A++]}return new Ts(S,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xa,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],m=e(d,r);n.setAttribute(f,m)}const a=this.morphAttributes;for(const f in a){const d=[],m=a[f];for(let v=0,y=m.length;v<y;v++){const S=m[v],A=e(S,r);d.push(A)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const m=c[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const m=r[d];e.data.attributes[d]=m.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],v=[];for(let y=0,S=m.length;y<S;y++){const A=m[y];v.push(A.toJSON(e.data))}v.length>0&&(o[d]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const a=e.morphAttributes;for(const m in a){const v=[],y=a[m];for(let S=0,A=y.length;S<A;S++)v.push(y[S].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,v=c.length;m<v;m++){const y=c[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o2=new Cn,ga=new TT,vf=new _0,a2=new ce,yf=new ce,Sf=new ce,xf=new ce,bm=new ce,Ef=new ce,l2=new ce,Mf=new ce;class Kr extends wi{constructor(e=new Xa,n=new v0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Ef.set(0,0,0);for(let d=0,m=a.length;d<m;d++){const v=f[d],y=a[d];v!==0&&(bm.fromBufferAttribute(y,e),c?Ef.addScaledVector(bm,v):Ef.addScaledVector(bm.sub(n),v))}n.add(Ef)}return n}raycast(e,n){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vf.copy(r.boundingSphere),vf.applyMatrix4(a),ga.copy(e.ray).recast(e.near),!(vf.containsPoint(ga.origin)===!1&&(ga.intersectSphere(vf,a2)===null||ga.origin.distanceToSquared(a2)>(e.far-e.near)**2))&&(o2.copy(a).invert(),ga.copy(e.ray).applyMatrix4(o2),!(r.boundingBox!==null&&ga.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ga)))}_computeIntersections(e,n,r){let o;const a=this.geometry,c=this.material,f=a.index,d=a.attributes.position,m=a.attributes.uv,v=a.attributes.uv1,y=a.attributes.normal,S=a.groups,A=a.drawRange;if(f!==null)if(Array.isArray(c))for(let P=0,N=S.length;P<N;P++){const T=S[P],x=c[T.materialIndex],H=Math.max(T.start,A.start),z=Math.min(f.count,Math.min(T.start+T.count,A.start+A.count));for(let O=H,K=z;O<K;O+=3){const j=f.getX(O),L=f.getX(O+1),R=f.getX(O+2);o=Tf(this,x,e,r,m,v,y,j,L,R),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const P=Math.max(0,A.start),N=Math.min(f.count,A.start+A.count);for(let T=P,x=N;T<x;T+=3){const H=f.getX(T),z=f.getX(T+1),O=f.getX(T+2);o=Tf(this,c,e,r,m,v,y,H,z,O),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let P=0,N=S.length;P<N;P++){const T=S[P],x=c[T.materialIndex],H=Math.max(T.start,A.start),z=Math.min(d.count,Math.min(T.start+T.count,A.start+A.count));for(let O=H,K=z;O<K;O+=3){const j=O,L=O+1,R=O+2;o=Tf(this,x,e,r,m,v,y,j,L,R),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const P=Math.max(0,A.start),N=Math.min(d.count,A.start+A.count);for(let T=P,x=N;T<x;T+=3){const H=T,z=T+1,O=T+2;o=Tf(this,c,e,r,m,v,y,H,z,O),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}}}function DT(t,e,n,r,o,a,c,f){let d;if(e.side===Xi?d=r.intersectTriangle(c,a,o,!0,f):d=r.intersectTriangle(o,a,c,e.side===Yo,f),d===null)return null;Mf.copy(f),Mf.applyMatrix4(t.matrixWorld);const m=n.ray.origin.distanceTo(Mf);return m<n.near||m>n.far?null:{distance:m,point:Mf.clone(),object:t}}function Tf(t,e,n,r,o,a,c,f,d,m){t.getVertexPosition(f,yf),t.getVertexPosition(d,Sf),t.getVertexPosition(m,xf);const v=DT(t,e,n,r,yf,Sf,xf,l2);if(v){const y=new ce;Yr.getBarycoord(l2,yf,Sf,xf,y),o&&(v.uv=Yr.getInterpolatedAttribute(o,f,d,m,y,new tn)),a&&(v.uv1=Yr.getInterpolatedAttribute(a,f,d,m,y,new tn)),c&&(v.normal=Yr.getInterpolatedAttribute(c,f,d,m,y,new ce),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:f,b:d,c:m,normal:new ce,materialIndex:0};Yr.getNormal(yf,Sf,xf,S.normal),v.face=S,v.barycoord=y}return v}class Wc extends Xa{constructor(e=1,n=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const f=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],m=[],v=[],y=[];let S=0,A=0;P("z","y","x",-1,-1,r,n,e,c,a,0),P("z","y","x",1,-1,r,n,-e,c,a,1),P("x","z","y",1,1,e,r,n,o,c,2),P("x","z","y",1,-1,e,r,-n,o,c,3),P("x","y","z",1,-1,e,n,r,o,a,4),P("x","y","z",-1,-1,e,n,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new Ia(m,3)),this.setAttribute("normal",new Ia(v,3)),this.setAttribute("uv",new Ia(y,2));function P(N,T,x,H,z,O,K,j,L,R,M){const E=O/L,C=K/R,k=O/2,I=K/2,fe=j/2,_e=L+1,pe=R+1;let me=0,q=0;const ge=new ce;for(let le=0;le<pe;le++){const G=le*C-I;for(let re=0;re<_e;re++){const Pe=re*E-k;ge[N]=Pe*H,ge[T]=G*z,ge[x]=fe,m.push(ge.x,ge.y,ge.z),ge[N]=0,ge[T]=0,ge[x]=j>0?1:-1,v.push(ge.x,ge.y,ge.z),y.push(re/L),y.push(1-le/R),me+=1}}for(let le=0;le<R;le++)for(let G=0;G<L;G++){const re=S+G+_e*le,Pe=S+G+_e*(le+1),se=S+(G+1)+_e*(le+1),ve=S+(G+1)+_e*le;d.push(re,Pe,ve),d.push(Pe,se,ve),q+=6}f.addGroup(A,q,M),A+=q,S+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cu(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const o=t[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bi(t){const e={};for(let n=0;n<t.length;n++){const r=cu(t[n]);for(const o in r)e[o]=r[o]}return e}function NT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function BS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}const UT={clone:cu,merge:bi};var FT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class so extends ld{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FT,this.fragmentShader=OT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cu(e.uniforms),this.uniformsGroups=NT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class zS extends wi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=to}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ko=new ce,u2=new tn,c2=new tn;class Ar extends zS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(um*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bg*2*Math.atan(Math.tan(um*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ko.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ko.x,ko.y).multiplyScalar(-e/ko.z),ko.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ko.x,ko.y).multiplyScalar(-e/ko.z)}getViewSize(e,n){return this.getViewBounds(e,u2,c2),n.subVectors(c2,u2)}setViewOffset(e,n,r,o,a,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(um*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,m=c.fullHeight;a+=c.offsetX*o/d,n-=c.offsetY*r/m,o*=c.width/d,r*=c.height/m}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vl=-90,Hl=1;class kT extends wi{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ar(Vl,Hl,e,n);o.layers=this.layers,this.add(o);const a=new Ar(Vl,Hl,e,n);a.layers=this.layers,this.add(a);const c=new Ar(Vl,Hl,e,n);c.layers=this.layers,this.add(c);const f=new Ar(Vl,Hl,e,n);f.layers=this.layers,this.add(f);const d=new Ar(Vl,Hl,e,n);d.layers=this.layers,this.add(d);const m=new Ar(Vl,Hl,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,a,c,f,d]=n;for(const m of n)this.remove(m);if(e===to)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===qf)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,d,m,v]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),P=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,a),e.setRenderTarget(r,1,o),e.render(n,c),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,d),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(y,S,A),e.xr.enabled=P,r.texture.needsPMREMUpdate=!0}}class VS extends qi{constructor(e,n,r,o,a,c,f,d,m,v){e=e!==void 0?e:[],n=n!==void 0?n:su,super(e,n,r,o,a,c,f,d,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BT extends Va{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new VS(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xs}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Wc(5,5,5),a=new so({name:"CubemapFromEquirect",uniforms:cu(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xi,blending:Wo});a.uniforms.tEquirect.value=n;const c=new Kr(o,a),f=n.minFilter;return n.minFilter===Ca&&(n.minFilter=xs),new kT(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(a)}}class y0{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Vt(e),this.near=n,this.far=r}clone(){return new y0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zT extends wi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ro,this.environmentIntensity=1,this.environmentRotation=new ro,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Pm=new ce,VT=new ce,HT=new Et;class xa{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Pm.subVectors(r,n).cross(VT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Pm),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||HT.getNormalMatrix(e),o=this.coplanarPoint(Pm).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _a=new _0,wf=new ce;class S0{constructor(e=new xa,n=new xa,r=new xa,o=new xa,a=new xa,c=new xa){this.planes=[e,n,r,o,a,c]}set(e,n,r,o,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=to){const r=this.planes,o=e.elements,a=o[0],c=o[1],f=o[2],d=o[3],m=o[4],v=o[5],y=o[6],S=o[7],A=o[8],P=o[9],N=o[10],T=o[11],x=o[12],H=o[13],z=o[14],O=o[15];if(r[0].setComponents(d-a,S-m,T-A,O-x).normalize(),r[1].setComponents(d+a,S+m,T+A,O+x).normalize(),r[2].setComponents(d+c,S+v,T+P,O+H).normalize(),r[3].setComponents(d-c,S-v,T-P,O-H).normalize(),r[4].setComponents(d-f,S-y,T-N,O-z).normalize(),n===to)r[5].setComponents(d+f,S+y,T+N,O+z).normalize();else if(n===qf)r[5].setComponents(f,y,N,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_a)}intersectsSprite(e){return _a.center.set(0,0,0),_a.radius=.7071067811865476,_a.applyMatrix4(e.matrixWorld),this.intersectsSphere(_a)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(wf.x=o.normal.x>0?e.max.x:e.min.x,wf.y=o.normal.y>0?e.max.y:e.min.y,wf.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Af extends wi{constructor(){super(),this.isGroup=!0,this.type="Group"}}class HS extends qi{constructor(e,n,r,o,a,c,f,d,m,v=Jl){if(v!==Jl&&v!==lu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Jl&&(r=za),r===void 0&&v===lu&&(r=au),super(null,o,a,c,f,d,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Jr,this.minFilter=d!==void 0?d:Jr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hu extends Xa{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const a=e/2,c=n/2,f=Math.floor(r),d=Math.floor(o),m=f+1,v=d+1,y=e/f,S=n/d,A=[],P=[],N=[],T=[];for(let x=0;x<v;x++){const H=x*S-c;for(let z=0;z<m;z++){const O=z*y-a;P.push(O,-H,0),N.push(0,0,1),T.push(z/f),T.push(1-x/d)}}for(let x=0;x<d;x++)for(let H=0;H<f;H++){const z=H+m*x,O=H+m*(x+1),K=H+1+m*(x+1),j=H+1+m*x;A.push(z,O,j),A.push(O,K,j)}this.setIndex(A),this.setAttribute("position",new Ia(P,3)),this.setAttribute("normal",new Ia(N,3)),this.setAttribute("uv",new Ia(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class GT extends ld{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WT extends ld{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class GS extends wi{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Lm=new Cn,h2=new ce,f2=new ce;class jT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tn(512,512),this.map=null,this.mapPass=null,this.matrix=new Cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new S0,this._frameExtents=new tn(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;h2.setFromMatrixPosition(e.matrixWorld),n.position.copy(h2),f2.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(f2),n.updateMatrixWorld(),Lm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lm),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Lm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WS extends zS{constructor(e=-1,n=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,f=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=m*this.view.offsetX,c=a+m*this.view.width,f-=v*this.view.offsetY,d=f-v*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class XT extends jT{constructor(){super(new WS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qT extends GS{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wi.DEFAULT_UP),this.updateMatrix(),this.target=new wi,this.shadow=new XT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YT extends GS{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class $T extends Ar{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class KT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=d2(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=d2();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function d2(){return performance.now()}function p2(t,e,n,r){const o=ZT(r);switch(n){case TS:return t*e;case AS:return t*e;case RS:return t*e*2;case CS:return t*e/o.components*o.byteLength;case p0:return t*e/o.components*o.byteLength;case bS:return t*e*2/o.components*o.byteLength;case m0:return t*e*2/o.components*o.byteLength;case wS:return t*e*3/o.components*o.byteLength;case $r:return t*e*4/o.components*o.byteLength;case g0:return t*e*4/o.components*o.byteLength;case Of:case kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bf:case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pg:case gg:return Math.max(t,16)*Math.max(e,8)/4;case dg:case mg:return Math.max(t,8)*Math.max(e,8)/2;case _g:case vg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xg:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Eg:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Mg:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tg:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wg:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ag:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rg:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cg:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bg:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pg:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lg:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ig:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dg:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Ng:case Ug:return Math.ceil(t/4)*Math.ceil(e/4)*16;case PS:case Fg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Og:case kg:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZT(t){switch(t){case io:case xS:return{byteLength:1,components:1};case Dc:case ES:case zc:return{byteLength:2,components:1};case f0:case d0:return{byteLength:2,components:4};case za:case h0:case eo:return{byteLength:4,components:1};case MS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:c0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=c0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jS(){let t=null,e=!1,n=null,r=null;function o(a,c){n(a,c),r=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function JT(t){const e=new WeakMap;function n(f,d){const m=f.array,v=f.usage,y=m.byteLength,S=t.createBuffer();t.bindBuffer(d,S),t.bufferData(d,m,v),f.onUploadCallback();let A;if(m instanceof Float32Array)A=t.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?A=t.HALF_FLOAT:A=t.UNSIGNED_SHORT;else if(m instanceof Int16Array)A=t.SHORT;else if(m instanceof Uint32Array)A=t.UNSIGNED_INT;else if(m instanceof Int32Array)A=t.INT;else if(m instanceof Int8Array)A=t.BYTE;else if(m instanceof Uint8Array)A=t.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)A=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:A,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,d,m){const v=d.array,y=d.updateRanges;if(t.bindBuffer(m,f),y.length===0)t.bufferSubData(m,0,v);else{y.sort((A,P)=>A.start-P.start);let S=0;for(let A=1;A<y.length;A++){const P=y[S],N=y[A];N.start<=P.start+P.count+1?P.count=Math.max(P.count,N.start+N.count-P.start):(++S,y[S]=N)}y.length=S+1;for(let A=0,P=y.length;A<P;A++){const N=y[A];t.bufferSubData(m,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(t.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,d));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,d),m.version=f.version}}return{get:o,remove:a,update:c}}var QT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a4=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h4=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,E4=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M4=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T4=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b4="gl_FragColor = linearToOutputTexel( gl_FragColor );",P4=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D4=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z4=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G4=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W4=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,j4=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q4=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$4=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K4=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z4=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J4=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q4=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_w=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ww=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_A=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:QT,alphahash_pars_fragment:e4,alphamap_fragment:t4,alphamap_pars_fragment:n4,alphatest_fragment:i4,alphatest_pars_fragment:r4,aomap_fragment:s4,aomap_pars_fragment:o4,batching_pars_vertex:a4,batching_vertex:l4,begin_vertex:u4,beginnormal_vertex:c4,bsdfs:h4,iridescence_fragment:f4,bumpmap_pars_fragment:d4,clipping_planes_fragment:p4,clipping_planes_pars_fragment:m4,clipping_planes_pars_vertex:g4,clipping_planes_vertex:_4,color_fragment:v4,color_pars_fragment:y4,color_pars_vertex:S4,color_vertex:x4,common:E4,cube_uv_reflection_fragment:M4,defaultnormal_vertex:T4,displacementmap_pars_vertex:w4,displacementmap_vertex:A4,emissivemap_fragment:R4,emissivemap_pars_fragment:C4,colorspace_fragment:b4,colorspace_pars_fragment:P4,envmap_fragment:L4,envmap_common_pars_fragment:I4,envmap_pars_fragment:D4,envmap_pars_vertex:N4,envmap_physical_pars_fragment:j4,envmap_vertex:U4,fog_vertex:F4,fog_pars_vertex:O4,fog_fragment:k4,fog_pars_fragment:B4,gradientmap_pars_fragment:z4,lightmap_pars_fragment:V4,lights_lambert_fragment:H4,lights_lambert_pars_fragment:G4,lights_pars_begin:W4,lights_toon_fragment:X4,lights_toon_pars_fragment:q4,lights_phong_fragment:Y4,lights_phong_pars_fragment:$4,lights_physical_fragment:K4,lights_physical_pars_fragment:Z4,lights_fragment_begin:J4,lights_fragment_maps:Q4,lights_fragment_end:ew,logdepthbuf_fragment:tw,logdepthbuf_pars_fragment:nw,logdepthbuf_pars_vertex:iw,logdepthbuf_vertex:rw,map_fragment:sw,map_pars_fragment:ow,map_particle_fragment:aw,map_particle_pars_fragment:lw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:cw,morphinstance_vertex:hw,morphcolor_vertex:fw,morphnormal_vertex:dw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:gw,normal_fragment_maps:_w,normal_pars_fragment:vw,normal_pars_vertex:yw,normal_vertex:Sw,normalmap_pars_fragment:xw,clearcoat_normal_fragment_begin:Ew,clearcoat_normal_fragment_maps:Mw,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:ww,opaque_fragment:Aw,packing:Rw,premultiplied_alpha_fragment:Cw,project_vertex:bw,dithering_fragment:Pw,dithering_pars_fragment:Lw,roughnessmap_fragment:Iw,roughnessmap_pars_fragment:Dw,shadowmap_pars_fragment:Nw,shadowmap_pars_vertex:Uw,shadowmap_vertex:Fw,shadowmask_pars_fragment:Ow,skinbase_vertex:kw,skinning_pars_vertex:Bw,skinning_vertex:zw,skinnormal_vertex:Vw,specularmap_fragment:Hw,specularmap_pars_fragment:Gw,tonemapping_fragment:Ww,tonemapping_pars_fragment:jw,transmission_fragment:Xw,transmission_pars_fragment:qw,uv_pars_fragment:Yw,uv_pars_vertex:$w,uv_vertex:Kw,worldpos_vertex:Zw,background_vert:Jw,background_frag:Qw,backgroundCube_vert:eA,backgroundCube_frag:tA,cube_vert:nA,cube_frag:iA,depth_vert:rA,depth_frag:sA,distanceRGBA_vert:oA,distanceRGBA_frag:aA,equirect_vert:lA,equirect_frag:uA,linedashed_vert:cA,linedashed_frag:hA,meshbasic_vert:fA,meshbasic_frag:dA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:_A,meshnormal_vert:vA,meshnormal_frag:yA,meshphong_vert:SA,meshphong_frag:xA,meshphysical_vert:EA,meshphysical_frag:MA,meshtoon_vert:TA,meshtoon_frag:wA,points_vert:AA,points_frag:RA,shadow_vert:CA,shadow_frag:bA,sprite_vert:PA,sprite_frag:LA},Ve={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new tn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new tn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},ys={basic:{uniforms:bi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:bi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:bi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:bi([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:bi([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:bi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:bi([Ve.points,Ve.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:bi([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:bi([Ve.common,Ve.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:bi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:bi([Ve.sprite,Ve.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:bi([Ve.common,Ve.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:bi([Ve.lights,Ve.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};ys.physical={uniforms:bi([ys.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new tn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new tn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new tn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Rf={r:0,b:0,g:0},va=new ro,IA=new Cn;function DA(t,e,n,r,o,a,c){const f=new Vt(0);let d=a===!0?0:1,m,v,y=null,S=0,A=null;function P(z){let O=z.isScene===!0?z.background:null;return O&&O.isTexture&&(O=(z.backgroundBlurriness>0?n:e).get(O)),O}function N(z){let O=!1;const K=P(z);K===null?x(f,d):K&&K.isColor&&(x(K,1),O=!0);const j=t.xr.getEnvironmentBlendMode();j==="additive"?r.buffers.color.setClear(0,0,0,1,c):j==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(t.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function T(z,O){const K=P(O);K&&(K.isCubeTexture||K.mapping===ad)?(v===void 0&&(v=new Kr(new Wc(1,1,1),new so({name:"BackgroundCubeMaterial",uniforms:cu(ys.backgroundCube.uniforms),vertexShader:ys.backgroundCube.vertexShader,fragmentShader:ys.backgroundCube.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(j,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),va.copy(O.backgroundRotation),va.x*=-1,va.y*=-1,va.z*=-1,K.isCubeTexture&&K.isRenderTargetTexture===!1&&(va.y*=-1,va.z*=-1),v.material.uniforms.envMap.value=K,v.material.uniforms.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(IA.makeRotationFromEuler(va)),v.material.toneMapped=Xt.getTransfer(K.colorSpace)!==nn,(y!==K||S!==K.version||A!==t.toneMapping)&&(v.material.needsUpdate=!0,y=K,S=K.version,A=t.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):K&&K.isTexture&&(m===void 0&&(m=new Kr(new hu(2,2),new so({name:"BackgroundMaterial",uniforms:cu(ys.background.uniforms),vertexShader:ys.background.vertexShader,fragmentShader:ys.background.fragmentShader,side:Yo,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=K,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Xt.getTransfer(K.colorSpace)!==nn,K.matrixAutoUpdate===!0&&K.updateMatrix(),m.material.uniforms.uvTransform.value.copy(K.matrix),(y!==K||S!==K.version||A!==t.toneMapping)&&(m.material.needsUpdate=!0,y=K,S=K.version,A=t.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function x(z,O){z.getRGB(Rf,BS(t)),r.buffers.color.setClear(Rf.r,Rf.g,Rf.b,O,c)}function H(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(z,O=1){f.set(z),d=O,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(z){d=z,x(f,d)},render:N,addToRenderList:T,dispose:H}}function NA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},o=S(null);let a=o,c=!1;function f(E,C,k,I,fe){let _e=!1;const pe=y(I,k,C);a!==pe&&(a=pe,m(a.object)),_e=A(E,I,k,fe),_e&&P(E,I,k,fe),fe!==null&&e.update(fe,t.ELEMENT_ARRAY_BUFFER),(_e||c)&&(c=!1,O(E,C,k,I),fe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function d(){return t.createVertexArray()}function m(E){return t.bindVertexArray(E)}function v(E){return t.deleteVertexArray(E)}function y(E,C,k){const I=k.wireframe===!0;let fe=r[E.id];fe===void 0&&(fe={},r[E.id]=fe);let _e=fe[C.id];_e===void 0&&(_e={},fe[C.id]=_e);let pe=_e[I];return pe===void 0&&(pe=S(d()),_e[I]=pe),pe}function S(E){const C=[],k=[],I=[];for(let fe=0;fe<n;fe++)C[fe]=0,k[fe]=0,I[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:I,object:E,attributes:{},index:null}}function A(E,C,k,I){const fe=a.attributes,_e=C.attributes;let pe=0;const me=k.getAttributes();for(const q in me)if(me[q].location>=0){const le=fe[q];let G=_e[q];if(G===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(G=E.instanceColor)),le===void 0||le.attribute!==G||G&&le.data!==G.data)return!0;pe++}return a.attributesNum!==pe||a.index!==I}function P(E,C,k,I){const fe={},_e=C.attributes;let pe=0;const me=k.getAttributes();for(const q in me)if(me[q].location>=0){let le=_e[q];le===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(le=E.instanceColor));const G={};G.attribute=le,le&&le.data&&(G.data=le.data),fe[q]=G,pe++}a.attributes=fe,a.attributesNum=pe,a.index=I}function N(){const E=a.newAttributes;for(let C=0,k=E.length;C<k;C++)E[C]=0}function T(E){x(E,0)}function x(E,C){const k=a.newAttributes,I=a.enabledAttributes,fe=a.attributeDivisors;k[E]=1,I[E]===0&&(t.enableVertexAttribArray(E),I[E]=1),fe[E]!==C&&(t.vertexAttribDivisor(E,C),fe[E]=C)}function H(){const E=a.newAttributes,C=a.enabledAttributes;for(let k=0,I=C.length;k<I;k++)C[k]!==E[k]&&(t.disableVertexAttribArray(k),C[k]=0)}function z(E,C,k,I,fe,_e,pe){pe===!0?t.vertexAttribIPointer(E,C,k,fe,_e):t.vertexAttribPointer(E,C,k,I,fe,_e)}function O(E,C,k,I){N();const fe=I.attributes,_e=k.getAttributes(),pe=C.defaultAttributeValues;for(const me in _e){const q=_e[me];if(q.location>=0){let ge=fe[me];if(ge===void 0&&(me==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),me==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ge!==void 0){const le=ge.normalized,G=ge.itemSize,re=e.get(ge);if(re===void 0)continue;const Pe=re.buffer,se=re.type,ve=re.bytesPerElement,Ae=se===t.INT||se===t.UNSIGNED_INT||ge.gpuType===h0;if(ge.isInterleavedBufferAttribute){const Ee=ge.data,Ue=Ee.stride,He=ge.offset;if(Ee.isInstancedInterleavedBuffer){for(let at=0;at<q.locationSize;at++)x(q.location+at,Ee.meshPerAttribute);E.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let at=0;at<q.locationSize;at++)T(q.location+at);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let at=0;at<q.locationSize;at++)z(q.location+at,G/q.locationSize,se,le,Ue*ve,(He+G/q.locationSize*at)*ve,Ae)}else{if(ge.isInstancedBufferAttribute){for(let Ee=0;Ee<q.locationSize;Ee++)x(q.location+Ee,ge.meshPerAttribute);E.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)T(q.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Ee=0;Ee<q.locationSize;Ee++)z(q.location+Ee,G/q.locationSize,se,le,G*ve,G/q.locationSize*Ee*ve,Ae)}}else if(pe!==void 0){const le=pe[me];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(q.location,le);break;case 3:t.vertexAttrib3fv(q.location,le);break;case 4:t.vertexAttrib4fv(q.location,le);break;default:t.vertexAttrib1fv(q.location,le)}}}}H()}function K(){R();for(const E in r){const C=r[E];for(const k in C){const I=C[k];for(const fe in I)v(I[fe].object),delete I[fe];delete C[k]}delete r[E]}}function j(E){if(r[E.id]===void 0)return;const C=r[E.id];for(const k in C){const I=C[k];for(const fe in I)v(I[fe].object),delete I[fe];delete C[k]}delete r[E.id]}function L(E){for(const C in r){const k=r[C];if(k[E.id]===void 0)continue;const I=k[E.id];for(const fe in I)v(I[fe].object),delete I[fe];delete k[E.id]}}function R(){M(),c=!0,a!==o&&(a=o,m(a.object))}function M(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:R,resetDefaultState:M,dispose:K,releaseStatesOfGeometry:j,releaseStatesOfProgram:L,initAttributes:N,enableAttribute:T,disableUnusedAttributes:H}}function UA(t,e,n){let r;function o(m){r=m}function a(m,v){t.drawArrays(r,m,v),n.update(v,r,1)}function c(m,v,y){y!==0&&(t.drawArraysInstanced(r,m,v,y),n.update(v,r,y))}function f(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let A=0;for(let P=0;P<y;P++)A+=v[P];n.update(A,r,1)}function d(m,v,y,S){if(y===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let P=0;P<m.length;P++)c(m[P],v[P],S[P]);else{A.multiDrawArraysInstancedWEBGL(r,m,0,v,0,S,0,y);let P=0;for(let N=0;N<y;N++)P+=v[N]*S[N];n.update(P,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function FA(t,e,n,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(L){return!(L!==$r&&r.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const R=L===zc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==io&&r.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==eo&&!R)}function d(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=d(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),A=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),P=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=t.getParameter(t.MAX_TEXTURE_SIZE),T=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),H=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),z=t.getParameter(t.MAX_VARYING_VECTORS),O=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),K=P>0,j=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:S,maxTextures:A,maxVertexTextures:P,maxTextureSize:N,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:H,maxVaryings:z,maxFragmentUniforms:O,vertexTextures:K,maxSamples:j}}function OA(t){const e=this;let n=null,r=0,o=!1,a=!1;const c=new xa,f=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const A=y.length!==0||S||r!==0||o;return o=S,r=y.length,A},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(y,S){n=v(y,S,0)},this.setState=function(y,S,A){const P=y.clippingPlanes,N=y.clipIntersection,T=y.clipShadows,x=t.get(y);if(!o||P===null||P.length===0||a&&!T)a?v(null):m();else{const H=a?0:r,z=H*4;let O=x.clippingState||null;d.value=O,O=v(P,S,z,A);for(let K=0;K!==z;++K)O[K]=n[K];x.clippingState=O,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=H}};function m(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,S,A,P){const N=y!==null?y.length:0;let T=null;if(N!==0){if(T=d.value,P!==!0||T===null){const x=A+N*4,H=S.matrixWorldInverse;f.getNormalMatrix(H),(T===null||T.length<x)&&(T=new Float32Array(x));for(let z=0,O=A;z!==N;++z,O+=4)c.copy(y[z]).applyMatrix4(H,f),c.normal.toArray(T,O),T[O+3]=c.constant}d.value=T,d.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,T}}function kA(t){let e=new WeakMap;function n(c,f){return f===ug?c.mapping=su:f===cg&&(c.mapping=ou),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===ug||f===cg)if(e.has(c)){const d=e.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const m=new BT(d.height);return m.fromEquirectangularTexture(t,c),e.set(c,m),c.addEventListener("dispose",o),n(m.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}const $l=4,m2=[.125,.215,.35,.446,.526,.582],wa=20,Im=new WS,g2=new Vt;let Dm=null,Nm=0,Um=0,Fm=!1;const Ea=(1+Math.sqrt(5))/2,Gl=1/Ea,_2=[new ce(-Ea,Gl,0),new ce(Ea,Gl,0),new ce(-Gl,0,Ea),new ce(Gl,0,Ea),new ce(0,Ea,-Gl),new ce(0,Ea,Gl),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)];class v2{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Dm=this._renderer.getRenderTarget(),Nm=this._renderer.getActiveCubeFace(),Um=this._renderer.getActiveMipmapLevel(),Fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,o,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dm,Nm,Um),this._renderer.xr.enabled=Fm,e.scissorTest=!1,Cf(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===su||e.mapping===ou?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dm=this._renderer.getRenderTarget(),Nm=this._renderer.getActiveCubeFace(),Um=this._renderer.getActiveMipmapLevel(),Fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xs,minFilter:xs,generateMipmaps:!1,type:zc,format:$r,colorSpace:uu,depthBuffer:!1},o=y2(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y2(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(a)),this._blurMaterial=zA(a,e,n)}return o}_compileMaterial(e){const n=new Kr(this._lodPlanes[0],e);this._renderer.compile(n,Im)}_sceneToCubeUV(e,n,r,o){const f=new Ar(90,1,n,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(g2),v.toneMapping=jo,v.autoClear=!1;const A=new v0({name:"PMREM.Background",side:Xi,depthWrite:!1,depthTest:!1}),P=new Kr(new Wc,A);let N=!1;const T=e.background;T?T.isColor&&(A.color.copy(T),e.background=null,N=!0):(A.color.copy(g2),N=!0);for(let x=0;x<6;x++){const H=x%3;H===0?(f.up.set(0,d[x],0),f.lookAt(m[x],0,0)):H===1?(f.up.set(0,0,d[x]),f.lookAt(0,m[x],0)):(f.up.set(0,d[x],0),f.lookAt(0,0,m[x]));const z=this._cubeSize;Cf(o,H*z,x>2?z:0,z,z),v.setRenderTarget(o),N&&v.render(P,f),v.render(e,f)}P.geometry.dispose(),P.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=T}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===su||e.mapping===ou;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=x2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S2());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new Kr(this._lodPlanes[0],a),f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;Cf(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(c,Im)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=_2[(o-a-1)%_2.length];this._blur(e,a-1,a,c,f)}n.autoClear=r}_blur(e,n,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,n,r,o,a,c,f){const d=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Kr(this._lodPlanes[o],m),S=m.uniforms,A=this._sizeLods[r]-1,P=isFinite(a)?Math.PI/(2*A):2*Math.PI/(2*wa-1),N=a/P,T=isFinite(a)?1+Math.floor(v*N):wa;T>wa&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${wa}`);const x=[];let H=0;for(let L=0;L<wa;++L){const R=L/N,M=Math.exp(-R*R/2);x.push(M),L===0?H+=M:L<T&&(H+=2*M)}for(let L=0;L<x.length;L++)x[L]=x[L]/H;S.envMap.value=e.texture,S.samples.value=T,S.weights.value=x,S.latitudinal.value=c==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:z}=this;S.dTheta.value=P,S.mipInt.value=z-r;const O=this._sizeLods[o],K=3*O*(o>z-$l?o-z+$l:0),j=4*(this._cubeSize-O);Cf(n,K,j,3*O,2*O),d.setRenderTarget(n),d.render(y,Im)}}function BA(t){const e=[],n=[],r=[];let o=t;const a=t-$l+1+m2.length;for(let c=0;c<a;c++){const f=Math.pow(2,o);n.push(f);let d=1/f;c>t-$l?d=m2[c-t+$l-1]:c===0&&(d=0),r.push(d);const m=1/(f-2),v=-m,y=1+m,S=[v,v,y,v,y,y,v,v,y,y,v,y],A=6,P=6,N=3,T=2,x=1,H=new Float32Array(N*P*A),z=new Float32Array(T*P*A),O=new Float32Array(x*P*A);for(let j=0;j<A;j++){const L=j%3*2/3-1,R=j>2?0:-1,M=[L,R,0,L+2/3,R,0,L+2/3,R+1,0,L,R,0,L+2/3,R+1,0,L,R+1,0];H.set(M,N*P*j),z.set(S,T*P*j);const E=[j,j,j,j,j,j];O.set(E,x*P*j)}const K=new Xa;K.setAttribute("position",new Ts(H,N)),K.setAttribute("uv",new Ts(z,T)),K.setAttribute("faceIndex",new Ts(O,x)),e.push(K),o>$l&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function y2(t,e,n){const r=new Va(t,e,n);return r.texture.mapping=ad,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cf(t,e,n,r,o){t.viewport.set(e,n,r,o),t.scissor.set(e,n,r,o)}function zA(t,e,n){const r=new Float32Array(wa),o=new ce(0,1,0);return new so({name:"SphericalGaussianBlur",defines:{n:wa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:x0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wo,depthTest:!1,depthWrite:!1})}function S2(){return new so({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:x0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wo,depthTest:!1,depthWrite:!1})}function x2(){return new so({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:x0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wo,depthTest:!1,depthWrite:!1})}function x0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VA(t){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const d=f.mapping,m=d===ug||d===cg,v=d===su||d===ou;if(m||v){let y=e.get(f);const S=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return n===null&&(n=new v2(t)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const A=f.image;return m&&A&&A.height>0||v&&A&&o(A)?(n===null&&(n=new v2(t)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",a),y.texture):null}}}return f}function o(f){let d=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function a(f){const d=f.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function HA(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Yl("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function GA(t,e,n,r){const o={},a=new WeakMap;function c(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const P in S.attributes)e.remove(S.attributes[P]);S.removeEventListener("dispose",c),delete o[S.id];const A=a.get(S);A&&(e.remove(A),a.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function f(y,S){return o[S.id]===!0||(S.addEventListener("dispose",c),o[S.id]=!0,n.memory.geometries++),S}function d(y){const S=y.attributes;for(const A in S)e.update(S[A],t.ARRAY_BUFFER)}function m(y){const S=[],A=y.index,P=y.attributes.position;let N=0;if(A!==null){const H=A.array;N=A.version;for(let z=0,O=H.length;z<O;z+=3){const K=H[z+0],j=H[z+1],L=H[z+2];S.push(K,j,j,L,L,K)}}else if(P!==void 0){const H=P.array;N=P.version;for(let z=0,O=H.length/3-1;z<O;z+=3){const K=z+0,j=z+1,L=z+2;S.push(K,j,j,L,L,K)}}else return;const T=new(IS(S)?kS:OS)(S,1);T.version=N;const x=a.get(y);x&&e.remove(x),a.set(y,T)}function v(y){const S=a.get(y);if(S){const A=y.index;A!==null&&S.version<A.version&&m(y)}else m(y);return a.get(y)}return{get:f,update:d,getWireframeAttribute:v}}function WA(t,e,n){let r;function o(S){r=S}let a,c;function f(S){a=S.type,c=S.bytesPerElement}function d(S,A){t.drawElements(r,A,a,S*c),n.update(A,r,1)}function m(S,A,P){P!==0&&(t.drawElementsInstanced(r,A,a,S*c,P),n.update(A,r,P))}function v(S,A,P){if(P===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,a,S,0,P);let T=0;for(let x=0;x<P;x++)T+=A[x];n.update(T,r,1)}function y(S,A,P,N){if(P===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let x=0;x<S.length;x++)m(S[x]/c,A[x],N[x]);else{T.multiDrawElementsInstancedWEBGL(r,A,0,a,S,0,N,0,P);let x=0;for(let H=0;H<P;H++)x+=A[H]*N[H];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function jA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,f){switch(n.calls++,c){case t.TRIANGLES:n.triangles+=f*(a/3);break;case t.LINES:n.lines+=f*(a/2);break;case t.LINE_STRIP:n.lines+=f*(a-1);break;case t.LINE_LOOP:n.lines+=f*a;break;case t.POINTS:n.points+=f*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function XA(t,e,n){const r=new WeakMap,o=new Rn;function a(c,f,d){const m=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let S=r.get(f);if(S===void 0||S.count!==y){let E=function(){R.dispose(),r.delete(f),f.removeEventListener("dispose",E)};var A=E;S!==void 0&&S.texture.dispose();const P=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],H=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let O=0;P===!0&&(O=1),N===!0&&(O=2),T===!0&&(O=3);let K=f.attributes.position.count*O,j=1;K>e.maxTextureSize&&(j=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const L=new Float32Array(K*j*4*y),R=new NS(L,K,j,y);R.type=eo,R.needsUpdate=!0;const M=O*4;for(let C=0;C<y;C++){const k=x[C],I=H[C],fe=z[C],_e=K*j*4*C;for(let pe=0;pe<k.count;pe++){const me=pe*M;P===!0&&(o.fromBufferAttribute(k,pe),L[_e+me+0]=o.x,L[_e+me+1]=o.y,L[_e+me+2]=o.z,L[_e+me+3]=0),N===!0&&(o.fromBufferAttribute(I,pe),L[_e+me+4]=o.x,L[_e+me+5]=o.y,L[_e+me+6]=o.z,L[_e+me+7]=0),T===!0&&(o.fromBufferAttribute(fe,pe),L[_e+me+8]=o.x,L[_e+me+9]=o.y,L[_e+me+10]=o.z,L[_e+me+11]=fe.itemSize===4?o.w:1)}}S={count:y,texture:R,size:new tn(K,j)},r.set(f,S),f.addEventListener("dispose",E)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let P=0;for(let T=0;T<m.length;T++)P+=m[T];const N=f.morphTargetsRelative?1:1-P;d.getUniforms().setValue(t,"morphTargetBaseInfluence",N),d.getUniforms().setValue(t,"morphTargetInfluences",m)}d.getUniforms().setValue(t,"morphTargetsTexture",S.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",S.size)}return{update:a}}function qA(t,e,n,r){let o=new WeakMap;function a(d){const m=r.render.frame,v=d.geometry,y=e.get(d,v);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==m&&(n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER),o.set(d,m))),d.isSkinnedMesh){const S=d.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return y}function c(){o=new WeakMap}function f(d){const m=d.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:a,dispose:c}}const XS=new qi,E2=new HS(1,1),qS=new NS,YS=new ET,$S=new VS,M2=[],T2=[],w2=new Float32Array(16),A2=new Float32Array(9),R2=new Float32Array(4);function wu(t,e,n){const r=t[0];if(r<=0||r>0)return t;const o=e*n;let a=M2[o];if(a===void 0&&(a=new Float32Array(o),M2[o]=a),e!==0){r.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=n,t[c].toArray(a,f)}return a}function Kn(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Zn(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function ud(t,e){let n=T2[e];n===void 0&&(n=new Int32Array(e),T2[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function YA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;t.uniform2fv(this.addr,e),Zn(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kn(n,e))return;t.uniform3fv(this.addr,e),Zn(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;t.uniform4fv(this.addr,e),Zn(n,e)}}function JA(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zn(n,e)}else{if(Kn(n,r))return;R2.set(r),t.uniformMatrix2fv(this.addr,!1,R2),Zn(n,r)}}function QA(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zn(n,e)}else{if(Kn(n,r))return;A2.set(r),t.uniformMatrix3fv(this.addr,!1,A2),Zn(n,r)}}function eR(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zn(n,e)}else{if(Kn(n,r))return;w2.set(r),t.uniformMatrix4fv(this.addr,!1,w2),Zn(n,r)}}function tR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;t.uniform2iv(this.addr,e),Zn(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kn(n,e))return;t.uniform3iv(this.addr,e),Zn(n,e)}}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;t.uniform4iv(this.addr,e),Zn(n,e)}}function sR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;t.uniform2uiv(this.addr,e),Zn(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kn(n,e))return;t.uniform3uiv(this.addr,e),Zn(n,e)}}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;t.uniform4uiv(this.addr,e),Zn(n,e)}}function uR(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o);let a;this.type===t.SAMPLER_2D_SHADOW?(E2.compareFunction=LS,a=E2):a=XS,n.setTexture2D(e||a,o)}function cR(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||YS,o)}function hR(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||$S,o)}function fR(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||qS,o)}function dR(t){switch(t){case 5126:return YA;case 35664:return $A;case 35665:return KA;case 35666:return ZA;case 35674:return JA;case 35675:return QA;case 35676:return eR;case 5124:case 35670:return tR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return rR;case 5125:return sR;case 36294:return oR;case 36295:return aR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return fR}}function pR(t,e){t.uniform1fv(this.addr,e)}function mR(t,e){const n=wu(e,this.size,2);t.uniform2fv(this.addr,n)}function gR(t,e){const n=wu(e,this.size,3);t.uniform3fv(this.addr,n)}function _R(t,e){const n=wu(e,this.size,4);t.uniform4fv(this.addr,n)}function vR(t,e){const n=wu(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yR(t,e){const n=wu(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function SR(t,e){const n=wu(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xR(t,e){t.uniform1iv(this.addr,e)}function ER(t,e){t.uniform2iv(this.addr,e)}function MR(t,e){t.uniform3iv(this.addr,e)}function TR(t,e){t.uniform4iv(this.addr,e)}function wR(t,e){t.uniform1uiv(this.addr,e)}function AR(t,e){t.uniform2uiv(this.addr,e)}function RR(t,e){t.uniform3uiv(this.addr,e)}function CR(t,e){t.uniform4uiv(this.addr,e)}function bR(t,e,n){const r=this.cache,o=e.length,a=ud(n,o);Kn(r,a)||(t.uniform1iv(this.addr,a),Zn(r,a));for(let c=0;c!==o;++c)n.setTexture2D(e[c]||XS,a[c])}function PR(t,e,n){const r=this.cache,o=e.length,a=ud(n,o);Kn(r,a)||(t.uniform1iv(this.addr,a),Zn(r,a));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||YS,a[c])}function LR(t,e,n){const r=this.cache,o=e.length,a=ud(n,o);Kn(r,a)||(t.uniform1iv(this.addr,a),Zn(r,a));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||$S,a[c])}function IR(t,e,n){const r=this.cache,o=e.length,a=ud(n,o);Kn(r,a)||(t.uniform1iv(this.addr,a),Zn(r,a));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||qS,a[c])}function DR(t){switch(t){case 5126:return pR;case 35664:return mR;case 35665:return gR;case 35666:return _R;case 35674:return vR;case 35675:return yR;case 35676:return SR;case 5124:case 35670:return xR;case 35667:case 35671:return ER;case 35668:case 35672:return MR;case 35669:case 35673:return TR;case 5125:return wR;case 36294:return AR;case 36295:return RR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return IR}}class NR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=dR(n.type)}}class UR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DR(n.type)}}class FR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const f=o[a];f.setValue(e,n[f.id],r)}}}const Om=/(\w+)(\])?(\[|\.)?/g;function C2(t,e){t.seq.push(e),t.map[e.id]=e}function OR(t,e,n){const r=t.name,o=r.length;for(Om.lastIndex=0;;){const a=Om.exec(r),c=Om.lastIndex;let f=a[1];const d=a[2]==="]",m=a[3];if(d&&(f=f|0),m===void 0||m==="["&&c+2===o){C2(n,m===void 0?new NR(f,t,e):new UR(f,t,e));break}else{let y=n.map[f];y===void 0&&(y=new FR(f),C2(n,y)),n=y}}}class Hf{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const a=e.getActiveUniform(n,o),c=e.getUniformLocation(n,a.name);OR(a,c,this)}}setValue(e,n,r,o){const a=this.map[n];a!==void 0&&a.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let a=0,c=n.length;a!==c;++a){const f=n[a],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function b2(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const kR=37297;let BR=0;function zR(t,e){const n=t.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let c=o;c<a;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const P2=new Et;function VR(t){Xt._getMatrix(P2,Xt.workingColorSpace,t);const e=`mat3( ${P2.elements.map(n=>n.toFixed(4))} )`;switch(Xt.getTransfer(t)){case Xf:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function L2(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return n.toUpperCase()+`

`+o+`

`+zR(t.getShaderSource(e),c)}else return o}function HR(t,e){const n=VR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function GR(t,e){let n;switch(e){case qM:n="Linear";break;case YM:n="Reinhard";break;case $M:n="Cineon";break;case KM:n="ACESFilmic";break;case JM:n="AgX";break;case QM:n="Neutral";break;case ZM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bf=new ce;function WR(){Xt.getLuminanceCoefficients(bf);const t=bf.x.toFixed(4),e=bf.y.toFixed(4),n=bf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function XR(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function qR(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=t.getActiveAttrib(e,o),c=a.name;let f=1;a.type===t.FLOAT_MAT2&&(f=2),a.type===t.FLOAT_MAT3&&(f=3),a.type===t.FLOAT_MAT4&&(f=4),n[c]={type:a.type,location:t.getAttribLocation(e,c),locationSize:f}}return n}function Tc(t){return t!==""}function I2(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D2(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YR=/^[ \t]*#include +<([\w\d./]+)>/gm;function zg(t){return t.replace(YR,KR)}const $R=new Map;function KR(t,e){let n=Rt[e];if(n===void 0){const r=$R.get(e);if(r!==void 0)n=Rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zg(n)}const ZR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N2(t){return t.replace(ZR,JR)}function JR(t,e,n,r){let o="";for(let a=parseInt(e);a<parseInt(n);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function U2(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===vS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===AM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zs&&(e="SHADOWMAP_TYPE_VSM"),e}function eC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case su:case ou:e="ENVMAP_TYPE_CUBE";break;case ad:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ou:e="ENVMAP_MODE_REFRACTION";break}return e}function nC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yS:e="ENVMAP_BLENDING_MULTIPLY";break;case jM:e="ENVMAP_BLENDING_MIX";break;case XM:e="ENVMAP_BLENDING_ADD";break}return e}function iC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function rC(t,e,n,r){const o=t.getContext(),a=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=QR(n),m=eC(n),v=tC(n),y=nC(n),S=iC(n),A=jR(n),P=XR(a),N=o.createProgram();let T,x,H=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P].filter(Tc).join(`
`),T.length>0&&(T+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P].filter(Tc).join(`
`),x.length>0&&(x+=`
`)):(T=[U2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),x=[U2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==jo?"#define TONE_MAPPING":"",n.toneMapping!==jo?Rt.tonemapping_pars_fragment:"",n.toneMapping!==jo?GR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,HR("linearToOutputTexel",n.outputColorSpace),WR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Tc).join(`
`)),c=zg(c),c=I2(c,n),c=D2(c,n),f=zg(f),f=I2(f,n),f=D2(f,n),c=N2(c),f=N2(f),n.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,x=["#define varying in",n.glslVersion===q1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===q1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=H+T+c,O=H+x+f,K=b2(o,o.VERTEX_SHADER,z),j=b2(o,o.FRAGMENT_SHADER,O);o.attachShader(N,K),o.attachShader(N,j),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function L(C){if(t.debug.checkShaderErrors){const k=o.getProgramInfoLog(N).trim(),I=o.getShaderInfoLog(K).trim(),fe=o.getShaderInfoLog(j).trim();let _e=!0,pe=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(_e=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,N,K,j);else{const me=L2(o,K,"vertex"),q=L2(o,j,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+me+`
`+q)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||fe==="")&&(pe=!1);pe&&(C.diagnostics={runnable:_e,programLog:k,vertexShader:{log:I,prefix:T},fragmentShader:{log:fe,prefix:x}})}o.deleteShader(K),o.deleteShader(j),R=new Hf(o,N),M=qR(o,N)}let R;this.getUniforms=function(){return R===void 0&&L(this),R};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(N,kR)),E},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BR++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=K,this.fragmentShader=j,this}let sC=0;class oC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new aC(e),n.set(e,r)),r}}class aC{constructor(e){this.id=sC++,this.code=e,this.usedTimes=0}}function lC(t,e,n,r,o,a,c){const f=new US,d=new oC,m=new Set,v=[],y=o.logarithmicDepthBuffer,S=o.vertexTextures;let A=o.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(M){return m.add(M),M===0?"uv":`uv${M}`}function T(M,E,C,k,I){const fe=k.fog,_e=I.geometry,pe=M.isMeshStandardMaterial?k.environment:null,me=(M.isMeshStandardMaterial?n:e).get(M.envMap||pe),q=me&&me.mapping===ad?me.image.height:null,ge=P[M.type];M.precision!==null&&(A=o.getMaxPrecision(M.precision),A!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",A,"instead."));const le=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,G=le!==void 0?le.length:0;let re=0;_e.morphAttributes.position!==void 0&&(re=1),_e.morphAttributes.normal!==void 0&&(re=2),_e.morphAttributes.color!==void 0&&(re=3);let Pe,se,ve,Ae;if(ge){const Ct=ys[ge];Pe=Ct.vertexShader,se=Ct.fragmentShader}else Pe=M.vertexShader,se=M.fragmentShader,d.update(M),ve=d.getVertexShaderID(M),Ae=d.getFragmentShaderID(M);const Ee=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),He=I.isInstancedMesh===!0,at=I.isBatchedMesh===!0,Bt=!!M.map,Mt=!!M.matcap,Jt=!!me,X=!!M.aoMap,Hn=!!M.lightMap,Tt=!!M.bumpMap,wt=!!M.normalMap,nt=!!M.displacementMap,Gt=!!M.emissiveMap,Ke=!!M.metalnessMap,B=!!M.roughnessMap,D=M.anisotropy>0,ne=M.clearcoat>0,Se=M.dispersion>0,xe=M.iridescence>0,de=M.sheen>0,Be=M.transmission>0,De=D&&!!M.anisotropyMap,We=ne&&!!M.clearcoatMap,xt=ne&&!!M.clearcoatNormalMap,Ce=ne&&!!M.clearcoatRoughnessMap,Ge=xe&&!!M.iridescenceMap,lt=xe&&!!M.iridescenceThicknessMap,dt=de&&!!M.sheenColorMap,Xe=de&&!!M.sheenRoughnessMap,At=!!M.specularMap,vt=!!M.specularColorMap,Ut=!!M.specularIntensityMap,$=Be&&!!M.transmissionMap,Oe=Be&&!!M.thicknessMap,ue=!!M.gradientMap,ye=!!M.alphaMap,ze=M.alphaTest>0,Fe=!!M.alphaHash,gt=!!M.extensions;let Qt=jo;M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const Tn={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:se,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:A,batching:at,batchingColor:at&&I._colorsTexture!==null,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:uu,alphaToCoverage:!!M.alphaToCoverage,map:Bt,matcap:Mt,envMap:Jt,envMapMode:Jt&&me.mapping,envMapCubeUVHeight:q,aoMap:X,lightMap:Hn,bumpMap:Tt,normalMap:wt,displacementMap:S&&nt,emissiveMap:Gt,normalMapObjectSpace:wt&&M.normalMapType===rT,normalMapTangentSpace:wt&&M.normalMapType===iT,metalnessMap:Ke,roughnessMap:B,anisotropy:D,anisotropyMap:De,clearcoat:ne,clearcoatMap:We,clearcoatNormalMap:xt,clearcoatRoughnessMap:Ce,dispersion:Se,iridescence:xe,iridescenceMap:Ge,iridescenceThicknessMap:lt,sheen:de,sheenColorMap:dt,sheenRoughnessMap:Xe,specularMap:At,specularColorMap:vt,specularIntensityMap:Ut,transmission:Be,transmissionMap:$,thicknessMap:Oe,gradientMap:ue,opaque:M.transparent===!1&&M.blending===Zl&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:ze,alphaHash:Fe,combine:M.combine,mapUv:Bt&&N(M.map.channel),aoMapUv:X&&N(M.aoMap.channel),lightMapUv:Hn&&N(M.lightMap.channel),bumpMapUv:Tt&&N(M.bumpMap.channel),normalMapUv:wt&&N(M.normalMap.channel),displacementMapUv:nt&&N(M.displacementMap.channel),emissiveMapUv:Gt&&N(M.emissiveMap.channel),metalnessMapUv:Ke&&N(M.metalnessMap.channel),roughnessMapUv:B&&N(M.roughnessMap.channel),anisotropyMapUv:De&&N(M.anisotropyMap.channel),clearcoatMapUv:We&&N(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&N(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&N(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&N(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&N(M.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&N(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&N(M.sheenRoughnessMap.channel),specularMapUv:At&&N(M.specularMap.channel),specularColorMapUv:vt&&N(M.specularColorMap.channel),specularIntensityMapUv:Ut&&N(M.specularIntensityMap.channel),transmissionMapUv:$&&N(M.transmissionMap.channel),thicknessMapUv:Oe&&N(M.thicknessMap.channel),alphaMapUv:ye&&N(M.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(wt||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!_e.attributes.uv&&(Bt||ye),fog:!!fe,useFog:M.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Ue,skinning:I.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Bt&&M.map.isVideoTexture===!0&&Xt.getTransfer(M.map.colorSpace)===nn,decodeVideoTextureEmissive:Gt&&M.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(M.emissiveMap.colorSpace)===nn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qr,flipSided:M.side===Xi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:gt&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&M.extensions.multiDraw===!0||at)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Tn.vertexUv1s=m.has(1),Tn.vertexUv2s=m.has(2),Tn.vertexUv3s=m.has(3),m.clear(),Tn}function x(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(H(E,M),z(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function H(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function z(M,E){f.disableAll(),E.supportsVertexTextures&&f.enable(0),E.instancing&&f.enable(1),E.instancingColor&&f.enable(2),E.instancingMorph&&f.enable(3),E.matcap&&f.enable(4),E.envMap&&f.enable(5),E.normalMapObjectSpace&&f.enable(6),E.normalMapTangentSpace&&f.enable(7),E.clearcoat&&f.enable(8),E.iridescence&&f.enable(9),E.alphaTest&&f.enable(10),E.vertexColors&&f.enable(11),E.vertexAlphas&&f.enable(12),E.vertexUv1s&&f.enable(13),E.vertexUv2s&&f.enable(14),E.vertexUv3s&&f.enable(15),E.vertexTangents&&f.enable(16),E.anisotropy&&f.enable(17),E.alphaHash&&f.enable(18),E.batching&&f.enable(19),E.dispersion&&f.enable(20),E.batchingColor&&f.enable(21),M.push(f.mask),f.disableAll(),E.fog&&f.enable(0),E.useFog&&f.enable(1),E.flatShading&&f.enable(2),E.logarithmicDepthBuffer&&f.enable(3),E.reverseDepthBuffer&&f.enable(4),E.skinning&&f.enable(5),E.morphTargets&&f.enable(6),E.morphNormals&&f.enable(7),E.morphColors&&f.enable(8),E.premultipliedAlpha&&f.enable(9),E.shadowMapEnabled&&f.enable(10),E.doubleSided&&f.enable(11),E.flipSided&&f.enable(12),E.useDepthPacking&&f.enable(13),E.dithering&&f.enable(14),E.transmission&&f.enable(15),E.sheen&&f.enable(16),E.opaque&&f.enable(17),E.pointsUvs&&f.enable(18),E.decodeVideoTexture&&f.enable(19),E.decodeVideoTextureEmissive&&f.enable(20),E.alphaToCoverage&&f.enable(21),M.push(f.mask)}function O(M){const E=P[M.type];let C;if(E){const k=ys[E];C=UT.clone(k.uniforms)}else C=M.uniforms;return C}function K(M,E){let C;for(let k=0,I=v.length;k<I;k++){const fe=v[k];if(fe.cacheKey===E){C=fe,++C.usedTimes;break}}return C===void 0&&(C=new rC(t,E,M,a),v.push(C)),C}function j(M){if(--M.usedTimes===0){const E=v.indexOf(M);v[E]=v[v.length-1],v.pop(),M.destroy()}}function L(M){d.remove(M)}function R(){d.dispose()}return{getParameters:T,getProgramCacheKey:x,getUniforms:O,acquireProgram:K,releaseProgram:j,releaseShaderCache:L,programs:v,dispose:R}}function uC(){let t=new WeakMap;function e(c){return t.has(c)}function n(c){let f=t.get(c);return f===void 0&&(f={},t.set(c,f)),f}function r(c){t.delete(c)}function o(c,f,d){t.get(c)[f]=d}function a(){t=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:a}}function cC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function F2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function O2(){const t=[];let e=0;const n=[],r=[],o=[];function a(){e=0,n.length=0,r.length=0,o.length=0}function c(y,S,A,P,N,T){let x=t[e];return x===void 0?(x={id:y.id,object:y,geometry:S,material:A,groupOrder:P,renderOrder:y.renderOrder,z:N,group:T},t[e]=x):(x.id=y.id,x.object=y,x.geometry=S,x.material=A,x.groupOrder=P,x.renderOrder=y.renderOrder,x.z=N,x.group=T),e++,x}function f(y,S,A,P,N,T){const x=c(y,S,A,P,N,T);A.transmission>0?r.push(x):A.transparent===!0?o.push(x):n.push(x)}function d(y,S,A,P,N,T){const x=c(y,S,A,P,N,T);A.transmission>0?r.unshift(x):A.transparent===!0?o.unshift(x):n.unshift(x)}function m(y,S){n.length>1&&n.sort(y||cC),r.length>1&&r.sort(S||F2),o.length>1&&o.sort(S||F2)}function v(){for(let y=e,S=t.length;y<S;y++){const A=t[y];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:a,push:f,unshift:d,finish:v,sort:m}}function hC(){let t=new WeakMap;function e(r,o){const a=t.get(r);let c;return a===void 0?(c=new O2,t.set(r,[c])):o>=a.length?(c=new O2,a.push(c)):c=a[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}function fC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Vt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return t[e.id]=n,n}}}function dC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tn};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tn};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tn,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pC=0;function mC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gC(t){const e=new fC,n=dC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ce);const o=new ce,a=new Cn,c=new Cn;function f(m){let v=0,y=0,S=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let A=0,P=0,N=0,T=0,x=0,H=0,z=0,O=0,K=0,j=0,L=0;m.sort(mC);for(let M=0,E=m.length;M<E;M++){const C=m[M],k=C.color,I=C.intensity,fe=C.distance,_e=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)v+=k.r*I,y+=k.g*I,S+=k.b*I;else if(C.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(C.sh.coefficients[pe],I);L++}else if(C.isDirectionalLight){const pe=e.get(C);if(pe.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const me=C.shadow,q=n.get(C);q.shadowIntensity=me.intensity,q.shadowBias=me.bias,q.shadowNormalBias=me.normalBias,q.shadowRadius=me.radius,q.shadowMapSize=me.mapSize,r.directionalShadow[A]=q,r.directionalShadowMap[A]=_e,r.directionalShadowMatrix[A]=C.shadow.matrix,H++}r.directional[A]=pe,A++}else if(C.isSpotLight){const pe=e.get(C);pe.position.setFromMatrixPosition(C.matrixWorld),pe.color.copy(k).multiplyScalar(I),pe.distance=fe,pe.coneCos=Math.cos(C.angle),pe.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),pe.decay=C.decay,r.spot[N]=pe;const me=C.shadow;if(C.map&&(r.spotLightMap[K]=C.map,K++,me.updateMatrices(C),C.castShadow&&j++),r.spotLightMatrix[N]=me.matrix,C.castShadow){const q=n.get(C);q.shadowIntensity=me.intensity,q.shadowBias=me.bias,q.shadowNormalBias=me.normalBias,q.shadowRadius=me.radius,q.shadowMapSize=me.mapSize,r.spotShadow[N]=q,r.spotShadowMap[N]=_e,O++}N++}else if(C.isRectAreaLight){const pe=e.get(C);pe.color.copy(k).multiplyScalar(I),pe.halfWidth.set(C.width*.5,0,0),pe.halfHeight.set(0,C.height*.5,0),r.rectArea[T]=pe,T++}else if(C.isPointLight){const pe=e.get(C);if(pe.color.copy(C.color).multiplyScalar(C.intensity),pe.distance=C.distance,pe.decay=C.decay,C.castShadow){const me=C.shadow,q=n.get(C);q.shadowIntensity=me.intensity,q.shadowBias=me.bias,q.shadowNormalBias=me.normalBias,q.shadowRadius=me.radius,q.shadowMapSize=me.mapSize,q.shadowCameraNear=me.camera.near,q.shadowCameraFar=me.camera.far,r.pointShadow[P]=q,r.pointShadowMap[P]=_e,r.pointShadowMatrix[P]=C.shadow.matrix,z++}r.point[P]=pe,P++}else if(C.isHemisphereLight){const pe=e.get(C);pe.skyColor.copy(C.color).multiplyScalar(I),pe.groundColor.copy(C.groundColor).multiplyScalar(I),r.hemi[x]=pe,x++}}T>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=S;const R=r.hash;(R.directionalLength!==A||R.pointLength!==P||R.spotLength!==N||R.rectAreaLength!==T||R.hemiLength!==x||R.numDirectionalShadows!==H||R.numPointShadows!==z||R.numSpotShadows!==O||R.numSpotMaps!==K||R.numLightProbes!==L)&&(r.directional.length=A,r.spot.length=N,r.rectArea.length=T,r.point.length=P,r.hemi.length=x,r.directionalShadow.length=H,r.directionalShadowMap.length=H,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=H,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=O+K-j,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=L,R.directionalLength=A,R.pointLength=P,R.spotLength=N,R.rectAreaLength=T,R.hemiLength=x,R.numDirectionalShadows=H,R.numPointShadows=z,R.numSpotShadows=O,R.numSpotMaps=K,R.numLightProbes=L,r.version=pC++)}function d(m,v){let y=0,S=0,A=0,P=0,N=0;const T=v.matrixWorldInverse;for(let x=0,H=m.length;x<H;x++){const z=m[x];if(z.isDirectionalLight){const O=r.directional[y];O.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(T),y++}else if(z.isSpotLight){const O=r.spot[A];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(T),O.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(T),A++}else if(z.isRectAreaLight){const O=r.rectArea[P];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(T),c.identity(),a.copy(z.matrixWorld),a.premultiply(T),c.extractRotation(a),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),O.halfWidth.applyMatrix4(c),O.halfHeight.applyMatrix4(c),P++}else if(z.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(T),S++}else if(z.isHemisphereLight){const O=r.hemi[N];O.direction.setFromMatrixPosition(z.matrixWorld),O.direction.transformDirection(T),N++}}}return{setup:f,setupView:d,state:r}}function k2(t){const e=new gC(t),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function a(v){n.push(v)}function c(v){r.push(v)}function f(){e.setup(n)}function d(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:d,pushLight:a,pushShadow:c}}function _C(t){let e=new WeakMap;function n(o,a=0){const c=e.get(o);let f;return c===void 0?(f=new k2(t),e.set(o,[f])):a>=c.length?(f=new k2(t),c.push(f)):f=c[a],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const vC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SC(t,e,n){let r=new S0;const o=new tn,a=new tn,c=new Rn,f=new GT({depthPacking:nT}),d=new WT,m={},v=n.maxTextureSize,y={[Yo]:Xi,[Xi]:Yo,[qr]:qr},S=new so({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tn},radius:{value:4}},vertexShader:vC,fragmentShader:yC}),A=S.clone();A.defines.HORIZONTAL_PASS=1;const P=new Xa;P.setAttribute("position",new Ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Kr(P,S),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vS;let x=this.type;this.render=function(j,L,R){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||j.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Wo),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=x!==Zs&&this.type===Zs,fe=x===Zs&&this.type!==Zs;for(let _e=0,pe=j.length;_e<pe;_e++){const me=j[_e],q=me.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ge=q.getFrameExtents();if(o.multiply(ge),a.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/ge.x),o.x=a.x*ge.x,q.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/ge.y),o.y=a.y*ge.y,q.mapSize.y=a.y)),q.map===null||I===!0||fe===!0){const G=this.type!==Zs?{minFilter:Jr,magFilter:Jr}:{};q.map!==null&&q.map.dispose(),q.map=new Va(o.x,o.y,G),q.map.texture.name=me.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const le=q.getViewportCount();for(let G=0;G<le;G++){const re=q.getViewport(G);c.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),k.viewport(c),q.updateMatrices(me,G),r=q.getFrustum(),O(L,R,q.camera,me,this.type)}q.isPointLightShadow!==!0&&this.type===Zs&&H(q,R),q.needsUpdate=!1}x=this.type,T.needsUpdate=!1,t.setRenderTarget(M,E,C)};function H(j,L){const R=e.update(N);S.defines.VSM_SAMPLES!==j.blurSamples&&(S.defines.VSM_SAMPLES=j.blurSamples,A.defines.VSM_SAMPLES=j.blurSamples,S.needsUpdate=!0,A.needsUpdate=!0),j.mapPass===null&&(j.mapPass=new Va(o.x,o.y)),S.uniforms.shadow_pass.value=j.map.texture,S.uniforms.resolution.value=j.mapSize,S.uniforms.radius.value=j.radius,t.setRenderTarget(j.mapPass),t.clear(),t.renderBufferDirect(L,null,R,S,N,null),A.uniforms.shadow_pass.value=j.mapPass.texture,A.uniforms.resolution.value=j.mapSize,A.uniforms.radius.value=j.radius,t.setRenderTarget(j.map),t.clear(),t.renderBufferDirect(L,null,R,A,N,null)}function z(j,L,R,M){let E=null;const C=R.isPointLight===!0?j.customDistanceMaterial:j.customDepthMaterial;if(C!==void 0)E=C;else if(E=R.isPointLight===!0?d:f,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const k=E.uuid,I=L.uuid;let fe=m[k];fe===void 0&&(fe={},m[k]=fe);let _e=fe[I];_e===void 0&&(_e=E.clone(),fe[I]=_e,L.addEventListener("dispose",K)),E=_e}if(E.visible=L.visible,E.wireframe=L.wireframe,M===Zs?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:y[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=t.properties.get(E);k.light=R}return E}function O(j,L,R,M,E){if(j.visible===!1)return;if(j.layers.test(L.layers)&&(j.isMesh||j.isLine||j.isPoints)&&(j.castShadow||j.receiveShadow&&E===Zs)&&(!j.frustumCulled||r.intersectsObject(j))){j.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,j.matrixWorld);const I=e.update(j),fe=j.material;if(Array.isArray(fe)){const _e=I.groups;for(let pe=0,me=_e.length;pe<me;pe++){const q=_e[pe],ge=fe[q.materialIndex];if(ge&&ge.visible){const le=z(j,ge,M,E);j.onBeforeShadow(t,j,L,R,I,le,q),t.renderBufferDirect(R,null,I,le,j,q),j.onAfterShadow(t,j,L,R,I,le,q)}}}else if(fe.visible){const _e=z(j,fe,M,E);j.onBeforeShadow(t,j,L,R,I,_e,null),t.renderBufferDirect(R,null,I,_e,j,null),j.onAfterShadow(t,j,L,R,I,_e,null)}}const k=j.children;for(let I=0,fe=k.length;I<fe;I++)O(k[I],L,R,M,E)}function K(j){j.target.removeEventListener("dispose",K);for(const R in m){const M=m[R],E=j.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const xC={[ng]:ig,[rg]:ag,[sg]:lg,[ru]:og,[ig]:ng,[ag]:rg,[lg]:sg,[og]:ru};function EC(t,e){function n(){let $=!1;const Oe=new Rn;let ue=null;const ye=new Rn(0,0,0,0);return{setMask:function(ze){ue!==ze&&!$&&(t.colorMask(ze,ze,ze,ze),ue=ze)},setLocked:function(ze){$=ze},setClear:function(ze,Fe,gt,Qt,Tn){Tn===!0&&(ze*=Qt,Fe*=Qt,gt*=Qt),Oe.set(ze,Fe,gt,Qt),ye.equals(Oe)===!1&&(t.clearColor(ze,Fe,gt,Qt),ye.copy(Oe))},reset:function(){$=!1,ue=null,ye.set(-1,0,0,0)}}}function r(){let $=!1,Oe=!1,ue=null,ye=null,ze=null;return{setReversed:function(Fe){if(Oe!==Fe){const gt=e.get("EXT_clip_control");Oe?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT);const Qt=ze;ze=null,this.setClear(Qt)}Oe=Fe},getReversed:function(){return Oe},setTest:function(Fe){Fe?Ee(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(Fe){ue!==Fe&&!$&&(t.depthMask(Fe),ue=Fe)},setFunc:function(Fe){if(Oe&&(Fe=xC[Fe]),ye!==Fe){switch(Fe){case ng:t.depthFunc(t.NEVER);break;case ig:t.depthFunc(t.ALWAYS);break;case rg:t.depthFunc(t.LESS);break;case ru:t.depthFunc(t.LEQUAL);break;case sg:t.depthFunc(t.EQUAL);break;case og:t.depthFunc(t.GEQUAL);break;case ag:t.depthFunc(t.GREATER);break;case lg:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=Fe}},setLocked:function(Fe){$=Fe},setClear:function(Fe){ze!==Fe&&(Oe&&(Fe=1-Fe),t.clearDepth(Fe),ze=Fe)},reset:function(){$=!1,ue=null,ye=null,ze=null,Oe=!1}}}function o(){let $=!1,Oe=null,ue=null,ye=null,ze=null,Fe=null,gt=null,Qt=null,Tn=null;return{setTest:function(Ct){$||(Ct?Ee(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(Ct){Oe!==Ct&&!$&&(t.stencilMask(Ct),Oe=Ct)},setFunc:function(Ct,ui,Yt){(ue!==Ct||ye!==ui||ze!==Yt)&&(t.stencilFunc(Ct,ui,Yt),ue=Ct,ye=ui,ze=Yt)},setOp:function(Ct,ui,Yt){(Fe!==Ct||gt!==ui||Qt!==Yt)&&(t.stencilOp(Ct,ui,Yt),Fe=Ct,gt=ui,Qt=Yt)},setLocked:function(Ct){$=Ct},setClear:function(Ct){Tn!==Ct&&(t.clearStencil(Ct),Tn=Ct)},reset:function(){$=!1,Oe=null,ue=null,ye=null,ze=null,Fe=null,gt=null,Qt=null,Tn=null}}}const a=new n,c=new r,f=new o,d=new WeakMap,m=new WeakMap;let v={},y={},S=new WeakMap,A=[],P=null,N=!1,T=null,x=null,H=null,z=null,O=null,K=null,j=null,L=new Vt(0,0,0),R=0,M=!1,E=null,C=null,k=null,I=null,fe=null;const _e=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,me=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(q)[1]),pe=me>=1):q.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),pe=me>=2);let ge=null,le={};const G=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Pe=new Rn().fromArray(G),se=new Rn().fromArray(re);function ve($,Oe,ue,ye){const ze=new Uint8Array(4),Fe=t.createTexture();t.bindTexture($,Fe),t.texParameteri($,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri($,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let gt=0;gt<ue;gt++)$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?t.texImage3D(Oe,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,ze):t.texImage2D(Oe+gt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ze);return Fe}const Ae={};Ae[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Ee(t.DEPTH_TEST),c.setFunc(ru),Tt(!1),wt(V1),Ee(t.CULL_FACE),X(Wo);function Ee($){v[$]!==!0&&(t.enable($),v[$]=!0)}function Ue($){v[$]!==!1&&(t.disable($),v[$]=!1)}function He($,Oe){return y[$]!==Oe?(t.bindFramebuffer($,Oe),y[$]=Oe,$===t.DRAW_FRAMEBUFFER&&(y[t.FRAMEBUFFER]=Oe),$===t.FRAMEBUFFER&&(y[t.DRAW_FRAMEBUFFER]=Oe),!0):!1}function at($,Oe){let ue=A,ye=!1;if($){ue=S.get(Oe),ue===void 0&&(ue=[],S.set(Oe,ue));const ze=$.textures;if(ue.length!==ze.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,gt=ze.length;Fe<gt;Fe++)ue[Fe]=t.COLOR_ATTACHMENT0+Fe;ue.length=ze.length,ye=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ue)}function Bt($){return P!==$?(t.useProgram($),P=$,!0):!1}const Mt={[Ta]:t.FUNC_ADD,[CM]:t.FUNC_SUBTRACT,[bM]:t.FUNC_REVERSE_SUBTRACT};Mt[PM]=t.MIN,Mt[LM]=t.MAX;const Jt={[IM]:t.ZERO,[DM]:t.ONE,[NM]:t.SRC_COLOR,[eg]:t.SRC_ALPHA,[zM]:t.SRC_ALPHA_SATURATE,[kM]:t.DST_COLOR,[FM]:t.DST_ALPHA,[UM]:t.ONE_MINUS_SRC_COLOR,[tg]:t.ONE_MINUS_SRC_ALPHA,[BM]:t.ONE_MINUS_DST_COLOR,[OM]:t.ONE_MINUS_DST_ALPHA,[VM]:t.CONSTANT_COLOR,[HM]:t.ONE_MINUS_CONSTANT_COLOR,[GM]:t.CONSTANT_ALPHA,[WM]:t.ONE_MINUS_CONSTANT_ALPHA};function X($,Oe,ue,ye,ze,Fe,gt,Qt,Tn,Ct){if($===Wo){N===!0&&(Ue(t.BLEND),N=!1);return}if(N===!1&&(Ee(t.BLEND),N=!0),$!==RM){if($!==T||Ct!==M){if((x!==Ta||O!==Ta)&&(t.blendEquation(t.FUNC_ADD),x=Ta,O=Ta),Ct)switch($){case Zl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case H1:t.blendFunc(t.ONE,t.ONE);break;case G1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case W1:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Zl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case H1:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case G1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case W1:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}H=null,z=null,K=null,j=null,L.set(0,0,0),R=0,T=$,M=Ct}return}ze=ze||Oe,Fe=Fe||ue,gt=gt||ye,(Oe!==x||ze!==O)&&(t.blendEquationSeparate(Mt[Oe],Mt[ze]),x=Oe,O=ze),(ue!==H||ye!==z||Fe!==K||gt!==j)&&(t.blendFuncSeparate(Jt[ue],Jt[ye],Jt[Fe],Jt[gt]),H=ue,z=ye,K=Fe,j=gt),(Qt.equals(L)===!1||Tn!==R)&&(t.blendColor(Qt.r,Qt.g,Qt.b,Tn),L.copy(Qt),R=Tn),T=$,M=!1}function Hn($,Oe){$.side===qr?Ue(t.CULL_FACE):Ee(t.CULL_FACE);let ue=$.side===Xi;Oe&&(ue=!ue),Tt(ue),$.blending===Zl&&$.transparent===!1?X(Wo):X($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),a.setMask($.colorWrite);const ye=$.stencilWrite;f.setTest(ye),ye&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Gt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Tt($){E!==$&&($?t.frontFace(t.CW):t.frontFace(t.CCW),E=$)}function wt($){$!==TM?(Ee(t.CULL_FACE),$!==C&&($===V1?t.cullFace(t.BACK):$===wM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),C=$}function nt($){$!==k&&(pe&&t.lineWidth($),k=$)}function Gt($,Oe,ue){$?(Ee(t.POLYGON_OFFSET_FILL),(I!==Oe||fe!==ue)&&(t.polygonOffset(Oe,ue),I=Oe,fe=ue)):Ue(t.POLYGON_OFFSET_FILL)}function Ke($){$?Ee(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function B($){$===void 0&&($=t.TEXTURE0+_e-1),ge!==$&&(t.activeTexture($),ge=$)}function D($,Oe,ue){ue===void 0&&(ge===null?ue=t.TEXTURE0+_e-1:ue=ge);let ye=le[ue];ye===void 0&&(ye={type:void 0,texture:void 0},le[ue]=ye),(ye.type!==$||ye.texture!==Oe)&&(ge!==ue&&(t.activeTexture(ue),ge=ue),t.bindTexture($,Oe||Ae[$]),ye.type=$,ye.texture=Oe)}function ne(){const $=le[ge];$!==void 0&&$.type!==void 0&&(t.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Se(){try{t.compressedTexImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function de(){try{t.texSubImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function De(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function We(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xt(){try{t.texStorage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ge(){try{t.texImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function lt(){try{t.texImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function dt($){Pe.equals($)===!1&&(t.scissor($.x,$.y,$.z,$.w),Pe.copy($))}function Xe($){se.equals($)===!1&&(t.viewport($.x,$.y,$.z,$.w),se.copy($))}function At($,Oe){let ue=m.get(Oe);ue===void 0&&(ue=new WeakMap,m.set(Oe,ue));let ye=ue.get($);ye===void 0&&(ye=t.getUniformBlockIndex(Oe,$.name),ue.set($,ye))}function vt($,Oe){const ye=m.get(Oe).get($);d.get(Oe)!==ye&&(t.uniformBlockBinding(Oe,ye,$.__bindingPointIndex),d.set(Oe,ye))}function Ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),c.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),v={},ge=null,le={},y={},S=new WeakMap,A=[],P=null,N=!1,T=null,x=null,H=null,z=null,O=null,K=null,j=null,L=new Vt(0,0,0),R=0,M=!1,E=null,C=null,k=null,I=null,fe=null,Pe.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:Ee,disable:Ue,bindFramebuffer:He,drawBuffers:at,useProgram:Bt,setBlending:X,setMaterial:Hn,setFlipSided:Tt,setCullFace:wt,setLineWidth:nt,setPolygonOffset:Gt,setScissorTest:Ke,activeTexture:B,bindTexture:D,unbindTexture:ne,compressedTexImage2D:Se,compressedTexImage3D:xe,texImage2D:Ge,texImage3D:lt,updateUBOMapping:At,uniformBlockBinding:vt,texStorage2D:xt,texStorage3D:Ce,texSubImage2D:de,texSubImage3D:Be,compressedTexSubImage2D:De,compressedTexSubImage3D:We,scissor:dt,viewport:Xe,reset:Ut}}function MC(t,e,n,r,o,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new tn,v=new WeakMap;let y;const S=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(B,D){return A?new OffscreenCanvas(B,D):Yf("canvas")}function N(B,D,ne){let Se=1;const xe=Ke(B);if((xe.width>ne||xe.height>ne)&&(Se=ne/Math.max(xe.width,xe.height)),Se<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const de=Math.floor(Se*xe.width),Be=Math.floor(Se*xe.height);y===void 0&&(y=P(de,Be));const De=D?P(de,Be):y;return De.width=de,De.height=Be,De.getContext("2d").drawImage(B,0,0,de,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Be+")."),De}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),B;return B}function T(B){return B.generateMipmaps}function x(B){t.generateMipmap(B)}function H(B){return B.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?t.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function z(B,D,ne,Se,xe=!1){if(B!==null){if(t[B]!==void 0)return t[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let de=D;if(D===t.RED&&(ne===t.FLOAT&&(de=t.R32F),ne===t.HALF_FLOAT&&(de=t.R16F),ne===t.UNSIGNED_BYTE&&(de=t.R8)),D===t.RED_INTEGER&&(ne===t.UNSIGNED_BYTE&&(de=t.R8UI),ne===t.UNSIGNED_SHORT&&(de=t.R16UI),ne===t.UNSIGNED_INT&&(de=t.R32UI),ne===t.BYTE&&(de=t.R8I),ne===t.SHORT&&(de=t.R16I),ne===t.INT&&(de=t.R32I)),D===t.RG&&(ne===t.FLOAT&&(de=t.RG32F),ne===t.HALF_FLOAT&&(de=t.RG16F),ne===t.UNSIGNED_BYTE&&(de=t.RG8)),D===t.RG_INTEGER&&(ne===t.UNSIGNED_BYTE&&(de=t.RG8UI),ne===t.UNSIGNED_SHORT&&(de=t.RG16UI),ne===t.UNSIGNED_INT&&(de=t.RG32UI),ne===t.BYTE&&(de=t.RG8I),ne===t.SHORT&&(de=t.RG16I),ne===t.INT&&(de=t.RG32I)),D===t.RGB_INTEGER&&(ne===t.UNSIGNED_BYTE&&(de=t.RGB8UI),ne===t.UNSIGNED_SHORT&&(de=t.RGB16UI),ne===t.UNSIGNED_INT&&(de=t.RGB32UI),ne===t.BYTE&&(de=t.RGB8I),ne===t.SHORT&&(de=t.RGB16I),ne===t.INT&&(de=t.RGB32I)),D===t.RGBA_INTEGER&&(ne===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),ne===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),ne===t.UNSIGNED_INT&&(de=t.RGBA32UI),ne===t.BYTE&&(de=t.RGBA8I),ne===t.SHORT&&(de=t.RGBA16I),ne===t.INT&&(de=t.RGBA32I)),D===t.RGB&&ne===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),D===t.RGBA){const Be=xe?Xf:Xt.getTransfer(Se);ne===t.FLOAT&&(de=t.RGBA32F),ne===t.HALF_FLOAT&&(de=t.RGBA16F),ne===t.UNSIGNED_BYTE&&(de=Be===nn?t.SRGB8_ALPHA8:t.RGBA8),ne===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),ne===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function O(B,D){let ne;return B?D===null||D===za||D===au?ne=t.DEPTH24_STENCIL8:D===eo?ne=t.DEPTH32F_STENCIL8:D===Dc&&(ne=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===za||D===au?ne=t.DEPTH_COMPONENT24:D===eo?ne=t.DEPTH_COMPONENT32F:D===Dc&&(ne=t.DEPTH_COMPONENT16),ne}function K(B,D){return T(B)===!0||B.isFramebufferTexture&&B.minFilter!==Jr&&B.minFilter!==xs?Math.log2(Math.max(D.width,D.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?D.mipmaps.length:1}function j(B){const D=B.target;D.removeEventListener("dispose",j),R(D),D.isVideoTexture&&v.delete(D)}function L(B){const D=B.target;D.removeEventListener("dispose",L),E(D)}function R(B){const D=r.get(B);if(D.__webglInit===void 0)return;const ne=B.source,Se=S.get(ne);if(Se){const xe=Se[D.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&M(B),Object.keys(Se).length===0&&S.delete(ne)}r.remove(B)}function M(B){const D=r.get(B);t.deleteTexture(D.__webglTexture);const ne=B.source,Se=S.get(ne);delete Se[D.__cacheKey],c.memory.textures--}function E(B){const D=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(D.__webglFramebuffer[Se]))for(let xe=0;xe<D.__webglFramebuffer[Se].length;xe++)t.deleteFramebuffer(D.__webglFramebuffer[Se][xe]);else t.deleteFramebuffer(D.__webglFramebuffer[Se]);D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer[Se])}else{if(Array.isArray(D.__webglFramebuffer))for(let Se=0;Se<D.__webglFramebuffer.length;Se++)t.deleteFramebuffer(D.__webglFramebuffer[Se]);else t.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&t.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Se=0;Se<D.__webglColorRenderbuffer.length;Se++)D.__webglColorRenderbuffer[Se]&&t.deleteRenderbuffer(D.__webglColorRenderbuffer[Se]);D.__webglDepthRenderbuffer&&t.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const ne=B.textures;for(let Se=0,xe=ne.length;Se<xe;Se++){const de=r.get(ne[Se]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),c.memory.textures--),r.remove(ne[Se])}r.remove(B)}let C=0;function k(){C=0}function I(){const B=C;return B>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),C+=1,B}function fe(B){const D=[];return D.push(B.wrapS),D.push(B.wrapT),D.push(B.wrapR||0),D.push(B.magFilter),D.push(B.minFilter),D.push(B.anisotropy),D.push(B.internalFormat),D.push(B.format),D.push(B.type),D.push(B.generateMipmaps),D.push(B.premultiplyAlpha),D.push(B.flipY),D.push(B.unpackAlignment),D.push(B.colorSpace),D.join()}function _e(B,D){const ne=r.get(B);if(B.isVideoTexture&&nt(B),B.isRenderTargetTexture===!1&&B.version>0&&ne.__version!==B.version){const Se=B.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(ne,B,D);return}}n.bindTexture(t.TEXTURE_2D,ne.__webglTexture,t.TEXTURE0+D)}function pe(B,D){const ne=r.get(B);if(B.version>0&&ne.__version!==B.version){se(ne,B,D);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ne.__webglTexture,t.TEXTURE0+D)}function me(B,D){const ne=r.get(B);if(B.version>0&&ne.__version!==B.version){se(ne,B,D);return}n.bindTexture(t.TEXTURE_3D,ne.__webglTexture,t.TEXTURE0+D)}function q(B,D){const ne=r.get(B);if(B.version>0&&ne.__version!==B.version){ve(ne,B,D);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture,t.TEXTURE0+D)}const ge={[hg]:t.REPEAT,[Ra]:t.CLAMP_TO_EDGE,[fg]:t.MIRRORED_REPEAT},le={[Jr]:t.NEAREST,[eT]:t.NEAREST_MIPMAP_NEAREST,[lf]:t.NEAREST_MIPMAP_LINEAR,[xs]:t.LINEAR,[lm]:t.LINEAR_MIPMAP_NEAREST,[Ca]:t.LINEAR_MIPMAP_LINEAR},G={[sT]:t.NEVER,[hT]:t.ALWAYS,[oT]:t.LESS,[LS]:t.LEQUAL,[aT]:t.EQUAL,[cT]:t.GEQUAL,[lT]:t.GREATER,[uT]:t.NOTEQUAL};function re(B,D){if(D.type===eo&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===xs||D.magFilter===lm||D.magFilter===lf||D.magFilter===Ca||D.minFilter===xs||D.minFilter===lm||D.minFilter===lf||D.minFilter===Ca)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(B,t.TEXTURE_WRAP_S,ge[D.wrapS]),t.texParameteri(B,t.TEXTURE_WRAP_T,ge[D.wrapT]),(B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY)&&t.texParameteri(B,t.TEXTURE_WRAP_R,ge[D.wrapR]),t.texParameteri(B,t.TEXTURE_MAG_FILTER,le[D.magFilter]),t.texParameteri(B,t.TEXTURE_MIN_FILTER,le[D.minFilter]),D.compareFunction&&(t.texParameteri(B,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(B,t.TEXTURE_COMPARE_FUNC,G[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Jr||D.minFilter!==lf&&D.minFilter!==Ca||D.type===eo&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");t.texParameterf(B,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,o.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function Pe(B,D){let ne=!1;B.__webglInit===void 0&&(B.__webglInit=!0,D.addEventListener("dispose",j));const Se=D.source;let xe=S.get(Se);xe===void 0&&(xe={},S.set(Se,xe));const de=fe(D);if(de!==B.__cacheKey){xe[de]===void 0&&(xe[de]={texture:t.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),xe[de].usedTimes++;const Be=xe[B.__cacheKey];Be!==void 0&&(xe[B.__cacheKey].usedTimes--,Be.usedTimes===0&&M(D)),B.__cacheKey=de,B.__webglTexture=xe[de].texture}return ne}function se(B,D,ne){let Se=t.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Se=t.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Se=t.TEXTURE_3D);const xe=Pe(B,D),de=D.source;n.bindTexture(Se,B.__webglTexture,t.TEXTURE0+ne);const Be=r.get(de);if(de.version!==Be.__version||xe===!0){n.activeTexture(t.TEXTURE0+ne);const De=Xt.getPrimaries(Xt.workingColorSpace),We=D.colorSpace===Ho?null:Xt.getPrimaries(D.colorSpace),xt=D.colorSpace===Ho||De===We?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ce=N(D.image,!1,o.maxTextureSize);Ce=Gt(D,Ce);const Ge=a.convert(D.format,D.colorSpace),lt=a.convert(D.type);let dt=z(D.internalFormat,Ge,lt,D.colorSpace,D.isVideoTexture);re(Se,D);let Xe;const At=D.mipmaps,vt=D.isVideoTexture!==!0,Ut=Be.__version===void 0||xe===!0,$=de.dataReady,Oe=K(D,Ce);if(D.isDepthTexture)dt=O(D.format===lu,D.type),Ut&&(vt?n.texStorage2D(t.TEXTURE_2D,1,dt,Ce.width,Ce.height):n.texImage2D(t.TEXTURE_2D,0,dt,Ce.width,Ce.height,0,Ge,lt,null));else if(D.isDataTexture)if(At.length>0){vt&&Ut&&n.texStorage2D(t.TEXTURE_2D,Oe,dt,At[0].width,At[0].height);for(let ue=0,ye=At.length;ue<ye;ue++)Xe=At[ue],vt?$&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Xe.width,Xe.height,Ge,lt,Xe.data):n.texImage2D(t.TEXTURE_2D,ue,dt,Xe.width,Xe.height,0,Ge,lt,Xe.data);D.generateMipmaps=!1}else vt?(Ut&&n.texStorage2D(t.TEXTURE_2D,Oe,dt,Ce.width,Ce.height),$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Ge,lt,Ce.data)):n.texImage2D(t.TEXTURE_2D,0,dt,Ce.width,Ce.height,0,Ge,lt,Ce.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){vt&&Ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,dt,At[0].width,At[0].height,Ce.depth);for(let ue=0,ye=At.length;ue<ye;ue++)if(Xe=At[ue],D.format!==$r)if(Ge!==null)if(vt){if($)if(D.layerUpdates.size>0){const ze=p2(Xe.width,Xe.height,D.format,D.type);for(const Fe of D.layerUpdates){const gt=Xe.data.subarray(Fe*ze/Xe.data.BYTES_PER_ELEMENT,(Fe+1)*ze/Xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,Fe,Xe.width,Xe.height,1,Ge,gt)}D.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Xe.width,Xe.height,Ce.depth,Ge,Xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,dt,Xe.width,Xe.height,Ce.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?$&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Xe.width,Xe.height,Ce.depth,Ge,lt,Xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,dt,Xe.width,Xe.height,Ce.depth,0,Ge,lt,Xe.data)}else{vt&&Ut&&n.texStorage2D(t.TEXTURE_2D,Oe,dt,At[0].width,At[0].height);for(let ue=0,ye=At.length;ue<ye;ue++)Xe=At[ue],D.format!==$r?Ge!==null?vt?$&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Xe.width,Xe.height,Ge,Xe.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,dt,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?$&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Xe.width,Xe.height,Ge,lt,Xe.data):n.texImage2D(t.TEXTURE_2D,ue,dt,Xe.width,Xe.height,0,Ge,lt,Xe.data)}else if(D.isDataArrayTexture)if(vt){if(Ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,dt,Ce.width,Ce.height,Ce.depth),$)if(D.layerUpdates.size>0){const ue=p2(Ce.width,Ce.height,D.format,D.type);for(const ye of D.layerUpdates){const ze=Ce.data.subarray(ye*ue/Ce.data.BYTES_PER_ELEMENT,(ye+1)*ue/Ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,Ce.width,Ce.height,1,Ge,lt,ze)}D.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ge,lt,Ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,dt,Ce.width,Ce.height,Ce.depth,0,Ge,lt,Ce.data);else if(D.isData3DTexture)vt?(Ut&&n.texStorage3D(t.TEXTURE_3D,Oe,dt,Ce.width,Ce.height,Ce.depth),$&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ge,lt,Ce.data)):n.texImage3D(t.TEXTURE_3D,0,dt,Ce.width,Ce.height,Ce.depth,0,Ge,lt,Ce.data);else if(D.isFramebufferTexture){if(Ut)if(vt)n.texStorage2D(t.TEXTURE_2D,Oe,dt,Ce.width,Ce.height);else{let ue=Ce.width,ye=Ce.height;for(let ze=0;ze<Oe;ze++)n.texImage2D(t.TEXTURE_2D,ze,dt,ue,ye,0,Ge,lt,null),ue>>=1,ye>>=1}}else if(At.length>0){if(vt&&Ut){const ue=Ke(At[0]);n.texStorage2D(t.TEXTURE_2D,Oe,dt,ue.width,ue.height)}for(let ue=0,ye=At.length;ue<ye;ue++)Xe=At[ue],vt?$&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ge,lt,Xe):n.texImage2D(t.TEXTURE_2D,ue,dt,Ge,lt,Xe);D.generateMipmaps=!1}else if(vt){if(Ut){const ue=Ke(Ce);n.texStorage2D(t.TEXTURE_2D,Oe,dt,ue.width,ue.height)}$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,lt,Ce)}else n.texImage2D(t.TEXTURE_2D,0,dt,Ge,lt,Ce);T(D)&&x(Se),Be.__version=de.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function ve(B,D,ne){if(D.image.length!==6)return;const Se=Pe(B,D),xe=D.source;n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+ne);const de=r.get(xe);if(xe.version!==de.__version||Se===!0){n.activeTexture(t.TEXTURE0+ne);const Be=Xt.getPrimaries(Xt.workingColorSpace),De=D.colorSpace===Ho?null:Xt.getPrimaries(D.colorSpace),We=D.colorSpace===Ho||Be===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const xt=D.isCompressedTexture||D.image[0].isCompressedTexture,Ce=D.image[0]&&D.image[0].isDataTexture,Ge=[];for(let ye=0;ye<6;ye++)!xt&&!Ce?Ge[ye]=N(D.image[ye],!0,o.maxCubemapSize):Ge[ye]=Ce?D.image[ye].image:D.image[ye],Ge[ye]=Gt(D,Ge[ye]);const lt=Ge[0],dt=a.convert(D.format,D.colorSpace),Xe=a.convert(D.type),At=z(D.internalFormat,dt,Xe,D.colorSpace),vt=D.isVideoTexture!==!0,Ut=de.__version===void 0||Se===!0,$=xe.dataReady;let Oe=K(D,lt);re(t.TEXTURE_CUBE_MAP,D);let ue;if(xt){vt&&Ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,At,lt.width,lt.height);for(let ye=0;ye<6;ye++){ue=Ge[ye].mipmaps;for(let ze=0;ze<ue.length;ze++){const Fe=ue[ze];D.format!==$r?dt!==null?vt?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,0,0,Fe.width,Fe.height,dt,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,At,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,0,0,Fe.width,Fe.height,dt,Xe,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,At,Fe.width,Fe.height,0,dt,Xe,Fe.data)}}}else{if(ue=D.mipmaps,vt&&Ut){ue.length>0&&Oe++;const ye=Ke(Ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,At,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ce){vt?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ge[ye].width,Ge[ye].height,dt,Xe,Ge[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,At,Ge[ye].width,Ge[ye].height,0,dt,Xe,Ge[ye].data);for(let ze=0;ze<ue.length;ze++){const gt=ue[ze].image[ye].image;vt?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,0,0,gt.width,gt.height,dt,Xe,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,At,gt.width,gt.height,0,dt,Xe,gt.data)}}else{vt?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,dt,Xe,Ge[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,At,dt,Xe,Ge[ye]);for(let ze=0;ze<ue.length;ze++){const Fe=ue[ze];vt?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,0,0,dt,Xe,Fe.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,At,dt,Xe,Fe.image[ye])}}}T(D)&&x(t.TEXTURE_CUBE_MAP),de.__version=xe.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function Ae(B,D,ne,Se,xe,de){const Be=a.convert(ne.format,ne.colorSpace),De=a.convert(ne.type),We=z(ne.internalFormat,Be,De,ne.colorSpace),xt=r.get(D),Ce=r.get(ne);if(Ce.__renderTarget=D,!xt.__hasExternalTextures){const Ge=Math.max(1,D.width>>de),lt=Math.max(1,D.height>>de);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,de,We,Ge,lt,D.depth,0,Be,De,null):n.texImage2D(xe,de,We,Ge,lt,0,Be,De,null)}n.bindFramebuffer(t.FRAMEBUFFER,B),wt(D)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Se,xe,Ce.__webglTexture,0,Tt(D)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Se,xe,Ce.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(B,D,ne){if(t.bindRenderbuffer(t.RENDERBUFFER,B),D.depthBuffer){const Se=D.depthTexture,xe=Se&&Se.isDepthTexture?Se.type:null,de=O(D.stencilBuffer,xe),Be=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=Tt(D);wt(D)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,de,D.width,D.height):ne?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,de,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,de,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Be,t.RENDERBUFFER,B)}else{const Se=D.textures;for(let xe=0;xe<Se.length;xe++){const de=Se[xe],Be=a.convert(de.format,de.colorSpace),De=a.convert(de.type),We=z(de.internalFormat,Be,De,de.colorSpace),xt=Tt(D);ne&&wt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt,We,D.width,D.height):wt(D)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt,We,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,We,D.width,D.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(B,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,B),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(D.depthTexture);Se.__renderTarget=D,(!Se.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),_e(D.depthTexture,0);const xe=Se.__webglTexture,de=Tt(D);if(D.depthTexture.format===Jl)wt(D)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(D.depthTexture.format===lu)wt(D)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function He(B){const D=r.get(B),ne=B.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==B.depthTexture){const Se=B.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),Se){const xe=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,Se.removeEventListener("dispose",xe)};Se.addEventListener("dispose",xe),D.__depthDisposeCallback=xe}D.__boundDepthTexture=Se}if(B.depthTexture&&!D.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ue(D.__webglFramebuffer,B)}else if(ne){D.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer[Se]),D.__webglDepthbuffer[Se]===void 0)D.__webglDepthbuffer[Se]=t.createRenderbuffer(),Ee(D.__webglDepthbuffer[Se],B,!1);else{const xe=B.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=D.__webglDepthbuffer[Se];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,de)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=t.createRenderbuffer(),Ee(D.__webglDepthbuffer,B,!1);else{const Se=B.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=D.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,xe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function at(B,D,ne){const Se=r.get(B);D!==void 0&&Ae(Se.__webglFramebuffer,B,B.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ne!==void 0&&He(B)}function Bt(B){const D=B.texture,ne=r.get(B),Se=r.get(D);B.addEventListener("dispose",L);const xe=B.textures,de=B.isWebGLCubeRenderTarget===!0,Be=xe.length>1;if(Be||(Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture()),Se.__version=D.version,c.memory.textures++),de){ne.__webglFramebuffer=[];for(let De=0;De<6;De++)if(D.mipmaps&&D.mipmaps.length>0){ne.__webglFramebuffer[De]=[];for(let We=0;We<D.mipmaps.length;We++)ne.__webglFramebuffer[De][We]=t.createFramebuffer()}else ne.__webglFramebuffer[De]=t.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ne.__webglFramebuffer=[];for(let De=0;De<D.mipmaps.length;De++)ne.__webglFramebuffer[De]=t.createFramebuffer()}else ne.__webglFramebuffer=t.createFramebuffer();if(Be)for(let De=0,We=xe.length;De<We;De++){const xt=r.get(xe[De]);xt.__webglTexture===void 0&&(xt.__webglTexture=t.createTexture(),c.memory.textures++)}if(B.samples>0&&wt(B)===!1){ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let De=0;De<xe.length;De++){const We=xe[De];ne.__webglColorRenderbuffer[De]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ne.__webglColorRenderbuffer[De]);const xt=a.convert(We.format,We.colorSpace),Ce=a.convert(We.type),Ge=z(We.internalFormat,xt,Ce,We.colorSpace,B.isXRRenderTarget===!0),lt=Tt(B);t.renderbufferStorageMultisample(t.RENDERBUFFER,lt,Ge,B.width,B.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,ne.__webglColorRenderbuffer[De])}t.bindRenderbuffer(t.RENDERBUFFER,null),B.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(ne.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,Se.__webglTexture),re(t.TEXTURE_CUBE_MAP,D);for(let De=0;De<6;De++)if(D.mipmaps&&D.mipmaps.length>0)for(let We=0;We<D.mipmaps.length;We++)Ae(ne.__webglFramebuffer[De][We],B,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+De,We);else Ae(ne.__webglFramebuffer[De],B,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);T(D)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let De=0,We=xe.length;De<We;De++){const xt=xe[De],Ce=r.get(xt);n.bindTexture(t.TEXTURE_2D,Ce.__webglTexture),re(t.TEXTURE_2D,xt),Ae(ne.__webglFramebuffer,B,xt,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,0),T(xt)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let De=t.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(De=B.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(De,Se.__webglTexture),re(De,D),D.mipmaps&&D.mipmaps.length>0)for(let We=0;We<D.mipmaps.length;We++)Ae(ne.__webglFramebuffer[We],B,D,t.COLOR_ATTACHMENT0,De,We);else Ae(ne.__webglFramebuffer,B,D,t.COLOR_ATTACHMENT0,De,0);T(D)&&x(De),n.unbindTexture()}B.depthBuffer&&He(B)}function Mt(B){const D=B.textures;for(let ne=0,Se=D.length;ne<Se;ne++){const xe=D[ne];if(T(xe)){const de=H(B),Be=r.get(xe).__webglTexture;n.bindTexture(de,Be),x(de),n.unbindTexture()}}}const Jt=[],X=[];function Hn(B){if(B.samples>0){if(wt(B)===!1){const D=B.textures,ne=B.width,Se=B.height;let xe=t.COLOR_BUFFER_BIT;const de=B.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Be=r.get(B),De=D.length>1;if(De)for(let We=0;We<D.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let We=0;We<D.length;We++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),De){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Be.__webglColorRenderbuffer[We]);const xt=r.get(D[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xt,0)}t.blitFramebuffer(0,0,ne,Se,0,0,ne,Se,xe,t.NEAREST),d===!0&&(Jt.length=0,X.length=0,Jt.push(t.COLOR_ATTACHMENT0+We),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Jt.push(de),X.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,X)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Jt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),De)for(let We=0;We<D.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Be.__webglColorRenderbuffer[We]);const xt=r.get(D[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,xt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&d){const D=B.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[D])}}}function Tt(B){return Math.min(o.maxSamples,B.samples)}function wt(B){const D=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function nt(B){const D=c.render.frame;v.get(B)!==D&&(v.set(B,D),B.update())}function Gt(B,D){const ne=B.colorSpace,Se=B.format,xe=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ne!==uu&&ne!==Ho&&(Xt.getTransfer(ne)===nn?(Se!==$r||xe!==io)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),D}function Ke(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=_e,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=q,this.rebindTextures=at,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Hn,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=wt}function TC(t,e){function n(r,o=Ho){let a;const c=Xt.getTransfer(o);if(r===io)return t.UNSIGNED_BYTE;if(r===f0)return t.UNSIGNED_SHORT_4_4_4_4;if(r===d0)return t.UNSIGNED_SHORT_5_5_5_1;if(r===MS)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===xS)return t.BYTE;if(r===ES)return t.SHORT;if(r===Dc)return t.UNSIGNED_SHORT;if(r===h0)return t.INT;if(r===za)return t.UNSIGNED_INT;if(r===eo)return t.FLOAT;if(r===zc)return t.HALF_FLOAT;if(r===TS)return t.ALPHA;if(r===wS)return t.RGB;if(r===$r)return t.RGBA;if(r===AS)return t.LUMINANCE;if(r===RS)return t.LUMINANCE_ALPHA;if(r===Jl)return t.DEPTH_COMPONENT;if(r===lu)return t.DEPTH_STENCIL;if(r===CS)return t.RED;if(r===p0)return t.RED_INTEGER;if(r===bS)return t.RG;if(r===m0)return t.RG_INTEGER;if(r===g0)return t.RGBA_INTEGER;if(r===Of||r===kf||r===Bf||r===zf)if(c===nn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Of)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Of)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dg||r===pg||r===mg||r===gg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===dg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_g||r===vg||r===yg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===_g||r===vg)return c===nn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===yg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sg||r===xg||r===Eg||r===Mg||r===Tg||r===wg||r===Ag||r===Rg||r===Cg||r===bg||r===Pg||r===Lg||r===Ig||r===Dg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Sg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ag)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ig)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dg)return c===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vf||r===Ng||r===Ug)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vf)return c===nn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ng)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ug)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===PS||r===Fg||r===Og||r===kg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vf)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Og)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===au?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const wC={type:"move"};class km{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Af,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Af,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Af,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,a=null,c=null;const f=this._targetRay,d=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const N of e.hand.values()){const T=n.getJointPose(N,r),x=this._getHandJoint(m,N);T!==null&&(x.matrix.fromArray(T.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=T.radius),x.visible=T!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=v.position.distanceTo(y.position),A=.02,P=.005;m.inputState.pinching&&S>A+P?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=A-P&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wC)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=a!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Af;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const AC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new qi,a=e.properties.get(o);a.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new so({vertexShader:AC,fragmentShader:RC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kr(new hu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bC extends Tu{constructor(e,n){super();const r=this;let o=null,a=1,c=null,f="local-floor",d=1,m=null,v=null,y=null,S=null,A=null,P=null;const N=new CC,T=n.getContextAttributes();let x=null,H=null;const z=[],O=[],K=new tn;let j=null;const L=new Ar;L.viewport=new Rn;const R=new Ar;R.viewport=new Rn;const M=[L,R],E=new $T;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ve=z[se];return ve===void 0&&(ve=new km,z[se]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(se){let ve=z[se];return ve===void 0&&(ve=new km,z[se]=ve),ve.getGripSpace()},this.getHand=function(se){let ve=z[se];return ve===void 0&&(ve=new km,z[se]=ve),ve.getHandSpace()};function I(se){const ve=O.indexOf(se.inputSource);if(ve===-1)return;const Ae=z[ve];Ae!==void 0&&(Ae.update(se.inputSource,se.frame,m||c),Ae.dispatchEvent({type:se.type,data:se.inputSource}))}function fe(){o.removeEventListener("select",I),o.removeEventListener("selectstart",I),o.removeEventListener("selectend",I),o.removeEventListener("squeeze",I),o.removeEventListener("squeezestart",I),o.removeEventListener("squeezeend",I),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",_e);for(let se=0;se<z.length;se++){const ve=O[se];ve!==null&&(O[se]=null,z[se].disconnect(ve))}C=null,k=null,N.reset(),e.setRenderTarget(x),A=null,S=null,y=null,o=null,H=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(se){m=se},this.getBaseLayer=function(){return S!==null?S:A},this.getBinding=function(){return y},this.getFrame=function(){return P},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",I),o.addEventListener("selectstart",I),o.addEventListener("selectend",I),o.addEventListener("squeeze",I),o.addEventListener("squeezestart",I),o.addEventListener("squeezeend",I),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",_e),T.xrCompatible!==!0&&await n.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(K),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let Ae=null,Ee=null,Ue=null;T.depth&&(Ue=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=T.stencil?lu:Jl,Ee=T.stencil?au:za);const He={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:a};y=new XRWebGLBinding(o,n),S=y.createProjectionLayer(He),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),H=new Va(S.textureWidth,S.textureHeight,{format:$r,type:io,depthTexture:new HS(S.textureWidth,S.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}else{const Ae={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};A=new XRWebGLLayer(o,n,Ae),o.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),H=new Va(A.framebufferWidth,A.framebufferHeight,{format:$r,type:io,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}H.isXRRenderTarget=!0,this.setFoveation(d),m=null,c=await o.requestReferenceSpace(f),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return N.getDepthTexture()};function _e(se){for(let ve=0;ve<se.removed.length;ve++){const Ae=se.removed[ve],Ee=O.indexOf(Ae);Ee>=0&&(O[Ee]=null,z[Ee].disconnect(Ae))}for(let ve=0;ve<se.added.length;ve++){const Ae=se.added[ve];let Ee=O.indexOf(Ae);if(Ee===-1){for(let He=0;He<z.length;He++)if(He>=O.length){O.push(Ae),Ee=He;break}else if(O[He]===null){O[He]=Ae,Ee=He;break}if(Ee===-1)break}const Ue=z[Ee];Ue&&Ue.connect(Ae)}}const pe=new ce,me=new ce;function q(se,ve,Ae){pe.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const Ee=pe.distanceTo(me),Ue=ve.projectionMatrix.elements,He=Ae.projectionMatrix.elements,at=Ue[14]/(Ue[10]-1),Bt=Ue[14]/(Ue[10]+1),Mt=(Ue[9]+1)/Ue[5],Jt=(Ue[9]-1)/Ue[5],X=(Ue[8]-1)/Ue[0],Hn=(He[8]+1)/He[0],Tt=at*X,wt=at*Hn,nt=Ee/(-X+Hn),Gt=nt*-X;if(ve.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Gt),se.translateZ(nt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ue[10]===-1)se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ke=at+nt,B=Bt+nt,D=Tt-Gt,ne=wt+(Ee-Gt),Se=Mt*Bt/B*Ke,xe=Jt*Bt/B*Ke;se.projectionMatrix.makePerspective(D,ne,Se,xe,Ke,B),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ge(se,ve){ve===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ve.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ve=se.near,Ae=se.far;N.texture!==null&&(N.depthNear>0&&(ve=N.depthNear),N.depthFar>0&&(Ae=N.depthFar)),E.near=R.near=L.near=ve,E.far=R.far=L.far=Ae,(C!==E.near||k!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,k=E.far),L.layers.mask=se.layers.mask|2,R.layers.mask=se.layers.mask|4,E.layers.mask=L.layers.mask|R.layers.mask;const Ee=se.parent,Ue=E.cameras;ge(E,Ee);for(let He=0;He<Ue.length;He++)ge(Ue[He],Ee);Ue.length===2?q(E,L,R):E.projectionMatrix.copy(L.projectionMatrix),le(se,E,Ee)};function le(se,ve,Ae){Ae===null?se.matrix.copy(ve.matrixWorld):(se.matrix.copy(Ae.matrixWorld),se.matrix.invert(),se.matrix.multiply(ve.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Bg*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(S===null&&A===null))return d},this.setFoveation=function(se){d=se,S!==null&&(S.fixedFoveation=se),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=se)},this.hasDepthSensing=function(){return N.texture!==null},this.getDepthSensingMesh=function(){return N.getMesh(E)};let G=null;function re(se,ve){if(v=ve.getViewerPose(m||c),P=ve,v!==null){const Ae=v.views;A!==null&&(e.setRenderTargetFramebuffer(H,A.framebuffer),e.setRenderTarget(H));let Ee=!1;Ae.length!==E.cameras.length&&(E.cameras.length=0,Ee=!0);for(let He=0;He<Ae.length;He++){const at=Ae[He];let Bt=null;if(A!==null)Bt=A.getViewport(at);else{const Jt=y.getViewSubImage(S,at);Bt=Jt.viewport,He===0&&(e.setRenderTargetTextures(H,Jt.colorTexture,S.ignoreDepthValues?void 0:Jt.depthStencilTexture),e.setRenderTarget(H))}let Mt=M[He];Mt===void 0&&(Mt=new Ar,Mt.layers.enable(He),Mt.viewport=new Rn,M[He]=Mt),Mt.matrix.fromArray(at.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(at.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),He===0&&(E.matrix.copy(Mt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ee===!0&&E.cameras.push(Mt)}const Ue=o.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const He=y.getDepthInformation(Ae[0]);He&&He.isValid&&He.texture&&N.init(e,He,o.renderState)}}for(let Ae=0;Ae<z.length;Ae++){const Ee=O[Ae],Ue=z[Ae];Ee!==null&&Ue!==void 0&&Ue.update(Ee,ve,m||c)}G&&G(se,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),P=null}const Pe=new jS;Pe.setAnimationLoop(re),this.setAnimationLoop=function(se){G=se},this.dispose=function(){}}}const ya=new ro,PC=new Cn;function LC(t,e){function n(T,x){T.matrixAutoUpdate===!0&&T.updateMatrix(),x.value.copy(T.matrix)}function r(T,x){x.color.getRGB(T.fogColor.value,BS(t)),x.isFog?(T.fogNear.value=x.near,T.fogFar.value=x.far):x.isFogExp2&&(T.fogDensity.value=x.density)}function o(T,x,H,z,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(T,x):x.isMeshToonMaterial?(a(T,x),y(T,x)):x.isMeshPhongMaterial?(a(T,x),v(T,x)):x.isMeshStandardMaterial?(a(T,x),S(T,x),x.isMeshPhysicalMaterial&&A(T,x,O)):x.isMeshMatcapMaterial?(a(T,x),P(T,x)):x.isMeshDepthMaterial?a(T,x):x.isMeshDistanceMaterial?(a(T,x),N(T,x)):x.isMeshNormalMaterial?a(T,x):x.isLineBasicMaterial?(c(T,x),x.isLineDashedMaterial&&f(T,x)):x.isPointsMaterial?d(T,x,H,z):x.isSpriteMaterial?m(T,x):x.isShadowMaterial?(T.color.value.copy(x.color),T.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(T,x){T.opacity.value=x.opacity,x.color&&T.diffuse.value.copy(x.color),x.emissive&&T.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(T.map.value=x.map,n(x.map,T.mapTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.bumpMap&&(T.bumpMap.value=x.bumpMap,n(x.bumpMap,T.bumpMapTransform),T.bumpScale.value=x.bumpScale,x.side===Xi&&(T.bumpScale.value*=-1)),x.normalMap&&(T.normalMap.value=x.normalMap,n(x.normalMap,T.normalMapTransform),T.normalScale.value.copy(x.normalScale),x.side===Xi&&T.normalScale.value.negate()),x.displacementMap&&(T.displacementMap.value=x.displacementMap,n(x.displacementMap,T.displacementMapTransform),T.displacementScale.value=x.displacementScale,T.displacementBias.value=x.displacementBias),x.emissiveMap&&(T.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,T.emissiveMapTransform)),x.specularMap&&(T.specularMap.value=x.specularMap,n(x.specularMap,T.specularMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest);const H=e.get(x),z=H.envMap,O=H.envMapRotation;z&&(T.envMap.value=z,ya.copy(O),ya.x*=-1,ya.y*=-1,ya.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ya.y*=-1,ya.z*=-1),T.envMapRotation.value.setFromMatrix4(PC.makeRotationFromEuler(ya)),T.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=x.reflectivity,T.ior.value=x.ior,T.refractionRatio.value=x.refractionRatio),x.lightMap&&(T.lightMap.value=x.lightMap,T.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,T.lightMapTransform)),x.aoMap&&(T.aoMap.value=x.aoMap,T.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,T.aoMapTransform))}function c(T,x){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,x.map&&(T.map.value=x.map,n(x.map,T.mapTransform))}function f(T,x){T.dashSize.value=x.dashSize,T.totalSize.value=x.dashSize+x.gapSize,T.scale.value=x.scale}function d(T,x,H,z){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,T.size.value=x.size*H,T.scale.value=z*.5,x.map&&(T.map.value=x.map,n(x.map,T.uvTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest)}function m(T,x){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,T.rotation.value=x.rotation,x.map&&(T.map.value=x.map,n(x.map,T.mapTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest)}function v(T,x){T.specular.value.copy(x.specular),T.shininess.value=Math.max(x.shininess,1e-4)}function y(T,x){x.gradientMap&&(T.gradientMap.value=x.gradientMap)}function S(T,x){T.metalness.value=x.metalness,x.metalnessMap&&(T.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,T.metalnessMapTransform)),T.roughness.value=x.roughness,x.roughnessMap&&(T.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,T.roughnessMapTransform)),x.envMap&&(T.envMapIntensity.value=x.envMapIntensity)}function A(T,x,H){T.ior.value=x.ior,x.sheen>0&&(T.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),T.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(T.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,T.sheenColorMapTransform)),x.sheenRoughnessMap&&(T.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,T.sheenRoughnessMapTransform))),x.clearcoat>0&&(T.clearcoat.value=x.clearcoat,T.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(T.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,T.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(T.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xi&&T.clearcoatNormalScale.value.negate())),x.dispersion>0&&(T.dispersion.value=x.dispersion),x.iridescence>0&&(T.iridescence.value=x.iridescence,T.iridescenceIOR.value=x.iridescenceIOR,T.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(T.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,T.iridescenceMapTransform)),x.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),x.transmission>0&&(T.transmission.value=x.transmission,T.transmissionSamplerMap.value=H.texture,T.transmissionSamplerSize.value.set(H.width,H.height),x.transmissionMap&&(T.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,T.transmissionMapTransform)),T.thickness.value=x.thickness,x.thicknessMap&&(T.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=x.attenuationDistance,T.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(T.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(T.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=x.specularIntensity,T.specularColor.value.copy(x.specularColor),x.specularColorMap&&(T.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,T.specularColorMapTransform)),x.specularIntensityMap&&(T.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,T.specularIntensityMapTransform))}function P(T,x){x.matcap&&(T.matcap.value=x.matcap)}function N(T,x){const H=e.get(x).light;T.referencePosition.value.setFromMatrixPosition(H.matrixWorld),T.nearDistance.value=H.shadow.camera.near,T.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function IC(t,e,n,r){let o={},a={},c=[];const f=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function d(H,z){const O=z.program;r.uniformBlockBinding(H,O)}function m(H,z){let O=o[H.id];O===void 0&&(P(H),O=v(H),o[H.id]=O,H.addEventListener("dispose",T));const K=z.program;r.updateUBOMapping(H,K);const j=e.render.frame;a[H.id]!==j&&(S(H),a[H.id]=j)}function v(H){const z=y();H.__bindingPointIndex=z;const O=t.createBuffer(),K=H.__size,j=H.usage;return t.bindBuffer(t.UNIFORM_BUFFER,O),t.bufferData(t.UNIFORM_BUFFER,K,j),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,z,O),O}function y(){for(let H=0;H<f;H++)if(c.indexOf(H)===-1)return c.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(H){const z=o[H.id],O=H.uniforms,K=H.__cache;t.bindBuffer(t.UNIFORM_BUFFER,z);for(let j=0,L=O.length;j<L;j++){const R=Array.isArray(O[j])?O[j]:[O[j]];for(let M=0,E=R.length;M<E;M++){const C=R[M];if(A(C,j,M,K)===!0){const k=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let fe=0;for(let _e=0;_e<I.length;_e++){const pe=I[_e],me=N(pe);typeof pe=="number"||typeof pe=="boolean"?(C.__data[0]=pe,t.bufferSubData(t.UNIFORM_BUFFER,k+fe,C.__data)):pe.isMatrix3?(C.__data[0]=pe.elements[0],C.__data[1]=pe.elements[1],C.__data[2]=pe.elements[2],C.__data[3]=0,C.__data[4]=pe.elements[3],C.__data[5]=pe.elements[4],C.__data[6]=pe.elements[5],C.__data[7]=0,C.__data[8]=pe.elements[6],C.__data[9]=pe.elements[7],C.__data[10]=pe.elements[8],C.__data[11]=0):(pe.toArray(C.__data,fe),fe+=me.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function A(H,z,O,K){const j=H.value,L=z+"_"+O;if(K[L]===void 0)return typeof j=="number"||typeof j=="boolean"?K[L]=j:K[L]=j.clone(),!0;{const R=K[L];if(typeof j=="number"||typeof j=="boolean"){if(R!==j)return K[L]=j,!0}else if(R.equals(j)===!1)return R.copy(j),!0}return!1}function P(H){const z=H.uniforms;let O=0;const K=16;for(let L=0,R=z.length;L<R;L++){const M=Array.isArray(z[L])?z[L]:[z[L]];for(let E=0,C=M.length;E<C;E++){const k=M[E],I=Array.isArray(k.value)?k.value:[k.value];for(let fe=0,_e=I.length;fe<_e;fe++){const pe=I[fe],me=N(pe),q=O%K,ge=q%me.boundary,le=q+ge;O+=ge,le!==0&&K-le<me.storage&&(O+=K-le),k.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=O,O+=me.storage}}}const j=O%K;return j>0&&(O+=K-j),H.__size=O,H.__cache={},this}function N(H){const z={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(z.boundary=4,z.storage=4):H.isVector2?(z.boundary=8,z.storage=8):H.isVector3||H.isColor?(z.boundary=16,z.storage=12):H.isVector4?(z.boundary=16,z.storage=16):H.isMatrix3?(z.boundary=48,z.storage=48):H.isMatrix4?(z.boundary=64,z.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),z}function T(H){const z=H.target;z.removeEventListener("dispose",T);const O=c.indexOf(z.__bindingPointIndex);c.splice(O,1),t.deleteBuffer(o[z.id]),delete o[z.id],delete a[z.id]}function x(){for(const H in o)t.deleteBuffer(o[H]);c=[],o={},a={}}return{bind:d,update:m,dispose:x}}class DC{constructor(e={}){const{canvas:n=dT(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const P=new Uint32Array(4),N=new Int32Array(4);let T=null,x=null;const H=[],z=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wr,this.toneMapping=jo,this.toneMappingExposure=1;const O=this;let K=!1,j=0,L=0,R=null,M=-1,E=null;const C=new Rn,k=new Rn;let I=null;const fe=new Vt(0);let _e=0,pe=n.width,me=n.height,q=1,ge=null,le=null;const G=new Rn(0,0,pe,me),re=new Rn(0,0,pe,me);let Pe=!1;const se=new S0;let ve=!1,Ae=!1;this.transmissionResolutionScale=1;const Ee=new Cn,Ue=new Cn,He=new ce,at=new Rn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Jt(){return R===null?q:1}let X=r;function Hn(U,Z){return n.getContext(U,Z)}try{const U={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${c0}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),X===null){const Z="webgl2";if(X=Hn(Z,U),X===null)throw Hn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Tt,wt,nt,Gt,Ke,B,D,ne,Se,xe,de,Be,De,We,xt,Ce,Ge,lt,dt,Xe,At,vt,Ut,$;function Oe(){Tt=new HA(X),Tt.init(),vt=new TC(X,Tt),wt=new FA(X,Tt,e,vt),nt=new EC(X,Tt),wt.reverseDepthBuffer&&S&&nt.buffers.depth.setReversed(!0),Gt=new jA(X),Ke=new uC,B=new MC(X,Tt,nt,Ke,wt,vt,Gt),D=new kA(O),ne=new VA(O),Se=new JT(X),Ut=new NA(X,Se),xe=new GA(X,Se,Gt,Ut),de=new qA(X,xe,Se,Gt),dt=new XA(X,wt,B),Ce=new OA(Ke),Be=new lC(O,D,ne,Tt,wt,Ut,Ce),De=new LC(O,Ke),We=new hC,xt=new _C(Tt),lt=new DA(O,D,ne,nt,de,A,d),Ge=new SC(O,de,wt),$=new IC(X,Gt,wt,nt),Xe=new UA(X,Tt,Gt),At=new WA(X,Tt,Gt),Gt.programs=Be.programs,O.capabilities=wt,O.extensions=Tt,O.properties=Ke,O.renderLists=We,O.shadowMap=Ge,O.state=nt,O.info=Gt}Oe();const ue=new bC(O,X);this.xr=ue,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const U=Tt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Tt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(U){U!==void 0&&(q=U,this.setSize(pe,me,!1))},this.getSize=function(U){return U.set(pe,me)},this.setSize=function(U,Z,oe=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=U,me=Z,n.width=Math.floor(U*q),n.height=Math.floor(Z*q),oe===!0&&(n.style.width=U+"px",n.style.height=Z+"px"),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(pe*q,me*q).floor()},this.setDrawingBufferSize=function(U,Z,oe){pe=U,me=Z,q=oe,n.width=Math.floor(U*oe),n.height=Math.floor(Z*oe),this.setViewport(0,0,U,Z)},this.getCurrentViewport=function(U){return U.copy(C)},this.getViewport=function(U){return U.copy(G)},this.setViewport=function(U,Z,oe,Q){U.isVector4?G.set(U.x,U.y,U.z,U.w):G.set(U,Z,oe,Q),nt.viewport(C.copy(G).multiplyScalar(q).round())},this.getScissor=function(U){return U.copy(re)},this.setScissor=function(U,Z,oe,Q){U.isVector4?re.set(U.x,U.y,U.z,U.w):re.set(U,Z,oe,Q),nt.scissor(k.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(U){nt.setScissorTest(Pe=U)},this.setOpaqueSort=function(U){ge=U},this.setTransparentSort=function(U){le=U},this.getClearColor=function(U){return U.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(U=!0,Z=!0,oe=!0){let Q=0;if(U){let J=!1;if(R!==null){const we=R.texture.format;J=we===g0||we===m0||we===p0}if(J){const we=R.texture.type,Ne=we===io||we===za||we===Dc||we===au||we===f0||we===d0,ke=lt.getClearColor(),qe=lt.getClearAlpha(),mt=ke.r,ct=ke.g,Ye=ke.b;Ne?(P[0]=mt,P[1]=ct,P[2]=Ye,P[3]=qe,X.clearBufferuiv(X.COLOR,0,P)):(N[0]=mt,N[1]=ct,N[2]=Ye,N[3]=qe,X.clearBufferiv(X.COLOR,0,N))}else Q|=X.COLOR_BUFFER_BIT}Z&&(Q|=X.DEPTH_BUFFER_BIT),oe&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),lt.dispose(),We.dispose(),xt.dispose(),Ke.dispose(),D.dispose(),ne.dispose(),de.dispose(),Ut.dispose(),$.dispose(),Be.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ls),ue.removeEventListener("sessionend",Li),Ai.stop()};function ye(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const U=Gt.autoReset,Z=Ge.enabled,oe=Ge.autoUpdate,Q=Ge.needsUpdate,J=Ge.type;Oe(),Gt.autoReset=U,Ge.enabled=Z,Ge.autoUpdate=oe,Ge.needsUpdate=Q,Ge.type=J}function Fe(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function gt(U){const Z=U.target;Z.removeEventListener("dispose",gt),Qt(Z)}function Qt(U){Tn(U),Ke.remove(U)}function Tn(U){const Z=Ke.get(U).programs;Z!==void 0&&(Z.forEach(function(oe){Be.releaseProgram(oe)}),U.isShaderMaterial&&Be.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,oe,Q,J,we){Z===null&&(Z=Bt);const Ne=J.isMesh&&J.matrixWorld.determinant()<0,ke=Ds(U,Z,oe,Q,J);nt.setMaterial(Q,Ne);let qe=oe.index,mt=1;if(Q.wireframe===!0){if(qe=xe.getWireframeAttribute(oe),qe===void 0)return;mt=2}const ct=oe.drawRange,Ye=oe.attributes.position;let Lt=ct.start*mt,yt=(ct.start+ct.count)*mt;we!==null&&(Lt=Math.max(Lt,we.start*mt),yt=Math.min(yt,(we.start+we.count)*mt)),qe!==null?(Lt=Math.max(Lt,0),yt=Math.min(yt,qe.count)):Ye!=null&&(Lt=Math.max(Lt,0),yt=Math.min(yt,Ye.count));const an=yt-Lt;if(an<0||an===1/0)return;Ut.setup(J,Q,ke,oe,qe);let sn,Dt=Xe;if(qe!==null&&(sn=Se.get(qe),Dt=At,Dt.setIndex(sn)),J.isMesh)Q.wireframe===!0?(nt.setLineWidth(Q.wireframeLinewidth*Jt()),Dt.setMode(X.LINES)):Dt.setMode(X.TRIANGLES);else if(J.isLine){let it=Q.linewidth;it===void 0&&(it=1),nt.setLineWidth(it*Jt()),J.isLineSegments?Dt.setMode(X.LINES):J.isLineLoop?Dt.setMode(X.LINE_LOOP):Dt.setMode(X.LINE_STRIP)}else J.isPoints?Dt.setMode(X.POINTS):J.isSprite&&Dt.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Dt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const it=J._multiDrawStarts,fn=J._multiDrawCounts,bt=J._multiDrawCount,Gn=qe?Se.get(qe).bytesPerElement:1,os=Ke.get(Q).currentProgram.getUniforms();for(let _n=0;_n<bt;_n++)os.setValue(X,"_gl_DrawID",_n),Dt.render(it[_n]/Gn,fn[_n])}else if(J.isInstancedMesh)Dt.renderInstances(Lt,an,J.count);else if(oe.isInstancedBufferGeometry){const it=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,fn=Math.min(oe.instanceCount,it);Dt.renderInstances(Lt,an,fn)}else Dt.render(Lt,an)};function Ct(U,Z,oe){U.transparent===!0&&U.side===qr&&U.forceSinglePass===!1?(U.side=Xi,U.needsUpdate=!0,ss(U,Z,oe),U.side=Yo,U.needsUpdate=!0,ss(U,Z,oe),U.side=qr):ss(U,Z,oe)}this.compile=function(U,Z,oe=null){oe===null&&(oe=U),x=xt.get(oe),x.init(Z),z.push(x),oe.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),U!==oe&&U.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const Q=new Set;return U.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const we=J.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const ke=we[Ne];Ct(ke,oe,J),Q.add(ke)}else Ct(we,oe,J),Q.add(we)}),z.pop(),x=null,Q},this.compileAsync=function(U,Z,oe=null){const Q=this.compile(U,Z,oe);return new Promise(J=>{function we(){if(Q.forEach(function(Ne){Ke.get(Ne).currentProgram.isReady()&&Q.delete(Ne)}),Q.size===0){J(U);return}setTimeout(we,10)}Tt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ui=null;function Yt(U){ui&&ui(U)}function Ls(){Ai.stop()}function Li(){Ai.start()}const Ai=new jS;Ai.setAnimationLoop(Yt),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(U){ui=U,ue.setAnimationLoop(U),U===null?Ai.stop():Ai.start()},ue.addEventListener("sessionstart",Ls),ue.addEventListener("sessionend",Li),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Z),Z=ue.getCamera()),U.isScene===!0&&U.onBeforeRender(O,U,Z,R),x=xt.get(U,z.length),x.init(Z),z.push(x),Ue.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),se.setFromProjectionMatrix(Ue),Ae=this.localClippingEnabled,ve=Ce.init(this.clippingPlanes,Ae),T=We.get(U,H.length),T.init(),H.push(T),ue.enabled===!0&&ue.isPresenting===!0){const we=O.xr.getDepthSensingMesh();we!==null&&Pr(we,Z,-1/0,O.sortObjects)}Pr(U,Z,0,O.sortObjects),T.finish(),O.sortObjects===!0&&T.sort(ge,le),Mt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Mt&&lt.addToRenderList(T,U),this.info.render.frame++,ve===!0&&Ce.beginShadows();const oe=x.state.shadowsArray;Ge.render(oe,U,Z),ve===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=T.opaque,J=T.transmissive;if(x.setupLights(),Z.isArrayCamera){const we=Z.cameras;if(J.length>0)for(let Ne=0,ke=we.length;Ne<ke;Ne++){const qe=we[Ne];Ii(Q,J,U,qe)}Mt&&lt.render(U);for(let Ne=0,ke=we.length;Ne<ke;Ne++){const qe=we[Ne];Is(T,U,qe,qe.viewport)}}else J.length>0&&Ii(Q,J,U,Z),Mt&&lt.render(U),Is(T,U,Z);R!==null&&L===0&&(B.updateMultisampleRenderTarget(R),B.updateRenderTargetMipmap(R)),U.isScene===!0&&U.onAfterRender(O,U,Z),Ut.resetDefaultState(),M=-1,E=null,z.pop(),z.length>0?(x=z[z.length-1],ve===!0&&Ce.setGlobalState(O.clippingPlanes,x.state.camera)):x=null,H.pop(),H.length>0?T=H[H.length-1]:T=null};function Pr(U,Z,oe,Q){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)oe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLight)x.pushLight(U),U.castShadow&&x.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||se.intersectsSprite(U)){Q&&at.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ue);const Ne=de.update(U),ke=U.material;ke.visible&&T.push(U,Ne,ke,oe,at.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||se.intersectsObject(U))){const Ne=de.update(U),ke=U.material;if(Q&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),at.copy(U.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),at.copy(Ne.boundingSphere.center)),at.applyMatrix4(U.matrixWorld).applyMatrix4(Ue)),Array.isArray(ke)){const qe=Ne.groups;for(let mt=0,ct=qe.length;mt<ct;mt++){const Ye=qe[mt],Lt=ke[Ye.materialIndex];Lt&&Lt.visible&&T.push(U,Ne,Lt,oe,at.z,Ye)}}else ke.visible&&T.push(U,Ne,ke,oe,at.z,null)}}const we=U.children;for(let Ne=0,ke=we.length;Ne<ke;Ne++)Pr(we[Ne],Z,oe,Q)}function Is(U,Z,oe,Q){const J=U.opaque,we=U.transmissive,Ne=U.transparent;x.setupLightsView(oe),ve===!0&&Ce.setGlobalState(O.clippingPlanes,oe),Q&&nt.viewport(C.copy(Q)),J.length>0&&rs(J,Z,oe),we.length>0&&rs(we,Z,oe),Ne.length>0&&rs(Ne,Z,oe),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Ii(U,Z,oe,Q){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Q.id]===void 0&&(x.state.transmissionRenderTarget[Q.id]=new Va(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?zc:io,minFilter:Ca,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const we=x.state.transmissionRenderTarget[Q.id],Ne=Q.viewport||C;we.setSize(Ne.z*O.transmissionResolutionScale,Ne.w*O.transmissionResolutionScale);const ke=O.getRenderTarget();O.setRenderTarget(we),O.getClearColor(fe),_e=O.getClearAlpha(),_e<1&&O.setClearColor(16777215,.5),O.clear(),Mt&&lt.render(oe);const qe=O.toneMapping;O.toneMapping=jo;const mt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),x.setupLightsView(Q),ve===!0&&Ce.setGlobalState(O.clippingPlanes,Q),rs(U,oe,Q),B.updateMultisampleRenderTarget(we),B.updateRenderTargetMipmap(we),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ye=0,Lt=Z.length;Ye<Lt;Ye++){const yt=Z[Ye],an=yt.object,sn=yt.geometry,Dt=yt.material,it=yt.group;if(Dt.side===qr&&an.layers.test(Q.layers)){const fn=Dt.side;Dt.side=Xi,Dt.needsUpdate=!0,Ka(an,oe,Q,sn,Dt,it),Dt.side=fn,Dt.needsUpdate=!0,ct=!0}}ct===!0&&(B.updateMultisampleRenderTarget(we),B.updateRenderTargetMipmap(we))}O.setRenderTarget(ke),O.setClearColor(fe,_e),mt!==void 0&&(Q.viewport=mt),O.toneMapping=qe}function rs(U,Z,oe){const Q=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,we=U.length;J<we;J++){const Ne=U[J],ke=Ne.object,qe=Ne.geometry,mt=Q===null?Ne.material:Q,ct=Ne.group;ke.layers.test(oe.layers)&&Ka(ke,Z,oe,qe,mt,ct)}}function Ka(U,Z,oe,Q,J,we){U.onBeforeRender(O,Z,oe,Q,J,we),U.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),J.onBeforeRender(O,Z,oe,Q,U,we),J.transparent===!0&&J.side===qr&&J.forceSinglePass===!1?(J.side=Xi,J.needsUpdate=!0,O.renderBufferDirect(oe,Z,Q,J,U,we),J.side=Yo,J.needsUpdate=!0,O.renderBufferDirect(oe,Z,Q,J,U,we),J.side=qr):O.renderBufferDirect(oe,Z,Q,J,U,we),U.onAfterRender(O,Z,oe,Q,J,we)}function ss(U,Z,oe){Z.isScene!==!0&&(Z=Bt);const Q=Ke.get(U),J=x.state.lights,we=x.state.shadowsArray,Ne=J.state.version,ke=Be.getParameters(U,J.state,we,Z,oe),qe=Be.getProgramCacheKey(ke);let mt=Q.programs;Q.environment=U.isMeshStandardMaterial?Z.environment:null,Q.fog=Z.fog,Q.envMap=(U.isMeshStandardMaterial?ne:D).get(U.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&U.envMap===null?Z.environmentRotation:U.envMapRotation,mt===void 0&&(U.addEventListener("dispose",gt),mt=new Map,Q.programs=mt);let ct=mt.get(qe);if(ct!==void 0){if(Q.currentProgram===ct&&Q.lightsStateVersion===Ne)return Di(U,ke),ct}else ke.uniforms=Be.getUniforms(U),U.onBeforeCompile(ke,O),ct=Be.acquireProgram(ke,qe),mt.set(qe,ct),Q.uniforms=ke.uniforms;const Ye=Q.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ye.clippingPlanes=Ce.uniform),Di(U,ke),Q.needsLights=Ja(U),Q.lightsStateVersion=Ne,Q.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.directionalShadowMap.value=J.state.directionalShadowMap,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotShadowMap.value=J.state.spotShadowMap,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMap.value=J.state.pointShadowMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=ct,Q.uniformsList=null,ct}function Za(U){if(U.uniformsList===null){const Z=U.currentProgram.getUniforms();U.uniformsList=Hf.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function Di(U,Z){const oe=Ke.get(U);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function Ds(U,Z,oe,Q,J){Z.isScene!==!0&&(Z=Bt),B.resetTextureUnits();const we=Z.fog,Ne=Q.isMeshStandardMaterial?Z.environment:null,ke=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:uu,qe=(Q.isMeshStandardMaterial?ne:D).get(Q.envMap||Ne),mt=Q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ct=!!oe.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!oe.morphAttributes.position,Lt=!!oe.morphAttributes.normal,yt=!!oe.morphAttributes.color;let an=jo;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(an=O.toneMapping);const sn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Dt=sn!==void 0?sn.length:0,it=Ke.get(Q),fn=x.state.lights;if(ve===!0&&(Ae===!0||U!==E)){const St=U===E&&Q.id===M;Ce.setState(Q,U,St)}let bt=!1;Q.version===it.__version?(it.needsLights&&it.lightsStateVersion!==fn.state.version||it.outputColorSpace!==ke||J.isBatchedMesh&&it.batching===!1||!J.isBatchedMesh&&it.batching===!0||J.isBatchedMesh&&it.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&it.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&it.instancing===!1||!J.isInstancedMesh&&it.instancing===!0||J.isSkinnedMesh&&it.skinning===!1||!J.isSkinnedMesh&&it.skinning===!0||J.isInstancedMesh&&it.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&it.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&it.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&it.instancingMorph===!1&&J.morphTexture!==null||it.envMap!==qe||Q.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ce.numPlanes||it.numIntersection!==Ce.numIntersection)||it.vertexAlphas!==mt||it.vertexTangents!==ct||it.morphTargets!==Ye||it.morphNormals!==Lt||it.morphColors!==yt||it.toneMapping!==an||it.morphTargetsCount!==Dt)&&(bt=!0):(bt=!0,it.__version=Q.version);let Gn=it.currentProgram;bt===!0&&(Gn=ss(Q,Z,J));let os=!1,_n=!1,Wn=!1;const Wt=Gn.getUniforms(),Pn=it.uniforms;if(nt.useProgram(Gn.program)&&(os=!0,_n=!0,Wn=!0),Q.id!==M&&(M=Q.id,_n=!0),os||E!==U){nt.buffers.depth.getReversed()?(Ee.copy(U.projectionMatrix),mT(Ee),gT(Ee),Wt.setValue(X,"projectionMatrix",Ee)):Wt.setValue(X,"projectionMatrix",U.projectionMatrix),Wt.setValue(X,"viewMatrix",U.matrixWorldInverse);const vn=Wt.map.cameraPosition;vn!==void 0&&vn.setValue(X,He.setFromMatrixPosition(U.matrixWorld)),wt.logarithmicDepthBuffer&&Wt.setValue(X,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Wt.setValue(X,"isOrthographic",U.isOrthographicCamera===!0),E!==U&&(E=U,_n=!0,Wn=!0)}if(J.isSkinnedMesh){Wt.setOptional(X,J,"bindMatrix"),Wt.setOptional(X,J,"bindMatrixInverse");const St=J.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),Wt.setValue(X,"boneTexture",St.boneTexture,B))}J.isBatchedMesh&&(Wt.setOptional(X,J,"batchingTexture"),Wt.setValue(X,"batchingTexture",J._matricesTexture,B),Wt.setOptional(X,J,"batchingIdTexture"),Wt.setValue(X,"batchingIdTexture",J._indirectTexture,B),Wt.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&Wt.setValue(X,"batchingColorTexture",J._colorsTexture,B));const Ln=oe.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&dt.update(J,oe,Gn),(_n||it.receiveShadow!==J.receiveShadow)&&(it.receiveShadow=J.receiveShadow,Wt.setValue(X,"receiveShadow",J.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Pn.envMap.value=qe,Pn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&Z.environment!==null&&(Pn.envMapIntensity.value=Z.environmentIntensity),_n&&(Wt.setValue(X,"toneMappingExposure",O.toneMappingExposure),it.needsLights&&$i(Pn,Wn),we&&Q.fog===!0&&De.refreshFogUniforms(Pn,we),De.refreshMaterialUniforms(Pn,Q,q,me,x.state.transmissionRenderTarget[U.id]),Hf.upload(X,Za(it),Pn,B)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Hf.upload(X,Za(it),Pn,B),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Wt.setValue(X,"center",J.center),Wt.setValue(X,"modelViewMatrix",J.modelViewMatrix),Wt.setValue(X,"normalMatrix",J.normalMatrix),Wt.setValue(X,"modelMatrix",J.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const St=Q.uniformsGroups;for(let vn=0,Pt=St.length;vn<Pt;vn++){const _i=St[vn];$.update(_i,Gn),$.bind(_i,Gn)}}return Gn}function $i(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function Ja(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(U,Z,oe){Ke.get(U.texture).__webglTexture=Z,Ke.get(U.depthTexture).__webglTexture=oe;const Q=Ke.get(U);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=oe===void 0,Q.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,Z){const oe=Ke.get(U);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0};const Jo=X.createFramebuffer();this.setRenderTarget=function(U,Z=0,oe=0){R=U,j=Z,L=oe;let Q=!0,J=null,we=!1,Ne=!1;if(U){const qe=Ke.get(U);if(qe.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(X.FRAMEBUFFER,null),Q=!1;else if(qe.__webglFramebuffer===void 0)B.setupRenderTarget(U);else if(qe.__hasExternalTextures)B.rebindTextures(U,Ke.get(U.texture).__webglTexture,Ke.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Ye=U.depthTexture;if(qe.__boundDepthTexture!==Ye){if(Ye!==null&&Ke.has(Ye)&&(U.width!==Ye.image.width||U.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(U)}}const mt=U.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(Ne=!0);const ct=Ke.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ct[Z])?J=ct[Z][oe]:J=ct[Z],we=!0):U.samples>0&&B.useMultisampledRTT(U)===!1?J=Ke.get(U).__webglMultisampledFramebuffer:Array.isArray(ct)?J=ct[oe]:J=ct,C.copy(U.viewport),k.copy(U.scissor),I=U.scissorTest}else C.copy(G).multiplyScalar(q).floor(),k.copy(re).multiplyScalar(q).floor(),I=Pe;if(oe!==0&&(J=Jo),nt.bindFramebuffer(X.FRAMEBUFFER,J)&&Q&&nt.drawBuffers(U,J),nt.viewport(C),nt.scissor(k),nt.setScissorTest(I),we){const qe=Ke.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,qe.__webglTexture,oe)}else if(Ne){const qe=Ke.get(U.texture),mt=Z;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.__webglTexture,oe,mt)}else if(U!==null&&oe!==0){const qe=Ke.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qe.__webglTexture,oe)}M=-1},this.readRenderTargetPixels=function(U,Z,oe,Q,J,we,Ne){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ke.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){nt.bindFramebuffer(X.FRAMEBUFFER,ke);try{const qe=U.texture,mt=qe.format,ct=qe.type;if(!wt.textureFormatReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-Q&&oe>=0&&oe<=U.height-J&&X.readPixels(Z,oe,Q,J,vt.convert(mt),vt.convert(ct),we)}finally{const qe=R!==null?Ke.get(R).__webglFramebuffer:null;nt.bindFramebuffer(X.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(U,Z,oe,Q,J,we,Ne){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ke.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){const qe=U.texture,mt=qe.format,ct=qe.type;if(!wt.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=U.width-Q&&oe>=0&&oe<=U.height-J){nt.bindFramebuffer(X.FRAMEBUFFER,ke);const Ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.bufferData(X.PIXEL_PACK_BUFFER,we.byteLength,X.STREAM_READ),X.readPixels(Z,oe,Q,J,vt.convert(mt),vt.convert(ct),0);const Lt=R!==null?Ke.get(R).__webglFramebuffer:null;nt.bindFramebuffer(X.FRAMEBUFFER,Lt);const yt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await pT(X,yt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,we),X.deleteBuffer(Ye),X.deleteSync(yt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,Z=null,oe=0){U.isTexture!==!0&&(Yl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,U=arguments[1]);const Q=Math.pow(2,-oe),J=Math.floor(U.image.width*Q),we=Math.floor(U.image.height*Q),Ne=Z!==null?Z.x:0,ke=Z!==null?Z.y:0;B.setTexture2D(U,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,Ne,ke,J,we),nt.unbindTexture()};const fo=X.createFramebuffer(),po=X.createFramebuffer();this.copyTextureToTexture=function(U,Z,oe=null,Q=null,J=0,we=null){U.isTexture!==!0&&(Yl("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,U=arguments[1],Z=arguments[2],we=arguments[3]||0,oe=null),we===null&&(J!==0?(Yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=J,J=0):we=0);let Ne,ke,qe,mt,ct,Ye,Lt,yt,an;const sn=U.isCompressedTexture?U.mipmaps[we]:U.image;if(oe!==null)Ne=oe.max.x-oe.min.x,ke=oe.max.y-oe.min.y,qe=oe.isBox3?oe.max.z-oe.min.z:1,mt=oe.min.x,ct=oe.min.y,Ye=oe.isBox3?oe.min.z:0;else{const Ln=Math.pow(2,-J);Ne=Math.floor(sn.width*Ln),ke=Math.floor(sn.height*Ln),U.isDataArrayTexture?qe=sn.depth:U.isData3DTexture?qe=Math.floor(sn.depth*Ln):qe=1,mt=0,ct=0,Ye=0}Q!==null?(Lt=Q.x,yt=Q.y,an=Q.z):(Lt=0,yt=0,an=0);const Dt=vt.convert(Z.format),it=vt.convert(Z.type);let fn;Z.isData3DTexture?(B.setTexture3D(Z,0),fn=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(B.setTexture2DArray(Z,0),fn=X.TEXTURE_2D_ARRAY):(B.setTexture2D(Z,0),fn=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const bt=X.getParameter(X.UNPACK_ROW_LENGTH),Gn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),os=X.getParameter(X.UNPACK_SKIP_PIXELS),_n=X.getParameter(X.UNPACK_SKIP_ROWS),Wn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,sn.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,mt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ct),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ye);const Wt=U.isDataArrayTexture||U.isData3DTexture,Pn=Z.isDataArrayTexture||Z.isData3DTexture;if(U.isDepthTexture){const Ln=Ke.get(U),St=Ke.get(Z),vn=Ke.get(Ln.__renderTarget),Pt=Ke.get(St.__renderTarget);nt.bindFramebuffer(X.READ_FRAMEBUFFER,vn.__webglFramebuffer),nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let _i=0;_i<qe;_i++)Wt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ke.get(U).__webglTexture,J,Ye+_i),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ke.get(Z).__webglTexture,we,an+_i)),X.blitFramebuffer(mt,ct,Ne,ke,Lt,yt,Ne,ke,X.DEPTH_BUFFER_BIT,X.NEAREST);nt.bindFramebuffer(X.READ_FRAMEBUFFER,null),nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||U.isRenderTargetTexture||Ke.has(U)){const Ln=Ke.get(U),St=Ke.get(Z);nt.bindFramebuffer(X.READ_FRAMEBUFFER,fo),nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,po);for(let vn=0;vn<qe;vn++)Wt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ln.__webglTexture,J,Ye+vn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ln.__webglTexture,J),Pn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,St.__webglTexture,we,an+vn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,St.__webglTexture,we),J!==0?X.blitFramebuffer(mt,ct,Ne,ke,Lt,yt,Ne,ke,X.COLOR_BUFFER_BIT,X.NEAREST):Pn?X.copyTexSubImage3D(fn,we,Lt,yt,an+vn,mt,ct,Ne,ke):X.copyTexSubImage2D(fn,we,Lt,yt,mt,ct,Ne,ke);nt.bindFramebuffer(X.READ_FRAMEBUFFER,null),nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pn?U.isDataTexture||U.isData3DTexture?X.texSubImage3D(fn,we,Lt,yt,an,Ne,ke,qe,Dt,it,sn.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(fn,we,Lt,yt,an,Ne,ke,qe,Dt,sn.data):X.texSubImage3D(fn,we,Lt,yt,an,Ne,ke,qe,Dt,it,sn):U.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,we,Lt,yt,Ne,ke,Dt,it,sn.data):U.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,we,Lt,yt,sn.width,sn.height,Dt,sn.data):X.texSubImage2D(X.TEXTURE_2D,we,Lt,yt,Ne,ke,Dt,it,sn);X.pixelStorei(X.UNPACK_ROW_LENGTH,bt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Gn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,os),X.pixelStorei(X.UNPACK_SKIP_ROWS,_n),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Wn),we===0&&Z.generateMipmaps&&X.generateMipmap(fn),nt.unbindTexture()},this.copyTextureToTexture3D=function(U,Z,oe=null,Q=null,J=0){return U.isTexture!==!0&&(Yl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,Q=arguments[1]||null,U=arguments[2],Z=arguments[3],J=arguments[4]||0),Yl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,Z,oe,Q,J)},this.initRenderTarget=function(U){Ke.get(U).__webglFramebuffer===void 0&&B.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?B.setTextureCube(U,0):U.isData3DTexture?B.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?B.setTexture2DArray(U,0):B.setTexture2D(U,0),nt.unbindTexture()},this.resetState=function(){j=0,L=0,R=null,nt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return to}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xt._getUnpackColorSpace()}}const NC=`
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFrequency;
  uniform float uSpeed;
  uniform float uTurbulence;

  varying vec2  vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float w1 = sin(pos.x * uFrequency        + uTime * uSpeed         ) * uAmplitude;
    float w2 = sin(pos.x * uFrequency * 1.7  - uTime * uSpeed * 0.9 + 2.1) * uAmplitude * 0.5;
    float w3 = sin(pos.z * uFrequency * 0.6  + uTime * uSpeed * 1.1  ) * uAmplitude * 0.3;
    float wt = sin((pos.x * 0.7 + pos.z) * uFrequency * 2.0 + uTime * uSpeed * 1.8)
               * uAmplitude * 0.2 * uTurbulence;

    pos.y    = w1 + w2 + w3 + wt;
    vElevation = pos.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,UC=`
  uniform vec3  uDeepColor;
  uniform vec3  uSurfaceColor;
  uniform float uAmplitude;

  varying vec2  vUv;
  varying float vElevation;

  void main() {
    float mix_t = clamp((vElevation / max(uAmplitude, 0.01)) * 0.5 + 0.5, 0.0, 1.0);
    vec3 color  = mix(uDeepColor, uSurfaceColor, mix_t);

    // 波の頂点に白い泡
    float foam  = smoothstep(uAmplitude * 0.65, uAmplitude, vElevation);
    color       = mix(color, vec3(1.0, 1.0, 1.0), foam * 0.85);

    gl_FragColor = vec4(color, 0.92);
  }
`,FC=tt.forwardRef(function({waveParams:e},n){const r=tt.useRef(null),o=tt.useRef({});return tt.useImperativeHandle(n,()=>({getElapsedTime:()=>{var a;return((a=o.current.clock)==null?void 0:a.getElapsedTime())??0}})),tt.useEffect(()=>{const a=r.current;if(!a)return;const c=a.clientWidth||window.innerWidth,f=a.clientHeight||window.innerHeight,d=new zT;d.background=new Vt("#071428"),d.fog=new y0("#071428",18,40);const m=new Ar(60,c/f,.1,100);m.position.set(0,2.8,7),m.lookAt(0,0,0);const v=new DC({canvas:a,antialias:!0});v.setSize(c,f),v.setPixelRatio(Math.min(window.devicePixelRatio,2));const y=new hu(32,32,256,256);y.rotateX(-Math.PI/2);const S={uTime:{value:0},uAmplitude:{value:.5},uFrequency:{value:.5},uSpeed:{value:1},uTurbulence:{value:0},uDeepColor:{value:new Vt("#0d4f8c")},uSurfaceColor:{value:new Vt("#1a9eba")}},A=new so({vertexShader:NC,fragmentShader:UC,uniforms:S,transparent:!0,side:qr}),P=new Kr(y,A);d.add(P);const N=new hu(80,40),T=new v0({color:"#112244",side:qr}),x=new Kr(N,T);x.position.set(0,6,-20),d.add(x),d.add(new YT("#ffffff",.6));const H=new qT("#c8e0ff",1.2);H.position.set(5,10,8),d.add(H);const z=new KT;o.current={uniforms:S,clock:z};const O=()=>{const L=a.clientWidth||window.innerWidth,R=a.clientHeight||window.innerHeight;m.aspect=L/R,m.updateProjectionMatrix(),v.setSize(L,R)};window.addEventListener("resize",O);let K;const j=()=>{K=requestAnimationFrame(j),S.uTime.value=z.getElapsedTime(),v.render(d,m)};return j(),()=>{cancelAnimationFrame(K),window.removeEventListener("resize",O),v.dispose(),y.dispose(),A.dispose()}},[]),tt.useEffect(()=>{const{uniforms:a}=o.current;!a||!e||(a.uAmplitude.value=e.amplitude,a.uFrequency.value=e.frequency,a.uSpeed.value=e.speed,a.uTurbulence.value=e.turbulence,a.uDeepColor.value.set(e.color.deep),a.uSurfaceColor.value.set(e.color.surface))},[e]),Ie.jsx("canvas",{ref:r,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})});function OC({videoRef:t,detect:e,ready:n}){const r=tt.useRef(null),o=tt.useRef(null),a=tt.useRef(null),c=tt.useRef(null);return tt.useEffect(()=>{if(!n)return;const f=r.current;if(!f)return;const d=f.getContext("2d");c.current=new OffscreenCanvas(1,1),a.current=c.current.getContext("2d");const m=v=>{var N;o.current=requestAnimationFrame(m);const y=t.current;if(!y||y.readyState<2||!y.videoWidth)return;const S=y.videoWidth,A=y.videoHeight;(f.width!==S||f.height!==A)&&(f.width=S,f.height=A,c.current.width=S,c.current.height=A);const P=e(v);if(d.clearRect(0,0,S,A),((N=P==null?void 0:P.segmentationMasks)==null?void 0:N.length)>0){const T=P.segmentationMasks[0],x=T.getAsFloat32Array();T.close();const H=a.current,z=H.createImageData(S,A);for(let O=0;O<x.length;O++){const K=Math.round(x[O]*255);z.data[O*4]=K,z.data[O*4+1]=K,z.data[O*4+2]=K,z.data[O*4+3]=255}H.putImageData(z,0,0),d.drawImage(y,0,0,S,A),d.globalCompositeOperation="destination-in",d.drawImage(c.current,0,0),d.globalCompositeOperation="source-over"}else d.drawImage(y,0,0,S,A)};return o.current=requestAnimationFrame(m),()=>{o.current&&cancelAnimationFrame(o.current)}},[n,t,e]),Ie.jsx("canvas",{ref:r,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transform:"scaleX(-1)"}})}const kC=3;function BC({score:t,lives:e,balance:n,waveLabel:r,difficultyMultiplier:o,lastAction:a}){return Ie.jsxs("div",{style:Wl.root,children:[Ie.jsxs("div",{style:{position:"absolute",top:20,left:20},children:[Ie.jsx("div",{style:Wl.label,children:"LIVES"}),Ie.jsx("div",{style:{display:"flex",gap:6,marginTop:4},children:Array.from({length:kC}).map((c,f)=>Ie.jsx("div",{style:{width:18,height:18,borderRadius:"50%",background:f<e?"#ff4444":"#333",boxShadow:f<e?"0 0 8px #ff4444":"none",transition:"background 0.2s"}},f))})]}),Ie.jsxs("div",{style:{position:"absolute",top:18,left:"50%",transform:"translateX(-50%)",textAlign:"center"},children:[Ie.jsx("div",{style:Wl.label,children:"STAGE"}),Ie.jsx("div",{style:{fontSize:16,fontWeight:700,color:"#fff",marginTop:2},children:r})]}),Ie.jsxs("div",{style:{position:"absolute",top:18,right:20,textAlign:"right"},children:[Ie.jsx("div",{style:Wl.label,children:"SCORE"}),Ie.jsx("div",{style:{fontSize:34,fontWeight:900,color:"#fff",lineHeight:1,textShadow:"0 0 18px #00aaff"},children:t.toLocaleString()}),Ie.jsxs("div",{style:{fontSize:12,color:"#00aaff",marginTop:2},children:["x",o.toFixed(1)," 倍率"]})]}),Ie.jsxs("div",{style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",width:240,textAlign:"center"},children:[Ie.jsx("div",{style:{...Wl.label,marginBottom:6},children:"BALANCE"}),Ie.jsx(zC,{balance:n}),!n.boardConnected&&Ie.jsx("div",{style:{fontSize:11,color:"#666",marginTop:4},children:"Wii Board 未接続 (中央固定)"})]}),a&&Ie.jsxs("div",{style:Wl.actionPopup,children:[Ie.jsx("div",{children:a.label}),Ie.jsxs("div",{style:{fontSize:22},children:["+",a.points.toLocaleString()]})]},a.id)]})}function zC({balance:t}){const{copX:e,targetX:n,ok:r}=t,o=Math.min(Math.max((e+1)/2,0),1)*100,a=Math.min(Math.max((n+1)/2,0),1)*100,c=r?"#44ff88":"#ff4444";return Ie.jsxs("div",{style:{position:"relative",height:18,background:"#111",borderRadius:9,border:`2px solid ${c}`,overflow:"hidden"},children:[Ie.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${a-12}%`,width:"24%",background:"rgba(68,255,136,0.15)"}}),Ie.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${a}%`,width:2,background:"#44ff88",opacity:.8}}),Ie.jsx("div",{style:{position:"absolute",top:"50%",left:`${o}%`,transform:"translate(-50%, -50%)",width:14,height:14,borderRadius:"50%",background:c,boxShadow:`0 0 8px ${c}`,transition:"left 0.06s ease-out"}})]})}const Wl={root:{position:"absolute",inset:0,pointerEvents:"none",fontFamily:"system-ui, sans-serif",color:"#fff"},label:{fontSize:11,letterSpacing:"0.08em",color:"#888",textTransform:"uppercase"},actionPopup:{position:"absolute",top:"30%",left:"50%",transform:"translateX(-50%)",textAlign:"center",fontSize:30,fontWeight:900,color:"#ffee00",textShadow:"0 0 24px #ffee00",animation:"popupFade 1s forwards",pointerEvents:"none"}},VC=1406,HC=774;function GC(t){const e=t.topLeft+t.topRight+t.bottomLeft+t.bottomRight;return e===0?{x:0,y:0,total:0}:{x:(t.topRight+t.bottomRight-t.topLeft-t.bottomLeft)/e,y:(t.topLeft+t.topRight-t.bottomLeft-t.bottomRight)/e,total:e}}function WC(){const[t,e]=tt.useState(!1),[n,r]=tt.useState({topLeft:0,topRight:0,bottomLeft:0,bottomRight:0}),[o,a]=tt.useState({x:0,y:0,total:0}),c=tt.useRef({x:0,y:0,total:0}),f=tt.useRef(null),d=tt.useCallback(async()=>{if(!("hid"in navigator))return!1;try{const v=await navigator.hid.requestDevice({filters:[{vendorId:VC,productId:HC}]});if(!v.length)return!1;const y=v[0];return f.current=y,y.opened||await y.open(),y.addEventListener("inputreport",({reportId:S,data:A})=>{if(S!==50||A.byteLength<10)return;const P=new DataView(A.buffer,2),N={topRight:P.getUint16(0,!1),bottomRight:P.getUint16(2,!1),topLeft:P.getUint16(4,!1),bottomLeft:P.getUint16(6,!1)},T=GC(N);c.current=T,r(N),a(T)}),await y.sendReport(21,new Uint8Array([0])),await y.sendReport(18,new Uint8Array([4,50])),e(!0),!0}catch(v){return console.error("WiiBoard:",v),!1}},[]),m=tt.useCallback(async()=>{const v=f.current;v&&(v.opened&&await v.close(),f.current=null,e(!1))},[]);return{connected:t,sensors:n,cop:o,copRef:c,connect:d,disconnect:m}}var fu=typeof self<"u"?self:{};function Nc(t,e){e:{for(var n=["CLOSURE_FLAGS"],r=fu,o=0;o<n.length;o++)if((r=r[n[o]])==null){n=null;break e}n=r}return(t=n&&n[t])!=null?t:e}function Sa(){throw Error("Invalid UTF8")}function B2(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Pf,Bm;const jC=typeof TextDecoder<"u";let XC;const qC=typeof TextEncoder<"u";function KS(t){if(qC)t=(XC||(XC=new TextEncoder)).encode(t);else{let n=0;const r=new Uint8Array(3*t.length);for(let o=0;o<t.length;o++){var e=t.charCodeAt(o);if(e<128)r[n++]=e;else{if(e<2048)r[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&o<t.length){const a=t.charCodeAt(++o);if(a>=56320&&a<=57343){e=1024*(e-55296)+a-56320+65536,r[n++]=e>>18|240,r[n++]=e>>12&63|128,r[n++]=e>>6&63|128,r[n++]=63&e|128;continue}o--}e=65533}r[n++]=e>>12|224,r[n++]=e>>6&63|128}r[n++]=63&e|128}}t=n===r.length?r:r.subarray(0,n)}return t}function ZS(t){fu.setTimeout((()=>{throw t}),0)}var Vg,YC=Nc(610401301,!1),z2=Nc(748402147,!0),E0=Nc(824648567,!0),M0=Nc(824656860,Nc(1,!0));function V2(){var t=fu.navigator;return t&&(t=t.userAgent)?t:""}const H2=fu.navigator;function cd(t){return cd[" "](t),t}Vg=H2&&H2.userAgentData||null,cd[" "]=function(){};const JS={};let wc=null;function $C(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const r=new Uint8Array(n);let o=0;return(function(a,c){function f(m){for(;d<a.length;){const v=a.charAt(d++),y=wc[v];if(y!=null)return y;if(!/^[\s\xa0]*$/.test(v))throw Error("Unknown base64 encoding at char: "+v)}return m}QS();let d=0;for(;;){const m=f(-1),v=f(0),y=f(64),S=f(64);if(S===64&&m===-1)break;c(m<<2|v>>4),y!=64&&(c(v<<4&240|y>>2),S!=64&&c(y<<6&192|S))}})(t,(function(a){r[o++]=a})),o!==n?r.subarray(0,o):r}function QS(){if(!wc){wc={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const r=t.concat(e[n].split(""));JS[n]=r;for(let o=0;o<r.length;o++){const a=r[o];wc[a]===void 0&&(wc[a]=o)}}}}var KC=typeof Uint8Array<"u",ex=!(!(YC&&Vg&&Vg.brands.length>0)&&(V2().indexOf("Trident")!=-1||V2().indexOf("MSIE")!=-1))&&typeof btoa=="function";const G2=/[-_.]/g,ZC={"-":"+",_:"/",".":"="};function JC(t){return ZC[t]||""}function tx(t){if(!ex)return $C(t);t=G2.test(t)?t.replace(G2,JC):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function T0(t){return KC&&t!=null&&t instanceof Uint8Array}var du={};function Ha(){return QC||(QC=new ws(null,du))}function w0(t){nx(du);var e=t.g;return(e=e==null||T0(e)?e:typeof e=="string"?tx(e):null)==null?e:t.g=e}var ws=class{h(){return new Uint8Array(w0(this)||0)}constructor(t,e){if(nx(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let QC,eb;function nx(t){if(t!==du)throw Error("illegal external caller")}function ix(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Hg(t){return ix(t=Error(t),"warning"),t}function pu(t,e){if(t!=null){var n=eb??(eb={}),r=n[t]||0;r>=e||(n[t]=r+1,ix(t=Error(),"incident"),ZS(t))}}function Au(){return typeof BigInt=="function"}var Ru=typeof Symbol=="function"&&typeof Symbol()=="symbol";function As(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var tb=As("jas",void 0,!0),W2=As(void 0,"0di"),Ec=As(void 0,"1oa"),or=As(void 0,Symbol()),nb=As(void 0,"0ub"),ib=As(void 0,"0ubs"),Gg=As(void 0,"0ubsb"),rb=As(void 0,"0actk"),mu=As("m_m","Pa",!0),j2=As();const rx={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},sx=Object.defineProperties,rt=Ru?tb:"Ga";var qa;const X2=[];function jc(t,e){Ru||rt in t||sx(t,rx),t[rt]|=e}function Jn(t,e){Ru||rt in t||sx(t,rx),t[rt]=e}function Xc(t){return jc(t,34),t}function Uc(t){return jc(t,8192),t}Jn(X2,7),qa=Object.freeze(X2);var gu={};function lr(t,e){return e===void 0?t.h!==Ga&&!!(2&(0|t.v[rt])):!!(2&e)&&t.h!==Ga}const Ga={};function A0(t,e){if(t!=null){if(typeof t=="string")t=t?new ws(t,du):Ha();else if(t.constructor!==ws)if(T0(t))t=t.length?new ws(new Uint8Array(t),du):Ha();else{if(!e)throw Error();t=void 0}}return t}let q2=class{constructor(e,n,r){this.g=e,this.h=n,this.l=r}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}};var sb=Object.freeze({});function ox(t,e,n){const r=128&e?0:-1,o=t.length;var a;(a=!!o)&&(a=(a=t[o-1])!=null&&typeof a=="object"&&a.constructor===Object);const c=o+(a?-1:0);for(e=128&e?1:0;e<c;e++)n(e-r,t[e]);if(a){t=t[o-1];for(const f in t)!isNaN(f)&&n(+f,t[f])}}var ax={};function Cu(t){return 128&t?ax:void 0}function hd(t){return t.Na=!0,t}var ob=hd((t=>typeof t=="number")),Y2=hd((t=>typeof t=="string")),ab=hd((t=>typeof t=="boolean")),fd=typeof fu.BigInt=="function"&&typeof fu.BigInt(0)=="bigint";function ar(t){var e=t;if(Y2(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(ob(e)&&!Number.isSafeInteger(e))throw Error(String(e));return fd?BigInt(t):t=ab(t)?t?"1":"0":Y2(t)?t.trim()||"0":String(t)}var Wg=hd((t=>fd?t>=ub&&t<=hb:t[0]==="-"?$2(t,lb):$2(t,cb)));const lb=Number.MIN_SAFE_INTEGER.toString(),ub=fd?BigInt(Number.MIN_SAFE_INTEGER):void 0,cb=Number.MAX_SAFE_INTEGER.toString(),hb=fd?BigInt(Number.MAX_SAFE_INTEGER):void 0;function $2(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const r=t[n],o=e[n];if(r>o)return!1;if(r<o)return!0}}const fb=typeof Uint8Array.prototype.slice=="function";let db,En=0,kn=0;function K2(t){const e=t>>>0;En=e,kn=(t-e)/4294967296>>>0}function _u(t){if(t<0){K2(-t);const[e,n]=P0(En,kn);En=e>>>0,kn=n>>>0}else K2(t)}function R0(t){const e=db||(db=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),kn=0,En=e.getUint32(0,!0)}function jg(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Fc(t,e)}function pb(t,e){return ar(Au()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Fc(t,e))}function C0(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=jg(t,e))=="number"?n?-t:t:n?"-"+t:t}function lx(t,e){return Au()?ar(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):ar(b0(t,e))}function Fc(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Au()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Z2(n)+Z2(t));return n}function Z2(t){return t=String(t),"0000000".slice(t.length)+t}function b0(t,e){if(2147483648&e)if(Au())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,r]=P0(t,e);t="-"+Fc(n,r)}else t=Fc(t,e);return t}function dd(t){if(t.length<16)_u(Number(t));else if(Au())t=BigInt(t),En=Number(t&BigInt(4294967295))>>>0,kn=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");kn=En=0;const n=t.length;for(let r=e,o=(n-e)%6+e;o<=n;r=o,o+=6){const a=Number(t.slice(r,o));kn*=1e6,En=1e6*En+a,En>=4294967296&&(kn+=Math.trunc(En/4294967296),kn>>>=0,En>>>=0)}if(e){const[r,o]=P0(En,kn);En=r,kn=o}}}function P0(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Qr(t){return Array.prototype.slice.call(t)}const qc=typeof BigInt=="function"?BigInt.asIntN:void 0,mb=typeof BigInt=="function"?BigInt.asUintN:void 0,Wa=Number.isSafeInteger,pd=Number.isFinite,vu=Math.trunc,gb=ar(0);function Ac(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function Es(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Oc(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function ux(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const _b=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Yc(t){switch(typeof t){case"bigint":return!0;case"number":return pd(t);case"string":return _b.test(t);default:return!1}}function bu(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return pd(t)?0|t:void 0}function cx(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return pd(t)?t>>>0:void 0}function hx(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(dd(t),b0(En,kn))}function L0(t){return t=vu(t),Wa(t)||(_u(t),t=C0(En,kn)),t}function fx(t){var e=vu(Number(t));return Wa(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),hx(t))}function dx(t){var e=vu(Number(t));return Wa(e)?ar(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Au()?ar(qc(64,BigInt(t))):ar(hx(t)))}function px(t){return Wa(t)?t=ar(L0(t)):(t=vu(t),Wa(t)?t=String(t):(_u(t),t=b0(En,kn)),t=ar(t)),t}function vb(t){return t==null?t:typeof t=="bigint"?(Wg(t)?t=Number(t):(t=qc(64,t),t=Wg(t)?Number(t):String(t)),t):Yc(t)?typeof t=="number"?L0(t):fx(t):void 0}function $f(t){const e=typeof t;return t==null?t:e==="bigint"?ar(qc(64,t)):Yc(t)?e==="string"?dx(t):px(t):void 0}function mx(t){if(typeof t!="string")throw Error();return t}function $c(t){if(t!=null&&typeof t!="string")throw Error();return t}function gi(t){return t==null||typeof t=="string"?t:void 0}function I0(t,e,n,r){return t!=null&&t[mu]===gu?t:Array.isArray(t)?((r=(n=0|t[rt])|32&r|2&r)!==n&&Jn(t,r),new e(t)):(n?2&r?((t=e[W2])||(Xc((t=new e).v),t=e[W2]=t),e=t):e=new e:e=void 0,e)}function yb(t,e,n){if(e)e:{if(!Yc(e=t))throw Hg("int64");switch(typeof e){case"string":e=dx(e);break e;case"bigint":e=ar(qc(64,e));break e;default:e=px(e)}}else e=$f(t);return(t=e)==null?n?gb:void 0:t}const Sb={};let xb=(function(){try{return cd(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class zm{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const Eb=xb?(Object.setPrototypeOf(zm.prototype,Map.prototype),Object.defineProperties(zm.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),zm):class extends Map{constructor(){super()}};function J2(t){return t}function Vm(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var oo=class extends Eb{constructor(t,e,n=J2,r=J2){super(),this.J=0|t[rt],this.K=e,this.S=n,this.fa=this.K?Mb:r;for(let o=0;o<t.length;o++){const a=t[o],c=n(a[0],!1,!0);let f=a[1];e?f===void 0&&(f=null):f=r(a[1],!1,!0,void 0,void 0,this.J),super.set(c,f)}}V(t){return Uc(Array.from(super.entries(),t))}clear(){Vm(this),super.clear()}delete(t){return Vm(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new q2(t,Tb,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new q2(t,oo.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,r,o)=>{t.call(e,o.get(r),r,o)})):super.forEach(t,e)}set(t,e){return Vm(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function Mb(t,e,n,r,o,a){return t=I0(t,r,n,a),o&&(t=N0(t)),t}function Tb(t){return[t,this.get(t)]}let wb;function Q2(){return wb||(wb=new oo(Xc([]),void 0,void 0,void 0,Sb))}function md(t){return or?t[or]:void 0}function Kf(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}oo.prototype.toJSON=void 0;var Xg=class{};const Ab={Ka:!0};function Rb(t,e){e<100||pu(ib,1)}function gd(t,e,n,r){const o=r!==void 0;r=!!r;var a,c=or;!o&&Ru&&c&&(a=t[c])&&Kf(a,Rb),c=[];var f=t.length;let d;a=4294967295;let m=!1;const v=!!(64&e),y=v?128&e?0:-1:void 0;1&e||(d=f&&t[f-1],d!=null&&typeof d=="object"&&d.constructor===Object?a=--f:d=void 0,!v||128&e||o||(m=!0,a=a-y+y)),e=void 0;for(var S=0;S<f;S++){let A=t[S];if(A!=null&&(A=n(A,r))!=null)if(v&&S>=a){const P=S-y;(e??(e={}))[P]=A}else c[S]=A}if(d)for(let A in d){if((f=d[A])==null||(f=n(f,r))==null)continue;let P;S=+A,v&&!Number.isNaN(S)&&(P=S+y)<a?c[P]=f:(e??(e={}))[A]=f}return e&&(m?c.push(e):c[a]=e),o&&or&&(t=md(t))&&t instanceof Xg&&(c[or]=(function(A){const P=new Xg;return Kf(A,((N,T,x)=>{P[T]=Qr(x)})),P.da=A.da,P})(t)),c}function Cb(t){return t[0]=kc(t[0]),t[1]=kc(t[1]),t}function kc(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Wg(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[rt];return t.length===0&&1&e?void 0:gd(t,e,kc)}if(t!=null&&t[mu]===gu)return gx(t);if(t instanceof ws){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(ex){for(var n="",r=0,o=e.length-10240;r<o;)n+=String.fromCharCode.apply(null,e.subarray(r,r+=10240));n+=String.fromCharCode.apply(null,r?e.subarray(r):e),e=btoa(n)}else{n===void 0&&(n=0),QS(),n=JS[n],r=Array(Math.floor(e.length/3)),o=n[64]||"";let m=0,v=0;for(;m<e.length-2;m+=3){var a=e[m],c=e[m+1],f=e[m+2],d=n[a>>2];a=n[(3&a)<<4|c>>4],c=n[(15&c)<<2|f>>6],f=n[63&f],r[v++]=d+a+c+f}switch(d=0,f=o,e.length-m){case 2:f=n[(15&(d=e[m+1]))<<2]||o;case 1:e=e[m],r[v]=n[e>>2]+n[(3&e)<<4|d>>4]+f+o}e=r.join("")}t=t.g=e}return t}return t instanceof oo?t=t.size!==0?t.V(Cb):void 0:void 0}return t}function gx(t){return gd(t=t.v,0|t[rt],kc)}let bb,Pb;function Da(t,e){return _x(t,e[0],e[1])}function _x(t,e,n,r=0){if(t==null){var o=32;n?(t=[n],o|=128):t=[],e&&(o=-16760833&o|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(o=0|t[rt],z2&&1&o)throw Error("rfarr");if(2048&o&&!(2&o)&&(function(){if(z2)throw Error("carr");pu(rb,5)})(),256&o)throw Error("farr");if(64&o)return(o|r)!==o&&Jn(t,o|r),t;if(n&&(o|=128,n!==t[0]))throw Error("mid");e:{o|=64;var a=(n=t).length;if(a){var c=a-1;const d=n[c];if(d!=null&&typeof d=="object"&&d.constructor===Object){if((c-=e=128&o?0:-1)>=1024)throw Error("pvtlmt");for(var f in d)(a=+f)<c&&(n[a+e]=d[f],delete d[f]);o=-16760833&o|(1023&c)<<14;break e}}if(e){if((f=Math.max(e,a-(128&o?0:-1)))>1024)throw Error("spvt");o=-16760833&o|(1023&f)<<14}}}return Jn(t,64|o|r),t}function Lb(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[rt];return t.length===0&&1&n?void 0:ey(t,n,e)}if(t!=null&&t[mu]===gu)return ty(t);if(t instanceof oo){if(2&(e=t.J))return t;if(!t.size)return;if(n=Xc(t.V()),t.K)for(t=0;t<n.length;t++){const r=n[t];let o=r[1];o=o==null||typeof o!="object"?void 0:o!=null&&o[mu]===gu?ty(o):Array.isArray(o)?ey(o,0|o[rt],!!(32&e)):void 0,r[1]=o}return n}return t instanceof ws?t:void 0}function ey(t,e,n){return 2&e||(!n||4096&e||16&e?t=Pu(t,e,!1,n&&!(16&e)):(jc(t,34),4&e&&Object.freeze(t))),t}function D0(t,e,n){return t=new t.constructor(e),n&&(t.h=Ga),t.m=Ga,t}function ty(t){const e=t.v,n=0|e[rt];return lr(t,n)?t:U0(t,e,n)?D0(t,e):Pu(e,n)}function Pu(t,e,n,r){return r??(r=!!(34&e)),t=gd(t,e,Lb,r),r=32,n&&(r|=2),Jn(t,e=16769217&e|r),t}function N0(t){const e=t.v,n=0|e[rt];return lr(t,n)?U0(t,e,n)?D0(t,e,!0):new t.constructor(Pu(e,n,!1)):t}function Lu(t){if(t.h!==Ga)return!1;var e=t.v;return jc(e=Pu(e,0|e[rt]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Iu(t){if(!Lu(t)&&lr(t,0|t.v[rt]))throw Error()}function Ya(t,e){e===void 0&&(e=0|t[rt]),32&e&&!(4096&e)&&Jn(t,4096|e)}function U0(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Jn(e,2|n),t.h=Ga,!0)}const Ib=ar(0),Bo={};function mn(t,e,n,r,o){if((e=ao(t.v,e,n,o))!==null||r&&t.m!==Ga)return e}function ao(t,e,n,r){if(e===-1)return null;const o=e+(n?0:-1),a=t.length-1;let c,f;if(!(a<1+(n?0:-1))){if(o>=a)if(c=t[a],c!=null&&typeof c=="object"&&c.constructor===Object)n=c[e],f=!0;else{if(o!==a)return;n=c}else n=t[o];if(r&&n!=null){if((r=r(n))==null)return r;if(!Object.is(r,n))return f?c[e]=r:t[o]=r,r}return n}}function rn(t,e,n,r){Iu(t),Yn(t=t.v,0|t[rt],e,n,r)}function Yn(t,e,n,r,o){const a=n+(o?0:-1);var c=t.length-1;if(c>=1+(o?0:-1)&&a>=c){const f=t[c];if(f!=null&&typeof f=="object"&&f.constructor===Object)return f[n]=r,e}return a<=c?(t[a]=r,e):(r!==void 0&&(n>=(c=(e??(e=0|t[rt]))>>14&1023||536870912)?r!=null&&(t[c+(o?0:-1)]={[n]:r}):t[a]=r),e)}function ba(){return sb===void 0?2:4}function Pa(t,e,n,r,o){let a=t.v,c=0|a[rt];r=lr(t,c)?1:r,o=!!o||r===3,r===2&&Lu(t)&&(a=t.v,c=0|a[rt]);let f=(t=F0(a,e))===qa?7:0|t[rt],d=O0(f,c);var m=!(4&d);if(m){4&d&&(t=Qr(t),f=0,d=Ua(d,c),c=Yn(a,c,e,t));let v=0,y=0;for(;v<t.length;v++){const S=n(t[v]);S!=null&&(t[y++]=S)}y<v&&(t.length=y),n=-513&(4|d),d=n&=-1025,d&=-4097}return d!==f&&(Jn(t,d),2&d&&Object.freeze(t)),vx(t,d,a,c,e,r,m,o)}function vx(t,e,n,r,o,a,c,f){let d=e;return a===1||a===4&&(2&e||!(16&e)&&32&r)?Na(e)||((e|=!t.length||c&&!(4096&e)||32&r&&!(4096&e||16&e)?2:256)!==d&&Jn(t,e),Object.freeze(t)):(a===2&&Na(e)&&(t=Qr(t),d=0,e=Ua(e,r),r=Yn(n,r,o,t)),Na(e)||(f||(e|=16),e!==d&&Jn(t,e))),2&e||!(4096&e||16&e)||Ya(n,r),t}function F0(t,e,n){return t=ao(t,e,n),Array.isArray(t)?t:qa}function O0(t,e){return 2&e&&(t|=2),1|t}function Na(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function yx(t){return A0(t,!0)}function Sx(t){t=Qr(t);for(let e=0;e<t.length;e++){const n=t[e]=Qr(t[e]);Array.isArray(n[1])&&(n[1]=Xc(n[1]))}return Uc(t)}function Vo(t,e,n,r){Iu(t),Yn(t=t.v,0|t[rt],e,(r==="0"?Number(n)===0:n===r)?void 0:n)}function Du(t,e,n){if(2&e)throw Error();const r=Cu(e);let o=F0(t,n,r),a=o===qa?7:0|o[rt],c=O0(a,e);return(2&c||Na(c)||16&c)&&(c===a||Na(c)||Jn(o,c),o=Qr(o),a=0,c=Ua(c,e),Yn(t,e,n,o,r)),c&=-13,c!==a&&Jn(o,c),o}function Hm(t,e){var n=f3;return B0(k0(t=t.v),t,void 0,n)===e?e:-1}function k0(t){if(Ru)return t[Ec]??(t[Ec]=new Map);if(Ec in t)return t[Ec];const e=new Map;return Object.defineProperty(t,Ec,{value:e}),e}function xx(t,e,n,r,o){const a=k0(t),c=B0(a,t,e,n,o);return c!==r&&(c&&(e=Yn(t,e,c,void 0,o)),a.set(n,r)),e}function B0(t,e,n,r,o){let a=t.get(r);if(a!=null)return a;a=0;for(let c=0;c<r.length;c++){const f=r[c];ao(e,f,o)!=null&&(a!==0&&(n=Yn(e,n,a,void 0,o)),a=f)}return t.set(r,a),a}function z0(t,e,n){let r=0|t[rt];const o=Cu(r),a=ao(t,n,o);let c;if(a!=null&&a[mu]===gu){if(!lr(a))return Lu(a),a.v;c=a.v}else Array.isArray(a)&&(c=a);if(c){const f=0|c[rt];2&f&&(c=Pu(c,f))}return c=Da(c,e),c!==a&&Yn(t,r,n,c,o),c}function Ex(t,e,n,r,o){let a=!1;if((r=ao(t,r,o,(c=>{const f=I0(c,n,!1,e);return a=f!==c&&f!=null,f})))!=null)return a&&!lr(r)&&Ya(t,e),r}function qt(t,e,n,r){let o=t.v,a=0|o[rt];if((e=Ex(o,a,e,n,r))==null)return e;if(a=0|o[rt],!lr(t,a)){const c=N0(e);c!==e&&(Lu(t)&&(o=t.v,a=0|o[rt]),a=Yn(o,a,n,e=c,r),Ya(o,a))}return e}function Mx(t,e,n,r,o,a,c,f){var d=lr(t,n);a=d?1:a,c=!!c||a===3,d=f&&!d,(a===2||d)&&Lu(t)&&(n=0|(e=t.v)[rt]);var m=(t=F0(e,o))===qa?7:0|t[rt],v=O0(m,n);if(f=!(4&v)){var y=t,S=n;const A=!!(2&v);A&&(S|=2);let P=!A,N=!0,T=0,x=0;for(;T<y.length;T++){const H=I0(y[T],r,!1,S);if(H instanceof r){if(!A){const z=lr(H);P&&(P=!z),N&&(N=z)}y[x++]=H}}x<T&&(y.length=x),v|=4,v=N?-4097&v:4096|v,v=P?8|v:-9&v}if(v!==m&&(Jn(t,v),2&v&&Object.freeze(t)),d&&!(8&v||!t.length&&(a===1||a===4&&(2&v||!(16&v)&&32&n)))){for(Na(v)&&(t=Qr(t),v=Ua(v,n),n=Yn(e,n,o,t)),r=t,d=v,m=0;m<r.length;m++)(y=r[m])!==(v=N0(y))&&(r[m]=v);d|=8,Jn(t,v=d=r.length?4096|d:-4097&d)}return vx(t,v,e,n,o,a,f,c)}function lo(t,e,n){const r=t.v;return Mx(t,r,0|r[rt],e,n,ba(),!1,!0)}function Tx(t){return t==null&&(t=void 0),t}function pt(t,e,n,r,o){return rn(t,n,r=Tx(r),o),r&&!lr(r)&&Ya(t.v),t}function Rc(t,e,n,r){e:{var o=r=Tx(r);Iu(t);const a=t.v;let c=0|a[rt];if(o==null){const f=k0(a);if(B0(f,a,c,n)!==e)break e;f.set(n,0)}else c=xx(a,c,n,e);Yn(a,c,e,o)}r&&!lr(r)&&Ya(t.v)}function Ua(t,e){return-273&(2&e?2|t:-3&t)}function V0(t,e,n,r){var o=r;Iu(t),t=Mx(t,r=t.v,0|r[rt],n,e,2,!0),o=o??new n,t.push(o),e=n=t===qa?7:0|t[rt],(o=lr(o))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Jn(t,n),o||Ya(r)}function Rr(t,e,n){return bu(mn(t,e,void 0,n))}function wx(t){return(M0?mn(t,2,void 0,void 0,$f):$f(mn(t,2)))??Ib}function Nn(t,e){return mn(t,e,void 0,void 0,Es)??0}function uo(t,e,n){if(n!=null){if(typeof n!="number"||!pd(n))throw Hg("int32");n|=0}rn(t,e,n)}function ut(t,e,n){rn(t,e,Ac(n))}function ur(t,e,n){Vo(t,e,$c(n),"")}function Zf(t,e,n){{Iu(t);const c=t.v;let f=0|c[rt];if(n==null)Yn(c,f,e);else{var r=t=n===qa?7:0|n[rt],o=Na(t),a=o||Object.isFrozen(n);for(o||(t=0),a||(n=Qr(n),r=0,t=Ua(t,f),a=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??(M0?1024:0),o=0;o<n.length;o++){const d=n[o],m=mx(d);Object.is(d,m)||(a&&(n=Qr(n),r=0,t=Ua(t,f),a=!1),n[o]=m)}t!==r&&(a&&(n=Qr(n),t=Ua(t,f)),Jn(n,t)),Yn(c,f,e,n)}}}function _d(t,e,n){Iu(t),Pa(t,e,gi,2,!0).push(mx(n))}var jl=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function H0(t,e){if(typeof t=="string")return new jl(tx(t),e);if(Array.isArray(t))return new jl(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new jl(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new jl(t,!1);if(t.constructor===ws)return e=w0(t)||new Uint8Array(0),new jl(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new jl(t,!1);throw Error()}function yu(t,e){let n,r=0,o=0,a=0;const c=t.h;let f=t.g;do n=c[f++],r|=(127&n)<<a,a+=7;while(a<32&&128&n);if(a>32)for(o|=(127&n)>>4,a=3;a<32&&128&n;a+=7)n=c[f++],o|=(127&n)<<a;if(Fa(t,f),!(128&n))return e(r>>>0,o>>>0);throw Error()}function G0(t){let e=0,n=t.g;const r=n+10,o=t.h;for(;n<r;){const a=o[n++];if(e|=a,(128&a)==0)return Fa(t,n),!!(127&e)}throw Error()}function $o(t){const e=t.h;let n=t.g,r=e[n++],o=127&r;if(128&r&&(r=e[n++],o|=(127&r)<<7,128&r&&(r=e[n++],o|=(127&r)<<14,128&r&&(r=e[n++],o|=(127&r)<<21,128&r&&(r=e[n++],o|=r<<28,128&r&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Fa(t,n),o}function co(t){return $o(t)>>>0}function Jf(t){var e=t.h;const n=t.g;var r=e[n],o=e[n+1];const a=e[n+2];return e=e[n+3],Fa(t,t.g+4),t=2*((o=(r<<0|o<<8|a<<16|e<<24)>>>0)>>31)+1,r=o>>>23&255,o&=8388607,r==255?o?NaN:t*(1/0):r==0?1401298464324817e-60*t*o:t*Math.pow(2,r-150)*(o+8388608)}function Db(t){return $o(t)}function Fa(t,e){if(t.g=e,e>t.l)throw Error()}function Ax(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Rx(t,e){if(e==0)return Ha();var n=Ax(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):fb?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Ha():new ws(n,du)}var ny=[];function Cx(t,e,n,r){if(Qf.length){const o=Qf.pop();return o.o(r),o.g.init(t,e,n,r),o}return new Nb(t,e,n,r)}function bx(t){t.g.clear(),t.l=-1,t.h=-1,Qf.length<100&&Qf.push(t)}function Px(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=co(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Gf(t){switch(t.h){case 0:t.h!=0?Gf(t):G0(t.g);break;case 1:Fa(t=t.g,t.g+8);break;case 2:if(t.h!=2)Gf(t);else{var e=co(t.g);Fa(t=t.g,t.g+e)}break;case 5:Fa(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Px(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Gf(t)}break;default:throw Error()}}function Kc(t,e,n){const r=t.g.l;var o=co(t.g);let a=(o=t.g.g+o)-r;if(a<=0&&(t.g.l=o,n(e,t,void 0,void 0,void 0),a=o-t.g.g),a)throw Error();return t.g.g=o,t.g.l=r,e}function W0(t){var e=co(t.g),n=Ax(t=t.g,e);if(t=t.h,jC){var r,o=t;(r=Bm)||(r=Bm=new TextDecoder("utf-8",{fatal:!0})),e=n+e,o=n===0&&e===o.length?o:o.subarray(n,e);try{var a=r.decode(o)}catch(f){if(Pf===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),Pf=!0}catch{Pf=!1}}throw!Pf&&(Bm=void 0),f}}else{e=(a=n)+e,n=[];let f,d=null;for(;a<e;){var c=t[a++];c<128?n.push(c):c<224?a>=e?Sa():(f=t[a++],c<194||(192&f)!=128?(a--,Sa()):n.push((31&c)<<6|63&f)):c<240?a>=e-1?Sa():(f=t[a++],(192&f)!=128||c===224&&f<160||c===237&&f>=160||(192&(r=t[a++]))!=128?(a--,Sa()):n.push((15&c)<<12|(63&f)<<6|63&r)):c<=244?a>=e-2?Sa():(f=t[a++],(192&f)!=128||f-144+(c<<28)>>30!=0||(192&(r=t[a++]))!=128||(192&(o=t[a++]))!=128?(a--,Sa()):(c=(7&c)<<18|(63&f)<<12|(63&r)<<6|63&o,c-=65536,n.push(55296+(c>>10&1023),56320+(1023&c)))):Sa(),n.length>=8192&&(d=B2(d,n),n.length=0)}a=B2(d,n)}return a}function Lx(t){const e=co(t.g);return Rx(t.g,e)}function vd(t,e,n){var r=co(t.g);for(r=t.g.g+r;t.g.g<r;)n.push(e(t.g))}var Nb=class{constructor(t,e,n,r){if(ny.length){const o=ny.pop();o.init(t,e,n,r),t=o}else t=new class{constructor(o,a,c,f){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(o,a,c,f)}init(o,a,c,{Y:f=!1,ea:d=!1}={}){this.Y=f,this.ea=d,o&&(o=H0(o,this.ea),this.h=o.buffer,this.j=o.g,this.m=a||0,this.l=c!==void 0?this.m+c:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,r);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(r)}o({ha:t=!1}={}){this.ha=t}},Qf=[];function iy(t){return t?/^\d+$/.test(t)?(dd(t),new qg(En,kn)):null:Ub||(Ub=new qg(0,0))}var qg=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Ub;function ry(t){return t?/^-?\d+$/.test(t)?(dd(t),new Yg(En,kn)):null:Fb||(Fb=new Yg(0,0))}var Yg=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Fb;function eu(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Nu(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function yd(t,e){if(e>=0)Nu(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function j0(t){var e=En;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Su(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Cr(t,e,n){Nu(t.g,8*e+n)}function X0(t,e){return Cr(t,e,2),e=t.g.end(),Su(t,e),e.push(t.h),e}function q0(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Sd(t,e,n){Cr(t,e,2),Nu(t.g,n.length),Su(t,t.g.end()),Su(t,n)}function ed(t,e,n,r){n!=null&&(e=X0(t,e),r(n,t),q0(t,e))}function Rs(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Y0=Rs(),Ix=Rs(),$0=Rs(),K0=Rs(),Dx=Rs(),Nx=Rs(),Ob=Rs(),xd=Rs(),Ux=Rs(),Fx=Rs();function Cs(t,e,n){var r=t.v;or&&or in r&&(r=r[or])&&delete r[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var st=class{constructor(t,e){this.v=_x(t,e,void 0,2048)}toJSON(){return gx(this)}j(){var o;var t=yP,e=this.v,n=t.g,r=or;if(Ru&&r&&((o=e[r])==null?void 0:o[n])!=null&&pu(nb,3),e=t.g,j2&&or&&j2===void 0&&(r=(n=this.v)[or])&&(r=r.da))try{r(n,e,Ab)}catch(a){ZS(a)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[rt];return U0(this,t,e)?D0(this,t,!0):new this.constructor(Pu(t,e,!1))}};st.prototype[mu]=gu,st.prototype.toString=function(){return this.v.toString()};var Uu=class{constructor(t,e,n){this.g=t,this.h=e,t=Y0,this.l=!!t&&n===t||!1}};function Ed(t,e){return new Uu(t,e,Y0)}function Ox(t,e,n,r,o){ed(t,n,Vx(e,r),o)}const kb=Ed((function(t,e,n,r,o){return t.h===2&&(Kc(t,z0(e,r,n),o),!0)}),Ox),Bb=Ed((function(t,e,n,r,o){return t.h===2&&(Kc(t,z0(e,r,n),o),!0)}),Ox);var Md=Symbol(),Td=Symbol(),$g=Symbol(),sy=Symbol(),oy=Symbol();let kx,Bx;function $a(t,e,n,r){var o=r[t];if(o)return o;(o={}).qa=r,o.T=(function(y){switch(typeof y){case"boolean":return bb||(bb=[0,void 0,!0]);case"number":return y>0?void 0:y===0?Pb||(Pb=[0,void 0]):[-y,void 0];case"string":return[0,y];case"object":return y}})(r[0]);var a=r[1];let c=1;a&&a.constructor===Object&&(o.ba=a,typeof(a=r[++c])=="function"&&(o.ma=!0,kx??(kx=a),Bx??(Bx=r[c+1]),a=r[c+=2]));const f={};for(;a&&Array.isArray(a)&&a.length&&typeof a[0]=="number"&&a[0]>0;){for(var d=0;d<a.length;d++)f[a[d]]=a;a=r[++c]}for(d=1;a!==void 0;){let y;typeof a=="number"&&(d+=a,a=r[++c]);var m=void 0;if(a instanceof Uu?y=a:(y=kb,c--),y==null?void 0:y.l){a=r[++c],m=r;var v=c;typeof a=="function"&&(a=a(),m[v]=a),m=a}for(v=d+1,typeof(a=r[++c])=="number"&&a<0&&(v-=a,a=r[++c]);d<v;d++){const S=f[d];m?n(o,d,y,m,S):e(o,d,y,S)}}return r[t]=o}function zx(t){return Array.isArray(t)?t[0]instanceof Uu?t:[Bb,t]:[t,void 0]}function Vx(t,e){return t instanceof st?t.v:Array.isArray(t)?Da(t,e):void 0}function Z0(t,e,n,r){const o=n.g;t[e]=r?(a,c,f)=>o(a,c,f,r):o}function J0(t,e,n,r,o){const a=n.g;let c,f;t[e]=(d,m,v)=>a(d,m,v,f||(f=$a(Td,Z0,J0,r).T),c||(c=Q0(r)),o)}function Q0(t){let e=t[$g];if(e!=null)return e;const n=$a(Td,Z0,J0,t);return e=n.ma?(r,o)=>kx(r,o,n):(r,o)=>{for(;Px(o)&&o.h!=4;){var a=o.l,c=n[a];if(c==null){var f=n.ba;f&&(f=f[a])&&(f=Vb(f))!=null&&(c=n[a]=f)}if(c==null||!c(o,r,a)){if(c=(f=o).m,Gf(f),f.ha)var d=void 0;else d=f.g.g-c,f.g.g=c,d=Rx(f.g,d);c=void 0,f=r,d&&((c=f[or]??(f[or]=new Xg))[a]??(c[a]=[])).push(d)}}return(r=md(r))&&(r.da=n.qa[oy]),!0},t[$g]=e,t[oy]=zb.bind(t),e}function zb(t,e,n,r){var o=this[Td];const a=this[$g],c=Da(void 0,o.T),f=md(t);if(f){var d=!1,m=o.ba;if(m){if(o=(v,y,S)=>{if(S.length!==0)if(m[y])for(const A of S){v=Cx(A);try{d=!0,a(c,v)}finally{bx(v)}}else r==null||r(t,y,S)},e==null)Kf(f,o);else if(f!=null){const v=f[e];v&&o(f,e,v)}if(d){let v=0|t[rt];if(2&v&&2048&v&&!(n!=null&&n.Ka))throw Error();const y=Cu(v),S=(A,P)=>{if(ao(t,A,y)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}P!=null&&(v=Yn(t,v,A,P,y)),delete f[A]};e==null?ox(c,0|c[rt],((A,P)=>{S(A,P)})):S(e,ao(c,e,y))}}}}function Vb(t){const e=(t=zx(t))[0].g;if(t=t[1]){const n=Q0(t),r=$a(Td,Z0,J0,t).T;return(o,a,c)=>e(o,a,c,r,n)}return e}function wd(t,e,n){t[e]=n.h}function Ad(t,e,n,r){let o,a;const c=n.h;t[e]=(f,d,m)=>c(f,d,m,a||(a=$a(Md,wd,Ad,r).T),o||(o=Hx(r)))}function Hx(t){let e=t[sy];if(!e){const n=$a(Md,wd,Ad,t);e=(r,o)=>Gx(r,o,n),t[sy]=e}return e}function Gx(t,e,n){ox(t,0|t[rt],((r,o)=>{if(o!=null){var a=(function(c,f){var d=c[f];if(d)return d;if((d=c.ba)&&(d=d[f])){var m=(d=zx(d))[0].h;if(d=d[1]){const v=Hx(d),y=$a(Md,wd,Ad,d).T;d=c.ma?Bx(y,v):(S,A,P)=>m(S,A,P,y,v)}else d=m;return c[f]=d}})(n,r);a?a(e,o,r):r<500||pu(Gg,3)}})),(t=md(t))&&Kf(t,((r,o,a)=>{for(Su(e,e.g.end()),r=0;r<a.length;r++)Su(e,w0(a[r])||new Uint8Array(0))}))}const Hb=ar(0);function Fu(t,e){if(Array.isArray(e)){var n=0|e[rt];if(4&n)return e;for(var r=0,o=0;r<e.length;r++){const a=t(e[r]);a!=null&&(e[o++]=a)}return o<r&&(e.length=o),(t=-1537&(5|n))!==n&&Jn(e,t),2&t&&Object.freeze(e),e}}function Pi(t,e,n){return new Uu(t,e,n)}function Ou(t,e,n){return new Uu(t,e,n)}function li(t,e,n){Yn(t,0|t[rt],e,n,Cu(0|t[rt]))}var Gb=Ed((function(t,e,n,r,o){if(t.h!==2)return!1;if(t=Qr(t=Kc(t,Da([void 0,void 0],r),o)),o=Cu(r=0|e[rt]),2&r)throw Error();let a=ao(e,n,o);if(a instanceof oo)(2&a.J)!=0?(a=a.V(),a.push(t),Yn(e,r,n,a,o)):a.Ma(t);else if(Array.isArray(a)){var c=0|a[rt];8192&c||Jn(a,c|=8192),2&c&&(a=Sx(a),Yn(e,r,n,a,o)),a.push(t)}else Yn(e,r,n,Uc([t]),o);return!0}),(function(t,e,n,r,o){if(e instanceof oo)e.forEach(((a,c)=>{ed(t,n,Da([c,a],r),o)}));else if(Array.isArray(e)){for(let a=0;a<e.length;a++){const c=e[a];Array.isArray(c)&&ed(t,n,Da(c,r),o)}Uc(e)}}));function Wx(t,e,n){(e=Es(e))!=null&&(Cr(t,n,5),t=t.g,R0(e),j0(t))}function jx(t,e,n){if(e=(function(r){if(r==null)return r;const o=typeof r;if(o==="bigint")return String(qc(64,r));if(Yc(r)){if(o==="string")return fx(r);if(o==="number")return L0(r)}})(e),e!=null&&(typeof e=="string"&&ry(e),e!=null))switch(Cr(t,n,0),typeof e){case"number":t=t.g,_u(e),eu(t,En,kn);break;case"bigint":n=BigInt.asUintN(64,e),n=new Yg(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),eu(t.g,n.h,n.g);break;default:n=ry(e),eu(t.g,n.h,n.g)}}function Xx(t,e,n){(e=bu(e))!=null&&e!=null&&(Cr(t,n,0),yd(t.g,e))}function qx(t,e,n){(e=ux(e))!=null&&(Cr(t,n,0),t.g.g.push(e?1:0))}function Yx(t,e,n){(e=gi(e))!=null&&Sd(t,n,KS(e))}function $x(t,e,n,r,o){ed(t,n,Vx(e,r),o)}function Kx(t,e,n){(e=e==null||typeof e=="string"||e instanceof ws?e:void 0)!=null&&Sd(t,n,H0(e,!0).buffer)}function Zx(t,e,n){return(t.h===5||t.h===2)&&(e=Du(e,0|e[rt],n),t.h==2?vd(t,Jf,e):e.push(Jf(t.g)),!0)}var Bn=Pi((function(t,e,n){return t.h===5&&(li(e,n,Jf(t.g)),!0)}),Wx,xd),Wb=Ou(Zx,(function(t,e,n){if((e=Fu(Es,e))!=null)for(let c=0;c<e.length;c++){var r=t,o=n,a=e[c];a!=null&&(Cr(r,o,5),r=r.g,R0(a),j0(r))}}),xd),e_=Ou(Zx,(function(t,e,n){if((e=Fu(Es,e))!=null&&e.length){Cr(t,n,2),Nu(t.g,4*e.length);for(let r=0;r<e.length;r++)n=t.g,R0(e[r]),j0(n)}}),xd),jb=Pi((function(t,e,n){return t.h===5&&(li(e,n,(t=Jf(t.g))===0?void 0:t),!0)}),Wx,xd),Ko=Pi((function(t,e,n){return E0?(t.h!==0?t=!1:(li(e,n,yu(t.g,lx)),t=!0),t):t.h===0&&(li(e,n,yu(t.g,C0)),!0)}),jx,Nx),Gm=Pi((function(t,e,n){return E0?(t.h!==0?e=!1:(li(e,n,(t=yu(t.g,lx))===Hb?void 0:t),e=!0),e):t.h===0&&(li(e,n,(t=yu(t.g,C0))===0?void 0:t),!0)}),jx,Nx),Xb=Pi((function(t,e,n){return E0?(t.h!==0?t=!1:(li(e,n,yu(t.g,pb)),t=!0),t):t.h===0&&(li(e,n,yu(t.g,jg)),!0)}),(function(t,e,n){if(e=(function(r){if(r==null)return r;var o=typeof r;if(o==="bigint")return String(mb(64,r));if(Yc(r)){if(o==="string")return o=vu(Number(r)),Wa(o)&&o>=0?r=String(o):((o=r.indexOf("."))!==-1&&(r=r.substring(0,o)),(o=r[0]!=="-"&&((o=r.length)<20||o===20&&r<="18446744073709551615"))||(dd(r),r=Fc(En,kn))),r;if(o==="number")return(r=vu(r))>=0&&Wa(r)||(_u(r),r=jg(En,kn)),r}})(e),e!=null&&(typeof e=="string"&&iy(e),e!=null))switch(Cr(t,n,0),typeof e){case"number":t=t.g,_u(e),eu(t,En,kn);break;case"bigint":n=BigInt.asUintN(64,e),n=new qg(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),eu(t.g,n.h,n.g);break;default:n=iy(e),eu(t.g,n.h,n.g)}}),Ob),ai=Pi((function(t,e,n){return t.h===0&&(li(e,n,$o(t.g)),!0)}),Xx,K0),Zc=Ou((function(t,e,n){return(t.h===0||t.h===2)&&(e=Du(e,0|e[rt],n),t.h==2?vd(t,$o,e):e.push($o(t.g)),!0)}),(function(t,e,n){if((e=Fu(bu,e))!=null&&e.length){n=X0(t,n);for(let r=0;r<e.length;r++)yd(t.g,e[r]);q0(t,n)}}),K0),Kl=Pi((function(t,e,n){return t.h===0&&(li(e,n,(t=$o(t.g))===0?void 0:t),!0)}),Xx,K0),Un=Pi((function(t,e,n){return t.h===0&&(li(e,n,G0(t.g)),!0)}),qx,Ix),Oa=Pi((function(t,e,n){return t.h===0&&(li(e,n,(t=G0(t.g))===!1?void 0:t),!0)}),qx,Ix),Ti=Ou((function(t,e,n){return t.h===2&&(t=W0(t),Du(e,0|e[rt],n).push(t),!0)}),(function(t,e,n){if((e=Fu(gi,e))!=null)for(let c=0;c<e.length;c++){var r=t,o=n,a=e[c];a!=null&&Sd(r,o,KS(a))}}),$0),Go=Pi((function(t,e,n){return t.h===2&&(li(e,n,(t=W0(t))===""?void 0:t),!0)}),Yx,$0),un=Pi((function(t,e,n){return t.h===2&&(li(e,n,W0(t)),!0)}),Yx,$0),oi=(function(t,e,n=Y0){return new Uu(t,e,n)})((function(t,e,n,r,o){return t.h===2&&(r=Da(void 0,r),Du(e,0|e[rt],n).push(r),Kc(t,r,o),!0)}),(function(t,e,n,r,o){if(Array.isArray(e)){for(let a=0;a<e.length;a++)$x(t,e[a],n,r,o);1&(t=0|e[rt])||Jn(e,1|t)}})),Dn=Ed((function(t,e,n,r,o,a){if(t.h!==2)return!1;let c=0|e[rt];return xx(e,c,a,n,Cu(c)),Kc(t,e=z0(e,r,n),o),!0}),$x),Jx=Pi((function(t,e,n){return t.h===2&&(li(e,n,Lx(t)),!0)}),Kx,Ux),qb=Ou((function(t,e,n){return(t.h===0||t.h===2)&&(e=Du(e,0|e[rt],n),t.h==2?vd(t,co,e):e.push(co(t.g)),!0)}),(function(t,e,n){if((e=Fu(cx,e))!=null)for(let c=0;c<e.length;c++){var r=t,o=n,a=e[c];a!=null&&(Cr(r,o,0),Nu(r.g,a))}}),Dx),Yb=Pi((function(t,e,n){return t.h===0&&(li(e,n,(t=co(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=cx(e))!=null&&e!=null&&(Cr(t,n,0),Nu(t.g,e))}),Dx),cr=Pi((function(t,e,n){return t.h===0&&(li(e,n,$o(t.g)),!0)}),(function(t,e,n){(e=bu(e))!=null&&(e=parseInt(e,10),Cr(t,n,0),yd(t.g,e))}),Fx);class $b{constructor(e,n){var r=fr;this.g=e,this.h=n,this.m=qt,this.j=pt,this.defaultValue=void 0,this.l=r.Oa!=null?ax:void 0}register(){cd(this)}}function bs(t,e){return new $b(t,e)}function Zo(t,e){return(n,r)=>{{const a={ea:!0};r&&Object.assign(a,r),n=Cx(n,void 0,void 0,a);try{const c=new t,f=c.v;Q0(e)(f,n);var o=c}finally{bx(n)}}return o}}function Rd(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const c=this.g;return this.g=[],c}}}};Gx(this.v,e,$a(Md,wd,Ad,t)),Su(e,e.g.end());const n=new Uint8Array(e.h),r=e.l,o=r.length;let a=0;for(let c=0;c<o;c++){const f=r[c];n.set(f,a),a+=f.length}return e.l=[n],n}}var ay=class extends st{constructor(t){super(t)}},ly=[0,Go,Pi((function(t,e,n){return t.h===2&&(li(e,n,(t=Lx(t))===Ha()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof st){const r=e.Ra;return void(r?(e=r(e),e!=null&&Sd(t,n,H0(e,!0).buffer)):pu(Gg,3))}if(Array.isArray(e))return void pu(Gg,3)}Kx(t,e,n)}),Ux)];let Wm,uy=globalThis.trustedTypes;function cy(t){var e;return Wm===void 0&&(Wm=(function(){let n=null;if(!uy)return n;try{const r=o=>o;n=uy.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch{}return n})()),t=(e=Wm)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function Kb(t,...e){if(e.length===0)return cy(t[0]);let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return cy(n)}var Qx=[0,ai,cr,Un,-1,Zc,cr,-1,Un],Zb=class extends st{constructor(t){super(t)}},e3=[0,Un,un,Un,cr,-1,Ou((function(t,e,n){return(t.h===0||t.h===2)&&(e=Du(e,0|e[rt],n),t.h==2?vd(t,Db,e):e.push($o(t.g)),!0)}),(function(t,e,n){if((e=Fu(bu,e))!=null&&e.length){n=X0(t,n);for(let r=0;r<e.length;r++)yd(t.g,e[r]);q0(t,n)}}),Fx),un,-1,[0,Un,-1],cr,Un,-1],t3=[0,3,Un,-1,2,[0,ai],[0,cr,Un],[0,un,-1],[0]],n3=[0,un,-2],hy=class extends st{constructor(t){super(t)}},i3=[0],r3=[0,ai,Un,1,Un,-4],fr=class extends st{constructor(t){super(t,2)}},$n={};$n[336783863]=[0,un,Un,-1,ai,[0,[1,2,3,4,5,6,7,8,9],Dn,i3,Dn,e3,Dn,n3,Dn,r3,Dn,Qx,Dn,[0,un,-2],Dn,[0,un,cr],Dn,t3,Dn,[0,cr,-1,Un]],[0,un],Un,[0,[1,3],[2,4],Dn,[0,Zc],-1,Dn,[0,Ti],-1,oi,[0,un,-1]],un];var fy=[0,Gm,-1,Oa,-3,Gm,Zc,Go,Kl,Gm,-1,Oa,Kl,Oa,-2,Go];function gn(t,e){_d(t,3,e)}function kt(t,e){_d(t,4,e)}var Yi=class extends st{constructor(t){super(t,500)}o(t){return pt(this,0,7,t)}},Cc=[-1,{}],dy=[0,un,1,Cc],py=[0,un,Ti,Cc];function br(t,e){V0(t,1,Yi,e)}function Mn(t,e){_d(t,10,e)}function $t(t,e){_d(t,15,e)}var dr=class extends st{constructor(t){super(t,500)}o(t){return pt(this,0,1001,t)}},s3=[-500,oi,[-500,Go,-1,Ti,-3,[-2,$n,Un],oi,ly,Kl,-1,dy,py,oi,[0,Go,Oa],Go,fy,Kl,Ti,987,Ti],4,oi,[-500,un,-1,[-1,{}],998,un],oi,[-500,un,Ti,-1,[-2,{},Un],997,Ti,-1],Kl,oi,[-500,un,Ti,Cc,998,Ti],Ti,Kl,dy,py,oi,[0,Go,-1,Cc],Ti,-2,fy,Go,-1,Oa,[0,Oa,Yb],978,Cc,oi,ly];dr.prototype.g=Rd(s3);var Jb=Zo(dr,s3),Qb=class extends st{constructor(t){super(t)}},o3=class extends st{constructor(t){super(t)}g(){return lo(this,Qb,1)}},a3=[0,oi,[0,ai,Bn,un,-1]],Cd=Zo(o3,a3),eP=class extends st{constructor(t){super(t)}},tP=class extends st{constructor(t){super(t)}},jm=class extends st{constructor(t){super(t)}l(){return qt(this,eP,2)}g(){return lo(this,tP,5)}},l3=Zo(class extends st{constructor(t){super(t)}},[0,Ti,Zc,e_,[0,cr,[0,ai,-3],[0,Bn,-3],[0,ai,-1,[0,oi,[0,ai,-2]]],oi,[0,Bn,-1,un,Bn]],un,-1,Ko,oi,[0,ai,Bn],Ti,Ko]),u3=class extends st{constructor(t){super(t)}},tu=Zo(class extends st{constructor(t){super(t)}},[0,oi,[0,Bn,-4]]),c3=class extends st{constructor(t){super(t)}},Jc=Zo(class extends st{constructor(t){super(t)}},[0,oi,[0,Bn,-4]]),nP=class extends st{constructor(t){super(t)}},iP=[0,ai,-1,e_,cr],h3=class extends st{constructor(t){super(t)}};h3.prototype.g=Rd([0,Bn,-4,Ko]);var rP=class extends st{constructor(t){super(t)}},sP=Zo(class extends st{constructor(t){super(t)}},[0,oi,[0,1,ai,un,a3],Ko]),my=class extends st{constructor(t){super(t)}},oP=class extends st{constructor(t){super(t)}na(){const t=mn(this,1,void 0,void 0,yx);return t??Ha()}},aP=class extends st{constructor(t){super(t)}},f3=[1,2],lP=Zo(class extends st{constructor(t){super(t)}},[0,oi,[0,f3,Dn,[0,e_],Dn,[0,Jx],ai,un],Ko]),t_=class extends st{constructor(t){super(t)}},d3=[0,un,ai,Bn,Ti,-1],gy=class extends st{constructor(t){super(t)}},uP=[0,Un,-1],_y=class extends st{constructor(t){super(t)}},Wf=[1,2,3,4,5,6],td=class extends st{constructor(t){super(t)}g(){return mn(this,1,void 0,void 0,yx)!=null}l(){return gi(mn(this,2))!=null}},bn=class extends st{constructor(t){super(t)}g(){return ux(mn(this,2))??!1}},p3=[0,Jx,un,[0,ai,Ko,-1],[0,Xb,Ko]],Vn=[0,p3,Un,[0,Wf,Dn,r3,Dn,e3,Dn,Qx,Dn,i3,Dn,n3,Dn,t3],cr],bd=class extends st{constructor(t){super(t)}},n_=[0,Vn,Bn,-1,ai],cP=bs(502141897,bd);$n[502141897]=n_;var hP=Zo(class extends st{constructor(t){super(t)}},[0,[0,cr,-1,Wb,qb],iP]),m3=class extends st{constructor(t){super(t)}},g3=class extends st{constructor(t){super(t)}},Kg=[0,Vn,Bn,[0,Vn],Un],fP=bs(508968150,g3);$n[508968150]=[0,Vn,n_,Kg,Bn,[0,[0,p3]]],$n[508968149]=Kg;var Xl=class extends st{constructor(t){super(t)}l(){return qt(this,t_,2)}g(){rn(this,2)}},_3=[0,Vn,d3];$n[478825465]=_3;var dP=class extends st{constructor(t){super(t)}},v3=class extends st{constructor(t){super(t)}},i_=class extends st{constructor(t){super(t)}},r_=class extends st{constructor(t){super(t)}},y3=class extends st{constructor(t){super(t)}},vy=[0,Vn,[0,Vn],_3,-1],S3=[0,Vn,Bn,ai],s_=[0,Vn,Bn],x3=[0,Vn,S3,s_,Bn],pP=bs(479097054,y3);$n[479097054]=[0,Vn,x3,vy],$n[463370452]=vy,$n[464864288]=S3;var mP=bs(462713202,r_);$n[462713202]=x3,$n[474472470]=s_;var gP=class extends st{constructor(t){super(t)}},E3=class extends st{constructor(t){super(t)}},M3=class extends st{constructor(t){super(t)}},T3=class extends st{constructor(t){super(t)}},o_=[0,Vn,Bn,-1,ai],Zg=[0,Vn,Bn,Un];T3.prototype.g=Rd([0,Vn,s_,[0,Vn],n_,Kg,o_,Zg]);var w3=class extends st{constructor(t){super(t)}},_P=bs(456383383,w3);$n[456383383]=[0,Vn,d3];var A3=class extends st{constructor(t){super(t)}},vP=bs(476348187,A3);$n[476348187]=[0,Vn,uP];var R3=class extends st{constructor(t){super(t)}},yy=class extends st{constructor(t){super(t)}},C3=[0,cr,-1],yP=bs(458105876,class extends st{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[rt];return t=lr(this,n),e=(function(r,o,a,c){var f=yy;!c&&Lu(r)&&(a=0|(o=r.v)[rt]);var d=ao(o,2);if(r=!1,d==null){if(c)return Q2();d=[]}else if(d.constructor===oo){if(!(2&d.J)||c)return d;d=d.V()}else Array.isArray(d)?r=!!(2&(0|d[rt])):d=[];if(c){if(!d.length)return Q2();r||(r=!0,Xc(d))}else r&&(r=!1,Uc(d),d=Sx(d));return!r&&32&a&&jc(d,32),a=Yn(o,a,2,c=new oo(d,f,yb,void 0)),r||Ya(o,a),c})(this,e,n,t),!t&&yy&&(e.ra=!0),e}});$n[458105876]=[0,C3,Gb,[!0,Ko,[0,un,-1,Ti]],[0,Zc,Un,cr]];var a_=class extends st{constructor(t){super(t)}},b3=bs(458105758,a_);$n[458105758]=[0,Vn,un,C3];var Xm=class extends st{constructor(t){super(t)}},Sy=[0,jb,-1,Oa],SP=class extends st{constructor(t){super(t)}},P3=class extends st{constructor(t){super(t)}},Jg=[1,2];P3.prototype.g=Rd([0,Jg,Dn,Sy,Dn,[0,oi,Sy]]);var L3=class extends st{constructor(t){super(t)}},xP=bs(443442058,L3);$n[443442058]=[0,Vn,un,ai,Bn,Ti,-1,Un,Bn],$n[514774813]=o_;var I3=class extends st{constructor(t){super(t)}},EP=bs(516587230,I3);function Qg(t,e){return e=e?e.clone():new t_,t.displayNamesLocale!==void 0?rn(e,1,$c(t.displayNamesLocale)):t.displayNamesLocale===void 0&&rn(e,1),t.maxResults!==void 0?uo(e,2,t.maxResults):"maxResults"in t&&rn(e,2),t.scoreThreshold!==void 0?ut(e,3,t.scoreThreshold):"scoreThreshold"in t&&rn(e,3),t.categoryAllowlist!==void 0?Zf(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&rn(e,4),t.categoryDenylist!==void 0?Zf(e,5,t.categoryDenylist):"categoryDenylist"in t&&rn(e,5),e}function D3(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function l_(t,e=-1,n=""){return{categories:t.map((r=>({index:Rr(r,1)??0??-1,score:Nn(r,2)??0,categoryName:gi(mn(r,3))??""??"",displayName:gi(mn(r,4))??""??""}))),headIndex:e,headName:n}}function MP(t){const e={classifications:lo(t,rP,1).map((n=>{var r;return l_(((r=qt(n,o3,4))==null?void 0:r.g())??[],Rr(n,2)??0,gi(mn(n,3))??"")}))};return(function(n){return vb(M0?mn(n,2,void 0,void 0,$f):mn(n,2))})(t)!=null&&(e.timestampMs=D3(wx(t))),e}function N3(t){var c,f;var e=Pa(t,3,Es,ba()),n=Pa(t,2,bu,ba()),r=Pa(t,1,gi,ba()),o=Pa(t,9,gi,ba());const a={categories:[],keypoints:[]};for(let d=0;d<e.length;d++)a.categories.push({score:e[d],index:n[d]??-1,categoryName:r[d]??"",displayName:o[d]??""});if((e=(c=qt(t,jm,4))==null?void 0:c.l())&&(a.boundingBox={originX:Rr(e,1,Bo)??0,originY:Rr(e,2,Bo)??0,width:Rr(e,3,Bo)??0,height:Rr(e,4,Bo)??0,angle:0}),(f=qt(t,jm,4))==null?void 0:f.g().length)for(const d of qt(t,jm,4).g())a.keypoints.push({x:mn(d,1,void 0,Bo,Es)??0,y:mn(d,2,void 0,Bo,Es)??0,score:mn(d,4,void 0,Bo,Es)??0,label:gi(mn(d,3,void 0,Bo))??""});return a}function Pd(t){const e=[];for(const n of lo(t,c3,1))e.push({x:Nn(n,1)??0,y:Nn(n,2)??0,z:Nn(n,3)??0,visibility:Nn(n,4)??0});return e}function bc(t){const e=[];for(const n of lo(t,u3,1))e.push({x:Nn(n,1)??0,y:Nn(n,2)??0,z:Nn(n,3)??0,visibility:Nn(n,4)??0});return e}function xy(t){return Array.from(t,(e=>e>127?e-256:e))}function Ey(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,r=0,o=0;for(let a=0;a<t.length;a++)n+=t[a]*e[a],r+=t[a]*t[a],o+=e[a]*e[a];if(r<=0||o<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(r*o)}let Lf;$n[516587230]=[0,Vn,o_,Zg,Bn],$n[518928384]=Zg;const TP=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function U3(){if(Lf===void 0)try{await WebAssembly.instantiate(TP),Lf=!0}catch{Lf=!1}return Lf}async function Mc(t,e=Kb``){const n=await U3()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Ma=class{};function F3(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function My(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,r)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(o=>{r(o)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;await self.import(t.toString())}}function O3(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function ot(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Ty(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[r,o]=O3(e);return!t.l||r===t.i.canvas.width&&o===t.i.canvas.height||(t.i.canvas.width=r,t.i.canvas.height=o),[r,o]}function wy(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const r=new Uint32Array(e.length);for(let o=0;o<e.length;o++)r[o]=t.i.stringToNewUTF8(e[o]);e=t.i._malloc(4*r.length),t.i.HEAPU32.set(r,e>>2),n(e);for(const o of r)t.i._free(o);t.i._free(e)}function gs(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function zo(t,e,n){let r=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(o,a,c)=>{a?(n(r,c),r=[]):r.push(o)}}Ma.forVisionTasks=function(t){return Mc("vision",t)},Ma.forTextTasks=function(t){return Mc("text",t)},Ma.forGenAiExperimentalTasks=function(t){return Mc("genai_experimental",t)},Ma.forGenAiTasks=function(t){return Mc("genai",t)},Ma.forAudioTasks=function(t){return Mc("audio",t)},Ma.isSimdSupported=function(){return U3()};async function wP(t,e,n,r){return t=await(async(o,a,c,f,d)=>{if(a&&await My(a),!self.ModuleFactory||c&&(await My(c),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&d&&((a=self.Module).locateFile=d.locateFile,d.mainScriptUrlOrBlob&&(a.mainScriptUrlOrBlob=d.mainScriptUrlOrBlob)),d=await self.ModuleFactory(self.Module||d),self.ModuleFactory=self.Module=void 0,new o(d,f)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:o=>o.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&o.endsWith(".data")?n.assetBinaryPath.toString():o}),await t.o(r),t}function qm(t,e){const n=qt(t.baseOptions,td,1)||new td;typeof e=="string"?(rn(n,2,$c(e)),rn(n,1)):e instanceof Uint8Array&&(rn(n,1,A0(e,!1)),rn(n,2)),pt(t.baseOptions,0,1,n)}function Ay(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function Je(t,e){t.C=Math.max(t.C,e)}function Ld(t,e){t.B=new Yi,ur(t.B,2,"PassThroughCalculator"),gn(t.B,"free_memory"),kt(t.B,"free_memory_unused_out"),Mn(e,"free_memory"),br(e,t.B)}function xu(t,e){gn(t.B,e),kt(t.B,e+"_unused_out")}function Id(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var e0=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,r,o,a,c,f;if(e){const d=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((r=t.baseOptions)!=null&&r.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((o=qt(this.baseOptions,td,1))!=null&&o.g()||(a=qt(this.baseOptions,td,1))!=null&&a.l()||(c=t.baseOptions)!=null&&c.modelAssetBuffer||(f=t.baseOptions)!=null&&f.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(m,v){let y=qt(m.baseOptions,_y,3);if(!y){var S=y=new _y,A=new hy;Rc(S,4,Wf,A)}"delegate"in v&&(v.delegate==="GPU"?(v=y,S=new Zb,Rc(v,2,Wf,S)):(v=y,S=new hy,Rc(v,4,Wf,S))),pt(m.baseOptions,0,3,y)})(this,d),d.modelAssetPath)return fetch(d.modelAssetPath.toString()).then((m=>{if(m.ok)return m.arrayBuffer();throw Error(`Failed to fetch model: ${d.modelAssetPath} (${m.status})`)})).then((m=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(m),!0,!1,!1),qm(this,"/model.dat"),this.m(),this.L()}));if(d.modelAssetBuffer instanceof Uint8Array)qm(this,d.modelAssetBuffer);else if(d.modelAssetBuffer)return(async function(m){const v=[];for(var y=0;;){const{done:S,value:A}=await m.read();if(S)break;v.push(A),y+=A.length}if(v.length===0)return new Uint8Array(0);if(v.length===1)return v[0];m=new Uint8Array(y),y=0;for(const S of v)m.set(S,y),y+=S.length;return m})(d.modelAssetBuffer).then((m=>{qm(this,m),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=Jb(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,r)=>{this.H.push(Error(r))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,Ay(this)}finishProcessing(){this.g.finishProcessing(),Ay(this)}close(){this.B=void 0,this.g.closeGraph()}};function Xo(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}e0.prototype.close=e0.prototype.close;class AP{constructor(e,n,r,o){this.g=e,this.h=n,this.m=r,this.l=o}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Ry(t,e,n){const r=t.g;if(n=Xo(r.createShader(n),"Failed to create WebGL shader"),r.shaderSource(n,e),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(t.h,n),n}function Cy(t,e){const n=t.g,r=Xo(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(r);const o=Xo(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const a=Xo(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new AP(n,r,o,a)}function u_(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function RP(t,e,n,r){return u_(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=Cy(t,!0)),n=t.u):(t.A||(t.A=Cy(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=r(),n.g.bindVertexArray(null),t}function k3(t,e,n){return u_(t,e),t=Xo(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function B3(t,e,n){u_(t,e),t.B||(t.B=Xo(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function CP(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var z3=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Xo(t.createProgram(),"Failed to create WebGL program"),this.X=Ry(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=Ry(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Js(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function t0(t){var e=Js(t,1);if(!e){if(e=Js(t,0))e=new Float32Array(e).map((r=>r/255));else{e=new Float32Array(t.width*t.height);const r=Eu(t);var n=c_(t);if(B3(n,r,V3(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),r.readPixels(0,0,t.width,t.height,r.RGBA,r.FLOAT,n);for(let o=0,a=0;o<e.length;++o,a+=4)e[o]=n[a]}else r.readPixels(0,0,t.width,t.height,r.RED,r.FLOAT,e)}t.g.push(e)}return e}function V3(t){let e=Js(t,2);if(!e){const n=Eu(t);e=G3(t);const r=t0(t),o=H3(t);n.texImage2D(n.TEXTURE_2D,0,o,t.width,t.height,0,n.RED,n.FLOAT,r),n0(t)}return e}function Eu(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Xo(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function H3(t){if(t=Eu(t),!If)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))If=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");If=t.R16F}return If}function c_(t){return t.l||(t.l=new z3),t.l}function G3(t){const e=Eu(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Js(t,2);return n||(n=k3(c_(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function n0(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var If,si=class{constructor(t,e,n,r,o,a,c){this.g=t,this.m=e,this.j=n,this.canvas=r,this.l=o,this.width=a,this.height=c,this.j&&--by===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Js(this,0)}ka(){return!!Js(this,1)}R(){return!!Js(this,2)}ja(){return(e=Js(t=this,0))||(e=t0(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return t0(this)}N(){return V3(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const r=Eu(this),o=c_(this);r.activeTexture(r.TEXTURE1),n=k3(o,r,this.m?r.LINEAR:r.NEAREST),r.bindTexture(r.TEXTURE_2D,n);const a=H3(this);r.texImage2D(r.TEXTURE_2D,0,a,this.width,this.height,0,r.RED,r.FLOAT,null),r.bindTexture(r.TEXTURE_2D,null),B3(o,r,n),RP(o,r,!1,(()=>{G3(this),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),n0(this)})),CP(o),n0(this)}}t.push(n)}return new si(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Eu(this).deleteTexture(Js(this,2)),by=-1}};si.prototype.close=si.prototype.close,si.prototype.clone=si.prototype.clone,si.prototype.getAsWebGLTexture=si.prototype.N,si.prototype.getAsFloat32Array=si.prototype.ia,si.prototype.getAsUint8Array=si.prototype.ja,si.prototype.hasWebGLTexture=si.prototype.R,si.prototype.hasFloat32Array=si.prototype.ka,si.prototype.hasUint8Array=si.prototype.Fa;var by=250;function ts(...t){return t.map((([e,n])=>({start:e,end:n})))}const bP=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Py=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:F3()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,r=this.i._malloc(n);this.i.HEAPU8.set(t,r),e?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r)}configureAudio(t,e,n,r,o){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),ot(this,r||"input_audio",(a=>{ot(this,o=o||"audio_header",(c=>{this.i._configureAudio(a,c,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){gs(this,"__graph_config__",(e=>{t(e)})),ot(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,r,o){const a=4*t.length;this.h!==a&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(a),this.h=a),this.i.HEAPF32.set(t,this.g/4),ot(this,r,(c=>{this.i._addAudioToInputStream(this.g,e,n,c,o)}))}addGpuBufferToStream(t,e,n){ot(this,e,(r=>{const[o,a]=Ty(this,t,r);this.i._addBoundTextureToStream(r,o,a,n)}))}addBoolToStream(t,e,n){ot(this,e,(r=>{this.i._addBoolToInputStream(t,r,n)}))}addDoubleToStream(t,e,n){ot(this,e,(r=>{this.i._addDoubleToInputStream(t,r,n)}))}addFloatToStream(t,e,n){ot(this,e,(r=>{this.i._addFloatToInputStream(t,r,n)}))}addIntToStream(t,e,n){ot(this,e,(r=>{this.i._addIntToInputStream(t,r,n)}))}addUintToStream(t,e,n){ot(this,e,(r=>{this.i._addUintToInputStream(t,r,n)}))}addStringToStream(t,e,n){ot(this,e,(r=>{ot(this,t,(o=>{this.i._addStringToInputStream(o,r,n)}))}))}addStringRecordToStream(t,e,n){ot(this,e,(r=>{wy(this,Object.keys(t),(o=>{wy(this,Object.values(t),(a=>{this.i._addFlatHashMapToInputStream(o,a,Object.keys(t).length,r,n)}))}))}))}addProtoToStream(t,e,n,r){ot(this,n,(o=>{ot(this,e,(a=>{const c=this.i._malloc(t.length);this.i.HEAPU8.set(t,c),this.i._addProtoToInputStream(c,t.length,a,o,r),this.i._free(c)}))}))}addEmptyPacketToStream(t,e){ot(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){ot(this,e,(r=>{const o=this.i._allocateBoolVector(t.length);if(!o)throw Error("Unable to allocate new bool vector on heap.");for(const a of t)this.i._addBoolVectorEntry(o,a);this.i._addBoolVectorToInputStream(o,r,n)}))}addDoubleVectorToStream(t,e,n){ot(this,e,(r=>{const o=this.i._allocateDoubleVector(t.length);if(!o)throw Error("Unable to allocate new double vector on heap.");for(const a of t)this.i._addDoubleVectorEntry(o,a);this.i._addDoubleVectorToInputStream(o,r,n)}))}addFloatVectorToStream(t,e,n){ot(this,e,(r=>{const o=this.i._allocateFloatVector(t.length);if(!o)throw Error("Unable to allocate new float vector on heap.");for(const a of t)this.i._addFloatVectorEntry(o,a);this.i._addFloatVectorToInputStream(o,r,n)}))}addIntVectorToStream(t,e,n){ot(this,e,(r=>{const o=this.i._allocateIntVector(t.length);if(!o)throw Error("Unable to allocate new int vector on heap.");for(const a of t)this.i._addIntVectorEntry(o,a);this.i._addIntVectorToInputStream(o,r,n)}))}addUintVectorToStream(t,e,n){ot(this,e,(r=>{const o=this.i._allocateUintVector(t.length);if(!o)throw Error("Unable to allocate new unsigned int vector on heap.");for(const a of t)this.i._addUintVectorEntry(o,a);this.i._addUintVectorToInputStream(o,r,n)}))}addStringVectorToStream(t,e,n){ot(this,e,(r=>{const o=this.i._allocateStringVector(t.length);if(!o)throw Error("Unable to allocate new string vector on heap.");for(const a of t)ot(this,a,(c=>{this.i._addStringVectorEntry(o,c)}));this.i._addStringVectorToInputStream(o,r,n)}))}addBoolToInputSidePacket(t,e){ot(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){ot(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){ot(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){ot(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){ot(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){ot(this,e,(n=>{ot(this,t,(r=>{this.i._addStringToInputSidePacket(r,n)}))}))}addProtoToInputSidePacket(t,e,n){ot(this,n,(r=>{ot(this,e,(o=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputSidePacket(a,t.length,o,r),this.i._free(a)}))}))}addBoolVectorToInputSidePacket(t,e){ot(this,e,(n=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const o of t)this.i._addBoolVectorEntry(r,o);this.i._addBoolVectorToInputSidePacket(r,n)}))}addDoubleVectorToInputSidePacket(t,e){ot(this,e,(n=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const o of t)this.i._addDoubleVectorEntry(r,o);this.i._addDoubleVectorToInputSidePacket(r,n)}))}addFloatVectorToInputSidePacket(t,e){ot(this,e,(n=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const o of t)this.i._addFloatVectorEntry(r,o);this.i._addFloatVectorToInputSidePacket(r,n)}))}addIntVectorToInputSidePacket(t,e){ot(this,e,(n=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const o of t)this.i._addIntVectorEntry(r,o);this.i._addIntVectorToInputSidePacket(r,n)}))}addUintVectorToInputSidePacket(t,e){ot(this,e,(n=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const o of t)this.i._addUintVectorEntry(r,o);this.i._addUintVectorToInputSidePacket(r,n)}))}addStringVectorToInputSidePacket(t,e){ot(this,e,(n=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const o of t)ot(this,o,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputSidePacket(r,n)}))}attachBoolListener(t,e){gs(this,t,e),ot(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){zo(this,t,e),ot(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){gs(this,t,e),ot(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){zo(this,t,e),ot(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){gs(this,t,e),ot(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){zo(this,t,e),ot(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){gs(this,t,e),ot(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){zo(this,t,e),ot(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){gs(this,t,e),ot(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){zo(this,t,e),ot(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){gs(this,t,e),ot(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){zo(this,t,e),ot(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){gs(this,t,e),ot(this,t,(r=>{this.i._attachProtoListener(r,n||!1)}))}attachProtoVectorListener(t,e,n){zo(this,t,e),ot(this,t,(r=>{this.i._attachProtoVectorListener(r,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),gs(this,t,((r,o)=>{r=new Float32Array(r.buffer,r.byteOffset,r.length/4),e(r,o)})),ot(this,t,(r=>{this.i._attachAudioListener(r,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Py{get ga(){return this.i}pa(t,e,n){ot(this,e,(r=>{const[o,a]=Ty(this,t,r);this.ga._addBoundTextureAsImageToStream(r,o,a,n)}))}Z(t,e){gs(this,t,e),ot(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){zo(this,t,e),ot(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Py,ns=class extends bP{};async function Ht(t,e,n){return(async function(r,o,a,c){return wP(r,o,a,c)})(t,n.canvas??(F3()?void 0:document.createElement("canvas")),e,n)}function W3(t,e,n,r){if(t.U){const a=new h3;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var o=n.regionOfInterest;if(o.left>=o.right||o.top>=o.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(o.left<0||o.top<0||o.right>1||o.bottom>1)throw Error("Expected RectF values to be in [0,1].");ut(a,1,(o.left+o.right)/2),ut(a,2,(o.top+o.bottom)/2),ut(a,4,o.right-o.left),ut(a,3,o.bottom-o.top)}else ut(a,1,.5),ut(a,2,.5),ut(a,4,1),ut(a,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(ut(a,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[c,f]=O3(e);n=Nn(a,3)*f/c,o=Nn(a,4)*c/f,ut(a,4,n),ut(a,3,o)}}t.g.addProtoToStream(a.g(),"mediapipe.NormalizedRect",t.U,r)}t.g.pa(e,t.X,r??performance.now()),t.finishProcessing()}function is(t,e,n){var r;if((r=t.baseOptions)!=null&&r.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");W3(t,e,n,t.C+1)}function Ps(t,e,n,r){var o;if(!((o=t.baseOptions)!=null&&o.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");W3(t,e,n,r)}function Mu(t,e,n,r){var o=e.data;const a=e.width,c=a*(e=e.height);if((o instanceof Uint8Array||o instanceof Float32Array)&&o.length!==c)throw Error("Unsupported channel count: "+o.length/c);return t=new si([o],n,!1,t.g.i.canvas,t.P,a,e),r?t.clone():t}var hr=class extends e0{constructor(t,e,n,r){super(t),this.g=t,this.X=e,this.U=n,this.oa=r,this.P=new z3}l(t,e=!0){if("runningMode"in t&&rn(this.baseOptions,2,Oc(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};hr.prototype.close=hr.prototype.close;var Er=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},pt(t=this.h=new bd,0,1,e=new bn),ut(this.h,2,.5),ut(this.h,3,.3)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&ut(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&ut(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},is(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ps(this,t,n,e),this.j}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"norm_rect_in"),$t(t,"detections");const e=new fr;Cs(e,cP,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),gn(n,"IMAGE:image_in"),gn(n,"NORM_RECT:norm_rect_in"),kt(n,"DETECTIONS:detections"),n.o(e),br(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const a of r)r=l3(a),this.j.detections.push(N3(r));Je(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Er.prototype.detectForVideo=Er.prototype.G,Er.prototype.detect=Er.prototype.F,Er.prototype.setOptions=Er.prototype.o,Er.createFromModelPath=async function(t,e){return Ht(Er,t,{baseOptions:{modelAssetPath:e}})},Er.createFromModelBuffer=function(t,e){return Ht(Er,t,{baseOptions:{modelAssetBuffer:e}})},Er.createFromOptions=function(t,e){return Ht(Er,t,e)};var h_=ts([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),f_=ts([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),d_=ts([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),j3=ts([474,475],[475,476],[476,477],[477,474]),p_=ts([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),m_=ts([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),X3=ts([469,470],[470,471],[471,472],[472,469]),g_=ts([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),q3=[...h_,...f_,...d_,...p_,...m_,...g_],Y3=ts([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Ly(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var An=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,pt(t=this.h=new g3,0,1,e=new bn),this.A=new m3,pt(this.h,0,3,this.A),this.u=new bd,pt(this.h,0,2,this.u),uo(this.u,4,1),ut(this.u,2,.5),ut(this.A,2,.5),ut(this.h,4,.5)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return"numFaces"in t&&uo(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&ut(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&ut(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&ut(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Ly(this),is(this,t,e),this.j}G(t,e,n){return Ly(this),Ps(this,t,n,e),this.j}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"norm_rect"),$t(t,"face_landmarks");const e=new fr;Cs(e,fP,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),gn(n,"IMAGE:image_in"),gn(n,"NORM_RECT:norm_rect"),kt(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),br(t,n),this.g.attachProtoVectorListener("face_landmarks",((r,o)=>{for(const a of r)r=Jc(a),this.j.faceLandmarks.push(Pd(r));Je(this,o)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{Je(this,r)})),this.outputFaceBlendshapes&&($t(t,"blendshapes"),kt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((r,o)=>{if(this.outputFaceBlendshapes)for(const a of r)r=Cd(a),this.j.faceBlendshapes.push(l_(r.g()??[]));Je(this,o)})),this.g.attachEmptyPacketListener("blendshapes",(r=>{Je(this,r)}))),this.outputFacialTransformationMatrixes&&($t(t,"face_geometry"),kt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((r,o)=>{if(this.outputFacialTransformationMatrixes)for(const a of r)(r=qt(r=hP(a),nP,2))&&this.j.facialTransformationMatrixes.push({rows:Rr(r,1)??0??0,columns:Rr(r,2)??0??0,data:Pa(r,3,Es,ba()).slice()??[]});Je(this,o)})),this.g.attachEmptyPacketListener("face_geometry",(r=>{Je(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.prototype.detectForVideo=An.prototype.G,An.prototype.detect=An.prototype.F,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(t,e){return Ht(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return Ht(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return Ht(An,t,e)},An.FACE_LANDMARKS_LIPS=h_,An.FACE_LANDMARKS_LEFT_EYE=f_,An.FACE_LANDMARKS_LEFT_EYEBROW=d_,An.FACE_LANDMARKS_LEFT_IRIS=j3,An.FACE_LANDMARKS_RIGHT_EYE=p_,An.FACE_LANDMARKS_RIGHT_EYEBROW=m_,An.FACE_LANDMARKS_RIGHT_IRIS=X3,An.FACE_LANDMARKS_FACE_OVAL=g_,An.FACE_LANDMARKS_CONTOURS=q3,An.FACE_LANDMARKS_TESSELATION=Y3;var __=ts([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Iy(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Dy(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Ny(t,e=!0){const n=[];for(const o of t){var r=Cd(o);t=[];for(const a of r.g())r=e&&Rr(a,1)!=null?Rr(a,1)??0:-1,t.push({score:Nn(a,2)??0,index:r,categoryName:gi(mn(a,3))??""??"",displayName:gi(mn(a,4))??""??""});n.push(t)}return n}var nr=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],pt(t=this.j=new y3,0,1,e=new bn),this.u=new r_,pt(this.j,0,2,this.u),this.D=new i_,pt(this.u,0,3,this.D),this.A=new v3,pt(this.u,0,2,this.A),this.h=new dP,pt(this.j,0,3,this.h),ut(this.A,2,.5),ut(this.u,4,.5),ut(this.D,2,.5)}get baseOptions(){return qt(this.j,bn,1)}set baseOptions(t){pt(this.j,0,1,t)}o(t){var o,a,c,f;if(uo(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&ut(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ut(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ut(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Xl,n=e,r=Qg(t.cannedGesturesClassifierOptions,(o=qt(this.h,Xl,3))==null?void 0:o.l());pt(n,0,2,r),pt(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((a=qt(this.h,Xl,3))==null||a.g());return t.customGesturesClassifierOptions?(pt(n=e=new Xl,0,2,r=Qg(t.customGesturesClassifierOptions,(c=qt(this.h,Xl,4))==null?void 0:c.l())),pt(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((f=qt(this.h,Xl,4))==null||f.g()),this.l(t)}Ha(t,e){return Iy(this),is(this,t,e),Dy(this)}Ia(t,e,n){return Iy(this),Ps(this,t,n,e),Dy(this)}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"norm_rect"),$t(t,"hand_gestures"),$t(t,"hand_landmarks"),$t(t,"world_hand_landmarks"),$t(t,"handedness");const e=new fr;Cs(e,pP,this.j);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),gn(n,"IMAGE:image_in"),gn(n,"NORM_RECT:norm_rect"),kt(n,"HAND_GESTURES:hand_gestures"),kt(n,"LANDMARKS:hand_landmarks"),kt(n,"WORLD_LANDMARKS:world_hand_landmarks"),kt(n,"HANDEDNESS:handedness"),n.o(e),br(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const a of r){r=Jc(a);const c=[];for(const f of lo(r,c3,1))c.push({x:Nn(f,1)??0,y:Nn(f,2)??0,z:Nn(f,3)??0,visibility:Nn(f,4)??0});this.landmarks.push(c)}Je(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{Je(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const a of r){r=tu(a);const c=[];for(const f of lo(r,u3,1))c.push({x:Nn(f,1)??0,y:Nn(f,2)??0,z:Nn(f,3)??0,visibility:Nn(f,4)??0});this.worldLandmarks.push(c)}Je(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{Je(this,r)})),this.g.attachProtoVectorListener("hand_gestures",((r,o)=>{this.gestures.push(...Ny(r,!1)),Je(this,o)})),this.g.attachEmptyPacketListener("hand_gestures",(r=>{Je(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{this.handedness.push(...Ny(r)),Je(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Uy(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}nr.prototype.recognizeForVideo=nr.prototype.Ia,nr.prototype.recognize=nr.prototype.Ha,nr.prototype.setOptions=nr.prototype.o,nr.createFromModelPath=function(t,e){return Ht(nr,t,{baseOptions:{modelAssetPath:e}})},nr.createFromModelBuffer=function(t,e){return Ht(nr,t,{baseOptions:{modelAssetBuffer:e}})},nr.createFromOptions=function(t,e){return Ht(nr,t,e)},nr.HAND_CONNECTIONS=__;var ir=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],pt(t=this.h=new r_,0,1,e=new bn),this.u=new i_,pt(this.h,0,3,this.u),this.j=new v3,pt(this.h,0,2,this.j),uo(this.j,3,1),ut(this.j,2,.5),ut(this.u,2,.5),ut(this.h,4,.5)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return"numHands"in t&&uo(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&ut(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ut(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ut(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],is(this,t,e),Uy(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ps(this,t,n,e),Uy(this)}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"norm_rect"),$t(t,"hand_landmarks"),$t(t,"world_hand_landmarks"),$t(t,"handedness");const e=new fr;Cs(e,mP,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),gn(n,"IMAGE:image_in"),gn(n,"NORM_RECT:norm_rect"),kt(n,"LANDMARKS:hand_landmarks"),kt(n,"WORLD_LANDMARKS:world_hand_landmarks"),kt(n,"HANDEDNESS:handedness"),n.o(e),br(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const a of r)r=Jc(a),this.landmarks.push(Pd(r));Je(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{Je(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const a of r)r=tu(a),this.worldLandmarks.push(bc(r));Je(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{Je(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{var a=this.handedness,c=a.push;const f=[];for(const d of r){r=Cd(d);const m=[];for(const v of r.g())m.push({score:Nn(v,2)??0,index:Rr(v,1)??0??-1,categoryName:gi(mn(v,3))??""??"",displayName:gi(mn(v,4))??""??""});f.push(m)}c.call(a,...f),Je(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ir.prototype.detectForVideo=ir.prototype.G,ir.prototype.detect=ir.prototype.F,ir.prototype.setOptions=ir.prototype.o,ir.createFromModelPath=function(t,e){return Ht(ir,t,{baseOptions:{modelAssetPath:e}})},ir.createFromModelBuffer=function(t,e){return Ht(ir,t,{baseOptions:{modelAssetBuffer:e}})},ir.createFromOptions=function(t,e){return Ht(ir,t,e)},ir.HAND_CONNECTIONS=__;var $3=ts([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Fy(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Oy(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Id(t)}}function Df(t,e){t=Jc(t),e.push(Pd(t))}var pn=class extends hr{constructor(t,e){super(new ns(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,pt(t=this.j=new T3,0,1,e=new bn),this.I=new i_,pt(this.j,0,2,this.I),this.W=new gP,pt(this.j,0,3,this.W),this.u=new bd,pt(this.j,0,4,this.u),this.O=new m3,pt(this.j,0,5,this.O),this.A=new E3,pt(this.j,0,6,this.A),this.M=new M3,pt(this.j,0,7,this.M),ut(this.u,2,.5),ut(this.u,3,.3),ut(this.O,2,.5),ut(this.A,2,.5),ut(this.A,3,.3),ut(this.M,2,.5),ut(this.I,2,.5)}get baseOptions(){return qt(this.j,bn,1)}set baseOptions(t){pt(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&ut(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&ut(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&ut(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&ut(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&ut(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&ut(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&ut(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Fy(this),is(this,t,r),Oy(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:r,Fy(this),Ps(this,t,o,e),Oy(this)}m(){var t=new dr;Mn(t,"input_frames_image"),$t(t,"pose_landmarks"),$t(t,"pose_world_landmarks"),$t(t,"face_landmarks"),$t(t,"left_hand_landmarks"),$t(t,"left_hand_world_landmarks"),$t(t,"right_hand_landmarks"),$t(t,"right_hand_world_landmarks");const e=new fr,n=new ay;ur(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(o,a){if(a!=null)if(Array.isArray(a))rn(o,2,gd(a,0,kc));else{if(!(typeof a=="string"||a instanceof ws||T0(a)))throw Error("invalid value in Any.value field: "+a+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Vo(o,2,A0(a,!1),Ha())}})(n,this.j.g());const r=new Yi;ur(r,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),V0(r,8,ay,n),gn(r,"IMAGE:input_frames_image"),kt(r,"POSE_LANDMARKS:pose_landmarks"),kt(r,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),kt(r,"FACE_LANDMARKS:face_landmarks"),kt(r,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),kt(r,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),kt(r,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),kt(r,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),r.o(e),br(t,r),Ld(this,t),this.g.attachProtoListener("pose_landmarks",((o,a)=>{Df(o,this.h.poseLandmarks),Je(this,a)})),this.g.attachEmptyPacketListener("pose_landmarks",(o=>{Je(this,o)})),this.g.attachProtoListener("pose_world_landmarks",((o,a)=>{var c=this.h.poseWorldLandmarks;o=tu(o),c.push(bc(o)),Je(this,a)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(o=>{Je(this,o)})),this.outputPoseSegmentationMasks&&(kt(r,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),xu(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((o,a)=>{this.h.poseSegmentationMasks=[Mu(this,o,!0,!this.D)],Je(this,a)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(o=>{this.h.poseSegmentationMasks=[],Je(this,o)}))),this.g.attachProtoListener("face_landmarks",((o,a)=>{Df(o,this.h.faceLandmarks),Je(this,a)})),this.g.attachEmptyPacketListener("face_landmarks",(o=>{Je(this,o)})),this.outputFaceBlendshapes&&($t(t,"extra_blendshapes"),kt(r,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((o,a)=>{var c=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(o=Cd(o),c.push(l_(o.g()??[]))),Je(this,a)})),this.g.attachEmptyPacketListener("extra_blendshapes",(o=>{Je(this,o)}))),this.g.attachProtoListener("left_hand_landmarks",((o,a)=>{Df(o,this.h.leftHandLandmarks),Je(this,a)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(o=>{Je(this,o)})),this.g.attachProtoListener("left_hand_world_landmarks",((o,a)=>{var c=this.h.leftHandWorldLandmarks;o=tu(o),c.push(bc(o)),Je(this,a)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(o=>{Je(this,o)})),this.g.attachProtoListener("right_hand_landmarks",((o,a)=>{Df(o,this.h.rightHandLandmarks),Je(this,a)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(o=>{Je(this,o)})),this.g.attachProtoListener("right_hand_world_landmarks",((o,a)=>{var c=this.h.rightHandWorldLandmarks;o=tu(o),c.push(bc(o)),Je(this,a)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(o=>{Je(this,o)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};pn.prototype.detectForVideo=pn.prototype.G,pn.prototype.detect=pn.prototype.F,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(t,e){return Ht(pn,t,{baseOptions:{modelAssetPath:e}})},pn.createFromModelBuffer=function(t,e){return Ht(pn,t,{baseOptions:{modelAssetBuffer:e}})},pn.createFromOptions=function(t,e){return Ht(pn,t,e)},pn.HAND_CONNECTIONS=__,pn.POSE_CONNECTIONS=$3,pn.FACE_LANDMARKS_LIPS=h_,pn.FACE_LANDMARKS_LEFT_EYE=f_,pn.FACE_LANDMARKS_LEFT_EYEBROW=d_,pn.FACE_LANDMARKS_LEFT_IRIS=j3,pn.FACE_LANDMARKS_RIGHT_EYE=p_,pn.FACE_LANDMARKS_RIGHT_EYEBROW=m_,pn.FACE_LANDMARKS_RIGHT_IRIS=X3,pn.FACE_LANDMARKS_FACE_OVAL=g_,pn.FACE_LANDMARKS_CONTOURS=q3,pn.FACE_LANDMARKS_TESSELATION=Y3;var Mr=class extends hr{constructor(t,e){super(new ns(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},pt(t=this.h=new w3,0,1,e=new bn)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return pt(this.h,0,2,Qg(t,qt(this.h,t_,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},is(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Ps(this,t,n,e),this.j}m(){var t=new dr;Mn(t,"input_image"),Mn(t,"norm_rect"),$t(t,"classifications");const e=new fr;Cs(e,_P,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),gn(n,"IMAGE:input_image"),gn(n,"NORM_RECT:norm_rect"),kt(n,"CLASSIFICATIONS:classifications"),n.o(e),br(t,n),this.g.attachProtoListener("classifications",((r,o)=>{this.j=MP(sP(r)),Je(this,o)})),this.g.attachEmptyPacketListener("classifications",(r=>{Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mr.prototype.classifyForVideo=Mr.prototype.ta,Mr.prototype.classify=Mr.prototype.sa,Mr.prototype.setOptions=Mr.prototype.o,Mr.createFromModelPath=function(t,e){return Ht(Mr,t,{baseOptions:{modelAssetPath:e}})},Mr.createFromModelBuffer=function(t,e){return Ht(Mr,t,{baseOptions:{modelAssetBuffer:e}})},Mr.createFromOptions=function(t,e){return Ht(Mr,t,e)};var rr=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect",!0),this.h=new A3,this.embeddings={embeddings:[]},pt(t=this.h,0,1,e=new bn)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){var e=this.h,n=qt(this.h,gy,2);return n=n?n.clone():new gy,t.l2Normalize!==void 0?rn(n,1,Oc(t.l2Normalize)):"l2Normalize"in t&&rn(n,1),t.quantize!==void 0?rn(n,2,Oc(t.quantize)):"quantize"in t&&rn(n,2),pt(e,0,2,n),this.l(t)}za(t,e){return is(this,t,e),this.embeddings}Aa(t,e,n){return Ps(this,t,n,e),this.embeddings}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"norm_rect"),$t(t,"embeddings_out");const e=new fr;Cs(e,vP,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),gn(n,"IMAGE:image_in"),gn(n,"NORM_RECT:norm_rect"),kt(n,"EMBEDDINGS:embeddings_out"),n.o(e),br(t,n),this.g.attachProtoListener("embeddings_out",((r,o)=>{r=lP(r),this.embeddings=(function(a){return{embeddings:lo(a,aP,1).map((c=>{var m,v;const f={headIndex:Rr(c,3)??0??-1,headName:gi(mn(c,4))??""??""};var d=c.v;return Ex(d,0|d[rt],my,Hm(c,1))!==void 0?(c=Pa(c=qt(c,my,Hm(c,1),void 0),1,Es,ba()),f.floatEmbedding=c.slice()):(d=new Uint8Array(0),f.quantizedEmbedding=((v=(m=qt(c,oP,Hm(c,2),void 0))==null?void 0:m.na())==null?void 0:v.h())??d),f})),timestampMs:D3(wx(a))}})(r),Je(this,o)})),this.g.attachEmptyPacketListener("embeddings_out",(r=>{Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};rr.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Ey(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Ey(xy(t.quantizedEmbedding),xy(e.quantizedEmbedding))}return t},rr.prototype.embedForVideo=rr.prototype.Aa,rr.prototype.embed=rr.prototype.za,rr.prototype.setOptions=rr.prototype.o,rr.createFromModelPath=function(t,e){return Ht(rr,t,{baseOptions:{modelAssetPath:e}})},rr.createFromModelBuffer=function(t,e){return Ht(rr,t,{baseOptions:{modelAssetBuffer:e}})},rr.createFromOptions=function(t,e){return Ht(rr,t,e)};var i0=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};function PP(t){var n,r;const e=(function(o){return lo(o,Yi,1)})(t.ca()).filter((o=>(gi(mn(o,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((r=(n=qt(e[0],fr,7))==null?void 0:n.j())==null?void 0:r.g())??new Map).forEach(((o,a)=>{t.u[Number(a)]=gi(mn(o,1))??""}))}function ky(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function By(t){try{const e=new i0(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Id(t)}}i0.prototype.close=i0.prototype.close;var Wi=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new a_,this.A=new R3,pt(this.h,0,3,this.A),pt(t=this.h,0,1,e=new bn)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?rn(this.h,2,$c(t.displayNamesLocale)):"displayNamesLocale"in t&&rn(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){PP(this)}segment(t,e,n){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,ky(this),is(this,t,r),By(this)}La(t,e,n,r){const o=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:r,ky(this),Ps(this,t,o,e),By(this)}Da(){return this.u}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"norm_rect");const e=new fr;Cs(e,b3,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),gn(n,"IMAGE:image_in"),gn(n,"NORM_RECT:norm_rect"),n.o(e),br(t,n),Ld(this,t),this.outputConfidenceMasks&&($t(t,"confidence_masks"),kt(n,"CONFIDENCE_MASKS:confidence_masks"),xu(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((a=>Mu(this,a,!0,!this.j))),Je(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],Je(this,r)}))),this.outputCategoryMask&&($t(t,"category_mask"),kt(n,"CATEGORY_MASK:category_mask"),xu(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=Mu(this,r,!1,!this.j),Je(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,Je(this,r)}))),$t(t,"quality_scores"),kt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,Je(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wi.prototype.getLabels=Wi.prototype.Da,Wi.prototype.segmentForVideo=Wi.prototype.La,Wi.prototype.segment=Wi.prototype.segment,Wi.prototype.setOptions=Wi.prototype.o,Wi.createFromModelPath=function(t,e){return Ht(Wi,t,{baseOptions:{modelAssetPath:e}})},Wi.createFromModelBuffer=function(t,e){return Ht(Wi,t,{baseOptions:{modelAssetBuffer:e}})},Wi.createFromOptions=function(t,e){return Ht(Wi,t,e)};var r0=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};r0.prototype.close=r0.prototype.close;var _s=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new a_,this.u=new R3,pt(this.h,0,3,this.u),pt(t=this.h,0,1,e=new bn)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,r){const o=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,r=new P3,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Xm;Vo(a,3,Oc(!0),!1),Vo(a,1,Ac(e.keypoint.x),0),Vo(a,2,Ac(e.keypoint.y),0),Rc(r,1,Jg,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const f=new SP;for(a of e.scribble)Vo(e=new Xm,3,Oc(!0),!1),Vo(e,1,Ac(a.x),0),Vo(e,2,Ac(a.y),0),V0(f,1,Xm,e);Rc(r,2,Jg,f)}}this.g.addProtoToStream(r.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),is(this,t,o);e:{try{const f=new r0(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=f;break e}this.j(f)}finally{Id(this)}c=void 0}return c}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"roi_in"),Mn(t,"norm_rect_in");const e=new fr;Cs(e,b3,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),gn(n,"IMAGE:image_in"),gn(n,"ROI:roi_in"),gn(n,"NORM_RECT:norm_rect_in"),n.o(e),br(t,n),Ld(this,t),this.outputConfidenceMasks&&($t(t,"confidence_masks"),kt(n,"CONFIDENCE_MASKS:confidence_masks"),xu(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((a=>Mu(this,a,!0,!this.j))),Je(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],Je(this,r)}))),this.outputCategoryMask&&($t(t,"category_mask"),kt(n,"CATEGORY_MASK:category_mask"),xu(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=Mu(this,r,!1,!this.j),Je(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,Je(this,r)}))),$t(t,"quality_scores"),kt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,Je(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_s.prototype.segment=_s.prototype.segment,_s.prototype.setOptions=_s.prototype.o,_s.createFromModelPath=function(t,e){return Ht(_s,t,{baseOptions:{modelAssetPath:e}})},_s.createFromModelBuffer=function(t,e){return Ht(_s,t,{baseOptions:{modelAssetBuffer:e}})},_s.createFromOptions=function(t,e){return Ht(_s,t,e)};var Tr=class extends hr{constructor(t,e){super(new ns(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},pt(t=this.h=new L3,0,1,e=new bn)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?rn(this.h,2,$c(t.displayNamesLocale)):"displayNamesLocale"in t&&rn(this.h,2),t.maxResults!==void 0?uo(this.h,3,t.maxResults):"maxResults"in t&&rn(this.h,3),t.scoreThreshold!==void 0?ut(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&rn(this.h,4),t.categoryAllowlist!==void 0?Zf(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&rn(this.h,5),t.categoryDenylist!==void 0?Zf(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&rn(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},is(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ps(this,t,n,e),this.j}m(){var t=new dr;Mn(t,"input_frame_gpu"),Mn(t,"norm_rect"),$t(t,"detections");const e=new fr;Cs(e,xP,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),gn(n,"IMAGE:input_frame_gpu"),gn(n,"NORM_RECT:norm_rect"),kt(n,"DETECTIONS:detections"),n.o(e),br(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const a of r)r=l3(a),this.j.detections.push(N3(r));Je(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{Je(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tr.prototype.detectForVideo=Tr.prototype.G,Tr.prototype.detect=Tr.prototype.F,Tr.prototype.setOptions=Tr.prototype.o,Tr.createFromModelPath=async function(t,e){return Ht(Tr,t,{baseOptions:{modelAssetPath:e}})},Tr.createFromModelBuffer=function(t,e){return Ht(Tr,t,{baseOptions:{modelAssetBuffer:e}})},Tr.createFromOptions=function(t,e){return Ht(Tr,t,e)};var s0=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach((e=>{e.close()}))}};function zy(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Vy(t){try{const e=new s0(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Id(t)}}s0.prototype.close=s0.prototype.close;var ji=class extends hr{constructor(t,e){super(new ns(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,pt(t=this.h=new I3,0,1,e=new bn),this.A=new M3,pt(this.h,0,3,this.A),this.j=new E3,pt(this.h,0,2,this.j),uo(this.j,4,1),ut(this.j,2,.5),ut(this.A,2,.5),ut(this.h,4,.5)}get baseOptions(){return qt(this.h,bn,1)}set baseOptions(t){pt(this.h,0,1,t)}o(t){return"numPoses"in t&&uo(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&ut(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&ut(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&ut(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,zy(this),is(this,t,r),Vy(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:r,zy(this),Ps(this,t,o,e),Vy(this)}m(){var t=new dr;Mn(t,"image_in"),Mn(t,"norm_rect"),$t(t,"normalized_landmarks"),$t(t,"world_landmarks"),$t(t,"segmentation_masks");const e=new fr;Cs(e,EP,this.h);const n=new Yi;ur(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),gn(n,"IMAGE:image_in"),gn(n,"NORM_RECT:norm_rect"),kt(n,"NORM_LANDMARKS:normalized_landmarks"),kt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),br(t,n),Ld(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((r,o)=>{this.landmarks=[];for(const a of r)r=Jc(a),this.landmarks.push(Pd(r));Je(this,o)})),this.g.attachEmptyPacketListener("normalized_landmarks",(r=>{this.landmarks=[],Je(this,r)})),this.g.attachProtoVectorListener("world_landmarks",((r,o)=>{this.worldLandmarks=[];for(const a of r)r=tu(a),this.worldLandmarks.push(bc(r));Je(this,o)})),this.g.attachEmptyPacketListener("world_landmarks",(r=>{this.worldLandmarks=[],Je(this,r)})),this.outputSegmentationMasks&&(kt(n,"SEGMENTATION_MASK:segmentation_masks"),xu(this,"segmentation_masks"),this.g.aa("segmentation_masks",((r,o)=>{this.segmentationMasks=r.map((a=>Mu(this,a,!0,!this.u))),Je(this,o)})),this.g.attachEmptyPacketListener("segmentation_masks",(r=>{this.segmentationMasks=[],Je(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ji.prototype.detectForVideo=ji.prototype.G,ji.prototype.detect=ji.prototype.F,ji.prototype.setOptions=ji.prototype.o,ji.createFromModelPath=function(t,e){return Ht(ji,t,{baseOptions:{modelAssetPath:e}})},ji.createFromModelBuffer=function(t,e){return Ht(ji,t,{baseOptions:{modelAssetBuffer:e}})},ji.createFromOptions=function(t,e){return Ht(ji,t,e)},ji.POSE_CONNECTIONS=$3;const LP="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm",IP="https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";function DP(){const[t,e]=tt.useState(!1),[n,r]=tt.useState(null),o=tt.useRef(null),a=tt.useRef(null),c=tt.useRef(-1),f=tt.useRef(null),d=tt.useRef(!1),m=tt.useCallback(async()=>{if(d.current)return;d.current=!0;const S=o.current;if(!S){r("video element not found");return}try{const A=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:640,height:480}});S.srcObject=A,await new Promise(N=>{S.onloadedmetadata=N}),await S.play();const P=await Ma.forVisionTasks(LP);a.current=await ji.createFromOptions(P,{baseOptions:{modelAssetPath:IP,delegate:"GPU"},runningMode:"VIDEO",numPoses:1,outputSegmentationMasks:!0}),e(!0)}catch(A){console.error("MediaPipe init error:",A),r(A.message),d.current=!1}},[]),v=tt.useCallback(S=>{const A=o.current,P=a.current;if(!A||!P||A.readyState<2)return null;if(S===c.current)return f.current;c.current=S;const N=P.detectForVideo(A,S);return f.current=N,N},[]),y=tt.useCallback(()=>{var A;const S=o.current;S!=null&&S.srcObject&&S.srcObject.getTracks().forEach(P=>P.stop()),(A=a.current)==null||A.close(),d.current=!1,e(!1)},[]);return{ready:t,error:n,videoRef:o,resultsRef:f,init:m,detect:v,destroy:y}}const Ym={JUMP:{key:"jump",label:"ジャンプ!",basePoints:100},TRICK:{key:"trick",label:"トリック!!",basePoints:250},CROUCH:{key:"crouch",label:"ダック!",basePoints:50}};function NP(t,e){return Math.round(t.basePoints*e)}const Hy=3,UP=.28,FP=2e3,OP=2e3,kP=.038;function BP({playerName:t,onGameOver:e}){const n=tt.useRef(null),{downlink:r}=_S(),{connected:o,copRef:a,connect:c}=WC(),f=DP(),[d,m]=tt.useState(0),[v,y]=tt.useState(Hy),[S,A]=tt.useState({copX:0,targetX:0,ok:!0,boardConnected:!1}),[P,N]=tt.useState(null),T=tt.useRef(0),x=tt.useRef(Hy),H=tt.useRef(null),z=tt.useRef(null),O=tt.useRef(!1),K=tt.useRef(0),j=tt.useRef(0),L=tt.useRef(ql(r)),R=tt.useRef(!1);tt.useEffect(()=>{L.current=ql(r)},[r]),tt.useEffect(()=>{R.current=o},[o]),tt.useEffect(()=>(f.init(),()=>f.destroy()),[]);const M=tt.useCallback((C,k)=>{const I=NP(C,k);T.current+=I,m(Math.floor(T.current)),j.current+=1,N({label:C.label,points:I,id:j.current}),setTimeout(()=>N(null),1200)},[]),E=tt.useCallback((C,k,I)=>{const fe=C[23],_e=C[24],pe=C[11],me=C[12],q=C[15],ge=C[16],le=C[25],G=C[26],re=(fe.y+_e.y)/2;if(z.current!==null){const ve=z.current-re;if(ve>kP&&!O.current){O.current=!0;const Ae=q.y<pe.y&&ge.y<me.y;M(Ae?Ym.TRICK:Ym.JUMP,I)}ve<-.015&&(O.current=!1)}z.current=re;const Pe=le.y-fe.y<.11,se=G.y-_e.y<.11;Pe&&se&&k-K.current>OP&&(K.current=k,M(Ym.CROUCH,I))},[M]);return tt.useEffect(()=>{if(!f.ready)return;let C;const k=I=>{var G,re;C=requestAnimationFrame(k);const fe=L.current,_e=((G=n.current)==null?void 0:G.getElapsedTime())??0,pe=EM(fe.amplitude,fe.frequency,fe.speed,fe.turbulence,_e),me=R.current?a.current.x:0,ge=Math.abs(pe-me)<UP;if(A({copX:me,targetX:pe,ok:ge,boardConnected:R.current}),ge)H.current=null,T.current+=fe.difficultyMultiplier*.05,m(Math.floor(T.current));else if(!H.current)H.current=I;else if(I-H.current>FP&&(H.current=null,x.current-=1,y(x.current),x.current<=0)){e(Math.floor(T.current));return}const le=f.detect(I);((re=le==null?void 0:le.landmarks)==null?void 0:re.length)>0&&E(le.landmarks[0],I,fe.difficultyMultiplier)};return C=requestAnimationFrame(k),()=>cancelAnimationFrame(C)},[f.ready]),Ie.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#000"},children:[Ie.jsx(FC,{ref:n,waveParams:ql(r)}),Ie.jsx("video",{ref:f.videoRef,style:{display:"none"},playsInline:!0,muted:!0}),Ie.jsx(OC,{videoRef:f.videoRef,detect:f.detect,ready:f.ready}),Ie.jsx(BC,{score:d,lives:v,balance:S,waveLabel:ql(r).label,difficultyMultiplier:ql(r).difficultyMultiplier,lastAction:P}),f.error&&Ie.jsxs("div",{style:Nf.errorBanner,children:["カメラエラー: ",f.error]}),!f.ready&&!f.error&&Ie.jsxs("div",{style:Nf.loadingOverlay,children:[Ie.jsx("div",{style:Nf.loadingText,children:"MediaPipe を初期化中..."}),Ie.jsx("div",{style:{fontSize:13,color:"#666",marginTop:8},children:"カメラの許可を求める場合があります"})]}),!o&&f.ready&&Ie.jsx("button",{onClick:c,style:Nf.boardBtn,children:"Wii Board 接続"})]})}const Nf={errorBanner:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",background:"#500",color:"#faa",padding:"8px 20px",borderRadius:8,fontSize:13},loadingOverlay:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(4,12,26,0.75)",color:"#fff",fontFamily:"system-ui"},loadingText:{fontSize:18,fontWeight:600},boardBtn:{position:"absolute",bottom:20,right:20,padding:"8px 18px",background:"#1a4fc4",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:13}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},zP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=t[n++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=t[n++],c=t[n++],f=t[n++],d=((o&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const a=t[n++],c=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},VP={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const a=t[o],c=o+1<t.length,f=c?t[o+1]:0,d=o+2<t.length,m=d?t[o+2]:0,v=a>>2,y=(a&3)<<4|f>>4;let S=(f&15)<<2|m>>6,A=m&63;d||(A=64,c||(S=64)),r.push(n[v],n[y],n[S],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K3(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const a=n[t.charAt(o++)],f=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const y=o<t.length?n[t.charAt(o)]:64;if(++o,a==null||f==null||m==null||y==null)throw new HP;const S=a<<2|f>>4;if(r.push(S),m!==64){const A=f<<4&240|m>>2;if(r.push(A),y!==64){const P=m<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GP=function(t){const e=K3(t);return VP.encodeByteArray(e,!0)},Z3=function(t){return GP(t).replace(/\./g,"")};function WP(){try{return typeof indexedDB=="object"}catch{return!1}}function jP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="FirebaseError";class ku extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XP,Object.setPrototypeOf(this,ku.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J3.prototype.create)}}class J3{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?qP(a,r):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new ku(o,f,r)}}function qP(t,e){return t.replace(YP,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const YP=/\{\$([^}]+)}/g;class nd{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(on||(on={}));const $P={debug:on.DEBUG,verbose:on.VERBOSE,info:on.INFO,warn:on.WARN,error:on.ERROR,silent:on.SILENT},KP=on.INFO,ZP={[on.DEBUG]:"log",[on.VERBOSE]:"log",[on.INFO]:"info",[on.WARN]:"warn",[on.ERROR]:"error"},JP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=ZP[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Q3{constructor(e){this.name=e,this._logLevel=KP,this._logHandler=JP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in on))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$P[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,on.DEBUG,...e),this._logHandler(this,on.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,on.VERBOSE,...e),this._logHandler(this,on.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,on.INFO,...e),this._logHandler(this,on.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,on.WARN,...e),this._logHandler(this,on.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,on.ERROR,...e),this._logHandler(this,on.ERROR,...e)}}const QP=(t,e)=>e.some(n=>t instanceof n);let Gy,Wy;function eL(){return Gy||(Gy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tL(){return Wy||(Wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eE=new WeakMap,o0=new WeakMap,tE=new WeakMap,$m=new WeakMap,v_=new WeakMap;function nL(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",a),t.removeEventListener("error",c)},a=()=>{n(qo(t.result)),o()},c=()=>{r(t.error),o()};t.addEventListener("success",a),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&eE.set(n,t)}).catch(()=>{}),v_.set(e,t),e}function iL(t){if(o0.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",c),t.removeEventListener("abort",c)},a=()=>{n(),o()},c=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",a),t.addEventListener("error",c),t.addEventListener("abort",c)});o0.set(t,e)}let a0={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return o0.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qo(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rL(t){a0=t(a0)}function sL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Km(this),e,...n);return tE.set(r,e.sort?e.sort():[e]),qo(r)}:tL().includes(t)?function(...e){return t.apply(Km(this),e),qo(eE.get(this))}:function(...e){return qo(t.apply(Km(this),e))}}function oL(t){return typeof t=="function"?sL(t):(t instanceof IDBTransaction&&iL(t),QP(t,eL())?new Proxy(t,a0):t)}function qo(t){if(t instanceof IDBRequest)return nL(t);if($m.has(t))return $m.get(t);const e=oL(t);return e!==t&&($m.set(t,e),v_.set(e,t)),e}const Km=t=>v_.get(t);function aL(t,e,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const c=indexedDB.open(t,e),f=qo(c);return r&&c.addEventListener("upgradeneeded",d=>{r(qo(c.result),d.oldVersion,d.newVersion,qo(c.transaction),d)}),n&&c.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),f.then(d=>{a&&d.addEventListener("close",()=>a()),o&&d.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const lL=["get","getKey","getAll","getAllKeys","count"],uL=["put","add","delete","clear"],Zm=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zm.get(e))return Zm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=uL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||lL.includes(n)))return;const a=async function(c,...f){const d=this.transaction(c,o?"readwrite":"readonly");let m=d.store;return r&&(m=m.index(f.shift())),(await Promise.all([m[n](...f),o&&d.done]))[0]};return Zm.set(e,a),a}rL(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const l0="@firebase/app",Xy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Q3("@firebase/app"),fL="@firebase/app-compat",dL="@firebase/analytics-compat",pL="@firebase/analytics",mL="@firebase/app-check-compat",gL="@firebase/app-check",_L="@firebase/auth",vL="@firebase/auth-compat",yL="@firebase/database",SL="@firebase/data-connect",xL="@firebase/database-compat",EL="@firebase/functions",ML="@firebase/functions-compat",TL="@firebase/installations",wL="@firebase/installations-compat",AL="@firebase/messaging",RL="@firebase/messaging-compat",CL="@firebase/performance",bL="@firebase/performance-compat",PL="@firebase/remote-config",LL="@firebase/remote-config-compat",IL="@firebase/storage",DL="@firebase/storage-compat",NL="@firebase/firestore",UL="@firebase/ai",FL="@firebase/firestore-compat",OL="firebase",kL="11.10.0",BL={[l0]:"fire-core",[fL]:"fire-core-compat",[pL]:"fire-analytics",[dL]:"fire-analytics-compat",[gL]:"fire-app-check",[mL]:"fire-app-check-compat",[_L]:"fire-auth",[vL]:"fire-auth-compat",[yL]:"fire-rtdb",[SL]:"fire-data-connect",[xL]:"fire-rtdb-compat",[EL]:"fire-fn",[ML]:"fire-fn-compat",[TL]:"fire-iid",[wL]:"fire-iid-compat",[AL]:"fire-fcm",[RL]:"fire-fcm-compat",[CL]:"fire-perf",[bL]:"fire-perf-compat",[PL]:"fire-rc",[LL]:"fire-rc-compat",[IL]:"fire-gcs",[DL]:"fire-gcs-compat",[NL]:"fire-fst",[FL]:"fire-fst-compat",[UL]:"fire-vertex","fire-js":"fire-js",[OL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=new Map,VL=new Map,qy=new Map;function Yy(t,e){try{t.container.addComponent(e)}catch(n){ho.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function id(t){const e=t.name;if(qy.has(e))return ho.debug(`There were multiple attempts to register component ${e}.`),!1;qy.set(e,t);for(const n of zL.values())Yy(n,t);for(const n of VL.values())Yy(n,t);return!0}function HL(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},y_=new J3("app","Firebase",GL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=kL;function nu(t,e,n){var r;let o=(r=BL[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${o}" with version "${e}":`];a&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ho.warn(f.join(" "));return}id(new nd(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="firebase-heartbeat-database",XL=1,Bc="firebase-heartbeat-store";let Jm=null;function nE(){return Jm||(Jm=aL(jL,XL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bc)}catch(n){console.warn(n)}}}}).catch(t=>{throw y_.create("idb-open",{originalErrorMessage:t.message})})),Jm}async function qL(t){try{const n=(await nE()).transaction(Bc),r=await n.objectStore(Bc).get(iE(t));return await n.done,r}catch(e){if(e instanceof ku)ho.warn(e.message);else{const n=y_.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ho.warn(n.message)}}}async function $y(t,e){try{const r=(await nE()).transaction(Bc,"readwrite");await r.objectStore(Bc).put(e,iE(t)),await r.done}catch(n){if(n instanceof ku)ho.warn(n.message);else{const r=y_.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ho.warn(r.message)}}}function iE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=1024,$L=30;class KL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ky();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>$L){const c=QL(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ho.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ky(),{heartbeatsToSend:r,unsentEntries:o}=ZL(this._heartbeatsCache.heartbeats),a=Z3(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return ho.warn(n),""}}}function Ky(){return new Date().toISOString().substring(0,10)}function ZL(t,e=YL){const n=[];let r=t.slice();for(const o of t){const a=n.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),Zy(n)>e){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Zy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WP()?jP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Zy(t){return Z3(JSON.stringify({version:2,heartbeats:t})).length}function QL(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){id(new nd("platform-logger",e=>new cL(e),"PRIVATE")),id(new nd("heartbeat",e=>new KL(e),"PRIVATE")),nu(l0,Xy,t),nu(l0,Xy,"esm2017"),nu("fire-js","")}eI("");var tI="firebase",nI="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nu(tI,nI,"app");var Jy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(L,R){function M(){}M.prototype=R.prototype,L.D=R.prototype,L.prototype=new M,L.prototype.constructor=L,L.C=function(E,C,k){for(var I=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)I[fe-2]=arguments[fe];return R.prototype[C].apply(E,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(L,R,M){M||(M=0);var E=Array(16);if(typeof R=="string")for(var C=0;16>C;++C)E[C]=R.charCodeAt(M++)|R.charCodeAt(M++)<<8|R.charCodeAt(M++)<<16|R.charCodeAt(M++)<<24;else for(C=0;16>C;++C)E[C]=R[M++]|R[M++]<<8|R[M++]<<16|R[M++]<<24;R=L.g[0],M=L.g[1],C=L.g[2];var k=L.g[3],I=R+(k^M&(C^k))+E[0]+3614090360&4294967295;R=M+(I<<7&4294967295|I>>>25),I=k+(C^R&(M^C))+E[1]+3905402710&4294967295,k=R+(I<<12&4294967295|I>>>20),I=C+(M^k&(R^M))+E[2]+606105819&4294967295,C=k+(I<<17&4294967295|I>>>15),I=M+(R^C&(k^R))+E[3]+3250441966&4294967295,M=C+(I<<22&4294967295|I>>>10),I=R+(k^M&(C^k))+E[4]+4118548399&4294967295,R=M+(I<<7&4294967295|I>>>25),I=k+(C^R&(M^C))+E[5]+1200080426&4294967295,k=R+(I<<12&4294967295|I>>>20),I=C+(M^k&(R^M))+E[6]+2821735955&4294967295,C=k+(I<<17&4294967295|I>>>15),I=M+(R^C&(k^R))+E[7]+4249261313&4294967295,M=C+(I<<22&4294967295|I>>>10),I=R+(k^M&(C^k))+E[8]+1770035416&4294967295,R=M+(I<<7&4294967295|I>>>25),I=k+(C^R&(M^C))+E[9]+2336552879&4294967295,k=R+(I<<12&4294967295|I>>>20),I=C+(M^k&(R^M))+E[10]+4294925233&4294967295,C=k+(I<<17&4294967295|I>>>15),I=M+(R^C&(k^R))+E[11]+2304563134&4294967295,M=C+(I<<22&4294967295|I>>>10),I=R+(k^M&(C^k))+E[12]+1804603682&4294967295,R=M+(I<<7&4294967295|I>>>25),I=k+(C^R&(M^C))+E[13]+4254626195&4294967295,k=R+(I<<12&4294967295|I>>>20),I=C+(M^k&(R^M))+E[14]+2792965006&4294967295,C=k+(I<<17&4294967295|I>>>15),I=M+(R^C&(k^R))+E[15]+1236535329&4294967295,M=C+(I<<22&4294967295|I>>>10),I=R+(C^k&(M^C))+E[1]+4129170786&4294967295,R=M+(I<<5&4294967295|I>>>27),I=k+(M^C&(R^M))+E[6]+3225465664&4294967295,k=R+(I<<9&4294967295|I>>>23),I=C+(R^M&(k^R))+E[11]+643717713&4294967295,C=k+(I<<14&4294967295|I>>>18),I=M+(k^R&(C^k))+E[0]+3921069994&4294967295,M=C+(I<<20&4294967295|I>>>12),I=R+(C^k&(M^C))+E[5]+3593408605&4294967295,R=M+(I<<5&4294967295|I>>>27),I=k+(M^C&(R^M))+E[10]+38016083&4294967295,k=R+(I<<9&4294967295|I>>>23),I=C+(R^M&(k^R))+E[15]+3634488961&4294967295,C=k+(I<<14&4294967295|I>>>18),I=M+(k^R&(C^k))+E[4]+3889429448&4294967295,M=C+(I<<20&4294967295|I>>>12),I=R+(C^k&(M^C))+E[9]+568446438&4294967295,R=M+(I<<5&4294967295|I>>>27),I=k+(M^C&(R^M))+E[14]+3275163606&4294967295,k=R+(I<<9&4294967295|I>>>23),I=C+(R^M&(k^R))+E[3]+4107603335&4294967295,C=k+(I<<14&4294967295|I>>>18),I=M+(k^R&(C^k))+E[8]+1163531501&4294967295,M=C+(I<<20&4294967295|I>>>12),I=R+(C^k&(M^C))+E[13]+2850285829&4294967295,R=M+(I<<5&4294967295|I>>>27),I=k+(M^C&(R^M))+E[2]+4243563512&4294967295,k=R+(I<<9&4294967295|I>>>23),I=C+(R^M&(k^R))+E[7]+1735328473&4294967295,C=k+(I<<14&4294967295|I>>>18),I=M+(k^R&(C^k))+E[12]+2368359562&4294967295,M=C+(I<<20&4294967295|I>>>12),I=R+(M^C^k)+E[5]+4294588738&4294967295,R=M+(I<<4&4294967295|I>>>28),I=k+(R^M^C)+E[8]+2272392833&4294967295,k=R+(I<<11&4294967295|I>>>21),I=C+(k^R^M)+E[11]+1839030562&4294967295,C=k+(I<<16&4294967295|I>>>16),I=M+(C^k^R)+E[14]+4259657740&4294967295,M=C+(I<<23&4294967295|I>>>9),I=R+(M^C^k)+E[1]+2763975236&4294967295,R=M+(I<<4&4294967295|I>>>28),I=k+(R^M^C)+E[4]+1272893353&4294967295,k=R+(I<<11&4294967295|I>>>21),I=C+(k^R^M)+E[7]+4139469664&4294967295,C=k+(I<<16&4294967295|I>>>16),I=M+(C^k^R)+E[10]+3200236656&4294967295,M=C+(I<<23&4294967295|I>>>9),I=R+(M^C^k)+E[13]+681279174&4294967295,R=M+(I<<4&4294967295|I>>>28),I=k+(R^M^C)+E[0]+3936430074&4294967295,k=R+(I<<11&4294967295|I>>>21),I=C+(k^R^M)+E[3]+3572445317&4294967295,C=k+(I<<16&4294967295|I>>>16),I=M+(C^k^R)+E[6]+76029189&4294967295,M=C+(I<<23&4294967295|I>>>9),I=R+(M^C^k)+E[9]+3654602809&4294967295,R=M+(I<<4&4294967295|I>>>28),I=k+(R^M^C)+E[12]+3873151461&4294967295,k=R+(I<<11&4294967295|I>>>21),I=C+(k^R^M)+E[15]+530742520&4294967295,C=k+(I<<16&4294967295|I>>>16),I=M+(C^k^R)+E[2]+3299628645&4294967295,M=C+(I<<23&4294967295|I>>>9),I=R+(C^(M|~k))+E[0]+4096336452&4294967295,R=M+(I<<6&4294967295|I>>>26),I=k+(M^(R|~C))+E[7]+1126891415&4294967295,k=R+(I<<10&4294967295|I>>>22),I=C+(R^(k|~M))+E[14]+2878612391&4294967295,C=k+(I<<15&4294967295|I>>>17),I=M+(k^(C|~R))+E[5]+4237533241&4294967295,M=C+(I<<21&4294967295|I>>>11),I=R+(C^(M|~k))+E[12]+1700485571&4294967295,R=M+(I<<6&4294967295|I>>>26),I=k+(M^(R|~C))+E[3]+2399980690&4294967295,k=R+(I<<10&4294967295|I>>>22),I=C+(R^(k|~M))+E[10]+4293915773&4294967295,C=k+(I<<15&4294967295|I>>>17),I=M+(k^(C|~R))+E[1]+2240044497&4294967295,M=C+(I<<21&4294967295|I>>>11),I=R+(C^(M|~k))+E[8]+1873313359&4294967295,R=M+(I<<6&4294967295|I>>>26),I=k+(M^(R|~C))+E[15]+4264355552&4294967295,k=R+(I<<10&4294967295|I>>>22),I=C+(R^(k|~M))+E[6]+2734768916&4294967295,C=k+(I<<15&4294967295|I>>>17),I=M+(k^(C|~R))+E[13]+1309151649&4294967295,M=C+(I<<21&4294967295|I>>>11),I=R+(C^(M|~k))+E[4]+4149444226&4294967295,R=M+(I<<6&4294967295|I>>>26),I=k+(M^(R|~C))+E[11]+3174756917&4294967295,k=R+(I<<10&4294967295|I>>>22),I=C+(R^(k|~M))+E[2]+718787259&4294967295,C=k+(I<<15&4294967295|I>>>17),I=M+(k^(C|~R))+E[9]+3951481745&4294967295,L.g[0]=L.g[0]+R&4294967295,L.g[1]=L.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,L.g[2]=L.g[2]+C&4294967295,L.g[3]=L.g[3]+k&4294967295}r.prototype.u=function(L,R){R===void 0&&(R=L.length);for(var M=R-this.blockSize,E=this.B,C=this.h,k=0;k<R;){if(C==0)for(;k<=M;)o(this,L,k),k+=this.blockSize;if(typeof L=="string"){for(;k<R;)if(E[C++]=L.charCodeAt(k++),C==this.blockSize){o(this,E),C=0;break}}else for(;k<R;)if(E[C++]=L[k++],C==this.blockSize){o(this,E),C=0;break}}this.h=C,this.o+=R},r.prototype.v=function(){var L=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);L[0]=128;for(var R=1;R<L.length-8;++R)L[R]=0;var M=8*this.o;for(R=L.length-8;R<L.length;++R)L[R]=M&255,M/=256;for(this.u(L),L=Array(16),R=M=0;4>R;++R)for(var E=0;32>E;E+=8)L[M++]=this.g[R]>>>E&255;return L};function a(L,R){var M=f;return Object.prototype.hasOwnProperty.call(M,L)?M[L]:M[L]=R(L)}function c(L,R){this.h=R;for(var M=[],E=!0,C=L.length-1;0<=C;C--){var k=L[C]|0;E&&k==R||(M[C]=k,E=!1)}this.g=M}var f={};function d(L){return-128<=L&&128>L?a(L,function(R){return new c([R|0],0>R?-1:0)}):new c([L|0],0>L?-1:0)}function m(L){if(isNaN(L)||!isFinite(L))return y;if(0>L)return T(m(-L));for(var R=[],M=1,E=0;L>=M;E++)R[E]=L/M|0,M*=4294967296;return new c(R,0)}function v(L,R){if(L.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(L.charAt(0)=="-")return T(v(L.substring(1),R));if(0<=L.indexOf("-"))throw Error('number format error: interior "-" character');for(var M=m(Math.pow(R,8)),E=y,C=0;C<L.length;C+=8){var k=Math.min(8,L.length-C),I=parseInt(L.substring(C,C+k),R);8>k?(k=m(Math.pow(R,k)),E=E.j(k).add(m(I))):(E=E.j(M),E=E.add(m(I)))}return E}var y=d(0),S=d(1),A=d(16777216);t=c.prototype,t.m=function(){if(N(this))return-T(this).m();for(var L=0,R=1,M=0;M<this.g.length;M++){var E=this.i(M);L+=(0<=E?E:4294967296+E)*R,R*=4294967296}return L},t.toString=function(L){if(L=L||10,2>L||36<L)throw Error("radix out of range: "+L);if(P(this))return"0";if(N(this))return"-"+T(this).toString(L);for(var R=m(Math.pow(L,6)),M=this,E="";;){var C=O(M,R).g;M=x(M,C.j(R));var k=((0<M.g.length?M.g[0]:M.h)>>>0).toString(L);if(M=C,P(M))return k+E;for(;6>k.length;)k="0"+k;E=k+E}},t.i=function(L){return 0>L?0:L<this.g.length?this.g[L]:this.h};function P(L){if(L.h!=0)return!1;for(var R=0;R<L.g.length;R++)if(L.g[R]!=0)return!1;return!0}function N(L){return L.h==-1}t.l=function(L){return L=x(this,L),N(L)?-1:P(L)?0:1};function T(L){for(var R=L.g.length,M=[],E=0;E<R;E++)M[E]=~L.g[E];return new c(M,~L.h).add(S)}t.abs=function(){return N(this)?T(this):this},t.add=function(L){for(var R=Math.max(this.g.length,L.g.length),M=[],E=0,C=0;C<=R;C++){var k=E+(this.i(C)&65535)+(L.i(C)&65535),I=(k>>>16)+(this.i(C)>>>16)+(L.i(C)>>>16);E=I>>>16,k&=65535,I&=65535,M[C]=I<<16|k}return new c(M,M[M.length-1]&-2147483648?-1:0)};function x(L,R){return L.add(T(R))}t.j=function(L){if(P(this)||P(L))return y;if(N(this))return N(L)?T(this).j(T(L)):T(T(this).j(L));if(N(L))return T(this.j(T(L)));if(0>this.l(A)&&0>L.l(A))return m(this.m()*L.m());for(var R=this.g.length+L.g.length,M=[],E=0;E<2*R;E++)M[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<L.g.length;C++){var k=this.i(E)>>>16,I=this.i(E)&65535,fe=L.i(C)>>>16,_e=L.i(C)&65535;M[2*E+2*C]+=I*_e,H(M,2*E+2*C),M[2*E+2*C+1]+=k*_e,H(M,2*E+2*C+1),M[2*E+2*C+1]+=I*fe,H(M,2*E+2*C+1),M[2*E+2*C+2]+=k*fe,H(M,2*E+2*C+2)}for(E=0;E<R;E++)M[E]=M[2*E+1]<<16|M[2*E];for(E=R;E<2*R;E++)M[E]=0;return new c(M,0)};function H(L,R){for(;(L[R]&65535)!=L[R];)L[R+1]+=L[R]>>>16,L[R]&=65535,R++}function z(L,R){this.g=L,this.h=R}function O(L,R){if(P(R))throw Error("division by zero");if(P(L))return new z(y,y);if(N(L))return R=O(T(L),R),new z(T(R.g),T(R.h));if(N(R))return R=O(L,T(R)),new z(T(R.g),R.h);if(30<L.g.length){if(N(L)||N(R))throw Error("slowDivide_ only works with positive integers.");for(var M=S,E=R;0>=E.l(L);)M=K(M),E=K(E);var C=j(M,1),k=j(E,1);for(E=j(E,2),M=j(M,2);!P(E);){var I=k.add(E);0>=I.l(L)&&(C=C.add(M),k=I),E=j(E,1),M=j(M,1)}return R=x(L,C.j(R)),new z(C,R)}for(C=y;0<=L.l(R);){for(M=Math.max(1,Math.floor(L.m()/R.m())),E=Math.ceil(Math.log(M)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),k=m(M),I=k.j(R);N(I)||0<I.l(L);)M-=E,k=m(M),I=k.j(R);P(k)&&(k=S),C=C.add(k),L=x(L,I)}return new z(C,L)}t.A=function(L){return O(this,L).h},t.and=function(L){for(var R=Math.max(this.g.length,L.g.length),M=[],E=0;E<R;E++)M[E]=this.i(E)&L.i(E);return new c(M,this.h&L.h)},t.or=function(L){for(var R=Math.max(this.g.length,L.g.length),M=[],E=0;E<R;E++)M[E]=this.i(E)|L.i(E);return new c(M,this.h|L.h)},t.xor=function(L){for(var R=Math.max(this.g.length,L.g.length),M=[],E=0;E<R;E++)M[E]=this.i(E)^L.i(E);return new c(M,this.h^L.h)};function K(L){for(var R=L.g.length+1,M=[],E=0;E<R;E++)M[E]=L.i(E)<<1|L.i(E-1)>>>31;return new c(M,L.h)}function j(L,R){var M=R>>5;R%=32;for(var E=L.g.length-M,C=[],k=0;k<E;k++)C[k]=0<R?L.i(k+M)>>>R|L.i(k+M+1)<<32-R:L.i(k+M);return new c(C,L.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=v,S_=c}).apply(typeof Jy<"u"?Jy:typeof self<"u"?self:typeof window<"u"?window:{});var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,w){return u==Array.prototype||u==Object.prototype||(u[g]=w.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uf=="object"&&Uf];for(var g=0;g<u.length;++g){var w=u[g];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var r=n(this);function o(u,g){if(g)e:{var w=r;u=u.split(".");for(var F=0;F<u.length-1;F++){var ee=u[F];if(!(ee in w))break e;w=w[ee]}u=u[u.length-1],F=w[u],g=g(F),g!=F&&g!=null&&e(w,u,{configurable:!0,writable:!0,value:g})}}function a(u,g){u instanceof String&&(u+="");var w=0,F=!1,ee={next:function(){if(!F&&w<u.length){var he=w++;return{value:g(he,u[he]),done:!1}}return F=!0,{done:!0,value:void 0}}};return ee[Symbol.iterator]=function(){return ee},ee}o("Array.prototype.values",function(u){return u||function(){return a(this,function(g,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function d(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function m(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function v(u,g,w){return u.call.apply(u.bind,arguments)}function y(u,g,w){if(!u)throw Error();if(2<arguments.length){var F=Array.prototype.slice.call(arguments,2);return function(){var ee=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(ee,F),u.apply(g,ee)}}return function(){return u.apply(g,arguments)}}function S(u,g,w){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:y,S.apply(null,arguments)}function A(u,g){var w=Array.prototype.slice.call(arguments,1);return function(){var F=w.slice();return F.push.apply(F,arguments),u.apply(this,F)}}function P(u,g){function w(){}w.prototype=g.prototype,u.aa=g.prototype,u.prototype=new w,u.prototype.constructor=u,u.Qb=function(F,ee,he){for(var Le=Array(arguments.length-2),en=2;en<arguments.length;en++)Le[en-2]=arguments[en];return g.prototype[ee].apply(F,Le)}}function N(u){const g=u.length;if(0<g){const w=Array(g);for(let F=0;F<g;F++)w[F]=u[F];return w}return[]}function T(u,g){for(let w=1;w<arguments.length;w++){const F=arguments[w];if(d(F)){const ee=u.length||0,he=F.length||0;u.length=ee+he;for(let Le=0;Le<he;Le++)u[ee+Le]=F[Le]}else u.push(F)}}class x{constructor(g,w){this.i=g,this.j=w,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function H(u){return/^[\s\xa0]*$/.test(u)}function z(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var K=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function j(u,g,w){for(const F in u)g.call(w,u[F],F,u)}function L(u,g){for(const w in u)g.call(void 0,u[w],w,u)}function R(u){const g={};for(const w in u)g[w]=u[w];return g}const M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(u,g){let w,F;for(let ee=1;ee<arguments.length;ee++){F=arguments[ee];for(w in F)u[w]=F[w];for(let he=0;he<M.length;he++)w=M[he],Object.prototype.hasOwnProperty.call(F,w)&&(u[w]=F[w])}}function C(u){var g=1;u=u.split(":");const w=[];for(;0<g&&u.length;)w.push(u.shift()),g--;return u.length&&w.push(u.join(":")),w}function k(u){f.setTimeout(()=>{throw u},0)}function I(){var u=ge;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class fe{constructor(){this.h=this.g=null}add(g,w){const F=_e.get();F.set(g,w),this.h?this.h.next=F:this.g=F,this.h=F}}var _e=new x(()=>new pe,u=>u.reset());class pe{constructor(){this.next=this.g=this.h=null}set(g,w){this.h=g,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let me,q=!1,ge=new fe,le=()=>{const u=f.Promise.resolve(void 0);me=()=>{u.then(G)}};var G=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(w){k(w)}var g=_e;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}q=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var se=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const w=()=>{};f.addEventListener("test",w,g),f.removeEventListener("test",w,g)}catch{}return u})();function ve(u,g){if(Pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var w=this.type=u.type,F=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(K){e:{try{O(g.nodeName);var ee=!0;break e}catch{}ee=!1}ee||(g=null)}}else w=="mouseover"?g=u.fromElement:w=="mouseout"&&(g=u.toElement);this.relatedTarget=g,F?(this.clientX=F.clientX!==void 0?F.clientX:F.pageX,this.clientY=F.clientY!==void 0?F.clientY:F.pageY,this.screenX=F.screenX||0,this.screenY=F.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ae[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ve.aa.h.call(this)}}P(ve,Pe);var Ae={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ee="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function He(u,g,w,F,ee){this.listener=u,this.proxy=null,this.src=g,this.type=w,this.capture=!!F,this.ha=ee,this.key=++Ue,this.da=this.fa=!1}function at(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Bt(u){this.src=u,this.g={},this.h=0}Bt.prototype.add=function(u,g,w,F,ee){var he=u.toString();u=this.g[he],u||(u=this.g[he]=[],this.h++);var Le=Jt(u,g,F,ee);return-1<Le?(g=u[Le],w||(g.fa=!1)):(g=new He(g,this.src,he,!!F,ee),g.fa=w,u.push(g)),g};function Mt(u,g){var w=g.type;if(w in u.g){var F=u.g[w],ee=Array.prototype.indexOf.call(F,g,void 0),he;(he=0<=ee)&&Array.prototype.splice.call(F,ee,1),he&&(at(g),u.g[w].length==0&&(delete u.g[w],u.h--))}}function Jt(u,g,w,F){for(var ee=0;ee<u.length;++ee){var he=u[ee];if(!he.da&&he.listener==g&&he.capture==!!w&&he.ha==F)return ee}return-1}var X="closure_lm_"+(1e6*Math.random()|0),Hn={};function Tt(u,g,w,F,ee){if(Array.isArray(g)){for(var he=0;he<g.length;he++)Tt(u,g[he],w,F,ee);return null}return w=xe(w),u&&u[Ee]?u.K(g,w,m(F)?!!F.capture:!1,ee):wt(u,g,w,!1,F,ee)}function wt(u,g,w,F,ee,he){if(!g)throw Error("Invalid event type");var Le=m(ee)?!!ee.capture:!!ee,en=ne(u);if(en||(u[X]=en=new Bt(u)),w=en.add(g,w,F,Le,he),w.proxy)return w;if(F=nt(),w.proxy=F,F.src=u,F.listener=w,u.addEventListener)se||(ee=Le),ee===void 0&&(ee=!1),u.addEventListener(g.toString(),F,ee);else if(u.attachEvent)u.attachEvent(B(g.toString()),F);else if(u.addListener&&u.removeListener)u.addListener(F);else throw Error("addEventListener and attachEvent are unavailable.");return w}function nt(){function u(w){return g.call(u.src,u.listener,w)}const g=D;return u}function Gt(u,g,w,F,ee){if(Array.isArray(g))for(var he=0;he<g.length;he++)Gt(u,g[he],w,F,ee);else F=m(F)?!!F.capture:!!F,w=xe(w),u&&u[Ee]?(u=u.i,g=String(g).toString(),g in u.g&&(he=u.g[g],w=Jt(he,w,F,ee),-1<w&&(at(he[w]),Array.prototype.splice.call(he,w,1),he.length==0&&(delete u.g[g],u.h--)))):u&&(u=ne(u))&&(g=u.g[g.toString()],u=-1,g&&(u=Jt(g,w,F,ee)),(w=-1<u?g[u]:null)&&Ke(w))}function Ke(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[Ee])Mt(g.i,u);else{var w=u.type,F=u.proxy;g.removeEventListener?g.removeEventListener(w,F,u.capture):g.detachEvent?g.detachEvent(B(w),F):g.addListener&&g.removeListener&&g.removeListener(F),(w=ne(g))?(Mt(w,u),w.h==0&&(w.src=null,g[X]=null)):at(u)}}}function B(u){return u in Hn?Hn[u]:Hn[u]="on"+u}function D(u,g){if(u.da)u=!0;else{g=new ve(g,this);var w=u.listener,F=u.ha||u.src;u.fa&&Ke(u),u=w.call(F,g)}return u}function ne(u){return u=u[X],u instanceof Bt?u:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(u){return typeof u=="function"?u:(u[Se]||(u[Se]=function(g){return u.handleEvent(g)}),u[Se])}function de(){re.call(this),this.i=new Bt(this),this.M=this,this.F=null}P(de,re),de.prototype[Ee]=!0,de.prototype.removeEventListener=function(u,g,w,F){Gt(this,u,g,w,F)};function Be(u,g){var w,F=u.F;if(F)for(w=[];F;F=F.F)w.push(F);if(u=u.M,F=g.type||g,typeof g=="string")g=new Pe(g,u);else if(g instanceof Pe)g.target=g.target||u;else{var ee=g;g=new Pe(F,u),E(g,ee)}if(ee=!0,w)for(var he=w.length-1;0<=he;he--){var Le=g.g=w[he];ee=De(Le,F,!0,g)&&ee}if(Le=g.g=u,ee=De(Le,F,!0,g)&&ee,ee=De(Le,F,!1,g)&&ee,w)for(he=0;he<w.length;he++)Le=g.g=w[he],ee=De(Le,F,!1,g)&&ee}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var w=u.g[g],F=0;F<w.length;F++)at(w[F]);delete u.g[g],u.h--}}this.F=null},de.prototype.K=function(u,g,w,F){return this.i.add(String(u),g,!1,w,F)},de.prototype.L=function(u,g,w,F){return this.i.add(String(u),g,!0,w,F)};function De(u,g,w,F){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var ee=!0,he=0;he<g.length;++he){var Le=g[he];if(Le&&!Le.da&&Le.capture==w){var en=Le.listener,jn=Le.ha||Le.src;Le.fa&&Mt(u.i,Le),ee=en.call(jn,F)!==!1&&ee}}return ee&&!F.defaultPrevented}function We(u,g,w){if(typeof u=="function")w&&(u=S(u,w));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:f.setTimeout(u,g||0)}function xt(u){u.g=We(()=>{u.g=null,u.i&&(u.i=!1,xt(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class Ce extends re{constructor(g,w){super(),this.m=g,this.l=w,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:xt(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(u){re.call(this),this.h=u,this.g={}}P(Ge,re);var lt=[];function dt(u){j(u.g,function(g,w){this.g.hasOwnProperty(w)&&Ke(g)},u),u.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),dt(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=f.JSON.stringify,At=f.JSON.parse,vt=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ut(){}Ut.prototype.h=null;function $(u){return u.h||(u.h=u.i())}function Oe(){}var ue={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ye(){Pe.call(this,"d")}P(ye,Pe);function ze(){Pe.call(this,"c")}P(ze,Pe);var Fe={},gt=null;function Qt(){return gt=gt||new de}Fe.La="serverreachability";function Tn(u){Pe.call(this,Fe.La,u)}P(Tn,Pe);function Ct(u){const g=Qt();Be(g,new Tn(g))}Fe.STAT_EVENT="statevent";function ui(u,g){Pe.call(this,Fe.STAT_EVENT,u),this.stat=g}P(ui,Pe);function Yt(u){const g=Qt();Be(g,new ui(g,u))}Fe.Ma="timingevent";function Ls(u,g){Pe.call(this,Fe.Ma,u),this.size=g}P(Ls,Pe);function Li(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},g)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Pr(u,g,w,F,ee,he){u.info(function(){if(u.g)if(he)for(var Le="",en=he.split("&"),jn=0;jn<en.length;jn++){var Ft=en[jn].split("=");if(1<Ft.length){var Qn=Ft[0];Ft=Ft[1];var ei=Qn.split("_");Le=2<=ei.length&&ei[1]=="type"?Le+(Qn+"="+Ft+"&"):Le+(Qn+"=redacted&")}}else Le=null;else Le=he;return"XMLHTTP REQ ("+F+") [attempt "+ee+"]: "+g+`
`+w+`
`+Le})}function Is(u,g,w,F,ee,he,Le){u.info(function(){return"XMLHTTP RESP ("+F+") [ attempt "+ee+"]: "+g+`
`+w+`
`+he+" "+Le})}function Ii(u,g,w,F){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ka(u,w)+(F?" "+F:"")})}function rs(u,g){u.info(function(){return"TIMEOUT: "+g})}Ai.prototype.info=function(){};function Ka(u,g){if(!u.g)return g;if(!g)return null;try{var w=JSON.parse(g);if(w){for(u=0;u<w.length;u++)if(Array.isArray(w[u])){var F=w[u];if(!(2>F.length)){var ee=F[1];if(Array.isArray(ee)&&!(1>ee.length)){var he=ee[0];if(he!="noop"&&he!="stop"&&he!="close")for(var Le=1;Le<ee.length;Le++)ee[Le]=""}}}}return Xe(w)}catch{return g}}var ss={NO_ERROR:0,TIMEOUT:8},Za={},Di;function Ds(){}P(Ds,Ut),Ds.prototype.g=function(){return new XMLHttpRequest},Ds.prototype.i=function(){return{}},Di=new Ds;function $i(u,g,w,F){this.j=u,this.i=g,this.l=w,this.R=F||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ja}function Ja(){this.i=null,this.g="",this.h=!1}var Jo={},fo={};function po(u,g,w){u.L=1,u.v=vn(Wn(g)),u.m=w,u.P=!0,U(u,null)}function U(u,g){u.F=Date.now(),Q(u),u.A=Wn(u.v);var w=u.A,F=u.R;Array.isArray(F)||(F=[String(F)]),mo(w.i,"t",F),u.C=0,w=u.j.J,u.h=new Ja,u.g=hh(u.j,w?g:null,!u.m),0<u.O&&(u.M=new Ce(S(u.Y,u,u.g),u.O)),g=u.U,w=u.g,F=u.ca;var ee="readystatechange";Array.isArray(ee)||(ee&&(lt[0]=ee.toString()),ee=lt);for(var he=0;he<ee.length;he++){var Le=Tt(w,ee[he],F||g.handleEvent,!1,g.h||g);if(!Le)break;g.g[Le.key]=Le}g=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),Ct(),Pr(u.i,u.u,u.A,u.l,u.R,u.m)}$i.prototype.ca=function(u){u=u.target;const g=this.M;g&&Ui(u)==3?g.j():this.Y(u)},$i.prototype.Y=function(u){try{if(u==this.g)e:{const ei=Ui(this.g);var g=this.g.Ba();const hs=this.g.Z();if(!(3>ei)&&(ei!=3||this.g&&(this.h.h||this.g.oa()||Hu(this.g)))){this.J||ei!=4||g==7||(g==8||0>=hs?Ct(3):Ct(2)),we(this);var w=this.g.Z();this.X=w;t:if(Z(this)){var F=Hu(this.g);u="";var ee=F.length,he=Ui(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Ne(this);var Le="";break t}this.h.i=new f.TextDecoder}for(g=0;g<ee;g++)this.h.h=!0,u+=this.h.i.decode(F[g],{stream:!(he&&g==ee-1)});F.length=0,this.h.g+=u,this.C=0,Le=this.h.g}else Le=this.g.oa();if(this.o=w==200,Is(this.i,this.u,this.A,this.l,this.R,ei,w),this.o){if(this.T&&!this.K){t:{if(this.g){var en,jn=this.g;if((en=jn.g?jn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(en)){var Ft=en;break t}}Ft=null}if(w=Ft)Ii(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qe(this,w);else{this.o=!1,this.s=3,Yt(12),ke(this),Ne(this);break e}}if(this.P){w=!0;let fi;for(;!this.J&&this.C<Le.length;)if(fi=oe(this,Le),fi==fo){ei==4&&(this.s=4,Yt(14),w=!1),Ii(this.i,this.l,null,"[Incomplete Response]");break}else if(fi==Jo){this.s=4,Yt(15),Ii(this.i,this.l,Le,"[Invalid Chunk]"),w=!1;break}else Ii(this.i,this.l,fi,null),qe(this,fi);if(Z(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ei!=4||Le.length!=0||this.h.h||(this.s=1,Yt(16),w=!1),this.o=this.o&&w,!w)Ii(this.i,this.l,Le,"[Invalid Chunked Response]"),ke(this),Ne(this);else if(0<Le.length&&!this.W){this.W=!0;var Qn=this.j;Qn.g==this&&Qn.ba&&!Qn.M&&(Qn.j.info("Great, no buffering proxy detected. Bytes received: "+Le.length),Wu(Qn),Qn.M=!0,Yt(11))}}else Ii(this.i,this.l,Le,null),qe(this,Le);ei==4&&ke(this),this.o&&!this.J&&(ei==4?al(this.j,this):(this.o=!1,Q(this)))}else nl(this.g),w==400&&0<Le.indexOf("Unknown SID")?(this.s=3,Yt(12)):(this.s=0,Yt(13)),ke(this),Ne(this)}}}catch{}finally{}};function Z(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function oe(u,g){var w=u.C,F=g.indexOf(`
`,w);return F==-1?fo:(w=Number(g.substring(w,F)),isNaN(w)?Jo:(F+=1,F+w>g.length?fo:(g=g.slice(F,F+w),u.C=F+w,g)))}$i.prototype.cancel=function(){this.J=!0,ke(this)};function Q(u){u.S=Date.now()+u.I,J(u,u.I)}function J(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Li(S(u.ba,u),g)}function we(u){u.B&&(f.clearTimeout(u.B),u.B=null)}$i.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(rs(this.i,this.A),this.L!=2&&(Ct(),Yt(17)),ke(this),this.s=2,Ne(this)):J(this,this.S-u)};function Ne(u){u.j.G==0||u.J||al(u.j,u)}function ke(u){we(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,dt(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function qe(u,g){try{var w=u.j;if(w.G!=0&&(w.g==u||yt(w.h,u))){if(!u.K&&yt(w.h,u)&&w.G==3){try{var F=w.Da.g.parse(g)}catch{F=null}if(Array.isArray(F)&&F.length==3){var ee=F;if(ee[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<u.F)ol(w),Ur(w);else break e;sl(w),Yt(18)}}else w.za=ee[1],0<w.za-w.T&&37500>ee[2]&&w.F&&w.v==0&&!w.C&&(w.C=Li(S(w.Za,w),6e3));if(1>=Lt(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else Os(w,11)}else if((u.K||w.g==u)&&ol(w),!H(g))for(ee=w.Da.g.parse(g),g=0;g<ee.length;g++){let Ft=ee[g];if(w.T=Ft[0],Ft=Ft[1],w.G==2)if(Ft[0]=="c"){w.K=Ft[1],w.ia=Ft[2];const Qn=Ft[3];Qn!=null&&(w.la=Qn,w.j.info("VER="+w.la));const ei=Ft[4];ei!=null&&(w.Aa=ei,w.j.info("SVER="+w.Aa));const hs=Ft[5];hs!=null&&typeof hs=="number"&&0<hs&&(F=1.5*hs,w.L=F,w.j.info("backChannelRequestTimeoutMs_="+F)),F=w;const fi=u.g;if(fi){const ll=fi.g?fi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ll){var he=F.h;he.g||ll.indexOf("spdy")==-1&&ll.indexOf("quic")==-1&&ll.indexOf("h2")==-1||(he.j=he.l,he.g=new Set,he.h&&(an(he,he.h),he.h=null))}if(F.D){const ul=fi.g?fi.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(F.ya=ul,St(F.I,F.D,ul))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-u.F,w.j.info("Handshake RTT: "+w.R+"ms")),F=w;var Le=u;if(F.qa=ch(F,F.J?F.ia:null,F.W),Le.K){sn(F.h,Le);var en=Le,jn=F.L;jn&&(en.I=jn),en.B&&(we(en),Q(en)),F.g=Le}else ta(F);0<w.i.length&&cs(w)}else Ft[0]!="stop"&&Ft[0]!="close"||Os(w,7);else w.G==3&&(Ft[0]=="stop"||Ft[0]=="close"?Ft[0]=="stop"?Os(w,7):hi(w):Ft[0]!="noop"&&w.l&&w.l.ta(Ft),w.v=0)}}Ct(4)}catch{}}var mt=class{constructor(u,g){this.g=u,this.map=g}};function ct(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ye(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Lt(u){return u.h?1:u.g?u.g.size:0}function yt(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function an(u,g){u.g?u.g.add(g):u.h=g}function sn(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}ct.prototype.cancel=function(){if(this.i=Dt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Dt(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const w of u.g.values())g=g.concat(w.D);return g}return N(u.i)}function it(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(d(u)){for(var g=[],w=u.length,F=0;F<w;F++)g.push(u[F]);return g}g=[],w=0;for(F in u)g[w++]=u[F];return g}function fn(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(d(u)||typeof u=="string"){var g=[];u=u.length;for(var w=0;w<u;w++)g.push(w);return g}g=[],w=0;for(const F in u)g[w++]=F;return g}}}function bt(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(d(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var w=fn(u),F=it(u),ee=F.length,he=0;he<ee;he++)g.call(void 0,F[he],w&&w[he],u)}var Gn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function os(u,g){if(u){u=u.split("&");for(var w=0;w<u.length;w++){var F=u[w].indexOf("="),ee=null;if(0<=F){var he=u[w].substring(0,F);ee=u[w].substring(F+1)}else he=u[w];g(he,ee?decodeURIComponent(ee.replace(/\+/g," ")):"")}}}function _n(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _n){this.h=u.h,Wt(this,u.j),this.o=u.o,this.g=u.g,Pn(this,u.s),this.l=u.l;var g=u.i,w=new as;w.i=g.i,g.g&&(w.g=new Map(g.g),w.h=g.h),Ln(this,w),this.m=u.m}else u&&(g=String(u).match(Gn))?(this.h=!1,Wt(this,g[1]||"",!0),this.o=Pt(g[2]||""),this.g=Pt(g[3]||"",!0),Pn(this,g[4]),this.l=Pt(g[5]||"",!0),Ln(this,g[6]||"",!0),this.m=Pt(g[7]||"")):(this.h=!1,this.i=new as(null,this.h))}_n.prototype.toString=function(){var u=[],g=this.j;g&&u.push(_i(g,Qa,!0),":");var w=this.g;return(w||g=="file")&&(u.push("//"),(g=this.o)&&u.push(_i(g,Qa,!0),"@"),u.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&u.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&u.push("/"),u.push(_i(w,w.charAt(0)=="/"?nh:th,!0))),(w=this.i.toString())&&u.push("?",w),(w=this.m)&&u.push("#",_i(w,Bu)),u.join("")};function Wn(u){return new _n(u)}function Wt(u,g,w){u.j=w?Pt(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function Pn(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function Ln(u,g,w){g instanceof as?(u.i=g,ls(u.i,u.h)):(w||(g=_i(g,ih)),u.i=new as(g,u.h))}function St(u,g,w){u.i.set(g,w)}function vn(u){return St(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pt(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function _i(u,g,w){return typeof u=="string"?(u=encodeURI(u).replace(g,eh),w&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function eh(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Qa=/[#\/\?@]/g,th=/[#\?:]/g,nh=/[#\?]/g,ih=/[#\?@]/g,Bu=/#/g;function as(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function ci(u){u.g||(u.g=new Map,u.h=0,u.i&&os(u.i,function(g,w){u.add(decodeURIComponent(g.replace(/\+/g," ")),w)}))}t=as.prototype,t.add=function(u,g){ci(this),this.i=null,u=pr(this,u);var w=this.g.get(u);return w||this.g.set(u,w=[]),w.push(g),this.h+=1,this};function Lr(u,g){ci(u),g=pr(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Ir(u,g){return ci(u),g=pr(u,g),u.g.has(g)}t.forEach=function(u,g){ci(this),this.g.forEach(function(w,F){w.forEach(function(ee){u.call(g,ee,F,this)},this)},this)},t.na=function(){ci(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),w=[];for(let F=0;F<g.length;F++){const ee=u[F];for(let he=0;he<ee.length;he++)w.push(g[F])}return w},t.V=function(u){ci(this);let g=[];if(typeof u=="string")Ir(this,u)&&(g=g.concat(this.g.get(pr(this,u))));else{u=Array.from(this.g.values());for(let w=0;w<u.length;w++)g=g.concat(u[w])}return g},t.set=function(u,g){return ci(this),this.i=null,u=pr(this,u),Ir(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},t.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function mo(u,g,w){Lr(u,g),0<w.length&&(u.i=null,u.g.set(pr(u,g),N(w)),u.h+=w.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var w=0;w<g.length;w++){var F=g[w];const he=encodeURIComponent(String(F)),Le=this.V(F);for(F=0;F<Le.length;F++){var ee=he;Le[F]!==""&&(ee+="="+encodeURIComponent(String(Le[F]))),u.push(ee)}}return this.i=u.join("&")};function pr(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function ls(u,g){g&&!u.j&&(ci(u),u.i=null,u.g.forEach(function(w,F){var ee=F.toLowerCase();F!=ee&&(Lr(this,F),mo(this,ee,w))},u)),u.j=g}function Nd(u,g){const w=new Ai;if(f.Image){const F=new Image;F.onload=A(Ni,w,"TestLoadImage: loaded",!0,g,F),F.onerror=A(Ni,w,"TestLoadImage: error",!1,g,F),F.onabort=A(Ni,w,"TestLoadImage: abort",!1,g,F),F.ontimeout=A(Ni,w,"TestLoadImage: timeout",!1,g,F),f.setTimeout(function(){F.ontimeout&&F.ontimeout()},1e4),F.src=u}else g(!1)}function rh(u,g){const w=new Ai,F=new AbortController,ee=setTimeout(()=>{F.abort(),Ni(w,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:F.signal}).then(he=>{clearTimeout(ee),he.ok?Ni(w,"TestPingServer: ok",!0,g):Ni(w,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(ee),Ni(w,"TestPingServer: error",!1,g)})}function Ni(u,g,w,F,ee){try{ee&&(ee.onload=null,ee.onerror=null,ee.onabort=null,ee.ontimeout=null),F(w)}catch{}}function Ud(){this.g=new vt}function sh(u,g,w){const F=w||"";try{bt(u,function(ee,he){let Le=ee;m(ee)&&(Le=Xe(ee)),g.push(F+he+"="+encodeURIComponent(Le))})}catch(ee){throw g.push(F+"type="+encodeURIComponent("_badmap")),ee}}function Ns(u){this.l=u.Ub||null,this.j=u.eb||!1}P(Ns,Ut),Ns.prototype.g=function(){return new Qo(this.l,this.j)},Ns.prototype.i=(function(u){return function(){return u}})({});function Qo(u,g){de.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Qo,de),t=Qo.prototype,t.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,Nr(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||f).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function oh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Dr(this):Nr(this),this.readyState==3&&oh(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Dr(this))},t.Qa=function(u){this.g&&(this.response=u,Dr(this))},t.ga=function(){this.g&&Dr(this)};function Dr(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Nr(u)}t.setRequestHeader=function(u,g){this.u.append(u,g)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var w=g.next();!w.done;)w=w.value,u.push(w[0]+": "+w[1]),w=g.next();return u.join(`\r
`)};function Nr(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Us(u){let g="";return j(u,function(w,F){g+=F,g+=":",g+=w,g+=`\r
`}),g}function go(u,g,w){e:{for(F in w){var F=!1;break e}F=!0}F||(w=Us(w),typeof u=="string"?w!=null&&encodeURIComponent(String(w)):St(u,g,w))}function yn(u){de.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(yn,de);var Fd=/^https?$/i,zu=["POST","PUT"];t=yn.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,g,w,F){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Di.g(),this.v=this.o?$(this.o):$(Di),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(he){ea(this,he);return}if(u=w||"",w=new Map(this.headers),F)if(Object.getPrototypeOf(F)===Object.prototype)for(var ee in F)w.set(ee,F[ee]);else if(typeof F.keys=="function"&&typeof F.get=="function")for(const he of F.keys())w.set(he,F.get(he));else throw Error("Unknown input type for opt_headers: "+String(F));F=Array.from(w.keys()).find(he=>he.toLowerCase()=="content-type"),ee=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(zu,g,void 0))||F||ee||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[he,Le]of w)this.g.setRequestHeader(he,Le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tl(this),this.u=!0,this.g.send(u),this.u=!1}catch(he){ea(this,he)}};function ea(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,el(u),Ki(u)}function el(u){u.A||(u.A=!0,Be(u,"complete"),Be(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Be(this,"complete"),Be(this,"abort"),Ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),yn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vu(this):this.bb())},t.bb=function(){Vu(this)};function Vu(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Ui(u)!=4||u.Z()!=2)){if(u.u&&Ui(u)==4)We(u.Ea,0,u);else if(Be(u,"readystatechange"),Ui(u)==4){u.h=!1;try{const Le=u.Z();e:switch(Le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var w;if(!(w=g)){var F;if(F=Le===0){var ee=String(u.D).match(Gn)[1]||null;!ee&&f.self&&f.self.location&&(ee=f.self.location.protocol.slice(0,-1)),F=!Fd.test(ee?ee.toLowerCase():"")}w=F}if(w)Be(u,"complete"),Be(u,"success");else{u.m=6;try{var he=2<Ui(u)?u.g.statusText:""}catch{he=""}u.l=he+" ["+u.Z()+"]",el(u)}}finally{Ki(u)}}}}function Ki(u,g){if(u.g){tl(u);const w=u.g,F=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||Be(u,"ready");try{w.onreadystatechange=F}catch{}}}function tl(u){u.I&&(f.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Ui(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Ui(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),At(g)}};function Hu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function nl(u){const g={};u=(u.g&&2<=Ui(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let F=0;F<u.length;F++){if(H(u[F]))continue;var w=C(u[F]);const ee=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const he=g[ee]||[];g[ee]=he,he.push(w)}L(g,function(F){return F.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(u,g,w){return w&&w.internalChannelParams&&w.internalChannelParams[u]||g}function Gu(u){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,u),this.cb=us("retryDelaySeedMs",1e4,u),this.Wa=us("forwardChannelMaxRetries",2,u),this.wa=us("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ct(u&&u.concurrentRequestLimit),this.Da=new Ud,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gu.prototype,t.la=8,t.G=1,t.connect=function(u,g,w,F){Yt(0),this.W=u,this.H=g||{},w&&F!==void 0&&(this.H.OSID=w,this.H.OAID=F),this.F=this.X,this.I=ch(this,null,this.W),cs(this)};function hi(u){if(il(u),u.G==3){var g=u.U++,w=Wn(u.I);if(St(w,"SID",u.K),St(w,"RID",g),St(w,"TYPE","terminate"),Fs(u,w),g=new $i(u,u.j,g),g.L=2,g.v=vn(Wn(w)),w=!1,f.navigator&&f.navigator.sendBeacon)try{w=f.navigator.sendBeacon(g.v.toString(),"")}catch{}!w&&f.Image&&(new Image().src=g.v,w=!0),w||(g.g=hh(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Q(g)}uh(u)}function Ur(u){u.g&&(Wu(u),u.g.cancel(),u.g=null)}function il(u){Ur(u),u.u&&(f.clearTimeout(u.u),u.u=null),ol(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function cs(u){if(!Ye(u.h)&&!u.s){u.s=!0;var g=u.Ga;me||le(),q||(me(),q=!0),ge.add(g,u),u.B=0}}function Od(u,g){return Lt(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Li(S(u.Ga,u,g),lh(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const ee=new $i(this,this.j,u);let he=this.o;if(this.S&&(he?(he=R(he),E(he,this.S)):he=this.S),this.m!==null||this.O||(ee.H=he,he=null),this.P)e:{for(var g=0,w=0;w<this.i.length;w++){t:{var F=this.i[w];if("__data__"in F.map&&(F=F.map.__data__,typeof F=="string")){F=F.length;break t}F=void 0}if(F===void 0)break;if(g+=F,4096<g){g=w;break e}if(g===4096||w===this.i.length-1){g=w+1;break e}}g=1e3}else g=1e3;g=_o(this,ee,g),w=Wn(this.I),St(w,"RID",u),St(w,"CVER",22),this.D&&St(w,"X-HTTP-Session-Id",this.D),Fs(this,w),he&&(this.O?g="headers="+encodeURIComponent(String(Us(he)))+"&"+g:this.m&&go(w,this.m,he)),an(this.h,ee),this.Ua&&St(w,"TYPE","init"),this.P?(St(w,"$req",g),St(w,"SID","null"),ee.T=!0,po(ee,w,null)):po(ee,w,g),this.G=2}}else this.G==3&&(u?rl(this,u):this.i.length==0||Ye(this.h)||rl(this))};function rl(u,g){var w;g?w=g.l:w=u.U++;const F=Wn(u.I);St(F,"SID",u.K),St(F,"RID",w),St(F,"AID",u.T),Fs(u,F),u.m&&u.o&&go(F,u.m,u.o),w=new $i(u,u.j,w,u.B+1),u.m===null&&(w.H=u.o),g&&(u.i=g.D.concat(u.i)),g=_o(u,w,1e3),w.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),an(u.h,w),po(w,F,g)}function Fs(u,g){u.H&&j(u.H,function(w,F){St(g,F,w)}),u.l&&bt({},function(w,F){St(g,F,w)})}function _o(u,g,w){w=Math.min(u.i.length,w);var F=u.l?S(u.l.Na,u.l,u):null;e:{var ee=u.i;let he=-1;for(;;){const Le=["count="+w];he==-1?0<w?(he=ee[0].g,Le.push("ofs="+he)):he=0:Le.push("ofs="+he);let en=!0;for(let jn=0;jn<w;jn++){let Ft=ee[jn].g;const Qn=ee[jn].map;if(Ft-=he,0>Ft)he=Math.max(0,ee[jn].g-100),en=!1;else try{sh(Qn,Le,"req"+Ft+"_")}catch{F&&F(Qn)}}if(en){F=Le.join("&");break e}}}return u=u.i.splice(0,w),g.D=u,F}function ta(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;me||le(),q||(me(),q=!0),ge.add(g,u),u.v=0}}function sl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Li(S(u.Fa,u),lh(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Li(S(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Yt(10),Ur(this),ah(this))};function Wu(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function ah(u){u.g=new $i(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=Wn(u.qa);St(g,"RID","rpc"),St(g,"SID",u.K),St(g,"AID",u.T),St(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&St(g,"TO",u.ja),St(g,"TYPE","xmlhttp"),Fs(u,g),u.m&&u.o&&go(g,u.m,u.o),u.L&&(u.g.I=u.L);var w=u.g;u=u.ia,w.L=1,w.v=vn(Wn(g)),w.m=null,w.P=!0,U(w,u)}t.Za=function(){this.C!=null&&(this.C=null,Ur(this),sl(this),Yt(19))};function ol(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function al(u,g){var w=null;if(u.g==g){ol(u),Wu(u),u.g=null;var F=2}else if(yt(u.h,g))w=g.D,sn(u.h,g),F=1;else return;if(u.G!=0){if(g.o)if(F==1){w=g.m?g.m.length:0,g=Date.now()-g.F;var ee=u.B;F=Qt(),Be(F,new Ls(F,w)),cs(u)}else ta(u);else if(ee=g.s,ee==3||ee==0&&0<g.X||!(F==1&&Od(u,g)||F==2&&sl(u)))switch(w&&0<w.length&&(g=u.h,g.i=g.i.concat(w)),ee){case 1:Os(u,5);break;case 4:Os(u,10);break;case 3:Os(u,6);break;default:Os(u,2)}}}function lh(u,g){let w=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(w*=2),w*g}function Os(u,g){if(u.j.info("Error code "+g),g==2){var w=S(u.fb,u),F=u.Xa;const ee=!F;F=new _n(F||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Wt(F,"https"),vn(F),ee?Nd(F.toString(),w):rh(F.toString(),w)}else Yt(2);u.G=0,u.l&&u.l.sa(g),uh(u),il(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Yt(2)):(this.j.info("Failed to ping google.com"),Yt(1))};function uh(u){if(u.G=0,u.ka=[],u.l){const g=Dt(u.h);(g.length!=0||u.i.length!=0)&&(T(u.ka,g),T(u.ka,u.i),u.h.i.length=0,N(u.i),u.i.length=0),u.l.ra()}}function ch(u,g,w){var F=w instanceof _n?Wn(w):new _n(w);if(F.g!="")g&&(F.g=g+"."+F.g),Pn(F,F.s);else{var ee=f.location;F=ee.protocol,g=g?g+"."+ee.hostname:ee.hostname,ee=+ee.port;var he=new _n(null);F&&Wt(he,F),g&&(he.g=g),ee&&Pn(he,ee),w&&(he.l=w),F=he}return w=u.D,g=u.ya,w&&g&&St(F,w,g),St(F,"VER",u.la),Fs(u,F),F}function hh(u,g,w){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new yn(new Ns({eb:w})):new yn(u.pa),g.Ha(u.J),g}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ju(){}t=ju.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fi(u,g){de.call(this),this.g=new Gu(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!H(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!H(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new vo(this)}P(Fi,de),Fi.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fi.prototype.close=function(){hi(this.g)},Fi.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var w={};w.__data__=u,u=w}else this.u&&(w={},w.__data__=Xe(u),u=w);g.i.push(new mt(g.Ya++,u)),g.G==3&&cs(g)},Fi.prototype.N=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,Fi.aa.N.call(this)};function fh(u){ye.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const w in g){u=w;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}P(fh,ye);function dh(){ze.call(this),this.status=1}P(dh,ze);function vo(u){this.g=u}P(vo,ju),vo.prototype.ua=function(){Be(this.g,"a")},vo.prototype.ta=function(u){Be(this.g,new fh(u))},vo.prototype.sa=function(u){Be(this.g,new dh)},vo.prototype.ra=function(){Be(this.g,"b")},Fi.prototype.send=Fi.prototype.o,Fi.prototype.open=Fi.prototype.m,Fi.prototype.close=Fi.prototype.close,ss.NO_ERROR=0,ss.TIMEOUT=8,ss.HTTP_ERROR=6,Za.COMPLETE="complete",Oe.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",de.prototype.listen=de.prototype.K,yn.prototype.listenOnce=yn.prototype.L,yn.prototype.getLastError=yn.prototype.Ka,yn.prototype.getLastErrorCode=yn.prototype.Ba,yn.prototype.getStatus=yn.prototype.Z,yn.prototype.getResponseJson=yn.prototype.Oa,yn.prototype.getResponseText=yn.prototype.oa,yn.prototype.send=yn.prototype.ea,yn.prototype.setWithCredentials=yn.prototype.Ha}).apply(typeof Uf<"u"?Uf:typeof self<"u"?self:typeof window<"u"?window:{});const Qy="@firebase/firestore",eS="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sr.UNAUTHENTICATED=new sr(null),sr.GOOGLE_CREDENTIALS=new sr("google-credentials-uid"),sr.FIRST_PARTY=new sr("first-party-uid"),sr.MOCK_USER=new sr("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Q3("@firebase/firestore");function Zr(t,...e){if(rd.logLevel<=on.DEBUG){const n=e.map(sE);rd.debug(`Firestore (${Dd}): ${t}`,...n)}}function rE(t,...e){if(rd.logLevel<=on.ERROR){const n=e.map(sE);rd.error(`Firestore (${Dd}): ${t}`,...n)}}function sE(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,oE(t,r,n)}function oE(t,e,n){let r=`FIRESTORE (${Dd}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw rE(r),new Error(r)}function Pc(t,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,t||oE(e,o,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Zt extends ku{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(sr.UNAUTHENTICATED)))}shutdown(){}}class sI{constructor(e){this.t=e,this.currentUser=sr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pc(this.o===void 0,42304);let r=this.i;const o=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let a=new Lc;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Lc,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const d=a;e.enqueueRetryable((async()=>{await d.promise,await o(this.currentUser)}))},f=d=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((d=>f(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?f(d):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Lc)}}),0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pc(typeof r.accessToken=="string",31837,{l:r}),new iI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pc(e===null||typeof e=="string",2055,{h:e}),new sr(e)}}class oI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=sr.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new oI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(sr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,HL(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pc(this.o===void 0,3512);const r=a=>{a.error!=null&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,Zr("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pc(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new tS(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=uI(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<n&&(r+=e.charAt(o[a]%62))}return r}}function es(t,e){return t<e?-1:t>e?1:0}function fI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),o=e.codePointAt(n);if(r!==o){if(r<128&&o<128)return es(r,o);{const a=cI(),c=dI(a.encode(nS(t,n)),a.encode(nS(e,n)));return c!==0?c:es(r,o)}}n+=r>65535?2:1}return es(t.length,e.length)}function nS(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function dI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return es(t[n],e[n]);return es(t.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="__name__";class vs{constructor(e,n,r){n===void 0?n=0:n>e.length&&sd(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&sd(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vs?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const a=vs.compareSegments(e.get(o),n.get(o));if(a!==0)return a}return es(e.length,n.length)}static compareSegments(e,n){const r=vs.isNumericId(e),o=vs.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?vs.extractNumericId(e).compare(vs.extractNumericId(n)):fI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return S_.fromString(e.substring(4,e.length-2))}}class Xr extends vs{construct(e,n,r){return new Xr(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Zt(Kt.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((o=>o.length>0)))}return new Xr(n)}static emptyPath(){return new Xr([])}}const pI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Aa extends vs{construct(e,n,r){return new Aa(e,n,r)}static isValidIdentifier(e){return pI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Aa.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===iS}static keyField(){return new Aa([iS])}static fromServerFormat(e){const n=[];let r="",o=0;const a=()=>{if(r.length===0)throw new Zt(Kt.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new Zt(Kt.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[o+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new Zt(Kt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(r+=f,o++):(a(),o++)}if(a(),c)throw new Zt(Kt.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Aa(n)}static emptyPath(){return new Aa([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.path=e}static fromPath(e){return new La(Xr.fromString(e))}static fromName(e){return new La(Xr.fromString(e).popFirst(5))}static empty(){return new La(Xr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xr.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xr.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new La(new Xr(e.slice()))}}function mI(t,e,n,r){if(e===!0&&r===!0)throw new Zt(Kt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qc(t,e){if(!gI(t))throw new Zt(Kt.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const c=t[r];if(o&&typeof c!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&c!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new Zt(Kt.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=-62135596800,sS=1e6;class Ss{static now(){return Ss.fromMillis(Date.now())}static fromDate(e){return Ss.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sS);return new Ss(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Zt(Kt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Zt(Kt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<rS)throw new Zt(Kt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Zt(Kt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sS}_compareTo(e){return this.seconds===e.seconds?es(this.nanoseconds,e.nanoseconds):es(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ss._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qc(e,Ss._jsonSchema))return new Ss(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-rS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ss._jsonSchemaVersion="firestore/timestamp/1.0",Ss._jsonSchema={type:zn("string",Ss._jsonSchemaVersion),seconds:zn("number"),nanoseconds:zn("number")};function _I(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new vI("Invalid base64 string: "+a):a}})(e);return new ja(n)}static fromUint8Array(e){const n=(function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a})(e);return new ja(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return es(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ja.EMPTY_BYTE_STRING=new ja("");const oS="(default)";class od{constructor(e,n){this.projectId=e,this.database=n||oS}static empty(){return new od("","")}get isDefaultDatabase(){return this.database===oS}isEqual(e){return e instanceof od&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n=null,r=[],o=[],a=null,c="F",f=null,d=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=c,this.startAt=f,this.endAt=d,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function SI(t){return new yI(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var aS,Ot;(Ot=aS||(aS={}))[Ot.OK=0]="OK",Ot[Ot.CANCELLED=1]="CANCELLED",Ot[Ot.UNKNOWN=2]="UNKNOWN",Ot[Ot.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ot[Ot.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ot[Ot.NOT_FOUND=5]="NOT_FOUND",Ot[Ot.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ot[Ot.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ot[Ot.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ot[Ot.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ot[Ot.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ot[Ot.ABORTED=10]="ABORTED",Ot[Ot.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ot[Ot.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ot[Ot.INTERNAL=13]="INTERNAL",Ot[Ot.UNAVAILABLE=14]="UNAVAILABLE",Ot[Ot.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new S_([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=1048576;function Qm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-r);o>0&&Zr("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,r,o,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Lc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,a){const c=Date.now()+r,f=new x_(e,n,c,o,a);return f.start(r),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Zt(Kt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var lS,uS;(uS=lS||(lS={})).Fa="default",uS.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="firestore.googleapis.com",hS=!0;class fS{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Zt(Kt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wI,this.ssl=hS}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:hS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EI)throw new Zt(Kt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Zt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Zt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Zt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class AI{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Zt(Kt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Zt(Kt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new rI;switch(r.type){case"firstParty":return new aI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Zt(Kt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=cS.get(n);r&&(Zr("ComponentProvider","Removing Datastore"),cS.delete(n),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new E_(this.firestore,e,this._query)}}class Ms{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new M_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ms(this.firestore,e,this._key)}toJSON(){return{type:Ms._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Qc(n,Ms._jsonSchema))return new Ms(e,r||null,new La(Xr.fromString(n.referencePath)))}}Ms._jsonSchemaVersion="firestore/documentReference/1.0",Ms._jsonSchema={type:zn("string",Ms._jsonSchemaVersion),referencePath:zn("string")};class M_ extends E_{constructor(e,n,r){super(e,n,SI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ms(this.firestore,null,new La(e))}withConverter(e){return new M_(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="AsyncQueue";class pS{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new MI(this,"async_queue_retry"),this.oc=()=>{const r=Qm();r&&Zr(dS,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Qm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Qm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Lc;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_I(e))throw e;Zr(dS,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,rE("INTERNAL UNHANDLED ERROR: ",mS(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const o=x_.createAndSchedule(this,e,n,r,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&sd(47125,{hc:mS(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function mS(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class RI extends AI{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new pS,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pS(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(ja.fromBase64String(e))}catch(n){throw new Zt(Kt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(ja.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qs._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qc(e,Qs._jsonSchema))return Qs.fromBase64String(e.bytes)}}Qs._jsonSchemaVersion="firestore/bytes/1.0",Qs._jsonSchema={type:zn("string",Qs._jsonSchemaVersion),bytes:zn("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Zt(Kt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Aa(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Zt(Kt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Zt(Kt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return es(this._lat,e._lat)||es(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ka._jsonSchemaVersion}}static fromJSON(e){if(Qc(e,ka._jsonSchema))return new ka(e.latitude,e.longitude)}}ka._jsonSchemaVersion="firestore/geoPoint/1.0",ka._jsonSchema={type:zn("string",ka._jsonSchemaVersion),latitude:zn("number"),longitude:zn("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ba._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qc(e,Ba._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ba(e.vectorValues);throw new Zt(Kt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ba._jsonSchemaVersion="firestore/vectorValue/1.0",Ba._jsonSchema={type:zn("string",Ba._jsonSchemaVersion),vectorValues:zn("object")};const CI=new RegExp("[~\\*/\\[\\]]");function bI(t,e,n){if(e.search(CI)>=0)throw gS(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new aE(...e.split("."))._internalPath}catch{throw gS(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function gS(t,e,n,r,o){let a=`Function ${e}() called with invalid data`;a+=". ";let c="";return new Zt(Kt.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,o,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ms(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PI extends lE{data(){return super.data()}}function uE(t,e){return typeof e=="string"?bI(t,e):e instanceof aE?e._internalPath:e._delegate._internalPath}class Ff{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iu extends lE{constructor(e,n,r,o,a,c){super(e,n,r,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Zt(Kt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=iu._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}iu._jsonSchemaVersion="firestore/documentSnapshot/1.0",iu._jsonSchema={type:zn("string",iu._jsonSchemaVersion),bundleSource:zn("string","DocumentSnapshot"),bundleName:zn("string"),bundle:zn("string")};class jf extends iu{data(e={}){return super.data(e)}}class Ic{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ff(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new jf(this._firestore,this._userDataWriter,r.key,r,new Ff(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Zt(Kt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const d=new jf(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ff(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>a||f.type!==3)).map((f=>{const d=new jf(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ff(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let m=-1,v=-1;return f.type!==0&&(m=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:LI(f.type),doc:d,oldIndex:m,newIndex:v}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Zt(Kt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ic._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(n.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return sd(61501,{type:t})}}Ic._jsonSchemaVersion="firestore/querySnapshot/1.0",Ic._jsonSchema={type:zn("string",Ic._jsonSchemaVersion),bundleSource:zn("string","QuerySnapshot"),bundleName:zn("string"),bundle:zn("string")};(function(e,n=!0){(function(o){Dd=o})(WL),id(new nd("firestore",((r,{instanceIdentifier:o,options:a})=>{const c=r.getProvider("app").getImmediate(),f=new RI(new sI(r.getProvider("auth-internal")),new lI(c,r.getProvider("app-check-internal")),(function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Zt(Kt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new od(m.options.projectId,v)})(c,o),c);return a=Object.assign({useFetchStreams:n},a),f._setSettings(a),f}),"PUBLIC").setMultipleInstances(!0)),nu(Qy,eS,e),nu(Qy,eS,"esm2017")})();async function II(t,e){{console.warn("[Firebase] 未設定のためスコアは保存されません");return}}async function DI(t=10){return[]}function NI({score:t,playerName:e,onRestart:n}){const[r,o]=tt.useState([]),[a,c]=tt.useState(!1),[f,d]=tt.useState(!0);tt.useEffect(()=>{async function v(){await II(),c(!0);const y=await DI(10);o(y),d(!1)}v()},[e,t]);const m=r.findIndex(v=>v.name===e&&v.score===t)+1;return Ie.jsx("div",{style:jr.root,children:Ie.jsxs("div",{style:jr.inner,children:[Ie.jsx("h2",{style:jr.title,children:"GAME OVER"}),Ie.jsx("p",{style:jr.name,children:e}),Ie.jsx("div",{style:jr.score,children:t.toLocaleString()}),m>0&&Ie.jsxs("div",{style:jr.rank,children:["ランキング #",m]}),Ie.jsxs("div",{style:jr.board,children:[Ie.jsx("div",{style:jr.boardTitle,children:"TOP 10"}),f?Ie.jsx("div",{style:{color:"#666",padding:"12px 0"},children:"読み込み中..."}):r.length===0?Ie.jsx("div",{style:{color:"#666",padding:"12px 0",fontSize:13},children:"Firebase 未設定のため表示できません"}):r.map((v,y)=>{const S=v.name===e&&v.score===t;return Ie.jsxs("div",{style:{...jr.boardRow,color:S?"#00aaff":"#ccc"},children:[Ie.jsx("span",{style:jr.boardRank,children:y+1}),Ie.jsx("span",{style:{flex:1},children:v.name}),Ie.jsx("span",{style:{fontVariantNumeric:"tabular-nums"},children:v.score.toLocaleString()})]},v.id)})]}),Ie.jsx("button",{onClick:n,style:jr.btn,children:"もう一度プレイ"})]})})}const jr={root:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#040c1a",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},inner:{textAlign:"center",width:"100%",maxWidth:400},title:{fontSize:44,fontWeight:900,color:"#ff4444",marginBottom:4,textShadow:"0 0 20px #ff4444"},name:{color:"#888",fontSize:15,marginBottom:4},score:{fontSize:52,fontWeight:900,marginBottom:4},rank:{color:"#00aaff",fontSize:16,marginBottom:24},board:{background:"#0e1f3d",border:"1px solid #1e3a6a",borderRadius:12,padding:"16px 20px",marginBottom:24,textAlign:"left"},boardTitle:{fontSize:11,color:"#555",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:10},boardRow:{display:"flex",gap:12,padding:"6px 0",borderBottom:"1px solid #1a2e50",fontSize:14},boardRank:{width:20,color:"#555"},btn:{padding:"14px 48px",borderRadius:8,border:"none",background:"#1a4fc4",color:"#fff",fontSize:16,fontWeight:700,cursor:"pointer"}};function UI(){const[t,e]=tt.useState("start"),[n,r]=tt.useState("Player"),[o,a]=tt.useState(0),c=m=>{r(m),e("game")},f=m=>{a(m),e("gameover")},d=()=>{a(0),e("start")};return Ie.jsxs(Ie.Fragment,{children:[t==="start"&&Ie.jsx(MM,{onStart:c}),t==="game"&&Ie.jsx(BP,{playerName:n,onGameOver:f}),t==="gameover"&&Ie.jsx(NI,{score:o,playerName:n,onRestart:d})]})}xM.createRoot(document.getElementById("root")).render(Ie.jsx(tt.StrictMode,{children:Ie.jsx(UI,{})}));
