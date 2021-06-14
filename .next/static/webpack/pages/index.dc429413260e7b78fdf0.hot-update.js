self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/api-client.js":
/*!*****************************!*\
  !*** ./utils/api-client.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clientData": function() { return /* binding */ clientData; },
/* harmony export */   "getBlogs": function() { return /* binding */ getBlogs; }
/* harmony export */ });
/* harmony import */ var G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var client = axios__WEBPACK_IMPORTED_MODULE_2___default().create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json" // Authorization: API_KEY,

  }
});
var clientData = function clientData(url) {
  return {
    fetchByUrl: function () {
      var _fetchByUrl = (0,G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$client$get, data;

        return G_Web_Development_reallife_codder_savvy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return client.get("".concat("".concat(url)), {
                  headers: {
                    Accept: "application/json" //    Authorization: authHeader()

                  }
                });

              case 2:
                _yield$client$get = _context.sent;
                data = _yield$client$get.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchByUrl() {
        return _fetchByUrl.apply(this, arguments);
      }

      return fetchByUrl;
    }()
  };
};
var getBlogs = clientData('/posts');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBpLWNsaWVudC5qcyJdLCJuYW1lcyI6WyJjbGllbnQiLCJheGlvcyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiaGVhZGVycyIsIkFjY2VwdCIsImNsaWVudERhdGEiLCJ1cmwiLCJmZXRjaEJ5VXJsIiwiZ2V0IiwiZGF0YSIsImdldEJsb2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFBLENBQWE7QUFDMUJDLFNBQU8sRUFBRUMsc0NBRGlCO0FBRTFCQyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFLGtCQURELENBRVA7O0FBRk87QUFGaUIsQ0FBYixDQUFmO0FBUU8sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRDtBQUFBLFNBQVU7QUFDbENDLGNBQVU7QUFBQSwwU0FBRTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDYVIsTUFBTSxDQUFDUyxHQUFQLHFCQUFpQkYsR0FBakIsSUFBMEI7QUFDL0NILHlCQUFPLEVBQUU7QUFDUEMsMEJBQU0sRUFBRSxrQkFERCxDQUVQOztBQUZPO0FBRHNDLGlCQUExQixDQURiOztBQUFBO0FBQUE7QUFDRkssb0JBREUscUJBQ0ZBLElBREU7QUFBQSxpREFPSEEsSUFQRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRHdCLEdBQVY7QUFBQSxDQUFuQjtBQWFBLElBQU1DLFFBQVEsR0FBRUwsVUFBVSxDQUFDLFFBQUQsQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGM0Mjk0MTMyNjBlN2I3OGZkZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQkFTRV9VUkwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIC8vIEF1dGhvcml6YXRpb246IEFQSV9LRVksXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50RGF0YSA9ICh1cmwpID0+ICh7XHJcbiAgZmV0Y2hCeVVybDogYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KGAke2Ake3VybH1gfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICAgQXV0aG9yaXphdGlvbjogYXV0aEhlYWRlcigpXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCbG9ncz0gY2xpZW50RGF0YSgnL3Bvc3RzJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==