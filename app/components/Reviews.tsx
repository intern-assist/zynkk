"use client";

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Frontend Developer Intern",
      avatarBg: "from-cyan-500 to-indigo-500",
      initials: "SJ",
      text: "The structured workflow was a game-changer. I went from endless tutorials to committing real React code to a shared repository. My mentor's code reviews were incredibly detailed, helping me land my first junior developer role.",
      rating: 5,
      company: "Now at TechCorp",
    },
    {
      name: "Marcus Reynolds",
      role: "Full Stack Engineer Intern",
      avatarBg: "from-purple-500 to-pink-500",
      initials: "MR",
      text: "Working in a team with a product manager and designer taught me things you can't learn alone. Zynkk's matched internship felt exactly like working in a professional dev shop. Highly recommend opting in!",
      rating: 5,
      company: "Now Freelancing",
    },
    {
      name: "Kavya Murthy",
      role: "UI/UX Design Intern",
      avatarBg: "from-emerald-500 to-teal-500",
      initials: "KM",
      text: "I was matched with a frontend team to build a SaaS dashboard. Having developers actually code my Figma prototypes taught me so much about responsive layouts and component states. The verified certificate is on my LinkedIn!",
      rating: 5,
      company: "Now Product Designer",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] relative">
      <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Alumni Success
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Loved by Hundreds of Candidates
          </p>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            See how opting into zynkk's mentor-led internship program has transformed careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300 relative group"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.avatarBg} flex items-center justify-center font-bold text-xs text-white`}
                >
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                    {review.name}
                    <span className="inline-flex items-center" title="Verified Cohort Intern">
                      <svg className="w-4.5 h-4.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <span className="text-xs text-zinc-400">{review.role}</span>
                    <span className="hidden sm:inline text-zinc-600">•</span>
                    <span className="text-xs text-cyan-400 font-medium">{review.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
