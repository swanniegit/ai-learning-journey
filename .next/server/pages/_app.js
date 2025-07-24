/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * This custom App component wraps all pages. It manages the current theme and\n * exposes a simple toggle function via React context. The theme state is\n * persisted to localStorage so users keep their preferred colour scheme on\n * subsequent visits.\n */ function MyApp({ Component, pageProps }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Load the stored theme on mount. Default to light if none exists.\n        const stored =  false ? 0 : null;\n        if (stored) {\n            setTheme(stored);\n            document.documentElement.dataset.theme = stored;\n        } else {\n            document.documentElement.dataset.theme = \"light\";\n        }\n    }, []);\n    function toggleTheme() {\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n        if (false) {}\n        document.documentElement.dataset.theme = newTheme;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        theme: theme,\n        toggleTheme: toggleTheme\n    }, void 0, false, {\n        fileName: \"C:\\\\github\\\\ai-learning-journey\\\\pages\\\\_app.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ2E7QUFFNUM7Ozs7O0NBS0MsR0FDYyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3BELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixtRUFBbUU7UUFDbkUsTUFBTU8sU0FBUyxNQUFrQixHQUFjQyxDQUFxQixHQUFXO1FBQy9FLElBQUlELFFBQVE7WUFDVkQsU0FBU0M7WUFDVEcsU0FBU0MsZUFBZSxDQUFDQyxPQUFPLENBQUNQLEtBQUssR0FBR0U7UUFDM0MsT0FBTztZQUNMRyxTQUFTQyxlQUFlLENBQUNDLE9BQU8sQ0FBQ1AsS0FBSyxHQUFHO1FBQzNDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsU0FBU1E7UUFDUCxNQUFNQyxXQUFXVCxVQUFVLFVBQVUsU0FBUztRQUM5Q0MsU0FBU1E7UUFDVCxJQUFJLEtBQWtCLEVBQWEsRUFFbEM7UUFDREosU0FBU0MsZUFBZSxDQUFDQyxPQUFPLENBQUNQLEtBQUssR0FBR1M7SUFDM0M7SUFFQSxxQkFBTyw4REFBQ1g7UUFBVyxHQUFHQyxTQUFTO1FBQUVDLE9BQU9BO1FBQU9RLGFBQWFBOzs7Ozs7QUFDOUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1sZWFybmluZy1uZXh0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogVGhpcyBjdXN0b20gQXBwIGNvbXBvbmVudCB3cmFwcyBhbGwgcGFnZXMuIEl0IG1hbmFnZXMgdGhlIGN1cnJlbnQgdGhlbWUgYW5kXG4gKiBleHBvc2VzIGEgc2ltcGxlIHRvZ2dsZSBmdW5jdGlvbiB2aWEgUmVhY3QgY29udGV4dC4gVGhlIHRoZW1lIHN0YXRlIGlzXG4gKiBwZXJzaXN0ZWQgdG8gbG9jYWxTdG9yYWdlIHNvIHVzZXJzIGtlZXAgdGhlaXIgcHJlZmVycmVkIGNvbG91ciBzY2hlbWUgb25cbiAqIHN1YnNlcXVlbnQgdmlzaXRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIExvYWQgdGhlIHN0b3JlZCB0aGVtZSBvbiBtb3VudC4gRGVmYXVsdCB0byBsaWdodCBpZiBub25lIGV4aXN0cy5cbiAgICBjb25zdCBzdG9yZWQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpIDogbnVsbDtcbiAgICBpZiAoc3RvcmVkKSB7XG4gICAgICBzZXRUaGVtZShzdG9yZWQpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGhlbWUgPSBzdG9yZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lID0gJ2xpZ2h0JztcbiAgICB9XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICBzZXRUaGVtZShuZXdUaGVtZSk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBuZXdUaGVtZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lID0gbmV3VGhlbWU7XG4gIH1cblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB0aGVtZT17dGhlbWV9IHRvZ2dsZVRoZW1lPXt0b2dnbGVUaGVtZX0gLz47XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInNldFRoZW1lIiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZGF0YXNldCIsInRvZ2dsZVRoZW1lIiwibmV3VGhlbWUiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();