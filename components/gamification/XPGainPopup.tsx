"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  show: boolean;
  amount: number;
}

export default function XPGainPopup({
  show,
  amount,
}: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: -20,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed bottom-10 right-10 z-[999]"
        >
          <div className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-black shadow-[0_0_25px_rgba(6,182,212,0.7)]">
            +{amount} XP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}