"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_pages_ArticlesPage_ui_ArticlesPage_ArticlesPage_tsx"],{

/***/ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.tsx":
/*!*****************************************************************************!*\
  !*** ./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.tsx ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleSortSelector": () => (/* binding */ ArticleSortSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Select/Select */ "./src/shared/ui/Select/Select.tsx");
/* harmony import */ var _model_types_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/types/article */ "./src/entities/Article/model/types/article.ts");
/* harmony import */ var _ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArticleSortSelector.module.scss */ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss");
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







var ArticleSortSelector = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(function (props) {
  _s();
  var sort = props.sort,
    order = props.order,
    className = props.className,
    onChangeSort = props.onChangeSort,
    onChangeOrder = props.onChangeOrder;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)().t;
  var orderOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return [{
      value: 'asc',
      content: t('ascending')
    }, {
      value: 'desc',
      content: t('descending')
    }];
  }, [t]);
  var sortFieldOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return [{
      value: _model_types_article__WEBPACK_IMPORTED_MODULE_4__.ArticleSortField.TITLE,
      content: t('title')
    }, {
      value: _model_types_article__WEBPACK_IMPORTED_MODULE_4__.ArticleSortField.VIEWS,
      content: t('views count')
    }, {
      value: _model_types_article__WEBPACK_IMPORTED_MODULE_4__.ArticleSortField.CREATED,
      content: t('created at')
    }];
  }, [t]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].ArticleSortSelector, {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
      options: sortFieldOptions,
      label: t('sort by'),
      value: sort,
      onChange: onChangeSort
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
      options: orderOptions,
      label: t('by'),
      value: order,
      onChange: onChangeOrder,
      className: _ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].order
    })]
  }));
}, "HQkTh7I6SHYXyXkNEMQO5gqfqO8=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
})), "HQkTh7I6SHYXyXkNEMQO5gqfqO8=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
});
_c2 = ArticleSortSelector;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleSortSelector$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleSortSelector");

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

/***/ "./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleInfiniteList": () => (/* binding */ ArticleInfiniteList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









var ArticleInfiniteList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c = _s(function (props) {
  _s();
  var className = props.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)().t;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  var articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_7__.getArticles.selectAll);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_6__.getArticlesPageIsLoading);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_6__.getArticlesPageError);
  var view = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_6__.getArticlesPageView);
  if (error) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {
      text: t('error while articles render')
    });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_1__.ArticleList, {
    className: className,
    isLoading: isLoading,
    view: view,
    articles: articles
  });
}, "7Zc8Aw1kmVoXXWHTV6OSozN09c4=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
})), "7Zc8Aw1kmVoXXWHTV6OSozN09c4=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});
_c2 = ArticleInfiniteList;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleInfiniteList$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleInfiniteList");

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

/***/ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var pages_ArticlesPage_ui_ArticleInfiniteList_ArticleInfiniteList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList */ "./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var widgets_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! widgets/Page/Page */ "./src/widgets/Page/Page.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _ArticlesPageFilters_ArticlesPageFilters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ArticlesPageFilters/ArticlesPageFilters */ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx");
/* harmony import */ var _model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/services/initArticlesPage/initArticlesPage */ "./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts");
/* harmony import */ var _model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/services/fetchNextArticlesPage/fetchNextArticlesPage */ "./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArticlesPage.module.scss */ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss");
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
  articlesPage: _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageReducer
};
var ArticlesPage = function ArticlesPage(props) {
  _s();
  var className = props.className;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  var searchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useSearchParams)()[0];
  var onLoadNextPart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    if (true) {
      dispatch((0,_model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_10__.fetchNextArticlesPage)());
    }
  }, [dispatch]);
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect)(function () {
    dispatch((0,_model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_9__.initArticlesPage)(searchParams));
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__.DynamicModuleLoader, __assign({
    reducers: reducers,
    removeAfterUnmount: false
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page, __assign({
      onScrollEnd: onLoadNextPart,
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].ArticlesPage, {}, [className])
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ArticlesPageFilters_ArticlesPageFilters__WEBPACK_IMPORTED_MODULE_8__.ArticlesPageFilters, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pages_ArticlesPage_ui_ArticleInfiniteList_ArticleInfiniteList__WEBPACK_IMPORTED_MODULE_1__.ArticleInfiniteList, {})]
    }))
  }));
};
_s(ArticlesPage, "pZFkiNWDFvq6m3xYGqpnuh44VSU=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useSearchParams, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect];
});
_c = ArticlesPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(ArticlesPage));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlesPage");
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

/***/ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesPageFilters": () => (/* binding */ ArticlesPageFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var entities_Article_ui_ArticleSortSelector_ArticleSortSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/Article/ui/ArticleSortSelector/ArticleSortSelector */ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.tsx");
/* harmony import */ var shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hooks/useDebounce/useDebounce */ "./src/shared/lib/hooks/useDebounce/useDebounce.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var _model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ArticlesPageFilters.module.scss */ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");
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















var ArticlesPageFilters = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(_c = _s(function (_a) {
  _s();
  var className = _a.className;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)().t;
  var view = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_12__.getArticlesPageView);
  var sort = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_12__.getArticlesPageSort);
  var order = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_12__.getArticlesPageOrder);
  var search = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_12__.getArticlesPageSearch);
  var type = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_12__.getArticlesPageType);
  var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    dispatch((0,_model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_10__.fetchArticlesList)({
      replace: true
    }));
  }, [dispatch]);
  var debouncedFetchData = (0,shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(fetchData, 500);
  var onChangeView = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (view) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setView(view));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  var onChangeSort = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newSort) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setSort(newSort));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  var onChangeOrder = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newOrder) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setOrder(newOrder));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  var onChangeSearch = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (search) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setSearch(search));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [debouncedFetchData, dispatch]);
  var onChangeType = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (value) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setType(value));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_11__.articlesPageActions.setPage(1));
    fetchData();
  }, [fetchData, dispatch]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_6__.classNames)(_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].ArticlesPageFilters, {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].sortWrapper
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article_ui_ArticleSortSelector_ArticleSortSelector__WEBPACK_IMPORTED_MODULE_2__.ArticleSortSelector, {
        sort: sort,
        order: order,
        onChangeSort: onChangeSort,
        onChangeOrder: onChangeOrder
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_1__.ArticleViewSelector, {
        view: view,
        onViewClick: onChangeView
      })]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_8__.Card, __assign({
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].search
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__.Input, {
        value: search,
        onChange: onChangeSearch,
        placeholder: t('search')
      })
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_1__.ArticleTypeTabs, {
      value: type,
      onChangeType: onChangeType,
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].tabs
    })]
  }));
}, "/Tzkxn9D7Ras6l44YVk2jH3tWZQ=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch, react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_3__.useDebounce];
})), "/Tzkxn9D7Ras6l44YVk2jH3tWZQ=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch, react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_3__.useDebounce];
});
_c2 = ArticlesPageFilters;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlesPageFilters$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticlesPageFilters");

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

/***/ "./src/shared/ui/Select/Select.tsx":
/*!*****************************************!*\
  !*** ./src/shared/ui/Select/Select.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Select.module.scss */ "./src/shared/ui/Select/Select.module.scss");
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




var Select = function Select(props) {
  _s();
  var className = props.className,
    label = props.label,
    options = props.options,
    value = props.value,
    onChange = props.onChange,
    readonly = props.readonly;
  var onChangeHandler = function onChangeHandler(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
  };
  var optionsList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return options === null || options === void 0 ? void 0 : options.map(function (opt) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", __assign({
        className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].option,
        value: opt.value
      }, {
        children: opt.content
      }), opt.value);
    });
  }, [options]);
  var mods = {};
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_Select_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Wrapper, {}, [className])
  }, {
    children: [label && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].label
    }, {
      children: "".concat(label, " >")
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", __assign({
      disabled: readonly,
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].select,
      value: value,
      onChange: onChangeHandler
    }, {
      children: optionsList
    }))]
  }));
};
_s(Select, "4eFkyZkU+k+KyxWsHbvQKebASqU=");
_c = Select;
var _c;
__webpack_require__.$Refresh$.register(_c, "Select");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss ***!
  \**********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".src-entities-Article-ui-ArticleSortSelector-ArticleSortSelector-module__ArticleSortSelector--gSPXP {\n  display: flex;\n  align-items: center;\n}\n\n.src-entities-Article-ui-ArticleSortSelector-ArticleSortSelector-module__order--Fez_9 {\n  margin-left: 8px;\n}", "",{"version":3,"sources":["webpack://./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;AACF","sourcesContent":[".ArticleSortSelector {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.order {\r\n  margin-left: 8px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ArticleSortSelector": "src-entities-Article-ui-ArticleSortSelector-ArticleSortSelector-module__ArticleSortSelector--gSPXP",
	"order": "src-entities-Article-ui-ArticleSortSelector-ArticleSortSelector-module__order--Fez_9"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss ***!
  \**********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-ArticlesPage-ui-ArticlesPage-ArticlesPage-module__ArticlesPage--i0h17 {\n  min-height: 100%;\n}\n\n.src-pages-ArticlesPage-ui-ArticlesPage-ArticlesPage-module__list--UsH35 {\n  margin-top: 30px;\n}", "",{"version":3,"sources":["webpack://./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;AACF;;AAEA;EACE,gBAAA;AACF","sourcesContent":[".ArticlesPage {\r\n  min-height: 100%;\r\n}\r\n\r\n.list {\r\n  margin-top: 30px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ArticlesPage": "src-pages-ArticlesPage-ui-ArticlesPage-ArticlesPage-module__ArticlesPage--i0h17",
	"list": "src-pages-ArticlesPage-ui-ArticlesPage-ArticlesPage-module__list--UsH35"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss ***!
  \************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__sortWrapper--pyOjo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__search--QkNSe {\n  margin-top: 16px;\n}\n\n.src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__tabs--JHbc4 {\n  margin-top: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,gBAAA;AACF","sourcesContent":[".sortWrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.search {\r\n  margin-top: 16px;\r\n}\r\n\r\n.tabs {\r\n  margin-top: 16px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sortWrapper": "src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__sortWrapper--pyOjo",
	"search": "src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__search--QkNSe",
	"tabs": "src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__tabs--JHbc4"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Select-Select-module__Wrapper--cidfd {\n  display: flex;\n}\n\n.src-shared-ui-Select-Select-module__label--G1uuf {\n  margin-right: 5px;\n}\n\n.src-shared-ui-Select-Select-module__select--VOKOu {\n  background: none;\n  outline: none;\n  color: var(--primary-color);\n  padding: 2px 10px 2px 2px;\n  border: 1px solid var(--primary-color);\n}\n\n.src-shared-ui-Select-Select-module__option--JkXz9 {\n  color: var(--inverted-primary-color);\n  background: var(--inverted-bg-color);\n}", "",{"version":3,"sources":["webpack://./src/shared/ui/Select/Select.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,2BAAA;EACA,yBAAA;EACA,sCAAA;AACF;;AAEA;EACE,oCAAA;EACA,oCAAA;AACF","sourcesContent":[".Wrapper {\r\n  display: flex;\r\n}\r\n\r\n.label {\r\n  margin-right: 5px;\r\n}\r\n\r\n.select {\r\n  background: none;\r\n  outline: none;\r\n  color: var(--primary-color);\r\n  padding: 2px 10px 2px 2px;\r\n  border: 1px solid var(--primary-color);\r\n}\r\n\r\n.option {\r\n  color: var(--inverted-primary-color);\r\n  background: var(--inverted-bg-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Wrapper": "src-shared-ui-Select-Select-module__Wrapper--cidfd",
	"label": "src-shared-ui-Select-Select-module__label--G1uuf",
	"select": "src-shared-ui-Select-Select-module__select--VOKOu",
	"option": "src-shared-ui-Select-Select-module__option--JkXz9"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss":
/*!*************************************************************************************!*\
  !*** ./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss ***!
  \*************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleSortSelector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleSortSelector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleSortSelector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss ***!
  \*************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss ***!
  \***************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Select/Select.module.scss":
/*!*************************************************!*\
  !*** ./src/shared/ui/Select/Select.module.scss ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArticlesPageError": () => (/* binding */ getArticlesPageError),
/* harmony export */   "getArticlesPageHasMore": () => (/* binding */ getArticlesPageHasMore),
/* harmony export */   "getArticlesPageInited": () => (/* binding */ getArticlesPageInited),
/* harmony export */   "getArticlesPageIsLoading": () => (/* binding */ getArticlesPageIsLoading),
/* harmony export */   "getArticlesPageLimit": () => (/* binding */ getArticlesPageLimit),
/* harmony export */   "getArticlesPageNum": () => (/* binding */ getArticlesPageNum),
/* harmony export */   "getArticlesPageOrder": () => (/* binding */ getArticlesPageOrder),
/* harmony export */   "getArticlesPageSearch": () => (/* binding */ getArticlesPageSearch),
/* harmony export */   "getArticlesPageSort": () => (/* binding */ getArticlesPageSort),
/* harmony export */   "getArticlesPageType": () => (/* binding */ getArticlesPageType),
/* harmony export */   "getArticlesPageView": () => (/* binding */ getArticlesPageView)
/* harmony export */ });
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var getArticlesPageIsLoading = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };
var getArticlesPageError = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.error; };
var getArticlesPageView = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.view) || entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.SMALL; };
var getArticlesPageNum = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.page) || 1; };
var getArticlesPageLimit = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.limit) || 9; };
var getArticlesPageHasMore = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.hasMore; };
var getArticlesPageInited = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a._inited; };
var getArticlesPageSort = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.sort) !== null && _b !== void 0 ? _b : entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleSortField.CREATED; };
var getArticlesPageOrder = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.order) !== null && _b !== void 0 ? _b : 'asc'; };
var getArticlesPageSearch = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.search) !== null && _b !== void 0 ? _b : ''; };
var getArticlesPageType = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL; };


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

/***/ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts":
/*!**************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchArticlesList": () => (/* binding */ fetchArticlesList)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var shared_lib_url_addQueryParams_addQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/url/addQueryParams/addQueryParams */ "./src/shared/lib/url/addQueryParams/addQueryParams.ts");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
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




var fetchArticlesList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlesPage/fetchArticlesList', function (props, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, getState, limit, sort, order, search, page, type, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue, getState = thunkApi.getState;
                limit = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageLimit)(getState());
                sort = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageSort)(getState());
                order = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageOrder)(getState());
                search = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageSearch)(getState());
                page = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageNum)(getState());
                type = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageType)(getState());
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                (0,shared_lib_url_addQueryParams_addQueryParams__WEBPACK_IMPORTED_MODULE_1__.addQueryParams)({
                    sort: sort,
                    order: order,
                    search: search,
                    type: type,
                });
                return [4 /*yield*/, extra.api.get('/articles', {
                        params: {
                            _expand: 'user',
                            _limit: limit,
                            _page: page,
                            _sort: sort,
                            _order: order,
                            q: search,
                            type: type === entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL ? undefined : type,
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

/***/ "./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts":
/*!**********************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchNextArticlesPage": () => (/* binding */ fetchNextArticlesPage)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
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




var fetchNextArticlesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlesPage/fetchNextArticlesPage', function (_, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var getState, dispatch, page, hasMore, isLoading;
    return __generator(this, function (_a) {
        getState = thunkApi.getState, dispatch = thunkApi.dispatch;
        page = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageNum)(getState());
        hasMore = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageHasMore)(getState());
        isLoading = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageIsLoading)(getState());
        if (hasMore && !isLoading) {
            dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setPage(page + 1));
            dispatch((0,_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList)({}));
        }
        return [2 /*return*/];
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

/***/ "./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts":
/*!************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initArticlesPage": () => (/* binding */ initArticlesPage)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
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




var initArticlesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlesPage/initArticlesPage', function (searchParams, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var getState, dispatch, inited, orderFromUrl, sortFromUrl, searchFromUrl, typeFromUrl;
    return __generator(this, function (_a) {
        getState = thunkApi.getState, dispatch = thunkApi.dispatch;
        inited = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageInited)(getState());
        if (!inited) {
            orderFromUrl = searchParams.get('order');
            sortFromUrl = searchParams.get('sort');
            searchFromUrl = searchParams.get('search');
            typeFromUrl = searchParams.get('type');
            if (orderFromUrl) {
                dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setType(typeFromUrl));
            }
            dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.initState());
            dispatch((0,_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList)({}));
        }
        return [2 /*return*/];
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

/***/ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts":
/*!******************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articlesPageActions": () => (/* binding */ articlesPageActions),
/* harmony export */   "articlesPageReducer": () => (/* binding */ articlesPageReducer),
/* harmony export */   "getArticles": () => (/* binding */ getArticles)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/const/localstorage */ "./src/shared/const/localstorage.ts");
/* harmony import */ var _services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var articlesAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createEntityAdapter)({
    selectId: function (article) { return article.id; },
});
var getArticles = articlesAdapter.getSelectors(function (state) { return state.articlesPage || articlesAdapter.getInitialState(); });
var articlesPageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.SMALL,
        page: 1,
        limit: 9,
        order: 'asc',
        search: '',
        sort: entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleSortField.CREATED,
        hasMore: true,
        _inited: false,
        type: entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL,
    }),
    reducers: {
        setView: function (state, action) {
            state.view = action.payload;
            localStorage.setItem(shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        setLimit: function (state, action) {
            state.limit = action.payload;
        },
        setOrder: function (state, action) {
            state.order = action.payload;
        },
        setSearch: function (state, action) {
            state.search = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
        setType: function (state, action) {
            state.type = action.payload;
        },
        initState: function (state) {
            var view = localStorage.getItem(shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.ARTICLES_VIEW_LOCALSTORAGE_KEY);
            state.view = view;
            state.limit = view === entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        })
            .addCase(_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.fulfilled, function (state, action) {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.limit;
            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            }
            else {
                articlesAdapter.addMany(state, action.payload);
            }
        })
            .addCase(_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
var articlesPageReducer = articlesPageSlice.reducer, articlesPageActions = articlesPageSlice.actions;


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

/***/ "./src/shared/lib/hooks/useDebounce/useDebounce.ts":
/*!*********************************************************!*\
  !*** ./src/shared/lib/hooks/useDebounce/useDebounce.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDebounce": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useDebounce(callback, delay) {
    var timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(function () {
            callback.apply(void 0, args);
        }, delay);
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

/***/ "./src/shared/lib/url/addQueryParams/addQueryParams.ts":
/*!*************************************************************!*\
  !*** ./src/shared/lib/url/addQueryParams/addQueryParams.ts ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addQueryParams": () => (/* binding */ addQueryParams),
/* harmony export */   "getQueryParams": () => (/* binding */ getQueryParams)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function getQueryParams(params) {
    var searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return "?".concat(searchParams.toString());
}
function addQueryParams(params) {
    window.history.pushState(null, '', getQueryParams(params));
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0FydGljbGVzUGFnZV91aV9BcnRpY2xlc1BhZ2VfQXJ0aWNsZXNQYWdlX3RzeC4zMjkxNjQ3OWRkMGJmYmIyNjI1Ny5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7SUFDbkI7SUFDQSxPQUFPTixDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU9ILFFBQVEsQ0FBQ2EsS0FBSyxDQUFDLElBQUksRUFBRU4sU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFDOEQ7QUFDekI7QUFDUztBQUNlO0FBQ2I7QUFDWTtBQUNUO0FBQzdDLElBQUlrQixtQkFBbUIsZ0JBQUFDLEVBQUEsZUFBR1IsMkNBQUksQ0FBQVMsRUFBQSxHQUFBRCxFQUFBLENBQUMsVUFBVUUsS0FBSyxFQUFFO0VBQUFGLEVBQUE7RUFDbkQsSUFBSUcsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUk7SUFBRUMsS0FBSyxHQUFHRixLQUFLLENBQUNFLEtBQUs7SUFBRUMsU0FBUyxHQUFHSCxLQUFLLENB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c291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQXJ0aWNsZS91aS9BcnRpY2xlU29ydFNlbGVjdG9yL0FydGljbGVTb3J0U2VsZWN0b3IudHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlSW5maW5pdGVMaXN0L0FydGljbGVJbmZpbml0ZUxpc3QudHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2UvQXJ0aWNsZXNQYWdlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvdWkvQXJ0aWNsZXNQYWdlRmlsdGVycy9BcnRpY2xlc1BhZ2VGaWx0ZXJzLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvdWkvU2VsZWN0L1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQXJ0aWNsZS91aS9BcnRpY2xlU29ydFNlbGVjdG9yL0FydGljbGVTb3J0U2VsZWN0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZUZpbHRlcnMvQXJ0aWNsZXNQYWdlRmlsdGVycy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvdWkvU2VsZWN0L1NlbGVjdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9lbnRpdGllcy9BcnRpY2xlL3VpL0FydGljbGVTb3J0U2VsZWN0b3IvQXJ0aWNsZVNvcnRTZWxlY3Rvci5tb2R1bGUuc2Nzcz8yZjQzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2UvQXJ0aWNsZXNQYWdlLm1vZHVsZS5zY3NzP2E0MDAiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZUZpbHRlcnMvQXJ0aWNsZXNQYWdlRmlsdGVycy5tb2R1bGUuc2Nzcz9mYjA1Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3NoYXJlZC91aS9TZWxlY3QvU2VsZWN0Lm1vZHVsZS5zY3NzPzc3ZDkiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL21vZGVsL3NlcnZpY2VzL2ZldGNoQXJ0aWNsZXNMaXN0L2ZldGNoQXJ0aWNsZXNMaXN0LnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRBcnRpY2xlc1BhZ2UvZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS9tb2RlbC9zZXJ2aWNlcy9pbml0QXJ0aWNsZXNQYWdlL2luaXRBcnRpY2xlc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL21vZGVsL3NsaWNlcy9hcnRpY2xlc1BhZ2VTbGljZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvbGliL2hvb2tzL3VzZURlYm91bmNlL3VzZURlYm91bmNlLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3NoYXJlZC9saWIvdXJsL2FkZFF1ZXJ5UGFyYW1zL2FkZFF1ZXJ5UGFyYW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnc2hhcmVkL3VpL1NlbGVjdC9TZWxlY3QnO1xuaW1wb3J0IHsgQXJ0aWNsZVNvcnRGaWVsZCB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL2FydGljbGUnO1xuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVTb3J0U2VsZWN0b3IubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBBcnRpY2xlU29ydFNlbGVjdG9yID0gbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgc29ydCA9IHByb3BzLnNvcnQsIG9yZGVyID0gcHJvcHMub3JkZXIsIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgb25DaGFuZ2VTb3J0ID0gcHJvcHMub25DaGFuZ2VTb3J0LCBvbkNoYW5nZU9yZGVyID0gcHJvcHMub25DaGFuZ2VPcmRlcjtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcbiAgICB2YXIgb3JkZXJPcHRpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdmFsdWU6ICdhc2MnLCBjb250ZW50OiB0KCdhc2NlbmRpbmcnKSB9LFxuICAgICAgICB7IHZhbHVlOiAnZGVzYycsIGNvbnRlbnQ6IHQoJ2Rlc2NlbmRpbmcnKSB9LFxuICAgIF07IH0sIFt0XSk7XG4gICAgdmFyIHNvcnRGaWVsZE9wdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB2YWx1ZTogQXJ0aWNsZVNvcnRGaWVsZC5USVRMRSwgY29udGVudDogdCgndGl0bGUnKSB9LFxuICAgICAgICB7IHZhbHVlOiBBcnRpY2xlU29ydEZpZWxkLlZJRVdTLCBjb250ZW50OiB0KCd2aWV3cyBjb3VudCcpIH0sXG4gICAgICAgIHsgdmFsdWU6IEFydGljbGVTb3J0RmllbGQuQ1JFQVRFRCwgY29udGVudDogdCgnY3JlYXRlZCBhdCcpIH0sXG4gICAgXTsgfSwgW3RdKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5BcnRpY2xlU29ydFNlbGVjdG9yLCB7fSwgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtfanN4KFNlbGVjdCwgeyBvcHRpb25zOiBzb3J0RmllbGRPcHRpb25zLCBsYWJlbDogdCgnc29ydCBieScpLCB2YWx1ZTogc29ydCwgb25DaGFuZ2U6IG9uQ2hhbmdlU29ydCB9KSwgX2pzeChTZWxlY3QsIHsgb3B0aW9uczogb3JkZXJPcHRpb25zLCBsYWJlbDogdCgnYnknKSwgdmFsdWU6IG9yZGVyLCBvbkNoYW5nZTogb25DaGFuZ2VPcmRlciwgY2xhc3NOYW1lOiBjbHMub3JkZXIgfSldIH0pKSk7XG59KTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBcnRpY2xlTGlzdCB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnc2hhcmVkL3VpL1RleHQvVGV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VBcHBEaXNwYXRjaC91c2VBcHBEaXNwYXRjaCc7XG5pbXBvcnQgeyBnZXRBcnRpY2xlc1BhZ2VFcnJvciwgZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nLCBnZXRBcnRpY2xlc1BhZ2VWaWV3LCB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0QXJ0aWNsZXMgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMvYXJ0aWNsZXNQYWdlU2xpY2UnO1xuZXhwb3J0IHZhciBBcnRpY2xlSW5maW5pdGVMaXN0ID0gbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgdmFyIGFydGljbGVzID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXMuc2VsZWN0QWxsKTtcbiAgICB2YXIgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nKTtcbiAgICB2YXIgZXJyb3IgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VFcnJvcik7XG4gICAgdmFyIHZpZXcgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VWaWV3KTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIF9qc3goVGV4dCwgeyB0ZXh0OiB0KCdlcnJvciB3aGlsZSBhcnRpY2xlcyByZW5kZXInKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChfanN4KEFydGljbGVMaXN0LCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBpc0xvYWRpbmc6IGlzTG9hZGluZywgdmlldzogdmlldywgYXJ0aWNsZXM6IGFydGljbGVzIH0pKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBcnRpY2xlSW5maW5pdGVMaXN0IH0gZnJvbSAncGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVJbmZpbml0ZUxpc3QvQXJ0aWNsZUluZmluaXRlTGlzdCc7XG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyIH0gZnJvbSAnc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcic7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlSW5pdGlhbEVmZmVjdCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlSW5pdGlhbEVmZmVjdC91c2VJbml0aWFsRWZmZWN0JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd3aWRnZXRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFydGljbGVzUGFnZUZpbHRlcnMgfSBmcm9tICcuLi9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMnO1xuaW1wb3J0IHsgaW5pdEFydGljbGVzUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlcnZpY2VzL2luaXRBcnRpY2xlc1BhZ2UvaW5pdEFydGljbGVzUGFnZSc7XG5pbXBvcnQgeyBmZXRjaE5leHRBcnRpY2xlc1BhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRBcnRpY2xlc1BhZ2UvZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlJztcbmltcG9ydCB7IGFydGljbGVzUGFnZVJlZHVjZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMvYXJ0aWNsZXNQYWdlU2xpY2UnO1xuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVzUGFnZS5tb2R1bGUuc2Nzcyc7XG52YXIgcmVkdWNlcnMgPSB7XG4gICAgYXJ0aWNsZXNQYWdlOiBhcnRpY2xlc1BhZ2VSZWR1Y2VyLFxufTtcbnZhciBBcnRpY2xlc1BhZ2UgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgdmFyIHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpWzBdO1xuICAgIHZhciBvbkxvYWROZXh0UGFydCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9fUFJPSkVDVF9fICE9PSAnc3Rvcnlib29rJykge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlKCkpO1xuICAgICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdXNlSW5pdGlhbEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BhdGNoKGluaXRBcnRpY2xlc1BhZ2Uoc2VhcmNoUGFyYW1zKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChfanN4KER5bmFtaWNNb2R1bGVMb2FkZXIsIF9fYXNzaWduKHsgcmVkdWNlcnM6IHJlZHVjZXJzLCByZW1vdmVBZnRlclVubW91bnQ6IGZhbHNlIH0sIHsgY2hpbGRyZW46IF9qc3hzKFBhZ2UsIF9fYXNzaWduKHsgb25TY3JvbGxFbmQ6IG9uTG9hZE5leHRQYXJ0LCBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkFydGljbGVzUGFnZSwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChBcnRpY2xlc1BhZ2VGaWx0ZXJzLCB7fSksIF9qc3goQXJ0aWNsZUluZmluaXRlTGlzdCwge30pXSB9KSkgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBtZW1vKEFydGljbGVzUGFnZSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEFydGljbGVUeXBlVGFicywgQXJ0aWNsZVZpZXdTZWxlY3RvciwgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJztcbmltcG9ydCB7IEFydGljbGVTb3J0U2VsZWN0b3IgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlL3VpL0FydGljbGVTb3J0U2VsZWN0b3IvQXJ0aWNsZVNvcnRTZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlRGVib3VuY2UvdXNlRGVib3VuY2UnO1xuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZUFwcERpc3BhdGNoL3VzZUFwcERpc3BhdGNoJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzaGFyZWQvdWkvQ2FyZC9DYXJkJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnc2hhcmVkL3VpL0lucHV0L0lucHV0JztcbmltcG9ydCB7IGZldGNoQXJ0aWNsZXNMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvZmV0Y2hBcnRpY2xlc0xpc3QvZmV0Y2hBcnRpY2xlc0xpc3QnO1xuaW1wb3J0IHsgYXJ0aWNsZXNQYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVsL3NsaWNlcy9hcnRpY2xlc1BhZ2VTbGljZSc7XG5pbXBvcnQgeyBnZXRBcnRpY2xlc1BhZ2VPcmRlciwgZ2V0QXJ0aWNsZXNQYWdlU2VhcmNoLCBnZXRBcnRpY2xlc1BhZ2VTb3J0LCBnZXRBcnRpY2xlc1BhZ2VUeXBlLCBnZXRBcnRpY2xlc1BhZ2VWaWV3LCB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMnO1xuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBBcnRpY2xlc1BhZ2VGaWx0ZXJzID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XG4gICAgdmFyIHZpZXcgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VWaWV3KTtcbiAgICB2YXIgc29ydCA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZVNvcnQpO1xuICAgIHZhciBvcmRlciA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZU9yZGVyKTtcbiAgICB2YXIgc2VhcmNoID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlU2VhcmNoKTtcbiAgICB2YXIgdHlwZSA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZVR5cGUpO1xuICAgIHZhciBmZXRjaERhdGEgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXNMaXN0KHsgcmVwbGFjZTogdHJ1ZSB9KSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGRlYm91bmNlZEZldGNoRGF0YSA9IHVzZURlYm91bmNlKGZldGNoRGF0YSwgNTAwKTtcbiAgICB2YXIgb25DaGFuZ2VWaWV3ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRWaWV3KHZpZXcpKTtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKTtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW2Rpc3BhdGNoLCBmZXRjaERhdGFdKTtcbiAgICB2YXIgb25DaGFuZ2VTb3J0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld1NvcnQpIHtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRTb3J0KG5ld1NvcnQpKTtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKTtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW2Rpc3BhdGNoLCBmZXRjaERhdGFdKTtcbiAgICB2YXIgb25DaGFuZ2VPcmRlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdPcmRlcikge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldE9yZGVyKG5ld09yZGVyKSk7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSk7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtkaXNwYXRjaCwgZmV0Y2hEYXRhXSk7XG4gICAgdmFyIG9uQ2hhbmdlU2VhcmNoID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFNlYXJjaChzZWFyY2gpKTtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKTtcbiAgICAgICAgZGVib3VuY2VkRmV0Y2hEYXRhKCk7XG4gICAgfSwgW2RlYm91bmNlZEZldGNoRGF0YSwgZGlzcGF0Y2hdKTtcbiAgICB2YXIgb25DaGFuZ2VUeXBlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0VHlwZSh2YWx1ZSkpO1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFBhZ2UoMSkpO1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbZmV0Y2hEYXRhLCBkaXNwYXRjaF0pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkFydGljbGVzUGFnZUZpbHRlcnMsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuc29ydFdyYXBwZXIgfSwgeyBjaGlsZHJlbjogW19qc3goQXJ0aWNsZVNvcnRTZWxlY3RvciwgeyBzb3J0OiBzb3J0LCBvcmRlcjogb3JkZXIsIG9uQ2hhbmdlU29ydDogb25DaGFuZ2VTb3J0LCBvbkNoYW5nZU9yZGVyOiBvbkNoYW5nZU9yZGVyIH0pLCBfanN4KEFydGljbGVWaWV3U2VsZWN0b3IsIHsgdmlldzogdmlldywgb25WaWV3Q2xpY2s6IG9uQ2hhbmdlVmlldyB9KV0gfSkpLCBfanN4KENhcmQsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuc2VhcmNoIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdmFsdWU6IHNlYXJjaCwgb25DaGFuZ2U6IG9uQ2hhbmdlU2VhcmNoLCBwbGFjZWhvbGRlcjogdCgnc2VhcmNoJykgfSkgfSkpLCBfanN4KEFydGljbGVUeXBlVGFicywgeyB2YWx1ZTogdHlwZSwgb25DaGFuZ2VUeXBlOiBvbkNoYW5nZVR5cGUsIGNsYXNzTmFtZTogY2xzLnRhYnMgfSldIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vU2VsZWN0Lm1vZHVsZS5zY3NzJztcbmV4cG9ydCB2YXIgU2VsZWN0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgbGFiZWwgPSBwcm9wcy5sYWJlbCwgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsIHZhbHVlID0gcHJvcHMudmFsdWUsIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsIHJlYWRvbmx5ID0gcHJvcHMucmVhZG9ubHk7XG4gICAgdmFyIG9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICB2YXIgb3B0aW9uc0xpc3QgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gKF9qc3goXCJvcHRpb25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5vcHRpb24sIHZhbHVlOiBvcHQudmFsdWUgfSwgeyBjaGlsZHJlbjogb3B0LmNvbnRlbnQgfSksIG9wdC52YWx1ZSkpOyB9KTsgfSwgW29wdGlvbnNdKTtcbiAgICB2YXIgbW9kcyA9IHt9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLldyYXBwZXIsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW2xhYmVsICYmIChfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmxhYmVsIH0sIHsgY2hpbGRyZW46IFwiXCIuY29uY2F0KGxhYmVsLCBcIiA+XCIpIH0pKSksIF9qc3goXCJzZWxlY3RcIiwgX19hc3NpZ24oeyBkaXNhYmxlZDogcmVhZG9ubHksIGNsYXNzTmFtZTogY2xzLnNlbGVjdCwgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogb25DaGFuZ2VIYW5kbGVyIH0sIHsgY2hpbGRyZW46IG9wdGlvbnNMaXN0IH0pKV0gfSkpKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtZW50aXRpZXMtQXJ0aWNsZS11aS1BcnRpY2xlU29ydFNlbGVjdG9yLUFydGljbGVTb3J0U2VsZWN0b3ItbW9kdWxlX19BcnRpY2xlU29ydFNlbGVjdG9yLS1nU1BYUCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNyYy1lbnRpdGllcy1BcnRpY2xlLXVpLUFydGljbGVTb3J0U2VsZWN0b3ItQXJ0aWNsZVNvcnRTZWxlY3Rvci1tb2R1bGVfX29yZGVyLS1GZXpfOSB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZW50aXRpZXMvQXJ0aWNsZS91aS9BcnRpY2xlU29ydFNlbGVjdG9yL0FydGljbGVTb3J0U2VsZWN0b3IubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFydGljbGVTb3J0U2VsZWN0b3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJBcnRpY2xlU29ydFNlbGVjdG9yXCI6IFwic3JjLWVudGl0aWVzLUFydGljbGUtdWktQXJ0aWNsZVNvcnRTZWxlY3Rvci1BcnRpY2xlU29ydFNlbGVjdG9yLW1vZHVsZV9fQXJ0aWNsZVNvcnRTZWxlY3Rvci0tZ1NQWFBcIixcblx0XCJvcmRlclwiOiBcInNyYy1lbnRpdGllcy1BcnRpY2xlLXVpLUFydGljbGVTb3J0U2VsZWN0b3ItQXJ0aWNsZVNvcnRTZWxlY3Rvci1tb2R1bGVfX29yZGVyLS1GZXpfOVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZS1BcnRpY2xlc1BhZ2UtbW9kdWxlX19BcnRpY2xlc1BhZ2UtLWkwaDE3IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZS1BcnRpY2xlc1BhZ2UtbW9kdWxlX19saXN0LS1Vc0gzNSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQXJ0aWNsZXNQYWdlIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkFydGljbGVzUGFnZVwiOiBcInNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlLUFydGljbGVzUGFnZS1tb2R1bGVfX0FydGljbGVzUGFnZS0taTBoMTdcIixcblx0XCJsaXN0XCI6IFwic3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2UtQXJ0aWNsZXNQYWdlLW1vZHVsZV9fbGlzdC0tVXNIMzVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX19zb3J0V3JhcHBlci0tcHlPam8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZUZpbHRlcnMtQXJ0aWNsZXNQYWdlRmlsdGVycy1tb2R1bGVfX3NlYXJjaC0tUWtOU2Uge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLnNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlRmlsdGVycy1BcnRpY2xlc1BhZ2VGaWx0ZXJzLW1vZHVsZV9fdGFicy0tSkhiYzQge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvcnRXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNvcnRXcmFwcGVyXCI6IFwic3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX19zb3J0V3JhcHBlci0tcHlPam9cIixcblx0XCJzZWFyY2hcIjogXCJzcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZUZpbHRlcnMtQXJ0aWNsZXNQYWdlRmlsdGVycy1tb2R1bGVfX3NlYXJjaC0tUWtOU2VcIixcblx0XCJ0YWJzXCI6IFwic3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX190YWJzLS1KSGJjNFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19XcmFwcGVyLS1jaWRmZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1TZWxlY3QtU2VsZWN0LW1vZHVsZV9fbGFiZWwtLUcxdXVmIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1TZWxlY3QtU2VsZWN0LW1vZHVsZV9fc2VsZWN0LS1WT0tPdSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4IDJweCAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX29wdGlvbi0tSmtYejkge1xcbiAgY29sb3I6IHZhcigtLWludmVydGVkLXByaW1hcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL1NlbGVjdC9TZWxlY3QubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLG9DQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLldyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbnZlcnRlZC1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiV3JhcHBlclwiOiBcInNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX1dyYXBwZXItLWNpZGZkXCIsXG5cdFwibGFiZWxcIjogXCJzcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19sYWJlbC0tRzF1dWZcIixcblx0XCJzZWxlY3RcIjogXCJzcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19zZWxlY3QtLVZPS091XCIsXG5cdFwib3B0aW9uXCI6IFwic3JjLXNoYXJlZC11aS1TZWxlY3QtU2VsZWN0LW1vZHVsZV9fb3B0aW9uLS1Ka1h6OVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlU29ydFNlbGVjdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVNvcnRTZWxlY3Rvci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlU29ydFNlbGVjdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZXNQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZXNQYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVzUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlc1BhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3QubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3QubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgQXJ0aWNsZVNvcnRGaWVsZCwgQXJ0aWNsZVR5cGUsIEFydGljbGVWaWV3IH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSc7XG5leHBvcnQgdmFyIGdldEFydGljbGVzUGFnZUlzTG9hZGluZyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoKF9hID0gc3RhdGUuYXJ0aWNsZXNQYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNMb2FkaW5nKSB8fCBmYWxzZTsgfTtcbmV4cG9ydCB2YXIgZ2V0QXJ0aWNsZXNQYWdlRXJyb3IgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gc3RhdGUuYXJ0aWNsZXNQYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXJyb3I7IH07XG5leHBvcnQgdmFyIGdldEFydGljbGVzUGFnZVZpZXcgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHN0YXRlLmFydGljbGVzUGFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZpZXcpIHx8IEFydGljbGVWaWV3LlNNQUxMOyB9O1xuZXhwb3J0IHZhciBnZXRBcnRpY2xlc1BhZ2VOdW0gPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHN0YXRlLmFydGljbGVzUGFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhZ2UpIHx8IDE7IH07XG5leHBvcnQgdmFyIGdldEFydGljbGVzUGFnZUxpbWl0ID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuICgoX2EgPSBzdGF0ZS5hcnRpY2xlc1BhZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5saW1pdCkgfHwgOTsgfTtcbmV4cG9ydCB2YXIgZ2V0QXJ0aWNsZXNQYWdlSGFzTW9yZSA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSBzdGF0ZS5hcnRpY2xlc1BhZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oYXNNb3JlOyB9O1xuZXhwb3J0IHZhciBnZXRBcnRpY2xlc1BhZ2VJbml0ZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gc3RhdGUuYXJ0aWNsZXNQYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuX2luaXRlZDsgfTtcbmV4cG9ydCB2YXIgZ2V0QXJ0aWNsZXNQYWdlU29ydCA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2EsIF9iOyByZXR1cm4gKF9iID0gKF9hID0gc3RhdGUuYXJ0aWNsZXNQYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc29ydCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogQXJ0aWNsZVNvcnRGaWVsZC5DUkVBVEVEOyB9O1xuZXhwb3J0IHZhciBnZXRBcnRpY2xlc1BhZ2VPcmRlciA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2EsIF9iOyByZXR1cm4gKF9iID0gKF9hID0gc3RhdGUuYXJ0aWNsZXNQYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3JkZXIpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdhc2MnOyB9O1xuZXhwb3J0IHZhciBnZXRBcnRpY2xlc1BhZ2VTZWFyY2ggPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hLCBfYjsgcmV0dXJuIChfYiA9IChfYSA9IHN0YXRlLmFydGljbGVzUGFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNlYXJjaCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7IH07XG5leHBvcnQgdmFyIGdldEFydGljbGVzUGFnZVR5cGUgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hLCBfYjsgcmV0dXJuIChfYiA9IChfYSA9IHN0YXRlLmFydGljbGVzUGFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IEFydGljbGVUeXBlLkFMTDsgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEFydGljbGVUeXBlIH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSc7XG5pbXBvcnQgeyBhZGRRdWVyeVBhcmFtcyB9IGZyb20gJ3NoYXJlZC9saWIvdXJsL2FkZFF1ZXJ5UGFyYW1zL2FkZFF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IGdldEFydGljbGVzUGFnZUxpbWl0LCBnZXRBcnRpY2xlc1BhZ2VOdW0sIGdldEFydGljbGVzUGFnZU9yZGVyLCBnZXRBcnRpY2xlc1BhZ2VTZWFyY2gsIGdldEFydGljbGVzUGFnZVNvcnQsIGdldEFydGljbGVzUGFnZVR5cGUsIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2FydGljbGVzUGFnZVNlbGVjdG9ycyc7XG5leHBvcnQgdmFyIGZldGNoQXJ0aWNsZXNMaXN0ID0gY3JlYXRlQXN5bmNUaHVuaygnYXJ0aWNsZXNQYWdlL2ZldGNoQXJ0aWNsZXNMaXN0JywgZnVuY3Rpb24gKHByb3BzLCB0aHVua0FwaSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUsIGxpbWl0LCBzb3J0LCBvcmRlciwgc2VhcmNoLCBwYWdlLCB0eXBlLCByZXNwb25zZSwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV4dHJhID0gdGh1bmtBcGkuZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSA9IHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgPSB0aHVua0FwaS5nZXRTdGF0ZTtcbiAgICAgICAgICAgICAgICBsaW1pdCA9IGdldEFydGljbGVzUGFnZUxpbWl0KGdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgIHNvcnQgPSBnZXRBcnRpY2xlc1BhZ2VTb3J0KGdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgIG9yZGVyID0gZ2V0QXJ0aWNsZXNQYWdlT3JkZXIoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gZ2V0QXJ0aWNsZXNQYWdlU2VhcmNoKGdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgIHBhZ2UgPSBnZXRBcnRpY2xlc1BhZ2VOdW0oZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICAgICAgdHlwZSA9IGdldEFydGljbGVzUGFnZVR5cGUoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgYWRkUXVlcnlQYXJhbXMoe1xuICAgICAgICAgICAgICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXIsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGV4dHJhLmFwaS5nZXQoJy9hcnRpY2xlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9leHBhbmQ6ICd1c2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zb3J0OiBzb3J0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vcmRlcjogb3JkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcTogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUgPT09IEFydGljbGVUeXBlLkFMTCA/IHVuZGVmaW5lZCA6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuZGF0YV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZWplY3RXaXRoVmFsdWUoJ2Vycm9yJyldO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGdldEFydGljbGVzUGFnZUhhc01vcmUsIGdldEFydGljbGVzUGFnZUlzTG9hZGluZywgZ2V0QXJ0aWNsZXNQYWdlTnVtLCB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMnO1xuaW1wb3J0IHsgYXJ0aWNsZXNQYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uL3NsaWNlcy9hcnRpY2xlc1BhZ2VTbGljZSc7XG5pbXBvcnQgeyBmZXRjaEFydGljbGVzTGlzdCB9IGZyb20gJy4uL2ZldGNoQXJ0aWNsZXNMaXN0L2ZldGNoQXJ0aWNsZXNMaXN0JztcbmV4cG9ydCB2YXIgZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlID0gY3JlYXRlQXN5bmNUaHVuaygnYXJ0aWNsZXNQYWdlL2ZldGNoTmV4dEFydGljbGVzUGFnZScsIGZ1bmN0aW9uIChfLCB0aHVua0FwaSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2V0U3RhdGUsIGRpc3BhdGNoLCBwYWdlLCBoYXNNb3JlLCBpc0xvYWRpbmc7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBnZXRTdGF0ZSA9IHRodW5rQXBpLmdldFN0YXRlLCBkaXNwYXRjaCA9IHRodW5rQXBpLmRpc3BhdGNoO1xuICAgICAgICBwYWdlID0gZ2V0QXJ0aWNsZXNQYWdlTnVtKGdldFN0YXRlKCkpO1xuICAgICAgICBoYXNNb3JlID0gZ2V0QXJ0aWNsZXNQYWdlSGFzTW9yZShnZXRTdGF0ZSgpKTtcbiAgICAgICAgaXNMb2FkaW5nID0gZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nKGdldFN0YXRlKCkpO1xuICAgICAgICBpZiAoaGFzTW9yZSAmJiAhaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFBhZ2UocGFnZSArIDEpKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXNMaXN0KHt9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgIH0pO1xufSk7IH0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgZ2V0QXJ0aWNsZXNQYWdlSW5pdGVkIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2FydGljbGVzUGFnZVNlbGVjdG9ycyc7XG5pbXBvcnQgeyBhcnRpY2xlc1BhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL2FydGljbGVzUGFnZVNsaWNlJztcbmltcG9ydCB7IGZldGNoQXJ0aWNsZXNMaXN0IH0gZnJvbSAnLi4vZmV0Y2hBcnRpY2xlc0xpc3QvZmV0Y2hBcnRpY2xlc0xpc3QnO1xuZXhwb3J0IHZhciBpbml0QXJ0aWNsZXNQYWdlID0gY3JlYXRlQXN5bmNUaHVuaygnYXJ0aWNsZXNQYWdlL2luaXRBcnRpY2xlc1BhZ2UnLCBmdW5jdGlvbiAoc2VhcmNoUGFyYW1zLCB0aHVua0FwaSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2V0U3RhdGUsIGRpc3BhdGNoLCBpbml0ZWQsIG9yZGVyRnJvbVVybCwgc29ydEZyb21VcmwsIHNlYXJjaEZyb21VcmwsIHR5cGVGcm9tVXJsO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgZ2V0U3RhdGUgPSB0aHVua0FwaS5nZXRTdGF0ZSwgZGlzcGF0Y2ggPSB0aHVua0FwaS5kaXNwYXRjaDtcbiAgICAgICAgaW5pdGVkID0gZ2V0QXJ0aWNsZXNQYWdlSW5pdGVkKGdldFN0YXRlKCkpO1xuICAgICAgICBpZiAoIWluaXRlZCkge1xuICAgICAgICAgICAgb3JkZXJGcm9tVXJsID0gc2VhcmNoUGFyYW1zLmdldCgnb3JkZXInKTtcbiAgICAgICAgICAgIHNvcnRGcm9tVXJsID0gc2VhcmNoUGFyYW1zLmdldCgnc29ydCcpO1xuICAgICAgICAgICAgc2VhcmNoRnJvbVVybCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3NlYXJjaCcpO1xuICAgICAgICAgICAgdHlwZUZyb21VcmwgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0eXBlJyk7XG4gICAgICAgICAgICBpZiAob3JkZXJGcm9tVXJsKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRPcmRlcihvcmRlckZyb21VcmwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3J0RnJvbVVybCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0U29ydChzb3J0RnJvbVVybCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlYXJjaEZyb21VcmwpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFNlYXJjaChzZWFyY2hGcm9tVXJsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZUZyb21VcmwpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFR5cGUodHlwZUZyb21VcmwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuaW5pdFN0YXRlKCkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hBcnRpY2xlc0xpc3Qoe30pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgfSk7XG59KTsgfSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQXJ0aWNsZVNvcnRGaWVsZCwgQXJ0aWNsZVR5cGUsIEFydGljbGVWaWV3LCB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnO1xuaW1wb3J0IHsgQVJUSUNMRVNfVklFV19MT0NBTFNUT1JBR0VfS0VZIH0gZnJvbSAnc2hhcmVkL2NvbnN0L2xvY2Fsc3RvcmFnZSc7XG5pbXBvcnQgeyBmZXRjaEFydGljbGVzTGlzdCB9IGZyb20gJy4uL3NlcnZpY2VzL2ZldGNoQXJ0aWNsZXNMaXN0L2ZldGNoQXJ0aWNsZXNMaXN0JztcbnZhciBhcnRpY2xlc0FkYXB0ZXIgPSBjcmVhdGVFbnRpdHlBZGFwdGVyKHtcbiAgICBzZWxlY3RJZDogZnVuY3Rpb24gKGFydGljbGUpIHsgcmV0dXJuIGFydGljbGUuaWQ7IH0sXG59KTtcbmV4cG9ydCB2YXIgZ2V0QXJ0aWNsZXMgPSBhcnRpY2xlc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzKGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuYXJ0aWNsZXNQYWdlIHx8IGFydGljbGVzQWRhcHRlci5nZXRJbml0aWFsU3RhdGUoKTsgfSk7XG52YXIgYXJ0aWNsZXNQYWdlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2FydGljbGVzUGFnZVNsaWNlJyxcbiAgICBpbml0aWFsU3RhdGU6IGFydGljbGVzQWRhcHRlci5nZXRJbml0aWFsU3RhdGUoe1xuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBpZHM6IFtdLFxuICAgICAgICBlbnRpdGllczoge30sXG4gICAgICAgIHZpZXc6IEFydGljbGVWaWV3LlNNQUxMLFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogOSxcbiAgICAgICAgb3JkZXI6ICdhc2MnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICBzb3J0OiBBcnRpY2xlU29ydEZpZWxkLkNSRUFURUQsXG4gICAgICAgIGhhc01vcmU6IHRydWUsXG4gICAgICAgIF9pbml0ZWQ6IGZhbHNlLFxuICAgICAgICB0eXBlOiBBcnRpY2xlVHlwZS5BTEwsXG4gICAgfSksXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0VmlldzogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnZpZXcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFSVElDTEVTX1ZJRVdfTE9DQUxTVE9SQUdFX0tFWSwgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRQYWdlOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICBzZXRMaW1pdDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmxpbWl0ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldE9yZGVyOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUub3JkZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U2VhcmNoOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFNvcnQ6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5zb3J0ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFR5cGU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS50eXBlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRTdGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgdmlldyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFSVElDTEVTX1ZJRVdfTE9DQUxTVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICBzdGF0ZS52aWV3ID0gdmlldztcbiAgICAgICAgICAgIHN0YXRlLmxpbWl0ID0gdmlldyA9PT0gQXJ0aWNsZVZpZXcuQklHID8gNCA6IDk7XG4gICAgICAgICAgICBzdGF0ZS5faW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IGZ1bmN0aW9uIChidWlsZGVyKSB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoQXJ0aWNsZXNMaXN0LnBlbmRpbmcsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLm1ldGEuYXJnLnJlcGxhY2UpIHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlc0FkYXB0ZXIucmVtb3ZlQWxsKHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoQXJ0aWNsZXNMaXN0LmZ1bGZpbGxlZCwgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhdGUuaGFzTW9yZSA9IGFjdGlvbi5wYXlsb2FkLmxlbmd0aCA+PSBzdGF0ZS5saW1pdDtcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubWV0YS5hcmcucmVwbGFjZSkge1xuICAgICAgICAgICAgICAgIGFydGljbGVzQWRhcHRlci5zZXRBbGwoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFydGljbGVzQWRhcHRlci5hZGRNYW55KHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVzTGlzdC5yZWplY3RlZCwgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xuZXhwb3J0IHZhciBhcnRpY2xlc1BhZ2VSZWR1Y2VyID0gYXJ0aWNsZXNQYWdlU2xpY2UucmVkdWNlciwgYXJ0aWNsZXNQYWdlQWN0aW9ucyA9IGFydGljbGVzUGFnZVNsaWNlLmFjdGlvbnM7XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYm91bmNlKGNhbGxiYWNrLCBkZWxheSkge1xuICAgIHZhciB0aW1lciA9IHVzZVJlZihmYWxzZSk7XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXIuY3VycmVudCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9LCBbY2FsbGJhY2ssIGRlbGF5XSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbXMocGFyYW1zKSB7XG4gICAgdmFyIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW1zLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gXCI/XCIuY29uY2F0KHNlYXJjaFBhcmFtcy50b1N0cmluZygpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIGdldFF1ZXJ5UGFyYW1zKHBhcmFtcykpO1xufVxuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJtZW1vIiwidXNlTWVtbyIsInVzZVRyYW5zbGF0aW9uIiwiY2xhc3NOYW1lcyIsIlNlbGVjdCIsIkFydGljbGVTb3J0RmllbGQiLCJjbHMiLCJBcnRpY2xlU29ydFNlbGVjdG9yIiwiX3MiLCJfYyIsInByb3BzIiwic29ydCIsIm9yZGVyIiwiY2xhc3NOYW1lIiwib25DaGFuZ2VTb3J0Iiwib25DaGFuZ2VPcmRlciIsIm9yZGVyT3B0aW9ucyIsInZhbHVlIiwiY29udGVudCIsInNvcnRGaWVsZE9wdGlvbnMiLCJUSVRMRSIsIlZJRVdTIiwiQ1JFQVRFRCIsImNoaWxkcmVuIiwib3B0aW9ucyIsImxhYmVsIiwib25DaGFuZ2UiLCJfYzIiLCIkUmVmcmVzaFJlZyQiLCJBcnRpY2xlTGlzdCIsIlRleHQiLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwiZ2V0QXJ0aWNsZXNQYWdlRXJyb3IiLCJnZXRBcnRpY2xlc1BhZ2VJc0xvYWRpbmciLCJnZXRBcnRpY2xlc1BhZ2VWaWV3IiwiZ2V0QXJ0aWNsZXMiLCJBcnRpY2xlSW5maW5pdGVMaXN0IiwiZGlzcGF0Y2giLCJhcnRpY2xlcyIsInNlbGVjdEFsbCIsImlzTG9hZGluZyIsImVycm9yIiwidmlldyIsInRleHQiLCJ1c2VDYWxsYmFjayIsIkR5bmFtaWNNb2R1bGVMb2FkZXIiLCJ1c2VJbml0aWFsRWZmZWN0IiwiUGFnZSIsInVzZVNlYXJjaFBhcmFtcyIsIkFydGljbGVzUGFnZUZpbHRlcnMiLCJpbml0QXJ0aWNsZXNQYWdlIiwiZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlIiwiYXJ0aWNsZXNQYWdlUmVkdWNlciIsInJlZHVjZXJzIiwiYXJ0aWNsZXNQYWdlIiwiQXJ0aWNsZXNQYWdlIiwic2VhcmNoUGFyYW1zIiwib25Mb2FkTmV4dFBhcnQiLCJfX1BST0pFQ1RfXyIsInJlbW92ZUFmdGVyVW5tb3VudCIsIm9uU2Nyb2xsRW5kIiwiQXJ0aWNsZVR5cGVUYWJzIiwiQXJ0aWNsZVZpZXdTZWxlY3RvciIsInVzZURlYm91bmNlIiwiQ2FyZCIsIklucHV0IiwiZmV0Y2hBcnRpY2xlc0xpc3QiLCJhcnRpY2xlc1BhZ2VBY3Rpb25zIiwiZ2V0QXJ0aWNsZXNQYWdlT3JkZXIiLCJnZXRBcnRpY2xlc1BhZ2VTZWFyY2giLCJnZXRBcnRpY2xlc1BhZ2VTb3J0IiwiZ2V0QXJ0aWNsZXNQYWdlVHlwZSIsIl9hIiwic2VhcmNoIiwidHlwZSIsImZldGNoRGF0YSIsInJlcGxhY2UiLCJkZWJvdW5jZWRGZXRjaERhdGEiLCJvbkNoYW5nZVZpZXciLCJzZXRWaWV3Iiwic2V0UGFnZSIsIm5ld1NvcnQiLCJzZXRTb3J0IiwibmV3T3JkZXIiLCJzZXRPcmRlciIsIm9uQ2hhbmdlU2VhcmNoIiwic2V0U2VhcmNoIiwib25DaGFuZ2VUeXBlIiwic2V0VHlwZSIsInNvcnRXcmFwcGVyIiwib25WaWV3Q2xpY2siLCJwbGFjZWhvbGRlciIsInRhYnMiLCJyZWFkb25seSIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJvcHRpb25zTGlzdCIsIm1hcCIsIm9wdCIsIm9wdGlvbiIsIm1vZHMiLCJXcmFwcGVyIiwiY29uY2F0IiwiZGlzYWJsZWQiLCJzZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9