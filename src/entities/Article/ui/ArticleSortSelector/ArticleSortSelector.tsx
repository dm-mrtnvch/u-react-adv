import { ArticleSortField } from 'entities/Article/model/types/article'
import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { SortOrder } from 'shared/types'
import { Select, SelectOption } from 'shared/ui/Select/Select'
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

  const orderOptions = useMemo<SelectOption[]>(() => [
    { value: 'asc', content: t('ascending') },
    { value: 'desc', content: t('descending') },
  ], [t])

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
    { value: ArticleSortField.TITLE, content: t('title') },
    { value: ArticleSortField.VIEWS, content: t('views count') },
    { value: ArticleSortField.CREATED, content: t('created at') },
  ], [t])

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort])

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder])

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort by')}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={changeOrderHandler}
      />
    </div>
  )
})
