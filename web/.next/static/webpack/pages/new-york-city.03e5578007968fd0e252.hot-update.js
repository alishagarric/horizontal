webpackHotUpdate_N_E("pages/new-york-city",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px) scaleY(1.5)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"height:var(--scrollBarHeight);;background:\", \";transform-origin:left center;display:block;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_5__[\"Theme\"].Color.varForeground);\n_c2 = Scrollbar;\nvar ScrollbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref3) {\n  var dynamicBarContainerWidth = _ref3.dynamicBarContainerWidth;\n  return {\n    style: {\n      transform: \"scaleX(\".concat(dynamicBarContainerWidth, \")\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__ScrollbarContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"--scrollBarHeight:2px;transform-origin:left center;left:\", \";position:fixed;right:0;z-index:999;bottom:calc(\", \" + \", \" - var(--scrollBarHeight));\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavSize\"]);\n_c3 = ScrollbarContainer;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c4 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref4) {\n  var translateX = _ref4.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c5 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c6 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-6\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c7 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh; //+ 150;\n};\n\nvar calcWidthRatio = function calcWidthRatio(objectWidth) {\n  var vw = window.innerWidth;\n  var ratio = objectWidth / vw;\n  return ratio;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var ratio = calcWidthRatio(objectWidth);\n  return window.innerWidth / ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref && ref.current ? ref.current.scrollWidth : 0;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref && ref.current ? ref.current.scrollWidth : 0;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  console.log(\"ratio\", ratio, ref);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar handleDynamicBarContainerWidth = function handleDynamicBarContainerWidth(ref, setDynamicBarContainerWidth) {\n  var vw = window.innerWidth;\n  var gutterSpace = _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Left + _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Right;\n  var dynamicBarWidth = (vw - gutterSpace) / vw;\n  setDynamicBarContainerWidth(dynamicBarWidth < 1 ? dynamicBarWidth : 1);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    var barOffset = ref && ref.current ? offsetTop * -1 / (ref.current.firstChild.clientWidth / window.innerWidth) : 0;\n    setTranslateX(offsetTop);\n    setBarTranslateX(barOffset);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref5) {\n  _s();\n\n  var _ref5$addClass = _ref5.addClass,\n      addClass = _ref5$addClass === void 0 ? \"\" : _ref5$addClass,\n      children = _ref5.children,\n      _ref5$hasTopbar = _ref5.hasTopbar,\n      hasTopbar = _ref5$hasTopbar === void 0 ? false : _ref5$hasTopbar,\n      _ref5$forceFullWidth = _ref5.forceFullWidth,\n      forceFullWidth = _ref5$forceFullWidth === void 0 ? false : _ref5$forceFullWidth,\n      _ref5$style = _ref5.style,\n      style = _ref5$style === void 0 ? {} : _ref5$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarContainerWidth = _useState3[0],\n      setDynamicBarContainerWidth = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState4[0],\n      setTranslateX = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState5[0],\n      setBarTranslateX = _useState5[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 174,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 173,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ScrollbarContainer, {\n      dynamicBarContainerWidth: dynamicBarContainerWidth,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n        dynamicBarWidth: dynamicBarWidth,\n        translateX: translateBarX\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 184,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 163,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"utn8CFq68ml78kLKc72N4YU5cwU=\");\n\n_c8 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"ScrollbarContainer\");\n$RefreshReg$(_c4, \"StickyInnerContainer\");\n$RefreshReg$(_c5, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c6, \"ContentWrapper\");\n$RefreshReg$(_c7, \"HorizontalSection\");\n$RefreshReg$(_c8, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyRm9yZWdyb3VuZCIsIlNjcm9sbGJhckNvbnRhaW5lciIsImR5bmFtaWNCYXJDb250YWluZXJXaWR0aCIsIlJvb3QiLCJHcmlkIiwiR3V0dGVyIiwiTGVmdCIsIkJvdHRvbU5hdk1hcmdpbiIsIkJvdHRvbU5hdlNpemUiLCJTdGlja3lJbm5lckNvbnRhaW5lciIsIkhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIiLCJDb250ZW50V3JhcHBlciIsIkhvcml6b250YWxTZWN0aW9uIiwic2VjdGlvbiIsImNhbGNEeW5hbWljSGVpZ2h0Iiwib2JqZWN0V2lkdGgiLCJ2dyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ2aCIsImlubmVySGVpZ2h0IiwiY2FsY1dpZHRoUmF0aW8iLCJyYXRpbyIsImNhbGNEeW5hbWljQmFyV2lkdGgiLCJoYW5kbGVEeW5hbWljSGVpZ2h0IiwicmVmIiwic2V0RHluYW1pY0hlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxXaWR0aCIsImhhbmRsZUR5bmFtaWNCYXJXaWR0aCIsInNldER5bmFtaWNCYXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEeW5hbWljQmFyQ29udGFpbmVyV2lkdGgiLCJzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgiLCJndXR0ZXJTcGFjZSIsIkJhc2UiLCJMZyIsIlJpZ2h0IiwiYXBwbHlTY3JvbGxMaXN0ZW5lciIsInNldFRyYW5zbGF0ZVgiLCJzZXRCYXJUcmFuc2xhdGVYIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldFRvcCIsImJhck9mZnNldCIsImZpcnN0Q2hpbGQiLCJjbGllbnRXaWR0aCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uIiwiYWRkQ2xhc3MiLCJjaGlsZHJlbiIsImhhc1RvcGJhciIsImZvcmNlRnVsbFdpZHRoIiwidXNlU3RhdGUiLCJ0cmFuc2xhdGVCYXJYIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwib2JqZWN0UmVmIiwicmVzaXplSGFuZGxlciIsInVzZUVmZmVjdCIsIkhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztDQU1BO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFBQSxNQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxTQUF3QjtBQUNsRUMsU0FBSyxFQUFFO0FBQUVDLFlBQU0sWUFBS0YsYUFBTDtBQUFSO0FBRDJELEdBQXhCO0FBQUEsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBeEI7S0FBTUosa0I7QUFTTixJQUFNTyxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLElBQVAsQ0FBWUwsS0FBWixDQUFrQjtBQUFBLE1BQUdNLGVBQUgsU0FBR0EsZUFBSDtBQUFBLE1BQW9CQyxVQUFwQixTQUFvQkEsVUFBcEI7QUFBQSxTQUFzQztBQUN4RUwsU0FBSyxFQUFFO0FBQUVNLFdBQUssWUFBS0YsZUFBTCxPQUFQO0FBQWlDRyxlQUFTLHVCQUFnQkYsVUFBaEI7QUFBMUM7QUFEaUUsR0FBdEM7QUFBQSxDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUlDRyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBSmIsQ0FBZjtNQUFNUixTO0FBU04sSUFB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QUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F4RE0sQyxDQTBEUDtBQUNBOztHQTNEYU4sdUI7O01BQUFBLHVCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0Jhc2VcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgQm90dG9tTmF2TWFyZ2luLCBCb3R0b21OYXZTaXplIH0gZnJvbSBcIi4uLy4uL05hdmlnYXRpb24vc3R5bGVzLnNjc3NcIjtcblxuLy8gQ29tcG9uZW50c1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lLFxuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBUeXBlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmNvbnN0IFRhbGxPdXRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgZHluYW1pY0hlaWdodCB9KSA9PiAoe1xuICBzdHlsZTogeyBoZWlnaHQ6IGAke2R5bmFtaWNIZWlnaHR9cHhgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5cblxuY29uc3QgU2Nyb2xsYmFyID0gc3R5bGVkLnNwYW4uYXR0cnMoKHsgZHluYW1pY0JhcldpZHRoLCB0cmFuc2xhdGVYIH0pID0+ICh7XG4gIHN0eWxlOiB7IHdpZHRoOiBgJHtkeW5hbWljQmFyV2lkdGh9cHhgLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weCkgc2NhbGVZKDEuNSlgIH0sXG59KSlgXG4gIGhlaWdodDogdmFyKC0tc2Nyb2xsQmFySGVpZ2h0KTs7XG4gIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbmA7XG5cbmNvbnN0IFNjcm9sbGJhckNvbnRhaW5lciA9IHN0eWxlZC5zcGFuLmF0dHJzKCh7IGR5bmFtaWNCYXJDb250YWluZXJXaWR0aCB9KSA9PiAoe1xuICBzdHlsZTogeyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtkeW5hbWljQmFyQ29udGFpbmVyV2lkdGggfSlgIH0sXG59KSlgXG4gIC0tc2Nyb2xsQmFySGVpZ2h0OiAycHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICBsZWZ0OiAke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm90dG9tOiBjYWxjKCR7Qm90dG9tTmF2TWFyZ2luIH0gKyAke0JvdHRvbU5hdlNpemV9IC0gdmFyKC0tc2Nyb2xsQmFySGVpZ2h0KSk7XG5gO1xuXG5jb25zdCBTdGlja3lJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBIb3Jpem9udGFsU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IGNhbGNEeW5hbWljSGVpZ2h0ID0gKG9iamVjdFdpZHRoKSA9PiB7XG4gIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXR1cm4gb2JqZWN0V2lkdGggLSB2dyArIHZoIDsvLysgMTUwO1xufTtcblxuY29uc3QgY2FsY1dpZHRoUmF0aW8gPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgcmF0aW8gPSAob2JqZWN0V2lkdGggLyB2dyk7XG4gIHJldHVybiByYXRpbztcbn07XG5cbmNvbnN0IGNhbGNEeW5hbWljQmFyV2lkdGggPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgcmF0aW8gPSBjYWxjV2lkdGhSYXRpbyhvYmplY3RXaWR0aCk7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAvIHJhdGlvO1xufTtcblxuY29uc3QgaGFuZGxlRHluYW1pY0hlaWdodCA9IChyZWYsIHNldER5bmFtaWNIZWlnaHQpID0+IHtcbiAgY29uc3Qgb2JqZWN0V2lkdGggPSByZWYgJiYgcmVmLmN1cnJlbnQgPyByZWYuY3VycmVudC5zY3JvbGxXaWR0aCA6IDA7XG4gIGNvbnN0IGR5bmFtaWNIZWlnaHQgPSBjYWxjRHluYW1pY0hlaWdodChvYmplY3RXaWR0aCk7XG4gIHNldER5bmFtaWNIZWlnaHQoZHluYW1pY0hlaWdodCk7XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljQmFyV2lkdGggPSAocmVmLCBzZXREeW5hbWljQmFyV2lkdGgpID0+IHtcbiAgY29uc3Qgb2JqZWN0V2lkdGggPSByZWYgJiYgcmVmLmN1cnJlbnQgPyByZWYuY3VycmVudC5zY3JvbGxXaWR0aCA6IDA7XG4gIGNvbnN0IGR5bmFtaWNCYXJXaWR0aCA9IGNhbGNEeW5hbWljQmFyV2lkdGgob2JqZWN0V2lkdGgpO1xuICBjb25zb2xlLmxvZyhcInJhdGlvXCIsIHJhdGlvLCByZWYpO1xuICBzZXREeW5hbWljQmFyV2lkdGgoZHluYW1pY0JhcldpZHRoKTtcbn07XG5cbmNvbnN0IGhhbmRsZUR5bmFtaWNCYXJDb250YWluZXJXaWR0aCA9IChyZWYsIHNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aCkgPT4ge1xuICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCBndXR0ZXJTcGFjZSA9IEJhc2UuR3JpZC5HdXR0ZXIuTGcuTGVmdCArIEJhc2UuR3JpZC5HdXR0ZXIuTGcuUmlnaHRcbiAgY29uc3QgZHluYW1pY0JhcldpZHRoID0gKHZ3IC0gZ3V0dGVyU3BhY2UpIC8gdnc7XG4gIHNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aChkeW5hbWljQmFyV2lkdGggPCAxID8gZHluYW1pY0JhcldpZHRoIDogMSk7XG59O1xuXG5jb25zdCBhcHBseVNjcm9sbExpc3RlbmVyID0gKHJlZiwgc2V0VHJhbnNsYXRlWCwgc2V0QmFyVHJhbnNsYXRlWCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gcmVmICYmIHJlZi5jdXJyZW50ID8gLXJlZi5jdXJyZW50Lm9mZnNldFRvcCA6IDA7XG4gICAgY29uc3QgYmFyT2Zmc2V0ID0gcmVmICYmIHJlZi5jdXJyZW50ID8gKG9mZnNldFRvcCAqIC0xKSAvIChyZWYuY3VycmVudC5maXJzdENoaWxkLmNsaWVudFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDogMDtcbiAgICBzZXRUcmFuc2xhdGVYKG9mZnNldFRvcCk7XG4gICAgc2V0QmFyVHJhbnNsYXRlWChiYXJPZmZzZXQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbiA9ICh7XG4gIGFkZENsYXNzID0gXCJcIixcbiAgY2hpbGRyZW4sXG4gIGhhc1RvcGJhciA9IGZhbHNlLFxuICBmb3JjZUZ1bGxXaWR0aCA9IGZhbHNlLFxuICBzdHlsZSA9IHt9LFxufSkgPT4ge1xuICBjb25zdCBbZHluYW1pY0hlaWdodCwgc2V0RHluYW1pY0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2R5bmFtaWNCYXJXaWR0aCwgc2V0RHluYW1pY0JhcldpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZHluYW1pY0JhckNvbnRhaW5lcldpZHRoLCBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0cmFuc2xhdGVYLCBzZXRUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdHJhbnNsYXRlQmFyWCwgc2V0QmFyVHJhbnNsYXRlWF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG9iamVjdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgICBoYW5kbGVEeW5hbWljQmFyV2lkdGgob2JqZWN0UmVmLCBzZXREeW5hbWljQmFyV2lkdGgpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJDb250YWluZXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgaGFuZGxlRHluYW1pY0JhcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhcldpZHRoKTtcbiAgICBoYW5kbGVEeW5hbWljQmFyQ29udGFpbmVyV2lkdGgob2JqZWN0UmVmLCBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIGFwcGx5U2Nyb2xsTGlzdGVuZXIoY29udGFpbmVyUmVmLCBzZXRUcmFuc2xhdGVYLCBzZXRCYXJUcmFuc2xhdGVYKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEhvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGVcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGZvcmNlRnVsbFdpZHRoPXtmb3JjZUZ1bGxXaWR0aH1cbiAgICAgIGNsYXNzTmFtZT17YCR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9ICR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9LS0ke1xuICAgICAgICBoYXNUb3BiYXIgPyBcImhhcy10b3BiYXJcIiA6IFwiXCJcbiAgICAgIH0gJHthZGRDbGFzcyAmJiBhZGRDbGFzc31gfVxuICAgID5cbiAgICAgIDxUYWxsT3V0ZXJDb250YWluZXIgZHluYW1pY0hlaWdodD17ZHluYW1pY0hlaWdodH0+XG4gICAgICAgIDxTdGlja3lJbm5lckNvbnRhaW5lciByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgICAgPEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgdHJhbnNsYXRlWD17dHJhbnNsYXRlWH0gcmVmPXtvYmplY3RSZWZ9PlxuICAgICAgICAgICAgPEhvcml6b250YWxTZWN0aW9uPlxuICAgICAgICAgICAgICA8Q29udGVudFdyYXBwZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDwvSG9yaXpvbnRhbFNlY3Rpb24+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyPlxuICAgICAgICA8L1N0aWNreUlubmVyQ29udGFpbmVyPlxuICAgICAgPC9UYWxsT3V0ZXJDb250YWluZXI+XG4gICAgICA8U2Nyb2xsYmFyQ29udGFpbmVyIGR5bmFtaWNCYXJDb250YWluZXJXaWR0aD17ZHluYW1pY0JhckNvbnRhaW5lcldpZHRofT5cbiAgICAgICAgPFNjcm9sbGJhciBkeW5hbWljQmFyV2lkdGg9e2R5bmFtaWNCYXJXaWR0aH0gdHJhbnNsYXRlWD17dHJhbnNsYXRlQmFyWH0+PC9TY3JvbGxiYXI+XG4gICAgICA8L1Njcm9sbGJhckNvbnRhaW5lcj5cbiAgICA8L0hvcml6b250YWxTY3JvbGxTZWN0aW9uU3R5bGU+XG4gICk7XG59O1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})