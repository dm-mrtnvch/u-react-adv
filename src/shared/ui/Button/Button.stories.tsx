import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import React from 'react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

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

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
