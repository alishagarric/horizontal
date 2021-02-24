webpackHotUpdate_N_E("pages/volume-02",{

/***/ "./components/Sections/GridColumn/styles.scss.tsx":
/*!********************************************************!*\
  !*** ./components/Sections/GridColumn/styles.scss.tsx ***!
  \********************************************************/
/*! exports provided: GridColumnClassName, GridColumnStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GridColumnClassName\", function() { return GridColumnClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GridColumnStyle\", function() { return GridColumnStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/**\n *\n * GridColumn.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website GridColumn Styles. To be used in horizontal loop\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n\n// Constants\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\nvar GridColumnClassName = \"grid-column\";\nvar GridColumnStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__GridColumnStyle\",\n  componentId: \"sc-2ygzpa-0\"\n})([\"&.\", \"{height:100%;margin-left:calc(\", \" * 2);margin-right:calc(\", \" * 2);width:calc(var(--horizontalScrollSectionHeight) / 2);display:grid;grid-template-rows:50% 50%;position:relative;background:\", \";&--double-width{width:var(--horizontalScrollSectionHeight);}&--two-items{.\", \"__block{width:calc(100% - \", \");&:first-of-type{height:calc(100% - \", \");margin-bottom:\", \";margin-right:\", \";grid-row:1 / 2;}&:last-of-type{grid-row:2 / 3;height:calc(100% - \", \");margin-top:\", \";margin-right:\", \";}}}&--reversed .\", \"__block{&:first-of-type{grid-row:2 / 3;margin-top:\", \";margin-bottom:0;}&:last-of-type{grid-row:1 / 2;margin-bottom:\", \";margin-top:0;}}.\", \"__block{grid-row:1 / 3;width:100%;}.\", \"__img{object-fit:cover;height:100%;width:100%;}.\", \"__img-container{position:relative;&:after{background:\", \";opacity:0.1;position:absolute;top:0;left:0;width:100%;height:100%;content:\\\"\\\";}}@media (max-width:\", \"){grid-template-rows:auto;grid-template-columns:50% 50%;&--double-width{width:auto;}}}+ section.\", \"{margin-left:0;@media (max-width:\", \"){margin-left:\", \";margin-bottom:0;}}\"], GridColumnClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varBackground, GridColumnClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, GridColumnClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].ColumnGutter, GridColumnClassName, GridColumnClassName, GridColumnClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\", GridColumnClassName, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\", _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Left);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9HcmlkQ29sdW1uL3N0eWxlcy5zY3NzLnRzeD9hMDQzIl0sIm5hbWVzIjpbIkdyaWRDb2x1bW5DbGFzc05hbWUiLCJHcmlkQ29sdW1uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIkNvbHVtbkd1dHRlciIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiU20iLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxtQkFBbUIsZ0JBQXpCO0FBRUEsSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLG1rQ0FDdEJILG1CQURzQixFQUdKSSxvREFBSSxDQUFDQyxZQUhELEVBSUhELG9EQUFJLENBQUNDLFlBSkYsRUFTVkMsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQVRGLEVBaUJuQlIsbUJBakJtQixFQWtCQ0ksb0RBQUksQ0FBQ0MsWUFsQk4sRUFzQklELG9EQUFJLENBQUNDLFlBdEJULEVBdUJERCxvREFBSSxDQUFDQyxZQXZCSixFQXdCRkQsb0RBQUksQ0FBQ0MsWUF4QkgsRUErQklELG9EQUFJLENBQUNDLFlBL0JULEVBZ0NKRCxvREFBSSxDQUFDQyxZQWhDRCxFQWlDRkQsb0RBQUksQ0FBQ0MsWUFqQ0gsRUFzQ1RMLG1CQXRDUyxFQTJDTkksb0RBQUksQ0FBQ0MsWUEzQ0MsRUFrREhELG9EQUFJLENBQUNDLFlBbERGLEVBdURyQkwsbUJBdkRxQixFQTREckJBLG1CQTVEcUIsRUFrRXJCQSxtQkFsRXFCLEVBc0VOTSxzREFBSyxDQUFDQyxLQUFOLENBQVlFLGFBdEVOLEVBa0ZIQywyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBbEZuQixFQThGZGIsbUJBOUZjLEVBaUdIVSwyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBakduQixFQWtHUFQsb0RBQUksQ0FBQ1UsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQWxHVixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvR3JpZENvbHVtbi9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBHcmlkQ29sdW1uLmpzL3N0eWxlcy5zY3NzLnRzeFxuICogQGF1dGhvciBBbGlzaGEgR2FycmljXG4gKiBAZGVzY3JpcHRpb24gVGhlIHdlYnNpdGUgR3JpZENvbHVtbiBTdHlsZXMuIFRvIGJlIHVzZWQgaW4gaG9yaXpvbnRhbCBsb29wXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9CYXNlXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IGhleFRvUkdCIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hleFRvUkdCXCI7XG5cbi8vIENvbnN0YW50c1xuXG4vLyBIZWxwZXJzXG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgR3JpZENvbHVtbkNsYXNzTmFtZSA9IGBncmlkLWNvbHVtbmA7XG5cbmV4cG9ydCBjb25zdCBHcmlkQ29sdW1uU3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJi4ke0dyaWRDb2x1bW5DbGFzc05hbWV9IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoJHtSb290LkNvbHVtbkd1dHRlcn0gKiAyKTtcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoJHtSb290LkNvbHVtbkd1dHRlcn0gKiAyKTtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ob3Jpem9udGFsU2Nyb2xsU2VjdGlvbkhlaWdodCkgLyAyKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcblxuICAgICYtLWRvdWJsZS13aWR0aCB7XG4gICAgICB3aWR0aDogdmFyKC0taG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25IZWlnaHQpO1xuICAgIH1cblxuICAgICYtLXR3by1pdGVtcyB7XG5cbiAgICAgIC4ke0dyaWRDb2x1bW5DbGFzc05hbWV9X19ibG9jayAge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gJHtSb290LkNvbHVtbkd1dHRlcn0pO1xuXG4gICAgICAgIC8vdG9wIGl0ZW1cbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICR7Um9vdC5Db2x1bW5HdXR0ZXJ9KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke1Jvb3QuQ29sdW1uR3V0dGVyfTsgXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAke1Jvb3QuQ29sdW1uR3V0dGVyfTsgXG4gICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ib3R0b20gaXRlbVxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gJHtSb290LkNvbHVtbkd1dHRlcn0pO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7Um9vdC5Db2x1bW5HdXR0ZXJ9OyBcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7Um9vdC5Db2x1bW5HdXR0ZXJ9OyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtLXJldmVyc2VkIC4ke0dyaWRDb2x1bW5DbGFzc05hbWV9X19ibG9jayB7XG5cbiAgICAgIC8vYm90dG9tIGl0ZW1cbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7IFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7Um9vdC5Db2x1bW5HdXR0ZXJ9OyBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLy90b3AgaXRlbVxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7Um9vdC5Db2x1bW5HdXR0ZXJ9OyBcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtHcmlkQ29sdW1uQ2xhc3NOYW1lfV9fYmxvY2sgIHtcbiAgICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC4ke0dyaWRDb2x1bW5DbGFzc05hbWV9X19pbWcge1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuJHtHcmlkQ29sdW1uQ2xhc3NOYW1lfV9faW1nLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5TbSArIFwicHhcIn0pIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcblxuICAgICAgJi0tZG91YmxlLXdpZHRoIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvL1NlY3Rpb24ga2VybmluZ1xuICArIHNlY3Rpb24uJHtHcmlkQ29sdW1uQ2xhc3NOYW1lfSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLlNtICsgXCJweFwifSkge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/GridColumn/styles.scss.tsx\n");

/***/ })

})