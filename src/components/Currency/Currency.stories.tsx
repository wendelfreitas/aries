import { StoryFn, Meta } from '@storybook/react';
import { Label } from '../Label/Label';

import { Currency } from './Currency';

export default {
  title: 'UI/Currency',
  component: Currency,
} as Meta;

export const Default: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="price">Price</Label>
    <Currency id="price" placeholder="Price" />
  </div>
);
