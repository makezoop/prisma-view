(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./client/Diagram.tsx":
/*!****************************!*\
  !*** ./client/Diagram.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_lagz0ne_prisma_view_pkgs_server_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! beautiful-react-diagrams */ "./node_modules/beautiful-react-diagrams/esm/index.js");
/* harmony import */ var beautiful_react_diagrams_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! beautiful-react-diagrams/styles.css */ "./node_modules/beautiful-react-diagrams/styles.css");
/* harmony import */ var beautiful_react_diagrams_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(beautiful_react_diagrams_styles_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/home/lagz0ne/prisma-view/pkgs/server/client/Diagram.tsx",
    _this = undefined,
    _s = $RefreshSig$();


 // the diagram model

var initialSchema = Object(beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_2__["createSchema"])({
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

var UncontrolledDiagram = function UncontrolledDiagram() {
  _s();

  // create diagrams schema
  var _useSchema = Object(beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_2__["useSchema"])(initialSchema),
      _useSchema2 = Object(_home_lagz0ne_prisma_view_pkgs_server_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSchema, 2),
      schema = _useSchema2[0],
      onChange = _useSchema2[1].onChange;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: "22.5rem"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_2__["default"], {
      schema: schema,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(UncontrolledDiagram, "Zq0rxzWuJTzNNGPu1c/318KlVeE=", false, function () {
  return [beautiful_react_diagrams__WEBPACK_IMPORTED_MODULE_2__["useSchema"]];
});

_c = UncontrolledDiagram;
/* harmony default export */ __webpack_exports__["default"] = (UncontrolledDiagram);

var _c;

$RefreshReg$(_c, "UncontrolledDiagram");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Context/DiagramContext.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Context/DiagramContext.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-diagrams version: 0.5.1 */


var DiagramContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  canvas: null,
  ports: null,
  nodes: null
});

/* harmony default export */ __webpack_exports__["default"] = (DiagramContext);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/Diagram.js":
/*!**********************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/Diagram.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DiagramCanvas_DiagramCanvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiagramCanvas/DiagramCanvas.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramCanvas/DiagramCanvas.js");
/* harmony import */ var _shared_Types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Types.js */ "./node_modules/beautiful-react-diagrams/esm/shared/Types.js");
/* harmony import */ var _NodesCanvas_NodesCanvas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodesCanvas/NodesCanvas.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/NodesCanvas/NodesCanvas.js");
/* harmony import */ var _LinksCanvas_LinksCanvas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinksCanvas/LinksCanvas.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/LinksCanvas.js");
/* beautiful-react-diagrams version: 0.5.1 */








var Diagram = function Diagram(props) {
  var schema = props.schema,
      onChange = props.onChange,
      rest = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["objectWithoutProperties"])(props, ["schema", "onChange"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["slicedToArray"])(_useState, 2),
      segment = _useState2[0],
      setSegment = _useState2[1];

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({}),
      portRefs = _useRef.current;

  var _useRef2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({}),
      nodeRefs = _useRef2.current;

  var onNodesChange = function onNodesChange(nextNodes) {
    if (onChange) {
      onChange({
        nodes: nextNodes
      });
    }
  };

  var onPortRegister = function onPortRegister(portId, portEl) {
    portRefs[portId] = portEl;
  };

  var onNodeRegister = function onNodeRegister(nodeId, nodeEl) {
    nodeRefs[nodeId] = nodeEl;
  };

  var onNodeRemove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nodeId, inputsPorts, outputsPorts) {
    delete nodeRefs[nodeId];
    inputsPorts.forEach(function (input) {
      return delete portRefs[input];
    });
    outputsPorts.forEach(function (output) {
      return delete portRefs[output];
    });
  }, []);
  var onDragNewSegment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (portId, from, to, alignment) {
    setSegment({
      id: "segment-".concat(portId),
      from: from,
      to: to,
      alignment: alignment
    });
  }, []);
  var onSegmentFail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setSegment(undefined);
  }, []);

  var onSegmentConnect = function onSegmentConnect(input, output) {
    var nextLinks = [].concat(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["toConsumableArray"])(schema.links || []), [{
      input: input,
      output: output
    }]);

    if (onChange) {
      onChange({
        links: nextLinks
      });
    }

    setSegment(undefined);
  };

  var onLinkDelete = function onLinkDelete(nextLinks) {
    if (onChange) {
      onChange({
        links: nextLinks
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DiagramCanvas_DiagramCanvas_js__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({
    portRefs: portRefs,
    nodeRefs: nodeRefs
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NodesCanvas_NodesCanvas_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    nodes: schema.nodes,
    onChange: onNodesChange,
    onNodeRegister: onNodeRegister,
    onPortRegister: onPortRegister,
    onNodeRemove: onNodeRemove,
    onDragNewSegment: onDragNewSegment,
    onSegmentFail: onSegmentFail,
    onSegmentConnect: onSegmentConnect
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinksCanvas_LinksCanvas_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    nodes: schema.nodes,
    links: schema.links,
    segment: segment,
    onChange: onLinkDelete
  }));
};

Diagram.propTypes = {
  schema: _shared_Types_js__WEBPACK_IMPORTED_MODULE_4__["SchemaType"],
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Diagram.defaultProps = {
  schema: {
    nodes: [],
    links: []
  },
  onChange: undefined
};
var Diagram$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Diagram);

/* harmony default export */ __webpack_exports__["default"] = (Diagram$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramCanvas/DiagramCanvas.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramCanvas/DiagramCanvas.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/DiagramContext.js */ "./node_modules/beautiful-react-diagrams/esm/Context/DiagramContext.js");
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! beautiful-react-hooks */ "./node_modules/beautiful-react-hooks/esm/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* beautiful-react-diagrams version: 0.5.1 */








var DiagramCanvas = function DiagramCanvas(props) {
  var children = props.children,
      portRefs = props.portRefs,
      nodeRefs = props.nodeRefs,
      className = props.className,
      rest = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__["objectWithoutProperties"])(props, ["children", "portRefs", "nodeRefs", "className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__["slicedToArray"])(_useState, 2),
      bbox = _useState2[0],
      setBoundingBox = _useState2[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var classList = classnames__WEBPACK_IMPORTED_MODULE_6___default()('bi bi-diagram', className);

  var calculateBBox = function calculateBBox(el) {
    if (el) {
      var nextBBox = el.getBoundingClientRect();

      if (!lodash_isequal__WEBPACK_IMPORTED_MODULE_5___default()(nextBBox, bbox)) {
        setBoundingBox(nextBBox);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return calculateBBox(canvasRef.current);
  }, [canvasRef.current]);
  Object(beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useWindowScroll"])(function () {
    return calculateBBox(canvasRef.current);
  });
  Object(beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useWindowResize"])(function () {
    return calculateBBox(canvasRef.current);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__["extends"])({
    className: classList,
    ref: canvasRef
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bi-diagram-canvas"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      canvas: bbox,
      ports: portRefs,
      nodes: nodeRefs,
      _nodes: {}
    }
  }, children)));
};

DiagramCanvas.propTypes = {
  portRefs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({}),
  nodeRefs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({}),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
DiagramCanvas.defaultProps = {
  portRefs: {},
  nodeRefs: {},
  className: ''
};
var DiagramCanvas$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DiagramCanvas);

/* harmony default export */ __webpack_exports__["default"] = (DiagramCanvas$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/DiagramNode.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/DiagramNode.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Types.js */ "./node_modules/beautiful-react-diagrams/esm/shared/Types.js");
/* harmony import */ var _getDiagramNodeStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDiagramNodeStyle.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/getDiagramNodeStyle.js");
/* harmony import */ var _shared_internal_hooks_useContextRegistration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/internal_hooks/useContextRegistration.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useContextRegistration.js");
/* harmony import */ var _shared_internal_hooks_useDrag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/internal_hooks/useDrag.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useDrag.js");
/* harmony import */ var _portGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portGenerator.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/portGenerator.js");
/* harmony import */ var _shared_internal_hooks_useNodeUnregistration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/internal_hooks/useNodeUnregistration.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useNodeUnregistration.js");
/* beautiful-react-diagrams version: 0.5.1 */











var DiagramNode = function DiagramNode(props) {
  var id = props.id,
      content = props.content,
      coordinates = props.coordinates,
      type = props.type,
      inputs = props.inputs,
      outputs = props.outputs,
      data = props.data,
      onPositionChange = props.onPositionChange,
      onPortRegister = props.onPortRegister,
      onNodeRemove = props.onNodeRemove,
      onDragNewSegment = props.onDragNewSegment,
      onMount = props.onMount,
      onSegmentFail = props.onSegmentFail,
      onSegmentConnect = props.onSegmentConnect,
      render = props.render,
      className = props.className,
      disableDrag = props.disableDrag;
  var registerPort = Object(_shared_internal_hooks_useContextRegistration_js__WEBPACK_IMPORTED_MODULE_6__["usePortRegistration"])(inputs, outputs, onPortRegister);

  var _useDrag = Object(_shared_internal_hooks_useDrag_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    throttleBy: 14
  }),
      ref = _useDrag.ref,
      onDragStart = _useDrag.onDragStart,
      onDrag = _useDrag.onDrag;

  var dragStartPoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(coordinates);

  if (!disableDrag) {
    onDragStart(function () {
      dragStartPoint.current = coordinates;
    });
    onDrag(function (event, info) {
      if (onPositionChange) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        var nextCoords = [dragStartPoint.current[0] - info.offset[0], dragStartPoint.current[1] - info.offset[1]];
        onPositionChange(id, nextCoords);
      }
    });
  }

  Object(_shared_internal_hooks_useNodeUnregistration_js__WEBPACK_IMPORTED_MODULE_9__["default"])(onNodeRemove, inputs, outputs, id);
  Object(_shared_internal_hooks_useContextRegistration_js__WEBPACK_IMPORTED_MODULE_6__["useNodeRegistration"])(ref, onMount, id);
  var classList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return classnames__WEBPACK_IMPORTED_MODULE_3___default()('bi bi-diagram-node', Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["defineProperty"])({}, "bi-diagram-node-".concat(type), !!type && !render), className);
  }, [type, className]);
  var options = {
    registerPort: registerPort,
    onDragNewSegment: onDragNewSegment,
    onSegmentFail: onSegmentFail,
    onSegmentConnect: onSegmentConnect
  };
  var InputPorts = inputs.map(Object(_portGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(options, 'input'));
  var OutputPorts = outputs.map(Object(_portGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(options, 'output'));
  var customRenderProps = {
    id: id,
    render: render,
    content: content,
    type: type,
    inputs: InputPorts,
    outputs: OutputPorts,
    data: data,
    className: className
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classList,
    ref: ref,
    style: Object(_getDiagramNodeStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(coordinates, disableDrag)
  }, render && typeof render === 'function' && render(customRenderProps), !render && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, content, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bi-port-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bi-input-ports"
  }, InputPorts), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bi-output-ports"
  }, OutputPorts))));
};

DiagramNode.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]).isRequired,
  coordinates: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number).isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
  inputs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(_shared_Types_js__WEBPACK_IMPORTED_MODULE_4__["PortType"]),
  outputs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(_shared_Types_js__WEBPACK_IMPORTED_MODULE_4__["PortType"]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['default']),
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}),
  render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onPositionChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onPortRegister: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onNodeRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onDragNewSegment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSegmentFail: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSegmentConnect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  disableDrag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
DiagramNode.defaultProps = {
  type: 'default',
  content: '',
  inputs: [],
  outputs: [],
  data: {},
  onPositionChange: undefined,
  render: undefined,
  onMount: undefined,
  onPortRegister: undefined,
  onNodeRemove: undefined,
  onDragNewSegment: undefined,
  onSegmentFail: undefined,
  onSegmentConnect: undefined,
  className: '',
  disableDrag: false
};
var DiagramNode$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DiagramNode);

/* harmony default export */ __webpack_exports__["default"] = (DiagramNode$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/getDiagramNodeStyle.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/getDiagramNodeStyle.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-diagrams version: 0.5.1 */
var getDiagramNodeStyle = function getDiagramNodeStyle(coordinates, disableDrag) {
  return {
    left: coordinates[0],
    top: coordinates[1],
    cursor: disableDrag ? undefined : 'move'
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getDiagramNodeStyle);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/portGenerator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/portGenerator.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var _Port_Port_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Port/Port.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/Port/Port.js");
/* beautiful-react-diagrams version: 0.5.1 */




var portGenerator = function portGenerator(_ref, type) {
  var registerPort = _ref.registerPort,
      onDragNewSegment = _ref.onDragNewSegment,
      onSegmentFail = _ref.onSegmentFail,
      onSegmentConnect = _ref.onSegmentConnect;
  return function (port) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Port_Port_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, port, {
      onMount: registerPort,
      onDragNewSegment: onDragNewSegment,
      onSegmentFail: onSegmentFail,
      onSegmentConnect: onSegmentConnect,
      type: type,
      key: port.id
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (portGenerator);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/Link/Link.js":
/*!************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/Link/Link.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Types.js */ "./node_modules/beautiful-react-diagrams/esm/shared/Types.js");
/* harmony import */ var _shared_internal_hooks_useCanvas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/internal_hooks/useCanvas.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useCanvas.js");
/* harmony import */ var _shared_internal_hooks_usePortRefs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/internal_hooks/usePortRefs.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/usePortRefs.js");
/* harmony import */ var _getEntityCoordinates_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getEntityCoordinates.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/Link/getEntityCoordinates.js");
/* harmony import */ var _shared_functions_makeSvgPath_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/functions/makeSvgPath.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/makeSvgPath.js");
/* harmony import */ var _shared_functions_getPathMidpoint_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/functions/getPathMidpoint.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getPathMidpoint.js");
/* harmony import */ var _shared_internal_hooks_useNodeRefs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/internal_hooks/useNodeRefs.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useNodeRefs.js");
/* harmony import */ var _LinkLabel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LinkLabel.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/Link/LinkLabel.js");
/* beautiful-react-diagrams version: 0.5.1 */













var useContextRefs = function useContextRefs() {
  var canvas = Object(_shared_internal_hooks_useCanvas_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var portRefs = Object(_shared_internal_hooks_usePortRefs_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var nodeRefs = Object(_shared_internal_hooks_useNodeRefs_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return {
    canvas: canvas,
    nodeRefs: nodeRefs,
    portRefs: portRefs
  };
};

var Link = function Link(props) {
  var input = props.input,
      output = props.output,
      link = props.link,
      onDelete = props.onDelete;
  var pathRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["slicedToArray"])(_useState, 2),
      labelPosition = _useState2[0],
      setLabelPosition = _useState2[1];

  var _useContextRefs = useContextRefs(),
      canvas = _useContextRefs.canvas,
      portRefs = _useContextRefs.portRefs,
      nodeRefs = _useContextRefs.nodeRefs;

  var inputPoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_getEntityCoordinates_js__WEBPACK_IMPORTED_MODULE_7__["default"])(input, portRefs, nodeRefs, canvas);
  }, [input, portRefs, nodeRefs, canvas]);
  var classList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return classnames__WEBPACK_IMPORTED_MODULE_3___default()('bi-diagram-link', {
      'readonly-link': link.readonly
    }, link.className);
  }, [link.readonly, link.className]);
  var outputPoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_getEntityCoordinates_js__WEBPACK_IMPORTED_MODULE_7__["default"])(output, portRefs, nodeRefs, canvas);
  }, [output, portRefs, nodeRefs, canvas]);
  var pathOptions = {
    type: input.type === 'port' || output.type === 'port' ? 'bezier' : 'curve',
    inputAlignment: input.entity.alignment || null,
    outputAlignment: output.entity.alignment || null
  };
  var path = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_shared_functions_makeSvgPath_js__WEBPACK_IMPORTED_MODULE_8__["default"])(inputPoint, outputPoint, pathOptions);
  }, [inputPoint, outputPoint]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (link.label && inputPoint && outputPoint && pathRef.current) {
      var pos = Object(_shared_functions_getPathMidpoint_js__WEBPACK_IMPORTED_MODULE_9__["default"])(pathRef.current);
      setLabelPosition(pos);
    }
  }, [pathRef.current, link.label, inputPoint, outputPoint]);
  var onDoubleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (onDelete && !link.readonly) {
      onDelete(link);
    }
  }, [link.readonly, onDelete]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: classList
  }, !link.readonly && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: path,
    className: "bi-link-ghost",
    onDoubleClick: onDoubleClick
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: path,
    ref: pathRef,
    className: "bi-link-path",
    onDoubleClick: onDoubleClick
  }), link.label && labelPosition && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkLabel_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    position: labelPosition,
    label: link.label
  }));
};

var InvolvedEntity = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.exact({
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['node', 'port']),
  entity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([_shared_Types_js__WEBPACK_IMPORTED_MODULE_4__["PortType"], _shared_Types_js__WEBPACK_IMPORTED_MODULE_4__["NodeType"]])
});
Link.propTypes = {
  link: _shared_Types_js__WEBPACK_IMPORTED_MODULE_4__["LinkType"].isRequired,
  input: InvolvedEntity.isRequired,
  output: InvolvedEntity.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Link.defaultProps = {
  onDelete: undefined
};
var DiagramLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Link);

/* harmony default export */ __webpack_exports__["default"] = (DiagramLink);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/Link/LinkLabel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/Link/LinkLabel.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-diagrams version: 0.5.1 */



var LinkLabel = function LinkLabel(_ref) {
  var label = _ref.label,
      position = _ref.position;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("foreignObject", {
    x: position[0],
    y: position[1]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bi-diagram-link-label"
  }, label));
};

LinkLabel.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number).isRequired
};
var LinkLabel$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LinkLabel);

/* harmony default export */ __webpack_exports__["default"] = (LinkLabel$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/Link/getEntityCoordinates.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/Link/getEntityCoordinates.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_functions_getRelativePoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/functions/getRelativePoint.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getRelativePoint.js");
/* beautiful-react-diagrams version: 0.5.1 */


var getEntityCoordinates = function getEntityCoordinates(entity, portRefs, nodeRefs, canvas) {
  if (entity && entity.type === 'node' && nodeRefs[entity.entity.id]) {
    var nodeEl = nodeRefs[entity.entity.id];
    var bbox = nodeEl.getBoundingClientRect();
    return [entity.entity.coordinates[0] + bbox.width / 2, entity.entity.coordinates[1] + bbox.height / 2];
  }

  if (portRefs && portRefs[entity.entity.id]) {
    var portEl = portRefs[entity.entity.id];

    var _bbox = portEl.getBoundingClientRect();

    return Object(_shared_functions_getRelativePoint_js__WEBPACK_IMPORTED_MODULE_0__["default"])([_bbox.x + _bbox.width / 2, _bbox.y + _bbox.height / 2], [canvas.x, canvas.y]);
  }

  return undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (getEntityCoordinates);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/LinksCanvas.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/LinksCanvas.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Types.js */ "./node_modules/beautiful-react-diagrams/esm/shared/Types.js");
/* harmony import */ var _Link_Link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link/Link.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/Link/Link.js");
/* harmony import */ var _Segment_Segment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Segment/Segment.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/Segment/Segment.js");
/* harmony import */ var _findInvolvedEntity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./findInvolvedEntity.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/findInvolvedEntity.js");
/* harmony import */ var _removeLinkFromArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removeLinkFromArray.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/removeLinkFromArray.js");
/* beautiful-react-diagrams version: 0.5.1 */








var LinksCanvas = function LinksCanvas(props) {
  var nodes = props.nodes,
      segment = props.segment,
      onChange = props.onChange,
      links = props.links;
  var removeFromLinksArray = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (link) {
    if (links.length > 0 && onChange) {
      var nextLinks = Object(_removeLinkFromArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(link, links);
      onChange(nextLinks);
    }
  }, [links, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "bi bi-link-canvas-layer"
  }, links && links.length > 0 && links.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link_Link_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      link: link,
      input: Object(_findInvolvedEntity_js__WEBPACK_IMPORTED_MODULE_5__["default"])(nodes, link.input),
      output: Object(_findInvolvedEntity_js__WEBPACK_IMPORTED_MODULE_5__["default"])(nodes, link.output),
      onDelete: removeFromLinksArray,
      key: "".concat(link.input, "-").concat(link.output)
    });
  }), segment && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Segment_Segment_js__WEBPACK_IMPORTED_MODULE_4__["default"], segment));
};

LinksCanvas.propTypes = {
  nodes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(_shared_Types_js__WEBPACK_IMPORTED_MODULE_2__["NodeType"]),
  links: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(_shared_Types_js__WEBPACK_IMPORTED_MODULE_2__["LinkType"]),
  segment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.exact({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
    to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
    alignment: _shared_Types_js__WEBPACK_IMPORTED_MODULE_2__["PortAlignment"]
  }),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
LinksCanvas.defaultProps = {
  nodes: [],
  links: [],
  segment: undefined,
  onChange: undefined
};
var LinksCanvas$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LinksCanvas);

/* harmony default export */ __webpack_exports__["default"] = (LinksCanvas$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/findInvolvedEntity.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/findInvolvedEntity.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* beautiful-react-diagrams version: 0.5.1 */


var findInvolvedEntity = function findInvolvedEntity(nodes, entityId) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'node';
  if (!entityId || !nodes || nodes.length === 0) return undefined;
  var result;
  var index = 0;

  while (index < nodes.length && !result) {
    var node = nodes[index];

    if (node.id === entityId) {
      result = {
        type: type,
        entity: Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, node)
      };
    } else {
      result = findInvolvedEntity(node.inputs, entityId, 'port') || findInvolvedEntity(node.outputs, entityId, 'port');
    }

    index += 1;
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (findInvolvedEntity);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/removeLinkFromArray.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/LinksCanvas/removeLinkFromArray.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-diagrams version: 0.5.1 */


var removeLinkFromArray = function removeLinkFromArray(link, links) {
  return links.filter(function (item) {
    return !lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default()(item, link);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (removeLinkFromArray);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/NodesCanvas/NodesCanvas.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/NodesCanvas/NodesCanvas.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Types.js */ "./node_modules/beautiful-react-diagrams/esm/shared/Types.js");
/* harmony import */ var _DiagramNode_DiagramNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DiagramNode/DiagramNode.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/DiagramNode/DiagramNode.js");
/* harmony import */ var _updateNodeCoordinates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateNodeCoordinates.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/NodesCanvas/updateNodeCoordinates.js");
/* beautiful-react-diagrams version: 0.5.1 */







var NodesCanvas = function NodesCanvas(props) {
  var nodes = props.nodes,
      onPortRegister = props.onPortRegister,
      onNodeRegister = props.onNodeRegister,
      onNodeRemove = props.onNodeRemove,
      onDragNewSegment = props.onDragNewSegment,
      onSegmentFail = props.onSegmentFail,
      onSegmentConnect = props.onSegmentConnect,
      onChange = props.onChange;

  var onNodePositionChange = function onNodePositionChange(nodeId, newCoordinates) {
    if (onChange) {
      var nextNodes = Object(_updateNodeCoordinates_js__WEBPACK_IMPORTED_MODULE_5__["default"])(nodeId, newCoordinates, nodes);
      onChange(nextNodes);
    }
  };

  return nodes && nodes.length > 0 && nodes.map(function (_ref) {
    var data = _ref.data,
        node = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["objectWithoutProperties"])(_ref, ["data"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DiagramNode_DiagramNode_js__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, node, {
      data: data,
      onPositionChange: onNodePositionChange,
      onPortRegister: onPortRegister,
      onNodeRemove: onNodeRemove,
      onDragNewSegment: onDragNewSegment,
      onSegmentFail: onSegmentFail,
      onSegmentConnect: onSegmentConnect,
      onMount: onNodeRegister,
      key: node.id
    }));
  });
};

NodesCanvas.propTypes = {
  nodes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(_shared_Types_js__WEBPACK_IMPORTED_MODULE_3__["NodeType"]),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onNodeRegister: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onPortRegister: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onNodeRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onDragNewSegment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSegmentFail: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSegmentConnect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
NodesCanvas.defaultProps = {
  nodes: [],
  onChange: undefined,
  onNodeRegister: undefined,
  onPortRegister: undefined,
  onNodeRemove: undefined,
  onDragNewSegment: undefined,
  onSegmentFail: undefined,
  onSegmentConnect: undefined
};
var NodesCanvas$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NodesCanvas);

/* harmony default export */ __webpack_exports__["default"] = (NodesCanvas$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/NodesCanvas/updateNodeCoordinates.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/NodesCanvas/updateNodeCoordinates.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_findindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.findindex */ "./node_modules/lodash.findindex/index.js");
/* harmony import */ var lodash_findindex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_findindex__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-diagrams version: 0.5.1 */


var updateNodeCoordinates = function updateNodeCoordinates(nodeId, coordinates, nodes) {
  var index = lodash_findindex__WEBPACK_IMPORTED_MODULE_0___default()(nodes, ['id', nodeId]);

  if (index > -1 && !nodes[index].disableDrag) {
    nodes[index].coordinates = coordinates;
  }

  return nodes;
};

/* harmony default export */ __webpack_exports__["default"] = (updateNodeCoordinates);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/Port/Port.js":
/*!************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/Port/Port.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_internal_hooks_useDrag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/internal_hooks/useDrag.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useDrag.js");
/* harmony import */ var _shared_internal_hooks_useCanvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/internal_hooks/useCanvas.js */ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useCanvas.js");
/* harmony import */ var _shared_functions_getRelativePoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/functions/getRelativePoint.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getRelativePoint.js");
/* beautiful-react-diagrams version: 0.5.1 */







var Port = function Port(props) {
  var id = props.id,
      canLink = props.canLink,
      alignment = props.alignment,
      onDragNewSegment = props.onDragNewSegment,
      onSegmentFail = props.onSegmentFail,
      onSegmentConnect = props.onSegmentConnect,
      onMount = props.onMount,
      type = props.type,
      rest = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["objectWithoutProperties"])(props, ["id", "canLink", "alignment", "onDragNewSegment", "onSegmentFail", "onSegmentConnect", "onMount", "type"]);

  var canvas = Object(_shared_internal_hooks_useCanvas_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useDrag = Object(_shared_internal_hooks_useDrag_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      ref = _useDrag.ref,
      onDrag = _useDrag.onDrag,
      onDragEnd = _useDrag.onDragEnd;

  onDrag(function (event, info) {
    if (onDragNewSegment) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      var from = Object(_shared_functions_getRelativePoint_js__WEBPACK_IMPORTED_MODULE_5__["default"])(info.start, [canvas.x, canvas.y]);
      var to = Object(_shared_functions_getRelativePoint_js__WEBPACK_IMPORTED_MODULE_5__["default"])([event.clientX, event.clientY], [canvas.x, canvas.y]);
      onDragNewSegment(id, from, to, alignment);
    }
  });
  onDragEnd(function (event) {
    var targetPort = event.target.getAttribute('data-port-id');

    if (targetPort && event.target !== ref.current && canLink(id, targetPort, type) && onSegmentConnect) {
      var args = type === 'input' ? [id, targetPort, type] : [targetPort, id, type];
      onSegmentConnect.apply(void 0, args);
      return;
    }

    onSegmentFail && onSegmentFail(id, type);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (ref.current && onMount) {
      onMount(id, ref.current);
    }
  }, [ref.current]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({
    className: "bi bi-diagram-port",
    "data-port-id": id,
    ref: ref
  }, rest));
};

Port.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.symbol]).isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['input', 'output']).isRequired,
  onDragNewSegment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSegmentFail: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSegmentConnect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  canLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  alignment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['right', 'left', 'top', 'bottom'])
};
Port.defaultProps = {
  onDragNewSegment: undefined,
  onSegmentFail: undefined,
  onSegmentConnect: undefined,
  canLink: function canLink() {
    return true;
  },
  onMount: undefined,
  alignment: undefined
};
var Port$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Port);

/* harmony default export */ __webpack_exports__["default"] = (Port$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/Diagram/Segment/Segment.js":
/*!******************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/Diagram/Segment/Segment.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Types.js */ "./node_modules/beautiful-react-diagrams/esm/shared/Types.js");
/* harmony import */ var _shared_functions_makeSvgPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/functions/makeSvgPath.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/makeSvgPath.js");
/* beautiful-react-diagrams version: 0.5.1 */





var Segment = function Segment(props) {
  var from = props.from,
      to = props.to,
      alignment = props.alignment;
  var pathOptions = {
    type: 'bezier',
    inputAlignment: alignment
  };
  var path = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_shared_functions_makeSvgPath_js__WEBPACK_IMPORTED_MODULE_3__["default"])(from, to, pathOptions);
  }, [from, to, alignment]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "bi-diagram-segment"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: path
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    r: "6.5",
    cx: to[0],
    cy: to[1]
  }));
};

Segment.propTypes = {
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number).isRequired,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number).isRequired,
  alignment: _shared_Types_js__WEBPACK_IMPORTED_MODULE_2__["PortAlignment"]
};
Segment.defaultProps = {
  alignment: undefined
};
var Segment$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Segment);

/* harmony default export */ __webpack_exports__["default"] = (Segment$1);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js ***!
  \*****************************************************************************************/
/*! exports provided: arrayLikeToArray, arrayWithHoles, arrayWithoutHoles, assertThisInitialized, classCallCheck, construct, createSuper, defineProperty, extends, getPrototypeOf, inherits, isNativeFunction, isNativeReflectConstruct, iterableToArray, iterableToArrayLimit, nonIterableRest, nonIterableSpread, objectSpread2, objectWithoutProperties, objectWithoutPropertiesLoose, possibleConstructorReturn, setPrototypeOf, slicedToArray, toConsumableArray, unsupportedIterableToArray, wrapNativeSuper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLikeToArray", function() { return _arrayLikeToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayWithHoles", function() { return _arrayWithHoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayWithoutHoles", function() { return _arrayWithoutHoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertThisInitialized", function() { return _assertThisInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classCallCheck", function() { return _classCallCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "construct", function() { return _construct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSuper", function() { return _createSuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extends", function() { return _extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrototypeOf", function() { return _getPrototypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherits", function() { return _inherits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNativeFunction", function() { return _isNativeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNativeReflectConstruct", function() { return _isNativeReflectConstruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterableToArray", function() { return _iterableToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterableToArrayLimit", function() { return _iterableToArrayLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonIterableRest", function() { return _nonIterableRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonIterableSpread", function() { return _nonIterableSpread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSpread2", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectWithoutProperties", function() { return _objectWithoutProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectWithoutPropertiesLoose", function() { return _objectWithoutPropertiesLoose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "possibleConstructorReturn", function() { return _possibleConstructorReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrototypeOf", function() { return _setPrototypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slicedToArray", function() { return _slicedToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toConsumableArray", function() { return _toConsumableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsupportedIterableToArray", function() { return _unsupportedIterableToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapNativeSuper", function() { return _wrapNativeSuper; });
/* beautiful-react-diagrams version: 0.5.1 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/actionTypes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/actionTypes.js ***!
  \**********************************************************************************/
/*! exports provided: ON_CHANGE, ON_CONNECT, ON_NODE_ADD, ON_NODE_REMOVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CHANGE", function() { return ON_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_CONNECT", function() { return ON_CONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NODE_ADD", function() { return ON_NODE_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NODE_REMOVE", function() { return ON_NODE_REMOVE; });
/* beautiful-react-diagrams version: 0.5.1 */
var ON_CHANGE = 'bi-diagram/useSchema/change';
var ON_NODE_ADD = 'bi-diagram/useSchema/node/add';
var ON_NODE_REMOVE = 'bi-diagram/useSchema/node/remove';
var ON_CONNECT = 'bi-diagram/useSchema/connect';




/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/schemaReducer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/schemaReducer.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_functions_getNodePortsId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/functions/getNodePortsId.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getNodePortsId.js");
/* harmony import */ var lodash_findindex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.findindex */ "./node_modules/lodash.findindex/index.js");
/* harmony import */ var lodash_findindex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_findindex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/actionTypes.js");
/* beautiful-react-diagrams version: 0.5.1 */




var schemaReducer = function schemaReducer(state, action) {
  switch (action.type) {
    case _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_CHANGE"]:
      return {
        nodes: action.payload.nodes || state.nodes || [],
        links: action.payload.links || state.links || []
      };

    case _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_NODE_ADD"]:
      if (state.nodes) {
        state.nodes.push(action.payload.node);
      }

      return {
        nodes: state.nodes || [],
        links: state.links || []
      };

    case _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_NODE_REMOVE"]:
      {
        var nextLinks = state.links || [];

        if (state.nodes) {
          var index = lodash_findindex__WEBPACK_IMPORTED_MODULE_1___default()(state.nodes, ['id', action.payload.nodeId]);
          var inputPorts = Object(_shared_functions_getNodePortsId_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.nodes[index], 'inputs');
          var outputPorts = Object(_shared_functions_getNodePortsId_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.nodes[index], 'outputs');
          nextLinks = nextLinks.filter(function (link) {
            return !inputPorts.includes(link.input) && !outputPorts.includes(link.output);
          });
          state.nodes.splice(index, 1);
        }

        return {
          nodes: state.nodes || [],
          links: nextLinks
        };
      }

    case _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_CONNECT"]:
      if (state.links) {
        state.links.push(action.payload.link);
      }

      return {
        nodes: state.nodes || [],
        links: state.links || []
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (schemaReducer);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/useSchema.js":
/*!********************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/useSchema.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/actionTypes.js");
/* harmony import */ var _shared_functions_ensureNodeId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/functions/ensureNodeId.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/ensureNodeId.js");
/* harmony import */ var _schemaReducer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemaReducer.js */ "./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/schemaReducer.js");
/* beautiful-react-diagrams version: 0.5.1 */






var initialState = {
  nodes: [],
  links: []
};

var useSchema = function useSchema() {
  var initialSchema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_schemaReducer_js__WEBPACK_IMPORTED_MODULE_4__["default"], initialSchema),
      _useReducer2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["slicedToArray"])(_useReducer, 2),
      schema = _useReducer2[0],
      dispatch = _useReducer2[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref) {
    var nodes = _ref.nodes,
        links = _ref.links;
    return dispatch({
      type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_CHANGE"],
      payload: {
        nodes: nodes,
        links: links
      }
    });
  }, []);
  var addNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
    return dispatch({
      type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_NODE_ADD"],
      payload: {
        node: Object(_shared_functions_ensureNodeId_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node)
      }
    });
  }, []);
  var removeNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
    return dispatch({
      type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_NODE_REMOVE"],
      payload: {
        nodeId: node.id
      }
    });
  }, []);
  var connect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (input, output) {
    return dispatch({
      type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_2__["ON_CONNECT"],
      payload: {
        link: {
          input: input,
          output: output
        }
      }
    });
  }, []);
  return [schema, Object.freeze({
    onChange: onChange,
    addNode: addNode,
    removeNode: removeNode,
    connect: connect
  })];
};

/* harmony default export */ __webpack_exports__["default"] = (useSchema);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/index.js ***!
  \************************************************************/
/*! exports provided: Diagram, default, useSchema, validateLink, validateLinks, validateNode, validateNodes, validatePort, validateSchema, createSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Diagram_Diagram_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Diagram/Diagram.js */ "./node_modules/beautiful-react-diagrams/esm/Diagram/Diagram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Diagram", function() { return _Diagram_Diagram_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Diagram_Diagram_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hooks_useSchema_useSchema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useSchema/useSchema.js */ "./node_modules/beautiful-react-diagrams/esm/hooks/useSchema/useSchema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSchema", function() { return _hooks_useSchema_useSchema_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _shared_functions_validators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/functions/validators.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/validators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateLink", function() { return _shared_functions_validators_js__WEBPACK_IMPORTED_MODULE_2__["validateLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateLinks", function() { return _shared_functions_validators_js__WEBPACK_IMPORTED_MODULE_2__["validateLinks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateNode", function() { return _shared_functions_validators_js__WEBPACK_IMPORTED_MODULE_2__["validateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateNodes", function() { return _shared_functions_validators_js__WEBPACK_IMPORTED_MODULE_2__["validateNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validatePort", function() { return _shared_functions_validators_js__WEBPACK_IMPORTED_MODULE_2__["validatePort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return _shared_functions_validators_js__WEBPACK_IMPORTED_MODULE_2__["validateSchema"]; });

/* harmony import */ var _shared_functions_createSchema_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/functions/createSchema.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/createSchema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSchema", function() { return _shared_functions_createSchema_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* beautiful-react-diagrams version: 0.5.1 */







/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/Errors.js":
/*!********************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/Errors.js ***!
  \********************************************************************/
/*! exports provided: default, DiagramSchemaError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramSchemaError", function() { return DiagramSchemaError; });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* beautiful-react-diagrams version: 0.5.1 */


var DiagramSchemaError = function (_Error) {
  Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["inherits"])(DiagramSchemaError, _Error);

  var _super = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["createSuper"])(DiagramSchemaError);

  function DiagramSchemaError() {
    var _this;

    Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["classCallCheck"])(this, DiagramSchemaError);

    _this = _super.call(this);
    _this.name = 'Diagram Schema Error';
    return _this;
  }

  return DiagramSchemaError;
}(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["wrapNativeSuper"])(Error));
var ERR = Object.freeze({
  MUST_HAVE_NODES: function MUST_HAVE_NODES() {
    return new DiagramSchemaError('A valid schema should have the required property \'nodes\'');
  },
  INVALID_ID: function INVALID_ID() {
    return new DiagramSchemaError('A valid node should have the required and unique property \'id\'');
  },
  INVALID_COORDS: function INVALID_COORDS(id) {
    return new DiagramSchemaError("".concat(id, " node 'coordinates' property is not valid."));
  },
  INVALID_CONTENT: function INVALID_CONTENT(id) {
    return new DiagramSchemaError("".concat(id, " node 'content' property is not valid."));
  },
  INVALID_PORT_ID: function INVALID_PORT_ID() {
    return new DiagramSchemaError('A valid port should have a unique id');
  },
  INVALID_PORT_CAN_LINK: function INVALID_PORT_CAN_LINK(id) {
    return new DiagramSchemaError("".concat(id, " port 'canLink' property is not valid."));
  },
  INVALID_PORT_ALIGNMENT: function INVALID_PORT_ALIGNMENT(id) {
    return new DiagramSchemaError("".concat(id, " port 'alignment' property is not valid."));
  },
  INVALID_INPUTS_ARRAY: function INVALID_INPUTS_ARRAY(id) {
    return new DiagramSchemaError("".concat(id, " node 'input' property is not valid."));
  },
  INVALID_NODES_ARRAY: function INVALID_NODES_ARRAY() {
    return new DiagramSchemaError('The \'nodes\' property is not a valid array');
  },
  INVALID_LINKS_ARRAY: function INVALID_LINKS_ARRAY() {
    return new DiagramSchemaError('The \'links\' property is not a valid array');
  },
  LINK_INVALID_INPUT_OUTPUT: function LINK_INVALID_INPUT_OUTPUT() {
    return new DiagramSchemaError('Link properties \'input\' and \'output\' are required string');
  },
  LINK_INVALID_READONLY: function LINK_INVALID_READONLY() {
    return new DiagramSchemaError('Link property \'readonly\' should be a boolean value');
  }
});

/* harmony default export */ __webpack_exports__["default"] = (ERR);



/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/Types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/Types.js ***!
  \*******************************************************************/
/*! exports provided: LinkType, NodeType, PortAlignment, PortType, SchemaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkType", function() { return LinkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortAlignment", function() { return PortAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortType", function() { return PortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaType", function() { return SchemaType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-diagrams version: 0.5.1 */


var LinkType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  input: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  output: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  readonly: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var PortAlignment = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['right', 'left', 'top', 'bottom']);
var PortType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  canLink: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  alignment: PortAlignment
});
var NodeType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  coordinates: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number).isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node]),
  inputs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(PortType),
  outputs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(PortType),
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['default']),
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var SchemaType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  nodes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(NodeType).isRequired,
  links: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(LinkType)
});




/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/functions/createSchema.js":
/*!************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/functions/createSchema.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var _ensureNodeId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ensureNodeId.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/ensureNodeId.js");
/* harmony import */ var _validators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/validators.js");
/* beautiful-react-diagrams version: 0.5.1 */




var createSchema = function createSchema(schema) {
  var next = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, schema);

  next.nodes || (next.nodes = []);
  next.links || (next.links = []);
  next.nodes.forEach(_ensureNodeId_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(_validators_js__WEBPACK_IMPORTED_MODULE_2__["validateSchema"])(next);
  return next;
};

/* harmony default export */ __webpack_exports__["default"] = (createSchema);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/functions/ensureNodeId.js":
/*!************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/functions/ensureNodeId.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-diagrams version: 0.5.1 */
var ensureNodeId = function ensureNodeId(node) {
  node.id || (node.id = "node-".concat(Math.random().toString(36).substr(2, 9)));
  return node;
};

/* harmony default export */ __webpack_exports__["default"] = (ensureNodeId);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getNodePortsId.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/functions/getNodePortsId.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-diagrams version: 0.5.1 */
var getNodePortsId = function getNodePortsId(node, portType) {
  if (node[portType] && node[portType].length > 0) {
    return node[portType].map(function (port) {
      return port.id;
    });
  }

  return [];
};

/* harmony default export */ __webpack_exports__["default"] = (getNodePortsId);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getPathMidpoint.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/functions/getPathMidpoint.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-diagrams version: 0.5.1 */
var getPathMidpoint = function getPathMidpoint(pathElement) {
  if (pathElement.getTotalLength && pathElement.getPointAtLength) {
    var midpoint = pathElement.getTotalLength() / 2;

    var _pathElement$getPoint = pathElement.getPointAtLength(midpoint),
        x = _pathElement$getPoint.x,
        y = _pathElement$getPoint.y;

    return [x, y];
  }

  return [0, 0];
};

/* harmony default export */ __webpack_exports__["default"] = (getPathMidpoint);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getRelativePoint.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/functions/getRelativePoint.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-diagrams version: 0.5.1 */
var getRelativePoint = function getRelativePoint(point, relative) {
  return [point[0] - relative[0], point[1] - relative[1]];
};

/* harmony default export */ __webpack_exports__["default"] = (getRelativePoint);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/functions/makeSvgPath.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/functions/makeSvgPath.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-diagrams version: 0.5.1 */
var CURVE_FACTOR = 60;

var roundPoint = function roundPoint(point) {
  return [Math.floor(point[0]), Math.floor(point[1])];
};

var getXOffset = function getXOffset(alignment) {
  if (!alignment || alignment !== 'left' && alignment !== 'right') return 0;
  return alignment === 'left' ? -CURVE_FACTOR : CURVE_FACTOR;
};

var getYOffset = function getYOffset(alignment) {
  if (!alignment || alignment !== 'top' && alignment !== 'bottom') return 0;
  return alignment === 'top' ? CURVE_FACTOR : -CURVE_FACTOR;
};

var makeSvgPath = function makeSvgPath(startPoint, endPoint) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    type: 'curve'
  };
  if (!startPoint || !endPoint) return '';
  var roundedStart = roundPoint(startPoint);
  var roundedEnd = roundPoint(endPoint);
  var start = "".concat(roundedStart[0], ", ").concat(roundedStart[1]);
  var end = "".concat(roundedEnd[0], ", ").concat(roundedEnd[1]);

  if (options.type === 'bezier' && (options.inputAlignment || options.outputAlignment)) {
    var startControl = end;
    var endControl = start;

    if (options.inputAlignment) {
      var offsetX = roundedStart[0] + getXOffset(options.inputAlignment);
      var offsetY = roundedStart[1] + getYOffset(options.inputAlignment);
      endControl = "".concat(offsetX, ", ").concat(offsetY);
    }

    if (options.outputAlignment) {
      var _offsetX = roundedEnd[0] + getXOffset(options.outputAlignment);

      var _offsetY = roundedEnd[1] + getYOffset(options.outputAlignment);

      startControl = "".concat(_offsetX, ", ").concat(_offsetY);
    }

    return "M ".concat(start, " C ").concat(endControl, " ").concat(startControl, ", ").concat(end);
  }

  var ctrl = "".concat(roundedEnd[0], ", ").concat(roundedStart[1]);
  return "M ".concat(start, " Q ").concat(ctrl, ", ").concat(end);
};

/* harmony default export */ __webpack_exports__["default"] = (makeSvgPath);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/functions/validators.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/functions/validators.js ***!
  \**********************************************************************************/
/*! exports provided: default, validateLink, validateLinks, validateNode, validateNodes, validatePort, validateSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateLink", function() { return validateLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateLinks", function() { return validateLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNode", function() { return validateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNodes", function() { return validateNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePort", function() { return validatePort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return validateSchema; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Errors.js */ "./node_modules/beautiful-react-diagrams/esm/shared/Errors.js");
/* beautiful-react-diagrams version: 0.5.1 */



var validatePort = function validatePort(port) {
  if (!port.id) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_PORT_ID();
  }

  if (!!port.canLink && typeof port.canLink !== 'function') {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_PORT_CAN_LINK(port.id);
  }

  if (!!port.alignment && !['right', 'left', 'top', 'bottom'].includes(port.alignment)) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_PORT_ALIGNMENT(port.id);
  }

  return true;
};
var validateNode = function validateNode(node) {
  if (!node.id) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_ID();
  }

  if (!node.coordinates || !Array.isArray(node.coordinates) || node.coordinates.length !== 2) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_COORDS(node.id);
  }

  if (!!node.content && typeof node.content !== 'string' && typeof node.content !== 'function' && !Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(node.content)) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_CONTENT(node.id);
  }

  if (node.inputs) {
    if (!Array.isArray(node.inputs)) {
      throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_INPUTS_ARRAY(node.id);
    }

    node.inputs.forEach(validatePort);
  }

  if (node.outputs) {
    if (!Array.isArray(node.outputs)) {
      throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_INPUTS_ARRAY(node.id);
    }

    node.outputs.forEach(validatePort);
  }

  return true;
};
var validateNodes = function validateNodes(nodes) {
  if (!Array.isArray(nodes)) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_NODES_ARRAY();
  }

  nodes.forEach(validateNode);
  return true;
};
var validateLink = function validateLink(link) {
  if (!link.input || !link.output || typeof link.input !== 'string' || typeof link.output !== 'string') {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINK_INVALID_INPUT_OUTPUT();
  }

  if (link.readonly && typeof link.readonly !== 'boolean') {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINK_INVALID_READONLY();
  }

  return true;
};
var validateLinks = function validateLinks(links) {
  if (!Array.isArray(links)) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].INVALID_LINKS_ARRAY();
  }

  links.forEach(validateLink);
  return true;
};
var validateSchema = function validateSchema(_ref) {
  var links = _ref.links,
      nodes = _ref.nodes;

  if (!nodes) {
    throw _Errors_js__WEBPACK_IMPORTED_MODULE_1__["default"].MUST_HAVE_NODES();
  }

  return validateLinks(links) && validateNodes(nodes);
};

/* harmony default export */ __webpack_exports__["default"] = (validateSchema);



/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useCanvas.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useCanvas.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/DiagramContext.js */ "./node_modules/beautiful-react-diagrams/esm/Context/DiagramContext.js");
/* beautiful-react-diagrams version: 0.5.1 */



var useCanvas = function useCanvas() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      canvas = _useContext.canvas;

  return canvas;
};

/* harmony default export */ __webpack_exports__["default"] = (useCanvas);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useContextRegistration.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useContextRegistration.js ***!
  \***************************************************************************************************/
/*! exports provided: useNodeRegistration, usePortRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNodeRegistration", function() { return useNodeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePortRegistration", function() { return usePortRegistration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/DiagramContext.js */ "./node_modules/beautiful-react-diagrams/esm/Context/DiagramContext.js");
/* beautiful-react-diagrams version: 0.5.1 */



var usePortRegistration = function usePortRegistration(inputs, outputs, onPortRegister) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      canvas = _useContext.canvas,
      ports = _useContext.ports;

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (portId, portElement) {
    if (canvas && (inputs || outputs)) {
      if (ports && !ports[portId]) {
        onPortRegister(portId, portElement);
      }
    }
  }, [!!canvas, !!ports, inputs, outputs]);
};
var useNodeRegistration = function useNodeRegistration(ref, onNodeRegister, id) {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      canvas = _useContext2.canvas,
      nodes = _useContext2.nodes;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (onNodeRegister && ref.current && canvas && nodes && !nodes[id]) {
      onNodeRegister(id, ref.current);
    }
  }, [ref.current, onNodeRegister, !!canvas, !!nodes, id]);
};




/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useDrag.js":
/*!************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useDrag.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-diagrams/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* beautiful-react-diagrams version: 0.5.1 */




var defaultOptions = {
  ref: undefined,
  throttleBy: 0
};

var getEventCoordinates = function getEventCoordinates(event) {
  return [event.clientX, event.clientY];
};

var createCallbackRef = function createCallbackRef(ref) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (callback) {
    if (!ref.current || callback !== ref.current) {
      ref.current = callback;
    }
  }, [ref.current]);
};

var useDrag = function useDrag() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  var targetRef = options.ref || Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dragStartHandlerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dragHandlerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dragEndHandlerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    isDragging: false,
    start: null,
    end: null,
    offset: null
  }),
      info = _useRef.current;

  var onDragStart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (!info.isDragging && targetRef.current.contains(event.target)) {
      info.isDragging = true;
      info.end = null;
      info.offset = null;
      info.start = getEventCoordinates(event);

      if (dragStartHandlerRef.current) {
        dragStartHandlerRef.current(event, Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["objectSpread2"])({}, info));
      }
    }
  }, [targetRef.current, info, dragStartHandlerRef.current]);
  var onDrag = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function (event) {
    if (info.isDragging) {
      info.offset = [info.start[0] - event.clientX, info.start[1] - event.clientY];

      if (dragHandlerRef.current) {
        dragHandlerRef.current(event, Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["objectSpread2"])({}, info));
      }
    }
  }, options.throttleBy), [targetRef.current, info, dragHandlerRef.current]);
  var onDragEnd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (info.isDragging) {
      info.isDragging = false;
      info.end = getEventCoordinates(event);

      if (dragEndHandlerRef.current) {
        dragEndHandlerRef.current(event, Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["objectSpread2"])({}, info));
      }
    }
  }, [targetRef.current, info, dragEndHandlerRef.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _onDragStart = function _onDragStart(e) {
      return onDragStart(e);
    };

    var _onDrag = function _onDrag(e) {
      return onDrag(e);
    };

    var _onDragEnd = function _onDragEnd(e) {
      return onDragEnd(e);
    };

    if (targetRef.current) {
      targetRef.current.addEventListener('mousedown', _onDragStart);
      document.addEventListener('mousemove', _onDrag);
      document.addEventListener('mouseup', _onDragEnd);
    }

    return function () {
      if (targetRef.current) {
        targetRef.current.removeEventListener('mousedown', _onDragStart);
        document.removeEventListener('mousemove', _onDrag);
        document.removeEventListener('mouseup', _onDragEnd);
      }
    };
  }, [targetRef.current]);
  return {
    ref: targetRef,
    onDragStart: createCallbackRef(dragStartHandlerRef),
    onDrag: createCallbackRef(dragHandlerRef),
    onDragEnd: createCallbackRef(dragEndHandlerRef)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useDrag);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useNodeRefs.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useNodeRefs.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/DiagramContext.js */ "./node_modules/beautiful-react-diagrams/esm/Context/DiagramContext.js");
/* beautiful-react-diagrams version: 0.5.1 */



var useNodeRefs = function useNodeRefs() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      nodes = _useContext.nodes;

  return nodes;
};

/* harmony default export */ __webpack_exports__["default"] = (useNodeRefs);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useNodeUnregistration.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/useNodeUnregistration.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_getNodePortsId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/getNodePortsId.js */ "./node_modules/beautiful-react-diagrams/esm/shared/functions/getNodePortsId.js");
/* beautiful-react-diagrams version: 0.5.1 */



var useNodeUnregistration = function useNodeUnregistration(onNodeRemove, inputs, outputs, id) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      if (onNodeRemove) {
        var node = {
          inputs: inputs,
          outputs: outputs
        };
        var inputsPort = Object(_functions_getNodePortsId_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'inputs');
        var outputsPort = Object(_functions_getNodePortsId_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'outputs');
        onNodeRemove(id, inputsPort, outputsPort);
      }
    };
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (useNodeUnregistration);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/usePortRefs.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/esm/shared/internal_hooks/usePortRefs.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/DiagramContext.js */ "./node_modules/beautiful-react-diagrams/esm/Context/DiagramContext.js");
/* beautiful-react-diagrams version: 0.5.1 */



var usePortRefs = function usePortRefs() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_DiagramContext_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      ports = _useContext.ports;

  return ports;
};

/* harmony default export */ __webpack_exports__["default"] = (usePortRefs);


/***/ }),

/***/ "./node_modules/beautiful-react-diagrams/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/beautiful-react-diagrams/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/beautiful-react-diagrams/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/beautiful-react-diagrams/styles.css",
      function () {
        content = __webpack_require__(/*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/beautiful-react-diagrams/styles.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js ***!
  \**************************************************************************************/
/*! exports provided: arrayLikeToArray, arrayWithHoles, defineProperty, iterableToArrayLimit, nonIterableRest, objectSpread2, slicedToArray, typeof, unsupportedIterableToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLikeToArray", function() { return _arrayLikeToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayWithHoles", function() { return _arrayWithHoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterableToArrayLimit", function() { return _iterableToArrayLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonIterableRest", function() { return _nonIterableRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSpread2", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slicedToArray", function() { return _slicedToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeof", function() { return _typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsupportedIterableToArray", function() { return _unsupportedIterableToArray; });
/* beautiful-react-hooks version: 0.31.1 */
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/index.js ***!
  \*********************************************************/
/*! exports provided: useDidMount, useWillUnmount, useLifecycle, useWindowResize, useWindowScroll, useDebouncedFn, useThrottledFn, useMouse, useMouseEvents, useMouseState, useTimeout, useConditionalTimeout, useInterval, useGlobalEvent, usePreviousValue, useGeolocation, useGeolocationEvents, useGeolocationState, useMediaQuery, useValueHistory, useOnlineState, useViewportSpy, useValidatedState, useDragEvents, useDrag, useDropZone, useRequestAnimationFrame, useLocalStorage, useSessionStorage, useStorage, useResizeObserver, useDefaultedState, useObservable, useSpeechSynthesis, useSystemVoices, useRenderInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useDidMount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDidMount.js */ "./node_modules/beautiful-react-hooks/esm/useDidMount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDidMount", function() { return _useDidMount_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useWillUnmount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useWillUnmount.js */ "./node_modules/beautiful-react-hooks/esm/useWillUnmount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWillUnmount", function() { return _useWillUnmount_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useLifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLifecycle.js */ "./node_modules/beautiful-react-hooks/esm/useLifecycle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLifecycle", function() { return _useLifecycle_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useWindowResize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWindowResize.js */ "./node_modules/beautiful-react-hooks/esm/useWindowResize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowResize", function() { return _useWindowResize_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useWindowScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useWindowScroll.js */ "./node_modules/beautiful-react-hooks/esm/useWindowScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowScroll", function() { return _useWindowScroll_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useDebouncedFn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDebouncedFn.js */ "./node_modules/beautiful-react-hooks/esm/useDebouncedFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebouncedFn", function() { return _useDebouncedFn_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useThrottledFn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useThrottledFn.js */ "./node_modules/beautiful-react-hooks/esm/useThrottledFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottledFn", function() { return _useThrottledFn_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useMouse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useMouse.js */ "./node_modules/beautiful-react-hooks/esm/useMouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouse", function() { return _useMouse_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useMouseEvents_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMouseEvents.js */ "./node_modules/beautiful-react-hooks/esm/useMouseEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseEvents", function() { return _useMouseEvents_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useMouseState_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMouseState.js */ "./node_modules/beautiful-react-hooks/esm/useMouseState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseState", function() { return _useMouseState_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _useTimeout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useTimeout.js */ "./node_modules/beautiful-react-hooks/esm/useTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useConditionalTimeout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useConditionalTimeout.js */ "./node_modules/beautiful-react-hooks/esm/useConditionalTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConditionalTimeout", function() { return _useConditionalTimeout_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useInterval_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useInterval.js */ "./node_modules/beautiful-react-hooks/esm/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useGlobalEvent.js */ "./node_modules/beautiful-react-hooks/esm/useGlobalEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGlobalEvent", function() { return _useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _usePreviousValue_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usePreviousValue.js */ "./node_modules/beautiful-react-hooks/esm/usePreviousValue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePreviousValue", function() { return _usePreviousValue_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _useGeolocation_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useGeolocation.js */ "./node_modules/beautiful-react-hooks/esm/useGeolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeolocation", function() { return _useGeolocation_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _useGeolocationEvents_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useGeolocationEvents.js */ "./node_modules/beautiful-react-hooks/esm/useGeolocationEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeolocationEvents", function() { return _useGeolocationEvents_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _useGeolocationState_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useGeolocationState.js */ "./node_modules/beautiful-react-hooks/esm/useGeolocationState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeolocationState", function() { return _useGeolocationState_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _useMediaQuery_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useMediaQuery.js */ "./node_modules/beautiful-react-hooks/esm/useMediaQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() { return _useMediaQuery_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _useValueHistory_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useValueHistory.js */ "./node_modules/beautiful-react-hooks/esm/useValueHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useValueHistory", function() { return _useValueHistory_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _useOnlineState_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useOnlineState.js */ "./node_modules/beautiful-react-hooks/esm/useOnlineState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnlineState", function() { return _useOnlineState_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _useViewportSpy_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./useViewportSpy.js */ "./node_modules/beautiful-react-hooks/esm/useViewportSpy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useViewportSpy", function() { return _useViewportSpy_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _useValidatedState_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useValidatedState.js */ "./node_modules/beautiful-react-hooks/esm/useValidatedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useValidatedState", function() { return _useValidatedState_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _useDragEvents_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useDragEvents.js */ "./node_modules/beautiful-react-hooks/esm/useDragEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDragEvents", function() { return _useDragEvents_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _useDrag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useDrag.js */ "./node_modules/beautiful-react-hooks/esm/useDrag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return _useDrag_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _useDropZone_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useDropZone.js */ "./node_modules/beautiful-react-hooks/esm/useDropZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDropZone", function() { return _useDropZone_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _useRequestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./useRequestAnimationFrame.js */ "./node_modules/beautiful-react-hooks/esm/useRequestAnimationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRequestAnimationFrame", function() { return _useRequestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _useLocalStorage_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useLocalStorage.js */ "./node_modules/beautiful-react-hooks/esm/useLocalStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return _useLocalStorage_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _useSessionStorage_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./useSessionStorage.js */ "./node_modules/beautiful-react-hooks/esm/useSessionStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSessionStorage", function() { return _useSessionStorage_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _useStorage_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./useStorage.js */ "./node_modules/beautiful-react-hooks/esm/useStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return _useStorage_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _useResizeObserver_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./useResizeObserver.js */ "./node_modules/beautiful-react-hooks/esm/useResizeObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResizeObserver", function() { return _useResizeObserver_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _useDefaultedState_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./useDefaultedState.js */ "./node_modules/beautiful-react-hooks/esm/useDefaultedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDefaultedState", function() { return _useDefaultedState_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _useObservable_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./useObservable.js */ "./node_modules/beautiful-react-hooks/esm/useObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return _useObservable_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _useSpeechSynthesis_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./useSpeechSynthesis.js */ "./node_modules/beautiful-react-hooks/esm/useSpeechSynthesis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpeechSynthesis", function() { return _useSpeechSynthesis_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _useSystemVoices_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./useSystemVoices.js */ "./node_modules/beautiful-react-hooks/esm/useSystemVoices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSystemVoices", function() { return _useSystemVoices_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _useRenderInfo_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./useRenderInfo.js */ "./node_modules/beautiful-react-hooks/esm/useRenderInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRenderInfo", function() { return _useRenderInfo_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* beautiful-react-hooks version: 0.31.1 */






































/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useConditionalTimeout.js":
/*!*************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useConditionalTimeout.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _usePreviousValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePreviousValue.js */ "./node_modules/beautiful-react-hooks/esm/usePreviousValue.js");
/* beautiful-react-hooks version: 0.31.1 */




var defaultOptions = {
  cancelOnUnmount: true,
  cancelOnConditionChange: true
};

var useConditionalTimeout = function useConditionalTimeout(fn, milliseconds, condition) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultOptions;

  var opts = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, defaultOptions), options || {});

  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var callback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(fn);
  var prevCondition = Object(_usePreviousValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(condition);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isCleared = _useState2[0],
      setIsCleared = _useState2[1];

  var clear = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsCleared(true);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (condition && typeof milliseconds === 'number') {
      timeout.current = setTimeout(function () {
        callback.current();
      }, milliseconds);
    }

    return clear;
  }, [condition, milliseconds]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (prevCondition && condition !== prevCondition && opts.cancelOnConditionChange) {
      clear();
    }
  }, [condition, options]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      if (opts.cancelOnUnmount) {
        clear();
      }
    };
  }, []);
  return [isCleared, clear];
};

/* harmony default export */ __webpack_exports__["default"] = (useConditionalTimeout);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useDebouncedFn.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useDebouncedFn.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var defaultOptions = {
  leading: false,
  trailing: true
};

var useDebouncedFn = function useDebouncedFn(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;
  var dependencies = arguments.length > 3 ? arguments[3] : undefined;
  var debounced = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(fn, wait, options);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(debounced, dependencies);
};

/* harmony default export */ __webpack_exports__["default"] = (useDebouncedFn);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useDefaultedState.js":
/*!*********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useDefaultedState.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var maybeState = function maybeState(state, defaultValue) {
  return state !== null && state !== void 0 ? state : defaultValue;
};

var useDefaultedState = function useDefaultedState(defaultValue, initialState) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(maybeState(initialState, defaultValue)),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setStateSafe = function setStateSafe(nextState) {
    return setState(maybeState(nextState, defaultValue));
  };

  return [maybeState(state, defaultValue), setStateSafe];
};

/* harmony default export */ __webpack_exports__["default"] = (useDefaultedState);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useDidMount.js":
/*!***************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useDidMount.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createHandlerSetter.js */ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js");
/* beautiful-react-hooks version: 0.31.1 */




var useDidMount = function useDidMount(handler) {
  var _createHandlerSetter = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(handler),
      _createHandlerSetter2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter, 2),
      onMountHandler = _createHandlerSetter2[0],
      setOnMountHandler = _createHandlerSetter2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (onMountHandler.current) {
      onMountHandler.current();
    }
  }, []);
  return setOnMountHandler;
};

/* harmony default export */ __webpack_exports__["default"] = (useDidMount);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useDrag.js":
/*!***********************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useDrag.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useDragEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragEvents.js */ "./node_modules/beautiful-react-hooks/esm/useDragEvents.js");
/* beautiful-react-hooks version: 0.31.1 */




var defaultOptions = {
  dragImage: null,
  dragImageXOffset: 0,
  dragImageYOffset: 0,
  transfer: null,
  transferFormat: 'text'
};

var useDrag = function useDrag(targetRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

  var _useDragEvents = Object(_useDragEvents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(targetRef, true),
      onDragStart = _useDragEvents.onDragStart,
      onDragEnd = _useDragEvents.onDragEnd;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isDragging = _useState2[0],
      setIsDragging = _useState2[1];

  var opts = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, defaultOptions), options || {});

  onDragStart(function (event) {
    setIsDragging(true);

    if (opts.dragImage) {
      var img = new Image();
      img.src = opts.dragImage;
      event.dataTransfer.setDragImage(img, opts.dragImageXOffset, opts.dragImageYOffset);
    }

    if (opts.transfer) {
      var data = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["typeof"])(opts.transfer) === 'object' ? JSON.stringify(opts.transfer) : "".concat(opts.transfer);
      event.dataTransfer.setData(opts.transferFormat, data);
    }
  });
  onDragEnd(function () {
    return setIsDragging(false);
  });
  return isDragging;
};

/* harmony default export */ __webpack_exports__["default"] = (useDrag);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useDragEvents.js":
/*!*****************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useDragEvents.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/hasOwnProperty.js */ "./node_modules/beautiful-react-hooks/esm/utils/hasOwnProperty.js");
/* harmony import */ var _utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createCbSetterErrorProxy.js */ "./node_modules/beautiful-react-hooks/esm/utils/createCbSetterErrorProxy.js");
/* harmony import */ var _utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/createHandlerSetter.js */ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js");
/* beautiful-react-hooks version: 0.31.1 */






var assignDragEventOnMount = function assignDragEventOnMount(targetRef, handlerRef, eventName) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var cb = function cb(dragEvent) {
      if (handlerRef.current) {
        handlerRef.current(dragEvent);
      }
    };

    if (targetRef.current) {
      targetRef.current.addEventListener(eventName, cb);
    }

    return function () {
      if (targetRef.current) {
        targetRef.current.removeEventListener(eventName, cb);
      }
    };
  }, []);
};

var useDragEvents = function useDragEvents(targetRef) {
  var setDraggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _createHandlerSetter = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter, 2),
      onDrag = _createHandlerSetter2[0],
      setOnDrag = _createHandlerSetter2[1];

  var _createHandlerSetter3 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter4 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter3, 2),
      onDrop = _createHandlerSetter4[0],
      setOnDrop = _createHandlerSetter4[1];

  var _createHandlerSetter5 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter6 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter5, 2),
      onDragEnter = _createHandlerSetter6[0],
      setOnDragEnter = _createHandlerSetter6[1];

  var _createHandlerSetter7 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter8 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter7, 2),
      onDragEnd = _createHandlerSetter8[0],
      setOnDragEnd = _createHandlerSetter8[1];

  var _createHandlerSetter9 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter10 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter9, 2),
      onDragExit = _createHandlerSetter10[0],
      setOnDragExit = _createHandlerSetter10[1];

  var _createHandlerSetter11 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter12 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter11, 2),
      onDragLeave = _createHandlerSetter12[0],
      setOnDragLeave = _createHandlerSetter12[1];

  var _createHandlerSetter13 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter14 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter13, 2),
      onDragOver = _createHandlerSetter14[0],
      setOnDragOver = _createHandlerSetter14[1];

  var _createHandlerSetter15 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _createHandlerSetter16 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter15, 2),
      onDragStart = _createHandlerSetter16[0],
      setOnDragStart = _createHandlerSetter16[1];

  if (targetRef !== null && !Object(_utils_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(targetRef, 'current')) {
    return Object(_utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Unable to assign any drag event to the given ref');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (setDraggable && targetRef.current && !targetRef.current.hasAttribute('draggable')) {
      targetRef.current.setAttribute('draggable', true);
    }
  }, []);
  assignDragEventOnMount(targetRef, onDrag, 'drag');
  assignDragEventOnMount(targetRef, onDrop, 'drop');
  assignDragEventOnMount(targetRef, onDragEnter, 'dragenter');
  assignDragEventOnMount(targetRef, onDragEnd, 'dragend');
  assignDragEventOnMount(targetRef, onDragExit, 'dragexit');
  assignDragEventOnMount(targetRef, onDragLeave, 'dragleave');
  assignDragEventOnMount(targetRef, onDragOver, 'dragover');
  assignDragEventOnMount(targetRef, onDragStart, 'dragstart');
  return Object.freeze({
    onDrag: setOnDrag,
    onDrop: setOnDrop,
    onDragEnter: setOnDragEnter,
    onDragEnd: setOnDragEnd,
    onDragExit: setOnDragExit,
    onDragLeave: setOnDragLeave,
    onDragOver: setOnDragOver,
    onDragStart: setOnDragStart
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useDragEvents);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useDropZone.js":
/*!***************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useDropZone.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useDragEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragEvents.js */ "./node_modules/beautiful-react-hooks/esm/useDragEvents.js");
/* beautiful-react-hooks version: 0.31.1 */




var useDropZone = function useDropZone(targetRef) {
  var _useDragEvents = Object(_useDragEvents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(targetRef, false),
      onDrop = _useDragEvents.onDrop,
      onDragOver = _useDragEvents.onDragOver,
      onDragLeave = _useDragEvents.onDragLeave;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isOver = _useState2[0],
      setIsOver = _useState2[1];

  onDragOver(function (event) {
    event.preventDefault();
    setIsOver(true);
  });
  onDragLeave(function () {
    setIsOver(false);
  });
  return {
    isOver: isOver,
    onDrop: onDrop
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useDropZone);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useGeolocation.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useGeolocation.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useGeolocationState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useGeolocationState.js */ "./node_modules/beautiful-react-hooks/esm/useGeolocationState.js");
/* harmony import */ var _useGeolocationEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGeolocationEvents.js */ "./node_modules/beautiful-react-hooks/esm/useGeolocationEvents.js");
/* harmony import */ var _utils_geolocationStandardOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/geolocationStandardOptions.js */ "./node_modules/beautiful-react-hooks/esm/utils/geolocationStandardOptions.js");
/* beautiful-react-hooks version: 0.31.1 */




var useGeolocation = function useGeolocation() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_geolocationStandardOptions_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var state = Object(_useGeolocationState_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
  var events = Object(_useGeolocationEvents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
  return [state, events];
};

/* harmony default export */ __webpack_exports__["default"] = (useGeolocation);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useGeolocationEvents.js":
/*!************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useGeolocationEvents.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createHandlerSetter.js */ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js");
/* harmony import */ var _utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createCbSetterErrorProxy.js */ "./node_modules/beautiful-react-hooks/esm/utils/createCbSetterErrorProxy.js");
/* harmony import */ var _utils_geolocationStandardOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/geolocationStandardOptions.js */ "./node_modules/beautiful-react-hooks/esm/utils/geolocationStandardOptions.js");
/* beautiful-react-hooks version: 0.31.1 */






var useGeolocationEvents = function useGeolocationEvents() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_geolocationStandardOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"];
  var watchId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _createHandlerSetter = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter, 2),
      onChangeRef = _createHandlerSetter2[0],
      setOnChangeRef = _createHandlerSetter2[1];

  var _createHandlerSetter3 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter4 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter3, 2),
      onErrorRef = _createHandlerSetter4[0],
      setOnErrorRef = _createHandlerSetter4[1];

  var isSupported = typeof window !== 'undefined' && 'geolocation' in window.navigator;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var onSuccess = function onSuccess(successEvent) {
      if (onChangeRef.current) {
        onChangeRef.current(successEvent);
      }
    };

    var onError = function onError(err) {
      if (onErrorRef.current) {
        onErrorRef.current(err);
      }
    };

    if (isSupported) {
      watchId.current = window.navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    return function () {
      if (isSupported) {
        window.navigator.geolocation.clearWatch(watchId.current);
      }
    };
  }, []);
  return !isSupported ? Object(_utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('The Geolocation API is not supported') : Object.freeze({
    isSupported: isSupported,
    onChange: setOnChangeRef,
    onError: setOnErrorRef
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useGeolocationEvents);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useGeolocationState.js":
/*!***********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useGeolocationState.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useGeolocationEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useGeolocationEvents.js */ "./node_modules/beautiful-react-hooks/esm/useGeolocationEvents.js");
/* harmony import */ var _utils_geolocationStandardOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/geolocationStandardOptions.js */ "./node_modules/beautiful-react-hooks/esm/utils/geolocationStandardOptions.js");
/* harmony import */ var _utils_makePositionObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/makePositionObject.js */ "./node_modules/beautiful-react-hooks/esm/utils/makePositionObject.js");
/* harmony import */ var _utils_isSamePosition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isSamePosition.js */ "./node_modules/beautiful-react-hooks/esm/utils/isSamePosition.js");
/* beautiful-react-hooks version: 0.31.1 */







var useGeolocationState = function useGeolocationState() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_geolocationStandardOptions_js__WEBPACK_IMPORTED_MODULE_3__["default"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState3, 2),
      isRetrieving = _useState4[0],
      setRetrieving = _useState4[1];

  var _useGeolocationEvents = Object(_useGeolocationEvents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options),
      isSupported = _useGeolocationEvents.isSupported,
      onChange = _useGeolocationEvents.onChange;

  var savePosition = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (position === null) {
      setRetrieving(true);
      navigator.geolocation.getCurrentPosition(function (nextPosition) {
        if (!Object(_utils_isSamePosition_js__WEBPACK_IMPORTED_MODULE_5__["default"])(position, nextPosition)) {
          setPosition(Object(_utils_makePositionObject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(nextPosition));
          setRetrieving(false);
        }
      });
    }
  }, [position]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(savePosition, [position]);
  onChange(savePosition);
  return Object.freeze({
    isSupported: isSupported,
    isRetrieving: isRetrieving,
    position: position
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useGeolocationState);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useGlobalEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useGlobalEvent.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createHandlerSetter.js */ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js");
/* beautiful-react-hooks version: 0.31.1 */




var defaultOptions = {
  capture: false,
  once: false,
  passive: false
};

var useGlobalEvent = function useGlobalEvent(eventName) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  var fn = arguments.length > 2 ? arguments[2] : undefined;

  var _createHandlerSetter = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fn),
      _createHandlerSetter2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter, 2),
      callbackRef = _createHandlerSetter2[0],
      setCallbackRef = _createHandlerSetter2[1];

  var opts = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, defaultOptions), options || {});

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var cb = function cb(event) {
      if (callbackRef.current) {
        callbackRef.current(event);
      }
    };

    if (callbackRef.current && eventName) {
      window.addEventListener(eventName, cb, opts);
    }

    return function () {
      if (eventName) {
        window.removeEventListener(eventName, cb, opts);
      }
    };
  }, [eventName, options]);
  return setCallbackRef;
};

/* harmony default export */ __webpack_exports__["default"] = (useGlobalEvent);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useInterval.js":
/*!***************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useInterval.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var defaultOptions = {
  cancelOnUnmount: true
};

var useInterval = function useInterval(fn, milliseconds) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;

  var opts = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, defaultOptions), options || {});

  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var callback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(fn);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isCleared = _useState2[0],
      setIsCleared = _useState2[1];

  var clear = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (timeout.current) {
      setIsCleared(true);
      clearInterval(timeout.current);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof milliseconds === 'number') {
      timeout.current = setInterval(function () {
        callback.current();
      }, milliseconds);
    }

    return clear;
  }, [milliseconds]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      if (opts.cancelOnUnmount) {
        clear();
      }
    };
  }, []);
  return [isCleared, clear];
};

/* harmony default export */ __webpack_exports__["default"] = (useInterval);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useLifecycle.js":
/*!****************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useLifecycle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useDidMount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDidMount.js */ "./node_modules/beautiful-react-hooks/esm/useDidMount.js");
/* harmony import */ var _useWillUnmount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useWillUnmount.js */ "./node_modules/beautiful-react-hooks/esm/useWillUnmount.js");
/* beautiful-react-hooks version: 0.31.1 */



var useLifecycle = function useLifecycle(mount, unmount) {
  var onDidMount = Object(_useDidMount_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mount);
  var onWillUnmount = Object(_useWillUnmount_js__WEBPACK_IMPORTED_MODULE_1__["default"])(unmount);
  return {
    onDidMount: onDidMount,
    onWillUnmount: onWillUnmount
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useLifecycle);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useLocalStorage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useLocalStorage.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStorage.js */ "./node_modules/beautiful-react-hooks/esm/useStorage.js");
/* beautiful-react-hooks version: 0.31.1 */


var useLocalStorage = Object(_useStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])('local');

/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useMediaQuery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useMediaQuery.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_isClient_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isClient.js */ "./node_modules/beautiful-react-hooks/esm/utils/isClient.js");
/* harmony import */ var _utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isAPISupported.js */ "./node_modules/beautiful-react-hooks/esm/utils/isAPISupported.js");
/* beautiful-react-hooks version: 0.31.1 */





var errorMessage = 'matchMedia is not supported, this could happen both because window.matchMedia is not supported by' + ' your current browser or you\'re using the useMediaQuery hook whilst server side rendering.';

var useMediaQuery = function useMediaQuery(mediaQuery) {
  if (!_utils_isClient_js__WEBPACK_IMPORTED_MODULE_2__["default"] || !Object(_utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_3__["default"])('matchMedia')) {
    console.warn(errorMessage);
    return null;
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!!window.matchMedia(mediaQuery).matches),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isVerified = _useState2[0],
      setIsVerified = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var mediaQueryList = window.matchMedia(mediaQuery);

    var documentChangeHandler = function documentChangeHandler() {
      return setIsVerified(!!mediaQueryList.matches);
    };

    mediaQueryList.addListener(documentChangeHandler);
    documentChangeHandler();
    return function () {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [mediaQuery]);
  return isVerified;
};

/* harmony default export */ __webpack_exports__["default"] = (useMediaQuery);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useMouse.js":
/*!************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useMouse.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMouseEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMouseEvents.js */ "./node_modules/beautiful-react-hooks/esm/useMouseEvents.js");
/* harmony import */ var _useMouseState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMouseState.js */ "./node_modules/beautiful-react-hooks/esm/useMouseState.js");
/* beautiful-react-hooks version: 0.31.1 */



var useMouse = function useMouse() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var state = Object(_useMouseState_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ref);
  var events = Object(_useMouseEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ref);
  return [state, events];
};

/* harmony default export */ __webpack_exports__["default"] = (useMouse);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useMouseEvents.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useMouseEvents.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createHandlerSetter.js */ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js");
/* harmony import */ var _utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createCbSetterErrorProxy.js */ "./node_modules/beautiful-react-hooks/esm/utils/createCbSetterErrorProxy.js");
/* harmony import */ var _utils_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/hasOwnProperty.js */ "./node_modules/beautiful-react-hooks/esm/utils/hasOwnProperty.js");
/* beautiful-react-hooks version: 0.31.1 */






var assignMouseEventOnMount = function assignMouseEventOnMount(targetRef, handlerRef, eventName) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var cb = function cb(mouseEvent) {
      if (handlerRef.current) {
        handlerRef.current(mouseEvent);
      }
    };

    var target;

    if (targetRef !== null && !!targetRef.current) {
      target = targetRef.current;
    }

    if (targetRef === null) {
      target = document;
    }

    if (target && target.addEventListener) {
      target.addEventListener(eventName, cb);
    }

    return function () {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventName, cb);
      }
    };
  }, []);
};

var useMouseEvents = function useMouseEvents() {
  var targetRef = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _createHandlerSetter = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter, 2),
      onMouseDownHandler = _createHandlerSetter2[0],
      setOnMouseDown = _createHandlerSetter2[1];

  var _createHandlerSetter3 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter4 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter3, 2),
      onMouseEnterHandler = _createHandlerSetter4[0],
      setOnMouseEnter = _createHandlerSetter4[1];

  var _createHandlerSetter5 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter6 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter5, 2),
      onMouseLeaveHandler = _createHandlerSetter6[0],
      setOnMouseLeave = _createHandlerSetter6[1];

  var _createHandlerSetter7 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter8 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter7, 2),
      onMouseMoveHandler = _createHandlerSetter8[0],
      setOnMouseMove = _createHandlerSetter8[1];

  var _createHandlerSetter9 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter10 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter9, 2),
      onMouseOutHandler = _createHandlerSetter10[0],
      setOnMouseOut = _createHandlerSetter10[1];

  var _createHandlerSetter11 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter12 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter11, 2),
      onMouseOverHandler = _createHandlerSetter12[0],
      setOnMouseOver = _createHandlerSetter12[1];

  var _createHandlerSetter13 = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter14 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter13, 2),
      onMouseUpHandler = _createHandlerSetter14[0],
      setOnMouseUp = _createHandlerSetter14[1];

  if (targetRef !== null && !Object(_utils_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(targetRef, 'current')) {
    return Object(_utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Unable to assign any mouse event to the given ref');
  }

  assignMouseEventOnMount(targetRef, onMouseDownHandler, 'mousedown');
  assignMouseEventOnMount(targetRef, onMouseEnterHandler, 'mouseenter');
  assignMouseEventOnMount(targetRef, onMouseLeaveHandler, 'mouseleave');
  assignMouseEventOnMount(targetRef, onMouseMoveHandler, 'mousemove');
  assignMouseEventOnMount(targetRef, onMouseOutHandler, 'mouseout');
  assignMouseEventOnMount(targetRef, onMouseOverHandler, 'mouseover');
  assignMouseEventOnMount(targetRef, onMouseUpHandler, 'mouseup');
  return Object.freeze({
    onMouseDown: setOnMouseDown,
    onMouseEnter: setOnMouseEnter,
    onMouseLeave: setOnMouseLeave,
    onMouseMove: setOnMouseMove,
    onMouseOut: setOnMouseOut,
    onMouseOver: setOnMouseOver,
    onMouseUp: setOnMouseUp
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useMouseEvents);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useMouseState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useMouseState.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMouseEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMouseEvents.js */ "./node_modules/beautiful-react-hooks/esm/useMouseEvents.js");
/* beautiful-react-hooks version: 0.31.1 */




var createStateObject = function createStateObject(event) {
  return {
    clientX: event.clientX,
    clientY: event.clientY,
    screenX: event.screenX,
    screenY: event.screenY
  };
};

var useMouseState = function useMouseState() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  }),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useMouseEvents = Object(_useMouseEvents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ref),
      onMouseMove = _useMouseEvents.onMouseMove;

  onMouseMove(function (event) {
    var nextState = createStateObject(event);
    setState(nextState);
  });
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (useMouseState);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useObservable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useObservable.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-hooks version: 0.31.1 */


var useObservable = function useObservable(observable, setter) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = observable.subscribe(setter);
    return function () {
      return subscription.unsubscribe();
    };
  }, [observable, setter]);
};

/* harmony default export */ __webpack_exports__["default"] = (useObservable);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useOnlineState.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useOnlineState.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useGlobalEvent.js */ "./node_modules/beautiful-react-hooks/esm/useGlobalEvent.js");
/* beautiful-react-hooks version: 0.31.1 */




var useOnlineState = function useOnlineState() {
  var isSupported = typeof window !== 'undefined' && 'ononline' in window;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(isSupported ? navigator.onLine : true),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isOnline = _useState2[0],
      setIsOnline = _useState2[1];

  var whenOnline = Object(_useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_2__["default"])('online', {
    capture: true
  });
  var whenOffline = Object(_useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_2__["default"])('offline', {
    capture: true
  });

  if (!isSupported) {
    console.warn('The current device does not support the \'online/offline\' events, you should avoid using useOnlineState');
    return isOnline;
  }

  whenOnline(function () {
    setIsOnline(true);
  });
  whenOffline(function () {
    setIsOnline(false);
  });
  return isOnline;
};

/* harmony default export */ __webpack_exports__["default"] = (useOnlineState);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/usePreviousValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/usePreviousValue.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-hooks version: 0.31.1 */


var usePreviousValue = function usePreviousValue(value) {
  var prevValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    prevValue.current = value;
    return function () {
      prevValue.current = undefined;
    };
  });
  return prevValue.current;
};

/* harmony default export */ __webpack_exports__["default"] = (usePreviousValue);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useRenderInfo.js":
/*!*****************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useRenderInfo.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-hooks version: 0.31.1 */


var getInitial = function getInitial(module) {
  return {
    module: module,
    renders: 0,
    timestamp: null,
    sinceLast: null
  };
};

var useRenderInfo = function useRenderInfo() {
  var module = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown component';
  var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(getInitial(module)),
      info = _useRef.current;

  var now = +Date.now();
  info.renders += 1;
  info.sinceLast = info.timestamp ? (now - info.timestamp) / 1000 : '[now]';
  info.timestamp = now;

  if (log) {
    console.group("".concat(module, " info"));
    console.log("Render no: ".concat(info.renders).concat(info.renders > 1 ? ", ".concat(info.sinceLast, "s since last render") : ''));
    console.dir(info);
    console.groupEnd();
  }

  return info;
};

/* harmony default export */ __webpack_exports__["default"] = (useRenderInfo);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useRequestAnimationFrame.js":
/*!****************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useRequestAnimationFrame.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createHandlerSetter.js */ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js");
/* harmony import */ var _utils_isClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isClient.js */ "./node_modules/beautiful-react-hooks/esm/utils/isClient.js");
/* harmony import */ var _utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isAPISupported.js */ "./node_modules/beautiful-react-hooks/esm/utils/isAPISupported.js");
/* harmony import */ var _utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCbSetterErrorProxy.js */ "./node_modules/beautiful-react-hooks/esm/utils/createCbSetterErrorProxy.js");
/* beautiful-react-hooks version: 0.31.1 */







var defaultOptions = {
  increment: 1,
  startAt: 0,
  finishAt: 100
};
var errorMessage = 'requestAnimationFrame is not supported, this could happen both because ' + 'window.requestAnimationFrame is not supported by your current browser version or you\'re using the ' + 'useRequestAnimationFrame hook whilst server side rendering.';

var useRequestAnimationFrame = function useRequestAnimationFrame(func) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

  if (!_utils_isClient_js__WEBPACK_IMPORTED_MODULE_3__["default"] || !Object(_utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_4__["default"])('requestAnimationFrame')) {
    console.warn(errorMessage);
    return Object(_utils_createCbSetterErrorProxy_js__WEBPACK_IMPORTED_MODULE_5__["default"])(errorMessage);
  }

  var opts = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, defaultOptions), options);

  var progress = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(opts.startAt);

  var _createHandlerSetter = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _createHandlerSetter2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter, 2),
      onFinish = _createHandlerSetter2[0],
      setOnFinish = _createHandlerSetter2[1];

  var next = function next() {
    return window.requestAnimationFrame(step);
  };

  var step = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (progress.current <= opts.finishAt || opts.finishAt === -1) {
      func(progress.current, next);
      progress.current += opts.increment;
    } else if (onFinish.current) {
      onFinish.current();
    }
  }, [func, opts.finishAt, opts.increment, progress.current, onFinish.current]);

  if (progress.current <= opts.startAt) {
    next();
  }

  return setOnFinish;
};

/* harmony default export */ __webpack_exports__["default"] = (useRequestAnimationFrame);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useResizeObserver.js":
/*!*********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useResizeObserver.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isAPISupported.js */ "./node_modules/beautiful-react-hooks/esm/utils/isAPISupported.js");
/* harmony import */ var _utils_isClient_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isClient.js */ "./node_modules/beautiful-react-hooks/esm/utils/isClient.js");
/* beautiful-react-hooks version: 0.31.1 */






var errorMessage = 'ResizeObserver is not supported, this could happen both because window.ResizeObserver is not supported by your current browser or you\'re using the useResizeObserver hook whilst server side rendering.';

var useResizeObserver = function useResizeObserver(elementRef) {
  var debounceTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var isSupported = Object(_utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_3__["default"])('ResizeObserver');
  var observerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      DOMRect = _useState2[0],
      setDOMRect = _useState2[1];

  if (_utils_isClient_js__WEBPACK_IMPORTED_MODULE_4__["default"] && !isSupported) {
    console.warn(errorMessage);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isSupported) {
      var fn = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function (entries) {
        var _entries$0$contentRec = entries[0].contentRect,
            bottom = _entries$0$contentRec.bottom,
            height = _entries$0$contentRec.height,
            left = _entries$0$contentRec.left,
            right = _entries$0$contentRec.right,
            top = _entries$0$contentRec.top,
            width = _entries$0$contentRec.width;
        setDOMRect({
          bottom: bottom,
          height: height,
          left: left,
          right: right,
          top: top,
          width: width
        });
      }, debounceTimeout);
      observerRef.current = new ResizeObserver(fn);
    }

    return function () {
      if (isSupported && observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isSupported && elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }
  }, [elementRef.current]);
  return DOMRect;
};

/* harmony default export */ __webpack_exports__["default"] = (useResizeObserver);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useSessionStorage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useSessionStorage.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStorage.js */ "./node_modules/beautiful-react-hooks/esm/useStorage.js");
/* beautiful-react-hooks version: 0.31.1 */


var useSessionStorage = Object(_useStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])('session');

/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useSpeechSynthesis.js":
/*!**********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useSpeechSynthesis.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var defaultOptions = {
  rate: 0,
  pitch: 0,
  volume: 1
};

var useSpeechSynthesis = function useSpeechSynthesis(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  var utter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return new SpeechSynthesisUtterance(text);
  }, [text]);

  var voiceOptions = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, defaultOptions), options);

  utter.voice = voiceOptions.voice;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    utter.pitch = voiceOptions.pitch;
  }, [voiceOptions.pitch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    utter.rate = voiceOptions.rate;
  }, [voiceOptions.rate]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    utter.volume = voiceOptions.volume;
  }, [voiceOptions.volume]);
  var speak = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return speechSynthesis.speak(utter);
  }, [text, voiceOptions.pitch, voiceOptions.rate, voiceOptions.voice, voiceOptions.volume]);
  return {
    speak: speak,
    speechSynthUtterance: utter
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSpeechSynthesis);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useStorage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_safelyParseJson_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/safelyParseJson.js */ "./node_modules/beautiful-react-hooks/esm/utils/safelyParseJson.js");
/* harmony import */ var _utils_isClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isClient.js */ "./node_modules/beautiful-react-hooks/esm/utils/isClient.js");
/* harmony import */ var _utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isAPISupported.js */ "./node_modules/beautiful-react-hooks/esm/utils/isAPISupported.js");
/* harmony import */ var _utils_isDevelopment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isDevelopment.js */ "./node_modules/beautiful-react-hooks/esm/utils/isDevelopment.js");
/* beautiful-react-hooks version: 0.31.1 */







var useStorage = function useStorage(type) {
  var storageName = "".concat(type, "Storage");

  if (_utils_isClient_js__WEBPACK_IMPORTED_MODULE_3__["default"] && !Object(_utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_4__["default"])(storageName)) {
    console.warn("".concat(storageName, " is not supported"));
  }

  return function (storageKey, defaultValue) {
    if (!_utils_isClient_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      if (_utils_isDevelopment_js__WEBPACK_IMPORTED_MODULE_5__["default"]) {
        console.warn("Please be aware that ".concat(storageName, " could not be available during SSR"));
      }

      return [JSON.stringify(defaultValue), function () {
        return undefined;
      }];
    }

    var storage = window[storageName];

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_safelyParseJson_js__WEBPACK_IMPORTED_MODULE_2__["default"])(storage.getItem(storageKey) || JSON.stringify(defaultValue))),
        _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      storage.setItem(storageKey, JSON.stringify(value));
    }, [storageKey, value]);
    return [value, setValue];
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useStorage);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useSystemVoices.js":
/*!*******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useSystemVoices.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var asyncGetSystemVoices = function asyncGetSystemVoices() {
  return new Promise(function (resolve) {
    window.speechSynthesis.onvoiceschanged = function () {
      return resolve(window.speechSynthesis.getVoices());
    };

    window.speechSynthesis.getVoices();
  });
};

var useSystemVoices = function useSystemVoices() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      voices = _useState2[0],
      setVoices = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    asyncGetSystemVoices().then(setVoices);
  }, []);
  return voices;
};

/* harmony default export */ __webpack_exports__["default"] = (useSystemVoices);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useThrottledFn.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useThrottledFn.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var defaultOptions = {
  leading: false,
  trailing: true
};

var useThrottledFn = function useThrottledFn(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;
  var dependencies = arguments.length > 3 ? arguments[3] : undefined;
  var throttled = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(fn, wait, options);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(throttled, dependencies);
};

/* harmony default export */ __webpack_exports__["default"] = (useThrottledFn);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useTimeout.js":
/*!**************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useTimeout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var defaultOptions = {
  cancelOnUnmount: true
};

var useTimeout = function useTimeout(fn, milliseconds) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;

  var opts = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, defaultOptions), options || {});

  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var callback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(fn);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isCleared = _useState2[0],
      setIsCleared = _useState2[1];

  var clear = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsCleared(true);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof milliseconds === 'number') {
      timeout.current = setTimeout(function () {
        callback.current();
      }, milliseconds);
    }

    return clear;
  }, [milliseconds]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      if (opts.cancelOnUnmount) {
        clear();
      }
    };
  }, []);
  return [isCleared, clear];
};

/* harmony default export */ __webpack_exports__["default"] = (useTimeout);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useValidatedState.js":
/*!*********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useValidatedState.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* beautiful-react-hooks version: 0.31.1 */



var useValidatedState = function useValidatedState(validator, initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var validation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    changed: false
  });
  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (nextValue) {
    setState(nextValue);
    validation.current = {
      changed: true,
      valid: validator(nextValue)
    };
  }, [validator]);
  return [state, onChange, validation.current];
};

/* harmony default export */ __webpack_exports__["default"] = (useValidatedState);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useValueHistory.js":
/*!*******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useValueHistory.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-hooks version: 0.31.1 */


var distinctValues = function distinctValues(value, current, array) {
  return array.indexOf(value) === current;
};

var useValueHistory = function useValueHistory(value) {
  var distinct = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var history = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    history.current.push(value);

    if (distinct) {
      history.current.filter(distinctValues);
    }
  }, [value]);
  return history.current;
};

/* harmony default export */ __webpack_exports__["default"] = (useValueHistory);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useViewportSpy.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useViewportSpy.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_isClient_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isClient.js */ "./node_modules/beautiful-react-hooks/esm/utils/isClient.js");
/* harmony import */ var _utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isAPISupported.js */ "./node_modules/beautiful-react-hooks/esm/utils/isAPISupported.js");
/* beautiful-react-hooks version: 0.31.1 */





var defaultOptions = {
  root: undefined,
  rootMargin: '0px',
  threshold: 0
};
var errorMessage = 'IntersectionObserver is not supported, this could happen both because' + ' window.IntersectionObserver is not supported by' + ' your current browser or you\'re using the useViewportSpy hook whilst server side rendering.';

var useViewportSpy = function useViewportSpy(elementRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

  if (!_utils_isClient_js__WEBPACK_IMPORTED_MODULE_2__["default"] || !Object(_utils_isAPISupported_js__WEBPACK_IMPORTED_MODULE_3__["default"])('IntersectionObserver')) {
    console.warn(errorMessage);
    return null;
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    var observer = new window.IntersectionObserver(function (entries) {
      return entries.forEach(function (item) {
        var nextValue = item.isIntersecting;
        setIsVisible(nextValue);
      });
    }, options);
    observer.observe(elementRef.current);
    return function () {
      observer.disconnect(elementRef.current);
    };
  }, [elementRef]);
  return isVisible;
};

/* harmony default export */ __webpack_exports__["default"] = (useViewportSpy);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useWillUnmount.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useWillUnmount.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createHandlerSetter.js */ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js");
/* beautiful-react-hooks version: 0.31.1 */




var useWillUnmount = function useWillUnmount(handler) {
  var _createHandlerSetter = Object(_utils_createHandlerSetter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(handler),
      _createHandlerSetter2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_createHandlerSetter, 2),
      onUnmountHandler = _createHandlerSetter2[0],
      setOnUnmount = _createHandlerSetter2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      if (onUnmountHandler.current) {
        onUnmountHandler.current();
      }
    };
  }, []);
  return setOnUnmount;
};

/* harmony default export */ __webpack_exports__["default"] = (useWillUnmount);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useWindowResize.js":
/*!*******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useWindowResize.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useGlobalEvent.js */ "./node_modules/beautiful-react-hooks/esm/useGlobalEvent.js");
/* beautiful-react-hooks version: 0.31.1 */


var useWindowResize = function useWindowResize(handler) {
  return Object(_useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])('resize', null, handler);
};

/* harmony default export */ __webpack_exports__["default"] = (useWindowResize);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/useWindowScroll.js":
/*!*******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/useWindowScroll.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useGlobalEvent.js */ "./node_modules/beautiful-react-hooks/esm/useGlobalEvent.js");
/* beautiful-react-hooks version: 0.31.1 */


var useWindowScroll = function useWindowScroll(handler) {
  return Object(_useGlobalEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])('scroll', null, handler);
};

/* harmony default export */ __webpack_exports__["default"] = (useWindowScroll);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/createCbSetterErrorProxy.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/createCbSetterErrorProxy.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-hooks version: 0.31.1 */
var createCbSetterErrorProxy = function createCbSetterErrorProxy(errorMessage) {
  return new Proxy(Object.create(null), {
    get: function get(target, property) {
      if (property && typeof property === 'string' && property.slice(0, 2) === 'on') {
        return function () {
          throw new Error(errorMessage);
        };
      }

      return {
        error: errorMessage
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createCbSetterErrorProxy);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/createHandlerSetter.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* beautiful-react-hooks version: 0.31.1 */


var createHandlerSetter = function createHandlerSetter(handlerValue) {
  var handlerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(handlerValue);
  handlerRef.current = handlerValue;
  var setHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextCallback) {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function');
    }

    handlerRef.current = nextCallback;
  });
  return [handlerRef, setHandler];
};

/* harmony default export */ __webpack_exports__["default"] = (createHandlerSetter);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/geolocationStandardOptions.js":
/*!************************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/geolocationStandardOptions.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-hooks version: 0.31.1 */
var geoStandardOptions = Object.create(null);
geoStandardOptions.enableHighAccuracy = false;
geoStandardOptions.timeout = 0xFFFFFFFF;
geoStandardOptions.maximumAge = 0;
var geolocationStandardOptions = Object.freeze(geoStandardOptions);

/* harmony default export */ __webpack_exports__["default"] = (geolocationStandardOptions);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/hasOwnProperty.js":
/*!************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/hasOwnProperty.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-hooks version: 0.31.1 */
var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return obj ? Object.prototype.hasOwnProperty.call(obj, prop) : false;
};

/* harmony default export */ __webpack_exports__["default"] = (hasOwnProperty);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/isAPISupported.js":
/*!************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/isAPISupported.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-hooks version: 0.31.1 */
var isApiSupported = function isApiSupported(api) {
  return typeof window !== 'undefined' ? api in window : false;
};

/* harmony default export */ __webpack_exports__["default"] = (isApiSupported);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/isClient.js":
/*!******************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/isClient.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/beautiful-react-hooks/esm/_virtual/_rollupPluginBabelHelpers.js");
/* beautiful-react-hooks version: 0.31.1 */


var isClient = (typeof window === "undefined" ? "undefined" : Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["typeof"])(window)) === 'object';

/* harmony default export */ __webpack_exports__["default"] = (isClient);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/isDevelopment.js":
/*!***********************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/isDevelopment.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* beautiful-react-hooks version: 0.31.1 */
var isDevelopment = typeof process !== 'undefined' && process.env && ( false || "development" === 'development');

/* harmony default export */ __webpack_exports__["default"] = (isDevelopment);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/isSamePosition.js":
/*!************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/isSamePosition.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-hooks version: 0.31.1 */
var isSamePosition = function isSamePosition(current, next) {
  if (!current || !next || !next.coords) return false;
  if (current.timestamp && next.timestamp && current.timestamp !== next.timestamp) return false;
  return current.coords.latitude === next.coords.latitude && current.coords.longitude === next.coords.longitude && current.coords.altitude === next.coords.altitude && current.coords.accuracy === next.coords.accuracy && current.coords.altitudeAccuracy === next.coords.altitudeAccuracy && current.coords.heading === next.coords.heading && current.coords.speed === next.coords.speed;
};

/* harmony default export */ __webpack_exports__["default"] = (isSamePosition);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/makePositionObject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/makePositionObject.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-hooks version: 0.31.1 */
var makePositionObj = function makePositionObj(position) {
  return !position ? null : {
    timestamp: position.timestamp,
    coords: {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      altitude: position.coords.altitude,
      accuracy: position.coords.accuracy,
      altitudeAccuracy: position.coords.altitudeAccuracy,
      heading: position.coords.heading,
      speed: position.coords.speed
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (makePositionObj);


/***/ }),

/***/ "./node_modules/beautiful-react-hooks/esm/utils/safelyParseJson.js":
/*!*************************************************************************!*\
  !*** ./node_modules/beautiful-react-hooks/esm/utils/safelyParseJson.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* beautiful-react-hooks version: 0.31.1 */
var safelyParseJson = function safelyParseJson(parseString) {
  try {
    return JSON.parse(parseString);
  } catch (e) {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (safelyParseJson);


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/lodash.findindex/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.findindex/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = findIndex;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js"), __webpack_require__(/*! ./../next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js"), __webpack_require__(/*! ./../next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/beautiful-react-diagrams/styles.css":
/*!**********************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/beautiful-react-diagrams/styles.css ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bi.bi-diagram{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;border:.07rem solid #dae1e7;border-radius:.25rem;-webkit-box-shadow:0 .8rem 1rem -.2rem rgba(0,0,0,.1),0 .25rem .5rem -.02rem rgba(0,0,0,.05);box-shadow:0 .8rem 1rem -.2rem rgba(0,0,0,.1),0 .25rem .5rem -.02rem rgba(0,0,0,.05);min-height:100%;background-color:#f8fafc;position:relative;overflow:hidden}.bi.bi-diagram .bi.bi-diagram-node{-webkit-box-sizing:content-box;box-sizing:content-box;position:absolute;z-index:50;-webkit-user-select:none;-ms-user-select:none;user-select:none}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper{display:flex}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-input-ports,.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports{flex:1 1}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-input-ports .bi-diagram-port,.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports .bi-diagram-port{-webkit-transition:background-color .25s ease-in-out;transition:background-color .25s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:background-color;background-color:rgba(0,0,0,.08);width:20px;width:1.25rem;height:20px;height:1.25rem;margin-bottom:.25rem}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-input-ports .bi-diagram-port:hover,.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports .bi-diagram-port:hover{background-color:rgba(0,0,0,.1)}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports .bi-diagram-port{margin-left:auto}.bi.bi-diagram .bi.bi-diagram-node.bi-diagram-node-default{-webkit-transition:border .3s ease-out,-webkit-box-shadow .25s ease-in-out;transition:border .3s ease-out,-webkit-box-shadow .25s ease-in-out;transition:box-shadow .25s ease-in-out,border .3s ease-out;transition:box-shadow .25s ease-in-out,border .3s ease-out,-webkit-box-shadow .25s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:box-shadow,border;border:.07rem solid #8795a1;background-color:#dae1e7;color:#606f7b;border-radius:.25rem;-webkit-box-shadow:0 .07rem .2rem 0 rgba(0,0,0,.1),0 .07rem .125rem 0 rgba(0,0,0,.06);box-shadow:0 .07rem .2rem 0 rgba(0,0,0,.1),0 .07rem .125rem 0 rgba(0,0,0,.06);padding:.5rem}.bi.bi-diagram .bi.bi-diagram-node.bi-diagram-node-default:hover{-webkit-box-shadow:0 .125rem 1rem -.2rem rgba(0,0,0,.1),0 .25rem .3rem -125rem rgba(0,0,0,.05);box-shadow:0 .125rem 1rem -.2rem rgba(0,0,0,.1),0 .25rem .3rem -125rem rgba(0,0,0,.05)}.bi.bi-diagram .bi.bi-diagram-node.bi-diagram-node-default .bi-port-wrapper{margin-left:-.5rem;margin-right:-.5rem}.bi.bi-diagram .bi-link-canvas-layer{pointer-events:none;width:100%;height:100%;z-index:0;position:absolute;top:0;right:0;bottom:0;left:0}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-segment path{stroke:#dae1e7;stroke-width:.25rem;stroke-dasharray:10,2;fill:transparent;-webkit-animation:BiDashSegmentAnimation 1s linear infinite;animation:BiDashSegmentAnimation 1s linear infinite}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-segment circle{stroke:#dae1e7;stroke-width:.15rem;fill:#88cdff}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link{pointer-events:stroke}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link .bi-link-path{stroke:#dae1e7;stroke-width:.25rem;pointer-events:stroke;fill:transparent;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link .bi-link-ghost{pointer-events:stroke;stroke:transparent;stroke-width:1.2rem;fill:transparent;cursor:pointer}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link:hover .bi-link-path{stroke:#88cdff;stroke-dasharray:10,2;-webkit-animation:BiDashSegmentAnimation 1s linear infinite;animation:BiDashSegmentAnimation 1s linear infinite}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link.readonly-link .bi-link-ghost{cursor:not-allowed}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link.readonly-link .bi-link-path{cursor:not-allowed;stroke:#b8c2cc;stroke-dasharray:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link.readonly-link:hover{stroke:#b8c2cc;stroke-dasharray:none;-webkit-animation:none;animation:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link foreignObject{width:100%;height:100%;overflow:visible;pointer-events:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link .bi-diagram-link-label{display:inline-block;color:#fff;background-color:#3d4852;border-radius:.25rem;padding:.25rem;text-align:center;font-size:14px;font-size:.875rem;-webkit-user-select:none;-ms-user-select:none;user-select:none;min-width:48px;min-width:3rem;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@-webkit-keyframes BiDashSegmentAnimation{0%{stroke-dashoffset:24}to{stroke-dashoffset:0}}@keyframes BiDashSegmentAnimation{0%{stroke-dashoffset:24}to{stroke-dashoffset:0}}", "",{"version":3,"sources":["webpack://node_modules/beautiful-react-diagrams/styles.css"],"names":[],"mappings":"AAAA,eAAe,6BAAqB,CAArB,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,2BAA2B,CAAC,oBAAoB,CAAC,4FAAoF,CAApF,oFAAoF,CAAC,eAAe,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,eAAe,CAAC,mCAAmC,8BAAsB,CAAtB,sBAAsB,CAAC,iBAAiB,CAAC,UAAU,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,oDAAoD,YAAY,CAAC,yIAAyI,QAAQ,CAAC,2KAA2K,oDAA4C,CAA5C,4CAA4C,CAAC,kCAA0B,CAA1B,0BAA0B,CAAC,4BAA4B,CAAC,gCAAgC,CAAC,UAAU,CAAC,aAAa,CAAC,WAAW,CAAC,cAAc,CAAC,oBAAoB,CAAC,uLAAuL,+BAA+B,CAAC,sFAAsF,gBAAgB,CAAC,2DAA2D,0EAA0D,CAA1D,kEAA0D,CAA1D,0DAA0D,CAA1D,8FAA0D,CAAC,kCAA0B,CAA1B,0BAA0B,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,aAAa,CAAC,oBAAoB,CAAC,qFAA6E,CAA7E,6EAA6E,CAAC,aAAa,CAAC,iEAAiE,8FAAqF,CAArF,sFAAsF,CAAC,4EAA4E,kBAAkB,CAAC,mBAAmB,CAAC,qCAAqC,mBAAmB,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,iBAAiB,CAAC,KAAK,CAAC,OAAO,CAAC,QAAQ,CAAC,MAAM,CAAC,8DAA8D,cAAc,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,gBAAgB,CAAC,2DAAkD,CAAlD,mDAAmD,CAAC,gEAAgE,cAAc,CAAC,mBAAmB,CAAC,YAAY,CAAC,sDAAsD,qBAAqB,CAAC,oEAAoE,cAAc,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,gBAAgB,CAAC,cAAc,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,qEAAqE,qBAAqB,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,gBAAgB,CAAC,cAAc,CAAC,0EAA0E,cAAc,CAAC,qBAAqB,CAAC,2DAAkD,CAAlD,mDAAmD,CAAC,mFAAmF,kBAAkB,CAAC,kFAAkF,kBAAkB,CAAC,cAAc,CAAC,qBAAqB,CAAC,0EAA0E,cAAc,CAAC,qBAAqB,CAAC,sBAAa,CAAb,cAAc,CAAC,oEAAoE,UAAU,CAAC,WAAW,CAAC,gBAAgB,CAAC,mBAAmB,CAAC,6EAA6E,oBAAoB,CAAC,UAAU,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,cAAc,CAAC,iBAAiB,CAAC,cAAc,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,cAAc,CAAC,cAAc,CAAC,sCAA6B,CAA7B,8BAA8B,CAAC,0CAAkC,GAAG,oBAAoB,CAAC,GAAG,mBAAmB,CAAC,CAAjF,kCAAkC,GAAG,oBAAoB,CAAC,GAAG,mBAAmB,CAAC","sourcesContent":[".bi.bi-diagram{box-sizing:border-box;width:100%;height:100%;border:.07rem solid #dae1e7;border-radius:.25rem;box-shadow:0 .8rem 1rem -.2rem rgba(0,0,0,.1),0 .25rem .5rem -.02rem rgba(0,0,0,.05);min-height:100%;background-color:#f8fafc;position:relative;overflow:hidden}.bi.bi-diagram .bi.bi-diagram-node{box-sizing:content-box;position:absolute;z-index:50;-webkit-user-select:none;-ms-user-select:none;user-select:none}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper{display:flex}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-input-ports,.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports{flex:1 1}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-input-ports .bi-diagram-port,.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports .bi-diagram-port{transition:background-color .25s ease-in-out;backface-visibility:hidden;will-change:background-color;background-color:rgba(0,0,0,.08);width:20px;width:1.25rem;height:20px;height:1.25rem;margin-bottom:.25rem}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-input-ports .bi-diagram-port:hover,.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports .bi-diagram-port:hover{background-color:rgba(0,0,0,.1)}.bi.bi-diagram .bi.bi-diagram-node .bi-port-wrapper .bi-output-ports .bi-diagram-port{margin-left:auto}.bi.bi-diagram .bi.bi-diagram-node.bi-diagram-node-default{transition:box-shadow .25s ease-in-out,border .3s ease-out;backface-visibility:hidden;will-change:box-shadow,border;border:.07rem solid #8795a1;background-color:#dae1e7;color:#606f7b;border-radius:.25rem;box-shadow:0 .07rem .2rem 0 rgba(0,0,0,.1),0 .07rem .125rem 0 rgba(0,0,0,.06);padding:.5rem}.bi.bi-diagram .bi.bi-diagram-node.bi-diagram-node-default:hover{box-shadow:0 .125rem 1rem -.2rem rgba(0,0,0,.1),0 .25rem .3rem -125rem rgba(0,0,0,.05)}.bi.bi-diagram .bi.bi-diagram-node.bi-diagram-node-default .bi-port-wrapper{margin-left:-.5rem;margin-right:-.5rem}.bi.bi-diagram .bi-link-canvas-layer{pointer-events:none;width:100%;height:100%;z-index:0;position:absolute;top:0;right:0;bottom:0;left:0}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-segment path{stroke:#dae1e7;stroke-width:.25rem;stroke-dasharray:10,2;fill:transparent;animation:BiDashSegmentAnimation 1s linear infinite}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-segment circle{stroke:#dae1e7;stroke-width:.15rem;fill:#88cdff}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link{pointer-events:stroke}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link .bi-link-path{stroke:#dae1e7;stroke-width:.25rem;pointer-events:stroke;fill:transparent;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link .bi-link-ghost{pointer-events:stroke;stroke:transparent;stroke-width:1.2rem;fill:transparent;cursor:pointer}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link:hover .bi-link-path{stroke:#88cdff;stroke-dasharray:10,2;animation:BiDashSegmentAnimation 1s linear infinite}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link.readonly-link .bi-link-ghost{cursor:not-allowed}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link.readonly-link .bi-link-path{cursor:not-allowed;stroke:#b8c2cc;stroke-dasharray:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link.readonly-link:hover{stroke:#b8c2cc;stroke-dasharray:none;animation:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link foreignObject{width:100%;height:100%;overflow:visible;pointer-events:none}.bi.bi-diagram .bi-link-canvas-layer .bi-diagram-link .bi-diagram-link-label{display:inline-block;color:#fff;background-color:#3d4852;border-radius:.25rem;padding:.25rem;text-align:center;font-size:14px;font-size:.875rem;-webkit-user-select:none;-ms-user-select:none;user-select:none;min-width:48px;min-width:3rem;transform:translate(-50%,-50%)}@keyframes BiDashSegmentAnimation{0%{stroke-dashoffset:24}to{stroke-dashoffset:0}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
/*!***********************************!*\
  !*** (webpack)/webpack/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 149:
/***/ (function(module) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(149);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L0RpYWdyYW0udHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL0NvbnRleHQvRGlhZ3JhbUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL0RpYWdyYW0vRGlhZ3JhbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vRGlhZ3JhbS9EaWFncmFtQ2FudmFzL0RpYWdyYW1DYW52YXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL0RpYWdyYW0vRGlhZ3JhbU5vZGUvRGlhZ3JhbU5vZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL0RpYWdyYW0vRGlhZ3JhbU5vZGUvZ2V0RGlhZ3JhbU5vZGVTdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vRGlhZ3JhbS9EaWFncmFtTm9kZS9wb3J0R2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9EaWFncmFtL0xpbmsvTGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vRGlhZ3JhbS9MaW5rL0xpbmtMYWJlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vRGlhZ3JhbS9MaW5rL2dldEVudGl0eUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9EaWFncmFtL0xpbmtzQ2FudmFzL0xpbmtzQ2FudmFzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9EaWFncmFtL0xpbmtzQ2FudmFzL2ZpbmRJbnZvbHZlZEVudGl0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vRGlhZ3JhbS9MaW5rc0NhbnZhcy9yZW1vdmVMaW5rRnJvbUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9EaWFncmFtL05vZGVzQ2FudmFzL05vZGVzQ2FudmFzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9EaWFncmFtL05vZGVzQ2FudmFzL3VwZGF0ZU5vZGVDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vRGlhZ3JhbS9Qb3J0L1BvcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL0RpYWdyYW0vU2VnbWVudC9TZWdtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9ob29rcy91c2VTY2hlbWEvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL2hvb2tzL3VzZVNjaGVtYS9zY2hlbWFSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9ob29rcy91c2VTY2hlbWEvdXNlU2NoZW1hLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vc2hhcmVkL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vc2hhcmVkL1R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9zaGFyZWQvZnVuY3Rpb25zL2NyZWF0ZVNjaGVtYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vc2hhcmVkL2Z1bmN0aW9ucy9lbnN1cmVOb2RlSWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL3NoYXJlZC9mdW5jdGlvbnMvZ2V0Tm9kZVBvcnRzSWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL3NoYXJlZC9mdW5jdGlvbnMvZ2V0UGF0aE1pZHBvaW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9zaGFyZWQvZnVuY3Rpb25zL2dldFJlbGF0aXZlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL3NoYXJlZC9mdW5jdGlvbnMvbWFrZVN2Z1BhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL3NoYXJlZC9mdW5jdGlvbnMvdmFsaWRhdG9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vc2hhcmVkL2ludGVybmFsX2hvb2tzL3VzZUNhbnZhcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9lc20vc2hhcmVkL2ludGVybmFsX2hvb2tzL3VzZUNvbnRleHRSZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL3NoYXJlZC9pbnRlcm5hbF9ob29rcy91c2VEcmFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL2VzbS9zaGFyZWQvaW50ZXJuYWxfaG9va3MvdXNlTm9kZVJlZnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL3NoYXJlZC9pbnRlcm5hbF9ob29rcy91c2VOb2RlVW5yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMvZXNtL3NoYXJlZC9pbnRlcm5hbF9ob29rcy91c2VQb3J0UmVmcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9zdHlsZXMuY3NzPzBjM2QiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VDb25kaXRpb25hbFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZURlYm91bmNlZEZuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VEZWZhdWx0ZWRTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlRGlkTW91bnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZURyYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZURyYWdFdmVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZURyb3Bab25lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VHZW9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlR2VvbG9jYXRpb25FdmVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZUdlb2xvY2F0aW9uU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZUdsb2JhbEV2ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VJbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlTGlmZWN5Y2xlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZU1lZGlhUXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZU1vdXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VNb3VzZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlTW91c2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlT25saW5lU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVByZXZpb3VzVmFsdWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVJlbmRlckluZm8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlUmVzaXplT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVNlc3Npb25TdG9yYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VTcGVlY2hTeW50aGVzaXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVN5c3RlbVZvaWNlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlVGhyb3R0bGVkRm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVZhbGlkYXRlZFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VWYWx1ZUhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3VzZVZpZXdwb3J0U3B5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VXaWxsVW5tb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXNlV2luZG93UmVzaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91c2VXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3V0aWxzL2NyZWF0ZUNiU2V0dGVyRXJyb3JQcm94eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXRpbHMvY3JlYXRlSGFuZGxlclNldHRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXRpbHMvZ2VvbG9jYXRpb25TdGFuZGFyZE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3V0aWxzL2hhc093blByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91dGlscy9pc0FQSVN1cHBvcnRlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1ob29rcy9lc20vdXRpbHMvaXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3V0aWxzL2lzRGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3V0aWxzL2lzU2FtZVBvc2l0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWhvb2tzL2VzbS91dGlscy9tYWtlUG9zaXRpb25PYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iZWF1dGlmdWwtcmVhY3QtaG9va3MvZXNtL3V0aWxzL3NhZmVseVBhcnNlSnNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZmluZGluZGV4L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoLmlzZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTY2hlbWEiLCJjcmVhdGVTY2hlbWEiLCJub2RlcyIsImlkIiwiY29udGVudCIsImNvb3JkaW5hdGVzIiwibGlua3MiLCJpbnB1dCIsIm91dHB1dCIsIlVuY29udHJvbGxlZERpYWdyYW0iLCJ1c2VTY2hlbWEiLCJzY2hlbWEiLCJvbkNoYW5nZSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUdDLDZFQUFZLENBQUM7QUFDakNDLE9BQUssRUFBRSxDQUNMO0FB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QUN0Q3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLEtBQTBCOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUSxPQUFPLFNBQVMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsU0FBUyxHQUFHO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sT0FBTyxTQUFTLEVBQUU7QUFDeEIsTUFBTSxPQUFPLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3oxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsS0FBMEI7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBLElBQUksSUFBcUM7QUFDekMsNkJBQTZCLG1CQUFPLENBQUMseUZBQTRCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxrREFBVTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDLDJCQUEyQixtQkFBTyxDQUFDLHlGQUE0QjtBQUMvRCxxQkFBcUIsbUJBQU8sQ0FBQyxxRUFBa0I7O0FBRS9DO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxDQUFDLE1BQU0sRUFJTjs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwTGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsMEZBQStCO0FBQzFEIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFncmFtLCB7IGNyZWF0ZVNjaGVtYSwgdXNlU2NoZW1hIH0gZnJvbSBcImJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtc1wiO1xuaW1wb3J0IFwiYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zL3N0eWxlcy5jc3NcIjtcblxuLy8gdGhlIGRpYWdyYW0gbW9kZWxcbmNvbnN0IGluaXRpYWxTY2hlbWEgPSBjcmVhdGVTY2hlbWEoe1xuICBub2RlczogW1xuICAgIHsgaWQ6IFwibm9kZS0xXCIsIGNvbnRlbnQ6IFwiTm9kZSAxXCIsIGNvb3JkaW5hdGVzOiBbMjUwLCA2MF0gfSxcbiAgICB7IGlkOiBcIm5vZGUtMlwiLCBjb250ZW50OiBcIk5vZGUgMlwiLCBjb29yZGluYXRlczogWzEwMCwgMjAwXSB9LFxuICAgIHsgaWQ6IFwibm9kZS0zXCIsIGNvbnRlbnQ6IFwiTm9kZSAzXCIsIGNvb3JkaW5hdGVzOiBbMjUwLCAyMjBdIH0sXG4gICAgeyBpZDogXCJub2RlLTRcIiwgY29udGVudDogXCJOb2RlIDRcIiwgY29vcmRpbmF0ZXM6IFs0MDAsIDIwMF0gfSxcbiAgXSxcbiAgbGlua3M6IFtcbiAgICB7IGlucHV0OiBcIm5vZGUtMVwiLCBvdXRwdXQ6IFwibm9kZS0yXCIgfSxcbiAgICB7IGlucHV0OiBcIm5vZGUtMVwiLCBvdXRwdXQ6IFwibm9kZS0zXCIgfSxcbiAgICB7IGlucHV0OiBcIm5vZGUtMVwiLCBvdXRwdXQ6IFwibm9kZS00XCIgfSxcbiAgXSxcbn0pO1xuXG5jb25zdCBVbmNvbnRyb2xsZWREaWFncmFtID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgZGlhZ3JhbXMgc2NoZW1hXG4gIGNvbnN0IFtzY2hlbWEsIHsgb25DaGFuZ2UgfV0gPSB1c2VTY2hlbWEoaW5pdGlhbFNjaGVtYSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIyMi41cmVtXCIgfX0+XG4gICAgICA8RGlhZ3JhbSBzY2hlbWE9e3NjaGVtYX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVW5jb250cm9sbGVkRGlhZ3JhbTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIERpYWdyYW1Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGNhbnZhczogbnVsbCxcbiAgcG9ydHM6IG51bGwsXG4gIG5vZGVzOiBudWxsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhZ3JhbUNvbnRleHQ7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcywgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSwgZXh0ZW5kcyBhcyBfZXh0ZW5kcywgdG9Db25zdW1hYmxlQXJyYXkgYXMgX3RvQ29uc3VtYWJsZUFycmF5IH0gZnJvbSAnLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERpYWdyYW1DYW52YXMgZnJvbSAnLi9EaWFncmFtQ2FudmFzL0RpYWdyYW1DYW52YXMuanMnO1xuaW1wb3J0IHsgU2NoZW1hVHlwZSB9IGZyb20gJy4uL3NoYXJlZC9UeXBlcy5qcyc7XG5pbXBvcnQgTm9kZXNDYW52YXMgZnJvbSAnLi9Ob2Rlc0NhbnZhcy9Ob2Rlc0NhbnZhcy5qcyc7XG5pbXBvcnQgTGlua3NDYW52YXMgZnJvbSAnLi9MaW5rc0NhbnZhcy9MaW5rc0NhbnZhcy5qcyc7XG5cbnZhciBEaWFncmFtID0gZnVuY3Rpb24gRGlhZ3JhbShwcm9wcykge1xuICB2YXIgc2NoZW1hID0gcHJvcHMuc2NoZW1hLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInNjaGVtYVwiLCBcIm9uQ2hhbmdlXCJdKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgc2VnbWVudCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRTZWdtZW50ID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVJlZiA9IHVzZVJlZih7fSksXG4gICAgICBwb3J0UmVmcyA9IF91c2VSZWYuY3VycmVudDtcblxuICB2YXIgX3VzZVJlZjIgPSB1c2VSZWYoe30pLFxuICAgICAgbm9kZVJlZnMgPSBfdXNlUmVmMi5jdXJyZW50O1xuXG4gIHZhciBvbk5vZGVzQ2hhbmdlID0gZnVuY3Rpb24gb25Ob2Rlc0NoYW5nZShuZXh0Tm9kZXMpIHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgbm9kZXM6IG5leHROb2Rlc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvblBvcnRSZWdpc3RlciA9IGZ1bmN0aW9uIG9uUG9ydFJlZ2lzdGVyKHBvcnRJZCwgcG9ydEVsKSB7XG4gICAgcG9ydFJlZnNbcG9ydElkXSA9IHBvcnRFbDtcbiAgfTtcblxuICB2YXIgb25Ob2RlUmVnaXN0ZXIgPSBmdW5jdGlvbiBvbk5vZGVSZWdpc3Rlcihub2RlSWQsIG5vZGVFbCkge1xuICAgIG5vZGVSZWZzW25vZGVJZF0gPSBub2RlRWw7XG4gIH07XG5cbiAgdmFyIG9uTm9kZVJlbW92ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChub2RlSWQsIGlucHV0c1BvcnRzLCBvdXRwdXRzUG9ydHMpIHtcbiAgICBkZWxldGUgbm9kZVJlZnNbbm9kZUlkXTtcbiAgICBpbnB1dHNQb3J0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgcmV0dXJuIGRlbGV0ZSBwb3J0UmVmc1tpbnB1dF07XG4gICAgfSk7XG4gICAgb3V0cHV0c1BvcnRzLmZvckVhY2goZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgcmV0dXJuIGRlbGV0ZSBwb3J0UmVmc1tvdXRwdXRdO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBvbkRyYWdOZXdTZWdtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBvcnRJZCwgZnJvbSwgdG8sIGFsaWdubWVudCkge1xuICAgIHNldFNlZ21lbnQoe1xuICAgICAgaWQ6IFwic2VnbWVudC1cIi5jb25jYXQocG9ydElkKSxcbiAgICAgIGZyb206IGZyb20sXG4gICAgICB0bzogdG8sXG4gICAgICBhbGlnbm1lbnQ6IGFsaWdubWVudFxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBvblNlZ21lbnRGYWlsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldFNlZ21lbnQodW5kZWZpbmVkKTtcbiAgfSwgW10pO1xuXG4gIHZhciBvblNlZ21lbnRDb25uZWN0ID0gZnVuY3Rpb24gb25TZWdtZW50Q29ubmVjdChpbnB1dCwgb3V0cHV0KSB7XG4gICAgdmFyIG5leHRMaW5rcyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc2NoZW1hLmxpbmtzIHx8IFtdKSwgW3tcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIG91dHB1dDogb3V0cHV0XG4gICAgfV0pO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIGxpbmtzOiBuZXh0TGlua3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFNlZ21lbnQodW5kZWZpbmVkKTtcbiAgfTtcblxuICB2YXIgb25MaW5rRGVsZXRlID0gZnVuY3Rpb24gb25MaW5rRGVsZXRlKG5leHRMaW5rcykge1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBsaW5rczogbmV4dExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhZ3JhbUNhbnZhcywgX2V4dGVuZHMoe1xuICAgIHBvcnRSZWZzOiBwb3J0UmVmcyxcbiAgICBub2RlUmVmczogbm9kZVJlZnNcbiAgfSwgcmVzdCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm9kZXNDYW52YXMsIHtcbiAgICBub2Rlczogc2NoZW1hLm5vZGVzLFxuICAgIG9uQ2hhbmdlOiBvbk5vZGVzQ2hhbmdlLFxuICAgIG9uTm9kZVJlZ2lzdGVyOiBvbk5vZGVSZWdpc3RlcixcbiAgICBvblBvcnRSZWdpc3Rlcjogb25Qb3J0UmVnaXN0ZXIsXG4gICAgb25Ob2RlUmVtb3ZlOiBvbk5vZGVSZW1vdmUsXG4gICAgb25EcmFnTmV3U2VnbWVudDogb25EcmFnTmV3U2VnbWVudCxcbiAgICBvblNlZ21lbnRGYWlsOiBvblNlZ21lbnRGYWlsLFxuICAgIG9uU2VnbWVudENvbm5lY3Q6IG9uU2VnbWVudENvbm5lY3RcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlua3NDYW52YXMsIHtcbiAgICBub2Rlczogc2NoZW1hLm5vZGVzLFxuICAgIGxpbmtzOiBzY2hlbWEubGlua3MsXG4gICAgc2VnbWVudDogc2VnbWVudCxcbiAgICBvbkNoYW5nZTogb25MaW5rRGVsZXRlXG4gIH0pKTtcbn07XG5cbkRpYWdyYW0ucHJvcFR5cGVzID0ge1xuICBzY2hlbWE6IFNjaGVtYVR5cGUsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufTtcbkRpYWdyYW0uZGVmYXVsdFByb3BzID0ge1xuICBzY2hlbWE6IHtcbiAgICBub2RlczogW10sXG4gICAgbGlua3M6IFtdXG4gIH0sXG4gIG9uQ2hhbmdlOiB1bmRlZmluZWRcbn07XG52YXIgRGlhZ3JhbSQxID0gUmVhY3QubWVtbyhEaWFncmFtKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhZ3JhbSQxO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpYWdyYW1Db250ZXh0IGZyb20gJy4uLy4uL0NvbnRleHQvRGlhZ3JhbUNvbnRleHQuanMnO1xuaW1wb3J0IHsgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLCBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5LCBleHRlbmRzIGFzIF9leHRlbmRzIH0gZnJvbSAnLi4vLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlV2luZG93U2Nyb2xsLCB1c2VXaW5kb3dSZXNpemUgfSBmcm9tICdiZWF1dGlmdWwtcmVhY3QtaG9va3MnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBEaWFncmFtQ2FudmFzID0gZnVuY3Rpb24gRGlhZ3JhbUNhbnZhcyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHBvcnRSZWZzID0gcHJvcHMucG9ydFJlZnMsXG4gICAgICBub2RlUmVmcyA9IHByb3BzLm5vZGVSZWZzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJwb3J0UmVmc1wiLCBcIm5vZGVSZWZzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUobnVsbCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGJib3ggPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Qm91bmRpbmdCb3ggPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBjYW52YXNSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGNsYXNzTGlzdCA9IGNsYXNzTmFtZXMoJ2JpIGJpLWRpYWdyYW0nLCBjbGFzc05hbWUpO1xuXG4gIHZhciBjYWxjdWxhdGVCQm94ID0gZnVuY3Rpb24gY2FsY3VsYXRlQkJveChlbCkge1xuICAgIGlmIChlbCkge1xuICAgICAgdmFyIG5leHRCQm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmICghaXNFcXVhbChuZXh0QkJveCwgYmJveCkpIHtcbiAgICAgICAgc2V0Qm91bmRpbmdCb3gobmV4dEJCb3gpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxjdWxhdGVCQm94KGNhbnZhc1JlZi5jdXJyZW50KTtcbiAgfSwgW2NhbnZhc1JlZi5jdXJyZW50XSk7XG4gIHVzZVdpbmRvd1Njcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZUJCb3goY2FudmFzUmVmLmN1cnJlbnQpO1xuICB9KTtcbiAgdXNlV2luZG93UmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsY3VsYXRlQkJveChjYW52YXNSZWYuY3VycmVudCk7XG4gIH0pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc0xpc3QsXG4gICAgcmVmOiBjYW52YXNSZWZcbiAgfSwgcmVzdCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJiaS1kaWFncmFtLWNhbnZhc1wiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhZ3JhbUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgY2FudmFzOiBiYm94LFxuICAgICAgcG9ydHM6IHBvcnRSZWZzLFxuICAgICAgbm9kZXM6IG5vZGVSZWZzLFxuICAgICAgX25vZGVzOiB7fVxuICAgIH1cbiAgfSwgY2hpbGRyZW4pKSk7XG59O1xuXG5EaWFncmFtQ2FudmFzLnByb3BUeXBlcyA9IHtcbiAgcG9ydFJlZnM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gIG5vZGVSZWZzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5EaWFncmFtQ2FudmFzLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9ydFJlZnM6IHt9LFxuICBub2RlUmVmczoge30sXG4gIGNsYXNzTmFtZTogJydcbn07XG52YXIgRGlhZ3JhbUNhbnZhcyQxID0gUmVhY3QubWVtbyhEaWFncmFtQ2FudmFzKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhZ3JhbUNhbnZhcyQxO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lUHJvcGVydHkgYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBQb3J0VHlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9UeXBlcy5qcyc7XG5pbXBvcnQgZ2V0RGlhZ3JhbU5vZGVTdHlsZSBmcm9tICcuL2dldERpYWdyYW1Ob2RlU3R5bGUuanMnO1xuaW1wb3J0IHsgdXNlUG9ydFJlZ2lzdHJhdGlvbiwgdXNlTm9kZVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcm5hbF9ob29rcy91c2VDb250ZXh0UmVnaXN0cmF0aW9uLmpzJztcbmltcG9ydCB1c2VEcmFnIGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcm5hbF9ob29rcy91c2VEcmFnLmpzJztcbmltcG9ydCBwb3J0R2VuZXJhdG9yIGZyb20gJy4vcG9ydEdlbmVyYXRvci5qcyc7XG5pbXBvcnQgdXNlTm9kZVVucmVnaXN0cmF0aW9uIGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcm5hbF9ob29rcy91c2VOb2RlVW5yZWdpc3RyYXRpb24uanMnO1xuXG52YXIgRGlhZ3JhbU5vZGUgPSBmdW5jdGlvbiBEaWFncmFtTm9kZShwcm9wcykge1xuICB2YXIgaWQgPSBwcm9wcy5pZCxcbiAgICAgIGNvbnRlbnQgPSBwcm9wcy5jb250ZW50LFxuICAgICAgY29vcmRpbmF0ZXMgPSBwcm9wcy5jb29yZGluYXRlcyxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgaW5wdXRzID0gcHJvcHMuaW5wdXRzLFxuICAgICAgb3V0cHV0cyA9IHByb3BzLm91dHB1dHMsXG4gICAgICBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgIG9uUG9zaXRpb25DaGFuZ2UgPSBwcm9wcy5vblBvc2l0aW9uQ2hhbmdlLFxuICAgICAgb25Qb3J0UmVnaXN0ZXIgPSBwcm9wcy5vblBvcnRSZWdpc3RlcixcbiAgICAgIG9uTm9kZVJlbW92ZSA9IHByb3BzLm9uTm9kZVJlbW92ZSxcbiAgICAgIG9uRHJhZ05ld1NlZ21lbnQgPSBwcm9wcy5vbkRyYWdOZXdTZWdtZW50LFxuICAgICAgb25Nb3VudCA9IHByb3BzLm9uTW91bnQsXG4gICAgICBvblNlZ21lbnRGYWlsID0gcHJvcHMub25TZWdtZW50RmFpbCxcbiAgICAgIG9uU2VnbWVudENvbm5lY3QgPSBwcm9wcy5vblNlZ21lbnRDb25uZWN0LFxuICAgICAgcmVuZGVyID0gcHJvcHMucmVuZGVyLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZURyYWcgPSBwcm9wcy5kaXNhYmxlRHJhZztcbiAgdmFyIHJlZ2lzdGVyUG9ydCA9IHVzZVBvcnRSZWdpc3RyYXRpb24oaW5wdXRzLCBvdXRwdXRzLCBvblBvcnRSZWdpc3Rlcik7XG5cbiAgdmFyIF91c2VEcmFnID0gdXNlRHJhZyh7XG4gICAgdGhyb3R0bGVCeTogMTRcbiAgfSksXG4gICAgICByZWYgPSBfdXNlRHJhZy5yZWYsXG4gICAgICBvbkRyYWdTdGFydCA9IF91c2VEcmFnLm9uRHJhZ1N0YXJ0LFxuICAgICAgb25EcmFnID0gX3VzZURyYWcub25EcmFnO1xuXG4gIHZhciBkcmFnU3RhcnRQb2ludCA9IHVzZVJlZihjb29yZGluYXRlcyk7XG5cbiAgaWYgKCFkaXNhYmxlRHJhZykge1xuICAgIG9uRHJhZ1N0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyYWdTdGFydFBvaW50LmN1cnJlbnQgPSBjb29yZGluYXRlcztcbiAgICB9KTtcbiAgICBvbkRyYWcoZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICBpZiAob25Qb3NpdGlvbkNoYW5nZSkge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBuZXh0Q29vcmRzID0gW2RyYWdTdGFydFBvaW50LmN1cnJlbnRbMF0gLSBpbmZvLm9mZnNldFswXSwgZHJhZ1N0YXJ0UG9pbnQuY3VycmVudFsxXSAtIGluZm8ub2Zmc2V0WzFdXTtcbiAgICAgICAgb25Qb3NpdGlvbkNoYW5nZShpZCwgbmV4dENvb3Jkcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1c2VOb2RlVW5yZWdpc3RyYXRpb24ob25Ob2RlUmVtb3ZlLCBpbnB1dHMsIG91dHB1dHMsIGlkKTtcbiAgdXNlTm9kZVJlZ2lzdHJhdGlvbihyZWYsIG9uTW91bnQsIGlkKTtcbiAgdmFyIGNsYXNzTGlzdCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzKCdiaSBiaS1kaWFncmFtLW5vZGUnLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiYmktZGlhZ3JhbS1ub2RlLVwiLmNvbmNhdCh0eXBlKSwgISF0eXBlICYmICFyZW5kZXIpLCBjbGFzc05hbWUpO1xuICB9LCBbdHlwZSwgY2xhc3NOYW1lXSk7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIHJlZ2lzdGVyUG9ydDogcmVnaXN0ZXJQb3J0LFxuICAgIG9uRHJhZ05ld1NlZ21lbnQ6IG9uRHJhZ05ld1NlZ21lbnQsXG4gICAgb25TZWdtZW50RmFpbDogb25TZWdtZW50RmFpbCxcbiAgICBvblNlZ21lbnRDb25uZWN0OiBvblNlZ21lbnRDb25uZWN0XG4gIH07XG4gIHZhciBJbnB1dFBvcnRzID0gaW5wdXRzLm1hcChwb3J0R2VuZXJhdG9yKG9wdGlvbnMsICdpbnB1dCcpKTtcbiAgdmFyIE91dHB1dFBvcnRzID0gb3V0cHV0cy5tYXAocG9ydEdlbmVyYXRvcihvcHRpb25zLCAnb3V0cHV0JykpO1xuICB2YXIgY3VzdG9tUmVuZGVyUHJvcHMgPSB7XG4gICAgaWQ6IGlkLFxuICAgIHJlbmRlcjogcmVuZGVyLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgdHlwZTogdHlwZSxcbiAgICBpbnB1dHM6IElucHV0UG9ydHMsXG4gICAgb3V0cHV0czogT3V0cHV0UG9ydHMsXG4gICAgZGF0YTogZGF0YSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICB9O1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc0xpc3QsXG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IGdldERpYWdyYW1Ob2RlU3R5bGUoY29vcmRpbmF0ZXMsIGRpc2FibGVEcmFnKVxuICB9LCByZW5kZXIgJiYgdHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJyAmJiByZW5kZXIoY3VzdG9tUmVuZGVyUHJvcHMpLCAhcmVuZGVyICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNvbnRlbnQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJiaS1wb3J0LXdyYXBwZXJcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiYmktaW5wdXQtcG9ydHNcIlxuICB9LCBJbnB1dFBvcnRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImJpLW91dHB1dC1wb3J0c1wiXG4gIH0sIE91dHB1dFBvcnRzKSkpKTtcbn07XG5cbkRpYWdyYW1Ob2RlLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICBjb29yZGluYXRlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMubm9kZV0pLFxuICBpbnB1dHM6IFByb3BUeXBlcy5hcnJheU9mKFBvcnRUeXBlKSxcbiAgb3V0cHV0czogUHJvcFR5cGVzLmFycmF5T2YoUG9ydFR5cGUpLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0J10pLFxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICByZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvc2l0aW9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VudDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUG9ydFJlZ2lzdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EcmFnTmV3U2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VnbWVudEZhaWw6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlZ21lbnRDb25uZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlRHJhZzogUHJvcFR5cGVzLmJvb2xcbn07XG5EaWFncmFtTm9kZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdkZWZhdWx0JyxcbiAgY29udGVudDogJycsXG4gIGlucHV0czogW10sXG4gIG91dHB1dHM6IFtdLFxuICBkYXRhOiB7fSxcbiAgb25Qb3NpdGlvbkNoYW5nZTogdW5kZWZpbmVkLFxuICByZW5kZXI6IHVuZGVmaW5lZCxcbiAgb25Nb3VudDogdW5kZWZpbmVkLFxuICBvblBvcnRSZWdpc3RlcjogdW5kZWZpbmVkLFxuICBvbk5vZGVSZW1vdmU6IHVuZGVmaW5lZCxcbiAgb25EcmFnTmV3U2VnbWVudDogdW5kZWZpbmVkLFxuICBvblNlZ21lbnRGYWlsOiB1bmRlZmluZWQsXG4gIG9uU2VnbWVudENvbm5lY3Q6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGlzYWJsZURyYWc6IGZhbHNlXG59O1xudmFyIERpYWdyYW1Ob2RlJDEgPSBSZWFjdC5tZW1vKERpYWdyYW1Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhZ3JhbU5vZGUkMTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xudmFyIGdldERpYWdyYW1Ob2RlU3R5bGUgPSBmdW5jdGlvbiBnZXREaWFncmFtTm9kZVN0eWxlKGNvb3JkaW5hdGVzLCBkaXNhYmxlRHJhZykge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGNvb3JkaW5hdGVzWzBdLFxuICAgIHRvcDogY29vcmRpbmF0ZXNbMV0sXG4gICAgY3Vyc29yOiBkaXNhYmxlRHJhZyA/IHVuZGVmaW5lZCA6ICdtb3ZlJ1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGlhZ3JhbU5vZGVTdHlsZTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGV4dGVuZHMgYXMgX2V4dGVuZHMgfSBmcm9tICcuLi8uLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCBQb3J0IGZyb20gJy4uL1BvcnQvUG9ydC5qcyc7XG5cbnZhciBwb3J0R2VuZXJhdG9yID0gZnVuY3Rpb24gcG9ydEdlbmVyYXRvcihfcmVmLCB0eXBlKSB7XG4gIHZhciByZWdpc3RlclBvcnQgPSBfcmVmLnJlZ2lzdGVyUG9ydCxcbiAgICAgIG9uRHJhZ05ld1NlZ21lbnQgPSBfcmVmLm9uRHJhZ05ld1NlZ21lbnQsXG4gICAgICBvblNlZ21lbnRGYWlsID0gX3JlZi5vblNlZ21lbnRGYWlsLFxuICAgICAgb25TZWdtZW50Q29ubmVjdCA9IF9yZWYub25TZWdtZW50Q29ubmVjdDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwb3J0KSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydCwgX2V4dGVuZHMoe30sIHBvcnQsIHtcbiAgICAgIG9uTW91bnQ6IHJlZ2lzdGVyUG9ydCxcbiAgICAgIG9uRHJhZ05ld1NlZ21lbnQ6IG9uRHJhZ05ld1NlZ21lbnQsXG4gICAgICBvblNlZ21lbnRGYWlsOiBvblNlZ21lbnRGYWlsLFxuICAgICAgb25TZWdtZW50Q29ubmVjdDogb25TZWdtZW50Q29ubmVjdCxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IHBvcnQuaWRcbiAgICB9KSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3J0R2VuZXJhdG9yO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuLi8uLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IFBvcnRUeXBlLCBOb2RlVHlwZSwgTGlua1R5cGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvVHlwZXMuanMnO1xuaW1wb3J0IHVzZUNhbnZhcyBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJuYWxfaG9va3MvdXNlQ2FudmFzLmpzJztcbmltcG9ydCB1c2VQb3J0UmVmcyBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJuYWxfaG9va3MvdXNlUG9ydFJlZnMuanMnO1xuaW1wb3J0IGdldEVudGl0eUNvb3JkaW5hdGVzIGZyb20gJy4vZ2V0RW50aXR5Q29vcmRpbmF0ZXMuanMnO1xuaW1wb3J0IG1ha2VTdmdQYXRoIGZyb20gJy4uLy4uL3NoYXJlZC9mdW5jdGlvbnMvbWFrZVN2Z1BhdGguanMnO1xuaW1wb3J0IGdldFBhdGhNaWRwb2ludCBmcm9tICcuLi8uLi9zaGFyZWQvZnVuY3Rpb25zL2dldFBhdGhNaWRwb2ludC5qcyc7XG5pbXBvcnQgdXNlTm9kZVJlZnMgZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVybmFsX2hvb2tzL3VzZU5vZGVSZWZzLmpzJztcbmltcG9ydCBMaW5rTGFiZWwgZnJvbSAnLi9MaW5rTGFiZWwuanMnO1xuXG52YXIgdXNlQ29udGV4dFJlZnMgPSBmdW5jdGlvbiB1c2VDb250ZXh0UmVmcygpIHtcbiAgdmFyIGNhbnZhcyA9IHVzZUNhbnZhcygpO1xuICB2YXIgcG9ydFJlZnMgPSB1c2VQb3J0UmVmcygpO1xuICB2YXIgbm9kZVJlZnMgPSB1c2VOb2RlUmVmcygpO1xuICByZXR1cm4ge1xuICAgIGNhbnZhczogY2FudmFzLFxuICAgIG5vZGVSZWZzOiBub2RlUmVmcyxcbiAgICBwb3J0UmVmczogcG9ydFJlZnNcbiAgfTtcbn07XG5cbnZhciBMaW5rID0gZnVuY3Rpb24gTGluayhwcm9wcykge1xuICB2YXIgaW5wdXQgPSBwcm9wcy5pbnB1dCxcbiAgICAgIG91dHB1dCA9IHByb3BzLm91dHB1dCxcbiAgICAgIGxpbmsgPSBwcm9wcy5saW5rLFxuICAgICAgb25EZWxldGUgPSBwcm9wcy5vbkRlbGV0ZTtcbiAgdmFyIHBhdGhSZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgbGFiZWxQb3NpdGlvbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRMYWJlbFBvc2l0aW9uID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZUNvbnRleHRSZWZzID0gdXNlQ29udGV4dFJlZnMoKSxcbiAgICAgIGNhbnZhcyA9IF91c2VDb250ZXh0UmVmcy5jYW52YXMsXG4gICAgICBwb3J0UmVmcyA9IF91c2VDb250ZXh0UmVmcy5wb3J0UmVmcyxcbiAgICAgIG5vZGVSZWZzID0gX3VzZUNvbnRleHRSZWZzLm5vZGVSZWZzO1xuXG4gIHZhciBpbnB1dFBvaW50ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldEVudGl0eUNvb3JkaW5hdGVzKGlucHV0LCBwb3J0UmVmcywgbm9kZVJlZnMsIGNhbnZhcyk7XG4gIH0sIFtpbnB1dCwgcG9ydFJlZnMsIG5vZGVSZWZzLCBjYW52YXNdKTtcbiAgdmFyIGNsYXNzTGlzdCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzKCdiaS1kaWFncmFtLWxpbmsnLCB7XG4gICAgICAncmVhZG9ubHktbGluayc6IGxpbmsucmVhZG9ubHlcbiAgICB9LCBsaW5rLmNsYXNzTmFtZSk7XG4gIH0sIFtsaW5rLnJlYWRvbmx5LCBsaW5rLmNsYXNzTmFtZV0pO1xuICB2YXIgb3V0cHV0UG9pbnQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0RW50aXR5Q29vcmRpbmF0ZXMob3V0cHV0LCBwb3J0UmVmcywgbm9kZVJlZnMsIGNhbnZhcyk7XG4gIH0sIFtvdXRwdXQsIHBvcnRSZWZzLCBub2RlUmVmcywgY2FudmFzXSk7XG4gIHZhciBwYXRoT3B0aW9ucyA9IHtcbiAgICB0eXBlOiBpbnB1dC50eXBlID09PSAncG9ydCcgfHwgb3V0cHV0LnR5cGUgPT09ICdwb3J0JyA/ICdiZXppZXInIDogJ2N1cnZlJyxcbiAgICBpbnB1dEFsaWdubWVudDogaW5wdXQuZW50aXR5LmFsaWdubWVudCB8fCBudWxsLFxuICAgIG91dHB1dEFsaWdubWVudDogb3V0cHV0LmVudGl0eS5hbGlnbm1lbnQgfHwgbnVsbFxuICB9O1xuICB2YXIgcGF0aCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYWtlU3ZnUGF0aChpbnB1dFBvaW50LCBvdXRwdXRQb2ludCwgcGF0aE9wdGlvbnMpO1xuICB9LCBbaW5wdXRQb2ludCwgb3V0cHV0UG9pbnRdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5sYWJlbCAmJiBpbnB1dFBvaW50ICYmIG91dHB1dFBvaW50ICYmIHBhdGhSZWYuY3VycmVudCkge1xuICAgICAgdmFyIHBvcyA9IGdldFBhdGhNaWRwb2ludChwYXRoUmVmLmN1cnJlbnQpO1xuICAgICAgc2V0TGFiZWxQb3NpdGlvbihwb3MpO1xuICAgIH1cbiAgfSwgW3BhdGhSZWYuY3VycmVudCwgbGluay5sYWJlbCwgaW5wdXRQb2ludCwgb3V0cHV0UG9pbnRdKTtcbiAgdmFyIG9uRG91YmxlQ2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9uRGVsZXRlICYmICFsaW5rLnJlYWRvbmx5KSB7XG4gICAgICBvbkRlbGV0ZShsaW5rKTtcbiAgICB9XG4gIH0sIFtsaW5rLnJlYWRvbmx5LCBvbkRlbGV0ZV0pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NMaXN0XG4gIH0sICFsaW5rLnJlYWRvbmx5ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBwYXRoLFxuICAgIGNsYXNzTmFtZTogXCJiaS1saW5rLWdob3N0XCIsXG4gICAgb25Eb3VibGVDbGljazogb25Eb3VibGVDbGlja1xuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IHBhdGgsXG4gICAgcmVmOiBwYXRoUmVmLFxuICAgIGNsYXNzTmFtZTogXCJiaS1saW5rLXBhdGhcIixcbiAgICBvbkRvdWJsZUNsaWNrOiBvbkRvdWJsZUNsaWNrXG4gIH0pLCBsaW5rLmxhYmVsICYmIGxhYmVsUG9zaXRpb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rTGFiZWwsIHtcbiAgICBwb3NpdGlvbjogbGFiZWxQb3NpdGlvbixcbiAgICBsYWJlbDogbGluay5sYWJlbFxuICB9KSk7XG59O1xuXG52YXIgSW52b2x2ZWRFbnRpdHkgPSBQcm9wVHlwZXMuZXhhY3Qoe1xuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydub2RlJywgJ3BvcnQnXSksXG4gIGVudGl0eTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUG9ydFR5cGUsIE5vZGVUeXBlXSlcbn0pO1xuTGluay5wcm9wVHlwZXMgPSB7XG4gIGxpbms6IExpbmtUeXBlLmlzUmVxdWlyZWQsXG4gIGlucHV0OiBJbnZvbHZlZEVudGl0eS5pc1JlcXVpcmVkLFxuICBvdXRwdXQ6IEludm9sdmVkRW50aXR5LmlzUmVxdWlyZWQsXG4gIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuY1xufTtcbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICBvbkRlbGV0ZTogdW5kZWZpbmVkXG59O1xudmFyIERpYWdyYW1MaW5rID0gUmVhY3QubWVtbyhMaW5rKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhZ3JhbUxpbms7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgTGlua0xhYmVsID0gZnVuY3Rpb24gTGlua0xhYmVsKF9yZWYpIHtcbiAgdmFyIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JlaWduT2JqZWN0XCIsIHtcbiAgICB4OiBwb3NpdGlvblswXSxcbiAgICB5OiBwb3NpdGlvblsxXVxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiYmktZGlhZ3JhbS1saW5rLWxhYmVsXCJcbiAgfSwgbGFiZWwpKTtcbn07XG5cbkxpbmtMYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkXG59O1xudmFyIExpbmtMYWJlbCQxID0gUmVhY3QubWVtbyhMaW5rTGFiZWwpO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rTGFiZWwkMTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IGdldFJlbGF0aXZlUG9pbnQgZnJvbSAnLi4vLi4vc2hhcmVkL2Z1bmN0aW9ucy9nZXRSZWxhdGl2ZVBvaW50LmpzJztcblxudmFyIGdldEVudGl0eUNvb3JkaW5hdGVzID0gZnVuY3Rpb24gZ2V0RW50aXR5Q29vcmRpbmF0ZXMoZW50aXR5LCBwb3J0UmVmcywgbm9kZVJlZnMsIGNhbnZhcykge1xuICBpZiAoZW50aXR5ICYmIGVudGl0eS50eXBlID09PSAnbm9kZScgJiYgbm9kZVJlZnNbZW50aXR5LmVudGl0eS5pZF0pIHtcbiAgICB2YXIgbm9kZUVsID0gbm9kZVJlZnNbZW50aXR5LmVudGl0eS5pZF07XG4gICAgdmFyIGJib3ggPSBub2RlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIFtlbnRpdHkuZW50aXR5LmNvb3JkaW5hdGVzWzBdICsgYmJveC53aWR0aCAvIDIsIGVudGl0eS5lbnRpdHkuY29vcmRpbmF0ZXNbMV0gKyBiYm94LmhlaWdodCAvIDJdO1xuICB9XG5cbiAgaWYgKHBvcnRSZWZzICYmIHBvcnRSZWZzW2VudGl0eS5lbnRpdHkuaWRdKSB7XG4gICAgdmFyIHBvcnRFbCA9IHBvcnRSZWZzW2VudGl0eS5lbnRpdHkuaWRdO1xuXG4gICAgdmFyIF9iYm94ID0gcG9ydEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgcmV0dXJuIGdldFJlbGF0aXZlUG9pbnQoW19iYm94LnggKyBfYmJveC53aWR0aCAvIDIsIF9iYm94LnkgKyBfYmJveC5oZWlnaHQgLyAyXSwgW2NhbnZhcy54LCBjYW52YXMueV0pO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEVudGl0eUNvb3JkaW5hdGVzO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTm9kZVR5cGUsIExpbmtUeXBlLCBQb3J0QWxpZ25tZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL1R5cGVzLmpzJztcbmltcG9ydCBEaWFncmFtTGluayBmcm9tICcuLi9MaW5rL0xpbmsuanMnO1xuaW1wb3J0IFNlZ21lbnQgZnJvbSAnLi4vU2VnbWVudC9TZWdtZW50LmpzJztcbmltcG9ydCBmaW5kSW52b2x2ZWRFbnRpdHkgZnJvbSAnLi9maW5kSW52b2x2ZWRFbnRpdHkuanMnO1xuaW1wb3J0IHJlbW92ZUxpbmtGcm9tQXJyYXkgZnJvbSAnLi9yZW1vdmVMaW5rRnJvbUFycmF5LmpzJztcblxudmFyIExpbmtzQ2FudmFzID0gZnVuY3Rpb24gTGlua3NDYW52YXMocHJvcHMpIHtcbiAgdmFyIG5vZGVzID0gcHJvcHMubm9kZXMsXG4gICAgICBzZWdtZW50ID0gcHJvcHMuc2VnbWVudCxcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBsaW5rcyA9IHByb3BzLmxpbmtzO1xuICB2YXIgcmVtb3ZlRnJvbUxpbmtzQXJyYXkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobGluaykge1xuICAgIGlmIChsaW5rcy5sZW5ndGggPiAwICYmIG9uQ2hhbmdlKSB7XG4gICAgICB2YXIgbmV4dExpbmtzID0gcmVtb3ZlTGlua0Zyb21BcnJheShsaW5rLCBsaW5rcyk7XG4gICAgICBvbkNoYW5nZShuZXh0TGlua3MpO1xuICAgIH1cbiAgfSwgW2xpbmtzLCBvbkNoYW5nZV0pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBcImJpIGJpLWxpbmstY2FudmFzLWxheWVyXCJcbiAgfSwgbGlua3MgJiYgbGlua3MubGVuZ3RoID4gMCAmJiBsaW5rcy5tYXAoZnVuY3Rpb24gKGxpbmspIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEaWFncmFtTGluaywge1xuICAgICAgbGluazogbGluayxcbiAgICAgIGlucHV0OiBmaW5kSW52b2x2ZWRFbnRpdHkobm9kZXMsIGxpbmsuaW5wdXQpLFxuICAgICAgb3V0cHV0OiBmaW5kSW52b2x2ZWRFbnRpdHkobm9kZXMsIGxpbmsub3V0cHV0KSxcbiAgICAgIG9uRGVsZXRlOiByZW1vdmVGcm9tTGlua3NBcnJheSxcbiAgICAgIGtleTogXCJcIi5jb25jYXQobGluay5pbnB1dCwgXCItXCIpLmNvbmNhdChsaW5rLm91dHB1dClcbiAgICB9KTtcbiAgfSksIHNlZ21lbnQgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTZWdtZW50LCBzZWdtZW50KSk7XG59O1xuXG5MaW5rc0NhbnZhcy5wcm9wVHlwZXMgPSB7XG4gIG5vZGVzOiBQcm9wVHlwZXMuYXJyYXlPZihOb2RlVHlwZSksXG4gIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihMaW5rVHlwZSksXG4gIHNlZ21lbnQ6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZnJvbTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgdG86IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICAgIGFsaWdubWVudDogUG9ydEFsaWdubWVudFxuICB9KSxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59O1xuTGlua3NDYW52YXMuZGVmYXVsdFByb3BzID0ge1xuICBub2RlczogW10sXG4gIGxpbmtzOiBbXSxcbiAgc2VnbWVudDogdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogdW5kZWZpbmVkXG59O1xudmFyIExpbmtzQ2FudmFzJDEgPSBSZWFjdC5tZW1vKExpbmtzQ2FudmFzKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlua3NDYW52YXMkMTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IHsgb2JqZWN0U3ByZWFkMiBhcyBfb2JqZWN0U3ByZWFkMiB9IGZyb20gJy4uLy4uL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuXG52YXIgZmluZEludm9sdmVkRW50aXR5ID0gZnVuY3Rpb24gZmluZEludm9sdmVkRW50aXR5KG5vZGVzLCBlbnRpdHlJZCkge1xuICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ25vZGUnO1xuICBpZiAoIWVudGl0eUlkIHx8ICFub2RlcyB8fCBub2Rlcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciByZXN1bHQ7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgbm9kZXMubGVuZ3RoICYmICFyZXN1bHQpIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2luZGV4XTtcblxuICAgIGlmIChub2RlLmlkID09PSBlbnRpdHlJZCkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBlbnRpdHk6IF9vYmplY3RTcHJlYWQyKHt9LCBub2RlKVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmluZEludm9sdmVkRW50aXR5KG5vZGUuaW5wdXRzLCBlbnRpdHlJZCwgJ3BvcnQnKSB8fCBmaW5kSW52b2x2ZWRFbnRpdHkobm9kZS5vdXRwdXRzLCBlbnRpdHlJZCwgJ3BvcnQnKTtcbiAgICB9XG5cbiAgICBpbmRleCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRJbnZvbHZlZEVudGl0eTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuXG52YXIgcmVtb3ZlTGlua0Zyb21BcnJheSA9IGZ1bmN0aW9uIHJlbW92ZUxpbmtGcm9tQXJyYXkobGluaywgbGlua3MpIHtcbiAgcmV0dXJuIGxpbmtzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAhaXNFcXVhbChpdGVtLCBsaW5rKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVMaW5rRnJvbUFycmF5O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLCBleHRlbmRzIGFzIF9leHRlbmRzIH0gZnJvbSAnLi4vLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTm9kZVR5cGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvVHlwZXMuanMnO1xuaW1wb3J0IERpYWdyYW1Ob2RlIGZyb20gJy4uL0RpYWdyYW1Ob2RlL0RpYWdyYW1Ob2RlLmpzJztcbmltcG9ydCB1cGRhdGVOb2RlQ29vcmRpbmF0ZXMgZnJvbSAnLi91cGRhdGVOb2RlQ29vcmRpbmF0ZXMuanMnO1xuXG52YXIgTm9kZXNDYW52YXMgPSBmdW5jdGlvbiBOb2Rlc0NhbnZhcyhwcm9wcykge1xuICB2YXIgbm9kZXMgPSBwcm9wcy5ub2RlcyxcbiAgICAgIG9uUG9ydFJlZ2lzdGVyID0gcHJvcHMub25Qb3J0UmVnaXN0ZXIsXG4gICAgICBvbk5vZGVSZWdpc3RlciA9IHByb3BzLm9uTm9kZVJlZ2lzdGVyLFxuICAgICAgb25Ob2RlUmVtb3ZlID0gcHJvcHMub25Ob2RlUmVtb3ZlLFxuICAgICAgb25EcmFnTmV3U2VnbWVudCA9IHByb3BzLm9uRHJhZ05ld1NlZ21lbnQsXG4gICAgICBvblNlZ21lbnRGYWlsID0gcHJvcHMub25TZWdtZW50RmFpbCxcbiAgICAgIG9uU2VnbWVudENvbm5lY3QgPSBwcm9wcy5vblNlZ21lbnRDb25uZWN0LFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZTtcblxuICB2YXIgb25Ob2RlUG9zaXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBvbk5vZGVQb3NpdGlvbkNoYW5nZShub2RlSWQsIG5ld0Nvb3JkaW5hdGVzKSB7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICB2YXIgbmV4dE5vZGVzID0gdXBkYXRlTm9kZUNvb3JkaW5hdGVzKG5vZGVJZCwgbmV3Q29vcmRpbmF0ZXMsIG5vZGVzKTtcbiAgICAgIG9uQ2hhbmdlKG5leHROb2Rlcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBub2RlcyAmJiBub2Rlcy5sZW5ndGggPiAwICYmIG5vZGVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgICBub2RlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImRhdGFcIl0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhZ3JhbU5vZGUsIF9leHRlbmRzKHt9LCBub2RlLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb25Qb3NpdGlvbkNoYW5nZTogb25Ob2RlUG9zaXRpb25DaGFuZ2UsXG4gICAgICBvblBvcnRSZWdpc3Rlcjogb25Qb3J0UmVnaXN0ZXIsXG4gICAgICBvbk5vZGVSZW1vdmU6IG9uTm9kZVJlbW92ZSxcbiAgICAgIG9uRHJhZ05ld1NlZ21lbnQ6IG9uRHJhZ05ld1NlZ21lbnQsXG4gICAgICBvblNlZ21lbnRGYWlsOiBvblNlZ21lbnRGYWlsLFxuICAgICAgb25TZWdtZW50Q29ubmVjdDogb25TZWdtZW50Q29ubmVjdCxcbiAgICAgIG9uTW91bnQ6IG9uTm9kZVJlZ2lzdGVyLFxuICAgICAga2V5OiBub2RlLmlkXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbk5vZGVzQ2FudmFzLnByb3BUeXBlcyA9IHtcbiAgbm9kZXM6IFByb3BUeXBlcy5hcnJheU9mKE5vZGVUeXBlKSxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVSZWdpc3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUG9ydFJlZ2lzdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EcmFnTmV3U2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VnbWVudEZhaWw6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlZ21lbnRDb25uZWN0OiBQcm9wVHlwZXMuZnVuY1xufTtcbk5vZGVzQ2FudmFzLmRlZmF1bHRQcm9wcyA9IHtcbiAgbm9kZXM6IFtdLFxuICBvbkNoYW5nZTogdW5kZWZpbmVkLFxuICBvbk5vZGVSZWdpc3RlcjogdW5kZWZpbmVkLFxuICBvblBvcnRSZWdpc3RlcjogdW5kZWZpbmVkLFxuICBvbk5vZGVSZW1vdmU6IHVuZGVmaW5lZCxcbiAgb25EcmFnTmV3U2VnbWVudDogdW5kZWZpbmVkLFxuICBvblNlZ21lbnRGYWlsOiB1bmRlZmluZWQsXG4gIG9uU2VnbWVudENvbm5lY3Q6IHVuZGVmaW5lZFxufTtcbnZhciBOb2Rlc0NhbnZhcyQxID0gUmVhY3QubWVtbyhOb2Rlc0NhbnZhcyk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVzQ2FudmFzJDE7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbmltcG9ydCBmaW5kSW5kZXggZnJvbSAnbG9kYXNoLmZpbmRpbmRleCc7XG5cbnZhciB1cGRhdGVOb2RlQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiB1cGRhdGVOb2RlQ29vcmRpbmF0ZXMobm9kZUlkLCBjb29yZGluYXRlcywgbm9kZXMpIHtcbiAgdmFyIGluZGV4ID0gZmluZEluZGV4KG5vZGVzLCBbJ2lkJywgbm9kZUlkXSk7XG5cbiAgaWYgKGluZGV4ID4gLTEgJiYgIW5vZGVzW2luZGV4XS5kaXNhYmxlRHJhZykge1xuICAgIG5vZGVzW2luZGV4XS5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTm9kZUNvb3JkaW5hdGVzO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLCBleHRlbmRzIGFzIF9leHRlbmRzIH0gZnJvbSAnLi4vLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVzZURyYWcgZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVybmFsX2hvb2tzL3VzZURyYWcuanMnO1xuaW1wb3J0IHVzZUNhbnZhcyBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJuYWxfaG9va3MvdXNlQ2FudmFzLmpzJztcbmltcG9ydCBnZXRSZWxhdGl2ZVBvaW50IGZyb20gJy4uLy4uL3NoYXJlZC9mdW5jdGlvbnMvZ2V0UmVsYXRpdmVQb2ludC5qcyc7XG5cbnZhciBQb3J0ID0gZnVuY3Rpb24gUG9ydChwcm9wcykge1xuICB2YXIgaWQgPSBwcm9wcy5pZCxcbiAgICAgIGNhbkxpbmsgPSBwcm9wcy5jYW5MaW5rLFxuICAgICAgYWxpZ25tZW50ID0gcHJvcHMuYWxpZ25tZW50LFxuICAgICAgb25EcmFnTmV3U2VnbWVudCA9IHByb3BzLm9uRHJhZ05ld1NlZ21lbnQsXG4gICAgICBvblNlZ21lbnRGYWlsID0gcHJvcHMub25TZWdtZW50RmFpbCxcbiAgICAgIG9uU2VnbWVudENvbm5lY3QgPSBwcm9wcy5vblNlZ21lbnRDb25uZWN0LFxuICAgICAgb25Nb3VudCA9IHByb3BzLm9uTW91bnQsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImlkXCIsIFwiY2FuTGlua1wiLCBcImFsaWdubWVudFwiLCBcIm9uRHJhZ05ld1NlZ21lbnRcIiwgXCJvblNlZ21lbnRGYWlsXCIsIFwib25TZWdtZW50Q29ubmVjdFwiLCBcIm9uTW91bnRcIiwgXCJ0eXBlXCJdKTtcblxuICB2YXIgY2FudmFzID0gdXNlQ2FudmFzKCk7XG5cbiAgdmFyIF91c2VEcmFnID0gdXNlRHJhZygpLFxuICAgICAgcmVmID0gX3VzZURyYWcucmVmLFxuICAgICAgb25EcmFnID0gX3VzZURyYWcub25EcmFnLFxuICAgICAgb25EcmFnRW5kID0gX3VzZURyYWcub25EcmFnRW5kO1xuXG4gIG9uRHJhZyhmdW5jdGlvbiAoZXZlbnQsIGluZm8pIHtcbiAgICBpZiAob25EcmFnTmV3U2VnbWVudCkge1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhciBmcm9tID0gZ2V0UmVsYXRpdmVQb2ludChpbmZvLnN0YXJ0LCBbY2FudmFzLngsIGNhbnZhcy55XSk7XG4gICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVBvaW50KFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXSwgW2NhbnZhcy54LCBjYW52YXMueV0pO1xuICAgICAgb25EcmFnTmV3U2VnbWVudChpZCwgZnJvbSwgdG8sIGFsaWdubWVudCk7XG4gICAgfVxuICB9KTtcbiAgb25EcmFnRW5kKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB0YXJnZXRQb3J0ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3J0LWlkJyk7XG5cbiAgICBpZiAodGFyZ2V0UG9ydCAmJiBldmVudC50YXJnZXQgIT09IHJlZi5jdXJyZW50ICYmIGNhbkxpbmsoaWQsIHRhcmdldFBvcnQsIHR5cGUpICYmIG9uU2VnbWVudENvbm5lY3QpIHtcbiAgICAgIHZhciBhcmdzID0gdHlwZSA9PT0gJ2lucHV0JyA/IFtpZCwgdGFyZ2V0UG9ydCwgdHlwZV0gOiBbdGFyZ2V0UG9ydCwgaWQsIHR5cGVdO1xuICAgICAgb25TZWdtZW50Q29ubmVjdC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uU2VnbWVudEZhaWwgJiYgb25TZWdtZW50RmFpbChpZCwgdHlwZSk7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZWYuY3VycmVudCAmJiBvbk1vdW50KSB7XG4gICAgICBvbk1vdW50KGlkLCByZWYuY3VycmVudCk7XG4gICAgfVxuICB9LCBbcmVmLmN1cnJlbnRdKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogXCJiaSBiaS1kaWFncmFtLXBvcnRcIixcbiAgICBcImRhdGEtcG9ydC1pZFwiOiBpZCxcbiAgICByZWY6IHJlZlxuICB9LCByZXN0KSk7XG59O1xuXG5Qb3J0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5zeW1ib2xdKS5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydpbnB1dCcsICdvdXRwdXQnXSkuaXNSZXF1aXJlZCxcbiAgb25EcmFnTmV3U2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VnbWVudEZhaWw6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlZ21lbnRDb25uZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2FuTGluazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91bnQ6IFByb3BUeXBlcy5mdW5jLFxuICBhbGlnbm1lbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3JpZ2h0JywgJ2xlZnQnLCAndG9wJywgJ2JvdHRvbSddKVxufTtcblBvcnQuZGVmYXVsdFByb3BzID0ge1xuICBvbkRyYWdOZXdTZWdtZW50OiB1bmRlZmluZWQsXG4gIG9uU2VnbWVudEZhaWw6IHVuZGVmaW5lZCxcbiAgb25TZWdtZW50Q29ubmVjdDogdW5kZWZpbmVkLFxuICBjYW5MaW5rOiBmdW5jdGlvbiBjYW5MaW5rKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBvbk1vdW50OiB1bmRlZmluZWQsXG4gIGFsaWdubWVudDogdW5kZWZpbmVkXG59O1xudmFyIFBvcnQkMSA9IFJlYWN0Lm1lbW8oUG9ydCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnQkMTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUG9ydEFsaWdubWVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9UeXBlcy5qcyc7XG5pbXBvcnQgbWFrZVN2Z1BhdGggZnJvbSAnLi4vLi4vc2hhcmVkL2Z1bmN0aW9ucy9tYWtlU3ZnUGF0aC5qcyc7XG5cbnZhciBTZWdtZW50ID0gZnVuY3Rpb24gU2VnbWVudChwcm9wcykge1xuICB2YXIgZnJvbSA9IHByb3BzLmZyb20sXG4gICAgICB0byA9IHByb3BzLnRvLFxuICAgICAgYWxpZ25tZW50ID0gcHJvcHMuYWxpZ25tZW50O1xuICB2YXIgcGF0aE9wdGlvbnMgPSB7XG4gICAgdHlwZTogJ2JlemllcicsXG4gICAgaW5wdXRBbGlnbm1lbnQ6IGFsaWdubWVudFxuICB9O1xuICB2YXIgcGF0aCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYWtlU3ZnUGF0aChmcm9tLCB0bywgcGF0aE9wdGlvbnMpO1xuICB9LCBbZnJvbSwgdG8sIGFsaWdubWVudF0pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJiaS1kaWFncmFtLXNlZ21lbnRcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogcGF0aFxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgcjogXCI2LjVcIixcbiAgICBjeDogdG9bMF0sXG4gICAgY3k6IHRvWzFdXG4gIH0pKTtcbn07XG5cblNlZ21lbnQucHJvcFR5cGVzID0ge1xuICBmcm9tOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgYWxpZ25tZW50OiBQb3J0QWxpZ25tZW50XG59O1xuU2VnbWVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWdubWVudDogdW5kZWZpbmVkXG59O1xudmFyIFNlZ21lbnQkMSA9IFJlYWN0Lm1lbW8oU2VnbWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnQkMTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmV4cG9ydCB7IF9hcnJheUxpa2VUb0FycmF5IGFzIGFycmF5TGlrZVRvQXJyYXksIF9hcnJheVdpdGhIb2xlcyBhcyBhcnJheVdpdGhIb2xlcywgX2FycmF5V2l0aG91dEhvbGVzIGFzIGFycmF5V2l0aG91dEhvbGVzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGFzIGFzc2VydFRoaXNJbml0aWFsaXplZCwgX2NsYXNzQ2FsbENoZWNrIGFzIGNsYXNzQ2FsbENoZWNrLCBfY29uc3RydWN0IGFzIGNvbnN0cnVjdCwgX2NyZWF0ZVN1cGVyIGFzIGNyZWF0ZVN1cGVyLCBfZGVmaW5lUHJvcGVydHkgYXMgZGVmaW5lUHJvcGVydHksIF9leHRlbmRzIGFzIGV4dGVuZHMsIF9nZXRQcm90b3R5cGVPZiBhcyBnZXRQcm90b3R5cGVPZiwgX2luaGVyaXRzIGFzIGluaGVyaXRzLCBfaXNOYXRpdmVGdW5jdGlvbiBhcyBpc05hdGl2ZUZ1bmN0aW9uLCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGFzIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCwgX2l0ZXJhYmxlVG9BcnJheSBhcyBpdGVyYWJsZVRvQXJyYXksIF9pdGVyYWJsZVRvQXJyYXlMaW1pdCBhcyBpdGVyYWJsZVRvQXJyYXlMaW1pdCwgX25vbkl0ZXJhYmxlUmVzdCBhcyBub25JdGVyYWJsZVJlc3QsIF9ub25JdGVyYWJsZVNwcmVhZCBhcyBub25JdGVyYWJsZVNwcmVhZCwgX29iamVjdFNwcmVhZDIgYXMgb2JqZWN0U3ByZWFkMiwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGFzIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBhcyBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBhcyBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBfc2V0UHJvdG90eXBlT2YgYXMgc2V0UHJvdG90eXBlT2YsIF9zbGljZWRUb0FycmF5IGFzIHNsaWNlZFRvQXJyYXksIF90b0NvbnN1bWFibGVBcnJheSBhcyB0b0NvbnN1bWFibGVBcnJheSwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGFzIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBfd3JhcE5hdGl2ZVN1cGVyIGFzIHdyYXBOYXRpdmVTdXBlciB9O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG52YXIgT05fQ0hBTkdFID0gJ2JpLWRpYWdyYW0vdXNlU2NoZW1hL2NoYW5nZSc7XG52YXIgT05fTk9ERV9BREQgPSAnYmktZGlhZ3JhbS91c2VTY2hlbWEvbm9kZS9hZGQnO1xudmFyIE9OX05PREVfUkVNT1ZFID0gJ2JpLWRpYWdyYW0vdXNlU2NoZW1hL25vZGUvcmVtb3ZlJztcbnZhciBPTl9DT05ORUNUID0gJ2JpLWRpYWdyYW0vdXNlU2NoZW1hL2Nvbm5lY3QnO1xuXG5leHBvcnQgeyBPTl9DSEFOR0UsIE9OX0NPTk5FQ1QsIE9OX05PREVfQURELCBPTl9OT0RFX1JFTU9WRSB9O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgZ2V0Tm9kZVBvcnRzSWQgZnJvbSAnLi4vLi4vc2hhcmVkL2Z1bmN0aW9ucy9nZXROb2RlUG9ydHNJZC5qcyc7XG5pbXBvcnQgZmluZEluZGV4IGZyb20gJ2xvZGFzaC5maW5kaW5kZXgnO1xuaW1wb3J0IHsgT05fQ09OTkVDVCwgT05fTk9ERV9SRU1PVkUsIE9OX05PREVfQURELCBPTl9DSEFOR0UgfSBmcm9tICcuL2FjdGlvblR5cGVzLmpzJztcblxudmFyIHNjaGVtYVJlZHVjZXIgPSBmdW5jdGlvbiBzY2hlbWFSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgT05fQ0hBTkdFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZXM6IGFjdGlvbi5wYXlsb2FkLm5vZGVzIHx8IHN0YXRlLm5vZGVzIHx8IFtdLFxuICAgICAgICBsaW5rczogYWN0aW9uLnBheWxvYWQubGlua3MgfHwgc3RhdGUubGlua3MgfHwgW11cbiAgICAgIH07XG5cbiAgICBjYXNlIE9OX05PREVfQUREOlxuICAgICAgaWYgKHN0YXRlLm5vZGVzKSB7XG4gICAgICAgIHN0YXRlLm5vZGVzLnB1c2goYWN0aW9uLnBheWxvYWQubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVzOiBzdGF0ZS5ub2RlcyB8fCBbXSxcbiAgICAgICAgbGlua3M6IHN0YXRlLmxpbmtzIHx8IFtdXG4gICAgICB9O1xuXG4gICAgY2FzZSBPTl9OT0RFX1JFTU9WRTpcbiAgICAgIHtcbiAgICAgICAgdmFyIG5leHRMaW5rcyA9IHN0YXRlLmxpbmtzIHx8IFtdO1xuXG4gICAgICAgIGlmIChzdGF0ZS5ub2Rlcykge1xuICAgICAgICAgIHZhciBpbmRleCA9IGZpbmRJbmRleChzdGF0ZS5ub2RlcywgWydpZCcsIGFjdGlvbi5wYXlsb2FkLm5vZGVJZF0pO1xuICAgICAgICAgIHZhciBpbnB1dFBvcnRzID0gZ2V0Tm9kZVBvcnRzSWQoc3RhdGUubm9kZXNbaW5kZXhdLCAnaW5wdXRzJyk7XG4gICAgICAgICAgdmFyIG91dHB1dFBvcnRzID0gZ2V0Tm9kZVBvcnRzSWQoc3RhdGUubm9kZXNbaW5kZXhdLCAnb3V0cHV0cycpO1xuICAgICAgICAgIG5leHRMaW5rcyA9IG5leHRMaW5rcy5maWx0ZXIoZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICAgIHJldHVybiAhaW5wdXRQb3J0cy5pbmNsdWRlcyhsaW5rLmlucHV0KSAmJiAhb3V0cHV0UG9ydHMuaW5jbHVkZXMobGluay5vdXRwdXQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0YXRlLm5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGVzOiBzdGF0ZS5ub2RlcyB8fCBbXSxcbiAgICAgICAgICBsaW5rczogbmV4dExpbmtzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBjYXNlIE9OX0NPTk5FQ1Q6XG4gICAgICBpZiAoc3RhdGUubGlua3MpIHtcbiAgICAgICAgc3RhdGUubGlua3MucHVzaChhY3Rpb24ucGF5bG9hZC5saW5rKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZXM6IHN0YXRlLm5vZGVzIHx8IFtdLFxuICAgICAgICBsaW5rczogc3RhdGUubGlua3MgfHwgW11cbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWFSZWR1Y2VyO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuLi8uLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IE9OX0NIQU5HRSwgT05fTk9ERV9BREQsIE9OX05PREVfUkVNT1ZFLCBPTl9DT05ORUNUIH0gZnJvbSAnLi9hY3Rpb25UeXBlcy5qcyc7XG5pbXBvcnQgZW5zdXJlTm9kZUlkIGZyb20gJy4uLy4uL3NoYXJlZC9mdW5jdGlvbnMvZW5zdXJlTm9kZUlkLmpzJztcbmltcG9ydCBzY2hlbWFSZWR1Y2VyIGZyb20gJy4vc2NoZW1hUmVkdWNlci5qcyc7XG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIG5vZGVzOiBbXSxcbiAgbGlua3M6IFtdXG59O1xuXG52YXIgdXNlU2NoZW1hID0gZnVuY3Rpb24gdXNlU2NoZW1hKCkge1xuICB2YXIgaW5pdGlhbFNjaGVtYSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuXG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc2NoZW1hUmVkdWNlciwgaW5pdGlhbFNjaGVtYSksXG4gICAgICBfdXNlUmVkdWNlcjIgPSBfc2xpY2VkVG9BcnJheShfdXNlUmVkdWNlciwgMiksXG4gICAgICBzY2hlbWEgPSBfdXNlUmVkdWNlcjJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VSZWR1Y2VyMlsxXTtcblxuICB2YXIgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBub2RlcyA9IF9yZWYubm9kZXMsXG4gICAgICAgIGxpbmtzID0gX3JlZi5saW5rcztcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgdHlwZTogT05fQ0hBTkdFLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBub2Rlczogbm9kZXMsXG4gICAgICAgIGxpbmtzOiBsaW5rc1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBhZGROb2RlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgdHlwZTogT05fTk9ERV9BREQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG5vZGU6IGVuc3VyZU5vZGVJZChub2RlKVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciByZW1vdmVOb2RlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgdHlwZTogT05fTk9ERV9SRU1PVkUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG5vZGVJZDogbm9kZS5pZFxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBjb25uZWN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgdHlwZTogT05fQ09OTkVDVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbGluazoge1xuICAgICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgICBvdXRwdXQ6IG91dHB1dFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtzY2hlbWEsIE9iamVjdC5mcmVlemUoe1xuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBhZGROb2RlOiBhZGROb2RlLFxuICAgIHJlbW92ZU5vZGU6IHJlbW92ZU5vZGUsXG4gICAgY29ubmVjdDogY29ubmVjdFxuICB9KV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTY2hlbWE7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbmltcG9ydCBEaWFncmFtIGZyb20gJy4vRGlhZ3JhbS9EaWFncmFtLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlhZ3JhbSwgZGVmYXVsdCB9IGZyb20gJy4vRGlhZ3JhbS9EaWFncmFtLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU2NoZW1hIH0gZnJvbSAnLi9ob29rcy91c2VTY2hlbWEvdXNlU2NoZW1hLmpzJztcbmV4cG9ydCB7IHZhbGlkYXRlTGluaywgdmFsaWRhdGVMaW5rcywgdmFsaWRhdGVOb2RlLCB2YWxpZGF0ZU5vZGVzLCB2YWxpZGF0ZVBvcnQsIHZhbGlkYXRlU2NoZW1hIH0gZnJvbSAnLi9zaGFyZWQvZnVuY3Rpb25zL3ZhbGlkYXRvcnMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVTY2hlbWEgfSBmcm9tICcuL3NoYXJlZC9mdW5jdGlvbnMvY3JlYXRlU2NoZW1hLmpzJztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IHsgaW5oZXJpdHMgYXMgX2luaGVyaXRzLCBjcmVhdGVTdXBlciBhcyBfY3JlYXRlU3VwZXIsIHdyYXBOYXRpdmVTdXBlciBhcyBfd3JhcE5hdGl2ZVN1cGVyLCBjbGFzc0NhbGxDaGVjayBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcblxudmFyIERpYWdyYW1TY2hlbWFFcnJvciA9IGZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzKERpYWdyYW1TY2hlbWFFcnJvciwgX0Vycm9yKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERpYWdyYW1TY2hlbWFFcnJvcik7XG5cbiAgZnVuY3Rpb24gRGlhZ3JhbVNjaGVtYUVycm9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaWFncmFtU2NoZW1hRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5uYW1lID0gJ0RpYWdyYW0gU2NoZW1hIEVycm9yJztcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gRGlhZ3JhbVNjaGVtYUVycm9yO1xufShfd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG52YXIgRVJSID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE1VU1RfSEFWRV9OT0RFUzogZnVuY3Rpb24gTVVTVF9IQVZFX05PREVTKCkge1xuICAgIHJldHVybiBuZXcgRGlhZ3JhbVNjaGVtYUVycm9yKCdBIHZhbGlkIHNjaGVtYSBzaG91bGQgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydHkgXFwnbm9kZXNcXCcnKTtcbiAgfSxcbiAgSU5WQUxJRF9JRDogZnVuY3Rpb24gSU5WQUxJRF9JRCgpIHtcbiAgICByZXR1cm4gbmV3IERpYWdyYW1TY2hlbWFFcnJvcignQSB2YWxpZCBub2RlIHNob3VsZCBoYXZlIHRoZSByZXF1aXJlZCBhbmQgdW5pcXVlIHByb3BlcnR5IFxcJ2lkXFwnJyk7XG4gIH0sXG4gIElOVkFMSURfQ09PUkRTOiBmdW5jdGlvbiBJTlZBTElEX0NPT1JEUyhpZCkge1xuICAgIHJldHVybiBuZXcgRGlhZ3JhbVNjaGVtYUVycm9yKFwiXCIuY29uY2F0KGlkLCBcIiBub2RlICdjb29yZGluYXRlcycgcHJvcGVydHkgaXMgbm90IHZhbGlkLlwiKSk7XG4gIH0sXG4gIElOVkFMSURfQ09OVEVOVDogZnVuY3Rpb24gSU5WQUxJRF9DT05URU5UKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBEaWFncmFtU2NoZW1hRXJyb3IoXCJcIi5jb25jYXQoaWQsIFwiIG5vZGUgJ2NvbnRlbnQnIHByb3BlcnR5IGlzIG5vdCB2YWxpZC5cIikpO1xuICB9LFxuICBJTlZBTElEX1BPUlRfSUQ6IGZ1bmN0aW9uIElOVkFMSURfUE9SVF9JRCgpIHtcbiAgICByZXR1cm4gbmV3IERpYWdyYW1TY2hlbWFFcnJvcignQSB2YWxpZCBwb3J0IHNob3VsZCBoYXZlIGEgdW5pcXVlIGlkJyk7XG4gIH0sXG4gIElOVkFMSURfUE9SVF9DQU5fTElOSzogZnVuY3Rpb24gSU5WQUxJRF9QT1JUX0NBTl9MSU5LKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBEaWFncmFtU2NoZW1hRXJyb3IoXCJcIi5jb25jYXQoaWQsIFwiIHBvcnQgJ2NhbkxpbmsnIHByb3BlcnR5IGlzIG5vdCB2YWxpZC5cIikpO1xuICB9LFxuICBJTlZBTElEX1BPUlRfQUxJR05NRU5UOiBmdW5jdGlvbiBJTlZBTElEX1BPUlRfQUxJR05NRU5UKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBEaWFncmFtU2NoZW1hRXJyb3IoXCJcIi5jb25jYXQoaWQsIFwiIHBvcnQgJ2FsaWdubWVudCcgcHJvcGVydHkgaXMgbm90IHZhbGlkLlwiKSk7XG4gIH0sXG4gIElOVkFMSURfSU5QVVRTX0FSUkFZOiBmdW5jdGlvbiBJTlZBTElEX0lOUFVUU19BUlJBWShpZCkge1xuICAgIHJldHVybiBuZXcgRGlhZ3JhbVNjaGVtYUVycm9yKFwiXCIuY29uY2F0KGlkLCBcIiBub2RlICdpbnB1dCcgcHJvcGVydHkgaXMgbm90IHZhbGlkLlwiKSk7XG4gIH0sXG4gIElOVkFMSURfTk9ERVNfQVJSQVk6IGZ1bmN0aW9uIElOVkFMSURfTk9ERVNfQVJSQVkoKSB7XG4gICAgcmV0dXJuIG5ldyBEaWFncmFtU2NoZW1hRXJyb3IoJ1RoZSBcXCdub2Rlc1xcJyBwcm9wZXJ0eSBpcyBub3QgYSB2YWxpZCBhcnJheScpO1xuICB9LFxuICBJTlZBTElEX0xJTktTX0FSUkFZOiBmdW5jdGlvbiBJTlZBTElEX0xJTktTX0FSUkFZKCkge1xuICAgIHJldHVybiBuZXcgRGlhZ3JhbVNjaGVtYUVycm9yKCdUaGUgXFwnbGlua3NcXCcgcHJvcGVydHkgaXMgbm90IGEgdmFsaWQgYXJyYXknKTtcbiAgfSxcbiAgTElOS19JTlZBTElEX0lOUFVUX09VVFBVVDogZnVuY3Rpb24gTElOS19JTlZBTElEX0lOUFVUX09VVFBVVCgpIHtcbiAgICByZXR1cm4gbmV3IERpYWdyYW1TY2hlbWFFcnJvcignTGluayBwcm9wZXJ0aWVzIFxcJ2lucHV0XFwnIGFuZCBcXCdvdXRwdXRcXCcgYXJlIHJlcXVpcmVkIHN0cmluZycpO1xuICB9LFxuICBMSU5LX0lOVkFMSURfUkVBRE9OTFk6IGZ1bmN0aW9uIExJTktfSU5WQUxJRF9SRUFET05MWSgpIHtcbiAgICByZXR1cm4gbmV3IERpYWdyYW1TY2hlbWFFcnJvcignTGluayBwcm9wZXJ0eSBcXCdyZWFkb25seVxcJyBzaG91bGQgYmUgYSBib29sZWFuIHZhbHVlJyk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBFUlI7XG5leHBvcnQgeyBEaWFncmFtU2NoZW1hRXJyb3IgfTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIExpbmtUeXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb3V0cHV0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn0pO1xudmFyIFBvcnRBbGlnbm1lbnQgPSBQcm9wVHlwZXMub25lT2YoWydyaWdodCcsICdsZWZ0JywgJ3RvcCcsICdib3R0b20nXSk7XG52YXIgUG9ydFR5cGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjYW5MaW5rOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWxpZ25tZW50OiBQb3J0QWxpZ25tZW50XG59KTtcbnZhciBOb2RlVHlwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvb3JkaW5hdGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudFR5cGUsIFByb3BUeXBlcy5ub2RlXSksXG4gIGlucHV0czogUHJvcFR5cGVzLmFycmF5T2YoUG9ydFR5cGUpLFxuICBvdXRwdXRzOiBQcm9wVHlwZXMuYXJyYXlPZihQb3J0VHlwZSksXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnXSksXG4gIHJlbmRlcjogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn0pO1xudmFyIFNjaGVtYVR5cGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBub2RlczogUHJvcFR5cGVzLmFycmF5T2YoTm9kZVR5cGUpLmlzUmVxdWlyZWQsXG4gIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihMaW5rVHlwZSlcbn0pO1xuXG5leHBvcnQgeyBMaW5rVHlwZSwgTm9kZVR5cGUsIFBvcnRBbGlnbm1lbnQsIFBvcnRUeXBlLCBTY2hlbWFUeXBlIH07XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbmltcG9ydCB7IG9iamVjdFNwcmVhZDIgYXMgX29iamVjdFNwcmVhZDIgfSBmcm9tICcuLi8uLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCBlbnN1cmVOb2RlSWQgZnJvbSAnLi9lbnN1cmVOb2RlSWQuanMnO1xuaW1wb3J0IHsgdmFsaWRhdGVTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRvcnMuanMnO1xuXG52YXIgY3JlYXRlU2NoZW1hID0gZnVuY3Rpb24gY3JlYXRlU2NoZW1hKHNjaGVtYSkge1xuICB2YXIgbmV4dCA9IF9vYmplY3RTcHJlYWQyKHt9LCBzY2hlbWEpO1xuXG4gIG5leHQubm9kZXMgfHwgKG5leHQubm9kZXMgPSBbXSk7XG4gIG5leHQubGlua3MgfHwgKG5leHQubGlua3MgPSBbXSk7XG4gIG5leHQubm9kZXMuZm9yRWFjaChlbnN1cmVOb2RlSWQpO1xuICB2YWxpZGF0ZVNjaGVtYShuZXh0KTtcbiAgcmV0dXJuIG5leHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTY2hlbWE7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbnZhciBlbnN1cmVOb2RlSWQgPSBmdW5jdGlvbiBlbnN1cmVOb2RlSWQobm9kZSkge1xuICBub2RlLmlkIHx8IChub2RlLmlkID0gXCJub2RlLVwiLmNvbmNhdChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSkpKTtcbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbnN1cmVOb2RlSWQ7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbnZhciBnZXROb2RlUG9ydHNJZCA9IGZ1bmN0aW9uIGdldE5vZGVQb3J0c0lkKG5vZGUsIHBvcnRUeXBlKSB7XG4gIGlmIChub2RlW3BvcnRUeXBlXSAmJiBub2RlW3BvcnRUeXBlXS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIG5vZGVbcG9ydFR5cGVdLm1hcChmdW5jdGlvbiAocG9ydCkge1xuICAgICAgcmV0dXJuIHBvcnQuaWQ7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXROb2RlUG9ydHNJZDtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xudmFyIGdldFBhdGhNaWRwb2ludCA9IGZ1bmN0aW9uIGdldFBhdGhNaWRwb2ludChwYXRoRWxlbWVudCkge1xuICBpZiAocGF0aEVsZW1lbnQuZ2V0VG90YWxMZW5ndGggJiYgcGF0aEVsZW1lbnQuZ2V0UG9pbnRBdExlbmd0aCkge1xuICAgIHZhciBtaWRwb2ludCA9IHBhdGhFbGVtZW50LmdldFRvdGFsTGVuZ3RoKCkgLyAyO1xuXG4gICAgdmFyIF9wYXRoRWxlbWVudCRnZXRQb2ludCA9IHBhdGhFbGVtZW50LmdldFBvaW50QXRMZW5ndGgobWlkcG9pbnQpLFxuICAgICAgICB4ID0gX3BhdGhFbGVtZW50JGdldFBvaW50LngsXG4gICAgICAgIHkgPSBfcGF0aEVsZW1lbnQkZ2V0UG9pbnQueTtcblxuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICByZXR1cm4gWzAsIDBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UGF0aE1pZHBvaW50O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG52YXIgZ2V0UmVsYXRpdmVQb2ludCA9IGZ1bmN0aW9uIGdldFJlbGF0aXZlUG9pbnQocG9pbnQsIHJlbGF0aXZlKSB7XG4gIHJldHVybiBbcG9pbnRbMF0gLSByZWxhdGl2ZVswXSwgcG9pbnRbMV0gLSByZWxhdGl2ZVsxXV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRSZWxhdGl2ZVBvaW50O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG52YXIgQ1VSVkVfRkFDVE9SID0gNjA7XG5cbnZhciByb3VuZFBvaW50ID0gZnVuY3Rpb24gcm91bmRQb2ludChwb2ludCkge1xuICByZXR1cm4gW01hdGguZmxvb3IocG9pbnRbMF0pLCBNYXRoLmZsb29yKHBvaW50WzFdKV07XG59O1xuXG52YXIgZ2V0WE9mZnNldCA9IGZ1bmN0aW9uIGdldFhPZmZzZXQoYWxpZ25tZW50KSB7XG4gIGlmICghYWxpZ25tZW50IHx8IGFsaWdubWVudCAhPT0gJ2xlZnQnICYmIGFsaWdubWVudCAhPT0gJ3JpZ2h0JykgcmV0dXJuIDA7XG4gIHJldHVybiBhbGlnbm1lbnQgPT09ICdsZWZ0JyA/IC1DVVJWRV9GQUNUT1IgOiBDVVJWRV9GQUNUT1I7XG59O1xuXG52YXIgZ2V0WU9mZnNldCA9IGZ1bmN0aW9uIGdldFlPZmZzZXQoYWxpZ25tZW50KSB7XG4gIGlmICghYWxpZ25tZW50IHx8IGFsaWdubWVudCAhPT0gJ3RvcCcgJiYgYWxpZ25tZW50ICE9PSAnYm90dG9tJykgcmV0dXJuIDA7XG4gIHJldHVybiBhbGlnbm1lbnQgPT09ICd0b3AnID8gQ1VSVkVfRkFDVE9SIDogLUNVUlZFX0ZBQ1RPUjtcbn07XG5cbnZhciBtYWtlU3ZnUGF0aCA9IGZ1bmN0aW9uIG1ha2VTdmdQYXRoKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgdHlwZTogJ2N1cnZlJ1xuICB9O1xuICBpZiAoIXN0YXJ0UG9pbnQgfHwgIWVuZFBvaW50KSByZXR1cm4gJyc7XG4gIHZhciByb3VuZGVkU3RhcnQgPSByb3VuZFBvaW50KHN0YXJ0UG9pbnQpO1xuICB2YXIgcm91bmRlZEVuZCA9IHJvdW5kUG9pbnQoZW5kUG9pbnQpO1xuICB2YXIgc3RhcnQgPSBcIlwiLmNvbmNhdChyb3VuZGVkU3RhcnRbMF0sIFwiLCBcIikuY29uY2F0KHJvdW5kZWRTdGFydFsxXSk7XG4gIHZhciBlbmQgPSBcIlwiLmNvbmNhdChyb3VuZGVkRW5kWzBdLCBcIiwgXCIpLmNvbmNhdChyb3VuZGVkRW5kWzFdKTtcblxuICBpZiAob3B0aW9ucy50eXBlID09PSAnYmV6aWVyJyAmJiAob3B0aW9ucy5pbnB1dEFsaWdubWVudCB8fCBvcHRpb25zLm91dHB1dEFsaWdubWVudCkpIHtcbiAgICB2YXIgc3RhcnRDb250cm9sID0gZW5kO1xuICAgIHZhciBlbmRDb250cm9sID0gc3RhcnQ7XG5cbiAgICBpZiAob3B0aW9ucy5pbnB1dEFsaWdubWVudCkge1xuICAgICAgdmFyIG9mZnNldFggPSByb3VuZGVkU3RhcnRbMF0gKyBnZXRYT2Zmc2V0KG9wdGlvbnMuaW5wdXRBbGlnbm1lbnQpO1xuICAgICAgdmFyIG9mZnNldFkgPSByb3VuZGVkU3RhcnRbMV0gKyBnZXRZT2Zmc2V0KG9wdGlvbnMuaW5wdXRBbGlnbm1lbnQpO1xuICAgICAgZW5kQ29udHJvbCA9IFwiXCIuY29uY2F0KG9mZnNldFgsIFwiLCBcIikuY29uY2F0KG9mZnNldFkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm91dHB1dEFsaWdubWVudCkge1xuICAgICAgdmFyIF9vZmZzZXRYID0gcm91bmRlZEVuZFswXSArIGdldFhPZmZzZXQob3B0aW9ucy5vdXRwdXRBbGlnbm1lbnQpO1xuXG4gICAgICB2YXIgX29mZnNldFkgPSByb3VuZGVkRW5kWzFdICsgZ2V0WU9mZnNldChvcHRpb25zLm91dHB1dEFsaWdubWVudCk7XG5cbiAgICAgIHN0YXJ0Q29udHJvbCA9IFwiXCIuY29uY2F0KF9vZmZzZXRYLCBcIiwgXCIpLmNvbmNhdChfb2Zmc2V0WSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiTSBcIi5jb25jYXQoc3RhcnQsIFwiIEMgXCIpLmNvbmNhdChlbmRDb250cm9sLCBcIiBcIikuY29uY2F0KHN0YXJ0Q29udHJvbCwgXCIsIFwiKS5jb25jYXQoZW5kKTtcbiAgfVxuXG4gIHZhciBjdHJsID0gXCJcIi5jb25jYXQocm91bmRlZEVuZFswXSwgXCIsIFwiKS5jb25jYXQocm91bmRlZFN0YXJ0WzFdKTtcbiAgcmV0dXJuIFwiTSBcIi5jb25jYXQoc3RhcnQsIFwiIFEgXCIpLmNvbmNhdChjdHJsLCBcIiwgXCIpLmNvbmNhdChlbmQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVN2Z1BhdGg7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVSUiBmcm9tICcuLi9FcnJvcnMuanMnO1xuXG52YXIgdmFsaWRhdGVQb3J0ID0gZnVuY3Rpb24gdmFsaWRhdGVQb3J0KHBvcnQpIHtcbiAgaWYgKCFwb3J0LmlkKSB7XG4gICAgdGhyb3cgRVJSLklOVkFMSURfUE9SVF9JRCgpO1xuICB9XG5cbiAgaWYgKCEhcG9ydC5jYW5MaW5rICYmIHR5cGVvZiBwb3J0LmNhbkxpbmsgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBFUlIuSU5WQUxJRF9QT1JUX0NBTl9MSU5LKHBvcnQuaWQpO1xuICB9XG5cbiAgaWYgKCEhcG9ydC5hbGlnbm1lbnQgJiYgIVsncmlnaHQnLCAnbGVmdCcsICd0b3AnLCAnYm90dG9tJ10uaW5jbHVkZXMocG9ydC5hbGlnbm1lbnQpKSB7XG4gICAgdGhyb3cgRVJSLklOVkFMSURfUE9SVF9BTElHTk1FTlQocG9ydC5pZCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgdmFsaWRhdGVOb2RlID0gZnVuY3Rpb24gdmFsaWRhdGVOb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlLmlkKSB7XG4gICAgdGhyb3cgRVJSLklOVkFMSURfSUQoKTtcbiAgfVxuXG4gIGlmICghbm9kZS5jb29yZGluYXRlcyB8fCAhQXJyYXkuaXNBcnJheShub2RlLmNvb3JkaW5hdGVzKSB8fCBub2RlLmNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gMikge1xuICAgIHRocm93IEVSUi5JTlZBTElEX0NPT1JEUyhub2RlLmlkKTtcbiAgfVxuXG4gIGlmICghIW5vZGUuY29udGVudCAmJiB0eXBlb2Ygbm9kZS5jb250ZW50ICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygbm9kZS5jb250ZW50ICE9PSAnZnVuY3Rpb24nICYmICFpc1ZhbGlkRWxlbWVudChub2RlLmNvbnRlbnQpKSB7XG4gICAgdGhyb3cgRVJSLklOVkFMSURfQ09OVEVOVChub2RlLmlkKTtcbiAgfVxuXG4gIGlmIChub2RlLmlucHV0cykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlLmlucHV0cykpIHtcbiAgICAgIHRocm93IEVSUi5JTlZBTElEX0lOUFVUU19BUlJBWShub2RlLmlkKTtcbiAgICB9XG5cbiAgICBub2RlLmlucHV0cy5mb3JFYWNoKHZhbGlkYXRlUG9ydCk7XG4gIH1cblxuICBpZiAobm9kZS5vdXRwdXRzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGUub3V0cHV0cykpIHtcbiAgICAgIHRocm93IEVSUi5JTlZBTElEX0lOUFVUU19BUlJBWShub2RlLmlkKTtcbiAgICB9XG5cbiAgICBub2RlLm91dHB1dHMuZm9yRWFjaCh2YWxpZGF0ZVBvcnQpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIHZhbGlkYXRlTm9kZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU5vZGVzKG5vZGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShub2RlcykpIHtcbiAgICB0aHJvdyBFUlIuSU5WQUxJRF9OT0RFU19BUlJBWSgpO1xuICB9XG5cbiAgbm9kZXMuZm9yRWFjaCh2YWxpZGF0ZU5vZGUpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgdmFsaWRhdGVMaW5rID0gZnVuY3Rpb24gdmFsaWRhdGVMaW5rKGxpbmspIHtcbiAgaWYgKCFsaW5rLmlucHV0IHx8ICFsaW5rLm91dHB1dCB8fCB0eXBlb2YgbGluay5pbnB1dCAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGxpbmsub3V0cHV0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IEVSUi5MSU5LX0lOVkFMSURfSU5QVVRfT1VUUFVUKCk7XG4gIH1cblxuICBpZiAobGluay5yZWFkb25seSAmJiB0eXBlb2YgbGluay5yZWFkb25seSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgdGhyb3cgRVJSLkxJTktfSU5WQUxJRF9SRUFET05MWSgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIHZhbGlkYXRlTGlua3MgPSBmdW5jdGlvbiB2YWxpZGF0ZUxpbmtzKGxpbmtzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaW5rcykpIHtcbiAgICB0aHJvdyBFUlIuSU5WQUxJRF9MSU5LU19BUlJBWSgpO1xuICB9XG5cbiAgbGlua3MuZm9yRWFjaCh2YWxpZGF0ZUxpbmspO1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgdmFsaWRhdGVTY2hlbWEgPSBmdW5jdGlvbiB2YWxpZGF0ZVNjaGVtYShfcmVmKSB7XG4gIHZhciBsaW5rcyA9IF9yZWYubGlua3MsXG4gICAgICBub2RlcyA9IF9yZWYubm9kZXM7XG5cbiAgaWYgKCFub2Rlcykge1xuICAgIHRocm93IEVSUi5NVVNUX0hBVkVfTk9ERVMoKTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZUxpbmtzKGxpbmtzKSAmJiB2YWxpZGF0ZU5vZGVzKG5vZGVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlU2NoZW1hO1xuZXhwb3J0IHsgdmFsaWRhdGVMaW5rLCB2YWxpZGF0ZUxpbmtzLCB2YWxpZGF0ZU5vZGUsIHZhbGlkYXRlTm9kZXMsIHZhbGlkYXRlUG9ydCwgdmFsaWRhdGVTY2hlbWEgfTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFncmFtQ29udGV4dCBmcm9tICcuLi8uLi9Db250ZXh0L0RpYWdyYW1Db250ZXh0LmpzJztcblxudmFyIHVzZUNhbnZhcyA9IGZ1bmN0aW9uIHVzZUNhbnZhcygpIHtcbiAgdmFyIF91c2VDb250ZXh0ID0gdXNlQ29udGV4dChEaWFncmFtQ29udGV4dCksXG4gICAgICBjYW52YXMgPSBfdXNlQ29udGV4dC5jYW52YXM7XG5cbiAgcmV0dXJuIGNhbnZhcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhbnZhcztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFncmFtQ29udGV4dCBmcm9tICcuLi8uLi9Db250ZXh0L0RpYWdyYW1Db250ZXh0LmpzJztcblxudmFyIHVzZVBvcnRSZWdpc3RyYXRpb24gPSBmdW5jdGlvbiB1c2VQb3J0UmVnaXN0cmF0aW9uKGlucHV0cywgb3V0cHV0cywgb25Qb3J0UmVnaXN0ZXIpIHtcbiAgdmFyIF91c2VDb250ZXh0ID0gdXNlQ29udGV4dChEaWFncmFtQ29udGV4dCksXG4gICAgICBjYW52YXMgPSBfdXNlQ29udGV4dC5jYW52YXMsXG4gICAgICBwb3J0cyA9IF91c2VDb250ZXh0LnBvcnRzO1xuXG4gIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAocG9ydElkLCBwb3J0RWxlbWVudCkge1xuICAgIGlmIChjYW52YXMgJiYgKGlucHV0cyB8fCBvdXRwdXRzKSkge1xuICAgICAgaWYgKHBvcnRzICYmICFwb3J0c1twb3J0SWRdKSB7XG4gICAgICAgIG9uUG9ydFJlZ2lzdGVyKHBvcnRJZCwgcG9ydEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgWyEhY2FudmFzLCAhIXBvcnRzLCBpbnB1dHMsIG91dHB1dHNdKTtcbn07XG52YXIgdXNlTm9kZVJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uIHVzZU5vZGVSZWdpc3RyYXRpb24ocmVmLCBvbk5vZGVSZWdpc3RlciwgaWQpIHtcbiAgdmFyIF91c2VDb250ZXh0MiA9IHVzZUNvbnRleHQoRGlhZ3JhbUNvbnRleHQpLFxuICAgICAgY2FudmFzID0gX3VzZUNvbnRleHQyLmNhbnZhcyxcbiAgICAgIG5vZGVzID0gX3VzZUNvbnRleHQyLm5vZGVzO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9uTm9kZVJlZ2lzdGVyICYmIHJlZi5jdXJyZW50ICYmIGNhbnZhcyAmJiBub2RlcyAmJiAhbm9kZXNbaWRdKSB7XG4gICAgICBvbk5vZGVSZWdpc3RlcihpZCwgcmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW3JlZi5jdXJyZW50LCBvbk5vZGVSZWdpc3RlciwgISFjYW52YXMsICEhbm9kZXMsIGlkXSk7XG59O1xuXG5leHBvcnQgeyB1c2VOb2RlUmVnaXN0cmF0aW9uLCB1c2VQb3J0UmVnaXN0cmF0aW9uIH07XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtZGlhZ3JhbXMgdmVyc2lvbjogMC41LjEgKi9cbmltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9iamVjdFNwcmVhZDIgYXMgX29iamVjdFNwcmVhZDIgfSBmcm9tICcuLi8uLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHJlZjogdW5kZWZpbmVkLFxuICB0aHJvdHRsZUJ5OiAwXG59O1xuXG52YXIgZ2V0RXZlbnRDb29yZGluYXRlcyA9IGZ1bmN0aW9uIGdldEV2ZW50Q29vcmRpbmF0ZXMoZXZlbnQpIHtcbiAgcmV0dXJuIFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXTtcbn07XG5cbnZhciBjcmVhdGVDYWxsYmFja1JlZiA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrUmVmKHJlZikge1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKCFyZWYuY3VycmVudCB8fCBjYWxsYmFjayAhPT0gcmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50ID0gY2FsbGJhY2s7XG4gICAgfVxuICB9LCBbcmVmLmN1cnJlbnRdKTtcbn07XG5cbnZhciB1c2VEcmFnID0gZnVuY3Rpb24gdXNlRHJhZygpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGRlZmF1bHRPcHRpb25zO1xuICB2YXIgdGFyZ2V0UmVmID0gb3B0aW9ucy5yZWYgfHwgdXNlUmVmKCk7XG4gIHZhciBkcmFnU3RhcnRIYW5kbGVyUmVmID0gdXNlUmVmKCk7XG4gIHZhciBkcmFnSGFuZGxlclJlZiA9IHVzZVJlZigpO1xuICB2YXIgZHJhZ0VuZEhhbmRsZXJSZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgX3VzZVJlZiA9IHVzZVJlZih7XG4gICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgc3RhcnQ6IG51bGwsXG4gICAgZW5kOiBudWxsLFxuICAgIG9mZnNldDogbnVsbFxuICB9KSxcbiAgICAgIGluZm8gPSBfdXNlUmVmLmN1cnJlbnQ7XG5cbiAgdmFyIG9uRHJhZ1N0YXJ0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCFpbmZvLmlzRHJhZ2dpbmcgJiYgdGFyZ2V0UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgaW5mby5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIGluZm8uZW5kID0gbnVsbDtcbiAgICAgIGluZm8ub2Zmc2V0ID0gbnVsbDtcbiAgICAgIGluZm8uc3RhcnQgPSBnZXRFdmVudENvb3JkaW5hdGVzKGV2ZW50KTtcblxuICAgICAgaWYgKGRyYWdTdGFydEhhbmRsZXJSZWYuY3VycmVudCkge1xuICAgICAgICBkcmFnU3RhcnRIYW5kbGVyUmVmLmN1cnJlbnQoZXZlbnQsIF9vYmplY3RTcHJlYWQyKHt9LCBpbmZvKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbdGFyZ2V0UmVmLmN1cnJlbnQsIGluZm8sIGRyYWdTdGFydEhhbmRsZXJSZWYuY3VycmVudF0pO1xuICB2YXIgb25EcmFnID0gdXNlQ2FsbGJhY2sodGhyb3R0bGUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGluZm8uaXNEcmFnZ2luZykge1xuICAgICAgaW5mby5vZmZzZXQgPSBbaW5mby5zdGFydFswXSAtIGV2ZW50LmNsaWVudFgsIGluZm8uc3RhcnRbMV0gLSBldmVudC5jbGllbnRZXTtcblxuICAgICAgaWYgKGRyYWdIYW5kbGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZHJhZ0hhbmRsZXJSZWYuY3VycmVudChldmVudCwgX29iamVjdFNwcmVhZDIoe30sIGluZm8pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIG9wdGlvbnMudGhyb3R0bGVCeSksIFt0YXJnZXRSZWYuY3VycmVudCwgaW5mbywgZHJhZ0hhbmRsZXJSZWYuY3VycmVudF0pO1xuICB2YXIgb25EcmFnRW5kID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGluZm8uaXNEcmFnZ2luZykge1xuICAgICAgaW5mby5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICBpbmZvLmVuZCA9IGdldEV2ZW50Q29vcmRpbmF0ZXMoZXZlbnQpO1xuXG4gICAgICBpZiAoZHJhZ0VuZEhhbmRsZXJSZWYuY3VycmVudCkge1xuICAgICAgICBkcmFnRW5kSGFuZGxlclJlZi5jdXJyZW50KGV2ZW50LCBfb2JqZWN0U3ByZWFkMih7fSwgaW5mbykpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3RhcmdldFJlZi5jdXJyZW50LCBpbmZvLCBkcmFnRW5kSGFuZGxlclJlZi5jdXJyZW50XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9vbkRyYWdTdGFydCA9IGZ1bmN0aW9uIF9vbkRyYWdTdGFydChlKSB7XG4gICAgICByZXR1cm4gb25EcmFnU3RhcnQoZSk7XG4gICAgfTtcblxuICAgIHZhciBfb25EcmFnID0gZnVuY3Rpb24gX29uRHJhZyhlKSB7XG4gICAgICByZXR1cm4gb25EcmFnKGUpO1xuICAgIH07XG5cbiAgICB2YXIgX29uRHJhZ0VuZCA9IGZ1bmN0aW9uIF9vbkRyYWdFbmQoZSkge1xuICAgICAgcmV0dXJuIG9uRHJhZ0VuZChlKTtcbiAgICB9O1xuXG4gICAgaWYgKHRhcmdldFJlZi5jdXJyZW50KSB7XG4gICAgICB0YXJnZXRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBfb25EcmFnU3RhcnQpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX29uRHJhZyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX29uRHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXJnZXRSZWYuY3VycmVudCkge1xuICAgICAgICB0YXJnZXRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBfb25EcmFnU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfb25EcmFnKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF9vbkRyYWdFbmQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFt0YXJnZXRSZWYuY3VycmVudF0pO1xuICByZXR1cm4ge1xuICAgIHJlZjogdGFyZ2V0UmVmLFxuICAgIG9uRHJhZ1N0YXJ0OiBjcmVhdGVDYWxsYmFja1JlZihkcmFnU3RhcnRIYW5kbGVyUmVmKSxcbiAgICBvbkRyYWc6IGNyZWF0ZUNhbGxiYWNrUmVmKGRyYWdIYW5kbGVyUmVmKSxcbiAgICBvbkRyYWdFbmQ6IGNyZWF0ZUNhbGxiYWNrUmVmKGRyYWdFbmRIYW5kbGVyUmVmKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRHJhZztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFncmFtQ29udGV4dCBmcm9tICcuLi8uLi9Db250ZXh0L0RpYWdyYW1Db250ZXh0LmpzJztcblxudmFyIHVzZU5vZGVSZWZzID0gZnVuY3Rpb24gdXNlTm9kZVJlZnMoKSB7XG4gIHZhciBfdXNlQ29udGV4dCA9IHVzZUNvbnRleHQoRGlhZ3JhbUNvbnRleHQpLFxuICAgICAgbm9kZXMgPSBfdXNlQ29udGV4dC5ub2RlcztcblxuICByZXR1cm4gbm9kZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VOb2RlUmVmcztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcyB2ZXJzaW9uOiAwLjUuMSAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldE5vZGVQb3J0c0lkIGZyb20gJy4uL2Z1bmN0aW9ucy9nZXROb2RlUG9ydHNJZC5qcyc7XG5cbnZhciB1c2VOb2RlVW5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiB1c2VOb2RlVW5yZWdpc3RyYXRpb24ob25Ob2RlUmVtb3ZlLCBpbnB1dHMsIG91dHB1dHMsIGlkKSB7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvbk5vZGVSZW1vdmUpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgICAgICAgb3V0cHV0czogb3V0cHV0c1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaW5wdXRzUG9ydCA9IGdldE5vZGVQb3J0c0lkKG5vZGUsICdpbnB1dHMnKTtcbiAgICAgICAgdmFyIG91dHB1dHNQb3J0ID0gZ2V0Tm9kZVBvcnRzSWQobm9kZSwgJ291dHB1dHMnKTtcbiAgICAgICAgb25Ob2RlUmVtb3ZlKGlkLCBpbnB1dHNQb3J0LCBvdXRwdXRzUG9ydCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTm9kZVVucmVnaXN0cmF0aW9uO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWRpYWdyYW1zIHZlcnNpb246IDAuNS4xICovXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpYWdyYW1Db250ZXh0IGZyb20gJy4uLy4uL0NvbnRleHQvRGlhZ3JhbUNvbnRleHQuanMnO1xuXG52YXIgdXNlUG9ydFJlZnMgPSBmdW5jdGlvbiB1c2VQb3J0UmVmcygpIHtcbiAgdmFyIF91c2VDb250ZXh0ID0gdXNlQ29udGV4dChEaWFncmFtQ29udGV4dCksXG4gICAgICBwb3J0cyA9IF91c2VDb250ZXh0LnBvcnRzO1xuXG4gIHJldHVybiBwb3J0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBvcnRSZWZzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vc3R5bGVzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBhcnJheUxpa2VUb0FycmF5LCBfYXJyYXlXaXRoSG9sZXMgYXMgYXJyYXlXaXRoSG9sZXMsIF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZpbmVQcm9wZXJ0eSwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0IGFzIGl0ZXJhYmxlVG9BcnJheUxpbWl0LCBfbm9uSXRlcmFibGVSZXN0IGFzIG5vbkl0ZXJhYmxlUmVzdCwgX29iamVjdFNwcmVhZDIgYXMgb2JqZWN0U3ByZWFkMiwgX3NsaWNlZFRvQXJyYXkgYXMgc2xpY2VkVG9BcnJheSwgX3R5cGVvZiBhcyB0eXBlb2YsIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSB9O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VEaWRNb3VudCB9IGZyb20gJy4vdXNlRGlkTW91bnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VXaWxsVW5tb3VudCB9IGZyb20gJy4vdXNlV2lsbFVubW91bnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VMaWZlY3ljbGUgfSBmcm9tICcuL3VzZUxpZmVjeWNsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVdpbmRvd1Jlc2l6ZSB9IGZyb20gJy4vdXNlV2luZG93UmVzaXplLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlV2luZG93U2Nyb2xsIH0gZnJvbSAnLi91c2VXaW5kb3dTY3JvbGwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VEZWJvdW5jZWRGbiB9IGZyb20gJy4vdXNlRGVib3VuY2VkRm4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaHJvdHRsZWRGbiB9IGZyb20gJy4vdXNlVGhyb3R0bGVkRm4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNb3VzZSB9IGZyb20gJy4vdXNlTW91c2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNb3VzZUV2ZW50cyB9IGZyb20gJy4vdXNlTW91c2VFdmVudHMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNb3VzZVN0YXRlIH0gZnJvbSAnLi91c2VNb3VzZVN0YXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGltZW91dCB9IGZyb20gJy4vdXNlVGltZW91dC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNvbmRpdGlvbmFsVGltZW91dCB9IGZyb20gJy4vdXNlQ29uZGl0aW9uYWxUaW1lb3V0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlSW50ZXJ2YWwgfSBmcm9tICcuL3VzZUludGVydmFsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlR2xvYmFsRXZlbnQgfSBmcm9tICcuL3VzZUdsb2JhbEV2ZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUHJldmlvdXNWYWx1ZSB9IGZyb20gJy4vdXNlUHJldmlvdXNWYWx1ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi91c2VHZW9sb2NhdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUdlb2xvY2F0aW9uRXZlbnRzIH0gZnJvbSAnLi91c2VHZW9sb2NhdGlvbkV2ZW50cy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUdlb2xvY2F0aW9uU3RhdGUgfSBmcm9tICcuL3VzZUdlb2xvY2F0aW9uU3RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi91c2VNZWRpYVF1ZXJ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVmFsdWVIaXN0b3J5IH0gZnJvbSAnLi91c2VWYWx1ZUhpc3RvcnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VPbmxpbmVTdGF0ZSB9IGZyb20gJy4vdXNlT25saW5lU3RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VWaWV3cG9ydFNweSB9IGZyb20gJy4vdXNlVmlld3BvcnRTcHkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VWYWxpZGF0ZWRTdGF0ZSB9IGZyb20gJy4vdXNlVmFsaWRhdGVkU3RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VEcmFnRXZlbnRzIH0gZnJvbSAnLi91c2VEcmFnRXZlbnRzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRHJhZyB9IGZyb20gJy4vdXNlRHJhZy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZURyb3Bab25lIH0gZnJvbSAnLi91c2VEcm9wWm9uZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gJy4vdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi91c2VMb2NhbFN0b3JhZ2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTZXNzaW9uU3RvcmFnZSB9IGZyb20gJy4vdXNlU2Vzc2lvblN0b3JhZ2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTdG9yYWdlIH0gZnJvbSAnLi91c2VTdG9yYWdlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUmVzaXplT2JzZXJ2ZXIgfSBmcm9tICcuL3VzZVJlc2l6ZU9ic2VydmVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRGVmYXVsdGVkU3RhdGUgfSBmcm9tICcuL3VzZURlZmF1bHRlZFN0YXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlT2JzZXJ2YWJsZSB9IGZyb20gJy4vdXNlT2JzZXJ2YWJsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNwZWVjaFN5bnRoZXNpcyB9IGZyb20gJy4vdXNlU3BlZWNoU3ludGhlc2lzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU3lzdGVtVm9pY2VzIH0gZnJvbSAnLi91c2VTeXN0ZW1Wb2ljZXMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VSZW5kZXJJbmZvIH0gZnJvbSAnLi91c2VSZW5kZXJJbmZvLmpzJztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IG9iamVjdFNwcmVhZDIgYXMgX29iamVjdFNwcmVhZDIsIHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VQcmV2aW91c1ZhbHVlIGZyb20gJy4vdXNlUHJldmlvdXNWYWx1ZS5qcyc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgY2FuY2VsT25Vbm1vdW50OiB0cnVlLFxuICBjYW5jZWxPbkNvbmRpdGlvbkNoYW5nZTogdHJ1ZVxufTtcblxudmFyIHVzZUNvbmRpdGlvbmFsVGltZW91dCA9IGZ1bmN0aW9uIHVzZUNvbmRpdGlvbmFsVGltZW91dChmbiwgbWlsbGlzZWNvbmRzLCBjb25kaXRpb24pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGRlZmF1bHRPcHRpb25zO1xuXG4gIHZhciBvcHRzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIHRpbWVvdXQgPSB1c2VSZWYoKTtcbiAgdmFyIGNhbGxiYWNrID0gdXNlUmVmKGZuKTtcbiAgdmFyIHByZXZDb25kaXRpb24gPSB1c2VQcmV2aW91c1ZhbHVlKGNvbmRpdGlvbik7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgaXNDbGVhcmVkID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldElzQ2xlYXJlZCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGNsZWFyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aW1lb3V0LmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0LmN1cnJlbnQpO1xuICAgICAgc2V0SXNDbGVhcmVkKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrLmN1cnJlbnQgPSBmbjtcbiAgICB9XG4gIH0sIFtmbl0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb25kaXRpb24gJiYgdHlwZW9mIG1pbGxpc2Vjb25kcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRpbWVvdXQuY3VycmVudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5jdXJyZW50KCk7XG4gICAgICB9LCBtaWxsaXNlY29uZHMpO1xuICAgIH1cblxuICAgIHJldHVybiBjbGVhcjtcbiAgfSwgW2NvbmRpdGlvbiwgbWlsbGlzZWNvbmRzXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByZXZDb25kaXRpb24gJiYgY29uZGl0aW9uICE9PSBwcmV2Q29uZGl0aW9uICYmIG9wdHMuY2FuY2VsT25Db25kaXRpb25DaGFuZ2UpIHtcbiAgICAgIGNsZWFyKCk7XG4gICAgfVxuICB9LCBbY29uZGl0aW9uLCBvcHRpb25zXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcHRzLmNhbmNlbE9uVW5tb3VudCkge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtpc0NsZWFyZWQsIGNsZWFyXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNvbmRpdGlvbmFsVGltZW91dDtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgbGVhZGluZzogZmFsc2UsXG4gIHRyYWlsaW5nOiB0cnVlXG59O1xuXG52YXIgdXNlRGVib3VuY2VkRm4gPSBmdW5jdGlvbiB1c2VEZWJvdW5jZWRGbihmbikge1xuICB2YXIgd2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwO1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGVmYXVsdE9wdGlvbnM7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGRlYm91bmNlZCA9IGRlYm91bmNlKGZuLCB3YWl0LCBvcHRpb25zKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGRlYm91bmNlZCwgZGVwZW5kZW5jaWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlYm91bmNlZEZuO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudmFyIG1heWJlU3RhdGUgPSBmdW5jdGlvbiBtYXliZVN0YXRlKHN0YXRlLCBkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB2b2lkIDAgPyBzdGF0ZSA6IGRlZmF1bHRWYWx1ZTtcbn07XG5cbnZhciB1c2VEZWZhdWx0ZWRTdGF0ZSA9IGZ1bmN0aW9uIHVzZURlZmF1bHRlZFN0YXRlKGRlZmF1bHRWYWx1ZSwgaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShtYXliZVN0YXRlKGluaXRpYWxTdGF0ZSwgZGVmYXVsdFZhbHVlKSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgc2V0U3RhdGVTYWZlID0gZnVuY3Rpb24gc2V0U3RhdGVTYWZlKG5leHRTdGF0ZSkge1xuICAgIHJldHVybiBzZXRTdGF0ZShtYXliZVN0YXRlKG5leHRTdGF0ZSwgZGVmYXVsdFZhbHVlKSk7XG4gIH07XG5cbiAgcmV0dXJuIFttYXliZVN0YXRlKHN0YXRlLCBkZWZhdWx0VmFsdWUpLCBzZXRTdGF0ZVNhZmVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRGVmYXVsdGVkU3RhdGU7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVIYW5kbGVyU2V0dGVyIGZyb20gJy4vdXRpbHMvY3JlYXRlSGFuZGxlclNldHRlci5qcyc7XG5cbnZhciB1c2VEaWRNb3VudCA9IGZ1bmN0aW9uIHVzZURpZE1vdW50KGhhbmRsZXIpIHtcbiAgdmFyIF9jcmVhdGVIYW5kbGVyU2V0dGVyID0gY3JlYXRlSGFuZGxlclNldHRlcihoYW5kbGVyKSxcbiAgICAgIF9jcmVhdGVIYW5kbGVyU2V0dGVyMiA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyLCAyKSxcbiAgICAgIG9uTW91bnRIYW5kbGVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyWzBdLFxuICAgICAgc2V0T25Nb3VudEhhbmRsZXIgPSBfY3JlYXRlSGFuZGxlclNldHRlcjJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25Nb3VudEhhbmRsZXIuY3VycmVudCkge1xuICAgICAgb25Nb3VudEhhbmRsZXIuY3VycmVudCgpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gc2V0T25Nb3VudEhhbmRsZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VEaWRNb3VudDtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXksIG9iamVjdFNwcmVhZDIgYXMgX29iamVjdFNwcmVhZDIsIHR5cGVvZiBhcyBfdHlwZW9mIH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZURyYWdFdmVudHMgZnJvbSAnLi91c2VEcmFnRXZlbnRzLmpzJztcblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBkcmFnSW1hZ2U6IG51bGwsXG4gIGRyYWdJbWFnZVhPZmZzZXQ6IDAsXG4gIGRyYWdJbWFnZVlPZmZzZXQ6IDAsXG4gIHRyYW5zZmVyOiBudWxsLFxuICB0cmFuc2ZlckZvcm1hdDogJ3RleHQnXG59O1xuXG52YXIgdXNlRHJhZyA9IGZ1bmN0aW9uIHVzZURyYWcodGFyZ2V0UmVmKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0T3B0aW9ucztcblxuICB2YXIgX3VzZURyYWdFdmVudHMgPSB1c2VEcmFnRXZlbnRzKHRhcmdldFJlZiwgdHJ1ZSksXG4gICAgICBvbkRyYWdTdGFydCA9IF91c2VEcmFnRXZlbnRzLm9uRHJhZ1N0YXJ0LFxuICAgICAgb25EcmFnRW5kID0gX3VzZURyYWdFdmVudHMub25EcmFnRW5kO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlzRHJhZ2dpbmcgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SXNEcmFnZ2luZyA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG9wdHMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zIHx8IHt9KTtcblxuICBvbkRyYWdTdGFydChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzZXRJc0RyYWdnaW5nKHRydWUpO1xuXG4gICAgaWYgKG9wdHMuZHJhZ0ltYWdlKSB7XG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gb3B0cy5kcmFnSW1hZ2U7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgb3B0cy5kcmFnSW1hZ2VYT2Zmc2V0LCBvcHRzLmRyYWdJbWFnZVlPZmZzZXQpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnRyYW5zZmVyKSB7XG4gICAgICB2YXIgZGF0YSA9IF90eXBlb2Yob3B0cy50cmFuc2ZlcikgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkob3B0cy50cmFuc2ZlcikgOiBcIlwiLmNvbmNhdChvcHRzLnRyYW5zZmVyKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKG9wdHMudHJhbnNmZXJGb3JtYXQsIGRhdGEpO1xuICAgIH1cbiAgfSk7XG4gIG9uRHJhZ0VuZChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICB9KTtcbiAgcmV0dXJuIGlzRHJhZ2dpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VEcmFnO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGFzT3duUHJvcGVydHkgZnJvbSAnLi91dGlscy9oYXNPd25Qcm9wZXJ0eS5qcyc7XG5pbXBvcnQgY3JlYXRlQ2JTZXR0ZXJFcnJvclByb3h5IGZyb20gJy4vdXRpbHMvY3JlYXRlQ2JTZXR0ZXJFcnJvclByb3h5LmpzJztcbmltcG9ydCBjcmVhdGVIYW5kbGVyU2V0dGVyIGZyb20gJy4vdXRpbHMvY3JlYXRlSGFuZGxlclNldHRlci5qcyc7XG5cbnZhciBhc3NpZ25EcmFnRXZlbnRPbk1vdW50ID0gZnVuY3Rpb24gYXNzaWduRHJhZ0V2ZW50T25Nb3VudCh0YXJnZXRSZWYsIGhhbmRsZXJSZWYsIGV2ZW50TmFtZSkge1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uIGNiKGRyYWdFdmVudCkge1xuICAgICAgaWYgKGhhbmRsZXJSZWYuY3VycmVudCkge1xuICAgICAgICBoYW5kbGVyUmVmLmN1cnJlbnQoZHJhZ0V2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRhcmdldFJlZi5jdXJyZW50KSB7XG4gICAgICB0YXJnZXRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGFyZ2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdGFyZ2V0UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG59O1xuXG52YXIgdXNlRHJhZ0V2ZW50cyA9IGZ1bmN0aW9uIHVzZURyYWdFdmVudHModGFyZ2V0UmVmKSB7XG4gIHZhciBzZXREcmFnZ2FibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgdmFyIF9jcmVhdGVIYW5kbGVyU2V0dGVyID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyID0gX3NsaWNlZFRvQXJyYXkoX2NyZWF0ZUhhbmRsZXJTZXR0ZXIsIDIpLFxuICAgICAgb25EcmFnID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyWzBdLFxuICAgICAgc2V0T25EcmFnID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyWzFdO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlcjMgPSBjcmVhdGVIYW5kbGVyU2V0dGVyKCksXG4gICAgICBfY3JlYXRlSGFuZGxlclNldHRlcjQgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlSGFuZGxlclNldHRlcjMsIDIpLFxuICAgICAgb25Ecm9wID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXI0WzBdLFxuICAgICAgc2V0T25Ecm9wID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXI0WzFdO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlcjUgPSBjcmVhdGVIYW5kbGVyU2V0dGVyKCksXG4gICAgICBfY3JlYXRlSGFuZGxlclNldHRlcjYgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlSGFuZGxlclNldHRlcjUsIDIpLFxuICAgICAgb25EcmFnRW50ZXIgPSBfY3JlYXRlSGFuZGxlclNldHRlcjZbMF0sXG4gICAgICBzZXRPbkRyYWdFbnRlciA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyNlsxXTtcblxuICB2YXIgX2NyZWF0ZUhhbmRsZXJTZXR0ZXI3ID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXI4ID0gX3NsaWNlZFRvQXJyYXkoX2NyZWF0ZUhhbmRsZXJTZXR0ZXI3LCAyKSxcbiAgICAgIG9uRHJhZ0VuZCA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyOFswXSxcbiAgICAgIHNldE9uRHJhZ0VuZCA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyOFsxXTtcblxuICB2YXIgX2NyZWF0ZUhhbmRsZXJTZXR0ZXI5ID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMCA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyOSwgMiksXG4gICAgICBvbkRyYWdFeGl0ID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMFswXSxcbiAgICAgIHNldE9uRHJhZ0V4aXQgPSBfY3JlYXRlSGFuZGxlclNldHRlcjEwWzFdO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlcjExID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMiA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyMTEsIDIpLFxuICAgICAgb25EcmFnTGVhdmUgPSBfY3JlYXRlSGFuZGxlclNldHRlcjEyWzBdLFxuICAgICAgc2V0T25EcmFnTGVhdmUgPSBfY3JlYXRlSGFuZGxlclNldHRlcjEyWzFdO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlcjEzID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxNCA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyMTMsIDIpLFxuICAgICAgb25EcmFnT3ZlciA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyMTRbMF0sXG4gICAgICBzZXRPbkRyYWdPdmVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxNFsxXTtcblxuICB2YXIgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxNSA9IGNyZWF0ZUhhbmRsZXJTZXR0ZXIoKSxcbiAgICAgIF9jcmVhdGVIYW5kbGVyU2V0dGVyMTYgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlSGFuZGxlclNldHRlcjE1LCAyKSxcbiAgICAgIG9uRHJhZ1N0YXJ0ID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxNlswXSxcbiAgICAgIHNldE9uRHJhZ1N0YXJ0ID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxNlsxXTtcblxuICBpZiAodGFyZ2V0UmVmICE9PSBudWxsICYmICFoYXNPd25Qcm9wZXJ0eSh0YXJnZXRSZWYsICdjdXJyZW50JykpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2JTZXR0ZXJFcnJvclByb3h5KCdVbmFibGUgdG8gYXNzaWduIGFueSBkcmFnIGV2ZW50IHRvIHRoZSBnaXZlbiByZWYnKTtcbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNldERyYWdnYWJsZSAmJiB0YXJnZXRSZWYuY3VycmVudCAmJiAhdGFyZ2V0UmVmLmN1cnJlbnQuaGFzQXR0cmlidXRlKCdkcmFnZ2FibGUnKSkge1xuICAgICAgdGFyZ2V0UmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgYXNzaWduRHJhZ0V2ZW50T25Nb3VudCh0YXJnZXRSZWYsIG9uRHJhZywgJ2RyYWcnKTtcbiAgYXNzaWduRHJhZ0V2ZW50T25Nb3VudCh0YXJnZXRSZWYsIG9uRHJvcCwgJ2Ryb3AnKTtcbiAgYXNzaWduRHJhZ0V2ZW50T25Nb3VudCh0YXJnZXRSZWYsIG9uRHJhZ0VudGVyLCAnZHJhZ2VudGVyJyk7XG4gIGFzc2lnbkRyYWdFdmVudE9uTW91bnQodGFyZ2V0UmVmLCBvbkRyYWdFbmQsICdkcmFnZW5kJyk7XG4gIGFzc2lnbkRyYWdFdmVudE9uTW91bnQodGFyZ2V0UmVmLCBvbkRyYWdFeGl0LCAnZHJhZ2V4aXQnKTtcbiAgYXNzaWduRHJhZ0V2ZW50T25Nb3VudCh0YXJnZXRSZWYsIG9uRHJhZ0xlYXZlLCAnZHJhZ2xlYXZlJyk7XG4gIGFzc2lnbkRyYWdFdmVudE9uTW91bnQodGFyZ2V0UmVmLCBvbkRyYWdPdmVyLCAnZHJhZ292ZXInKTtcbiAgYXNzaWduRHJhZ0V2ZW50T25Nb3VudCh0YXJnZXRSZWYsIG9uRHJhZ1N0YXJ0LCAnZHJhZ3N0YXJ0Jyk7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBvbkRyYWc6IHNldE9uRHJhZyxcbiAgICBvbkRyb3A6IHNldE9uRHJvcCxcbiAgICBvbkRyYWdFbnRlcjogc2V0T25EcmFnRW50ZXIsXG4gICAgb25EcmFnRW5kOiBzZXRPbkRyYWdFbmQsXG4gICAgb25EcmFnRXhpdDogc2V0T25EcmFnRXhpdCxcbiAgICBvbkRyYWdMZWF2ZTogc2V0T25EcmFnTGVhdmUsXG4gICAgb25EcmFnT3Zlcjogc2V0T25EcmFnT3ZlcixcbiAgICBvbkRyYWdTdGFydDogc2V0T25EcmFnU3RhcnRcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VEcmFnRXZlbnRzO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VEcmFnRXZlbnRzIGZyb20gJy4vdXNlRHJhZ0V2ZW50cy5qcyc7XG5cbnZhciB1c2VEcm9wWm9uZSA9IGZ1bmN0aW9uIHVzZURyb3Bab25lKHRhcmdldFJlZikge1xuICB2YXIgX3VzZURyYWdFdmVudHMgPSB1c2VEcmFnRXZlbnRzKHRhcmdldFJlZiwgZmFsc2UpLFxuICAgICAgb25Ecm9wID0gX3VzZURyYWdFdmVudHMub25Ecm9wLFxuICAgICAgb25EcmFnT3ZlciA9IF91c2VEcmFnRXZlbnRzLm9uRHJhZ092ZXIsXG4gICAgICBvbkRyYWdMZWF2ZSA9IF91c2VEcmFnRXZlbnRzLm9uRHJhZ0xlYXZlO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlzT3ZlciA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJc092ZXIgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIG9uRHJhZ092ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc092ZXIodHJ1ZSk7XG4gIH0pO1xuICBvbkRyYWdMZWF2ZShmdW5jdGlvbiAoKSB7XG4gICAgc2V0SXNPdmVyKGZhbHNlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaXNPdmVyOiBpc092ZXIsXG4gICAgb25Ecm9wOiBvbkRyb3BcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURyb3Bab25lO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHVzZUdlb2xvY2F0aW9uU3RhdGUgZnJvbSAnLi91c2VHZW9sb2NhdGlvblN0YXRlLmpzJztcbmltcG9ydCB1c2VHZW9sb2NhdGlvbkV2ZW50cyBmcm9tICcuL3VzZUdlb2xvY2F0aW9uRXZlbnRzLmpzJztcbmltcG9ydCBnZW9sb2NhdGlvblN0YW5kYXJkT3B0aW9ucyBmcm9tICcuL3V0aWxzL2dlb2xvY2F0aW9uU3RhbmRhcmRPcHRpb25zLmpzJztcblxudmFyIHVzZUdlb2xvY2F0aW9uID0gZnVuY3Rpb24gdXNlR2VvbG9jYXRpb24oKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBnZW9sb2NhdGlvblN0YW5kYXJkT3B0aW9ucztcbiAgdmFyIHN0YXRlID0gdXNlR2VvbG9jYXRpb25TdGF0ZShvcHRpb25zKTtcbiAgdmFyIGV2ZW50cyA9IHVzZUdlb2xvY2F0aW9uRXZlbnRzKG9wdGlvbnMpO1xuICByZXR1cm4gW3N0YXRlLCBldmVudHNdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2VvbG9jYXRpb247XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUhhbmRsZXJTZXR0ZXIgZnJvbSAnLi91dGlscy9jcmVhdGVIYW5kbGVyU2V0dGVyLmpzJztcbmltcG9ydCBjcmVhdGVDYlNldHRlckVycm9yUHJveHkgZnJvbSAnLi91dGlscy9jcmVhdGVDYlNldHRlckVycm9yUHJveHkuanMnO1xuaW1wb3J0IGdlb2xvY2F0aW9uU3RhbmRhcmRPcHRpb25zIGZyb20gJy4vdXRpbHMvZ2VvbG9jYXRpb25TdGFuZGFyZE9wdGlvbnMuanMnO1xuXG52YXIgdXNlR2VvbG9jYXRpb25FdmVudHMgPSBmdW5jdGlvbiB1c2VHZW9sb2NhdGlvbkV2ZW50cygpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdlb2xvY2F0aW9uU3RhbmRhcmRPcHRpb25zO1xuICB2YXIgd2F0Y2hJZCA9IHVzZVJlZigpO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlciA9IGNyZWF0ZUhhbmRsZXJTZXR0ZXIoKSxcbiAgICAgIF9jcmVhdGVIYW5kbGVyU2V0dGVyMiA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyLCAyKSxcbiAgICAgIG9uQ2hhbmdlUmVmID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyWzBdLFxuICAgICAgc2V0T25DaGFuZ2VSZWYgPSBfY3JlYXRlSGFuZGxlclNldHRlcjJbMV07XG5cbiAgdmFyIF9jcmVhdGVIYW5kbGVyU2V0dGVyMyA9IGNyZWF0ZUhhbmRsZXJTZXR0ZXIoKSxcbiAgICAgIF9jcmVhdGVIYW5kbGVyU2V0dGVyNCA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyMywgMiksXG4gICAgICBvbkVycm9yUmVmID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXI0WzBdLFxuICAgICAgc2V0T25FcnJvclJlZiA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyNFsxXTtcblxuICB2YXIgaXNTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnZ2VvbG9jYXRpb24nIGluIHdpbmRvdy5uYXZpZ2F0b3I7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9uU3VjY2VzcyA9IGZ1bmN0aW9uIG9uU3VjY2VzcyhzdWNjZXNzRXZlbnQpIHtcbiAgICAgIGlmIChvbkNoYW5nZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIG9uQ2hhbmdlUmVmLmN1cnJlbnQoc3VjY2Vzc0V2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yKGVycikge1xuICAgICAgaWYgKG9uRXJyb3JSZWYuY3VycmVudCkge1xuICAgICAgICBvbkVycm9yUmVmLmN1cnJlbnQoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGlzU3VwcG9ydGVkKSB7XG4gICAgICB3YXRjaElkLmN1cnJlbnQgPSB3aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24ob25TdWNjZXNzLCBvbkVycm9yLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuICFpc1N1cHBvcnRlZCA/IGNyZWF0ZUNiU2V0dGVyRXJyb3JQcm94eSgnVGhlIEdlb2xvY2F0aW9uIEFQSSBpcyBub3Qgc3VwcG9ydGVkJykgOiBPYmplY3QuZnJlZXplKHtcbiAgICBpc1N1cHBvcnRlZDogaXNTdXBwb3J0ZWQsXG4gICAgb25DaGFuZ2U6IHNldE9uQ2hhbmdlUmVmLFxuICAgIG9uRXJyb3I6IHNldE9uRXJyb3JSZWZcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VHZW9sb2NhdGlvbkV2ZW50cztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlR2VvbG9jYXRpb25FdmVudHMgZnJvbSAnLi91c2VHZW9sb2NhdGlvbkV2ZW50cy5qcyc7XG5pbXBvcnQgZ2VvbG9jYXRpb25TdGFuZGFyZE9wdGlvbnMgZnJvbSAnLi91dGlscy9nZW9sb2NhdGlvblN0YW5kYXJkT3B0aW9ucy5qcyc7XG5pbXBvcnQgbWFrZVBvc2l0aW9uT2JqIGZyb20gJy4vdXRpbHMvbWFrZVBvc2l0aW9uT2JqZWN0LmpzJztcbmltcG9ydCBpc1NhbWVQb3NpdGlvbiBmcm9tICcuL3V0aWxzL2lzU2FtZVBvc2l0aW9uLmpzJztcblxudmFyIHVzZUdlb2xvY2F0aW9uU3RhdGUgPSBmdW5jdGlvbiB1c2VHZW9sb2NhdGlvblN0YXRlKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2VvbG9jYXRpb25TdGFuZGFyZE9wdGlvbnM7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBwb3NpdGlvbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQb3NpdGlvbiA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBpc1JldHJpZXZpbmcgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0UmV0cmlldmluZyA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF91c2VHZW9sb2NhdGlvbkV2ZW50cyA9IHVzZUdlb2xvY2F0aW9uRXZlbnRzKG9wdGlvbnMpLFxuICAgICAgaXNTdXBwb3J0ZWQgPSBfdXNlR2VvbG9jYXRpb25FdmVudHMuaXNTdXBwb3J0ZWQsXG4gICAgICBvbkNoYW5nZSA9IF91c2VHZW9sb2NhdGlvbkV2ZW50cy5vbkNoYW5nZTtcblxuICB2YXIgc2F2ZVBvc2l0aW9uID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgc2V0UmV0cmlldmluZyh0cnVlKTtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gKG5leHRQb3NpdGlvbikge1xuICAgICAgICBpZiAoIWlzU2FtZVBvc2l0aW9uKHBvc2l0aW9uLCBuZXh0UG9zaXRpb24pKSB7XG4gICAgICAgICAgc2V0UG9zaXRpb24obWFrZVBvc2l0aW9uT2JqKG5leHRQb3NpdGlvbikpO1xuICAgICAgICAgIHNldFJldHJpZXZpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwb3NpdGlvbl0pO1xuICB1c2VFZmZlY3Qoc2F2ZVBvc2l0aW9uLCBbcG9zaXRpb25dKTtcbiAgb25DaGFuZ2Uoc2F2ZVBvc2l0aW9uKTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGlzU3VwcG9ydGVkOiBpc1N1cHBvcnRlZCxcbiAgICBpc1JldHJpZXZpbmc6IGlzUmV0cmlldmluZyxcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VHZW9sb2NhdGlvblN0YXRlO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSwgb2JqZWN0U3ByZWFkMiBhcyBfb2JqZWN0U3ByZWFkMiB9IGZyb20gJy4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlSGFuZGxlclNldHRlciBmcm9tICcuL3V0aWxzL2NyZWF0ZUhhbmRsZXJTZXR0ZXIuanMnO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBvbmNlOiBmYWxzZSxcbiAgcGFzc2l2ZTogZmFsc2Vcbn07XG5cbnZhciB1c2VHbG9iYWxFdmVudCA9IGZ1bmN0aW9uIHVzZUdsb2JhbEV2ZW50KGV2ZW50TmFtZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdE9wdGlvbnM7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlciA9IGNyZWF0ZUhhbmRsZXJTZXR0ZXIoZm4pLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyID0gX3NsaWNlZFRvQXJyYXkoX2NyZWF0ZUhhbmRsZXJTZXR0ZXIsIDIpLFxuICAgICAgY2FsbGJhY2tSZWYgPSBfY3JlYXRlSGFuZGxlclNldHRlcjJbMF0sXG4gICAgICBzZXRDYWxsYmFja1JlZiA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyMlsxXTtcblxuICB2YXIgb3B0cyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMgfHwge30pO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24gY2IoZXZlbnQpIHtcbiAgICAgIGlmIChjYWxsYmFja1JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNhbGxiYWNrUmVmLmN1cnJlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY2FsbGJhY2tSZWYuY3VycmVudCAmJiBldmVudE5hbWUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IsIG9wdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IsIG9wdHMpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtldmVudE5hbWUsIG9wdGlvbnNdKTtcbiAgcmV0dXJuIHNldENhbGxiYWNrUmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2xvYmFsRXZlbnQ7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBvYmplY3RTcHJlYWQyIGFzIF9vYmplY3RTcHJlYWQyLCBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgY2FuY2VsT25Vbm1vdW50OiB0cnVlXG59O1xuXG52YXIgdXNlSW50ZXJ2YWwgPSBmdW5jdGlvbiB1c2VJbnRlcnZhbChmbiwgbWlsbGlzZWNvbmRzKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkZWZhdWx0T3B0aW9ucztcblxuICB2YXIgb3B0cyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMgfHwge30pO1xuXG4gIHZhciB0aW1lb3V0ID0gdXNlUmVmKCk7XG4gIHZhciBjYWxsYmFjayA9IHVzZVJlZihmbik7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgaXNDbGVhcmVkID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldElzQ2xlYXJlZCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGNsZWFyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aW1lb3V0LmN1cnJlbnQpIHtcbiAgICAgIHNldElzQ2xlYXJlZCh0cnVlKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dC5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjay5jdXJyZW50ID0gZm47XG4gICAgfVxuICB9LCBbZm5dKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIG1pbGxpc2Vjb25kcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRpbWVvdXQuY3VycmVudCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2suY3VycmVudCgpO1xuICAgICAgfSwgbWlsbGlzZWNvbmRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xlYXI7XG4gIH0sIFttaWxsaXNlY29uZHNdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wdHMuY2FuY2VsT25Vbm1vdW50KSB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW2lzQ2xlYXJlZCwgY2xlYXJdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW50ZXJ2YWw7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgdXNlRGlkTW91bnQgZnJvbSAnLi91c2VEaWRNb3VudC5qcyc7XG5pbXBvcnQgdXNlV2lsbFVubW91bnQgZnJvbSAnLi91c2VXaWxsVW5tb3VudC5qcyc7XG5cbnZhciB1c2VMaWZlY3ljbGUgPSBmdW5jdGlvbiB1c2VMaWZlY3ljbGUobW91bnQsIHVubW91bnQpIHtcbiAgdmFyIG9uRGlkTW91bnQgPSB1c2VEaWRNb3VudChtb3VudCk7XG4gIHZhciBvbldpbGxVbm1vdW50ID0gdXNlV2lsbFVubW91bnQodW5tb3VudCk7XG4gIHJldHVybiB7XG4gICAgb25EaWRNb3VudDogb25EaWRNb3VudCxcbiAgICBvbldpbGxVbm1vdW50OiBvbldpbGxVbm1vdW50XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMaWZlY3ljbGU7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgdXNlU3RvcmFnZSBmcm9tICcuL3VzZVN0b3JhZ2UuanMnO1xuXG52YXIgdXNlTG9jYWxTdG9yYWdlID0gdXNlU3RvcmFnZSgnbG9jYWwnKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzQ2xpZW50IGZyb20gJy4vdXRpbHMvaXNDbGllbnQuanMnO1xuaW1wb3J0IGlzQXBpU3VwcG9ydGVkIGZyb20gJy4vdXRpbHMvaXNBUElTdXBwb3J0ZWQuanMnO1xuXG52YXIgZXJyb3JNZXNzYWdlID0gJ21hdGNoTWVkaWEgaXMgbm90IHN1cHBvcnRlZCwgdGhpcyBjb3VsZCBoYXBwZW4gYm90aCBiZWNhdXNlIHdpbmRvdy5tYXRjaE1lZGlhIGlzIG5vdCBzdXBwb3J0ZWQgYnknICsgJyB5b3VyIGN1cnJlbnQgYnJvd3NlciBvciB5b3VcXCdyZSB1c2luZyB0aGUgdXNlTWVkaWFRdWVyeSBob29rIHdoaWxzdCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcuJztcblxudmFyIHVzZU1lZGlhUXVlcnkgPSBmdW5jdGlvbiB1c2VNZWRpYVF1ZXJ5KG1lZGlhUXVlcnkpIHtcbiAgaWYgKCFpc0NsaWVudCB8fCAhaXNBcGlTdXBwb3J0ZWQoJ21hdGNoTWVkaWEnKSkge1xuICAgIGNvbnNvbGUud2FybihlcnJvck1lc3NhZ2UpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCEhd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSkubWF0Y2hlcyksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlzVmVyaWZpZWQgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SXNWZXJpZmllZCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcblxuICAgIHZhciBkb2N1bWVudENoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiBkb2N1bWVudENoYW5nZUhhbmRsZXIoKSB7XG4gICAgICByZXR1cm4gc2V0SXNWZXJpZmllZCghIW1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpO1xuICAgIH07XG5cbiAgICBtZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcihkb2N1bWVudENoYW5nZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50Q2hhbmdlSGFuZGxlcigpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcihkb2N1bWVudENoYW5nZUhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFttZWRpYVF1ZXJ5XSk7XG4gIHJldHVybiBpc1ZlcmlmaWVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTWVkaWFRdWVyeTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB1c2VNb3VzZUV2ZW50cyBmcm9tICcuL3VzZU1vdXNlRXZlbnRzLmpzJztcbmltcG9ydCB1c2VNb3VzZVN0YXRlIGZyb20gJy4vdXNlTW91c2VTdGF0ZS5qcyc7XG5cbnZhciB1c2VNb3VzZSA9IGZ1bmN0aW9uIHVzZU1vdXNlKCkge1xuICB2YXIgcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICB2YXIgc3RhdGUgPSB1c2VNb3VzZVN0YXRlKHJlZik7XG4gIHZhciBldmVudHMgPSB1c2VNb3VzZUV2ZW50cyhyZWYpO1xuICByZXR1cm4gW3N0YXRlLCBldmVudHNdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTW91c2U7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVIYW5kbGVyU2V0dGVyIGZyb20gJy4vdXRpbHMvY3JlYXRlSGFuZGxlclNldHRlci5qcyc7XG5pbXBvcnQgY3JlYXRlQ2JTZXR0ZXJFcnJvclByb3h5IGZyb20gJy4vdXRpbHMvY3JlYXRlQ2JTZXR0ZXJFcnJvclByb3h5LmpzJztcbmltcG9ydCBoYXNPd25Qcm9wZXJ0eSBmcm9tICcuL3V0aWxzL2hhc093blByb3BlcnR5LmpzJztcblxudmFyIGFzc2lnbk1vdXNlRXZlbnRPbk1vdW50ID0gZnVuY3Rpb24gYXNzaWduTW91c2VFdmVudE9uTW91bnQodGFyZ2V0UmVmLCBoYW5kbGVyUmVmLCBldmVudE5hbWUpIHtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbiBjYihtb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoaGFuZGxlclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGhhbmRsZXJSZWYuY3VycmVudChtb3VzZUV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHRhcmdldDtcblxuICAgIGlmICh0YXJnZXRSZWYgIT09IG51bGwgJiYgISF0YXJnZXRSZWYuY3VycmVudCkge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0UmVmLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFJlZiA9PT0gbnVsbCkge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xufTtcblxudmFyIHVzZU1vdXNlRXZlbnRzID0gZnVuY3Rpb24gdXNlTW91c2VFdmVudHMoKSB7XG4gIHZhciB0YXJnZXRSZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cbiAgdmFyIF9jcmVhdGVIYW5kbGVyU2V0dGVyID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyID0gX3NsaWNlZFRvQXJyYXkoX2NyZWF0ZUhhbmRsZXJTZXR0ZXIsIDIpLFxuICAgICAgb25Nb3VzZURvd25IYW5kbGVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyWzBdLFxuICAgICAgc2V0T25Nb3VzZURvd24gPSBfY3JlYXRlSGFuZGxlclNldHRlcjJbMV07XG5cbiAgdmFyIF9jcmVhdGVIYW5kbGVyU2V0dGVyMyA9IGNyZWF0ZUhhbmRsZXJTZXR0ZXIoKSxcbiAgICAgIF9jcmVhdGVIYW5kbGVyU2V0dGVyNCA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyMywgMiksXG4gICAgICBvbk1vdXNlRW50ZXJIYW5kbGVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXI0WzBdLFxuICAgICAgc2V0T25Nb3VzZUVudGVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXI0WzFdO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlcjUgPSBjcmVhdGVIYW5kbGVyU2V0dGVyKCksXG4gICAgICBfY3JlYXRlSGFuZGxlclNldHRlcjYgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlSGFuZGxlclNldHRlcjUsIDIpLFxuICAgICAgb25Nb3VzZUxlYXZlSGFuZGxlciA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyNlswXSxcbiAgICAgIHNldE9uTW91c2VMZWF2ZSA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyNlsxXTtcblxuICB2YXIgX2NyZWF0ZUhhbmRsZXJTZXR0ZXI3ID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXI4ID0gX3NsaWNlZFRvQXJyYXkoX2NyZWF0ZUhhbmRsZXJTZXR0ZXI3LCAyKSxcbiAgICAgIG9uTW91c2VNb3ZlSGFuZGxlciA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyOFswXSxcbiAgICAgIHNldE9uTW91c2VNb3ZlID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXI4WzFdO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlcjkgPSBjcmVhdGVIYW5kbGVyU2V0dGVyKCksXG4gICAgICBfY3JlYXRlSGFuZGxlclNldHRlcjEwID0gX3NsaWNlZFRvQXJyYXkoX2NyZWF0ZUhhbmRsZXJTZXR0ZXI5LCAyKSxcbiAgICAgIG9uTW91c2VPdXRIYW5kbGVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMFswXSxcbiAgICAgIHNldE9uTW91c2VPdXQgPSBfY3JlYXRlSGFuZGxlclNldHRlcjEwWzFdO1xuXG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlcjExID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMiA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVIYW5kbGVyU2V0dGVyMTEsIDIpLFxuICAgICAgb25Nb3VzZU92ZXJIYW5kbGVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMlswXSxcbiAgICAgIHNldE9uTW91c2VPdmVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMlsxXTtcblxuICB2YXIgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxMyA9IGNyZWF0ZUhhbmRsZXJTZXR0ZXIoKSxcbiAgICAgIF9jcmVhdGVIYW5kbGVyU2V0dGVyMTQgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlSGFuZGxlclNldHRlcjEzLCAyKSxcbiAgICAgIG9uTW91c2VVcEhhbmRsZXIgPSBfY3JlYXRlSGFuZGxlclNldHRlcjE0WzBdLFxuICAgICAgc2V0T25Nb3VzZVVwID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIxNFsxXTtcblxuICBpZiAodGFyZ2V0UmVmICE9PSBudWxsICYmICFoYXNPd25Qcm9wZXJ0eSh0YXJnZXRSZWYsICdjdXJyZW50JykpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2JTZXR0ZXJFcnJvclByb3h5KCdVbmFibGUgdG8gYXNzaWduIGFueSBtb3VzZSBldmVudCB0byB0aGUgZ2l2ZW4gcmVmJyk7XG4gIH1cblxuICBhc3NpZ25Nb3VzZUV2ZW50T25Nb3VudCh0YXJnZXRSZWYsIG9uTW91c2VEb3duSGFuZGxlciwgJ21vdXNlZG93bicpO1xuICBhc3NpZ25Nb3VzZUV2ZW50T25Nb3VudCh0YXJnZXRSZWYsIG9uTW91c2VFbnRlckhhbmRsZXIsICdtb3VzZWVudGVyJyk7XG4gIGFzc2lnbk1vdXNlRXZlbnRPbk1vdW50KHRhcmdldFJlZiwgb25Nb3VzZUxlYXZlSGFuZGxlciwgJ21vdXNlbGVhdmUnKTtcbiAgYXNzaWduTW91c2VFdmVudE9uTW91bnQodGFyZ2V0UmVmLCBvbk1vdXNlTW92ZUhhbmRsZXIsICdtb3VzZW1vdmUnKTtcbiAgYXNzaWduTW91c2VFdmVudE9uTW91bnQodGFyZ2V0UmVmLCBvbk1vdXNlT3V0SGFuZGxlciwgJ21vdXNlb3V0Jyk7XG4gIGFzc2lnbk1vdXNlRXZlbnRPbk1vdW50KHRhcmdldFJlZiwgb25Nb3VzZU92ZXJIYW5kbGVyLCAnbW91c2VvdmVyJyk7XG4gIGFzc2lnbk1vdXNlRXZlbnRPbk1vdW50KHRhcmdldFJlZiwgb25Nb3VzZVVwSGFuZGxlciwgJ21vdXNldXAnKTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIG9uTW91c2VEb3duOiBzZXRPbk1vdXNlRG93bixcbiAgICBvbk1vdXNlRW50ZXI6IHNldE9uTW91c2VFbnRlcixcbiAgICBvbk1vdXNlTGVhdmU6IHNldE9uTW91c2VMZWF2ZSxcbiAgICBvbk1vdXNlTW92ZTogc2V0T25Nb3VzZU1vdmUsXG4gICAgb25Nb3VzZU91dDogc2V0T25Nb3VzZU91dCxcbiAgICBvbk1vdXNlT3Zlcjogc2V0T25Nb3VzZU92ZXIsXG4gICAgb25Nb3VzZVVwOiBzZXRPbk1vdXNlVXBcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNb3VzZUV2ZW50cztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTW91c2VFdmVudHMgZnJvbSAnLi91c2VNb3VzZUV2ZW50cy5qcyc7XG5cbnZhciBjcmVhdGVTdGF0ZU9iamVjdCA9IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlT2JqZWN0KGV2ZW50KSB7XG4gIHJldHVybiB7XG4gICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWVxuICB9O1xufTtcblxudmFyIHVzZU1vdXNlU3RhdGUgPSBmdW5jdGlvbiB1c2VNb3VzZVN0YXRlKCkge1xuICB2YXIgcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7XG4gICAgY2xpZW50WDogMCxcbiAgICBjbGllbnRZOiAwLFxuICAgIHNjcmVlblg6IDAsXG4gICAgc2NyZWVuWTogMFxuICB9KSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlTW91c2VFdmVudHMgPSB1c2VNb3VzZUV2ZW50cyhyZWYpLFxuICAgICAgb25Nb3VzZU1vdmUgPSBfdXNlTW91c2VFdmVudHMub25Nb3VzZU1vdmU7XG5cbiAgb25Nb3VzZU1vdmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIG5leHRTdGF0ZSA9IGNyZWF0ZVN0YXRlT2JqZWN0KGV2ZW50KTtcbiAgICBzZXRTdGF0ZShuZXh0U3RhdGUpO1xuICB9KTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTW91c2VTdGF0ZTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxudmFyIHVzZU9ic2VydmFibGUgPSBmdW5jdGlvbiB1c2VPYnNlcnZhYmxlKG9ic2VydmFibGUsIHNldHRlcikge1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZShzZXR0ZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW29ic2VydmFibGUsIHNldHRlcl0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlT2JzZXJ2YWJsZTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlR2xvYmFsRXZlbnQgZnJvbSAnLi91c2VHbG9iYWxFdmVudC5qcyc7XG5cbnZhciB1c2VPbmxpbmVTdGF0ZSA9IGZ1bmN0aW9uIHVzZU9ubGluZVN0YXRlKCkge1xuICB2YXIgaXNTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnb25vbmxpbmUnIGluIHdpbmRvdztcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoaXNTdXBwb3J0ZWQgPyBuYXZpZ2F0b3Iub25MaW5lIDogdHJ1ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlzT25saW5lID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldElzT25saW5lID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgd2hlbk9ubGluZSA9IHVzZUdsb2JhbEV2ZW50KCdvbmxpbmUnLCB7XG4gICAgY2FwdHVyZTogdHJ1ZVxuICB9KTtcbiAgdmFyIHdoZW5PZmZsaW5lID0gdXNlR2xvYmFsRXZlbnQoJ29mZmxpbmUnLCB7XG4gICAgY2FwdHVyZTogdHJ1ZVxuICB9KTtcblxuICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgY29uc29sZS53YXJuKCdUaGUgY3VycmVudCBkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCB0aGUgXFwnb25saW5lL29mZmxpbmVcXCcgZXZlbnRzLCB5b3Ugc2hvdWxkIGF2b2lkIHVzaW5nIHVzZU9ubGluZVN0YXRlJyk7XG4gICAgcmV0dXJuIGlzT25saW5lO1xuICB9XG5cbiAgd2hlbk9ubGluZShmdW5jdGlvbiAoKSB7XG4gICAgc2V0SXNPbmxpbmUodHJ1ZSk7XG4gIH0pO1xuICB3aGVuT2ZmbGluZShmdW5jdGlvbiAoKSB7XG4gICAgc2V0SXNPbmxpbmUoZmFsc2UpO1xuICB9KTtcbiAgcmV0dXJuIGlzT25saW5lO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlT25saW5lU3RhdGU7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxudmFyIHVzZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbiB1c2VQcmV2aW91c1ZhbHVlKHZhbHVlKSB7XG4gIHZhciBwcmV2VmFsdWUgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBwcmV2VmFsdWUuY3VycmVudCA9IHZhbHVlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBwcmV2VmFsdWUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHByZXZWYWx1ZS5jdXJyZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUHJldmlvdXNWYWx1ZTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxudmFyIGdldEluaXRpYWwgPSBmdW5jdGlvbiBnZXRJbml0aWFsKG1vZHVsZSkge1xuICByZXR1cm4ge1xuICAgIG1vZHVsZTogbW9kdWxlLFxuICAgIHJlbmRlcnM6IDAsXG4gICAgdGltZXN0YW1wOiBudWxsLFxuICAgIHNpbmNlTGFzdDogbnVsbFxuICB9O1xufTtcblxudmFyIHVzZVJlbmRlckluZm8gPSBmdW5jdGlvbiB1c2VSZW5kZXJJbmZvKCkge1xuICB2YXIgbW9kdWxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnVW5rbm93biBjb21wb25lbnQnO1xuICB2YXIgbG9nID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIHZhciBfdXNlUmVmID0gdXNlUmVmKGdldEluaXRpYWwobW9kdWxlKSksXG4gICAgICBpbmZvID0gX3VzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBub3cgPSArRGF0ZS5ub3coKTtcbiAgaW5mby5yZW5kZXJzICs9IDE7XG4gIGluZm8uc2luY2VMYXN0ID0gaW5mby50aW1lc3RhbXAgPyAobm93IC0gaW5mby50aW1lc3RhbXApIC8gMTAwMCA6ICdbbm93XSc7XG4gIGluZm8udGltZXN0YW1wID0gbm93O1xuXG4gIGlmIChsb2cpIHtcbiAgICBjb25zb2xlLmdyb3VwKFwiXCIuY29uY2F0KG1vZHVsZSwgXCIgaW5mb1wiKSk7XG4gICAgY29uc29sZS5sb2coXCJSZW5kZXIgbm86IFwiLmNvbmNhdChpbmZvLnJlbmRlcnMpLmNvbmNhdChpbmZvLnJlbmRlcnMgPiAxID8gXCIsIFwiLmNvbmNhdChpbmZvLnNpbmNlTGFzdCwgXCJzIHNpbmNlIGxhc3QgcmVuZGVyXCIpIDogJycpKTtcbiAgICBjb25zb2xlLmRpcihpbmZvKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlbmRlckluZm87XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBvYmplY3RTcHJlYWQyIGFzIF9vYmplY3RTcHJlYWQyLCBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlSGFuZGxlclNldHRlciBmcm9tICcuL3V0aWxzL2NyZWF0ZUhhbmRsZXJTZXR0ZXIuanMnO1xuaW1wb3J0IGlzQ2xpZW50IGZyb20gJy4vdXRpbHMvaXNDbGllbnQuanMnO1xuaW1wb3J0IGlzQXBpU3VwcG9ydGVkIGZyb20gJy4vdXRpbHMvaXNBUElTdXBwb3J0ZWQuanMnO1xuaW1wb3J0IGNyZWF0ZUNiU2V0dGVyRXJyb3JQcm94eSBmcm9tICcuL3V0aWxzL2NyZWF0ZUNiU2V0dGVyRXJyb3JQcm94eS5qcyc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgaW5jcmVtZW50OiAxLFxuICBzdGFydEF0OiAwLFxuICBmaW5pc2hBdDogMTAwXG59O1xudmFyIGVycm9yTWVzc2FnZSA9ICdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaXMgbm90IHN1cHBvcnRlZCwgdGhpcyBjb3VsZCBoYXBwZW4gYm90aCBiZWNhdXNlICcgKyAnd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgY3VycmVudCBicm93c2VyIHZlcnNpb24gb3IgeW91XFwncmUgdXNpbmcgdGhlICcgKyAndXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lIGhvb2sgd2hpbHN0IHNlcnZlciBzaWRlIHJlbmRlcmluZy4nO1xuXG52YXIgdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRPcHRpb25zO1xuXG4gIGlmICghaXNDbGllbnQgfHwgIWlzQXBpU3VwcG9ydGVkKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKSkge1xuICAgIGNvbnNvbGUud2FybihlcnJvck1lc3NhZ2UpO1xuICAgIHJldHVybiBjcmVhdGVDYlNldHRlckVycm9yUHJveHkoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIHZhciBvcHRzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG5cbiAgdmFyIHByb2dyZXNzID0gdXNlUmVmKG9wdHMuc3RhcnRBdCk7XG5cbiAgdmFyIF9jcmVhdGVIYW5kbGVyU2V0dGVyID0gY3JlYXRlSGFuZGxlclNldHRlcigpLFxuICAgICAgX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyID0gX3NsaWNlZFRvQXJyYXkoX2NyZWF0ZUhhbmRsZXJTZXR0ZXIsIDIpLFxuICAgICAgb25GaW5pc2ggPSBfY3JlYXRlSGFuZGxlclNldHRlcjJbMF0sXG4gICAgICBzZXRPbkZpbmlzaCA9IF9jcmVhdGVIYW5kbGVyU2V0dGVyMlsxXTtcblxuICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH07XG5cbiAgdmFyIHN0ZXAgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2dyZXNzLmN1cnJlbnQgPD0gb3B0cy5maW5pc2hBdCB8fCBvcHRzLmZpbmlzaEF0ID09PSAtMSkge1xuICAgICAgZnVuYyhwcm9ncmVzcy5jdXJyZW50LCBuZXh0KTtcbiAgICAgIHByb2dyZXNzLmN1cnJlbnQgKz0gb3B0cy5pbmNyZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChvbkZpbmlzaC5jdXJyZW50KSB7XG4gICAgICBvbkZpbmlzaC5jdXJyZW50KCk7XG4gICAgfVxuICB9LCBbZnVuYywgb3B0cy5maW5pc2hBdCwgb3B0cy5pbmNyZW1lbnQsIHByb2dyZXNzLmN1cnJlbnQsIG9uRmluaXNoLmN1cnJlbnRdKTtcblxuICBpZiAocHJvZ3Jlc3MuY3VycmVudCA8PSBvcHRzLnN0YXJ0QXQpIHtcbiAgICBuZXh0KCk7XG4gIH1cblxuICByZXR1cm4gc2V0T25GaW5pc2g7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IGlzQXBpU3VwcG9ydGVkIGZyb20gJy4vdXRpbHMvaXNBUElTdXBwb3J0ZWQuanMnO1xuaW1wb3J0IGlzQ2xpZW50IGZyb20gJy4vdXRpbHMvaXNDbGllbnQuanMnO1xuXG52YXIgZXJyb3JNZXNzYWdlID0gJ1Jlc2l6ZU9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQsIHRoaXMgY291bGQgaGFwcGVuIGJvdGggYmVjYXVzZSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGN1cnJlbnQgYnJvd3NlciBvciB5b3VcXCdyZSB1c2luZyB0aGUgdXNlUmVzaXplT2JzZXJ2ZXIgaG9vayB3aGlsc3Qgc2VydmVyIHNpZGUgcmVuZGVyaW5nLic7XG5cbnZhciB1c2VSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIHVzZVJlc2l6ZU9ic2VydmVyKGVsZW1lbnRSZWYpIHtcbiAgdmFyIGRlYm91bmNlVGltZW91dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwO1xuICB2YXIgaXNTdXBwb3J0ZWQgPSBpc0FwaVN1cHBvcnRlZCgnUmVzaXplT2JzZXJ2ZXInKTtcbiAgdmFyIG9ic2VydmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBET01SZWN0ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldERPTVJlY3QgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIGlmIChpc0NsaWVudCAmJiAhaXNTdXBwb3J0ZWQpIHtcbiAgICBjb25zb2xlLndhcm4oZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzU3VwcG9ydGVkKSB7XG4gICAgICB2YXIgZm4gPSBkZWJvdW5jZShmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICB2YXIgX2VudHJpZXMkMCRjb250ZW50UmVjID0gZW50cmllc1swXS5jb250ZW50UmVjdCxcbiAgICAgICAgICAgIGJvdHRvbSA9IF9lbnRyaWVzJDAkY29udGVudFJlYy5ib3R0b20sXG4gICAgICAgICAgICBoZWlnaHQgPSBfZW50cmllcyQwJGNvbnRlbnRSZWMuaGVpZ2h0LFxuICAgICAgICAgICAgbGVmdCA9IF9lbnRyaWVzJDAkY29udGVudFJlYy5sZWZ0LFxuICAgICAgICAgICAgcmlnaHQgPSBfZW50cmllcyQwJGNvbnRlbnRSZWMucmlnaHQsXG4gICAgICAgICAgICB0b3AgPSBfZW50cmllcyQwJGNvbnRlbnRSZWMudG9wLFxuICAgICAgICAgICAgd2lkdGggPSBfZW50cmllcyQwJGNvbnRlbnRSZWMud2lkdGg7XG4gICAgICAgIHNldERPTVJlY3Qoe1xuICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICB9KTtcbiAgICAgIH0sIGRlYm91bmNlVGltZW91dCk7XG4gICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzU3VwcG9ydGVkICYmIG9ic2VydmVyUmVmLmN1cnJlbnQgJiYgZWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQudW5vYnNlcnZlKGVsZW1lbnRSZWYuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1N1cHBvcnRlZCAmJiBlbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQub2JzZXJ2ZShlbGVtZW50UmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW2VsZW1lbnRSZWYuY3VycmVudF0pO1xuICByZXR1cm4gRE9NUmVjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc2l6ZU9ic2VydmVyO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHVzZVN0b3JhZ2UgZnJvbSAnLi91c2VTdG9yYWdlLmpzJztcblxudmFyIHVzZVNlc3Npb25TdG9yYWdlID0gdXNlU3RvcmFnZSgnc2Vzc2lvbicpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTZXNzaW9uU3RvcmFnZTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IG9iamVjdFNwcmVhZDIgYXMgX29iamVjdFNwcmVhZDIgfSBmcm9tICcuL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICByYXRlOiAwLFxuICBwaXRjaDogMCxcbiAgdm9sdW1lOiAxXG59O1xuXG52YXIgdXNlU3BlZWNoU3ludGhlc2lzID0gZnVuY3Rpb24gdXNlU3BlZWNoU3ludGhlc2lzKHRleHQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRPcHRpb25zO1xuICB2YXIgdXR0ZXIgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSh0ZXh0KTtcbiAgfSwgW3RleHRdKTtcblxuICB2YXIgdm9pY2VPcHRpb25zID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG5cbiAgdXR0ZXIudm9pY2UgPSB2b2ljZU9wdGlvbnMudm9pY2U7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdXR0ZXIucGl0Y2ggPSB2b2ljZU9wdGlvbnMucGl0Y2g7XG4gIH0sIFt2b2ljZU9wdGlvbnMucGl0Y2hdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB1dHRlci5yYXRlID0gdm9pY2VPcHRpb25zLnJhdGU7XG4gIH0sIFt2b2ljZU9wdGlvbnMucmF0ZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHV0dGVyLnZvbHVtZSA9IHZvaWNlT3B0aW9ucy52b2x1bWU7XG4gIH0sIFt2b2ljZU9wdGlvbnMudm9sdW1lXSk7XG4gIHZhciBzcGVhayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3BlZWNoU3ludGhlc2lzLnNwZWFrKHV0dGVyKTtcbiAgfSwgW3RleHQsIHZvaWNlT3B0aW9ucy5waXRjaCwgdm9pY2VPcHRpb25zLnJhdGUsIHZvaWNlT3B0aW9ucy52b2ljZSwgdm9pY2VPcHRpb25zLnZvbHVtZV0pO1xuICByZXR1cm4ge1xuICAgIHNwZWFrOiBzcGVhayxcbiAgICBzcGVlY2hTeW50aFV0dGVyYW5jZTogdXR0ZXJcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWVjaFN5bnRoZXNpcztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzYWZlbHlQYXJzZUpzb24gZnJvbSAnLi91dGlscy9zYWZlbHlQYXJzZUpzb24uanMnO1xuaW1wb3J0IGlzQ2xpZW50IGZyb20gJy4vdXRpbHMvaXNDbGllbnQuanMnO1xuaW1wb3J0IGlzQXBpU3VwcG9ydGVkIGZyb20gJy4vdXRpbHMvaXNBUElTdXBwb3J0ZWQuanMnO1xuaW1wb3J0IGlzRGV2ZWxvcG1lbnQgZnJvbSAnLi91dGlscy9pc0RldmVsb3BtZW50LmpzJztcblxudmFyIHVzZVN0b3JhZ2UgPSBmdW5jdGlvbiB1c2VTdG9yYWdlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2VOYW1lID0gXCJcIi5jb25jYXQodHlwZSwgXCJTdG9yYWdlXCIpO1xuXG4gIGlmIChpc0NsaWVudCAmJiAhaXNBcGlTdXBwb3J0ZWQoc3RvcmFnZU5hbWUpKSB7XG4gICAgY29uc29sZS53YXJuKFwiXCIuY29uY2F0KHN0b3JhZ2VOYW1lLCBcIiBpcyBub3Qgc3VwcG9ydGVkXCIpKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RvcmFnZUtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgaWYgKGlzRGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUGxlYXNlIGJlIGF3YXJlIHRoYXQgXCIuY29uY2F0KHN0b3JhZ2VOYW1lLCBcIiBjb3VsZCBub3QgYmUgYXZhaWxhYmxlIGR1cmluZyBTU1JcIikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW0pTT04uc3RyaW5naWZ5KGRlZmF1bHRWYWx1ZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHZhciBzdG9yYWdlID0gd2luZG93W3N0b3JhZ2VOYW1lXTtcblxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShzYWZlbHlQYXJzZUpzb24oc3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRWYWx1ZSkpKSxcbiAgICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICAgIHZhbHVlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgICAgc2V0VmFsdWUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH0sIFtzdG9yYWdlS2V5LCB2YWx1ZV0pO1xuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0b3JhZ2U7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBhc3luY0dldFN5c3RlbVZvaWNlcyA9IGZ1bmN0aW9uIGFzeW5jR2V0U3lzdGVtVm9pY2VzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLm9udm9pY2VzY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzKCkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpO1xuICB9KTtcbn07XG5cbnZhciB1c2VTeXN0ZW1Wb2ljZXMgPSBmdW5jdGlvbiB1c2VTeXN0ZW1Wb2ljZXMoKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShbXSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHZvaWNlcyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWb2ljZXMgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgYXN5bmNHZXRTeXN0ZW1Wb2ljZXMoKS50aGVuKHNldFZvaWNlcyk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHZvaWNlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN5c3RlbVZvaWNlcztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgbGVhZGluZzogZmFsc2UsXG4gIHRyYWlsaW5nOiB0cnVlXG59O1xuXG52YXIgdXNlVGhyb3R0bGVkRm4gPSBmdW5jdGlvbiB1c2VUaHJvdHRsZWRGbihmbikge1xuICB2YXIgd2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwO1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGVmYXVsdE9wdGlvbnM7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcbiAgdmFyIHRocm90dGxlZCA9IHRocm90dGxlKGZuLCB3YWl0LCBvcHRpb25zKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKHRocm90dGxlZCwgZGVwZW5kZW5jaWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRocm90dGxlZEZuO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgb2JqZWN0U3ByZWFkMiBhcyBfb2JqZWN0U3ByZWFkMiwgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGNhbmNlbE9uVW5tb3VudDogdHJ1ZVxufTtcblxudmFyIHVzZVRpbWVvdXQgPSBmdW5jdGlvbiB1c2VUaW1lb3V0KGZuLCBtaWxsaXNlY29uZHMpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGRlZmF1bHRPcHRpb25zO1xuXG4gIHZhciBvcHRzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIHRpbWVvdXQgPSB1c2VSZWYoKTtcbiAgdmFyIGNhbGxiYWNrID0gdXNlUmVmKGZuKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBpc0NsZWFyZWQgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SXNDbGVhcmVkID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgY2xlYXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRpbWVvdXQuY3VycmVudCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQuY3VycmVudCk7XG4gICAgICBzZXRJc0NsZWFyZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2suY3VycmVudCA9IGZuO1xuICAgIH1cbiAgfSwgW2ZuXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBtaWxsaXNlY29uZHMgPT09ICdudW1iZXInKSB7XG4gICAgICB0aW1lb3V0LmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2suY3VycmVudCgpO1xuICAgICAgfSwgbWlsbGlzZWNvbmRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xlYXI7XG4gIH0sIFttaWxsaXNlY29uZHNdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wdHMuY2FuY2VsT25Vbm1vdW50KSB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW2lzQ2xlYXJlZCwgY2xlYXJdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVGltZW91dDtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHNsaWNlZFRvQXJyYXkgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbnZhciB1c2VWYWxpZGF0ZWRTdGF0ZSA9IGZ1bmN0aW9uIHVzZVZhbGlkYXRlZFN0YXRlKHZhbGlkYXRvciwgaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIHZhbGlkYXRpb24gPSB1c2VSZWYoe1xuICAgIGNoYW5nZWQ6IGZhbHNlXG4gIH0pO1xuICB2YXIgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV4dFZhbHVlKSB7XG4gICAgc2V0U3RhdGUobmV4dFZhbHVlKTtcbiAgICB2YWxpZGF0aW9uLmN1cnJlbnQgPSB7XG4gICAgICBjaGFuZ2VkOiB0cnVlLFxuICAgICAgdmFsaWQ6IHZhbGlkYXRvcihuZXh0VmFsdWUpXG4gICAgfTtcbiAgfSwgW3ZhbGlkYXRvcl0pO1xuICByZXR1cm4gW3N0YXRlLCBvbkNoYW5nZSwgdmFsaWRhdGlvbi5jdXJyZW50XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVZhbGlkYXRlZFN0YXRlO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBkaXN0aW5jdFZhbHVlcyA9IGZ1bmN0aW9uIGRpc3RpbmN0VmFsdWVzKHZhbHVlLCBjdXJyZW50LCBhcnJheSkge1xuICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT09IGN1cnJlbnQ7XG59O1xuXG52YXIgdXNlVmFsdWVIaXN0b3J5ID0gZnVuY3Rpb24gdXNlVmFsdWVIaXN0b3J5KHZhbHVlKSB7XG4gIHZhciBkaXN0aW5jdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHZhciBoaXN0b3J5ID0gdXNlUmVmKFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBoaXN0b3J5LmN1cnJlbnQucHVzaCh2YWx1ZSk7XG5cbiAgICBpZiAoZGlzdGluY3QpIHtcbiAgICAgIGhpc3RvcnkuY3VycmVudC5maWx0ZXIoZGlzdGluY3RWYWx1ZXMpO1xuICAgIH1cbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiBoaXN0b3J5LmN1cnJlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VWYWx1ZUhpc3Rvcnk7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNDbGllbnQgZnJvbSAnLi91dGlscy9pc0NsaWVudC5qcyc7XG5pbXBvcnQgaXNBcGlTdXBwb3J0ZWQgZnJvbSAnLi91dGlscy9pc0FQSVN1cHBvcnRlZC5qcyc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgcm9vdDogdW5kZWZpbmVkLFxuICByb290TWFyZ2luOiAnMHB4JyxcbiAgdGhyZXNob2xkOiAwXG59O1xudmFyIGVycm9yTWVzc2FnZSA9ICdJbnRlcnNlY3Rpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkLCB0aGlzIGNvdWxkIGhhcHBlbiBib3RoIGJlY2F1c2UnICsgJyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBieScgKyAnIHlvdXIgY3VycmVudCBicm93c2VyIG9yIHlvdVxcJ3JlIHVzaW5nIHRoZSB1c2VWaWV3cG9ydFNweSBob29rIHdoaWxzdCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcuJztcblxudmFyIHVzZVZpZXdwb3J0U3B5ID0gZnVuY3Rpb24gdXNlVmlld3BvcnRTcHkoZWxlbWVudFJlZikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdE9wdGlvbnM7XG5cbiAgaWYgKCFpc0NsaWVudCB8fCAhaXNBcGlTdXBwb3J0ZWQoJ0ludGVyc2VjdGlvbk9ic2VydmVyJykpIHtcbiAgICBjb25zb2xlLndhcm4oZXJyb3JNZXNzYWdlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBpc1Zpc2libGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SXNWaXNpYmxlID0gX3VzZVN0YXRlMlsxXTtcblxuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgIHJldHVybiBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IGl0ZW0uaXNJbnRlcnNlY3Rpbmc7XG4gICAgICAgIHNldElzVmlzaWJsZShuZXh0VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50UmVmLmN1cnJlbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KGVsZW1lbnRSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW2VsZW1lbnRSZWZdKTtcbiAgcmV0dXJuIGlzVmlzaWJsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVZpZXdwb3J0U3B5O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlSGFuZGxlclNldHRlciBmcm9tICcuL3V0aWxzL2NyZWF0ZUhhbmRsZXJTZXR0ZXIuanMnO1xuXG52YXIgdXNlV2lsbFVubW91bnQgPSBmdW5jdGlvbiB1c2VXaWxsVW5tb3VudChoYW5kbGVyKSB7XG4gIHZhciBfY3JlYXRlSGFuZGxlclNldHRlciA9IGNyZWF0ZUhhbmRsZXJTZXR0ZXIoaGFuZGxlciksXG4gICAgICBfY3JlYXRlSGFuZGxlclNldHRlcjIgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlSGFuZGxlclNldHRlciwgMiksXG4gICAgICBvblVubW91bnRIYW5kbGVyID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyWzBdLFxuICAgICAgc2V0T25Vbm1vdW50ID0gX2NyZWF0ZUhhbmRsZXJTZXR0ZXIyWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvblVubW91bnRIYW5kbGVyLmN1cnJlbnQpIHtcbiAgICAgICAgb25Vbm1vdW50SGFuZGxlci5jdXJyZW50KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gc2V0T25Vbm1vdW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlV2lsbFVubW91bnQ7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG5pbXBvcnQgdXNlR2xvYmFsRXZlbnQgZnJvbSAnLi91c2VHbG9iYWxFdmVudC5qcyc7XG5cbnZhciB1c2VXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiB1c2VXaW5kb3dSZXNpemUoaGFuZGxlcikge1xuICByZXR1cm4gdXNlR2xvYmFsRXZlbnQoJ3Jlc2l6ZScsIG51bGwsIGhhbmRsZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93UmVzaXplO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHVzZUdsb2JhbEV2ZW50IGZyb20gJy4vdXNlR2xvYmFsRXZlbnQuanMnO1xuXG52YXIgdXNlV2luZG93U2Nyb2xsID0gZnVuY3Rpb24gdXNlV2luZG93U2Nyb2xsKGhhbmRsZXIpIHtcbiAgcmV0dXJuIHVzZUdsb2JhbEV2ZW50KCdzY3JvbGwnLCBudWxsLCBoYW5kbGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpbmRvd1Njcm9sbDtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbnZhciBjcmVhdGVDYlNldHRlckVycm9yUHJveHkgPSBmdW5jdGlvbiBjcmVhdGVDYlNldHRlckVycm9yUHJveHkoZXJyb3JNZXNzYWdlKSB7XG4gIHJldHVybiBuZXcgUHJveHkoT2JqZWN0LmNyZWF0ZShudWxsKSwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSAmJiB0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnICYmIHByb3BlcnR5LnNsaWNlKDAsIDIpID09PSAnb24nKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2VcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNiU2V0dGVyRXJyb3JQcm94eTtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbmltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBjcmVhdGVIYW5kbGVyU2V0dGVyID0gZnVuY3Rpb24gY3JlYXRlSGFuZGxlclNldHRlcihoYW5kbGVyVmFsdWUpIHtcbiAgdmFyIGhhbmRsZXJSZWYgPSB1c2VSZWYoaGFuZGxlclZhbHVlKTtcbiAgaGFuZGxlclJlZi5jdXJyZW50ID0gaGFuZGxlclZhbHVlO1xuICB2YXIgc2V0SGFuZGxlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXh0Q2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG5leHRDYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgYXJndW1lbnQgc3VwcGxpZWQgdG8gdGhlIFxcJ3NldEhhbmRsZXJcXCcgZnVuY3Rpb24gc2hvdWxkIGJlIG9mIHR5cGUgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBoYW5kbGVyUmVmLmN1cnJlbnQgPSBuZXh0Q2FsbGJhY2s7XG4gIH0pO1xuICByZXR1cm4gW2hhbmRsZXJSZWYsIHNldEhhbmRsZXJdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFuZGxlclNldHRlcjtcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbnZhciBnZW9TdGFuZGFyZE9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZ2VvU3RhbmRhcmRPcHRpb25zLmVuYWJsZUhpZ2hBY2N1cmFjeSA9IGZhbHNlO1xuZ2VvU3RhbmRhcmRPcHRpb25zLnRpbWVvdXQgPSAweEZGRkZGRkZGO1xuZ2VvU3RhbmRhcmRPcHRpb25zLm1heGltdW1BZ2UgPSAwO1xudmFyIGdlb2xvY2F0aW9uU3RhbmRhcmRPcHRpb25zID0gT2JqZWN0LmZyZWV6ZShnZW9TdGFuZGFyZE9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBnZW9sb2NhdGlvblN0YW5kYXJkT3B0aW9ucztcbiIsIi8qIGJlYXV0aWZ1bC1yZWFjdC1ob29rcyB2ZXJzaW9uOiAwLjMxLjEgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gb2JqID8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc093blByb3BlcnR5O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xudmFyIGlzQXBpU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNBcGlTdXBwb3J0ZWQoYXBpKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGFwaSBpbiB3aW5kb3cgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXBpU3VwcG9ydGVkO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xuaW1wb3J0IHsgdHlwZW9mIGFzIF90eXBlb2YgfSBmcm9tICcuLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcblxudmFyIGlzQ2xpZW50ID0gKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSA9PT0gJ29iamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2xpZW50O1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xudmFyIGlzRGV2ZWxvcG1lbnQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzRGV2ZWxvcG1lbnQ7XG4iLCIvKiBiZWF1dGlmdWwtcmVhY3QtaG9va3MgdmVyc2lvbjogMC4zMS4xICovXG52YXIgaXNTYW1lUG9zaXRpb24gPSBmdW5jdGlvbiBpc1NhbWVQb3NpdGlvbihjdXJyZW50LCBuZXh0KSB7XG4gIGlmICghY3VycmVudCB8fCAhbmV4dCB8fCAhbmV4dC5jb29yZHMpIHJldHVybiBmYWxzZTtcbiAgaWYgKGN1cnJlbnQudGltZXN0YW1wICYmIG5leHQudGltZXN0YW1wICYmIGN1cnJlbnQudGltZXN0YW1wICE9PSBuZXh0LnRpbWVzdGFtcCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gY3VycmVudC5jb29yZHMubGF0aXR1ZGUgPT09IG5leHQuY29vcmRzLmxhdGl0dWRlICYmIGN1cnJlbnQuY29vcmRzLmxvbmdpdHVkZSA9PT0gbmV4dC5jb29yZHMubG9uZ2l0dWRlICYmIGN1cnJlbnQuY29vcmRzLmFsdGl0dWRlID09PSBuZXh0LmNvb3Jkcy5hbHRpdHVkZSAmJiBjdXJyZW50LmNvb3Jkcy5hY2N1cmFjeSA9PT0gbmV4dC5jb29yZHMuYWNjdXJhY3kgJiYgY3VycmVudC5jb29yZHMuYWx0aXR1ZGVBY2N1cmFjeSA9PT0gbmV4dC5jb29yZHMuYWx0aXR1ZGVBY2N1cmFjeSAmJiBjdXJyZW50LmNvb3Jkcy5oZWFkaW5nID09PSBuZXh0LmNvb3Jkcy5oZWFkaW5nICYmIGN1cnJlbnQuY29vcmRzLnNwZWVkID09PSBuZXh0LmNvb3Jkcy5zcGVlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzU2FtZVBvc2l0aW9uO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xudmFyIG1ha2VQb3NpdGlvbk9iaiA9IGZ1bmN0aW9uIG1ha2VQb3NpdGlvbk9iaihwb3NpdGlvbikge1xuICByZXR1cm4gIXBvc2l0aW9uID8gbnVsbCA6IHtcbiAgICB0aW1lc3RhbXA6IHBvc2l0aW9uLnRpbWVzdGFtcCxcbiAgICBjb29yZHM6IHtcbiAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICBhbHRpdHVkZTogcG9zaXRpb24uY29vcmRzLmFsdGl0dWRlLFxuICAgICAgYWNjdXJhY3k6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeSxcbiAgICAgIGFsdGl0dWRlQWNjdXJhY3k6IHBvc2l0aW9uLmNvb3Jkcy5hbHRpdHVkZUFjY3VyYWN5LFxuICAgICAgaGVhZGluZzogcG9zaXRpb24uY29vcmRzLmhlYWRpbmcsXG4gICAgICBzcGVlZDogcG9zaXRpb24uY29vcmRzLnNwZWVkXG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVBvc2l0aW9uT2JqO1xuIiwiLyogYmVhdXRpZnVsLXJlYWN0LWhvb2tzIHZlcnNpb246IDAuMzEuMSAqL1xudmFyIHNhZmVseVBhcnNlSnNvbiA9IGZ1bmN0aW9uIHNhZmVseVBhcnNlSnNvbihwYXJzZVN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHBhcnNlU3RyaW5nKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYWZlbHlQYXJzZUpzb247XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjb21wYXJpc29uIHN0eWxlcy4gKi9cbnZhciBVTk9SREVSRURfQ09NUEFSRV9GTEFHID0gMSxcbiAgICBQQVJUSUFMX0NPTVBBUkVfRkxBRyA9IDI7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTEsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOCxcbiAgICBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLyxcbiAgICByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCksXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID8gdmFsdWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtib29sZWFufSBbYml0bWFza10gVGhlIGJpdG1hc2sgb2YgY29tcGFyaXNvbiBmbGFncy5cbiAqICBUaGUgYml0bWFzayBtYXkgYmUgY29tcG9zZWQgb2YgdGhlIGZvbGxvd2luZyBmbGFnczpcbiAqICAgICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAgICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdCh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJhc2VJc0VxdWFsLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge251bWJlcn0gW2JpdG1hc2tdIFRoZSBiaXRtYXNrIG9mIGNvbXBhcmlzb24gZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgXG4gKiAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gYXJyYXlUYWcsXG4gICAgICBvdGhUYWcgPSBhcnJheVRhZztcblxuICBpZiAoIW9iaklzQXJyKSB7XG4gICAgb2JqVGFnID0gZ2V0VGFnKG9iamVjdCk7XG4gICAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIH1cbiAgaWYgKCFvdGhJc0Fycikge1xuICAgIG90aFRhZyA9IGdldFRhZyhvdGhlcik7XG4gICAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG4gIH1cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyAmJiAhaXNIb3N0T2JqZWN0KG9iamVjdCksXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcgJiYgIWlzSG9zdE9iamVjdChvdGhlciksXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIFBBUlRJQUxfQ09NUEFSRV9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIGN1c3RvbWl6ZXIsIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcgfCBQQVJUSUFMX0NPTVBBUkVfRkxBRywgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW29iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgdW5kZWZpbmVkLCBVTk9SREVSRURfQ09NUEFSRV9GTEFHIHwgUEFSVElBTF9DT01QQVJFX0ZMQUcpO1xuICB9O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogc3RyaW5nVG9QYXRoKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBvZiBjb21wYXJpc29uIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYFxuICogIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBQQVJUSUFMX0NPTVBBUkVfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgVU5PUkRFUkVEX0NPTVBBUkVfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFzZWVuLmhhcyhvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uYWRkKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgb2YgY29tcGFyaXNvbiBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGBcbiAqICBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIFBBUlRJQUxfQ09NUEFSRV9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gVU5PUkRFUkVEX0NPTVBBUkVfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBvZiBjb21wYXJpc29uIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYFxuICogIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgUEFSVElBTF9DT01QQVJFX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0ga2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExLFxuLy8gZm9yIGRhdGEgdmlld3MgaW4gRWRnZSA8IDE0LCBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcy5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gaXNLZXkocGF0aCwgb2JqZWN0KSA/IFtwYXRoXSA6IGNhc3RQYXRoKHBhdGgpO1xuXG4gIHZhciByZXN1bHQsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QgPyBvYmplY3QubGVuZ3RoIDogMDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplKGZ1bmN0aW9uKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmZpbmRgIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICogZWxlbWVudCBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV1cbiAqICBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZvdW5kIGVsZW1lbnQsIGVsc2UgYC0xYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5maW5kSW5kZXgodXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8udXNlciA9PSAnYmFybmV5JzsgfSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCB7ICd1c2VyJzogJ2ZyZWQnLCAnYWN0aXZlJzogZmFsc2UgfSk7XG4gKiAvLyA9PiAxXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kSW5kZXgodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiAyXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4ID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGZyb21JbmRleCk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IG5hdGl2ZU1heChsZW5ndGggKyBpbmRleCwgMCk7XG4gIH1cbiAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpLCBpbmRleCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gQXNzaWduIGNhY2hlIHRvIGBfLm1lbW9pemVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRJbmRleDtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9YCR7aWR9ICR7Y291bnR9YDtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goa2V5PT57c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhP2BAbWVkaWEgJHtvYmoubWVkaWF9IHske29iai5jc3N9fWA6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz1gXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSl9ICovYDt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT0oKT0+e3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPShsaXN0LG9wdGlvbnMpPT57b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJpLmJpLWRpYWdyYW17LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOi4wN3JlbSBzb2xpZCAjZGFlMWU3O2JvcmRlci1yYWRpdXM6LjI1cmVtOy13ZWJraXQtYm94LXNoYWRvdzowIC44cmVtIDFyZW0gLS4ycmVtIHJnYmEoMCwwLDAsLjEpLDAgLjI1cmVtIC41cmVtIC0uMDJyZW0gcmdiYSgwLDAsMCwuMDUpO2JveC1zaGFkb3c6MCAuOHJlbSAxcmVtIC0uMnJlbSByZ2JhKDAsMCwwLC4xKSwwIC4yNXJlbSAuNXJlbSAtLjAycmVtIHJnYmEoMCwwLDAsLjA1KTttaW4taGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZjhmYWZjO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2Rley13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6NTA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmJpLmJpLWRpYWdyYW0gLmJpLmJpLWRpYWdyYW0tbm9kZSAuYmktcG9ydC13cmFwcGVye2Rpc3BsYXk6ZmxleH0uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2RlIC5iaS1wb3J0LXdyYXBwZXIgLmJpLWlucHV0LXBvcnRzLC5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUgLmJpLXBvcnQtd3JhcHBlciAuYmktb3V0cHV0LXBvcnRze2ZsZXg6MSAxfS5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUgLmJpLXBvcnQtd3JhcHBlciAuYmktaW5wdXQtcG9ydHMgLmJpLWRpYWdyYW0tcG9ydCwuYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2RlIC5iaS1wb3J0LXdyYXBwZXIgLmJpLW91dHB1dC1wb3J0cyAuYmktZGlhZ3JhbS1wb3J0ey13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZS1pbi1vdXQ7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt3aWxsLWNoYW5nZTpiYWNrZ3JvdW5kLWNvbG9yO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDgpO3dpZHRoOjIwcHg7d2lkdGg6MS4yNXJlbTtoZWlnaHQ6MjBweDtoZWlnaHQ6MS4yNXJlbTttYXJnaW4tYm90dG9tOi4yNXJlbX0uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2RlIC5iaS1wb3J0LXdyYXBwZXIgLmJpLWlucHV0LXBvcnRzIC5iaS1kaWFncmFtLXBvcnQ6aG92ZXIsLmJpLmJpLWRpYWdyYW0gLmJpLmJpLWRpYWdyYW0tbm9kZSAuYmktcG9ydC13cmFwcGVyIC5iaS1vdXRwdXQtcG9ydHMgLmJpLWRpYWdyYW0tcG9ydDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUgLmJpLXBvcnQtd3JhcHBlciAuYmktb3V0cHV0LXBvcnRzIC5iaS1kaWFncmFtLXBvcnR7bWFyZ2luLWxlZnQ6YXV0b30uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2RlLmJpLWRpYWdyYW0tbm9kZS1kZWZhdWx0ey13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXIgLjNzIGVhc2Utb3V0LC13ZWJraXQtYm94LXNoYWRvdyAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246Ym9yZGVyIC4zcyBlYXNlLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjI1cyBlYXNlLWluLW91dCxib3JkZXIgLjNzIGVhc2Utb3V0O3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzIGVhc2UtaW4tb3V0LGJvcmRlciAuM3MgZWFzZS1vdXQsLXdlYmtpdC1ib3gtc2hhZG93IC4yNXMgZWFzZS1pbi1vdXQ7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt3aWxsLWNoYW5nZTpib3gtc2hhZG93LGJvcmRlcjtib3JkZXI6LjA3cmVtIHNvbGlkICM4Nzk1YTE7YmFja2dyb3VuZC1jb2xvcjojZGFlMWU3O2NvbG9yOiM2MDZmN2I7Ym9yZGVyLXJhZGl1czouMjVyZW07LXdlYmtpdC1ib3gtc2hhZG93OjAgLjA3cmVtIC4ycmVtIDAgcmdiYSgwLDAsMCwuMSksMCAuMDdyZW0gLjEyNXJlbSAwIHJnYmEoMCwwLDAsLjA2KTtib3gtc2hhZG93OjAgLjA3cmVtIC4ycmVtIDAgcmdiYSgwLDAsMCwuMSksMCAuMDdyZW0gLjEyNXJlbSAwIHJnYmEoMCwwLDAsLjA2KTtwYWRkaW5nOi41cmVtfS5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUuYmktZGlhZ3JhbS1ub2RlLWRlZmF1bHQ6aG92ZXJ7LXdlYmtpdC1ib3gtc2hhZG93OjAgLjEyNXJlbSAxcmVtIC0uMnJlbSByZ2JhKDAsMCwwLC4xKSwwIC4yNXJlbSAuM3JlbSAtMTI1cmVtIHJnYmEoMCwwLDAsLjA1KTtib3gtc2hhZG93OjAgLjEyNXJlbSAxcmVtIC0uMnJlbSByZ2JhKDAsMCwwLC4xKSwwIC4yNXJlbSAuM3JlbSAtMTI1cmVtIHJnYmEoMCwwLDAsLjA1KX0uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2RlLmJpLWRpYWdyYW0tbm9kZS1kZWZhdWx0IC5iaS1wb3J0LXdyYXBwZXJ7bWFyZ2luLWxlZnQ6LS41cmVtO21hcmdpbi1yaWdodDotLjVyZW19LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVye3BvaW50ZXItZXZlbnRzOm5vbmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLXNlZ21lbnQgcGF0aHtzdHJva2U6I2RhZTFlNztzdHJva2Utd2lkdGg6LjI1cmVtO3N0cm9rZS1kYXNoYXJyYXk6MTAsMjtmaWxsOnRyYW5zcGFyZW50Oy13ZWJraXQtYW5pbWF0aW9uOkJpRGFzaFNlZ21lbnRBbmltYXRpb24gMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpCaURhc2hTZWdtZW50QW5pbWF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZX0uYmkuYmktZGlhZ3JhbSAuYmktbGluay1jYW52YXMtbGF5ZXIgLmJpLWRpYWdyYW0tc2VnbWVudCBjaXJjbGV7c3Ryb2tlOiNkYWUxZTc7c3Ryb2tlLXdpZHRoOi4xNXJlbTtmaWxsOiM4OGNkZmZ9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLWxpbmt7cG9pbnRlci1ldmVudHM6c3Ryb2tlfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1saW5rIC5iaS1saW5rLXBhdGh7c3Ryb2tlOiNkYWUxZTc7c3Ryb2tlLXdpZHRoOi4yNXJlbTtwb2ludGVyLWV2ZW50czpzdHJva2U7ZmlsbDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uYmkuYmktZGlhZ3JhbSAuYmktbGluay1jYW52YXMtbGF5ZXIgLmJpLWRpYWdyYW0tbGluayAuYmktbGluay1naG9zdHtwb2ludGVyLWV2ZW50czpzdHJva2U7c3Ryb2tlOnRyYW5zcGFyZW50O3N0cm9rZS13aWR0aDoxLjJyZW07ZmlsbDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcn0uYmkuYmktZGlhZ3JhbSAuYmktbGluay1jYW52YXMtbGF5ZXIgLmJpLWRpYWdyYW0tbGluazpob3ZlciAuYmktbGluay1wYXRoe3N0cm9rZTojODhjZGZmO3N0cm9rZS1kYXNoYXJyYXk6MTAsMjstd2Via2l0LWFuaW1hdGlvbjpCaURhc2hTZWdtZW50QW5pbWF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246QmlEYXNoU2VnbWVudEFuaW1hdGlvbiAxcyBsaW5lYXIgaW5maW5pdGV9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLWxpbmsucmVhZG9ubHktbGluayAuYmktbGluay1naG9zdHtjdXJzb3I6bm90LWFsbG93ZWR9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLWxpbmsucmVhZG9ubHktbGluayAuYmktbGluay1wYXRoe2N1cnNvcjpub3QtYWxsb3dlZDtzdHJva2U6I2I4YzJjYztzdHJva2UtZGFzaGFycmF5Om5vbmV9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLWxpbmsucmVhZG9ubHktbGluazpob3ZlcntzdHJva2U6I2I4YzJjYztzdHJva2UtZGFzaGFycmF5Om5vbmU7LXdlYmtpdC1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX0uYmkuYmktZGlhZ3JhbSAuYmktbGluay1jYW52YXMtbGF5ZXIgLmJpLWRpYWdyYW0tbGluayBmb3JlaWduT2JqZWN0e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6dmlzaWJsZTtwb2ludGVyLWV2ZW50czpub25lfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1saW5rIC5iaS1kaWFncmFtLWxpbmstbGFiZWx7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzZDQ4NTI7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzouMjVyZW07dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjE0cHg7Zm9udC1zaXplOi44NzVyZW07LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7bWluLXdpZHRoOjQ4cHg7bWluLXdpZHRoOjNyZW07LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfUAtd2Via2l0LWtleWZyYW1lcyBCaURhc2hTZWdtZW50QW5pbWF0aW9uezAle3N0cm9rZS1kYXNob2Zmc2V0OjI0fXRve3N0cm9rZS1kYXNob2Zmc2V0OjB9fUBrZXlmcmFtZXMgQmlEYXNoU2VnbWVudEFuaW1hdGlvbnswJXtzdHJva2UtZGFzaG9mZnNldDoyNH10b3tzdHJva2UtZGFzaG9mZnNldDowfX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL2JlYXV0aWZ1bC1yZWFjdC1kaWFncmFtcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWUsNkJBQXFCLENBQXJCLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsMkJBQTJCLENBQUMsb0JBQW9CLENBQUMsNEZBQW9GLENBQXBGLG9GQUFvRixDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsbUNBQW1DLDhCQUFzQixDQUF0QixzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsb0RBQW9ELFlBQVksQ0FBQyx5SUFBeUksUUFBUSxDQUFDLDJLQUEySyxvREFBNEMsQ0FBNUMsNENBQTRDLENBQUMsa0NBQTBCLENBQTFCLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDLGdDQUFnQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyx1TEFBdUwsK0JBQStCLENBQUMsc0ZBQXNGLGdCQUFnQixDQUFDLDJEQUEyRCwwRUFBMEQsQ0FBMUQsa0VBQTBELENBQTFELDBEQUEwRCxDQUExRCw4RkFBMEQsQ0FBQyxrQ0FBMEIsQ0FBMUIsMEJBQTBCLENBQUMsNkJBQTZCLENBQUMsMkJBQTJCLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLHFGQUE2RSxDQUE3RSw2RUFBNkUsQ0FBQyxhQUFhLENBQUMsaUVBQWlFLDhGQUFxRixDQUFyRixzRkFBc0YsQ0FBQyw0RUFBNEUsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMscUNBQXFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyw4REFBOEQsY0FBYyxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLDJEQUFrRCxDQUFsRCxtREFBbUQsQ0FBQyxnRUFBZ0UsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxzREFBc0QscUJBQXFCLENBQUMsb0VBQW9FLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMscUVBQXFFLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQywwRUFBMEUsY0FBYyxDQUFDLHFCQUFxQixDQUFDLDJEQUFrRCxDQUFsRCxtREFBbUQsQ0FBQyxtRkFBbUYsa0JBQWtCLENBQUMsa0ZBQWtGLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQywwRUFBMEUsY0FBYyxDQUFDLHFCQUFxQixDQUFDLHNCQUFhLENBQWIsY0FBYyxDQUFDLG9FQUFvRSxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLDZFQUE2RSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLHNDQUE2QixDQUE3Qiw4QkFBOEIsQ0FBQywwQ0FBa0MsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQWpGLGtDQUFrQyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsbUJBQW1CLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJpLmJpLWRpYWdyYW17Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOi4wN3JlbSBzb2xpZCAjZGFlMWU3O2JvcmRlci1yYWRpdXM6LjI1cmVtO2JveC1zaGFkb3c6MCAuOHJlbSAxcmVtIC0uMnJlbSByZ2JhKDAsMCwwLC4xKSwwIC4yNXJlbSAuNXJlbSAtLjAycmVtIHJnYmEoMCwwLDAsLjA1KTttaW4taGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZjhmYWZjO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2Rle2JveC1zaXppbmc6Y29udGVudC1ib3g7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo1MDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2RlIC5iaS1wb3J0LXdyYXBwZXJ7ZGlzcGxheTpmbGV4fS5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUgLmJpLXBvcnQtd3JhcHBlciAuYmktaW5wdXQtcG9ydHMsLmJpLmJpLWRpYWdyYW0gLmJpLmJpLWRpYWdyYW0tbm9kZSAuYmktcG9ydC13cmFwcGVyIC5iaS1vdXRwdXQtcG9ydHN7ZmxleDoxIDF9LmJpLmJpLWRpYWdyYW0gLmJpLmJpLWRpYWdyYW0tbm9kZSAuYmktcG9ydC13cmFwcGVyIC5iaS1pbnB1dC1wb3J0cyAuYmktZGlhZ3JhbS1wb3J0LC5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUgLmJpLXBvcnQtd3JhcHBlciAuYmktb3V0cHV0LXBvcnRzIC5iaS1kaWFncmFtLXBvcnR7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZS1pbi1vdXQ7YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47d2lsbC1jaGFuZ2U6YmFja2dyb3VuZC1jb2xvcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA4KTt3aWR0aDoyMHB4O3dpZHRoOjEuMjVyZW07aGVpZ2h0OjIwcHg7aGVpZ2h0OjEuMjVyZW07bWFyZ2luLWJvdHRvbTouMjVyZW19LmJpLmJpLWRpYWdyYW0gLmJpLmJpLWRpYWdyYW0tbm9kZSAuYmktcG9ydC13cmFwcGVyIC5iaS1pbnB1dC1wb3J0cyAuYmktZGlhZ3JhbS1wb3J0OmhvdmVyLC5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUgLmJpLXBvcnQtd3JhcHBlciAuYmktb3V0cHV0LXBvcnRzIC5iaS1kaWFncmFtLXBvcnQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0uYmkuYmktZGlhZ3JhbSAuYmkuYmktZGlhZ3JhbS1ub2RlIC5iaS1wb3J0LXdyYXBwZXIgLmJpLW91dHB1dC1wb3J0cyAuYmktZGlhZ3JhbS1wb3J0e21hcmdpbi1sZWZ0OmF1dG99LmJpLmJpLWRpYWdyYW0gLmJpLmJpLWRpYWdyYW0tbm9kZS5iaS1kaWFncmFtLW5vZGUtZGVmYXVsdHt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjI1cyBlYXNlLWluLW91dCxib3JkZXIgLjNzIGVhc2Utb3V0O2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3dpbGwtY2hhbmdlOmJveC1zaGFkb3csYm9yZGVyO2JvcmRlcjouMDdyZW0gc29saWQgIzg3OTVhMTtiYWNrZ3JvdW5kLWNvbG9yOiNkYWUxZTc7Y29sb3I6IzYwNmY3Yjtib3JkZXItcmFkaXVzOi4yNXJlbTtib3gtc2hhZG93OjAgLjA3cmVtIC4ycmVtIDAgcmdiYSgwLDAsMCwuMSksMCAuMDdyZW0gLjEyNXJlbSAwIHJnYmEoMCwwLDAsLjA2KTtwYWRkaW5nOi41cmVtfS5iaS5iaS1kaWFncmFtIC5iaS5iaS1kaWFncmFtLW5vZGUuYmktZGlhZ3JhbS1ub2RlLWRlZmF1bHQ6aG92ZXJ7Ym94LXNoYWRvdzowIC4xMjVyZW0gMXJlbSAtLjJyZW0gcmdiYSgwLDAsMCwuMSksMCAuMjVyZW0gLjNyZW0gLTEyNXJlbSByZ2JhKDAsMCwwLC4wNSl9LmJpLmJpLWRpYWdyYW0gLmJpLmJpLWRpYWdyYW0tbm9kZS5iaS1kaWFncmFtLW5vZGUtZGVmYXVsdCAuYmktcG9ydC13cmFwcGVye21hcmdpbi1sZWZ0Oi0uNXJlbTttYXJnaW4tcmlnaHQ6LS41cmVtfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllcntwb2ludGVyLWV2ZW50czpub25lO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1zZWdtZW50IHBhdGh7c3Ryb2tlOiNkYWUxZTc7c3Ryb2tlLXdpZHRoOi4yNXJlbTtzdHJva2UtZGFzaGFycmF5OjEwLDI7ZmlsbDp0cmFuc3BhcmVudDthbmltYXRpb246QmlEYXNoU2VnbWVudEFuaW1hdGlvbiAxcyBsaW5lYXIgaW5maW5pdGV9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLXNlZ21lbnQgY2lyY2xle3N0cm9rZTojZGFlMWU3O3N0cm9rZS13aWR0aDouMTVyZW07ZmlsbDojODhjZGZmfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1saW5re3BvaW50ZXItZXZlbnRzOnN0cm9rZX0uYmkuYmktZGlhZ3JhbSAuYmktbGluay1jYW52YXMtbGF5ZXIgLmJpLWRpYWdyYW0tbGluayAuYmktbGluay1wYXRoe3N0cm9rZTojZGFlMWU3O3N0cm9rZS13aWR0aDouMjVyZW07cG9pbnRlci1ldmVudHM6c3Ryb2tlO2ZpbGw6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLWxpbmsgLmJpLWxpbmstZ2hvc3R7cG9pbnRlci1ldmVudHM6c3Ryb2tlO3N0cm9rZTp0cmFuc3BhcmVudDtzdHJva2Utd2lkdGg6MS4ycmVtO2ZpbGw6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLWxpbms6aG92ZXIgLmJpLWxpbmstcGF0aHtzdHJva2U6Izg4Y2RmZjtzdHJva2UtZGFzaGFycmF5OjEwLDI7YW5pbWF0aW9uOkJpRGFzaFNlZ21lbnRBbmltYXRpb24gMXMgbGluZWFyIGluZmluaXRlfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1saW5rLnJlYWRvbmx5LWxpbmsgLmJpLWxpbmstZ2hvc3R7Y3Vyc29yOm5vdC1hbGxvd2VkfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1saW5rLnJlYWRvbmx5LWxpbmsgLmJpLWxpbmstcGF0aHtjdXJzb3I6bm90LWFsbG93ZWQ7c3Ryb2tlOiNiOGMyY2M7c3Ryb2tlLWRhc2hhcnJheTpub25lfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1saW5rLnJlYWRvbmx5LWxpbms6aG92ZXJ7c3Ryb2tlOiNiOGMyY2M7c3Ryb2tlLWRhc2hhcnJheTpub25lO2FuaW1hdGlvbjpub25lfS5iaS5iaS1kaWFncmFtIC5iaS1saW5rLWNhbnZhcy1sYXllciAuYmktZGlhZ3JhbS1saW5rIGZvcmVpZ25PYmplY3R7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzp2aXNpYmxlO3BvaW50ZXItZXZlbnRzOm5vbmV9LmJpLmJpLWRpYWdyYW0gLmJpLWxpbmstY2FudmFzLWxheWVyIC5iaS1kaWFncmFtLWxpbmsgLmJpLWRpYWdyYW0tbGluay1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzNkNDg1Mjtib3JkZXItcmFkaXVzOi4yNXJlbTtwYWRkaW5nOi4yNXJlbTt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTRweDtmb250LXNpemU6Ljg3NXJlbTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTttaW4td2lkdGg6NDhweDttaW4td2lkdGg6M3JlbTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9QGtleWZyYW1lcyBCaURhc2hTZWdtZW50QW5pbWF0aW9uezAle3N0cm9rZS1kYXNob2Zmc2V0OjI0fXRve3N0cm9rZS1kYXNob2Zmc2V0OjB9fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyAxNDk6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbnZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oMTQ5KTtcbi8qKioqKiovIH0pKClcbjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9