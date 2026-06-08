export default function QuestsPage() {
  return (
<div className="w-full min-h-screen px-8 xl:px-12 2xl:px-20 text-zinc-100 space-y-10">
        {/* 1. Header & Status (Clean Bitget Style) */}
      <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900/80 p-8">
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          🎯 Quests Hub
        </h1>
        <p className="mt-2 text-zinc-400">Complete missions and earn rewards</p>

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-zinc-950 p-4 border border-zinc-800">
            <p className="text-zinc-500 text-sm">Level</p>
            <h2 className="text-3xl font-bold">12</h2>
          </div>
          <div className="rounded-2xl bg-zinc-950 p-4 border border-zinc-800">
            <p className="text-zinc-500 text-sm">Arena XP</p>
            <h2 className="text-3xl font-bold">6840</h2>
          </div>
          <div className="rounded-2xl bg-zinc-950 p-4 border border-zinc-800">
            <p className="text-zinc-500 text-sm">Daily Streak</p>
            <h2 className="text-3xl font-bold text-cyan-400">🔥 7</h2>
          </div>
        </div>

        <div className="mt-6 h-3 rounded-full bg-zinc-800 overflow-hidden">
          <div className="h-3 w-[68%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>
      </div>

      {/* 2. Recommended For You */}
      <h2 className="text-2xl font-bold">🤖 Recommended For You</h2>
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
          { title: "Analyze BTC", xp: "+50 XP", color: "cyan" },
          { title: "Copy Pro Trader", xp: "+75 XP", color: "cyan" },
          { title: "AI Trade", xp: "+100 XP", color: "cyan" }
        ].map((item, i) => (
          <div key={i} className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-5 hover:border-cyan-500/50 transition">
            <h3 className="font-bold">{item.title}</h3>
            <div className="mt-4 h-2 rounded-full bg-zinc-800"><div className="h-2 w-[60%] rounded-full bg-cyan-500"></div></div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-cyan-400 font-bold">{item.xp}</span>
              <button className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black hover:bg-cyan-400">Start</button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Quest Categories */}
      <h2 className="text-2xl font-bold">🚀 Quest Categories</h2>
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
          { title: "Daily Quests", desc: "Quick daily missions.", status: "3 / 5" },
          { title: "Weekly Challenges", desc: "Consistent long-term goals.", status: "2 / 5" },
          { title: "Newbie Path", desc: "Learn trading basics.", status: "8 / 10" },
          { title: "Elite Missions", desc: "Advanced expert tasks.", status: "1 / 6" }
        ].map((cat, i) => (
          <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="text-xl font-bold text-cyan-400">{cat.title}</h3>
            <p className="mt-1 text-zinc-400 text-sm">{cat.desc}</p>
            <div className="mt-4 h-2 rounded-full bg-zinc-800"><div className="h-2 w-[50%] rounded-full bg-cyan-600"></div></div>
            <p className="mt-2 text-sm text-zinc-500">{cat.status} Completed</p>
          </div>
        ))}
      </div>

      {/* 4. Rewards Vault */}
      <h2 className="text-2xl font-bold">🎁 Rewards Vault</h2>
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {["VIP Pass", "Demo Funds", "Tourney Ticket", "Risk Badge"].map((item, i) => (
          <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center">
            <div className="text-3xl">💎</div>
            <h3 className="mt-3 font-bold text-sm">{item}</h3>
            <button className="mt-4 w-full rounded-xl bg-zinc-800 py-2 text-sm hover:bg-cyan-600 hover:text-black transition">Redeem</button>
          </div>
        ))}
      </div>

      {/* 5. Weekly Leaderboard */}
<div className="grid gap-6 xl:grid-cols-4">
<div className="xl:col-span-3 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-xl font-bold">🏆 Weekly Quest Leaders</h2>
          <div className="space-y-3">
            {["CryptoKing", "AiBot Alpha", "TrendMaster", "You"].map((name, i) => (
              <div key={i} className={`flex justify-between rounded-xl p-4 ${i === 3 ? "border border-cyan-500/30 bg-cyan-900/10" : "bg-zinc-800"}`}>
                <span>{i + 1}. {name}</span>
                <span className="text-cyan-400 font-bold">12,450 XP</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-bold">Your Rank</h3>
          <h1 className="text-6xl font-black text-cyan-400 mt-6">#27</h1>
          <p className="text-zinc-500 mt-2">Only 3 wins away from Top 10</p>
          <div className="mt-6 h-3 rounded-full bg-zinc-800"><div className="h-3 w-[75%] rounded-full bg-cyan-500"></div></div>
        </div>
      </div>
    </div>
  );
}