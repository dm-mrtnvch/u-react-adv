import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames('lds-spinner', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
