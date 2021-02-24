webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/MarqueeRow/styles.scss.tsx":
/*!********************************************************!*\
  !*** ./components/Sections/MarqueeRow/styles.scss.tsx ***!
  \********************************************************/
/*! exports provided: MarqueeRowClassName, MarqueeRowAnim, MarqueeRowStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowClassName\", function() { return MarqueeRowClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowAnim\", function() { return MarqueeRowAnim; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowStyle\", function() { return MarqueeRowStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/**\n *\n * MarqueeRow.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website MarqueeRow Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n // Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar MarqueeRowClassName = \"marquee-row\";\nvar MarqueeRowAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"0%{transform:translate3d(var(--marquee-row__move-initial),0,0);}100%{transform:translate3d(var(--marquee-row__move-final),0,0);}\"]);\nvar MarqueeRowStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__MarqueeRowStyle\",\n  componentId: \"sc-15hxg1l-0\"\n})([\"--marquee-row__offset:0vw;--marquee-row__move-initial:calc(-25% + var(--marquee-row__offset));--marquee-row__move-final:calc(-50% + var(--marquee-row__offset));position:relative;overflow:hidden;padding-top:1.5rem;.\", \"__inner{width:fit-content;display:flex;position:relative;transform:translate3d(var(--marquee-row__move-initial),0,0);animation:\", \" 15s linear infinite;animation-play-state:running;}.\", \"__list{--\", \"__bullet-size:.15em;white-space:nowrap;&__item{display:inline-block;white-space:nowrap;font-size:15vw;font-weight:600;padding:0 calc(var(--\", \"__bullet-size) * 2);position:relative;flex-shrink:0;@media(max-width:\", \"){font-size:5rem;}&:after{content:'';position:absolute;top:50%;right:calc(var(--\", \"__bullet-size) * -.5);transform:translate3d(0%,-50%,0);transform-style:preserve-3d;width:calc(var(--\", \"__bullet-size) * 1);height:calc(var(--\", \"__bullet-size) * 1);border-radius:50%;background:\", \";}}}\"], MarqueeRowClassName, MarqueeRowAnim, MarqueeRowClassName, MarqueeRowClassName, MarqueeRowClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Sm, MarqueeRowClassName, MarqueeRowClassName, MarqueeRowClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9NYXJxdWVlUm93L3N0eWxlcy5zY3NzLnRzeD8zYzM5Il0sIm5hbWVzIjpbIk1hcnF1ZWVSb3dDbGFzc05hbWUiLCJNYXJxdWVlUm93QW5pbSIsImtleWZyYW1lcyIsIk1hcnF1ZWVSb3dTdHlsZSIsInN0eWxlZCIsInNlY3Rpb24iLCJUaGVtZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiU20iLCJDb2xvciIsInZhckZvcmVncm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7Q0FHQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUEsbUJBQW1CLGdCQUF6QjtBQUVBLElBQU1DLGNBQWMsR0FBR0MsbUVBQUgsc0lBQXBCO0FBVUEsSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLGs2QkFZdkJMLG1CQVp1QixFQWlCWEMsY0FqQlcsRUFxQnZCRCxtQkFyQnVCLEVBc0JwQkEsbUJBdEJvQixFQW1DRUEsbUJBbkNGLEVBeUNGTSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQXpDckIsRUFtREFWLG1CQW5EQSxFQXdEQUEsbUJBeERBLEVBeURDQSxtQkF6REQsRUE2RE5NLHNEQUFLLENBQUNLLEtBQU4sQ0FBWUMsYUE3RE4sQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL01hcnF1ZWVSb3cvc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogTWFycXVlZVJvdy5qcy9zdHlsZXMuc2Nzcy50c3hcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKiBAZGVzY3JpcHRpb24gVGhlIHdlYnNpdGUgTWFycXVlZVJvdyBTdHlsZXMuXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQge30gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQge30gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcblxuLy8gSGVscGVyc1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3dDbGFzc05hbWUgPSBgbWFycXVlZS1yb3dgO1xuXG5leHBvcnQgY29uc3QgTWFycXVlZVJvd0FuaW0gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLW1hcnF1ZWUtcm93X19tb3ZlLWluaXRpYWwpLCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tbWFycXVlZS1yb3dfX21vdmUtZmluYWwpLCAwLCAwKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3dTdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAvLyBAdHMtaWdub3JlXG4gIC0tbWFycXVlZS1yb3dfX29mZnNldDogMHZ3O1xuICAtLW1hcnF1ZWUtcm93X19tb3ZlLWluaXRpYWw6IGNhbGMoLTI1JSArIHZhcigtLW1hcnF1ZWUtcm93X19vZmZzZXQpKTtcbiAgLS1tYXJxdWVlLXJvd19fbW92ZS1maW5hbDogY2FsYygtNTAlICsgdmFyKC0tbWFycXVlZS1yb3dfX29mZnNldCkpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuXG5cbiAgLiR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX2lubmVyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS1tYXJxdWVlLXJvd19fbW92ZS1pbml0aWFsKSwgMCwgMCk7XG4gICAgYW5pbWF0aW9uOiAke01hcnF1ZWVSb3dBbmltfSAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICB9XG5cbiAgLiR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX2xpc3Qge1xuICAgIC0tJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9fYnVsbGV0LXNpemU6IC4xNWVtO1xuXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7ICovXG5cbiAgICAmX19pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgIGZvbnQtc2l6ZTogMTV2dztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nOiAwIGNhbGModmFyKC0tJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9fYnVsbGV0LXNpemUpICogMik7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5TbX0pIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogY2FsYyh2YXIoLS0ke01hcnF1ZWVSb3dDbGFzc05hbWV9X19idWxsZXQtc2l6ZSkgKiAtLjUpO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIC01MCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLSR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX2J1bGxldC1zaXplKSAqIDEpO1xuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9fYnVsbGV0LXNpemUpICogMSk7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogJjpob3ZlciB7XG4gICAgLiR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgfVxuICB9ICovXG5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/MarqueeRow/styles.scss.tsx\n");

/***/ })

})