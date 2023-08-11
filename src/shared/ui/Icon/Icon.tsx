import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
  inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
  const { Svg, className, inverted } = props

  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
  )
})
