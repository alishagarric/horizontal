webpackHotUpdate_N_E("pages/_app",{

/***/ "./constants/styles/Global.tsx":
/*!*************************************!*\
  !*** ./constants/styles/Global.tsx ***!
  \*************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alishagarric_Projects_react_volume_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Font */ \"./constants/styles/Font.tsx\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ \"./constants/styles/Color.tsx\");\n/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Theme */ \"./constants/Theme.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/react/volume/web/constants/styles/Global.tsx\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_alishagarric_Projects_react_volume_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\n/* * {\\n  cursor: none !important;\\n} */\\n\\n/** Animation */\\n@keyframes marqueeBottomLeftQuadrants {\\n  from {\\n    transform: translateX(0%);\\n  }\\n  to {\\n    transform: translateX(-100%);\\n  }\\n}\\n\\n@keyframes marqueeTopRightQuadrants {\\n  from {\\n    transform: translateX(-100%);\\n  }\\n  to {\\n    transform: translateX(0%);\\n  }\\n}\\n\\n\\nhtml {\\n    line-height: 1.15; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n    margin: 0;\\n    padding: 0;\\n    min-height: 100%;\\n    overflow: auto;\\n    background-color: \", \";\\n    color: \", \";\\n\\n    cursor: crosshair;\\n\\n    /* overflow: hidden; */\\n  }\\n\\n  /* _______________________________________________________*/\\n  /** Lazy Loading **/\\n  .lazy {\\n\\n    opacity: 0;\\n    transition: opacity 1s ease;\\n\\n    &.loaded {\\n      opacity: 1;\\n    }\\n  }\\n\\n\\n\\n  /* Sections\\n     ========================================================================== */\\n\\n  /**\\n   * Remove the margin in all browsers.\\n   */\\n\\n  body {\\n    min-height: 100%;\\n    margin: 0;\\n    padding-left: 0;\\n    padding-right: 0;\\n    padding-bottom: 0;\\n    background-color: \", \";\\n    color: \", \";\\n\\n    cursor: crosshair;\\n\\n    --homeInitialHeight: 25vw;\\n\\n    --homeInitialDelay: 1s;\\n    --homeSlideUpDuration: 1.5s;\\n\\n    --homeExpandDuration: 1.5s;\\n    --homeExpandDelay: calc(var(--homeInitialDelay) + calc(var(--homeSlideUpDuration) / 2));\\n\\n    --homeIndustriesShrinkDuration: .5s;\\n    --homeIndustriesDissapearDuration: 1.5s;\\n    --homeIndustriesShrinkDelay: calc(var(--homeExpandDelay) + var(--homeExpandDuration));\\n\\n    --homeRevealDuration: 1.5s;\\n    --homeRevealDelay: calc(var(--homeIndustriesShrinkDelay) + calc(var(--homeIndustriesShrinkDuration) / 2));\\n\\n    --homeMarkDissapearDuration: 0s;\\n    --homeIndustriesDissapearDelay: calc(var(--homeIndustriesShrinkDelay) + var(--homeIndustriesShrinkDuration));\\n\\n    --homeSlideLeftDuration: 2s;\\n    --homeSlideLeftDelay: var(--homeIndustriesDissapearDelay);\\n\\n    /* overflow: hidden; */\\n  }\\n\\n  /**\\n   * Render the 'main' element consistently in IE.\\n   */\\n\\n  main {\\n    display: block;\\n    position: relative;\\n    z-index: 10;\\n  }\\n\\n  .__visually-hidden {\\n    clip: rect(0 0 0 0);\\n    clip-path: inset(50%);\\n    height: 1px;\\n    overflow: hidden;\\n    position: absolute;\\n    white-space: nowrap;\\n    width: 1px;\\n  }\\n\\n\\n  /* Grouping content\\n     ========================================================================== */\\n\\n  /**\\n   * 1. Add the correct box sizing in Firefox.\\n   * 2. Show the overflow in Edge and IE.\\n   */\\n\\n  hr {\\n    box-sizing: content-box; /* 1 */\\n    height: 0; /* 1 */\\n    overflow: visible; /* 2 */\\n  }\\n\\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd 'em' font sizing in all browsers.\\n   */\\n\\n  pre {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n\\n  /* Text-level semantics\\n     ========================================================================== */\\n\\n  /**\\n   * Remove the gray background on active links in IE 10.\\n   */\\n\\n  a {\\n    background-color: transparent;\\n  }\\n\\n  /**\\n   * 1. Remove the bottom border in Chrome 57-\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n   */\\n\\n  abbr[title] {\\n    border-bottom: none; /* 1 */\\n    text-decoration: underline; /* 2 */\\n    text-decoration: underline dotted; /* 2 */\\n  }\\n\\n  /**\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\n   */\\n\\n  b,\\n  strong {\\n    font-weight: bolder;\\n  }\\n\\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd 'em' font sizing in all browsers.\\n   */\\n\\n  code,\\n  kbd,\\n  samp {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n\\n  /**\\n   * Add the correct font size in all browsers.\\n   */\\n\\n  small {\\n    font-size: 80%;\\n  }\\n\\n  /**\\n   * Prevent 'sub' and 'sup' elements from affecting the line height in\\n   * all browsers.\\n   */\\n\\n  sub,\\n  sup {\\n    font-size: 75%;\\n    line-height: 0;\\n    position: relative;\\n    vertical-align: baseline;\\n  }\\n\\n  sub {\\n    bottom: -0.25em;\\n  }\\n\\n  sup {\\n    top: -0.5em;\\n  }\\n\\n  /* Embedded content\\n     ========================================================================== */\\n\\n  /**\\n   * Remove the border on images inside links in IE 10.\\n   */\\n\\n  img {\\n    border-style: none;\\n  }\\n\\n  /* Forms\\n     ========================================================================== */\\n\\n  /**\\n   * 1. Change the font styles in all browsers.\\n   * 2. Remove the margin in Firefox and Safari.\\n   */\\n\\n  button,\\n  input,\\n  optgroup,\\n  select,\\n  textarea {\\n    font-family: inherit; /* 1 */\\n    font-size: 100%; /* 1 */\\n    line-height: 1.15; /* 1 */\\n    margin: 0; /* 2 */\\n  }\\n\\n  /**\\n   * Show the overflow in IE.\\n   * 1. Show the overflow in Edge.\\n   */\\n\\n  button,\\n  input { /* 1 */\\n    overflow: visible;\\n  }\\n\\n  /**\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n   * 1. Remove the inheritance of text transform in Firefox.\\n   */\\n\\n  button,\\n  select { /* 1 */\\n    text-transform: none;\\n  }\\n\\n  /**\\n   * Correct the inability to style clickable types in iOS and Safari.\\n   */\\n\\n  button,\\n  [type=\\\"button\\\"],\\n  [type=\\\"reset\\\"],\\n  [type=\\\"submit\\\"] {\\n    -webkit-appearance: button;\\n  }\\n\\n  /**\\n   * Remove the inner border and padding in Firefox.\\n   */\\n\\n  button::-moz-focus-inner,\\n  [type=\\\"button\\\"]::-moz-focus-inner,\\n  [type=\\\"reset\\\"]::-moz-focus-inner,\\n  [type=\\\"submit\\\"]::-moz-focus-inner {\\n    border-style: none;\\n    padding: 0;\\n  }\\n\\n  /**\\n   * Restore the focus styles unset by the previous rule.\\n   */\\n\\n  button:-moz-focusring,\\n  [type=\\\"button\\\"]:-moz-focusring,\\n  [type=\\\"reset\\\"]:-moz-focusring,\\n  [type=\\\"submit\\\"]:-moz-focusring {\\n    outline: 1px dotted ButtonText;\\n  }\\n\\n  /**\\n   * Correct the padding in Firefox.\\n   */\\n\\n  fieldset {\\n    padding: 0.35em 0.75em 0.625em;\\n  }\\n\\n  /**\\n   * 1. Correct the text wrapping in Edge and IE.\\n   * 2. Correct the color inheritance from 'fieldset' elements in IE.\\n   * 3. Remove the padding so developers are not caught out when they zero out\\n   *    'fieldset' elements in all browsers.\\n   */\\n\\n  legend {\\n    box-sizing: border-box; /* 1 */\\n    color: inherit; /* 2 */\\n    display: table; /* 1 */\\n    max-width: 100%; /* 1 */\\n    padding: 0; /* 3 */\\n    white-space: normal; /* 1 */\\n  }\\n\\n  /**\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n   */\\n\\n  progress {\\n    vertical-align: baseline;\\n  }\\n\\n  /**\\n   * Remove the default vertical scrollbar in IE 10+.\\n   */\\n\\n  textarea {\\n    overflow: auto;\\n  }\\n\\n  /**\\n   * 1. Add the correct box sizing in IE 10.\\n   * 2. Remove the padding in IE 10.\\n   */\\n\\n  [type=\\\"checkbox\\\"],\\n  [type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n  }\\n\\n  /**\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\n   */\\n\\n  [type=\\\"number\\\"]::-webkit-inner-spin-button,\\n  [type=\\\"number\\\"]::-webkit-outer-spin-button {\\n    height: auto;\\n  }\\n\\n  /**\\n   * 1. Correct the odd appearance in Chrome and Safari.\\n   * 2. Correct the outline style in Safari.\\n   */\\n\\n  [type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    outline-offset: -2px; /* 2 */\\n  }\\n\\n  /**\\n   * Remove the inner padding in Chrome and Safari on macOS.\\n   */\\n\\n  [type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n  }\\n\\n  /**\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\n   * 2. Change font properties to 'inherit' in Safari.\\n   */\\n\\n  ::-webkit-file-upload-button {\\n    -webkit-appearance: button; /* 1 */\\n    font: inherit; /* 2 */\\n  }\\n\\n  /* Interactive\\n     ========================================================================== */\\n\\n  /*\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\n   */\\n\\n  details {\\n    display: block;\\n  }\\n\\n  /*\\n   * Add the correct display in all browsers.\\n   */\\n\\n  summary {\\n    display: list-item;\\n  }\\n\\n  /* Misc\\n     ========================================================================== */\\n\\n  /**\\n   * Add the correct display in IE 10+.\\n   */\\n\\n  template {\\n    display: none;\\n  }\\n\\n  /**\\n   * Add the correct display in IE 10.\\n   */\\n\\n  [hidden] {\\n    display: none;\\n  }\\n\\n  /* HTML5 display-role reset for older browsers */\\n  article, aside, details, figcaption, figure,\\n  footer, header, hgroup, menu, nav, section {\\n    display: block;\\n  }\\n\\n\\n  ul {\\n    margin-block-start: 0px;\\n    margin-block-end: 0px;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px;\\n    padding-inline-start: 0px;\\n\\n    -webkit-margin-before: 0px;\\n    -webkit-margin-after: 0px;\\n    -webkit-margin-start: 0px;\\n    -webkit-margin-end: 0px;\\n    -webkit-padding-start: 0px;\\n  }\\n\\n  ol, ul {\\n    list-style: none;\\n  }\\n\\n  blockquote, q {\\n    quotes: none;\\n  }\\n\\n  blockquote:before, blockquote:after,\\n  q:before, q:after {\\n    content: '';\\n    content: none;\\n  }\\n\\n  table {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n  }\\n\\n  a {\\n    text-decoration: none;\\n    &:hover {\\n      text-decoration: underline;\\n    }\\n  }\\n\\n  pre {\\n    display: block;\\n    padding: 2rem;\\n    margin-top: 4rem;\\n    overflow: auto;\\n    font-size: 85%;\\n    line-height: 1.45;\\n    border-radius: 5px;\\n    border: 1px solid #ddd;\\n  }\\n\\n  video {\\n    max-width: 100%;\\n  }\\n\\n  p, h1, h2, h3, h4, h5, h6 {\\n    margin: 0;\\n  }\\n\\n  * {\\n    box-sizing: border-box;\\n    -webkit-tap-highlight-color: transparent; /* for remove highlight */\\n  }\\n\\n  /* Intercom */\\n  .intercom-namespace {\\n    .intercom-launcher-frame {\\n      bottom: unset !important;\\n      top: 18px !important;\\n      right: 139px !important;\\n    }\\n  }\\n\\n  .intercom-container {\\n    display: none !important;\\n  }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/**\n *\n * Global Styles Component\n * @author Peter Laxalt\n * @description This is the global styles throughout the app.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n // Styles\n\n\n\n\n // Begin Component\n//////////////////////////////////////////////////////////////////////\n\nvar Reset = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject(), _Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.varBackground, _Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.varForeground, _Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.varBackground, _Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.varForeground);\n_c = Reset;\nvar GlobalStyle = function GlobalStyle() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Root__WEBPACK_IMPORTED_MODULE_6__[\"RootVariables\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 546,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Reset, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 547,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Font__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 548,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Color__WEBPACK_IMPORTED_MODULE_5__[\"Palette\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 549,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c2 = GlobalStyle;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Reset\");\n$RefreshReg$(_c2, \"GlobalStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9HbG9iYWwudHN4PzA4NGIiXSwibmFtZXMiOlsiUmVzZXQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIkdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsMkVBQUgsb0JBMENhQyw0Q0FBSyxDQUFDQyxLQUFOLENBQVlDLGFBMUN6QixFQTJDRUYsNENBQUssQ0FBQ0MsS0FBTixDQUFZRSxhQTNDZCxFQTZFYUgsNENBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQTdFekIsRUE4RUVGLDRDQUFLLENBQUNDLEtBQU4sQ0FBWUUsYUE5RWQsQ0FBWDtLQUFNTCxLO0FBdWdCQyxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHNCQUN6QjtBQUFBLDRCQUNFLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBRHlCO0FBQUEsQ0FBcEI7TUFBTUEsVyIsImZpbGUiOiIuL2NvbnN0YW50cy9zdHlsZXMvR2xvYmFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEdsb2JhbCBTdHlsZXMgQ29tcG9uZW50XG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGdsb2JhbCBzdHlsZXMgdGhyb3VnaG91dCB0aGUgYXBwLlxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIENvcmVcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCIuL0ZvbnRcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9Db2xvclwiO1xuaW1wb3J0IHsgUm9vdFZhcmlhYmxlcyB9IGZyb20gXCIuLi9Sb290XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi9UaGVtZVwiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgUmVzZXQgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuLyogKiB7XG4gIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xufSAqL1xuXG4vKiogQW5pbWF0aW9uICovXG5Aa2V5ZnJhbWVzIG1hcnF1ZWVCb3R0b21MZWZ0UXVhZHJhbnRzIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1hcnF1ZWVUb3BSaWdodFF1YWRyYW50cyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cblxuXG5odG1sIHtcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcbiAgICBjb2xvcjogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgfVxuXG4gIC8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuICAvKiogTGF6eSBMb2FkaW5nICoqL1xuICAubGF6eSB7XG5cbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcblxuICAgICYubG9hZGVkIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cblxuXG4gIC8qIFNlY3Rpb25zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcbiAgICBjb2xvcjogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuXG4gICAgLS1ob21lSW5pdGlhbEhlaWdodDogMjV2dztcblxuICAgIC0taG9tZUluaXRpYWxEZWxheTogMXM7XG4gICAgLS1ob21lU2xpZGVVcER1cmF0aW9uOiAxLjVzO1xuXG4gICAgLS1ob21lRXhwYW5kRHVyYXRpb246IDEuNXM7XG4gICAgLS1ob21lRXhwYW5kRGVsYXk6IGNhbGModmFyKC0taG9tZUluaXRpYWxEZWxheSkgKyBjYWxjKHZhcigtLWhvbWVTbGlkZVVwRHVyYXRpb24pIC8gMikpO1xuXG4gICAgLS1ob21lSW5kdXN0cmllc1Nocmlua0R1cmF0aW9uOiAuNXM7XG4gICAgLS1ob21lSW5kdXN0cmllc0Rpc3NhcGVhckR1cmF0aW9uOiAxLjVzO1xuICAgIC0taG9tZUluZHVzdHJpZXNTaHJpbmtEZWxheTogY2FsYyh2YXIoLS1ob21lRXhwYW5kRGVsYXkpICsgdmFyKC0taG9tZUV4cGFuZER1cmF0aW9uKSk7XG5cbiAgICAtLWhvbWVSZXZlYWxEdXJhdGlvbjogMS41cztcbiAgICAtLWhvbWVSZXZlYWxEZWxheTogY2FsYyh2YXIoLS1ob21lSW5kdXN0cmllc1Nocmlua0RlbGF5KSArIGNhbGModmFyKC0taG9tZUluZHVzdHJpZXNTaHJpbmtEdXJhdGlvbikgLyAyKSk7XG5cbiAgICAtLWhvbWVNYXJrRGlzc2FwZWFyRHVyYXRpb246IDBzO1xuICAgIC0taG9tZUluZHVzdHJpZXNEaXNzYXBlYXJEZWxheTogY2FsYyh2YXIoLS1ob21lSW5kdXN0cmllc1Nocmlua0RlbGF5KSArIHZhcigtLWhvbWVJbmR1c3RyaWVzU2hyaW5rRHVyYXRpb24pKTtcblxuICAgIC0taG9tZVNsaWRlTGVmdER1cmF0aW9uOiAycztcbiAgICAtLWhvbWVTbGlkZUxlZnREZWxheTogdmFyKC0taG9tZUluZHVzdHJpZXNEaXNzYXBlYXJEZWxheSk7XG5cbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgJ21haW4nIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICAgKi9cblxuICBtYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAuX192aXN1YWxseS1oaWRkZW4ge1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDFweDtcbiAgfVxuXG5cbiAgLyogR3JvdXBpbmcgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qKlxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAgICovXG5cbiAgaHIge1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG4gIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbiAgfVxuXG4gIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAgICovXG5cbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAgICovXG5cbiAgYWJiclt0aXRsZV0ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gICAqL1xuXG4gIGIsXG4gIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG4gIGNvZGUsXG4gIGtiZCxcbiAgc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICAgKiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG4gIHN1YixcbiAgc3VwIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG5cbiAgc3ViIHtcbiAgICBib3R0b206IC0wLjI1ZW07XG4gIH1cblxuICBzdXAge1xuICAgIHRvcDogLTAuNWVtO1xuICB9XG5cbiAgLyogRW1iZWRkZWQgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICAgKi9cblxuICBpbWcge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC8qIEZvcm1zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyoqXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gICAqL1xuXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIG9wdGdyb3VwLFxuICBzZWxlY3QsXG4gIHRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gICAqL1xuXG4gIGJ1dHRvbixcbiAgaW5wdXQgeyAvKiAxICovXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAgICovXG5cbiAgYnV0dG9uLFxuICBzZWxlY3QgeyAvKiAxICovXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAvKipcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAgICovXG5cbiAgYnV0dG9uLFxuICBbdHlwZT1cImJ1dHRvblwiXSxcbiAgW3R5cGU9XCJyZXNldFwiXSxcbiAgW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAqL1xuXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbiAgW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG4gIFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG4gIFt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gICAqL1xuXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcbiAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG4gIFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG4gIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG4gIH1cblxuICAvKipcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICAgKi9cblxuICBmaWVsZHNldCB7XG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xuICB9XG5cbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBJRS5cbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICAgKiAgICAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbiAgbGVnZW5kIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAgICovXG5cbiAgcHJvZ3Jlc3Mge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAgICovXG5cbiAgdGV4dGFyZWEge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLyoqXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gICAqL1xuXG4gIFt0eXBlPVwiY2hlY2tib3hcIl0sXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXG4gIH1cblxuICAvKipcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICAgKi9cblxuICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gICAqL1xuXG4gIFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICAgKi9cblxuICBbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cbiAgICovXG5cbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXG4gIH1cblxuICAvKiBJbnRlcmFjdGl2ZVxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gICAqL1xuXG4gIGRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLypcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cblxuICBzdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIH1cblxuICAvKiBNaXNjXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAgICovXG5cbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gICAqL1xuXG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cblxuICB1bCB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG5cbiAgICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDBweDtcbiAgICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMHB4O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwcHg7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiAwcHg7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIH1cblxuICBvbCwgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICBibG9ja3F1b3RlLCBxIHtcbiAgICBxdW90ZXM6IG5vbmU7XG4gIH1cblxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuXG4gIHByZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB9XG5cbiAgdmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogZm9yIHJlbW92ZSBoaWdobGlnaHQgKi9cbiAgfVxuXG4gIC8qIEludGVyY29tICovXG4gIC5pbnRlcmNvbS1uYW1lc3BhY2Uge1xuICAgIC5pbnRlcmNvbS1sYXVuY2hlci1mcmFtZSB7XG4gICAgICBib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IDE4cHggIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAxMzlweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5pbnRlcmNvbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSAoKSA9PiAoXG4gIDw+XG4gICAgPFJvb3RWYXJpYWJsZXMgLz5cbiAgICA8UmVzZXQgLz5cbiAgICA8VHlwb2dyYXBoeSAvPlxuICAgIDxQYWxldHRlIC8+XG4gIDwvPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/styles/Global.tsx\n");

/***/ })

})