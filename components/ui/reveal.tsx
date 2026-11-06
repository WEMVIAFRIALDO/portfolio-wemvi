"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/** Memicu `RevealItem` di dalamnya secara berurutan saat masuk layar. */
export function RevealGroup({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: RevealProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
