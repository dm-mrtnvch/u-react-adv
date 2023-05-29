import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProvider'
import { userActions } from 'entities/User'
import { Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from '../shared/lib/classNames/classNames'

const App = () => {
  const dispatch = useDispatch()
  const { theme } = useTheme()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
