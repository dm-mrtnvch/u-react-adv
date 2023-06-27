import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsCommentsSchema } from 'pages/AritcleDetailsPage'
import { Dispatch, CombinedState } from 'redux'
import { To } from '@remix-run/router'
import { AxiosInstance, AxiosStatic } from 'axios'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema'
import { NavigateOptions } from 'react-router/dist/lib/context'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema,

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  ArticleDetailsComments?: ArticleDetailsCommentsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce:(state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add:(key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  dispatch?: Dispatch
  state: StateSchema
}
