import React, {
  memo, Suspense, useCallback, useMemo,
} from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes, AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {/* <div className="page-wrapper"> */}
        {route.element}
        {/* </div> */}
      </Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    )
  }, [])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  )
}

export default memo(AppRouter)
