import { create } from "zustand";

interface PurchaseState {
  purchased: boolean;
  purchase: () => void;
}

export const usePurchaseStore = create<PurchaseState>((set) => ({
  purchased: false,
  purchase: () => set({ purchased: true }),
}));
