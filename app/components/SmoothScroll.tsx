"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const startLenis = async () => {
      if (cancelled) return;

      const Lenis = (await import("lenis")).default;
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }
      rafRef.current = requestAnimationFrame(raf);
    };

    // Wait for the page to fully load (all assets: video, images, fonts)
    // before initializing Lenis. This prevents Lenis's rAF loop from
    // competing with asset decoding during initial page load — which is
    // the exact cause of production-only stutter.
    // On subsequent visits (cached), window.load fires almost instantly,
    // so Lenis kicks in immediately — just like localhost.
    if (document.readyState === "complete") {
      // Already loaded (e.g. client-side navigation or cached visit)
      startLenis();
    } else {
      window.addEventListener("load", () => startLenis(), { once: true });
    }

    return () => {
      cancelled = true;
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}
