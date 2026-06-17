"use client";

import TransitionLink from "../components/TransitionLink";
import { useEffect, useRef } from "react";
import BorderGlow from "../components/BorderGlow";

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative w-full min-h-dvh flex flex-col font-sans pt-24 md:pt-32 pb-24 px-4 sm:px-6 overflow-x-hidden text-slate-900">
      
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-[100vh] -z-10 overflow-hidden bg-[#e6ebf5]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 mix-blend-multiply"
        >
          <source src="/background-video-jan-28.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mt-8 mb-16">
          <h1 className="text-[42px] md:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Our Mission
          </h1>
          <p className="text-[18px] md:text-[21px] text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed px-2">
            Zynkk was founded to bridge the gap between high-end enterprise web solutions and the next generation of digital builders. 
          </p>
        </div>

        {/* Core Values / Dashed Grid wrapped in BorderGlow */}
        <div className="text-center mb-24 md:mb-32 max-w-5xl mx-auto">
          <p className="text-slate-500 text-[13px] font-bold mb-6 uppercase tracking-wider">Our Core Pillars</p>
          
          <BorderGlow
            borderRadius={16}
            backgroundColor="#ffffff"
            glowColor="226 85 30"
            colors={["#0C2A92", "#3b82f6", "#1d4ed8"]}
            className="w-full shadow-md"
            edgeSensitivity={30}
            glowRadius={50}
            glowIntensity={1.0}
            fillOpacity={0.03}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center text-slate-900 font-bold text-[15px] bg-white rounded-2xl">
              <div className="px-6 py-5 border-b sm:border-b-0 sm:border-r border-[#0C2A92]/10 w-full sm:w-1/3 text-center">Elite Engineering</div>
              <div className="px-6 py-5 border-b sm:border-b-0 sm:border-r border-[#0C2A92]/10 w-full sm:w-1/3 text-center">Accessible Education</div>
              <div className="px-6 py-5 w-full sm:w-1/3 text-center">Verifiable Portfolios</div>
            </div>
          </BorderGlow>
        </div>

        {/* For Our Clients */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-16 md:mt-24 mb-24 md:mb-40 relative">
          <div className="w-full md:w-1/2">
            <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">For Our Clients</h2>
            <p className="text-[16px] md:text-[18px] text-slate-600 font-medium leading-relaxed mb-6">
              We believe that premium software shouldn't be locked behind massive agency retainers. We provide enterprise-grade web development, e-commerce architectures, and stunning design at a fraction of the cost.
            </p>
            <p className="text-[16px] md:text-[18px] text-slate-600 font-medium leading-relaxed mb-8">
              Our core senior engineers architect, oversee, and finalize every project to ensure absolute perfection, while our top-tier interns handle execution, drastically reducing overhead while maintaining elite quality.
            </p>
            <TransitionLink href="/services" className="text-[#0C2A92] font-bold hover:underline flex items-center gap-1 text-[15px]">
              View our services <span className="text-lg">→</span>
            </TransitionLink>
          </div>
          
          <div className="w-full md:w-1/2 relative z-10">
            <BorderGlow
              borderRadius={16}
              backgroundColor="#0C2A92"
              glowColor="226 85 60"
              colors={["#0C2A92", "#3b82f6", "#ffffff"]}
              className="w-full shadow-[0_30px_60px_-15px_rgba(12,42,146,0.4)]"
              edgeSensitivity={30}
              glowRadius={60}
              glowIntensity={1.0}
              fillOpacity={0.03}
            >
              <div className="p-5 pb-8 sm:p-8 sm:pb-12 text-white font-mono text-[12px] sm:text-[14px] leading-[2.2]">
                <div className="mb-6">
                  <span className="text-white font-bold">$ deploy architecture --env=production</span><br/>
                  <span className="text-white/80">[build] Compiling Next.js assets...</span><br/>
                  <span className="text-white/80">[build] Running senior engineer code review...</span><br/>
                  <span className="text-emerald-400 font-bold">✓ Approved</span><br/>
                  <span className="text-white/80">[build] Shipped to client.</span>
                </div>
              </div>
            </BorderGlow>

            {/* Floating badges moved outside BorderGlow to prevent clipping */}
            <div className="absolute -bottom-6 right-4 flex items-center z-30">
               <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-white border-4 border-[#f0f4ff] flex items-center justify-center text-[#0C2A92]">
                 <span className="font-bold text-xl sm:text-2xl tracking-tighter -mr-1">Z</span>
               </div>
            </div>
          </div>
        </div>

        {/* For Our Interns */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 mt-16 md:mt-24 relative">
          <div className="w-full md:w-1/2 relative z-10">
             {/* Notion-style Data Table wrapped in BorderGlow */}
             <div className="w-full font-sans">
               <BorderGlow
                 borderRadius={12}
                 backgroundColor="#ffffff"
                 glowColor="226 85 30"
                 colors={["#0C2A92", "#3b82f6", "#1d4ed8"]}
                 className="w-full shadow-xl"
                 edgeSensitivity={30}
                 glowRadius={50}
                 glowIntensity={1.0}
                 fillOpacity={0.03}
               >
                 <div className="p-4 sm:p-5 border-b border-[#0C2A92]/10 flex items-center gap-3 bg-[#f8faff] rounded-t-xl">
                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0C2A92] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                   <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 tracking-tight">Intern Progression</h3>
                 </div>
                 <table className="w-full text-[13px] text-left text-slate-600 bg-white rounded-b-xl">
                   <thead className="text-[11px] sm:text-[12px] bg-[#f8faff] border-b border-[#0C2A92]/10 text-[#0C2A92] uppercase tracking-wider font-bold">
                     <tr>
                       <th className="px-4 py-3 sm:px-5 font-bold">Phase</th>
                       <th className="px-4 py-3 sm:px-5 font-bold">Outcome</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-gray-50 hover:bg-[#f8faff]/50 transition-colors">
                       <td className="px-4 py-3.5 sm:px-5 sm:py-4 font-bold text-slate-800">1. Onboarding</td>
                       <td className="px-4 py-3.5 sm:px-5 sm:py-4 text-slate-500 font-medium">Architecture Review</td>
                     </tr>
                     <tr className="border-b border-gray-50 hover:bg-[#f8faff]/50 transition-colors">
                       <td className="px-4 py-3.5 sm:px-5 sm:py-4 font-bold text-slate-800">2. Development</td>
                       <td className="px-4 py-3.5 sm:px-5 sm:py-4 text-slate-500 font-medium">Real Client Code</td>
                     </tr>
                     <tr className="hover:bg-[#f8faff]/50 transition-colors">
                       <td className="px-4 py-3.5 sm:px-5 sm:py-4 font-bold text-slate-800">3. Graduation</td>
                       <td className="px-4 py-3.5 sm:px-5 sm:py-4 text-slate-500 font-medium">Verifiable Certificate</td>
                     </tr>
                   </tbody>
                 </table>
               </BorderGlow>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">For Our Interns</h2>
            <p className="text-[16px] md:text-[18px] text-slate-600 font-medium leading-relaxed mb-6">
              The traditional tech industry is broken. Junior developers are told they need experience to get a job, but they need a job to get experience.
            </p>
            <p className="text-[16px] md:text-[18px] text-slate-600 font-medium leading-relaxed mb-8">
              We fix this by throwing you into the deep end—with a life jacket. You will work on real client projects, write production code, and interact with stakeholders. When you leave Zynkk, you don't just have a certificate; you have a verifiable portfolio of shipped products.
            </p>
            <TransitionLink href="/apply" className="text-[#0C2A92] font-bold hover:underline flex items-center gap-1 text-[15px]">
              Apply for an internship <span className="text-lg">→</span>
            </TransitionLink>
          </div>
        </div>

      </div>
    </main>
  );
}
