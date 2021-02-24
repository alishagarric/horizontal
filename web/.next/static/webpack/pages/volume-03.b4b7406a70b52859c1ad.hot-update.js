webpackHotUpdate_N_E("pages/volume-03",{

/***/ "./components/Sections/HeroColumn/HeroColumn.tsx":
/*!*******************************************************!*\
  !*** ./components/Sections/HeroColumn/HeroColumn.tsx ***!
  \*******************************************************/
/*! exports provided: HeroColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeroColumn\", function() { return HeroColumn; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HeroColumn/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HeroColumn/HeroColumn.tsx\",\n    _this = undefined;\n\n// Core\n\n// Styles\n // Begin Component\n// __________________________________________________________________________________________\n\n/**\n *\n * @name HeroColumn\n * @author Alisha Garric\n * @requires /studio/sections/HeroColumn\n *\n */\nvar HeroColumn = function HeroColumn(_ref) {\n  var header = _ref.header,\n      subHeader = _ref.subHeader,\n      children = _ref.children,\n      width = _ref.width;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"HeroColumnStyle\"], {\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"HeroColumnClassName\"], \" width--\").concat(width ? width : \"default\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"HeroColumnClassName\"], \"__inner\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"HeroColumnClassName\"], \"__header-container\"),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: header\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"HeroColumnClassName\"], \"__sub-header h5\"),\n          children: subHeader\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// __________________________________________________________________________________________\n\n_c = HeroColumn;\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroColumn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9IZXJvQ29sdW1uL0hlcm9Db2x1bW4udHN4P2UzZTgiXSwibmFtZXMiOlsiSGVyb0NvbHVtbiIsImhlYWRlciIsInN1YkhlYWRlciIsImNoaWxkcmVuIiwid2lkdGgiLCJIZXJvQ29sdW1uQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBU0E7Q0FNQTtBQUNBOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBNkQsR0FBRyxTQUFoRUEsVUFBZ0UsT0FLdkU7QUFBQSxNQUpKQyxNQUlJLFFBSkpBLE1BSUk7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFFSixzQkFDRSxxRUFBQyw0REFBRDtBQUNFLGFBQVMsWUFBS0MsZ0VBQUwscUJBQW1DRCxLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUFuRCxDQURYO0FBQUEsMkJBR0U7QUFBSyxlQUFTLFlBQUtDLGdFQUFMLFlBQWQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLFlBQUtBLGdFQUFMLHVCQUFkO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0o7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxZQUFLSSxnRUFBTCxvQkFBWjtBQUFBLG9CQUF3REg7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUtHQyxRQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBcEJNLEMsQ0FzQlA7QUFDQTs7S0F2QmFILFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0hlcm9Db2x1bW4vSGVyb0NvbHVtbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMTU5UU19TaXRlVm9sdW1lLFxuICBTaXRlVm9sdW1lcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzXCI7XG5pbXBvcnQgTGF6eUltYWdlIGZyb20gXCIuLi8uLi8uLi91dGlscy9sYXp5SW1hZ2VcIjtcbmltcG9ydCB7IEJyYW5kbWFyayB9IGZyb20gXCIuLi8uLi9fc3ZnL0JyYW5kbWFyay9CcmFuZG1hcmtcIjtcbmltcG9ydCB7IExvZ290eXBlIH0gZnJvbSBcIi4uLy4uL19zdmcvTG9nb3R5cGUvTG9nb3R5cGVcIjtcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBIZXJvQ29sdW1uQ2xhc3NOYW1lLFxuICBIZXJvQ29sdW1uU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExNTlRTX1NlY3Rpb25fSGVyb0NvbHVtbiA9IHtcbiAgaGVhZGVyOiBzdHJpbmdcbiAgc3ViSGVhZGVyPzogc3RyaW5nO1xuICB3aWR0aD86IFwibGFyZ2VcIiB8IFwibWVkaXVtXCIgfCBcInNtYWxsXCIgfCBcInhsXCI7XG59O1xuXG4vKipcbiAqXG4gKiBAbmFtZSBIZXJvQ29sdW1uXG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqIEByZXF1aXJlcyAvc3R1ZGlvL3NlY3Rpb25zL0hlcm9Db2x1bW5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBIZXJvQ29sdW1uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMTU5UU19TZWN0aW9uX0hlcm9Db2x1bW4+ID0gKHtcbiAgaGVhZGVyLFxuICBzdWJIZWFkZXIsXG4gIGNoaWxkcmVuLFxuICB3aWR0aFxufSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPEhlcm9Db2x1bW5TdHlsZVxuICAgICAgY2xhc3NOYW1lPXtgJHtIZXJvQ29sdW1uQ2xhc3NOYW1lfSB3aWR0aC0tJHt3aWR0aCA/IHdpZHRoIDogXCJkZWZhdWx0XCJ9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7SGVyb0NvbHVtbkNsYXNzTmFtZX1fX2lubmVyYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIZXJvQ29sdW1uQ2xhc3NOYW1lfV9faGVhZGVyLWNvbnRhaW5lcmB9PlxuICAgICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtIZXJvQ29sdW1uQ2xhc3NOYW1lfV9fc3ViLWhlYWRlciBoNWB9PntzdWJIZWFkZXJ9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9IZXJvQ29sdW1uU3R5bGU+XG4gICk7XG59O1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/HeroColumn/HeroColumn.tsx\n");

/***/ })

})