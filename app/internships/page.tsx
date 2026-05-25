"use client";

import TransitionLink from "../components/TransitionLink";
import { useEffect, useRef } from "react";

export default function InternshipsPage() {
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
    <main className="relative w-full min-h-dvh flex flex-col font-sans pt-32 pb-24 px-6 overflow-x-hidden text-slate-900">
      
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
        
        {/* Technical Header Labels */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-6 text-slate-900 font-mono text-[13px] font-bold tracking-tight pb-2 border-b border-[#0C2A92]/30">
            <span>[F] Frontend</span>
            <span>[B] Backend</span>
            <span>[D] Design</span>
          </div>
        </div>
        
        {/* Hero Section (Centered) */}
        <div className="text-center mt-12 mb-32 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#0C2A92]/30 bg-white text-[#0C2A92] text-[13px] font-bold mb-6 shadow-sm">
            Now accepting applications for Fall 2026
          </div>
          <h1 className="text-[56px] md:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Build the future. <br/> <span className="text-[#0C2A92]">Launch your career.</span>
          </h1>
          <p className="text-[21px] text-slate-600 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
            Don't just write code that gets thrown away. Join our engineering teams to build real, scalable enterprise web solutions used by thousands. 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TransitionLink href="/apply" className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg inline-block">
              Apply Now
            </TransitionLink>
          </div>
        </div>

        {/* First Z-Pattern Block: Editor Mockup for Curriculum */}
        <div className="relative border border-[#0C2A92]/30 rounded-xl p-[1px] bg-white shadow-xl mb-40 mt-12">
           <div className="flex justify-between items-center border-b border-[#0C2A92]/20 p-4 bg-[#f8faff] rounded-t-xl">
             <span className="font-mono text-sm text-slate-900 font-bold">internship-roadmap.ts</span>
             <span className="font-mono text-[13px] text-[#0C2A92] font-bold cursor-pointer flex items-center gap-1 hover:underline">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View Syllabus
             </span>
           </div>
           <div className="p-8 pb-40 overflow-x-auto">
             <pre className="font-mono text-[14px] leading-relaxed text-slate-700">
               <span className="text-slate-400">import</span> {"{ "}Internship{" }"} <span className="text-slate-400">from</span> "@zynkk/academy";<br/><br/>
               <span className="text-slate-400">const</span> program = <span className="text-slate-400">new</span> Internship();<br/><br/>
               <span className="text-slate-400">const</span> track = program.initialize("enterprise-track", {"{"}<br/>
               {"  "}duration: <span className="text-[#0C2A92] font-semibold">"4 weeks"</span>,<br/>
               {"  "}outcome: <span className="text-[#0C2A92] font-semibold">"Verifiable Certificate"</span>,<br/>
               {"  "}requirements: {"{"} skills: {"{"}<br/>
               {"    "}"React/Next.js": Level.intermediate(),<br/>
               {"    "}"Node/AWS": Level.basic(),<br/>
               {"    "}"Commitment": <span className="text-[#0C2A92] font-semibold">"20 hrs/week"</span>,<br/>
             </pre>
           </div>
           
           {/* Overlapping UI Card */}
           <div className="absolute -bottom-24 right-4 md:right-12 w-[90%] md:w-[600px] bg-white border border-[#0C2A92]/20 shadow-[0_20px_50px_-10px_rgba(12,42,146,0.25)] rounded-xl overflow-hidden z-20">
             <div className="p-5 border-b border-[#0C2A92]/10 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <svg className="w-6 h-6 text-[#0C2A92]" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                 <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">Open Domains</h3>
               </div>
               <span className="bg-[#f0f4ff] text-[#0C2A92] px-2 py-1 rounded text-xs font-bold border border-[#0C2A92]/20">Fall Cohort</span>
             </div>
             <table className="w-full text-[13px] text-left text-slate-600">
               <thead className="text-[12px] bg-[#f8faff] border-b border-[#0C2A92]/10 text-[#0C2A92] uppercase tracking-wider font-bold">
                 <tr>
                   <th className="px-5 py-3 font-bold">Role</th>
                   <th className="px-5 py-3 font-bold">Status</th>
                   <th className="px-5 py-3 font-bold">Stack</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                   <td className="px-5 py-4 flex items-center gap-2 text-slate-800 font-medium"><svg className="w-4 h-4 text-[#0C2A92]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> Frontend Engineering</td>
                   <td className="px-5 py-4"><span className="text-emerald-600 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Accepting</span></td>
                   <td className="px-5 py-4 text-slate-500">React, Next.js</td>
                 </tr>
                 <tr className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                   <td className="px-5 py-4 flex items-center gap-2 text-slate-800 font-medium"><svg className="w-4 h-4 text-[#0C2A92]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg> Backend Engineering</td>
                   <td className="px-5 py-4"><span className="text-amber-600 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Waitlist</span></td>
                   <td className="px-5 py-4 text-slate-500">Node, AWS</td>
                 </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                   <td className="px-5 py-4 flex items-center gap-2 text-slate-800 font-medium"><svg className="w-4 h-4 text-[#0C2A92]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.813-6.843m-4.928-.025a15.996 15.996 0 00-4.648 4.764L10.3 12.3m4.928-.025l-4.928 4.928" /></svg> UI/UX Design</td>
                   <td className="px-5 py-4"><span className="text-emerald-600 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Accepting</span></td>
                   <td className="px-5 py-4 text-slate-500">Figma, Framer</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>

      </div>
    </main>
  );
}
