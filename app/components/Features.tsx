"use client";

export default function Features() {
  const items = [
    {
      title: "100% Guaranteed Match",
      description:
        "No complex screening rounds or rejection letters. If you opt into our platform, you will be assigned a verified remote internship matching your track.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "border-cyan-500/20",
    },
    {
      title: "Real Industry Projects",
      description:
        "Work on practical, production-level codebases. Solve actual tasks, use version control (Git), and participate in peer code reviews.",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "border-purple-500/20",
    },
    {
      title: "1-on-1 Senior Mentorship",
      description:
        "Never get stuck. Access weekly office hours and live chat support with experienced engineers and designers who guide your code quality.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "border-cyan-500/20",
    },
    {
      title: "Verifiable Certifications",
      description:
        "Receive a cryptographically verifiable internship certificate, a personalized letter of recommendation, and a showcase-ready portfolio.",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "border-purple-500/20",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] relative">
      {/* Decorative Orbs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Core Program Advantages
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Everything you need to secure your next tech role.
          </p>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            We provide the framework, direction, and support. All we need from you is the commitment to build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="glass glass-glow p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
