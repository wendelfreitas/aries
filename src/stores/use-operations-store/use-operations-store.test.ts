import { OPERATION_TYPE } from '../../utils/enums';
import { useOperationsStore } from './use-operations-store';

describe('useOperationsStore', () => {
  beforeEach(() => {
    const initialStoreState = useOperationsStore.getState();

    useOperationsStore.setState(initialStoreState, true);
  });

  it('should register a operation', async () => {
    const sectorStore = useOperationsStore.getState();

    sectorStore.operate([
      {
        type: OPERATION_TYPE.CALL,
        premium: 1,
        quantity: 1,
        strike: 1,
        time: new Date(),
      },
    ]);

    expect(useOperationsStore.getState().operations).toHaveLength(1);
  });
});
