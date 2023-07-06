import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'

export default {
  title: 'shared/ArticlesListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
