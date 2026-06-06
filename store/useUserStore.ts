"use client";

import { create } from "zustand";

export interface Badge {
  id: string;
  name: string;
  icon: string;
}

interface UserStore {
  level: number;
  xp: number;
  carrots: number;
  badges: Badge[];

  addXP: (amount: number) => void;
  addCarrots: (amount: number) => void;
  addBadge: (badge: Badge) => void;
}

const XP_PER_LEVEL = 100;

export const useUserStore = create<UserStore>(
  (set, get) => ({
    level: 7,
    xp: 780,
    carrots: 150,

    badges: [
      {
        id: "first-chat",
        name: "First Chat",
        icon: "🥕",
      },
    ],

    addXP: (amount) => {
      const currentXP = get().xp;
      const currentLevel = get().level;

      const newXP = currentXP + amount;

      const newLevel =
        Math.floor(newXP / XP_PER_LEVEL) + 1;

      set({
        xp: newXP,
        level:
          newLevel > currentLevel
            ? newLevel
            : currentLevel,
      });
    },

    addCarrots: (amount) => {
      set((state) => ({
        carrots:
          state.carrots + amount,
      }));
    },

    addBadge: (badge) => {
      const exists = get().badges.find(
        (b) => b.id === badge.id
      );

      if (exists) return;

      set((state) => ({
        badges: [
          ...state.badges,
          badge,
        ],
      }));
    },
  })
);