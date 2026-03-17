import { create } from 'zustand';

export const useIntroStore = create((set) => ({
  introComplete: false,
  setIntroComplete: () => set({ introComplete: true }),
}));
