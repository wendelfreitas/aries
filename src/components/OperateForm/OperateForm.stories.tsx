import { StoryFn, Meta } from '@storybook/react';

import { OperateForm } from './OperateForm';

export default {
  title: 'Forms/OperateForm',
  component: OperateForm,
} as Meta;

export const Default: StoryFn = () => {
  return (
    <div className="bg-gray-900">
      <OperateForm />
    </div>
  );
};
