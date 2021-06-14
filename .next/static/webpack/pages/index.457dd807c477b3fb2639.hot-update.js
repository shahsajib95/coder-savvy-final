self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./store/blog/reducers.js":
/*!********************************!*\
  !*** ./store/blog/reducers.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogsRequested": function() { return /* binding */ blogsRequested; },
/* harmony export */   "blogsFailed": function() { return /* binding */ blogsFailed; },
/* harmony export */   "blogsRecieved": function() { return /* binding */ blogsRecieved; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var initialState = {
  blogs: [],
  loading: false,
  error: false
};
var slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "allBlogs",
  initialState: initialState,
  reducers: {
    blogsRequested: function blogsRequested(data) {
      data.loading = true;
    },
    blogsFailed: function blogsFailed(data, action) {
      data.loading = false;
      data.blogs = action.payload;
    },
    blogsRecieved: function blogsRecieved(data, action) {
      data.loading = false;
      data.error = action.payload;
    }
  }
});
var _slice$actions = slice.actions,
    blogsRequested = _slice$actions.blogsRequested,
    blogsFailed = _slice$actions.blogsFailed,
    blogsRecieved = _slice$actions.blogsRecieved;

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmxvZy9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJibG9ncyIsImxvYWRpbmciLCJlcnJvciIsInNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJibG9nc1JlcXVlc3RlZCIsImRhdGEiLCJibG9nc0ZhaWxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJibG9nc1JlY2lldmVkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRSxFQURZO0FBRW5CQyxTQUFPLEVBQUUsS0FGVTtBQUduQkMsT0FBSyxFQUFFO0FBSFksQ0FBckI7QUFNQSxJQUFNQyxLQUFLLEdBQUdDLDZEQUFXLENBQUM7QUFDeEJDLE1BQUksRUFBRSxVQURrQjtBQUV4Qk4sY0FBWSxFQUFaQSxZQUZ3QjtBQUd4Qk8sVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsd0JBQUNDLElBQUQsRUFBVTtBQUN4QkEsVUFBSSxDQUFDUCxPQUFMLEdBQWUsSUFBZjtBQUNELEtBSE87QUFJUlEsZUFBVyxFQUFFLHFCQUFDRCxJQUFELEVBQU9FLE1BQVAsRUFBa0I7QUFDN0JGLFVBQUksQ0FBQ1AsT0FBTCxHQUFlLEtBQWY7QUFDQU8sVUFBSSxDQUFDUixLQUFMLEdBQWFVLE1BQU0sQ0FBQ0MsT0FBcEI7QUFDRCxLQVBPO0FBUVJDLGlCQUFhLEVBQUUsdUJBQUNKLElBQUQsRUFBT0UsTUFBUCxFQUFrQjtBQUMvQkYsVUFBSSxDQUFDUCxPQUFMLEdBQWUsS0FBZjtBQUNBTyxVQUFJLENBQUNOLEtBQUwsR0FBYVEsTUFBTSxDQUFDQyxPQUFwQjtBQUNEO0FBWE87QUFIYyxDQUFELENBQXpCO3FCQWtCOERSLEtBQUssQ0FBQ1UsTztJQUFyRE4sYyxrQkFBQUEsYztJQUFnQkUsVyxrQkFBQUEsVztJQUFhRyxhLGtCQUFBQSxhOztBQUU1QywrREFBZVQsS0FBSyxDQUFDVyxPQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTdkZDgwN2M0NzdiM2ZiMjYzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGJsb2dzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBzbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImFsbEJsb2dzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBibG9nc1JlcXVlc3RlZDogKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBibG9nc0ZhaWxlZDogKGRhdGEsIGFjdGlvbikgPT4ge1xyXG4gICAgICBkYXRhLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZGF0YS5ibG9ncyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGJsb2dzUmVjaWV2ZWQ6IChkYXRhLCBhY3Rpb24pID0+IHtcclxuICAgICAgZGF0YS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRhdGEuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBibG9nc1JlcXVlc3RlZCwgYmxvZ3NGYWlsZWQsIGJsb2dzUmVjaWV2ZWQgfSA9IHNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGljZS5yZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9