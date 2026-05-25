"use client";

import TransitionLink from "../components/TransitionLink";
import { useEffect, useRef } from "react";

export default function ServicesPage() {
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
    <main className="relative w-full min-h-dvh flex flex-col font-sans overflow-x-hidden text-slate-900">
      
      {/* Background Video like Home Page */}
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
      
      <div className="max-w-6xl mx-auto w-full relative z-10 pt-32 pb-24 px-6">
        
        {/* Technical Header Labels */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-6 text-slate-900 font-mono text-[13px] font-bold tracking-tight pb-2 border-b border-[#0C2A92]/30">
            <span>[W] Web Apps</span>
            <span>[E] E-commerce</span>
            <span>[C] Cloud Infra</span>
            <span>[D] Design</span>
          </div>
        </div>

        <div className="text-center mb-16 mt-12">
          <p className="text-slate-500 text-[13px] font-bold mb-6 uppercase tracking-wider">Trusted by enterprise engineering teams</p>
          
          {/* Dashed Border Logo Row */}
          <div className="flex flex-wrap justify-center items-center border border-dashed border-[#0C2A92] text-slate-900 font-bold text-xl">
            <div className="px-12 py-6 border-r border-dashed border-[#0C2A92] w-full sm:w-1/2 md:w-1/4 text-center">OpenAI</div>
            <div className="px-12 py-6 border-r border-dashed border-[#0C2A92] w-full sm:w-1/2 md:w-1/4 text-center">Figma</div>
            <div className="px-12 py-6 border-r border-dashed border-[#0C2A92] w-full sm:w-1/2 md:w-1/4 text-center">ramp</div>
            <div className="px-12 py-6 w-full sm:w-1/2 md:w-1/4 text-center">Vercel</div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mt-24 mb-32 max-w-4xl mx-auto">
          <h1 className="text-[56px] md:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Build any web solution with Zynkk.
          </h1>
          <p className="text-[21px] text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Continuously deploy enterprise applications into production with dedicated engineers, a declarative roadmap, and a persistent delivery cycle.
          </p>
          
          <div className="mt-12 flex justify-center gap-4 items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#0C2A92]/20 shadow-md bg-white flex items-center justify-center -mr-6 z-30">
              <span className="text-[#0C2A92] font-bold text-2xl">Z</span>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-[#0C2A92]/20 shadow-md bg-[#f5f8ff] flex items-center justify-center -mr-6 z-20">
              <svg className="w-8 h-8 text-[#0C2A92]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-[#0C2A92]/20 shadow-md bg-[#e6eeff] flex items-center justify-center z-10 text-[#0C2A92]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            </div>
            <span className="text-slate-600 ml-4 font-mono text-[13px] font-bold">and others</span>
          </div>
        </div>

        {/* First Z-Pattern Block: Editor Mockup */}
        <div className="relative border border-[#0C2A92]/30 rounded-xl p-[1px] bg-white shadow-xl mb-40">
           <div className="flex justify-between items-center border-b border-[#0C2A92]/20 p-4 bg-[#f8faff] rounded-t-xl">
             <span className="font-mono text-sm text-slate-900 font-bold">zynkk-app.ts</span>
             <span className="font-mono text-[13px] text-[#0C2A92] font-bold cursor-pointer flex items-center gap-1 hover:underline">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                See example
             </span>
           </div>
           <div className="p-8 pb-32 overflow-x-auto">
             <pre className="font-mono text-[14px] leading-relaxed text-slate-700">
               <span className="text-slate-400">import</span> {"{ "}App{" }"} <span className="text-slate-400">from</span> "@zynkk/core";<br/><br/>
               <span className="text-slate-400">const</span> app = <span className="text-slate-400">new</span> App();<br/><br/>
               <span className="text-slate-400">const</span> deployment = app.deploy("web-solution", {"{"}<br/>
               {"  "}type: <span className="text-[#0C2A92] font-semibold">"managed"</span>,<br/>
               {"  "}initialTitle: <span className="text-[#0C2A92] font-semibold">"Enterprise Platform"</span>,<br/>
               {"  "}schema: {"{"} properties: {"{"}<br/>
               {"    "}"Users": Schema.title(),<br/>
               {"    "}"CSAT score": Schema.select([{"{"} name: <span className="text-[#0C2A92] font-semibold">"Very satisfied"</span> {"}"}, ...]),<br/>
             </pre>
           </div>
           
           {/* Overlapping UI Card */}
           <div className="absolute -bottom-16 right-4 md:right-12 w-[90%] md:w-[600px] bg-white border border-[#0C2A92]/20 shadow-[0_20px_50px_-10px_rgba(151,180,255,0.25)] rounded-xl overflow-hidden z-20">
             <div className="p-5 border-b border-[#0C2A92]/10 flex items-center gap-3">
               <svg className="w-6 h-6 text-[#0C2A92]" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
               <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">Enterprise Platform</h3>
             </div>
             <table className="w-full text-[13px] text-left text-slate-600">
               <thead className="text-[12px] bg-[#f8faff] border-b border-[#0C2A92]/10 text-[#0C2A92] uppercase tracking-wider font-bold">
                 <tr>
                   <th className="px-5 py-3 font-bold">Feature</th>
                   <th className="px-5 py-3 font-bold">Status</th>
                   <th className="px-5 py-3 font-bold">Tags</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-gray-50">
                   <td className="px-5 py-4 flex items-center gap-2 text-slate-800 font-medium"><svg className="w-4 h-4 text-[#0C2A92]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Dashboard UI</td>
                   <td className="px-5 py-4"><span className="text-slate-500 font-medium">Completed</span></td>
                   <td className="px-5 py-4"><span className="bg-[#f0f4ff] text-[#0C2A92] px-2 py-1 rounded text-xs font-bold border border-[#0C2A92]/20">Frontend</span></td>
                 </tr>
                 <tr className="border-b border-gray-50">
                   <td className="px-5 py-4 flex items-center gap-2 text-slate-800 font-medium"><svg className="w-4 h-4 text-[#0C2A92]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Payment Gateway</td>
                   <td className="px-5 py-4"><span className="text-slate-500 font-medium">In Progress</span></td>
                   <td className="px-5 py-4"><span className="bg-[#f0f4ff] text-[#0C2A92] px-2 py-1 rounded text-xs font-bold border border-[#0C2A92]/20">Backend</span></td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-40 pt-24 border-t border-dashed border-[#0C2A92]/30 relative">
          
          <div className="w-full md:w-1/2 pr-0 md:pr-12">
            <h2 className="text-[48px] md:text-[56px] font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              All of this, on a hosted runtime.
            </h2>
            <p className="text-[18px] text-slate-600 leading-relaxed mb-8 font-medium">
              Applications are isolated sandboxes managed by Zynkk, so the code behind your syncs, tools, and workflows runs on our infra instead of your servers.
            </p>
            <TransitionLink href="/contact" className="text-[#0C2A92] font-bold hover:underline flex items-center gap-1 text-[15px]">
              Discuss your project <span className="text-lg">→</span>
            </TransitionLink>
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            <div className="bg-[#0C2A92] rounded-2xl p-8 pb-12 text-white font-mono text-[14px] leading-[2.2] shadow-[0_30px_60px_-15px_rgba(151,180,255,0.6)] relative">
              <div className="mb-6">
                <span className="text-white font-bold">$ ntn deploy worker</span><br/>
                <span className="text-white/80">[build] Deploying...</span><br/>
                <span className="text-white/80">[build] Uploading to AWS...</span><br/>
                <span className="text-white/80">[build] App updated...</span>
              </div>
              
              <div>
                <span className="text-white font-bold">Capabilities:</span><br/>
                <span className="text-white/80">&nbsp;&nbsp;tool&nbsp;&nbsp;</span>queryDatabase<br/>
                <span className="text-white/80">&nbsp;&nbsp;tool&nbsp;&nbsp;</span>processPayment<br/>
                <span className="text-white/80">&nbsp;&nbsp;sync&nbsp;&nbsp;</span>linearTickets
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-6 right-4 flex items-center">
                 <div className="w-[44px] h-[44px] rounded-lg bg-[#0C2A92] border-2 border-white flex items-center justify-center text-white shadow-xl -mr-3 z-10">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                 </div>
                 <div className="w-[60px] h-[60px] rounded-full bg-white border-4 border-[#f0f4ff] flex items-center justify-center text-[#0C2A92] shadow-xl">
                   <span className="font-bold text-2xl tracking-tighter -mr-1">Z</span>
                 </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Info Banner */}
        <div className="mt-40 flex justify-center">
          <div className="flex items-center gap-3 bg-white border border-[#0C2A92]/30 px-6 py-4 rounded-full shadow-lg text-slate-900 text-[13px] font-bold">
            <div className="w-[20px] h-[20px] rounded-full bg-[#0C2A92] text-white flex items-center justify-center flex-shrink-0">
              <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            Custom apps, enterprise tools, and webhook triggers are available in beta.
          </div>
        </div>

      </div>
    </main>
  );
}
