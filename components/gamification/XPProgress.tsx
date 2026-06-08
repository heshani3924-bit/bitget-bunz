"use client";

import { Award, Star } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";

export default function XPProgress() {
  const level = useUserStore(
    (state) => state.level
  );

  const xp = useUserStore(
    (state) => state.xp
  );

  const progress = xp % 100;

  return (
    <div className="mt-4 rounded-3xl border border-cyan-500/15 bg-cyan-500/5 p-4 backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award
            size={18}
            className="text-cyan-400"
          />

          <span className="text-sm font-medium text-white">
            Bunz Level 🥕
          </span>
        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1">
          <span className="text-xs font-semibold text-cyan-400">
            Lv.{level}
          </span>
        </div>
      </div>

      <div className="mb-2 flex justify-between text-xs">
        <span className="text-zinc-400">
          XP Progress
        </span>

        <span className="text-cyan-400">
          {progress}/100
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Star
          size={14}
          className="text-yellow-400"
        />

        <span className="text-xs text-zinc-400">
          Explorer Bunz
        </span>
      </div>
    </div>
  );
}