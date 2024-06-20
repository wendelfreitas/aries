import { StoryFn, Meta } from '@storybook/react';

import { OnboardingForm } from './OnboardingForm';

export default {
  title: 'Forms/OnboardingForm',
  component: OnboardingForm,
} as Meta;

export const Default: StoryFn = () => {
  return (
    <div className="bg-gray-900">
      <OnboardingForm />
    </div>
  );
};
