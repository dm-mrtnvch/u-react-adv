"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_features_addCommentForm_ui_AddCommentForm_AddCommentForm_tsx"],{

/***/ "./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts":
/*!********************************************************************************!*\
  !*** ./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAddCommentFormError": function() { return /* binding */ getAddCommentFormError; },
/* harmony export */   "getAddCommentFormText": function() { return /* binding */ getAddCommentFormText; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const getAddCommentFormText = state => state.addCommentForm?.text ?? '';
const getAddCommentFormError = state => state.addCommentForm?.error;

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
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

/***/ "./src/features/addCommentForm/model/slice/addCommentFormSlice.ts":
/*!************************************************************************!*\
  !*** ./src/features/addCommentForm/model/slice/addCommentFormSlice.ts ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCommentFormActions": function() { return /* binding */ addCommentFormActions; },
/* harmony export */   "addCommentFormReducer": function() { return /* binding */ addCommentFormReducer; },
/* harmony export */   "addCommentFormSlice": function() { return /* binding */ addCommentFormSlice; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const initialState = {
  text: '',
  error: ''
};
const addCommentFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
  // extraReducers: () => {
  //
  // }
});

const {
  actions: addCommentFormActions
} = addCommentFormSlice;
const {
  reducer: addCommentFormReducer
} = addCommentFormSlice;

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
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

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx":
/*!**************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var _model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/selectors/addCommentFormSelectors */ "./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts");
/* harmony import */ var _model_slice_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/slice/addCommentFormSlice */ "./src/features/addCommentForm/model/slice/addCommentFormSlice.ts");
/* harmony import */ var _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddCommentForm.module.scss */ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();














const reducers = {
  addCommentForm: _model_slice_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_9__.addCommentFormReducer
};
const AddCommentForm = props => {
  _s();
  const {
    className,
    onSendComment
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)();
  const dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  const text = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_8__.getAddCommentFormText);
  const onCommentTextChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    dispatch(_model_slice_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_9__.addCommentFormActions.setText(value));
  }, [dispatch]);
  const onSendHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_3__.DynamicModuleLoader, {
    reducers: reducers,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_7__.HStack, {
      justify: "between",
      max: true,
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].AddCommentForm, {}, [className]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {
        className: _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].input,
        placeholder: t('type-comment'),
        value: text,
        onChange: onCommentTextChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__.ButtonTheme.OUTLINE,
        onClick: onSendHandler,
        children: t('send')
      })]
    })
  });
};
_s(AddCommentForm, "skDPtGuA4Yxy2Sixr3eIUb9Am00=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
});
_c = AddCommentForm;
/* harmony default export */ __webpack_exports__["default"] = (AddCommentForm);
var _c;
__webpack_require__.$Refresh$.register(_c, "AddCommentForm");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
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

/***/ "./src/shared/ui/Input/Input.tsx":
/*!***************************************!*\
  !*** ./src/shared/ui/Input/Input.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": function() { return /* binding */ Input; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.module.scss */ "./src/shared/ui/Input/Input.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





const Input = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {
  _s();
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [caretPosition, setCaretPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isCaretVisible = isFocused && !readonly;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus]);
  const onChangeHandler = e => {
    onChange?.(e.target.value);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const onSelect = e => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };
  const mods = {
    [_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].readonly]: readonly
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].InputWrapper, {}, [className]),
    children: [placeholder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].placeholder,
      children: `${placeholder}>`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].caretWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
        ref: ref,
        type: type,
        value: value,
        onChange: onChangeHandler,
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
        onFocus: onFocus,
        onBlur: onBlur,
        onSelect: onSelect,
        readOnly: readonly,
        ...otherProps
      }), isCaretVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].caret,
        style: {
          left: `${caretPosition * 9}px`
        }
      })]
    })]
  });
}, "q0J5AdyKT7Yj5u15Hx0jH58lNxc=")), "q0J5AdyKT7Yj5u15Hx0jH58lNxc=");
_c2 = Input;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Input$memo");
__webpack_require__.$Refresh$.register(_c2, "Input");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe {\n  border: 1px solid var(--primary-color);\n  padding: 20px;\n}\n\n.src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk {\n  flex-grow: 1;\n}", "",{"version":3,"sources":["webpack://./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"],"names":[],"mappings":"AAAA;EACE,sCAAA;EACA,aAAA;AACF;;AAEA;EACE,YAAA;AACF","sourcesContent":[".AddCommentForm {\r\n  border: 1px solid var(--primary-color);\r\n  padding: 20px;\r\n}\r\n\r\n.input {\r\n  flex-grow: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AddCommentForm": "src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe",
	"input": "src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss ***!
  \********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Input-Input-module__InputWrapper--LuFDU {\n  display: flex;\n}\n\n.src-shared-ui-Input-Input-module__placeholder--emAQQ {\n  margin-right: 5px;\n}\n\n.src-shared-ui-Input-Input-module__input--LVdIP {\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100px;\n  color: transparent;\n  text-shadow: 0 0 0 var(--primary-color);\n}\n.src-shared-ui-Input-Input-module__input--LVdIP:focus {\n  outline: none;\n}\n\n.src-shared-ui-Input-Input-module__caretWrapper--y1GiF {\n  position: relative;\n  flex-grow: 1;\n}\n\n.src-shared-ui-Input-Input-module__caret--lqMFG {\n  position: absolute;\n  height: 3px;\n  width: 9px;\n  background: var(--primary-color);\n  bottom: 0;\n  left: 0;\n  animation: src-shared-ui-Input-Input-module__blink--M7n8f 0.7s forwards infinite;\n}\n\n.src-shared-ui-Input-Input-module__readonly--fTN1P {\n  opacity: 0.7;\n}\n\n@keyframes src-shared-ui-Input-Input-module__blink--M7n8f {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.01;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/shared/ui/Input/Input.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,uBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;AACF;AACE;EACE,aAAA;AACJ;;AAGA;EACE,kBAAA;EACA,YAAA;AAAF;;AAGA;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,SAAA;EACA,OAAA;EACA,gFAAA;AAAF;;AAGA;EACE,YAAA;AAAF;;AAGA;EACE;IACE,UAAA;EAAF;EAGA;IACE,aAAA;EADF;EAIA;IACE,UAAA;EAFF;AACF","sourcesContent":[".InputWrapper {\r\n  display: flex;\r\n}\r\n\r\n.placeholder {\r\n  margin-right: 5px;\r\n}\r\n\r\n.input {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  width: 100px;\r\n  color: transparent;\r\n  text-shadow: 0 0 0 var(--primary-color);\r\n\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n.caretWrapper {\r\n  position: relative;\r\n  flex-grow: 1;\r\n}\r\n\r\n.caret {\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 9px;\r\n  background: var(--primary-color);\r\n  bottom: 0;\r\n  left: 0;\r\n  animation: blink 0.7s forwards infinite;\r\n}\r\n\r\n.readonly {\r\n  opacity: 0.7;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.01;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"InputWrapper": "src-shared-ui-Input-Input-module__InputWrapper--LuFDU",
	"placeholder": "src-shared-ui-Input-Input-module__placeholder--emAQQ",
	"input": "src-shared-ui-Input-Input-module__input--LVdIP",
	"caretWrapper": "src-shared-ui-Input-Input-module__caretWrapper--y1GiF",
	"caret": "src-shared-ui-Input-Input-module__caret--lqMFG",
	"blink": "src-shared-ui-Input-Input-module__blink--M7n8f",
	"readonly": "src-shared-ui-Input-Input-module__readonly--fTN1P"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!**********************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Input/Input.module.scss":
/*!***********************************************!*\
  !*** ./src/shared/ui/Input/Input.module.scss ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX2FkZENvbW1lbnRGb3JtX3VpX0FkZENvbW1lbnRGb3JtX0FkZENvbW1lbnRGb3JtX3RzeC5lZTZhN2M4ZTU5N2YxNjUzMzczMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxNQUFNQSxxQkFBcUIsR0FBSUMsS0FBa0IsSUFBS0EsS0FBSyxDQUFDQyxjQUFjLEVBQUVDLElBQUksSUFBSSxFQUFFO0FBQ3RGLE1BQU1DLHNCQUFzQixHQUFJSCxLQUFrQixJQUFLQSxLQUFLLENBQUNDLGNBQWMsRUFBRUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g1QjtBQUc3RCxNQUFNRSxZQUFrQyxHQUFHO0VBQ3pDSixJQUFJLEVBQUUsRUFBRTtFQUNSRSxLQUFLLEVBQUU7QUFDVCxDQUFDO0FBRU0sTUFBTUcsbUJBQW1CLEdBQUdGLDZEQUFXLENBQUM7RUFDN0NHLElBQUksRUFBRSxnQkFBZ0I7RUFDdEJGLFlBQVk7RUFDWkcsUUFBUSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUEsQ0FBQ1YsS0FBSyxFQUFFVyxNQUE2QixLQUFLO01BQ2pEWCxLQUFLLENBQUNFLElBQUksR0FBR1MsTUFBTSxDQUFDQyxPQUFPO0lBQzdCO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7QUFDRixDQUFDLENBQUM7O0FBRUssTUFBTTtFQUFFQyxPQUFPLEVBQUVDO0FBQXNCLENBQUMsR0FBR1AsbUJBQW1CO0FBQzlELE1BQU07RUFBRVEsT0FBTyxFQUFFQztBQUFzQixDQUFDLEdBQUdULG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCbEM7QUFDVztBQUNMO0FBQ29CO0FBQ29EO0FBQ2xDO0FBQ2xCO0FBQ2hCO0FBQ0w7QUFDNkM7QUFDZTtBQUN0RDtBQUFBO0FBQUE7QUFPOUMsTUFBTUUsUUFBc0IsR0FBRztFQUM3QlIsY0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtLQUFjO0FBQ3ZDLG9DQUFvQyxnSkFBVyxHQUFHLGtLQUFjOztBQUVoRSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDRTQUFvSjtBQUMxSixNQUFNO0FBQUE7QUFDTixzREFBc0QsZ0pBQVcsR0FBRyxrS0FBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsZ0pBQVcsR0FBRyxrS0FBYzs7QUFFdEUscUJBQXFCLDJKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHbUs7QUFDbkssT0FBTywrREFBZSwySkFBTyxJQUFJLGtLQUFjLEdBQUcsa0tBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vbW9kZWwvc2VsZWN0b3JzL2FkZENvbW1lbnRGb3JtU2VsZWN0b3JzLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL21vZGVsL3NsaWNlL2FkZENvbW1lbnRGb3JtU2xpY2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0udHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzPzZiY2UiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzPzRlMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVTY2hlbWEgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWRkQ29tbWVudEZvcm1UZXh0ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYWRkQ29tbWVudEZvcm0/LnRleHQgPz8gJydcclxuZXhwb3J0IGNvbnN0IGdldEFkZENvbW1lbnRGb3JtRXJyb3IgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZS5hZGRDb21tZW50Rm9ybT8uZXJyb3JcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBBZGRDb21tZW50Rm9ybVNjaGVtYSB9IGZyb20gJy4uL3R5cGVzL2FkZENvbW1lbnRGb3JtJ1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBBZGRDb21tZW50Rm9ybVNjaGVtYSA9IHtcclxuICB0ZXh0OiAnJyxcclxuICBlcnJvcjogJycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50Rm9ybVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdhZGRDb21tZW50Rm9ybScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRUZXh0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnRleHQgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIGV4dHJhUmVkdWNlcnM6ICgpID0+IHtcclxuICAvL1xyXG4gIC8vIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnM6IGFkZENvbW1lbnRGb3JtQWN0aW9ucyB9ID0gYWRkQ29tbWVudEZvcm1TbGljZVxyXG5leHBvcnQgY29uc3QgeyByZWR1Y2VyOiBhZGRDb21tZW50Rm9ybVJlZHVjZXIgfSA9IGFkZENvbW1lbnRGb3JtU2xpY2VcclxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIsIFJlZHVjZXJzTGlzdCB9IGZyb20gJ3NoYXJlZC9saWIvY29tcG9uZW50cy9EeW5hbWljTW9kdWxlTG9hZGVyL0R5bmFtaWNNb2R1bGVMb2FkZXInXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VBcHBEaXNwYXRjaC91c2VBcHBEaXNwYXRjaCdcclxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25UaGVtZSB9IGZyb20gJ3NoYXJlZC91aS9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ3NoYXJlZC91aS9JbnB1dC9JbnB1dCdcclxuaW1wb3J0IHsgSFN0YWNrIH0gZnJvbSAnc2hhcmVkL3VpL1N0YWNrJ1xyXG5pbXBvcnQgeyBnZXRBZGRDb21tZW50Rm9ybVRleHQgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWxlY3RvcnMvYWRkQ29tbWVudEZvcm1TZWxlY3RvcnMnXHJcbmltcG9ydCB7IGFkZENvbW1lbnRGb3JtQWN0aW9ucywgYWRkQ29tbWVudEZvcm1SZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2UvYWRkQ29tbWVudEZvcm1TbGljZSdcclxuaW1wb3J0IGNscyBmcm9tICcuL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRDb21tZW50Rm9ybVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBvblNlbmRDb21tZW50OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJzOiBSZWR1Y2Vyc0xpc3QgPSB7XHJcbiAgYWRkQ29tbWVudEZvcm06IGFkZENvbW1lbnRGb3JtUmVkdWNlcixcclxufVxyXG5cclxuY29uc3QgQWRkQ29tbWVudEZvcm0gPSAocHJvcHM6IEFkZENvbW1lbnRGb3JtUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgb25TZW5kQ29tbWVudCB9ID0gcHJvcHNcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICBjb25zdCB0ZXh0ID0gdXNlU2VsZWN0b3IoZ2V0QWRkQ29tbWVudEZvcm1UZXh0KVxyXG5cclxuICBjb25zdCBvbkNvbW1lbnRUZXh0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZENvbW1lbnRGb3JtQWN0aW9ucy5zZXRUZXh0KHZhbHVlKSlcclxuICB9LCBbZGlzcGF0Y2hdKVxyXG5cclxuICBjb25zdCBvblNlbmRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgb25TZW5kQ29tbWVudCh0ZXh0IHx8ICcnKVxyXG4gICAgb25Db21tZW50VGV4dENoYW5nZSgnJylcclxuICB9LCBbb25Db21tZW50VGV4dENoYW5nZSwgb25TZW5kQ29tbWVudCwgdGV4dF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHluYW1pY01vZHVsZUxvYWRlciByZWR1Y2Vycz17cmVkdWNlcnN9PlxyXG4gICAgICA8SFN0YWNrXHJcbiAgICAgICAganVzdGlmeT1cImJldHdlZW5cIlxyXG4gICAgICAgIG1heFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuQWRkQ29tbWVudEZvcm0sIHt9LCBbY2xhc3NOYW1lXSl9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzLmlucHV0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3R5cGUtY29tbWVudCcpfVxyXG4gICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25Db21tZW50VGV4dENoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHRoZW1lPXtCdXR0b25UaGVtZS5PVVRMSU5FfVxyXG4gICAgICAgICAgb25DbGljaz17b25TZW5kSGFuZGxlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dCgnc2VuZCcpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0hTdGFjaz5cclxuXHJcbiAgICA8L0R5bmFtaWNNb2R1bGVMb2FkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRDb21tZW50Rm9ybVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgSW5wdXRIVE1MQXR0cmlidXRlcywgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNsYXNzTmFtZXMsIE1vZHMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcbmltcG9ydCBjbHMgZnJvbSAnLi9JbnB1dC5tb2R1bGUuc2NzcydcblxudHlwZSBIVE1MSW5wdXRQcm9wcyA9IE9taXQ8SW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiwgJ3ZhbHVlJyB8ICdvbkNoYW5nZScgfCAncmVhZE9ubHknPlxuXG5pbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEhUTUxJbnB1dFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgYXV0b0ZvY3VzPzogYm9vbGVhblxuICByZWFkb25seT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IElucHV0ID0gbWVtbygocHJvcHM6IElucHV0UHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgICB0eXBlID0gJ3RleHQnLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGF1dG9Gb2N1cyxcbiAgICByZWFkb25seSxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhcmV0UG9zaXRpb24sIHNldENhcmV0UG9zaXRpb25dID0gdXNlU3RhdGUoMClcblxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgY29uc3QgaXNDYXJldFZpc2libGUgPSBpc0ZvY3VzZWQgJiYgIXJlYWRvbmx5XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICBzZXRJc0ZvY3VzZWQodHJ1ZSlcbiAgICAgIHJlZj8uY3VycmVudD8uZm9jdXMoKVxuICAgIH1cbiAgfSwgW2F1dG9Gb2N1c10pXG5cbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgb25DaGFuZ2U/LihlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpXG4gIH1cblxuICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZCh0cnVlKVxuICB9XG5cbiAgY29uc3Qgb25TZWxlY3QgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q2FyZXRQb3NpdGlvbihlPy50YXJnZXQ/LnNlbGVjdGlvblN0YXJ0IHx8IDApXG4gIH1cblxuICBjb25zdCBtb2RzOiBNb2RzID0ge1xuICAgIFtjbHMucmVhZG9ubHldOiByZWFkb25seSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLklucHV0V3JhcHBlciwge30sIFtjbGFzc05hbWVdKX0+XG4gICAgICB7cGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLnBsYWNlaG9sZGVyfT5cbiAgICAgICAgICB7IGAke3BsYWNlaG9sZGVyfT5gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLmNhcmV0V3JhcHBlcn0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHMuaW5wdXR9XG4gICAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgICB7aXNDYXJldFZpc2libGUgJiYgKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nscy5jYXJldH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke2NhcmV0UG9zaXRpb24gKiA5fXB4YCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1mZWF0dXJlcy1hZGRDb21tZW50Rm9ybS11aS1BZGRDb21tZW50Rm9ybS1BZGRDb21tZW50Rm9ybS1tb2R1bGVfX0FkZENvbW1lbnRGb3JtLS1acmZvZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zcmMtZmVhdHVyZXMtYWRkQ29tbWVudEZvcm0tdWktQWRkQ29tbWVudEZvcm0tQWRkQ29tbWVudEZvcm0tbW9kdWxlX19pbnB1dC0tZ3hSQWsge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQWRkQ29tbWVudEZvcm0ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJBZGRDb21tZW50Rm9ybVwiOiBcInNyYy1mZWF0dXJlcy1hZGRDb21tZW50Rm9ybS11aS1BZGRDb21tZW50Rm9ybS1BZGRDb21tZW50Rm9ybS1tb2R1bGVfX0FkZENvbW1lbnRGb3JtLS1acmZvZVwiLFxuXHRcImlucHV0XCI6IFwic3JjLWZlYXR1cmVzLWFkZENvbW1lbnRGb3JtLXVpLUFkZENvbW1lbnRGb3JtLUFkZENvbW1lbnRGb3JtLW1vZHVsZV9faW5wdXQtLWd4UkFrXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19JbnB1dFdyYXBwZXItLUx1RkRVIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcGxhY2Vob2xkZXItLWVtQVFRIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0LS1MVmRJUCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogMTAwcHg7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXRXcmFwcGVyLS15MUdpRiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXQtLWxxTUZHIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDlweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGFuaW1hdGlvbjogc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZiAwLjdzIGZvcndhcmRzIGluZmluaXRlO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3JlYWRvbmx5LS1mVE4xUCB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbkBrZXlmcmFtZXMgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnRkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0VBQUY7RUFHQTtJQUNFLGFBQUE7RUFERjtFQUlBO0lBQ0UsVUFBQTtFQUZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLklucHV0V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Vob2xkZXIge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAwIDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmV0V3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJldCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIHdpZHRoOiA5cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBhbmltYXRpb246IGJsaW5rIDAuN3MgZm9yd2FyZHMgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5yZWFkb25seSB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmsge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC4wMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJJbnB1dFdyYXBwZXJcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXRXcmFwcGVyLS1MdUZEVVwiLFxuXHRcInBsYWNlaG9sZGVyXCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3BsYWNlaG9sZGVyLS1lbUFRUVwiLFxuXHRcImlucHV0XCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0LS1MVmRJUFwiLFxuXHRcImNhcmV0V3JhcHBlclwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19jYXJldFdyYXBwZXItLXkxR2lGXCIsXG5cdFwiY2FyZXRcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXQtLWxxTUZHXCIsXG5cdFwiYmxpbmtcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fYmxpbmstLU03bjhmXCIsXG5cdFwicmVhZG9ubHlcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbImdldEFkZENvbW1lbnRGb3JtVGV4dCIsInN0YXRlIiwiYWRkQ29tbWVudEZvcm0iLCJ0ZXh0IiwiZ2V0QWRkQ29tbWVudEZvcm1FcnJvciIsImVycm9yIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhZGRDb21tZW50Rm9ybVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0VGV4dCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiYWRkQ29tbWVudEZvcm1BY3Rpb25zIiwicmVkdWNlciIsImFkZENvbW1lbnRGb3JtUmVkdWNlciIsInVzZUNhbGxiYWNrIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTZWxlY3RvciIsImNsYXNzTmFtZXMiLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwidXNlQXBwRGlzcGF0Y2giLCJCdXR0b24iLCJCdXR0b25UaGVtZSIsIklucHV0IiwiSFN0YWNrIiwiY2xzIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkFkZENvbW1lbnRGb3JtIiwicHJvcHMiLCJfcyIsImNsYXNzTmFtZSIsIm9uU2VuZENvbW1lbnQiLCJ0IiwiZGlzcGF0Y2giLCJvbkNvbW1lbnRUZXh0Q2hhbmdlIiwidmFsdWUiLCJvblNlbmRIYW5kbGVyIiwiY2hpbGRyZW4iLCJqdXN0aWZ5IiwibWF4IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGhlbWUiLCJPVVRMSU5FIiwib25DbGljayIsIl9jIiwiJFJlZnJlc2hSZWckIiwiUmVhY3QiLCJtZW1vIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ0eXBlIiwiYXV0b0ZvY3VzIiwicmVhZG9ubHkiLCJvdGhlclByb3BzIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwiY2FyZXRQb3NpdGlvbiIsInNldENhcmV0UG9zaXRpb24iLCJyZWYiLCJpc0NhcmV0VmlzaWJsZSIsImN1cnJlbnQiLCJmb2N1cyIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25TZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsIm1vZHMiLCJJbnB1dFdyYXBwZXIiLCJjYXJldFdyYXBwZXIiLCJyZWFkT25seSIsImNhcmV0Iiwic3R5bGUiLCJsZWZ0IiwiX2MyIl0sInNvdXJjZVJvb3QiOiIifQ==