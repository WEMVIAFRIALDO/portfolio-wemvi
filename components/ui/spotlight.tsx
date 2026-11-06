"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  type SpringOptions,
} from "motion/react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

/** Mengikuti kursor di dalam parent, yang harus `relative overflow-hidden`. */
export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { left, top } = parent.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    };
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full bg-radial from-zinc-50 to-transparent to-80% blur-xl transition-opacity duration-200",
        isHovered ? "opacity-100" : "opacity-0",
        className,
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}
