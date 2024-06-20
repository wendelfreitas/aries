import { useAriesStore } from './stores/use-aries-store/use-aries-store';
import { Welcome } from './pages/Welcome/Welcome';
import { Operate } from './pages/Operate/Operate';

export const App = () => {
  const { name } = useAriesStore();

  return !name ? <Welcome /> : <Operate />;
};
