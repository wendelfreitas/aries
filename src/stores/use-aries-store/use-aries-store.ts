import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UseAriesStoreState {
  name: string;
  register: (name: string) => void;
}

export const useAriesStore = create<UseAriesStoreState>()(
  devtools(
    persist(
      (set) => ({
        name: '',
        register: (name) =>
          set(() => ({
            name,
          })),
      }),
      {
        name: 'aries-challenge',
      }
    )
  )
);
