webpackHotUpdate_N_E("pages/volume-04",{

/***/ "./components/Sections/CircleText/CircleText.tsx":
/*!*******************************************************!*\
  !*** ./components/Sections/CircleText/CircleText.tsx ***!
  \*******************************************************/
/*! exports provided: CircleText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CircleText\", function() { return CircleText; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/CircleText/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/CircleText/CircleText.tsx\",\n    _this = undefined;\n\n// Core\n\n// Styles\n // Begin Component\n// __________________________________________________________________________________________\n\n/**\n *\n * @name CircleText\n * @author Alisha Garric\n * @requires /studio/sections/CircleText\n *\n */\nvar CircleText = function CircleText(_ref) {\n  var text = _ref.text,\n      diameter = _ref.diameter;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"CircleTextStyle\"], {\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"CircleTextClassName\"]),\n    diameter: \"\".concat(diameter, \"px\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      viewBox: \"0 0 \".concat(diameter, \" \").concat(diameter),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        id: \"curve\",\n        d: \"\\n              M 0, \".concat(diameter / 2, \"\\n              a \").concat(diameter / 2, \",\").concat(diameter / 2, \" 0 1,1 \").concat(diameter, \",0\\n              a \").concat(diameter / 2, \",\").concat(diameter / 2, \" 0 1,1 -\").concat(diameter, \",0\\n              \")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n        width: diameter,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textPath\", {\n          alignmentBaseline: \"bottom\",\n          xlinkHref: \"#curve\",\n          children: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// __________________________________________________________________________________________\n\n_c = CircleText;\n\nvar _c;\n\n$RefreshReg$(_c, \"CircleText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9DaXJjbGVUZXh0L0NpcmNsZVRleHQudHN4PzA0MjYiXSwibmFtZXMiOlsiQ2lyY2xlVGV4dCIsInRleHQiLCJkaWFtZXRlciIsIkNpcmNsZVRleHRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFTQTtDQU1BO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUE2RCxHQUFHLFNBQWhFQSxVQUFnRSxPQUd2RTtBQUFBLE1BRkpDLElBRUksUUFGSkEsSUFFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUVKLHNCQUNFLHFFQUFDLDREQUFEO0FBQ0UsYUFBUyxZQUFLQyxnRUFBTCxDQURYO0FBRUUsWUFBUSxZQUFLRCxRQUFMLE9BRlY7QUFBQSwyQkFJRTtBQUFLLGFBQU8sZ0JBQVNBLFFBQVQsY0FBcUJBLFFBQXJCLENBQVo7QUFBQSw4QkFDSTtBQUFNLFVBQUUsRUFBQyxPQUFUO0FBQ0UsU0FBQyxpQ0FDUUEsUUFBUSxHQUFHLENBRG5CLCtCQUVLQSxRQUFRLEdBQUcsQ0FGaEIsY0FFcUJBLFFBQVEsR0FBRyxDQUZoQyxvQkFFMkNBLFFBRjNDLGlDQUdLQSxRQUFRLEdBQUcsQ0FIaEIsY0FHcUJBLFFBQVEsR0FBRyxDQUhoQyxxQkFHNENBLFFBSDVDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBT0U7QUFBTSxhQUFLLEVBQUVBLFFBQWI7QUFBQSwrQkFDRTtBQUFVLDJCQUFpQixFQUFDLFFBQTVCO0FBQXFDLG1CQUFTLEVBQUMsUUFBL0M7QUFBQSxvQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQTFCTSxDLENBNEJQO0FBQ0E7O0tBN0JhRCxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9DaXJjbGVUZXh0L0NpcmNsZVRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTE1OVFNfU2l0ZVZvbHVtZSxcbiAgU2l0ZVZvbHVtZXMsXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbGF6eUltYWdlXCI7XG5pbXBvcnQgeyBCcmFuZG1hcmsgfSBmcm9tIFwiLi4vLi4vX3N2Zy9CcmFuZG1hcmsvQnJhbmRtYXJrXCI7XG5pbXBvcnQgeyBMb2dvdHlwZSB9IGZyb20gXCIuLi8uLi9fc3ZnL0xvZ290eXBlL0xvZ290eXBlXCI7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgQ2lyY2xlVGV4dENsYXNzTmFtZSxcbiAgQ2lyY2xlVGV4dFN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMTU5UU19TZWN0aW9uX0NpcmNsZVRleHQgPSB7XG4gIHRleHQ6IHN0cmluZ1xuICBkaWFtZXRlcjogbnVtYmVyOyAvL2luIHBpeGVsc1xufTtcblxuLyoqXG4gKlxuICogQG5hbWUgQ2lyY2xlVGV4dFxuICogQGF1dGhvciBBbGlzaGEgR2FycmljXG4gKiBAcmVxdWlyZXMgL3N0dWRpby9zZWN0aW9ucy9DaXJjbGVUZXh0XG4gKlxuICovXG5leHBvcnQgY29uc3QgQ2lyY2xlVGV4dDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TE1OVFNfU2VjdGlvbl9DaXJjbGVUZXh0PiA9ICh7XG4gIHRleHQsXG4gIGRpYW1ldGVyXG59KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2lyY2xlVGV4dFN0eWxlXG4gICAgICBjbGFzc05hbWU9e2Ake0NpcmNsZVRleHRDbGFzc05hbWV9YH1cbiAgICAgIGRpYW1ldGVyPXtgJHtkaWFtZXRlcn1weGB9XG4gICAgPlxuICAgICAgPHN2ZyB2aWV3Qm94PXtgMCAwICR7ZGlhbWV0ZXJ9ICR7ZGlhbWV0ZXJ9YH0+XG4gICAgICAgICAgPHBhdGggaWQ9XCJjdXJ2ZVwiXG4gICAgICAgICAgICBkPXtgXG4gICAgICAgICAgICAgIE0gMCwgJHtkaWFtZXRlciAvIDJ9XG4gICAgICAgICAgICAgIGEgJHtkaWFtZXRlciAvIDJ9LCR7ZGlhbWV0ZXIgLyAyfSAwIDEsMSAke2RpYW1ldGVyfSwwXG4gICAgICAgICAgICAgIGEgJHtkaWFtZXRlciAvIDJ9LCR7ZGlhbWV0ZXIgLyAyfSAwIDEsMSAtJHtkaWFtZXRlcn0sMFxuICAgICAgICAgICAgICBgfS8+XG4gICAgICAgIDx0ZXh0IHdpZHRoPXtkaWFtZXRlcn0+XG4gICAgICAgICAgPHRleHRQYXRoIGFsaWdubWVudEJhc2VsaW5lPVwiYm90dG9tXCIgeGxpbmtIcmVmPVwiI2N1cnZlXCI+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICA8L3RleHRQYXRoPlxuICAgICAgICA8L3RleHQ+XG5cbiAgICAgIDwvc3ZnPlxuICAgIDwvQ2lyY2xlVGV4dFN0eWxlPlxuICApO1xufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/CircleText/CircleText.tsx\n");

/***/ })

})