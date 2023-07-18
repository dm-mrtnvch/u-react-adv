import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{id: string}>()
  const isEdit = Boolean(id)

  return (
    <div className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? `edit article ${id}` : 'new'}
    </div>
  )
})

export default ArticleEditPage
