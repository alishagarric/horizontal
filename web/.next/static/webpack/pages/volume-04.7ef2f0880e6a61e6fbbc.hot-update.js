webpackHotUpdate_N_E("pages/volume-04",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"height:var(--scrollBarHeight);background:\", \";transform-origin:left bottom;display:block;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_5__[\"Theme\"].Color.varForeground);\n_c2 = Scrollbar;\nvar ScrollbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref3) {\n  var dynamicBarContainerWidth = _ref3.dynamicBarContainerWidth;\n  return {\n    style: {\n      transform: \"scaleX(\".concat(dynamicBarContainerWidth, \")\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__ScrollbarContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"--scrollBarHeight:3px;transform-origin:left center;left:\", \";position:fixed;right:0;z-index:999;bottom:calc(\", \" + \", \" - var(--scrollBarHeight));\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavSize\"]);\n_c3 = ScrollbarContainer;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c4 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref4) {\n  var translateX = _ref4.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c5 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c6 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-6\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c7 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh; //+ 150;\n};\n\nvar calcWidthRatio = function calcWidthRatio(objectWidth) {\n  var vw = window.innerWidth;\n  var ratio = objectWidth / vw;\n  return ratio;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var ratio = calcWidthRatio(objectWidth);\n  return window.innerWidth / ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar handleDynamicBarContainerWidth = function handleDynamicBarContainerWidth(ref, setDynamicBarContainerWidth) {\n  var vw = window.innerWidth;\n  var gutterSpace = _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Left + _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Right;\n  var dynamicBarWidth = (vw - gutterSpace) / vw;\n  setDynamicBarContainerWidth(dynamicBarWidth);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    var barOffset = ref && ref.current ? offsetTop * -1 / (ref.current.firstChild.clientWidth / window.innerWidth) : 0;\n    setTranslateX(offsetTop);\n    setBarTranslateX(barOffset);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref5) {\n  _s();\n\n  var _ref5$addClass = _ref5.addClass,\n      addClass = _ref5$addClass === void 0 ? \"\" : _ref5$addClass,\n      children = _ref5.children,\n      _ref5$hasTopbar = _ref5.hasTopbar,\n      hasTopbar = _ref5$hasTopbar === void 0 ? false : _ref5$hasTopbar,\n      _ref5$forceFullWidth = _ref5.forceFullWidth,\n      forceFullWidth = _ref5$forceFullWidth === void 0 ? false : _ref5$forceFullWidth,\n      _ref5$style = _ref5.style,\n      style = _ref5$style === void 0 ? {} : _ref5$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarContainerWidth = _useState3[0],\n      setDynamicBarContainerWidth = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState4[0],\n      setTranslateX = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState5[0],\n      setBarTranslateX = _useState5[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 173,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 172,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 170,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ScrollbarContainer, {\n      dynamicBarContainerWidth: dynamicBarContainerWidth,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n        dynamicBarWidth: dynamicBarWidth,\n        translateX: translateBarX\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 162,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"utn8CFq68ml78kLKc72N4YU5cwU=\");\n\n_c8 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"ScrollbarContainer\");\n$RefreshReg$(_c4, \"StickyInnerContainer\");\n$RefreshReg$(_c5, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c6, \"ContentWrapper\");\n$RefreshReg$(_c7, \"HorizontalSection\");\n$RefreshReg$(_c8, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyRm9yZWdyb3VuZCIsIlNjcm9sbGJhckNvbnRhaW5lciIsImR5bmFtaWNCYXJDb250YWluZXJXaWR0aCIsIlJvb3QiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIkJvdHRvbU5hdk1hcmdpbiIsIkJvdHRvbU5hdlNpemUiLCJTdGlja3lJbm5lckNvbnRhaW5lciIsIkhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIiLCJDb250ZW50V3JhcHBlciIsIkhvcml6b250YWxTZWN0aW9uIiwic2VjdGlvbiIsImNhbGNEeW5hbWljSGVpZ2h0Iiwib2JqZWN0V2lkdGgiLCJ2dyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ2aCIsImlubmVySGVpZ2h0IiwiY2FsY1dpZHRoUmF0aW8iLCJyYXRpbyIsImNhbGNEeW5hbWljQmFyV2lkdGgiLCJoYW5kbGVEeW5hbWljSGVpZ2h0IiwicmVmIiwic2V0RHluYW1pY0hlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxXaWR0aCIsImhhbmRsZUR5bmFtaWNCYXJXaWR0aCIsInNldER5bmFtaWNCYXJXaWR0aCIsImhhbmRsZUR5bmFtaWNCYXJDb250YWluZXJXaWR0aCIsInNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aCIsImd1dHRlclNwYWNlIiwiQmFzZSIsIkxnIiwiUmlnaHQiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwic2V0VHJhbnNsYXRlWCIsInNldEJhclRyYW5zbGF0ZVgiLCJhZGRFdmVudExpc3RlbmVyIiwib2Zmc2V0VG9wIiwiYmFyT2Zmc2V0IiwiZmlyc3RDaGlsZCIsImNsaWVudFdpZHRoIiwiSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24iLCJhZGRDbGFzcyIsImNoaWxkcmVuIiwiaGFzVG9wYmFyIiwiZm9yY2VGdWxsV2lkdGgiLCJ1c2VTdGF0ZSIsInRyYW5zbGF0ZUJhclgiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJvYmplY3RSZWYiLCJyZXNpemVIYW5kbGVyIiwidXNlRWZmZWN0IiwiSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7O0NBTUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUFBLE1BQUdDLGFBQUgsUUFBR0EsYUFBSDtBQUFBLFNBQXdCO0FBQ2xFQyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxZQUFLRixhQUFMO0FBQVI7QUFEMkQsR0FBeEI7QUFBQSxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLHFDQUF4QjtLQUFNSixrQjtBQVNOLElBQU1PLFNBQVMsR0FBR04seURBQU0sQ0FBQ08sSUFBUCxDQUFZTCxLQUFaLENBQWtCO0FBQUEsTUFBR00sZUFBSCxTQUFHQSxlQUFIO0FBQUEsTUFBb0JDLFVBQXBCLFNBQW9CQSxVQUFwQjtBQUFBLFNBQXNDO0FBQ3hFTCxTQUFLLEVBQUU7QUFBRU0sV0FBSyxZQUFLRixlQUFMLE9BQVA7QUFBaUNHLGVBQVMsdUJBQWdCRixVQUFoQjtBQUExQztBQURpRSxHQUF0QztBQUFBLENBQWxCLENBQUg7QUFBQTtBQUFBO0FBQUEsa0dBSUNHLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFKYixDQUFmO01BQU1SLFM7QUFTTixJQUFNUyxrQkFBa0IsR0FBR2Ys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QVQ7QUFRQSxzQkFDRSxxRUFBQyx5RUFBRDtBQUNFLFNBQUssRUFBRWpELEtBRFQ7QUFFRSxrQkFBYyxFQUFFMkQsY0FGbEI7QUFHRSxhQUFTLFlBQUtRLDZFQUFMLGNBQXlDQSw2RUFBekMsZUFDUFQsU0FBUyxHQUFHLFlBQUgsR0FBa0IsRUFEcEIsY0FFTEYsUUFBUSxJQUFJQSxRQUZQLENBSFg7QUFBQSw0QkFPRSxxRUFBQyxrQkFBRDtBQUFvQixtQkFBYSxFQUFFekQsYUFBbkM7QUFBQSw2QkFDRSxxRUFBQyxvQkFBRDtBQUFzQixXQUFHLEVBQUUrRCxZQUEzQjtBQUFBLCtCQUNFLHFFQUFDLDRCQUFEO0FBQThCLG9CQUFVLEVBQUV6RCxVQUExQztBQUFzRCxhQUFHLEVBQUUyRCxTQUEzRDtBQUFBLGlDQUNFLHFFQUFDLGlCQUFEO0FBQUEsbUNBQ0UscUVBQUMsY0FBRDtBQUNFLHVCQUFTLFlBQUtHLDZFQUFMLHNCQURYO0FBQUEsd0JBR0dWO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQW9CRSxxRUFBQyxrQkFBRDtBQUFvQiw4QkFBd0IsRUFBRTdDLHdCQUE5QztBQUFBLDZCQUNFLHFFQUFDLFNBQUQ7QUFBVyx1QkFBZSxFQUFFUixlQUE1QjtBQUE2QyxrQkFBVSxFQUFFeUQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F4RE0sQyxDQTBEUDtBQUNBOztHQTNEYU4sdUI7O01BQUFBLHVCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0Jhc2VcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgQm90dG9tTmF2TWFyZ2luLCBCb3R0b21OYXZTaXplIH0gZnJvbSBcIi4uLy4uL05hdmlnYXRpb24vc3R5bGVzLnNjc3NcIjtcblxuLy8gQ29tcG9uZW50c1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lLFxuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBUeXBlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmNvbnN0IFRhbGxPdXRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgZHluYW1pY0hlaWdodCB9KSA9PiAoe1xuICBzdHlsZTogeyBoZWlnaHQ6IGAke2R5bmFtaWNIZWlnaHR9cHhgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5cblxuY29uc3QgU2Nyb2xsYmFyID0gc3R5bGVkLnNwYW4uYXR0cnMoKHsgZHluYW1pY0JhcldpZHRoLCB0cmFuc2xhdGVYIH0pID0+ICh7XG4gIHN0eWxlOiB7IHdpZHRoOiBgJHtkeW5hbWljQmFyV2lkdGh9cHhgLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgIH0sXG59KSlgXG4gIGhlaWdodDogdmFyKC0tc2Nyb2xsQmFySGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgU2Nyb2xsYmFyQ29udGFpbmVyID0gc3R5bGVkLnNwYW4uYXR0cnMoKHsgZHluYW1pY0JhckNvbnRhaW5lcldpZHRoIH0pID0+ICh7XG4gIHN0eWxlOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgke2R5bmFtaWNCYXJDb250YWluZXJXaWR0aCB9KWAgfSxcbn0pKWBcbiAgLS1zY3JvbGxCYXJIZWlnaHQ6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIGxlZnQ6ICR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuICBib3R0b206IGNhbGMoJHtCb3R0b21OYXZNYXJnaW4gfSArICR7Qm90dG9tTmF2U2l6ZX0gLSB2YXIoLS1zY3JvbGxCYXJIZWlnaHQpKTtcbmA7XG5cbmNvbnN0IFN0aWNreUlubmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuYDtcblxuY29uc3QgSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgdHJhbnNsYXRlWCB9KSA9PiAoe1xuICBzdHlsZTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbmA7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgY2FsY0R5bmFtaWNIZWlnaHQgPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHJldHVybiBvYmplY3RXaWR0aCAtIHZ3ICsgdmggOy8vKyAxNTA7XG59O1xuXG5jb25zdCBjYWxjV2lkdGhSYXRpbyA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCByYXRpbyA9IChvYmplY3RXaWR0aCAvIHZ3KTtcbiAgcmV0dXJuIHJhdGlvO1xufTtcblxuY29uc3QgY2FsY0R5bmFtaWNCYXJXaWR0aCA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCByYXRpbyA9IGNhbGNXaWR0aFJhdGlvKG9iamVjdFdpZHRoKTtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gcmF0aW87XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljSGVpZ2h0ID0gKHJlZiwgc2V0RHluYW1pY0hlaWdodCkgPT4ge1xuICBjb25zdCBvYmplY3RXaWR0aCA9IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoO1xuICBjb25zdCBkeW5hbWljSGVpZ2h0ID0gY2FsY0R5bmFtaWNIZWlnaHQob2JqZWN0V2lkdGgpO1xuICBzZXREeW5hbWljSGVpZ2h0KGR5bmFtaWNIZWlnaHQpO1xufTtcblxuY29uc3QgaGFuZGxlRHluYW1pY0JhcldpZHRoID0gKHJlZiwgc2V0RHluYW1pY0JhcldpZHRoKSA9PiB7XG4gIGNvbnN0IG9iamVjdFdpZHRoID0gcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGg7XG4gIGNvbnN0IGR5bmFtaWNCYXJXaWR0aCA9IGNhbGNEeW5hbWljQmFyV2lkdGgob2JqZWN0V2lkdGgpO1xuICBzZXREeW5hbWljQmFyV2lkdGgoZHluYW1pY0JhcldpZHRoKTtcbn07XG5cbmNvbnN0IGhhbmRsZUR5bmFtaWNCYXJDb250YWluZXJXaWR0aCA9IChyZWYsIHNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aCkgPT4ge1xuICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCBndXR0ZXJTcGFjZSA9IEJhc2UuR3JpZC5HdXR0ZXIuTGcuTGVmdCArIEJhc2UuR3JpZC5HdXR0ZXIuTGcuUmlnaHRcbiAgY29uc3QgZHluYW1pY0JhcldpZHRoID0gKHZ3IC0gZ3V0dGVyU3BhY2UpIC8gdnc7XG4gIHNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aChkeW5hbWljQmFyV2lkdGgpO1xufTtcblxuY29uc3QgYXBwbHlTY3JvbGxMaXN0ZW5lciA9IChyZWYsIHNldFRyYW5zbGF0ZVgsIHNldEJhclRyYW5zbGF0ZVgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldFRvcCA9IHJlZiAmJiByZWYuY3VycmVudCA/IC1yZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwO1xuICAgIGNvbnN0IGJhck9mZnNldCA9IHJlZiAmJiByZWYuY3VycmVudCA/IChvZmZzZXRUb3AgKiAtMSkgLyAocmVmLmN1cnJlbnQuZmlyc3RDaGlsZC5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA6IDA7XG4gICAgc2V0VHJhbnNsYXRlWChvZmZzZXRUb3ApO1xuICAgIHNldEJhclRyYW5zbGF0ZVgoYmFyT2Zmc2V0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24gPSAoe1xuICBhZGRDbGFzcyA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICBoYXNUb3BiYXIgPSBmYWxzZSxcbiAgZm9yY2VGdWxsV2lkdGggPSBmYWxzZSxcbiAgc3R5bGUgPSB7fSxcbn0pID0+IHtcbiAgY29uc3QgW2R5bmFtaWNIZWlnaHQsIHNldER5bmFtaWNIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkeW5hbWljQmFyV2lkdGgsIHNldER5bmFtaWNCYXJXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2R5bmFtaWNCYXJDb250YWluZXJXaWR0aCwgc2V0RHluYW1pY0JhckNvbnRhaW5lcldpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RyYW5zbGF0ZUJhclgsIHNldEJhclRyYW5zbGF0ZVhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvYmplY3RSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgaGFuZGxlRHluYW1pY0JhcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhcldpZHRoKTtcbiAgICBoYW5kbGVEeW5hbWljQmFyQ29udGFpbmVyV2lkdGgob2JqZWN0UmVmLCBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJXaWR0aCk7XG4gICAgaGFuZGxlRHluYW1pY0JhckNvbnRhaW5lcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhckNvbnRhaW5lcldpZHRoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTtcbiAgICBhcHBseVNjcm9sbExpc3RlbmVyKGNvbnRhaW5lclJlZiwgc2V0VHJhbnNsYXRlWCwgc2V0QmFyVHJhbnNsYXRlWCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBmb3JjZUZ1bGxXaWR0aD17Zm9yY2VGdWxsV2lkdGh9XG4gICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSAke0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgaGFzVG9wYmFyID8gXCJoYXMtdG9wYmFyXCIgOiBcIlwiXG4gICAgICB9ICR7YWRkQ2xhc3MgJiYgYWRkQ2xhc3N9YH1cbiAgICA+XG4gICAgICA8VGFsbE91dGVyQ29udGFpbmVyIGR5bmFtaWNIZWlnaHQ9e2R5bmFtaWNIZWlnaHR9PlxuICAgICAgICA8U3RpY2t5SW5uZXJDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgICAgIDxIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyIHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZVh9IHJlZj17b2JqZWN0UmVmfT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlcmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L0hvcml6b250YWxTZWN0aW9uPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lcj5cbiAgICAgICAgPC9TdGlja3lJbm5lckNvbnRhaW5lcj5cbiAgICAgIDwvVGFsbE91dGVyQ29udGFpbmVyPlxuICAgICAgPFNjcm9sbGJhckNvbnRhaW5lciBkeW5hbWljQmFyQ29udGFpbmVyV2lkdGg9e2R5bmFtaWNCYXJDb250YWluZXJXaWR0aH0+XG4gICAgICAgIDxTY3JvbGxiYXIgZHluYW1pY0JhcldpZHRoPXtkeW5hbWljQmFyV2lkdGh9IHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZUJhclh9PjwvU2Nyb2xsYmFyPlxuICAgICAgPC9TY3JvbGxiYXJDb250YWluZXI+XG4gICAgPC9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlPlxuICApO1xufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})