"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-6xl"
      >
        🐰
      </motion.div>
    </div>
  );
}