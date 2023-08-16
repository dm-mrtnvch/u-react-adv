import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { classNames } from '@/shared/lib/classNames/classNames'

interface ArticleRatingProps {
  className?: string
  articleId: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props
  const { t } = useTranslation()

  return (
    <RatingCard
      className={className}
      title={t('rate article')}
      feedbackTitle={t('please rate article. it will help to increase quality')}
      hasFeedback
    />
  )
})
