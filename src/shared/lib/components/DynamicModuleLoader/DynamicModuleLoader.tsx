import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import {
  FC, ReactNode, useEffect,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useStore } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './DynamicModuleLoader.module.scss'

export type ReducersList = {
  [name in StateSchemaKey]? : Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
  const {
    children, reducers, removeAfterUnmount,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  )
}
