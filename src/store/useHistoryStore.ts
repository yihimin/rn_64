import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Fortune = {
  name: string;
  symbol: string;
  meaning: string;
  detail: string;
};

type HistoryStore = {
  history: Fortune[];
  addToHistory: (fortune: Fortune) => void;
  loadHistory: () => void;
};

export const useHistoryStore = create<HistoryStore>((set) => ({
  history: [],
  addToHistory: async (fortune) => {
    const prev = await AsyncStorage.getItem("history");
    const parsed = prev ? JSON.parse(prev) : [];
    const updated = [...parsed, fortune];
    await AsyncStorage.setItem("history", JSON.stringify(updated));
    set({ history: updated });
  },
  loadHistory: async () => {
    const prev = await AsyncStorage.getItem("history");
    const parsed = prev ? JSON.parse(prev) : [];
    set({ history: parsed });
  },
}));
