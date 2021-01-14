webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation/styles.scss.tsx":
/*!***********************************************!*\
  !*** ./components/Navigation/styles.scss.tsx ***!
  \***********************************************/
/*! exports provided: NavigationClassName, BottomNavSize, NavigationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationClassName\", function() { return NavigationClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BottomNavSize\", function() { return BottomNavSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStyle\", function() { return NavigationStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_svg/Brandmark/Brandmark */ \"./components/_svg/Brandmark/Brandmark.tsx\");\n/* harmony import */ var _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_svg/Logotype/Logotype */ \"./components/_svg/Logotype/Logotype.tsx\");\n/**\n *\n * Navigation.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website Navigation Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n\n // Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar NavigationClassName = \"nav\";\nvar BottomNavSize = \"calc(\".concat(_constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, \" * 1.15)\");\nvar NavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__NavigationStyle\",\n  componentId: \"c80g0g-0\"\n})([\"&.\", \"{position:relative;z-index:800;&.\", \"--route-is-sample-page{.\", \"__top,.\", \"__bottom{&:before,&:after{transform:scaleX(1);}}.\", \"__menu-btn{transform:translateY(12%) scale(0.65);}.\", \"__top{.\", \"__link--branding{.\", \"__brandmark,.\", \"__logotype{transition:transform 2s ease,opacity 2s ease;will-change:transform,opacity;}.\", \"__brandmark{transform:translateY(-100%);opacity:0;.\", \"{width:60px;height:60px;}}.\", \"__logotype{transform:translateY(-83%);opacity:1;.\", \"{height:60px;width:100%;}}}}}.\", \"__top,.\", \"__bottom{position:fixed;left:0;width:100vw;display:flex;justify-content:space-between;padding:0 \", \";&:before,&:after{content:\\\"\\\";position:absolute;display:block;left:\", \";transform:scaleX(0);transition:transform 2s ease;will-change:transform;width:0px;height:2px;background:\", \";}}.\", \"__top{top:0;height:\", \";align-items:center;&:before{bottom:0;width:calc(100% - (\", \" * 2));}.\", \"__link--branding{width:250px;height:\", \";overflow:hidden;display:block;.\", \"__brandmark,.\", \"__logotype{display:flex;align-items:center;justify-content:center;}.\", \"__brandmark,.\", \"__logotype{transition:transform 2s ease,opacity 2s ease;will-change:transform,opacity;}.\", \"__brandmark{transform:translateY(17%);opacity:1;.\", \"{width:60px;height:60px;}}.\", \"__logotype{transform:translateY(17%);opacity:0;.\", \"{height:60px;width:100%;}}svg{max-width:100%;}}}.\", \"__bottom{bottom:0;height:\", \";padding-bottom:calc(\", \" * 1.75);align-items:flex-end;&:before,&:after{width:calc(100% - (\", \" * 2));}&:before{bottom:\", \";}&:after{top:0;}}.\", \"__menu-btn{appearance:none;border:0;outline:0;padding:0;margin:0;transform:translateY(12%) scale(1);transform-origin:bottom center;transition:transform 2s ease;will-change:transform;background:none;font-size:4vw;text-transform:uppercase;}.\", \"__link{color:\", \";text-transform:uppercase;&:hover{text-decoration:none;}}}\"], NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__[\"BrandmarkClassName\"], NavigationClassName, _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__[\"LogotypeClassName\"], NavigationClassName, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__[\"BrandmarkClassName\"], NavigationClassName, _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__[\"LogotypeClassName\"], NavigationClassName, BottomNavSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, NavigationClassName, NavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeD9iMGYwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25DbGFzc05hbWUiLCJCb3R0b21OYXZTaXplIiwiUm9vdCIsIk5hdiIsIlNpemUiLCJOYXZpZ2F0aW9uU3R5bGUiLCJzdHlsZWQiLCJuYXYiLCJCcmFuZG1hcmtDbGFzc05hbWUiLCJMb2dvdHlwZUNsYXNzTmFtZSIsIkdyaWQiLCJHdXR0ZXIiLCJMZWZ0IiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFTyxJQUFNQSxtQkFBbUIsUUFBekI7QUFDQSxJQUFNQyxhQUFhLGtCQUFXQyxvREFBSSxDQUFDQyxHQUFMLENBQVNDLElBQXBCLGFBQW5CO0FBRUEsSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDAwREFDdEJQLG1CQURzQixFQU1wQkEsbUJBTm9CLEVBT25CQSxtQkFQbUIsRUFPV0EsbUJBUFgsRUFjbkJBLG1CQWRtQixFQWtCbkJBLG1CQWxCbUIsRUFtQmpCQSxtQkFuQmlCLEVBb0JmQSxtQkFwQmUsRUFxQmJBLG1CQXJCYSxFQTBCZkEsbUJBMUJlLEVBOEJiUSwyRUE5QmEsRUFvQ2ZSLG1CQXBDZSxFQXdDYlMsd0VBeENhLEVBaURyQlQsbUJBakRxQixFQWlEU0EsbUJBakRULEVBMERURSxvREFBSSxDQUFDUSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLElBMURSLEVBb0VaVixvREFBSSxDQUFDUSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLElBcEVMLEVBOEVOQyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBOUVOLEVBa0ZyQmYsbUJBbEZxQixFQXFGWkUsb0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxJQXJGRyxFQTRGRUYsb0RBQUksQ0FBQ1EsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQTVGbkIsRUErRm5CWixtQkEvRm1CLEVBaUdWRSxvREFBSSxDQUFDQyxHQUFMLENBQVNDLElBakdDLEVBc0dqQkosbUJBdEdpQixFQXNHbUJBLG1CQXRHbkIsRUE0R2pCQSxtQkE1R2lCLEVBNEdtQkEsbUJBNUduQixFQWlIakJBLG1CQWpIaUIsRUFxSGZRLDJFQXJIZSxFQTJIakJSLG1CQTNIaUIsRUErSGZTLHdFQS9IZSxFQTJJckJULG1CQTNJcUIsRUE4SVpDLGFBOUlZLEVBZ0pDQyxvREFBSSxDQUFDRSxJQWhKTixFQXNKRUYsb0RBQUksQ0FBQ1EsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQXRKbkIsRUEwSlZWLG9EQUFJLENBQUNFLElBMUpLLEVBa0tyQkosbUJBbEtxQixFQXNMckJBLG1CQXRMcUIsRUF1TGJhLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUF2TEMsQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogTmF2aWdhdGlvbi5qcy9zdHlsZXMuc2Nzcy50c3hcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKiBAZGVzY3JpcHRpb24gVGhlIHdlYnNpdGUgTmF2aWdhdGlvbiBTdHlsZXMuXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IEJyYW5kbWFya0NsYXNzTmFtZSB9IGZyb20gXCIuLi9fc3ZnL0JyYW5kbWFyay9CcmFuZG1hcmtcIjtcbmltcG9ydCB7IExvZ290eXBlQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL19zdmcvTG9nb3R5cGUvTG9nb3R5cGVcIjtcblxuLy8gQmVnaW4gU3R5bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uQ2xhc3NOYW1lID0gYG5hdmA7XG5leHBvcnQgY29uc3QgQm90dG9tTmF2U2l6ZSA9IGBjYWxjKCR7Um9vdC5OYXYuU2l6ZX0gKiAxLjE1KWA7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uU3R5bGUgPSBzdHlsZWQubmF2YFxuICAmLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA4MDA7XG5cbiAgICAvLyBAVE9ETzogQ29udmVydCB0byBpZiByb3V0ZSBpcyBOT1QgaG9tZSB3aXRoICY6bm90KClcbiAgICAmLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX0tLXJvdXRlLWlzLXNhbXBsZS1wYWdlIHtcbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X190b3AsIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19ib3R0b20ge1xuICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX21lbnUtYnRuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyJSkgc2NhbGUoMC42NSk7XG4gICAgICB9XG5cbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X190b3Age1xuICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbGluay0tYnJhbmRpbmcge1xuICAgICAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19icmFuZG1hcmssXG4gICAgICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nb3R5cGUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgMnMgZWFzZTtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JyYW5kbWFyayB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAgICAgLiR7QnJhbmRtYXJrQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ290eXBlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODMlKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICAgIC4ke0xvZ290eXBlQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX3RvcCwgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JvdHRvbSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAwO1xuXG4gICAgICB3aWR0aDogMTAwdnc7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIHBhZGRpbmc6IDAgJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9O1xuXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBsZWZ0OiAke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH07XG5cbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIC8qIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyOyAqL1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblxuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X190b3Age1xuICAgICAgdG9wOiAwO1xuXG4gICAgICBoZWlnaHQ6ICR7Um9vdC5OYXYuU2l6ZX07XG5cbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9ICogMikpO1xuICAgICAgfVxuXG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbGluay0tYnJhbmRpbmcge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogJHtSb290Lk5hdi5TaXplfTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fYnJhbmRtYXJrLCAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nb3R5cGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19icmFuZG1hcmssIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19sb2dvdHlwZSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgMnMgZWFzZTtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JyYW5kbWFyayB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE3JSk7XG4gICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgIC4ke0JyYW5kbWFya0NsYXNzTmFtZX0ge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ290eXBlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTclKTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICAgLiR7TG9nb3R5cGVDbGFzc05hbWV9IHtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JvdHRvbSB7XG4gICAgICBib3R0b206IDA7XG5cbiAgICAgIGhlaWdodDogJHtCb3R0b21OYXZTaXplfTtcblxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoJHtSb290LlNpemV9ICogMS43NSk7XG5cbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICgke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH0gKiAyKSk7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm90dG9tOiAke1Jvb3QuU2l6ZX07XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX21lbnUtYnRuIHtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMiUpIHNjYWxlKDEpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycyBlYXNlO1xuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19saW5rIHtcbiAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/styles.scss.tsx\n");

/***/ })

})