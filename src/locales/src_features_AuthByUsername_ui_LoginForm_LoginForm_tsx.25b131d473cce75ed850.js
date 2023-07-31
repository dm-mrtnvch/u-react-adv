"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_features_AuthByUsername_ui_LoginForm_LoginForm_tsx"],{

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx":
/*!****************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _model_selectors_getLoginUsername_getLoginUsername__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/selectors/getLoginUsername/getLoginUsername */ "./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts");
/* harmony import */ var _model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/selectors/getLoginPassword/getLoginPassword */ "./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts");
/* harmony import */ var _model_selectors_getLoginIsLoading_getLoginIsLoading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/selectors/getLoginIsLoading/getLoginIsLoading */ "./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts");
/* harmony import */ var _model_selectors_getLoginError_getLoginError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/selectors/getLoginError/getLoginError */ "./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts");
/* harmony import */ var _model_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/services/loginByUsername/loginByUsername */ "./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts");
/* harmony import */ var _model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../model/slice/loginSlice */ "./src/features/AuthByUsername/model/slice/loginSlice.ts");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");
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
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

















var initialReducers = {
  loginForm: _model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_14__.loginReducer
};
var LoginForm = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(function (_a) {
  _s();
  var className = _a.className,
    onSuccess = _a.onSuccess;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)().t;
  var username = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_model_selectors_getLoginUsername_getLoginUsername__WEBPACK_IMPORTED_MODULE_9__.getLoginUsername);
  var password = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_10__.getLoginPassword);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_model_selectors_getLoginIsLoading_getLoginIsLoading__WEBPACK_IMPORTED_MODULE_11__.getLoginIsLoading);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_model_selectors_getLoginError_getLoginError__WEBPACK_IMPORTED_MODULE_12__.getLoginError);
  var onChangeUserName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_14__.loginActions.setUsername(value));
  }, [dispatch]);
  var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_14__.loginActions.setPassword(value));
  }, [dispatch]);
  var onLoginClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, dispatch((0,_model_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_13__.loginByUsername)({
              username: username,
              password: password
            }))];
          case 1:
            result = _a.sent();
            if (result.meta.requestStatus === 'fulfilled') {
              onSuccess();
            }
            return [2 /*return*/];
        }
      });
    });
  }, [dispatch, onSuccess, password, username]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__.DynamicModuleLoader, __assign({
    reducers: initialReducers,
    removeAfterUnmount: true
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].LoginForm, {}, [className])
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_8__.Text, {
        title: t('authorization form')
      }), error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_8__.Text, {
        text: t('incorrect login or password'),
        theme: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_8__.TextTheme.ERROR
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].input,
        placeholder: t('user name'),
        autoFocus: true,
        onChange: onChangeUserName,
        value: username
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].input,
        placeholder: t('password'),
        onChange: onChangePassword,
        value: password
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, __assign({
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonTheme.OUTLINE,
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].loginBtn,
        onClick: onLoginClick,
        disabled: isLoading
      }, {
        children: t('sing in')
      }))]
    }))
  }));
}, "jlSWSkCfY7Yedg2OW0vj0bK9+cI=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
})), "jlSWSkCfY7Yedg2OW0vj0bK9+cI=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});
// @ts-ignore
_c2 = LoginForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "LoginForm$memo");
__webpack_require__.$Refresh$.register(_c2, "LoginForm");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm--xYNEf {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n}\n\n.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__input--PQPa1 {\n  margin-top: 10px;\n}\n\n.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn--Ok_5a {\n  margin-top: 15px;\n  margin-left: auto;\n}", "",{"version":3,"sources":["webpack://./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;AACF","sourcesContent":[".LoginForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n}\r\n\r\n.input {\r\n  margin-top: 10px;\r\n}\r\n\r\n.loginBtn {\r\n  margin-top: 15px;\r\n  margin-left: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LoginForm": "src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm--xYNEf",
	"input": "src-features-AuthByUsername-ui-LoginForm-LoginForm-module__input--PQPa1",
	"loginBtn": "src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn--Ok_5a"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss":
/*!************************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts":
/*!************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginError": () => (/* binding */ getLoginError)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.error; };


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts":
/*!********************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginIsLoading": () => (/* binding */ getLoginIsLoading)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginIsLoading = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginPassword": () => (/* binding */ getLoginPassword)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginPassword = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.password) || ''; };


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginUsername": () => (/* binding */ getLoginUsername)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginUsername = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.username) || ''; };


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

/***/ "./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts":
/*!***************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginByUsername": () => (/* binding */ loginByUsername)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/const/localstorage */ "./src/shared/const/localstorage.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var loginByUsername = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)('login/loginByUsername', function (authData, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, dispatch, rejectWithValue, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, dispatch = thunkApi.dispatch, rejectWithValue = thunkApi.rejectWithValue;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.post('/login', authData)];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                localStorage.setItem(shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(entities_User__WEBPACK_IMPORTED_MODULE_0__.userActions.setAuthData(response.data));
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
                console.log('e', e_1);
                return [2 /*return*/, rejectWithValue('error')];
            case 4: return [2 /*return*/];
        }
    });
}); });


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

/***/ "./src/features/AuthByUsername/model/slice/loginSlice.ts":
/*!***************************************************************!*\
  !*** ./src/features/AuthByUsername/model/slice/loginSlice.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginActions": () => (/* binding */ loginActions),
/* harmony export */   "loginReducer": () => (/* binding */ loginReducer),
/* harmony export */   "loginSlice": () => (/* binding */ loginSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loginByUsername/loginByUsername */ "./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var initialState = {
    isLoading: false,
    username: '',
    password: '',
};
var loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUsername: function (state, action) {
            state.username = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.fulfilled, function (state, action) {
            state.isLoading = false;
        })
            .addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
// Action creators are generated for each case reducer function
var loginActions = loginSlice.actions;
var loginReducer = loginSlice.reducer;


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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX0F1dGhCeVVzZXJuYW1lX3VpX0xvZ2luRm9ybV9Mb2dpbkZvcm1fdHN4LjI1YjEzMWQ0NzNjY2U3NWVkODUwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7SUFDbkI7SUFDQSxPQUFPTixDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU9ILFFBQVEsQ0FBQ2EsS0FBSyxDQUFDLElBQUksRUFBRU4sU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFDRCxJQUFJTyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBUyxJQUFLLFVBQVVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyRixTQUFTQyxLQUFLQSxDQUFDQyxLQUFLLEVBQUU7SUFBRSxPQUFPQSxLQUFLLFlBQVlILENBQUMsR0FBR0csS0FBSyxHQUFHLElBQUlILENBQUMsQ0FBQyxVQUFVSSxPQUFPLEVBQUU7TUFBRUEsT0FBTyxD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDtBQUNSO0FBQ3NCO0FBQzNELHNCQUFzQixrRUFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0RUFBcUI7QUFDMUQseUJBQXlCLGtFQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFK0M7QUFDK0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGlCQUFpQiw2REFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEZBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnR0FBeUI7QUFDOUM7QUFDQTtBQUNBLHFCQUFxQiwrRkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNtQztBQUNuQywwQ0FBMEMsd0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS91aS9Mb2dpbkZvcm0vTG9naW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS91aS9Mb2dpbkZvcm0vTG9naW5Gb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL3VpL0xvZ2luRm9ybS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3M/OGQ5NiIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5FcnJvci9nZXRMb2dpbkVycm9yLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbklzTG9hZGluZy9nZXRMb2dpbklzTG9hZGluZy50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5QYXNzd29yZC9nZXRMb2dpblBhc3N3b3JkLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblVzZXJuYW1lL2dldExvZ2luVXNlcm5hbWUudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvbW9kZWwvc2VydmljZXMvbG9naW5CeVVzZXJuYW1lL2xvZ2luQnlVc2VybmFtZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zbGljZS9sb2dpblNsaWNlLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyIH0gZnJvbSAnc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcic7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25UaGVtZSB9IGZyb20gJ3NoYXJlZC91aS9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnc2hhcmVkL3VpL0lucHV0L0lucHV0JztcbmltcG9ydCB7IFRleHQsIFRleHRUaGVtZSB9IGZyb20gJ3NoYXJlZC91aS9UZXh0L1RleHQnO1xuaW1wb3J0IHsgZ2V0TG9naW5Vc2VybmFtZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblVzZXJuYW1lL2dldExvZ2luVXNlcm5hbWUnO1xuaW1wb3J0IHsgZ2V0TG9naW5QYXNzd29yZCB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblBhc3N3b3JkL2dldExvZ2luUGFzc3dvcmQnO1xuaW1wb3J0IHsgZ2V0TG9naW5Jc0xvYWRpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5Jc0xvYWRpbmcvZ2V0TG9naW5Jc0xvYWRpbmcnO1xuaW1wb3J0IHsgZ2V0TG9naW5FcnJvciB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbkVycm9yL2dldExvZ2luRXJyb3InO1xuaW1wb3J0IHsgbG9naW5CeVVzZXJuYW1lIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvbG9naW5CeVVzZXJuYW1lL2xvZ2luQnlVc2VybmFtZSc7XG5pbXBvcnQgeyBsb2dpbkFjdGlvbnMsIGxvZ2luUmVkdWNlciB9IGZyb20gJy4uLy4uL21vZGVsL3NsaWNlL2xvZ2luU2xpY2UnO1xuaW1wb3J0IGNscyBmcm9tICcuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzcyc7XG52YXIgaW5pdGlhbFJlZHVjZXJzID0ge1xuICAgIGxvZ2luRm9ybTogbG9naW5SZWR1Y2VyLFxufTtcbnZhciBMb2dpbkZvcm0gPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIG9uU3VjY2VzcyA9IF9hLm9uU3VjY2VzcztcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xuICAgIHZhciB1c2VybmFtZSA9IHVzZVNlbGVjdG9yKGdldExvZ2luVXNlcm5hbWUpO1xuICAgIHZhciBwYXNzd29yZCA9IHVzZVNlbGVjdG9yKGdldExvZ2luUGFzc3dvcmQpO1xuICAgIHZhciBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihnZXRMb2dpbklzTG9hZGluZyk7XG4gICAgdmFyIGVycm9yID0gdXNlU2VsZWN0b3IoZ2V0TG9naW5FcnJvcik7XG4gICAgdmFyIG9uQ2hhbmdlVXNlck5hbWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb25zLnNldFVzZXJuYW1lKHZhbHVlKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb25zLnNldFBhc3N3b3JkKHZhbHVlKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIG9uTG9naW5DbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGRpc3BhdGNoKGxvZ2luQnlVc2VybmFtZSh7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWV0YS5yZXF1ZXN0U3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSwgW2Rpc3BhdGNoLCBvblN1Y2Nlc3MsIHBhc3N3b3JkLCB1c2VybmFtZV0pO1xuICAgIHJldHVybiAoX2pzeChEeW5hbWljTW9kdWxlTG9hZGVyLCBfX2Fzc2lnbih7IHJlZHVjZXJzOiBpbml0aWFsUmVkdWNlcnMsIHJlbW92ZUFmdGVyVW5tb3VudDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuTG9naW5Gb3JtLCB7fSwgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtfanN4KFRleHQsIHsgdGl0bGU6IHQoJ2F1dGhvcml6YXRpb24gZm9ybScpIH0pLCBlcnJvciAmJiBfanN4KFRleHQsIHsgdGV4dDogdCgnaW5jb3JyZWN0IGxvZ2luIG9yIHBhc3N3b3JkJyksIHRoZW1lOiBUZXh0VGhlbWUuRVJST1IgfSksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaW5wdXQsIHBsYWNlaG9sZGVyOiB0KCd1c2VyIG5hbWUnKSwgYXV0b0ZvY3VzOiB0cnVlLCBvbkNoYW5nZTogb25DaGFuZ2VVc2VyTmFtZSwgdmFsdWU6IHVzZXJuYW1lIH0pLCBfanN4KElucHV0LCB7IGNsYXNzTmFtZTogY2xzLmlucHV0LCBwbGFjZWhvbGRlcjogdCgncGFzc3dvcmQnKSwgb25DaGFuZ2U6IG9uQ2hhbmdlUGFzc3dvcmQsIHZhbHVlOiBwYXNzd29yZCB9KSwgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdGhlbWU6IEJ1dHRvblRoZW1lLk9VVExJTkUsIGNsYXNzTmFtZTogY2xzLmxvZ2luQnRuLCBvbkNsaWNrOiBvbkxvZ2luQ2xpY2ssIGRpc2FibGVkOiBpc0xvYWRpbmcgfSwgeyBjaGlsZHJlbjogdCgnc2luZyBpbicpIH0pKV0gfSkpIH0pKSk7XG59KTtcbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcbiIsImltcG9ydCB7IEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5leHBvcnQgdmFyIER5bmFtaWNNb2R1bGVMb2FkZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiwgcmVkdWNlcnMgPSBwcm9wcy5yZWR1Y2VycywgX2EgPSBwcm9wcy5yZW1vdmVBZnRlclVubW91bnQsIHJlbW92ZUFmdGVyVW5tb3VudCA9IF9hID09PSB2b2lkIDAgPyB0cnVlIDogX2E7XG4gICAgdmFyIHN0b3JlID0gdXNlU3RvcmUoKTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb3VudGVkUmVkdWNlcnMgPSBzdG9yZS5yZWR1Y2VyTWFuYWdlci5nZXRNb3VudGVkUmVkdWNlcnMoKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCByZWR1Y2VyID0gX2FbMV07XG4gICAgICAgICAgICB2YXIgbW91bnRlZCA9IG1vdW50ZWRSZWR1Y2Vyc1tuYW1lXTtcbiAgICAgICAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnJlZHVjZXJNYW5hZ2VyLmFkZChuYW1lLCByZWR1Y2VyKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQElOSVQgXCIuY29uY2F0KG5hbWUsIFwiIHJlZHVjZXJcIikgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyVW5tb3VudCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCByZWR1Y2VyID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnJlZHVjZXJNYW5hZ2VyLnJlbW92ZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkBERVNUUk9ZIFwiLmNvbmNhdChuYW1lLCBcIiByZWR1Y2VyXCIpIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LW5vLXVzZWxlc3MtZnJhZ21lbnRcbiAgICBfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fTG9naW5Gb3JtLS14WU5FZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9faW5wdXQtLVBRUGExIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5zcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX2xvZ2luQnRuLS1Pa181YSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS91aS9Mb2dpbkZvcm0vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTG9naW5Gb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luQnRuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiTG9naW5Gb3JtXCI6IFwic3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19Mb2dpbkZvcm0tLXhZTkVmXCIsXG5cdFwiaW5wdXRcIjogXCJzcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX2lucHV0LS1QUVBhMVwiLFxuXHRcImxvZ2luQnRuXCI6IFwic3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19sb2dpbkJ0bi0tT2tfNWFcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCB2YXIgZ2V0TG9naW5FcnJvciA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUubG9naW5Gb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXJyb3I7IH07XG4iLCJleHBvcnQgdmFyIGdldExvZ2luSXNMb2FkaW5nID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuICgoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUubG9naW5Gb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNMb2FkaW5nKSB8fCBmYWxzZTsgfTtcbiIsImV4cG9ydCB2YXIgZ2V0TG9naW5QYXNzd29yZCA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoKF9hID0gc3RhdGUgPT09IG51bGwgfHwgc3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXRlLmxvZ2luRm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhc3N3b3JkKSB8fCAnJzsgfTtcbiIsImV4cG9ydCB2YXIgZ2V0TG9naW5Vc2VybmFtZSA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoKF9hID0gc3RhdGUgPT09IG51bGwgfHwgc3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXRlLmxvZ2luRm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVzZXJuYW1lKSB8fCAnJzsgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSAnZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBVU0VSX0xPQ0FMU1RPUkFHRV9LRVkgfSBmcm9tICdzaGFyZWQvY29uc3QvbG9jYWxzdG9yYWdlJztcbmV4cG9ydCB2YXIgbG9naW5CeVVzZXJuYW1lID0gY3JlYXRlQXN5bmNUaHVuaygnbG9naW4vbG9naW5CeVVzZXJuYW1lJywgZnVuY3Rpb24gKGF1dGhEYXRhLCB0aHVua0FwaSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0cmEsIGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUsIHJlc3BvbnNlLCBlXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXh0cmEgPSB0aHVua0FwaS5leHRyYSwgZGlzcGF0Y2ggPSB0aHVua0FwaS5kaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlID0gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlO1xuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGV4dHJhLmFwaS5wb3N0KCcvbG9naW4nLCBhdXRoRGF0YSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVVNFUl9MT0NBTFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0QXV0aERhdGEocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZS5kYXRhXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlXzEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZWplY3RXaXRoVmFsdWUoJ2Vycm9yJyldO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBsb2dpbkJ5VXNlcm5hbWUgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2dpbkJ5VXNlcm5hbWUvbG9naW5CeVVzZXJuYW1lJztcbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICB1c2VybmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxufTtcbmV4cG9ydCB2YXIgbG9naW5TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnbG9naW4nLFxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldFVzZXJuYW1lOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UGFzc3dvcmQ6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5wYXNzd29yZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2VyczogZnVuY3Rpb24gKGJ1aWxkZXIpIHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLnBlbmRpbmcsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLmZ1bGZpbGxlZCwgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLnJlamVjdGVkLCBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCB2YXIgbG9naW5BY3Rpb25zID0gbG9naW5TbGljZS5hY3Rpb25zO1xuZXhwb3J0IHZhciBsb2dpblJlZHVjZXIgPSBsb2dpblNsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmV4cG9ydCB2YXIgdXNlQXBwRGlzcGF0Y2ggPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VEaXNwYXRjaCgpOyB9O1xuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsInBvcCIsInB1c2giLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwibWVtbyIsInVzZUNhbGxiYWNrIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTZWxlY3RvciIsImNsYXNzTmFtZXMiLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwidXNlQXBwRGlzcGF0Y2giLCJCdXR0b24iLCJCdXR0b25UaGVtZSIsIklucHV0IiwiVGV4dCIsIlRleHRUaGVtZSIsImdldExvZ2luVXNlcm5hbWUiLCJnZXRMb2dpblBhc3N3b3JkIiwiZ2V0TG9naW5Jc0xvYWRpbmciLCJnZXRMb2dpbkVycm9yIiwibG9naW5CeVVzZXJuYW1lIiwibG9naW5BY3Rpb25zIiwibG9naW5SZWR1Y2VyIiwiY2xzIiwiaW5pdGlhbFJlZHVjZXJzIiwibG9naW5Gb3JtIiwiTG9naW5Gb3JtIiwiX3MiLCJfYyIsIl9hIiwiY2xhc3NOYW1lIiwib25TdWNjZXNzIiwiZGlzcGF0Y2giLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJvbkNoYW5nZVVzZXJOYW1lIiwic2V0VXNlcm5hbWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkxvZ2luQ2xpY2siLCJtZXRhIiwicmVxdWVzdFN0YXR1cyIsInJlZHVjZXJzIiwicmVtb3ZlQWZ0ZXJVbm1vdW50IiwiY2hpbGRyZW4iLCJ0aXRsZSIsInRleHQiLCJ0aGVtZSIsIkVSUk9SIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImF1dG9Gb2N1cyIsIm9uQ2hhbmdlIiwiT1VUTElORSIsImxvZ2luQnRuIiwib25DbGljayIsImRpc2FibGVkIiwiX2MyIiwiJFJlZnJlc2hSZWckIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVN0b3JlIiwicHJvcHMiLCJzdG9yZSIsIm1vdW50ZWRSZWR1Y2VycyIsInJlZHVjZXJNYW5hZ2VyIiwiZ2V0TW91bnRlZFJlZHVjZXJzIiwiZW50cmllcyIsImZvckVhY2giLCJuYW1lIiwicmVkdWNlciIsIm1vdW50ZWQiLCJhZGQiLCJ0eXBlIiwiY29uY2F0IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==