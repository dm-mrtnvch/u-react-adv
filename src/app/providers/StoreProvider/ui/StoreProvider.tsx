import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: StateSchema
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState)

  return (
    <Provider store={store} >
      {children}
    </Provider>

  )
}
