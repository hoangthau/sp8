(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(35);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(37);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});
exports.default = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(38);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(21);

var _helpers = __webpack_require__(39);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        }).catch(function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(21);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(36)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Not Found!"));
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Book/Book.scss
var Book_Book = __webpack_require__(52);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Book/index.js










var Home_Book_Book =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(Book, _React$PureComponent);

  function Book() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Book);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Book)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      name: '',
      email: '',
      phone: '',
      size: 0,
      date: '',
      submitted: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "submit", function () {
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          phone = _this$state.phone,
          size = _this$state.size,
          date = _this$state.date;
      /* eslint-disable */

      emailjs.init('user_hSSuiJwWoVyM5C3AGFECz');
      var payload = {
        from_name: name,
        message_html: "\n      <p>Name: ".concat(name, "</p>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone Number: ").concat(phone, "</p>\n      <p>Team size: ").concat(size, "</p>\n      <p>Move date: ").concat(date, "</p>\n      ")
      }; // Your email service name if you just have one, you can use this one.

      var service_id = 'gmail-ht'; // Template you will use

      var template_id = 'template_MNVDmiDO'; // Send message using your client

      emailjs.send(service_id, template_id, payload);

      _this.setState({
        submitted: true
      });
    });

    return _this;
  }

  createClass_default()(Book, [{
    key: "setForm",
    value: function setForm(e) {
      var key = e.target.name;
      var value = e.target.value;
      this.setState(defineProperty_default()({}, key, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "book-tour"
      }, external_react_default.a.createElement("h2", null, "Book a tour today"), external_react_default.a.createElement("p", null, "Schedule a visit with us."), this.state.submitted ? external_react_default.a.createElement("p", null, "Thanks for submitting the form") : external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Full name",
        onChange: function onChange(e) {
          return _this2.setForm(e);
        }
      }), external_react_default.a.createElement("input", {
        type: "text",
        name: "email",
        placeholder: "Email address",
        onChange: function onChange(e) {
          return _this2.setForm(e);
        }
      }), external_react_default.a.createElement("input", {
        type: "text",
        name: "phone",
        placeholder: "Phone number",
        onChange: function onChange(e) {
          return _this2.setForm(e);
        }
      }), external_react_default.a.createElement("div", {
        className: "input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        name: "date",
        placeholder: "Move-in date",
        onChange: function onChange(e) {
          return _this2.setForm(e);
        }
      }), external_react_default.a.createElement("input", {
        type: "number",
        name: "size",
        placeholder: "Team size",
        onChange: function onChange(e) {
          return _this2.setForm(e);
        }
      })), external_react_default.a.createElement("button", {
        onClick: this.submit,
        className: "submit"
      }, "Submit request"))));
    }
  }]);

  return Book;
}(external_react_default.a.PureComponent);

/* harmony default export */ var Home_Book = (Home_Book_Book);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/BookModal/Modal.scss
var Modal = __webpack_require__(53);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/BookModal/index.js








var BookModal_BookModal =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(BookModal, _React$Component);

  function BookModal() {
    classCallCheck_default()(this, BookModal);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(BookModal).apply(this, arguments));
  }

  createClass_default()(BookModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.open) {
        document.body.style.position = 'fixed';
      } else {
        document.body.style.position = 'static';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          children = _this$props.children,
          className = _this$props.className;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, open && external_react_default.a.createElement("div", {
        className: "modal ".concat(className)
      }, external_react_default.a.createElement("div", {
        className: "modal__content"
      }, children)));
    }
  }]);

  return BookModal;
}(external_react_default.a.Component);

/* harmony default export */ var Home_BookModal = (BookModal_BookModal);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Header/sp8.svg
var sp8 = __webpack_require__(31);
var sp8_default = /*#__PURE__*/__webpack_require__.n(sp8);

// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Header/Header.scss
var Header_Header = __webpack_require__(54);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Header/index.jsx













var components_Header_Header =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(Header, _React$PureComponent);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      open: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggle", function () {
      var open = _this.state.open;

      _this.setState({
        open: !open
      });
    });

    return _this;
  }

  createClass_default()(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Home_BookModal, {
        open: this.state.open
      }, external_react_default.a.createElement("button", {
        className: "close",
        onClick: this.toggle
      }, "Close"), external_react_default.a.createElement(Home_Book, null)), external_react_default.a.createElement("div", {
        className: "header container"
      }, external_react_default.a.createElement("img", {
        src: sp8_default.a,
        width: 59,
        height: 24,
        alt: "logo"
      }), external_react_default.a.createElement("div", {
        className: "header__links"
      }, external_react_default.a.createElement("a", {
        className: "header__pricing",
        href: ""
      }, "Pricing"), external_react_default.a.createElement("button", {
        className: "header__book",
        onClick: this.toggle
      }, "Book a tour"))));
    }
  }]);

  return Header;
}(external_react_default.a.PureComponent);

/* harmony default export */ var components_Header = (components_Header_Header);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Banner/Banner.scss
var Banner_Banner = __webpack_require__(55);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Banner/index.js












var Home_Banner_Banner =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(Banner, _React$PureComponent);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      open: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggle", function () {
      var open = _this.state.open;

      _this.setState({
        open: !open
      });
    });

    return _this;
  }

  createClass_default()(Banner, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Home_BookModal, {
        open: this.state.open
      }, external_react_default.a.createElement("button", {
        className: "close",
        onClick: this.toggle
      }, "Close"), external_react_default.a.createElement(Home_Book, null)), external_react_default.a.createElement("div", {
        className: "banner container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6 left"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "The mono-working space"), external_react_default.a.createElement("p", null, "Enjoy all the amenities of a professional working space with the focus of a private office \u2014 reminaged in a gorgeously designed workspace."), external_react_default.a.createElement("button", {
        className: "banner__book",
        onClick: this.toggle
      }, "Book a tour"), external_react_default.a.createElement("a", {
        className: "banner__pricing",
        href: "#book-a-tour"
      }, "See pricing"))), external_react_default.a.createElement("div", {
        className: "col-md-6 banner__img"
      }, external_react_default.a.createElement("img", {
        src: "/assets/banner.jpg",
        alt: "banner"
      })))));
    }
  }]);

  return Banner;
}(external_react_default.a.PureComponent);

/* harmony default export */ var Home_Banner = (Home_Banner_Banner);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Innovate/Innovate.scss
var Innovate_Innovate = __webpack_require__(56);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Innovate/index.js



var Home_Innovate_Innovate = function Innovate() {
  return external_react_default.a.createElement("div", {
    className: "innovate container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("h2", null, "A space to innovate")), external_react_default.a.createElement("div", {
    className: "col-md-6"
  }, external_react_default.a.createElement("p", null, "We build the working experience for ambitious small teams and big teams alike. We designed the work space for those who want the best."), external_react_default.a.createElement("p", null, "SP8 mono-workspace is gorgeous \u2014 fully enclosed, blazing fast internet. It comes with amenities that make you feel like you are in a coworking space, but with the privacy and focus uniquely for you. Prime location in the heart of the city. Flexible payments. And yes, it\u2019s located on top of Esta Eatery. To name a few."), external_react_default.a.createElement("p", null, "Working in SP8 is so delightful, you won\u2019t want to stop on that one project that will make a history for your company."))));
};

/* harmony default export */ var Home_Innovate = (Home_Innovate_Innovate);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Feature/Feature.scss
var Feature_Feature = __webpack_require__(57);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Feature/index.js



var Home_Feature_Feature = function Feature() {
  return external_react_default.a.createElement("div", {
    className: "features container"
  }, external_react_default.a.createElement("div", {
    className: "row features-focus item"
  }, external_react_default.a.createElement("div", {
    className: "col-md-6 features-focus__img"
  }, external_react_default.a.createElement("img", {
    src: "/assets/focus.jpg",
    alt: "Amenities"
  })), external_react_default.a.createElement("div", {
    className: "col-md-6 focus-desc"
  }, external_react_default.a.createElement("h2", null, "One focus space"), external_react_default.a.createElement("p", null, "We focus on what matters for a winning work space. "), external_react_default.a.createElement("p", null, "We\u2019ve designed each room to be a gorgeous, all-in-one unit with individual working stations, brainstorming area and a team-size meeting room or a private working booth. A private balcony overlooking the beautiful Esta Eatery for those who want a little more air. Bio-lock sensor ensure only your team can access, anytime."), external_react_default.a.createElement("p", null, "On average, we spend 8-10 hours a day at an office. When you work in a place that long, make sure it\u2019s functional, comfortable and delightful."), external_react_default.a.createElement("a", null, "View the space"))), external_react_default.a.createElement("div", {
    className: "row features-amenity item"
  }, external_react_default.a.createElement("div", {
    className: "col-md-6 amenity-desc"
  }, external_react_default.a.createElement("h2", null, "Full amenities"), external_react_default.a.createElement("p", null, "We focus on amenities which matter to you. Everything else you need, beyond your focus workspace."), external_react_default.a.createElement("p", null, "Say hi to an all-white, hi-tech conferencing room. Elegant common place to impress your clients. Blazing fast internet. A full-equipped printing station. Coffee, tea and fruit water. Design and marketing services. Daily cleaning service to keep your space always sparkly."), external_react_default.a.createElement("p", null, "And what is best if right underneath you is the up-and-coming Easter Eatery, ran by one of the most innovative teams in the culinary industry."), external_react_default.a.createElement("a", null, "See all amenities")), external_react_default.a.createElement("div", {
    className: "col-md-6 features-amenity__img"
  }, external_react_default.a.createElement("img", {
    src: "/assets/amenities.jpg",
    alt: "Amenities"
  }))), external_react_default.a.createElement("div", {
    className: "row features-term item"
  }, external_react_default.a.createElement("div", {
    className: "col-md-6 features-term__img"
  }, external_react_default.a.createElement("img", {
    src: "/assets/terms.jpg",
    alt: "Amenities"
  })), external_react_default.a.createElement("div", {
    className: "col-md-6 terms-desc"
  }, external_react_default.a.createElement("h2", null, "Flexible terms"), external_react_default.a.createElement("p", null, "We focus on giving you the best options to grow."), external_react_default.a.createElement("p", null, "Leasing option starts from as low as a six month contract. You can pay month-to-month, quarter-by-quarter, or all at once, which ever work best to you. We don\u2019t charge by head count, so as long as you can fit all of your team into your room, just do it."), external_react_default.a.createElement("p", null, "Enjoy flexibility while growing your team."), external_react_default.a.createElement("a", null, "See pricing"))));
};

/* harmony default export */ var Home_Feature = (Home_Feature_Feature);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Amenity/Amenity.scss
var Amenity_Amenity = __webpack_require__(58);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Amenity/index.js



var Home_Amenity_Amenity = function Amenity() {
  return external_react_default.a.createElement("div", {
    className: "amenity"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("h2", null, "The amenities you need"), external_react_default.a.createElement("p", null, "You focus on growing your business, let us take care of the rest."), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("div", {
    className: "amenity__space-img"
  }), external_react_default.a.createElement("div", {
    className: "amenity__desc"
  }, external_react_default.a.createElement("h3", null, "Space"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "High-speed Wi-Fi"), external_react_default.a.createElement("li", null, "Conference rooms"), external_react_default.a.createElement("li", null, "Bio-sensor locks"), external_react_default.a.createElement("li", null, "Private phone booths"), external_react_default.a.createElement("li", null, "Private balcony"), external_react_default.a.createElement("li", null, "Pantry area"), external_react_default.a.createElement("li", null, "Common areas and lounges")))), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("div", {
    className: "amenity__services-img"
  }), external_react_default.a.createElement("div", {
    className: "amenity__desc"
  }, external_react_default.a.createElement("h3", null, "Services"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Front-desk and guest reception"), external_react_default.a.createElement("li", null, "Printing station"), external_react_default.a.createElement("li", null, "Mail and package handling"), external_react_default.a.createElement("li", null, "Daily cleaning services"), external_react_default.a.createElement("li", null, "Professional management"), external_react_default.a.createElement("li", null, "Streamlined billing process")))), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("div", {
    className: "amenity__perks-img"
  }), external_react_default.a.createElement("div", {
    className: "amenity__desc"
  }, external_react_default.a.createElement("h3", null, "Perks"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Esta Eatery"), external_react_default.a.createElement("li", null, "Prime location"), external_react_default.a.createElement("li", null, "Coffee and tea"), external_react_default.a.createElement("li", null, "Freshwater"), external_react_default.a.createElement("li", null, "Events and conferences")))))));
};

/* harmony default export */ var Home_Amenity = (Home_Amenity_Amenity);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(14);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Gallery/Gallery.scss
var Gallery_Gallery = __webpack_require__(59);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Gallery/index.jsx









var Home_Gallery_Gallery =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Gallery, _Component);

  function Gallery(props) {
    var _this;

    classCallCheck_default()(this, Gallery);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Gallery).call(this, props));
    _this.state = {
      nav1: null,
      nav2: null
    };
    return _this;
  }

  createClass_default()(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        className: "gallery"
      }, external_react_default.a.createElement(external_react_slick_default.a, {
        asNavFor: this.state.nav2,
        ref: function ref(slider) {
          return _this2.slider1 = slider;
        },
        className: "slider1"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/amenities.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/focus.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/terms.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/amenities.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/focus.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/terms.jpg",
        alt: "img"
      }))), external_react_default.a.createElement(external_react_slick_default.a, {
        asNavFor: this.state.nav1,
        ref: function ref(slider) {
          return _this2.slider2 = slider;
        },
        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true,
        className: "slider2"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/amenities.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/focus.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/terms.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/amenities.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/focus.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/terms.jpg",
        alt: "img"
      }))));
    }
  }]);

  return Gallery;
}(external_react_["Component"]);

/* harmony default export */ var Home_Gallery = (Home_Gallery_Gallery);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Workspace/Workspace.scss
var Workspace_Workspace = __webpack_require__(60);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/Workspace/index.js













var Home_Workspace_Workspace =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits_default()(Workspace, _React$PureComponent);

  function Workspace() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Workspace);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Workspace)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      open: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggle", function () {
      var open = _this.state.open;

      _this.setState({
        open: !open
      });
    });

    return _this;
  }

  createClass_default()(Workspace, [{
    key: "render",
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Home_BookModal, {
        open: this.state.open,
        className: "modal-gallery"
      }, external_react_default.a.createElement("button", {
        className: "close",
        onClick: this.toggle
      }, "Close"), external_react_default.a.createElement(Home_Gallery, null)), external_react_default.a.createElement("div", {
        className: "workspace container"
      }, external_react_default.a.createElement("h2", null, "Your new workspace"), external_react_default.a.createElement("p", null, "View the SP8 gallery."), external_react_default.a.createElement("div", {
        className: "row gallery-overview"
      }, external_react_default.a.createElement("div", {
        className: "col-md-6 left"
      }, external_react_default.a.createElement("img", {
        src: "/assets/banner.jpg",
        alt: "left"
      })), external_react_default.a.createElement("div", {
        className: "col-md-6 right"
      }, external_react_default.a.createElement("div", {
        className: "right-1"
      }), external_react_default.a.createElement("div", {
        className: "right-2"
      }))), external_react_default.a.createElement("div", {
        className: "slider-mobile"
      }, external_react_default.a.createElement(external_react_slick_default.a, settings, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/amenities.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/focus.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/terms.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/amenities.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/focus.jpg",
        alt: "img"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/assets/terms.jpg",
        alt: "img"
      })))), external_react_default.a.createElement("button", {
        className: "view-photos",
        onClick: this.toggle
      }, "View photos")));
    }
  }]);

  return Workspace;
}(external_react_default.a.PureComponent);

/* harmony default export */ var Home_Workspace = (Home_Workspace_Workspace);
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Footer/Footer.scss
var Footer_Footer = __webpack_require__(61);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Footer/index.js



var components_Footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    className: "footer"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("h3", null, "About SP8"), external_react_default.a.createElement("p", null, "SP8 provides small teams with a platform to grow with a network of designed-to-focus working spaces.")), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("h3", null, "About Establishment"), external_react_default.a.createElement("p", null, "Establishment is the operator of SP8, Esta Eatery and Establishment XXV.")), external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("h3", null, "Contact Us"), external_react_default.a.createElement("p", null, "18Bis/16 Nguyen Thi Minh Khai, Da Kao, District 1, Ho Chi Minh City."), external_react_default.a.createElement("p", null, "matt@workinsp8.co"), external_react_default.a.createElement("p", null, "(+84) 899 898 363 (Matt) ", external_react_default.a.createElement("br", null), "(+84) 938 945 800 (Ryan)"))), external_react_default.a.createElement("p", null, "\xA9 2019 SP8 by Establishment")));
};

/* harmony default export */ var components_Footer = (components_Footer_Footer);
// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Home/index.js










var Home_Home = function Home() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(Home_Banner, null), external_react_default.a.createElement(Home_Innovate, null), external_react_default.a.createElement(Home_Feature, null), external_react_default.a.createElement(Home_Amenity, null), external_react_default.a.createElement(Home_Workspace, null), external_react_default.a.createElement(Home_Book, null), external_react_default.a.createElement(components_Footer, null));
};

/* harmony default export */ var components_Home = (Home_Home);
// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/pages/home.js




var home_HomePage = function HomePage(_ref) {
  var language = _ref.language;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("title", null, language === 'ru' ? 'Russian' : 'SP8'), external_react_default.a.createElement("meta", {
    name: "description",
    content: "SP8"
  }), external_react_default.a.createElement("meta", {
    name: "author",
    content: "Quoine"
  }), external_react_default.a.createElement("meta", {
    name: "robots",
    content: "all"
  }), external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), external_react_default.a.createElement("meta", {
    property: "og:image:type",
    content: "image/png"
  }), external_react_default.a.createElement("meta", {
    property: "og:image:width",
    content: "600"
  }), external_react_default.a.createElement("meta", {
    property: "og:image:height",
    content: "315"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:site",
    content: "@QuoineGlobal"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@QuoineGlobal"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    charset: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  })), external_react_default.a.createElement(components_Home, null));
};

/* harmony default export */ var home = __webpack_exports__["default"] = (Object(external_react_static_["withRouteData"])(home_HomePage));

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(15);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/components/Router.js

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/App.scss
var App = __webpack_require__(48);

// CONCATENATED MODULE: C:/Users/Dell/Documents/Projects/static/sp8/src/App.js

 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App_App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement("div", {
    className: "app"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(router_["Router"], null, external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(13);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\Dell\\Documents\\Projects\\static\\sp8\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);












Object(C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/NotFound",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/NotFound */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "src/pages/NotFound";
  }
}), universalOptions);
t_0.template = '../src/pages/NotFound';
var t_1 = C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "src/pages/about";
  }
}), universalOptions);
t_1.template = '../src/pages/about';
var t_2 = C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/home.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/home */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/home.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "src/pages/home";
  }
}), universalOptions);
t_2.template = '../src/pages/home.js';
var t_3 = C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/home",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/home */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "src/pages/home";
  }
}), universalOptions);
t_3.template = '../src/pages/home';
var t_4 = C_Users_Dell_Documents_Projects_static_sp8_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/NotFound.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/NotFound */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/NotFound.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "src/pages/NotFound";
  }
}), universalOptions);
t_4.template = '../src/pages/NotFound.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/NotFound': t_0,
  '../src/pages/about': t_1,
  '../src/pages/home.js': t_2,
  '../src/pages/home': t_3,
  '../src/pages/NotFound.js': t_4 // Not Found Template

});
var notFoundTemplate = "../src/pages/NotFound";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(11);

var _router = __webpack_require__(15);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDU5IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTguNjc2IDI0Yy0yLjAwMiAwLTMuNjk4LS4zNTUtNS4wODktMS4wNjRBMTEuODA4IDExLjgwOCAwIDAgMSAwIDIwLjE0NGwyLjk3LTIuODU5Yy44LjkzMSAxLjY5NiAxLjY0IDIuNjg2IDIuMTI4Ljk5LjQ4NyAyLjA4Ni43MzEgMy4yODcuNzMxIDEuMzU4IDAgMi4zOC0uMjk0IDMuMDctLjg4LjY5LS41ODggMS4wMzUtMS4zOCAxLjAzNS0yLjM3OCAwLS43NzUtLjIyMi0xLjQwNy0uNjY3LTEuODk0LS40NDUtLjQ4OC0xLjI4LS44NDItMi41MDMtMS4wNjRsLTIuMjAzLS4zMzJDMy4wMjUgMTIuODY0LjcwMSAxMC42MTUuNzAxIDYuODQ4YzAtMS4wNDIuMTk0LTEuOTg0LjU4NC0yLjgyNmE2LjAxMiA2LjAxMiAwIDAgMSAxLjY4NS0yLjE2QzMuNzA0IDEuMjYyIDQuNTg5LjgwMiA1LjYyMy40ODEgNi42NTguMTYxIDcuODMxIDAgOS4xNDMgMGMxLjc1OCAwIDMuMjkzLjI4OCA0LjYwNi44NjRhOS4wMzcgOS4wMzcgMCAwIDEgMy4zNyAyLjU2bC0zLjAwMyAyLjgyNWE2LjkxIDYuOTEgMCAwIDAtMi4xMDItMS43MjhjLS44MjQtLjQ0My0xLjg1OC0uNjY1LTMuMTA0LS42NjUtMS4yNjggMC0yLjIyLjIzOC0yLjg1My43MTUtLjYzNC40NzYtLjk1MSAxLjE0Ni0uOTUxIDIuMDEgMCAuODg3LjI1NiAxLjU0Ljc2NyAxLjk2Mi41MTIuNDIxIDEuMzM1LjczMSAyLjQ3LjkzbDIuMTY5LjRjMi4zNTguNDIgNC4wOTkgMS4xNjkgNS4yMjIgMi4yNDMgMS4xMjQgMS4wNzUgMS42ODYgMi41NzcgMS42ODYgNC41MDQgMCAxLjEwOS0uMTk1IDIuMTExLS41ODQgMy4wMDlhNi41MDUgNi41MDUgMCAwIDEtMS43MDIgMi4zMjdjLS43NDYuNjUzLTEuNjU4IDEuMTU4LTIuNzM3IDEuNTEyLTEuMDc5LjM1NS0yLjMxOS41MzItMy43Mi41MzJ6bTEzLjE0OS0uMzk5Vi40aDEwLjQ3OGMxLjA2OCAwIDIuMDMuMTcyIDIuODg3LjUxNWE2LjExIDYuMTEgMCAwIDEgMi4xODYgMS40NjNjLjYuNjMxIDEuMDU2IDEuMzkgMS4zNjggMi4yNzcuMzExLjg4Ni40NjcgMS44NjEuNDY3IDIuOTI1IDAgMS4wODYtLjE1NiAyLjA2Ni0uNDY3IDIuOTQyYTYuMjk2IDYuMjk2IDAgMCAxLTEuMzY4IDIuMjYgNi4xMSA2LjExIDAgMCAxLTIuMTg2IDEuNDYzYy0uODU3LjM0My0xLjgxOS41MTUtMi44ODcuNTE1SDI2LjIzdjguODQyaC00LjQwNXpNMjYuMjMgMTAuOTdoNS42NzNjLjg0NSAwIDEuNTEzLS4yMjggMi4wMDItLjY4Mi40OS0uNDU0LjczNC0xLjEwMi43MzQtMS45NDVWNi44MTRjMC0uODQyLS4yNDUtMS40ODQtLjczNC0xLjkyOC0uNDktLjQ0My0xLjE1Ny0uNjY0LTIuMDAyLS42NjRIMjYuMjN2Ni43NDh6TTUwLjQ5IDI0Yy0xLjM1NyAwLTIuNTY0LS4xNzItMy42Mi0uNTE1LTEuMDU3LS4zNDQtMS45NDctLjgxNS0yLjY3LTEuNDEzYTUuOTk5IDUuOTk5IDAgMCAxLTEuNjUyLTIuMTI3Yy0uMzc4LS44Mi0uNTY3LTEuNzE4LS41NjctMi42OTMgMC0xLjUwNy40MTctMi43MzEgMS4yNTEtMy42NzMuODM0LS45NDIgMS45NTItMS42MDEgMy4zNTQtMS45Nzh2LS4yNjZjLTEuMTU3LS40Mi0yLjA5Ny0xLjA3NS0yLjgyLTEuOTYxLS43MjMtLjg4Ni0xLjA4NC0yLjAwNi0xLjA4NC0zLjM1NyAwLS44ODcuMTcyLTEuNjk2LjUxNy0yLjQyN2E1LjI5IDUuMjkgMCAwIDEgMS41MTgtMS44OTVjLjY2OC0uNTMyIDEuNDg1LS45NDcgMi40NTMtMS4yNDYuOTY4LS4zIDIuMDc1LS40NDkgMy4zMi0uNDQ5IDEuMjQ2IDAgMi4zNTMuMTUgMy4zMi40NDkuOTY5LjI5OSAxLjc4Ni43MTQgMi40NTQgMS4yNDZhNS4yOSA1LjI5IDAgMCAxIDEuNTE4IDEuODk1Yy4zNDUuNzMxLjUxNyAxLjU0LjUxNyAyLjQyNyAwIDEuMzUxLS4zNjEgMi40Ny0xLjA4NCAzLjM1Ny0uNzIzLjg4Ni0xLjY2MyAxLjU0LTIuODIgMS45NjF2LjI2NmMxLjQwMS4zNzcgMi41MiAxLjAzNiAzLjM1NCAxLjk3OC44MzQuOTQyIDEuMjUxIDIuMTY2IDEuMjUxIDMuNjczIDAgLjk3NS0uMTkgMS44NzMtLjU2NyAyLjY5M2E1Ljk5OSA1Ljk5OSAwIDAgMS0xLjY1MiAyLjEyN2MtLjcyMy41OTgtMS42MTMgMS4wNy0yLjY3IDEuNDEzLTEuMDU3LjM0My0yLjI2NC41MTUtMy42Mi41MTV6bTAtMy40MjRjMS4yNjggMCAyLjI0Mi0uMjg4IDIuOTItLjg2NC42NzktLjU3NiAxLjAxOC0xLjM4NSAxLjAxOC0yLjQyN3YtLjY5OGMwLTEuMDQxLS4zNC0xLjg1LTEuMDE4LTIuNDI2LS42NzgtLjU3Ny0xLjY1Mi0uODY1LTIuOTItLjg2NXMtMi4yNDEuMjg4LTIuOTIuODY1Yy0uNjc4LjU3Ni0xLjAxNyAxLjM4NS0xLjAxNyAyLjQyNnYuNjk4YzAgMS4wNDIuMzM5IDEuODUgMS4wMTcgMi40MjcuNjc5LjU3NiAxLjY1Mi44NjQgMi45Mi44NjR6bTAtMTAuNTM3YzEuMTggMCAyLjA4LS4yNjYgMi43MDMtLjc5OC42MjMtLjUzMi45MzUtMS4yODUuOTM1LTIuMjZ2LS41MzJjMC0uOTUzLS4zMTItMS42OTYtLjkzNS0yLjIyNy0uNjIyLS41MzItMS41MjMtLjc5OC0yLjcwMy0uNzk4LTEuMTc5IDAtMi4wOC4yNjYtMi43MDMuNzk4LS42MjMuNTMxLS45MzQgMS4yNzQtLjkzNCAyLjIyN3YuNTMyYzAgLjk3NS4zMTEgMS43MjguOTM0IDIuMjYuNjIzLjUzMiAxLjUyNC43OTggMi43MDMuNzk4eiIvPgo8L3N2Zz4K"

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(34);
module.exports = __webpack_require__(40);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(23)["default"];

var _require = __webpack_require__(24),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\Dell\\Documents\\Projects\\static\\sp8\\artifacts\\react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(23)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(24),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(25),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\Dell\\Documents\\Projects\\static\\sp8\\artifacts\\react-static-templates.js", function () {
    var _require3 = __webpack_require__(25),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

exports.default = requireUniversalModule;

var _utils = __webpack_require__(21);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 13,
	"./": 13,
	"./index": 13,
	"./index.js": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 36;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2.default)(_index2.default, mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(41);

var _interopRequireDefault = __webpack_require__(42);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(44));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(45);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(46)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\Dell\\Documents\\Projects\\static\\sp8\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);


 // Your top level component


 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth; }\n\nbody {\n  font-family: -apple-system ,BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", sans-serif;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  line-height: 1.5; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 600; }\n\na {\n  text-decoration: none;\n  color: #000;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer; }\n  a:hover {\n    opacity: 0.6; }\n\nimg {\n  max-width: 100%; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\np {\n  color: #656360; }\n", ""]);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _grid_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _grid_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grid_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reset_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "/*!\r\n * Bootstrap Grid v4.1.1 (https://getbootstrap.com/)\r\n * Copyright 2011-2018 The Bootstrap Authors\r\n * Copyright 2011-2018 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\n@-ms-viewport {\n  width: device-width; }\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px; } }\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px; } }\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1250px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n\n.no-gutters > .col,\n.no-gutters > [className*=\"col-\"] {\n  padding-right: 0;\n  padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%; }\n\n.col-2 {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%; }\n\n.col-3 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n\n.col-5 {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%; }\n\n.col-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%; }\n\n.col-8 {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%; }\n\n.col-9 {\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%; }\n\n.col-11 {\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%; }\n\n.col-12 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  -ms-flex-order: -1;\n  order: -1; }\n\n.order-last {\n  -ms-flex-order: 13;\n  order: 13; }\n\n.order-0 {\n  -ms-flex-order: 0;\n  order: 0; }\n\n.order-1 {\n  -ms-flex-order: 1;\n  order: 1; }\n\n.order-2 {\n  -ms-flex-order: 2;\n  order: 2; }\n\n.order-3 {\n  -ms-flex-order: 3;\n  order: 3; }\n\n.order-4 {\n  -ms-flex-order: 4;\n  order: 4; }\n\n.order-5 {\n  -ms-flex-order: 5;\n  order: 5; }\n\n.order-6 {\n  -ms-flex-order: 6;\n  order: 6; }\n\n.order-7 {\n  -ms-flex-order: 7;\n  order: 7; }\n\n.order-8 {\n  -ms-flex-order: 8;\n  order: 8; }\n\n.order-9 {\n  -ms-flex-order: 9;\n  order: 9; }\n\n.order-10 {\n  -ms-flex-order: 10;\n  order: 10; }\n\n.order-11 {\n  -ms-flex-order: 11;\n  order: 11; }\n\n.order-12 {\n  -ms-flex-order: 12;\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.333333%; }\n\n.offset-2 {\n  margin-left: 16.666667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.333333%; }\n\n.offset-5 {\n  margin-left: 41.666667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.333333%; }\n\n.offset-8 {\n  margin-left: 66.666667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.333333%; }\n\n.offset-11 {\n  margin-left: 91.666667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-sm-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-sm-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-sm-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-sm-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-sm-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-sm-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -ms-flex-order: -1;\n    order: -1; }\n  .order-sm-last {\n    -ms-flex-order: 13;\n    order: 13; }\n  .order-sm-0 {\n    -ms-flex-order: 0;\n    order: 0; }\n  .order-sm-1 {\n    -ms-flex-order: 1;\n    order: 1; }\n  .order-sm-2 {\n    -ms-flex-order: 2;\n    order: 2; }\n  .order-sm-3 {\n    -ms-flex-order: 3;\n    order: 3; }\n  .order-sm-4 {\n    -ms-flex-order: 4;\n    order: 4; }\n  .order-sm-5 {\n    -ms-flex-order: 5;\n    order: 5; }\n  .order-sm-6 {\n    -ms-flex-order: 6;\n    order: 6; }\n  .order-sm-7 {\n    -ms-flex-order: 7;\n    order: 7; }\n  .order-sm-8 {\n    -ms-flex-order: 8;\n    order: 8; }\n  .order-sm-9 {\n    -ms-flex-order: 9;\n    order: 9; }\n  .order-sm-10 {\n    -ms-flex-order: 10;\n    order: 10; }\n  .order-sm-11 {\n    -ms-flex-order: 11;\n    order: 11; }\n  .order-sm-12 {\n    -ms-flex-order: 12;\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.333333%; }\n  .offset-sm-2 {\n    margin-left: 16.666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.333333%; }\n  .offset-sm-5 {\n    margin-left: 41.666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.333333%; }\n  .offset-sm-8 {\n    margin-left: 66.666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.333333%; }\n  .offset-sm-11 {\n    margin-left: 91.666667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-md-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-md-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-md-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-md-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-md-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-md-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -ms-flex-order: -1;\n    order: -1; }\n  .order-md-last {\n    -ms-flex-order: 13;\n    order: 13; }\n  .order-md-0 {\n    -ms-flex-order: 0;\n    order: 0; }\n  .order-md-1 {\n    -ms-flex-order: 1;\n    order: 1; }\n  .order-md-2 {\n    -ms-flex-order: 2;\n    order: 2; }\n  .order-md-3 {\n    -ms-flex-order: 3;\n    order: 3; }\n  .order-md-4 {\n    -ms-flex-order: 4;\n    order: 4; }\n  .order-md-5 {\n    -ms-flex-order: 5;\n    order: 5; }\n  .order-md-6 {\n    -ms-flex-order: 6;\n    order: 6; }\n  .order-md-7 {\n    -ms-flex-order: 7;\n    order: 7; }\n  .order-md-8 {\n    -ms-flex-order: 8;\n    order: 8; }\n  .order-md-9 {\n    -ms-flex-order: 9;\n    order: 9; }\n  .order-md-10 {\n    -ms-flex-order: 10;\n    order: 10; }\n  .order-md-11 {\n    -ms-flex-order: 11;\n    order: 11; }\n  .order-md-12 {\n    -ms-flex-order: 12;\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.333333%; }\n  .offset-md-2 {\n    margin-left: 16.666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.333333%; }\n  .offset-md-5 {\n    margin-left: 41.666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.333333%; }\n  .offset-md-8 {\n    margin-left: 66.666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.333333%; }\n  .offset-md-11 {\n    margin-left: 91.666667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-lg-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-lg-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-lg-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-lg-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-lg-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-lg-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-lg-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -ms-flex-order: -1;\n    order: -1; }\n  .order-lg-last {\n    -ms-flex-order: 13;\n    order: 13; }\n  .order-lg-0 {\n    -ms-flex-order: 0;\n    order: 0; }\n  .order-lg-1 {\n    -ms-flex-order: 1;\n    order: 1; }\n  .order-lg-2 {\n    -ms-flex-order: 2;\n    order: 2; }\n  .order-lg-3 {\n    -ms-flex-order: 3;\n    order: 3; }\n  .order-lg-4 {\n    -ms-flex-order: 4;\n    order: 4; }\n  .order-lg-5 {\n    -ms-flex-order: 5;\n    order: 5; }\n  .order-lg-6 {\n    -ms-flex-order: 6;\n    order: 6; }\n  .order-lg-7 {\n    -ms-flex-order: 7;\n    order: 7; }\n  .order-lg-8 {\n    -ms-flex-order: 8;\n    order: 8; }\n  .order-lg-9 {\n    -ms-flex-order: 9;\n    order: 9; }\n  .order-lg-10 {\n    -ms-flex-order: 10;\n    order: 10; }\n  .order-lg-11 {\n    -ms-flex-order: 11;\n    order: 11; }\n  .order-lg-12 {\n    -ms-flex-order: 12;\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.333333%; }\n  .offset-lg-2 {\n    margin-left: 16.666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.333333%; }\n  .offset-lg-5 {\n    margin-left: 41.666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.333333%; }\n  .offset-lg-8 {\n    margin-left: 66.666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.333333%; }\n  .offset-lg-11 {\n    margin-left: 91.666667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%; }\n  .col-xl-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%; }\n  .col-xl-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%; }\n  .col-xl-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%; }\n  .col-xl-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%; }\n  .col-xl-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%; }\n  .col-xl-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%; }\n  .col-xl-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%; }\n  .col-xl-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -ms-flex-order: -1;\n    order: -1; }\n  .order-xl-last {\n    -ms-flex-order: 13;\n    order: 13; }\n  .order-xl-0 {\n    -ms-flex-order: 0;\n    order: 0; }\n  .order-xl-1 {\n    -ms-flex-order: 1;\n    order: 1; }\n  .order-xl-2 {\n    -ms-flex-order: 2;\n    order: 2; }\n  .order-xl-3 {\n    -ms-flex-order: 3;\n    order: 3; }\n  .order-xl-4 {\n    -ms-flex-order: 4;\n    order: 4; }\n  .order-xl-5 {\n    -ms-flex-order: 5;\n    order: 5; }\n  .order-xl-6 {\n    -ms-flex-order: 6;\n    order: 6; }\n  .order-xl-7 {\n    -ms-flex-order: 7;\n    order: 7; }\n  .order-xl-8 {\n    -ms-flex-order: 8;\n    order: 8; }\n  .order-xl-9 {\n    -ms-flex-order: 9;\n    order: 9; }\n  .order-xl-10 {\n    -ms-flex-order: 10;\n    order: 10; }\n  .order-xl-11 {\n    -ms-flex-order: 11;\n    order: 11; }\n  .order-xl-12 {\n    -ms-flex-order: 12;\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.333333%; }\n  .offset-xl-2 {\n    margin-left: 16.666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.333333%; }\n  .offset-xl-5 {\n    margin-left: 41.666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.333333%; }\n  .offset-xl-8 {\n    margin-left: 66.666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.333333%; }\n  .offset-xl-11 {\n    margin-left: 91.666667%; } }\n\n.flex-row {\n  -ms-flex-direction: row !important;\n  flex-direction: row !important; }\n\n.flex-column {\n  -ms-flex-direction: column !important;\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse !important;\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse !important;\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n  flex-wrap: wrap-reverse !important; }\n\n.flex-fill {\n  -ms-flex: 1 1 auto !important;\n  flex: 1 1 auto !important; }\n\n.flex-grow-0 {\n  -ms-flex-positive: 0 !important;\n  flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  -ms-flex-positive: 1 !important;\n  flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  -ms-flex-negative: 0 !important;\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  -ms-flex-negative: 1 !important;\n  flex-shrink: 1 !important; }\n\n.justify-content-start {\n  -ms-flex-pack: start !important;\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  -ms-flex-pack: end !important;\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  -ms-flex-pack: center !important;\n  justify-content: center !important; }\n\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n  justify-content: space-around !important; }\n\n.align-items-start {\n  -ms-flex-align: start !important;\n  align-items: flex-start !important; }\n\n.align-items-end {\n  -ms-flex-align: end !important;\n  align-items: flex-end !important; }\n\n.align-items-center {\n  -ms-flex-align: center !important;\n  align-items: center !important; }\n\n.align-items-baseline {\n  -ms-flex-align: baseline !important;\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  -ms-flex-align: stretch !important;\n  align-items: stretch !important; }\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n  align-content: flex-start !important; }\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n  align-content: flex-end !important; }\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n  align-content: center !important; }\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n  align-content: space-between !important; }\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n  align-content: stretch !important; }\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n  align-self: auto !important; }\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n  align-self: flex-start !important; }\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n  align-self: flex-end !important; }\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n  align-self: center !important; }\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n  align-self: stretch !important; }\n", ""]);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "html {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n\nh1, h2, h3, h4, h5, h6, figure, ol, ul {\n  margin: 0;\n  padding: 0; }\n\nmain, li {\n  display: block; }\n\nstrong, em, b, i {\n  font-weight: inherit;\n  font-style: inherit; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\nbutton, input, select, textarea {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  font: inherit;\n  background: none;\n  color: inherit;\n  padding: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  text-transform: inherit; }\n\ntextarea {\n  resize: none; }\n\nselect::-ms-expand {\n  display: none; }\n\n::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n:focus {\n  outline: 0; }\n\nimg {\n  max-width: 100%; }\n\nsvg {\n  fill: currentColor;\n  vertical-align: top; }\n\niframe {\n  display: block; }\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput[type=number] {\n  -moz-appearance: textfield; }\n\ninput::-ms-clear {\n  display: none; }\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none; }\n\ninput {\n  min-width: 0; }\n\nbutton {\n  cursor: pointer; }\n\nbutton:disabled {\n  cursor: default;\n  pointer-events: none; }\n\nhr {\n  border: none; }\n", ""]);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".book-tour {\n  max-width: 360px;\n  margin: auto;\n  margin-top: 120px;\n  margin-bottom: 120px; }\n  .book-tour h2 {\n    font-size: 36px;\n    text-align: center;\n    margin: 0; }\n  .book-tour p {\n    padding: 20px 0 40px 0;\n    text-align: center;\n    margin: 0; }\n  .book-tour input {\n    border-radius: 4px;\n    border: solid 1px #979797;\n    display: block;\n    width: 100%;\n    margin: 20px 0;\n    padding: 12px 16px; }\n  .book-tour .input-group {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: -20px; }\n    .book-tour .input-group input:first-child {\n      margin-right: 20px; }\n  .book-tour .submit {\n    border-radius: 4px;\n    background-color: #91683d;\n    color: #fff;\n    padding: 16px 0;\n    width: 100%;\n    margin-top: 20px; }\n", ""]);



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".modal {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  padding: 40px 60px;\n  overflow-y: scroll; }\n  .modal .close {\n    float: right; }\n  .modal .book-tour {\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto; }\n", ""]);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  padding-top: 32px;\n  padding-bottom: 32px; }\n  .header__logo {\n    font-size: 24px; }\n  .header__pricing {\n    margin: 0 28px; }\n  .header__book {\n    background-color: #91683d;\n    color: #fff;\n    padding: 12px 16px;\n    border-radius: 4px; }\n", ""]);



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".banner h1 {\n  font-size: 44px;\n  font-weight: 600; }\n\n.banner__book {\n  border-radius: 4px;\n  background-color: #91683d;\n  padding: 16px 32px;\n  color: #fff;\n  margin-right: 20px;\n  display: inline-block; }\n\n.banner__pricing {\n  color: #91683d;\n  border-bottom: 1px solid #91683d;\n  padding-bottom: 10px;\n  display: inline-block; }\n\n.banner p {\n  margin-top: 20px;\n  margin-bottom: 48px;\n  color: #656360;\n  font-size: 20px; }\n\n.banner .left {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  padding-right: 0; }\n\n.banner__img {\n  margin-top: 48px; }\n\n@media (min-width: 768px) {\n  .banner__img {\n    margin-top: 0; }\n  .banner__book {\n    margin-right: 48px; }\n  .banner .left {\n    padding-right: 100px; } }\n", ""]);



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".innovate {\n  margin-top: 120px;\n  margin-bottom: 120px; }\n  .innovate h2 {\n    font-size: 36px;\n    margin-top: 0; }\n  .innovate p {\n    color: #656360;\n    font-size: 18px; }\n", ""]);



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".features .item {\n  margin-bottom: 100px; }\n\n.features h2 {\n  font-size: 36px; }\n\n.features p {\n  max-width: 400px;\n  color: #656360; }\n\n.features a {\n  color: #91683d;\n  border-bottom: 1px solid #91683d;\n  padding-bottom: 10px;\n  margin-top: 20px;\n  display: inline-block; }\n\n.amenity-desc {\n  margin-bottom: 40px; }\n\n@media (min-width: 768px) {\n  .features .focus-desc,\n  .features .terms-desc {\n    padding-left: 100px; }\n  .amenity-desc {\n    margin-bottom: 0; } }\n", ""]);



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".amenity {\n  padding-bottom: 120px;\n  border-bottom: 1px solid #e6e5e5; }\n  .amenity h2 {\n    font-size: 36px; }\n  .amenity p {\n    margin: 20px 0 64px 0;\n    color: #656360; }\n  .amenity h3 {\n    font-size: 24px;\n    margin-top: 24px; }\n  .amenity ul {\n    padding-left: 20px;\n    margin-top: 12px;\n    color: #656360; }\n    .amenity ul li {\n      display: list-item; }\n  .amenity__space-img {\n    background-image: url(\"/assets/space.jpg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 240px; }\n  .amenity__services-img {\n    background-image: url(\"/assets/services.jpg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 240px; }\n  .amenity__perks-img {\n    background-image: url(\"/assets/perk.jpg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 240px; }\n  .amenity__desc {\n    margin-bottom: 40px; }\n\n@media (min-width: 768px) {\n  .amenity__desc {\n    margin-bottom: 0; } }\n", ""]);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gallery {\n  max-width: 1000px;\n  margin: auto; }\n  .gallery img {\n    margin: auto; }\n  .gallery .slider1 .slick-next:before, .gallery .slider1 .slick-prev:before {\n    font-size: 70px; }\n  .gallery .slider1 .slick-prev {\n    left: -50px; }\n  .gallery .slider1 .slick-next {\n    right: -50px; }\n  .gallery .slider2 .slick-slide {\n    opacity: 0.5; }\n  .gallery .slider2 .slick-current.slick-active {\n    opacity: 1; }\n  .gallery .slider2 .slick-next, .gallery .slider2 .slick-prev {\n    display: none !important; }\n\n.modal-gallery {\n  background-color: #000; }\n  .modal-gallery .close {\n    color: #fff; }\n", ""]);



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".workspace {\n  margin-top: 120px;\n  position: relative; }\n  .workspace h2,\n  .workspace p {\n    text-align: center; }\n  .workspace h2 {\n    font-size: 36px; }\n  .workspace p {\n    margin: 20px 0 64px 0;\n    color: #656360; }\n  .workspace .gallery {\n    display: -ms-flexbox;\n    display: flex; }\n  .workspace .left {\n    padding-right: 0; }\n  .workspace .right {\n    padding-left: 0; }\n  .workspace .right-1,\n  .workspace .right-2 {\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 50%; }\n  .workspace .right-1 {\n    background-image: url(\"/assets/terms.jpg\"); }\n  .workspace .right-2 {\n    background-image: url(\"/assets/amenities.jpg\"); }\n\n.view-photos {\n  position: absolute;\n  border-radius: 4px;\n  background-color: #fff;\n  color: #91683d;\n  right: 30px;\n  bottom: 12px;\n  padding: 12px 16px;\n  display: none; }\n\n.slider-mobile {\n  display: block;\n  padding: 0 50px;\n  background: #e3e1e2; }\n  .slider-mobile .slick-dots li button:before {\n    font-size: 12px;\n    cursor: pointer; }\n  .slider-mobile .slick-next:before, .slider-mobile .slick-prev:before {\n    display: none; }\n\n.gallery-overview {\n  display: none !important; }\n  .gallery-overview img {\n    height: 100%; }\n\n@media (min-width: 768px) {\n  .slider-mobile {\n    display: none; }\n  .gallery-overview {\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .view-photos {\n    display: inline-block; } }\n", ""]);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".footer {\n  background-color: #312f2d;\n  color: #fff;\n  padding: 80px 0; }\n  .footer p {\n    color: #fff; }\n  .footer h3 {\n    font-size: 20px; }\n\n@media (min-width: 768px) {\n  .footer .col-md-4 {\n    padding: 0 50px; }\n  .footer .col-md-4:first-child {\n    padding-left: 15px; } }\n", ""]);



/***/ })
/******/ ]);
});