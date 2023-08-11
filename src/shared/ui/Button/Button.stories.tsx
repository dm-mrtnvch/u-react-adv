import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'TEXT',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'TEXT',
  theme: ButtonTheme.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'TEXT',
  theme: ButtonTheme.CLEAR_INVERTED,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'TEXT',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'TEXT',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const SquareButton = Template.bind({})
SquareButton.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
  square: true,
}

export const SquareButtonM = Template.bind({})
SquareButtonM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
}

export const SquareButtonL = Template.bind({})
SquareButtonL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareButtonXL = Template.bind({})
SquareButtonXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}

export const OutlineSizeM = Template.bind({})
OutlineSizeM.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
