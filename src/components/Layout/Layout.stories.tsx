import { StoryFn, Meta } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

export const Default: StoryFn = () => {
  return (
    <Layout>
      <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Hello Aries team!
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Looking forward to finding out if we will match and work together in the
        future. Thanks!
      </p>
    </Layout>
  );
};
