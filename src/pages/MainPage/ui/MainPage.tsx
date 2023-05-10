import { BugButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <BugButton />
      {t('blabla')}
    </div>
  )
}

export default MainPage
