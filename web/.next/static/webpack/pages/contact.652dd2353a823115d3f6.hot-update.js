webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px) scaleY(1.5)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"height:var(--scrollBarHeight);;background:\", \";transform-origin:left center;display:block;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_5__[\"Theme\"].Color.varForeground);\n_c2 = Scrollbar;\nvar ScrollbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref3) {\n  var dynamicBarContainerWidth = _ref3.dynamicBarContainerWidth;\n  return {\n    style: {\n      transform: \"scaleX(\".concat(dynamicBarContainerWidth, \")\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__ScrollbarContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"--scrollBarHeight:2px;transform-origin:left center;left:\", \";position:fixed;right:0;z-index:999;bottom:calc(\", \" + \", \" - var(--scrollBarHeight));\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavSize\"]);\n_c3 = ScrollbarContainer;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c4 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref4) {\n  var translateX = _ref4.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c5 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c6 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-6\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c7 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh; //+ 150;\n};\n\nvar calcWidthRatio = function calcWidthRatio(objectWidth) {\n  var vw = window.innerWidth;\n  var ratio = objectWidth / vw;\n  return ratio;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var ratio = calcWidthRatio(objectWidth);\n  return window.innerWidth / ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref && ref.current ? ref.current.scrollWidth : 0;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref && ref.current ? ref.current.scrollWidth : 0;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar handleDynamicBarContainerWidth = function handleDynamicBarContainerWidth(ref, setDynamicBarContainerWidth) {\n  var vw = window.innerWidth;\n  var gutterSpace = _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Left + _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Right;\n  var dynamicBarWidth = (vw - gutterSpace) / vw;\n  setDynamicBarContainerWidth(dynamicBarWidth > 1 ? dynamicBarWidth : 1);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    var barOffset = ref && ref.current ? offsetTop * -1 / (ref.current.firstChild.clientWidth / window.innerWidth) : 0;\n    setTranslateX(offsetTop);\n    setBarTranslateX(barOffset);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref5) {\n  _s();\n\n  var _ref5$addClass = _ref5.addClass,\n      addClass = _ref5$addClass === void 0 ? \"\" : _ref5$addClass,\n      children = _ref5.children,\n      _ref5$hasTopbar = _ref5.hasTopbar,\n      hasTopbar = _ref5$hasTopbar === void 0 ? false : _ref5$hasTopbar,\n      _ref5$forceFullWidth = _ref5.forceFullWidth,\n      forceFullWidth = _ref5$forceFullWidth === void 0 ? false : _ref5$forceFullWidth,\n      _ref5$style = _ref5.style,\n      style = _ref5$style === void 0 ? {} : _ref5$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarContainerWidth = _useState3[0],\n      setDynamicBarContainerWidth = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState4[0],\n      setTranslateX = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState5[0],\n      setBarTranslateX = _useState5[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 173,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 172,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 170,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ScrollbarContainer, {\n      dynamicBarContainerWidth: dynamicBarContainerWidth,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n        dynamicBarWidth: dynamicBarWidth,\n        translateX: translateBarX\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 162,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"utn8CFq68ml78kLKc72N4YU5cwU=\");\n\n_c8 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"ScrollbarContainer\");\n$RefreshReg$(_c4, \"StickyInnerContainer\");\n$RefreshReg$(_c5, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c6, \"ContentWrapper\");\n$RefreshReg$(_c7, \"HorizontalSection\");\n$RefreshReg$(_c8, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyRm9yZWdyb3VuZCIsIlNjcm9sbGJhckNvbnRhaW5lciIsImR5bmFtaWNCYXJDb250YWluZXJXaWR0aCIsIlJvb3QiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIkJvdHRvbU5hdk1hcmdpbiIsIkJvdHRvbU5hdlNpemUiLCJTdGlja3lJbm5lckNvbnRhaW5lciIsIkhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIiLCJDb250ZW50V3JhcHBlciIsIkhvcml6b250YWxTZWN0aW9uIiwic2VjdGlvbiIsImNhbGNEeW5hbWljSGVpZ2h0Iiwib2JqZWN0V2lkdGgiLCJ2dyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ2aCIsImlubmVySGVpZ2h0IiwiY2FsY1dpZHRoUmF0aW8iLCJyYXRpbyIsImNhbGNEeW5hbWljQmFyV2lkdGgiLCJoYW5kbGVEeW5hbWljSGVpZ2h0IiwicmVmIiwic2V0RHluYW1pY0hlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxXaWR0aCIsImhhbmRsZUR5bmFtaWNCYXJXaWR0aCIsInNldER5bmFtaWNCYXJXaWR0aCIsImhhbmRsZUR5bmFtaWNCYXJDb250YWluZXJXaWR0aCIsInNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aCIsImd1dHRlclNwYWNlIiwiQmFzZSIsIkxnIiwiUmlnaHQiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwic2V0VHJhbnNsYXRlWCIsInNldEJhclRyYW5zbGF0ZVgiLCJhZGRFdmVudExpc3RlbmVyIiwib2Zmc2V0VG9wIiwiYmFyT2Zmc2V0IiwiZmlyc3RDaGlsZCIsImNsaWVudFdpZHRoIiwiSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24iLCJhZGRDbGFzcyIsImNoaWxkcmVuIiwiaGFzVG9wYmFyIiwiZm9yY2VGdWxsV2lkdGgiLCJ1c2VTdGF0ZSIsInRyYW5zbGF0ZUJhclgiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJvYmplY3RSZWYiLCJyZXNpemVIYW5kbGVyIiwidXNlRWZmZWN0IiwiSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7O0NBTUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUFBLE1BQUdDLGFBQUgsUUFBR0EsYUFBSDtBQUFBLFNBQXdCO0FBQ2xFQyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxZQUFLRixhQUFMO0FBQVI7QUFEMkQsR0FBeEI7QUFBQSxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLHFDQUF4QjtLQUFNSixrQjtBQVNOLElBQU1PLFNBQVMsR0FBR04seURBQU0sQ0FBQ08sSUFBUCxDQUFZTCxLQUFaLENBQWtCO0FBQUEsTUFBR00sZUFBSCxTQUFHQSxlQUFIO0FBQUEsTUFBb0JDLFVBQXBCLFNBQW9CQSxVQUFwQjtBQUFBLFNBQXNDO0FBQ3hFTCxTQUFLLEVBQUU7QUFBRU0sV0FBSyxZQUFLRixlQUFMLE9BQVA7QUFBaUNHLGVBQVMsdUJBQWdCRixVQUFoQjtBQUExQztBQURpRSxHQUF0QztBQUFBLENBQWxCLENBQUg7QUFBQTtBQUFBO0FBQUEsbUdBSUNHLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFKYixDQUFmO01BQU1SLFM7QUFTTixJQUFNUyxrQkFBa0IsR0FBR2Ys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O0dBM0RhTix1Qjs7TUFBQUEsdUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0hvcml6b250YWxTY3JvbGxTZWN0aW9uL0hvcml6b250YWxTY3JvbGxTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBCb3R0b21OYXZNYXJnaW4sIEJvdHRvbU5hdlNpemUgfSBmcm9tIFwiLi4vLi4vTmF2aWdhdGlvbi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBDb21wb25lbnRzXG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWUsXG4gIEhvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIFR5cGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuY29uc3QgVGFsbE91dGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycygoeyBkeW5hbWljSGVpZ2h0IH0pID0+ICh7XG4gIHN0eWxlOiB7IGhlaWdodDogYCR7ZHluYW1pY0hlaWdodH1weGAgfSxcbn0pKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cblxuXG5jb25zdCBTY3JvbGxiYXIgPSBzdHlsZWQuc3Bhbi5hdHRycygoeyBkeW5hbWljQmFyV2lkdGgsIHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgd2lkdGg6IGAke2R5bmFtaWNCYXJXaWR0aH1weGAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KSBzY2FsZVkoMS41KWAgfSxcbn0pKWBcbiAgaGVpZ2h0OiB2YXIoLS1zY3JvbGxCYXJIZWlnaHQpOztcbiAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgU2Nyb2xsYmFyQ29udGFpbmVyID0gc3R5bGVkLnNwYW4uYXR0cnMoKHsgZHluYW1pY0JhckNvbnRhaW5lcldpZHRoIH0pID0+ICh7XG4gIHN0eWxlOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgke2R5bmFtaWNCYXJDb250YWluZXJXaWR0aCB9KWAgfSxcbn0pKWBcbiAgLS1zY3JvbGxCYXJIZWlnaHQ6IDJweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIGxlZnQ6ICR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuICBib3R0b206IGNhbGMoJHtCb3R0b21OYXZNYXJnaW4gfSArICR7Qm90dG9tTmF2U2l6ZX0gLSB2YXIoLS1zY3JvbGxCYXJIZWlnaHQpKTtcbmA7XG5cbmNvbnN0IFN0aWNreUlubmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuYDtcblxuY29uc3QgSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgdHJhbnNsYXRlWCB9KSA9PiAoe1xuICBzdHlsZTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbmA7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgY2FsY0R5bmFtaWNIZWlnaHQgPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHJldHVybiBvYmplY3RXaWR0aCAtIHZ3ICsgdmggOy8vKyAxNTA7XG59O1xuXG5jb25zdCBjYWxjV2lkdGhSYXRpbyA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCByYXRpbyA9IChvYmplY3RXaWR0aCAvIHZ3KTtcbiAgcmV0dXJuIHJhdGlvO1xufTtcblxuY29uc3QgY2FsY0R5bmFtaWNCYXJXaWR0aCA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCByYXRpbyA9IGNhbGNXaWR0aFJhdGlvKG9iamVjdFdpZHRoKTtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gcmF0aW87XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljSGVpZ2h0ID0gKHJlZiwgc2V0RHluYW1pY0hlaWdodCkgPT4ge1xuICBjb25zdCBvYmplY3RXaWR0aCA9IHJlZiAmJiByZWYuY3VycmVudCA/IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoIDogMDtcbiAgY29uc3QgZHluYW1pY0hlaWdodCA9IGNhbGNEeW5hbWljSGVpZ2h0KG9iamVjdFdpZHRoKTtcbiAgc2V0RHluYW1pY0hlaWdodChkeW5hbWljSGVpZ2h0KTtcbn07XG5cbmNvbnN0IGhhbmRsZUR5bmFtaWNCYXJXaWR0aCA9IChyZWYsIHNldER5bmFtaWNCYXJXaWR0aCkgPT4ge1xuICBjb25zdCBvYmplY3RXaWR0aCA9IHJlZiAmJiByZWYuY3VycmVudCA/IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoOiAwO1xuICBjb25zdCBkeW5hbWljQmFyV2lkdGggPSBjYWxjRHluYW1pY0JhcldpZHRoKG9iamVjdFdpZHRoKTtcbiAgc2V0RHluYW1pY0JhcldpZHRoKGR5bmFtaWNCYXJXaWR0aCk7XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljQmFyQ29udGFpbmVyV2lkdGggPSAocmVmLCBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgZ3V0dGVyU3BhY2UgPSBCYXNlLkdyaWQuR3V0dGVyLkxnLkxlZnQgKyBCYXNlLkdyaWQuR3V0dGVyLkxnLlJpZ2h0XG4gIGNvbnN0IGR5bmFtaWNCYXJXaWR0aCA9ICh2dyAtIGd1dHRlclNwYWNlKSAvIHZ3O1xuICBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgoZHluYW1pY0JhcldpZHRoID4gMSA/IGR5bmFtaWNCYXJXaWR0aCA6IDEpO1xufTtcblxuY29uc3QgYXBwbHlTY3JvbGxMaXN0ZW5lciA9IChyZWYsIHNldFRyYW5zbGF0ZVgsIHNldEJhclRyYW5zbGF0ZVgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldFRvcCA9IHJlZiAmJiByZWYuY3VycmVudCA/IC1yZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwO1xuICAgIGNvbnN0IGJhck9mZnNldCA9IHJlZiAmJiByZWYuY3VycmVudCA/IChvZmZzZXRUb3AgKiAtMSkgLyAocmVmLmN1cnJlbnQuZmlyc3RDaGlsZC5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA6IDA7XG4gICAgc2V0VHJhbnNsYXRlWChvZmZzZXRUb3ApO1xuICAgIHNldEJhclRyYW5zbGF0ZVgoYmFyT2Zmc2V0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24gPSAoe1xuICBhZGRDbGFzcyA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICBoYXNUb3BiYXIgPSBmYWxzZSxcbiAgZm9yY2VGdWxsV2lkdGggPSBmYWxzZSxcbiAgc3R5bGUgPSB7fSxcbn0pID0+IHtcbiAgY29uc3QgW2R5bmFtaWNIZWlnaHQsIHNldER5bmFtaWNIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkeW5hbWljQmFyV2lkdGgsIHNldER5bmFtaWNCYXJXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2R5bmFtaWNCYXJDb250YWluZXJXaWR0aCwgc2V0RHluYW1pY0JhckNvbnRhaW5lcldpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RyYW5zbGF0ZUJhclgsIHNldEJhclRyYW5zbGF0ZVhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvYmplY3RSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgaGFuZGxlRHluYW1pY0JhcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhcldpZHRoKTtcbiAgICBoYW5kbGVEeW5hbWljQmFyQ29udGFpbmVyV2lkdGgob2JqZWN0UmVmLCBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJXaWR0aCk7XG4gICAgaGFuZGxlRHluYW1pY0JhckNvbnRhaW5lcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhckNvbnRhaW5lcldpZHRoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTtcbiAgICBhcHBseVNjcm9sbExpc3RlbmVyKGNvbnRhaW5lclJlZiwgc2V0VHJhbnNsYXRlWCwgc2V0QmFyVHJhbnNsYXRlWCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBmb3JjZUZ1bGxXaWR0aD17Zm9yY2VGdWxsV2lkdGh9XG4gICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSAke0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgaGFzVG9wYmFyID8gXCJoYXMtdG9wYmFyXCIgOiBcIlwiXG4gICAgICB9ICR7YWRkQ2xhc3MgJiYgYWRkQ2xhc3N9YH1cbiAgICA+XG4gICAgICA8VGFsbE91dGVyQ29udGFpbmVyIGR5bmFtaWNIZWlnaHQ9e2R5bmFtaWNIZWlnaHR9PlxuICAgICAgICA8U3RpY2t5SW5uZXJDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgICAgIDxIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyIHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZVh9IHJlZj17b2JqZWN0UmVmfT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlcmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L0hvcml6b250YWxTZWN0aW9uPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lcj5cbiAgICAgICAgPC9TdGlja3lJbm5lckNvbnRhaW5lcj5cbiAgICAgIDwvVGFsbE91dGVyQ29udGFpbmVyPlxuICAgICAgPFNjcm9sbGJhckNvbnRhaW5lciBkeW5hbWljQmFyQ29udGFpbmVyV2lkdGg9e2R5bmFtaWNCYXJDb250YWluZXJXaWR0aH0+XG4gICAgICAgIDxTY3JvbGxiYXIgZHluYW1pY0JhcldpZHRoPXtkeW5hbWljQmFyV2lkdGh9IHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZUJhclh9PjwvU2Nyb2xsYmFyPlxuICAgICAgPC9TY3JvbGxiYXJDb250YWluZXI+XG4gICAgPC9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlPlxuICApO1xufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})