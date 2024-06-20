import { StoryFn, Meta } from '@storybook/react';

import { Welcome } from './Welcome';

export default {
  title: 'Pages/Welcome',
  component: Welcome,
} as Meta;

export const Default: StoryFn = () => <Welcome />;
