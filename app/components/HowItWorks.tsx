"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Opt-In & Register",
      description:
        "Fill out the quick 3-step application. Select your preferred track, let us know your availability, and secure your spot in our upcoming cohort.",
      badge: "Fast Onboarding",
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "Our system automatically matches your skills and track with a live project. You will receive an email invitation to your Slack workspace and git repository.",
      badge: "Within 24 Hours",
    },
    {
      number: "03",
      title: "Build and Mentor",
      description:
        "Build modern web applications, resolve tickets, and merge pull requests. Attend weekly stand-ups and office hours with your senior tech mentor.",
      badge: "Real-world Workflow",
    },
    {
      number: "04",
      title: "Earn Certification",
      description:
        "Pass the project guidelines, receive your verifiable cryptographically signed certificate, get a personalized recommendation letter, and reference links.",
      badge: "Graduate",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08080f] relative">
      <div className="absolute left-0 bottom-1/4 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Your Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Four Simple Steps to Graduation
          </p>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            We've streamlined the process. No tedious resumes, no initial interviews. Just opt in and start learning.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 opacity-35" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Step Bubble */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-[15px] sm:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-[#050508] border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                      <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="w-full sm:w-[45%] pl-16 sm:pl-0 sm:px-6">
                    <div className="glass p-6 sm:p-8 rounded-3xl relative border border-white/5 hover:border-white/10 transition-all duration-300">
                      {/* Step Number Indicator */}
                      <span className="absolute top-4 right-6 text-4xl font-extrabold text-white/5">
                        {step.number}
                      </span>

                      <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3">
                        {step.badge}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Empty space for desktop alignment */}
                  <div className="hidden sm:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
