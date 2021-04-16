exports.ids = [0];
exports.modules = {

/***/ "./client/Diagram.tsx":
/*!****************************!*\
  !*** ./client/Diagram.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! beautiful-react-diagrams */ "beautiful-react-diagrams");
/* harmony import */ var beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var beautiful_react_diagrams_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! beautiful-react-diagrams/styles.css */ "./node_modules/beautiful-react-diagrams/styles.css");
/* harmony import */ var beautiful_react_diagrams_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(beautiful_react_diagrams_styles_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/lagz0ne/prisma-view/pkgs/server/client/Diagram.tsx";

 // the diagram model

const initialSchema = Object(beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_1__["createSchema"])({
  nodes: [{
    id: "node-1",
    content: "Node 1",
    coordinates: [250, 60]
  }, {
    id: "node-2",
    content: "Node 2",
    coordinates: [100, 200]
  }, {
    id: "node-3",
    content: "Node 3",
    coordinates: [250, 220]
  }, {
    id: "node-4",
    content: "Node 4",
    coordinates: [400, 200]
  }],
  links: [{
    input: "node-1",
    output: "node-2"
  }, {
    input: "node-1",
    output: "node-3"
  }, {
    input: "node-1",
    output: "node-4"
  }]
});

const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema, {
    onChange
  }] = Object(beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_1__["useSchema"])(initialSchema);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: "22.5rem"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_1___default.a, {
      schema: schema,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UncontrolledDiagram);

/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvRGlhZ3JhbS50c3giXSwibmFtZXMiOlsiaW5pdGlhbFNjaGVtYSIsImNyZWF0ZVNjaGVtYSIsIm5vZGVzIiwiaWQiLCJjb250ZW50IiwiY29vcmRpbmF0ZXMiLCJsaW5rcyIsImlucHV0Iiwib3V0cHV0IiwiVW5jb250cm9sbGVkRGlhZ3JhbSIsInNjaGVtYSIsIm9uQ2hhbmdlIiwidXNlU2NoZW1hIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsTUFBTUEsYUFBYSxHQUFHQyw2RUFBWSxDQUFDO0FBQ2pDQyxPQUFLLEVBQUUsQ0FDTDtBQUFFQyxNQUFFLEVBQUUsUUFBTjtBQUFnQkMsV0FBTyxFQUFFLFFBQXpCO0FBQW1DQyxlQUFXLEVBQUUsQ0FBQyxHQUFELEVBQU0sRUFBTjtBQUFoRCxHQURLLEVBRUw7QUFBRUYsTUFBRSxFQUFFLFFBQU47QUFBZ0JDLFdBQU8sRUFBRSxRQUF6QjtBQUFtQ0MsZUFBVyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU47QUFBaEQsR0FGSyxFQUdMO0FBQUVGLE1BQUUsRUFBRSxRQUFOO0FBQWdCQyxXQUFPLEVBQUUsUUFBekI7QUFBbUNDLGVBQVcsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOO0FBQWhELEdBSEssRUFJTDtBQUFFRixNQUFFLEVBQUUsUUFBTjtBQUFnQkMsV0FBTyxFQUFFLFFBQXpCO0FBQW1DQyxlQUFXLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTjtBQUFoRCxHQUpLLENBRDBCO0FBT2pDQyxPQUFLLEVBQUUsQ0FDTDtBQUFFQyxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsVUFBTSxFQUFFO0FBQTNCLEdBREssRUFFTDtBQUFFRCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsVUFBTSxFQUFFO0FBQTNCLEdBRkssRUFHTDtBQUFFRCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsVUFBTSxFQUFFO0FBQTNCLEdBSEs7QUFQMEIsQ0FBRCxDQUFsQzs7QUFjQSxNQUFNQyxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDO0FBQ0EsUUFBTSxDQUFDQyxNQUFELEVBQVM7QUFBRUM7QUFBRixHQUFULElBQXlCQywwRUFBUyxDQUFDWixhQUFELENBQXhDO0FBRUEsc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRWEsWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQVMsWUFBTSxFQUFFSCxNQUFqQjtBQUF5QixjQUFRLEVBQUVDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQVREOztBQVdlRixrRkFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhZ3JhbSwgeyBjcmVhdGVTY2hlbWEsIHVzZVNjaGVtYSB9IGZyb20gXCJiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXNcIjtcbmltcG9ydCBcImJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9zdHlsZXMuY3NzXCI7XG5cbi8vIHRoZSBkaWFncmFtIG1vZGVsXG5jb25zdCBpbml0aWFsU2NoZW1hID0gY3JlYXRlU2NoZW1hKHtcbiAgbm9kZXM6IFtcbiAgICB7IGlkOiBcIm5vZGUtMVwiLCBjb250ZW50OiBcIk5vZGUgMVwiLCBjb29yZGluYXRlczogWzI1MCwgNjBdIH0sXG4gICAgeyBpZDogXCJub2RlLTJcIiwgY29udGVudDogXCJOb2RlIDJcIiwgY29vcmRpbmF0ZXM6IFsxMDAsIDIwMF0gfSxcbiAgICB7IGlkOiBcIm5vZGUtM1wiLCBjb250ZW50OiBcIk5vZGUgM1wiLCBjb29yZGluYXRlczogWzI1MCwgMjIwXSB9LFxuICAgIHsgaWQ6IFwibm9kZS00XCIsIGNvbnRlbnQ6IFwiTm9kZSA0XCIsIGNvb3JkaW5hdGVzOiBbNDAwLCAyMDBdIH0sXG4gIF0sXG4gIGxpbmtzOiBbXG4gICAgeyBpbnB1dDogXCJub2RlLTFcIiwgb3V0cHV0OiBcIm5vZGUtMlwiIH0sXG4gICAgeyBpbnB1dDogXCJub2RlLTFcIiwgb3V0cHV0OiBcIm5vZGUtM1wiIH0sXG4gICAgeyBpbnB1dDogXCJub2RlLTFcIiwgb3V0cHV0OiBcIm5vZGUtNFwiIH0sXG4gIF0sXG59KTtcblxuY29uc3QgVW5jb250cm9sbGVkRGlhZ3JhbSA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIGRpYWdyYW1zIHNjaGVtYVxuICBjb25zdCBbc2NoZW1hLCB7IG9uQ2hhbmdlIH1dID0gdXNlU2NoZW1hKGluaXRpYWxTY2hlbWEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMjIuNXJlbVwiIH19PlxuICAgICAgPERpYWdyYW0gc2NoZW1hPXtzY2hlbWF9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVuY29udHJvbGxlZERpYWdyYW07XG4iXSwic291cmNlUm9vdCI6IiJ9