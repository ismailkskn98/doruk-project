import { create } from 'zustand';

export const useHeaderStore = create((set) => ({
  title: '',
  lightTitle: '',
  setTitle: (title) => set({ title }),
  setLightTitle: (lightTitle) => set({ lightTitle }),
}));
