webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeyFeature; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/key-feature/performance.svg */ \"./src/assets/key-feature/performance.svg\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ \"./src/assets/key-feature/partnership.svg\");\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ \"./src/assets/key-feature/subscription.svg\");\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/support.svg */ \"./src/assets/key-feature/support.svg\");\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_feature_card_column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/feature-card-column */ \"./src/components/feature-card-column.js\");\nvar _jsxFileName = \"/Users/sebastian/Desktop/Agromart Site/src/sections/key-feature.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// @ts-nocheck\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n  altText: '5% of the GDP',\n  title: '5% of the GDP',\n  text: \"Currently, agriculture in Romania represents 5% of the GDP and it engages about 30% of the country's active population\"\n}, {\n  id: 2,\n  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  altText: 'Great pottential',\n  title: 'Great pottential',\n  text: \"Romania has an agricultural area of 14.8 million hectares, of which only ten million are occupied by arable land.\"\n}, {\n  id: 3,\n  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  altText: 'Pro Subscription',\n  title: 'Pro Subscription',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 4,\n  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  altText: 'Customer Support',\n  title: 'Customer Support',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}];\nfunction KeyFeature() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: {\n      variant: 'section.keyFeature'\n    },\n    id: \"feature\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"Problems\",\n    title: \"What we noticed in Romania\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, data.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_feature_card_column__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: item.id,\n      src: item.imgSrc,\n      alt: item.altText,\n      title: item.title,\n      text: item.text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 23\n      }\n    });\n  }))));\n}\n_c = KeyFeature;\nvar styles = {\n  grid: {\n    width: ['100%', '80%', '100%'],\n    mx: 'auto',\n    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"KeyFeature\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzP2Q5OTEiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiS2V5RmVhdHVyZSIsInZhcmlhbnQiLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsIndpZHRoIiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyx5RUFGVjtBQUdFQyxTQUFPLEVBQUUsZUFIWDtBQUlFQyxPQUFLLEVBQUUsZUFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQURXLEVBU1g7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFSyx5RUFGVjtBQUdFSCxTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBVFcsRUFpQlg7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFTSwwRUFGVjtBQUdFSixTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBakJXLEVBeUJYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU8scUVBRlY7QUFHRUwsU0FBTyxFQUFFLGtCQUhYO0FBSUVDLE9BQUssRUFBRSxrQkFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQXpCVyxDQUFiO0FBbUNlLFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFDbkMsU0FDSTtBQUFTLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQThDLE1BQUUsRUFBQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLGtFQUFEO0FBQ0ksVUFBTSxFQUFDLFVBRFg7QUFFSSxTQUFLLEVBQUMsNEJBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBT0kscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLYixJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FDTixxREFBQyxzRUFBRDtBQUNJLFNBQUcsRUFBRUEsSUFBSSxDQUFDZCxFQURkO0FBRUksU0FBRyxFQUFFYyxJQUFJLENBQUNiLE1BRmQ7QUFHSSxTQUFHLEVBQUVhLElBQUksQ0FBQ1gsT0FIZDtBQUlJLFdBQUssRUFBRVcsSUFBSSxDQUFDVixLQUpoQjtBQUtJLFVBQUksRUFBRVUsSUFBSSxDQUFDVCxJQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETTtBQUFBLEdBQVQsQ0FETCxDQVBKLENBREosQ0FESjtBQXVCRDtLQXhCdUJJLFU7QUEwQnhCLElBQU1FLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkcsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FESDtBQUVKQyxNQUFFLEVBQUUsTUFGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxXQUpPLEVBS1AsTUFMTyxFQU1QLFdBTk8sRUFPUCxXQVBPLENBSEw7QUFZSkMsdUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsZUFMbUI7QUFaakI7QUFETyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XG5pbXBvcnQgUGFydG5lcnNoaXAgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BhcnRuZXJzaGlwLnN2Zyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnJztcbmltcG9ydCBTdXBwb3J0IGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXG4gICAgYWx0VGV4dDogJzUlIG9mIHRoZSBHRFAnLFxuICAgIHRpdGxlOiAnNSUgb2YgdGhlIEdEUCcsXG4gICAgdGV4dDpcbiAgICAgIFwiQ3VycmVudGx5LCBhZ3JpY3VsdHVyZSBpbiBSb21hbmlhIHJlcHJlc2VudHMgNSUgb2YgdGhlIEdEUCBhbmQgaXQgZW5nYWdlcyBhYm91dCAzMCUgb2YgdGhlIGNvdW50cnkncyBhY3RpdmUgcG9wdWxhdGlvblwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcbiAgICBhbHRUZXh0OiAnR3JlYXQgcG90dGVudGlhbCcsXG4gICAgdGl0bGU6ICdHcmVhdCBwb3R0ZW50aWFsJyxcbiAgICB0ZXh0OlxuICAgICAgXCJSb21hbmlhIGhhcyBhbiBhZ3JpY3VsdHVyYWwgYXJlYSBvZiAxNC44IG1pbGxpb24gaGVjdGFyZXMsIG9mIHdoaWNoIG9ubHkgdGVuIG1pbGxpb24gYXJlIG9jY3VwaWVkIGJ5IGFyYWJsZSBsYW5kLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXG4gICAgYWx0VGV4dDogJ1BybyBTdWJzY3JpcHRpb24nLFxuICAgIHRpdGxlOiAnUHJvIFN1YnNjcmlwdGlvbicsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltZ1NyYzogU3VwcG9ydCxcbiAgICBhbHRUZXh0OiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZSd9fSBpZD1cImZlYXR1cmVcIj5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBcbiAgICAgICAgICAgICAgICAgIHNsb2dhbj1cIlByb2JsZW1zXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2hhdCB3ZSBub3RpY2VkIGluIFJvbWFuaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgICczNXB4IDAnLFxuICAgICAgbnVsbCxcbiAgICAgICc0MHB4IDQwcHgnLFxuICAgICAgJzUwcHggNjBweCcsXG4gICAgICAnMzBweCcsXG4gICAgICAnNTBweCA0MHB4JyxcbiAgICAgICc1NXB4IDkwcHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsMWZyKScsXG4gICAgXSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/key-feature.js\n");

/***/ })

})