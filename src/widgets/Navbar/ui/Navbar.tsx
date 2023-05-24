/* eslint-disable */
import {LoginModal} from "features/AuthByUsername";
import {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

export const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthOpen(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('sign in')}
      </Button>
      <LoginModal isOpen={isAuthOpen} onClose={onCloseModal}/>
    </div>
  )
}
