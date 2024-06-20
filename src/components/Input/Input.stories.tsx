import { StoryFn, Meta } from '@storybook/react';
import { Label } from '../Label/Label';

import { Input } from './Input';

export default {
  title: 'UI/Input',
  component: Input,
} as Meta;

export const Default: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>
);
