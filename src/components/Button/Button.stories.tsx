import { StoryFn, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'UI/Button',
  tags: ['autodocs'],

  component: Button,
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  variant: 'primary',
  children: 'Hello World',
};

export const FullWidth: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} className="w-full" />
  </div>
);

FullWidth.args = {
  variant: 'primary',
  children: 'Full Width Button',
};

export const Disabled: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full" />
  </div>
);

Disabled.args = {
  variant: 'primary',
  children: 'Hello World',
  disabled: true,
};

export const Danger: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full" />
  </div>
);

Danger.args = {
  variant: 'danger',
  children: 'Hello World',
};
