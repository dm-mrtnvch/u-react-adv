import { lazy } from 'react'

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // FOR TEST - REMOVE
  setTimeout(() => resolve(import('./AddCommentForm')), 1500)
}))
