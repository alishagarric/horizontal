webpackHotUpdate_N_E("pages/volume-03",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"--scrollBarHeight:2px;height:var(--scrollBarHeight);background:\", \";position:fixed;bottom:calc(\", \" + \", \");margin-left:\", \";margin-right:\", \";left:0;right:0;z-index:999;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Color.varSecondary, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavSize\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Right);\n_c2 = Scrollbar;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c3 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref3) {\n  var translateX = _ref3.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c4 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c5 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c6 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh + 150;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var vw = window.innerWidth;\n  console.log(\"width\", objectWidth, vw);\n  var ratio = objectWidth / vw / 100;\n  return objectWidth * ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    setTranslateX(offsetTop);\n    setBarTranslateX(offsetTop * -1);\n    console.log(\"listening\", ref.current.offsetWidth, offsetTop);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref4) {\n  _s();\n\n  var _ref4$addClass = _ref4.addClass,\n      addClass = _ref4$addClass === void 0 ? \"\" : _ref4$addClass,\n      children = _ref4.children,\n      _ref4$hasTopbar = _ref4.hasTopbar,\n      hasTopbar = _ref4$hasTopbar === void 0 ? false : _ref4$hasTopbar,\n      _ref4$forceFullWidth = _ref4.forceFullWidth,\n      forceFullWidth = _ref4$forceFullWidth === void 0 ? false : _ref4$forceFullWidth,\n      _ref4$style = _ref4.style,\n      style = _ref4$style === void 0 ? {} : _ref4$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState3[0],\n      setTranslateX = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState4[0],\n      setBarTranslateX = _useState4[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 151,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n      dynamicBarWidth: dynamicBarWidth,\n      translateX: translateBarX\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 141,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"61nE/e+feP4qsMkOZ5/zInR/oiQ=\");\n\n_c7 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"StickyInnerContainer\");\n$RefreshReg$(_c4, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c5, \"ContentWrapper\");\n$RefreshReg$(_c6, \"HorizontalSection\");\n$RefreshReg$(_c7, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyU2Vjb25kYXJ5IiwiQm90dG9tTmF2TWFyZ2luIiwiQm90dG9tTmF2U2l6ZSIsIlJvb3QiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIlJpZ2h0IiwiU3RpY2t5SW5uZXJDb250YWluZXIiLCJIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyIiwiQ29udGVudFdyYXBwZXIiLCJIb3Jpem9udGFsU2VjdGlvbiIsInNlY3Rpb24iLCJjYWxjRHluYW1pY0hlaWdodCIsIm9iamVjdFdpZHRoIiwidnciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsImNhbGNEeW5hbWljQmFyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwicmF0aW8iLCJoYW5kbGVEeW5hbWljSGVpZ2h0IiwicmVmIiwic2V0RHluYW1pY0hlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxXaWR0aCIsImhhbmRsZUR5bmFtaWNCYXJXaWR0aCIsInNldER5bmFtaWNCYXJXaWR0aCIsImFwcGx5U2Nyb2xsTGlzdGVuZXIiLCJzZXRUcmFuc2xhdGVYIiwic2V0QmFyVHJhbnNsYXRlWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZzZXRUb3AiLCJvZmZzZXRXaWR0aCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uIiwiYWRkQ2xhc3MiLCJjaGlsZHJlbiIsImhhc1RvcGJhciIsImZvcmNlRnVsbFdpZHRoIiwidXNlU3RhdGUiLCJ0cmFuc2xhdGVCYXJYIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwib2JqZWN0UmVmIiwicmVzaXplSGFuZGxlciIsInVzZUVmZmVjdCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztDQU1BO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFBQSxNQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxTQUF3QjtBQUNsRUMsU0FBSyxFQUFFO0FBQUVDLFlBQU0sWUFBS0YsYUFBTDtBQUFSO0FBRDJELEdBQXhCO0FBQUEsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBeEI7S0FBTUosa0I7QUFRTixJQUFNTyxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLElBQVAsQ0FBWUwsS0FBWixDQUFrQjtBQUFBLE1BQUdNLGVBQUgsU0FBR0EsZUFBSDtBQUFBLE1BQW9CQyxVQUFwQixTQUFvQkEsVUFBcEI7QUFBQSxTQUFzQztBQUN4RUwsU0FBSyxFQUFFO0FBQUVNLFdBQUssWUFBS0YsZUFBTCxPQUFQO0FBQWlDRyxlQUFTLHVCQUFnQkYsVUFBaEI7QUFBMUM7QUFEaUUsR0FBdEM7QUFBQSxDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLG1MQUtDRyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLFlBTGIsRUFPRUMsdUVBUEYsRUFPd0JDLHFFQVB4QixFQVFFQyxvREFBSSxDQUFDQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLElBUm5CLEVBU0dILG9EQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkUsS0FUcEIsQ0FBZjtNQUFNZixTO0FBZU4sSUFBTWdCLG9CQUFvQixHQUFHdEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RUFBMUI7TUFBTXFCLG9C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UyxZQUFLUSw2RUFBTCxjQUF5Q0EsNkVBQXpDLGVBQ1BULFNBQVMsR0FBRyxZQUFILEdBQWtCLEVBRHBCLGNBRUxGLFFBQVEsSUFBSUEsUUFGUCxDQUhYO0FBQUEsNEJBT0UscUVBQUMsa0JBQUQ7QUFBb0IsbUJBQWEsRUFBRWpELGFBQW5DO0FBQUEsNkJBQ0UscUVBQUMsb0JBQUQ7QUFBc0IsV0FBRyxFQUFFdUQsWUFBM0I7QUFBQSwrQkFDRSxxRUFBQyw0QkFBRDtBQUE4QixvQkFBVSxFQUFFakQsVUFBMUM7QUFBc0QsYUFBRyxFQUFFbUQsU0FBM0Q7QUFBQSxpQ0FDRSxxRUFBQyxpQkFBRDtBQUFBLG1DQUNFLHFFQUFDLGNBQUQ7QUFDRSx1QkFBUyxZQUFLRyw2RUFBTCxzQkFEWDtBQUFBLHdCQUdHVjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFvQkUscUVBQUMsU0FBRDtBQUFXLHFCQUFlLEVBQUU3QyxlQUE1QjtBQUE2QyxnQkFBVSxFQUFFaUQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQW5ETSxDLENBcURQO0FBQ0E7O0dBdERhTix1Qjs7TUFBQUEsdUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0hvcml6b250YWxTY3JvbGxTZWN0aW9uL0hvcml6b250YWxTY3JvbGxTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IEJvdHRvbU5hdk1hcmdpbiwgQm90dG9tTmF2U2l6ZSB9IGZyb20gXCIuLi8uLi9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSxcbiAgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZSxcbn0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5jb25zdCBUYWxsT3V0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IGR5bmFtaWNIZWlnaHQgfSkgPT4gKHtcbiAgc3R5bGU6IHsgaGVpZ2h0OiBgJHtkeW5hbWljSGVpZ2h0fXB4YCB9LFxufSkpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuXG5jb25zdCBTY3JvbGxiYXIgPSBzdHlsZWQuc3Bhbi5hdHRycygoeyBkeW5hbWljQmFyV2lkdGgsIHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgd2lkdGg6IGAke2R5bmFtaWNCYXJXaWR0aH1weGAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWAgfSxcbn0pKWBcbiAgLS1zY3JvbGxCYXJIZWlnaHQ6IDJweDtcbiAgaGVpZ2h0OiB2YXIoLS1zY3JvbGxCYXJIZWlnaHQpO1xuICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhclNlY29uZGFyeX07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiBjYWxjKCR7Qm90dG9tTmF2TWFyZ2luIH0gKyAke0JvdHRvbU5hdlNpemV9KTtcbiAgbWFyZ2luLWxlZnQ6ICR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fTtcbiAgbWFyZ2luLXJpZ2h0OiAke1Jvb3QuR3JpZC5HdXR0ZXIuUmlnaHR9O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuYDtcblxuY29uc3QgU3RpY2t5SW5uZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gO1xuXG5jb25zdCBIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycygoeyB0cmFuc2xhdGVYIH0pID0+ICh7XG4gIHN0eWxlOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWAgfSxcbn0pKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuYDtcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgSG9yaXpvbnRhbFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5gO1xuXG5jb25zdCBjYWxjRHluYW1pY0hlaWdodCA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgcmV0dXJuIG9iamVjdFdpZHRoIC0gdncgKyB2aCArIDE1MDtcbn07XG5cbmNvbnN0IGNhbGNEeW5hbWljQmFyV2lkdGggPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc29sZS5sb2coXCJ3aWR0aFwiLCBvYmplY3RXaWR0aCwgdncpO1xuICBjb25zdCByYXRpbyA9IChvYmplY3RXaWR0aCAvIHZ3KSAvIDEwMDtcbiAgcmV0dXJuIG9iamVjdFdpZHRoICogcmF0aW87XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljSGVpZ2h0ID0gKHJlZiwgc2V0RHluYW1pY0hlaWdodCkgPT4ge1xuICBjb25zdCBvYmplY3RXaWR0aCA9IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoO1xuICBjb25zdCBkeW5hbWljSGVpZ2h0ID0gY2FsY0R5bmFtaWNIZWlnaHQob2JqZWN0V2lkdGgpO1xuICBzZXREeW5hbWljSGVpZ2h0KGR5bmFtaWNIZWlnaHQpO1xufTtcblxuY29uc3QgaGFuZGxlRHluYW1pY0JhcldpZHRoID0gKHJlZiwgc2V0RHluYW1pY0JhcldpZHRoKSA9PiB7XG4gIGNvbnN0IG9iamVjdFdpZHRoID0gcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGg7XG4gIGNvbnN0IGR5bmFtaWNCYXJXaWR0aCA9IGNhbGNEeW5hbWljQmFyV2lkdGgob2JqZWN0V2lkdGgpO1xuICBzZXREeW5hbWljQmFyV2lkdGgoZHluYW1pY0JhcldpZHRoKTtcbn07XG5cbmNvbnN0IGFwcGx5U2Nyb2xsTGlzdGVuZXIgPSAocmVmLCBzZXRUcmFuc2xhdGVYLCBzZXRCYXJUcmFuc2xhdGVYKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBjb25zdCBvZmZzZXRUb3AgPSByZWYgJiYgcmVmLmN1cnJlbnQgPyAtcmVmLmN1cnJlbnQub2Zmc2V0VG9wIDogMDtcbiAgICBzZXRUcmFuc2xhdGVYKG9mZnNldFRvcCk7XG4gICAgc2V0QmFyVHJhbnNsYXRlWChvZmZzZXRUb3AgKiAtMSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImxpc3RlbmluZ1wiLCByZWYuY3VycmVudC5vZmZzZXRXaWR0aCAsIG9mZnNldFRvcCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IEhvcml6b250YWxTY3JvbGxTZWN0aW9uID0gKHtcbiAgYWRkQ2xhc3MgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgaGFzVG9wYmFyID0gZmFsc2UsXG4gIGZvcmNlRnVsbFdpZHRoID0gZmFsc2UsXG4gIHN0eWxlID0ge30sXG59KSA9PiB7XG4gIGNvbnN0IFtkeW5hbWljSGVpZ2h0LCBzZXREeW5hbWljSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZHluYW1pY0JhcldpZHRoLCBzZXREeW5hbWljQmFyV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0cmFuc2xhdGVYLCBzZXRUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdHJhbnNsYXRlQmFyWCwgc2V0QmFyVHJhbnNsYXRlWF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG9iamVjdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgICBoYW5kbGVEeW5hbWljQmFyV2lkdGgob2JqZWN0UmVmLCBzZXREeW5hbWljQmFyV2lkdGgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJXaWR0aCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlcik7XG4gICAgYXBwbHlTY3JvbGxMaXN0ZW5lcihjb250YWluZXJSZWYsIHNldFRyYW5zbGF0ZVgsIHNldEJhclRyYW5zbGF0ZVgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgZm9yY2VGdWxsV2lkdGg9e2ZvcmNlRnVsbFdpZHRofVxuICAgICAgY2xhc3NOYW1lPXtgJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0gJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0tLSR7XG4gICAgICAgIGhhc1RvcGJhciA/IFwiaGFzLXRvcGJhclwiIDogXCJcIlxuICAgICAgfSAke2FkZENsYXNzICYmIGFkZENsYXNzfWB9XG4gICAgPlxuICAgICAgPFRhbGxPdXRlckNvbnRhaW5lciBkeW5hbWljSGVpZ2h0PXtkeW5hbWljSGVpZ2h0fT5cbiAgICAgICAgPFN0aWNreUlubmVyQ29udGFpbmVyIHJlZj17Y29udGFpbmVyUmVmfT5cbiAgICAgICAgICA8SG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciB0cmFuc2xhdGVYPXt0cmFuc2xhdGVYfSByZWY9e29iamVjdFJlZn0+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNlY3Rpb24+XG4gICAgICAgICAgICAgIDxDb250ZW50V3JhcHBlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50LXdyYXBwZXJgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsU2VjdGlvbj5cbiAgICAgICAgICA8L0hvcml6b250YWxUcmFuc2xhdGVDb250YWluZXI+XG4gICAgICAgIDwvU3RpY2t5SW5uZXJDb250YWluZXI+XG4gICAgICA8L1RhbGxPdXRlckNvbnRhaW5lcj5cbiAgICAgIDxTY3JvbGxiYXIgZHluYW1pY0JhcldpZHRoPXtkeW5hbWljQmFyV2lkdGh9IHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZUJhclh9PjwvU2Nyb2xsYmFyPlxuICAgIDwvSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZT5cbiAgKTtcbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})