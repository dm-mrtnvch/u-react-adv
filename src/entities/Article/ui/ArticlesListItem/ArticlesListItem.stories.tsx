import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArticlesListItem } from './ArticlesListItem'

export default {
  title: 'shared/ArticlesListItem',
  component: ArticlesListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesListItem>

const Template: ComponentStory<typeof ArticlesListItem> = (args) => <ArticlesListItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
