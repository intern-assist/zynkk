"use client";

interface HeroProps {
  onOptInClick: () => void;
}

export default function Hero({ onOptInClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-dvh flex flex-col justify-center items-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/background-video-jan-28.mp4" type="video/mp4" />
        </video>
        {/* Gradients to blend video smoothly with surrounding dark UI */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-[#050508]/50 to-[#050508]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050508]/20 to-[#050508]/90" />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none animate-pulse-slow z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center flex-grow py-8 sm:py-16">
        {/* Glow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-cyan-500/20 text-xs font-semibold tracking-wider text-cyan-400 mb-6 animate-float">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          ⚡ SUMMER & FALL 2026 COHORTS NOW OPEN
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Launch Your Tech Career with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            Guaranteed
          </span>{" "}
          Internships
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mb-8 leading-relaxed px-2">
          zynkk connects aspiring developers and designers with structured,
          mentor-led remote internships. Work on industry projects, build your portfolio, and earn verified certification.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
          <button
            onClick={onOptInClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] active:scale-98 cursor-pointer"
          >
            Opt In for Internship
          </button>
          
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Program
            <svg
              className="w-4 h-4 text-zinc-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>

        {/* Trust Indicators / Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-24 w-full max-w-3xl text-center px-4">
          <div className="p-3 sm:p-4 rounded-2xl glass-light">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">100%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Guaranteed Match</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl glass-light">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">1-on-1</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Mentorship</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl glass-light">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">Real</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Industry Projects</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl glass-light">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">Verified</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
}
