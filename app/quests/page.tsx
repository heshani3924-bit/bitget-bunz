"use client";

import { useState } from "react";


const initialQuests = [
  { id: 1, text: "Ask Bunz 3 questions", completed: false },
  { id: 2, text: "Analyze BTC market", completed: false },
  { id: 3, text: "Read sentiment report", completed: false },
];

export default function QuestsPage() {
  const [quests, setQuests] = useState(initialQuests);

  
  const toggleQuest = (id: number) => {
    setQuests(quests.map(q => 
      q.id === id ? { ...q, completed: !q.completed } : q
    ));
  };

  return (
    <div className="p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">🎯 Daily Quests</h1>

      <div className="space-y-4">
        {quests.map((quest) => (
          <div
            key={quest.id}
            onClick={() => toggleQuest(quest.id)}
            className={`cursor-pointer rounded-2xl border p-4 transition ${
              quest.completed 
                ? "border-green-500/50 bg-green-900/20 text-green-400" 
                : "border-cyan-500/20 bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{quest.completed ? "✅" : "⭕"}</span>
              <span className={quest.completed ? "line-through" : ""}>
                {quest.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-zinc-900 p-4 text-center text-zinc-400">
        Complete all quests to earn 50 XP! 🐰✨
      </div>
    </div>
  );
}