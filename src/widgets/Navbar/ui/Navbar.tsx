import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
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
  }, [dispatch])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cls.appName}
          title={t('blog-app')}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('create article')}
        </AppLink>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('sign out')}
        </Button>
        <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [])}>
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
    </header>
  )
})
