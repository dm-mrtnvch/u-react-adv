"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_shared_lib_components_DynamicModuleLoader_DynamicModuleLoader_tsx-src_widgets_Page_Page_t-aed94e"],{

/***/ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicModuleLoader": () => (/* binding */ DynamicModuleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();



var DynamicModuleLoader = function DynamicModuleLoader(props) {
  _s();
  var children = props.children,
    reducers = props.reducers,
    _a = props.removeAfterUnmount,
    removeAfterUnmount = _a === void 0 ? true : _a;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(function (_a) {
      var name = _a[0],
        reducer = _a[1];
      var mounted = mountedReducers[name];
      if (!mounted) {
        store.reducerManager.add(name, reducer);
        dispatch({
          type: "@INIT ".concat(name, " reducer")
        });
      }
    });
    return function () {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(function (_a) {
          var name = _a[0],
            reducer = _a[1];
          store.reducerManager.remove(name);
          dispatch({
            type: "@DESTROY ".concat(name, " reducer")
          });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: children
    })
  );
};
_s(DynamicModuleLoader, "as0TxbPzkR8qMmsNaB537Pq5S7M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});
_c = DynamicModuleLoader;
var _c;
__webpack_require__.$Refresh$.register(_c, "DynamicModuleLoader");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/ui/Stack/HStack/HStack.tsx":
/*!***********************************************!*\
  !*** ./src/shared/ui/Stack/HStack/HStack.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HStack": () => (/* binding */ HStack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Flex_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Flex/Flex */ "./src/shared/ui/Stack/Flex/Flex.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};


var HStack = function HStack(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex__WEBPACK_IMPORTED_MODULE_1__.Flex, __assign({
    direction: "row"
  }, props));
};
_c = HStack;
var _c;
__webpack_require__.$Refresh$.register(_c, "HStack");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/widgets/Page/Page.tsx":
/*!***********************************!*\
  !*** ./src/widgets/Page/Page.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGE_ID": () => (/* binding */ PAGE_ID),
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hooks/useInfiniteScroll/useInfiniteScroll */ "./src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var features_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! features/UI */ "./src/features/UI/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/lib/hooks/useThrottle/useThrottle */ "./src/shared/lib/hooks/useThrottle/useThrottle.ts");
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Page.module.scss */ "./src/widgets/Page/Page.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};











var PAGE_ID = 'PAGE_ID';
var Page = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c = _s(function (props) {
  _s();
  var className = props.className,
    children = props.children,
    onScrollEnd = props.onScrollEnd;
  var wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  var pathname = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)().pathname;
  var scrollPosition = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return (0,features_UI__WEBPACK_IMPORTED_MODULE_5__.getUIScrollByPath)(state, pathname);
  });
  (0,shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__.useInfiniteScroll)({
    triggerRef: triggerRef,
    wrapperRef: wrapperRef,
    callback: onScrollEnd
  });
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect)(function () {
    wrapperRef.current.scrollTop = scrollPosition;
  });
  var onScroll = (0,shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_8__.useThrottle)(function (e) {
    dispatch(features_UI__WEBPACK_IMPORTED_MODULE_5__.uiActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }));
  }, 500);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", __assign({
    ref: wrapperRef,
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Page_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].Page, {}, [className]),
    onScroll: onScroll,
    id: PAGE_ID
  }, {
    children: [children, onScrollEnd ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: _Page_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].trigger,
      ref: triggerRef
    }) : null]
  }));
}, "j7Iv05o+BXQWF1Dyngv/uIrXZpQ=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__.useInfiniteScroll, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect, shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_8__.useThrottle];
})), "j7Iv05o+BXQWF1Dyngv/uIrXZpQ=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__.useInfiniteScroll, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect, shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_8__.useThrottle];
});
_c2 = Page;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Page$memo");
__webpack_require__.$Refresh$.register(_c2, "Page");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-widgets-Page-Page-module__Page--a83jD {\n  flex-grow: 1;\n  padding: 20px 20px 45px;\n  height: calc(100vh - var(--navbar-height));\n  overflow-y: auto;\n  width: 100%;\n}\n\n.src-widgets-Page-Page-module__trigger--VaPQ_ {\n  height: 20px;\n  margin: 10px;\n}", "",{"version":3,"sources":["webpack://./src/widgets/Page/Page.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,uBAAA;EACA,0CAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;AACF","sourcesContent":[".Page {\r\n  flex-grow: 1;\r\n  padding: 20px 20px 45px;\r\n  height: calc(100vh - var(--navbar-height));\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n\r\n.trigger {\r\n  height: 20px;\r\n  margin: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Page": "src-widgets-Page-Page-module__Page--a83jD",
	"trigger": "src-widgets-Page-Page-module__trigger--VaPQ_"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/widgets/Page/Page.module.scss":
/*!*******************************************!*\
  !*** ./src/widgets/Page/Page.module.scss ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts":
/*!***************************************************************!*\
  !*** ./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var useAppDispatch = function () { return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInfiniteScroll": () => (/* binding */ useInfiniteScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useInfiniteScroll(_a) {
    var callback = _a.callback, wrapperRef = _a.wrapperRef, triggerRef = _a.triggerRef;
    var observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var wrapperElement = wrapperRef.current;
        var triggerElement = triggerRef.current;
        if (callback) {
            var options = {
                root: wrapperElement,
                rootMargin: '1px',
                threshold: 1.0,
            };
            observer.current = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.current.observe(triggerElement);
        }
        return function () {
            if (observer.current && triggerElement) {
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInitialEffect": () => (/* binding */ useInitialEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useInitialEffect(callback) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (true) {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/lib/hooks/useThrottle/useThrottle.ts":
/*!*********************************************************!*\
  !*** ./src/shared/lib/hooks/useThrottle/useThrottle.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useThrottle": () => (/* binding */ useThrottle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useThrottle(callback, delay) {
    var throttleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!throttleRef.current) {
            callback.apply(void 0, args);
            throttleRef.current = true;
            setTimeout(function () {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/ui/Stack/index.ts":
/*!**************************************!*\
  !*** ./src/shared/ui/Stack/index.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HStack": () => (/* reexport safe */ _HStack_HStack__WEBPACK_IMPORTED_MODULE_0__.HStack),
/* harmony export */   "VStack": () => (/* reexport safe */ _VStack_VStack__WEBPACK_IMPORTED_MODULE_1__.VStack)
/* harmony export */ });
/* harmony import */ var _HStack_HStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HStack/HStack */ "./src/shared/ui/Stack/HStack/HStack.tsx");
/* harmony import */ var _VStack_VStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VStack/VStack */ "./src/shared/ui/Stack/VStack/VStack.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NoYXJlZF9saWJfY29tcG9uZW50c19EeW5hbWljTW9kdWxlTG9hZGVyX0R5bmFtaWNNb2R1bGVMb2FkZXJfdHN4LXNyY193aWRnZXRzX1BhZ2VfUGFnZV90LWFlZDk0ZS40MjgwOTJmYjcwOTczZWFjNTgyMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDcEM7QUFDaUI7QUFDN0MsSUFBSU8sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBYUMsS0FBSyxFQUFFO0VBQUFDLEVBQUE7RUFDOUMsSUFBSUMsUUFBUSxHQUFHRixLQUFLLENBQUNFLFFBQVE7SUFBRUMsUUFBUSxHQUFHSCxLQUFLLENBQUNHLFFBQVE7SUFBRUMsRUFBRSxHQUFHSixLQUFLLENBQUNLLGtCQUFrQjtJQUFFQSxrQkFBa0IsR0FBR0QsRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EsRUFBRTtFQUN2SSxJQUFJRSxLQUFLLEdBQUdSLHFEQUFRLENBQUMsQ0FBQztFQUN0QixJQUFJUyxRQUFRLEdBQUdWLHdEQUFXLENBQUMsQ0FBQztFQUM1QkQsZ0RBQVMsQ0FBQyxZQUFZO0lBQ2xCLElBQUlZLGVBQWUsR0FBR0YsS0FBSyxDQUFDRyxjQUFjLENBQUNDLGtCQUFrQixDQUFDLENBQUM7SUFDL0RDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDVCxRQUFRLENBQUMsQ0FBQ1UsT0FBTyxDQUFDLFVBQVVULEVBQUUsRUFBRTtNQUMzQyxJQUFJVSxJQUFJLEdBQUdWLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFBRVcsT0FBTyxHQUFHWCxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQ2pDLElBQUlZLE9BQU8sR0FBR1IsZUFBZSxDQUFDTSxJQUFJLENBQUM7TUFDbkMsSUFBSSxDQUFDRSxPQUFPLEVBQUU7UUFDVlYsS0FBSyxDQUFDRyxjQUFjLENBQUNRLEdBQUcsQ0FBQ0gsSUFBSSxFQUFFQyxPQUFPLENBQUM7UUFDdkNSLFFBQVEsQ0FBQztVQUFFVyxJ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ5QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvc2hhcmVkL3VpL1N0YWNrL0hTdGFjay9IU3RhY2sudHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3dpZGdldHMvUGFnZS9QYWdlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy93aWRnZXRzL1BhZ2UvUGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy93aWRnZXRzL1BhZ2UvUGFnZS5tb2R1bGUuc2Nzcz8xMTM0Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvc2hhcmVkL2xpYi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC91c2VJbmZpbml0ZVNjcm9sbC50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvbGliL2hvb2tzL3VzZUluaXRpYWxFZmZlY3QvdXNlSW5pdGlhbEVmZmVjdC50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvbGliL2hvb2tzL3VzZVRocm90dGxlL3VzZVRocm90dGxlLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3NoYXJlZC91aS9TdGFjay9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuZXhwb3J0IHZhciBEeW5hbWljTW9kdWxlTG9hZGVyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIHJlZHVjZXJzID0gcHJvcHMucmVkdWNlcnMsIF9hID0gcHJvcHMucmVtb3ZlQWZ0ZXJVbm1vdW50LCByZW1vdmVBZnRlclVubW91bnQgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hO1xuICAgIHZhciBzdG9yZSA9IHVzZVN0b3JlKCk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbW91bnRlZFJlZHVjZXJzID0gc3RvcmUucmVkdWNlck1hbmFnZXIuZ2V0TW91bnRlZFJlZHVjZXJzKCk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgcmVkdWNlciA9IF9hWzFdO1xuICAgICAgICAgICAgdmFyIG1vdW50ZWQgPSBtb3VudGVkUmVkdWNlcnNbbmFtZV07XG4gICAgICAgICAgICBpZiAoIW1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5hZGQobmFtZSwgcmVkdWNlcik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkBJTklUIFwiLmNvbmNhdChuYW1lLCBcIiByZWR1Y2VyXCIpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlclVubW91bnQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgcmVkdWNlciA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5yZW1vdmUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJAREVTVFJPWSBcIi5jb25jYXQobmFtZSwgXCIgcmVkdWNlclwiKSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1uby11c2VsZXNzLWZyYWdtZW50XG4gICAgX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEZsZXggfSBmcm9tICcuLi9GbGV4L0ZsZXgnO1xuZXhwb3J0IHZhciBIU3RhY2sgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3goRmxleCwgX19hc3NpZ24oeyBkaXJlY3Rpb246IFwicm93XCIgfSwgcHJvcHMpKSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgbWVtbywgdXNlUmVmLCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUluZmluaXRlU2Nyb2xsIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC91c2VJbmZpbml0ZVNjcm9sbCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgZ2V0VUlTY3JvbGxCeVBhdGgsIHVpQWN0aW9ucyB9IGZyb20gJ2ZlYXR1cmVzL1VJJztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VJbml0aWFsRWZmZWN0IH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VJbml0aWFsRWZmZWN0L3VzZUluaXRpYWxFZmZlY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VUaHJvdHRsZSB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlVGhyb3R0bGUvdXNlVGhyb3R0bGUnO1xuaW1wb3J0IGNscyBmcm9tICcuL1BhZ2UubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBQQUdFX0lEID0gJ1BBR0VfSUQnO1xuZXhwb3J0IHZhciBQYWdlID0gbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLCBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCBvblNjcm9sbEVuZCA9IHByb3BzLm9uU2Nyb2xsRW5kO1xuICAgIHZhciB3cmFwcGVyUmVmID0gdXNlUmVmKCk7XG4gICAgdmFyIHRyaWdnZXJSZWYgPSB1c2VSZWYoKTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHZhciBwYXRobmFtZSA9IHVzZUxvY2F0aW9uKCkucGF0aG5hbWU7XG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gdXNlU2VsZWN0b3IoZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBnZXRVSVNjcm9sbEJ5UGF0aChzdGF0ZSwgcGF0aG5hbWUpOyB9KTtcbiAgICB1c2VJbmZpbml0ZVNjcm9sbCh7XG4gICAgICAgIHRyaWdnZXJSZWY6IHRyaWdnZXJSZWYsXG4gICAgICAgIHdyYXBwZXJSZWY6IHdyYXBwZXJSZWYsXG4gICAgICAgIGNhbGxiYWNrOiBvblNjcm9sbEVuZCxcbiAgICB9KTtcbiAgICB1c2VJbml0aWFsRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvc2l0aW9uO1xuICAgIH0pO1xuICAgIHZhciBvblNjcm9sbCA9IHVzZVRocm90dGxlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRpc3BhdGNoKHVpQWN0aW9ucy5zZXRTY3JvbGxQb3NpdGlvbih7XG4gICAgICAgICAgICBwb3NpdGlvbjogZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhuYW1lLFxuICAgICAgICB9KSk7XG4gICAgfSwgNTAwKTtcbiAgICByZXR1cm4gKF9qc3hzKFwibWFpblwiLCBfX2Fzc2lnbih7IHJlZjogd3JhcHBlclJlZiwgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5QYWdlLCB7fSwgW2NsYXNzTmFtZV0pLCBvblNjcm9sbDogb25TY3JvbGwsIGlkOiBQQUdFX0lEIH0sIHsgY2hpbGRyZW46IFtjaGlsZHJlbiwgb25TY3JvbGxFbmRcbiAgICAgICAgICAgICAgICA/IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy50cmlnZ2VyLCByZWY6IHRyaWdnZXJSZWYgfSlcbiAgICAgICAgICAgICAgICA6IG51bGxdIH0pKSk7XG59KTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy13aWRnZXRzLVBhZ2UtUGFnZS1tb2R1bGVfX1BhZ2UtLWE4M2pEIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCA0NXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2YmFyLWhlaWdodCkpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3JjLXdpZGdldHMtUGFnZS1QYWdlLW1vZHVsZV9fdHJpZ2dlci0tVmFQUV8ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2lkZ2V0cy9QYWdlL1BhZ2UubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuUGFnZSB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDIwcHggNDVweDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyaWdnZXIge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJQYWdlXCI6IFwic3JjLXdpZGdldHMtUGFnZS1QYWdlLW1vZHVsZV9fUGFnZS0tYTgzakRcIixcblx0XCJ0cmlnZ2VyXCI6IFwic3JjLXdpZGdldHMtUGFnZS1QYWdlLW1vZHVsZV9fdHJpZ2dlci0tVmFQUV9cIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuZXhwb3J0IHZhciB1c2VBcHBEaXNwYXRjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZURpc3BhdGNoKCk7IH07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVNjcm9sbChfYSkge1xuICAgIHZhciBjYWxsYmFjayA9IF9hLmNhbGxiYWNrLCB3cmFwcGVyUmVmID0gX2Eud3JhcHBlclJlZiwgdHJpZ2dlclJlZiA9IF9hLnRyaWdnZXJSZWY7XG4gICAgdmFyIG9ic2VydmVyID0gdXNlUmVmKG51bGwpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyRWxlbWVudCA9IHdyYXBwZXJSZWYuY3VycmVudDtcbiAgICAgICAgdmFyIHRyaWdnZXJFbGVtZW50ID0gdHJpZ2dlclJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHJvb3Q6IHdyYXBwZXJFbGVtZW50LFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46ICcxcHgnLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMS4wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9ic2VydmVyLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbMF07XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBvYnNlcnZlci5jdXJyZW50Lm9ic2VydmUodHJpZ2dlckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIuY3VycmVudCAmJiB0cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmN1cnJlbnQudW5vYnNlcnZlKHRyaWdnZXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbY2FsbGJhY2ssIHRyaWdnZXJSZWYsIHdyYXBwZXJSZWZdKTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbml0aWFsRWZmZWN0KGNhbGxiYWNrKSB7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9fUFJPSkVDVF9fICE9PSAnc3Rvcnlib29rJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9LCBbXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRocm90dGxlKGNhbGxiYWNrLCBkZWxheSkge1xuICAgIHZhciB0aHJvdHRsZVJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRocm90dGxlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgICAgICB0aHJvdHRsZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm90dGxlUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH0sIFtjYWxsYmFjaywgZGVsYXldKTtcbn1cbiIsImV4cG9ydCB7IEhTdGFjayB9IGZyb20gJy4vSFN0YWNrL0hTdGFjayc7XG5leHBvcnQgeyBWU3RhY2sgfSBmcm9tICcuL1ZTdGFjay9WU3RhY2snO1xuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwianN4IiwiX2pzeCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU3RvcmUiLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwicHJvcHMiLCJfcyIsImNoaWxkcmVuIiwicmVkdWNlcnMiLCJfYSIsInJlbW92ZUFmdGVyVW5tb3VudCIsInN0b3JlIiwiZGlzcGF0Y2giLCJtb3VudGVkUmVkdWNlcnMiLCJyZWR1Y2VyTWFuYWdlciIsImdldE1vdW50ZWRSZWR1Y2VycyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwibmFtZSIsInJlZHVjZXIiLCJtb3VudGVkIiwiYWRkIiwidHlwZSIsImNvbmNhdCIsInJlbW92ZSIsIl9jIiwiJFJlZnJlc2hSZWckIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiRmxleCIsIkhTdGFjayIsImRpcmVjdGlvbiIsImpzeHMiLCJfanN4cyIsImNsYXNzTmFtZXMiLCJtZW1vIiwidXNlUmVmIiwidXNlSW5maW5pdGVTY3JvbGwiLCJ1c2VBcHBEaXNwYXRjaCIsImdldFVJU2Nyb2xsQnlQYXRoIiwidWlBY3Rpb25zIiwidXNlTG9jYXRpb24iLCJ1c2VJbml0aWFsRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VUaHJvdHRsZSIsImNscyIsIlBBR0VfSUQiLCJQYWdlIiwiY2xhc3NOYW1lIiwib25TY3JvbGxFbmQiLCJ3cmFwcGVyUmVmIiwidHJpZ2dlclJlZiIsInBhdGhuYW1lIiwic2Nyb2xsUG9zaXRpb24iLCJzdGF0ZSIsImNhbGxiYWNrIiwiY3VycmVudCIsInNjcm9sbFRvcCIsIm9uU2Nyb2xsIiwiZSIsInNldFNjcm9sbFBvc2l0aW9uIiwicG9zaXRpb24iLCJjdXJyZW50VGFyZ2V0IiwicGF0aCIsInJlZiIsImlkIiwidHJpZ2dlciIsIl9jMiJdLCJzb3VyY2VSb290IjoiIn0=