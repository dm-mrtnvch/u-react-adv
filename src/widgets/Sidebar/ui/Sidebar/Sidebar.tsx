import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation('toggle')

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const test = 'test22222'
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {/* {t('toggle')} */}
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
