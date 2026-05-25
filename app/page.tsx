"use client";

import { useEffect, useState, useRef } from "react";
import TransitionLink from "./components/TransitionLink";
import FlowingMenu from "./components/FlowingMenu";
import BorderGlow from "./components/BorderGlow";

function AnimatedCounter({ value, duration = 2000, prefix = "", suffix = "+" }: { value: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            setCount(Math.floor(easeProgress * value));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <div ref={ref} className="inline-block">{prefix}{count}{suffix}</div>;
}

export default function Home() {
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSentinelRef = useRef<HTMLDivElement>(null);

  // Use IntersectionObserver instead of scroll event for header transition.
  useEffect(() => {
    const sentinel = heroSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isDark = !entry.isIntersecting;
        setIsDarkHeader(isDark);
        window.dispatchEvent(new CustomEvent('themeChange', { detail: isDark ? 'dark' : 'light' }));
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.unobserve(sentinel);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            console.log("Autoplay prevented:", err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <main className="relative w-full min-h-dvh flex flex-col font-sans selection:bg-zinc-600 overflow-x-hidden">

      {/* ================= BACKGROUND VIDEO (FIXED) ================= */}
      <div className="fixed top-0 left-0 w-full h-[100vh] -z-10 overflow-hidden bg-[#e6ebf5]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/background-video-jan-28.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Sentinel for header transition */}
      <div ref={heroSentinelRef} className="absolute top-[85vh] left-0 w-full h-px z-0 pointer-events-none" />

      {/* ================= SCROLLABLE CONTENT ================= */}
      <div className="relative z-10 flex flex-col w-full">

        {/* ================= HERO SECTION ================= */}
        <div className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-transparent pt-24 pb-12">
          <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.7)_20%,rgba(0,0,0,0.35)_40%,rgba(0,0,0,0.12)_65%,rgba(0,0,0,0.03)_80%,transparent_100%)] pointer-events-none" />

          <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full -mt-10">
            {/* App Icon */}
            <svg className="w-24 h-24 text-slate-900 mb-2 drop-shadow-md select-none" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,8 17,10 13,11" />
              <polygon points="6,14 13,11 12,8" />
              <polygon points="13,11 9,2 6,14" />
              <polygon points="12,8 15,3 13,11" opacity="0.65" />
              <polygon points="6,14 2,16 5,13" />
            </svg>

            <h1 className="text-[56px] md:text-[64px] font-medium tracking-tight text-slate-900 leading-none">
              Zynkk
            </h1>

            <p className="text-[20px] md:text-[22px] text-slate-800 mt-4 max-w-2xl font-normal tracking-tight leading-normal">
              Building premium web solutions for modern brands, and training the next generation of engineers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <TransitionLink
                href="/services"
                className="bg-black text-white text-[14px] font-semibold px-6 py-[13px] rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-md cursor-pointer inline-block"
              >
                Hire Our Services
              </TransitionLink>
              <TransitionLink
                href="/internships"
                className="bg-transparent text-slate-900 border border-slate-900/30 text-[14px] font-semibold px-6 py-[13px] rounded-full hover:bg-slate-900/5 transition-all active:scale-95 inline-block"
              >
                Explore Academy
              </TransitionLink>
            </div>

            {/* Trusted Teams / Graduates Hired By */}
            <div className="w-full flex flex-col items-center mt-[90px]">
              <span className="text-[14px] font-normal text-slate-800/60 tracking-normal mb-8 mix-blend-color-burn">
                Top teams choose Zynkk and hire our graduates
              </span>

              <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 max-w-6xl opacity-70 mix-blend-color-burn text-slate-900">
                <div className="flex items-center font-extrabold text-[28px] tracking-tight select-none">
                  <span>duo</span>lingo
                </div>
                <div className="font-serif font-bold text-[34px] tracking-tight select-none">
                  Vanta
                </div>
                <div className="flex items-center gap-2 select-none">
                  <span className="font-light text-[22px] tracking-widest">virgin atlantic</span>
                  <span className="w-5 h-4 bg-slate-900 rounded-sm inline-block skew-x-12"></span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[30px] select-none">
                  <div className="flex gap-0.5">
                    <div className="w-2.5 h-6 bg-slate-900 rounded-sm skew-x-[20deg]"></div>
                    <div className="w-2.5 h-6 bg-slate-900 rounded-sm skew-x-[20deg]"></div>
                    <div className="w-2.5 h-6 bg-slate-900 rounded-sm skew-x-[20deg]"></div>
                  </div>
                  <span className="tracking-tight ml-1">miro</span>
                </div>
                <div className="flex items-center font-extrabold text-[28px] tracking-tighter select-none">
                  Rakuten
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVISION A: ZYNKK STUDIO ================= */}
        <div className="w-full relative bg-black">
          <div className="w-full pt-20 pb-28 px-6 flex flex-col items-center">

            <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-[11px] md:text-[13px] font-mono mb-6 tracking-normal md:tracking-wider whitespace-nowrap max-w-full text-center">
              [ DIVISION_01 // STUDIO_SERVICES ]
            </div>

            <h2 className="text-[44px] md:text-[52px] font-medium tracking-tight text-white mb-4 text-center">
              We Build Web Solutions that Scale
            </h2>
            <p className="text-white/60 text-[17px] max-w-xl text-center mb-16 leading-relaxed">
              From robust custom architectures to conversion-optimized e-commerce storefronts, we deliver pixel-perfect products for your brand.
            </p>

            {/* Agency Service Cards */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <BorderGlow
                borderRadius={24}
                backgroundColor="#0a0a0f"
                glowColor="225 80 60"
                colors={['#0C2A92', '#3b82f6', '#6366f1']}
                className="w-full"
                edgeSensitivity={30}
                glowRadius={50}
                glowIntensity={1.2}
                fillOpacity={0.08}
              >
                <div className="p-8 flex flex-col justify-between min-h-[220px] w-full">
                  <div>
                    <div className="w-12 h-12 bg-white/10 rounded-[14px] flex items-center justify-center mb-6 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h4 className="text-[20px] font-medium text-white tracking-tight mb-2">Custom Web Development</h4>
                    <p className="text-white/60 text-[15px] leading-relaxed">We design and develop custom, highly scalable software applications tailored specifically to your unique business operations.</p>
                  </div>
                </div>
              </BorderGlow>

              {/* Card 2 */}
              <BorderGlow
                borderRadius={24}
                backgroundColor="#0a0a0f"
                glowColor="225 80 60"
                colors={['#0C2A92', '#3b82f6', '#6366f1']}
                className="w-full"
                edgeSensitivity={30}
                glowRadius={50}
                glowIntensity={1.2}
                fillOpacity={0.08}
              >
                <div className="p-8 flex flex-col justify-between min-h-[220px] w-full">
                  <div>
                    <div className="w-12 h-12 bg-white/10 rounded-[14px] flex items-center justify-center mb-6 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h4 className="text-[20px] font-medium text-white tracking-tight mb-2">E-Commerce Solutions</h4>
                    <p className="text-white/60 text-[15px] leading-relaxed">Robust, performant, and search-optimized storefronts engineered to maximize conversions and drive revenue.</p>
                  </div>
                </div>
              </BorderGlow>
            </div>

            {/* Agency Feature Grid */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
              <div className="bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all rounded-[24px] p-10 flex flex-col justify-start min-h-[240px]">
                <h3 className="text-[28px] font-medium text-white tracking-tight mb-4 leading-tight">Lightning Fast Performance</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">We optimize every asset, query, and API call so your web app loads instantly on all devices.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all rounded-[24px] p-10 flex flex-col justify-start min-h-[240px]">
                <h3 className="text-[28px] font-medium text-white tracking-tight mb-4 leading-tight">Stunning UI/UX Design</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">Our designers craft memorable, interface-led experiences built on robust styling tokens.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all rounded-[24px] p-10 flex flex-col justify-start min-h-[240px]">
                <h3 className="text-[28px] font-medium text-white tracking-tight mb-4 leading-tight">Enterprise Security</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">Continuous protection, secure data practices, and hardened API gateways for corporate systems.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <TransitionLink href="/services" className="text-white hover:text-white/80 font-semibold hover:underline flex items-center justify-center gap-1.5 text-[15px]">
                Explore Our Services & Case Studies <span className="text-lg">→</span>
              </TransitionLink>
            </div>

          </div>
        </div>

        {/* ================= DIVISION B: ZYNKK ACADEMY (INTERNSHIPS) ================= */}
        <div className="w-full bg-black">
          <div className="w-full py-20 px-6 flex flex-col items-center">

            <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-[11px] md:text-[13px] font-mono mb-6 tracking-normal md:tracking-wider whitespace-nowrap max-w-full text-center">
              [ DIVISION_02 // ACADEMY_SANDBOX ]
            </div>

            <h2 className="text-[44px] md:text-[52px] font-medium tracking-tight text-white mb-4 text-center">
              Learn in High-Fidelity Simulator Environments
            </h2>
            <p className="text-white/60 text-[17px] max-w-2xl text-center mb-24 leading-relaxed">
              Bridge the gap between tutorials and production coding. We provide realistic simulated projects complete with code reviews, API integrations, and continuous deployment workflows.
            </p>

            {/* Z-Pattern Content Blocks detailing Sandbox Projects */}
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-32 pb-12">
              {/* Block 1: Text Left, Mockup Right */}
              <div className="flex flex-col md:flex-row items-center gap-16 w-full">
                <div className="w-full md:w-1/3 flex flex-col">
                  <h3 className="text-[32px] font-medium text-white mb-6">Realistic Development Tasks</h3>
                  <p className="text-[16px] text-white/75 leading-relaxed mb-6">
                    Our platform simulates authentic junior engineer tasks. You are handed declarative specifications, wireframes, and mock logic, and must build fully responsive web applications.
                  </p>
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-[14px]">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span>Activity: UI Integration Task</span>
                  </div>
                </div>
                {/* Mockup Right */}
                <div className="w-full md:w-2/3 relative h-[450px] bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[24px] overflow-hidden shadow-2xl flex">
                  <div className="w-2/5 bg-[#f8f9fa] p-8 flex flex-col border-r border-slate-200">
                    <div className="w-3/4 h-3 bg-slate-300 rounded mb-6"></div>
                    <div className="w-full h-2 bg-slate-200 rounded mb-3"></div>
                    <div className="w-5/6 h-2 bg-slate-200 rounded mb-8"></div>
                    <div className="w-full h-2 bg-slate-200 rounded mb-3"></div>
                    <div className="w-4/6 h-2 bg-slate-200 rounded"></div>
                  </div>
                  {/* Floating Widget simulating student tasks */}
                  <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] max-w-sm w-full border border-black/5">
                    <p className="text-slate-800 text-[15px] font-medium leading-relaxed mb-6">
                      Task: Integrate a simulated <span className="text-indigo-600">Stripe</span> checkout flow and verify webhook status responses.
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-slate-400 text-[13px] font-medium">Difficulty &nbsp; Intermediate ⌄</span>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition-transform">↑</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2: Mockup Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-16 w-full">
                {/* Mockup Left */}
                <div className="w-full md:w-2/3 relative h-[450px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[24px] overflow-hidden shadow-2xl flex justify-end order-2 md:order-1">
                  <div className="w-2/5 bg-[#f8f9fa] p-8 flex flex-col border-l border-slate-200">
                    <div className="w-2/3 h-3 bg-slate-300 rounded mb-6"></div>
                    <div className="w-full h-2 bg-slate-200 rounded mb-3"></div>
                    <div className="w-full h-2 bg-slate-200 rounded mb-3"></div>
                    <div className="w-4/6 h-2 bg-slate-200 rounded"></div>
                  </div>
                  {/* Floating Widget simulating testing/debugging tasks */}
                  <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] max-w-sm w-full border border-black/5 z-10">
                    <p className="text-slate-800 text-[15px] font-medium leading-relaxed mb-6">
                      Task: Debug routing state errors and resolve compilation warnings within the simulation workspace.
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-slate-400 text-[13px] font-medium">Difficulty &nbsp; Advanced ⌄</span>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition-transform">↑</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 flex flex-col order-1 md:order-2">
                  <h3 className="text-[32px] font-medium text-white mb-6">Hands-on Code Reviews</h3>
                  <p className="text-[16px] text-white/75 leading-relaxed mb-6">
                    Write tests, diagnose performance bottlenecks, and refine structures. Submit your simulated deliverables to get automated and peer reviews mapped to elite team expectations.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-[14px]">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span>Activity: Bug Resolution Task</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= IMPACT IN NUMBERS ================= */}
        <div className="w-full bg-black py-24 px-6 border-t border-white/5">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-[40px] font-medium tracking-tight text-white mb-12 text-center">Our Academy in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: 1000, suffix: "+", label: "Students Trained" },
                { number: 1200, suffix: "+", label: "Certificates Issued" },
                { number: 10, suffix: "+", label: "Sandbox Tracks" },
                { number: 100, suffix: "+", label: "Simulated Projects" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-8 bg-white/[0.01] border border-white/5 rounded-[20px]">
                  <div className="text-[48px] font-bold text-white tracking-tight mb-2">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-[15px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= OPEN ACADEMY TRACKS ================= */}
        <div className="w-full bg-black py-24 border-t border-white/5">
          <div className="w-full max-w-6xl mx-auto px-6 mb-12">
            <h2 className="text-[40px] font-medium tracking-tight text-white text-center">Open Academy Tracks</h2>
          </div>
          <div className="w-full relative">
            <FlowingMenu
              items={[
                {
                  link: "/internships",
                  text: "Frontend Engineering",
                  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
                },
                {
                  link: "/internships",
                  text: "Backend Engineering",
                  image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80"
                },
                {
                  link: "/internships",
                  text: "Fullstack Engineering",
                  image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80"
                },
                {
                  link: "/internships",
                  text: "UI/UX Design",
                  image: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=600&auto=format&fit=crop&q=80"
                },
                {
                  link: "/internships",
                  text: "AI & Machine Learning",
                  image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80"
                }
              ]}
              speed={15}
              textColor="#ffffff"
              bgColor="#000000"
              marqueeBgColor="#ffffff"
              marqueeTextColor="#050508"
              borderColor="rgba(255, 255, 255, 0.1)"
            />
          </div>
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="w-full bg-black py-24 px-6">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-[40px] font-medium tracking-tight text-white mb-12 text-center">Hear from our past interns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "The simulated web tasks gave me the confidence to pass live coding interviews. It matches real job expectations.", author: "Sarah J.", role: "Software Engineer at Google", color: "bg-blue-600" },
                { quote: "Building simulated production projects here taught me more about scalable web architecture in 3 months here than I did in 3 years of university.", author: "Michael T.", role: "Frontend Developer", color: "bg-purple-600" },
                { quote: "Zynkk's sandbox is incredibly rigorous. The certificate made a real difference in my job search.", author: "Emily R.", role: "Product Designer", color: "bg-emerald-600" }
              ].map((t, i) => (
                <div key={i} className="relative bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[24px] p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/80 text-[16px] leading-relaxed mb-8 relative z-10 italic">"{t.quote}"</p>
                  </div>

                  <div className="flex items-center gap-4 relative z-10 mt-auto">
                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white tracking-tight">{t.author}</div>
                      <div className="text-white/50 text-[13px]">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CERTIFICATE PREVIEW ================= */}
        <div className="w-full bg-black py-24 px-6 flex flex-col items-center">
          <div className="w-full max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-[40px] font-medium tracking-tight text-white mb-6">Verifiable Certification from Zynkk Academy</h2>
            <p className="text-[18px] text-white/60 leading-relaxed max-w-2xl mx-auto">
              Every successful completion of our academy modules grants a shareable, digitally verifiable certificate. Showcase your technical competence to leading employers.
            </p>
          </div>

          <div className="w-full max-w-4xl rounded-[24px] overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.1)] border border-white/10 hover:shadow-[0_0_80px_rgba(99,102,241,0.2)] transition-shadow duration-500">
            <img src="/zaynab.png" alt="Zaynab Certificate" className="w-full h-auto object-cover block" />
          </div>
          <p className="text-white/40 text-[14px] mt-8 font-light tracking-wide">* Certificates are digitally verifiable and shareable directly to LinkedIn profiles.</p>
        </div>

        {/* ================= FAQ ================= */}
        <div className="w-full bg-black py-24 px-6">
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-[40px] font-medium tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="flex flex-col border-t border-white/10">
              {[
                { q: "Is there any cost to join?", a: "Access to our simulated curriculum is free of cost. However, there is a small fee for issuing and verifying your final graduation certificate." },
                { q: "Is the training program fully remote?", a: "Yes. Our sandbox environment and simulated tasks are completely web-based and accessible from anywhere." },
                { q: "How long are the cohorts?", a: "Our standard tracks take about 4 weeks to complete, but you can progress at your own pace." },
                { q: "What stack will I learn?", a: "Depending on your track, you will build applications with modern technologies like React, Next.js, Node.js, and UI/UX design tools." }
              ].map((faq, i) => (
                <details key={i} className="group border-b border-white/10">
                  <summary className="flex items-center justify-between cursor-pointer py-6 text-[18px] font-medium text-white/90 hover:text-white transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="transition duration-300 group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-white/50"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="pb-6 text-white/60 text-[16px] leading-relaxed pr-8">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="w-full min-h-[60vh] relative flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-black via-black/60 to-transparent text-white">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-[56px] font-medium tracking-tight text-white leading-none mb-4">
              Get Started with Zynkk
            </h2>
            <p className="text-[21px] text-white/70 font-normal tracking-tight max-w-2xl mt-4">
              Hire our team for custom web solutions, or join our Academy to jumpstart your career.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <TransitionLink href="/services" className="bg-white text-black text-[15px] font-semibold px-8 py-[14px] rounded-full hover:bg-zinc-200 transition-all active:scale-95 shadow-lg inline-block">
                Hire Our Services
              </TransitionLink>
              <TransitionLink href="/internships" className="bg-transparent text-white border border-white/30 text-[15px] font-semibold px-8 py-[14px] rounded-full hover:bg-white/10 transition-all active:scale-95 inline-block">
                Join the Academy
              </TransitionLink>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
