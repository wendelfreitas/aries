import { StoryFn, Meta } from '@storybook/react';

import { OperationsTable } from './OperationsTable';

export default {
  title: 'Components/OperationsTable',
  component: OperationsTable,
} as Meta;

export const Default: StoryFn = () => {
  return (
    <div className="bg-gray-900">
      <OperationsTable />
    </div>
  );
};
