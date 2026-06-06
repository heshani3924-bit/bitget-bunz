import {
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

export default function SentimentCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/15 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-500/10 p-3">
          <BrainCircuit
            className="text-cyan-400"
            size={22}
          />
        </div>

        <span className="text-xs text-zinc-500">
          AI Sentiment
        </span>
      </div>

      <h3 className="text-sm text-zinc-400">
        Market Mood
      </h3>

      <p className="mt-2 text-2xl font-bold text-white">
        Bullish
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full w-[78%] rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <TrendingUp
          size={16}
          className="text-green-400"
        />

        <span className="text-green-400">
          Confidence 78%
        </span>
      </div>
    </div>
  );
}