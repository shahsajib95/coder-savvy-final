(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavData */ "./components/NavData.js");

var _jsxFileName = "G:\\Web Development\\reallife\\codder-savvy\\components\\Layout.js";



function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavData__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavData.js":
/*!*******************************!*\
  !*** ./components/NavData.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "G:\\Web Development\\reallife\\codder-savvy\\components\\NavData.js";




const NavData = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const isActive = r => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
      light: true,
      expand: "md",
      className: "p-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarBrand, {
          href: "/",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/codersavvy.png",
            width: "50",
            alt: "CoderSavvy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "CoderSavvy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarToggler, {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
            className: "ms-auto",
            navbar: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                href: "/",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                href: "/blog",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                href: "/about",
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.UncontrolledDropdown, {
              nav: true,
              inNavbar: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownToggle, {
                nav: true,
                caret: true,
                children: "Options"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
                right: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                  children: "Option 1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                  children: "Option 2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                  divider: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                  children: "Reset"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavData);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_Reducers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/Reducers/index */ "./store/Reducers/index.js");

var _jsxFileName = "G:\\Web Development\\reallife\\codder-savvy\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(_store_Reducers_index__WEBPACK_IMPORTED_MODULE_6__.default, (0,redux__WEBPACK_IMPORTED_MODULE_4__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_4__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_5___default()))));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/Reducers/index.js":
/*!*********************************!*\
  !*** ./store/Reducers/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blog_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog/reducer */ "./store/blog/reducer.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  blogs: _blog_reducer__WEBPACK_IMPORTED_MODULE_1__.default
}));

/***/ }),

/***/ "./store/blog/reducer.js":
/*!*******************************!*\
  !*** ./store/blog/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogsRequested": function() { return /* binding */ blogsRequested; },
/* harmony export */   "blogsFailed": function() { return /* binding */ blogsFailed; },
/* harmony export */   "blogsRecieved": function() { return /* binding */ blogsRecieved; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  blogs: [],
  loading: false,
  error: false
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "allBlogs",
  initialState,
  reducers: {
    blogsRequested: data => {
      data.loading = true;
    },
    blogsFailed: (data, action) => {
      data.loading = false;
      data.error = action.payload;
    },
    blogsRecieved: (data, action) => {
      data.loading = false;
      data.blogs = action.payload;
    }
  }
});
const {
  blogsRequested,
  blogsFailed,
  blogsRecieved
} = slice.actions;
/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFoc2FqaWIvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9zaGFoc2FqaWIvLi9jb21wb25lbnRzL05hdkRhdGEuanMiLCJ3ZWJwYWNrOi8vc2hhaHNhamliLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zaGFoc2FqaWIvLi9zdG9yZS9SZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGFoc2FqaWIvLi9zdG9yZS9ibG9nL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vc2hhaHNhamliL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3NoYWhzYWppYi9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hhaHNhamliL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaGFoc2FqaWIvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3NoYWhzYWppYi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NoYWhzYWppYi9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly9zaGFoc2FqaWIvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3NoYWhzYWppYi9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJOYXZEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyIiwicGF0aG5hbWUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY29tYmluZVJlZHVjZXJzIiwiYmxvZ3MiLCJibG9nUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsInNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiYmxvZ3NSZXF1ZXN0ZWQiLCJkYXRhIiwiYmxvZ3NGYWlsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYmxvZ3NSZWNpZXZlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUM7QUFBRixDQUFoQixFQUE4QjtBQUM1QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFBNEJBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVELCtEQUFlRCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7O0FBZUEsTUFBTUUsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxRQUFNQyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUN0QixRQUFJQSxDQUFDLEtBQUtILE1BQU0sQ0FBQ0ksUUFBakIsRUFBMkI7QUFDekIsYUFBTyxTQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxFQUFQO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQyxLQUFELENBQXBDOztBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNRixTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUE5Qjs7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDhDQUFEO0FBQVEsV0FBSyxNQUFiO0FBQWMsWUFBTSxFQUFDLElBQXJCO0FBQTBCLGVBQVMsRUFBQyxLQUFwQztBQUFBLDZCQUNFO0FBQUssaUJB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Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2RGF0YSBmcm9tIFwiLi9OYXZEYXRhXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZEYXRhIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdmJhclRvZ2dsZXIsXHJcbiAgTmF2YmFyQnJhbmQsXHJcbiAgTmF2LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGluayxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIE5hdmJhclRleHQsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IE5hdkRhdGEgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSAocikgPT4ge1xyXG4gICAgaWYgKHIgPT09IHJvdXRlci5wYXRobmFtZSkge1xyXG4gICAgICByZXR1cm4gXCIgYWN0aXZlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGxpZ2h0IGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9jb2RlcnNhdnZ5LnBuZ1wiIHdpZHRoPVwiNTBcIiBhbHQ9XCJDb2RlclNhdnZ5XCIvPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkNvZGVyU2F2dnk8L3N0cm9uZz5cclxuICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjYXJldD5cclxuICAgICAgICAgICAgICAgICAgT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+T3B0aW9uIDE8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5PcHRpb24gMjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5SZXNldDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZEYXRhO1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuLi9zdG9yZS9SZWR1Y2Vycy9pbmRleFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgY29tcG9zZShhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGJsb2dSZWR1Y2VyIGZyb20gJy4uL2Jsb2cvcmVkdWNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgYmxvZ3M6IGJsb2dSZWR1Y2VyXHJcbn0pICIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBibG9nczogW10sXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3Qgc2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJhbGxCbG9nc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYmxvZ3NSZXF1ZXN0ZWQ6IChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEubG9hZGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYmxvZ3NGYWlsZWQ6IChkYXRhLCBhY3Rpb24pID0+IHtcclxuICAgICAgZGF0YS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRhdGEuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBibG9nc1JlY2lldmVkOiAoZGF0YSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGRhdGEubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkYXRhLmJsb2dzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYmxvZ3NSZXF1ZXN0ZWQsIGJsb2dzRmFpbGVkLCBibG9nc1JlY2lldmVkIH0gPSBzbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpY2UucmVkdWNlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=