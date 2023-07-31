"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_pages_ArticleDetailsPage_ui_ArticleDetailsPage_ArticleDetailsPage_tsx"],{

/***/ "./src/entities/Comment/ui/CommentCard/CommentCard.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentCard/CommentCard.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentCard": () => (/* binding */ CommentCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Avatar/Avatar */ "./src/shared/ui/Avatar/Avatar.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Skeleton/Skeleton */ "./src/shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/AppLink/AppLink */ "./src/shared/ui/AppLink/AppLink.tsx");
/* harmony import */ var _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentCard.module.scss */ "./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");
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











var CommentCard = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(function (props) {
  _s();
  var comment = props.comment,
    isLoading = props.isLoading,
    className = props.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)().t;
  if (isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].CommentCard, {}, [className, _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].loading])
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].header
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
          width: 30,
          height: 30,
          border: "50%"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
          height: 16,
          width: 100,
          className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].username
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].text,
        width: "100%",
        height: 50
      })]
    }));
  }
  if (!comment) {
    return null;
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_5__.VStack, __assign({
    max: true,
    gap: "8",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].CommentCard, {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_8__.AppLink, __assign({
      to: "".concat(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_2__.RoutePath.profile).concat(comment.user.id),
      className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].header
    }, {
      children: [comment.user.avatar ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
        size: 30,
        src: comment.user.avatar
      }) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].username,
        title: comment.user.username
      })]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__.Text, {
      className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].text,
      text: comment.text
    })]
  }));
}, "h6J0Q3nxDyaAQ99JMz6OOoWbcwM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation];
})), "h6J0Q3nxDyaAQ99JMz6OOoWbcwM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation];
});
_c2 = CommentCard;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "CommentCard$memo");
__webpack_require__.$Refresh$.register(_c2, "CommentCard");

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

/***/ "./src/entities/Comment/ui/CommentList/CommentList.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentList/CommentList.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentList": () => (/* binding */ CommentList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommentCard/CommentCard */ "./src/entities/Comment/ui/CommentCard/CommentCard.tsx");
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







var CommentList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(function (props) {
  _s();
  var className = props.className,
    comments = props.comments,
    isLoading = props.isLoading;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)().t;
  if (isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_3__.VStack, __assign({
      gap: "16",
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)('', {}, [className])
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_5__.CommentCard, {
        isLoading: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_5__.CommentCard, {
        isLoading: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_5__.CommentCard, {
        isLoading: true
      })]
    }));
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_3__.VStack, __assign({
    gap: "16",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)('', {}, [className])
  }, {
    children: (comments === null || comments === void 0 ? void 0 : comments.length) ? comments.map(function (comment) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_5__.CommentCard, {
        isLoading: isLoading,
        comment: comment
      }, comment.id);
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_4__.Text, {
      text: t('no-comments')
    })
  }));
}, "h6J0Q3nxDyaAQ99JMz6OOoWbcwM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
})), "h6J0Q3nxDyaAQ99JMz6OOoWbcwM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
});
_c2 = CommentList;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "CommentList$memo");
__webpack_require__.$Refresh$.register(_c2, "CommentList");

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

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx":
/*!********************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCommentFormAsync": () => (/* binding */ AddCommentFormAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var AddCommentFormAsync = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("src_shared_ui_Input_Input_tsx"), __webpack_require__.e("src_features_addCommentForm_ui_AddCommentForm_AddCommentForm_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AddCommentForm */ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx"));
});
_c2 = AddCommentFormAsync;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AddCommentFormAsync$lazy");
__webpack_require__.$Refresh$.register(_c2, "AddCommentFormAsync");

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

/***/ "./src/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.tsx ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleRecommendationsList": () => (/* binding */ ArticleRecommendationsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/articleRecommendationsApi */ "./src/features/articleRecommendationsList/api/articleRecommendationsApi.ts");
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








var ArticleRecommendationsList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c = _s(function (props) {
  _s();
  var className = props.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)().t;
  var _a = (0,_api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_6__.useArticleRecommendationsList)(3),
    articles = _a.data,
    isLoading = _a.isLoading,
    error = _a.error;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_4__.VStack, __assign({
    gap: "8",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)('', {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
      size: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__.TextSize.L,
      title: t('recommend')
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_1__.ArticleList, {
      articles: articles,
      target: "_blank"
    })]
  }));
}, "CkVVZLQSTtszj7LwNdRR9Ajexzw=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation, _api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_6__.useArticleRecommendationsList];
})), "CkVVZLQSTtszj7LwNdRR9Ajexzw=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation, _api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_6__.useArticleRecommendationsList];
});
_c2 = ArticleRecommendationsList;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleRecommendationsList$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleRecommendationsList");

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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsComments": () => (/* binding */ ArticleDetailsComments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Comment */ "./src/entities/Comment/index.ts");
/* harmony import */ var features_addCommentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/addCommentForm */ "./src/features/addCommentForm/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _model_slices_articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/slices/articleDetailsCommentsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts");
/* harmony import */ var _model_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
/* harmony import */ var _model_services_AddCommentForArticle_AddCommentForArticle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/services/AddCommentForArticle/AddCommentForArticle */ "./src/pages/ArticleDetailsPage/model/services/AddCommentForArticle/AddCommentForArticle.ts");
/* harmony import */ var _model_selectors_comments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/selectors/comments */ "./src/pages/ArticleDetailsPage/model/selectors/comments.ts");
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















var ArticleDetailsComments = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function (_a) {
  _s();
  var className = _a.className,
    id = _a.id;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)().t;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
  var comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_slices_articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_10__.getArticleComments.selectAll);
  var commentsIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_comments__WEBPACK_IMPORTED_MODULE_13__.getArticleCommentsIsLoading);
  var onSendComment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (text) {
    dispatch((0,_model_services_AddCommentForArticle_AddCommentForArticle__WEBPACK_IMPORTED_MODULE_12__.addCommentForArticle)(text));
  }, [dispatch]);
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect)(function () {
    dispatch((0,_model_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_11__.fetchCommentsByArticleId)(id));
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__.VStack, __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__.classNames)('', {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__.Text, {
      size: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__.TextSize.L,
      title: t('comments')
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_addCommentForm__WEBPACK_IMPORTED_MODULE_2__.AddCommentForm, {
      onSendComment: onSendComment
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentList, {
      isLoading: commentsIsLoading,
      comments: comments
    })]
  }));
}, "FyISKt1hpMnyagpLR3RWbsT703E=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect];
})), "FyISKt1hpMnyagpLR3RWbsT703E=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect];
});
_c2 = ArticleDetailsComments;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsComments$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleDetailsComments");

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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx":
/*!***********************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var features_articleRecommendationsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/articleRecommendationsList */ "./src/features/articleRecommendationsList/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var widgets_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! widgets/Page/Page */ "./src/widgets/Page/Page.tsx");
/* harmony import */ var _ArticleDetailsComments_ArticleDetailsComments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ArticleDetailsComments/ArticleDetailsComments */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx");
/* harmony import */ var _model_slices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/slices */ "./src/pages/ArticleDetailsPage/model/slices/index.ts");
/* harmony import */ var _ArticleDetailsPageHeader_ArticleDetailsPageHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ArticleDetailsPageHeader/ArticleDetailsPageHeader */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx");
/* harmony import */ var _ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArticleDetailsPage.module.scss */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");
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
  articleDetailsPage: _model_slices__WEBPACK_IMPORTED_MODULE_9__.articleDetailsPageReducer
};
var ArticleDetailsPage = function ArticleDetailsPage(_a) {
  _s();
  var className = _a.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)('article-details').t;
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)().id;
  if (!id) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page, __assign({
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_4__.classNames)(_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].ArticleDetailsPage, {}, [className])
    }, {
      children: t('article-page-not-found')
    }));
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__.DynamicModuleLoader, __assign({
    reducers: reducers,
    removeAfterUnmount: true
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page, __assign({
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_4__.classNames)(_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].ArticleDetailsPage, {}, [className])
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_6__.VStack, __assign({
        gap: "16",
        max: true
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ArticleDetailsPageHeader_ArticleDetailsPageHeader__WEBPACK_IMPORTED_MODULE_10__.ArticleDetailsPageHeader, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_1__.ArticleDetails, {
          id: id
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_articleRecommendationsList__WEBPACK_IMPORTED_MODULE_2__.ArticleRecommendationsList, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ArticleDetailsComments_ArticleDetailsComments__WEBPACK_IMPORTED_MODULE_8__.ArticleDetailsComments, {
          id: id
        })]
      }))
    }))
  }));
};
_s(ArticleDetailsPage, "i3Juu8F9kBCiw+HWUAE2+TuAZ38=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams];
});
_c = ArticleDetailsPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(ArticleDetailsPage));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsPage");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsPageHeader": () => (/* binding */ ArticleDetailsPageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Article/model/selectors/articleDetails */ "./src/entities/Article/model/selectors/articleDetails.ts");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var _model_selectors_article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/selectors/article */ "./src/pages/ArticleDetailsPage/model/selectors/article.ts");
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












var ArticleDetailsPageHeader = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function (_a) {
  _s();
  var className = _a.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)().t;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(entities_User__WEBPACK_IMPORTED_MODULE_2__.getUserAuthData);
  var article = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_1__.getArticleDetailsData);
  var canEdit = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_article__WEBPACK_IMPORTED_MODULE_9__.getCanEditArticle);
  var onBackToList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    navigate(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_5__.RoutePath.articles);
  }, [navigate]);
  var onEditArticle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    navigate("".concat(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_5__.RoutePath.articles, "/").concat(article === null || article === void 0 ? void 0 : article.id, "/edit"));
  }, [article === null || article === void 0 ? void 0 : article.id, navigate]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__.HStack, __assign({
    max: true,
    justify: "between",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_6__.classNames)('', {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__.Button, __assign({
      onClick: onBackToList
    }, {
      children: t('back-to-articles')
    })), canEdit && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__.Button, __assign({
      onClick: onEditArticle
    }, {
      children: t('edit')
    }))]
  }));
}, "O8heqABp8NIdMgiDcbSESluxqPY=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
})), "O8heqABp8NIdMgiDcbSESluxqPY=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});
_c2 = ArticleDetailsPageHeader;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsPageHeader$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleDetailsPageHeader");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".src-entities-Comment-ui-CommentCard-CommentCard-module__CommentCard--xIHBy {\n  padding: 10px;\n  border: 1px solid var(--primary-color);\n}\n\n.src-entities-Comment-ui-CommentCard-CommentCard-module__header--dsH_3 {\n  display: flex;\n  align-items: center;\n}\n\n.src-entities-Comment-ui-CommentCard-CommentCard-module__username--dw82W {\n  margin-left: 10px;\n}\n\n.src-entities-Comment-ui-CommentCard-CommentCard-module__loading--V0iZ1 {\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/entities/Comment/ui/CommentCard/CommentCard.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sCAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,YAAA;AACF","sourcesContent":[".CommentCard {\r\n  padding: 10px;\r\n  border: 1px solid var(--primary-color);\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.username {\r\n  margin-left: 10px;\r\n}\r\n\r\n.loading {\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"CommentCard": "src-entities-Comment-ui-CommentCard-CommentCard-module__CommentCard--xIHBy",
	"header": "src-entities-Comment-ui-CommentCard-CommentCard-module__header--dsH_3",
	"username": "src-entities-Comment-ui-CommentCard-CommentCard-module__username--dw82W",
	"loading": "src-entities-Comment-ui-CommentCard-CommentCard-module__loading--V0iZ1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__commentTitle--foyEs {\n  margin-top: 20px;\n}\n\n.src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__recommendations--NwQlS {\n  margin-top: 20px;\n  flex-wrap: nowrap;\n  overflow-y: hidden;\n  overflow-x: auto;\n}", "",{"version":3,"sources":["webpack://./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss"],"names":[],"mappings":"AAIA;EACE,gBAAA;AAHF;;AAMA;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAHF","sourcesContent":[".ArticleDetailsPage {\r\n\r\n}\r\n\r\n.commentTitle {\r\n  margin-top: 20px;\r\n}\r\n\r\n.recommendations {\r\n  margin-top: 20px;\r\n  flex-wrap: nowrap;\r\n  overflow-y: hidden;\r\n  overflow-x: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"commentTitle": "src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__commentTitle--foyEs",
	"recommendations": "src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__recommendations--NwQlS"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Comment/ui/CommentCard/CommentCard.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentCard/CommentCard.module.scss ***!
  \*********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss":
/*!*******************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss ***!
  \*******************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Comment/index.ts":
/*!***************************************!*\
  !*** ./src/entities/Comment/index.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentList": () => (/* reexport safe */ _ui_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_0__.CommentList)
/* harmony export */ });
/* harmony import */ var _ui_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/CommentList/CommentList */ "./src/entities/Comment/ui/CommentList/CommentList.tsx");
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

/***/ }),

/***/ "./src/features/addCommentForm/index.ts":
/*!**********************************************!*\
  !*** ./src/features/addCommentForm/index.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCommentForm": () => (/* reexport safe */ _addCommentForm_ui_AddCommentForm_AddCommentForm_async__WEBPACK_IMPORTED_MODULE_0__.AddCommentFormAsync)
/* harmony export */ });
/* harmony import */ var _addCommentForm_ui_AddCommentForm_AddCommentForm_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addCommentForm/ui/AddCommentForm/AddCommentForm.async */ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx");
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

/***/ }),

/***/ "./src/features/articleRecommendationsList/api/articleRecommendationsApi.ts":
/*!**********************************************************************************!*\
  !*** ./src/features/articleRecommendationsList/api/articleRecommendationsApi.ts ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useArticleRecommendationsList": () => (/* binding */ useArticleRecommendationsList)
/* harmony export */ });
/* harmony import */ var shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/api/rtkApi */ "./src/shared/api/rtkApi.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var recommendationsApi = shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getArticleRecommendationsList: build.query({
            query: function (limit) { return ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }); },
        }),
    }); },
    overrideExisting: false,
});
var useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;


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

/***/ "./src/features/articleRecommendationsList/index.ts":
/*!**********************************************************!*\
  !*** ./src/features/articleRecommendationsList/index.ts ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleRecommendationsList": () => (/* reexport safe */ _ui_ArticleRecommendationsList_ArticleRecommendationsList__WEBPACK_IMPORTED_MODULE_0__.ArticleRecommendationsList)
/* harmony export */ });
/* harmony import */ var _ui_ArticleRecommendationsList_ArticleRecommendationsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ArticleRecommendationsList/ArticleRecommendationsList */ "./src/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.tsx");
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

/***/ }),

/***/ "./src/pages/ArticleDetailsPage/model/selectors/article.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/selectors/article.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCanEditArticle": () => (/* binding */ getCanEditArticle)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/reselect/es/index.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var getCanEditArticle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.getArticleDetailsData, entities_User__WEBPACK_IMPORTED_MODULE_1__.getUserAuthData, function (article, user) {
    if (!article || !user) {
        return false;
    }
    return article.user.id === user.id;
});


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

/***/ "./src/pages/ArticleDetailsPage/model/selectors/comments.ts":
/*!******************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/selectors/comments.ts ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArticleCommentsError": () => (/* binding */ getArticleCommentsError),
/* harmony export */   "getArticleCommentsIsLoading": () => (/* binding */ getArticleCommentsIsLoading)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getArticleCommentsIsLoading = function (state) {
    var _a, _b;
    return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) === null || _b === void 0 ? void 0 : _b.isLoading;
};
var getArticleCommentsError = function (state) {
    var _a, _b;
    return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) === null || _b === void 0 ? void 0 : _b.error;
};


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

/***/ "./src/pages/ArticleDetailsPage/model/services/AddCommentForArticle/AddCommentForArticle.ts":
/*!**************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/AddCommentForArticle/AddCommentForArticle.ts ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCommentForArticle": () => (/* binding */ addCommentForArticle)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article/model/selectors/articleDetails */ "./src/entities/Article/model/selectors/articleDetails.ts");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var _fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
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




var addCommentForArticle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articleDetails/addCommentForArticle', function (text, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, dispatch, rejectWithValue, getState, userData, article, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, dispatch = thunkApi.dispatch, rejectWithValue = thunkApi.rejectWithValue, getState = thunkApi.getState;
                userData = (0,entities_User__WEBPACK_IMPORTED_MODULE_1__.getUserAuthData)(getState());
                article = (0,entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_0__.getArticleDetailsData)(getState());
                if (!userData || !text || !article) {
                    return [2 /*return*/, rejectWithValue('no data')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.post('/comments', {
                        text: text,
                        articleId: article.id,
                        userId: userData.id,
                    })];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                dispatch((0,_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_2__.fetchCommentsByArticleId)(article.id));
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
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

/***/ "./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchArticleRecommendations": () => (/* binding */ fetchArticleRecommendations)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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

var fetchArticleRecommendations = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('articleDetailsPage/fetchArticleRecommendations', function (props, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.get('/articles', {
                        params: {
                            _limit: 4,
                            // _expand: 'user',
                        },
                    })];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
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

/***/ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCommentsByArticleId": () => (/* binding */ fetchCommentsByArticleId)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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

var fetchCommentsByArticleId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('articleDetails/fetchCommentsByArticleId', function (articleId, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue;
                if (!articleId) {
                    return [2 /*return*/, rejectWithValue('error')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.get('/comments', {
                        params: {
                            articleId: articleId,
                            _expand: 'user',
                        },
                    })];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
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

/***/ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts":
/*!**********************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleDetailsCommentsReducer": () => (/* binding */ articleDetailsCommentsReducer),
/* harmony export */   "getArticleComments": () => (/* binding */ getArticleComments)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var commentsAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: function (comment) { return comment.id; },
});
var getArticleComments = commentsAdapter.getSelectors(function (state) {
    var _a;
    return ((_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) || commentsAdapter.getInitialState();
});
var articleDetailsCommentsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState({
        isLoading: false,
        ids: ['1', '2'],
        entities: {
            1: {
                id: '1',
                text: 'comment 1',
                user: { id: '1', username: '1' },
            },
            2: {
                id: '2',
                text: 'comment 2',
                user: { id: '2', username: '2' },
            },
        },
        error: undefined,
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        })
            .addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;


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

/***/ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice.ts":
/*!*********************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice.ts ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleDetailsPageRecommendationsReducer": () => (/* binding */ articleDetailsPageRecommendationsReducer),
/* harmony export */   "getArticleRecommendations": () => (/* binding */ getArticleRecommendations)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchArticleRecommendations/fetchArticleRecommendations */ "./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var recommendationsAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: function (article) { return article.id; },
});
var getArticleRecommendations = recommendationsAdapter.getSelectors(function (state) {
    var _a;
    return ((_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) || recommendationsAdapter.getInitialState();
});
var articleDetailsPageRecommendationsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'articleDetailsCommentsSlice',
    initialState: recommendationsAdapter.getInitialState({
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.fulfilled, function (state, action) {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
        })
            .addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
var articleDetailsPageRecommendationsReducer = articleDetailsPageRecommendationsSlice.reducer;


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

/***/ "./src/pages/ArticleDetailsPage/model/slices/index.ts":
/*!************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/index.ts ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleDetailsPageReducer": () => (/* binding */ articleDetailsPageReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleDetailsCommentsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts");
/* harmony import */ var _articleDetailsPageRecommendationsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleDetailsPageRecommendationsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var articleDetailsPageReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    recommendations: _articleDetailsPageRecommendationsSlice__WEBPACK_IMPORTED_MODULE_1__.articleDetailsPageRecommendationsReducer,
    comments: _articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_0__.articleDetailsCommentsReducer,
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0FydGljbGVEZXRhaWxzUGFnZV91aV9BcnRpY2xlRGV0YWlsc1BhZ2VfQXJ0aWNsZURldGFpbHNQYWdlX3RzeC41NThhZmRlMmVlODU0MDYyYTg3ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQzhEO0FBQ2xDO0FBQ2tCO0FBQ21CO0FBQ0o7QUFDYjtBQUNSO0FBQ0U7QUFDWTtBQUNIO0FBQ1I7QUFDckMsSUFBSXFCLFdBQVcsZ0JBQUFDLEVBQUEsZUFBR1gsMkNBQUksQ0FBQVksRUFBQSxHQUFBRCxFQUFBLENBQUMsVUFBVUUsS0FBSyxFQUFFO0VBQUFGLEVBQUE7RUFDM0MsSUFBSUcsT0FBTyxHQUFHRCxLQUFLLENBQUNDLE9BQU87SUFBRUMsU0FBUyxHQUFH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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5SEFBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJIQUFrQztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEhBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QzZEO0FBQytDO0FBQ25ILDZCQUE2QixxRUFBbUI7QUFDaEQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDZEQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrSUFBbUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9JQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUlBQW9DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzRDO0FBQzJCO0FBQ3NCO0FBQzdGLGdDQUFnQyxpRUFBZTtBQUN0RCxxQkFBcUIsNkdBQXdDO0FBQzdELGNBQWMsdUZBQTZCO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50Q2FyZC9Db21tZW50Q2FyZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50TGlzdC9Db21tZW50TGlzdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0uYXN5bmMudHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0L3VpL0FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0L0FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvdWkvQXJ0aWNsZURldGFpbHNDb21tZW50cy9BcnRpY2xlRGV0YWlsc0NvbW1lbnRzLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvdWkvQXJ0aWNsZURldGFpbHNQYWdlL0FydGljbGVEZXRhaWxzUGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL3VpL0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2VudGl0aWVzL0NvbW1lbnQvdWkvQ29tbWVudENhcmQvQ29tbWVudENhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL3VpL0FydGljbGVEZXRhaWxzUGFnZS9BcnRpY2xlRGV0YWlsc1BhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50Q2FyZC9Db21tZW50Q2FyZC5tb2R1bGUuc2Nzcz9mZmI5Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2UvQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzP2ZkMzMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQ29tbWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9hZGRDb21tZW50Rm9ybS9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9hcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdC9hcGkvYXJ0aWNsZVJlY29tbWVuZGF0aW9uc0FwaS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9mZWF0dXJlcy9hcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2VsZWN0b3JzL2FydGljbGUudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NlbGVjdG9ycy9jb21tZW50cy50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2VydmljZXMvQWRkQ29tbWVudEZvckFydGljbGUvQWRkQ29tbWVudEZvckFydGljbGUudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NlcnZpY2VzL2ZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucy9mZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NlcnZpY2VzL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZC9mZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NsaWNlcy9hcnRpY2xlRGV0YWlsc0NvbW1lbnRzU2xpY2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NsaWNlcy9hcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbW1lbmRhdGlvbnNTbGljZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2xpY2VzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBSb3V0ZVBhdGggfSBmcm9tICdzaGFyZWQvY29uZmlnL3JvdXRlQ29uZmlnL3JvdXRlQ29uZmlnJztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdzaGFyZWQvdWkvQXZhdGFyL0F2YXRhcic7XG5pbXBvcnQgeyBWU3RhY2sgfSBmcm9tICdzaGFyZWQvdWkvU3RhY2snO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3NoYXJlZC91aS9UZXh0L1RleHQnO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdzaGFyZWQvdWkvU2tlbGV0b24vU2tlbGV0b24nO1xuaW1wb3J0IHsgQXBwTGluayB9IGZyb20gJ3NoYXJlZC91aS9BcHBMaW5rL0FwcExpbmsnO1xuaW1wb3J0IGNscyBmcm9tICcuL0NvbW1lbnRDYXJkLm1vZHVsZS5zY3NzJztcbmV4cG9ydCB2YXIgQ29tbWVudENhcmQgPSBtZW1vKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb21tZW50ID0gcHJvcHMuY29tbWVudCwgaXNMb2FkaW5nID0gcHJvcHMuaXNMb2FkaW5nLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5Db21tZW50Q2FyZCwge30sIFtjbGFzc05hbWUsIGNscy5sb2FkaW5nXSkgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuaGVhZGVyIH0sIHsgY2hpbGRyZW46IFtfanN4KFNrZWxldG9uLCB7IHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgYm9yZGVyOiBcIjUwJVwiIH0pLCBfanN4KFNrZWxldG9uLCB7IGhlaWdodDogMTYsIHdpZHRoOiAxMDAsIGNsYXNzTmFtZTogY2xzLnVzZXJuYW1lIH0pXSB9KSksIF9qc3goU2tlbGV0b24sIHsgY2xhc3NOYW1lOiBjbHMudGV4dCwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IDUwIH0pXSB9KSkpO1xuICAgIH1cbiAgICBpZiAoIWNvbW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoX2pzeHMoVlN0YWNrLCBfX2Fzc2lnbih7IG1heDogdHJ1ZSwgZ2FwOiBcIjhcIiwgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5Db21tZW50Q2FyZCwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoQXBwTGluaywgX19hc3NpZ24oeyB0bzogXCJcIi5jb25jYXQoUm91dGVQYXRoLnByb2ZpbGUpLmNvbmNhdChjb21tZW50LnVzZXIuaWQpLCBjbGFzc05hbWU6IGNscy5oZWFkZXIgfSwgeyBjaGlsZHJlbjogW2NvbW1lbnQudXNlci5hdmF0YXIgPyBfanN4KEF2YXRhciwgeyBzaXplOiAzMCwgc3JjOiBjb21tZW50LnVzZXIuYXZhdGFyIH0pIDogbnVsbCwgX2pzeChUZXh0LCB7IGNsYXNzTmFtZTogY2xzLnVzZXJuYW1lLCB0aXRsZTogY29tbWVudC51c2VyLnVzZXJuYW1lIH0pXSB9KSksIF9qc3goVGV4dCwgeyBjbGFzc05hbWU6IGNscy50ZXh0LCB0ZXh0OiBjb21tZW50LnRleHQgfSldIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgVlN0YWNrIH0gZnJvbSAnc2hhcmVkL3VpL1N0YWNrJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdzaGFyZWQvdWkvVGV4dC9UZXh0JztcbmltcG9ydCB7IENvbW1lbnRDYXJkIH0gZnJvbSAnLi4vQ29tbWVudENhcmQvQ29tbWVudENhcmQnO1xuZXhwb3J0IHZhciBDb21tZW50TGlzdCA9IG1lbW8oZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgY29tbWVudHMgPSBwcm9wcy5jb21tZW50cywgaXNMb2FkaW5nID0gcHJvcHMuaXNMb2FkaW5nO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChfanN4cyhWU3RhY2ssIF9fYXNzaWduKHsgZ2FwOiBcIjE2XCIsIGNsYXNzTmFtZTogY2xhc3NOYW1lcygnJywge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChDb21tZW50Q2FyZCwgeyBpc0xvYWRpbmc6IHRydWUgfSksIF9qc3goQ29tbWVudENhcmQsIHsgaXNMb2FkaW5nOiB0cnVlIH0pLCBfanN4KENvbW1lbnRDYXJkLCB7IGlzTG9hZGluZzogdHJ1ZSB9KV0gfSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIChfanN4KFZTdGFjaywgX19hc3NpZ24oeyBnYXA6IFwiMTZcIiwgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCcnLCB7fSwgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IChjb21tZW50cyA9PT0gbnVsbCB8fCBjb21tZW50cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tbWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgPyBjb21tZW50cy5tYXAoZnVuY3Rpb24gKGNvbW1lbnQpIHsgcmV0dXJuIChfanN4KENvbW1lbnRDYXJkLCB7IGlzTG9hZGluZzogaXNMb2FkaW5nLCBjb21tZW50OiBjb21tZW50IH0sIGNvbW1lbnQuaWQpKTsgfSlcbiAgICAgICAgICAgIDogX2pzeChUZXh0LCB7IHRleHQ6IHQoJ25vLWNvbW1lbnRzJykgfSkgfSkpKTtcbn0pO1xuIiwiaW1wb3J0IHsgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgQWRkQ29tbWVudEZvcm1Bc3luYyA9IGxhenkoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KCcuL0FkZENvbW1lbnRGb3JtJyk7IH0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBcnRpY2xlTGlzdCB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgVlN0YWNrIH0gZnJvbSAnc2hhcmVkL3VpL1N0YWNrJztcbmltcG9ydCB7IFRleHQsIFRleHRTaXplIH0gZnJvbSAnc2hhcmVkL3VpL1RleHQvVGV4dCc7XG5pbXBvcnQgeyB1c2VBcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCB9IGZyb20gJy4uLy4uL2FwaS9hcnRpY2xlUmVjb21tZW5kYXRpb25zQXBpJztcbmV4cG9ydCB2YXIgQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QgPSBtZW1vKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XG4gICAgdmFyIF9hID0gdXNlQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QoMyksIGFydGljbGVzID0gX2EuZGF0YSwgaXNMb2FkaW5nID0gX2EuaXNMb2FkaW5nLCBlcnJvciA9IF9hLmVycm9yO1xuICAgIHJldHVybiAoX2pzeHMoVlN0YWNrLCBfX2Fzc2lnbih7IGdhcDogXCI4XCIsIGNsYXNzTmFtZTogY2xhc3NOYW1lcygnJywge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChUZXh0LCB7IHNpemU6IFRleHRTaXplLkwsIHRpdGxlOiB0KCdyZWNvbW1lbmQnKSB9KSwgX2pzeChBcnRpY2xlTGlzdCwgeyBhcnRpY2xlczogYXJ0aWNsZXMsIHRhcmdldDogXCJfYmxhbmtcIiB9KV0gfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDb21tZW50TGlzdCB9IGZyb20gJ2VudGl0aWVzL0NvbW1lbnQnO1xuaW1wb3J0IHsgQWRkQ29tbWVudEZvcm0gfSBmcm9tICdmZWF0dXJlcy9hZGRDb21tZW50Rm9ybSc7XG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlSW5pdGlhbEVmZmVjdCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlSW5pdGlhbEVmZmVjdC91c2VJbml0aWFsRWZmZWN0JztcbmltcG9ydCB7IFZTdGFjayB9IGZyb20gJ3NoYXJlZC91aS9TdGFjayc7XG5pbXBvcnQgeyBUZXh0LCBUZXh0U2l6ZSB9IGZyb20gJ3NoYXJlZC91aS9UZXh0L1RleHQnO1xuaW1wb3J0IHsgZ2V0QXJ0aWNsZUNvbW1lbnRzIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2VzL2FydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZSc7XG5pbXBvcnQgeyBmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQsIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZCc7XG5pbXBvcnQgeyBhZGRDb21tZW50Rm9yQXJ0aWNsZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlcnZpY2VzL0FkZENvbW1lbnRGb3JBcnRpY2xlL0FkZENvbW1lbnRGb3JBcnRpY2xlJztcbmltcG9ydCB7IGdldEFydGljbGVDb21tZW50c0lzTG9hZGluZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9jb21tZW50cyc7XG5leHBvcnQgdmFyIEFydGljbGVEZXRhaWxzQ29tbWVudHMgPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIGlkID0gX2EuaWQ7XG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICB2YXIgY29tbWVudHMgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlQ29tbWVudHMuc2VsZWN0QWxsKTtcbiAgICB2YXIgY29tbWVudHNJc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlQ29tbWVudHNJc0xvYWRpbmcpO1xuICAgIHZhciBvblNlbmRDb21tZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgZGlzcGF0Y2goYWRkQ29tbWVudEZvckFydGljbGUodGV4dCkpO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHVzZUluaXRpYWxFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwYXRjaChmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQoaWQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKF9qc3hzKFZTdGFjaywgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJycsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3goVGV4dCwgeyBzaXplOiBUZXh0U2l6ZS5MLCB0aXRsZTogdCgnY29tbWVudHMnKSB9KSwgX2pzeChBZGRDb21tZW50Rm9ybSwgeyBvblNlbmRDb21tZW50OiBvblNlbmRDb21tZW50IH0pLCBfanN4KENvbW1lbnRMaXN0LCB7IGlzTG9hZGluZzogY29tbWVudHNJc0xvYWRpbmcsIGNvbW1lbnRzOiBjb21tZW50cyB9KV0gfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBcnRpY2xlRGV0YWlscyB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnO1xuaW1wb3J0IHsgQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QgfSBmcm9tICdmZWF0dXJlcy9hcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCc7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIgfSBmcm9tICdzaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyJztcbmltcG9ydCB7IFZTdGFjayB9IGZyb20gJ3NoYXJlZC91aS9TdGFjayc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnd2lkZ2V0cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgQXJ0aWNsZURldGFpbHNDb21tZW50cyB9IGZyb20gJy4uL0FydGljbGVEZXRhaWxzQ29tbWVudHMvQXJ0aWNsZURldGFpbHNDb21tZW50cyc7XG5pbXBvcnQgeyBhcnRpY2xlRGV0YWlsc1BhZ2VSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2VzJztcbmltcG9ydCB7IEFydGljbGVEZXRhaWxzUGFnZUhlYWRlciB9IGZyb20gJy4uL0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXInO1xuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2Nzcyc7XG52YXIgcmVkdWNlcnMgPSB7XG4gICAgYXJ0aWNsZURldGFpbHNQYWdlOiBhcnRpY2xlRGV0YWlsc1BhZ2VSZWR1Y2VyLFxufTtcbnZhciBBcnRpY2xlRGV0YWlsc1BhZ2UgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oJ2FydGljbGUtZGV0YWlscycpLnQ7XG4gICAgdmFyIGlkID0gdXNlUGFyYW1zKCkuaWQ7XG4gICAgaWYgKCFpZCkge1xuICAgICAgICByZXR1cm4gKF9qc3goUGFnZSwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkFydGljbGVEZXRhaWxzUGFnZSwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiB0KCdhcnRpY2xlLXBhZ2Utbm90LWZvdW5kJykgfSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIChfanN4KER5bmFtaWNNb2R1bGVMb2FkZXIsIF9fYXNzaWduKHsgcmVkdWNlcnM6IHJlZHVjZXJzLCByZW1vdmVBZnRlclVubW91bnQ6IHRydWUgfSwgeyBjaGlsZHJlbjogX2pzeChQYWdlLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuQXJ0aWNsZURldGFpbHNQYWdlLCB7fSwgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IF9qc3hzKFZTdGFjaywgX19hc3NpZ24oeyBnYXA6IFwiMTZcIiwgbWF4OiB0cnVlIH0sIHsgY2hpbGRyZW46IFtfanN4KEFydGljbGVEZXRhaWxzUGFnZUhlYWRlciwge30pLCBfanN4KEFydGljbGVEZXRhaWxzLCB7IGlkOiBpZCB9KSwgX2pzeChBcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCwge30pLCBfanN4KEFydGljbGVEZXRhaWxzQ29tbWVudHMsIHsgaWQ6IGlkIH0pXSB9KSkgfSkpIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbWVtbyhBcnRpY2xlRGV0YWlsc1BhZ2UpO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBnZXRBcnRpY2xlRGV0YWlsc0RhdGEgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlRGV0YWlscyc7XG5pbXBvcnQgeyBnZXRVc2VyQXV0aERhdGEgfSBmcm9tICdlbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJvdXRlUGF0aCB9IGZyb20gJ3NoYXJlZC9jb25maWcvcm91dGVDb25maWcvcm91dGVDb25maWcnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NoYXJlZC91aS9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IEhTdGFjayB9IGZyb20gJ3NoYXJlZC91aS9TdGFjayc7XG5pbXBvcnQgeyBnZXRDYW5FZGl0QXJ0aWNsZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlJztcbmV4cG9ydCB2YXIgQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdmFyIHVzZXJEYXRhID0gdXNlU2VsZWN0b3IoZ2V0VXNlckF1dGhEYXRhKTtcbiAgICB2YXIgYXJ0aWNsZSA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVEZXRhaWxzRGF0YSk7XG4gICAgdmFyIGNhbkVkaXQgPSB1c2VTZWxlY3RvcihnZXRDYW5FZGl0QXJ0aWNsZSk7XG4gICAgdmFyIG9uQmFja1RvTGlzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF2aWdhdGUoUm91dGVQYXRoLmFydGljbGVzKTtcbiAgICB9LCBbbmF2aWdhdGVdKTtcbiAgICB2YXIgb25FZGl0QXJ0aWNsZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF2aWdhdGUoXCJcIi5jb25jYXQoUm91dGVQYXRoLmFydGljbGVzLCBcIi9cIikuY29uY2F0KGFydGljbGUgPT09IG51bGwgfHwgYXJ0aWNsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJ0aWNsZS5pZCwgXCIvZWRpdFwiKSk7XG4gICAgfSwgW2FydGljbGUgPT09IG51bGwgfHwgYXJ0aWNsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJ0aWNsZS5pZCwgbmF2aWdhdGVdKTtcbiAgICByZXR1cm4gKF9qc3hzKEhTdGFjaywgX19hc3NpZ24oeyBtYXg6IHRydWUsIGp1c3RpZnk6IFwiYmV0d2VlblwiLCBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJycsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3goQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IG9uQmFja1RvTGlzdCB9LCB7IGNoaWxkcmVuOiB0KCdiYWNrLXRvLWFydGljbGVzJykgfSkpLCBjYW5FZGl0ICYmIChfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBvbkVkaXRBcnRpY2xlIH0sIHsgY2hpbGRyZW46IHQoJ2VkaXQnKSB9KSkpXSB9KSkpO1xufSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX0NvbW1lbnRDYXJkLS14SUhCeSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5zcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX2hlYWRlci0tZHNIXzMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX3VzZXJuYW1lLS1kdzgyVyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRDYXJkLUNvbW1lbnRDYXJkLW1vZHVsZV9fbG9hZGluZy0tVjBpWjEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50Q2FyZC9Db21tZW50Q2FyZC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Db21tZW50Q2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VybmFtZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmcge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJDb21tZW50Q2FyZFwiOiBcInNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRDYXJkLUNvbW1lbnRDYXJkLW1vZHVsZV9fQ29tbWVudENhcmQtLXhJSEJ5XCIsXG5cdFwiaGVhZGVyXCI6IFwic3JjLWVudGl0aWVzLUNvbW1lbnQtdWktQ29tbWVudENhcmQtQ29tbWVudENhcmQtbW9kdWxlX19oZWFkZXItLWRzSF8zXCIsXG5cdFwidXNlcm5hbWVcIjogXCJzcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX3VzZXJuYW1lLS1kdzgyV1wiLFxuXHRcImxvYWRpbmdcIjogXCJzcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX2xvYWRpbmctLVYwaVoxXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlLUFydGljbGVEZXRhaWxzUGFnZS1tb2R1bGVfX2NvbW1lbnRUaXRsZS0tZm95RXMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlLUFydGljbGVEZXRhaWxzUGFnZS1tb2R1bGVfX3JlY29tbWVuZGF0aW9ucy0tTndRbFMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2UvQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFydGljbGVEZXRhaWxzUGFnZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY29tbWVuZGF0aW9ucyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb21tZW50VGl0bGVcIjogXCJzcmMtcGFnZXMtQXJ0aWNsZURldGFpbHNQYWdlLXVpLUFydGljbGVEZXRhaWxzUGFnZS1BcnRpY2xlRGV0YWlsc1BhZ2UtbW9kdWxlX19jb21tZW50VGl0bGUtLWZveUVzXCIsXG5cdFwicmVjb21tZW5kYXRpb25zXCI6IFwic3JjLXBhZ2VzLUFydGljbGVEZXRhaWxzUGFnZS11aS1BcnRpY2xlRGV0YWlsc1BhZ2UtQXJ0aWNsZURldGFpbHNQYWdlLW1vZHVsZV9fcmVjb21tZW5kYXRpb25zLS1Od1FsU1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Db21tZW50Q2FyZC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbW1lbnRDYXJkLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbW1lbnRDYXJkLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCB7IENvbW1lbnRMaXN0IH0gZnJvbSAnLi91aS9Db21tZW50TGlzdC9Db21tZW50TGlzdCc7XG4iLCJleHBvcnQgeyBBZGRDb21tZW50Rm9ybUFzeW5jIGFzIEFkZENvbW1lbnRGb3JtIH0gZnJvbSAnLi4vYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0uYXN5bmMnO1xuIiwiaW1wb3J0IHsgcnRrQXBpIH0gZnJvbSAnc2hhcmVkL2FwaS9ydGtBcGknO1xudmFyIHJlY29tbWVuZGF0aW9uc0FwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xuICAgIGVuZHBvaW50czogZnVuY3Rpb24gKGJ1aWxkKSB7IHJldHVybiAoe1xuICAgICAgICBnZXRBcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdDogYnVpbGQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGZ1bmN0aW9uIChsaW1pdCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXJ0aWNsZXMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgfSksXG4gICAgfSk7IH0sXG4gICAgb3ZlcnJpZGVFeGlzdGluZzogZmFsc2UsXG59KTtcbmV4cG9ydCB2YXIgdXNlQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QgPSByZWNvbW1lbmRhdGlvbnNBcGkudXNlR2V0QXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3RRdWVyeTtcbiIsImV4cG9ydCB7IEFydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0IH0gZnJvbSAnLi91aS9BcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdC9BcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCc7XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgZ2V0QXJ0aWNsZURldGFpbHNEYXRhIH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSc7XG5pbXBvcnQgeyBnZXRVc2VyQXV0aERhdGEgfSBmcm9tICdlbnRpdGllcy9Vc2VyJztcbmV4cG9ydCB2YXIgZ2V0Q2FuRWRpdEFydGljbGUgPSBjcmVhdGVTZWxlY3RvcihnZXRBcnRpY2xlRGV0YWlsc0RhdGEsIGdldFVzZXJBdXRoRGF0YSwgZnVuY3Rpb24gKGFydGljbGUsIHVzZXIpIHtcbiAgICBpZiAoIWFydGljbGUgfHwgIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYXJ0aWNsZS51c2VyLmlkID09PSB1c2VyLmlkO1xufSk7XG4iLCJleHBvcnQgdmFyIGdldEFydGljbGVDb21tZW50c0lzTG9hZGluZyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIChfYiA9IChfYSA9IHN0YXRlLmFydGljbGVEZXRhaWxzUGFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbW1lbnRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaXNMb2FkaW5nO1xufTtcbmV4cG9ydCB2YXIgZ2V0QXJ0aWNsZUNvbW1lbnRzRXJyb3IgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiAoX2IgPSAoX2EgPSBzdGF0ZS5hcnRpY2xlRGV0YWlsc1BhZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb21tZW50cykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVycm9yO1xufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGdldEFydGljbGVEZXRhaWxzRGF0YSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUvbW9kZWwvc2VsZWN0b3JzL2FydGljbGVEZXRhaWxzJztcbmltcG9ydCB7IGdldFVzZXJBdXRoRGF0YSB9IGZyb20gJ2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IHsgZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkIH0gZnJvbSAnLi4vZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZCc7XG5leHBvcnQgdmFyIGFkZENvbW1lbnRGb3JBcnRpY2xlID0gY3JlYXRlQXN5bmNUaHVuaygnYXJ0aWNsZURldGFpbHMvYWRkQ29tbWVudEZvckFydGljbGUnLCBmdW5jdGlvbiAodGV4dCwgdGh1bmtBcGkpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dHJhLCBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSwgdXNlckRhdGEsIGFydGljbGUsIHJlc3BvbnNlLCBlXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXh0cmEgPSB0aHVua0FwaS5leHRyYSwgZGlzcGF0Y2ggPSB0aHVua0FwaS5kaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlID0gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSA9IHRodW5rQXBpLmdldFN0YXRlO1xuICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gZ2V0VXNlckF1dGhEYXRhKGdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgIGFydGljbGUgPSBnZXRBcnRpY2xlRGV0YWlsc0RhdGEoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGF0YSB8fCAhdGV4dCB8fCAhYXJ0aWNsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVqZWN0V2l0aFZhbHVlKCdubyBkYXRhJyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBleHRyYS5hcGkucG9zdCgnL2NvbW1lbnRzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZDogYXJ0aWNsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlckRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoQ29tbWVudHNCeUFydGljbGVJZChhcnRpY2xlLmlkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVqZWN0V2l0aFZhbHVlKCdlcnJvcicpXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5leHBvcnQgdmFyIGZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ2FydGljbGVEZXRhaWxzUGFnZS9mZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMnLCBmdW5jdGlvbiAocHJvcHMsIHRodW5rQXBpKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRyYSwgcmVqZWN0V2l0aFZhbHVlLCByZXNwb25zZSwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV4dHJhID0gdGh1bmtBcGkuZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSA9IHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBleHRyYS5hcGkuZ2V0KCcvYXJ0aWNsZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gX2V4cGFuZDogJ3VzZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVqZWN0V2l0aFZhbHVlKCdlcnJvcicpXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5leHBvcnQgdmFyIGZldGNoQ29tbWVudHNCeUFydGljbGVJZCA9IGNyZWF0ZUFzeW5jVGh1bmsoJ2FydGljbGVEZXRhaWxzL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZCcsIGZ1bmN0aW9uIChhcnRpY2xlSWQsIHRodW5rQXBpKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRyYSwgcmVqZWN0V2l0aFZhbHVlLCByZXNwb25zZSwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV4dHJhID0gdGh1bmtBcGkuZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSA9IHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWFydGljbGVJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVqZWN0V2l0aFZhbHVlKCdlcnJvcicpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZXh0cmEuYXBpLmdldCgnL2NvbW1lbnRzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkOiBhcnRpY2xlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V4cGFuZDogJ3VzZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVqZWN0V2l0aFZhbHVlKCdlcnJvcicpXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkIH0gZnJvbSAnLi4vc2VydmljZXMvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZCc7XG52YXIgY29tbWVudHNBZGFwdGVyID0gY3JlYXRlRW50aXR5QWRhcHRlcih7XG4gICAgc2VsZWN0SWQ6IGZ1bmN0aW9uIChjb21tZW50KSB7IHJldHVybiBjb21tZW50LmlkOyB9LFxufSk7XG5leHBvcnQgdmFyIGdldEFydGljbGVDb21tZW50cyA9IGNvbW1lbnRzQWRhcHRlci5nZXRTZWxlY3RvcnMoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoKF9hID0gc3RhdGUuYXJ0aWNsZURldGFpbHNQYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29tbWVudHMpIHx8IGNvbW1lbnRzQWRhcHRlci5nZXRJbml0aWFsU3RhdGUoKTtcbn0pO1xudmFyIGFydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlJyxcbiAgICBpbml0aWFsU3RhdGU6IGNvbW1lbnRzQWRhcHRlci5nZXRJbml0aWFsU3RhdGUoe1xuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBpZHM6IFsnMScsICcyJ10sXG4gICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnY29tbWVudCAxJyxcbiAgICAgICAgICAgICAgICB1c2VyOiB7IGlkOiAnMScsIHVzZXJuYW1lOiAnMScgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnY29tbWVudCAyJyxcbiAgICAgICAgICAgICAgICB1c2VyOiB7IGlkOiAnMicsIHVzZXJuYW1lOiAnMicgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgfSksXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIGV4dHJhUmVkdWNlcnM6IGZ1bmN0aW9uIChidWlsZGVyKSB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoQ29tbWVudHNCeUFydGljbGVJZC5wZW5kaW5nLCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoQ29tbWVudHNCeUFydGljbGVJZC5mdWxmaWxsZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbW1lbnRzQWRhcHRlci5zZXRBbGwoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoQ29tbWVudHNCeUFydGljbGVJZC5yZWplY3RlZCwgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xuZXhwb3J0IHZhciBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlciA9IGFydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlRW50aXR5QWRhcHRlciwgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucywgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMvZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zJztcbnZhciByZWNvbW1lbmRhdGlvbnNBZGFwdGVyID0gY3JlYXRlRW50aXR5QWRhcHRlcih7XG4gICAgc2VsZWN0SWQ6IGZ1bmN0aW9uIChhcnRpY2xlKSB7IHJldHVybiBhcnRpY2xlLmlkOyB9LFxufSk7XG5leHBvcnQgdmFyIGdldEFydGljbGVSZWNvbW1lbmRhdGlvbnMgPSByZWNvbW1lbmRhdGlvbnNBZGFwdGVyLmdldFNlbGVjdG9ycyhmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICgoX2EgPSBzdGF0ZS5hcnRpY2xlRGV0YWlsc1BhZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZWNvbW1lbmRhdGlvbnMpIHx8IHJlY29tbWVuZGF0aW9uc0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKCk7XG59KTtcbnZhciBhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbW1lbmRhdGlvbnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlJyxcbiAgICBpbml0aWFsU3RhdGU6IHJlY29tbWVuZGF0aW9uc0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKHtcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaWRzOiBbXSxcbiAgICAgICAgZW50aXRpZXM6IHt9LFxuICAgIH0pLFxuICAgIHJlZHVjZXJzOiB7fSxcbiAgICBleHRyYVJlZHVjZXJzOiBmdW5jdGlvbiAoYnVpbGRlcikge1xuICAgICAgICBidWlsZGVyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMucGVuZGluZywgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMuZnVsZmlsbGVkLCBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZWNvbW1lbmRhdGlvbnNBZGFwdGVyLnNldEFsbChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zLnJlamVjdGVkLCBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG5leHBvcnQgdmFyIGFydGljbGVEZXRhaWxzUGFnZVJlY29tbWVuZGF0aW9uc1JlZHVjZXIgPSBhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbW1lbmRhdGlvbnNTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlciB9IGZyb20gJy4vYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlJztcbmltcG9ydCB7IGFydGljbGVEZXRhaWxzUGFnZVJlY29tbWVuZGF0aW9uc1JlZHVjZXIgfSBmcm9tICcuL2FydGljbGVEZXRhaWxzUGFnZVJlY29tbWVuZGF0aW9uc1NsaWNlJztcbmV4cG9ydCB2YXIgYXJ0aWNsZURldGFpbHNQYWdlUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcmVjb21tZW5kYXRpb25zOiBhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbW1lbmRhdGlvbnNSZWR1Y2VyLFxuICAgIGNvbW1lbnRzOiBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlcixcbn0pO1xuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJtZW1vIiwidXNlVHJhbnNsYXRpb24iLCJSb3V0ZVBhdGgiLCJjbGFzc05hbWVzIiwiQXZhdGFyIiwiVlN0YWNrIiwiVGV4dCIsIlNrZWxldG9uIiwiQXBwTGluayIsImNscyIsIkNvbW1lbnRDYXJkIiwiX3MiLCJfYyIsInByb3BzIiwiY29tbWVudCIsImlzTG9hZGluZyIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJjaGlsZHJlbiIsImhlYWRlciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwidXNlcm5hbWUiLCJ0ZXh0IiwibWF4IiwiZ2FwIiwidG8iLCJjb25jYXQiLCJwcm9maWxlIiwidXNlciIsImlkIiwiYXZhdGFyIiwic2l6ZSIsInNyYyIsInRpdGxlIiwiX2MyIiwiJFJlZnJlc2hSZWckIiwiQ29tbWVudExpc3QiLCJjb21tZW50cyIsIm1hcCIsImxhenkiLCJBZGRDb21tZW50Rm9ybUFzeW5jIiwiQXJ0aWNsZUxpc3QiLCJUZXh0U2l6ZSIsInVzZUFydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0IiwiQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QiLCJfYSIsImFydGljbGVzIiwiZGF0YSIsImVycm9yIiwiTCIsInRhcmdldCIsIkFkZENvbW1lbnRGb3JtIiwidXNlQ2FsbGJhY2siLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlSW5pdGlhbEVmZmVjdCIsImdldEFydGljbGVDb21tZW50cyIsImZldGNoQ29tbWVudHNCeUFydGljbGVJZCIsImFkZENvbW1lbnRGb3JBcnRpY2xlIiwiZ2V0QXJ0aWNsZUNvbW1lbnRzSXNMb2FkaW5nIiwiQXJ0aWNsZURldGFpbHNDb21tZW50cyIsImRpc3BhdGNoIiwic2VsZWN0QWxsIiwiY29tbWVudHNJc0xvYWRpbmciLCJvblNlbmRDb21tZW50IiwiQXJ0aWNsZURldGFpbHMiLCJ1c2VQYXJhbXMiLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwiUGFnZSIsImFydGljbGVEZXRhaWxzUGFnZVJlZHVjZXIiLCJBcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIiLCJyZWR1Y2VycyIsImFydGljbGVEZXRhaWxzUGFnZSIsIkFydGljbGVEZXRhaWxzUGFnZSIsInJlbW92ZUFmdGVyVW5tb3VudCIsImdldEFydGljbGVEZXRhaWxzRGF0YSIsImdldFVzZXJBdXRoRGF0YSIsInVzZU5hdmlnYXRlIiwiQnV0dG9uIiwiSFN0YWNrIiwiZ2V0Q2FuRWRpdEFydGljbGUiLCJuYXZpZ2F0ZSIsInVzZXJEYXRhIiwiYXJ0aWNsZSIsImNhbkVkaXQiLCJvbkJhY2tUb0xpc3QiLCJvbkVkaXRBcnRpY2xlIiwianVzdGlmeSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9