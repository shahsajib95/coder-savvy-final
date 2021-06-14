self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./store/blog/action.js":
/*!******************************!*\
  !*** ./store/blog/action.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllBlogs": function() { return /* binding */ getAllBlogs; }
/* harmony export */ });
/* harmony import */ var G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils//api-client */ "./utils/api-client.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./store/blog/reducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var getAllBlogs = function getAllBlogs() {
  return /*#__PURE__*/function () {
    var _ref = (0,G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var blogs;
      return G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.blogsRequested)());
              _context.next = 4;
              return _utils_api_client__WEBPACK_IMPORTED_MODULE_2__.getBlogs.fetchByUrl();

            case 4:
              blogs = _context.sent;
              dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.blogsRecieved)(blogs));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_3__.blogsFailed)(_context.t0));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmxvZy9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2Jsb2cvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJnZXRBbGxCbG9ncyIsImRpc3BhdGNoIiwiYmxvZ3NSZXF1ZXN0ZWQiLCJnZXRCbG9ncyIsImJsb2dzIiwiYmxvZ3NSZWNpZXZlZCIsImJsb2dzRmFpbGVkIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImRhdGEiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBO0FBQUEsaVNBQU0saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFN0JBLHNCQUFRLENBQUNDLHdEQUFjLEVBQWYsQ0FBUjtBQUY2QjtBQUFBLHFCQUdUQyxrRUFBQSxFQUhTOztBQUFBO0FBR3ZCQyxtQkFIdUI7QUFJN0JILHNCQUFRLENBQUNJLHVEQUFhLENBQUNELEtBQUQsQ0FBZCxDQUFSO0FBSjZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTTdCSCxzQkFBUSxDQUFDSyxxREFBVyxhQUFaLENBQVI7O0FBTjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJILE9BQUssRUFBRSxFQURZO0FBRW5CSSxTQUFPLEVBQUUsS0FGVTtBQUduQkMsT0FBSyxFQUFFO0FBSFksQ0FBckI7QUFNQSxJQUFNQyxLQUFLLEdBQUdDLDZEQUFXLENBQUM7QUFDeEJDLE1BQUksRUFBRSxVQURrQjtBQUV4QkwsY0FBWSxFQUFaQSxZQUZ3QjtBQUd4Qk0sVUFBUSxFQUFFO0FBQ1JYLGtCQUFjLEVBQUUsd0JBQUNZLElBQUQsRUFBVTtBQUN4QkEsVUFBSSxDQUFDTixPQUFMLEdBQWUsSUFBZjtBQUNELEtBSE87QUFJUkYsZUFBVyxFQUFFLHFCQUFDUSxJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDN0JELFVBQUksQ0FBQ04sT0FBTCxHQUFlLEtBQWY7QUFDQU0sVUFBSSxDQUFDVixLQUFMLEdBQWFXLE1BQU0sQ0FBQ0MsT0FBcEI7QUFDRCxLQVBPO0FBUVJYLGlCQUFhLEVBQUUsdUJBQUNTLElBQUQsRUFBT0MsTUFBUCxFQUFrQjtBQUMvQkQsVUFBSSxDQUFDTixPQUFMLEdBQWUsS0FBZjtBQUNBTSxVQUFJLENBQUNMLEtBQUwsR0FBYU0sTUFBTSxDQUFDQyxPQUFwQjtBQUNEO0FBWE87QUFIYyxDQUFELENBQXpCO3FCQWtCOEROLEtBQUssQ0FBQ08sTztJQUFyRGYsYyxrQkFBQUEsYztJQUFnQkksVyxrQkFBQUEsVztJQUFhRCxhLGtCQUFBQSxhOztBQUU1QywrREFBZUssS0FBSyxDQUFDUSxPQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODE2YjRlNTk0ZWZiZjlhYzllMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxvZ3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvL2FwaS1jbGllbnRcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBibG9nc1JlcXVlc3RlZCwgYmxvZ3NGYWlsZWQsIGJsb2dzUmVjaWV2ZWQgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQmxvZ3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgZGlzcGF0Y2goYmxvZ3NSZXF1ZXN0ZWQoKSk7XHJcbiAgICBjb25zdCBibG9ncyA9IGF3YWl0IGdldEJsb2dzLmZldGNoQnlVcmwoKTtcclxuICAgIGRpc3BhdGNoKGJsb2dzUmVjaWV2ZWQoYmxvZ3MpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZGlzcGF0Y2goYmxvZ3NGYWlsZWQoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBibG9nczogW10sXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3Qgc2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJhbGxCbG9nc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYmxvZ3NSZXF1ZXN0ZWQ6IChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEubG9hZGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYmxvZ3NGYWlsZWQ6IChkYXRhLCBhY3Rpb24pID0+IHtcclxuICAgICAgZGF0YS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRhdGEuYmxvZ3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBibG9nc1JlY2lldmVkOiAoZGF0YSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGRhdGEubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkYXRhLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYmxvZ3NSZXF1ZXN0ZWQsIGJsb2dzRmFpbGVkLCBibG9nc1JlY2lldmVkIH0gPSBzbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpY2UucmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==