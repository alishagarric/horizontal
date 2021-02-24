webpackHotUpdate_N_E("pages/volume-03",{

/***/ "./constants/styles/Font.tsx":
/*!***********************************!*\
  !*** ./constants/styles/Font.tsx ***!
  \***********************************/
/*! exports provided: Font, Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Font\", function() { return Font; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Typography\", function() { return Typography; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ \"./constants/styles/Base.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n  /* Base Text Styles */\\n  body {\\n    line-height: 1;\\n    font-size: 1rem;\\n    font-family: \", \";\\n    -webkit-text-size-adjust: 100%;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n    text-rendering: geometricPrecision;\\n    -webkit-font-feature-settings: \\\"pnum\\\";\\n    font-feature-settings: \\\"pnum\\\";\\n    font-variant-numeric: proportional-nums;\\n  }\\n\\n  @font-face {\\n    font-family: \\\"dharma\\\";\\n    src: url(\\\"/fonts/dharma/dharma_regular.eot\\\"); /* IE9*/\\n    src: url(\\\"/fonts/dharma/dharma_regular.eot?#iefix\\\") format(\\\"embedded-opentype\\\"), /* IE6-IE8 */\\n    url(\\\"/fonts/dharma/dharma_regular.woff2\\\") format(\\\"woff2\\\"), /* chrome firefox */\\n    url(\\\"/fonts/dharma/dharma_regular.woff\\\") format(\\\"woff\\\"), /* chrome firefox */\\n    url(\\\"/fonts/dharma/dharma_regular.ttf\\\") format(\\\"truetype\\\"), /* chrome firefox opera Safari, Android, iOS 4.2+*/\\n    url(\\\"/fonts/dharma/dharma_regular.svg#DharmaGothicCW01-Regular\\\") format(\\\"svg\\\"); /* iOS 4.1- */\\n  }\\n\\n  /* Paragraph Styles */\\n  p {\\n    font-family: \", \";\\n    font-size: 1rem;\\n    font-weight: 500;\\n    line-height: 1.4;\\n    letter-spacing: -0.2px;\\n    padding-bottom: calc(var(--Size) / 3.5);\\n\\n    &.lead {\\n      font-size: 1.4rem;\\n      @media (max-width: \", \") {\\n        font-size: 1.2rem;\\n      }\\n    }\\n  }\\n\\n  .p-sm {\\n    font-family: \", \";\\n    line-height: 1.2;\\n    font-size: 0.9rem;\\n    letter-spacing: -0.2px;\\n  }\\n\\n  .p-lg {\\n    font-family: \", \";\\n    line-height: 1.4;\\n    font-size: 1.2rem;\\n    letter-spacing: -0.2px;\\n  }\\n\\n  /* Header Styles */\\n  h1, h2, h3, h4, h5, h6, .headline {\\n    font-family: \", \";\\n    line-height: 1.1;\\n    padding: 0;\\n    margin: 0;\\n    letter-spacing: -0.2px;\\n  }\\n\\n  h1, .h1 {\\n    font-size: 4rem;\\n    @media (max-width: \", \") {\\n      font-size: 2.4rem;\\n    }\\n  }\\n  h2, .h2 {\\n    font-size: 3rem;\\n    @media (max-width: \", \") {\\n      font-size: 2.1rem;\\n    }\\n  }\\n  h3, .h3 {\\n    font-size: 2.5rem;\\n    @media (max-width: \", \") {\\n      font-size: 2rem;\\n    }\\n  }\\n  h4, .h4 {\\n    font-size: 2rem;\\n    @media (max-width: \", \") {\\n      font-size: 1.8rem;\\n    }\\n  }\\n  h5, .h5 {\\n    font-size: 1.65rem;\\n    @media (max-width: \", \") {\\n      font-size: 1.5rem;\\n    }\\n  }\\n  h6, .h6 {\\n    font-size: 1.5rem;\\n    @media (max-width: \", \") {\\n      font-size: 1.1rem;\\n    }\\n  }\\n\\n  .headline {\\n    font-size: 7.25rem;\\n    @media (max-width: \", \") {\\n      font-size: 4rem;\\n    }\\n    @media (max-width: \", \") {\\n      font-size: 3.5rem;\\n    }\\n  }\\n\\n  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size) / 3.5); }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/* eslint-disable */\n// Font.js:\n// This is the sitewide font reference.\n\n\nvar Font = {\n  Body: \"'Neuefile Grotesk', -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\"\",\n  Code: \"\\\"Dank Mono\\\", \\\"SFMono-Regular\\\", Consolas, \\\"Liberation Mono\\\", Menlo, Courier, monospace\",\n  Header: \"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\"\",\n  // Header: `\"Cera Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n  // Body: `\"Brown\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n  // Code: `\"SFMono-Regular\",Consolas,\"Liberation Mono\",Menlo,Courier,monospace`,\n  Size: {\n    Sm: \"1rem\",\n    Md: \"1rem\",\n    Lg: \"1rem\",\n    ViewWidth: {\n      Sm: \"6.8vw\",\n      Md: \"5.2vw\",\n      Lg: \"1.2vw\"\n    },\n    ViewHeight: {\n      Sm: \"6.8vh\",\n      Md: \"5.2vh\",\n      Lg: \"2vh\"\n    }\n  },\n  Icon: {\n    Size: {\n      Sm: \"8.5vw\",\n      Md: \"8.5vw\",\n      Lg: \"1.7vw\"\n    }\n  }\n}; // Global Type Styles\n\nvar Typography = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), Font.Body, Font.Body, _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", Font.Body, Font.Body, Font.Header, _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9Gb250LnRzeD83YjU3Il0sIm5hbWVzIjpbIkZvbnQiLCJCb2R5IiwiQ29kZSIsIkhlYWRlciIsIlNpemUiLCJTbSIsIk1kIiwiTGciLCJWaWV3V2lkdGgiLCJWaWV3SGVpZ2h0IiwiSWNvbiIsIlR5cG9ncmFwaHkiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxNQUFJLDZLQURjO0FBRWxCQyxNQUFJLCtGQUZjO0FBR2xCQyxRQUFNLHlKQUhZO0FBSWxCO0FBQ0E7QUFDQTtBQUNBQyxNQUFJLEVBQUU7QUFDSkMsTUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBRSxFQUFFLE1BRkE7QUFHSkMsTUFBRSxFQUFFLE1BSEE7QUFJSkMsYUFBUyxFQUFFO0FBQ1RILFFBQUUsRUFBRSxPQURLO0FBRVRDLFFBQUUsRUFBRSxPQUZLO0FBR1RDLFFBQUUsRUFBRTtBQUhLLEtBSlA7QUFTSkUsY0FBVSxFQUFFO0FBQ1ZKLFFBQUUsRUFBRSxPQURNO0FBRVZDLFFBQUUsRUFBRSxPQUZNO0FBR1ZDLFFBQUUsRUFBRTtBQUhNO0FBVFIsR0FQWTtBQXNCbEJHLE1BQUksRUFBRTtBQUNKTixRQUFJLEVBQUU7QUFDSkMsUUFBRSxFQUFFLE9BREE7QUFFSkMsUUFBRSxFQUFFLE9BRkE7QUFHSkMsUUFBRSxFQUFFO0FBSEE7QUFERjtBQXRCWSxDQUFiLEMsQ0ErQlA7O0FBQ08sSUFBTUksVUFBVSxHQUFHQywyRUFBSCxvQkFNSlosSUFBSSxDQUFDQyxJQU5ELEVBNEJKRCxJQUFJLENBQUNDLElBNUJELEVBcUNJWSwwQ0FBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJULEVBQWpCLEdBQXNCLElBckMxQixFQTRDSk4sSUFBSSxDQUFDQyxJQTVDRCxFQW1ESkQsSUFBSSxDQUFDQyxJQW5ERCxFQTJESkQsSUFBSSxDQUFDRyxNQTNERCxFQW9FRVUsMENBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCVCxFQUFqQixHQUFzQixJQXBFeEIsRUEwRUVPLDBDQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlQsRUFBakIsR0FBc0IsSUExRXhCLEVBZ0ZFTywwQ0FBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJULEVBQWpCLEdBQXNCLElBaEZ4QixFQXNGRU8sMENBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCVCxFQUFqQixHQUFzQixJQXRGeEIsRUE0RkVPLDBDQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlQsRUFBakIsR0FBc0IsSUE1RnhCLEVBa0dFTywwQ0FBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJULEVBQWpCLEdBQXNCLElBbEd4QixFQXlHRU8sMENBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCVCxFQUFqQixHQUFzQixJQXpHeEIsRUE0R0VPLDBDQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlYsRUFBakIsR0FBc0IsSUE1R3hCLENBQWhCIiwiZmlsZSI6Ii4vY29uc3RhbnRzL3N0eWxlcy9Gb250LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIEZvbnQuanM6XG4vLyBUaGlzIGlzIHRoZSBzaXRld2lkZSBmb250IHJlZmVyZW5jZS5cblxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBGb250ID0ge1xuICBCb2R5OiBgJ05ldWVmaWxlIEdyb3Rlc2snLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcImAsXG4gIENvZGU6IGBcIkRhbmsgTW9ub1wiLCBcIlNGTW9uby1SZWd1bGFyXCIsIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlYCxcbiAgSGVhZGVyOiBgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCJgLFxuICAvLyBIZWFkZXI6IGBcIkNlcmEgUHJvXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiYCxcbiAgLy8gQm9keTogYFwiQnJvd25cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCJgLFxuICAvLyBDb2RlOiBgXCJTRk1vbm8tUmVndWxhclwiLENvbnNvbGFzLFwiTGliZXJhdGlvbiBNb25vXCIsTWVubG8sQ291cmllcixtb25vc3BhY2VgLFxuICBTaXplOiB7XG4gICAgU206IFwiMXJlbVwiLFxuICAgIE1kOiBcIjFyZW1cIixcbiAgICBMZzogXCIxcmVtXCIsXG4gICAgVmlld1dpZHRoOiB7XG4gICAgICBTbTogXCI2Ljh2d1wiLFxuICAgICAgTWQ6IFwiNS4ydndcIixcbiAgICAgIExnOiBcIjEuMnZ3XCIsXG4gICAgfSxcbiAgICBWaWV3SGVpZ2h0OiB7XG4gICAgICBTbTogXCI2Ljh2aFwiLFxuICAgICAgTWQ6IFwiNS4ydmhcIixcbiAgICAgIExnOiBcIjJ2aFwiLFxuICAgIH0sXG4gIH0sXG4gIEljb246IHtcbiAgICBTaXplOiB7XG4gICAgICBTbTogXCI4LjV2d1wiLFxuICAgICAgTWQ6IFwiOC41dndcIixcbiAgICAgIExnOiBcIjEuN3Z3XCIsXG4gICAgfSxcbiAgfSxcbn07XG5cbi8vIEdsb2JhbCBUeXBlIFN0eWxlc1xuZXhwb3J0IGNvbnN0IFR5cG9ncmFwaHkgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAvKiBCYXNlIFRleHQgU3R5bGVzICovXG4gIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJHtGb250LkJvZHl9O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtcmVuZGVyaW5nOiBnZW9tZXRyaWNQcmVjaXNpb247XG4gICAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6IFwicG51bVwiO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJwbnVtXCI7XG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IHByb3BvcnRpb25hbC1udW1zO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiZGhhcm1hXCI7XG4gICAgc3JjOiB1cmwoXCIvZm9udHMvZGhhcm1hL2RoYXJtYV9yZWd1bGFyLmVvdFwiKTsgLyogSUU5Ki9cbiAgICBzcmM6IHVybChcIi9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgLyogSUU2LUlFOCAqL1xuICAgIHVybChcIi9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIC8qIGNocm9tZSBmaXJlZm94ICovXG4gICAgdXJsKFwiL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIC8qIGNocm9tZSBmaXJlZm94ICovXG4gICAgdXJsKFwiL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIC8qIGNocm9tZSBmaXJlZm94IG9wZXJhIFNhZmFyaSwgQW5kcm9pZCwgaU9TIDQuMisqL1xuICAgIHVybChcIi9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIuc3ZnI0RoYXJtYUdvdGhpY0NXMDEtUmVndWxhclwiKSBmb3JtYXQoXCJzdmdcIik7IC8qIGlPUyA0LjEtICovXG4gIH1cblxuICAvKiBQYXJhZ3JhcGggU3R5bGVzICovXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAke0ZvbnQuQm9keX07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLVNpemUpIC8gMy41KTtcblxuICAgICYubGVhZCB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wLXNtIHtcbiAgICBmb250LWZhbWlseTogJHtGb250LkJvZHl9O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgfVxuXG4gIC5wLWxnIHtcbiAgICBmb250LWZhbWlseTogJHtGb250LkJvZHl9O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgfVxuXG4gIC8qIEhlYWRlciBTdHlsZXMgKi9cbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLmhlYWRsaW5lIHtcbiAgICBmb250LWZhbWlseTogJHtGb250LkhlYWRlcn07XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICB9XG5cbiAgaDEsIC5oMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICB9XG4gIH1cbiAgaDIsIC5oMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDIuMXJlbTtcbiAgICB9XG4gIH1cbiAgaDMsIC5oMyB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbiAgaDQsIC5oNCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG4gIH1cbiAgaDUsIC5oNSB7XG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH1cbiAgaDYsIC5oNiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiA3LjI1cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguU20gKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG4gIH1cblxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCAuaGVhZGluZy1wYWRkaW5nIHsgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tU2l6ZSkgLyAzLjUpOyB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/styles/Font.tsx\n");

/***/ })

})