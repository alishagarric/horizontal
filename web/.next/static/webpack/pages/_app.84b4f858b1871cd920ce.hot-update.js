webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation/styles.scss.tsx":
/*!***********************************************!*\
  !*** ./components/Navigation/styles.scss.tsx ***!
  \***********************************************/
/*! exports provided: NavigationClassName, BottomNavSize, BottomNavMargin, NavigationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationClassName\", function() { return NavigationClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BottomNavSize\", function() { return BottomNavSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BottomNavMargin\", function() { return BottomNavMargin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStyle\", function() { return NavigationStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_svg/Brandmark/Brandmark */ \"./components/_svg/Brandmark/Brandmark.tsx\");\n/* harmony import */ var _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_svg/Logotype/Logotype */ \"./components/_svg/Logotype/Logotype.tsx\");\n/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/styles/CssUtils */ \"./constants/styles/CssUtils.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/**\n *\n * Navigation.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website Navigation Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n\n\n\n // Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar NavigationClassName = \"nav\";\nvar BottomNavSize = _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size;\nvar BottomNavMargin = _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Base.Size.Sm;\nvar NavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__NavigationStyle\",\n  componentId: \"c80g0g-0\"\n})([\"&.\", \"{position:relative;z-index:800;&:not(.\", \"--route-is-home){.\", \"__top,.\", \"__bottom{&:before,&:after{transform:scaleX(1);}}.\", \"__menu-btn{transform:translateY(0%) scale(0.65);height:\", \";}.\", \"__top{.\", \"__link--branding{.\", \"__brandmark,.\", \"__logotype{transition:transform 2s ease,opacity 2s ease;will-change:transform,opacity;}.\", \"__brandmark{transform:translateY(-100%);opacity:0;.\", \"{width:60px;height:60px;}}.\", \"__logotype{transform:translateY(-83%);opacity:1;.\", \"{height:60px;width:100%;}}}}}.\", \"__top,.\", \"__bottom{position:fixed;left:0;width:100vw;display:flex;justify-content:space-between;padding:0 \", \";&:before,&:after{content:\\\"\\\";opacity:0.4;position:absolute;display:block;z-index:1;left:\", \";transform:scaleX(0);transition:transform 2s ease;will-change:transform;width:0px;height:2px;background:\", \";}}.\", \"__top{top:0;height:\", \";align-items:center;&:before{bottom:0;width:calc(100% - (\", \" * 2));}.\", \"__link--branding{width:250px;height:\", \";overflow:hidden;display:block;.\", \"__brandmark,.\", \"__logotype{display:flex;align-items:center;justify-content:center;}.\", \"__brandmark,.\", \"__logotype{transition:transform 2s ease,opacity 2s ease;will-change:transform,opacity;}.\", \"__brandmark{transform:translateY(17%);opacity:1;.\", \"{width:60px;height:60px;}}.\", \"__logotype{transform:translateY(17%);opacity:0;.\", \"{height:60px;width:100%;}}svg{max-width:100%;}}}.\", \"__bottom{bottom:0;height:\", \";margin-bottom:\", \";align-items:center;&:before,&:after{width:calc(100% - (\", \" * 2));}&:before{bottom:0;}&:after{top:0;}&__col--left,&__col--right{position:relative;z-index:3;will-change:transform;transition:transform .25s ease 1s;}&__col--center{position:fixed;left:0;top:\", \";height:calc(100vh - \", \");transform:translateY( calc(calc(100vh - \", \") - \", \" - \", \") );width:100vw;text-align:center;z-index:2;will-change:transform,overflow,background;transition:transform 1s,background .25s ease 1s;&.__expanded{transform:translateY(0);overflow:auto;background:\", \";transition:transform 1s ease 0.25s,background 0.25s;.\", \"__menu-btn{transform:translateY(0%) scale(0.55);}.\", \"__menu-nav{opacity:1;transition:opacity .25s;}~ .\", \"__bottom__col{transition:transform .25s;}~ .\", \"__bottom__col--left{transform:translateX(-150%);}~ .\", \"__bottom__col--right{transform:translateX(150%);}}}}.\", \"__menu-btn{appearance:none;color:\", \";border:0;outline:0;cursor:pointer;padding:0;margin:0;transform:translateY(0%) scale(1);transform-origin:center center;transition:transform 2s ease;will-change:transform;background:none;font-size:4vw;text-transform:uppercase;}.\", \"__menu-nav{position:relative;opacity:0;will-change:opacity;transition:opacity .25s ease 1s;&__list{padding-bottom:25vh;&__item{text-align:center;label h2{font-size:10vw;font-weight:400;padding-bottom:0;}label:hover{opacity:0.2;cursor:pointer;}input[type=checkbox]{display:none;}input[type=checkbox]:checked + .\", \"__accordion{padding:calc(\", \" * 4) calc(\", \" * 4) calc(\", \" * 8) calc(\", \" * 4);max-height:100000000px;}&:nth-of-type(even) .\", \"__accordion__image-container:nth-of-type(8){grid-row:2 / 4;grid-column:2 / 4;}&:nth-of-type(odd) .\", \"__accordion__image-container:nth-of-type(8){grid-row:2 / 4;grid-column:3 / 5;}}}}.\", \"__accordion{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(\", \" * 2);max-height:0px;overflow:hidden;&__image-container{padding-top:100%;position:relative;img{\", \";}}&__text-container{text-align:left;font-size:1.5vw;}}.\", \"__link{color:\", \";text-transform:uppercase;&.__active{position:relative;&:after{--circleSize:\", \";content:\\\"\\\";width:calc(100% + var(--circleSize));height:calc(100% + var(--circleSize));border-radius:50%;border:1px solid \", \";left:calc(var(--circleSize) / -2);top:calc(var(--circleSize) / -2);position:absolute;}}&:hover{text-decoration:none;}}@media (max-width:\", \"){.\", \"__bottom,.\", \"__top__col--left,.\", \"__top__col--right{display:none;}.\", \"__top{.\", \"__top__col--center{height:100%;.\", \"__link--branding{height:100%;width:auto;.\", \"__logotype{.\", \"{height:\", \";}}}}}}}\"], NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, BottomNavSize, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__[\"BrandmarkClassName\"], NavigationClassName, _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__[\"LogotypeClassName\"], NavigationClassName, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_3__[\"BrandmarkClassName\"], NavigationClassName, _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__[\"LogotypeClassName\"], NavigationClassName, BottomNavSize, BottomNavMargin, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Nav.Size, BottomNavSize, BottomNavMargin, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varBackground, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, NavigationClassName, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].ColumnGutter, NavigationClassName, NavigationClassName, NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].ColumnGutter, _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_5__[\"CssUtils\"].ObjectFit(), NavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Base.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_6__[\"Base\"].Media.Width.Sm + \"px\", NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, NavigationClassName, _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_4__[\"LogotypeClassName\"], _constants_styles_Base__WEBPACK_IMPORTED_MODULE_6__[\"Base\"].Grid.Nav.Size);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeD9iMGYwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25DbGFzc05hbWUiLCJCb3R0b21OYXZTaXplIiwiUm9vdCIsIk5hdiIsIlNpemUiLCJCb3R0b21OYXZNYXJnaW4iLCJUaGVtZSIsIkJhc2UiLCJTbSIsIk5hdmlnYXRpb25TdHlsZSIsInN0eWxlZCIsIm5hdiIsIkJyYW5kbWFya0NsYXNzTmFtZSIsIkxvZ290eXBlQ2xhc3NOYW1lIiwiR3JpZCIsIkd1dHRlciIsIkxlZnQiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJ2YXJCYWNrZ3JvdW5kIiwiQ29sdW1uR3V0dGVyIiwiQ3NzVXRpbHMiLCJPYmplY3RGaXQiLCJNZWRpYSIsIldpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVPLElBQU1BLG1CQUFtQixRQUF6QjtBQUNBLElBQU1DLGFBQWEsR0FBR0Msb0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxJQUEvQjtBQUNBLElBQU1DLGVBQWUsR0FBR0Msc0RBQUssQ0FBQ0MsSUFBTixDQUFXSCxJQUFYLENBQWdCSSxFQUF4QztBQUVBLElBQU1DLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4N0hBQ3RCWCxtQkFEc0IsRUFLZkEsbUJBTGUsRUFRbkJBLG1CQVJtQixFQVFXQSxtQkFSWCxFQW1CbkJBLG1CQW5CbUIsRUFzQlhDLGFBdEJXLEVBMkJuQkQsbUJBM0JtQixFQTRCakJBLG1CQTVCaUIsRUE2QmZBLG1CQTdCZSxFQThCYkEsbUJBOUJhLEVBbUNmQSxtQkFuQ2UsRUF1Q2JZLDJFQXZDYSxFQTZDZlosbUJBN0NlLEVBaURiYSx3RUFqRGEsRUEwRHJCYixtQkExRHFCLEVBMERTQSxtQkExRFQsRUFtRVRFLG9EQUFJLENBQUNZLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUFuRVIsRUErRVpkLG9EQUFJLENBQUNZLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUEvRUwsRUF5Rk5WLHNEQUFLLENBQUNXLEtBQU4sQ0FBWUMsYUF6Rk4sRUE2RnJCbEIsbUJBN0ZxQixFQWdHWkUsb0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxJQWhHRyxFQXVHRUYsb0RBQUksQ0FBQ1ksSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQXZHbkIsRUEwR25CaEIsbUJBMUdtQixFQTRHVkUsb0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxJQTVHQyxFQWlIakJKLG1CQWpIaUIsRUFpSG1CQSxtQkFqSG5CLEVBdUhqQkEsbUJBdkhpQixFQXVIbUJBLG1CQXZIbkIsRUE0SGpCQSxtQkE1SGlCLEVBZ0lmWSwyRUFoSWUsRUFzSWpCWixtQkF0SWlCLEVBMElmYSx3RUExSWUsRUFzSnJCYixtQkF0SnFCLEVBeUpaQyxhQXpKWSxFQTBKTEksZUExSkssRUFnS0VILG9EQUFJLENBQUNZLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUFoS25CLEVBcUxiZCxvREFBSSxDQUFDQyxHQUFMLENBQVNDLElBckxJLEVBc0xHRixvREFBSSxDQUFDQyxHQUFMLENBQVNDLElBdExaLEVBdUx1QkYsb0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxJQXZMaEMsRUF1TDJDSCxhQXZMM0MsRUF1TDhESSxlQXZMOUQsRUFrTUpDLHNEQUFLLENBQUNXLEtBQU4sQ0FBWUUsYUFsTVIsRUFxTWZuQixtQkFyTWUsRUF5TWZBLG1CQXpNZSxFQThNYkEsbUJBOU1hLEVBa05iQSxtQkFsTmEsRUFzTmJBLG1CQXROYSxFQTZOckJBLG1CQTdOcUIsRUErTmJNLHNEQUFLLENBQUNXLEtBQU4sQ0FBWUMsYUEvTkMsRUFzUHJCbEIsbUJBdFBxQixFQWlSZ0JBLG1CQWpSaEIsRUFrUkFFLG9EQUFJLENBQUNrQixZQWxSTCxFQWtSK0JsQixvREFBSSxDQUFDa0IsWUFsUnBDLEVBa1I4RGxCLG9EQUFJLENBQUNrQixZQWxSbkUsRUFrUjZGbEIsb0RBQUksQ0FBQ2tCLFlBbFJsRyxFQXVSS3BCLG1CQXZSTCxFQTZSSUEsbUJBN1JKLEVBcVNyQkEsbUJBclNxQixFQXdTVkUsb0RBQUksQ0FBQ2tCLFlBeFNLLEVBaVRoQkMsbUVBQVEsQ0FBQ0MsU0FBVCxFQWpUZ0IsRUEyVHJCdEIsbUJBM1RxQixFQTRUYk0sc0RBQUssQ0FBQ1csS0FBTixDQUFZQyxhQTVUQyxFQW1VRlosc0RBQUssQ0FBQ0MsSUFBTixDQUFXSCxJQUFYLENBQWdCSSxFQW5VZCxFQXdVRUYsc0RBQUssQ0FBQ1csS0FBTixDQUFZQyxhQXhVZCxFQW9WSFgsMkRBQUksQ0FBQ2dCLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQmhCLEVBQWpCLEdBQXNCLElBcFZuQixFQXFWbkJSLG1CQXJWbUIsRUFxVmNBLG1CQXJWZCxFQXFWdURBLG1CQXJWdkQsRUF5Vm5CQSxtQkF6Vm1CLEVBMFZqQkEsbUJBMVZpQixFQTZWZkEsbUJBN1ZlLEVBaVdiQSxtQkFqV2EsRUFtV1hhLHdFQW5XVyxFQW9XRk4sMkRBQUksQ0FBQ08sSUFBTCxDQUFVWCxHQUFWLENBQWNDLElBcFdaLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIE5hdmlnYXRpb24uanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIE5hdmlnYXRpb24gU3R5bGVzLlxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBCcmFuZG1hcmtDbGFzc05hbWUgfSBmcm9tIFwiLi4vX3N2Zy9CcmFuZG1hcmsvQnJhbmRtYXJrXCI7XG5pbXBvcnQgeyBMb2dvdHlwZUNsYXNzTmFtZSB9IGZyb20gXCIuLi9fc3ZnL0xvZ290eXBlL0xvZ290eXBlXCI7XG5pbXBvcnQgeyBDc3NVdGlscyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0Nzc1V0aWxzXCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25DbGFzc05hbWUgPSBgbmF2YDtcbmV4cG9ydCBjb25zdCBCb3R0b21OYXZTaXplID0gUm9vdC5OYXYuU2l6ZTtcbmV4cG9ydCBjb25zdCBCb3R0b21OYXZNYXJnaW4gPSBUaGVtZS5CYXNlLlNpemUuU207XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uU3R5bGUgPSBzdHlsZWQubmF2YFxuICAmLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA4MDA7XG5cbiAgICAmOm5vdCguJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfS0tcm91dGUtaXMtaG9tZSkge1xuICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAvLyBUcmFuc2l0aW9uIE5hdmlnYXRpb25cbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X190b3AsIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19ib3R0b20ge1xuICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgLy8gTGluZXNcbiAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgLy8gTWVudSBCdXR0b25cbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19tZW51LWJ0biB7XG4gICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyJSkgc2NhbGUoMC42NSk7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSBzY2FsZSgwLjY1KTtcbiAgICAgICBoZWlnaHQ6ICR7Qm90dG9tTmF2U2l6ZX07XG4gICAgICB9XG5cbiAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgLy8gVHJhbnNpdGlvbiBCcmFuZG1hcmtcbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X190b3Age1xuICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbGluay0tYnJhbmRpbmcge1xuICAgICAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19icmFuZG1hcmssXG4gICAgICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nb3R5cGUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgMnMgZWFzZTtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JyYW5kbWFyayB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAgICAgLiR7QnJhbmRtYXJrQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ290eXBlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODMlKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICAgIC4ke0xvZ290eXBlQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX3RvcCwgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JvdHRvbSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAwO1xuXG4gICAgICB3aWR0aDogMTAwdnc7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIHBhZGRpbmc6IDAgJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9O1xuXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgIGxlZnQ6ICR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fTtcblxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgLyogdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7ICovXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycyBlYXNlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG4gICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX3RvcCB7XG4gICAgICB0b3A6IDA7XG5cbiAgICAgIGhlaWdodDogJHtSb290Lk5hdi5TaXplfTtcblxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICgke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH0gKiAyKSk7XG4gICAgICB9XG5cbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19saW5rLS1icmFuZGluZyB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAke1Jvb3QuTmF2LlNpemV9O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19icmFuZG1hcmssIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19sb2dvdHlwZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JyYW5kbWFyaywgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ290eXBlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAycyBlYXNlO1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgICAgIH1cblxuICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fYnJhbmRtYXJrIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTclKTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgLiR7QnJhbmRtYXJrQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nb3R5cGUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNyUpO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICAgICAuJHtMb2dvdHlwZUNsYXNzTmFtZX0ge1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fYm90dG9tIHtcbiAgICAgIGJvdHRvbTogMDtcblxuICAgICAgaGVpZ2h0OiAke0JvdHRvbU5hdlNpemV9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHtCb3R0b21OYXZNYXJnaW59O1xuXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gKCR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fSAqIDIpKTtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG5cbiAgICAgICZfX2NvbC0tbGVmdCwgJl9fY29sLS1yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgZWFzZSAxcztcbiAgICAgIH1cblxuICAgICAgJl9fY29sLS1jZW50ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogJHtSb290Lk5hdi5TaXplfTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHtSb290Lk5hdi5TaXplfSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSggY2FsYyhjYWxjKDEwMHZoIC0gJHtSb290Lk5hdi5TaXplfSkgLSAke0JvdHRvbU5hdlNpemV9IC0gJHtCb3R0b21OYXZNYXJnaW59KSApO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3ZlcmZsb3csIGJhY2tncm91bmQ7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcywgYmFja2dyb3VuZCAuMjVzIGVhc2UgMXM7XG4gICAgICAgIFxuXG4gICAgICAgICYuX19leHBhbmRlZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyQmFja2dyb3VuZH07XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UgMC4yNXMsIGJhY2tncm91bmQgMC4yNXM7XG5cbiAgICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbWVudS1idG4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSBzY2FsZSgwLjU1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbWVudS1uYXYge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB+IC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19ib3R0b21fX2NvbCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB+IC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19ib3R0b21fX2NvbC0tbGVmdCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIH4gLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JvdHRvbV9fY29sLS1yaWdodCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX21lbnUtYnRuIHtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBjb2xvcjogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgYm9yZGVyOiAwO1xuICAgICAgb3V0bGluZTogMDtcblxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMiUpIHNjYWxlKDEpO1xuICAgICAvLyAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgc2NhbGUoMSk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2U7XG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX21lbnUtbmF2IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlIDFzOyBcblxuICAgICAgJl9fbGlzdCB7ICAgXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXZoOyBcblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICBsYWJlbCBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwdnc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGFiZWw6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19hY2NvcmRpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogY2FsYygke1Jvb3QuQ29sdW1uR3V0dGVyfSAqIDQpIGNhbGMoJHtSb290LkNvbHVtbkd1dHRlcn0gKiA0KSBjYWxjKCR7Um9vdC5Db2x1bW5HdXR0ZXJ9ICogOCkgY2FsYygke1Jvb3QuQ29sdW1uR3V0dGVyfSAqIDQpO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwMDAwMDAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9tYWtlIHRoZSBsYXN0IGltYWdlIHRoZSBiaWdnZXN0IGltYWdlIGluIHRoZSBhY2NvcmRpb24gZ3JpZFxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2FjY29yZGlvbl9faW1hZ2UtY29udGFpbmVyOm50aC1vZi10eXBlKDgpIHtcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL21ha2UgdGhlIGxhc3QgaW1hZ2UgdGhlIGJpZ2dlc3QgaW1hZ2UgaW4gdGhlIGFjY29yZGlvbiBncmlkXG4gICAgICAgICAgJjpudGgtb2YtdHlwZShvZGQpIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19hY2NvcmRpb25fX2ltYWdlLWNvbnRhaW5lcjpudGgtb2YtdHlwZSg4KSB7XG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDQ7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMyAvIDU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2FjY29yZGlvbiB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwxZnIpO1xuICAgICAgZ2FwOiBjYWxjKCR7Um9vdC5Db2x1bW5HdXR0ZXJ9ICogMik7XG4gICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmX19pbWFnZS1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgJHtDc3NVdGlscy5PYmplY3RGaXQoKX07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fdGV4dC1jb250YWluZXIgeyBcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbGluayB7XG4gICAgICBjb2xvcjogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICYuX19hY3RpdmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgLS1jaXJjbGVTaXplOiAke1RoZW1lLkJhc2UuU2l6ZS5TbX07XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgdmFyKC0tY2lyY2xlU2l6ZSkpO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgdmFyKC0tY2lyY2xlU2l6ZSkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICAgIGxlZnQ6IGNhbGModmFyKC0tY2lyY2xlU2l6ZSkgLyAtMik7XG4gICAgICAgICAgdG9wOiBjYWxjKHZhcigtLWNpcmNsZVNpemUpIC8gLTIpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguU20gKyBcInB4XCJ9KSB7XG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fYm90dG9tLCAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fdG9wX19jb2wtLWxlZnQsIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X190b3BfX2NvbC0tcmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fdG9wIHtcbiAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX3RvcF9fY29sLS1jZW50ZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19saW5rLS1icmFuZGluZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcblxuICAgICAgICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ290eXBlIHtcblxuICAgICAgICAgICAgICAuJHtMb2dvdHlwZUNsYXNzTmFtZX0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtCYXNlLkdyaWQuTmF2LlNpemV9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation/styles.scss.tsx\n");

/***/ })

})