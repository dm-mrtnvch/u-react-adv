/* eslint-disable */
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

export const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthOpen((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={() => setIsAuthOpen(true)}
      >
        {t('sign in')}
      </Button>
      <Modal
        isOpen={isAuthOpen}
        onClose={onToggleModal}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta eius fuga harum id repellendus, sint voluptates. Dolor, eius, temporibus.
      </Modal>
    </div>
  )
}
