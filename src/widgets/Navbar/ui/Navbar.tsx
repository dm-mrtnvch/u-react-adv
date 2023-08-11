import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationButton } from '@/features/notificationButton'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { HStack } from '@/shared/ui/Stack'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import cls from './Navbar.module.scss'

export const Navbar = memo(() => {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const authData = useSelector(getUserAuthData)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthOpen(true)
  }, [])

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
        <HStack
          gap="16"
          className={cls.actions}
        >
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
