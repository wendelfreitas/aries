import { Layout } from '../../components/Layout/Layout';
import { OnboardingForm } from '../../components/OnboardingForm/OnboardingForm';

export const Welcome = () => {
  return (
    <Layout>
      <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Welcome to our operation platform, Aries
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Welcome to our operations platform! Before you embark on your journey
        into the financial world, let’s take a moment to get acquainted.
      </p>
      <OnboardingForm />
    </Layout>
  );
};
