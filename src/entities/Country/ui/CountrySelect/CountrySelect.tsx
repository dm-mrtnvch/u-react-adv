import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
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
      <Select
        options={options}
        value={value}
        label={t('select-country')}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  },
)
