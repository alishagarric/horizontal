webpackHotUpdate_N_E("pages/volume-03",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"--scrollBarHeight:2px;height:var(--scrollBarHeight);background:\", \";position:fixed;bottom:calc(\", \" + \", \");margin-left:\", \";margin-right:\", \";left:0;right:0;z-index:999;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Color.varSecondary, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavSize\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Right);\n_c2 = Scrollbar;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c3 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref3) {\n  var translateX = _ref3.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c4 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c5 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c6 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh + 150;\n};\n\nvar calcWidthRatio = function calcWidthRatio(objectWidth) {\n  var vw = window.innerWidth;\n  var ratio = objectWidth / vw / 100;\n  return ratio;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var ratio = calcWidthRatio(objectWidth);\n  return objectWidth * ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    var barOffset = offsetTop * -1 * calcWidthRatio(ref.current.scrollWidth);\n    console.log(\"offset\", offsetTop, ref.current.scrollWidth, barOffset);\n    setTranslateX(offsetTop);\n    setBarTranslateX(barOffset);\n    console.log(\"listening\", ref.current.offsetWidth, offsetTop);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref4) {\n  _s();\n\n  var _ref4$addClass = _ref4.addClass,\n      addClass = _ref4$addClass === void 0 ? \"\" : _ref4$addClass,\n      children = _ref4.children,\n      _ref4$hasTopbar = _ref4.hasTopbar,\n      hasTopbar = _ref4$hasTopbar === void 0 ? false : _ref4$hasTopbar,\n      _ref4$forceFullWidth = _ref4.forceFullWidth,\n      forceFullWidth = _ref4$forceFullWidth === void 0 ? false : _ref4$forceFullWidth,\n      _ref4$style = _ref4.style,\n      style = _ref4$style === void 0 ? {} : _ref4$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState3[0],\n      setTranslateX = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState4[0],\n      setBarTranslateX = _useState4[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n      dynamicBarWidth: dynamicBarWidth,\n      translateX: translateBarX\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 148,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"61nE/e+feP4qsMkOZ5/zInR/oiQ=\");\n\n_c7 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"StickyInnerContainer\");\n$RefreshReg$(_c4, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c5, \"ContentWrapper\");\n$RefreshReg$(_c6, \"HorizontalSection\");\n$RefreshReg$(_c7, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyU2Vjb25kYXJ5IiwiQm90dG9tTmF2TWFyZ2luIiwiQm90dG9tTmF2U2l6ZSIsIlJvb3QiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIlJpZ2h0IiwiU3RpY2t5SW5uZXJDb250YWluZXIiLCJIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyIiwiQ29udGVudFdyYXBwZXIiLCJIb3Jpem9udGFsU2VjdGlvbiIsInNlY3Rpb24iLCJjYWxjRHluYW1pY0hlaWdodCIsIm9iamVjdFdpZHRoIiwidnciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsImNhbGNXaWR0aFJhdGlvIiwicmF0aW8iLCJjYWxjRHluYW1pY0JhcldpZHRoIiwiaGFuZGxlRHluYW1pY0hlaWdodCIsInJlZiIsInNldER5bmFtaWNIZWlnaHQiLCJjdXJyZW50Iiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVEeW5hbWljQmFyV2lkdGgiLCJzZXREeW5hbWljQmFyV2lkdGgiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwic2V0VHJhbnNsYXRlWCIsInNldEJhclRyYW5zbGF0ZVgiLCJhZGRFdmVudExpc3RlbmVyIiwib2Zmc2V0VG9wIiwiYmFyT2Zmc2V0IiwiY29uc29sZSIsImxvZyIsIm9mZnNldFdpZHRoIiwiSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24iLCJhZGRDbGFzcyIsImNoaWxkcmVuIiwiaGFzVG9wYmFyIiwiZm9yY2VGdWxsV2lkdGgiLCJ1c2VTdGF0ZSIsInRyYW5zbGF0ZUJhclgiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJvYmplY3RSZWYiLCJyZXNpemVIYW5kbGVyIiwidXNlRWZmZWN0IiwiSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7O0NBTUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUFBLE1BQUdDLGFBQUgsUUFBR0EsYUFBSDtBQUFBLFNBQXdCO0FBQ2xFQyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxZQUFLRixhQUFMO0FBQVI7QUFEMkQsR0FBeEI7QUFBQSxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLHFDQUF4QjtLQUFNSixrQjtBQVFOLElBQU1PLFNBQVMsR0FBR04seURBQU0sQ0FBQ08sSUFBUCxDQUFZTCxLQUFaLENBQWtCO0FBQUEsTUFBR00sZUFBSCxTQUFHQSxlQUFIO0FBQUEsTUFBb0JDLFVBQXBCLFNBQW9CQSxVQUFwQjtBQUFBLFNBQXNDO0FBQ3hFTCxTQUFLLEVBQUU7QUFBRU0sV0FBSyxZQUFLRixlQUFMLE9BQVA7QUFBaUNHLGVBQVMsdUJBQWdCRixVQUFoQjtBQUExQztBQURpRSxHQUF0QztBQUFBLENBQWxCLENBQUg7QUFBQTtBQUFBO0FBQUEsbUxBS0NHLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFMYixFQU9FQyx1RUFQRixFQU93QkMscUVBUHhCLEVBUUVDLG9EQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUFSbkIsRUFTR0gsb0RBQUksQ0FBQ0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCRSxLQVRwQixDQUFmO01BQU1mLFM7QUFlTixJQUFNZ0Isb0JBQW9CLEdBQUd0Qix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUExQjtNQUFNcUIsb0I7QUFRTixJQUFNQyw0QkFBNEIsR0FBR3ZCLHlEQUFNLENBQUNDLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUFBLE1BQUdPLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCO0FBQ3pFTCxTQUFLLEVBQUU7QUFBRU8sZUFBUyx1QkFBZ0JGLFVBQWhCO0FBQVg7QUFEa0UsR0FBckI7QUFBQSxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLCtGQUFsQztNQUFNYyw0QjtBQVNOLElBQU1DLGNBQWMsR0FBR3hCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUlBQXBCO01BQU11QixjO0FBVU4sSUFBTUMsaUJBQWlCLEdBQUd6Qix5REFBTSxDQUFDMEIsT0FBVjtBQUFBO0FBQUE7QUFBQSxzREFBdkI7TUFBTUQsaUI7O0FBTU4sSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxXQUFELEVBQWlCO0FBQ3pDLE1BQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxVQUFsQjtBQUNBLE1BQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRyxXQUFsQjtBQUNBLFNBQU9MLFdBQVcsR0FBR0MsRUFBZCxHQUFtQkcsRUFBbkIsR0FBd0IsR0FBL0I7QUFDRCxDQUpEOztBQU1BLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ04sV0FBRCxFQUFpQjtBQUN0QyxNQUFNQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBbEI7QUFDQSxNQUFNSSxLQUFLLEdBQUlQLFdBQVcsR0FBR0MsRUFBZixHQUFxQixHQUFuQztBQUNBLFNBQU9NLEtBQVA7QUFDRCxDQUpEOztBQU1BLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ1IsV0FBRCxFQUFpQjtBQUMzQyxNQUFNTyxLQUFLLEdBQUdELGNBQWMsQ0FBQ04sV0FBRCxDQUE1QjtBQUNBLFNBQU9BLFdBQVcsR0FBR08sS0FBckI7QUFDRCxDQUhEOztBQUtBLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsR0FBRCxFQUFNQyxnQkFBTixFQUEyQjtBQUNyRCxNQUFNWCxXQUFXLEdBQUdVLEdBQUcsQ0FBQ0UsT0FBSixDQUFZQyxXQUFoQztBQUNBLE1BQU10QyxhQUFhLEdBQUd3QixpQkFBaUIsQ0FBQ0MsV0FBRCxDQUF2QztBQUNBVyxrQkFBZ0IsQ0FBQ3BDLGFBQUQsQ0FBaEI7QUFDRCxDQUpEOztBQU1BLElBQU11QyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNKLEdBQUQsRUFBTUssa0JBQU4sRUFBNkI7QUFDekQsTUFBTWYsV0FBVyxHQUFHVSxHQUFHLENBQUNFLE9BQUosQ0FBWUMsV0FBaEM7QUFDQSxNQUFNakMsZUFBZSxHQUFHNEIsbUJBQW1CLENBQUNSLFdBQUQsQ0FBM0M7QUFDQWUsb0JBQWtCLENBQUNuQyxlQUFELENBQWxCO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNb0MsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDTixHQUFELEVBQU1PLGFBQU4sRUFBcUJDLGdCQUFyQixFQUEwQztBQUNwRWhCLFFBQU0sQ0FBQ2lCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdEMsUUFBTUMsU0FBUyxHQUFHVixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsT0FBWCxHQUFxQixDQUFDRixHQUFHLENBQUNFLE9BQUosQ0FBWVEsU0FBbEMsR0FBOEMsQ0FBaEU7QUFFQSxRQUFNQyxTQUFTLEdBQUlELFNBQVMsR0FBRyxDQUFDLENBQWQsR0FBbUJkLGNBQWMsQ0FBQ0ksR0FBRyxDQUFDRSxPQUFKLENBQVlDLFdBQWIsQ0FBbkQ7QUFDQVMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkgsU0FBdEIsRUFBaUNWLEdBQUcsQ0FBQ0UsT0FBSixDQUFZQyxXQUE3QyxFQUEwRFEsU0FBMUQ7QUFDQUosaUJBQWEsQ0FBQ0csU0FBRCxDQUFiO0FBQ0FGLG9CQUFnQixDQUFDRyxTQUFELENBQWhCO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJiLEdBQUcsQ0FBQ0UsT0FBSixDQUFZWSxXQUFyQyxFQUFtREosU0FBbkQ7QUFDRCxHQVREO0FBVUQsQ0FYRDs7QUFhTyxJQUFNSyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLFFBTWpDO0FBQUE7O0FBQUEsNkJBTEpDLFFBS0k7QUFBQSxNQUxKQSxRQUtJLCtCQUxPLEVBS1A7QUFBQSxNQUpKQyxRQUlJLFNBSkpBLFFBSUk7QUFBQSw4QkFISkMsU0FHSTtBQUFBLE1BSEpBLFNBR0ksZ0NBSFEsS0FHUjtBQUFBLG1DQUZKQyxjQUVJO0FBQUEsTUFGSkEsY0FFSSxxQ0FGYSxLQUViO0FBQUEsMEJBREpyRCxLQUNJO0FBQUEsTUFESkEsS0FDSSw0QkFESSxFQUNKOztBQUFBLGtCQUNzQ3NELHNEQUFRLENBQUMsSUFBRCxDQUQ5QztBQUFBLE1BQ0d2RCxhQURIO0FBQUEsTUFDa0JvQyxnQkFEbEI7O0FBQUEsbUJBRTBDbUIsc0RBQVEsQ0FBQyxJQUFELENBRmxEO0FBQUEsTUFFR2xELGVBRkg7QUFBQSxNQUVvQm1DLGtCQUZwQjs7QUFBQSxtQkFHZ0NlLHNEQUFRLENBQUMsQ0FBRCxDQUh4QztBQUFBLE1BR0dqRCxVQUhIO0FBQUEsTUFHZW9DLGFBSGY7O0FBQUEsbUJBSXNDYSxzREFBUSxDQUFDLENBQUQsQ0FKOUM7QUFBQSxNQUlHQyxhQUpIO0FBQUEsTUFJa0JiLGdCQUpsQjs7QUFNSixNQUFNYyxZQUFZLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUEzQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQUVBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQjFCLHVCQUFtQixDQUFDeUIsU0FBRCxFQUFZdkIsZ0JBQVosQ0FBbkI7QUFDQUcseUJBQXFCLENBQUNvQixTQUFELEVBQVluQixrQkFBWixDQUFyQjtBQUNELEdBSEQ7O0FBS0FxQix5REFBUyxDQUFDLFlBQU07QUFDZDNCLHVCQUFtQixDQUFDeUIsU0FBRCxFQUFZdkIsZ0JBQVosQ0FBbkI7QUFDQUcseUJBQXFCLENBQUNvQixTQUFELEVBQVluQixrQkFBWixDQUFyQjtBQUNBYixVQUFNLENBQUNpQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2dCLGFBQWxDO0FBQ0FuQix1QkFBbUIsQ0FBQ2dCLFlBQUQsRUFBZWYsYUFBZixFQUE4QkMsZ0JBQTlCLENBQW5CO0FBQ0QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUNFLHFFQUFDLHlFQUFEO0FBQ0UsU0FBSyxFQUFFMUMsS0FEVDtBQUVFLGtCQUFjLEVBQUVxRCxjQUZsQjtBQUdFLGFBQVMsWUFBS1EsNkVBQUwsY0FBeUNBLDZFQUF6QyxlQUNQVCxTQUFTLEdBQUcsWUFBSCxHQUFrQixFQURwQixjQUVMRixRQUFRLElBQUlBLFFBRlAsQ0FIWDtBQUFBLDRCQU9FLHFFQUFDLGtCQUFEO0FBQW9CLG1CQUFhLEVBQUVuRCxhQUFuQztBQUFBLDZCQUNFLHFFQUFDLG9CQUFEO0FBQXNCLFdBQUcsRUFBRXlELFlBQTNCO0FBQUEsK0JBQ0UscUVBQUMsNEJBQUQ7QUFBOEIsb0JBQVUsRUFBRW5ELFVBQTFDO0FBQXNELGFBQUcsRUFBRXFELFNBQTNEO0FBQUEsaUNBQ0UscUVBQUMsaUJBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxjQUFEO0FBQ0UsdUJBQVMsWUFBS0csNkVBQUwsc0JBRFg7QUFBQSx3QkFHR1Y7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBb0JFLHFFQUFDLFNBQUQ7QUFBVyxxQkFBZSxFQUFFL0MsZUFBNUI7QUFBNkMsZ0JBQVUsRUFBRW1EO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0FuRE0sQyxDQXFEUDtBQUNBOztHQXREYU4sdUI7O01BQUFBLHVCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBCb3R0b21OYXZNYXJnaW4sIEJvdHRvbU5hdlNpemUgfSBmcm9tIFwiLi4vLi4vTmF2aWdhdGlvbi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBDb21wb25lbnRzXG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWUsXG4gIEhvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIFR5cGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuY29uc3QgVGFsbE91dGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycygoeyBkeW5hbWljSGVpZ2h0IH0pID0+ICh7XG4gIHN0eWxlOiB7IGhlaWdodDogYCR7ZHluYW1pY0hlaWdodH1weGAgfSxcbn0pKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cblxuY29uc3QgU2Nyb2xsYmFyID0gc3R5bGVkLnNwYW4uYXR0cnMoKHsgZHluYW1pY0JhcldpZHRoLCB0cmFuc2xhdGVYIH0pID0+ICh7XG4gIHN0eWxlOiB7IHdpZHRoOiBgJHtkeW5hbWljQmFyV2lkdGh9cHhgLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgIH0sXG59KSlgXG4gIC0tc2Nyb2xsQmFySGVpZ2h0OiAycHg7XG4gIGhlaWdodDogdmFyKC0tc2Nyb2xsQmFySGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJTZWNvbmRhcnl9O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogY2FsYygke0JvdHRvbU5hdk1hcmdpbiB9ICsgJHtCb3R0b21OYXZTaXplfSk7XG4gIG1hcmdpbi1sZWZ0OiAke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH07XG4gIG1hcmdpbi1yaWdodDogJHtSb290LkdyaWQuR3V0dGVyLlJpZ2h0fTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbmA7XG5cbmNvbnN0IFN0aWNreUlubmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuYDtcblxuY29uc3QgSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgdHJhbnNsYXRlWCB9KSA9PiAoe1xuICBzdHlsZTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbmA7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgY2FsY0R5bmFtaWNIZWlnaHQgPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHJldHVybiBvYmplY3RXaWR0aCAtIHZ3ICsgdmggKyAxNTA7XG59O1xuXG5jb25zdCBjYWxjV2lkdGhSYXRpbyA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCByYXRpbyA9IChvYmplY3RXaWR0aCAvIHZ3KSAvIDEwMDtcbiAgcmV0dXJuIHJhdGlvO1xufTtcblxuY29uc3QgY2FsY0R5bmFtaWNCYXJXaWR0aCA9IChvYmplY3RXaWR0aCkgPT4ge1xuICBjb25zdCByYXRpbyA9IGNhbGNXaWR0aFJhdGlvKG9iamVjdFdpZHRoKTtcbiAgcmV0dXJuIG9iamVjdFdpZHRoICogcmF0aW87XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljSGVpZ2h0ID0gKHJlZiwgc2V0RHluYW1pY0hlaWdodCkgPT4ge1xuICBjb25zdCBvYmplY3RXaWR0aCA9IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoO1xuICBjb25zdCBkeW5hbWljSGVpZ2h0ID0gY2FsY0R5bmFtaWNIZWlnaHQob2JqZWN0V2lkdGgpO1xuICBzZXREeW5hbWljSGVpZ2h0KGR5bmFtaWNIZWlnaHQpO1xufTtcblxuY29uc3QgaGFuZGxlRHluYW1pY0JhcldpZHRoID0gKHJlZiwgc2V0RHluYW1pY0JhcldpZHRoKSA9PiB7XG4gIGNvbnN0IG9iamVjdFdpZHRoID0gcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGg7XG4gIGNvbnN0IGR5bmFtaWNCYXJXaWR0aCA9IGNhbGNEeW5hbWljQmFyV2lkdGgob2JqZWN0V2lkdGgpO1xuICBzZXREeW5hbWljQmFyV2lkdGgoZHluYW1pY0JhcldpZHRoKTtcbn07XG5cbmNvbnN0IGFwcGx5U2Nyb2xsTGlzdGVuZXIgPSAocmVmLCBzZXRUcmFuc2xhdGVYLCBzZXRCYXJUcmFuc2xhdGVYKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBjb25zdCBvZmZzZXRUb3AgPSByZWYgJiYgcmVmLmN1cnJlbnQgPyAtcmVmLmN1cnJlbnQub2Zmc2V0VG9wIDogMDtcbiAgICBcbiAgICBjb25zdCBiYXJPZmZzZXQgPSAob2Zmc2V0VG9wICogLTEpICogY2FsY1dpZHRoUmF0aW8ocmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGgpO1xuICAgIGNvbnNvbGUubG9nKFwib2Zmc2V0XCIsIG9mZnNldFRvcCwgcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGgsIGJhck9mZnNldCk7XG4gICAgc2V0VHJhbnNsYXRlWChvZmZzZXRUb3ApO1xuICAgIHNldEJhclRyYW5zbGF0ZVgoYmFyT2Zmc2V0KTtcblxuICAgIGNvbnNvbGUubG9nKFwibGlzdGVuaW5nXCIsIHJlZi5jdXJyZW50Lm9mZnNldFdpZHRoICwgb2Zmc2V0VG9wKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24gPSAoe1xuICBhZGRDbGFzcyA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICBoYXNUb3BiYXIgPSBmYWxzZSxcbiAgZm9yY2VGdWxsV2lkdGggPSBmYWxzZSxcbiAgc3R5bGUgPSB7fSxcbn0pID0+IHtcbiAgY29uc3QgW2R5bmFtaWNIZWlnaHQsIHNldER5bmFtaWNIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkeW5hbWljQmFyV2lkdGgsIHNldER5bmFtaWNCYXJXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RyYW5zbGF0ZVgsIHNldFRyYW5zbGF0ZVhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0cmFuc2xhdGVCYXJYLCBzZXRCYXJUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb2JqZWN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJXaWR0aCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgaGFuZGxlRHluYW1pY0JhcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhcldpZHRoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTtcbiAgICBhcHBseVNjcm9sbExpc3RlbmVyKGNvbnRhaW5lclJlZiwgc2V0VHJhbnNsYXRlWCwgc2V0QmFyVHJhbnNsYXRlWCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBmb3JjZUZ1bGxXaWR0aD17Zm9yY2VGdWxsV2lkdGh9XG4gICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSAke0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgaGFzVG9wYmFyID8gXCJoYXMtdG9wYmFyXCIgOiBcIlwiXG4gICAgICB9ICR7YWRkQ2xhc3MgJiYgYWRkQ2xhc3N9YH1cbiAgICA+XG4gICAgICA8VGFsbE91dGVyQ29udGFpbmVyIGR5bmFtaWNIZWlnaHQ9e2R5bmFtaWNIZWlnaHR9PlxuICAgICAgICA8U3RpY2t5SW5uZXJDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgICAgIDxIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyIHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZVh9IHJlZj17b2JqZWN0UmVmfT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlcmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L0hvcml6b250YWxTZWN0aW9uPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lcj5cbiAgICAgICAgPC9TdGlja3lJbm5lckNvbnRhaW5lcj5cbiAgICAgIDwvVGFsbE91dGVyQ29udGFpbmVyPlxuICAgICAgPFNjcm9sbGJhciBkeW5hbWljQmFyV2lkdGg9e2R5bmFtaWNCYXJXaWR0aH0gdHJhbnNsYXRlWD17dHJhbnNsYXRlQmFyWH0+PC9TY3JvbGxiYXI+XG4gICAgPC9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlPlxuICApO1xufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})