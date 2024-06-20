import { Layout } from '../../components/Layout/Layout';
import { useAriesStore } from '../../stores/use-aries-store/use-aries-store';
import { OperateForm } from '../../components/forms/OperateForm';

export const Operate = () => {
  const { name } = useAriesStore();

  return (
    <Layout>
      <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Hello, {name}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        This is our operations page! This section is dedicated to managing your
        activities. You need to have a minimum of 1 and a maximum of 4
        operations at same time.
      </p>

      <OperateForm />
    </Layout>
  );
};
