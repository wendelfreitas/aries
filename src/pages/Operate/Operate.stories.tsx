import { StoryFn, Meta } from '@storybook/react';

import { Operate } from './Operate';
import { useAriesStore } from '../../stores/use-aries-store/use-aries-store';
import { useEffect } from 'react';

export default {
  title: 'Pages/Operate',
  component: Operate,
} as Meta;

export const Default: StoryFn = () => {
  const { register } = useAriesStore();

  useEffect(() => {
    register('Wendel Freitas');
  }, []);

  return <Operate />;
};
