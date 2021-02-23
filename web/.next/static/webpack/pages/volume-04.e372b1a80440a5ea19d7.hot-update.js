webpackHotUpdate_N_E("pages/volume-04",{

/***/ "./components/Sections/HorizontalScrollSection/styles.scss.tsx":
/*!*********************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/styles.scss.tsx ***!
  \*********************************************************************/
/*! exports provided: HorizontalScrollSectionClassName, HorizontalScrollSectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSectionClassName\", function() { return HorizontalScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSectionStyle\", function() { return HorizontalScrollSectionStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/CssUtils */ \"./constants/styles/CssUtils.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name HorizontalScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar HorizontalScrollSectionClassName = \"x-scroll\";\n/**\n *\n * @name HorizontalScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar HorizontalScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__HorizontalScrollSectionStyle\",\n  componentId: \"ne7s86-0\"\n})([\"\", \";&.\", \"{--horizontalScrollSectionSpace:\", \";--horizontalScrollSectionHeight:calc(100vh - (\", \" + \", \" + \", \" + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionSpace)));--horizontalScrollSectionTopBarHeight:calc(\", \" * 0.5);&.\", \"--has-topbar{--horizontalScrollSectionHeight:calc(100vh - (\", \" + \", \" + \", \" + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionTopBarHeight)));.\", \"__content-wrapper{> section{margin-top:calc(calc(\", \" + var(--horizontalScrollSectionSpace)) + var(--horizontalScrollSectionTopBarHeight));}}}&.\", \"-scrollbar{height:4px;width:100%;background:\", \";}.\", \"__content-wrapper{padding-left:\", \";> section{margin-top:calc(\", \" + var(--horizontalScrollSectionSpace));margin-bottom:calc(\", \" + \", \" + var(--horizontalScrollSectionSpace));height:var(--horizontalScrollSectionHeight);max-height:var(--horizontalScrollSectionHeight);}}}\"], function (props) {\n  return props.forceFullWidth ? _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_2__[\"CssUtils\"].ForceFullWidth(_constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Left) : \"\";\n}, HorizontalScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Size.Sm, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"BottomNavSize\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"BottomNavMargin\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, HorizontalScrollSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"BottomNavSize\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"BottomNavMargin\"], HorizontalScrollSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, HorizontalScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varSecondary, HorizontalScrollSectionClassName, function (props) {\n  return props.forceFullWidth ? _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Left : 0;\n}, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"BottomNavSize\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"BottomNavMargin\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/OTFhNiJdLCJuYW1lcyI6WyJIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJmb3JjZUZ1bGxXaWR0aCIsIkNzc1V0aWxzIiwiRm9yY2VGdWxsV2lkdGgiLCJSb290IiwiR3JpZCIsIkd1dHRlciIsIkxlZnQiLCJUaGVtZSIsIkJhc2UiLCJTaXplIiwiU20iLCJOYXYiLCJCb3R0b21OYXZTaXplIiwiQm90dG9tTmF2TWFyZ2luIiwiQ29sb3IiLCJ2YXJTZWNvbmRhcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7Q0FHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxnQ0FBZ0MsR0FBRyxVQUF6QztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyw0QkFBNEIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSw2NkJBR3JDLFVBQUNDLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNDLGNBQU4sR0FBdUJDLG1FQUFRLENBQUNDLGNBQVQsQ0FBd0JDLG9EQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUFBekMsQ0FBdkIsR0FBd0UsRUFEeEU7QUFBQSxDQUhxQyxFQU1uQ1gsZ0NBTm1DLEVBT0hZLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQkMsRUFQYixFQVFZUCxvREFBSSxDQUFDUSxHQUFMLENBQVNGLElBUnJCLEVBUStCRyxxRUFSL0IsRUFRa0RDLHVFQVJsRCxFQVNTVixvREFBSSxDQUFDUSxHQUFMLENBQVNGLElBVGxCLEVBV2pDZCxnQ0FYaUMsRUFZY1Esb0RBQUksQ0FBQ1EsR0FBTCxDQUFTRixJQVp2QixFQVlpQ0cscUVBWmpDLEVBWW9EQyx1RUFacEQsRUFjaENsQixnQ0FkZ0MsRUFnQlBRLG9EQUFJLENBQUNRLEdBQUwsQ0FBU0YsSUFoQkYsRUFxQmpDZCxnQ0FyQmlDLEVBd0JyQlksc0RBQUssQ0FBQ08sS0FBTixDQUFZQyxZQXhCUyxFQTRCbENwQixnQ0E1QmtDLEVBNkJuQixVQUFDSSxLQUFEO0FBQUEsU0FDZEEsS0FBSyxDQUFDQyxjQUFOLEdBQXVCRyxvREFBSSxDQUFDQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLElBQXhDLEdBQStDLENBRGpDO0FBQUEsQ0E3Qm1CLEVBaUNkSCxvREFBSSxDQUFDUSxHQUFMLENBQVNGLElBakNLLEVBa0NYRyxxRUFsQ1csRUFrQ1FDLHVFQWxDUixDQUFsQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24vc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcblxuaW1wb3J0IHsgQ3NzVXRpbHMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Dc3NVdGlsc1wiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBCb3R0b21OYXZNYXJnaW4sIEJvdHRvbU5hdlNpemUgfSBmcm9tIFwiLi4vLi4vTmF2aWdhdGlvbi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLyoqXG4gKlxuICogQG5hbWUgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lID0gXCJ4LXNjcm9sbFwiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEhvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGUgPSBzdHlsZWQuc2VjdGlvbjx7XG4gIGZvcmNlRnVsbFdpZHRoOiBib29sZWFuO1xufT5gXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmZvcmNlRnVsbFdpZHRoID8gQ3NzVXRpbHMuRm9yY2VGdWxsV2lkdGgoUm9vdC5HcmlkLkd1dHRlci5MZWZ0KSA6IFwiXCJ9O1xuXG4gICYuJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0ge1xuICAgIC0taG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TcGFjZTogJHtUaGVtZS5CYXNlLlNpemUuU219O1xuICAgIC0taG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25IZWlnaHQ6IGNhbGMoMTAwdmggLSAoJHtSb290Lk5hdi5TaXplfSArICR7Qm90dG9tTmF2U2l6ZX0gKyAke0JvdHRvbU5hdk1hcmdpbn0gKyB2YXIoLS1ob3Jpem9udGFsU2Nyb2xsU2VjdGlvblNwYWNlKSArIHZhcigtLWhvcml6b250YWxTY3JvbGxTZWN0aW9uU3BhY2UpKSk7XG4gICAgLS1ob3Jpem9udGFsU2Nyb2xsU2VjdGlvblRvcEJhckhlaWdodDogY2FsYygke1Jvb3QuTmF2LlNpemV9ICogMC41KTtcblxuICAgICYuJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0tLWhhcy10b3BiYXIge1xuICAgICAgLS1ob3Jpem9udGFsU2Nyb2xsU2VjdGlvbkhlaWdodDogY2FsYygxMDB2aCAtICgke1Jvb3QuTmF2LlNpemV9ICsgJHtCb3R0b21OYXZTaXplfSArICR7Qm90dG9tTmF2TWFyZ2lufSArIHZhcigtLWhvcml6b250YWxTY3JvbGxTZWN0aW9uU3BhY2UpICsgdmFyKC0taG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TcGFjZSkgKyB2YXIoLS1ob3Jpem9udGFsU2Nyb2xsU2VjdGlvblRvcEJhckhlaWdodCkpKTtcblxuICAgICAgLiR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50LXdyYXBwZXIge1xuICAgICAgICA+IHNlY3Rpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoY2FsYygke1Jvb3QuTmF2LlNpemV9ICsgdmFyKC0taG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TcGFjZSkpICsgdmFyKC0taG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25Ub3BCYXJIZWlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0tc2Nyb2xsYmFyIHtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhclNlY29uZGFyeX07XG4gICAgfVxuXG5cbiAgICAuJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzKSA9PlxuICAgICAgICBwcm9wcy5mb3JjZUZ1bGxXaWR0aCA/IFJvb3QuR3JpZC5HdXR0ZXIuTGVmdCA6IDB9O1xuXG4gICAgICA+IHNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCR7Um9vdC5OYXYuU2l6ZX0gKyB2YXIoLS1ob3Jpem9udGFsU2Nyb2xsU2VjdGlvblNwYWNlKSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoJHtCb3R0b21OYXZTaXplfSArICR7Qm90dG9tTmF2TWFyZ2lufSArIHZhcigtLWhvcml6b250YWxTY3JvbGxTZWN0aW9uU3BhY2UpKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1ob3Jpem9udGFsU2Nyb2xsU2VjdGlvbkhlaWdodCk7XG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLWhvcml6b250YWxTY3JvbGxTZWN0aW9uSGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/styles.scss.tsx\n");

/***/ })

})