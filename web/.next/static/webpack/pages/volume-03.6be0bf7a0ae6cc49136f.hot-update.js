webpackHotUpdate_N_E("pages/volume-03",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"--scrollBarHeight:2px;height:var(--scrollBarHeight);background:\", \";position:fixed;bottom:calc(\", \" + \", \");margin-left:\", \";margin-right:\", \";left:0;right:0;z-index:999;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Color.varSecondary, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavSize\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Right);\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c2 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref3) {\n  var translateX = _ref3.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c3 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c4 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c5 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh + 150;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    setTranslateX(offsetTop);\n    console.log(\"listening\", ref.current.offsetWidth, offsetTop);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref4) {\n  _s();\n\n  var _ref4$addClass = _ref4.addClass,\n      addClass = _ref4$addClass === void 0 ? \"\" : _ref4$addClass,\n      children = _ref4.children,\n      _ref4$hasTopbar = _ref4.hasTopbar,\n      hasTopbar = _ref4$hasTopbar === void 0 ? false : _ref4$hasTopbar,\n      _ref4$forceFullWidth = _ref4.forceFullWidth,\n      forceFullWidth = _ref4$forceFullWidth === void 0 ? false : _ref4$forceFullWidth,\n      _ref4$style = _ref4.style,\n      style = _ref4$style === void 0 ? {} : _ref4$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState3[0],\n      setTranslateX = _useState3[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"__scrollbar\"),\n      dynamicBarWidth: dynamicBarWidth\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 124,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"J+SeeG7Fk1zCWIrLGRXso8N3PBM=\");\n\n_c6 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"StickyInnerContainer\");\n$RefreshReg$(_c3, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c4, \"ContentWrapper\");\n$RefreshReg$(_c5, \"HorizontalSection\");\n$RefreshReg$(_c6, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsImR5bmFtaWNCYXJXaWR0aCIsIndpZHRoIiwiVGhlbWUiLCJDb2xvciIsInZhclNlY29uZGFyeSIsIkJvdHRvbU5hdk1hcmdpbiIsIkJvdHRvbU5hdlNpemUiLCJSb290IiwiR3JpZCIsIkd1dHRlciIsIkxlZnQiLCJSaWdodCIsIlN0aWNreUlubmVyQ29udGFpbmVyIiwiSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciIsInRyYW5zbGF0ZVgiLCJ0cmFuc2Zvcm0iLCJDb250ZW50V3JhcHBlciIsIkhvcml6b250YWxTZWN0aW9uIiwic2VjdGlvbiIsImNhbGNEeW5hbWljSGVpZ2h0Iiwib2JqZWN0V2lkdGgiLCJ2dyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ2aCIsImlubmVySGVpZ2h0IiwiaGFuZGxlRHluYW1pY0hlaWdodCIsInJlZiIsInNldER5bmFtaWNIZWlnaHQiLCJjdXJyZW50Iiwic2Nyb2xsV2lkdGgiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwic2V0VHJhbnNsYXRlWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0V2lkdGgiLCJIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbiIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJoYXNUb3BiYXIiLCJmb3JjZUZ1bGxXaWR0aCIsInVzZVN0YXRlIiwic2V0RHluYW1pY0JhcldpZHRoIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwib2JqZWN0UmVmIiwicmVzaXplSGFuZGxlciIsInVzZUVmZmVjdCIsIkhv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QUFLLEVBQUVuQyxLQURUO0FBRUUsa0JBQWMsRUFBRTZDLGNBRmxCO0FBR0UsYUFBUyxZQUFLUSw2RUFBTCxjQUF5Q0EsNkVBQXpDLGVBQ1BULFNBQVMsR0FBRyxZQUFILEdBQWtCLEVBRHBCLGNBRUxGLFFBQVEsSUFBSUEsUUFGUCxDQUhYO0FBQUEsNEJBT0UscUVBQUMsa0JBQUQ7QUFBb0IsbUJBQWEsRUFBRTNDLGFBQW5DO0FBQUEsNkJBQ0UscUVBQUMsb0JBQUQ7QUFBc0IsV0FBRyxFQUFFaUQsWUFBM0I7QUFBQSwrQkFDRSxxRUFBQyw0QkFBRDtBQUE4QixvQkFBVSxFQUFFL0IsVUFBMUM7QUFBc0QsYUFBRyxFQUFFaUMsU0FBM0Q7QUFBQSxpQ0FDRSxxRUFBQyxpQkFBRDtBQUFBLG1DQUNFLHFFQUFDLGNBQUQ7QUFDRSx1QkFBUyxZQUFLRyw2RUFBTCxzQkFEWDtBQUFBLHdCQUdHVjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFvQkU7QUFBTSxlQUFTLFlBQUtVLDZFQUFMLGdCQUFmO0FBQW1FLHFCQUFlLEVBQUVsRDtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBaERNLEMsQ0FrRFA7QUFDQTs7R0FuRGFzQyx1Qjs7TUFBQUEsdUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0hvcml6b250YWxTY3JvbGxTZWN0aW9uL0hvcml6b250YWxTY3JvbGxTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IEJvdHRvbU5hdk1hcmdpbiwgQm90dG9tTmF2U2l6ZSB9IGZyb20gXCIuLi8uLi9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSxcbiAgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZSxcbn0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5jb25zdCBUYWxsT3V0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IGR5bmFtaWNIZWlnaHQgfSkgPT4gKHtcbiAgc3R5bGU6IHsgaGVpZ2h0OiBgJHtkeW5hbWljSGVpZ2h0fXB4YCB9LFxufSkpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuXG5jb25zdCBTY3JvbGxiYXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IGR5bmFtaWNCYXJXaWR0aCB9KSA9PiAoe1xuICBzdHlsZTogeyB3aWR0aDogYCR7ZHluYW1pY0JhcldpZHRofXB4YCB9LFxufSkpYFxuICAtLXNjcm9sbEJhckhlaWdodDogMnB4O1xuICBoZWlnaHQ6IHZhcigtLXNjcm9sbEJhckhlaWdodCk7XG4gIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyU2Vjb25kYXJ5fTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IGNhbGMoJHtCb3R0b21OYXZNYXJnaW4gfSArICR7Qm90dG9tTmF2U2l6ZX0pO1xuICBtYXJnaW4tbGVmdDogJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9O1xuICBtYXJnaW4tcmlnaHQ6ICR7Um9vdC5HcmlkLkd1dHRlci5SaWdodH07XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk7XG5gO1xuXG5jb25zdCBTdGlja3lJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBIb3Jpem9udGFsU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IGNhbGNEeW5hbWljSGVpZ2h0ID0gKG9iamVjdFdpZHRoKSA9PiB7XG4gIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXR1cm4gb2JqZWN0V2lkdGggLSB2dyArIHZoICsgMTUwO1xufTtcblxuY29uc3QgaGFuZGxlRHluYW1pY0hlaWdodCA9IChyZWYsIHNldER5bmFtaWNIZWlnaHQpID0+IHtcbiAgY29uc3Qgb2JqZWN0V2lkdGggPSByZWYuY3VycmVudC5zY3JvbGxXaWR0aDtcbiAgY29uc3QgZHluYW1pY0hlaWdodCA9IGNhbGNEeW5hbWljSGVpZ2h0KG9iamVjdFdpZHRoKTtcbiAgc2V0RHluYW1pY0hlaWdodChkeW5hbWljSGVpZ2h0KTtcbn07XG5cbmNvbnN0IGFwcGx5U2Nyb2xsTGlzdGVuZXIgPSAocmVmLCBzZXRUcmFuc2xhdGVYKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBjb25zdCBvZmZzZXRUb3AgPSByZWYgJiYgcmVmLmN1cnJlbnQgPyAtcmVmLmN1cnJlbnQub2Zmc2V0VG9wIDogMDtcbiAgICBzZXRUcmFuc2xhdGVYKG9mZnNldFRvcCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImxpc3RlbmluZ1wiLCByZWYuY3VycmVudC5vZmZzZXRXaWR0aCAsIG9mZnNldFRvcCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IEhvcml6b250YWxTY3JvbGxTZWN0aW9uID0gKHtcbiAgYWRkQ2xhc3MgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgaGFzVG9wYmFyID0gZmFsc2UsXG4gIGZvcmNlRnVsbFdpZHRoID0gZmFsc2UsXG4gIHN0eWxlID0ge30sXG59KSA9PiB7XG4gIGNvbnN0IFtkeW5hbWljSGVpZ2h0LCBzZXREeW5hbWljSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZHluYW1pY0JhcldpZHRoLCBzZXREeW5hbWljQmFyV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0cmFuc2xhdGVYLCBzZXRUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb2JqZWN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIGFwcGx5U2Nyb2xsTGlzdGVuZXIoY29udGFpbmVyUmVmLCBzZXRUcmFuc2xhdGVYKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEhvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGVcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGZvcmNlRnVsbFdpZHRoPXtmb3JjZUZ1bGxXaWR0aH1cbiAgICAgIGNsYXNzTmFtZT17YCR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9ICR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9LS0ke1xuICAgICAgICBoYXNUb3BiYXIgPyBcImhhcy10b3BiYXJcIiA6IFwiXCJcbiAgICAgIH0gJHthZGRDbGFzcyAmJiBhZGRDbGFzc31gfVxuICAgID5cbiAgICAgIDxUYWxsT3V0ZXJDb250YWluZXIgZHluYW1pY0hlaWdodD17ZHluYW1pY0hlaWdodH0+XG4gICAgICAgIDxTdGlja3lJbm5lckNvbnRhaW5lciByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgICAgPEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgdHJhbnNsYXRlWD17dHJhbnNsYXRlWH0gcmVmPXtvYmplY3RSZWZ9PlxuICAgICAgICAgICAgPEhvcml6b250YWxTZWN0aW9uPlxuICAgICAgICAgICAgICA8Q29udGVudFdyYXBwZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDwvSG9yaXpvbnRhbFNlY3Rpb24+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyPlxuICAgICAgICA8L1N0aWNreUlubmVyQ29udGFpbmVyPlxuICAgICAgPC9UYWxsT3V0ZXJDb250YWluZXI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fc2Nyb2xsYmFyYH0gZHluYW1pY0JhcldpZHRoPXtkeW5hbWljQmFyV2lkdGh9Pjwvc3Bhbj5cbiAgICA8L0hvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGU+XG4gICk7XG59O1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})