"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { useInView, useReducedMotion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((mod) => mod.SplineScene),
  { ssr: false },
);

const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const LAPTOP_QUERY = "(min-width: 1024px)";
/**
 * Kamera bawaan scene memotong kaki robot, dan setZoom tidak berefek pada
 * kameranya. Jadi objek "Bot" yang diperkecil dan dinaikkan agar terlihat utuh.
 */
const BOT_SCALE = 0.5;
const BOT_Y = 153;
const SCENE_SETTLE_MS = 1500;

function subscribeToLaptop(onChange: () => void) {
  const query = window.matchMedia(LAPTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useIsLaptop() {
  return useSyncExternalStore(
    subscribeToLaptop,
    () => window.matchMedia(LAPTOP_QUERY).matches,
    () => false,
  );
}

function StaticOrb({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      fill="none"
      className={cn("stroke-primary", className)}
    >
      <g strokeWidth="0.75" opacity="0.55">
        <ellipse cx="100" cy="100" rx="72" ry="24" />
        <ellipse cx="100" cy="100" rx="72" ry="48" />
        <ellipse cx="100" cy="100" rx="24" ry="72" />
        <ellipse cx="100" cy="100" rx="48" ry="72" />
      </g>
      <circle cx="100" cy="100" r="72" strokeWidth="1.25" />
      <ellipse
        cx="100"
        cy="100"
        rx="94"
        ry="26"
        strokeWidth="1"
        transform="rotate(-24 100 100)"
      />
      <circle cx="186" cy="62" r="4" className="fill-primary" stroke="none" />
    </svg>
  );
}

/**
 * Selalu merender orb SVG statis. Scene Spline baru diunduh di layar laptop,
 * saat kartu mendekati viewport; kalau gagal dimuat, orb tetap terlihat.
 */
export function LearningVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isNear = useInView(ref, { once: true, margin: "300px" });
  const isLaptop = useIsLaptop();
  const isVisible = useInView(ref, { amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);
  const [isSceneReady, setIsSceneReady] = useState(false);

  const showScene = isLaptop && isNear && !prefersReducedMotion;

  // Scene yang dimuat di luar layar baru merender ukuran robot yang benar setelah
  // kartu terlihat. Orb tetap tampil sampai saat itu, supaya robot tidak sempat terpotong.
  useEffect(() => {
    if (!isSceneLoaded || !isVisible || isSceneReady) return;
    const timer = setTimeout(() => setIsSceneReady(true), SCENE_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [isSceneLoaded, isVisible, isSceneReady]);

  return (
    <div ref={ref} className="relative h-56 sm:h-72 lg:h-full lg:flex-1">
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
          showScene && isSceneReady && "opacity-0",
        )}
      >
        <StaticOrb className="h-full max-h-80 p-4" />
      </div>

      {showScene && (
        <>
          <Spotlight
            size={320}
            className="from-primary/25 to-transparent to-70%"
          />
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              isSceneReady ? "opacity-100" : "opacity-0",
            )}
          >
            <SplineScene
              scene={SCENE_URL}
              className="size-full"
              onLoad={(app) => {
                const bot = app.findObjectByName("Bot");
                if (bot) {
                  bot.scale.x = bot.scale.y = bot.scale.z = BOT_SCALE;
                  bot.position.y = BOT_Y;
                }
                setIsSceneLoaded(true);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
