"use client";

import { useState, useEffect } from "react";
import TransitionLink from "./TransitionLink";

export default function InternshipNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => setIsDismissed(true), 300); // unmount after scale transition
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/25 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white/80 backdrop-blur-lg max-w-sm w-full p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(12,42,146,0.25)] border border-[#0C2A92]/15 relative flex flex-col gap-5 text-center transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Brand Logo Vector */}
        <div className="flex justify-center -mt-2">
          <svg className="w-14 h-14 text-[#0C2A92] drop-shadow-sm select-none" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,8 17,10 13,11" />
            <polygon points="6,14 13,11 12,8" />
            <polygon points="13,11 9,2 6,14" />
            <polygon points="12,8 15,3 13,11" opacity="0.65" />
            <polygon points="6,14 2,16 5,13" />
          </svg>
        </div>

        {/* Technical tag label matching Apply page */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-[#0C2A92] font-mono text-[11px] font-bold tracking-widest pb-1 border-b border-[#0C2A92]/20">
            <span>[A] ACADEMY_ROLES</span>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h3
            className="text-[22px] font-bold text-[#0a0f24] tracking-wide uppercase leading-tight"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
            Internship Roles Are Open
          </h3>
          <p className="text-[13px] text-slate-700 font-medium leading-relaxed max-w-xs mx-auto">
            Secure your slot in the upcoming internship drive. Build live client software and earn verified digital certificates.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 mt-2">
          <TransitionLink
            href="/apply"
            onClick={handleDismiss}
            className="w-full bg-[#0a0f24] text-white text-center text-[12px] font-bold tracking-widest uppercase py-3.5 hover:bg-black transition-all active:scale-95 shadow-md"
          >
            Apply Now
          </TransitionLink>
          <button
            onClick={handleDismiss}
            className="w-full bg-white/50 border border-slate-200 text-slate-700 text-center text-[12px] font-bold tracking-widest uppercase py-3.5 hover:bg-white/90 hover:text-slate-900 transition-all active:scale-95 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
