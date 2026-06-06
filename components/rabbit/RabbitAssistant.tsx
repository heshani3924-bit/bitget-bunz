"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import Image from "next/image";

import { useUserStore } from "@/store/useUserStore";
import AchievementToast from "@/components/gamification/AchievementToast";
import XPGainPopup from "@/components/gamification/XPGainPopup";

interface Message {
  id: number;
  role: "user" | "rabbit";
  content: string;
}

export default function RabbitAssistant() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);


  const [showAchievement, setShowAchievement] =
    useState(false);

  const [showXP, setShowXP] =
    useState(false);

  const addXP = useUserStore((state) => state.addXP);
  const addBadge = useUserStore((state) => state.addBadge);

  const isMarketBullish = true;

  const rabbitMood = isMarketBullish ? "" : "🐰😟";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "rabbit",
      content:
        "Hello Heshi 👋 I'm Bunz. Ask me about BTC, ETH, risk management or market sentiment.",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    // XP System
    addXP(5);

    // Badge unlock (first chat)
    addBadge({
      id: "first-chat",
      name: "First Chat",
      icon: "🥕",
    });

    // XP popup
    setShowXP(true);
    setTimeout(() => {
      setShowXP(false);
    }, 2000);

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const rabbitMessage: Message = {
        id: Date.now() + 1,
        role: "rabbit",
        content:
          "🐰 Market analysis complete. BTC momentum remains positive.",
      };

      setMessages((prev) => [...prev, rabbitMessage]);
      setIsTyping(false);

      // Achievement Toast
      setShowAchievement(true);

      setTimeout(() => {
        setShowAchievement(false);
      }, 3500);
    }, 1800);
  };

const handleAnalyzeMarket = async () => {
  try {
    setLoading(true);

    const res = await fetch("/api/analyze");
    const data = await res.json();

    const message: Message = {
      id: Date.now(),
      role: "rabbit",
      content: `📊 Market Analysis:

BTC: $${data.market.btc}
Trend: ${data.signal.trend}
Confidence: ${data.signal.confidence}%
Advice: ${data.signal.advice}`,
    };

    setMessages((prev) => [...prev, message]);

    addXP(10);

    setShowXP(true);

    setTimeout(() => {
      setShowXP(false);
    }, 2000);
  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "rabbit",
        content: "❌ Failed to analyze market.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* Achievement Toast */}
      <AchievementToast
        show={showAchievement}
        title="🥕 First Chat"
        description="You started a conversation with Bunz."
      />

      {/* XP Popup */}
      <XPGainPopup show={showXP} amount={5} />

      <div className="rounded-3xl border border-cyan-500/15 bg-white/5 backdrop-blur-xl">
        {/* Header */}
        <div className="border-b border-cyan-500/10 p-5">
          <div className="flex items-center gap-3">
            <Sparkles
              size={18}
              className="text-cyan-400"
            />

            <h2 className="font-semibold text-white">
              Assistant Bunz
            </h2>
          </div>
        </div>

        {/* Rabbit Avatar */}
        <div className="flex flex-col items-center justify-center p-6">
          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: isMarketBullish
                ? [1, 1.05, 1]
                : [1, 0.97, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-zinc-900 shadow-[0_0_40px_rgba(6,182,212,0.25)]"
          >
            <Image
              src="/rabbit.png"
              alt="Bitget Bunz"
              width={120}
              height={120}
              className="mt-4 scale-125 object-cover"
            />
          </motion.div>

          {/* Rabbit Mood */}
          <div className="mt-3 text-3xl">
            {rabbitMood}
          </div>

          {/* Market Status */}
          <div className="mt-4 flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${
                isMarketBullish
                  ? "bg-green-400"
                  : "bg-red-400"
              }`}
            />

            <span
              className={`text-sm ${
                isMarketBullish
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {isMarketBullish
                ? "Bullish Market"
                : "Bearish Market"}
            </span>
          </div>

          {/* Online Status */}
          <div className="mt-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm text-green-400">
              Online
            </span>
          </div>
        </div>

        {/* Chat History */}
        <div className="h-[280px] space-y-4 overflow-y-auto px-5">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  message.role === "user"
                    ? "bg-cyan-500 text-black"
                    : "border border-cyan-500/10 bg-zinc-900 text-zinc-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-cyan-500/10 bg-zinc-900 px-4 py-3">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-cyan-400"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-cyan-400"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-cyan-400"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
<div className="border-t border-cyan-500/10 p-4">
  <div className="flex gap-3">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSend();
        }
      }}
      placeholder="Ask Bunz anything..."
      className="flex-1 rounded-2xl border border-cyan-500/10 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
    />

    <button
      onClick={handleSend}
      className="rounded-2xl bg-cyan-400 px-4 transition hover:scale-105"
    >
      <Send size={18} className="text-black" />
    </button>
  </div>

  <button
    onClick={handleAnalyzeMarket}
    disabled={loading}
    className="mt-4 w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-50"
  >
    {loading ? "Analyzing..." : "Analyze Market"}
  </button>
</div>
      </div>
    </>
  );
}