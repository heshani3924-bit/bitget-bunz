import { ShieldCheck } from "lucide-react";

export default function RiskCard() {
  const score = 68;

  return (
    <div className="rounded-3xl border border-cyan-500/15 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-500/10 p-3">
          <ShieldCheck
            className="text-cyan-400"
            size={22}
          />
        </div>

        <span className="text-xs text-zinc-500">
          Risk
        </span>
      </div>

      <h3 className="mb-4 text-sm text-zinc-400">
        Risk Score
      </h3>

      <div className="relative mx-auto h-24 w-24">
        <svg
          className="h-24 w-24 -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            className="stroke-zinc-800 fill-none"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            strokeDasharray={251}
            strokeDashoffset={
              251 - (251 * score) / 100
            }
            className="fill-none stroke-cyan-400"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">
            {score}
          </span>
        </div>
      </div>

      <p className="mt-4 text-center text-green-400">
        Moderate Risk
      </p>
    </div>
  );
}