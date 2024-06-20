import { StoryFn, Meta } from '@storybook/react';

import { Switch } from './Switch';

export default {
  title: 'UI/Switch',
  component: Switch,
} as Meta;

export const Default: StoryFn = () => <Switch />;
