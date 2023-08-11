import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails'
import { Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
  >(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
      const {
        extra, dispatch, rejectWithValue, getState,
      } = thunkApi

      const userData = getUserAuthData(getState())
      const article = getArticleDetailsData(getState())

      if (!userData || !text || !article) {
        return rejectWithValue('no data')
      }

      try {
        const response = await extra.api.post<Comment>('/comments', {
          text,
          articleId: article.id,
          userId: userData.id,
        })

        if (!response.data) {
          throw new Error()
        }

        dispatch(fetchCommentsByArticleId(article.id))

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    },
  )
