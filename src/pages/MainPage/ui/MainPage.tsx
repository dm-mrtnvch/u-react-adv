import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'

const MainPage = () => {
  const [value, setValue] = useState('')

  const onChange = (e: any) => {
    setValue(e)
  }

  const { t } = useTranslation()

  return (
    <div>
      {t('main-page')}
    </div>
  )
}

export default MainPage
