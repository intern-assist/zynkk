"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // On the homepage, skip Lenis entirely.
    // The homepage has a fixed background video + heavy compositing layers.
    // Lenis's rAF loop calls window.scrollTo() every frame, which forces
    // the browser to repaint the entire viewport including the video.
    // On a CDN-delivered page (production), this creates stutter because
    // the browser is simultaneously decoding video + downloading assets.
    // Native browser scroll runs on the compositor thread (zero main-thread cost),
    // so it's always smooth regardless of what's on the page.
    if (pathname === "/") {
      // If Lenis was running from a previous page, destroy it
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    // For all other pages: use Lenis for the premium smooth scroll feel
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      
      // Destroy previous instance if it exists
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      const lenis = new Lenis({
        duration: 1.0, // Slightly reduced from 1.2 for snappier response
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

    initLenis();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
