"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if a transition was initiated by TransitionLink
    if (sessionStorage.getItem('isTransitioning') === 'true') {
      sessionStorage.removeItem('isTransitioning');

      const columns = document.querySelectorAll(".grid-column");

      // Animate the new page revealing (Columns slide down into the floor)
      gsap.fromTo(
        columns,
        { y: "0%" },
        {
          y: "100%",
          duration: 0.6,
          stagger: 0.06,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(columns, { y: "-100%" });
            const overlay = document.getElementById("grid-transition-overlay");
            if (overlay) {
              overlay.style.pointerEvents = "none";
            }
          }
        }
      );
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col flex-1">
      {children}
    </div>
  );
}
