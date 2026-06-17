"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function ApplyPage() {
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
          video.play().catch(() => { });
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
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
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
    <main className="relative w-full min-h-[100vh] flex flex-col font-sans pt-32 pb-24 px-6 overflow-x-hidden text-slate-900">

      {/* Background Video - Restored Zynkk Vibe */}
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

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16">

        {/* Left Side: Information - Restored Zynkk Vibe */}
        <div className="w-full lg:w-5/12 pt-8">

          <div className="flex items-center gap-6 text-slate-900 font-mono text-[13px] font-bold tracking-tight pb-2 mb-8 w-max">
            <span>[A] Apply</span>
            <span>[I] Internship</span>
          </div>

          <h1 className="text-[56px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Launch your <br /> tech career.
          </h1>
          <p className="text-[18px] text-slate-600 font-medium mb-10 leading-relaxed max-w-md">
            Join the Zynkk Academy to build enterprise-grade simulated projects, receive mentorship from senior engineers, and earn verifiable credentials.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border border-[#0C2A92]/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[#0C2A92]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold mb-1">Real-world Simulation</h3>
                <p className="text-slate-600 font-medium text-[15px] max-w-xs">Code in high-fidelity sandbox environments matching true production applications.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border border-[#0C2A92]/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[#0C2A92]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold mb-1">Verified Experience</h3>
                <p className="text-slate-600 font-medium text-[15px] max-w-xs">Earn legitimate credentials to showcase your readiness to top recruiters.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-transparent border-0 rounded-none p-4 md:p-8">

            <form className="w-full flex flex-col gap-12" onSubmit={handleSubmit}>

              {/* Section 1: Personal Information */}
              <div className="flex flex-col gap-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-slate-500 font-mono text-[14px] font-medium tracking-wider">01</span>
                  <h2 className="text-[24px] md:text-[28px] font-bold text-[#0a0f24] tracking-wide uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                    Personal Information
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">First Name</label>
                      <input type="text" name="firstName" required className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="John" />
                    </div>
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Last Name</label>
                      <input type="text" name="lastName" required className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Email Address</label>
                      <input type="email" name="email" required className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="johndoe@gmail.com" />
                    </div>
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Whatsapp Number</label>
                      <input type="tel" name="phone" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">City</label>
                      <input type="text" name="city" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="Enter your city" />
                    </div>
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Age</label>
                      <input type="number" name="age" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="21" />
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">College / Institution</label>
                      <input type="text" name="college" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="Name of your university" />
                    </div>
                    <div className="w-full relative pr-0 md:pr-6">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Year of Study</label>
                      <select name="yearOfStudy" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] focus:outline-none focus:border-[#0a0f24] transition-colors appearance-none cursor-pointer">
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Graduated">Graduated</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Application Details */}
              <div className="flex flex-col gap-8 mt-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-slate-500 font-mono text-[14px] font-medium tracking-wider">02</span>
                  <h2 className="text-[24px] md:text-[28px] font-bold text-[#0a0f24] tracking-wide uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                    Role Selection
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Target Role</label>
                      <select name="role" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] focus:outline-none focus:border-[#0a0f24] transition-colors appearance-none cursor-pointer">
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                        <option value="uiux">UI/UX Designer</option>
                        <option value="aiml">AI & Machine Learning Engineer</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Portfolio / GitHub URL</label>
                      <input type="url" name="portfolio" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors" placeholder="https://..." />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-2">
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Resume / CV</label>
                      <input type="file" name="resume" accept=".pdf,.doc,.docx" className="w-full bg-transparent border-b border-slate-300 pb-2 text-[14px] text-[#0a0f24] file:mr-4 file:py-1 file:px-3 file:rounded-none file:border-0 file:text-[10px] file:font-bold file:uppercase file:tracking-widest file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300 focus:outline-none focus:border-[#0a0f24] transition-colors cursor-pointer" />
                    </div>
                    <div className="w-full relative">
                      <label className="block text-[10px] text-slate-600 font-bold mb-2 uppercase tracking-widest">Why Zynkk?</label>
                      <textarea name="whyZynkk" rows={2} className="w-full bg-transparent border-b border-slate-300 pb-2 text-[16px] text-[#0a0f24] placeholder-slate-400 focus:outline-none focus:border-[#0a0f24] transition-colors resize-none" placeholder="Briefly tell us what you hope to achieve..."></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="bg-[#5c0d11] text-white border border-[#5c0d11] text-[12px] font-bold uppercase tracking-widest p-5 text-center mt-2 shadow-2xl">
                  {errorMsg}
                </div>
              )}

              {isSuccess && (
                <div className="bg-[#0a0f24] text-white border border-[#0a0f24] text-[12px] font-bold uppercase tracking-widest p-5 text-center mt-2 shadow-2xl">
                  Application sent successfully! We will be in touch soon.
                </div>
              )}

              <div className="mt-4">
                <button type="submit" disabled={isLoading} className="w-full bg-[#0a0f24] text-white text-[14px] font-bold tracking-widest uppercase px-12 py-5 rounded-none hover:bg-black transition-all shadow-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
