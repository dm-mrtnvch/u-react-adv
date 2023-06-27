import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{id: string}>()

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('article-page-not-found')}
      </div>
    )
  }

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.commentTitle} title={t('comments')} />
      <CommentList
        comments={[]}
        isLoading
      />
    </div>
  )
}

export default memo(ArticleDetailsPage)
