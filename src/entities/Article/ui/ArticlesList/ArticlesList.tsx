import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesList.module.scss'
import { Article, ArticleView } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticlesList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
  } = props
  const { t } = useTranslation()

  const renderArticle = (article: Article) => (
    <ArticlesListItem
      article={article}
      view={view}
      className={cls.card}
    />
  )

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  )
})
