import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'some label',
  options: [
    { value: '1', content: 'first option' },
    { value: '2', content: 'second option' },
    { value: '3', content: 'third option' },
  ],
}
