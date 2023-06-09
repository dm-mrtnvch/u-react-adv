import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.POUND, content: Currency.POUND },
]

export const CurrencySelect = memo(
  (props: CurrencySelectProps) => {
    const {
      value, onChange, readonly, className,
    } = props

    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency)
    }, [onChange])

    return (
      <Select
        options={options}
        value={value}
        label={t('select-currency')}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  },
)
