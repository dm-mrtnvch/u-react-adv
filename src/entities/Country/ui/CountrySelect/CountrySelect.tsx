import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.USA, content: Country.USA },
  { value: Country.EUROPE, content: Country.EUROPE },
]

export const CountrySelect = memo(
  (props: CountrySelectProps) => {
    const {
      value, onChange, readonly, className,
    } = props

    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Country)
    }, [onChange])

    return (
      <ListBox
        readonly={readonly}
        className={className}
        items={options}
        value={value}
        onChange={onChangeHandler}
        defaultValue={t('select-country')}
        label={t('select-country')}
        direction="top right"
      />
    )
  },
)
