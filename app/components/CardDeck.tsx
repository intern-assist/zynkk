"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";

interface CardDeckProps {
  children: React.ReactNode[];
}

export default function CardDeck({ children }: CardDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const totalCards = children.length;

  const cycleCard = () => {
    if (isAnimatingRef.current || totalCards <= 1) return;
    isAnimatingRef.current = true;

    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".deck-card")) as HTMLElement[];
    const topCard = cards[activeIndex];

    // Animate top card throwing away to the right
    gsap.to(topCard, {
      xPercent: 120,
      rotate: 15,
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => {
        // Update index to make next card active
        setActiveIndex((prev) => (prev + 1) % totalCards);

        // Reset the thrown card to original transform, but hidden,
        // so it can fade in naturally at the bottom of the stack
        gsap.set(topCard, {
          xPercent: 0,
          rotate: 0,
          opacity: 0,
        });

        isAnimatingRef.current = false;
      },
    });
  };

  return (
    <div className="relative w-full flex flex-col items-center py-6">
      {/* Interactive Stack Area */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-[340px] md:max-w-[480px] h-[260px] md:h-[280px] cursor-pointer select-none"
        onClick={cycleCard}
      >
        {children.map((card, idx) => {
          // Calculate relative position from activeIndex
          const relIndex = (idx - activeIndex + totalCards) % totalCards;
          
          const zIndex = totalCards - relIndex;
          const scale = 1 - relIndex * 0.05;
          const yOffset = relIndex * 14;
          // Only show top 3 cards in stack
          const opacity = relIndex === 0 ? 1 : relIndex === 1 ? 0.75 : relIndex === 2 ? 0.4 : 0;

          return (
            <div
              key={idx}
              className="deck-card absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out"
              style={{
                transform: `translate3d(0, ${yOffset}px, 0) scale(${scale})`,
                zIndex,
                // Avoid overriding opacity of the card currently throwing away
                opacity: idx === activeIndex && isAnimatingRef.current ? undefined : opacity,
                pointerEvents: relIndex === 0 ? "auto" : "none",
              }}
            >
              {card}
            </div>
          );
        })}
      </div>

      {/* Controller / Indicator dots */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (isAnimatingRef.current) return;
              setActiveIndex(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? "bg-white scale-110 px-4" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
      <p className="text-[12px] text-white/30 font-mono mt-4 tracking-wider uppercase animate-pulse select-none pointer-events-none">
        Tap cards to cycle
      </p>
    </div>
  );
}
