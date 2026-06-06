export default function ArenaPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        🏆 Trading Arena
      </h1>

      <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6">
        <h2 className="mb-2 text-xl font-bold">
          Weekly Challenge
        </h2>

        <p className="text-zinc-400">
          Predict BTC direction using
          Bunz analysis.
        </p>

        <div className="mt-4">
          Reward: +100 XP
        </div>
      </div>
    </div>
  );
}