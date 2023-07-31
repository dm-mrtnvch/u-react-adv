"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_features_addCommentForm_ui_AddCommentForm_AddCommentForm_tsx"],{

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx":
/*!**************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var _model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/selectors/addCommentFormSelectors */ "./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts");
/* harmony import */ var _model_slice_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/slice/addCommentFormSlice */ "./src/features/addCommentForm/model/slice/addCommentFormSlice.ts");
/* harmony import */ var _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddCommentForm.module.scss */ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
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













var reducers = {
  addCommentForm: _model_slice_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_10__.addCommentFormReducer
};
var AddCommentForm = function AddCommentForm(props) {
  _s();
  var className = props.className,
    onSendComment = props.onSendComment;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)().t;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  var text = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_9__.getAddCommentFormText);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_9__.getAddCommentFormError);
  var onCommentTextChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(_model_slice_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_10__.addCommentFormActions.setText(value));
  }, [dispatch]);
  var onSendHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__.DynamicModuleLoader, __assign({
    reducers: reducers
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__.HStack, __assign({
      justify: "between",
      max: true,
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].AddCommentForm, {}, [className])
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {
        className: _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].input,
        placeholder: t('type-comment'),
        value: text,
        onChange: onCommentTextChange
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, __assign({
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonTheme.OUTLINE,
        onClick: onSendHandler
      }, {
        children: t('send')
      }))]
    }))
  }));
};
_s(AddCommentForm, "zqURfNQPpkfVhjTfnViYss0Qwys=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});
_c = AddCommentForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCommentForm);
var _c;
__webpack_require__.$Refresh$.register(_c, "AddCommentForm");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe {\n  border: 1px solid var(--primary-color);\n  padding: 20px;\n}\n\n.src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk {\n  flex-grow: 1;\n}", "",{"version":3,"sources":["webpack://./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"],"names":[],"mappings":"AAAA;EACE,sCAAA;EACA,aAAA;AACF;;AAEA;EACE,YAAA;AACF","sourcesContent":[".AddCommentForm {\r\n  border: 1px solid var(--primary-color);\r\n  padding: 20px;\r\n}\r\n\r\n.input {\r\n  flex-grow: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AddCommentForm": "src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe",
	"input": "src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!**********************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \**********************************************************************************/
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
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts":
/*!********************************************************************************!*\
  !*** ./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAddCommentFormError": () => (/* binding */ getAddCommentFormError),
/* harmony export */   "getAddCommentFormText": () => (/* binding */ getAddCommentFormText)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getAddCommentFormText = function (state) { var _a, _b; return (_b = (_a = state.addCommentForm) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : ''; };
var getAddCommentFormError = function (state) { var _a; return (_a = state.addCommentForm) === null || _a === void 0 ? void 0 : _a.error; };


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

/***/ "./src/features/addCommentForm/model/slice/addCommentFormSlice.ts":
/*!************************************************************************!*\
  !*** ./src/features/addCommentForm/model/slice/addCommentFormSlice.ts ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCommentFormActions": () => (/* binding */ addCommentFormActions),
/* harmony export */   "addCommentFormReducer": () => (/* binding */ addCommentFormReducer),
/* harmony export */   "addCommentFormSlice": () => (/* binding */ addCommentFormSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var initialState = {
    text: '',
    error: '',
};
var addCommentFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'addCommentForm',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
    },
    // extraReducers: () => {
    //
    // }
});
var addCommentFormActions = addCommentFormSlice.actions;
var addCommentFormReducer = addCommentFormSlice.reducer;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX2FkZENvbW1lbnRGb3JtX3VpX0FkZENvbW1lbnRGb3JtX0FkZENvbW1lbnRGb3JtX3RzeC5iYWM1ZGNkOWQ1NDVhZGNjNDI4MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7SUFDbkI7SUFDQSxPQUFPTixDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU9ILFFBQVEsQ0FBQ2EsS0FBSyxDQUFDLElBQUksRUFBRU4sU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFDOEQ7QUFDM0I7QUFDVztBQUNMO0FBQ29CO0FBQ3NDO0FBQ3BCO0FBQ2xCO0FBQ2hCO0FBQ0w7QUFDcUU7QUFDVDtBQUN0RDtBQUMvQyxJQUFJMEIsUUFBUSxHQUFHO0VBQ1hDLGNBQWMsRUFBRUgsb0ZBQXFCQTtBQUN6QyxDQUFDO0FBQ0QsSUFBSUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFhQyxLQUFLLEVBQUU7RUFBQUMsRUFBQTtFQUNsQyxJQUFJQyxTQUFTLEdBQUdG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d0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsb0tBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDJLQUFjLElBQUksVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyS0FBYztBQUN2QyxvQ0FBb0MseUpBQVcsR0FBRywyS0FBYzs7QUFFaEUsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSw4VkFBbUs7QUFDekssTUFBTTtBQUFBO0FBQ04sc0RBQXNELHlKQUFXLEdBQUcsMktBQWM7QUFDbEYsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLHlKQUFXLEdBQUcsMktBQWM7O0FBRXRFLHFCQUFxQixvS0FBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR2tMO0FBQ2xMLE9BQU8saUVBQWUsb0tBQU8sSUFBSSwyS0FBYyxHQUFHLDJLQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXRFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHdDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ08sMEJBQTBCLDZEQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0udHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzPzZiY2UiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vbW9kZWwvc2VsZWN0b3JzL2FkZENvbW1lbnRGb3JtU2VsZWN0b3JzLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL21vZGVsL3NsaWNlL2FkZENvbW1lbnRGb3JtU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyIH0gZnJvbSAnc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcic7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25UaGVtZSB9IGZyb20gJ3NoYXJlZC91aS9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnc2hhcmVkL3VpL0lucHV0L0lucHV0JztcbmltcG9ydCB7IEhTdGFjayB9IGZyb20gJ3NoYXJlZC91aS9TdGFjayc7XG5pbXBvcnQgeyBnZXRBZGRDb21tZW50Rm9ybUVycm9yLCBnZXRBZGRDb21tZW50Rm9ybVRleHQgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWxlY3RvcnMvYWRkQ29tbWVudEZvcm1TZWxlY3RvcnMnO1xuaW1wb3J0IHsgYWRkQ29tbWVudEZvcm1BY3Rpb25zLCBhZGRDb21tZW50Rm9ybVJlZHVjZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZS9hZGRDb21tZW50Rm9ybVNsaWNlJztcbmltcG9ydCBjbHMgZnJvbSAnLi9BZGRDb21tZW50Rm9ybS5tb2R1bGUuc2Nzcyc7XG52YXIgcmVkdWNlcnMgPSB7XG4gICAgYWRkQ29tbWVudEZvcm06IGFkZENvbW1lbnRGb3JtUmVkdWNlcixcbn07XG52YXIgQWRkQ29tbWVudEZvcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLCBvblNlbmRDb21tZW50ID0gcHJvcHMub25TZW5kQ29tbWVudDtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHZhciB0ZXh0ID0gdXNlU2VsZWN0b3IoZ2V0QWRkQ29tbWVudEZvcm1UZXh0KTtcbiAgICB2YXIgZXJyb3IgPSB1c2VTZWxlY3RvcihnZXRBZGRDb21tZW50Rm9ybUVycm9yKTtcbiAgICB2YXIgb25Db21tZW50VGV4dENoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBkaXNwYXRjaChhZGRDb21tZW50Rm9ybUFjdGlvbnMuc2V0VGV4dCh2YWx1ZSkpO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBvblNlbmRIYW5kbGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBvblNlbmRDb21tZW50KHRleHQgfHwgJycpO1xuICAgICAgICBvbkNvbW1lbnRUZXh0Q2hhbmdlKCcnKTtcbiAgICB9LCBbb25Db21tZW50VGV4dENoYW5nZSwgb25TZW5kQ29tbWVudCwgdGV4dF0pO1xuICAgIHJldHVybiAoX2pzeChEeW5hbWljTW9kdWxlTG9hZGVyLCBfX2Fzc2lnbih7IHJlZHVjZXJzOiByZWR1Y2VycyB9LCB7IGNoaWxkcmVuOiBfanN4cyhIU3RhY2ssIF9fYXNzaWduKHsganVzdGlmeTogXCJiZXR3ZWVuXCIsIG1heDogdHJ1ZSwgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5BZGRDb21tZW50Rm9ybSwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChJbnB1dCwgeyBjbGFzc05hbWU6IGNscy5pbnB1dCwgcGxhY2Vob2xkZXI6IHQoJ3R5cGUtY29tbWVudCcpLCB2YWx1ZTogdGV4dCwgb25DaGFuZ2U6IG9uQ29tbWVudFRleHRDaGFuZ2UgfSksIF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHRoZW1lOiBCdXR0b25UaGVtZS5PVVRMSU5FLCBvbkNsaWNrOiBvblNlbmRIYW5kbGVyIH0sIHsgY2hpbGRyZW46IHQoJ3NlbmQnKSB9KSldIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFkZENvbW1lbnRGb3JtO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLWZlYXR1cmVzLWFkZENvbW1lbnRGb3JtLXVpLUFkZENvbW1lbnRGb3JtLUFkZENvbW1lbnRGb3JtLW1vZHVsZV9fQWRkQ29tbWVudEZvcm0tLVpyZm9lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnNyYy1mZWF0dXJlcy1hZGRDb21tZW50Rm9ybS11aS1BZGRDb21tZW50Rm9ybS1BZGRDb21tZW50Rm9ybS1tb2R1bGVfX2lucHV0LS1neFJBayB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mZWF0dXJlcy9hZGRDb21tZW50Rm9ybS91aS9BZGRDb21tZW50Rm9ybS9BZGRDb21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNDQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BZGRDb21tZW50Rm9ybSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkFkZENvbW1lbnRGb3JtXCI6IFwic3JjLWZlYXR1cmVzLWFkZENvbW1lbnRGb3JtLXVpLUFkZENvbW1lbnRGb3JtLUFkZENvbW1lbnRGb3JtLW1vZHVsZV9fQWRkQ29tbWVudEZvcm0tLVpyZm9lXCIsXG5cdFwiaW5wdXRcIjogXCJzcmMtZmVhdHVyZXMtYWRkQ29tbWVudEZvcm0tdWktQWRkQ29tbWVudEZvcm0tQWRkQ29tbWVudEZvcm0tbW9kdWxlX19pbnB1dC0tZ3hSQWtcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRDb21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRDb21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCB2YXIgZ2V0QWRkQ29tbWVudEZvcm1UZXh0ID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYSwgX2I7IHJldHVybiAoX2IgPSAoX2EgPSBzdGF0ZS5hZGRDb21tZW50Rm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnOyB9O1xuZXhwb3J0IHZhciBnZXRBZGRDb21tZW50Rm9ybUVycm9yID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHN0YXRlLmFkZENvbW1lbnRGb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXJyb3I7IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0ZXh0OiAnJyxcbiAgICBlcnJvcjogJycsXG59O1xuZXhwb3J0IHZhciBhZGRDb21tZW50Rm9ybVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdhZGRDb21tZW50Rm9ybScsXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0VGV4dDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnRleHQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIGV4dHJhUmVkdWNlcnM6ICgpID0+IHtcbiAgICAvL1xuICAgIC8vIH1cbn0pO1xuZXhwb3J0IHZhciBhZGRDb21tZW50Rm9ybUFjdGlvbnMgPSBhZGRDb21tZW50Rm9ybVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgdmFyIGFkZENvbW1lbnRGb3JtUmVkdWNlciA9IGFkZENvbW1lbnRGb3JtU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwidXNlQ2FsbGJhY2siLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVNlbGVjdG9yIiwiY2xhc3NOYW1lcyIsIkR5bmFtaWNNb2R1bGVMb2FkZXIiLCJ1c2VBcHBEaXNwYXRjaCIsIkJ1dHRvbiIsIkJ1dHRvblRoZW1lIiwiSW5wdXQiLCJIU3RhY2siLCJnZXRBZGRDb21tZW50Rm9ybUVycm9yIiwiZ2V0QWRkQ29tbWVudEZvcm1UZXh0IiwiYWRkQ29tbWVudEZvcm1BY3Rpb25zIiwiYWRkQ29tbWVudEZvcm1SZWR1Y2VyIiwiY2xzIiwicmVkdWNlcnMiLCJhZGRDb21tZW50Rm9ybSIsIkFkZENvbW1lbnRGb3JtIiwicHJvcHMiLCJfcyIsImNsYXNzTmFtZSIsIm9uU2VuZENvbW1lbnQiLCJkaXNwYXRjaCIsInRleHQiLCJlcnJvciIsIm9uQ29tbWVudFRleHRDaGFuZ2UiLCJ2YWx1ZSIsInNldFRleHQiLCJvblNlbmRIYW5kbGVyIiwiY2hpbGRyZW4iLCJqdXN0aWZ5IiwibWF4IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGhlbWUiLCJPVVRMSU5FIiwib25DbGljayIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==