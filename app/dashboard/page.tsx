"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";

import { useAuthStore } from "@/store/useAuthStore";

import PortfolioCard from "@/components/dashboard/PortfolioCard";
import RiskCard from "@/components/dashboard/RiskCard";
import NewsCard from "@/components/dashboard/NewsCard";
import SentimentCard from "@/components/dashboard/SentimentCard";
import RabbitAssistant from "@/components/rabbit/RabbitAssistant";

/* Animation Variants */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function DashboardPage() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Welcome */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold">
          🥕 Bitget Bunz
        </h1>

        <p className="mt-2 text-zinc-400">
          Your intelligent trading companion.
        </p>
      </motion.div>

      {/* Top Stats */}
      <motion.div
        variants={item}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        <PortfolioCard />
        <RiskCard />
        <SentimentCard />
        <NewsCard />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={item}
        className="grid gap-6 xl:grid-cols-3"
      >
        {/* Rabbit Area */}
        <div className="xl:col-span-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Assistant Bunny
            </h2>

            <RabbitAssistant />
          </div>
        </div>

        {/* Market Feed */}
        <div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Market Feed
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl bg-zinc-800 p-4">
                BTC +3.5%
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
                ETH +2.1%
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
                SOL +5.7%
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}