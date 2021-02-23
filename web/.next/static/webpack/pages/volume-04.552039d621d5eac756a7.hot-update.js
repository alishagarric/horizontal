webpackHotUpdate_N_E("pages/volume-04",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"--scrollBarHeight:2px;height:var(--scrollBarHeight);background:\", \";position:fixed;bottom:calc(\", \" + \", \");margin-left:\", \";margin-right:\", \";left:0;right:0;z-index:999;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Color.varSecondary, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"BottomNavSize\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Right);\n_c2 = Scrollbar;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c3 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref3) {\n  var translateX = _ref3.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c4 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c5 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c6 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh + 150;\n};\n\nvar calcWidthRatio = function calcWidthRatio(objectWidth) {\n  var vw = window.innerWidth;\n  var ratio = objectWidth / vw / 100;\n  console.log(\"ratio\", ratio);\n  return ratio;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var ratio = calcWidthRatio(objectWidth);\n  return objectWidth * ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    var barOffset = offsetTop * -1 / (calcWidthRatio(ref.current.scrollWidth) * 100);\n    console.log(\"scroll width\", ref.current);\n    setTranslateX(offsetTop);\n    setBarTranslateX(barOffset);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref4) {\n  _s();\n\n  var _ref4$addClass = _ref4.addClass,\n      addClass = _ref4$addClass === void 0 ? \"\" : _ref4$addClass,\n      children = _ref4.children,\n      _ref4$hasTopbar = _ref4.hasTopbar,\n      hasTopbar = _ref4$hasTopbar === void 0 ? false : _ref4$hasTopbar,\n      _ref4$forceFullWidth = _ref4.forceFullWidth,\n      forceFullWidth = _ref4$forceFullWidth === void 0 ? false : _ref4$forceFullWidth,\n      _ref4$style = _ref4.style,\n      style = _ref4$style === void 0 ? {} : _ref4$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState3[0],\n      setTranslateX = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState4[0],\n      setBarTranslateX = _useState4[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 158,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 157,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n      dynamicBarWidth: dynamicBarWidth,\n      translateX: translateBarX\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 147,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"61nE/e+feP4qsMkOZ5/zInR/oiQ=\");\n\n_c7 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"StickyInnerContainer\");\n$RefreshReg$(_c4, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c5, \"ContentWrapper\");\n$RefreshReg$(_c6, \"HorizontalSection\");\n$RefreshReg$(_c7, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyU2Vjb25kYXJ5IiwiQm90dG9tTmF2TWFyZ2luIiwiQm90dG9tTmF2U2l6ZSIsIlJvb3QiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIlJpZ2h0IiwiU3RpY2t5SW5uZXJDb250YWluZXIiLCJIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyIiwiQ29udGVudFdyYXBwZXIiLCJIb3Jpem9udGFsU2VjdGlvbiIsInNlY3Rpb24iLCJjYWxjRHluYW1pY0hlaWdodCIsIm9iamVjdFdpZHRoIiwidnciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsImNhbGNXaWR0aFJhdGlvIiwicmF0aW8iLCJjb25zb2xlIiwibG9nIiwiY2FsY0R5bmFtaWNCYXJXaWR0aCIsImhhbmRsZUR5bmFtaWNIZWlnaHQiLCJyZWYiLCJzZXREeW5hbWljSGVpZ2h0IiwiY3VycmVudCIsInNjcm9sbFdpZHRoIiwiaGFuZGxlRHluYW1pY0JhcldpZHRoIiwic2V0RHluYW1pY0JhcldpZHRoIiwiYXBwbHlTY3JvbGxMaXN0ZW5lciIsInNldFRyYW5zbGF0ZVgiLCJzZXRCYXJUcmFuc2xhdGVYIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldFRvcCIsImJhck9mZnNldCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uIiwiYWRkQ2xhc3MiLCJjaGlsZHJlbiIsImhhc1RvcGJhciIsImZvcmNlRnVsbFdpZHRoIiwidXNlU3RhdGUiLCJ0cmFuc2xhdGVCYXJYIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwib2JqZWN0UmVmIiwicmVzaXplSGFuZGxlciIsInVzZUVmZmVjdCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztDQU1BO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFBQSxNQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxTQUF3QjtBQUNsRUMsU0FBSyxFQUFFO0FBQUVDLFlBQU0sWUFBS0YsYUFBTDtBQUFSO0FBRDJELEdBQXhCO0FBQUEsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBeEI7S0FBTUosa0I7QUFRTixJQUFNTyxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLElBQVAsQ0FBWUwsS0FBWixDQUFrQjtBQUFBLE1BQUdNLGVBQUgsU0FBR0EsZUFBSDtBQUFBLE1BQW9CQyxVQUFwQixTQUFvQkEsVUFBcEI7QUFBQSxTQUFzQztBQUN4RUwsU0FBSyxFQUFFO0FBQUVNLFdBQUssWUFBS0YsZUFBTCxPQUFQO0FBQWlDRyxlQUFTLHVCQUFnQkYsVUFBaEI7QUFBMUM7QUFEaUUsR0FBdEM7QUFBQSxDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLG1MQUtDRyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLFlBTGIsRUFPRUMsdUVBUEYsRUFPd0JDLHFFQVB4QixFQVFFQyxvREFBSSxDQUFDQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLElBUm5CLEVBU0dILG9EQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkUsS0FUcEIsQ0FBZjtNQUFNZixTO0FBZU4sSUFBTWdCLG9CQUFvQixHQUFHdEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3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bFNjcm9sbFNlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgQm90dG9tTmF2TWFyZ2luLCBCb3R0b21OYXZTaXplIH0gZnJvbSBcIi4uLy4uL05hdmlnYXRpb24vc3R5bGVzLnNjc3NcIjtcblxuLy8gQ29tcG9uZW50c1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lLFxuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBUeXBlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmNvbnN0IFRhbGxPdXRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgZHluYW1pY0hlaWdodCB9KSA9PiAoe1xuICBzdHlsZTogeyBoZWlnaHQ6IGAke2R5bmFtaWNIZWlnaHR9cHhgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5cbmNvbnN0IFNjcm9sbGJhciA9IHN0eWxlZC5zcGFuLmF0dHJzKCh7IGR5bmFtaWNCYXJXaWR0aCwgdHJhbnNsYXRlWCB9KSA9PiAoe1xuICBzdHlsZTogeyB3aWR0aDogYCR7ZHluYW1pY0JhcldpZHRofXB4YCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICAtLXNjcm9sbEJhckhlaWdodDogMnB4O1xuICBoZWlnaHQ6IHZhcigtLXNjcm9sbEJhckhlaWdodCk7XG4gIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyU2Vjb25kYXJ5fTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IGNhbGMoJHtCb3R0b21OYXZNYXJnaW4gfSArICR7Qm90dG9tTmF2U2l6ZX0pO1xuICBtYXJnaW4tbGVmdDogJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9O1xuICBtYXJnaW4tcmlnaHQ6ICR7Um9vdC5HcmlkLkd1dHRlci5SaWdodH07XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk7XG5gO1xuXG5jb25zdCBTdGlja3lJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBIb3Jpem9udGFsU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IGNhbGNEeW5hbWljSGVpZ2h0ID0gKG9iamVjdFdpZHRoKSA9PiB7XG4gIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXR1cm4gb2JqZWN0V2lkdGggLSB2dyArIHZoICsgMTUwO1xufTtcblxuY29uc3QgY2FsY1dpZHRoUmF0aW8gPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgcmF0aW8gPSAob2JqZWN0V2lkdGggLyB2dykgLyAxMDA7XG4gIGNvbnNvbGUubG9nKFwicmF0aW9cIiwgcmF0aW8pO1xuICByZXR1cm4gcmF0aW87XG59O1xuXG5jb25zdCBjYWxjRHluYW1pY0JhcldpZHRoID0gKG9iamVjdFdpZHRoKSA9PiB7XG4gIGNvbnN0IHJhdGlvID0gY2FsY1dpZHRoUmF0aW8ob2JqZWN0V2lkdGgpO1xuICByZXR1cm4gb2JqZWN0V2lkdGggKiByYXRpbztcbn07XG5cbmNvbnN0IGhhbmRsZUR5bmFtaWNIZWlnaHQgPSAocmVmLCBzZXREeW5hbWljSGVpZ2h0KSA9PiB7XG4gIGNvbnN0IG9iamVjdFdpZHRoID0gcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGg7XG4gIGNvbnN0IGR5bmFtaWNIZWlnaHQgPSBjYWxjRHluYW1pY0hlaWdodChvYmplY3RXaWR0aCk7XG4gIHNldER5bmFtaWNIZWlnaHQoZHluYW1pY0hlaWdodCk7XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljQmFyV2lkdGggPSAocmVmLCBzZXREeW5hbWljQmFyV2lkdGgpID0+IHtcbiAgY29uc3Qgb2JqZWN0V2lkdGggPSByZWYuY3VycmVudC5zY3JvbGxXaWR0aDtcbiAgY29uc3QgZHluYW1pY0JhcldpZHRoID0gY2FsY0R5bmFtaWNCYXJXaWR0aChvYmplY3RXaWR0aCk7XG4gIHNldER5bmFtaWNCYXJXaWR0aChkeW5hbWljQmFyV2lkdGgpO1xufTtcblxuY29uc3QgYXBwbHlTY3JvbGxMaXN0ZW5lciA9IChyZWYsIHNldFRyYW5zbGF0ZVgsIHNldEJhclRyYW5zbGF0ZVgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldFRvcCA9IHJlZiAmJiByZWYuY3VycmVudCA/IC1yZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwO1xuICAgIFxuICAgIGNvbnN0IGJhck9mZnNldCA9IChvZmZzZXRUb3AgKiAtMSkgLyAoY2FsY1dpZHRoUmF0aW8ocmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGgpICogMTAwKTtcbiAgICBjb25zb2xlLmxvZyhcInNjcm9sbCB3aWR0aFwiLCByZWYuY3VycmVudCk7XG4gICAgc2V0VHJhbnNsYXRlWChvZmZzZXRUb3ApO1xuICAgIHNldEJhclRyYW5zbGF0ZVgoYmFyT2Zmc2V0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24gPSAoe1xuICBhZGRDbGFzcyA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICBoYXNUb3BiYXIgPSBmYWxzZSxcbiAgZm9yY2VGdWxsV2lkdGggPSBmYWxzZSxcbiAgc3R5bGUgPSB7fSxcbn0pID0+IHtcbiAgY29uc3QgW2R5bmFtaWNIZWlnaHQsIHNldER5bmFtaWNIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkeW5hbWljQmFyV2lkdGgsIHNldER5bmFtaWNCYXJXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RyYW5zbGF0ZVgsIHNldFRyYW5zbGF0ZVhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0cmFuc2xhdGVCYXJYLCBzZXRCYXJUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb2JqZWN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJXaWR0aCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgaGFuZGxlRHluYW1pY0JhcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhcldpZHRoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTtcbiAgICBhcHBseVNjcm9sbExpc3RlbmVyKGNvbnRhaW5lclJlZiwgc2V0VHJhbnNsYXRlWCwgc2V0QmFyVHJhbnNsYXRlWCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBmb3JjZUZ1bGxXaWR0aD17Zm9yY2VGdWxsV2lkdGh9XG4gICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSAke0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgaGFzVG9wYmFyID8gXCJoYXMtdG9wYmFyXCIgOiBcIlwiXG4gICAgICB9ICR7YWRkQ2xhc3MgJiYgYWRkQ2xhc3N9YH1cbiAgICA+XG4gICAgICA8VGFsbE91dGVyQ29udGFpbmVyIGR5bmFtaWNIZWlnaHQ9e2R5bmFtaWNIZWlnaHR9PlxuICAgICAgICA8U3RpY2t5SW5uZXJDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgICAgIDxIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyIHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZVh9IHJlZj17b2JqZWN0UmVmfT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlcmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L0hvcml6b250YWxTZWN0aW9uPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lcj5cbiAgICAgICAgPC9TdGlja3lJbm5lckNvbnRhaW5lcj5cbiAgICAgIDwvVGFsbE91dGVyQ29udGFpbmVyPlxuICAgICAgPFNjcm9sbGJhciBkeW5hbWljQmFyV2lkdGg9e2R5bmFtaWNCYXJXaWR0aH0gdHJhbnNsYXRlWD17dHJhbnNsYXRlQmFyWH0+PC9TY3JvbGxiYXI+XG4gICAgPC9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlPlxuICApO1xufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})