import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import {
  fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations'
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => {
    return state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
  },
)

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  reducer: articleDetailsPageRecommendationsReducer,
} = articleDetailsPageRecommendationsSlice
