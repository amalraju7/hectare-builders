(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(t,c){var a;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var t=[],c=0;c<arguments.length;c++){var a=arguments[c];if(a){var e=typeof a;if("string"===e||"number"===e)t.push(a);else if(Array.isArray(a)){if(a.length){var h=n.apply(null,a);h&&t.push(h)}}else if("object"===e){if(a.toString===Object.prototype.toString)for(var i in a)r.call(a,i)&&a[i]&&t.push(i);else t.push(a.toString())}}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0!==(a=(function(){return n}).apply(c,[]))&&(t.exports=a)}()},3454:function(t,c,a){"use strict";var r,n;t.exports=(null==(r=a.g.process)?void 0:r.env)&&"object"==typeof(null==(n=a.g.process)?void 0:n.env)?a.g.process:a(7663)},1118:function(t,c,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(6400)}])},227:function(t,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.getDomainLocale=function(t,c,a,r){return!1},("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),t.exports=c.default)},1551:function(t,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var r=a(2648).Z,n=a(7273).Z,e=r(a(7294)),h=a(1003),i=a(7795),l=a(4465),v=a(2692),u=a(8245),o=a(9246),s=a(227),z=a(3468);let g=new Set;function d(t,c,a,r){if(h.isLocalURL(c)){if(!r.bypassPrefetchedCheck){let n=void 0!==r.locale?r.locale:"locale"in t?t.locale:void 0,e=c+"%"+a+"%"+n;if(g.has(e))return;g.add(e)}Promise.resolve(t.prefetch(c,a,r)).catch(t=>{})}}function f(t){return"string"==typeof t?t:i.formatUrl(t)}let m=e.default.forwardRef(function(t,c){let a,r;let{href:i,as:g,children:m,prefetch:w,passHref:M,replace:H,shallow:p,scroll:V,locale:C,onClick:L,onMouseEnter:_,onTouchStart:x,legacyBehavior:B=!1}=t,F=n(t,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);a=m,B&&("string"==typeof a||"number"==typeof a)&&(a=e.default.createElement("a",null,a));let A=!1!==w,S=e.default.useContext(v.RouterContext),b=e.default.useContext(u.AppRouterContext),y=null!=S?S:b,Z=!S,{href:k,as:R}=e.default.useMemo(()=>{if(!S){let t=f(i);return{href:t,as:g?f(g):t}}let[c,a]=h.resolveHref(S,i,!0);return{href:c,as:g?h.resolveHref(S,g):a||c}},[S,i,g]),D=e.default.useRef(k),T=e.default.useRef(R);B&&(r=e.default.Children.only(a));let P=B?r&&"object"==typeof r&&r.ref:c,[I,E,j]=o.useIntersection({rootMargin:"200px"}),O=e.default.useCallback(t=>{(T.current!==R||D.current!==k)&&(j(),T.current=R,D.current=k),I(t),P&&("function"==typeof P?P(t):"object"==typeof P&&(P.current=t))},[R,P,k,j,I]);e.default.useEffect(()=>{y&&E&&A&&d(y,k,R,{locale:C})},[R,k,E,C,A,null==S?void 0:S.locale,y]);let N={ref:O,onClick(t){B||"function"!=typeof L||L(t),B&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),y&&!t.defaultPrevented&&function(t,c,a,r,n,i,l,v,u,o){let{nodeName:s}=t.currentTarget,z="A"===s.toUpperCase();if(z&&(function(t){let{target:c}=t.currentTarget;return c&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)||!h.isLocalURL(a)))return;t.preventDefault();let g=()=>{"beforePopState"in c?c[n?"replace":"push"](a,r,{shallow:i,locale:v,scroll:l}):c[n?"replace":"push"](r||a,{forceOptimisticNavigation:!o})};u?e.default.startTransition(g):g()}(t,y,k,R,H,p,V,C,Z,A)},onMouseEnter(t){B||"function"!=typeof _||_(t),B&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),y&&(A||!Z)&&d(y,k,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(t){B||"function"!=typeof x||x(t),B&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(t),y&&(A||!Z)&&d(y,k,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!B||M||"a"===r.type&&!("href"in r.props)){let q=void 0!==C?C:null==S?void 0:S.locale,U=(null==S?void 0:S.isLocaleDomain)&&s.getDomainLocale(R,q,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);N.href=U||z.addBasePath(l.addLocale(R,q,null==S?void 0:S.defaultLocale))}return B?e.default.cloneElement(r,N):e.default.createElement("a",Object.assign({},F,N),a)});c.default=m,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),t.exports=c.default)},9246:function(t,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.useIntersection=function(t){let{rootRef:c,rootMargin:a,disabled:l}=t,v=l||!e,[u,o]=r.useState(!1),[s,z]=r.useState(null);r.useEffect(()=>{if(e){if(!v&&!u&&s&&s.tagName){let t=function(t,c,a){let{id:r,observer:n,elements:e}=function(t){let c;let a={root:t.root||null,margin:t.rootMargin||""},r=i.find(t=>t.root===a.root&&t.margin===a.margin);if(r&&(c=h.get(r)))return c;let n=new Map,e=new IntersectionObserver(t=>{t.forEach(t=>{let c=n.get(t.target),a=t.isIntersecting||t.intersectionRatio>0;c&&a&&c(a)})},t);return c={id:a,observer:e,elements:n},i.push(a),h.set(a,c),c}(a);return e.set(t,c),n.observe(t),function(){if(e.delete(t),n.unobserve(t),0===e.size){n.disconnect(),h.delete(r);let c=i.findIndex(t=>t.root===r.root&&t.margin===r.margin);c>-1&&i.splice(c,1)}}}(s,t=>t&&o(t),{root:null==c?void 0:c.current,rootMargin:a});return t}}else if(!u){let r=n.requestIdleCallback(()=>o(!0));return()=>n.cancelIdleCallback(r)}},[s,v,a,c,u]);let g=r.useCallback(()=>{o(!1)},[]);return[z,u,g]};var r=a(7294),n=a(4686);let e="function"==typeof IntersectionObserver,h=new Map,i=[];("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),t.exports=c.default)},6400:function(t,c,a){"use strict";let r,n,e,h,i,l;a.r(c),a.d(c,{default:function(){return c1}});var v,u,o,s=a(5893),z=a(3454);/**
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
 */let g=function(t){let c=[],a=0;for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);n<128?c[a++]=n:n<2048?(c[a++]=n>>6|192,c[a++]=63&n|128):(64512&n)==55296&&r+1<t.length&&(64512&t.charCodeAt(r+1))==56320?(n=65536+((1023&n)<<10)+(1023&t.charCodeAt(++r)),c[a++]=n>>18|240,c[a++]=n>>12&63|128,c[a++]=n>>6&63|128,c[a++]=63&n|128):(c[a++]=n>>12|224,c[a++]=n>>6&63|128,c[a++]=63&n|128)}return c},d=function(t){let c=[],a=0,r=0;for(;a<t.length;){let n=t[a++];if(n<128)c[r++]=String.fromCharCode(n);else if(n>191&&n<224){let e=t[a++];c[r++]=String.fromCharCode((31&n)<<6|63&e)}else if(n>239&&n<365){let h=t[a++],i=t[a++],l=t[a++],v=((7&n)<<18|(63&h)<<12|(63&i)<<6|63&l)-65536;c[r++]=String.fromCharCode(55296+(v>>10)),c[r++]=String.fromCharCode(56320+(1023&v))}else{let u=t[a++],o=t[a++];c[r++]=String.fromCharCode((15&n)<<12|(63&u)<<6|63&o)}}return c.join("")},f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,c){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let n=0;n<t.length;n+=3){let e=t[n],h=n+1<t.length,i=h?t[n+1]:0,l=n+2<t.length,v=l?t[n+2]:0,u=e>>2,o=(3&e)<<4|i>>4,s=(15&i)<<2|v>>6,z=63&v;l||(z=64,h||(s=64)),r.push(a[u],a[o],a[s],a[z])}return r.join("")},encodeString(t,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(t):this.encodeByteArray(g(t),c)},decodeString(t,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(t):d(this.decodeStringToByteArray(t,c))},decodeStringToByteArray(t,c){this.init_();let a=c?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let n=0;n<t.length;){let e=a[t.charAt(n++)],h=n<t.length,i=h?a[t.charAt(n)]:0;++n;let l=n<t.length,v=l?a[t.charAt(n)]:64;++n;let u=n<t.length,o=u?a[t.charAt(n)]:64;if(++n,null==e||null==i||null==v||null==o)throw new m;let s=e<<2|i>>4;if(r.push(s),64!==v){let z=i<<4&240|v>>2;if(r.push(z),64!==o){let g=v<<6&192|o;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let w=function(t){let c=g(t);return f.encodeByteArray(c,!0)},M=function(t){return w(t).replace(/\./g,"")},H=function(t){try{return f.decodeString(t,!0)}catch(c){console.error("base64Decode failed: ",c)}return null},p=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a.g)return a.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,V=()=>{if(void 0===z||void 0===z.env)return;let t=z.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(c){return}let a=t&&H(t[1]);return a&&JSON.parse(a)},L=()=>{try{return p()||V()||C()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_=()=>{var t;return null===(t=L())||void 0===t?void 0:t.config};/**
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
 */class x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,c)=>{this.resolve=t,this.reject=c})}wrapCallback(t){return(c,a)=>{c?this.reject(c):this.resolve(a),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(c):t(c,a))}}}function B(){try{return"object"==typeof indexedDB}catch(t){return!1}}function F(){return new Promise((t,c)=>{try{let a=!0,r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),a||self.indexedDB.deleteDatabase(r),t(!0)},n.onupgradeneeded=()=>{a=!1},n.onerror=()=>{var t;c((null===(t=n.error)||void 0===t?void 0:t.message)||"")}}catch(e){c(e)}})}class A extends Error{constructor(t,c,a){super(c),this.code=t,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,c,a){this.service=t,this.serviceName=c,this.errors=a}create(t,...c){let a=c[0]||{},r=`${this.service}/${t}`,n=this.errors[t],e=n?n.replace(b,(t,c)=>{let r=a[c];return null!=r?String(r):`<${c}?>`}):"Error",h=`${this.serviceName}: ${e} (${r}).`,i=new A(r,h,a);return i}}let b=/\{\$([^}]+)}/g;function y(t,c){if(t===c)return!0;let a=Object.keys(t),r=Object.keys(c);for(let n of a){if(!r.includes(n))return!1;let e=t[n],h=c[n];if(Z(e)&&Z(h)){if(!y(e,h))return!1}else if(e!==h)return!1}for(let i of r)if(!a.includes(i))return!1;return!0}function Z(t){return null!==t&&"object"==typeof t}function k(t,c=1e3,a=2){let r=c*Math.pow(a,t);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}class R{constructor(t,c,a){this.name=t,this.instanceFactory=c,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */let D="[DEFAULT]";/**
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
 */class T{constructor(t,c){this.name=t,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let c=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(c)){let a=new x;if(this.instancesDeferred.set(c,a),this.isInitialized(c)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:c});r&&a.resolve(r)}catch(n){}}return this.instancesDeferred.get(c).promise}getImmediate(t){var c;let a=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(c=null==t?void 0:t.optional)&&void 0!==c&&c;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(n){if(r)return null;throw n}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:D})}catch(c){}for(let[a,r]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(a);try{let e=this.getOrInitializeService({instanceIdentifier:n});r.resolve(e)}catch(h){}}}}clearInstance(t=D){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=D){return this.instances.has(t)}getOptions(t=D){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:c={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:a,options:c});for(let[n,e]of this.instancesDeferred.entries()){let h=this.normalizeInstanceIdentifier(n);a===h&&e.resolve(r)}return r}onInit(t,c){var a;let r=this.normalizeInstanceIdentifier(c),n=null!==(a=this.onInitCallbacks.get(r))&&void 0!==a?a:new Set;n.add(t),this.onInitCallbacks.set(r,n);let e=this.instances.get(r);return e&&t(e,r),()=>{n.delete(t)}}invokeOnInitCallbacks(t,c){let a=this.onInitCallbacks.get(c);if(a)for(let r of a)try{r(t,c)}catch(n){}}getOrInitializeService({instanceIdentifier:t,options:c={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:t===D?void 0:t,options:c}),this.instances.set(t,a),this.instancesOptions.set(t,c),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch(r){}return a||null}normalizeInstanceIdentifier(t=D){return this.component?this.component.multipleInstances?t:D:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class P{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let c=this.getProvider(t.name);if(c.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);c.setComponent(t)}addOrOverwriteComponent(t){let c=this.getProvider(t.name);c.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let c=new T(t,this);return this.providers.set(t,c),c}getProviders(){return Array.from(this.providers.values())}}/**
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
 */let I=[];(u=o||(o={}))[u.DEBUG=0]="DEBUG",u[u.VERBOSE=1]="VERBOSE",u[u.INFO=2]="INFO",u[u.WARN=3]="WARN",u[u.ERROR=4]="ERROR",u[u.SILENT=5]="SILENT";let E={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},j=o.INFO,O={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},N=(t,c,...a)=>{if(c<t.logLevel)return;let r=new Date().toISOString(),n=O[c];if(n)console[n](`[${r}]  ${t.name}:`,...a);else throw Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class q{constructor(t){this.name=t,this._logLevel=j,this._logHandler=N,this._userLogHandler=null,I.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?E[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}}let U=(t,c)=>c.some(c=>t instanceof c),G=new WeakMap,W=new WeakMap,$=new WeakMap,K=new WeakMap,Q=new WeakMap,J={get(t,c,a){if(t instanceof IDBTransaction){if("done"===c)return W.get(t);if("objectStoreNames"===c)return t.objectStoreNames||$.get(t);if("store"===c)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return Y(t[c])},set:(t,c,a)=>(t[c]=a,!0),has:(t,c)=>t instanceof IDBTransaction&&("done"===c||"store"===c)||c in t};function Y(t){var c;if(t instanceof IDBRequest)return function(t){let c=new Promise((c,a)=>{let r=()=>{t.removeEventListener("success",n),t.removeEventListener("error",e)},n=()=>{c(Y(t.result)),r()},e=()=>{a(t.error),r()};t.addEventListener("success",n),t.addEventListener("error",e)});return c.then(c=>{c instanceof IDBCursor&&G.set(c,t)}).catch(()=>{}),Q.set(c,t),c}(t);if(K.has(t))return K.get(t);let a="function"==typeof(c=t)?c!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(c)?function(...t){return c.apply(X(this),t),Y(G.get(this))}:function(...t){return Y(c.apply(X(this),t))}:function(t,...a){let r=c.call(X(this),t,...a);return $.set(r,t.sort?t.sort():[t]),Y(r)}:(c instanceof IDBTransaction&&function(t){if(W.has(t))return;let c=new Promise((c,a)=>{let r=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",e),t.removeEventListener("abort",e)},n=()=>{c(),r()},e=()=>{a(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",n),t.addEventListener("error",e),t.addEventListener("abort",e)});W.set(t,c)}(c),U(c,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(c,J):c;return a!==t&&(K.set(t,a),Q.set(a,t)),a}let X=t=>Q.get(t);function tt(t,c,{blocked:a,upgrade:r,blocking:n,terminated:e}={}){let h=indexedDB.open(t,c),i=Y(h);return r&&h.addEventListener("upgradeneeded",t=>{r(Y(h.result),t.oldVersion,t.newVersion,Y(h.transaction),t)}),a&&h.addEventListener("blocked",t=>a(t.oldVersion,t.newVersion,t)),i.then(t=>{e&&t.addEventListener("close",()=>e()),n&&t.addEventListener("versionchange",t=>n(t.oldVersion,t.newVersion,t))}).catch(()=>{}),i}let tc=["get","getKey","getAll","getAllKeys","count"],ta=["put","add","delete","clear"],tr=new Map;function tn(t,c){if(!(t instanceof IDBDatabase&&!(c in t)&&"string"==typeof c))return;if(tr.get(c))return tr.get(c);let a=c.replace(/FromIndex$/,""),r=c!==a,n=ta.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(n||tc.includes(a)))return;let e=async function(t,...c){let e=this.transaction(t,n?"readwrite":"readonly"),h=e.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[a](...c),n&&e.done]))[0]};return tr.set(c,e),e}J={...v=J,get:(t,c,a)=>tn(t,c)||v.get(t,c,a),has:(t,c)=>!!tn(t,c)||v.has(t,c)};/**
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
 */class te{constructor(t){this.container=t}getPlatformInfoString(){let t=this.container.getProviders();return t.map(t=>{if(!function(t){let c=t.getComponent();return(null==c?void 0:c.type)==="VERSION"}(t))return null;{let c=t.getImmediate();return`${c.library}/${c.version}`}}).filter(t=>t).join(" ")}}let th="@firebase/app",ti="0.10.6",tl=new q("@firebase/app"),tv={[th]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},tu=new Map,to=new Map,ts=new Map;function tz(t,c){try{t.container.addComponent(c)}catch(a){tl.debug(`Component ${c.name} failed to register with FirebaseApp ${t.name}`,a)}}function tg(t){let c=t.name;if(ts.has(c))return tl.debug(`There were multiple attempts to register component ${c}.`),!1;for(let a of(ts.set(c,t),tu.values()))tz(a,t);for(let r of to.values())tz(r,t);return!0}function td(t,c){let a=t.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),t.container.getProvider(c)}let tf=new S("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class tm{constructor(t,c,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new R("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tf.create("app-deleted",{appName:this._name})}}function tw(t,c,a){var r;let n=null!==(r=tv[t])&&void 0!==r?r:t;a&&(n+=`-${a}`);let e=n.match(/\s|\//),h=c.match(/\s|\//);if(e||h){let i=[`Unable to register library "${n}" with version "${c}":`];e&&i.push(`library name "${n}" contains illegal characters (whitespace or "/")`),e&&h&&i.push("and"),h&&i.push(`version name "${c}" contains illegal characters (whitespace or "/")`),tl.warn(i.join(" "));return}tg(new R(`${n}-version`,()=>({library:n,version:c}),"VERSION"))}let tM="firebase-heartbeat-store",tH=null;function tp(){return tH||(tH=tt("firebase-heartbeat-database",1,{upgrade:(t,c)=>{if(0===c)try{t.createObjectStore(tM)}catch(a){console.warn(a)}}}).catch(t=>{throw tf.create("idb-open",{originalErrorMessage:t.message})})),tH}async function tV(t){try{let c=await tp(),a=c.transaction(tM),r=await a.objectStore(tM).get(tL(t));return await a.done,r}catch(e){if(e instanceof A)tl.warn(e.message);else{let n=tf.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tl.warn(n.message)}}}async function tC(t,c){try{let a=await tp(),r=a.transaction(tM,"readwrite"),n=r.objectStore(tM);await n.put(c,tL(t)),await r.done}catch(h){if(h instanceof A)tl.warn(h.message);else{let e=tf.create("idb-set",{originalErrorMessage:null==h?void 0:h.message});tl.warn(e.message)}}}function tL(t){return`${t.name}!${t.options.appId}`}class t_{constructor(t){this.container=t,this._heartbeatsCache=null;let c=this.container.getProvider("app").getImmediate();this._storage=new tB(c),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var t,c;let a=this.container.getProvider("platform-logger").getImmediate(),r=a.getPlatformInfoString(),n=tx();return(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(c=this._heartbeatsCache)||void 0===c?void 0:c.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let c=new Date(t.date).valueOf(),a=Date.now();return a-c<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let c=tx(),{heartbeatsToSend:a,unsentEntries:r}=function(t,c=1024){let a=[],r=t.slice();for(let n of t){let e=a.find(t=>t.agent===n.agent);if(e){if(e.dates.push(n.date),tF(a)>c){e.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),tF(a)>c){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}(this._heartbeatsCache.heartbeats),n=M(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function tx(){let t=new Date;return t.toISOString().substring(0,10)}class tB{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!B()&&F().then(()=>!0).catch(()=>!1)}async read(){let t=await this._canUseIndexedDBPromise;if(!t)return{heartbeats:[]};{let c=await tV(this.app);return(null==c?void 0:c.heartbeats)?c:{heartbeats:[]}}}async overwrite(t){var c;let a=await this._canUseIndexedDBPromise;if(a){let r=await this.read();return tC(this.app,{lastSentHeartbeatDate:null!==(c=t.lastSentHeartbeatDate)&&void 0!==c?c:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var c;let a=await this._canUseIndexedDBPromise;if(a){let r=await this.read();return tC(this.app,{lastSentHeartbeatDate:null!==(c=t.lastSentHeartbeatDate)&&void 0!==c?c:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}}}function tF(t){return M(JSON.stringify({version:2,heartbeats:t})).length}tg(new R("platform-logger",t=>new te(t),"PRIVATE")),tg(new R("heartbeat",t=>new t_(t),"PRIVATE")),tw(th,ti,""),tw(th,ti,"esm2017"),tw("fire-js",""),/**
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
 */tw("firebase","10.12.3","app");let tA="@firebase/installations",tS="0.6.8",tb=`w:${tS}`,ty="FIS_v2",tZ=new S("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function tk(t){return t instanceof A&&t.code.includes("request-failed")}/**
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
 */function tR({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function tD(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function tT(t,c){let a=await c.json(),r=a.error;return tZ.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tP({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function tI(t){let c=await t();return c.status>=500&&c.status<600?t():c}/**
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
 */async function tE({appConfig:t,heartbeatServiceProvider:c},{fid:a}){let r=tR(t),n=tP(t),e=c.getImmediate({optional:!0});if(e){let h=await e.getHeartbeatsHeader();h&&n.append("x-firebase-client",h)}let i={fid:a,authVersion:ty,appId:t.appId,sdkVersion:tb},l={method:"POST",headers:n,body:JSON.stringify(i)},v=await tI(()=>fetch(r,l));if(v.ok){let u=await v.json(),o={fid:u.fid||a,registrationStatus:2,refreshToken:u.refreshToken,authToken:tD(u.authToken)};return o}throw await tT("Create Installation",v)}/**
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
 */function tj(t){return new Promise(c=>{setTimeout(c,t)})}/**
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
 */let tO=/^[cdef][\w-]{21}$/;/**
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
 */function tN(t){return`${t.appName}!${t.appId}`}/**
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
 */let tq=new Map;function tU(t,c){let a=tN(t);tG(a,c),function(t,c){let a=(!tW&&"BroadcastChannel"in self&&((tW=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{tG(t.data.key,t.data.fid)}),tW);a&&a.postMessage({key:t,fid:c}),0===tq.size&&tW&&(tW.close(),tW=null)}(a,c)}function tG(t,c){let a=tq.get(t);if(a)for(let r of a)r(c)}let tW=null,t$="firebase-installations-store",tK=null;function tQ(){return tK||(tK=tt("firebase-installations-database",1,{upgrade:(t,c)=>{0===c&&t.createObjectStore(t$)}})),tK}async function tJ(t,c){let a=tN(t),r=await tQ(),n=r.transaction(t$,"readwrite"),e=n.objectStore(t$),h=await e.get(a);return await e.put(c,a),await n.done,h&&h.fid===c.fid||tU(t,c.fid),c}async function tY(t){let c=tN(t),a=await tQ(),r=a.transaction(t$,"readwrite");await r.objectStore(t$).delete(c),await r.done}async function tX(t,c){let a=tN(t),r=await tQ(),n=r.transaction(t$,"readwrite"),e=n.objectStore(t$),h=await e.get(a),i=c(h);return void 0===i?await e.delete(a):await e.put(i,a),await n.done,i&&(!h||h.fid!==i.fid)&&tU(t,i.fid),i}/**
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
 */async function t1(t){let c;let a=await tX(t.appConfig,a=>{let r=function(t){let c=t||{fid:function(){try{let t=new Uint8Array(17),c=self.crypto||self.msCrypto;c.getRandomValues(t),t[0]=112+t[0]%16;let a=function(t){let c=/**
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
 */function(t){let c=btoa(String.fromCharCode(...t));return c.replace(/\+/g,"-").replace(/\//g,"_")}(t);return c.substr(0,22)}(t);return tO.test(a)?a:""}catch(r){return""}}(),registrationStatus:0};return t6(c)}(a),n=function(t,c){if(0===c.registrationStatus){if(!navigator.onLine){let a=Promise.reject(tZ.create("app-offline"));return{installationEntry:c,registrationPromise:a}}let r={fid:c.fid,registrationStatus:1,registrationTime:Date.now()},n=t2(t,r);return{installationEntry:r,registrationPromise:n}}return 1===c.registrationStatus?{installationEntry:c,registrationPromise:t4(t)}:{installationEntry:c}}(t,r);return c=n.registrationPromise,n.installationEntry});return""===a.fid?{installationEntry:await c}:{installationEntry:a,registrationPromise:c}}async function t2(t,c){try{let a=await tE(t,c);return tJ(t.appConfig,a)}catch(r){throw tk(r)&&409===r.customData.serverCode?await tY(t.appConfig):await tJ(t.appConfig,{fid:c.fid,registrationStatus:0}),r}}async function t4(t){let c=await t3(t.appConfig);for(;1===c.registrationStatus;)await tj(100),c=await t3(t.appConfig);if(0===c.registrationStatus){let{installationEntry:a,registrationPromise:r}=await t1(t);return r||a}return c}function t3(t){return tX(t,t=>{if(!t)throw tZ.create("installation-not-found");return t6(t)})}function t6(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
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
 */async function t0({appConfig:t,heartbeatServiceProvider:c},a){let r=function(t,{fid:c}){return`${tR(t)}/${c}/authTokens:generate`}(t,a),n=function(t,{refreshToken:c}){let a=tP(t);return a.append("Authorization",`${ty} ${c}`),a}(t,a),e=c.getImmediate({optional:!0});if(e){let h=await e.getHeartbeatsHeader();h&&n.append("x-firebase-client",h)}let i={installation:{sdkVersion:tb,appId:t.appId}},l={method:"POST",headers:n,body:JSON.stringify(i)},v=await tI(()=>fetch(r,l));if(v.ok){let u=await v.json(),o=tD(u);return o}throw await tT("Generate Auth Token",v)}/**
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
 */async function t8(t,c=!1){let a;let r=await tX(t.appConfig,r=>{var n;if(!ct(r))throw tZ.create("not-registered");let e=r.authToken;if(!c&&2===(n=e).requestStatus&&!function(t){let c=Date.now();return c<t.creationTime||t.creationTime+t.expiresIn<c+36e5}(n))return r;if(1===e.requestStatus)return a=t5(t,c),r;{if(!navigator.onLine)throw tZ.create("app-offline");let h=function(t){let c={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:c})}(r);return a=t9(t,h),h}}),n=a?await a:r.authToken;return n}async function t5(t,c){let a=await t7(t.appConfig);for(;1===a.authToken.requestStatus;)await tj(100),a=await t7(t.appConfig);let r=a.authToken;return 0===r.requestStatus?t8(t,c):r}function t7(t){return tX(t,t=>{if(!ct(t))throw tZ.create("not-registered");let c=t.authToken;return 1===c.requestStatus&&c.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function t9(t,c){try{let a=await t0(t,c),r=Object.assign(Object.assign({},c),{authToken:a});return await tJ(t.appConfig,r),a}catch(e){if(tk(e)&&(401===e.customData.serverCode||404===e.customData.serverCode))await tY(t.appConfig);else{let n=Object.assign(Object.assign({},c),{authToken:{requestStatus:0}});await tJ(t.appConfig,n)}throw e}}function ct(t){return void 0!==t&&2===t.registrationStatus}/**
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
 */async function cc(t){let{installationEntry:c,registrationPromise:a}=await t1(t);return a?a.catch(console.error):t8(t).catch(console.error),c.fid}/**
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
 */async function ca(t,c=!1){await cr(t);let a=await t8(t,c);return a.token}async function cr(t){let{registrationPromise:c}=await t1(t);c&&await c}function cn(t){return tZ.create("missing-app-config-values",{valueName:t})}/**
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
 */let ce="installations",ch=t=>{let c=t.getProvider("app").getImmediate(),a=/**
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
 */function(t){if(!t||!t.options)throw cn("App Configuration");if(!t.name)throw cn("App Name");for(let c of["projectId","apiKey","appId"])if(!t.options[c])throw cn(c);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(c),r=td(c,"heartbeat");return{app:c,appConfig:a,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ci=t=>{let c=t.getProvider("app").getImmediate(),a=td(c,ce).getImmediate();return{getId:()=>cc(a),getToken:t=>ca(a,t)}};tg(new R(ce,ch,"PUBLIC")),tg(new R("installations-internal",ci,"PRIVATE")),tw(tA,tS),tw(tA,tS,"esm2017");/**
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
 */let cl="analytics",cv="https://www.googletagmanager.com/gtag/js",cu=new q("@firebase/analytics"),co=new S("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
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
 */function cs(t){if(!t.startsWith(cv)){let c=co.create("invalid-gtag-resource",{gtagURL:t});return cu.warn(c.message),""}return t}function cz(t){return Promise.all(t.map(t=>t.catch(t=>t)))}async function cg(t,c,a,r,n,e){let h=r[n];try{if(h)await c[h];else{let i=await cz(a),l=i.find(t=>t.measurementId===n);l&&await c[l.appId]}}catch(v){cu.error(v)}t("config",n,e)}async function cd(t,c,a,r,n){try{let e=[];if(n&&n.send_to){let h=n.send_to;Array.isArray(h)||(h=[h]);let i=await cz(a);for(let l of h){let v=i.find(t=>t.measurementId===l),u=v&&c[v.appId];if(u)e.push(u);else{e=[];break}}}0===e.length&&(e=Object.values(c)),await Promise.all(e),t("event",r,n||{})}catch(o){cu.error(o)}}let cf=new class{constructor(t={},c=1e3){this.throttleMetadata=t,this.intervalMillis=c}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,c){this.throttleMetadata[t]=c}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};async function cm(t){var c;let{appId:a,apiKey:r}=t,n={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},e="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",a),h=await fetch(e,n);if(200!==h.status&&304!==h.status){let i="";try{let l=await h.json();(null===(c=l.error)||void 0===c?void 0:c.message)&&(i=l.error.message)}catch(v){}throw co.create("config-fetch-failed",{httpStatus:h.status,responseMessage:i})}return h.json()}async function cw(t,c=cf,a){let{appId:r,apiKey:n,measurementId:e}=t.options;if(!r)throw co.create("no-app-id");if(!n){if(e)return{measurementId:e,appId:r};throw co.create("no-api-key")}let h=c.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new cH;return setTimeout(async()=>{i.abort()},void 0!==a?a:6e4),cM({appId:r,apiKey:n,measurementId:e},h,i,c)}async function cM(t,{throttleEndTimeMillis:c,backoffCount:a},r,n=cf){var e;let{appId:h,measurementId:i}=t;try{await new Promise((t,a)=>{let n=Math.max(c-Date.now(),0),e=setTimeout(t,n);r.addEventListener(()=>{clearTimeout(e),a(co.create("fetch-throttle",{throttleEndTimeMillis:c}))})})}catch(l){if(i)return cu.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:h,measurementId:i};throw l}try{let v=await cm(t);return n.deleteThrottleMetadata(h),v}catch(s){if(!function(t){if(!(t instanceof A)||!t.customData)return!1;let c=Number(t.customData.httpStatus);return 429===c||500===c||503===c||504===c}(s)){if(n.deleteThrottleMetadata(h),i)return cu.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${null==s?void 0:s.message}]`),{appId:h,measurementId:i};throw s}let u=503===Number(null===(e=null==s?void 0:s.customData)||void 0===e?void 0:e.httpStatus)?k(a,n.intervalMillis,30):k(a,n.intervalMillis),o={throttleEndTimeMillis:Date.now()+u,backoffCount:a+1};return n.setThrottleMetadata(h,o),cu.debug(`Calling attemptFetch again in ${u} millis`),cM(t,o,r,n)}}class cH{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function cp(t,c,a,r,n){if(n&&n.global){t("event",a,r);return}{let e=await c,h=Object.assign(Object.assign({},r),{send_to:e});t("event",a,h)}}/**
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
 */async function cV(){if(!B())return cu.warn(co.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await F()}catch(t){return cu.warn(co.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}async function cC(t,c,a,r,n,i,l){var v;let u=cw(t);u.then(c=>{a[c.measurementId]=c.appId,t.options.measurementId&&c.measurementId!==t.options.measurementId&&cu.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${c.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>cu.error(t)),c.push(u);let o=cV().then(t=>t?r.getId():void 0),[s,z]=await Promise.all([u,o]);!function(t){let c=window.document.getElementsByTagName("script");for(let a of Object.values(c))if(a.src&&a.src.includes(cv)&&a.src.includes(t))return a;return null}(i)&&function(t,c){let a;let r=(window.trustedTypes&&(a=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:cs})),a),n=document.createElement("script"),e=`${cv}?l=${t}&id=${c}`;n.src=r?null==r?void 0:r.createScriptURL(e):e,n.async=!0,document.head.appendChild(n)}(i,s.measurementId),h&&(n("consent","default",h),h=void 0),n("js",new Date);let g=null!==(v=null==l?void 0:l.config)&&void 0!==v?v:{};return g.origin="firebase",g.update=!0,null!=z&&(g.firebase_id=z),n("config",s.measurementId,g),e&&(n("set",e),e=void 0),s.measurementId}/**
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