_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageClassName",(function(){return h}));var o=n("nKUr"),i=n("q1tI"),c=n("YFqc"),s=n.n(c),r=n("Q9BO"),a=n("gxlN"),l=n("cEZ+"),u=n("vOnD"),_=n("io+v"),d=n("agJb"),f="volumes-nav",v=u.c.section.withConfig({displayName:"stylesscss__VolumesNavigationStyle",componentId:"g0vyks-0"})(["&.","{.","__inner{height:100vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;overflow:hidden;}.","__branding{display:flex;justify-content:center;width:100%;&__brandmark{display:none;}&__logotype{width:calc(100vw - ("," * 2));.","{width:calc(100vw - ("," * 2));height:auto;}}}.","__bottom-text{display:none;}.","__volumes{position:relative;z-index:1;overflow-x:auto;overflow-y:hidden;max-width:100vw;&__listings--solid{position:absolute;left:0;top:0;z-index:5;.","__volumes__listings__item{&--is-active{.","__volumes__listings__item__el{color:",";}}}.","__volumes__listings__item__el{color:",";&:hover{color:",";}}}&__listings--outline{position:relative;z-index:1;.","__volumes__listings__item__el{-webkit-text-stroke-width:3px;-webkit-text-stroke-color:",";}}&__listings{display:flex;&__item{font-weight:500;font-size:25vw;line-height:0.8;margin-right:0.25em;&__el{color:",";&:hover{text-decoration:none;}}}}}}"],f,f,f,_.a.Grid.Gutter.Right,l.b,_.a.Grid.Gutter.Right,f,f,f,f,d.a.Color.varForeground,f,d.a.Color.varBackground,d.a.Color.Secondary,f,d.a.Color.varForeground,d.a.Color.Background),m=function(e){var t=e.hasSidebar,n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current.scrollTo(1e4,0)})),Object(o.jsx)(v,{className:"".concat(f," ").concat(f,"--").concat(t?"has-sidebar":"sans-sidebar"),children:Object(o.jsxs)("div",{className:"".concat(f,"__inner"),children:[Object(o.jsx)("h1",{className:"__visually-hidden",children:"Volume Industries"}),Object(o.jsxs)("div",{className:"".concat(f,"__branding"),children:[Object(o.jsx)("div",{className:"".concat(f,"__branding__brandmark"),children:Object(o.jsx)(a.a,{})}),Object(o.jsx)("div",{className:"".concat(f,"__branding__logotype"),children:Object(o.jsx)(l.a,{})})]}),Object(o.jsxs)("div",{ref:n,className:"".concat(f,"__volumes"),children:[Object(o.jsx)("ul",{className:"".concat(f,"__volumes__listings ").concat(f,"__volumes__listings--outline"),children:r.b.map((function(e,t){return Object(o.jsx)("li",{className:"".concat(f,"__volumes__listings__item"),children:Object(o.jsx)(s.a,{href:e.link,children:Object(o.jsx)("a",{className:"".concat(f,"__volumes__listings__item__el"),children:e.number})})},t)}))}),Object(o.jsx)("ul",{className:"".concat(f,"__volumes__listings ").concat(f,"__volumes__listings--solid"),children:r.b.map((function(e,t){return Object(o.jsx)("li",{className:"".concat(f,"__volumes__listings__item ").concat(f,"__volumes__listings__item--").concat(t+1===r.b.length?"is-active":"is-inactive"," "),children:Object(o.jsx)(s.a,{href:e.link,children:Object(o.jsx)("a",{className:"".concat(f,"__volumes__listings__item__el"),children:e.number})})},t)}))})]}),Object(o.jsx)("div",{className:"".concat(f,"__bottom-text"),children:Object(o.jsx)("h2",{children:"Industries"})})]})})},h="route__home-page";t.default=function(){return Object(o.jsx)("div",{className:"".concat(h),children:Object(o.jsx)(m,{})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var c=i(n("q1tI")),s=n("elyg"),r=n("nOHt"),a=n("vNVm"),l={};function u(e,t,n,o){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var i=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var _=function(e){var t=!1!==e.prefetch,n=(0,r.useRouter)(),i=n&&n.pathname||"/",_=c.default.useMemo((function(){var t=(0,s.resolveHref)(i,e.href,!0),n=o(t,2),c=n[0],r=n[1];return{href:c,as:e.as?(0,s.resolveHref)(i,e.as):r||c}}),[i,e.href,e.as]),d=_.href,f=_.as,v=e.children,m=e.replace,h=e.shallow,p=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=c.Children.only(v),j=b&&"object"===typeof b&&b.ref,x=(0,a.useIntersection)({rootMargin:"200px"}),y=o(x,2),w=y[0],O=y[1],N=c.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,c.useEffect)((function(){var e=O&&t&&(0,s.isLocalURL)(d),o="undefined"!==typeof g?g:n&&n.locale,i=l[d+"%"+f+(o?"%"+o:"")];e&&!i&&u(n,d,f,{locale:o})}),[f,d,O,g,t,n]);var E={ref:N,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,o,i,c,r,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==r&&(r=o.indexOf("#")<0),t[i?"replace":"push"](n,o,{shallow:c,locale:a,scroll:r}).then((function(e){e&&r&&document.body.focus()})))}(e,n,d,f,m,h,p,g)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,d,f,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var k="undefined"!==typeof g?g:n&&n.locale,C=(0,s.getDomainLocale)(f,k,n&&n.locales,n&&n.domainLocales);E.href=C||(0,s.addBasePath)((0,s.addLocale)(f,k,n&&n.defaultLocale))}return c.default.cloneElement(b,E)};t.default=_},vNVm:function(e,t,n){"use strict";var o=n("J4zp"),i=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!r,i=(0,c.useRef)(),l=(0,c.useState)(!1),u=o(l,2),_=u[0],d=u[1],f=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||_||e&&e.tagName&&(i.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:o}),n}(n),i=o.id,c=o.observer,s=o.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,_]);return(0,c.useEffect)((function(){r||_||(0,s.default)((function(){return d(!0)}))}),[_]),[f,_]};var c=n("q1tI"),s=i(n("0G5g")),r="undefined"!==typeof IntersectionObserver;var a=new Map}},[["/EDR",0,1,2,3]]]);