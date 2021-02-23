webpackHotUpdate_N_E("pages/volume-03",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"--scrollBarHeight:8px;height:var(--scrollBarHeight);background:\", \";position:fixed;bottom:calc(calc(\", \" + \", \") - calc(var(--scrollBarHeight) / 2));left:0;right:0;z-index:999;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Color.varSecondary, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavSize\"]);\n_c2 = Scrollbar;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c3 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref3) {\n  var translateX = _ref3.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c4 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c5 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c6 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh; //+ 150;\n};\n\nvar calcWidthRatio = function calcWidthRatio(objectWidth) {\n  var vw = window.innerWidth;\n  var ratio = objectWidth / vw;\n  return ratio;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var ratio = calcWidthRatio(objectWidth);\n  return window.innerWidth / ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    var barOffset = offsetTop * -1 / (ref.current.firstChild.clientWidth / window.innerWidth);\n    setTranslateX(offsetTop);\n    setBarTranslateX(barOffset);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref4) {\n  _s();\n\n  var _ref4$addClass = _ref4.addClass,\n      addClass = _ref4$addClass === void 0 ? \"\" : _ref4$addClass,\n      children = _ref4.children,\n      _ref4$hasTopbar = _ref4.hasTopbar,\n      hasTopbar = _ref4$hasTopbar === void 0 ? false : _ref4$hasTopbar,\n      _ref4$forceFullWidth = _ref4.forceFullWidth,\n      forceFullWidth = _ref4$forceFullWidth === void 0 ? false : _ref4$forceFullWidth,\n      _ref4$style = _ref4.style,\n      style = _ref4$style === void 0 ? {} : _ref4$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState3[0],\n      setTranslateX = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState4[0],\n      setBarTranslateX = _useState4[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n      dynamicBarWidth: dynamicBarWidth,\n      translateX: translateBarX\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 144,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"61nE/e+feP4qsMkOZ5/zInR/oiQ=\");\n\n_c7 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"StickyInnerContainer\");\n$RefreshReg$(_c4, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c5, \"ContentWrapper\");\n$RefreshReg$(_c6, \"HorizontalSection\");\n$RefreshReg$(_c7, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyU2Vjb25kYXJ5IiwiQm90dG9tTmF2TWFyZ2luIiwiQm90dG9tTmF2U2l6ZSIsIlN0aWNreUlubmVyQ29udGFpbmVyIiwiSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciIsIkNvbnRlbnRXcmFwcGVyIiwiSG9yaXpvbnRhbFNlY3Rpb24iLCJzZWN0aW9uIiwiY2FsY0R5bmFtaWNIZWlnaHQiLCJvYmplY3RXaWR0aCIsInZ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInZoIiwiaW5uZXJIZWlnaHQiLCJjYWxjV2lkdGhSYXRpbyIsInJhdGlvIiwiY2FsY0R5bmFtaWNCYXJXaWR0aCIsImhhbmRsZUR5bmFtaWNIZWlnaHQiLCJyZWYiLCJzZXREeW5hbWljSGVpZ2h0IiwiY3VycmVudCIsInNjcm9sbFdpZHRoIiwiaGFuZGxlRHluYW1pY0JhcldpZHRoIiwic2V0RHluYW1pY0JhcldpZHRoIiwiYXBwbHlTY3JvbGxMaXN0ZW5lciIsInNldFRyYW5zbGF0ZVgiLCJzZXRCYXJUcmFuc2xhdGVYIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldFRvcCIsImJhck9mZnNldCIsImZpcnN0Q2hpbGQiLCJjbGllbnRXaWR0aCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uIiwiYWRkQ2xhc3MiLCJjaGlsZHJlbiIsImhhc1RvcGJhciIsImZvcmNlRnVsbFdpZHRoIiwidXNlU3RhdGUiLCJ0cmFuc2xhdGVCYXJYIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwib2JqZWN0UmVmIiwicmVzaXplSGFuZGxlciIsInVzZUVmZmVjdCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztDQU1BO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFBQSxNQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxTQUF3QjtBQUNsRUMsU0FBSyxFQUFFO0FBQUVDLFlBQU0sWUFBS0YsYUFBTDtBQUFSO0FBRDJELEdBQXhCO0FBQUEsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBeEI7S0FBTUosa0I7QUFRTixJQUFNTyxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLElBQVAsQ0FBWUwsS0FBWixDQUFrQjtBQUFBLE1BQUdNLGVBQUgsU0FBR0EsZUFBSDtBQUFBLE1BQW9CQyxVQUFwQixTQUFvQkEsVUFBcEI7QUFBQSxTQUFzQztBQUN4RUwsU0FBSyxFQUFFO0FBQUVNLFdBQUssWUFBS0YsZUFBTCxPQUFQO0FBQWlDRyxlQUFTLHVCQUFnQkYsVUFBaEI7QUFBMUM7QUFEaUUsR0FBdEM7QUFBQSxDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLHlMQUtDRyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLFlBTGIsRUFPT0MsdUVBUFAsRUFPNkJDLHFFQVA3QixDQUFmO01BQU1WLFM7QUFlTixJQUFNVyxvQkFBb0IsR0FBR2pCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0VBQTFCO01BQU1nQixvQjtBQVFOLElBQU1DLDRCQUE0QixHQUFHbEIseURBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQUEsTUFBR08sVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBcUI7QUFDekVMLFNB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Q0EsNkVBQXpDLGVBQ1BULFNBQVMsR0FBRyxZQUFILEdBQWtCLEVBRHBCLGNBRUxGLFFBQVEsSUFBSUEsUUFGUCxDQUhYO0FBQUEsNEJBT0UscUVBQUMsa0JBQUQ7QUFBb0IsbUJBQWEsRUFBRTdDLGFBQW5DO0FBQUEsNkJBQ0UscUVBQUMsb0JBQUQ7QUFBc0IsV0FBRyxFQUFFbUQsWUFBM0I7QUFBQSwrQkFDRSxxRUFBQyw0QkFBRDtBQUE4QixvQkFBVSxFQUFFN0MsVUFBMUM7QUFBc0QsYUFBRyxFQUFFK0MsU0FBM0Q7QUFBQSxpQ0FDRSxxRUFBQyxpQkFBRDtBQUFBLG1DQUNFLHFFQUFDLGNBQUQ7QUFDRSx1QkFBUyxZQUFLRyw2RUFBTCxzQkFEWDtBQUFBLHdCQUdHVjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFvQkUscUVBQUMsU0FBRDtBQUFXLHFCQUFlLEVBQUV6QyxlQUE1QjtBQUE2QyxnQkFBVSxFQUFFNkM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQW5ETSxDLENBcURQO0FBQ0E7O0dBdERhTix1Qjs7TUFBQUEsdUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0hvcml6b250YWxTY3JvbGxTZWN0aW9uL0hvcml6b250YWxTY3JvbGxTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IEJvdHRvbU5hdk1hcmdpbiwgQm90dG9tTmF2U2l6ZSB9IGZyb20gXCIuLi8uLi9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSxcbiAgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZSxcbn0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5jb25zdCBUYWxsT3V0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IGR5bmFtaWNIZWlnaHQgfSkgPT4gKHtcbiAgc3R5bGU6IHsgaGVpZ2h0OiBgJHtkeW5hbWljSGVpZ2h0fXB4YCB9LFxufSkpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuXG5jb25zdCBTY3JvbGxiYXIgPSBzdHlsZWQuc3Bhbi5hdHRycygoeyBkeW5hbWljQmFyV2lkdGgsIHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgd2lkdGg6IGAke2R5bmFtaWNCYXJXaWR0aH1weGAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWAgfSxcbn0pKWBcbiAgLS1zY3JvbGxCYXJIZWlnaHQ6IDhweDtcbiAgaGVpZ2h0OiB2YXIoLS1zY3JvbGxCYXJIZWlnaHQpO1xuICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhclNlY29uZGFyeX07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiBjYWxjKGNhbGMoJHtCb3R0b21OYXZNYXJnaW4gfSArICR7Qm90dG9tTmF2U2l6ZX0pIC0gY2FsYyh2YXIoLS1zY3JvbGxCYXJIZWlnaHQpIC8gMikpO1xuIC8vIG1hcmdpbi1sZWZ0OiAke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH07XG4gLy8gbWFyZ2luLXJpZ2h0OiAke1Jvb3QuR3JpZC5HdXR0ZXIuUmlnaHR9O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuYDtcblxuY29uc3QgU3RpY2t5SW5uZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gO1xuXG5jb25zdCBIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycygoeyB0cmFuc2xhdGVYIH0pID0+ICh7XG4gIHN0eWxlOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWAgfSxcbn0pKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuYDtcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgSG9yaXpvbnRhbFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5gO1xuXG5jb25zdCBjYWxjRHluYW1pY0hlaWdodCA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgcmV0dXJuIG9iamVjdFdpZHRoIC0gdncgKyB2aCA7Ly8rIDE1MDtcbn07XG5cbmNvbnN0IGNhbGNXaWR0aFJhdGlvID0gKG9iamVjdFdpZHRoKSA9PiB7XG4gIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHJhdGlvID0gKG9iamVjdFdpZHRoIC8gdncpO1xuICByZXR1cm4gcmF0aW87XG59O1xuXG5jb25zdCBjYWxjRHluYW1pY0JhcldpZHRoID0gKG9iamVjdFdpZHRoKSA9PiB7XG4gIGNvbnN0IHJhdGlvID0gY2FsY1dpZHRoUmF0aW8ob2JqZWN0V2lkdGgpO1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggLyByYXRpbztcbn07XG5cbmNvbnN0IGhhbmRsZUR5bmFtaWNIZWlnaHQgPSAocmVmLCBzZXREeW5hbWljSGVpZ2h0KSA9PiB7XG4gIGNvbnN0IG9iamVjdFdpZHRoID0gcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGg7XG4gIGNvbnN0IGR5bmFtaWNIZWlnaHQgPSBjYWxjRHluYW1pY0hlaWdodChvYmplY3RXaWR0aCk7XG4gIHNldER5bmFtaWNIZWlnaHQoZHluYW1pY0hlaWdodCk7XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljQmFyV2lkdGggPSAocmVmLCBzZXREeW5hbWljQmFyV2lkdGgpID0+IHtcbiAgY29uc3Qgb2JqZWN0V2lkdGggPSByZWYuY3VycmVudC5zY3JvbGxXaWR0aDtcbiAgY29uc3QgZHluYW1pY0JhcldpZHRoID0gY2FsY0R5bmFtaWNCYXJXaWR0aChvYmplY3RXaWR0aCk7XG4gIHNldER5bmFtaWNCYXJXaWR0aChkeW5hbWljQmFyV2lkdGgpO1xufTtcblxuY29uc3QgYXBwbHlTY3JvbGxMaXN0ZW5lciA9IChyZWYsIHNldFRyYW5zbGF0ZVgsIHNldEJhclRyYW5zbGF0ZVgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldFRvcCA9IHJlZiAmJiByZWYuY3VycmVudCA/IC1yZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwO1xuICAgIGNvbnN0IGJhck9mZnNldCA9IChvZmZzZXRUb3AgKiAtMSkgLyAocmVmLmN1cnJlbnQuZmlyc3RDaGlsZC5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBzZXRUcmFuc2xhdGVYKG9mZnNldFRvcCk7XG4gICAgc2V0QmFyVHJhbnNsYXRlWChiYXJPZmZzZXQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbiA9ICh7XG4gIGFkZENsYXNzID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIGhhc1RvcGJhciA9IGZhbHNlLFxuICBmb3JjZUZ1bGxXaWR0aCA9IGZhbHNlLFxuICBzdHlsZSA9IHt9LFxufSkgPT4ge1xuICBjb25zdCBbZHluYW1pY0hlaWdodCwgc2V0RHluYW1pY0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2R5bmFtaWNCYXJXaWR0aCwgc2V0RHluYW1pY0JhcldpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RyYW5zbGF0ZUJhclgsIHNldEJhclRyYW5zbGF0ZVhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvYmplY3RSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgaGFuZGxlRHluYW1pY0JhcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhcldpZHRoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgICBoYW5kbGVEeW5hbWljQmFyV2lkdGgob2JqZWN0UmVmLCBzZXREeW5hbWljQmFyV2lkdGgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIGFwcGx5U2Nyb2xsTGlzdGVuZXIoY29udGFpbmVyUmVmLCBzZXRUcmFuc2xhdGVYLCBzZXRCYXJUcmFuc2xhdGVYKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEhvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGVcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGZvcmNlRnVsbFdpZHRoPXtmb3JjZUZ1bGxXaWR0aH1cbiAgICAgIGNsYXNzTmFtZT17YCR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9ICR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9LS0ke1xuICAgICAgICBoYXNUb3BiYXIgPyBcImhhcy10b3BiYXJcIiA6IFwiXCJcbiAgICAgIH0gJHthZGRDbGFzcyAmJiBhZGRDbGFzc31gfVxuICAgID5cbiAgICAgIDxUYWxsT3V0ZXJDb250YWluZXIgZHluYW1pY0hlaWdodD17ZHluYW1pY0hlaWdodH0+XG4gICAgICAgIDxTdGlja3lJbm5lckNvbnRhaW5lciByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgICAgPEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgdHJhbnNsYXRlWD17dHJhbnNsYXRlWH0gcmVmPXtvYmplY3RSZWZ9PlxuICAgICAgICAgICAgPEhvcml6b250YWxTZWN0aW9uPlxuICAgICAgICAgICAgICA8Q29udGVudFdyYXBwZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDwvSG9yaXpvbnRhbFNlY3Rpb24+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyPlxuICAgICAgICA8L1N0aWNreUlubmVyQ29udGFpbmVyPlxuICAgICAgPC9UYWxsT3V0ZXJDb250YWluZXI+XG4gICAgICA8U2Nyb2xsYmFyIGR5bmFtaWNCYXJXaWR0aD17ZHluYW1pY0JhcldpZHRofSB0cmFuc2xhdGVYPXt0cmFuc2xhdGVCYXJYfT48L1Njcm9sbGJhcj5cbiAgICA8L0hvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGU+XG4gICk7XG59O1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})