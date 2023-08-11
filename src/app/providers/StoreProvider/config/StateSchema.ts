import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { Dispatch, CombinedState } from 'redux'
import { AxiosInstance, AxiosStatic } from 'axios'
import { NavigateOptions } from 'react-router/dist/lib/context'
import { rtkApi } from '@/shared/api/rtkApi'
import { ArticleDetailsSchema } from '@/entities/Article'
import { AddCommentFormSchema } from '@/features/addCommentForm'
import { ProfileSchema } from '@/features/editableProfileCard'
import { UISchema } from '@/features/UI'
import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from '@/pages/ArticleDetailsPage'
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage/model/types'
import { ArticlesPageSchema } from '@/pages/ArticlesPage'
import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUsername/model/types/loginSchema'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema,
  ui: UISchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage? :ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce:(state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add:(key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  dispatch?: Dispatch
  state: StateSchema
}
