import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    // DO NOT USE ON PRODUCTION
    // @ts-ignore
    resolve(import('./ArticleDetailsPage'))
  }, 400)
}))
