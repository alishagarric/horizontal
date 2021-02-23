webpackHotUpdate_N_E("pages/volume-03",{

/***/ "./components/Sections/VolumesArrowsNavigation/styles.scss.tsx":
/*!*********************************************************************!*\
  !*** ./components/Sections/VolumesArrowsNavigation/styles.scss.tsx ***!
  \*********************************************************************/
/*! exports provided: VolumesArrowsNavigationClassName, VolumesArrowsNavigationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VolumesArrowsNavigationClassName\", function() { return VolumesArrowsNavigationClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VolumesArrowsNavigationStyle\", function() { return VolumesArrowsNavigationStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/**\n *\n * VolumesArrowsNavigation.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website VolumesArrowsNavigation Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\nvar VolumesArrowsNavigationClassName = \"volumes--arrow-nav\";\nvar VolumesArrowsNavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__VolumesArrowsNavigationStyle\",\n  componentId: \"sc-1plemeb-0\"\n})([\"&.\", \"{width:100vw;position:fixed;top:\", \";left:0;padding-left:\", \";padding-right:\", \";z-index:999;.\", \"__inner{height:calc(\", \" * 0.75);display:flex;align-items:center;justify-content:space-between;}.\", \"__col{padding-bottom:0;&--left,&--right{text-transform:uppercase;display:flex;align-items:center;position:relative;a{color:\", \";padding:0 calc(\", \" / 4);}}&--left::before,&--right::after{content:\\\"\\\";width:\", \";height:2px;transform:scaleY(.5);background-color:\", \";display:block;}&--left::after,&--right::before{content:\\\"\\\";position:absolute;width:\", \";height:\", \";border-left:2px solid \", \";border-top:2px solid \", \";display:block;top:0;}&--left::after{left:calc(\", \" / -4);transform:rotate(-45deg) scale(.5);}&--right::before{right:calc(\", \" / -4);transform:rotate(135deg) scale(.5);}}}\"], VolumesArrowsNavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Right, VolumesArrowsNavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, VolumesArrowsNavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Base.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Base.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Base.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Base.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Base.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Base.Size.Sm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Wb2x1bWVzQXJyb3dzTmF2aWdhdGlvbi9zdHlsZXMuc2Nzcy50c3g/MjMzYyJdLCJuYW1lcyI6WyJWb2x1bWVzQXJyb3dzTmF2aWdhdGlvbkNsYXNzTmFtZSIsIlZvbHVtZXNBcnJvd3NOYXZpZ2F0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIk5hdiIsIlNpemUiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIlJpZ2h0IiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJCYXNlIiwiU20iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVPLElBQU1BLGdDQUFnQyx1QkFBdEM7QUFFQSxJQUFNQyw0QkFBNEIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxteUJBQ25DSCxnQ0FEbUMsRUFJNUJJLG9EQUFJLENBQUNDLEdBQUwsQ0FBU0MsSUFKbUIsRUFNbkJGLG9EQUFJLENBQUNHLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUFORSxFQU9sQkwsb0RBQUksQ0FBQ0csSUFBTCxDQUFVQyxNQUFWLENBQWlCRSxLQVBDLEVBVWxDVixnQ0FWa0MsRUFXcEJJLG9EQUFJLENBQUNDLEdBQUwsQ0FBU0MsSUFYVyxFQWlCbENOLGdDQWpCa0MsRUEyQnRCVyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBM0JVLEVBNEJiRixzREFBSyxDQUFDRyxJQUFOLENBQVdSLElBQVgsQ0FBZ0JTLEVBNUJILEVBa0N4Qkosc0RBQUssQ0FBQ0csSUFBTixDQUFXUixJQUFYLENBQWdCUyxFQWxDUSxFQXFDYkosc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXJDQyxFQTRDeEJGLHNEQUFLLENBQUNHLElBQU4sQ0FBV1IsSUFBWCxDQUFnQlMsRUE1Q1EsRUE2Q3ZCSixzREFBSyxDQUFDRyxJQUFOLENBQVdSLElBQVgsQ0FBZ0JTLEVBN0NPLEVBOENSSixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBOUNKLEVBK0NURixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBL0NILEVBcURwQkYsc0RBQUssQ0FBQ0csSUFBTixDQUFXUixJQUFYLENBQWdCUyxFQXJESSxFQTBEbkJKLHNEQUFLLENBQUNHLElBQU4sQ0FBV1IsSUFBWCxDQUFnQlMsRUExREcsQ0FBbEMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1ZvbHVtZXNBcnJvd3NOYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFZvbHVtZXNBcnJvd3NOYXZpZ2F0aW9uLmpzL3N0eWxlcy5zY3NzLnRzeFxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBWb2x1bWVzQXJyb3dzTmF2aWdhdGlvbiBTdHlsZXMuXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBoZXhUb1JHQiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9oZXhUb1JHQlwiO1xuaW1wb3J0IHsgTG9nb3R5cGVDbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vX3N2Zy9Mb2dvdHlwZS9Mb2dvdHlwZVwiO1xuXG4vLyBIZWxwZXJzXG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgVm9sdW1lc0Fycm93c05hdmlnYXRpb25DbGFzc05hbWUgPSBgdm9sdW1lcy0tYXJyb3ctbmF2YDtcblxuZXhwb3J0IGNvbnN0IFZvbHVtZXNBcnJvd3NOYXZpZ2F0aW9uU3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJi4ke1ZvbHVtZXNBcnJvd3NOYXZpZ2F0aW9uQ2xhc3NOYW1lfSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAke1Jvb3QuTmF2LlNpemV9O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBhZGRpbmctbGVmdDogJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9O1xuICAgICAgcGFkZGluZy1yaWdodDogJHtSb290LkdyaWQuR3V0dGVyLlJpZ2h0fTtcbiAgICAgIHotaW5kZXg6IDk5OTtcblxuICAgIC4ke1ZvbHVtZXNBcnJvd3NOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9faW5uZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKCR7Um9vdC5OYXYuU2l6ZX0gKiAwLjc1KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC4ke1ZvbHVtZXNBcnJvd3NOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fY29sIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgXG4gICAgICAmLS1sZWZ0LCAmLS1yaWdodCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgICAgICBwYWRkaW5nOiAwIGNhbGMoJHtUaGVtZS5CYXNlLlNpemUuU219IC8gNCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi0tbGVmdDo6YmVmb3JlLCAmLS1yaWdodDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogJHtUaGVtZS5CYXNlLlNpemUuU219O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJi0tbGVmdDo6YWZ0ZXIsICYtLXJpZ2h0OjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAke1RoZW1lLkJhc2UuU2l6ZS5TbX07XG4gICAgICAgIGhlaWdodDogJHtUaGVtZS5CYXNlLlNpemUuU219O1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICAmLS1sZWZ0OjphZnRlciB7XG4gICAgICAgIGxlZnQ6IGNhbGMoJHtUaGVtZS5CYXNlLlNpemUuU219IC8gLTQpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKC41KTtcbiAgICAgIH1cblxuICAgICAgJi0tcmlnaHQ6OmJlZm9yZSB7XG4gICAgICAgIHJpZ2h0OiBjYWxjKCR7VGhlbWUuQmFzZS5TaXplLlNtfSAvIC00KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKSBzY2FsZSguNSk7XG4gICAgICB9XG5cblxuICAgIH1cblxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/VolumesArrowsNavigation/styles.scss.tsx\n");

/***/ })

})