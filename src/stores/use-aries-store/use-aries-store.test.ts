import { useAriesStore } from './use-aries-store';

describe('useAriesStore', () => {
  beforeEach(() => {
    const initialStoreState = useAriesStore.getState();

    useAriesStore.setState(initialStoreState, true);
  });

  it('should register a user', async () => {
    const sectorStore = useAriesStore.getState();

    sectorStore.register('Wendel Freitas');

    expect(useAriesStore.getState().name).toBe('Wendel Freitas');
  });
});
