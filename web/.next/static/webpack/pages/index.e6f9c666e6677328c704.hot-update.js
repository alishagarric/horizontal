webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/VolumesNavigation/VolumesNavigation.tsx":
/*!*********************************************************************!*\
  !*** ./components/Sections/VolumesNavigation/VolumesNavigation.tsx ***!
  \*********************************************************************/
/*! exports provided: VolumesNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VolumesNavigation\", function() { return VolumesNavigation; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n/* harmony import */ var _ThemeChanger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ThemeChanger */ \"./components/ThemeChanger/index.tsx\");\n/* harmony import */ var _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_svg/Brandmark/Brandmark */ \"./components/_svg/Brandmark/Brandmark.tsx\");\n/* harmony import */ var _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_svg/Logotype/Logotype */ \"./components/_svg/Logotype/Logotype.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/VolumesNavigation/styles.scss.tsx\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/components/Sections/VolumesNavigation/VolumesNavigation.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n// Core\n\n\n\n\n\n // Styles\n\n // Begin Component\n// __________________________________________________________________________________________\n\n/**\n *\n * @name VolumesNavigation\n * @author Peter Laxalt and Alisha Garric\n * @requires /studio/sections/VolumesNavigation\n *\n */\nvar VolumesNavigation = /*#__PURE__*/function (_React$PureComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(VolumesNavigation, _React$PureComponent);\n\n  var _super = _createSuper(VolumesNavigation);\n\n  function VolumesNavigation(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, VolumesNavigation);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      marquee: false\n    };\n    _this.updateMarquee = _this.updateMarquee.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(VolumesNavigation, [{\n    key: \"updateMarquee\",\n    value: function updateMarquee(text) {\n      console.log(\"here\");\n      this.setState({\n        marquee: text ? text : false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var children = this.props.children;\n      var marquee = this.state.marquee;\n      /*const volumesRef = useRef<HTMLDivElement>();\n       useEffect(() => {\n        volumesRef.current.scrollTo(10000, 0);\n      });*/\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationStyle\"], {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"]),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__inner\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"__visually-hidden\",\n            children: \"Volume Industries\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__branding\"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__branding__brandmark\"),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_11__[\"Brandmark\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 15\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__branding__logotype-marquee\"),\n              children: [marquee == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_12__[\"Logotype\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 37\n              }, this), marquee && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: \"Marquee\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 28\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            ref:\n            /*volumesRef*/\n            \"\",\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes\"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings--outline\"),\n              onMouseOver: function onMouseOver() {\n                return _this2.updateMarquee(\"hello\");\n              },\n              children: _constants_site_Settings__WEBPACK_IMPORTED_MODULE_9__[\"SiteVolumes\"].map(function (volume, idx) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings__item\"),\n                  onMouseOver: function onMouseOver() {\n                    return _this2.updateMarquee(volume.name);\n                  },\n                  onMouseLeave: function onMouseLeave() {\n                    return _this2.updateMarquee();\n                  },\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ThemeChanger__WEBPACK_IMPORTED_MODULE_10__[\"ThemeChanger\"], {\n                    theme: volume.theme,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                      href: volume.link,\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings__item__el\"),\n                        children: volume.number\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 111,\n                        columnNumber: 25\n                      }, _this2)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 110,\n                      columnNumber: 23\n                    }, _this2)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 109,\n                    columnNumber: 21\n                  }, _this2)\n                }, idx, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 103,\n                  columnNumber: 19\n                }, _this2);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings--solid\"),\n              children: _constants_site_Settings__WEBPACK_IMPORTED_MODULE_9__[\"SiteVolumes\"].map(function (volume, idx) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings__item \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings__item--\").concat(idx + 1 === _constants_site_Settings__WEBPACK_IMPORTED_MODULE_9__[\"SiteVolumes\"].length ? \"is-active\" : \"is-inactive\", \" \"),\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ThemeChanger__WEBPACK_IMPORTED_MODULE_10__[\"ThemeChanger\"], {\n                    theme: volume.theme,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                      href: volume.link,\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__volumes__listings__item__el\"),\n                        children: volume.number\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 138,\n                        columnNumber: 25\n                      }, _this2)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 137,\n                      columnNumber: 23\n                    }, _this2)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 136,\n                    columnNumber: 21\n                  }, _this2)\n                }, idx, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 130,\n                  columnNumber: 19\n                }, _this2);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_13__[\"VolumesNavigationClassName\"], \"__bottom-text\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Industries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 154,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return VolumesNavigation;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);\n; // End Component\n// __________________________________________________________________________________________\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Wb2x1bWVzTmF2aWdhdGlvbi9Wb2x1bWVzTmF2aWdhdGlvbi50c3g/MjE3MSJdLCJuYW1lcyI6WyJWb2x1bWVzTmF2aWdhdGlvbiIsInByb3BzIiwic3RhdGUiLCJtYXJxdWVlIiwidXBkYXRlTWFycXVlZSIsImJpbmQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2hpbGRyZW4iLCJWb2x1bWVzTmF2aWdhdGlvbkNsYXNzTmFtZSIsIlNpdGVWb2x1bWVzIiwibWFwIiwidm9sdW1lIiwiaWR4IiwibmFtZSIsInRoZW1lIiwibGluayIsIm51bWJlciIsImxlbmd0aCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Q0FHQTs7Q0FNQTtBQUNBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWI7QUFBQTs7QUFBQTs7QUFJRSw2QkFBWUMsS0FBWixFQUE0QztBQUFBOztBQUFBOztBQUMxQyw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBQUc7QUFEQyxLQUFiO0FBSUEsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQix5R0FBckI7QUFQMEM7QUFRM0M7O0FBWkg7QUFBQTtBQUFBLGtDQWNnQkMsSUFkaEIsRUFjK0I7QUFDM0JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDWk4sZUFBTyxFQUFFRyxJQUFJLEdBQUdBLElBQUgsR0FBVTtBQURYLE9BQWQ7QUFHRDtBQW5CSDtBQUFBO0FBQUEsNkJBd0JXO0FBQUE7O0FBQUEsVUFDREksUUFEQyxHQUNZLEtBQUtULEtBRGpCLENBQ0RTLFFBREM7QUFB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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixtQkFDT0osR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGO0FBa0JELGVBbkJBO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpCRixlQStFRTtBQUFLLHFCQUFTLFlBQUtKLHdFQUFMLGtCQUFkO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUF5RkQ7QUExSEg7O0FBQUE7QUFBQSxFQUF1Q1UsNENBQUssQ0FBQ0MsYUFBN0M7QUEySEMsQyxDQUVEO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1ZvbHVtZXNOYXZpZ2F0aW9uL1ZvbHVtZXNOYXZpZ2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTE1OVFNfU2l0ZVZvbHVtZSxcbiAgU2l0ZVZvbHVtZXMsXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgVGhlbWVDaGFuZ2VyIH0gZnJvbSBcIi4uLy4uL1RoZW1lQ2hhbmdlclwiO1xuaW1wb3J0IHsgQnJhbmRtYXJrIH0gZnJvbSBcIi4uLy4uL19zdmcvQnJhbmRtYXJrL0JyYW5kbWFya1wiO1xuaW1wb3J0IHsgTG9nb3R5cGUgfSBmcm9tIFwiLi4vLi4vX3N2Zy9Mb2dvdHlwZS9Mb2dvdHlwZVwiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIFZvbHVtZXNOYXZpZ2F0aW9uQ2xhc3NOYW1lLFxuICBWb2x1bWVzTmF2aWdhdGlvblN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMTU5UU19Wb2x1bWVzTmF2aWdhdGlvbiA9IHtcbiAvLyBoYXNTaWRlYmFyPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIExNTlRTX1ZvbHVtZXNOYXZpZ2F0aW9uU3RhdGUgPSB7XG4gIG1hcnF1ZWU6IHN0cmluZyB8IGZhbHNlO1xufVxuXG4vKipcbiAqXG4gKiBAbmFtZSBWb2x1bWVzTmF2aWdhdGlvblxuICogQGF1dGhvciBQZXRlciBMYXhhbHQgYW5kIEFsaXNoYSBHYXJyaWNcbiAqIEByZXF1aXJlcyAvc3R1ZGlvL3NlY3Rpb25zL1ZvbHVtZXNOYXZpZ2F0aW9uXG4gKlxuICovXG5cbmV4cG9ydCBjbGFzcyBWb2x1bWVzTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIExNTlRTX1ZvbHVtZXNOYXZpZ2F0aW9uLFxuICBMTU5UU19Wb2x1bWVzTmF2aWdhdGlvblN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IExNTlRTX1ZvbHVtZXNOYXZpZ2F0aW9uKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hcnF1ZWUgOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVNYXJxdWVlID0gdGhpcy51cGRhdGVNYXJxdWVlLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVNYXJxdWVlKHRleHQ/OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJxdWVlOiB0ZXh0ID8gdGV4dCA6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB7IG1hcnF1ZWUgIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8qY29uc3Qgdm9sdW1lc1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB2b2x1bWVzUmVmLmN1cnJlbnQuc2Nyb2xsVG8oMTAwMDAsIDApO1xuICAgIH0pOyovXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZvbHVtZXNOYXZpZ2F0aW9uU3R5bGVcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtWb2x1bWVzTmF2aWdhdGlvbkNsYXNzTmFtZX1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Vm9sdW1lc05hdmlnYXRpb25DbGFzc05hbWV9X19pbm5lcmB9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJfX3Zpc3VhbGx5LWhpZGRlblwiPlZvbHVtZSBJbmR1c3RyaWVzPC9oMT5cbiAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgey8qIEJyYW5kaW5nICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtWb2x1bWVzTmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JyYW5kaW5nYH0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtWb2x1bWVzTmF2aWdhdGlvbkNsYXNzTmFtZX1fX2JyYW5kaW5nX19icmFuZG1hcmtgfT5cbiAgICAgICAgICAgICAgPEJyYW5kbWFyayAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Vm9sdW1lc05hdmlnYXRpb25DbGFzc05hbWV9X19icmFuZGluZ19fbG9nb3R5cGUtbWFycXVlZWB9PlxuICAgICAgICAgICAgICB7IG1hcnF1ZWUgPT0gZmFsc2UgJiYgPExvZ290eXBlIC8+fVxuICAgICAgICAgICAgICB7IG1hcnF1ZWUgJiYgPHA+TWFycXVlZTwvcD59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICB7LyogVm9sdW1lIExpc3RpbmdzICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17Lyp2b2x1bWVzUmVmKi9cIlwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtWb2x1bWVzTmF2aWdhdGlvbkNsYXNzTmFtZX1fX3ZvbHVtZXNgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgICAgey8qIE91dGxpbmVkIHRleHQgKHRoZSBmb250IGhhcyBhIHdlaXJkIGFwZXgpICovfVxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Vm9sdW1lc05hdmlnYXRpb25DbGFzc05hbWV9X192b2x1bWVzX19saXN0aW5ncyAke1ZvbHVtZXNOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fdm9sdW1lc19fbGlzdGluZ3MtLW91dGxpbmVgfVxuICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy51cGRhdGVNYXJxdWVlKFwiaGVsbG9cIil9IFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7U2l0ZVZvbHVtZXMubWFwKCh2b2x1bWU6IExNTlRTX1NpdGVWb2x1bWUsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtWb2x1bWVzTmF2aWdhdGlvbkNsYXNzTmFtZX1fX3ZvbHVtZXNfX2xpc3RpbmdzX19pdGVtYH1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHRoaXMudXBkYXRlTWFycXVlZSh2b2x1bWUubmFtZSl9IFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMudXBkYXRlTWFycXVlZSgpfSBcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRoZW1lQ2hhbmdlciB0aGVtZT17dm9sdW1lLnRoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2b2x1bWUubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1ZvbHVtZXNOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fdm9sdW1lc19fbGlzdGluZ3NfX2l0ZW1fX2VsYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZvbHVtZS5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L1RoZW1lQ2hhbmdlcj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgIHsvKiBTb2xpZCBUZXh0ICovfVxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Vm9sdW1lc05hdmlnYXRpb25DbGFzc05hbWV9X192b2x1bWVzX19saXN0aW5ncyAke1ZvbHVtZXNOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fdm9sdW1lc19fbGlzdGluZ3MtLXNvbGlkYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1NpdGVWb2x1bWVzLm1hcCgodm9sdW1lOiBMTU5UU19TaXRlVm9sdW1lLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Vm9sdW1lc05hdmlnYXRpb25DbGFzc05hbWV9X192b2x1bWVzX19saXN0aW5nc19faXRlbSAke1ZvbHVtZXNOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fdm9sdW1lc19fbGlzdGluZ3NfX2l0ZW0tLSR7XG4gICAgICAgICAgICAgICAgICAgICAgaWR4ICsgMSA9PT0gU2l0ZVZvbHVtZXMubGVuZ3RoID8gXCJpcy1hY3RpdmVcIiA6IFwiaXMtaW5hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUaGVtZUNoYW5nZXIgdGhlbWU9e3ZvbHVtZS50aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dm9sdW1lLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtWb2x1bWVzTmF2aWdhdGlvbkNsYXNzTmFtZX1fX3ZvbHVtZXNfX2xpc3RpbmdzX19pdGVtX19lbGB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2b2x1bWUubnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9UaGVtZUNoYW5nZXI+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICB7LyogQm90dG9tIFRleHQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1ZvbHVtZXNOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fYm90dG9tLXRleHRgfT5cbiAgICAgICAgICAgIDxoMj5JbmR1c3RyaWVzPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1ZvbHVtZXNOYXZpZ2F0aW9uU3R5bGU+XG4gICAgKTtcbiAgfVxufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/VolumesNavigation/VolumesNavigation.tsx\n");

/***/ })

})