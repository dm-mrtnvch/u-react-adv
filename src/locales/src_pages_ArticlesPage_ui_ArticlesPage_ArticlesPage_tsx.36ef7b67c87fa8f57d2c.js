"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_pages_ArticlesPage_ui_ArticlesPage_ArticlesPage_tsx"],{

/***/ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArticlesPageError": function() { return /* binding */ getArticlesPageError; },
/* harmony export */   "getArticlesPageHasMore": function() { return /* binding */ getArticlesPageHasMore; },
/* harmony export */   "getArticlesPageInited": function() { return /* binding */ getArticlesPageInited; },
/* harmony export */   "getArticlesPageIsLoading": function() { return /* binding */ getArticlesPageIsLoading; },
/* harmony export */   "getArticlesPageLimit": function() { return /* binding */ getArticlesPageLimit; },
/* harmony export */   "getArticlesPageNum": function() { return /* binding */ getArticlesPageNum; },
/* harmony export */   "getArticlesPageOrder": function() { return /* binding */ getArticlesPageOrder; },
/* harmony export */   "getArticlesPageSearch": function() { return /* binding */ getArticlesPageSearch; },
/* harmony export */   "getArticlesPageSort": function() { return /* binding */ getArticlesPageSort; },
/* harmony export */   "getArticlesPageType": function() { return /* binding */ getArticlesPageType; },
/* harmony export */   "getArticlesPageView": function() { return /* binding */ getArticlesPageView; }
/* harmony export */ });
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const getArticlesPageIsLoading = state => state.articlesPage?.isLoading || false;
const getArticlesPageError = state => state.articlesPage?.error;
const getArticlesPageView = state => state.articlesPage?.view || entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.SMALL;
const getArticlesPageNum = state => state.articlesPage?.page || 1;
const getArticlesPageLimit = state => state.articlesPage?.limit || 9;
const getArticlesPageHasMore = state => state.articlesPage?.hasMore;
const getArticlesPageInited = state => state.articlesPage?._inited;
const getArticlesPageSort = state => state.articlesPage?.sort ?? entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleSortField.CREATED;
const getArticlesPageOrder = state => state.articlesPage?.order ?? 'asc';
const getArticlesPageSearch = state => state.articlesPage?.search ?? '';
const getArticlesPageType = state => state.articlesPage?.type ?? entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL;

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

/***/ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts":
/*!**************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchArticlesList": function() { return /* binding */ fetchArticlesList; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var shared_lib_url_addQueryParams_addQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/url/addQueryParams/addQueryParams */ "./src/shared/lib/url/addQueryParams/addQueryParams.ts");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const fetchArticlesList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const {
    extra,
    rejectWithValue,
    getState
  } = thunkApi;
  const limit = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageLimit)(getState());
  const sort = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageSort)(getState());
  const order = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageOrder)(getState());
  const search = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageSearch)(getState());
  const page = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageNum)(getState());
  const type = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageType)(getState());
  try {
    (0,shared_lib_url_addQueryParams_addQueryParams__WEBPACK_IMPORTED_MODULE_1__.addQueryParams)({
      sort,
      order,
      search,
      type
    });
    const response = await extra.api.get('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL ? undefined : type
      }
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});

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

/***/ "./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts":
/*!**********************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts ***!
  \**********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchNextArticlesPage": function() { return /* binding */ fetchNextArticlesPage; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const fetchNextArticlesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const {
    getState,
    dispatch
  } = thunkApi;
  const page = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageNum)(getState());
  const hasMore = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageHasMore)(getState());
  const isLoading = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageIsLoading)(getState());
  if (hasMore && !isLoading) {
    dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setPage(page + 1));
    dispatch((0,_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList)({}));
  }
});

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

/***/ "./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts":
/*!************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts ***!
  \************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initArticlesPage": function() { return /* binding */ initArticlesPage; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const initArticlesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const {
    getState,
    dispatch
  } = thunkApi;
  const inited = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageInited)(getState());
  if (!inited) {
    const orderFromUrl = searchParams.get('order');
    const sortFromUrl = searchParams.get('sort');
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type');
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
});

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

/***/ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts":
/*!******************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articlesPageActions": function() { return /* binding */ articlesPageActions; },
/* harmony export */   "articlesPageReducer": function() { return /* binding */ articlesPageReducer; },
/* harmony export */   "getArticles": function() { return /* binding */ getArticles; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/const/localstorage */ "./src/shared/const/localstorage.ts");
/* harmony import */ var _services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const articlesAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createEntityAdapter)({
  selectId: article => article.id
});
const getArticles = articlesAdapter.getSelectors(state => state.articlesPage || articlesAdapter.getInitialState());
const articlesPageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
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
    type: entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL
  }),
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
      localStorage.setItem(shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    initState: state => {
      const view = localStorage.getItem(shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.ARTICLES_VIEW_LOCALSTORAGE_KEY);
      state.view = view;
      state.limit = view === entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.BIG ? 4 : 9;
      state._inited = true;
    }
  },
  extraReducers: builder => {
    builder.addCase(_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    }).addCase(_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = action.payload.length >= state.limit;
      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload);
      } else {
        articlesAdapter.addMany(state, action.payload);
      }
    }).addCase(_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const {
  reducer: articlesPageReducer,
  actions: articlesPageActions
} = articlesPageSlice;

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

/***/ "./src/shared/lib/hooks/useDebounce/useDebounce.ts":
/*!*********************************************************!*\
  !*** ./src/shared/lib/hooks/useDebounce/useDebounce.ts ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDebounce": function() { return /* binding */ useDebounce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();

function useDebounce(callback, delay) {
  _s();
  const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
_s(useDebounce, "lLYre6vcaFN7EL5FPP62CugvHwU=");

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

/***/ "./src/shared/lib/url/addQueryParams/addQueryParams.ts":
/*!*************************************************************!*\
  !*** ./src/shared/lib/url/addQueryParams/addQueryParams.ts ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addQueryParams": function() { return /* binding */ addQueryParams; },
/* harmony export */   "getQueryParams": function() { return /* binding */ getQueryParams; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function getQueryParams(params) {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(_ref => {
    let [name, value] = _ref;
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
}
function addQueryParams(params) {
  window.history.pushState(null, '', getQueryParams(params));
}

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

/***/ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.tsx":
/*!*****************************************************************************!*\
  !*** ./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.tsx ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleSortSelector": function() { return /* binding */ ArticleSortSelector; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Select/Select */ "./src/shared/ui/Select/Select.tsx");
/* harmony import */ var _model_consts_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/consts/consts */ "./src/entities/Article/model/consts/consts.ts");
/* harmony import */ var _ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticleSortSelector.module.scss */ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();








const ArticleSortSelector = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {
  _s();
  const {
    sort,
    order,
    className,
    onChangeSort,
    onChangeOrder
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
  const orderOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    value: 'asc',
    content: t('ascending')
  }, {
    value: 'desc',
    content: t('descending')
  }], [t]);
  const sortFieldOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    value: _model_consts_consts__WEBPACK_IMPORTED_MODULE_3__.ArticleSortField.TITLE,
    content: t('title')
  }, {
    value: _model_consts_consts__WEBPACK_IMPORTED_MODULE_3__.ArticleSortField.VIEWS,
    content: t('views count')
  }, {
    value: _model_consts_consts__WEBPACK_IMPORTED_MODULE_3__.ArticleSortField.CREATED,
    content: t('created at')
  }], [t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].ArticleSortSelector, {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_2__.Select, {
      options: sortFieldOptions,
      label: t('sort by'),
      value: sort,
      onChange: onChangeSort
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_2__.Select, {
      options: orderOptions,
      label: t('by'),
      value: order,
      onChange: onChangeOrder,
      className: _ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].order
    })]
  });
}, "+aoxY74d1jomj5D9KpsX6CRqFbI=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
})), "+aoxY74d1jomj5D9KpsX6CRqFbI=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
});
_c2 = ArticleSortSelector;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleSortSelector$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleSortSelector");

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

/***/ "./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleInfiniteList": function() { return /* binding */ ArticleInfiniteList; }
/* harmony export */ });
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









const ArticleInfiniteList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(props => {
  _s();
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
  const dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.getArticles.selectAll);
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageIsLoading);
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageError);
  const view = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageView);
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_2__.Text, {
      text: t('error while articles render')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleList, {
    className: className,
    isLoading: isLoading,
    view: view,
    articles: articles
  });
}, "YLmg3oWMM14aeqtuN7RdsV9Bx04=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
})), "YLmg3oWMM14aeqtuN7RdsV9Bx04=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});
_c2 = ArticleInfiniteList;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleInfiniteList$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleInfiniteList");

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

/***/ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var widgets_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! widgets/Page/Page */ "./src/widgets/Page/Page.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _ArticleInfiniteList_ArticleInfiniteList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ArticleInfiniteList/ArticleInfiniteList */ "./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx");
/* harmony import */ var _ArticlesPageFilters_ArticlesPageFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ArticlesPageFilters/ArticlesPageFilters */ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx");
/* harmony import */ var _model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/services/initArticlesPage/initArticlesPage */ "./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts");
/* harmony import */ var _model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/services/fetchNextArticlesPage/fetchNextArticlesPage */ "./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArticlesPage.module.scss */ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();















const reducers = {
  articlesPage: _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageReducer
};
const ArticlesPage = props => {
  _s();
  const {
    className
  } = props;
  const dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useSearchParams)();
  const onLoadNextPart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (true) {
      dispatch((0,_model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_9__.fetchNextArticlesPage)());
    }
  }, [dispatch]);
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_4__.useInitialEffect)(() => {
    dispatch((0,_model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_8__.initArticlesPage)(searchParams));
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_2__.DynamicModuleLoader, {
    reducers: reducers,
    removeAfterUnmount: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
      onScrollEnd: onLoadNextPart,
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].ArticlesPage, {}, [className]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ArticlesPageFilters_ArticlesPageFilters__WEBPACK_IMPORTED_MODULE_7__.ArticlesPageFilters, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ArticleInfiniteList_ArticleInfiniteList__WEBPACK_IMPORTED_MODULE_6__.ArticleInfiniteList, {
        className: _ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].list
      })]
    })
  });
};
_s(ArticlesPage, "WJnzxCEtaHELGQijC26X/PCGbZs=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useSearchParams, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_4__.useInitialEffect];
});
_c = ArticlesPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ArticlesPage));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlesPage");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesPageFilters": function() { return /* binding */ ArticlesPageFilters; }
/* harmony export */ });
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var entities_Article_ui_ArticleSortSelector_ArticleSortSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Article/ui/ArticleSortSelector/ArticleSortSelector */ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.tsx");
/* harmony import */ var shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/hooks/useDebounce/useDebounce */ "./src/shared/lib/hooks/useDebounce/useDebounce.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var _model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlesPage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArticlesPageFilters.module.scss */ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
















const ArticlesPageFilters = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(_ref => {
  _s();
  let {
    className
  } = _ref;
  const dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)();
  const view = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_11__.getArticlesPageView);
  const sort = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_11__.getArticlesPageSort);
  const order = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_11__.getArticlesPageOrder);
  const search = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_11__.getArticlesPageSearch);
  const type = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_11__.getArticlesPageType);
  const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    dispatch((0,_model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_9__.fetchArticlesList)({
      replace: true
    }));
  }, [dispatch]);
  const debouncedFetchData = (0,shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(fetchData, 500);
  const onChangeView = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(view => {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setView(view));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  const onChangeSort = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(newSort => {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setSort(newSort));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  const onChangeOrder = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(newOrder => {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setOrder(newOrder));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  const onChangeSearch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(search => {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setSearch(search));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [debouncedFetchData, dispatch]);
  const onChangeType = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setType(value));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_10__.articlesPageActions.setPage(1));
    fetchData();
  }, [fetchData, dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__.classNames)(_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].ArticlesPageFilters, {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].sortWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(entities_Article_ui_ArticleSortSelector_ArticleSortSelector__WEBPACK_IMPORTED_MODULE_1__.ArticleSortSelector, {
        sort: sort,
        order: order,
        onChangeSort: onChangeSort,
        onChangeOrder: onChangeOrder
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleViewSelector, {
        view: view,
        onViewClick: onChangeView
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_7__.Card, {
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].search,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_8__.Input, {
        value: search,
        onChange: onChangeSearch,
        placeholder: t('search')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleTypeTabs, {
      value: type,
      onChangeType: onChangeType,
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].tabs
    })]
  });
}, "hTtVgXwvWn2hRBQhIP6jx9fISWg=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch, react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_2__.useDebounce];
})), "hTtVgXwvWn2hRBQhIP6jx9fISWg=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch, react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_2__.useDebounce];
});
_c2 = ArticlesPageFilters;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlesPageFilters$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticlesPageFilters");

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

/***/ "./src/shared/ui/Select/Select.tsx":
/*!*****************************************!*\
  !*** ./src/shared/ui/Select/Select.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": function() { return /* binding */ Select; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Select.module.scss */ "./src/shared/ui/Select/Select.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





const Select = props => {
  _s();
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props;
  const onChangeHandler = e => {
    onChange?.(e.target.value);
  };
  const optionsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => options?.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].option,
    value: opt.value,
    children: opt.content
  }, opt.value)), [options]);
  const mods = {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Wrapper, {}, [className]),
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label,
      children: `${label} >`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("select", {
      disabled: readonly,
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].select,
      value: value,
      onChange: onChangeHandler,
      children: optionsList
    })]
  });
};
_s(Select, "4eFkyZkU+k+KyxWsHbvQKebASqU=");
_c = Select;
var _c;
__webpack_require__.$Refresh$.register(_c, "Select");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss ***!
  \**********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss":
/*!*************************************************************************************!*\
  !*** ./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss ***!
  \*************************************************************************************/
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
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleSortSelector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Article/ui/ArticleSortSelector/ArticleSortSelector.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleSortSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss ***!
  \*************************************************************************/
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
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss ***!
  \***************************************************************************************/
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
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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


/***/ }),

/***/ "./src/shared/ui/Select/Select.module.scss":
/*!*************************************************!*\
  !*** ./src/shared/ui/Select/Select.module.scss ***!
  \*************************************************/
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
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0FydGljbGVzUGFnZV91aV9BcnRpY2xlc1BhZ2VfQXJ0aWNsZXNQYWdlX3RzeC4zNmVmN2I2N2M4N2ZhOGY1N2QyYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZFO0FBRXRFLE1BQU1HLHdCQUF3QixHQUFJQyxLQUFrQixJQUFLQSxLQUFLLENBQUNDLFlBQVksRUFBRUMsU0FBUyxJQUFJLEtBQUs7QUFDL0YsTUFBTUMsb0JBQW9CLEdBQUlILEtBQWtCLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxFQUFFRyxLQUFLO0FBQzlFLE1BQU1DLG1CQUFtQixHQUFJTCxLQUFrQixJQUFLQSxLQUFLLENBQUNDLFlBQVksRUFBRUssSUFBSSxJQUFJUiwrREFBaUI7QUFDakcsTUFBTVUsa0JBQWtCLEdBQUlSLEtBQWtCLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxFQUFFUSxJQUFJLElBQUksQ0FBQztBQUNoRixNQUFNQyxvQkFBb0IsR0FBSVYsS0FBa0IsSUFBS0EsS0FBSyxDQUFDQyxZQUFZLEVBQUVVLEtBQUssSUFBSSxDQUFDO0FBQ25GLE1BQU1DLHNCQUFzQixHQUFJWixLQUFrQixJQUFLQSxLQUFLLENBQUNDLFlBQVksRUFBRVksT0FBTztBQUNsRixNQUFNQyxxQkFBcUIsR0FBSWQsS0FBa0IsSUFBS0EsS0FBSyxDQUFDQyxZQUFZLEVBQUVjLE9BQU87QUFDakYsTUFBTUMsbUJBQW1CLEdBQUloQixLQUFrQixJQUFLQSxLQUFLLENBQUNDLFlBQVksRUFBRWdCLElBQUksSUFBSXJCLHNFQUF3QjtBQUN4RyxNQUFNdUIsb0JBQW9CLEdBQUluQixLQUFrQixJQUFLQSxLQUFLLENBQUNDLFlBQVksRUFBRW1CLEtBQUssSUFBSSxLQUFLO0FBQ3ZGLE1BQU1DLHFCQUFxQixHQUFJckIsS0FBa0IsSUFBS0EsS0FBSyxDQUFDQyxZQUFZLEVBQUVxQixNQUFNLElBQUksRUFBRTtBQUN0RixNQUFNQyxtQkFBbUIsR0FBSXZCLEtB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bE07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SkFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sbUtBQWMsSUFBSSxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1LQUFjO0FBQ3ZDLG9DQUFvQyxpSkFBVyxHQUFHLG1LQUFjOztBQUVoRSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLCtTQUFxSjtBQUMzSixNQUFNO0FBQUE7QUFDTixzREFBc0QsaUpBQVcsR0FBRyxtS0FBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsaUpBQVcsR0FBRyxtS0FBYzs7QUFFdEUscUJBQXFCLDRKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHb0s7QUFDcEssT0FBTywrREFBZSw0SkFBTyxJQUFJLG1LQUFjLEdBQUcsbUtBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL21vZGVsL3NlcnZpY2VzL2ZldGNoQXJ0aWNsZXNMaXN0L2ZldGNoQXJ0aWNsZXNMaXN0LnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRBcnRpY2xlc1BhZ2UvZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS9tb2RlbC9zZXJ2aWNlcy9pbml0QXJ0aWNsZXNQYWdlL2luaXRBcnRpY2xlc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL21vZGVsL3NsaWNlcy9hcnRpY2xlc1BhZ2VTbGljZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvbGliL2hvb2tzL3VzZURlYm91bmNlL3VzZURlYm91bmNlLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3NoYXJlZC9saWIvdXJsL2FkZFF1ZXJ5UGFyYW1zL2FkZFF1ZXJ5UGFyYW1zLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2VudGl0aWVzL0FydGljbGUvdWkvQXJ0aWNsZVNvcnRTZWxlY3Rvci9BcnRpY2xlU29ydFNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvdWkvQXJ0aWNsZUluZmluaXRlTGlzdC9BcnRpY2xlSW5maW5pdGVMaXN0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvdWkvQXJ0aWNsZXNQYWdlL0FydGljbGVzUGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZUZpbHRlcnMvQXJ0aWNsZXNQYWdlRmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvdWkvU2VsZWN0L1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQXJ0aWNsZS91aS9BcnRpY2xlU29ydFNlbGVjdG9yL0FydGljbGVTb3J0U2VsZWN0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZUZpbHRlcnMvQXJ0aWNsZXNQYWdlRmlsdGVycy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvc2hhcmVkL3VpL1NlbGVjdC9TZWxlY3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQXJ0aWNsZS91aS9BcnRpY2xlU29ydFNlbGVjdG9yL0FydGljbGVTb3J0U2VsZWN0b3IubW9kdWxlLnNjc3M/MmY0MyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvdWkvQXJ0aWNsZXNQYWdlL0FydGljbGVzUGFnZS5tb2R1bGUuc2Nzcz9hNDAwIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3M/ZmIwNSIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3M/NGUyMSIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9zaGFyZWQvdWkvU2VsZWN0L1NlbGVjdC5tb2R1bGUuc2Nzcz83N2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlU2NoZW1hIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyBBcnRpY2xlU29ydEZpZWxkLCBBcnRpY2xlVHlwZSwgQXJ0aWNsZVZpZXcgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVzUGFnZUlzTG9hZGluZyA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVzUGFnZT8uaXNMb2FkaW5nIHx8IGZhbHNlXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VFcnJvciA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVzUGFnZT8uZXJyb3JcclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVzUGFnZVZpZXcgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZS5hcnRpY2xlc1BhZ2U/LnZpZXcgfHwgQXJ0aWNsZVZpZXcuU01BTExcclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVzUGFnZU51bSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVzUGFnZT8ucGFnZSB8fCAxXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VMaW1pdCA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVzUGFnZT8ubGltaXQgfHwgOVxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlSGFzTW9yZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVzUGFnZT8uaGFzTW9yZVxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlSW5pdGVkID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZXNQYWdlPy5faW5pdGVkXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VTb3J0ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZXNQYWdlPy5zb3J0ID8/IEFydGljbGVTb3J0RmllbGQuQ1JFQVRFRFxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlT3JkZXIgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZS5hcnRpY2xlc1BhZ2U/Lm9yZGVyID8/ICdhc2MnXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VTZWFyY2ggPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZS5hcnRpY2xlc1BhZ2U/LnNlYXJjaCA/PyAnJ1xyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlVHlwZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVzUGFnZT8udHlwZSA/PyBBcnRpY2xlVHlwZS5BTExcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IFRodW5rQ29uZmlnIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgdHlwZSB7IEFydGljbGUgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xyXG5pbXBvcnQgeyBBcnRpY2xlVHlwZSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXHJcbmltcG9ydCB7IGFkZFF1ZXJ5UGFyYW1zIH0gZnJvbSAnc2hhcmVkL2xpYi91cmwvYWRkUXVlcnlQYXJhbXMvYWRkUXVlcnlQYXJhbXMnXHJcbmltcG9ydCB7XHJcbiAgZ2V0QXJ0aWNsZXNQYWdlTGltaXQsXHJcbiAgZ2V0QXJ0aWNsZXNQYWdlTnVtLFxyXG4gIGdldEFydGljbGVzUGFnZU9yZGVyLFxyXG4gIGdldEFydGljbGVzUGFnZVNlYXJjaCxcclxuICBnZXRBcnRpY2xlc1BhZ2VTb3J0LFxyXG4gIGdldEFydGljbGVzUGFnZVR5cGUsXHJcbn0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2FydGljbGVzUGFnZVNlbGVjdG9ycydcclxuXHJcbmludGVyZmFjZSBGZXRjaEFydGljbGVzTGlzdFByb3BzIHtcclxuICByZXBsYWNlPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBcnRpY2xlc0xpc3QgPSBjcmVhdGVBc3luY1RodW5rPFxyXG4gIEFydGljbGVbXSxcclxuICBGZXRjaEFydGljbGVzTGlzdFByb3BzLFxyXG4gIFRodW5rQ29uZmlnPHN0cmluZz5cclxuICA+KFxyXG4gICAgJ2FydGljbGVzUGFnZS9mZXRjaEFydGljbGVzTGlzdCcsXHJcbiAgICBhc3luYyAocHJvcHMsIHRodW5rQXBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSA9IHRodW5rQXBpXHJcblxyXG4gICAgICBjb25zdCBsaW1pdCA9IGdldEFydGljbGVzUGFnZUxpbWl0KGdldFN0YXRlKCkpXHJcbiAgICAgIGNvbnN0IHNvcnQgPSBnZXRBcnRpY2xlc1BhZ2VTb3J0KGdldFN0YXRlKCkpXHJcbiAgICAgIGNvbnN0IG9yZGVyID0gZ2V0QXJ0aWNsZXNQYWdlT3JkZXIoZ2V0U3RhdGUoKSlcclxuICAgICAgY29uc3Qgc2VhcmNoID0gZ2V0QXJ0aWNsZXNQYWdlU2VhcmNoKGdldFN0YXRlKCkpXHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRBcnRpY2xlc1BhZ2VOdW0oZ2V0U3RhdGUoKSlcclxuICAgICAgY29uc3QgdHlwZSA9IGdldEFydGljbGVzUGFnZVR5cGUoZ2V0U3RhdGUoKSlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYWRkUXVlcnlQYXJhbXMoe1xyXG4gICAgICAgICAgc29ydCwgb3JkZXIsIHNlYXJjaCwgdHlwZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGV4dHJhLmFwaS5nZXQ8QXJ0aWNsZVtdPignL2FydGljbGVzJywge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIF9leHBhbmQ6ICd1c2VyJyxcclxuICAgICAgICAgICAgX2xpbWl0OiBsaW1pdCxcclxuICAgICAgICAgICAgX3BhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICAgIF9zb3J0OiBzb3J0LFxyXG4gICAgICAgICAgICBfb3JkZXI6IG9yZGVyLFxyXG4gICAgICAgICAgICBxOiBzZWFyY2gsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUgPT09IEFydGljbGVUeXBlLkFMTCA/IHVuZGVmaW5lZCA6IHR5cGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKCdlcnJvcicpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgKVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7XHJcbiAgZ2V0QXJ0aWNsZXNQYWdlSGFzTW9yZSxcclxuICBnZXRBcnRpY2xlc1BhZ2VJc0xvYWRpbmcsXHJcbiAgZ2V0QXJ0aWNsZXNQYWdlTnVtLFxyXG59IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMnXHJcbmltcG9ydCB7IGFydGljbGVzUGFnZUFjdGlvbnMgfSBmcm9tICcuLi8uLi9zbGljZXMvYXJ0aWNsZXNQYWdlU2xpY2UnXHJcbmltcG9ydCB7IGZldGNoQXJ0aWNsZXNMaXN0IH0gZnJvbSAnLi4vZmV0Y2hBcnRpY2xlc0xpc3QvZmV0Y2hBcnRpY2xlc0xpc3QnXHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hBcnRpY2xlc0xpc3RQcm9wcyB7XHJcbiAgcGFnZT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlID0gY3JlYXRlQXN5bmNUaHVuazxcclxuICB2b2lkLFxyXG4gIHZvaWQsXHJcbiAgVGh1bmtDb25maWc8c3RyaW5nPlxyXG4gID4oXHJcbiAgICAnYXJ0aWNsZXNQYWdlL2ZldGNoTmV4dEFydGljbGVzUGFnZScsXHJcbiAgICBhc3luYyAoXywgdGh1bmtBcGkpID0+IHtcclxuICAgICAgY29uc3QgeyBnZXRTdGF0ZSwgZGlzcGF0Y2ggfSA9IHRodW5rQXBpXHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRBcnRpY2xlc1BhZ2VOdW0oZ2V0U3RhdGUoKSlcclxuICAgICAgY29uc3QgaGFzTW9yZSA9IGdldEFydGljbGVzUGFnZUhhc01vcmUoZ2V0U3RhdGUoKSlcclxuICAgICAgY29uc3QgaXNMb2FkaW5nID0gZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nKGdldFN0YXRlKCkpXHJcblxyXG4gICAgICBpZiAoaGFzTW9yZSAmJiAhaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRQYWdlKHBhZ2UgKyAxKSlcclxuICAgICAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzTGlzdCh7fSkpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgKVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7IEFydGljbGVTb3J0RmllbGQsIEFydGljbGVUeXBlIH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSdcclxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnc2hhcmVkL3R5cGVzJ1xyXG5pbXBvcnQgeyBnZXRBcnRpY2xlc1BhZ2VJbml0ZWQgfSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvYXJ0aWNsZXNQYWdlU2VsZWN0b3JzJ1xyXG5pbXBvcnQgeyBhcnRpY2xlc1BhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL2FydGljbGVzUGFnZVNsaWNlJ1xyXG5pbXBvcnQgeyBmZXRjaEFydGljbGVzTGlzdCB9IGZyb20gJy4uL2ZldGNoQXJ0aWNsZXNMaXN0L2ZldGNoQXJ0aWNsZXNMaXN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRBcnRpY2xlc1BhZ2UgPSBjcmVhdGVBc3luY1RodW5rPFxyXG4gIHZvaWQsXHJcbiAgVVJMU2VhcmNoUGFyYW1zLFxyXG4gIFRodW5rQ29uZmlnPHN0cmluZz5cclxuICA+KFxyXG4gICAgJ2FydGljbGVzUGFnZS9pbml0QXJ0aWNsZXNQYWdlJyxcclxuICAgIGFzeW5jIChzZWFyY2hQYXJhbXMsIHRodW5rQXBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZ2V0U3RhdGUsIGRpc3BhdGNoIH0gPSB0aHVua0FwaVxyXG4gICAgICBjb25zdCBpbml0ZWQgPSBnZXRBcnRpY2xlc1BhZ2VJbml0ZWQoZ2V0U3RhdGUoKSlcclxuXHJcbiAgICAgIGlmICghaW5pdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJGcm9tVXJsID0gc2VhcmNoUGFyYW1zLmdldCgnb3JkZXInKSBhcyBTb3J0T3JkZXJcclxuICAgICAgICBjb25zdCBzb3J0RnJvbVVybCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3NvcnQnKSBhcyBBcnRpY2xlU29ydEZpZWxkXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRnJvbVVybCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3NlYXJjaCcpXHJcbiAgICAgICAgY29uc3QgdHlwZUZyb21VcmwgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0eXBlJykgYXMgQXJ0aWNsZVR5cGVcclxuXHJcbiAgICAgICAgaWYgKG9yZGVyRnJvbVVybCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRPcmRlcihvcmRlckZyb21VcmwpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc29ydEZyb21VcmwpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0U29ydChzb3J0RnJvbVVybCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWFyY2hGcm9tVXJsKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFNlYXJjaChzZWFyY2hGcm9tVXJsKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVGcm9tVXJsKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFR5cGUodHlwZUZyb21VcmwpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5pbml0U3RhdGUoKSlcclxuICAgICAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzTGlzdCh7fSkpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgKVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IFN0YXRlU2NoZW1hIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyBBcnRpY2xlU29ydEZpZWxkLCBBcnRpY2xlVmlldywgQXJ0aWNsZVR5cGUgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xyXG5pbXBvcnQgdHlwZSB7IEFydGljbGUgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xyXG5pbXBvcnQgeyBBUlRJQ0xFU19WSUVXX0xPQ0FMU1RPUkFHRV9LRVkgfSBmcm9tICdzaGFyZWQvY29uc3QvbG9jYWxzdG9yYWdlJ1xyXG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICdzaGFyZWQvdHlwZXMnXHJcbmltcG9ydCB7IGZldGNoQXJ0aWNsZXNMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvZmV0Y2hBcnRpY2xlc0xpc3QvZmV0Y2hBcnRpY2xlc0xpc3QnXHJcbmltcG9ydCB7IEFydGljbGVzUGFnZVNjaGVtYSB9IGZyb20gJy4uL3R5cGVzL2FydGljbGVzUGFnZVNjaGVtYSdcclxuXHJcbmNvbnN0IGFydGljbGVzQWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8QXJ0aWNsZT4oe1xyXG4gIHNlbGVjdElkOiAoYXJ0aWNsZSkgPT4gYXJ0aWNsZS5pZCxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlcyA9IGFydGljbGVzQWRhcHRlci5nZXRTZWxlY3RvcnM8U3RhdGVTY2hlbWE+KFxyXG4gIChzdGF0ZSkgPT4gc3RhdGUuYXJ0aWNsZXNQYWdlIHx8IGFydGljbGVzQWRhcHRlci5nZXRJbml0aWFsU3RhdGUoKSxcclxuKVxyXG5cclxuY29uc3QgYXJ0aWNsZXNQYWdlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2FydGljbGVzUGFnZVNsaWNlJyxcclxuICBpbml0aWFsU3RhdGU6IGFydGljbGVzQWRhcHRlci5nZXRJbml0aWFsU3RhdGU8QXJ0aWNsZXNQYWdlU2NoZW1hPih7XHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICAgIGlkczogW10sXHJcbiAgICBlbnRpdGllczoge30sXHJcbiAgICB2aWV3OiBBcnRpY2xlVmlldy5TTUFMTCxcclxuICAgIHBhZ2U6IDEsXHJcbiAgICBsaW1pdDogOSxcclxuICAgIG9yZGVyOiAnYXNjJyxcclxuICAgIHNlYXJjaDogJycsXHJcbiAgICBzb3J0OiBBcnRpY2xlU29ydEZpZWxkLkNSRUFURUQsXHJcbiAgICBoYXNNb3JlOiB0cnVlLFxyXG4gICAgX2luaXRlZDogZmFsc2UsXHJcbiAgICB0eXBlOiBBcnRpY2xlVHlwZS5BTEwsXHJcbiAgfSksXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFZpZXc6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFydGljbGVWaWV3PikgPT4ge1xyXG4gICAgICBzdGF0ZS52aWV3ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVJUSUNMRVNfVklFV19MT0NBTFNUT1JBR0VfS0VZLCBhY3Rpb24ucGF5bG9hZClcclxuICAgIH0sXHJcbiAgICBzZXRQYWdlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnBhZ2UgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICAgIHNldExpbWl0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmxpbWl0ID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgICBzZXRPcmRlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248U29ydE9yZGVyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5vcmRlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgc2V0U2VhcmNoOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlYXJjaCA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgc2V0U29ydDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJ0aWNsZVNvcnRGaWVsZD4pID0+IHtcclxuICAgICAgc3RhdGUuc29ydCA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgc2V0VHlwZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJ0aWNsZVR5cGU+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnR5cGUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICAgIGluaXRTdGF0ZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZpZXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBUlRJQ0xFU19WSUVXX0xPQ0FMU1RPUkFHRV9LRVkpIGFzIEFydGljbGVWaWV3XHJcbiAgICAgIHN0YXRlLnZpZXcgPSB2aWV3XHJcbiAgICAgIHN0YXRlLmxpbWl0ID0gdmlldyA9PT0gQXJ0aWNsZVZpZXcuQklHID8gNCA6IDlcclxuICAgICAgc3RhdGUuX2luaXRlZCA9IHRydWVcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVzTGlzdC5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gdW5kZWZpbmVkXHJcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uLm1ldGEuYXJnLnJlcGxhY2UpIHtcclxuICAgICAgICAgIGFydGljbGVzQWRhcHRlci5yZW1vdmVBbGwoc3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVzTGlzdC5mdWxmaWxsZWQsIChcclxuICAgICAgICBzdGF0ZSxcclxuICAgICAgICBhY3Rpb24sXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgc3RhdGUuaGFzTW9yZSA9IGFjdGlvbi5wYXlsb2FkLmxlbmd0aCA+PSBzdGF0ZS5saW1pdFxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uLm1ldGEuYXJnLnJlcGxhY2UpIHtcclxuICAgICAgICAgIGFydGljbGVzQWRhcHRlci5zZXRBbGwoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhcnRpY2xlc0FkYXB0ZXIuYWRkTWFueShzdGF0ZSwgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVzTGlzdC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICByZWR1Y2VyOiBhcnRpY2xlc1BhZ2VSZWR1Y2VyLFxyXG4gIGFjdGlvbnM6IGFydGljbGVzUGFnZUFjdGlvbnMsXHJcbn0gPSBhcnRpY2xlc1BhZ2VTbGljZVxyXG4iLCJpbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVib3VuY2UoY2FsbGJhY2s6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgZGVsYXk6IG51bWJlcikge1xyXG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmKGZhbHNlKSBhcyBNdXRhYmxlUmVmT2JqZWN0PGFueT5cclxuXHJcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgaWYgKHRpbWVyLmN1cnJlbnQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgdGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjayguLi5hcmdzKVxyXG4gICAgfSwgZGVsYXkpXHJcbiAgfSwgW2NhbGxiYWNrLCBkZWxheV0pXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5UGFyYW1zKHBhcmFtczogT3B0aW9uYWxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxyXG4gIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgc2VhcmNoUGFyYW1zLnNldChuYW1lLCB2YWx1ZSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gYD8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXJ5UGFyYW1zKHBhcmFtczogT3B0aW9uYWxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XHJcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCBnZXRRdWVyeVBhcmFtcyhwYXJhbXMpKVxyXG59XHJcbiIsImltcG9ydCB7IG1lbW8sIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXHJcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJ3NoYXJlZC90eXBlcydcclxuaW1wb3J0IHsgU2VsZWN0LCBTZWxlY3RPcHRpb24gfSBmcm9tICdzaGFyZWQvdWkvU2VsZWN0L1NlbGVjdCdcclxuaW1wb3J0IHsgQXJ0aWNsZVNvcnRGaWVsZCB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnN0cy9jb25zdHMnXHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlU29ydFNlbGVjdG9yLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVTb3J0U2VsZWN0b3JQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgc29ydDogQXJ0aWNsZVNvcnRGaWVsZFxyXG4gIG9yZGVyOiBTb3J0T3JkZXJcclxuICBvbkNoYW5nZU9yZGVyOiAobmV3T3JkZXI6IFNvcnRPcmRlcikgPT4gdm9pZFxyXG4gIG9uQ2hhbmdlU29ydDogKG5ld1NvcnRpbmc6IEFydGljbGVTb3J0RmllbGQpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVTb3J0U2VsZWN0b3IgPSBtZW1vKChwcm9wczogQXJ0aWNsZVNvcnRTZWxlY3RvclByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgc29ydCwgb3JkZXIsIGNsYXNzTmFtZSwgb25DaGFuZ2VTb3J0LCBvbkNoYW5nZU9yZGVyLFxyXG4gIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuXHJcbiAgY29uc3Qgb3JkZXJPcHRpb25zID0gdXNlTWVtbzxTZWxlY3RPcHRpb248U29ydE9yZGVyPltdPigoKSA9PiBbXHJcbiAgICB7IHZhbHVlOiAnYXNjJywgY29udGVudDogdCgnYXNjZW5kaW5nJykgfSxcclxuICAgIHsgdmFsdWU6ICdkZXNjJywgY29udGVudDogdCgnZGVzY2VuZGluZycpIH0sXHJcbiAgXSwgW3RdKVxyXG5cclxuICBjb25zdCBzb3J0RmllbGRPcHRpb25zID0gdXNlTWVtbzxTZWxlY3RPcHRpb248QXJ0aWNsZVNvcnRGaWVsZD5bXT4oKCkgPT4gW1xyXG4gICAgeyB2YWx1ZTogQXJ0aWNsZVNvcnRGaWVsZC5USVRMRSwgY29udGVudDogdCgndGl0bGUnKSB9LFxyXG4gICAgeyB2YWx1ZTogQXJ0aWNsZVNvcnRGaWVsZC5WSUVXUywgY29udGVudDogdCgndmlld3MgY291bnQnKSB9LFxyXG4gICAgeyB2YWx1ZTogQXJ0aWNsZVNvcnRGaWVsZC5DUkVBVEVELCBjb250ZW50OiB0KCdjcmVhdGVkIGF0JykgfSxcclxuICBdLCBbdF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuQXJ0aWNsZVNvcnRTZWxlY3Rvciwge30sIFtjbGFzc05hbWVdKX0+XHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBvcHRpb25zPXtzb3J0RmllbGRPcHRpb25zfVxyXG4gICAgICAgIGxhYmVsPXt0KCdzb3J0IGJ5Jyl9XHJcbiAgICAgICAgdmFsdWU9e3NvcnR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU29ydH1cclxuICAgICAgLz5cclxuICAgICAgPFNlbGVjdFxyXG4gICAgICAgIG9wdGlvbnM9e29yZGVyT3B0aW9uc31cclxuICAgICAgICBsYWJlbD17dCgnYnknKX1cclxuICAgICAgICB2YWx1ZT17b3JkZXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlT3JkZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHMub3JkZXJ9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0pXHJcbiIsImltcG9ydCB7IEFydGljbGVMaXN0IH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSdcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICdzaGFyZWQvdWkvVGV4dC9UZXh0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXHJcbmltcG9ydCB7XHJcbiAgZ2V0QXJ0aWNsZXNQYWdlRXJyb3IsXHJcbiAgZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nLFxyXG4gIGdldEFydGljbGVzUGFnZVZpZXcsXHJcbn0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2FydGljbGVzUGFnZVNlbGVjdG9ycydcclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZXMgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMvYXJ0aWNsZXNQYWdlU2xpY2UnXHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZUluZmluaXRlTGlzdFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVJbmZpbml0ZUxpc3QgPSBtZW1vKChwcm9wczogQXJ0aWNsZUluZmluaXRlTGlzdFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXMuc2VsZWN0QWxsKVxyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZUlzTG9hZGluZylcclxuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZUVycm9yKVxyXG4gIGNvbnN0IHZpZXcgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VWaWV3KVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8VGV4dCB0ZXh0PXt0KCdlcnJvciB3aGlsZSBhcnRpY2xlcyByZW5kZXInKX0gLz5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXJ0aWNsZUxpc3RcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICB2aWV3PXt2aWV3fVxyXG4gICAgICBhcnRpY2xlcz17YXJ0aWNsZXN9XHJcbiAgICAvPlxyXG4gIClcclxufSlcclxuIiwiaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xyXG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyLCBSZWR1Y2Vyc0xpc3QgfSBmcm9tICdzaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyJ1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXHJcbmltcG9ydCB7IHVzZUluaXRpYWxFZmZlY3QgfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZUluaXRpYWxFZmZlY3QvdXNlSW5pdGlhbEVmZmVjdCdcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3dpZGdldHMvUGFnZS9QYWdlJ1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBBcnRpY2xlSW5maW5pdGVMaXN0IH0gZnJvbSAnLi4vQXJ0aWNsZUluZmluaXRlTGlzdC9BcnRpY2xlSW5maW5pdGVMaXN0J1xyXG5pbXBvcnQgeyBBcnRpY2xlc1BhZ2VGaWx0ZXJzIH0gZnJvbSAnLi4vQXJ0aWNsZXNQYWdlRmlsdGVycy9BcnRpY2xlc1BhZ2VGaWx0ZXJzJ1xyXG5pbXBvcnQgeyBpbml0QXJ0aWNsZXNQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvaW5pdEFydGljbGVzUGFnZS9pbml0QXJ0aWNsZXNQYWdlJ1xyXG5pbXBvcnQgeyBmZXRjaE5leHRBcnRpY2xlc1BhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRBcnRpY2xlc1BhZ2UvZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlJ1xyXG5pbXBvcnQgeyBhcnRpY2xlc1BhZ2VSZWR1Y2VyLCBnZXRBcnRpY2xlcyB9IGZyb20gJy4uLy4uL21vZGVsL3NsaWNlcy9hcnRpY2xlc1BhZ2VTbGljZSdcclxuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVzUGFnZS5tb2R1bGUuc2NzcydcclxuXHJcbmludGVyZmFjZSBBcnRpY2xlc1BhZ2VQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyczogUmVkdWNlcnNMaXN0ID0ge1xyXG4gIGFydGljbGVzUGFnZTogYXJ0aWNsZXNQYWdlUmVkdWNlcixcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZXNQYWdlID0gKHByb3BzOiBBcnRpY2xlc1BhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKClcclxuXHJcbiAgY29uc3Qgb25Mb2FkTmV4dFBhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoX19QUk9KRUNUX18gIT09ICdzdG9yeWJvb2snKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoTmV4dEFydGljbGVzUGFnZSgpKVxyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pXHJcblxyXG4gIHVzZUluaXRpYWxFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaW5pdEFydGljbGVzUGFnZShzZWFyY2hQYXJhbXMpKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHluYW1pY01vZHVsZUxvYWRlciByZWR1Y2Vycz17cmVkdWNlcnN9IHJlbW92ZUFmdGVyVW5tb3VudD17ZmFsc2V9PlxyXG4gICAgICA8UGFnZVxyXG4gICAgICAgIG9uU2Nyb2xsRW5kPXtvbkxvYWROZXh0UGFydH1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLkFydGljbGVzUGFnZSwge30sIFtjbGFzc05hbWVdKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBcnRpY2xlc1BhZ2VGaWx0ZXJzIC8+XHJcbiAgICAgICAgPEFydGljbGVJbmZpbml0ZUxpc3QgY2xhc3NOYW1lPXtjbHMubGlzdH0gLz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgPC9EeW5hbWljTW9kdWxlTG9hZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhBcnRpY2xlc1BhZ2UpXHJcbiIsImltcG9ydCB7XG4gIEFydGljbGVTb3J0RmllbGQsIEFydGljbGVUeXBlVGFicywgQXJ0aWNsZVZpZXcsIEFydGljbGVWaWV3U2VsZWN0b3IsXG59IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXG5pbXBvcnQgeyBBcnRpY2xlVHlwZSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUvbW9kZWwvY29uc3RzL2NvbnN0cydcbmltcG9ydCB7IEFydGljbGVTb3J0U2VsZWN0b3IgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlL3VpL0FydGljbGVTb3J0U2VsZWN0b3IvQXJ0aWNsZVNvcnRTZWxlY3RvcidcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VEZWJvdW5jZS91c2VEZWJvdW5jZSdcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJ3NoYXJlZC90eXBlcydcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZUFwcERpc3BhdGNoL3VzZUFwcERpc3BhdGNoJ1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NoYXJlZC91aS9DYXJkL0NhcmQnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ3NoYXJlZC91aS9JbnB1dC9JbnB1dCdcbmltcG9ydCB7IGZldGNoQXJ0aWNsZXNMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvZmV0Y2hBcnRpY2xlc0xpc3QvZmV0Y2hBcnRpY2xlc0xpc3QnXG5pbXBvcnQgeyBhcnRpY2xlc1BhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2VzL2FydGljbGVzUGFnZVNsaWNlJ1xuaW1wb3J0IHtcbiAgZ2V0QXJ0aWNsZXNQYWdlT3JkZXIsIGdldEFydGljbGVzUGFnZVNlYXJjaCxcbiAgZ2V0QXJ0aWNsZXNQYWdlU29ydCwgZ2V0QXJ0aWNsZXNQYWdlVHlwZSxcbiAgZ2V0QXJ0aWNsZXNQYWdlVmlldyxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2FydGljbGVzUGFnZVNlbGVjdG9ycydcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlc1BhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgQXJ0aWNsZXNQYWdlRmlsdGVyc1Byb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlc1BhZ2VGaWx0ZXJzID0gbWVtbygoeyBjbGFzc05hbWUgfTogQXJ0aWNsZXNQYWdlRmlsdGVyc1Byb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgdmlldyA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZVZpZXcpXG4gIGNvbnN0IHNvcnQgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VTb3J0KVxuICBjb25zdCBvcmRlciA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZU9yZGVyKVxuICBjb25zdCBzZWFyY2ggPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VTZWFyY2gpXG4gIGNvbnN0IHR5cGUgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VUeXBlKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzTGlzdCh7IHJlcGxhY2U6IHRydWUgfSkpXG4gIH0sIFtkaXNwYXRjaF0pXG5cbiAgY29uc3QgZGVib3VuY2VkRmV0Y2hEYXRhID0gdXNlRGVib3VuY2UoZmV0Y2hEYXRhLCA1MDApXG5cbiAgY29uc3Qgb25DaGFuZ2VWaWV3ID0gdXNlQ2FsbGJhY2soKHZpZXc6IEFydGljbGVWaWV3KSA9PiB7XG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRWaWV3KHZpZXcpKVxuICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSlcbiAgICBmZXRjaERhdGEoKVxuICB9LCBbZGlzcGF0Y2gsIGZldGNoRGF0YV0pXG5cbiAgY29uc3Qgb25DaGFuZ2VTb3J0ID0gdXNlQ2FsbGJhY2soKG5ld1NvcnQ6IEFydGljbGVTb3J0RmllbGQpID0+IHtcbiAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFNvcnQobmV3U29ydCkpXG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtkaXNwYXRjaCwgZmV0Y2hEYXRhXSlcblxuICBjb25zdCBvbkNoYW5nZU9yZGVyID0gdXNlQ2FsbGJhY2soKG5ld09yZGVyOiBTb3J0T3JkZXIpID0+IHtcbiAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldE9yZGVyKG5ld09yZGVyKSlcbiAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFBhZ2UoMSkpXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW2Rpc3BhdGNoLCBmZXRjaERhdGFdKVxuXG4gIGNvbnN0IG9uQ2hhbmdlU2VhcmNoID0gdXNlQ2FsbGJhY2soKHNlYXJjaDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRTZWFyY2goc2VhcmNoKSlcbiAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFBhZ2UoMSkpXG4gICAgZGVib3VuY2VkRmV0Y2hEYXRhKClcbiAgfSwgW2RlYm91bmNlZEZldGNoRGF0YSwgZGlzcGF0Y2hdKVxuXG4gIGNvbnN0IG9uQ2hhbmdlVHlwZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZTogQXJ0aWNsZVR5cGUpID0+IHtcbiAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFR5cGUodmFsdWUpKVxuICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSlcbiAgICBmZXRjaERhdGEoKVxuICB9LCBbZmV0Y2hEYXRhLCBkaXNwYXRjaF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuQXJ0aWNsZXNQYWdlRmlsdGVycywge30sIFtjbGFzc05hbWVdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLnNvcnRXcmFwcGVyfT5cbiAgICAgICAgPEFydGljbGVTb3J0U2VsZWN0b3JcbiAgICAgICAgICBzb3J0PXtzb3J0fVxuICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICBvbkNoYW5nZVNvcnQ9e29uQ2hhbmdlU29ydH1cbiAgICAgICAgICBvbkNoYW5nZU9yZGVyPXtvbkNoYW5nZU9yZGVyfVxuICAgICAgICAvPlxuICAgICAgICA8QXJ0aWNsZVZpZXdTZWxlY3RvciB2aWV3PXt2aWV3fSBvblZpZXdDbGljaz17b25DaGFuZ2VWaWV3fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2Nscy5zZWFyY2h9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnc2VhcmNoJyl9XG4gICAgICAgIC8+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8QXJ0aWNsZVR5cGVUYWJzXG4gICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICBvbkNoYW5nZVR5cGU9e29uQ2hhbmdlVHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHMudGFic31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn0pXG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgSW5wdXRIVE1MQXR0cmlidXRlcywgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNsYXNzTmFtZXMsIE1vZHMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcbmltcG9ydCBjbHMgZnJvbSAnLi9JbnB1dC5tb2R1bGUuc2NzcydcblxudHlwZSBIVE1MSW5wdXRQcm9wcyA9IE9taXQ8SW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiwgJ3ZhbHVlJyB8ICdvbkNoYW5nZScgfCAncmVhZE9ubHknPlxuXG5pbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEhUTUxJbnB1dFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgYXV0b0ZvY3VzPzogYm9vbGVhblxuICByZWFkb25seT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IElucHV0ID0gbWVtbygocHJvcHM6IElucHV0UHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgICB0eXBlID0gJ3RleHQnLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGF1dG9Gb2N1cyxcbiAgICByZWFkb25seSxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhcmV0UG9zaXRpb24sIHNldENhcmV0UG9zaXRpb25dID0gdXNlU3RhdGUoMClcblxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgY29uc3QgaXNDYXJldFZpc2libGUgPSBpc0ZvY3VzZWQgJiYgIXJlYWRvbmx5XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICBzZXRJc0ZvY3VzZWQodHJ1ZSlcbiAgICAgIHJlZj8uY3VycmVudD8uZm9jdXMoKVxuICAgIH1cbiAgfSwgW2F1dG9Gb2N1c10pXG5cbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgb25DaGFuZ2U/LihlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpXG4gIH1cblxuICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZCh0cnVlKVxuICB9XG5cbiAgY29uc3Qgb25TZWxlY3QgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q2FyZXRQb3NpdGlvbihlPy50YXJnZXQ/LnNlbGVjdGlvblN0YXJ0IHx8IDApXG4gIH1cblxuICBjb25zdCBtb2RzOiBNb2RzID0ge1xuICAgIFtjbHMucmVhZG9ubHldOiByZWFkb25seSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLklucHV0V3JhcHBlciwge30sIFtjbGFzc05hbWVdKX0+XG4gICAgICB7cGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLnBsYWNlaG9sZGVyfT5cbiAgICAgICAgICB7IGAke3BsYWNlaG9sZGVyfT5gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLmNhcmV0V3JhcHBlcn0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHMuaW5wdXR9XG4gICAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgICB7aXNDYXJldFZpc2libGUgJiYgKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nscy5jYXJldH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke2NhcmV0UG9zaXRpb24gKiA5fXB4YCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcbiIsImltcG9ydCB7IENoYW5nZUV2ZW50LCBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNsYXNzTmFtZXMsIE1vZHMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcclxuaW1wb3J0IGNscyBmcm9tICcuL1NlbGVjdC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T3B0aW9uPFQgZXh0ZW5kcyBzdHJpbmc+IHtcclxuICB2YWx1ZTogVCxcclxuICBjb250ZW50OiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbGVjdFByb3BzPFQgZXh0ZW5kcyBzdHJpbmc+IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBsYWJlbD86IHN0cmluZ1xyXG4gIG9wdGlvbnM/OiBTZWxlY3RPcHRpb248VD5bXVxyXG4gIHZhbHVlPzogVFxyXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBUKSA9PiB2b2lkXHJcbiAgcmVhZG9ubHk/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3QgPSA8VCBleHRlbmRzIHN0cmluZz4ocHJvcHM6IFNlbGVjdFByb3BzPFQ+KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbGFiZWwsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgdmFsdWUsXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIHJlYWRvbmx5LFxyXG4gIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKGUudGFyZ2V0LnZhbHVlIGFzIFQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvcHRpb25zTGlzdCA9IHVzZU1lbW8oKCkgPT4gb3B0aW9ucz8ubWFwKChvcHQpID0+IChcclxuICAgIDxvcHRpb25cclxuICAgICAga2V5PXtvcHQudmFsdWV9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzLm9wdGlvbn1cclxuICAgICAgdmFsdWU9e29wdC52YWx1ZX1cclxuICAgID5cclxuICAgICAge29wdC5jb250ZW50fVxyXG4gICAgPC9vcHRpb24+XHJcbiAgKSksIFtvcHRpb25zXSlcclxuXHJcbiAgY29uc3QgbW9kczogTW9kcyA9IHt9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuV3JhcHBlciwge30sIFtjbGFzc05hbWVdKX0+XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHMubGFiZWx9PlxyXG4gICAgICAgICAge2Ake2xhYmVsfSA+YH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBkaXNhYmxlZD17cmVhZG9ubHl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHMuc2VsZWN0fVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICA+XHJcbiAgICAgICAge29wdGlvbnNMaXN0fVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtZW50aXRpZXMtQXJ0aWNsZS11aS1BcnRpY2xlU29ydFNlbGVjdG9yLUFydGljbGVTb3J0U2VsZWN0b3ItbW9kdWxlX19BcnRpY2xlU29ydFNlbGVjdG9yLS1nU1BYUCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNyYy1lbnRpdGllcy1BcnRpY2xlLXVpLUFydGljbGVTb3J0U2VsZWN0b3ItQXJ0aWNsZVNvcnRTZWxlY3Rvci1tb2R1bGVfX29yZGVyLS1GZXpfOSB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZW50aXRpZXMvQXJ0aWNsZS91aS9BcnRpY2xlU29ydFNlbGVjdG9yL0FydGljbGVTb3J0U2VsZWN0b3IubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFydGljbGVTb3J0U2VsZWN0b3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJBcnRpY2xlU29ydFNlbGVjdG9yXCI6IFwic3JjLWVudGl0aWVzLUFydGljbGUtdWktQXJ0aWNsZVNvcnRTZWxlY3Rvci1BcnRpY2xlU29ydFNlbGVjdG9yLW1vZHVsZV9fQXJ0aWNsZVNvcnRTZWxlY3Rvci0tZ1NQWFBcIixcblx0XCJvcmRlclwiOiBcInNyYy1lbnRpdGllcy1BcnRpY2xlLXVpLUFydGljbGVTb3J0U2VsZWN0b3ItQXJ0aWNsZVNvcnRTZWxlY3Rvci1tb2R1bGVfX29yZGVyLS1GZXpfOVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZS1BcnRpY2xlc1BhZ2UtbW9kdWxlX19BcnRpY2xlc1BhZ2UtLWkwaDE3IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZS1BcnRpY2xlc1BhZ2UtbW9kdWxlX19saXN0LS1Vc0gzNSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQXJ0aWNsZXNQYWdlIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkFydGljbGVzUGFnZVwiOiBcInNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlLUFydGljbGVzUGFnZS1tb2R1bGVfX0FydGljbGVzUGFnZS0taTBoMTdcIixcblx0XCJsaXN0XCI6IFwic3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2UtQXJ0aWNsZXNQYWdlLW1vZHVsZV9fbGlzdC0tVXNIMzVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX19zb3J0V3JhcHBlci0tcHlPam8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZUZpbHRlcnMtQXJ0aWNsZXNQYWdlRmlsdGVycy1tb2R1bGVfX3NlYXJjaC0tUWtOU2Uge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLnNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlRmlsdGVycy1BcnRpY2xlc1BhZ2VGaWx0ZXJzLW1vZHVsZV9fdGFicy0tSkhiYzQge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvcnRXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNvcnRXcmFwcGVyXCI6IFwic3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX19zb3J0V3JhcHBlci0tcHlPam9cIixcblx0XCJzZWFyY2hcIjogXCJzcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZUZpbHRlcnMtQXJ0aWNsZXNQYWdlRmlsdGVycy1tb2R1bGVfX3NlYXJjaC0tUWtOU2VcIixcblx0XCJ0YWJzXCI6IFwic3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX190YWJzLS1KSGJjNFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXRXcmFwcGVyLS1MdUZEVSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3BsYWNlaG9sZGVyLS1lbUFRUSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVAge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0LS1MVmRJUDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0V3JhcHBlci0teTFHaUYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GRyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiA5cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBhbmltYXRpb246IHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGYgMC43cyBmb3J3YXJkcyBpbmZpbml0ZTtcXG59XFxuXFxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19yZWFkb25seS0tZlROMVAge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGYge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC4wMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0ZBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsVUFBQTtFQUFGO0VBR0E7SUFDRSxhQUFBO0VBREY7RUFJQTtJQUNFLFVBQUE7RUFGRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5JbnB1dFdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlaG9sZGVyIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcblxcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJldFdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICB3aWR0aDogOXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYW5pbWF0aW9uOiBibGluayAwLjdzIGZvcndhcmRzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZG9ubHkge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiSW5wdXRXcmFwcGVyXCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX0lucHV0V3JhcHBlci0tTHVGRFVcIixcblx0XCJwbGFjZWhvbGRlclwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19wbGFjZWhvbGRlci0tZW1BUVFcIixcblx0XCJpbnB1dFwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVBcIixcblx0XCJjYXJldFdyYXBwZXJcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXRXcmFwcGVyLS15MUdpRlwiLFxuXHRcImNhcmV0XCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GR1wiLFxuXHRcImJsaW5rXCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZlwiLFxuXHRcInJlYWRvbmx5XCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3JlYWRvbmx5LS1mVE4xUFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19XcmFwcGVyLS1jaWRmZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1TZWxlY3QtU2VsZWN0LW1vZHVsZV9fbGFiZWwtLUcxdXVmIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1TZWxlY3QtU2VsZWN0LW1vZHVsZV9fc2VsZWN0LS1WT0tPdSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4IDJweCAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX29wdGlvbi0tSmtYejkge1xcbiAgY29sb3I6IHZhcigtLWludmVydGVkLXByaW1hcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL1NlbGVjdC9TZWxlY3QubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLG9DQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLldyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbnZlcnRlZC1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiV3JhcHBlclwiOiBcInNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX1dyYXBwZXItLWNpZGZkXCIsXG5cdFwibGFiZWxcIjogXCJzcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19sYWJlbC0tRzF1dWZcIixcblx0XCJzZWxlY3RcIjogXCJzcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19zZWxlY3QtLVZPS091XCIsXG5cdFwib3B0aW9uXCI6IFwic3JjLXNoYXJlZC11aS1TZWxlY3QtU2VsZWN0LW1vZHVsZV9fb3B0aW9uLS1Ka1h6OVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlU29ydFNlbGVjdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVNvcnRTZWxlY3Rvci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlU29ydFNlbGVjdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZXNQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZXNQYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVzUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlc1BhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NlbGVjdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJBcnRpY2xlU29ydEZpZWxkIiwiQXJ0aWNsZVR5cGUiLCJBcnRpY2xlVmlldyIsImdldEFydGljbGVzUGFnZUlzTG9hZGluZyIsInN0YXRlIiwiYXJ0aWNsZXNQYWdlIiwiaXNMb2FkaW5nIiwiZ2V0QXJ0aWNsZXNQYWdlRXJyb3IiLCJlcnJvciIsImdldEFydGljbGVzUGFnZVZpZXciLCJ2aWV3IiwiU01BTEwiLCJnZXRBcnRpY2xlc1BhZ2VOdW0iLCJwYWdlIiwiZ2V0QXJ0aWNsZXNQYWdlTGltaXQiLCJsaW1pdCIsImdldEFydGljbGVzUGFnZUhhc01vcmUiLCJoYXNNb3JlIiwiZ2V0QXJ0aWNsZXNQYWdlSW5pdGVkIiwiX2luaXRlZCIsImdldEFydGljbGVzUGFnZVNvcnQiLCJzb3J0IiwiQ1JFQVRFRCIsImdldEFydGljbGVzUGFnZU9yZGVyIiwib3JkZXIiLCJnZXRBcnRpY2xlc1BhZ2VTZWFyY2giLCJzZWFyY2giLCJnZXRBcnRpY2xlc1BhZ2VUeXBlIiwidHlwZSIsIkFMTCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJhZGRRdWVyeVBhcmFtcyIsImZldGNoQXJ0aWNsZXNMaXN0IiwicHJvcHMiLCJ0aHVua0FwaSIsImV4dHJhIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJyZXNwb25zZSIsImFwaSIsImdldCIsInBhcmFtcyIsIl9leHBhbmQiLCJfbGltaXQiLCJfcGFnZSIsIl9zb3J0IiwiX29yZGVyIiwicSIsInVuZGVmaW5lZCIsImRhdGEiLCJFcnJvciIsImUiLCJhcnRpY2xlc1BhZ2VBY3Rpb25zIiwiZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlIiwiXyIsImRpc3BhdGNoIiwic2V0UGFnZSIsImluaXRBcnRpY2xlc1BhZ2UiLCJzZWFyY2hQYXJhbXMiLCJpbml0ZWQiLCJvcmRlckZyb21VcmwiLCJzb3J0RnJvbVVybCIsInNlYXJjaEZyb21VcmwiLCJ0eXBlRnJvbVVybCIsInNldE9yZGVyIiwic2V0U29ydCIsInNldFNlYXJjaCIsInNldFR5cGUiLCJpbml0U3RhdGUiLCJjcmVhdGVFbnRpdHlBZGFwdGVyIiwiY3JlYXRlU2xpY2UiLCJBUlRJQ0xFU19WSUVXX0xPQ0FMU1RPUkFHRV9LRVkiLCJhcnRpY2xlc0FkYXB0ZXIiLCJzZWxlY3RJZCIsImFydGljbGUiLCJpZCIsImdldEFydGljbGVzIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiYXJ0aWNsZXNQYWdlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaWRzIiwiZW50aXRpZXMiLCJyZWR1Y2VycyIsInNldFZpZXciLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldExpbWl0IiwiZ2V0SXRlbSIsIkJJRyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJtZXRhIiwiYXJnIiwicmVwbGFjZSIsInJlbW92ZUFsbCIsImZ1bGZpbGxlZCIsImxlbmd0aCIsInNldEFsbCIsImFkZE1hbnkiLCJyZWplY3RlZCIsInJlZHVjZXIiLCJhcnRpY2xlc1BhZ2VSZWR1Y2VyIiwiYWN0aW9ucyIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlRGVib3VuY2UiLCJjYWxsYmFjayIsImRlbGF5IiwiX3MiLCJ0aW1lciIsIl9sZW4iLCJhcmd1bWVudHMiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJnZXRRdWVyeVBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwidmFsdWUiLCJzZXQiLCJ0b1N0cmluZyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJtZW1vIiwidXNlTWVtbyIsInVzZVRyYW5zbGF0aW9uIiwiY2xhc3NOYW1lcyIsIlNlbGVjdCIsImNscyIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJBcnRpY2xlU29ydFNlbGVjdG9yIiwiX2MiLCJjbGFzc05hbWUiLCJvbkNoYW5nZVNvcnQiLCJvbkNoYW5nZU9yZGVyIiwidCIsIm9yZGVyT3B0aW9ucyIsImNvbnRlbnQiLCJzb3J0RmllbGRPcHRpb25zIiwiVElUTEUiLCJWSUVXUyIsImNoaWxkcmVuIiwib3B0aW9ucyIsImxhYmVsIiwib25DaGFuZ2UiLCJfYzIiLCIkUmVmcmVzaFJlZyQiLCJBcnRpY2xlTGlzdCIsIlRleHQiLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwiQXJ0aWNsZUluZmluaXRlTGlzdCIsImFydGljbGVzIiwic2VsZWN0QWxsIiwidGV4dCIsIkR5bmFtaWNNb2R1bGVMb2FkZXIiLCJ1c2VJbml0aWFsRWZmZWN0IiwiUGFnZSIsInVzZVNlYXJjaFBhcmFtcyIsIkFydGljbGVzUGFnZUZpbHRlcnMiLCJBcnRpY2xlc1BhZ2UiLCJvbkxvYWROZXh0UGFydCIsIl9fUFJPSkVDVF9fIiwicmVtb3ZlQWZ0ZXJVbm1vdW50Iiwib25TY3JvbGxFbmQiLCJsaXN0IiwiQXJ0aWNsZVR5cGVUYWJzIiwiQXJ0aWNsZVZpZXdTZWxlY3RvciIsIkNhcmQiLCJJbnB1dCIsImZldGNoRGF0YSIsImRlYm91bmNlZEZldGNoRGF0YSIsIm9uQ2hhbmdlVmlldyIsIm5ld1NvcnQiLCJuZXdPcmRlciIsIm9uQ2hhbmdlU2VhcmNoIiwib25DaGFuZ2VUeXBlIiwic29ydFdyYXBwZXIiLCJvblZpZXdDbGljayIsInBsYWNlaG9sZGVyIiwidGFicyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdXRvRm9jdXMiLCJyZWFkb25seSIsIm90aGVyUHJvcHMiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJjYXJldFBvc2l0aW9uIiwic2V0Q2FyZXRQb3NpdGlvbiIsInJlZiIsImlzQ2FyZXRWaXNpYmxlIiwiZm9jdXMiLCJvbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25TZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsIm1vZHMiLCJJbnB1dFdyYXBwZXIiLCJjYXJldFdyYXBwZXIiLCJpbnB1dCIsInJlYWRPbmx5IiwiY2FyZXQiLCJzdHlsZSIsImxlZnQiLCJvcHRpb25zTGlzdCIsIm1hcCIsIm9wdCIsIm9wdGlvbiIsIldyYXBwZXIiLCJkaXNhYmxlZCIsInNlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=