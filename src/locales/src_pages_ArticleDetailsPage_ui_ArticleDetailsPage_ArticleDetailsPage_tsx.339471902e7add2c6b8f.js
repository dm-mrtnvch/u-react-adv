"use strict";
(self["webpackChunkreact_advanced"] = self["webpackChunkreact_advanced"] || []).push([["src_pages_ArticleDetailsPage_ui_ArticleDetailsPage_ArticleDetailsPage_tsx"],{

/***/ "./src/entities/Comment/index.ts":
/*!***************************************!*\
  !*** ./src/entities/Comment/index.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentList": function() { return /* reexport safe */ _ui_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_0__.CommentList; }
/* harmony export */ });
/* harmony import */ var _ui_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/CommentList/CommentList */ "./src/entities/Comment/ui/CommentList/CommentList.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



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

/***/ "./src/features/addCommentForm/index.ts":
/*!**********************************************!*\
  !*** ./src/features/addCommentForm/index.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCommentForm": function() { return /* reexport safe */ _addCommentForm_ui_AddCommentForm_AddCommentForm_async__WEBPACK_IMPORTED_MODULE_0__.AddCommentFormAsync; }
/* harmony export */ });
/* harmony import */ var _addCommentForm_ui_AddCommentForm_AddCommentForm_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addCommentForm/ui/AddCommentForm/AddCommentForm.async */ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



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

/***/ "./src/features/articleRecommendationsList/api/articleRecommendationsApi.ts":
/*!**********************************************************************************!*\
  !*** ./src/features/articleRecommendationsList/api/articleRecommendationsApi.ts ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useArticleRecommendationsList": function() { return /* binding */ useArticleRecommendationsList; }
/* harmony export */ });
/* harmony import */ var shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/api/rtkApi */ "./src/shared/api/rtkApi.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const recommendationsApi = shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRecommendationsList: build.query({
      query: limit => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  }),
  overrideExisting: false
});
const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

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

/***/ "./src/features/articleRecommendationsList/index.ts":
/*!**********************************************************!*\
  !*** ./src/features/articleRecommendationsList/index.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleRecommendationsList": function() { return /* reexport safe */ _ui_ArticleRecommendationsList_ArticleRecommendationsList__WEBPACK_IMPORTED_MODULE_0__.ArticleRecommendationsList; }
/* harmony export */ });
/* harmony import */ var _ui_ArticleRecommendationsList_ArticleRecommendationsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ArticleRecommendationsList/ArticleRecommendationsList */ "./src/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



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

/***/ "./src/pages/ArticleDetailsPage/model/selectors/article.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/selectors/article.ts ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCanEditArticle": function() { return /* binding */ getCanEditArticle; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/reselect/es/index.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const getCanEditArticle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.getArticleDetailsData, entities_User__WEBPACK_IMPORTED_MODULE_1__.getUserAuthData, (article, user) => {
  if (!article || !user) {
    return false;
  }
  return article.user.id === user.id;
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

/***/ "./src/pages/ArticleDetailsPage/model/selectors/comments.ts":
/*!******************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/selectors/comments.ts ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArticleCommentsError": function() { return /* binding */ getArticleCommentsError; },
/* harmony export */   "getArticleCommentsIsLoading": function() { return /* binding */ getArticleCommentsIsLoading; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const getArticleCommentsIsLoading = state => {
  return state.articleDetailsPage?.comments?.isLoading;
};
const getArticleCommentsError = state => {
  return state.articleDetailsPage?.comments?.error;
};

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

/***/ "./src/pages/ArticleDetailsPage/model/services/AddCommentForArticle/AddCommentForArticle.ts":
/*!**************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/AddCommentForArticle/AddCommentForArticle.ts ***!
  \**************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCommentForArticle": function() { return /* binding */ addCommentForArticle; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article/model/selectors/articleDetails */ "./src/entities/Article/model/selectors/articleDetails.ts");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var _fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const addCommentForArticle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const {
    extra,
    dispatch,
    rejectWithValue,
    getState
  } = thunkApi;
  const userData = (0,entities_User__WEBPACK_IMPORTED_MODULE_1__.getUserAuthData)(getState());
  const article = (0,entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_0__.getArticleDetailsData)(getState());
  if (!userData || !text || !article) {
    return rejectWithValue('no data');
  }
  try {
    const response = await extra.api.post('/comments', {
      text,
      articleId: article.id,
      userId: userData.id
    });
    if (!response.data) {
      throw new Error();
    }
    dispatch((0,_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_2__.fetchCommentsByArticleId)(article.id));
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

/***/ "./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts ***!
  \****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchArticleRecommendations": function() { return /* binding */ fetchArticleRecommendations; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const fetchArticleRecommendations = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('articleDetailsPage/fetchArticleRecommendations', async (props, thunkApi) => {
  const {
    extra,
    rejectWithValue
  } = thunkApi;
  try {
    const response = await extra.api.get('/articles', {
      params: {
        _limit: 4
        // _expand: 'user',
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

/***/ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts ***!
  \**********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCommentsByArticleId": function() { return /* binding */ fetchCommentsByArticleId; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const fetchCommentsByArticleId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const {
    extra,
    rejectWithValue
  } = thunkApi;
  if (!articleId) {
    return rejectWithValue('error');
  }
  try {
    const response = await extra.api.get('/comments', {
      params: {
        articleId,
        _expand: 'user'
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

/***/ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts":
/*!**********************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleDetailsCommentsReducer": function() { return /* binding */ articleDetailsCommentsReducer; },
/* harmony export */   "getArticleComments": function() { return /* binding */ getArticleComments; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const commentsAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
  selectId: comment => comment.id
});
const getArticleComments = commentsAdapter.getSelectors(state => {
  return state.articleDetailsPage?.comments || commentsAdapter.getInitialState();
});
const articleDetailsCommentsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState({
    isLoading: false,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        text: 'comment 1',
        user: {
          id: '1',
          username: '1'
        }
      },
      2: {
        id: '2',
        text: 'comment 2',
        user: {
          id: '2',
          username: '2'
        }
      }
    },
    error: undefined
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.pending, state => {
      state.error = undefined;
      state.isLoading = true;
    }).addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false;
      commentsAdapter.setAll(state, action.payload);
    }).addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const {
  reducer: articleDetailsCommentsReducer
} = articleDetailsCommentsSlice;

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

/***/ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice.ts":
/*!*********************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice.ts ***!
  \*********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleDetailsPageRecommendationsReducer": function() { return /* binding */ articleDetailsPageRecommendationsReducer; },
/* harmony export */   "getArticleRecommendations": function() { return /* binding */ getArticleRecommendations; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchArticleRecommendations/fetchArticleRecommendations */ "./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const recommendationsAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
  selectId: article => article.id
});
const getArticleRecommendations = recommendationsAdapter.getSelectors(state => {
  return state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState();
});
const articleDetailsPageRecommendationsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'articleDetailsCommentsSlice',
  initialState: recommendationsAdapter.getInitialState({
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.pending, state => {
      state.error = undefined;
      state.isLoading = true;
    }).addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      recommendationsAdapter.setAll(state, action.payload);
    }).addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const {
  reducer: articleDetailsPageRecommendationsReducer
} = articleDetailsPageRecommendationsSlice;

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

/***/ "./src/pages/ArticleDetailsPage/model/slices/index.ts":
/*!************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/index.ts ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleDetailsPageReducer": function() { return /* binding */ articleDetailsPageReducer; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleDetailsCommentsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts");
/* harmony import */ var _articleDetailsPageRecommendationsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleDetailsPageRecommendationsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const articleDetailsPageReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  recommendations: _articleDetailsPageRecommendationsSlice__WEBPACK_IMPORTED_MODULE_1__.articleDetailsPageRecommendationsReducer,
  comments: _articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_0__.articleDetailsCommentsReducer
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

/***/ "./src/entities/Comment/ui/CommentCard/CommentCard.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentCard/CommentCard.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentCard": function() { return /* binding */ CommentCard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Avatar/Avatar */ "./src/shared/ui/Avatar/Avatar.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Skeleton/Skeleton */ "./src/shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/AppLink/AppLink */ "./src/shared/ui/AppLink/AppLink.tsx");
/* harmony import */ var _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentCard.module.scss */ "./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();












const CommentCard = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {
  _s();
  const {
    comment,
    isLoading,
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_4__.VStack, {
      max: true,
      gap: "8",
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].CommentCard, {}, [className, _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loading]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
          width: 30,
          height: 30,
          border: "50%"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
          height: 16,
          width: 100,
          className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].username
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].text,
        width: "100%",
        height: 50
      })]
    });
  }
  if (!comment) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_4__.VStack, {
    max: true,
    gap: "8",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].CommentCard, {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_7__.AppLink, {
      to: `${shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_1__.RoutePath.profile}${comment.user.id}`,
      className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].header,
      children: [comment.user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
        size: 30,
        src: comment.user.avatar
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].username,
        title: comment.user.username
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
      className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].text,
      text: comment.text
    })]
  });
}, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation];
})), "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation];
});
_c2 = CommentCard;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "CommentCard$memo");
__webpack_require__.$Refresh$.register(_c2, "CommentCard");

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

/***/ "./src/entities/Comment/ui/CommentList/CommentList.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentList/CommentList.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentList": function() { return /* binding */ CommentList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommentCard/CommentCard */ "./src/entities/Comment/ui/CommentCard/CommentCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();








const CommentList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {
  _s();
  const {
    className,
    comments,
    isLoading
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      max: true,
      gap: "16",
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('', {}, [className]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_4__.CommentCard, {
        isLoading: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_4__.CommentCard, {
        isLoading: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_4__.CommentCard, {
        isLoading: true
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    max: true,
    gap: "16",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('', {}, [className]),
    children: comments?.length ? comments.map(comment => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_4__.CommentCard, {
      isLoading: isLoading,
      comment: comment
    }, comment.id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {
      text: t('no-comments')
    })
  });
}, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
})), "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];
});
_c2 = CommentList;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "CommentList$memo");
__webpack_require__.$Refresh$.register(_c2, "CommentList");

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

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx":
/*!********************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCommentFormAsync": function() { return /* binding */ AddCommentFormAsync; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const AddCommentFormAsync = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c = () => __webpack_require__.e(/*! import() */ "src_features_addCommentForm_ui_AddCommentForm_AddCommentForm_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./AddCommentForm */ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx")));
_c2 = AddCommentFormAsync;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AddCommentFormAsync$lazy");
__webpack_require__.$Refresh$.register(_c2, "AddCommentFormAsync");

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

/***/ "./src/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.tsx ***!
  \**************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleRecommendationsList": function() { return /* binding */ ArticleRecommendationsList; }
/* harmony export */ });
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/articleRecommendationsApi */ "./src/features/articleRecommendationsList/api/articleRecommendationsApi.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









const ArticleRecommendationsList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(props => {
  _s();
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  const {
    data: articles,
    isLoading,
    error
  } = (0,_api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_5__.useArticleRecommendationsList)(3);
  if (isLoading || error || !articles) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    gap: "8",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)('', {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_4__.Text, {
      size: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_4__.TextSize.L,
      title: t('recommend')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleList, {
      articles: articles,
      target: "_blank",
      virtualized: false
    })]
  });
}, "x9UTuapnTEwTnwNQsJdq5U/0CnA=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation, _api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_5__.useArticleRecommendationsList];
})), "x9UTuapnTEwTnwNQsJdq5U/0CnA=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation, _api_articleRecommendationsApi__WEBPACK_IMPORTED_MODULE_5__.useArticleRecommendationsList];
});
_c2 = ArticleRecommendationsList;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleRecommendationsList$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleRecommendationsList");

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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx ***!
  \*******************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsComments": function() { return /* binding */ ArticleDetailsComments; }
/* harmony export */ });
/* harmony import */ var entities_Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Comment */ "./src/entities/Comment/index.ts");
/* harmony import */ var features_addCommentForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/addCommentForm */ "./src/features/addCommentForm/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var shared_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Loader/Loader */ "./src/shared/ui/Loader/Loader.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _model_slices_articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/slices/articleDetailsCommentsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts");
/* harmony import */ var _model_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
/* harmony import */ var _model_services_AddCommentForArticle_AddCommentForArticle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/services/AddCommentForArticle/AddCommentForArticle */ "./src/pages/ArticleDetailsPage/model/services/AddCommentForArticle/AddCommentForArticle.ts");
/* harmony import */ var _model_selectors_comments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/selectors/comments */ "./src/pages/ArticleDetailsPage/model/selectors/comments.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();

















const ArticleDetailsComments = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c = _s(_ref => {
  _s();
  let {
    className,
    id
  } = _ref;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation)();
  const dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  const comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_slices_articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_10__.getArticleComments.selectAll);
  const commentsIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_comments__WEBPACK_IMPORTED_MODULE_13__.getArticleCommentsIsLoading);
  const onSendComment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(text => {
    dispatch((0,_model_services_AddCommentForArticle_AddCommentForArticle__WEBPACK_IMPORTED_MODULE_12__.addCommentForArticle)(text));
  }, [dispatch]);
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect)(() => {
    dispatch((0,_model_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_11__.fetchCommentsByArticleId)(id));
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_8__.VStack, {
    max: true,
    gap: "16",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_4__.classNames)('', {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__.Text, {
      size: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__.TextSize.L,
      title: t('comments')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(shared_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__.Loader, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(features_addCommentForm__WEBPACK_IMPORTED_MODULE_1__.AddCommentForm, {
        onSendComment: onSendComment
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(entities_Comment__WEBPACK_IMPORTED_MODULE_0__.CommentList, {
      isLoading: commentsIsLoading,
      comments: comments
    })]
  });
}, "KLIRJ3qYM9qVnIpiRkNFUBkFlow=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect];
})), "KLIRJ3qYM9qVnIpiRkNFUBkFlow=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_6__.useInitialEffect];
});
_c2 = ArticleDetailsComments;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsComments$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleDetailsComments");

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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx":
/*!***********************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx ***!
  \***********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var features_articleRecommendationsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/articleRecommendationsList */ "./src/features/articleRecommendationsList/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var widgets_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! widgets/Page/Page */ "./src/widgets/Page/Page.tsx");
/* harmony import */ var _ArticleDetailsComments_ArticleDetailsComments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ArticleDetailsComments/ArticleDetailsComments */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx");
/* harmony import */ var _model_slices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/slices */ "./src/pages/ArticleDetailsPage/model/slices/index.ts");
/* harmony import */ var _ArticleDetailsPageHeader_ArticleDetailsPageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ArticleDetailsPageHeader/ArticleDetailsPageHeader */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx");
/* harmony import */ var _ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ArticleDetailsPage.module.scss */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();















const reducers = {
  articleDetailsPage: _model_slices__WEBPACK_IMPORTED_MODULE_8__.articleDetailsPageReducer
};
const ArticleDetailsPage = _ref => {
  _s();
  let {
    className
  } = _ref;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)('article-details');
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__.DynamicModuleLoader, {
    reducers: reducers,
    removeAfterUnmount: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page, {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].ArticleDetailsPage, {}, [className]),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_5__.VStack, {
        gap: "16",
        max: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ArticleDetailsPageHeader_ArticleDetailsPageHeader__WEBPACK_IMPORTED_MODULE_9__.ArticleDetailsPageHeader, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleDetails, {
          id: id
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(features_articleRecommendationsList__WEBPACK_IMPORTED_MODULE_1__.ArticleRecommendationsList, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ArticleDetailsComments_ArticleDetailsComments__WEBPACK_IMPORTED_MODULE_7__.ArticleDetailsComments, {
          id: id
        })]
      })
    })
  });
};
_s(ArticleDetailsPage, "mv4kTZC5RutjrAlkx2314fJkuBQ=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams];
});
_c = ArticleDetailsPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(ArticleDetailsPage));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsPage");
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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx ***!
  \***********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsPageHeader": function() { return /* binding */ ArticleDetailsPageHeader; }
/* harmony export */ });
/* harmony import */ var entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article/model/selectors/articleDetails */ "./src/entities/Article/model/selectors/articleDetails.ts");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var _model_selectors_article__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/selectors/article */ "./src/pages/ArticleDetailsPage/model/selectors/article.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();













const ArticleDetailsPageHeader = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c = _s(_ref => {
  _s();
  let {
    className
  } = _ref;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  const userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(entities_User__WEBPACK_IMPORTED_MODULE_1__.getUserAuthData);
  const article = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(entities_Article_model_selectors_articleDetails__WEBPACK_IMPORTED_MODULE_0__.getArticleDetailsData);
  const canEdit = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_article__WEBPACK_IMPORTED_MODULE_8__.getCanEditArticle);
  const onBackToList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    navigate(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_4__.RoutePath.articles);
  }, [navigate]);
  const onEditArticle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    navigate(`${shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_4__.RoutePath.articles}/${article?.id}/edit`);
  }, [article?.id, navigate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_7__.HStack, {
    max: true,
    justify: "between",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__.classNames)('', {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: onBackToList,
      children: t('back-to-articles')
    }), canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: onEditArticle,
      children: t('edit')
    })]
  });
}, "xPF9WFHhErseAZ9MS6srw+EPziE=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
})), "xPF9WFHhErseAZ9MS6srw+EPziE=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});
_c2 = ArticleDetailsPageHeader;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsPageHeader$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleDetailsPageHeader");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Comment/ui/CommentCard/CommentCard.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentCard/CommentCard.module.scss ***!
  \*********************************************************************/
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
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss":
/*!*******************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss ***!
  \*******************************************************************************************/
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
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0FydGljbGVEZXRhaWxzUGFnZV91aV9BcnRpY2xlRGV0YWlsc1BhZ2VfQXJ0aWNsZURldGFpbHNQYWdlX3RzeC4zMzk0NzE5MDJlN2FkZDJjNmI4Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQzBDO0FBRTFDLE1BQU1JLGtCQUFrQixHQUFHRCxxRUFBc0IsQ0FBQztFQUNoREcsU0FBUyxFQUFHQyxLQUFLLEtBQU07SUFDckJDLDZCQUE2QixFQUFFRCxLQUFLLENBQUNFLEtBQUssQ0FBb0I7TUFDNURBLEtBQUssRUFBR0MsS0FBSyxLQUFNO1FBQ2pCQyxHQUFHLEVBQUUsV0FBVztRQUNoQkMsTUFBTSxFQUFFO1VBQ05DLE1BQU0sRUFBRUg7UUFDVjtNQUNGLENBQUM7SUFDSCxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0VBQ0ZJLGdCQUFnQixFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUVLLE1BQU1DLDZCQUE2QixHQUFHWCxrQkFBa0IsQ0FBQ1kscUNBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVqQnBEO0FBQ087QUFDVDtBQUV4QyxNQUFNSyxpQkFBaUIsR0FBR0gsZ0VBQWMsQ0FDN0NDLG1FQUFxQixFQUNyQkMsMERBQWUsRUFDZixDQUFDRSxPQUFPLEVBQUVDLElBQUksS0FBSztFQUNqQixJQUFJLENBQUNELE9BQU8sSUFBSSxDQUFDQyxJQUFJLEVBQUU7SUFDckIsT0FBTyxLQUFLO0VBQ2Q7RUFFQSxPQUFPRCxPQUFPLENBQUNDLElBQUksQ0FBQ0MsRUFBRSxLQUFLRCxJQUFJLENBQUNDLEVBQUU7QUFD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QUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyw2SkFBVyxHQUFHLCtLQUFjOztBQUV0RSxxQkFBcUIsd0tBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUdzTDtBQUN0TCxPQUFPLCtEQUFlLHdLQUFPLElBQUksK0tBQWMsR0FBRywrS0FBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9lbnRpdGllcy9Db21tZW50L2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0L2FwaS9hcnRpY2xlUmVjb21tZW5kYXRpb25zQXBpLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0L2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zZWxlY3RvcnMvYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2VsZWN0b3JzL2NvbW1lbnRzLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zZXJ2aWNlcy9BZGRDb21tZW50Rm9yQXJ0aWNsZS9BZGRDb21tZW50Rm9yQXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2VydmljZXMvZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zL2ZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucy50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2VydmljZXMvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZC50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2xpY2VzL2FydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2xpY2VzL2FydGljbGVEZXRhaWxzUGFnZVJlY29tbWVuZGF0aW9uc1NsaWNlLnRzIiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zbGljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50Q2FyZC9Db21tZW50Q2FyZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50TGlzdC9Db21tZW50TGlzdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0uYXN5bmMudHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2ZlYXR1cmVzL2FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0L3VpL0FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0L0FydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvdWkvQXJ0aWNsZURldGFpbHNDb21tZW50cy9BcnRpY2xlRGV0YWlsc0NvbW1lbnRzLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1hZHZhbmNlZC8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvdWkvQXJ0aWNsZURldGFpbHNQYWdlL0FydGljbGVEZXRhaWxzUGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL3VpL0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL2VudGl0aWVzL0NvbW1lbnQvdWkvQ29tbWVudENhcmQvQ29tbWVudENhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL3VpL0FydGljbGVEZXRhaWxzUGFnZS9BcnRpY2xlRGV0YWlsc1BhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtYWR2YW5jZWQvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50Q2FyZC9Db21tZW50Q2FyZC5tb2R1bGUuc2Nzcz9mZmI5Iiwid2VicGFjazovL3JlYWN0LWFkdmFuY2VkLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2UvQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzP2ZkMzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgQ29tbWVudExpc3QgfSBmcm9tICcuL3VpL0NvbW1lbnRMaXN0L0NvbW1lbnRMaXN0J1xyXG5leHBvcnQgdHlwZSB7IENvbW1lbnQgfSBmcm9tICcuL21vZGVsL3R5cGVzL2NvbW1lbnQnXHJcbiIsImV4cG9ydCB0eXBlIHsgQWRkQ29tbWVudEZvcm1TY2hlbWEgfSBmcm9tICcuL21vZGVsL3R5cGVzL2FkZENvbW1lbnRGb3JtJ1xyXG5leHBvcnQgeyBBZGRDb21tZW50Rm9ybUFzeW5jIGFzIEFkZENvbW1lbnRGb3JtIH0gZnJvbSAnLi4vYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0uYXN5bmMnXHJcbiIsImltcG9ydCB7IEFydGljbGUgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xyXG5pbXBvcnQgeyBydGtBcGkgfSBmcm9tICdzaGFyZWQvYXBpL3J0a0FwaSdcclxuXHJcbmNvbnN0IHJlY29tbWVuZGF0aW9uc0FwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gIGVuZHBvaW50czogKGJ1aWxkKSA9PiAoe1xyXG4gICAgZ2V0QXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3Q6IGJ1aWxkLnF1ZXJ5PEFydGljbGVbXSwgbnVtYmVyPih7XHJcbiAgICAgIHF1ZXJ5OiAobGltaXQpID0+ICh7XHJcbiAgICAgICAgdXJsOiAnL2FydGljbGVzJyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIF9saW1pdDogbGltaXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuICB9KSxcclxuICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCA9IHJlY29tbWVuZGF0aW9uc0FwaS51c2VHZXRBcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdFF1ZXJ5XHJcbiIsImV4cG9ydCB7IEFydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0IH0gZnJvbSAnLi91aS9BcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdC9BcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCdcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZURldGFpbHNEYXRhIH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSdcclxuaW1wb3J0IHsgZ2V0VXNlckF1dGhEYXRhIH0gZnJvbSAnZW50aXRpZXMvVXNlcidcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYW5FZGl0QXJ0aWNsZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIGdldEFydGljbGVEZXRhaWxzRGF0YSxcclxuICBnZXRVc2VyQXV0aERhdGEsXHJcbiAgKGFydGljbGUsIHVzZXIpID0+IHtcclxuICAgIGlmICghYXJ0aWNsZSB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJ0aWNsZS51c2VyLmlkID09PSB1c2VyLmlkXHJcbiAgfSxcclxuKVxyXG4iLCJpbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJ2FwcC9wcm92aWRlcnMvU3RvcmVQcm92aWRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlQ29tbWVudHNJc0xvYWRpbmcgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiB7XHJcbiAgcmV0dXJuIHN0YXRlLmFydGljbGVEZXRhaWxzUGFnZT8uY29tbWVudHM/LmlzTG9hZGluZ1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlQ29tbWVudHNFcnJvciA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHtcclxuICByZXR1cm4gc3RhdGUuYXJ0aWNsZURldGFpbHNQYWdlPy5jb21tZW50cz8uZXJyb3JcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7IGdldEFydGljbGVEZXRhaWxzRGF0YSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUvbW9kZWwvc2VsZWN0b3JzL2FydGljbGVEZXRhaWxzJ1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnZW50aXRpZXMvQ29tbWVudCdcclxuaW1wb3J0IHsgZ2V0VXNlckF1dGhEYXRhIH0gZnJvbSAnZW50aXRpZXMvVXNlcidcclxuaW1wb3J0IHsgZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkIH0gZnJvbSAnLi4vZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZCdcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50Rm9yQXJ0aWNsZSA9IGNyZWF0ZUFzeW5jVGh1bms8XHJcbiAgQ29tbWVudCxcclxuICBzdHJpbmcsXHJcbiAgVGh1bmtDb25maWc8c3RyaW5nPlxyXG4gID4oXHJcbiAgICAnYXJ0aWNsZURldGFpbHMvYWRkQ29tbWVudEZvckFydGljbGUnLFxyXG4gICAgYXN5bmMgKHRleHQsIHRodW5rQXBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBleHRyYSwgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUsXHJcbiAgICAgIH0gPSB0aHVua0FwaVxyXG5cclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyQXV0aERhdGEoZ2V0U3RhdGUoKSlcclxuICAgICAgY29uc3QgYXJ0aWNsZSA9IGdldEFydGljbGVEZXRhaWxzRGF0YShnZXRTdGF0ZSgpKVxyXG5cclxuICAgICAgaWYgKCF1c2VyRGF0YSB8fCAhdGV4dCB8fCAhYXJ0aWNsZSkge1xyXG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoJ25vIGRhdGEnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZXh0cmEuYXBpLnBvc3Q8Q29tbWVudD4oJy9jb21tZW50cycsIHtcclxuICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICBhcnRpY2xlSWQ6IGFydGljbGUuaWQsXHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXJEYXRhLmlkLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ29tbWVudHNCeUFydGljbGVJZChhcnRpY2xlLmlkKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoJ2Vycm9yJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICApXHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBUaHVua0NvbmZpZyB9IGZyb20gJ2FwcC9wcm92aWRlcnMvU3RvcmVQcm92aWRlcidcclxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zID0gY3JlYXRlQXN5bmNUaHVuazxcclxuICBBcnRpY2xlW10sXHJcbiAgdm9pZCxcclxuICBUaHVua0NvbmZpZzxzdHJpbmc+XHJcbiAgPihcclxuICAgICdhcnRpY2xlRGV0YWlsc1BhZ2UvZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zJyxcclxuICAgIGFzeW5jIChwcm9wcywgdGh1bmtBcGkpID0+IHtcclxuICAgICAgY29uc3QgeyBleHRyYSwgcmVqZWN0V2l0aFZhbHVlIH0gPSB0aHVua0FwaVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGV4dHJhLmFwaS5nZXQ8QXJ0aWNsZVtdPignL2FydGljbGVzJywge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIF9saW1pdDogNCxcclxuICAgICAgICAgICAgLy8gX2V4cGFuZDogJ3VzZXInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZSgnZXJyb3InKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIClcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IFRodW5rQ29uZmlnIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnZW50aXRpZXMvQ29tbWVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQgPSBjcmVhdGVBc3luY1RodW5rPENvbW1lbnRbXSxcclxuICBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgVGh1bmtDb25maWc8c3RyaW5nPj4oXHJcbiAgICAnYXJ0aWNsZURldGFpbHMvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkJyxcclxuICAgIGFzeW5jIChhcnRpY2xlSWQsIHRodW5rQXBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSB9ID0gdGh1bmtBcGlcclxuXHJcbiAgICAgIGlmICghYXJ0aWNsZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZSgnZXJyb3InKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZXh0cmEuYXBpLmdldDxDb21tZW50W10+KCcvY29tbWVudHMnLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgYXJ0aWNsZUlkLFxyXG4gICAgICAgICAgICBfZXhwYW5kOiAndXNlcicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKCdlcnJvcicpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgKVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJ2FwcC9wcm92aWRlcnMvU3RvcmVQcm92aWRlcidcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICdlbnRpdGllcy9Db21tZW50J1xuaW1wb3J0IHsgZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkIH0gZnJvbSAnLi4vc2VydmljZXMvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZCdcbmltcG9ydCB7IEFydGljbGVEZXRhaWxzQ29tbWVudHNTY2hlbWEgfSBmcm9tICcuLi90eXBlcy9BcnRpY2xlRGV0YWlsc0NvbW1lbnRzU2NoZW1hJ1xuXG5jb25zdCBjb21tZW50c0FkYXB0ZXIgPSBjcmVhdGVFbnRpdHlBZGFwdGVyPENvbW1lbnQ+KHtcbiAgc2VsZWN0SWQ6IChjb21tZW50KSA9PiBjb21tZW50LmlkLFxufSlcblxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVDb21tZW50cyA9IGNvbW1lbnRzQWRhcHRlci5nZXRTZWxlY3RvcnM8U3RhdGVTY2hlbWE+KFxuICAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuYXJ0aWNsZURldGFpbHNQYWdlPy5jb21tZW50cyB8fCBjb21tZW50c0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKClcbiAgfSxcbilcblxuY29uc3QgYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlJyxcbiAgaW5pdGlhbFN0YXRlOiBjb21tZW50c0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlPEFydGljbGVEZXRhaWxzQ29tbWVudHNTY2hlbWE+KHtcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIGlkczogWycxJywgJzInXSxcbiAgICBlbnRpdGllczoge1xuICAgICAgMToge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0ZXh0OiAnY29tbWVudCAxJyxcbiAgICAgICAgdXNlcjogeyBpZDogJzEnLCB1c2VybmFtZTogJzEnIH0sXG4gICAgICB9LFxuICAgICAgMjoge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICB0ZXh0OiAnY29tbWVudCAyJyxcbiAgICAgICAgdXNlcjogeyBpZDogJzInLCB1c2VybmFtZTogJzInIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgfSksXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmVycm9yID0gdW5kZWZpbmVkXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQuZnVsZmlsbGVkLCAoXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248Q29tbWVudFtdPixcbiAgICAgICkgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICBjb21tZW50c0FkYXB0ZXIuc2V0QWxsKHN0YXRlLCBhY3Rpb24ucGF5bG9hZClcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pXG4gIH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyByZWR1Y2VyOiBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlciB9ID0gYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlXG4iLCJpbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJ2FwcC9wcm92aWRlcnMvU3RvcmVQcm92aWRlcidcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xuaW1wb3J0IHtcbiAgZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9mZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMvZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zJ1xuaW1wb3J0IHsgQXJ0aWNsZURldGFpbHNSZWNvbW1lbmRhdGlvbnNTY2hlbWEgfSBmcm9tICcuLi90eXBlcy9BcnRpY2xlRGV0YWlsc1JlY29tbWVuZGF0aW9uc1NjaGVtYSdcblxuY29uc3QgcmVjb21tZW5kYXRpb25zQWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8QXJ0aWNsZT4oe1xuICBzZWxlY3RJZDogKGFydGljbGUpID0+IGFydGljbGUuaWQsXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZVJlY29tbWVuZGF0aW9ucyA9IHJlY29tbWVuZGF0aW9uc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzPFN0YXRlU2NoZW1hPihcbiAgKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLmFydGljbGVEZXRhaWxzUGFnZT8ucmVjb21tZW5kYXRpb25zIHx8IHJlY29tbWVuZGF0aW9uc0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKClcbiAgfSxcbilcblxuY29uc3QgYXJ0aWNsZURldGFpbHNQYWdlUmVjb21tZW5kYXRpb25zU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhcnRpY2xlRGV0YWlsc0NvbW1lbnRzU2xpY2UnLFxuICBpbml0aWFsU3RhdGU6IHJlY29tbWVuZGF0aW9uc0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlPEFydGljbGVEZXRhaWxzUmVjb21tZW5kYXRpb25zU2NoZW1hPih7XG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpZHM6IFtdLFxuICAgIGVudGl0aWVzOiB7fSxcbiAgfSksXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmVycm9yID0gdW5kZWZpbmVkXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMuZnVsZmlsbGVkLCAoXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJ0aWNsZVtdPixcbiAgICAgICkgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICByZWNvbW1lbmRhdGlvbnNBZGFwdGVyLnNldEFsbChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpXG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KVxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IHtcbiAgcmVkdWNlcjogYXJ0aWNsZURldGFpbHNQYWdlUmVjb21tZW5kYXRpb25zUmVkdWNlcixcbn0gPSBhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbW1lbmRhdGlvbnNTbGljZVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgQXJ0aWNsZURldGFpbHNQYWdlU2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCB7IGFydGljbGVEZXRhaWxzQ29tbWVudHNSZWR1Y2VyIH0gZnJvbSAnLi9hcnRpY2xlRGV0YWlsc0NvbW1lbnRzU2xpY2UnXHJcbmltcG9ydCB7IGFydGljbGVEZXRhaWxzUGFnZVJlY29tbWVuZGF0aW9uc1JlZHVjZXIgfSBmcm9tICcuL2FydGljbGVEZXRhaWxzUGFnZVJlY29tbWVuZGF0aW9uc1NsaWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFydGljbGVEZXRhaWxzUGFnZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8QXJ0aWNsZURldGFpbHNQYWdlU2NoZW1hPih7XHJcbiAgcmVjb21tZW5kYXRpb25zOiBhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbW1lbmRhdGlvbnNSZWR1Y2VyLFxyXG4gIGNvbW1lbnRzOiBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlcixcclxufSlcclxuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IFJvdXRlUGF0aCB9IGZyb20gJ3NoYXJlZC9jb25maWcvcm91dGVDb25maWcvcm91dGVDb25maWcnXHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnc2hhcmVkL3VpL0F2YXRhci9BdmF0YXInXHJcbmltcG9ydCB7IFZTdGFjayB9IGZyb20gJ3NoYXJlZC91aS9TdGFjaydcclxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3NoYXJlZC91aS9UZXh0L1RleHQnXHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSAnc2hhcmVkL3VpL1NrZWxldG9uL1NrZWxldG9uJ1xyXG5pbXBvcnQgeyBBcHBMaW5rIH0gZnJvbSAnc2hhcmVkL3VpL0FwcExpbmsvQXBwTGluaydcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL2NvbW1lbnQnXHJcbmltcG9ydCBjbHMgZnJvbSAnLi9Db21tZW50Q2FyZC5tb2R1bGUuc2NzcydcclxuXHJcbmludGVyZmFjZSBDb21tZW50Q2FyZFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBjb21tZW50PzogQ29tbWVudFxyXG4gIGlzTG9hZGluZz86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRDYXJkID0gbWVtbygocHJvcHM6IENvbW1lbnRDYXJkUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNvbW1lbnQsIGlzTG9hZGluZywgY2xhc3NOYW1lIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VlN0YWNrXHJcbiAgICAgICAgbWF4XHJcbiAgICAgICAgZ2FwPVwiOFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5Db21tZW50Q2FyZCwge30sIFtjbGFzc05hbWUsIGNscy5sb2FkaW5nXSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8U2tlbGV0b24gd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBib3JkZXI9XCI1MCVcIiAvPlxyXG4gICAgICAgICAgPFNrZWxldG9uIGhlaWdodD17MTZ9IHdpZHRoPXsxMDB9IGNsYXNzTmFtZT17Y2xzLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9e2Nscy50ZXh0fSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezUwfSAvPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGlmICghY29tbWVudCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrXHJcbiAgICAgIG1heFxyXG4gICAgICBnYXA9XCI4XCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5Db21tZW50Q2FyZCwge30sIFtjbGFzc05hbWVdKX1cclxuICAgID5cclxuICAgICAgPEFwcExpbmsgdG89e2Ake1JvdXRlUGF0aC5wcm9maWxlfSR7Y29tbWVudC51c2VyLmlkfWB9IGNsYXNzTmFtZT17Y2xzLmhlYWRlcn0+XHJcbiAgICAgICAge2NvbW1lbnQudXNlci5hdmF0YXIgPyA8QXZhdGFyIHNpemU9ezMwfSBzcmM9e2NvbW1lbnQudXNlci5hdmF0YXJ9IC8+IDogbnVsbH1cclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9e2Nscy51c2VybmFtZX0gdGl0bGU9e2NvbW1lbnQudXNlci51c2VybmFtZX0gLz5cclxuICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICA8VGV4dCBjbGFzc05hbWU9e2Nscy50ZXh0fSB0ZXh0PXtjb21tZW50LnRleHR9IC8+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApXHJcbn0pXHJcbiIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXHJcbmltcG9ydCB7IFZTdGFjayB9IGZyb20gJ3NoYXJlZC91aS9TdGFjaydcclxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3NoYXJlZC91aS9UZXh0L1RleHQnXHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbC90eXBlcy9jb21tZW50J1xyXG5pbXBvcnQgeyBDb21tZW50Q2FyZCB9IGZyb20gJy4uL0NvbW1lbnRDYXJkL0NvbW1lbnRDYXJkJ1xyXG5cclxuaW50ZXJmYWNlIENvbW1lbnRMaXN0UHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIGNvbW1lbnRzPzogQ29tbWVudFtdXHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudExpc3QgPSBtZW1vKChwcm9wczogQ29tbWVudExpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjb21tZW50cywgaXNMb2FkaW5nIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VlN0YWNrXHJcbiAgICAgICAgbWF4XHJcbiAgICAgICAgZ2FwPVwiMTZcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnJywge30sIFtjbGFzc05hbWVdKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb21tZW50Q2FyZCBpc0xvYWRpbmcgLz5cclxuICAgICAgICA8Q29tbWVudENhcmQgaXNMb2FkaW5nIC8+XHJcbiAgICAgICAgPENvbW1lbnRDYXJkIGlzTG9hZGluZyAvPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrXHJcbiAgICAgIG1heFxyXG4gICAgICBnYXA9XCIxNlwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnJywge30sIFtjbGFzc05hbWVdKX1cclxuICAgID5cclxuICAgICAge2NvbW1lbnRzPy5sZW5ndGhcclxuICAgICAgICA/IGNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgICAgPENvbW1lbnRDYXJkXHJcbiAgICAgICAgICAgIGtleT17Y29tbWVudC5pZH1cclxuICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICAgOiA8VGV4dCB0ZXh0PXt0KCduby1jb21tZW50cycpfSAvPn1cclxuICAgIDwvVlN0YWNrPlxyXG4gIClcclxufSlcclxuIiwiaW1wb3J0IHsgRkMsIGxhenkgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQWRkQ29tbWVudEZvcm1Qcm9wcyB9IGZyb20gJy4vQWRkQ29tbWVudEZvcm0nXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudEZvcm1Bc3luYyA9IGxhenk8RkM8QWRkQ29tbWVudEZvcm1Qcm9wcz4+KCgpID0+IGltcG9ydCgnLi9BZGRDb21tZW50Rm9ybScpKVxyXG4iLCJpbXBvcnQgeyBBcnRpY2xlTGlzdCB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXG5pbXBvcnQgeyBWU3RhY2sgfSBmcm9tICdzaGFyZWQvdWkvU3RhY2snXG5pbXBvcnQgeyBUZXh0LCBUZXh0U2l6ZSB9IGZyb20gJ3NoYXJlZC91aS9UZXh0L1RleHQnXG5pbXBvcnQgeyB1c2VBcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCB9IGZyb20gJy4uLy4uL2FwaS9hcnRpY2xlUmVjb21tZW5kYXRpb25zQXBpJ1xuXG5pbnRlcmZhY2UgQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3RQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QgPSBtZW1vKChwcm9wczogQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3RQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHsgZGF0YTogYXJ0aWNsZXMsIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZUFydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0KDMpXG5cbiAgaWYgKGlzTG9hZGluZyB8fCBlcnJvciB8fCAhYXJ0aWNsZXMpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VlN0YWNrIGdhcD1cIjhcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJycsIHt9LCBbY2xhc3NOYW1lXSl9PlxuICAgICAgPFRleHRcbiAgICAgICAgc2l6ZT17VGV4dFNpemUuTH1cbiAgICAgICAgdGl0bGU9e3QoJ3JlY29tbWVuZCcpfVxuICAgICAgLz5cbiAgICAgIDxBcnRpY2xlTGlzdFxuICAgICAgICBhcnRpY2xlcz17YXJ0aWNsZXN9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHZpcnR1YWxpemVkPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgPC9WU3RhY2s+XG4gIClcbn0pXG4iLCJpbXBvcnQgeyBDb21tZW50TGlzdCB9IGZyb20gJ2VudGl0aWVzL0NvbW1lbnQnXHJcbmltcG9ydCB7IEFkZENvbW1lbnRGb3JtIH0gZnJvbSAnZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0nXHJcbmltcG9ydCB7IG1lbW8sIFN1c3BlbnNlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZUFwcERpc3BhdGNoL3VzZUFwcERpc3BhdGNoJ1xyXG5pbXBvcnQgeyB1c2VJbml0aWFsRWZmZWN0IH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VJbml0aWFsRWZmZWN0L3VzZUluaXRpYWxFZmZlY3QnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ3NoYXJlZC91aS9Mb2FkZXIvTG9hZGVyJ1xyXG5pbXBvcnQgeyBWU3RhY2sgfSBmcm9tICdzaGFyZWQvdWkvU3RhY2snXHJcbmltcG9ydCB7IFRleHQsIFRleHRTaXplIH0gZnJvbSAnc2hhcmVkL3VpL1RleHQvVGV4dCdcclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZUNvbW1lbnRzIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2VzL2FydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZSdcclxuaW1wb3J0IHtcclxuICBmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQsXHJcbn0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZCdcclxuaW1wb3J0IHsgYWRkQ29tbWVudEZvckFydGljbGUgfSBmcm9tICcuLi8uLi9tb2RlbC9zZXJ2aWNlcy9BZGRDb21tZW50Rm9yQXJ0aWNsZS9BZGRDb21tZW50Rm9yQXJ0aWNsZSdcclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZUNvbW1lbnRzSXNMb2FkaW5nIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2NvbW1lbnRzJ1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVEZXRhaWxzQ29tbWVudHNQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgaWQ/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVEZXRhaWxzQ29tbWVudHMgPSBtZW1vKCh7XHJcbiAgY2xhc3NOYW1lLCBpZCxcclxufTogQXJ0aWNsZURldGFpbHNDb21tZW50c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZUNvbW1lbnRzLnNlbGVjdEFsbClcclxuICBjb25zdCBjb21tZW50c0lzTG9hZGluZyA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVDb21tZW50c0lzTG9hZGluZylcclxuXHJcbiAgY29uc3Qgb25TZW5kQ29tbWVudCA9IHVzZUNhbGxiYWNrKCh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZENvbW1lbnRGb3JBcnRpY2xlKHRleHQpKVxyXG4gIH0sIFtkaXNwYXRjaF0pXHJcblxyXG4gIHVzZUluaXRpYWxFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkKGlkKSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFZTdGFja1xyXG4gICAgICBtYXhcclxuICAgICAgZ2FwPVwiMTZcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJycsIHt9LCBbY2xhc3NOYW1lXSl9XHJcbiAgICA+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgc2l6ZT17VGV4dFNpemUuTH1cclxuICAgICAgICB0aXRsZT17dCgnY29tbWVudHMnKX1cclxuICAgICAgLz5cclxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8TG9hZGVyIC8+fT5cclxuICAgICAgICA8QWRkQ29tbWVudEZvcm0gb25TZW5kQ29tbWVudD17b25TZW5kQ29tbWVudH0gLz5cclxuICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPENvbW1lbnRMaXN0XHJcbiAgICAgICAgaXNMb2FkaW5nPXtjb21tZW50c0lzTG9hZGluZ31cclxuICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApXHJcbn0pXHJcbiIsImltcG9ydCB7IEFydGljbGVEZXRhaWxzIH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSdcclxuaW1wb3J0IHsgQXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QgfSBmcm9tICdmZWF0dXJlcy9hcnRpY2xlUmVjb21tZW5kYXRpb25zTGlzdCdcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcclxuaW1wb3J0IHsgRHluYW1pY01vZHVsZUxvYWRlciwgUmVkdWNlcnNMaXN0IH0gZnJvbSAnc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcidcclxuaW1wb3J0IHsgVlN0YWNrIH0gZnJvbSAnc2hhcmVkL3VpL1N0YWNrJ1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnd2lkZ2V0cy9QYWdlL1BhZ2UnXHJcbmltcG9ydCB7IEFydGljbGVEZXRhaWxzQ29tbWVudHMgfSBmcm9tICcuLi9BcnRpY2xlRGV0YWlsc0NvbW1lbnRzL0FydGljbGVEZXRhaWxzQ29tbWVudHMnXHJcbmltcG9ydCB7IGFydGljbGVEZXRhaWxzUGFnZVJlZHVjZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMnXHJcbmltcG9ydCB7IEFydGljbGVEZXRhaWxzUGFnZUhlYWRlciB9IGZyb20gJy4uL0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXInXHJcblxyXG5pbXBvcnQgY2xzIGZyb20gJy4vQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVEZXRhaWxzUGFnZVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgcmVkdWNlcnM6IFJlZHVjZXJzTGlzdCA9IHtcclxuICBhcnRpY2xlRGV0YWlsc1BhZ2U6IGFydGljbGVEZXRhaWxzUGFnZVJlZHVjZXIsXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGVEZXRhaWxzUGFnZSA9ICh7IGNsYXNzTmFtZSB9OiBBcnRpY2xlRGV0YWlsc1BhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2FydGljbGUtZGV0YWlscycpXHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPHsgaWQ6IHN0cmluZyB9PigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHluYW1pY01vZHVsZUxvYWRlciByZWR1Y2Vycz17cmVkdWNlcnN9IHJlbW92ZUFmdGVyVW5tb3VudD5cclxuICAgICAgPFBhZ2UgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5BcnRpY2xlRGV0YWlsc1BhZ2UsIHt9LCBbY2xhc3NOYW1lXSl9PlxyXG4gICAgICAgIDxWU3RhY2sgZ2FwPVwiMTZcIiBtYXg+XHJcbiAgICAgICAgICA8QXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyIC8+XHJcbiAgICAgICAgICA8QXJ0aWNsZURldGFpbHMgaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgPEFydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0IC8+XHJcbiAgICAgICAgICA8QXJ0aWNsZURldGFpbHNDb21tZW50cyBpZD17aWR9IC8+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgIDwvRHluYW1pY01vZHVsZUxvYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQXJ0aWNsZURldGFpbHNQYWdlKVxyXG4iLCJpbXBvcnQgeyBnZXRBcnRpY2xlRGV0YWlsc0RhdGEgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlRGV0YWlscydcclxuaW1wb3J0IHsgZ2V0VXNlckF1dGhEYXRhIH0gZnJvbSAnZW50aXRpZXMvVXNlcidcclxuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IFJvdXRlUGF0aCB9IGZyb20gJ3NoYXJlZC9jb25maWcvcm91dGVDb25maWcvcm91dGVDb25maWcnXHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2hhcmVkL3VpL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IEhTdGFjayB9IGZyb20gJ3NoYXJlZC91aS9TdGFjaydcclxuaW1wb3J0IHsgZ2V0Q2FuRWRpdEFydGljbGUgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWxlY3RvcnMvYXJ0aWNsZSdcclxuXHJcbmludGVyZmFjZSBBcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXJQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIgPSBtZW1vKCh7IGNsYXNzTmFtZSB9OiBBcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlU2VsZWN0b3IoZ2V0VXNlckF1dGhEYXRhKVxyXG4gIGNvbnN0IGFydGljbGUgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlRGV0YWlsc0RhdGEpXHJcbiAgY29uc3QgY2FuRWRpdCA9IHVzZVNlbGVjdG9yKGdldENhbkVkaXRBcnRpY2xlKVxyXG5cclxuICBjb25zdCBvbkJhY2tUb0xpc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZShSb3V0ZVBhdGguYXJ0aWNsZXMpXHJcbiAgfSwgW25hdmlnYXRlXSlcclxuXHJcbiAgY29uc3Qgb25FZGl0QXJ0aWNsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIG5hdmlnYXRlKGAke1JvdXRlUGF0aC5hcnRpY2xlc30vJHthcnRpY2xlPy5pZH0vZWRpdGApXHJcbiAgfSwgW2FydGljbGU/LmlkLCBuYXZpZ2F0ZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SFN0YWNrXHJcbiAgICAgIG1heFxyXG4gICAgICBqdXN0aWZ5PVwiYmV0d2VlblwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnJywge30sIFtjbGFzc05hbWVdKX1cclxuICAgID5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkJhY2tUb0xpc3R9PlxyXG4gICAgICAgIHt0KCdiYWNrLXRvLWFydGljbGVzJyl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICB7Y2FuRWRpdCAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25FZGl0QXJ0aWNsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dCgnZWRpdCcpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9IU3RhY2s+XHJcbiAgKVxyXG59KVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX0NvbW1lbnRDYXJkLS14SUhCeSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5zcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX2hlYWRlci0tZHNIXzMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX3VzZXJuYW1lLS1kdzgyVyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRDYXJkLUNvbW1lbnRDYXJkLW1vZHVsZV9fbG9hZGluZy0tVjBpWjEge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50Q2FyZC9Db21tZW50Q2FyZC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Db21tZW50Q2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VybmFtZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmcge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJDb21tZW50Q2FyZFwiOiBcInNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRDYXJkLUNvbW1lbnRDYXJkLW1vZHVsZV9fQ29tbWVudENhcmQtLXhJSEJ5XCIsXG5cdFwiaGVhZGVyXCI6IFwic3JjLWVudGl0aWVzLUNvbW1lbnQtdWktQ29tbWVudENhcmQtQ29tbWVudENhcmQtbW9kdWxlX19oZWFkZXItLWRzSF8zXCIsXG5cdFwidXNlcm5hbWVcIjogXCJzcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX3VzZXJuYW1lLS1kdzgyV1wiLFxuXHRcImxvYWRpbmdcIjogXCJzcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX2xvYWRpbmctLVYwaVoxXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlLUFydGljbGVEZXRhaWxzUGFnZS1tb2R1bGVfX2NvbW1lbnRUaXRsZS0tZm95RXMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlLUFydGljbGVEZXRhaWxzUGFnZS1tb2R1bGVfX3JlY29tbWVuZGF0aW9ucy0tTndRbFMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2UvQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFydGljbGVEZXRhaWxzUGFnZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY29tbWVuZGF0aW9ucyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb21tZW50VGl0bGVcIjogXCJzcmMtcGFnZXMtQXJ0aWNsZURldGFpbHNQYWdlLXVpLUFydGljbGVEZXRhaWxzUGFnZS1BcnRpY2xlRGV0YWlsc1BhZ2UtbW9kdWxlX19jb21tZW50VGl0bGUtLWZveUVzXCIsXG5cdFwicmVjb21tZW5kYXRpb25zXCI6IFwic3JjLXBhZ2VzLUFydGljbGVEZXRhaWxzUGFnZS11aS1BcnRpY2xlRGV0YWlsc1BhZ2UtQXJ0aWNsZURldGFpbHNQYWdlLW1vZHVsZV9fcmVjb21tZW5kYXRpb25zLS1Od1FsU1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Db21tZW50Q2FyZC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbW1lbnRDYXJkLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbW1lbnRDYXJkLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJDb21tZW50TGlzdCIsIkFkZENvbW1lbnRGb3JtQXN5bmMiLCJBZGRDb21tZW50Rm9ybSIsInJ0a0FwaSIsInJlY29tbWVuZGF0aW9uc0FwaSIsImluamVjdEVuZHBvaW50cyIsImVuZHBvaW50cyIsImJ1aWxkIiwiZ2V0QXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3QiLCJxdWVyeSIsImxpbWl0IiwidXJsIiwicGFyYW1zIiwiX2xpbWl0Iiwib3ZlcnJpZGVFeGlzdGluZyIsInVzZUFydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0IiwidXNlR2V0QXJ0aWNsZVJlY29tbWVuZGF0aW9uc0xpc3RRdWVyeSIsIkFydGljbGVSZWNvbW1lbmRhdGlvbnNMaXN0IiwiY3JlYXRlU2VsZWN0b3IiLCJnZXRBcnRpY2xlRGV0YWlsc0RhdGEiLCJnZXRVc2VyQXV0aERhdGEiLCJnZXRDYW5FZGl0QXJ0aWNsZSIsImFydGljbGUiLCJ1c2VyIiwiaWQiLCJnZXRBcnRpY2xlQ29tbWVudHNJc0xvYWRpbmciLCJzdGF0ZSIsImFydGljbGVEZXRhaWxzUGFnZSIsImNvbW1lbnRzIiwiaXNMb2FkaW5nIiwiZ2V0QXJ0aWNsZUNvbW1lbnRzRXJyb3IiLCJlcnJvciIsImNyZWF0ZUFzeW5jVGh1bmsiLCJmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQiLCJhZGRDb21tZW50Rm9yQXJ0aWNsZSIsInRleHQiLCJ0aHVua0FwaSIsImV4dHJhIiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJnZXRTdGF0ZSIsInVzZXJEYXRhIiwicmVzcG9uc2UiLCJhcGkiLCJwb3N0IiwiYXJ0aWNsZUlkIiwidXNlcklkIiwiZGF0YSIsIkVycm9yIiwiZSIsImZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucyIsInByb3BzIiwiZ2V0IiwiX2V4cGFuZCIsImNyZWF0ZUVudGl0eUFkYXB0ZXIiLCJjcmVhdGVTbGljZSIsImNvbW1lbnRzQWRhcHRlciIsInNlbGVjdElkIiwiY29tbWVudCIsImdldEFydGljbGVDb21tZW50cyIsImdldFNlbGVjdG9ycyIsImdldEluaXRpYWxTdGF0ZSIsImFydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJpZHMiLCJlbnRpdGllcyIsInVzZXJuYW1lIiwidW5kZWZpbmVkIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwic2V0QWxsIiwicGF5bG9hZCIsInJlamVjdGVkIiwicmVkdWNlciIsImFydGljbGVEZXRhaWxzQ29tbWVudHNSZWR1Y2VyIiwicmVjb21tZW5kYXRpb25zQWRhcHRlciIsImdldEFydGljbGVSZWNvbW1lbmRhdGlvbnMiLCJyZWNvbW1lbmRhdGlvbnMiLCJhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbW1lbmRhdGlvbnNTbGljZSIsImFydGljbGVEZXRhaWxzUGFnZVJlY29tbWVuZGF0aW9uc1JlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhcnRpY2xlRGV0YWlsc1BhZ2VSZWR1Y2VyIiwibWVtbyIsInVzZVRyYW5zbGF0aW9uIiwiUm91dGVQYXRoIiwiY2xhc3NOYW1lcyIsIkF2YXRhciIsIlZTdGFjayIsIlRleHQiLCJTa2VsZXRvbiIsIkFwcExpbmsiLCJjbHMiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiQ29tbWVudENhcmQiLCJfcyIsIl9jIiwiY2xhc3NOYW1lIiwidCIsIm1heCIsImdhcCIsImxvYWRpbmciLCJjaGlsZHJlbiIsImhlYWRlciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwidG8iLCJwcm9maWxlIiwiYXZhdGFyIiwic2l6ZSIsInNyYyIsInRpdGxlIiwiX2MyIiwiJFJlZnJlc2hSZWckIiwibGVuZ3RoIiwibWFwIiwibGF6eSIsIkFydGljbGVMaXN0IiwiVGV4dFNpemUiLCJhcnRpY2xlcyIsIkwiLCJ0YXJnZXQiLCJ2aXJ0dWFsaXplZCIsIlN1c3BlbnNlIiwidXNlQ2FsbGJhY2siLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlSW5pdGlhbEVmZmVjdCIsIkxvYWRlciIsIkFydGljbGVEZXRhaWxzQ29tbWVudHMiLCJfcmVmIiwic2VsZWN0QWxsIiwiY29tbWVudHNJc0xvYWRpbmciLCJvblNlbmRDb21tZW50IiwiZmFsbGJhY2siLCJBcnRpY2xlRGV0YWlscyIsInVzZVBhcmFtcyIsIkR5bmFtaWNNb2R1bGVMb2FkZXIiLCJQYWdlIiwiQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyIiwiQXJ0aWNsZURldGFpbHNQYWdlIiwicmVtb3ZlQWZ0ZXJVbm1vdW50IiwidXNlTmF2aWdhdGUiLCJCdXR0b24iLCJIU3RhY2siLCJuYXZpZ2F0ZSIsImNhbkVkaXQiLCJvbkJhY2tUb0xpc3QiLCJvbkVkaXRBcnRpY2xlIiwianVzdGlmeSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9