import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLinkTheme, AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

export const Navbar = () => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <div className={cls.links} />
    </div>
  )
}
