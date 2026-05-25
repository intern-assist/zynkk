"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function ContactPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit message");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative w-full min-h-[100vh] flex flex-col font-sans overflow-hidden text-slate-900">
      
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
      
      {/* Giant CONTACT text */}
      <div className="relative z-10 pt-28 md:pt-32 px-4">
        <h1
          className="text-[28vw] md:text-[20vw] font-black leading-none tracking-normal text-slate-900 text-center select-none uppercase"
          style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
        >
          CONTACT
        </h1>
      </div>

      {/* Form card overlapping the giant text */}
      <div className="relative z-20 -mt-[8vw] md:-mt-[6vw] px-4 md:px-8 pb-24 flex justify-center">
        <div className="w-full max-w-4xl bg-[#0C2A92] p-8 md:p-12 lg:p-16 shadow-2xl">

          {/* REACH US label */}
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 mb-10">
            Reach Us
          </p>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">

              {/* Left column - inputs */}
              <div className="w-full md:w-1/2 flex flex-col gap-0">
                <div className="py-5 border-b border-white/20">
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-transparent text-[16px] text-white placeholder-white/50 focus:outline-none font-medium"
                    placeholder="First Name"
                  />
                </div>
                <div className="py-5 border-b border-white/20">
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-transparent text-[16px] text-white placeholder-white/50 focus:outline-none font-medium"
                    placeholder="Last Name"
                  />
                </div>
                <div className="py-5 border-b border-white/20">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent text-[16px] text-white placeholder-white/50 focus:outline-none font-medium"
                    placeholder="Email"
                  />
                </div>
                <div className="py-5 border-b border-white/20 md:border-b-0 relative flex items-center">
                  <select
                    name="userType"
                    className="w-full bg-transparent text-[16px] text-white/50 focus:outline-none font-medium appearance-none cursor-pointer pr-8 [&>option]:text-slate-900 [&>option]:bg-white"
                  >
                    <option value="client">Potential Client</option>
                    <option value="intern">Student Applicant</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-0 pointer-events-none text-white/50">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right column - message */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="py-5 border-b border-white/20 flex-1">
                  <textarea
                    name="message"
                    rows={8}
                    className="w-full h-full bg-transparent text-[16px] text-white placeholder-white/50 focus:outline-none font-medium resize-none"
                    placeholder="Type your message here"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-10 gap-6">
              
              {/* Consent checkbox */}
              <label className="flex items-start gap-3 cursor-pointer max-w-xs">
                <input type="checkbox" className="mt-1 accent-white w-4 h-4 flex-shrink-0" />
                <span className="text-[12px] text-white/50 leading-relaxed">
                  I give Zynkk permission to contact me at this email address.
                </span>
              </label>

              {/* Status messages + Send button */}
              <div className="flex items-center gap-4">
                {errorMsg && (
                  <span className="text-[11px] text-red-300 font-bold uppercase tracking-widest">
                    {errorMsg}
                  </span>
                )}
                {isSuccess && (
                  <span className="text-[11px] text-emerald-300 font-bold uppercase tracking-widest">
                    Sent!
                  </span>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="border border-white/40 text-white text-[13px] font-bold tracking-widest uppercase px-8 py-3 rounded-full hover:bg-white hover:text-[#0C2A92] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? "Sending..." : "Send"}
                  {!isLoading && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
