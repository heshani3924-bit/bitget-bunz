"use client";

import { Bell, TrendingUp } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export default function Header() {
const userName = useAuthStore((state) => state.username);
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-6">
        {/* Left Side */}

        <div>
          <h1 className="text-xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-sm text-zinc-400">
            Your Bunny is monitoring the market.
          </p>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          {/* Market Widget */}

          <div className="hidden rounded-2xl border border-cyan-500/10 bg-white/5 px-5 py-3 backdrop-blur-xl md:flex">
            <div className="mr-4 flex items-center gap-2">
              <TrendingUp
                size={18}
                className="text-green-400"
              />

              <span className="text-sm text-zinc-400">
                BTC
              </span>
            </div>

            <div>
              <p className="font-semibold text-white">
                $104,250
              </p>

              <p className="text-xs text-green-400">
                +2.84%
              </p>
            </div>
          </div>

          {/* Notification */}

          <button className="relative rounded-2xl border border-cyan-500/10 bg-white/5 p-3 transition hover:border-cyan-400/30">
            <Bell
              size={20}
              className="text-zinc-300"
            />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
          </button>

          {/* User Profile */}

          <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/20 text-lg shadow-[0_0_20px_rgba(6,182,212,0.35)]">
              🐰
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-semibold text-white">
                {userName || "Guest"}
              </p>

              <p className="text-xs text-cyan-400">
                Level 7 Explorer
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}