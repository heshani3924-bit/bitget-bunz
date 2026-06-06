import { Wallet, TrendingUp } from "lucide-react";

export default function PortfolioCard() {
  const profit = 12.8;

  return (
    <div className="rounded-3xl border border-cyan-500/15 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-500/10 p-3">
          <Wallet className="text-cyan-400" size={22} />
        </div>

        <span className="text-xs text-zinc-500">
          Portfolio
        </span>
      </div>

      <h3 className="text-zinc-400 text-sm">
        Total Balance
      </h3>

      <p className="mt-2 text-3xl font-bold text-white">
        $24,580
      </p>

      <div className="mt-4 flex items-center gap-2">
        <TrendingUp
          size={16}
          className="text-green-400"
        />

        <span className="font-medium text-green-400">
          +{profit}%
        </span>

        <span className="text-sm text-zinc-500">
          this month
        </span>
      </div>
    </div>
  );
}