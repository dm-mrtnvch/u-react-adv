import { lazy } from 'react'

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    // DO NOT USE ON PRODUCTION
    // @ts-ignore
    resolve(import('./ArticlesPage'))
  }, 1000)
}))
