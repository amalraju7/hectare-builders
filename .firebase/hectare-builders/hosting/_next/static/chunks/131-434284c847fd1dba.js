(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[131],{4564:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(i.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=i.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,s(2648).Z)(s(7294));var i=s(2983)},7645:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let s=a.default,l={loading:e=>{let{error:t,isLoading:s,pastDelay:i}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=i({},l,e)),l=i({},l,t);let n=l.loader,r=()=>n().then(o);if(l.loadableGenerated&&delete(l=i({},l,l.loadableGenerated,{loader:r})).loadableGenerated,"boolean"==typeof l.ssr){if(!l.ssr)return delete l.ssr,d(r,l);delete l.ssr}return s(l)},t.noSSR=d;var i=s(6495).Z,l=s(2648).Z,n=(0,s(1598).Z)(s(7294)),a=l(s(4588)),r=l(s(4564));function o(e){return{default:e.default||e}}function d(e,t){delete t.webpack,delete t.modules;let s=n.lazy(e),i=t.loading,l=n.default.createElement(i,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>n.default.createElement(n.Suspense,{fallback:l},n.default.createElement(r.default,null,n.default.createElement(s,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=(0,s(2648).Z)(s(7294));let l=i.default.createContext(null);t.LoadableContext=l},4588:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(6495).Z,l=(0,s(2648).Z)(s(7294)),n=s(3644);let a=[],r=[],o=!1;function d(e){let t=e(),s={loading:!0,loaded:null,error:null};return s.promise=t.then(e=>(s.loading=!1,s.loaded=e,e)).catch(e=>{throw s.loading=!1,s.error=e,e}),s}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);s.lazy=l.default.lazy(s.loader);let i=null;function a(){if(!i){let t=new u(e,s);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!o){let d=s.webpack?s.webpack():s.modules;d&&r.push(e=>{for(let t of d)if(-1!==e.indexOf(t))return a()})}function c(e){!function(){a();let e=l.default.useContext(n.LoadableContext);e&&Array.isArray(s.modules)&&s.modules.forEach(t=>{e(t)})}();let t=l.default.createElement(s.loading,{isLoading:!0,pastDelay:!0,error:null});return l.default.createElement(l.default.Suspense,{fallback:t},l.default.createElement(s.lazy,e))}return c.preload=()=>a(),c.displayName="LoadableComponent",c}(d,e)}function _(e,t){let s=[];for(;e.length;){let i=e.pop();s.push(i(t))}return Promise.all(s).then(()=>{if(e.length)return _(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{_(a).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let s=()=>(o=!0,t());_(r,e).then(s,s)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},5655:function(e,t,s){"use strict";s.r(t),s.d(t,{Slide:function(){return a.o5}});var i=s(5893),l=s(5697),n=s.n(l),a=s(719),r=s(8197);function o(e){let{children:t,sliderCName:s,settings:l}=e,n={...l};return(0,i.jsx)(a.tq,{className:"".concat(s),...n,children:t})}s(1082),s(6797),s(1669),s(1972),r.ZP.use([r.pt,r.W_,r.tl,r.o3,r.xW,r.rj]),o.propTypes={children:n().instanceOf(Array).isRequired,settings:n().shape({spaceBetween:n().number,breakpoints:n().shape({})}),sliderCName:n().string},t.default=o},945:function(e,t,s){"use strict";var i=s(5893),l=s(5697),n=s.n(l),a=s(1664),r=s.n(a),o=s(682),d=s(4051),u=s(1555),c=s(5152),_=s.n(c),p=s(9197),m=s.n(p),f=s(5655);function h(e){let{testimonialItems:t,testimonialSectionItems:l,settings:n}=e,a=_()(()=>Promise.resolve().then(s.bind(s,5655)),{loadableGenerated:{webpack:()=>[5655]},ssr:!1});return n={pagination:!1,loop:!0,breakpoints:{1200:{slidesPerView:2,grid:{rows:1},spaceBetween:30},992:{slidesPerView:1,grid:{rows:2,fill:"row"},spaceBetween:30},768:{grid:{rows:1},slidesPerView:2,spaceBetween:30},576:{grid:{rows:1},slidesPerView:1,spaceBetween:30},0:{grid:{rows:1},slidesPerView:1,spaceBetween:30}}},(0,i.jsx)("div",{className:m().area,children:(0,i.jsx)(o.Z,{children:(0,i.jsxs)(d.Z,{className:"g-4",children:[null==l?void 0:l.map(e=>(0,i.jsx)(u.Z,{xl:{span:5},lg:{span:6},className:"pb-30 pb-lg-0",children:(0,i.jsxs)("div",{className:m().section__wrap,children:[(0,i.jsx)("span",{className:m().subtitle,children:null==e?void 0:e.subTitle}),(0,i.jsx)("h2",{className:m().title,children:null==e?void 0:e.title}),(0,i.jsx)("p",{className:m().desc,dangerouslySetInnerHTML:{__html:e.desc}}),(0,i.jsx)("div",{className:"btn-wrap",children:(0,i.jsx)(r(),{href:"/",className:m().section__btn,children:"view more"})})]})},e.id)),(0,i.jsx)(u.Z,{xl:{span:7},lg:{span:6},children:(0,i.jsx)(a,{settings:n,children:null==t?void 0:t.map(e=>(0,i.jsx)(f.Slide,{children:(0,i.jsx)("div",{className:m().item,children:(0,i.jsxs)("div",{className:m().content,children:[(0,i.jsxs)("p",{className:m().desc,children:[(0,i.jsx)("i",{className:"".concat(m().quotation," ").concat(m().direction_left),children:"“"}),null==e?void 0:e.excerpt,(0,i.jsx)("i",{className:"".concat(m().quotation," ").concat(m().direction_right),children:"”"})]}),(0,i.jsx)("div",{className:m().user_info,children:(0,i.jsxs)("div",{className:m().user_content,children:[(0,i.jsx)("h3",{className:m().user_name,children:null==e?void 0:e.userName}),(0,i.jsx)("span",{className:m().user_occupation,children:null==e?void 0:e.userOccupation})]})})]})})},e.id))})})]})})})}h.propTypes={testimonialItems:n().instanceOf(Object).isRequired,testimonialSectionItems:n().instanceOf(Object).isRequired,settings:n().shape({slidesPerView:n().number,spaceBetween:n().number,autoplay:n().bool,breakpoints:n().shape({})})},t.Z=h},9197:function(e){e.exports={area:"testimonial_area__D0I_d",y_axis__140:"testimonial_y_axis__140__9kcDi",section__wrap:"testimonial_section__wrap__2yQOk",subtitle:"testimonial_subtitle__wxiD1",title:"testimonial_title__Ug7pI",section__btn:"testimonial_section__btn__4V7T2",item:"testimonial_item__JO1cW",content:"testimonial_content__PmWbO",desc:"testimonial_desc__gpB_E",quotation:"testimonial_quotation__fOmA7",direction_left:"testimonial_direction_left__7oFtg",direction_right:"testimonial_direction_right__lMH5h",user_info:"testimonial_user_info___dbPs",user_content:"testimonial_user_content__igDS8",user_name:"testimonial_user_name__J4ped",user_occupation:"testimonial_user_occupation__QBPND"}},5152:function(e,t,s){e.exports=s(7645)}}]);