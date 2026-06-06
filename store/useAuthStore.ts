"use client";

import { create } from "zustand";

interface AuthState {
  username: string;
  isLoggedIn: boolean;

  login: (name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(
  (set) => ({
    username: "",
    isLoggedIn: false,

    login: (name) =>
      set({
        username: name,
        isLoggedIn: true,
      }),

    logout: () =>
      set({
        username: "",
        isLoggedIn: false,
      }),
  })
);