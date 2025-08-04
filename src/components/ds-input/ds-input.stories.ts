import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Design System/Input',
  component: 'ds-input',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'text' },
  },
  parameters: {
    actions: {
      handles: ['input', 'blur', 'focus'],
    },
  },
} satisfies Meta;

type Story = StoryObj;

const Template = (args: any) => html`
  <ds-input
    label=${args.label}
    placeholder=${args.placeholder}
    type=${args.type}
    value=${args.value}
    name=${args.name}
    ?disabled=${args.disabled}
    ?required=${args.required}
    error=${args.error}
  ></ds-input>
`;

export const Default: Story = {
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    name: 'email',
    value: '',
    required: false,
    disabled: false,
    error: '',
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    name: 'email',
    value: 'invalid-email',
    required: true,
    disabled: false,
    error: 'Please enter a valid email.',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    name: 'email',
    value: '',
    disabled: true,
    required: false,
    error: '',
  },
};
