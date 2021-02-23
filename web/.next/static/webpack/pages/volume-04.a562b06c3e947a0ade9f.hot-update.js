webpackHotUpdate_N_E("pages/volume-04",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Navigation/styles.scss */ \"./components/Navigation/styles.scss.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"sc-1rp22vz-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar Scrollbar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref2) {\n  var dynamicBarWidth = _ref2.dynamicBarWidth,\n      translateX = _ref2.translateX;\n  return {\n    style: {\n      width: \"\".concat(dynamicBarWidth, \"px\"),\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__Scrollbar\",\n  componentId: \"sc-1rp22vz-1\"\n})([\"--scrollBarHeight:4px;height:var(--scrollBarHeight);background:\", \";transform-origin:left bottom;display:block;\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_5__[\"Theme\"].Color.varSecondary); //(1000 - 40) / 1000 -> 960 / 1000\n\n_c2 = Scrollbar;\nvar ScrollbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.attrs(function (_ref3) {\n  var dynamicBarContainerWidth = _ref3.dynamicBarContainerWidth;\n  return {\n    style: {\n      transform: \"scaleX(\".concat(dynamicBarContainerWidth, \")\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__ScrollbarContainer\",\n  componentId: \"sc-1rp22vz-2\"\n})([\"left:\", \";position:fixed;right:0;z-index:999;bottom:calc(\", \" + \", \");\"], _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Grid.Gutter.Left, _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavMargin\"], _Navigation_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"BottomNavSize\"]);\n_c3 = ScrollbarContainer;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"sc-1rp22vz-3\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c4 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref4) {\n  var translateX = _ref4.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"sc-1rp22vz-4\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\n_c5 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"sc-1rp22vz-5\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c6 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"sc-1rp22vz-6\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c7 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh; //+ 150;\n};\n\nvar calcWidthRatio = function calcWidthRatio(objectWidth) {\n  var vw = window.innerWidth;\n  var ratio = objectWidth / vw;\n  return ratio;\n};\n\nvar calcDynamicBarWidth = function calcDynamicBarWidth(objectWidth) {\n  var ratio = calcWidthRatio(objectWidth);\n  return window.innerWidth / ratio;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar handleDynamicBarWidth = function handleDynamicBarWidth(ref, setDynamicBarWidth) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicBarWidth = calcDynamicBarWidth(objectWidth);\n  setDynamicBarWidth(dynamicBarWidth);\n};\n\nvar handleDynamicBarContainerWidth = function handleDynamicBarContainerWidth(ref, setDynamicBarContainerWidth) {\n  var vw = window.innerWidth;\n  var gutterSpace = _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Left + _constants_styles_Base__WEBPACK_IMPORTED_MODULE_4__[\"Base\"].Grid.Gutter.Lg.Right;\n  var dynamicBarWidth = (vw - gutterSpace) / vw;\n  setDynamicBarContainerWidth(.95);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX, setBarTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    var barOffset = ref && ref.current ? offsetTop * -1 / (ref.current.firstChild.clientWidth / window.innerWidth) : 0;\n    setTranslateX(offsetTop);\n    setBarTranslateX(barOffset);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref5) {\n  _s();\n\n  var _ref5$addClass = _ref5.addClass,\n      addClass = _ref5$addClass === void 0 ? \"\" : _ref5$addClass,\n      children = _ref5.children,\n      _ref5$hasTopbar = _ref5.hasTopbar,\n      hasTopbar = _ref5$hasTopbar === void 0 ? false : _ref5$hasTopbar,\n      _ref5$forceFullWidth = _ref5.forceFullWidth,\n      forceFullWidth = _ref5$forceFullWidth === void 0 ? false : _ref5$forceFullWidth,\n      _ref5$style = _ref5.style,\n      style = _ref5$style === void 0 ? {} : _ref5$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarWidth = _useState2[0],\n      setDynamicBarWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicBarContainerWidth = _useState3[0],\n      setDynamicBarContainerWidth = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState4[0],\n      setTranslateX = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateBarX = _useState5[0],\n      setBarTranslateX = _useState5[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    handleDynamicBarWidth(objectRef, setDynamicBarWidth);\n    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionStyle\"], {\n    style: style,\n    forceFullWidth: forceFullWidth,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"--\").concat(hasTopbar ? \"has-topbar\" : \"\", \" \").concat(addClass && addClass),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_7__[\"HorizontalScrollSectionClassName\"], \"__content-wrapper\"),\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 174,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 173,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ScrollbarContainer, {\n      dynamicBarContainerWidth: dynamicBarContainerWidth,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Scrollbar, {\n        dynamicBarWidth: dynamicBarWidth,\n        translateX: translateBarX\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 184,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 163,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"utn8CFq68ml78kLKc72N4YU5cwU=\");\n\n_c8 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"Scrollbar\");\n$RefreshReg$(_c3, \"ScrollbarContainer\");\n$RefreshReg$(_c4, \"StickyInnerContainer\");\n$RefreshReg$(_c5, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c6, \"ContentWrapper\");\n$RefreshReg$(_c7, \"HorizontalSection\");\n$RefreshReg$(_c8, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlNjcm9sbGJhciIsInNwYW4iLCJkeW5hbWljQmFyV2lkdGgiLCJ0cmFuc2xhdGVYIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJUaGVtZSIsIkNvbG9yIiwidmFyU2Vjb25kYXJ5IiwiU2Nyb2xsYmFyQ29udGFpbmVyIiwiZHluYW1pY0JhckNvbnRhaW5lcldpZHRoIiwiUm9vdCIsIkdyaWQiLCJHdXR0ZXIiLCJMZWZ0IiwiQm90dG9tTmF2TWFyZ2luIiwiQm90dG9tTmF2U2l6ZSIsIlN0aWNreUlubmVyQ29udGFpbmVyIiwiSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciIsIkNvbnRlbnRXcmFwcGVyIiwiSG9yaXpvbnRhbFNlY3Rpb24iLCJzZWN0aW9uIiwiY2FsY0R5bmFtaWNIZWlnaHQiLCJvYmplY3RXaWR0aCIsInZ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInZoIiwiaW5uZXJIZWlnaHQiLCJjYWxjV2lkdGhSYXRpbyIsInJhdGlvIiwiY2FsY0R5bmFtaWNCYXJXaWR0aCIsImhhbmRsZUR5bmFtaWNIZWlnaHQiLCJyZWYiLCJzZXREeW5hbWljSGVpZ2h0IiwiY3VycmVudCIsInNjcm9sbFdpZHRoIiwiaGFuZGxlRHluYW1pY0JhcldpZHRoIiwic2V0RHluYW1pY0JhcldpZHRoIiwiaGFuZGxlRHluYW1pY0JhckNvbnRhaW5lcldpZHRoIiwic2V0RHluYW1pY0JhckNvbnRhaW5lcldpZHRoIiwiZ3V0dGVyU3BhY2UiLCJCYXNlIiwiTGciLCJSaWdodCIsImFwcGx5U2Nyb2xsTGlzdGVuZXIiLCJzZXRUcmFuc2xhdGVYIiwic2V0QmFyVHJhbnNsYXRlWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZzZXRUb3AiLCJiYXJPZmZzZXQiLCJmaXJzdENoaWxkIiwiY2xpZW50V2lkdGgiLCJIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbiIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJoYXNUb3BiYXIiLCJmb3JjZUZ1bGxXaWR0aCIsInVzZVN0YXRlIiwidHJhbnNsYXRlQmFyWCIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsIm9iamVjdFJlZiIsInJlc2l6ZUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFFQTs7Q0FNQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQUEsTUFBR0MsYUFBSCxRQUFHQSxhQUFIO0FBQUEsU0FBd0I7QUFDbEVDLFNBQUssRUFBRTtBQUFFQyxZQUFNLFlBQUtGLGFBQUw7QUFBUjtBQUQyRCxHQUF4QjtBQUFBLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEscUNBQXhCO0tBQU1KLGtCO0FBU04sSUFBTU8sU0FBUyxHQUFHTix5REFBTSxDQUFDTyxJQUFQLENBQVlMLEtBQVosQ0FBa0I7QUFBQSxNQUFHTSxlQUFILFNBQUdBLGVBQUg7QUFBQSxNQUFvQkMsVUFBcEIsU0FBb0JBLFVBQXBCO0FBQUEsU0FBc0M7QUFDeEVMLFNBQUssRUFBRTtBQUFFTSxXQUFLLFlBQUtGLGVBQUwsT0FBUDtBQUFpQ0csZUFBUyx1QkFBZ0JGLFVBQWhCO0FBQTFDO0FBRGlFLEdBQXRDO0FBQUEsQ0FBbEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3SEFLQ0csc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUxiLENBQWYsQyxDQVVBOztNQVZNUixTO0FBV04sSUFBTVMsa0JBQWtC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TSxDQUFUO0FBUUEsc0JBQ0UscUVBQUMseUVBQUQ7QUFDRSxTQUFLLEVBQUVqRCxLQURUO0FBRUUsa0JBQWMsRUFBRTJELGNBRmxCO0FBR0UsYUFBUyxZQUFLUSw2RUFBTCxjQUF5Q0EsNkVBQXpDLGVBQ1BULFNBQVMsR0FBRyxZQUFILEdBQWtCLEVBRHBCLGNBRUxGLFFBQVEsSUFBSUEsUUFGUCxDQUhYO0FBQUEsNEJBT0UscUVBQUMsa0JBQUQ7QUFBb0IsbUJBQWEsRUFBRXpELGFBQW5DO0FBQUEsNkJBQ0UscUVBQUMsb0JBQUQ7QUFBc0IsV0FBRyxFQUFFK0QsWUFBM0I7QUFBQSwrQkFDRSxxRUFBQyw0QkFBRDtBQUE4QixvQkFBVSxFQUFFekQsVUFBMUM7QUFBc0QsYUFBRyxFQUFFMkQsU0FBM0Q7QUFBQSxpQ0FDRSxxRUFBQyxpQkFBRDtBQUFBLG1DQUNFLHFFQUFDLGNBQUQ7QUFDRSx1QkFBUyxZQUFLRyw2RUFBTCxzQkFEWDtBQUFBLHdCQUdHVjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFvQkUscUVBQUMsa0JBQUQ7QUFBb0IsOEJBQXdCLEVBQUU3Qyx3QkFBOUM7QUFBQSw2QkFDRSxxRUFBQyxTQUFEO0FBQVcsdUJBQWUsRUFBRVIsZUFBNUI7QUFBNkMsa0JBQVUsRUFBRXlEO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBeERNLEMsQ0EwRFA7QUFDQTs7R0EzRGFOLHVCOztNQUFBQSx1QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24vSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9CYXNlXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IEJvdHRvbU5hdk1hcmdpbiwgQm90dG9tTmF2U2l6ZSB9IGZyb20gXCIuLi8uLi9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSxcbiAgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZSxcbn0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5jb25zdCBUYWxsT3V0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IGR5bmFtaWNIZWlnaHQgfSkgPT4gKHtcbiAgc3R5bGU6IHsgaGVpZ2h0OiBgJHtkeW5hbWljSGVpZ2h0fXB4YCB9LFxufSkpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuXG5cbmNvbnN0IFNjcm9sbGJhciA9IHN0eWxlZC5zcGFuLmF0dHJzKCh7IGR5bmFtaWNCYXJXaWR0aCwgdHJhbnNsYXRlWCB9KSA9PiAoe1xuICBzdHlsZTogeyB3aWR0aDogYCR7ZHluYW1pY0JhcldpZHRofXB4YCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICAtLXNjcm9sbEJhckhlaWdodDogNHB4O1xuICBoZWlnaHQ6IHZhcigtLXNjcm9sbEJhckhlaWdodCk7XG4gIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyU2Vjb25kYXJ5fTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuLy8oMTAwMCAtIDQwKSAvIDEwMDAgLT4gOTYwIC8gMTAwMFxuY29uc3QgU2Nyb2xsYmFyQ29udGFpbmVyID0gc3R5bGVkLnNwYW4uYXR0cnMoKHsgZHluYW1pY0JhckNvbnRhaW5lcldpZHRoIH0pID0+ICh7XG4gIHN0eWxlOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgke2R5bmFtaWNCYXJDb250YWluZXJXaWR0aCB9KWAgfSxcbn0pKWBcbiAvLyB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgbGVmdDogJHtSb290LkdyaWQuR3V0dGVyLkxlZnR9O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvdHRvbTogY2FsYygke0JvdHRvbU5hdk1hcmdpbiB9ICsgJHtCb3R0b21OYXZTaXplfSk7XG5gO1xuXG5jb25zdCBTdGlja3lJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBIb3Jpem9udGFsU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IGNhbGNEeW5hbWljSGVpZ2h0ID0gKG9iamVjdFdpZHRoKSA9PiB7XG4gIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXR1cm4gb2JqZWN0V2lkdGggLSB2dyArIHZoIDsvLysgMTUwO1xufTtcblxuY29uc3QgY2FsY1dpZHRoUmF0aW8gPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgcmF0aW8gPSAob2JqZWN0V2lkdGggLyB2dyk7XG4gIHJldHVybiByYXRpbztcbn07XG5cbmNvbnN0IGNhbGNEeW5hbWljQmFyV2lkdGggPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgcmF0aW8gPSBjYWxjV2lkdGhSYXRpbyhvYmplY3RXaWR0aCk7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAvIHJhdGlvO1xufTtcblxuY29uc3QgaGFuZGxlRHluYW1pY0hlaWdodCA9IChyZWYsIHNldER5bmFtaWNIZWlnaHQpID0+IHtcbiAgY29uc3Qgb2JqZWN0V2lkdGggPSByZWYuY3VycmVudC5zY3JvbGxXaWR0aDtcbiAgY29uc3QgZHluYW1pY0hlaWdodCA9IGNhbGNEeW5hbWljSGVpZ2h0KG9iamVjdFdpZHRoKTtcbiAgc2V0RHluYW1pY0hlaWdodChkeW5hbWljSGVpZ2h0KTtcbn07XG5cbmNvbnN0IGhhbmRsZUR5bmFtaWNCYXJXaWR0aCA9IChyZWYsIHNldER5bmFtaWNCYXJXaWR0aCkgPT4ge1xuICBjb25zdCBvYmplY3RXaWR0aCA9IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoO1xuICBjb25zdCBkeW5hbWljQmFyV2lkdGggPSBjYWxjRHluYW1pY0JhcldpZHRoKG9iamVjdFdpZHRoKTtcbiAgc2V0RHluYW1pY0JhcldpZHRoKGR5bmFtaWNCYXJXaWR0aCk7XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljQmFyQ29udGFpbmVyV2lkdGggPSAocmVmLCBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgZ3V0dGVyU3BhY2UgPSBCYXNlLkdyaWQuR3V0dGVyLkxnLkxlZnQgKyBCYXNlLkdyaWQuR3V0dGVyLkxnLlJpZ2h0XG4gIGNvbnN0IGR5bmFtaWNCYXJXaWR0aCA9ICh2dyAtIGd1dHRlclNwYWNlKSAvIHZ3O1xuICBzZXREeW5hbWljQmFyQ29udGFpbmVyV2lkdGgoLjk1KTtcbn07XG5cbmNvbnN0IGFwcGx5U2Nyb2xsTGlzdGVuZXIgPSAocmVmLCBzZXRUcmFuc2xhdGVYLCBzZXRCYXJUcmFuc2xhdGVYKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBjb25zdCBvZmZzZXRUb3AgPSByZWYgJiYgcmVmLmN1cnJlbnQgPyAtcmVmLmN1cnJlbnQub2Zmc2V0VG9wIDogMDtcbiAgICBjb25zdCBiYXJPZmZzZXQgPSByZWYgJiYgcmVmLmN1cnJlbnQgPyAob2Zmc2V0VG9wICogLTEpIC8gKHJlZi5jdXJyZW50LmZpcnN0Q2hpbGQuY2xpZW50V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgOiAwO1xuICAgIHNldFRyYW5zbGF0ZVgob2Zmc2V0VG9wKTtcbiAgICBzZXRCYXJUcmFuc2xhdGVYKGJhck9mZnNldCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IEhvcml6b250YWxTY3JvbGxTZWN0aW9uID0gKHtcbiAgYWRkQ2xhc3MgPSBcIlwiLFxuICBjaGlsZHJlbixcbiAgaGFzVG9wYmFyID0gZmFsc2UsXG4gIGZvcmNlRnVsbFdpZHRoID0gZmFsc2UsXG4gIHN0eWxlID0ge30sXG59KSA9PiB7XG4gIGNvbnN0IFtkeW5hbWljSGVpZ2h0LCBzZXREeW5hbWljSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZHluYW1pY0JhcldpZHRoLCBzZXREeW5hbWljQmFyV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkeW5hbWljQmFyQ29udGFpbmVyV2lkdGgsIHNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RyYW5zbGF0ZVgsIHNldFRyYW5zbGF0ZVhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0cmFuc2xhdGVCYXJYLCBzZXRCYXJUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb2JqZWN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJXaWR0aCk7XG4gICAgaGFuZGxlRHluYW1pY0JhckNvbnRhaW5lcldpZHRoKG9iamVjdFJlZiwgc2V0RHluYW1pY0JhckNvbnRhaW5lcldpZHRoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgICBoYW5kbGVEeW5hbWljQmFyV2lkdGgob2JqZWN0UmVmLCBzZXREeW5hbWljQmFyV2lkdGgpO1xuICAgIGhhbmRsZUR5bmFtaWNCYXJDb250YWluZXJXaWR0aChvYmplY3RSZWYsIHNldER5bmFtaWNCYXJDb250YWluZXJXaWR0aCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlcik7XG4gICAgYXBwbHlTY3JvbGxMaXN0ZW5lcihjb250YWluZXJSZWYsIHNldFRyYW5zbGF0ZVgsIHNldEJhclRyYW5zbGF0ZVgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgZm9yY2VGdWxsV2lkdGg9e2ZvcmNlRnVsbFdpZHRofVxuICAgICAgY2xhc3NOYW1lPXtgJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0gJHtIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0tLSR7XG4gICAgICAgIGhhc1RvcGJhciA/IFwiaGFzLXRvcGJhclwiIDogXCJcIlxuICAgICAgfSAke2FkZENsYXNzICYmIGFkZENsYXNzfWB9XG4gICAgPlxuICAgICAgPFRhbGxPdXRlckNvbnRhaW5lciBkeW5hbWljSGVpZ2h0PXtkeW5hbWljSGVpZ2h0fT5cbiAgICAgICAgPFN0aWNreUlubmVyQ29udGFpbmVyIHJlZj17Y29udGFpbmVyUmVmfT5cbiAgICAgICAgICA8SG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciB0cmFuc2xhdGVYPXt0cmFuc2xhdGVYfSByZWY9e29iamVjdFJlZn0+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNlY3Rpb24+XG4gICAgICAgICAgICAgIDxDb250ZW50V3JhcHBlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7SG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50LXdyYXBwZXJgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsU2VjdGlvbj5cbiAgICAgICAgICA8L0hvcml6b250YWxUcmFuc2xhdGVDb250YWluZXI+XG4gICAgICAgIDwvU3RpY2t5SW5uZXJDb250YWluZXI+XG4gICAgICA8L1RhbGxPdXRlckNvbnRhaW5lcj5cbiAgICAgIDxTY3JvbGxiYXJDb250YWluZXIgZHluYW1pY0JhckNvbnRhaW5lcldpZHRoPXtkeW5hbWljQmFyQ29udGFpbmVyV2lkdGh9PlxuICAgICAgICA8U2Nyb2xsYmFyIGR5bmFtaWNCYXJXaWR0aD17ZHluYW1pY0JhcldpZHRofSB0cmFuc2xhdGVYPXt0cmFuc2xhdGVCYXJYfT48L1Njcm9sbGJhcj5cbiAgICAgIDwvU2Nyb2xsYmFyQ29udGFpbmVyPlxuICAgIDwvSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25TdHlsZT5cbiAgKTtcbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})