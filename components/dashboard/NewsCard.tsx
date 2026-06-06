import {
  Newspaper,
  ArrowUpRight,
} from "lucide-react";

export default function NewsCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/15 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-500/10 p-3">
          <Newspaper
            className="text-cyan-400"
            size={22}
          />
        </div>

        <span className="text-xs text-zinc-500">
          News Feed
        </span>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl bg-zinc-900/70 p-3">
          <div className="flex items-start justify-between">
            <p className="text-sm text-zinc-300">
              Bitcoin ETF inflows hit new highs.
            </p>

            <ArrowUpRight
              size={16}
              className="text-cyan-400"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-zinc-900/70 p-3">
          <div className="flex items-start justify-between">
            <p className="text-sm text-zinc-300">
              Ethereum staking demand rises.
            </p>

            <ArrowUpRight
              size={16}
              className="text-cyan-400"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-cyan-400">
        +12 news analyzed today
      </div>
    </div>
  );
}