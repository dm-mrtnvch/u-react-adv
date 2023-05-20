import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Portal.module.scss'

interface PortalProps {
  children: ReactNode,
  element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    element = document.body,
  } = props

  const { t } = useTranslation()

  return createPortal(children, element)
}
