import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import React from 'react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

const mockText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta eius fuga harum id repellendus, sint voluptates. Dolor, eius, temporibus.'

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: mockText,
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: mockText,
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
