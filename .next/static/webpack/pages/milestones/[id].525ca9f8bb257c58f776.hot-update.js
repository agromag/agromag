webpackHotUpdate_N_E("pages/milestones/[id]",{

/***/ "./src/pages/milestones/[id].js":
/*!**************************************!*\
  !*** ./src/pages/milestones/[id].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Milestones; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_milestones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/milestones */ \"./src/data/milestones/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme */ \"./src/theme/index.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/seo */ \"./src/components/seo.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _sections_banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sections/banner */ \"./src/sections/banner.js\");\n/* harmony import */ var _sections_team_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sections/team-section */ \"./src/sections/team-section.js\");\n/* harmony import */ var _components_simple_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/simple-section */ \"./src/components/simple-section.js\");\n\n\n\nvar _jsxFileName = \"/Users/sebastian/Documents/GitHub/HTML Phot Editor (2)/agromag/src/pages/milestones/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// @ts-nocheck\n\n\n\n\n\n\n\n\n\n\nfunction Milestones(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      milestone = _useState[0],\n      setMilestone = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!id) {\n      return;\n    }\n\n    var getMilestoneData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                result = _data_milestones__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filter(function (item) {\n                  return item.id === id;\n                })[0];\n                setMilestone(result);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getMilestoneData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getMilestoneData();\n  }, [id]);\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(_sections_banner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }), milestone && milestone.sections.map(function (section, i) {\n    return __jsx(_components_simple_section__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      title: section.title,\n      subTitle: section.subTitle,\n      content: section.content,\n      key: i,\n      children: section.children ? section.children : null,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }\n    });\n  }), __jsx(_sections_team_section__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Milestones, \"8WDbOZJV0w84yDEK+Ry2rfndpdA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Milestones;\n\nvar _c;\n\n$RefreshReg$(_c, \"Milestones\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21pbGVzdG9uZXMvLmpzPzNlZGIiXSwibmFtZXMiOlsiTWlsZXN0b25lcyIsInByb3BzIiwidXNlU3RhdGUiLCJtaWxlc3RvbmUiLCJzZXRNaWxlc3RvbmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiZ2V0TWlsZXN0b25lRGF0YSIsInJlc3VsdCIsIm1pbGVzdG9uZXMiLCJmaWx0ZXIiLCJpdGVtIiwidGhlbWUiLCJzZWN0aW9ucyIsIm1hcCIsInNlY3Rpb24iLCJpIiwidGl0bGUiLCJzdWJUaXRsZSIsImNvbnRlbnQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUFBOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDLElBQUQsQ0FGTDtBQUFBLE1BRTlCQyxTQUY4QjtBQUFBLE1BRW5CQyxZQUZtQjs7QUFHckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUhxQyxNQUk3QkMsRUFKNkIsR0FJdEJGLE1BQU0sQ0FBQ0csS0FKZSxDQUk3QkQsRUFKNkI7QUFNckNFLHlEQUFTLENBQUMsWUFBSztBQUVYLFFBQUcsQ0FBQ0YsRUFBSixFQUFPO0FBQ0g7QUFDSDs7QUFFRCxRQUFNRyxnQkFBZ0I7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZkMsc0JBRmUsR0FFTkMsd0RBQVUsQ0FBQ0MsTUFBWCxDQUFrQixVQUFDQyxJQUFEO0FBQUEseUJBQVVBLElBQUksQ0FBQ1AsRUFBTCxLQUFZQSxFQUF0QjtBQUFBLGlCQUFsQixFQUE0QyxDQUE1QyxDQUZNO0FBR3JCSCw0QkFBWSxDQUFDTyxNQUFELENBQVo7O0FBSHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWhCRCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsT0FBdEI7O0FBTUFBLG9CQUFnQjtBQUVuQixHQWRRLEVBY04sQ0FBQ0gsRUFBRCxDQWRNLENBQVQ7QUFrQkEsU0FDSSxNQUFDLHNEQUFEO0FBQWUsU0FBSyxFQUFFUSw4Q0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0taLFNBQVMsSUFBSUEsU0FBUyxDQUFDYSxRQUFWLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxPQUFELEVBQVNDLENBQVQ7QUFBQSxXQUNqQyxNQUFDLG1FQUFEO0FBQ0ksV0FBSyxFQUFFRCxPQUFPLENBQUNFLEtBRG5CO0FBRUksY0FBUSxFQUFJRixPQUFPLENBQUNHLFFBRnhCO0FBR0ksYUFBTyxFQUFJSCxPQUFPLENBQUNJLE9BSHZCO0FBSUksU0FBRyxFQUFFSCxDQUpUO0FBS0ksY0FBUSxFQUFJRCxPQUFPLENBQUNLLFFBQVIsR0FBbUJMLE9BQU8sQ0FBQ0ssUUFBM0IsR0FBc0MsSUFMdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURpQztBQUFBLEdBQXZCLENBSGxCLEVBY0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosQ0FESixDQURKO0FBcUJIOztHQTdDdUJ2QixVO1VBR0xNLHFEOzs7S0FIS04sVSIsImZpbGUiOiIuL3NyYy9wYWdlcy9taWxlc3RvbmVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1pbGVzdG9uZXMgZnJvbSAnLi4vLi4vZGF0YS9taWxlc3RvbmVzJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSc7XG5pbXBvcnQgU0VPIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VvJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi8uLi9zZWN0aW9ucy9iYW5uZXInO1xuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gJy4uLy4uL3NlY3Rpb25zL3RlYW0tc2VjdGlvbic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NpbXBsZS1zZWN0aW9uJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbGVzdG9uZXMocHJvcHMpe1xuXG4gICAgY29uc3QgW21pbGVzdG9uZSwgc2V0TWlsZXN0b25lXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcblxuICAgICAgICBpZighaWQpe1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBnZXRNaWxlc3RvbmVEYXRhID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBtaWxlc3RvbmVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdXG4gICAgICAgICAgICBzZXRNaWxlc3RvbmUocmVzdWx0KVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TWlsZXN0b25lRGF0YSgpXG5cbiAgICB9LCBbaWRdKVxuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEJhbm5lciAvPlxuXG4gICAgICAgICAgICAgICAge21pbGVzdG9uZSAmJiBtaWxlc3RvbmUuc2VjdGlvbnMubWFwKChzZWN0aW9uLGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlRpdGxlID0ge3NlY3Rpb24uc3ViVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0ge3NlY3Rpb24uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuID0ge3NlY3Rpb24uY2hpbGRyZW4gPyBzZWN0aW9uLmNoaWxkcmVuIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxUZWFtU2VjdGlvbiAvPlxuICAgICAgICAgIFxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/milestones/[id].js\n");

/***/ })

})