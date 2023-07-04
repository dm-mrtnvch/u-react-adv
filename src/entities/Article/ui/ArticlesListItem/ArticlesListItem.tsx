import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
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
  const [isHover, bindHover] = useHover()

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        {article.title}
      </div>
    )
  }

  return (
    <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card} >
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.img} alt={article.title} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(', ')} className={cls.types} />
          <Text text={String(article.views)} className={cls.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  )
})
