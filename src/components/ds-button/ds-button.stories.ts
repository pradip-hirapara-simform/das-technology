import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
export default {
  title: 'Design System/Button',
  component: 'ds-button',
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'text'],
    },
  },
} satisfies Meta;

type Story = StoryObj;

const Template = ({ buttonText, variant }: any) => html`
  <ds-button button-text="${buttonText}" variant="${variant}"></ds-button>
`;

export const Solid: Story = {
  render: Template,
  args: {
    buttonText: 'Solid Button',
    variant: 'solid',
  },
};

export const Outline: Story = {
  render: Template,
  args: {
    buttonText: 'Outline Button',
    variant: 'outline',
  },
};

export const Text: Story = {
  render: Template,
  args: {
    buttonText: 'Text Button',
    variant: 'text',
  },
};
