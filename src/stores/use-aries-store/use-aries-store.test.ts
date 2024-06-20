import { ENUMS } from '@dpen/utils';
import { useSectorStore } from './use-aries-store';

describe('useSectorStore', () => {
  beforeEach(() => {
    const initialStoreState = useSectorStore.getState();

    useSectorStore.setState(initialStoreState, true);
  });

  it('should set menu to edit', async () => {
    const sectorStore = useSectorStore.getState();

    sectorStore.select({
      id: '123',
      name: 'Mock Sector',
      status: ENUMS.STATUS.ENABLED,
      isDeletable: false,
      zonesCount: 1,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    });

    expect(useSectorStore.getState().sector?.name).toBe('Mock Sector');
  });

  it('should set menu to remove', async () => {
    const sectorStore = useSectorStore.getState();

    sectorStore.remove({
      id: '123',
      name: 'Mock Sector',
      status: ENUMS.STATUS.ENABLED,
      isDeletable: false,
      zonesCount: 1,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    });

    expect(useSectorStore.getState().exclude?.name).toBe('Mock Sector');
  });

  it('should set menu to edit', async () => {
    const sectorStore = useSectorStore.getState();

    sectorStore.remove({
      id: '123',
      name: 'Mock Sector',
      status: ENUMS.STATUS.ENABLED,
      isDeletable: false,
      zonesCount: 1,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    });

    sectorStore.clear();

    expect(useSectorStore.getState().exclude).toBeUndefined();
  });
});
