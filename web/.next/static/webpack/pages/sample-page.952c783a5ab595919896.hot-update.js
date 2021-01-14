webpackHotUpdate_N_E("pages/sample-page",{

/***/ "./components/Navigation/styles.scss.tsx":
/*!***********************************************!*\
  !*** ./components/Navigation/styles.scss.tsx ***!
  \***********************************************/
/*! exports provided: NavigationClassName, BottomNavSize, NavigationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationClassName\", function() { return NavigationClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BottomNavSize\", function() { return BottomNavSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStyle\", function() { return NavigationStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_svg/Brandmark/Brandmark */ \"./components/_svg/Brandmark/Brandmark.tsx\");\n/* harmony import */ var _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_svg/Logotype/Logotype */ \"./components/_svg/Logotype/Logotype.tsx\");\n/**\n *\n * Navigation.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website Navigation Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n\n // Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar NavigationClassName = \"nav\";\nvar BottomNavSize = \"calc(\".concat(_constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, \" * 1.15)\");\nvar NavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__NavigationStyle\",\n  componentId: \"c80g0g-0\"\n})([\"&.\", \"{position:relative;z-index:800;&.\", \"--route-is-sample-page{.\", \"__top,.\", \"__bottom{&:before,&:after{transform:scaleX(1);}}.\", \"__menu-btn{transform:translateY(12%) scale(.65);}}.\", \"__top,.\", \"__bottom{position:fixed;left:0;width:100vw;display:flex;justify-content:space-between;padding:0 \", \";&:before,&:after{content:\\\"\\\";position:absolute;display:block;left:\", \";transform:scaleX(0);transform-origin:left center;transition:transform 2s ease;will-change:transform;width:0px;height:2px;background:\", \";}}.\", \"__top{top:0;height:\", \";align-items:center;&:before{bottom:0;width:calc(100% - (\", \" * 2));}.\", \"__link--branding{background:blue;width:250px;display:block;.\", \"__brandmark,.\", \"__logotype{display:flex;align-items:center;justify-content:center;}.\", \"__brandmark{background:pink;.\", \"{width:60px;height:60px;}}.\", \"__logotype{.\", \"{height:60px;width:100%;}}svg{max-width:100%;}}}.\", \"__bottom{bottom:0;height:\", \";padding-bottom:calc(\", \" * 1.75);align-items:flex-end;&:before,&:after{width:calc(100% - (\", \" * 2));}&:before{bottom:\", \";}&:after{top:0;}}.\", \"__menu-btn{appearance:none;border:0;outline:0;padding:0;margin:0;transform:translateY(12%) scale(1);transform-origin:bottom center;transition:transform 2s ease;will-change:transform;background:none;font-size:4vw;text-transform:uppercase;}.\", \"__link{color:\", \";text-transform:uppercase;&:hover{text-decoration:none;}}}\"], NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__[\"BrandmarkClassName\"], NavigationClassName, _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__[\"LogotypeClassName\"], NavigationClassName, BottomNavSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, NavigationClassName, NavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeD9iMGYwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25DbGFzc05hbWUiLCJCb3R0b21OYXZTaXplIiwiUm9vdCIsIk5hdiIsIlNpemUiLCJOYXZpZ2F0aW9uU3R5bGUiLCJzdHlsZWQiLCJuYXYiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJGb3JlZ3JvdW5kIiwiQnJhbmRtYXJrQ2xhc3NOYW1lIiwiTG9nb3R5cGVDbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFTyxJQUFNQSxtQkFBbUIsUUFBekI7QUFDQSxJQUFNQyxhQUFhLGtCQUFXQyxvREFBSSxDQUFDQyxHQUFMLENBQVNDLElBQXBCLGFBQW5CO0FBRUEsSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDIzQ0FDdEJQLG1CQURzQixFQU1wQkEsbUJBTm9CLEVBT25CQSxtQkFQbUIsRUFPV0EsbUJBUFgsRUFjbkJBLG1CQWRtQixFQW1CckJBLG1CQW5CcUIsRUFtQlNBLG1CQW5CVCxFQTRCVEUsb0RBQUksQ0FBQ00sSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQTVCUixFQXNDWlIsb0RBQUksQ0FBQ00sSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQXRDTCxFQWdETkMsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQWhETixFQW9EckJiLG1CQXBEcUIsRUF1RFpFLG9EQUFJLENBQUNDLEdBQUwsQ0FBU0MsSUF2REcsRUE4REVGLG9EQUFJLENBQUNNLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUE5RG5CLEVBaUVuQlYsbUJBakVtQixFQXVFakJBLG1CQXZFaUIsRUF3RWpCQSxtQkF4RWlCLEVBOEVqQkEsbUJBOUVpQixFQWlGZmMsMkVBakZlLEVBdUZqQmQsbUJBdkZpQixFQXlGZmUsd0VBekZlLEVBcUdyQmYsbUJBckdxQixFQXdHWkMsYUF4R1ksRUEwR0NDLG9EQUFJLENBQUNFLElBMUdOLEVBZ0hFRixvREFBSSxDQUFDTSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLElBaEhuQixFQW9IVlIsb0RBQUksQ0FBQ0UsSUFwSEssRUE0SHJCSixtQkE1SHFCLEVBZ0pyQkEsbUJBaEpxQixFQWlKYlcsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQWpKQyxDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBOYXZpZ2F0aW9uLmpzL3N0eWxlcy5zY3NzLnRzeFxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBOYXZpZ2F0aW9uIFN0eWxlcy5cbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgQnJhbmRtYXJrQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL19zdmcvQnJhbmRtYXJrL0JyYW5kbWFya1wiO1xuaW1wb3J0IHsgTG9nb3R5cGVDbGFzc05hbWUgfSBmcm9tIFwiLi4vX3N2Zy9Mb2dvdHlwZS9Mb2dvdHlwZVwiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25DbGFzc05hbWUgPSBgbmF2YDtcbmV4cG9ydCBjb25zdCBCb3R0b21OYXZTaXplID0gYGNhbGMoJHtSb290Lk5hdi5TaXplfSAqIDEuMTUpYDtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25TdHlsZSA9IHN0eWxlZC5uYXZgXG4gICYuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDgwMDtcblxuICAgIC8vIEBUT0RPOiBDb252ZXJ0IHRvIGlmIHJvdXRlIGlzIE5PVCBob21lIHdpdGggJjpub3QoKVxuICAgICYuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfS0tcm91dGUtaXMtc2FtcGxlLXBhZ2Uge1xuICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX3RvcCwgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JvdHRvbSB7XG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbWVudS1idG4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIlKSBzY2FsZSguNjUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X190b3AsIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19ib3R0b20ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbGVmdDogMDtcblxuICAgICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICBwYWRkaW5nOiAwICR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fTtcblxuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgbGVmdDogJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9O1xuXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2U7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fdG9wIHtcbiAgICAgIHRvcDogMDtcblxuICAgICAgaGVpZ2h0OiAke1Jvb3QuTmF2LlNpemV9O1xuXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvdHRvbTogMDtcblxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gKCR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fSAqIDIpKTtcbiAgICAgIH1cblxuICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xpbmstLWJyYW5kaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcblxuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19icmFuZG1hcmssXG4gICAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19sb2dvdHlwZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JyYW5kbWFyayB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcGluaztcblxuICAgICAgICAgIC4ke0JyYW5kbWFya0NsYXNzTmFtZX0ge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ290eXBlIHtcblxuICAgICAgICAgIC4ke0xvZ290eXBlQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19ib3R0b20ge1xuICAgICAgYm90dG9tOiAwO1xuXG4gICAgICBoZWlnaHQ6ICR7Qm90dG9tTmF2U2l6ZX07XG5cbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCR7Um9vdC5TaXplfSAqIDEuNzUpO1xuXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICY6YmVmb3JlLFxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9ICogMikpO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvdHRvbTogJHtSb290LlNpemV9O1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19tZW51LWJ0biB7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuXG4gICAgICBib3JkZXI6IDA7XG4gICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIlKSBzY2FsZSgxKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZTtcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbGluayB7XG4gICAgICBjb2xvcjogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation/styles.scss.tsx\n");

/***/ })

})