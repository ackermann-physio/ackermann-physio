(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("nKUr");function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=n("g4pe"),c=n.n(o),i=n("YFqc"),s=n.n(i),u=n("V0O9"),l=n.n(u);function f(e){e.children,a(e,["children"]);return Object(r.jsxs)("div",{className:l.a.main,children:[Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{src:"/img/logo.png"})})}),Object(r.jsx)("span",{children:"Private Praxis f\xfcr Krankengymnastik - Massage - Manuelle Therapie - Osteopathie"})]})}var d=n("k15/"),p=n.n(d);function h(e){e.children,a(e,["children"]);return Object(r.jsxs)("nav",{className:p.a.main,children:[Object(r.jsx)(s.a,{href:"/praxis",children:Object(r.jsx)("a",{children:"Praxis"})}),Object(r.jsx)(s.a,{href:"/team",children:Object(r.jsx)("a",{children:"Team"})}),Object(r.jsx)(s.a,{href:"/leistungen",children:Object(r.jsx)("a",{children:"Leistungen"})}),Object(r.jsx)(s.a,{href:"/konzept",children:Object(r.jsx)("a",{children:"Konzept"})}),Object(r.jsx)(s.a,{href:"/anfahrt",children:Object(r.jsx)("a",{children:"Anfahrt"})}),Object(r.jsx)(s.a,{href:"/aktuelles",children:Object(r.jsx)("a",{className:p.a.spaceBefore,children:"Aktuelles"})}),Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:"Startseite"})})]})}var m=n("DMma"),v=n.n(m);function j(e){var t=e.children;a(e,["children"]);return Object(r.jsxs)("div",{className:v.a.container,children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"Ackermann & Team - Privatpraxis f\xfcr Osteopathie & Physiotherapie - Ihre Praxis f\xfcr Physiotherapie, Osteopathie, Krankengymnastik, Massage, Manuelle Therapie, R\xfcckenschule, Lymphdrainage, Schlingentisch, Fango, u.v.m."}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)(f,{}),Object(r.jsxs)("div",{className:v.a.contentWrapper,children:[Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:v.a.mainWrapper,children:[Object(r.jsx)("main",{className:v.a.main,children:t}),Object(r.jsxs)("footer",{className:v.a.footer,children:[Object(r.jsx)(s.a,{href:"/impressum",children:Object(r.jsx)("a",{children:"Impressum"})}),Object(r.jsx)("span",{className:v.a.spacer}),Object(r.jsx)(s.a,{href:"/datenschutz",children:Object(r.jsx)("a",{children:"Datenschutzhinweis"})}),Object(r.jsx)("br",{}),"\xa9 Britta Ackermann",Object(r.jsx)("span",{className:v.a.spacer}),"Ackermann & Team - Privatpraxis f\xfcr Osteopathie & Physiotherapie",Object(r.jsx)("span",{className:v.a.spacer}),Object(r.jsx)("address",{children:"Rheinstra\xdfe 20, 64283 Darmstadt"}),Object(r.jsx)("span",{className:v.a.spacer}),"Tel. ",Object(r.jsx)("a",{href:"tel:+496151293242",children:"06151/293242"})]})]})]})]})}},DMma:function(e,t,n){e.exports={container:"layout_container__1LfYE",contentWrapper:"layout_contentWrapper__QVwi6",mainWrapper:"layout_mainWrapper__3NsD4",main:"layout_main__7PkzU",footer:"layout_footer__ktNG5",spacer:"layout_spacer__1eupb"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},F9tg:function(e,t,n){e.exports={wrapper:"content_wrapper__34EUz",text:"content_text__2BP83",img:"content_img__2h_YX",subtitle:"content_subtitle__10uN7",largeImage:"content_largeImage__2jlLA",smallImage:"content_smallImage__jecbt",large:"content_large__1E6Hq"}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},V0O9:function(e,t,n){e.exports={main:"header_main__1Wr-7"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,j=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var y=o.Children.only(h),_=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),x=r(g,2),O=x[0],M=x[1],k=o.default.useCallback((function(e){O(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,O]);(0,o.useEffect)((function(){var e=M&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,M,b,t,n]);var w={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,m,v,j,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var I="undefined"!==typeof b?b:n&&n.locale,P=(0,c.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);w.href=P||(0,c.addBasePath)((0,c.addLocale)(p,I,n&&n.defaultLocale))}return o.default.cloneElement(y,w)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},"k15/":function(e,t,n){e.exports={main:"menu_main__37Lz1",spaceBefore:"menu_spaceBefore__32Knr"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map}}]);