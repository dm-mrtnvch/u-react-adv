import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    // DO NOT USE ON PRODUCTION
    // @ts-ignore
    resolve(import('./ArticleEditPage'))
  }, 400)
}))
