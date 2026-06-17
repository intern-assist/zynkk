"use client";

import TransitionLink from "../components/TransitionLink";
import { useEffect, useRef, useState } from "react";

export default function FAQPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openClientFaq, setOpenClientFaq] = useState<number | null>(null);
  const [openInternFaq, setOpenInternFaq] = useState<number | null>(null);

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

  const clientFaqs = [
    { q: "How does your pricing work?", a: "We offer project-based flat-fee pricing rather than hourly rates. This ensures transparency and guarantees delivery within budget." },
    { q: "Who actually writes the code?", a: "Our core engineering team of senior developers architect the systems, write the complex business logic, and rigorously review every line of code submitted by our interns before it touches production." },
    { q: "How long does a typical project take?", a: "Depending on scope, a standard web application takes between 4 to 8 weeks from design to deployment." }
  ];

  const internFaqs = [
    { q: "Is there any cost to join?", a: "All our training and internship programs are completely free of cost. However, there is a very small processing fee for the official digitally verifiable certificate issued at the end." },
    { q: "Is the internship paid?", a: "We offer both stipended enterprise roles and unpaid training internships, depending on the program track." },
    { q: "Do you offer remote internships?", a: "Yes, we support fully remote internships globally." },
    { q: "How long is the program?", a: "Our standard program runs for 4 weeks, with flexible start dates." },
    { q: "Do interns get return offers?", a: "Historically, over 80% of our successful interns receive full-time return offers." }
  ];

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
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Technical Header Labels */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-6 text-slate-900 font-mono text-[13px] font-bold tracking-tight pb-2 border-b border-[#0C2A92]/30">
            <span>[C] Clients</span>
            <span>[I] Interns</span>
          </div>
        </div>

        <div className="text-center mt-4 mb-16 md:mb-24 max-w-2xl mx-auto px-2">
          <h1 className="text-[36px] sm:text-[56px] md:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[17px] sm:text-[20px] text-slate-600 font-medium">
            Find answers to common questions about our agency services and internship programs.
          </p>
        </div>

        {/* Notion Toggle Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          
          <div>
            <h2 className="text-[13px] font-mono text-[#0C2A92] font-bold mb-6 tracking-wider uppercase flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              For Clients
            </h2>
            <div className="flex flex-col border-t border-[#0C2A92]/20">
              {clientFaqs.map((faq, i) => {
                const isOpen = openClientFaq === i;
                return (
                  <div key={i} className="border-b border-[#0C2A92]/20">
                    <button
                      onClick={() => setOpenClientFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-5 text-left text-[15px] font-bold text-slate-800 hover:text-[#0C2A92] transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <span className={`transform transition-transform duration-300 text-slate-500 text-sm shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-slate-600 text-[13px] sm:text-[14px] leading-relaxed pr-2 sm:pr-8 font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-[13px] font-mono text-[#0C2A92] font-bold mb-6 tracking-wider uppercase flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              For Interns
            </h2>
            <div className="flex flex-col border-t border-[#0C2A92]/20">
              {internFaqs.map((faq, i) => {
                const isOpen = openInternFaq === i;
                return (
                  <div key={i} className="border-b border-[#0C2A92]/20">
                    <button
                      onClick={() => setOpenInternFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-5 text-left text-[15px] font-bold text-slate-800 hover:text-[#0C2A92] transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <span className={`transform transition-transform duration-300 text-slate-500 text-sm shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-slate-600 text-[13px] sm:text-[14px] leading-relaxed pr-2 sm:pr-8 font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Info Banner */}
        <div className="mt-24 md:mt-32 flex justify-center px-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white border border-[#0C2A92]/30 px-5 py-3.5 sm:py-4 rounded-2xl sm:rounded-full shadow-lg text-slate-900 text-[13px] font-bold text-center sm:text-left">
            <div className="w-[20px] h-[20px] rounded-full bg-[#0C2A92] text-white flex items-center justify-center flex-shrink-0">
              <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span>
              Have a different question? <TransitionLink href="/contact" className="text-[#0C2A92] hover:underline whitespace-nowrap">Contact our support team.</TransitionLink>
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}
