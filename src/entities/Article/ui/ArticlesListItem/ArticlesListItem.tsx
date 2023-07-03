import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import cls from './ArticlesListItem.module.scss'

interface ArticlesListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
  const { className, article, view } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className])}>
      {article.title}
    </div>
  )
})
