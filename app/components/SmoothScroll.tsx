"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import Lenis to prevent any SSR window issues
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for buttery smoothness
        smoothWheel: true,
        syncTouch: false, // Set to false to allow browser-native history back/forward swipe gestures
      });

      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        cancelAnimationFrame(rafId);
      };
    };

    let cleanupFn: (() => void) | undefined;
    initLenis().then((cleanup) => {
      cleanupFn = cleanup;
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return <>{children}</>;
}
