import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { getUserAuthData } from 'entities/User'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { getCanEditArticle } from '../../model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const userData = useSelector(getUserAuthData)
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`)
  }, [article?.id, navigate])

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToList}>
        {t('back-to-articles')}
      </Button>
      {canEdit && (
        <Button
          className={cls.editBtn}
          onClick={onEditArticle}
        >
          {t('edit')}
        </Button>
      )}
    </div>
  )
})
