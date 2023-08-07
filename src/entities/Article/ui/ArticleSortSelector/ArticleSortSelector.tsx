import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { SortOrder } from 'shared/types'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/consts/consts'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSorting: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    sort, order, className, onChangeSort, onChangeOrder,
  } = props

  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    { value: 'asc', content: t('ascending') },
    { value: 'desc', content: t('descending') },
  ], [t])

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    { value: ArticleSortField.TITLE, content: t('title') },
    { value: ArticleSortField.VIEWS, content: t('views count') },
    { value: ArticleSortField.CREATED, content: t('created at') },
  ], [t])

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  )
})
