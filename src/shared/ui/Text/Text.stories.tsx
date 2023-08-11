import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'TITLE TEXT',
  text: 'TEXT',
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  title: 'TITLE TEXT ONLY',
}

export const TextOnly = Template.bind({})
TextOnly.args = {
  text: 'TEXT ONLY',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'TITLE TEXT',
  text: 'TEXT',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TitleOnlyDark = Template.bind({})
TitleOnlyDark.args = {
  title: 'TITLE TEXT ONLY',
}
TitleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextOnlyDark = Template.bind({})
TextOnlyDark.args = {
  text: 'TEXT ONLY',
}
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
  title: 'TITLE TEXT',
  text: 'TEXT',
  theme: TextTheme.ERROR,
}

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'TITLE TEXT',
  text: 'TEXT',
  size: TextSize.L,
}

export const SizeM = Template.bind({})
SizeM.args = {
  title: 'TITLE TEXT',
  text: 'TEXT',
  size: TextSize.M,
}

export const SizeS = Template.bind({})
SizeS.args = {
  title: 'TITLE TEXT',
  text: 'TEXT',
  size: TextSize.S,
}
