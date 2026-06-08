export default function ArenaPage() {
  const topTraders = [
    { name: "CryptoKing", roi: "+124%" },
    { name: "AiBot_Alpha", roi: "+89%" },
    { name: "TrendMaster", roi: "+45%" },
  ];

  return (
    <div className="space-y-8 p-6 text-zinc-100">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          🏆 Trading Arena
        </h1>
        <p className="text-zinc-400 mt-2">
          Compete, Predict, Trade & Earn Rewards
        </p>
      </div>

      {/* Weekly Challenge */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-zinc-900/60 p-8 backdrop-blur-xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Weekly BTC Challenge
              </h2>
              <p className="text-zinc-300 max-w-xl">
                Predict Bitcoin's next 24-hour movement using AI-powered market
                analysis and compete with traders worldwide.
              </p>
            </div>

            <div className="bg-cyan-500/20 px-5 py-2 rounded-full text-cyan-400 font-bold border border-cyan-500/30">
              +100 XP
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(22,163,74,0.35)]">
              Predict BULL 📈
            </button>

            <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.35)]">
              Predict BEAR 📉
            </button>
          </div>
        </div>
      </div>

      {/* Main Premium Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="xl:col-span-2 space-y-6">
          {/* CFD Simulator */}
          <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900/80 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6">
              ⚡ CFD Leverage Simulator
            </h2>

            <div className="space-y-6">
              <div className="flex justify-between text-sm text-zinc-400">
                <span>1x</span>
                <span className="text-white font-bold">50x</span>
                <span>100x</span>
              </div>

              <input
                type="range"
                min="1"
                max="100"
                defaultValue="50"
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-2xl">
                  <p className="text-zinc-500 text-xs mb-1">
                    Margin Required
                  </p>
                  <p className="text-lg font-bold text-white">
                    $1,250.00
                  </p>
                </div>

                <div className="bg-zinc-800 p-4 rounded-2xl">
                  <p className="text-zinc-500 text-xs mb-1">
                    Liquidation Price
                  </p>
                  <p className="text-lg font-bold text-red-400">
                    $62,400
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Daily Quests */}
            <div className="rounded-3xl border border-zinc-700 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                🚀 Daily Quests
              </h3>

              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-zinc-300">
                    Execute 1 AI Trade
                  </span>
                  <span className="text-cyan-400 font-bold">
                    +50 XP
                  </span>
                </li>

                <li className="flex justify-between">
                  <span className="text-zinc-300">
                    Share Strategy on X
                  </span>
                  <span className="text-cyan-400 font-bold">
                    +20 XP
                  </span>
                </li>

                <li className="flex justify-between">
                  <span className="text-zinc-300">
                    Complete Prediction
                  </span>
                  <span className="text-cyan-400 font-bold">
                    +30 XP
                  </span>
                </li>
              </ul>
            </div>

            {/* Premium Challenges */}
            <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                💎 Premium Challenges
              </h3>

              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-zinc-300">
                    Win 3 Streaks
                  </span>
                  <span className="text-yellow-400 font-bold">
                    +200 XP
                  </span>
                </li>

                <li className="flex justify-between">
                  <span className="text-zinc-300">
                    Top 10 Leaderboard
                  </span>
                  <span className="text-yellow-400 font-bold">
                    +500 XP
                  </span>
                </li>

                <li className="flex justify-between">
                  <span className="text-zinc-300">
                    Weekly Champion
                  </span>
                  <span className="text-yellow-400 font-bold">
                    +1000 XP
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="rounded-3xl border border-zinc-700 bg-zinc-900/80 p-6 backdrop-blur-xl">
          <h2 className="text-xl font-bold mb-5">
            🚀 Top Traders
          </h2>

          <div className="space-y-4">
            {topTraders.map((trader, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-zinc-800/50 p-4 rounded-2xl"
              >
                <div>
                  <p className="font-semibold">
                    {trader.name}
                  </p>
                  <p className="text-sm text-green-400">
                    ROI {trader.roi}
                  </p>
                </div>

                <button className="text-xs bg-cyan-900/50 text-cyan-400 px-4 py-2 rounded-xl border border-cyan-500/30 hover:bg-cyan-800 transition">
                  Copy Trade
                </button>
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-4">
            <p className="text-zinc-400 text-sm">
              Your Rank
            </p>

            <h3 className="text-3xl font-black text-cyan-400">
              #27
            </h3>

            <p className="text-zinc-500 text-sm mt-1">
              Only 3 wins away from Top 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}