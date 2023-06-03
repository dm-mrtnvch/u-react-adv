import { lazy } from 'react'

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    // DO NOT USE ON PRODUCTION
    // @ts-ignore
    resolve(import('./ProfilePage'))
  }, 1000)
}))
