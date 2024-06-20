import { StoryFn, Meta } from '@storybook/react';

import { Label } from './Label';

export default {
  title: 'UI/Label',
  component: Label,
} as Meta;

export const Default: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
  </div>
);
