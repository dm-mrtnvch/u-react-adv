import { lazy } from 'react'

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    // DO NOT USE ON PRODUCTION
    // @ts-ignore
    resolve(import('./AboutPage'))
  }, 1000)
}))
