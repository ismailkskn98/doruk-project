import { create } from "zustand";

export const useIntroStore = create((set) => ({
  introComplete: false,
  setIntroComplete: () => {
    sessionStorage.setItem("introSeen", "true");
    set({ introComplete: true });
  },
}));
