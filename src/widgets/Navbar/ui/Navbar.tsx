/* eslint-disable */
import {getUserAuthData, userActions} from "entities/User";
import {LoginModal} from "features/AuthByUsername";
import {memo, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from "react-redux";
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

export const Navbar = memo(() => {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const authData = useSelector(getUserAuthData)

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthOpen(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [])

  if(authData){
    return (
      <div className={classNames(cls.Navbar, {}, [])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('sign out')}
        </Button>
        <LoginModal isOpen={isAuthOpen} onClose={onCloseModal}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('sign in')}
      </Button>
      {isAuthOpen && (
        <LoginModal
          isOpen={isAuthOpen}
          onClose={onCloseModal}
        />
      )}
    </div>
  )
})
