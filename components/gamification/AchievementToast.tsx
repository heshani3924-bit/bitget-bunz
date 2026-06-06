"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

interface AchievementToastProps {
  show: boolean;
  title: string;
  description: string;
}

export default function AchievementToast({
  show,
  title,
  description,
}: AchievementToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -40,
          }}
          transition={{
            duration: 0.3,
          }}
          className="fixed right-6 top-6 z-[999] w-80 rounded-3xl border border-cyan-400/20 bg-zinc-900/95 p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.25)]"
        >
          <div className="flex gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Trophy
                size={24}
                className="text-cyan-400"
              />
            </div>

            <div>
              <p className="font-bold text-white">
                Achievement Unlocked
              </p>

              <p className="mt-1 text-cyan-400">
                {title}
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}