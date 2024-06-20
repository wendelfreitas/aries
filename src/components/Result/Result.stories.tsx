import { StoryFn, Meta } from '@storybook/react';

import { Result } from './Result';
import { useAriesStore } from '../../stores/use-aries-store/use-aries-store';
import { useEffect } from 'react';

export default {
  title: 'Components/Result',
  component: Result,
} as Meta;

export const Default: StoryFn = () => {
  const { register } = useAriesStore();

  useEffect(() => {
    register('Wendel Freitas');
  }, []);

  return <Result />;
};
