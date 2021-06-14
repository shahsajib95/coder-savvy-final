(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./components/NavData.js






const NavData = () => {
  const router = (0,router_namespaceObject.useRouter)();

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
  } = (0,external_react_.useState)(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Navbar, {
      light: true,
      expand: "md",
      className: "p-2",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.NavbarBrand, {
          href: "/",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "codersavvy.png",
            width: "50",
            alt: "CoderSavvy"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "CoderSavvy"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavbarToggler, {
          onClick: toggle
        }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Collapse, {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
            className: "ms-auto",
            navbar: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                href: "/components/",
                children: "Home"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                href: "https://github.com/reactstrap/reactstrap",
                children: "Blog"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.UncontrolledDropdown, {
              nav: true,
              inNavbar: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownToggle, {
                nav: true,
                caret: true,
                children: "Options"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.DropdownMenu, {
                right: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                  children: "Option 1"
                }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                  children: "Option 2"
                }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                  divider: true
                }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                  children: "Reset"
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var components_NavData = (NavData);
;// CONCATENATED MODULE: ./components/Layout.js





function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_NavData, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: children
    })]
  });
}

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./store/blog/reducer.js + 1 modules
var reducer = __webpack_require__(5852);
;// CONCATENATED MODULE: ./store/Reducers/index.js


/* harmony default export */ var Reducers = ((0,external_redux_namespaceObject.combineReducers)({
  blogs: reducer/* default */.ZP
}));
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const store = (0,external_redux_namespaceObject.createStore)(Reducers, (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 5852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "JX": function() { return /* binding */ blogsFailed; },
  "Ai": function() { return /* binding */ blogsRecieved; },
  "h7": function() { return /* binding */ blogsRequested; },
  "ZP": function() { return /* binding */ reducer; }
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
var toolkit_namespaceObject = require("@reduxjs/toolkit");;
;// CONCATENATED MODULE: ./store/blog/reducer.js

const initialState = {
  blogs: [],
  loading: false,
  error: false
};
const slice = (0,toolkit_namespaceObject.createSlice)({
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
/* harmony default export */ var reducer = (slice.reducer);

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 6099:
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5436));
module.exports = __webpack_exports__;

})();