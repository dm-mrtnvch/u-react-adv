import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticlesPage from './ArticlesPage'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
