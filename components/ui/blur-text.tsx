"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  /** Jeda antarsegmen, dalam milidetik. */
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
}

export function BlurText({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const segments = animateBy === "words" ? text.split(" ") : text.split("");
  const offset = direction === "top" ? -20 : 20;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden className={cn("flex flex-wrap", className)}>
        {segments.map((segment, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, filter: "blur(10px)", y: offset }}
            animate={
              inView
                ? { opacity: 1, filter: "blur(0px)", y: 0 }
                : { opacity: 0, filter: "blur(10px)", y: offset }
            }
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: (i * delay) / 1000,
            }}
          >
            {segment}
            {animateBy === "words" && i < segments.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </span>
    </>
  );
}
