webpackHotUpdate_N_E("pages/_app",{

/***/ "./constants/styles/Font.tsx":
/*!***********************************!*\
  !*** ./constants/styles/Font.tsx ***!
  \***********************************/
/*! exports provided: Font, Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Font\", function() { return Font; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Typography\", function() { return Typography; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ \"./constants/styles/Base.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n  /* Base Text Styles */\\n  body {\\n    line-height: 1;\\n    font-size: 1rem;\\n    font-family: \", \";\\n    -webkit-text-size-adjust: 100%;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n    text-rendering: geometricPrecision;\\n    -webkit-font-feature-settings: \\\"pnum\\\";\\n    font-feature-settings: \\\"pnum\\\";\\n    font-variant-numeric: proportional-nums;\\n  }\\n\\n  @font-face {\\n    font-family: \\\"dharma\\\";\\n    src: url(\\\"/fonts/dharma/dharma_regular.eot\\\"); /* IE9*/\\n    src: url(\\\"/fonts/dharma/dharma_regular.eot?#iefix\\\") format(\\\"embedded-opentype\\\"), /* IE6-IE8 */\\n    url(\\\"/fonts/dharma/dharma_regular.woff2\\\") format(\\\"woff2\\\"), /* chrome firefox */\\n    url(\\\"/fonts/dharma/dharma_regular.woff\\\") format(\\\"woff\\\"), /* chrome firefox */\\n    url(\\\"/fonts/dharma/dharma_regular.ttf\\\") format(\\\"truetype\\\"), /* chrome firefox opera Safari, Android, iOS 4.2+*/\\n    url(\\\"/fonts/dharma/dharma_regular.svg#DharmaGothicCW01-Regular\\\") format(\\\"svg\\\"); /* iOS 4.1- */\\n  }\\n\\n  /* Paragraph Styles */\\n  p {\\n    font-family: \", \";\\n    font-size: 1rem;\\n    font-weight: 500;\\n    line-height: 1.4;\\n    letter-spacing: -0.2px;\\n    padding-bottom: calc(var(--Size) / 3.5);\\n\\n    &.lead {\\n      font-size: 1.4rem;\\n      @media (max-width: \", \") {\\n        font-size: 1.2rem;\\n      }\\n    }\\n  }\\n\\n  .p-sm {\\n    font-family: \", \";\\n    line-height: 1.2;\\n    font-size: 0.9rem;\\n    letter-spacing: -0.2px;\\n  }\\n\\n  .p-lg {\\n    font-family: \", \";\\n    line-height: 1.4;\\n    font-size: 1.2rem;\\n    letter-spacing: -0.2px;\\n  }\\n\\n  /* Header Styles */\\n  h1, h2, h3, h4, h5, h6, .headline {\\n    font-family: \", \";\\n    line-height: 1.1;\\n    padding: 0;\\n    margin: 0;\\n    letter-spacing: -0.2px;\\n  }\\n\\n  h1, .h1 {\\n    font-size: 4rem;\\n    @media (max-width: \", \") {\\n      font-size: 2rem;\\n    }\\n  }\\n  h2, .h2 {\\n    font-size: 3rem;\\n    @media (max-width: \", \") {\\n      font-size: 2rem;\\n    }\\n  }\\n  h3, .h3 {\\n    font-size: 2.5rem;\\n    @media (max-width: \", \") {\\n      font-size: 2rem;\\n    }\\n  }\\n  h4, .h4 {\\n    font-size: 2rem;\\n  }\\n  h5, .h5 {\\n    font-size: 1.75rem;\\n    @media (max-width: \", \") {\\n      font-size: 1rem;\\n    }\\n  }\\n  h6, .h6 {\\n    font-size: 1.5rem;\\n    @media (max-width: \", \") {\\n      font-size: 1.1rem;\\n    }\\n  }\\n\\n  .headline {\\n    font-size: 7.25rem;\\n    @media (max-width: \", \") {\\n      font-size: 4rem;\\n    }\\n    @media (max-width: \", \") {\\n      font-size: 3.5rem;\\n    }\\n  }\\n\\n  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size) / 3.5); }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/* eslint-disable */\n// Font.js:\n// This is the sitewide font reference.\n\n\nvar Font = {\n  Body: \"'Neuefile Grotesk', -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\"\",\n  Code: \"\\\"Dank Mono\\\", \\\"SFMono-Regular\\\", Consolas, \\\"Liberation Mono\\\", Menlo, Courier, monospace\",\n  Header: \"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\"\",\n  // Header: `\"Cera Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n  // Body: `\"Brown\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n  // Code: `\"SFMono-Regular\",Consolas,\"Liberation Mono\",Menlo,Courier,monospace`,\n  Size: {\n    Sm: \"1rem\",\n    Md: \"1rem\",\n    Lg: \"1rem\",\n    ViewWidth: {\n      Sm: \"6.8vw\",\n      Md: \"5.2vw\",\n      Lg: \"1.2vw\"\n    },\n    ViewHeight: {\n      Sm: \"6.8vh\",\n      Md: \"5.2vh\",\n      Lg: \"2vh\"\n    }\n  },\n  Icon: {\n    Size: {\n      Sm: \"8.5vw\",\n      Md: \"8.5vw\",\n      Lg: \"1.7vw\"\n    }\n  }\n}; // Global Type Styles\n\nvar Typography = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), Font.Body, Font.Body, _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", Font.Body, Font.Body, Font.Header, _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9Gb250LnRzeD83YjU3Il0sIm5hbWVzIjpbIkZvbnQiLCJCb2R5IiwiQ29kZSIsIkhlYWRlciIsIlNpemUiLCJTbSIsIk1kIiwiTGciLCJWaWV3V2lkdGgiLCJWaWV3SGVpZ2h0IiwiSWNvbiIsIlR5cG9ncmFwaHkiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxNQUFJLDZLQURjO0FBRWxCQyxNQUFJLCtGQUZjO0FBR2xCQyxRQUFNLHlKQUhZO0FBSWxCO0FBQ0E7QUFDQTtBQUNBQyxNQUFJLEVBQUU7QUFDSkMsTUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBRSxFQUFFLE1BRkE7QUFHSkMsTUFBRSxFQUFFLE1BSEE7QUFJSkMsYUFBUyxFQUFFO0FBQ1RILFFBQUUsRUFBRSxPQURLO0FBRVRDLFFBQUUsRUFBRSxPQUZLO0FBR1RDLFFBQUUsRUFBRTtBQUhLLEtBSlA7QUFTSkUsY0FBVSxFQUFFO0FBQ1ZKLFFBQUUsRUFBRSxPQURNO0FBRVZDLFFBQUUsRUFBRSxPQUZNO0FBR1ZDLFFBQUUsRUFBRTtBQUhNO0FBVFIsR0FQWTtBQXNCbEJHLE1BQUksRUFBRTtBQUNKTixRQUFJLEVBQUU7QUFDSkMsUUFBRSxFQUFFLE9BREE7QUFFSkMsUUFBRSxFQUFFLE9BRkE7QUFHSkMsUUFBRSxFQUFFO0FBSEE7QUFERjtBQXRCWSxDQUFiLEMsQ0ErQlA7O0FBQ08sSUFBTUksVUFBVSxHQUFHQywyRUFBSCxvQkFNSlosSUFBSSxDQUFDQyxJQU5ELEVBNEJKRCxJQUFJLENBQUNDLElBNUJELEVBcUNJWSwwQ0FBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJULEVBQWpCLEdBQXNCLElBckMxQixFQTRDSk4sSUFBSSxDQUFDQyxJQTVDRCxFQW1ESkQsSUFBSSxDQUFDQyxJQW5ERCxFQTJESkQsSUFBSSxDQUFDRyxNQTNERCxFQW9FRVUsMENBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCVCxFQUFqQixHQUFzQixJQXBFeEIsRUEwRUVPLDBDQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlQsRUFBakIsR0FBc0IsSUExRXhCLEVBZ0ZFTywwQ0FBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJULEVBQWpCLEdBQXNCLElBaEZ4QixFQXlGRU8sMENBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCVCxFQUFqQixHQUFzQixJQXpGeEIsRUErRkVPLDBDQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlQsRUFBakIsR0FBc0IsSUEvRnhCLEVBc0dFTywwQ0FBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJULEVBQWpCLEdBQXNCLElBdEd4QixFQXlHRU8sMENBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCVixFQUFqQixHQUFzQixJQXpHeEIsQ0FBaEIiLCJmaWxlIjoiLi9jb25zdGFudHMvc3R5bGVzL0ZvbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gRm9udC5qczpcbi8vIFRoaXMgaXMgdGhlIHNpdGV3aWRlIGZvbnQgcmVmZXJlbmNlLlxuXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL0Jhc2VcIjtcblxuZXhwb3J0IGNvbnN0IEZvbnQgPSB7XG4gIEJvZHk6IGAnTmV1ZWZpbGUgR3JvdGVzaycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiYCxcbiAgQ29kZTogYFwiRGFuayBNb25vXCIsIFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2VgLFxuICBIZWFkZXI6IGAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcImAsXG4gIC8vIEhlYWRlcjogYFwiQ2VyYSBQcm9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCJgLFxuICAvLyBCb2R5OiBgXCJCcm93blwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcImAsXG4gIC8vIENvZGU6IGBcIlNGTW9uby1SZWd1bGFyXCIsQ29uc29sYXMsXCJMaWJlcmF0aW9uIE1vbm9cIixNZW5sbyxDb3VyaWVyLG1vbm9zcGFjZWAsXG4gIFNpemU6IHtcbiAgICBTbTogXCIxcmVtXCIsXG4gICAgTWQ6IFwiMXJlbVwiLFxuICAgIExnOiBcIjFyZW1cIixcbiAgICBWaWV3V2lkdGg6IHtcbiAgICAgIFNtOiBcIjYuOHZ3XCIsXG4gICAgICBNZDogXCI1LjJ2d1wiLFxuICAgICAgTGc6IFwiMS4ydndcIixcbiAgICB9LFxuICAgIFZpZXdIZWlnaHQ6IHtcbiAgICAgIFNtOiBcIjYuOHZoXCIsXG4gICAgICBNZDogXCI1LjJ2aFwiLFxuICAgICAgTGc6IFwiMnZoXCIsXG4gICAgfSxcbiAgfSxcbiAgSWNvbjoge1xuICAgIFNpemU6IHtcbiAgICAgIFNtOiBcIjguNXZ3XCIsXG4gICAgICBNZDogXCI4LjV2d1wiLFxuICAgICAgTGc6IFwiMS43dndcIixcbiAgICB9LFxuICB9LFxufTtcblxuLy8gR2xvYmFsIFR5cGUgU3R5bGVzXG5leHBvcnQgY29uc3QgVHlwb2dyYXBoeSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4gIC8qIEJhc2UgVGV4dCBTdHlsZXMgKi9cbiAgYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAke0ZvbnQuQm9keX07XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1yZW5kZXJpbmc6IGdlb21ldHJpY1ByZWNpc2lvbjtcbiAgICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJwbnVtXCI7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInBudW1cIjtcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogcHJvcG9ydGlvbmFsLW51bXM7XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJkaGFybWFcIjtcbiAgICBzcmM6IHVybChcIi9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIuZW90XCIpOyAvKiBJRTkqL1xuICAgIHNyYzogdXJsKFwiL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCAvKiBJRTYtSUU4ICovXG4gICAgdXJsKFwiL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgLyogY2hyb21lIGZpcmVmb3ggKi9cbiAgICB1cmwoXCIvZm9udHMvZGhhcm1hL2RoYXJtYV9yZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgLyogY2hyb21lIGZpcmVmb3ggKi9cbiAgICB1cmwoXCIvZm9udHMvZGhhcm1hL2RoYXJtYV9yZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgLyogY2hyb21lIGZpcmVmb3ggb3BlcmEgU2FmYXJpLCBBbmRyb2lkLCBpT1MgNC4yKyovXG4gICAgdXJsKFwiL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci5zdmcjRGhhcm1hR290aGljQ1cwMS1SZWd1bGFyXCIpIGZvcm1hdChcInN2Z1wiKTsgLyogaU9TIDQuMS0gKi9cbiAgfVxuXG4gIC8qIFBhcmFncmFwaCBTdHlsZXMgKi9cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICR7Rm9udC5Cb2R5fTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tU2l6ZSkgLyAzLjUpO1xuXG4gICAgJi5sZWFkIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtc20ge1xuICAgIGZvbnQtZmFtaWx5OiAke0ZvbnQuQm9keX07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICB9XG5cbiAgLnAtbGcge1xuICAgIGZvbnQtZmFtaWx5OiAke0ZvbnQuQm9keX07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICB9XG5cbiAgLyogSGVhZGVyIFN0eWxlcyAqL1xuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAuaGVhZGxpbmUge1xuICAgIGZvbnQtZmFtaWx5OiAke0ZvbnQuSGVhZGVyfTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIH1cblxuICBoMSwgLmgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbiAgaDIsIC5oMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG4gIGgzLCAuaDMge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG4gIGg0LCAuaDQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBoNSwgLmg1IHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gIH1cbiAgaDYsIC5oNiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiA3LjI1cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTWQgKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguU20gKyBcInB4XCJ9KSB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG4gIH1cblxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCAuaGVhZGluZy1wYWRkaW5nIHsgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tU2l6ZSkgLyAzLjUpOyB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/styles/Font.tsx\n");

/***/ })

})