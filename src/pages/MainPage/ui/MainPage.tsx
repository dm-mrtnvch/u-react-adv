import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { StarRating } from '@/shared/ui/StarRating/StarRating'

const MainPage = () => {
  const [value, setValue] = useState('')

  const onChange = (e: any) => {
    setValue(e)
  }

  const { t } = useTranslation()

  return (
    <div>
      {t('main-page')}
      <RatingCard
        title="please rate"
        feedbackTitle="please leave feedback"
        hasFeedback
      />
    </div>
  )
}

export default MainPage
