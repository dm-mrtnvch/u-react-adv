import { BugButton } from 'app/providers/ErrorBoundary'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const [value, setValue] = useState('')

  const onChange = (e: any) => {
    setValue(e)
  }

  const { t } = useTranslation()

  return (
    <div>
      <BugButton />
      {t('blabla')}
    </div>
  )
}

export default MainPage
