"use client";

import { useState, useEffect, useRef } from "react";

interface OptInFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OptInForm({ isOpen, onClose }: OptInFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    track: "",
    name: "",
    email: "",
    phone: "",
    experience: "",
    availability: "",
    consent: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tracks = [
    { id: "frontend", title: "Frontend Development", desc: "React, Next.js, CSS", icon: "💻" },
    { id: "backend", title: "Backend Development", desc: "Node.js, Postgres, APIs", icon: "⚙️" },
    { id: "fullstack", title: "Full Stack Engineering", desc: "React + Node + Databases", icon: "🚀" },
    { id: "uiux", title: "UI/UX Product Design", desc: "Figma, Wireframing, UX Research", icon: "🎨" },
    { id: "datascience", title: "Data Science & AI", desc: "Python, ML, Data Analytics", icon: "📊" },
    { id: "marketing", title: "Digital Marketing & Growth", desc: "SEO, SEM, Copywriting", icon: "📈" },
  ];

  const handleSelectTrack = (trackId: string) => {
    setFormData({ ...formData, track: trackId });
    setErrors({ ...errors, track: "" });
    setStep(2);
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.experience) newErrors.experience = "Please select your education level/background";
    if (!formData.availability) newErrors.availability = "Please select your weekly availability";
    if (!formData.consent) newErrors.consent = "You must agree to the opt-in program terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      track: "",
      name: "",
      email: "",
      phone: "",
      experience: "",
      availability: "",
      consent: false,
    });
    setErrors({});
    setStep(1);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full sm:max-w-lg md:max-w-xl h-dvh sm:h-auto sm:max-h-[90dvh] flex flex-col bg-[#0b0b14] sm:rounded-3xl border-t sm:border border-white/10 shadow-2xl z-10 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#0b0b14]/50 backdrop-blur sticky top-0 z-20">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              zynkk Onboarding
            </h2>
            {isSuccess ? null : (
              <p className="text-xs text-zinc-400 mt-0.5">Step {step} of 3</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="w-full h-1 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 pb-24 sm:pb-8 no-scrollbar">
          {isSuccess ? (
            /* SUCCESS SCREEN */
            <div className="text-center py-8 px-4 flex flex-col items-center justify-center animate-fade-in">
              <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 border border-cyan-400/30 animate-pulse">
                <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">You're Opted In!</h3>
              <p className="text-sm text-zinc-300 max-w-sm mb-6">
                Congratulations, <span className="text-cyan-400 font-semibold">{formData.name}</span>! Your request is received. We are matching you with an internship in <span className="text-purple-400 font-semibold">{tracks.find(t => t.id === formData.track)?.title}</span>.
              </p>

              <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-5 mb-8 text-left space-y-4">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Next Steps</h4>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <p className="text-xs text-zinc-300">We will verify your email (<span className="text-white font-medium">{formData.email}</span>) and send a validation link.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <p className="text-xs text-zinc-300">Our team matches your credentials with active projects within 24-48 hours.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <p className="text-xs text-zinc-300">Accept the match and attend the kick-off onboarding call.</p>
                </div>
              </div>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => {
                    resetForm();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Opt In Another
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs cursor-pointer transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: CHOOSE TRACK */
            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Select Your Interest Track</h3>
                <p className="text-sm text-zinc-400">Choose the internship path you wish to opt into.</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {tracks.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleSelectTrack(t.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                      formData.track === t.id
                        ? "bg-cyan-500/10 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        : "bg-white/5 border-2 border-white/5 hover:border-white/15"
                    }`}
                  >
                    <span className="text-3xl">{t.icon}</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{t.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : step === 2 ? (
            /* STEP 2: PERSONAL INFO */
            <form onSubmit={handleNextStep2} className="space-y-5">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Tell Us About Yourself</h3>
                <p className="text-sm text-zinc-400">Please provide your contact details so we can reach you.</p>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      errors.name ? "border-rose-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      errors.email ? "border-rose-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="+1 234 567 8900"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      errors.phone ? "border-rose-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm cursor-pointer transition-all"
                >
                  Continue
                </button>
              </div>
            </form>
          ) : (
            /* STEP 3: EXPERIENCE & CONSENT */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Academic Details & Setup</h3>
                <p className="text-sm text-zinc-400">Complete the final details to apply for matching.</p>
              </div>

              <div className="space-y-4">
                {/* Academic/Background Selector */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Current Background
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "student", label: "Student" },
                      { key: "graduate", label: "Graduate" },
                      { key: "selftaught", label: "Self-taught" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, experience: item.key });
                          if (errors.experience) setErrors({ ...errors, experience: "" });
                        }}
                        className={`py-3 px-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          formData.experience === item.key
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-400"
                            : "bg-white/5 border-white/10 text-zinc-300 hover:border-white/20"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  {errors.experience && <p className="text-xs text-rose-500 mt-1">{errors.experience}</p>}
                </div>

                {/* Weekly Availability */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Weekly Commitment
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: "parttime", label: "Part-time (10-20 hrs)" },
                      { key: "fulltime", label: "Full-time (30-40 hrs)" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, availability: item.key });
                          if (errors.availability) setErrors({ ...errors, availability: "" });
                        }}
                        className={`py-3 px-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          formData.availability === item.key
                            ? "bg-purple-500/10 border-purple-400 text-purple-400"
                            : "bg-white/5 border-white/10 text-zinc-300 hover:border-white/20"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  {errors.availability && <p className="text-xs text-rose-500 mt-1">{errors.availability}</p>}
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData({ ...formData, consent: e.target.checked });
                        if (errors.consent) setErrors({ ...errors, consent: "" });
                      }}
                      className="mt-1 w-4 h-4 text-cyan-500 rounded bg-white/5 border-white/10 focus:ring-cyan-500 focus:ring-offset-[#0b0b14] bg-[#0b0b14]"
                    />
                    <span className="text-xs text-zinc-300 leading-normal">
                      I opt in to receive updates, matched project invites, and instructions via email/SMS. I understand that zynkk guarantees matching my profile with a projects coordinator.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-rose-500 mt-1">{errors.consent}</p>}
                </div>
              </div>

              {/* Navigation and Submit */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                  disabled={isSubmitting}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-grow-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit & Matching"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
