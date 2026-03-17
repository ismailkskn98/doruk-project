import { create } from 'zustand';

export const useSidebarStore = create((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));
