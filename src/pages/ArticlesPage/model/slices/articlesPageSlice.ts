import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleView, ArticleType } from 'entities/Article'
import type { Article } from 'entities/Article'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/articlesPageSchema'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
)

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    limit: 9,
    order: 'asc',
    search: '',
    sort: ArticleSortField.CREATED,
    hasMore: true,
    _inited: false,
    type: ArticleType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
      state._inited = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false
        state.hasMore = action.payload.length >= state.limit

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice
