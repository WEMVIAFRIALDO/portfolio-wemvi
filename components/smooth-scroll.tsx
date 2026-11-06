"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame, type FrameData } from "motion/react";
import "lenis/dist/lenis.css";

/**
 * Smooth scrolling untuk seluruh halaman.
 * - Digerakkan oleh loop frame motion, jadi tidak ada dua loop rAF yang berjalan.
 * - `respectReducedMotion` (bawaan Lenis): dengan prefers-reduced-motion, scroll
 *   mengikuti input 1:1 dan scroll lewat kode menjadi instan.
 * - Link anchor ditangani `HashLink`, bukan opsi `anchors` Lenis.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (data: FrameData) => lenisRef.current?.lenis?.raf(data.timestamp);
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, respectReducedMotion: true }}
    >
      {children}
    </ReactLenis>
  );
}
