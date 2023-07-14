import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import {
  getArticlesPageLimit, getArticlesPageNum,
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort,
} from '../../selectors/articlesPageSelectors'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
  >(
    'articlesPage/fetchArticlesList',
    async (props, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi

      const limit = getArticlesPageLimit(getState())
      const sort = getArticlesPageSort(getState())
      const order = getArticlesPageOrder(getState())
      const search = getArticlesPageSearch(getState())
      const page = getArticlesPageNum(getState())

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
            _sort: sort,
            _order: order,
            q: search,
          },
        })

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    },
  )
