self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/Reducers/index.js":
/*!*********************************!*\
  !*** ./store/Reducers/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _blog_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog/reducer */ "./store/blog/reducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  blogs: _blog_reducer__WEBPACK_IMPORTED_MODULE_0__.default
}));

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


/***/ }),

/***/ "./store/blog/reducer.js":
/*!*******************************!*\
  !*** ./store/blog/reducer.js ***!
  \*******************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvUmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2Jsb2cvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJibG9ncyIsImJsb2dSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImJsb2dzUmVxdWVzdGVkIiwiZGF0YSIsImJsb2dzRmFpbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsImJsb2dzUmVjaWV2ZWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZUEsc0RBQWUsQ0FBQztBQUMzQkMsT0FBSyxFQUFFQyxrREFBV0E7QUFEUyxDQUFELENBQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkYsT0FBSyxFQUFFLEVBRFk7QUFFbkJHLFNBQU8sRUFBRSxLQUZVO0FBR25CQyxPQUFLLEVBQUU7QUFIWSxDQUFyQjtBQU9BLElBQU1DLEtBQUssR0FBR0MsNkRBQVcsQ0FBQztBQUN4QkMsTUFBSSxFQUFFLFVBRGtCO0FBRXhCTCxjQUFZLEVBQVpBLFlBRndCO0FBR3hCTSxVQUFRLEVBQUU7QUFDUkMsa0JBQWMsRUFBRSx3QkFBQ0MsSUFBRCxFQUFVO0FBQ3hCQSxVQUFJLENBQUNQLE9BQUwsR0FBZSxJQUFmO0FBQ0QsS0FITztBQUlSUSxlQUFXLEVBQUUscUJBQUNELElBQUQsRUFBT0UsTUFBUCxFQUFrQjtBQUM3QkYsVUFBSSxDQUFDUCxPQUFMLEdBQWUsS0FBZjtBQUNBTyxVQUFJLENBQUNWLEtBQUwsR0FBYVksTUFBTSxDQUFDQyxPQUFwQjtBQUNELEtBUE87QUFRUkMsaUJBQWEsRUFBRSx1QkFBQ0osSUFBRCxFQUFPRSxNQUFQLEVBQWtCO0FBQy9CRixVQUFJLENBQUNQLE9BQUwsR0FBZSxLQUFmO0FBQ0FPLFVBQUksQ0FBQ04sS0FBTCxHQUFhUSxNQUFNLENBQUNDLE9BQXBCO0FBQ0Q7QUFYTztBQUhjLENBQUQsQ0FBekI7cUJBa0I4RFIsS0FBSyxDQUFDVSxPO0lBQXJETixjLGtCQUFBQSxjO0lBQWdCRSxXLGtCQUFBQSxXO0lBQWFHLGEsa0JBQUFBLGE7O0FBRTVDLCtEQUFlVCxLQUFLLENBQUNXLE9BQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWExYWZkZmFkYjBmYjlhODY4MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGJsb2dSZWR1Y2VyIGZyb20gJy4uL2Jsb2cvcmVkdWNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgYmxvZ3M6IGJsb2dSZWR1Y2VyXHJcbn0pICIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBibG9nczogW10sXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IHNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYWxsQmxvZ3NcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGJsb2dzUmVxdWVzdGVkOiAoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJsb2dzRmFpbGVkOiAoZGF0YSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGRhdGEubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkYXRhLmJsb2dzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgYmxvZ3NSZWNpZXZlZDogKGRhdGEsIGFjdGlvbikgPT4ge1xyXG4gICAgICBkYXRhLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZGF0YS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGJsb2dzUmVxdWVzdGVkLCBibG9nc0ZhaWxlZCwgYmxvZ3NSZWNpZXZlZCB9ID0gc2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWNlLnJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=