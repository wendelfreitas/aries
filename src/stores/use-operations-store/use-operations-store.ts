import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { OPERATION_TYPE } from '../../utils/enums';

type Operation = {
  type: OPERATION_TYPE.CALL | OPERATION_TYPE.PUT;
  strike: number;
  premium: number;
  quantity: number;
  time: Date;
};

interface UseAriesStoreState {
  operations: Operation[];
  operate: (operations: Operation[]) => void;
}

export const useOperationsStore = create<UseAriesStoreState>()(
  devtools((set) => ({
    operations: [],
    operate: (operations) =>
      set(() => ({
        operations,
      })),
  }))
);
