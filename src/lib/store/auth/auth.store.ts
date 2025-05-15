import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import type { StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(storeApi, {
      name: "auth-storage",
    }),
  ),
);
